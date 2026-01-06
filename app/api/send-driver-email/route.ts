import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        if (!body || !body.driver) {
            return NextResponse.json({ error: 'Missing driver data' }, { status: 400 });
        }

        const { driver } = body;
        const adminEmail = process.env.ADMIN_EMAIL || 'taxiserviceksa9988@gmail.com';

        // Configure Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'taxiserviceksa9988@gmail.com',
                pass: process.env.EMAIL_PASS,
            },
        });

        console.log('Sending driver application emails for:', driver.full_name);

        // 1. Send Admin Alert Email
        // We check for credentials implicitly by trying to send.
        try {
            await transporter.sendMail({
                from: '"VIP Transfer KSA" <info@transferksa.com>',
                to: adminEmail,
                replyTo: driver.email, // Allow Admin to reply directly to Driver
                subject: `🚖 New Driver Application - ${driver.full_name}`,
                html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: #000; padding: 30px; text-center; border-radius: 10px 10px 0 0; }
                        .header h1 { color: #C6FF00; margin: 0; font-size: 24px; }
                        .content { background: #fff; padding: 30px; border: 1px solid #e0e0e0; }
                        .button { display: inline-block; background: #C6FF00; color: #000; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 20px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>🚖 New Driver Application</h1>
                        </div>
                        <div class="content">
                            <p><strong>Name:</strong> ${driver.full_name}</p>
                            <p><strong>Phone:</strong> ${driver.phone_number}</p>
                            <p><strong>Email:</strong> ${driver.email}</p>
                            <p><strong>City:</strong> ${driver.city}</p>
                            <p><strong>Vehicle:</strong> ${driver.vehicle_model}</p>
                            
                            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                            
                            <h3>Requirements Check:</h3>
                            <p>✅ Valid License: ${driver.license_valid ? 'Yes' : 'No'}</p>
                            <p>✅ Vehicle Condition: ${driver.vehicle_condition ? 'Yes' : 'No'}</p>
                            <p>✅ Languages: ${driver.languages ? 'Yes' : 'No'}</p>
                            
                            <center>
                                <a href="mailto:${driver.email}" class="button">✉️ Email Applicant</a>
                                <a href="tel:${driver.phone_number}" class="button" style="margin-left: 10px;">📞 Call Applicant</a>
                            </center>
                        </div>
                    </div>
                </body>
                </html>
                `,
            });
        } catch (error) {
            console.error('Failed to send admin email:', error);
            // Don't fail the whole request, try sending confirmation to driver.
        }

        // 2. Send Applicant Confirmation Email
        try {
            await transporter.sendMail({
                from: '"VIP Transfer KSA" <info@transferksa.com>',
                to: driver.email,
                subject: 'Application Received - VIP Transfer KSA',
                html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: #C6FF00; padding: 30px; text-center; border-radius: 10px 10px 0 0; }
                        .header h1 { color: #000; margin: 0; font-size: 24px; }
                        .content { background: #fff; padding: 30px; border: 1px solid #e0e0e0; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Application Received!</h1>
                        </div>
                        <div class="content">
                            <p>Dear <strong>${driver.full_name}</strong>,</p>
                            <p>We have received your application to drive with VIP Transfer KSA.</p>
                            <p>Our team is reviewing your details and will contact you within 48 hours to schedule an interview/inspection.</p>
                            <p>Best regards,<br>VIP Transfer KSA Partner Team</p>
                        </div>
                    </div>
                </body>
                </html>
                `,
            });
        } catch (error) {
            console.warn('Failed to send applicant confirmation email:', error);
        }

        return NextResponse.json({ success: true, message: 'Emails processed' });

    } catch (error: any) {
        console.error('Driver Email API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
