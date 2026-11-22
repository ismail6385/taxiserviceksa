import { NextRequest, NextResponse } from 'next/server';
import { ksaToday } from '@/lib/ksa-time';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { sendMail } from '@/lib/mail-server';
import { renderEmail, para, card, rows, highlight, notice, buttons, esc, niceDate } from '@/lib/email-layout';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function formatTime12h(timeStr?: string): string {
    if (!timeStr) return '—';
    try {
        const parts = timeStr.split(':');
        if (parts.length < 2) return timeStr;
        let hours = parseInt(parts[0], 10);
        const minutes = parts[1];
        if (isNaN(hours)) return timeStr;
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return `${hours}:${minutes} ${ampm}`;
    } catch {
        return timeStr;
    }
}

export async function GET(request: NextRequest) {
    // Verify cron secret to prevent unauthorized calls
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const tomorrowStr = ksaToday(1); // YYYY-MM-DD, Saudi date

    // Fetch confirmed bookings for tomorrow that haven't been reminded yet
    const { data: bookings, error } = await supabaseAdmin
        .from('bookings')
        .select('*')
        .eq('pickup_date', tomorrowStr)
        .eq('status', 'confirmed')
        .is('deleted_at', null)
        .eq('reminder_sent', false);

    if (error) {
        console.error('Reminder cron error:', error);
        return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }

    if (!bookings || bookings.length === 0) {
        return NextResponse.json({ message: 'No reminders to send', date: tomorrowStr });
    }

    let sent = 0;
    for (const booking of bookings) {
        if (!booking.customer_email) continue;

        const refId = `#${String(booking.id).slice(0, 8).toUpperCase()}`;
        const pickupTimeDisplay = formatTime12h(booking.pickup_time);
        const whatsappMsg = encodeURIComponent(
            `Hello, I have a booking tomorrow.\n\n*Ref:* ${refId}\n*Route:* ${booking.pickup_location} → ${booking.destination}\n*Time:* ${pickupTimeDisplay}\n*Vehicle:* ${booking.vehicle_type}`
        );

        try {
            await sendMail({
                to: booking.customer_email,
                subject: `⏰ Reminder: Your Trip Tomorrow — ${pickupTimeDisplay}`,
                html: renderEmail({
                    preheader: `Reminder: your trip ${booking.pickup_location || ''} → ${booking.destination || ''} is tomorrow${booking.pickup_time ? ` at ${pickupTimeDisplay}` : ''}.`,
                    title: 'Your Trip is Tomorrow',
                    subtitle: `Booking ${refId}`,
                    greeting: `Dear <strong>${esc(booking.customer_name) || 'Customer'}</strong>,`,
                    blocks: [
                        para('This is a friendly reminder that your transfer with <strong>Taxi Service KSA</strong> is scheduled for <strong>tomorrow</strong>.'),
                        highlight({ label: 'Pickup Time', big: booking.pickup_time ? esc(pickupTimeDisplay) : 'To be confirmed', sub: niceDate(booking.pickup_date) }),
                        card('Trip Details', rows([
                            ['Booking Ref', refId],
                            ['Pickup', esc(booking.pickup_location)],
                            ['Destination', esc(booking.destination)],
                            ['Vehicle', esc(booking.vehicle_type)],
                            ['Passengers', `${booking.passengers ?? '—'}`],
                            booking.flight_number ? ['Flight', esc(booking.flight_number)] : null,
                            booking.driver_name ? ['Driver', `${esc(booking.driver_name)}${booking.driver_phone ? ` · <a href="tel:${esc(booking.driver_phone)}">${esc(booking.driver_phone)}</a>` : ''}`] : null,
                        ])),
                        notice('💡 <strong>Please be ready 10 minutes before pickup.</strong> Your driver will contact you on arrival.', 'warning'),
                        buttons([{ href: `https://wa.me/966575806733?text=${whatsappMsg}`, label: '💬 Contact Us on WhatsApp', tone: 'whatsapp' }]),
                    ],
                }),
            });
            sent++;
            // Mark reminder as sent to prevent duplicate emails
            const { error: markError } = await supabaseAdmin
                .from('bookings')
                .update({ reminder_sent: true })
                .eq('id', booking.id);

            if (markError) {
                console.error('Failed to mark reminder_sent:', markError);
            }
        } catch (err) {
            console.error(`Reminder failed for booking ${booking.id}:`, err);
        }
    }

    return NextResponse.json({ success: true, sent, date: tomorrowStr });
}
