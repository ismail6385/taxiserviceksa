import { NextRequest, NextResponse } from 'next/server';
import { sendLogged } from '@/lib/email-log';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { hasStructuredReturnLeg, getReturnRoute } from '@/lib/booking-validation';
import { renderEmail, para, card, rows, highlight, buttons, whatsappUrl, whenText } from '@/lib/email-layout';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

async function appendEmailLog(bookingId: string, entry: string) {
    const { data } = await supabaseAdmin.from('bookings').select('internal_notes').eq('id', bookingId).single();
    const existing = data?.internal_notes || '';
    const updated = existing ? `${existing}\n${entry}` : entry;
    await supabaseAdmin.from('bookings').update({ internal_notes: updated }).eq('id', bookingId);
}

// Helper function to format booking ID
function formatBookingId(id: string | number | undefined): string {
    if (!id) return 'N/A';
    return `#${String(id).slice(0, 8).toUpperCase()}`;
}



// Helper function to format date safely
function formatDate(date: string | Date | undefined): string {
    if (!date) return 'N/A';
    try {
        const dateObj = typeof date === 'string' ? new Date(date) : date;
        return dateObj.toLocaleString('en-US', { timeZone: 'Asia/Riyadh' });
    } catch {
        return String(date);
    }
}

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
        const ip = getClientIp(request);
        if (!checkRateLimit(`booking-email:${ip}`, 10, 60_000)) {
            return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
        }

        // This route is public (called by /api/booking/create right after a
        // booking is saved). It used to email whatever booking object it was
        // sent, so anyone could send branded emails with any text to any
        // address from our domain. Now only the booking id is used: the real
        // row is loaded from the database, and only a booking created in the
        // last 15 minutes that has not been emailed yet gets the emails.
        const body = await request.json().catch(() => null);
        const bookingId = body?.booking?.id || body?.bookingId;
        if (!bookingId || typeof bookingId !== 'string') {
            return NextResponse.json({ error: 'Missing booking id' }, { status: 400 });
        }
        const { data: booking } = await supabaseAdmin.from('bookings').select('*').eq('id', bookingId).single();
        if (!booking) {
            return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
        }
        const ageMinutes = (Date.now() - new Date(booking.created_at).getTime()) / 60000;
        // -5: tolerate a server clock a little behind the database clock.
        if (!(ageMinutes >= -5 && ageMinutes <= 15)) {
            return NextResponse.json({ error: 'Booking emails can only be sent right after the booking is made' }, { status: 409 });
        }
        if (/New (quote|delivery) request received/.test(booking.internal_notes || '')) {
            return NextResponse.json({ success: true, skipped: 'already sent', bookingId: booking.id });
        }
        const emailAdmin = process.env.ADMIN_EMAIL || 'booking@taxiserviceksa.com';

        const safeName     = escapeHtml(booking.customer_name);
        const safePickup   = escapeHtml(booking.pickup_location);
        const safeDest     = escapeHtml(booking.destination);
        const safeVehicle  = escapeHtml(booking.vehicle_type);
        const safeRequests = escapeHtml(booking.special_requests) || 'None';
        const safeFlightNumber = escapeHtml(booking.flight_number);
        const isDelivery = booking.booking_type === 'delivery';
        const itemTypeLabels: Record<string, string> = { bag_luggage: 'Bag / Luggage', documents: 'Documents', parcel: 'Parcel', flowers: 'Flowers', small_package: 'Small Package', other: 'Other' };
        const safeItemType = escapeHtml(itemTypeLabels[booking.item_type] || booking.item_type) || 'Item';
        const safeRecipientName = escapeHtml(booking.recipient_name) || '—';
        const safeRecipientPhone = escapeHtml(booking.recipient_phone) || '—';

        const hasReturn = hasStructuredReturnLeg(booking);
        const returnRoute = hasReturn ? getReturnRoute(booking) : null;
        const dateTime = whenText(booking.pickup_date, booking.pickup_time);
        const journeyRows: ([string, string] | null)[] = [
            ['Request ID', formatBookingId(booking.id)],
            ['Pickup', safePickup],
            ['Destination', safeDest],
            ['Date & Time', dateTime],
            hasReturn && returnRoute ? ['Return Route', `${escapeHtml(returnRoute.pickupLocation)} → ${escapeHtml(returnRoute.destination)}`] : null,
            hasReturn ? ['Return Date & Time', `${whenText(booking.return_date, booking.return_time)}${booking.return_date === booking.pickup_date ? ' (same day)' : ''}`] : null,
            !hasReturn && booking.has_return_trip ? ['Trip Type', 'Round Trip (return details to be confirmed)'] : null,
            ['Vehicle', safeVehicle],
            isDelivery ? ['Item', `${safeItemType} × ${booking.item_count || 1}`] : ['Passengers', `${booking.passengers ?? '—'}`],
            isDelivery ? ['Recipient', `${safeRecipientName} (${safeRecipientPhone})`] : null,
            safeFlightNumber ? ['Flight', safeFlightNumber] : null,
        ];
        const waText = `Hello, I want to discuss my booking.\n\n*Booking Details:*\n▶ ID: ${formatBookingId(booking.id)}\n▶ Name: ${booking.customer_name || ''}\n▶ Route: ${booking.pickup_location || ''} to ${booking.destination || ''}\n▶ Date: ${booking.pickup_date || 'TBC'}${booking.pickup_time ? ` at ${booking.pickup_time}` : ''}\n▶ Vehicle: ${booking.vehicle_type || ''}`;

        console.log('Sending emails for booking:', booking.id || 'new booking');

        // 1. Send email to customer. A failure here must not stop the admin
        // alert and the booking log below.
        await sendLogged(booking.id, isDelivery ? 'Delivery request confirmation' : 'Quote request confirmation', {
            to: booking.customer_email,
            subject: isDelivery ? 'Delivery Request Received - Taxi Service KSA' : 'Quotation Request Received - Taxi Service KSA',
            html: renderEmail({
                preheader: `We received your ${isDelivery ? 'delivery' : 'quotation'} request ${formatBookingId(booking.id)}. Our team will reply within 15-30 minutes.`,
                title: isDelivery ? 'Delivery Request Received' : 'Quotation Request Received',
                subtitle: `Reference ${formatBookingId(booking.id)}`,
                greeting: `Dear <strong>${safeName || 'Customer'}</strong>,`,
                blocks: [
                    para(`Thank you for contacting <strong>Taxi Service KSA</strong>. We have received your request and our team is reviewing the details to prepare our best rate for you.`),
                    card(isDelivery ? 'Delivery Details' : 'Journey Details', rows(journeyRows)),
                    highlight({ text: 'Our team will reply with your official quote by email or WhatsApp within 15–30 minutes.' }),
                    buttons([{ href: whatsappUrl(waText), label: '💬 Chat on WhatsApp', tone: 'whatsapp' }]),
                    para(`Need to change something? Simply reply to this email or write to <a href="mailto:info@taxiserviceksa.com" style="color:#0f172a;font-weight:700;">info@taxiserviceksa.com</a>.`, { muted: true, size: 14 }),
                ],
            }),
        }).catch((e) => console.error('Customer confirmation email failed:', e));

        // 2. Alert admin (sent from the booking@ identity so it arrives from/to
        // the mailbox the admin actually watches)
        await sendLogged(booking.id, 'New request alert (admin)', {
            to: emailAdmin,
            replyTo: booking.customer_email,
            fromIdentity: 'booking',
            subject: isDelivery ? `📦 New DELIVERY Request - ${safeName}` : `📋 New Quote Request - ${safeName}`,
            html: renderEmail({
                audience: 'internal',
                preheader: `${safeName} · ${booking.pickup_location || ''} → ${booking.destination || ''} · ${booking.pickup_date || 'date TBC'}`,
                title: isDelivery ? 'New Delivery Request' : 'New Quotation Request',
                subtitle: formatBookingId(booking.id),
                blocks: [
                    card(isDelivery ? 'Sender' : 'Customer', rows([
                        ['Name', safeName],
                        ['Email', escapeHtml(booking.customer_email) ? `<a href="mailto:${escapeHtml(booking.customer_email)}">${escapeHtml(booking.customer_email)}</a>` : '—'],
                        ['Phone', escapeHtml(booking.customer_phone) ? `<a href="tel:${escapeHtml(booking.customer_phone)}">${escapeHtml(booking.customer_phone)}</a>` : '—'],
                    ])),
                    card('Trip', rows([
                        ...journeyRows.filter(r => r && r[0] !== 'Request ID'),
                        !isDelivery ? ['Luggage', `${booking.luggage ?? 0} bags`] : null,
                        ['Special Requests', safeRequests],
                    ])),
                    buttons([
                        { href: 'https://taxiserviceksa.com/admin/bookings/', label: 'Open Admin Bookings', tone: 'dark' },
                        booking.customer_phone ? { href: `https://wa.me/${String(booking.customer_phone).replace(/\D/g, '')}`, label: 'WhatsApp Customer', tone: 'whatsapp' } : null,
                    ]),
                ],
            }),
        }).catch((e) => console.error('Admin alert email failed:', e));

        // 3. Also log it as an internal note so it still shows in the
        // Notifications page even if the admin alert email above fails.
        const logTime = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Riyadh', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
        if (booking.id) {
            await appendEmailLog(booking.id, `📧 [${logTime}] ${isDelivery ? 'New delivery request received' : 'New quote request received'}`).catch(() => {});
        }

        return NextResponse.json({
            success: true,
            bookingId: booking.id || 'pending'
        });
    } catch (error: any) {
        console.error('Email API Error:', error);
        return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 });
    }
}
