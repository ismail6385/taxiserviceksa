import { NextRequest, NextResponse } from 'next/server';
import { sendLogged } from '@/lib/email-log';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { getAdminSession, isInternalRequest } from '@/lib/admin-auth';
import { renderEmail, para, card, rows, highlight, notice, buttons, whatsappUrl, whenText } from '@/lib/email-layout';

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
        // Called both from the admin browser UI (session cookie) and
        // server-to-server by /api/booking/accept-quote (internal secret).
        if (!isInternalRequest(request)) {
            const session = await getAdminSession(request);
            if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const ip = getClientIp(request);
        if (!checkRateLimit(`status-email:${ip}`, 10, 60_000)) {
            return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
        }

        const body = await request.json();
        const { bookingId, status, customerEmail, customerName, totalPrice, currency } = body;

        if (!bookingId || !status || !customerEmail) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const safeName = escapeHtml(customerName);
        const ref = `#${String(bookingId).slice(0, 8).toUpperCase()}`;
        let subject = '';
        let htmlContent = '';

        // Trip summary for the confirmation / on-the-way emails. Best effort:
        // the email still goes out if the lookup fails.
        let tripCard = '';
        if (status === 'confirmed' || status === 'in_progress') {
            const { data: b } = await supabaseAdmin
                .from('bookings')
                .select('pickup_location, destination, pickup_date, pickup_time, vehicle_type, passengers, driver_name, driver_phone, driver_plate, flight_number')
                .eq('id', bookingId)
                .single()
                .then((r: { data: Record<string, any> | null }) => r, () => ({ data: null }));
            if (b) {
                tripCard = card('Your Trip', rows([
                    ['Booking Ref', ref],
                    ['Pickup', escapeHtml(b.pickup_location)],
                    ['Destination', escapeHtml(b.destination)],
                    ['Date & Time', whenText(b.pickup_date, b.pickup_time)],
                    ['Vehicle', escapeHtml(b.vehicle_type)],
                    b.flight_number ? ['Flight', escapeHtml(b.flight_number)] : null,
                    b.driver_name ? ['Driver', `${escapeHtml(b.driver_name)}${b.driver_phone ? ` · <a href="tel:${escapeHtml(b.driver_phone)}">${escapeHtml(b.driver_phone)}</a>` : ''}`] : null,
                    b.driver_plate ? ['Plate No.', escapeHtml(b.driver_plate)] : null,
                ]));
            }
        }

        const greeting = `Dear <strong>${safeName || 'Customer'}</strong>,`;
        const contactButton = buttons([{ href: whatsappUrl(`Hello, about my booking ${ref}.`), label: '💬 WhatsApp Us', tone: 'whatsapp' }]);

        switch (status) {
            case 'quote_sent': {
                const curr = currency || 'SAR';
                const price = totalPrice ? `${escapeHtml(curr)} ${Number(totalPrice).toLocaleString('en-US', { maximumFractionDigits: 2 })}` : null;
                subject = `💰 Your Quote is Ready - Taxi Service KSA`;
                htmlContent = renderEmail({
                    preheader: `Your quote ${ref} is ready${price ? `: ${price}` : ''}. Valid for 48 hours.`,
                    title: 'Your Quote is Ready',
                    subtitle: `Booking ${ref}`,
                    greeting,
                    blocks: [
                        para(`Thank you for choosing <strong>Taxi Service KSA</strong>. Your quote for booking <strong>${ref}</strong> is ready.`),
                        price ? highlight({ label: 'Total Quote Price', big: price, sub: 'Includes fuel, tolls and parking' }) : '',
                        para('This quote is valid for <strong>48 hours</strong>. Tap below to accept and confirm your booking.', { size: 14 }),
                        buttons([
                            { href: `https://taxiserviceksa.com/booking/quote?ref=${String(bookingId).slice(0, 8)}`, label: '✅ Accept Quote Online', tone: 'primary' },
                            { href: whatsappUrl(`Hello, I'd like to confirm my booking ${ref}.`), label: '💬 Confirm on WhatsApp', tone: 'whatsapp' },
                        ]),
                    ],
                });
                break;
            }
            case 'in_progress':
                subject = '🚗 Your Driver is On the Way - Taxi Service KSA';
                htmlContent = renderEmail({
                    preheader: `Your driver for booking ${ref} is on the way to your pickup point.`,
                    title: 'Your Driver is On the Way',
                    subtitle: `Booking ${ref}`,
                    greeting,
                    blocks: [
                        notice('<strong>Driver en route.</strong> Please be ready at your pickup point.', 'success'),
                        tripCard,
                        para('Need to reach us? Reply to this email or message us on WhatsApp.', { muted: true, size: 14 }),
                        contactButton,
                    ],
                });
                break;
            case 'confirmed':
                subject = '✅ Booking Confirmed - Taxi Service KSA';
                htmlContent = renderEmail({
                    preheader: `Your booking ${ref} is confirmed.`,
                    title: 'Booking Confirmed',
                    subtitle: `Booking ${ref}`,
                    greeting,
                    blocks: [
                        notice('✔ <strong>Your booking is confirmed.</strong> Your vehicle and driver are reserved.', 'success'),
                        para('Your driver will be at the pickup location at the agreed time. We will let you know when they are on the way.'),
                        tripCard,
                        para('Any change to the time or pickup? Just reply to this email or message us on WhatsApp.', { muted: true, size: 14 }),
                        contactButton,
                    ],
                });
                break;
            case 'cancelled':
                subject = 'Booking Cancellation - Taxi Service KSA';
                htmlContent = renderEmail({
                    preheader: `Your booking ${ref} has been cancelled.`,
                    title: 'Booking Cancelled',
                    subtitle: `Booking ${ref}`,
                    greeting,
                    blocks: [
                        para(`Your booking <strong>${ref}</strong> has been <strong>cancelled</strong>.`),
                        para('If this is a mistake or you would like to rebook another date, reply to this email or message us on WhatsApp and we will arrange it.'),
                        contactButton,
                    ],
                });
                break;
            case 'completed':
                subject = '🌟 Your Trip with Taxi Service KSA';
                htmlContent = renderEmail({
                    preheader: 'Thank you for travelling with us. How was your trip?',
                    title: 'Thank You for Travelling With Us',
                    subtitle: `Booking ${ref}`,
                    greeting,
                    blocks: [
                        para('Thank you for choosing <strong>Taxi Service KSA</strong> for your recent journey. We hope everything went smoothly.'),
                        para('Your feedback helps other travellers and helps us improve. It takes less than a minute.'),
                        buttons([{ href: 'https://www.trustpilot.com/review/taxiserviceksa.com', label: '⭐ Leave a Review on Trustpilot', tone: 'dark' }]),
                    ],
                });
                break;
            default:
                return NextResponse.json({ message: 'No email sent for this status' });
        }

        await sendLogged(bookingId, 'Status email', {
            to: customerEmail,
            subject,
            html: htmlContent
        }, status.charAt(0).toUpperCase() + status.slice(1).replace(/_/g, ' '));


        return NextResponse.json({ success: true });

    } catch (error: any) {
        console.error('Error sending status email:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
