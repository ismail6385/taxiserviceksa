import { NextRequest, NextResponse } from 'next/server';
import { ksaToday } from '@/lib/ksa-time';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { sendMail } from '@/lib/mail-server';
import { renderEmail, para, buttons, esc } from '@/lib/email-layout';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
    // Verify cron secret to prevent unauthorized calls
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const yesterdayStr = ksaToday(-1); // YYYY-MM-DD, Saudi date

    // A trip "concluded yesterday" if its trip_end_date was yesterday
    // (multi-day package), or — when there's no trip_end_date — its
    // pickup_date was yesterday (single-day trip).
    const { data: bookings, error } = await supabaseAdmin
        .from('bookings')
        .select('*')
        .or(`trip_end_date.eq.${yesterdayStr},and(trip_end_date.is.null,pickup_date.eq.${yesterdayStr})`)
        .in('status', ['confirmed', 'completed', 'in_progress'])
        .is('deleted_at', null)
        .eq('review_requested', false);

    if (error) {
        console.error('Review-request cron error:', error);
        return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }

    if (!bookings || bookings.length === 0) {
        return NextResponse.json({ message: 'No review requests to send', date: yesterdayStr });
    }

    let sent = 0;
    for (const booking of bookings) {
        if (!booking.customer_email) continue;

        try {
            await sendMail({
                to: booking.customer_email,
                subject: `⭐ How was your trip with Taxi Service KSA?`,
                html: renderEmail({
                    preheader: 'How was your trip? It takes less than a minute to tell us.',
                    title: "We'd Love Your Feedback",
                    subtitle: `${esc(booking.pickup_location)} → ${esc(booking.destination)}`,
                    greeting: `Dear <strong>${esc(booking.customer_name) || 'Customer'}</strong>,`,
                    blocks: [
                        para('Thank you for travelling with <strong>Taxi Service KSA</strong>. We hope your journey was comfortable and on time.'),
                        para('Would you share your experience? It takes less than a minute and helps other travellers choose with confidence.'),
                        buttons([
                            { href: 'https://taxiserviceksa.com/submit-review', label: '⭐ Leave a Review', tone: 'primary' },
                            { href: 'https://www.trustpilot.com/review/taxiserviceksa.com?utm_medium=trustbox&utm_source=ReviewCollector', label: 'Review on Trustpilot', tone: 'dark' },
                        ]),
                        para('Something not right? Just reply to this email and we will make it right.', { muted: true, size: 13 }),
                    ],
                }),
            });
            sent++;
            // Mark as requested to prevent duplicate emails
            const { error: markError } = await supabaseAdmin
                .from('bookings')
                .update({ review_requested: true })
                .eq('id', booking.id);

            if (markError) {
                console.error('Failed to mark review_requested:', markError);
            }
        } catch (err) {
            console.error(`Review request failed for booking ${booking.id}:`, err);
        }
    }

    return NextResponse.json({ success: true, sent, date: yesterdayStr });
}
