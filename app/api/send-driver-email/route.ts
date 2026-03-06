import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail-server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        if (!body || !body.driver) {
            return NextResponse.json({ error: 'Missing driver data' }, { status: 400 });
        }

        const { driver } = body;
        const adminEmail = process.env.ADMIN_EMAIL || 'info@taxiserviceksa.com';

        console.log('Sending driver application emails for:', driver.full_name);

        // 1. Send Admin Alert Email
        try {
            await sendMail({
                to: adminEmail,
                replyTo: driver.email,
                subject: `🚖 New Driver Application - ${driver.full_name}`,
                html: `
                <div style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2>New Driver Application</h2>
                    <p><strong>Name:</strong> ${driver.full_name}</p>
                    <p><strong>Phone:</strong> ${driver.phone_number}</p>
                    <p><strong>Email:</strong> ${driver.email}</p>
                    <p><strong>City:</strong> ${driver.city}</p>
                    <p><strong>Vehicle:</strong> ${driver.vehicle_model}</p>
                </div>
                `,
            });
        } catch (error) {
            console.error('Failed to send admin email:', error);
        }

        // 2. Send Applicant Confirmation Email
        try {
            await sendMail({
                to: driver.email,
                subject: 'Application Received - VIP Transfer KSA',
                html: `
                <div style="font-family: Arial, sans-serif; padding: 20px;">
                    <h1>Application Received!</h1>
                    <p>Dear ${driver.full_name},</p>
                    <p>We have received your application. Our team will review your details and contact you soon.</p>
                    <p>Best regards,<br>VIP Transfer KSA Team</p>
                </div>
                `,
            });
        } catch (error) {
            console.warn('Failed to send applicant confirmation email:', error);
        }

        return NextResponse.json({ success: true, message: 'Emails processed' });

    } catch (error: any) {
        console.error('Driver Email API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
