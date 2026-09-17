import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail-server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { getAdminSession } from '@/lib/admin-auth';
import { hasStructuredReturnLeg, getReturnRoute } from '@/lib/booking-validation';
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

        const returnLegLine = hasStructuredReturnLeg(booking)
            ? `<p style="margin: 5px 0;"><strong>Return Route:</strong> ${getReturnRoute(booking).pickupLocation} → ${getReturnRoute(booking).destination}</p><p style="margin: 5px 0;"><strong>Return Date/Time:</strong> ${booking.return_date} at ${formatTime12h(booking.return_time)}${booking.return_date === booking.pickup_date ? ' (same day)' : ''}</p>`
            : '';

        await sendMail({
            to: booking.customer_email,
            subject: `✅ Payment Receipt ${refId} - Taxi Service KSA`,
            html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
                <div style="background-color: #000; padding: 25px; text-align: center; border-radius: 10px 10px 0 0;">
                    <h1 style="margin: 0; color: #C6FF00; text-transform: uppercase; letter-spacing: 2px;">Payment Receipt</h1>
                    <p style="margin: 8px 0 0; color: #aaa; font-size: 13px;">Payment Successfully Received</p>
                </div>
                <div style="padding: 30px; border: 1px solid #eee; border-top: none; border-radius: 0 0 10px 10px; background-color: #fff;">
                    <p style="font-size: 16px;">Dear <strong>${booking.customer_name}</strong>,</p>
                    <p>Thank you for your payment. Please find your official payment receipt attached. This confirms that your trip with <strong>Taxi Service KSA</strong> is fully paid and confirmed.</p>

                    <div style="background-color: #f0fff4; border: 2px solid #22c55e; border-radius: 12px; padding: 20px; margin: 25px 0; text-align: center;">
                        <p style="margin: 0 0 4px; font-size: 11px; color: #16a34a; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">Amount Paid</p>
                        <p style="margin: 0; font-size: 36px; font-weight: 900; color: #15803d;">${curr} ${amount}</p>
                        <p style="margin: 8px 0 0; font-size: 12px; color: #16a34a; font-weight: bold;">✓ PAYMENT CONFIRMED</p>
                    </div>

                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 12px; margin: 20px 0; border: 1px solid #ebedf0;">
                        <h3 style="margin-top: 0; color: #000; border-bottom: 2px solid #C6FF00; padding-bottom: 8px; display: inline-block;">Trip Details</h3>
                        <p style="margin: 10px 0;"><strong>Receipt Ref:</strong> ${refId}</p>
                        <p style="margin: 5px 0;"><strong>Pickup:</strong> ${booking.pickup_location}</p>
                        <p style="margin: 5px 0;"><strong>Destination:</strong> ${booking.destination}</p>
                        <p style="margin: 5px 0;"><strong>Date/Time:</strong> ${booking.pickup_date} at ${formatTime12h(booking.pickup_time)}</p>
                        ${returnLegLine}
                        <p style="margin: 5px 0;"><strong>Vehicle:</strong> ${booking.vehicle_type}</p>
                        <p style="margin: 5px 0;"><strong>Payment Method:</strong> ${paymentMethod || 'Cash to Driver'}</p>
                    </div>

                    <p style="font-size: 14px; color: #666;">${textOnly ? 'This email confirms your payment. Your receipt details are above.' : 'The PDF receipt is attached. Please save it for your records.'}</p>

                    <div style="text-align: center; margin: 30px 0;">
                        <a href="https://wa.me/966575806733" style="background-color: #25D366; color: white; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 30px; display: inline-block; font-size: 16px;">💬 Contact Us on WhatsApp</a>
                    </div>

                    <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                    <p style="font-size: 12px; color: #999; text-align: center;">Taxi Service KSA • Premium Chauffeur &amp; Private Transport Service</p>
                </div>
            </div>
            `,
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
