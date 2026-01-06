import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Gmail configuration
const EMAIL_USER = process.env.EMAIL_USER || 'taxiserviceksa9988@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASS || '';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'taxiserviceksa9988@gmail.com';

if (!EMAIL_USER || !EMAIL_PASS) {
    console.error('EMAIL_USER or EMAIL_PASS is not set in environment variables');
}

// Create Gmail transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});

// Helper function to format booking ID
function formatBookingId(id: string | undefined): string {
    if (!id) return 'N/A';
    return `#${id.slice(0, 8).toUpperCase()}`;
}

// Helper function to format phone number for WhatsApp
function formatPhoneForWhatsApp(phone: string | undefined): string {
    if (!phone) return '';
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    // If it starts with 0, remove it (Saudi Arabia format)
    if (cleaned.startsWith('0')) {
        return cleaned.substring(1);
    }
    // If it doesn't start with country code, assume Saudi Arabia (+966)
    if (!cleaned.startsWith('966')) {
        return `966${cleaned}`;
    }
    return cleaned;
}

// Helper function to format date safely
function formatDate(date: string | Date | undefined): string {
    if (!date) return 'N/A';
    try {
        const dateObj = typeof date === 'string' ? new Date(date) : date;
        return dateObj.toLocaleString('en-US', { timeZone: 'Asia/Riyadh' });
    } catch {
        return String(date);
    }
}

export async function POST(request: NextRequest) {
    try {
        // Validate request body
        const body = await request.json();

        if (!body || !body.booking) {
            return NextResponse.json(
                { error: 'Missing booking data in request body' },
                { status: 400 }
            );
        }

        const { booking, price } = body;

        // Validate required fields
        const requiredFields = [
            'customer_name',
            'customer_email',
            'customer_phone',
            'pickup_location',
            'destination',
            'pickup_date',
            'pickup_time',
            'vehicle_type'
        ];

        const missingFields = requiredFields.filter(field => !booking[field]);

        if (missingFields.length > 0) {
            return NextResponse.json(
                {
                    error: 'Missing required booking fields',
                    missingFields
                },
                { status: 400 }
            );
        }

        // Validate environment variables
        if (!EMAIL_USER || !EMAIL_PASS) {
            console.error('Gmail credentials not configured - EMAIL_USER or EMAIL_PASS missing');
            return NextResponse.json(
                { error: 'Email service not configured. Please contact support.' },
                { status: 500 }
            );
        }

        if (!ADMIN_EMAIL) {
            console.error('ADMIN_EMAIL not set');
            return NextResponse.json(
                { error: 'Admin email not configured' },
                { status: 500 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(booking.customer_email)) {
            return NextResponse.json(
                { error: 'Invalid customer email format' },
                { status: 400 }
            );
        }

        console.log('Sending emails for booking:', booking.id || 'new booking');

        // Send email to customer
        let customerEmail;
        try {
            customerEmail = await transporter.sendMail({
                from: `"Taxi Service KSA" <${EMAIL_USER}>`,
                to: booking.customer_email,
                subject: 'Booking Confirmation - Taxi Service KSA',
                html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        * { margin: 0; padding: 0; box-sizing: border-box; }
                        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5; padding: 20px; }
                        .email-wrapper { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
                        .header { background: linear-gradient(135deg, #C6FF00 0%, #A8D600 100%); padding: 40px 30px; text-align: center; position: relative; }
                        .header::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="rgba(255,255,255,0.1)"/></svg>') repeat; opacity: 0.3; }
                        .header-content { position: relative; z-index: 1; }
                        .header h1 { color: #000; font-size: 32px; font-weight: 800; margin-bottom: 8px; letter-spacing: -0.5px; }
                        .header p { color: rgba(0,0,0,0.7); font-size: 16px; font-weight: 500; }
                        .icon-circle { width: 80px; height: 80px; background: rgba(255,255,255,0.9); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 40px; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
                        .content { padding: 40px 30px; }
                        .greeting { font-size: 18px; color: #333; margin-bottom: 20px; line-height: 1.6; }
                        .greeting strong { color: #000; font-weight: 700; }
                        .info-box { background: #f9fafb; border-radius: 12px; padding: 24px; margin: 30px 0; border: 2px solid #e5e7eb; }
                        .info-box h2 { font-size: 20px; font-weight: 700; color: #000; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }
                        .detail-item { display: flex; justify-content: space-between; align-items: center; padding: 14px 0; border-bottom: 1px solid #e5e7eb; }
                        .detail-item:last-child { border-bottom: none; }
                        .detail-label { color: #6b7280; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
                        .detail-value { color: #000; font-size: 16px; font-weight: 700; text-align: right; }
                        .price-highlight { background: linear-gradient(135deg, #C6FF00 0%, #A8D600 100%); padding: 20px; border-radius: 12px; margin: 20px 0; text-align: center; }
                        .price-highlight .label { color: #000; font-size: 14px; font-weight: 600; margin-bottom: 8px; }
                        .price-highlight .value { color: #000; font-size: 32px; font-weight: 900; }
                        .status-badge { display: inline-block; background: #fef3c7; color: #92400e; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 700; }
                        .cta-section { text-align: center; margin: 30px 0; }
                        .cta-button { display: inline-block; background: #000; color: #C6FF00; padding: 16px 40px; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 16px; transition: all 0.3s; }
                        .divider { height: 1px; background: #e5e7eb; margin: 30px 0; }
                        .help-text { text-align: center; color: #6b7280; font-size: 14px; line-height: 1.6; }
                        .help-text a { color: #C6FF00; text-decoration: none; font-weight: 600; }
                        .footer { background: #f9fafb; padding: 30px; text-align: center; border-top: 2px solid #e5e7eb; }
                        .footer-logo { font-size: 20px; font-weight: 800; color: #000; margin-bottom: 12px; }
                        .footer-text { color: #6b7280; font-size: 13px; line-height: 1.8; }
                        .social-links { margin-top: 20px; }
                        .social-links a { display: inline-block; margin: 0 8px; color: #6b7280; text-decoration: none; font-size: 12px; }
                    </style>
                </head>
                <body>
                    <div class="email-wrapper">
                        <!-- Header -->
                        <div class="header">
                            <div class="header-content">
                                <div class="icon-circle">🚗</div>
                                <h1>Booking Confirmed!</h1>
                                <p>Your ride is reserved</p>
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="content">
                            <p class="greeting">
                                Dear <strong>${booking.customer_name}</strong>,
                            </p>
                            <p class="greeting">
                                Thank you for choosing <strong>Taxi Service KSA</strong>! Your booking has been successfully confirmed and our team is preparing for your journey.
                            </p>

                            <!-- Booking Details -->
                            <div class="info-box">
                                <h2>📋 Booking Details</h2>
                                
                                <div class="detail-item">
                                    <span class="detail-label">Booking ID</span>
                                    <span class="detail-value">${formatBookingId(booking.id)}</span>
                                </div>
                                
                                <div class="detail-item">
                                    <span class="detail-label">📍 Pickup</span>
                                    <span class="detail-value">${booking.pickup_location}</span>
                                </div>
                                
                                <div class="detail-item">
                                    <span class="detail-label">🎯 Destination</span>
                                    <span class="detail-value">${booking.destination}</span>
                                </div>
                                
                                <div class="detail-item">
                                    <span class="detail-label">📅 Date & Time</span>
                                    <span class="detail-value">${booking.pickup_date} at ${booking.pickup_time}</span>
                                </div>
                                
                                <div class="detail-item">
                                    <span class="detail-label">🚙 Vehicle</span>
                                    <span class="detail-value">${booking.vehicle_type}</span>
                                </div>
                                
                                <div class="detail-item">
                                    <span class="detail-label">👥 Passengers</span>
                                    <span class="detail-value">${booking.passengers || 1}</span>
                                </div>
                            </div>

                            ${price ? `
                            <!-- Price Highlight -->
                            <div class="price-highlight">
                                <div class="label">TOTAL FARE</div>
                                <div class="value">SAR ${price}</div>
                            </div>
                            ` : ''}

                            <!-- Status -->
                            <div style="text-align: center; margin: 30px 0;">
                                <span class="status-badge">⏳ Pending Final Confirmation</span>
                            </div>

                            <div class="divider"></div>

                            <!-- Next Steps -->
                            <p class="greeting">
                                <strong>What's Next?</strong><br>
                                Our team will review your booking and contact you within 24 hours to confirm all details and provide driver information.
                            </p>

                            <div class="divider"></div>

                            <!-- Help Section -->
                            <p class="help-text">
                                Need assistance? Contact us at<br>
                                <a href="mailto:taxiserviceksa9988@gmail.com">taxiserviceksa9988@gmail.com</a>
                            </p>
                        </div>

                        <!-- Footer -->
                        <div class="footer">
                            <div class="footer-logo">Taxi Service KSA</div>
                            <p class="footer-text">
                                Premium Chauffeur Services in Saudi Arabia<br>
                                Jeddah • Makkah • Madinah • Riyadh
                            </p>
                            <div class="social-links">
                                <a href="https://taxiserviceksa.com">Website</a> •
                                <a href="https://taxiserviceksa.com/services">Services</a> •
                                <a href="https://taxiserviceksa.com/fleet">Fleet</a>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `,
            });
            console.log('Customer email sent:', customerEmail);
        } catch (customerEmailError: any) {
            console.error('Failed to send customer email:', {
                error: customerEmailError.message,
                name: customerEmailError.name,
                response: customerEmailError.response || customerEmailError
            });

            throw new Error(`Customer email failed: ${customerEmailError.message}`);
        }

        // Send email to admin
        let adminEmailResult;
        try {
            console.log('Sending admin email to:', ADMIN_EMAIL);
            adminEmailResult = await transporter.sendMail({
                from: `"Taxi Service KSA" <${EMAIL_USER}>`,
                to: ADMIN_EMAIL,
                subject: `🚗 New Booking - ${booking.customer_name} ${price ? `(SAR ${price})` : ''}`,
                html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: linear-gradient(135deg, #000 0%, #262626 100%); padding: 30px; text-center; border-radius: 10px 10px 0 0; }
                        .header h1 { color: #C6FF00; margin: 0; font-size: 28px; }
                        .content { background: #fff; padding: 30px; border: 1px solid #e0e0e0; }
                        .booking-details { background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
                        .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e0e0e0; }
                        .detail-row:last-child { border-bottom: none; }
                        .label { color: #666; font-weight: 600; }
                        .value { color: #000; font-weight: bold; }
                        .alert { background: #C6FF00; color: #000; padding: 15px; border-radius: 8px; margin: 20px 0; font-weight: bold; text-align: center; }
                        .button { display: inline-block; background: #C6FF00; color: #000; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px 5px; }
                        .price-alert { background: #f0f0f0; color: #000; padding: 15px; border-radius: 8px; text-align: center; margin-bottom: 15px; font-size: 1.2em; font-weight: bold; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>🚗 NEW BOOKING ALERT!</h1>
                        </div>
                        <div class="content">
                            <div class="alert">
                                ⚡ Action Required: Contact customer immediately!
                            </div>
                            
                            ${price ? `
                            <div class="price-alert">
                                💰 Quoted Price: SAR ${price}
                            </div>
                            ` : ''}

                            <div class="booking-details">
                                <h3 style="margin-top: 0; color: #000;">Customer Information</h3>
                                
                                <div class="detail-row">
                                    <span class="label">Name:</span>
                                    <span class="value">${booking.customer_name}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Email:</span>
                                    <span class="value">${booking.customer_email}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Phone:</span>
                                    <span class="value">${booking.customer_phone}</span>
                                </div>
                            </div>
                            
                            <div class="booking-details">
                                <h3 style="margin-top: 0; color: #000;">Trip Details</h3>
                                
                                <div class="detail-row">
                                    <span class="label">Booking ID:</span>
                                    <span class="value">${formatBookingId(booking.id)}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">From:</span>
                                    <span class="value">${booking.pickup_location || 'N/A'}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">To:</span>
                                    <span class="value">${booking.destination || 'N/A'}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Date:</span>
                                    <span class="value">${booking.pickup_date || 'N/A'}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Time:</span>
                                    <span class="value">${booking.pickup_time || 'N/A'}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Vehicle:</span>
                                    <span class="value">${booking.vehicle_type || 'N/A'}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Passengers:</span>
                                    <span class="value">${booking.passengers || 1}</span>
                                </div>
                                
                                <div class="detail-row">
                                    <span class="label">Luggage:</span>
                                    <span class="value">${booking.luggage || 0}</span>
                                </div>
                                
                                ${booking.special_requests ? `
                                <div class="detail-row">
                                    <span class="label">Notes / Source:</span>
                                    <span class="value">${booking.special_requests}</span>
                                </div>
                                ` : ''}
                            </div>
                            
                            <center>
                                ${booking.customer_phone ? `<a href="https://wa.me/${formatPhoneForWhatsApp(booking.customer_phone)}" class="button">📱 WhatsApp Customer</a>` : ''}
                                ${booking.customer_phone ? `<a href="tel:${booking.customer_phone}" class="button">📞 Call Customer</a>` : ''}
                                <a href="mailto:${booking.customer_email}" class="button">✉️ Email Customer</a>
                            </center>
                            
                            <p style="margin-top: 30px; font-size: 14px; color: #666; text-align: center;">
                                Booking received at ${formatDate(booking.created_at || new Date())} (Riyadh Time)
                            </p>
                        </div>
                    </div>
                </body>
                </html>
            `,
            });
            console.log('Admin email sent:', adminEmailResult);
        } catch (adminEmailError: any) {
            console.error('Failed to send admin email:', {
                error: adminEmailError.message,
                name: adminEmailError.name,
                response: adminEmailError.response || adminEmailError
            });
            // Don't throw here - customer email was sent, admin email failure is less critical
            console.warn('Admin email failed but customer email was sent successfully');
        }

        console.log('Both emails sent successfully!');

        return NextResponse.json({
            success: true,
            customerEmail,
            adminEmail: adminEmailResult || { error: 'Admin email failed but customer email sent' },
            bookingId: booking.id || 'pending'
        });
    } catch (error: any) {
        // Log full error details to server console
        console.error('========== EMAIL API ERROR ==========');
        console.error('Error Message:', error.message);
        console.error('Error Name:', error.name);
        console.error('Error Stack:', error.stack);
        if (error.response) {
            console.error('Resend API Response:', JSON.stringify(error.response, null, 2));
        }
        if (error.cause) {
            console.error('Error Cause:', error.cause);
        }
        console.error('=====================================');

        // Return detailed error to client
        return NextResponse.json({
            error: 'Failed to send emails',
            message: error.message || 'Unknown error',
            name: error.name || 'Error',
            details: error.response ? JSON.stringify(error.response) : error.stack || 'No additional details'
        }, { status: 500 });
    }
}
