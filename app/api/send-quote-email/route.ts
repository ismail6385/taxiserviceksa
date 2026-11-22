import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail-server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { getAdminSession } from '@/lib/admin-auth';
import { hasStructuredReturnLeg, getReturnRoute } from '@/lib/booking-validation';
import { readVehicleOptions, TRIP_LABEL, formatOptionPrice } from '@/lib/vehicle-options';
import { renderEmail, para, card, rows, highlight, buttons, dataTable, list, whatsappUrl, whenText, niceTime } from '@/lib/email-layout';

async function appendEmailLog(bookingId: string, entry: string) {
    const { data } = await supabaseAdmin.from('bookings').select('internal_notes').eq('id', bookingId).single();
    const existing = data?.internal_notes || '';
    const updated = existing ? `${existing}\n${entry}` : entry;
    await supabaseAdmin.from('bookings').update({ internal_notes: updated }).eq('id', bookingId);
}

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function escapeHtml(str: string | undefined | null): string {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

export async function POST(request: NextRequest) {
    try {
        const session = await getAdminSession(request);
        if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const ip = getClientIp(request);
        if (!checkRateLimit(`quote-email:${ip}`, 10, 60_000)) {
            return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
        }

        const body = await request.json();
        const { booking, currency, additionalEmails } = body;

        // Several vehicle quotes for the same trip, none chosen yet: the email
        // shows them side by side instead of one total price.
        const vehicleOptions = readVehicleOptions(booking?.vehicle_options).filter(o => o.price > 0);
        const showOptions = vehicleOptions.length > 0 && !vehicleOptions.some(o => o.selected);

        if (!booking || !booking.customer_email || (!booking.total_price && !showOptions)) {
            return NextResponse.json({ error: 'Missing booking data or price' }, { status: 400 });
        }

        const cc: string[] = Array.isArray(additionalEmails)
            ? additionalEmails.filter((e: string) => e && e.includes('@'))
            : [];

        const refId      = `#${String(booking.id).slice(0, 8).toUpperCase()}`;
        const curr       = currency || booking.currency || 'SAR';
        const price      = Number(booking.total_price).toFixed(2);

        const safeName    = escapeHtml(booking.customer_name);
        const safePickup  = escapeHtml(booking.pickup_location);
        const safeDest    = escapeHtml(booking.destination);
        const safeVehicle = escapeHtml(booking.vehicle_type);
        const isDelivery  = booking.booking_type === 'delivery';
        const itemTypeLabels: Record<string, string> = { bag_luggage: 'Bag / Luggage', documents: 'Documents', parcel: 'Parcel', flowers: 'Flowers', small_package: 'Small Package', other: 'Other' };
        const hasReturn = hasStructuredReturnLeg(booking);
        const returnRoute = hasReturn ? getReturnRoute(booking) : null;
        const money = (n: number) => Number(n).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });

        const itineraryLegs: { date: string; time: string; pickup: string; dropoff: string }[] = Array.isArray(booking.itinerary_legs) ? booking.itinerary_legs : [];
        const additionalStops: { time?: string | null; location: string }[] = Array.isArray(booking.additional_stops) ? booking.additional_stops : [];

        const journeyRows: ([string, string] | null)[] = [
            ['Quote Ref', refId],
            ['Pickup', safePickup],
            ['Destination', safeDest],
            ['Date & Time', whenText(booking.pickup_date, booking.pickup_time)],
            hasReturn && returnRoute ? ['Return Route', `${escapeHtml(returnRoute.pickupLocation)} → ${escapeHtml(returnRoute.destination)}`] : null,
            hasReturn ? ['Return Date & Time', `${whenText(booking.return_date, booking.return_time)}${booking.return_date === booking.pickup_date ? ' (same day)' : ''}`] : null,
            !hasReturn && booking.has_return_trip ? ['Trip Type', 'Round Trip'] : null,
            ['Vehicle', showOptions ? `${vehicleOptions.length} options, see below` : safeVehicle],
            isDelivery
                ? ['Item', `${escapeHtml(itemTypeLabels[booking.item_type] || booking.item_type) || 'Item'} × ${booking.item_count || 1}`]
                : ['Passengers', `${booking.passengers ?? '—'}`],
            isDelivery ? ['Recipient', `${escapeHtml(booking.recipient_name) || '—'} (${escapeHtml(booking.recipient_phone) || '—'})`] : null,
        ];

        const itineraryHtml = itineraryLegs.length > 0 ? card('Full Itinerary', rows([
            [whenText(booking.pickup_date, booking.pickup_time).replace(/<[^>]+>/g, ''), `${safePickup} → ${safeDest}`],
            ...itineraryLegs.map((leg): [string, string] => [whenText(leg.date, leg.time).replace(/<[^>]+>/g, ''), `${escapeHtml(leg.pickup)} → ${escapeHtml(leg.dropoff)}`]),
        ])) : '';

        const additionalStopsHtml = additionalStops.length > 0
            ? card('Sites to Visit', list(additionalStops.map((stop) => `${stop.time ? `<strong>${niceTime(stop.time)}</strong> — ` : ''}${escapeHtml(stop.location)}`)))
            : '';

        const optionsHtml = card('Choose Your Vehicle',
            para(`These are <strong>alternative vehicle options for the same trip</strong>, not separate bookings. Please choose <strong>one</strong> option and let us know.`, { size: 14 })
            + dataTable(['#', 'Vehicle', 'Trip', 'Price'], vehicleOptions.map((o, i) => [
                `<strong>${i + 1}</strong>`,
                `<strong>${escapeHtml(o.vehicle)}</strong>${o.notes ? `<br><span style="font-size:12px;color:#6b7280;font-weight:400;">${escapeHtml(o.notes)}</span>` : ''}`,
                TRIP_LABEL[o.trip],
                escapeHtml(formatOptionPrice(o)),
            ]), { alignLastRight: true })
            + para('Prices are per vehicle and include fuel, tolls and parking.', { muted: true, size: 12 }));

        const priceHtml = highlight({
            label: 'Total Quote Price',
            big: `${escapeHtml(curr)} ${money(Number(booking.total_price))}`,
            sub: booking.deposit_amount
                ? `Includes fuel, tolls and parking · Advance ${escapeHtml(curr)} ${money(Number(booking.deposit_amount))} · Balance ${escapeHtml(curr)} ${money(Number(booking.total_price) - Number(booking.deposit_amount))}`
                : 'Includes fuel, tolls and parking',
        });

        const whatsappMsg = `Hello, I'd like to confirm my booking.\n\n*Quote Ref:* ${refId}\n*Route:* ${booking.pickup_location} → ${booking.destination}\n*Date:* ${booking.pickup_date || 'TBC'}${booking.pickup_time ? ` at ${niceTime(booking.pickup_time)}` : ''}${hasReturn && returnRoute ? `\n*Return Route:* ${returnRoute.pickupLocation} → ${returnRoute.destination}\n*Return:* ${booking.return_date}${booking.return_time ? ` at ${niceTime(booking.return_time)}` : ''}` : ''}\n${showOptions
            ? `*Vehicle options quoted:*\n${vehicleOptions.map((o, i) => `${i + 1}. ${o.vehicle} (${TRIP_LABEL[o.trip]}) ${formatOptionPrice(o)}`).join('\n')}\n\n*I choose option number:* `
            : `*Vehicle:* ${booking.vehicle_type}\n*Quote:* ${curr} ${price}`}`;

        const quoteHtml = renderEmail({
            preheader: showOptions
                ? `${vehicleOptions.length} vehicle options for ${booking.pickup_location || 'your trip'} → ${booking.destination || ''}. Valid for 48 hours.`
                : `Your quote ${refId}: ${curr} ${money(Number(booking.total_price))} for ${booking.pickup_location || 'your trip'} → ${booking.destination || ''}.`,
            title: 'Your Quote',
            subtitle: `Reference ${refId}`,
            greeting: `Dear <strong>${safeName || 'Customer'}</strong>,`,
            blocks: [
                para(`Thank you for choosing <strong>Taxi Service KSA</strong>. Here is your quote for the requested journey.${body.pdfBase64 ? ' The full quotation is attached as a PDF.' : ''}`),
                card('Journey Details', rows(journeyRows)),
                itineraryHtml,
                additionalStopsHtml,
                showOptions ? optionsHtml : priceHtml,
                para(`This quote is valid for <strong>48 hours</strong>. To confirm, tap a button below or simply reply to this email.`, { size: 14 }),
                buttons([
                    { href: `https://taxiserviceksa.com/booking/quote?ref=${String(booking.id).slice(0, 8)}`, label: showOptions ? '✅ Choose & Confirm Online' : '✅ Accept Quote Online', tone: 'primary' },
                    { href: whatsappUrl(whatsappMsg), label: '💬 Confirm on WhatsApp', tone: 'whatsapp' },
                ]),
            ],
        });

        // Build attachments array if PDF base64 was provided from the browser
        const attachments = body.pdfBase64 ? [{
            filename: body.pdfFilename || `Quotation-${refId}.pdf`,
            content: body.pdfBase64,
            encoding: 'base64',
        }] : undefined;

        // 1. Send quote to customer (+ CC additional emails)
        await sendMail({
            to: booking.customer_email,
            cc: cc.length ? cc : undefined,
            subject: `Your Quote ${refId} - Taxi Service KSA`,
            html: quoteHtml,
            attachments,
        });

        // Log email activity to booking (shows in Admin > Notifications instead of a separate admin email)
        const logTime = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Riyadh', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
        await appendEmailLog(booking.id, `📧 [${logTime}] Quote sent — ${showOptions ? `${vehicleOptions.length} vehicle options: ${vehicleOptions.map(o => `${o.vehicle} ${formatOptionPrice(o)}`).join(' / ')}` : `${curr} ${price}`}`).catch(() => {});

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Send Quote Email Error:', error);
        return NextResponse.json({ error: 'Failed to send quote email' }, { status: 500 });
    }
}
