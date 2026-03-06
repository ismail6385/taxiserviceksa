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

        switch (status) {
            case 'confirmed':
                subject = '✅ Booking Confirmed - VIP Transfer KSA';
                htmlContent = `<h1>Booking Confirmed</h1><p>Dear ${customerName}, your booking #${bookingId.slice(0, 8).toUpperCase()} is confirmed.</p>`;
                break;
            case 'cancelled':
                subject = 'Booking Status Update - VIP Transfer KSA';
                htmlContent = `<h1>Booking Cancelled</h1><p>Dear ${customerName}, your booking #${bookingId.slice(0, 8).toUpperCase()} has been cancelled.</p>`;
                break;
            case 'completed':
                subject = '🌟 How was your trip? - VIP Transfer KSA';
                htmlContent = `<h1>Trip Completed</h1><p>Dear ${customerName}, thank you for riding with us. Please leave a review on our website.</p>`;
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
