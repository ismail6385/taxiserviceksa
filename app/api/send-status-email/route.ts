import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const resendApiKey = process.env.RESEND_API_KEY;
const TRUSTPILOT_LINK = 'https://www.trustpilot.com/review/taxiserviceksa.com'; // Replace with actual link

if (!resendApiKey) {
    console.error('RESEND_API_KEY is not set');
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { bookingId, status, customerEmail, customerName } = body;

        if (!bookingId || !status || !customerEmail) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (!resend) {
            return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
        }

        let subject = '';
        let htmlContent = '';

        const commonStyle = `
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { padding: 30px; text-center; border-radius: 10px 10px 0 0; }
            .content { background: #fff; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
            .highlight { color: #000; font-weight: bold; }
        `;

        const REVIEW_LINK = 'https://taxiserviceksa.com/submit-review';

        switch (status) {
            case 'confirmed':
                subject = '✅ Booking Confirmed - Taxi Service KSA';
                htmlContent = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
                            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
                            .header { background: linear-gradient(135deg, #000 0%, #1a1a1a 100%); padding: 40px 20px; text-align: center; color: #ffffff; }
                            .header h1 { margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 0.5px; color: #C6FF00; }
                            .header p { margin: 10px 0 0; font-size: 16px; opacity: 0.9; }
                            .content { padding: 40px 30px; }
                            .greeting { font-size: 18px; margin-bottom: 20px; color: #000; }
                            .highlight-box { background: #f9f9f9; border-left: 4px solid #C6FF00; padding: 20px; border-radius: 4px; margin: 25px 0; }
                            .highlight-text { font-size: 20px; font-weight: bold; color: #000; margin: 0; }
                            .booking-id { font-family: monospace; color: #666; font-size: 14px; margin-top: 5px; display: block; }
                            .steps { margin: 30px 0; padding: 0; list-style: none; }
                            .step { display: flex; align-items: flex-start; margin-bottom: 20px; }
                            .step-icon { background: #C6FF00; color: #000; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; font-size: 12px; flex-shrink: 0; margin-top: 2px; }
                            .step-text h4 { margin: 0 0 4px; font-size: 16px; color: #000; }
                            .step-text p { margin: 0; font-size: 14px; color: #666; }
                            .cta-button { display: inline-block; background: #000; color: #ffffff; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 20px 0; transition: transform 0.2s; }
                            .cta-button:hover { transform: translateY(-2px); }
                            .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 13px; color: #888; border-top: 1px solid #eaeaea; }
                            .social-links { margin: 15px 0; }
                            .social-links a { color: #888; text-decoration: none; margin: 0 10px; }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <h1>BOOKING CONFIRMED</h1>
                                <p>Your premium journey awaits</p>
                            </div>
                            <div class="content">
                                <p class="greeting">Dear <strong>${customerName}</strong>,</p>
                                <p>We are pleased to confirm that your booking has been successfully verified.</p>
                                
                                <div class="highlight-box">
                                    <p class="highlight-text">Your driver is assigned.</p>
                                    <span class="booking-id">Booking Ref: #${bookingId.slice(0, 8).toUpperCase()}</span>
                                </div>

                                <p>Our team is ensuring every detail of your trip meets our premium standards.</p>

                                <ul class="steps">
                                    <li class="step">
                                        <div class="step-icon">1</div>
                                        <div class="step-text">
                                            <h4>Driver Assignment</h4>
                                            <p>A professional chauffeur has been assigned to your route.</p>
                                        </div>
                                    </li>
                                    <li class="step">
                                        <div class="step-icon">2</div>
                                        <div class="step-text">
                                            <h4>Pre-Trip Check</h4>
                                            <p>The vehicle will be sanitized and prepared before arrival.</p>
                                        </div>
                                    </li>
                                    <li class="step">
                                        <div class="step-icon">3</div>
                                        <div class="step-text">
                                            <h4>Arrival</h4>
                                            <p>Your driver will arrive at the pickup location 15 minutes early.</p>
                                        </div>
                                    </li>
                                </ul>

                                <center>
                                    <a href="https://taxiserviceksa.com/contact" class="cta-button">Manage Booking</a>
                                </center>
                            </div>
                            <div class="footer">
                                <p>&copy; ${new Date().getFullYear()} Taxi Service KSA. All rights reserved.</p>
                                <p>Jeddah | Makkah | Madinah | Riyadh</p>
                            </div>
                        </div>
                    </body>
                    </html>
                `;
                break;

            case 'cancelled':
                subject = 'Booking Status Update - Taxi Service KSA';
                htmlContent = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
                            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
                            .header { background: #1a1a1a; padding: 30px; text-align: center; color: #ffffff; }
                            .content { padding: 40px 30px; text-align: center; }
                            .icon { font-size: 48px; margin-bottom: 20px; display: block; }
                            .cta-button { display: inline-block; background: #000; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 20px; }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <h1 style="color: #ff4d4f; margin: 0;">Booking Cancelled</h1>
                            </div>
                            <div class="content">
                                <span class="icon">❌</span>
                                <p>Dear <strong>${customerName}</strong>,</p>
                                <p>Your booking <strong>#${bookingId.slice(0, 8).toUpperCase()}</strong> has been cancelled as per request or due to unforeseen circumstances.</p>
                                <p>If this was a mistake, you can rebook instantly.</p>
                                <a href="https://taxiserviceksa.com" class="cta-button">Book Again</a>
                            </div>
                        </div>
                    </body>
                    </html>
                `;
                break;

            case 'completed':
                subject = '🌟 A Special Request from Taxi Service KSA';
                htmlContent = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
                            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
                            .header { background: linear-gradient(135deg, #000 0%, #1a1a1a 100%); padding: 50px 20px; text-align: center; color: #ffffff; }
                            .header h1 { margin: 0; font-size: 26px; color: #C6FF00; margin-top: 10px; }
                            .logo { font-size: 32px; }
                            .content { padding: 40px 30px; text-align: center; }
                            .stars { font-size: 32px; color: #FFD700; margin: 15px 0; letter-spacing: 5px; }
                            .message { font-size: 16px; color: #555; margin-bottom: 30px; line-height: 1.8; }
                            .cta-button { display: inline-block; background: #C6FF00; color: #000; padding: 16px 40px; text-decoration: none; border-radius: 50px; font-weight: 700; font-size: 18px; box-shadow: 0 4px 15px rgba(198, 255, 0, 0.3); transition: transform 0.2s; }
                            .cta-button:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(198, 255, 0, 0.4); }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <div class="logo">🚕</div>
                                <h1>Journey Completed</h1>
                            </div>
                            <div class="content">
                                <p>Dear <strong>${customerName}</strong>,</p>
                                <p class="message">We hope you had an exceptional experience with us. As we strive for perfection, your feedback is incredibly valuable to our team and future travelers.</p>
                                
                                <div class="stars">★★★★★</div>
                                <p>Would you seek 30 seconds to rate your driver?</p>

                                <a href="${REVIEW_LINK}" class="cta-button">Rate Your Experience</a>
                                
                                <p style="margin-top: 40px; font-size: 12px; color: #999;">
                                    If you felt our service was anything less than 5 stars, please <a href="mailto:support@taxiserviceksa.com" style="color: #666;">reply to this email</a> directly so we can make it right.
                                </p>
                            </div>
                        </div>
                    </body>
                    </html>
                `;
                break;

            default:
                return NextResponse.json({ message: 'No email sent for this status' });
        }

        console.log(`Sending ${status} email to ${customerEmail}`);

        const data = await resend.emails.send({
            from: 'Taxi Service KSA <noreply@taxiserviceksa.com>',
            to: [customerEmail],
            subject: subject,
            html: htmlContent,
        });

        return NextResponse.json({ success: true, data });

    } catch (error: any) {
        console.error('Error sending status email:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
