import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail-server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { bookingId, status, customerEmail, customerName } = body;

        if (!bookingId || !status || !customerEmail) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        let subject = '';
        let htmlContent = '';

        const wrapperStart = `
        <div style="font-family: Arial, sans-serif; padding: 25px; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 12px;">
            <div style="text-align: center; margin-bottom: 25px;">
                <h2 style="color: #000; margin: 0; text-transform: uppercase; letter-spacing: 1px;">Status Update</h2>
                <div style="width: 50px; height: 3px; background-color: #C6FF00; margin: 10px auto;"></div>
            </div>
            <p>Dear <strong>${customerName}</strong>,</p>
        `;
        const wrapperEnd = `
            <p style="margin-top: 30px;">Best regards,<br><strong>Customer Success Team</strong><br>VIP Transfer KSA</p>
        </div>
        `;

        switch (status) {
            case 'confirmed':
                subject = '✅ Booking Confirmed - VIP Transfer KSA';
                htmlContent = `${wrapperStart}
                    <p>We are pleased to inform you that your booking <span style="font-family: monospace; background: #f0f0f0; padding: 2px 6px; border-radius: 4px;">#${bookingId.slice(0, 8).toUpperCase()}</span> has been <strong>successfully confirmed</strong>.</p>
                    <p>Our chauffeur will be ready at your specified pickup location and time. You will receive a notification when they are on the way.</p>
                    <div style="background-color: #F6FFF0; border-left: 4px solid #C6FF00; padding: 15px; margin: 20px 0;">
                        <p style="margin: 0; font-weight: bold; color: #000;">Prepared for Departure</p>
                        <p style="margin: 5px 0; font-size: 14px;">Your luxury vehicle has been reserved and our team is finalizing your route.</p>
                    </div>
                ${wrapperEnd}`;
                break;
            case 'cancelled':
                subject = 'Booking Cancellation - VIP Transfer KSA';
                htmlContent = `${wrapperStart}
                    <p>Your booking <span style="font-family: monospace; background: #f0f0f0; padding: 2px 6px; border-radius: 4px;">#${bookingId.slice(0, 8).toUpperCase()}</span> has been <strong>cancelled</strong> as per your request or system update.</p>
                    <p>If you believe this is an error or would like to reschedule, please reply to this email immediately.</p>
                ${wrapperEnd}`;
                break;
            case 'completed':
                subject = '🌟 Your Trip with VIP Transfer KSA';
                htmlContent = `${wrapperStart}
                    <p>Thank you for choosing <strong>VIP Transfer KSA</strong> for your recent journey.</p>
                    <p>We hope you enjoyed the premium experience. Your feedback helps us maintain our leading standards in Saudi Arabia.</p>
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="https://taxiserviceksa.com" style="background-color: #000; color: #fff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">Leave a Review</a>
                    </div>
                ${wrapperEnd}`;
                break;
            default:
                return NextResponse.json({ message: 'No email sent for this status' });
        }

        await sendMail({
            to: customerEmail,
            subject,
            html: htmlContent
        });

        return NextResponse.json({ success: true });

    } catch (error: any) {
        console.error('Error sending status email:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
