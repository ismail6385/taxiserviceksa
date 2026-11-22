import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail-server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { getAdminSession } from '@/lib/admin-auth';
import { hasStructuredReturnLeg, getReturnRoute } from '@/lib/booking-validation';
import { renderEmail, para, card, rows, buttons, whatsappUrl, whenText, esc } from '@/lib/email-layout';

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
        const { booking, pdfBase64, filename, currency, paymentStatus, paymentMethod, additionalEmails } = body;

        if (!booking || !pdfBase64) {
            return NextResponse.json({ error: 'Missing booking or PDF data' }, { status: 400 });
        }

        const cc: string[] = Array.isArray(additionalEmails)
            ? additionalEmails.filter((e: string) => e && e.includes('@'))
            : [];

        const refId = `#${String(booking.id).slice(0, 8).toUpperCase()}`;
        const curr = currency || 'SAR';
        const amount = booking.total_price?.toFixed(2) || '0.00';

        const e = (v: unknown) => esc(v);
        const money = (n: number) => `${e(curr)} ${Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        const hasReturn = hasStructuredReturnLeg(booking);
        const returnRoute = hasReturn ? getReturnRoute(booking) : null;
        const total = Number(booking.total_price || 0);
        const deposit = Number(booking.deposit_amount || 0);
        const isPaid = /^paid$/i.test(String(paymentStatus || ''));

        // 1. Send invoice to customer (+ CC additional emails)
        await sendMail({
            to: booking.customer_email,
            cc: cc.length ? cc : undefined,
            subject: `Your Invoice ${refId} - Taxi Service KSA`,
            html: renderEmail({
                preheader: `Invoice ${refId} for ${booking.pickup_location || 'your trip'} → ${booking.destination || ''}: ${curr} ${amount}. PDF attached.`,
                title: 'Your Invoice',
                subtitle: `Invoice ${refId}`,
                greeting: `Dear <strong>${e(booking.customer_name) || 'Customer'}</strong>,`,
                blocks: [
                    para(`Thank you for travelling with <strong>Taxi Service KSA</strong>. Your invoice is attached to this email as a PDF.`),
                    card('Booking Summary', rows([
                        ['Invoice Ref', refId],
                        ['Pickup', e(booking.pickup_location)],
                        ['Destination', e(booking.destination)],
                        ['Date & Time', whenText(booking.pickup_date, booking.pickup_time)],
                        hasReturn && returnRoute ? ['Return Route', `${e(returnRoute.pickupLocation)} → ${e(returnRoute.destination)}`] : null,
                        hasReturn ? ['Return Date & Time', whenText(booking.return_date, booking.return_time)] : null,
                        ['Vehicle', e(booking.vehicle_type)],
                        ['Payment Method', e(paymentMethod || 'Cash to Driver')],
                    ])),
                    card('Amount', rows([
                        ['Total', `<span style="font-size:16px;">${money(total)}</span>`],
                        deposit > 0 ? ['Deposit Paid', money(deposit)] : null,
                        deposit > 0 ? ['Balance Due', `<span style="font-size:16px;">${money(total - deposit)}</span>`] : null,
                        ['Payment Status', isPaid
                            ? '<span style="color:#047857;">✔ Paid</span>'
                            : `<span style="color:#b45309;">${e(paymentStatus || 'Unpaid')}</span>`],
                    ])),
                    para('Please keep the attached PDF for your records.', { muted: true, size: 13 }),
                    buttons([{ href: whatsappUrl(`Hello, I have a question about invoice ${refId}.`), label: '💬 Contact Us on WhatsApp', tone: 'whatsapp' }]),
                ],
            }),
            attachments: [
                {
                    filename: filename || `Invoice-${refId}.pdf`,
                    content: pdfBase64,
                },
            ],
        });

        // Log email activity to booking
        const logTime = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Riyadh', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
        await appendEmailLog(booking.id, `📧 [${logTime}] Invoice sent — ${curr} ${amount} | ${paymentStatus || 'Unpaid'}`).catch(() => {});

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Send Invoice Email Error:', error);
        return NextResponse.json({ error: 'Failed to send invoice email' }, { status: 500 });
    }
}
