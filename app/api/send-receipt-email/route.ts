import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail-server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { getAdminSession } from '@/lib/admin-auth';
import { hasStructuredReturnLeg, getReturnRoute } from '@/lib/booking-validation';
import { renderEmail, para, card, rows, buttons, whatsappUrl, whenText, esc } from '@/lib/email-layout';
import { formatTime12h } from '@/lib/format-time';

async function appendEmailLog(bookingId: string, entry: string) {
    const { data } = await supabaseAdmin.from('bookings').select('internal_notes').eq('id', bookingId).single();
    const existing = data?.internal_notes || '';
    const updated = existing ? `${existing}\n${entry}` : entry;
    await supabaseAdmin.from('bookings').update({ internal_notes: updated }).eq('id', bookingId);
}

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
    try {
        const session = await getAdminSession(request);
        if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const body = await request.json();
        const { booking, pdfBase64, filename, currency, paymentMethod, amountPaid, textOnly } = body;

        if (!booking) {
            return NextResponse.json({ error: 'Missing booking data' }, { status: 400 });
        }
        if (!textOnly && !pdfBase64) {
            return NextResponse.json({ error: 'Missing PDF data' }, { status: 400 });
        }

        const refId = `#${String(booking.id).slice(0, 8).toUpperCase()}`;
        const curr = currency || 'SAR';
        const amount = amountPaid ?? booking.total_price?.toFixed(2) ?? '0.00';

        const e = (v: unknown) => esc(v);
        const hasReturn = hasStructuredReturnLeg(booking);
        const returnRoute = hasReturn ? getReturnRoute(booking) : null;
        const shownAmount = `${e(curr)} ${Number(amount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

        await sendMail({
            to: booking.customer_email,
            subject: `✅ Payment Receipt ${refId} - Taxi Service KSA`,
            html: renderEmail({
                preheader: `Payment received: ${curr} ${amount} for booking ${refId}. Thank you!`,
                title: 'Payment Receipt',
                subtitle: `Receipt ${refId} · Payment received`,
                greeting: `Dear <strong>${e(booking.customer_name) || 'Customer'}</strong>,`,
                blocks: [
                    para(`Thank you for your payment. This confirms that your trip with <strong>Taxi Service KSA</strong> is paid and confirmed.`),
                    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 18px;border-collapse:separate;"><tr><td style="background:#ecfdf5;border:2px solid #22c55e;border-radius:12px;padding:18px;text-align:center;">
<p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#15803d;font-weight:700;">Amount Paid</p>
<p class="big" style="margin:0;font-size:32px;line-height:1.2;font-weight:800;color:#15803d;">${shownAmount}</p>
<p style="margin:6px 0 0;font-size:12px;color:#15803d;font-weight:700;">✔ PAYMENT CONFIRMED</p>
</td></tr></table>`,
                    card('Trip Details', rows([
                        ['Receipt Ref', refId],
                        ['Pickup', e(booking.pickup_location)],
                        ['Destination', e(booking.destination)],
                        ['Date & Time', whenText(booking.pickup_date, booking.pickup_time)],
                        hasReturn && returnRoute ? ['Return Route', `${e(returnRoute.pickupLocation)} → ${e(returnRoute.destination)}`] : null,
                        hasReturn ? ['Return Date & Time', whenText(booking.return_date, booking.return_time)] : null,
                        ['Vehicle', e(booking.vehicle_type)],
                        ['Payment Method', e(paymentMethod || 'Cash to Driver')],
                    ])),
                    para(textOnly ? 'This email confirms your payment.' : 'The PDF receipt is attached. Please keep it for your records.', { muted: true, size: 13 }),
                    buttons([{ href: whatsappUrl(`Hello, about my receipt ${refId}.`), label: '💬 Contact Us on WhatsApp', tone: 'whatsapp' }]),
                ],
            }),
            ...((!textOnly && pdfBase64) ? {
                attachments: [{ filename: filename || `Receipt-${refId}.pdf`, content: pdfBase64 }],
            } : {}),
        });

        const logTime = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Riyadh', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
        await appendEmailLog(booking.id, `🧾 [${logTime}] Receipt sent — ${curr} ${amount} | ${paymentMethod || 'Cash'}`).catch(() => {});

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Send Receipt Email Error:', error);
        return NextResponse.json({ error: 'Failed to send receipt email' }, { status: 500 });
    }
}
