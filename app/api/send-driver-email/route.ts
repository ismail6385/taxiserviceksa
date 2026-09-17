import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail-server';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';

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
        const ip = getClientIp(request);
        if (!checkRateLimit(`driver-email:${ip}`, 5, 60_000)) {
            return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
        }

        const body = await request.json();
        if (!body || !body.driver) {
            return NextResponse.json({ error: 'Missing driver data' }, { status: 400 });
        }

        const rawDriver = body.driver;
        const driver = {
            full_name: escapeHtml(rawDriver.full_name),
            phone_number: escapeHtml(rawDriver.phone_number),
            email: rawDriver.email, // used as an email address, not interpolated raw into HTML text
            city: escapeHtml(rawDriver.city),
            vehicle_model: escapeHtml(rawDriver.vehicle_model),
            owns_car: rawDriver.owns_car,
        };
        console.log('Sending driver application emails for:', driver.full_name);

        // Applications are already saved to the `drivers` table (see
        // partners/driver-registration) so they show up in Admin > Drivers —
        // no separate admin alert email needed.

        // Send Applicant Confirmation Email
        try {
            await sendMail({
                to: driver.email,
                subject: 'Partnership Application Received - Taxi Service KSA',
                html: `
                <div style="font-family: Arial, sans-serif; padding: 25px; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 12px;">
                    <div style="text-align: center; margin-bottom: 25px;">
                        <h2 style="color: #000; margin: 0; text-transform: uppercase; letter-spacing: 1px;">Application Received</h2>
                        <div style="width: 50px; height: 3px; background-color: #C6FF00; margin: 10px auto;"></div>
                    </div>
                    
                    <p>Dear <strong>${driver.full_name}</strong>,</p>
                    <p>Thank you for your interest in joining the <strong>Taxi Service KSA</strong> professional network.</p>
                    <p>We have received your registration details and our partner compliance team is currently reviewing your profile and vehicle information.</p>
                    
                    <div style="background-color: #f8f9fa; border-left: 4px solid #C6FF00; padding: 15px; margin: 20px 0;">
                        <p style="margin: 0; font-weight: bold; color: #000;">What's Next?</p>
                        <p style="margin: 5px 0; font-size: 14px;">Our team will contact you within 48-72 hours if your profile matches our requirements for your city (${driver.city}).</p>
                    </div>

                    <p>Please ensure your vehicle remains in top condition and your documents are ready for final verification.</p>
                    
                    <p style="margin-top: 30px;">Best regards,<br><strong>Onboarding Team</strong><br>Taxi Service KSA</p>
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
