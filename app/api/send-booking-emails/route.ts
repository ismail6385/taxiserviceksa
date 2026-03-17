import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail-server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Helper function to format booking ID
function formatBookingId(id: string | number | undefined): string {
    if (!id) return 'N/A';
    return `#${String(id).slice(0, 8).toUpperCase()}`;
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
        const body = await request.json();
        if (!body || !body.booking) {
            return NextResponse.json({ error: 'Missing booking data' }, { status: 400 });
        }

        const { booking, price } = body;
        const emailAdmin = process.env.ADMIN_EMAIL || 'info@taxiserviceksa.com';

        console.log('Sending emails for booking:', booking.id || 'new booking');

        // 1. Send email to customer
        try {
            await sendMail({
                to: booking.customer_email,
                subject: 'Quotation Request Received - VIP Transfer KSA',
                html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #333;">
                    <div style="background-color: #000; padding: 25px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h1 style="margin: 0; color: #C6FF00; text-transform: uppercase; letter-spacing: 2px;">Quotation Request</h1>
                    </div>
                    <div style="padding: 30px; border: 1px solid #eee; border-top: none; border-radius: 0 0 10px 10px; background-color: #fff;">
                        <p style="font-size: 16px;">Dear <strong>${booking.customer_name}</strong>,</p>
                        <p>Thank you for reaching out to <strong>VIP Transfer KSA</strong>. We have received your request for a quotation for your upcoming journey. Our team is currently reviewing your details and will provide you with our best competitive rates shortly.</p>
                        
                        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 12px; margin: 25px 0; border: 1px solid #ebedf0;">
                            <h3 style="margin-top: 0; color: #000; border-bottom: 2px solid #C6FF00; padding-bottom: 8px; display: inline-block;">Journey Details</h3>
                            <p style="margin: 10px 0;"><strong>Request ID:</strong> ${formatBookingId(booking.id)}</p>
                            <p style="margin: 5px 0;"><strong>Pickup:</strong> ${booking.pickup_location}</p>
                            <p style="margin: 5px 0;"><strong>Destination:</strong> ${booking.destination}</p>
                            <p style="margin: 5px 0;"><strong>Date/Time:</strong> ${booking.pickup_date} at ${booking.pickup_time}</p>
                            <p style="margin: 5px 0;"><strong>Vehicle Type:</strong> ${booking.vehicle_type}</p>
                            <p style="margin: 5px 0;"><strong>Passengers:</strong> ${booking.passengers} Pax</p>
                        </div>
                        
                        <div style="background-color: #000; color: #fff; padding: 15px; border-radius: 8px; text-align: center; margin-bottom: 25px;">
                            <p style="margin: 0; font-weight: bold;">Our team will reply with your official quote via email/WhatsApp within 15-30 minutes.</p>
                        </div>

                        <p>If you have any urgent changes, please reply to this email or contact us at <a href="mailto:info@taxiserviceksa.com" style="color: #000; font-weight: bold;">info@taxiserviceksa.com</a></p>
                        
                        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                        <p style="font-size: 12px; color: #999; text-align: center;">VIP Transfer KSA • Premium Chauffeur & Private Transport Service</p>
                    </div>
                </div>
                `,
            });
        } catch (err) {
            console.error('Customer email failed:', err);
        }

        // 2. Send email to admin
        try {
            await sendMail({
                to: emailAdmin,
                replyTo: booking.customer_email,
                subject: `📋 New Quote Request - ${booking.customer_name}`,
                html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #000; border-bottom: 2px solid #C6FF00; padding-bottom: 10px;">New Quotation Request</h2>
                    <p><strong>Customer Name:</strong> ${booking.customer_name}</p>
                    <p><strong>Email:</strong> ${booking.customer_email}</p>
                    <p><strong>Phone:</strong> ${booking.customer_phone}</p>
                    <p><strong>Route:</strong> ${booking.pickup_location} to ${booking.destination}</p>
                    <p><strong>Date/Time:</strong> ${booking.pickup_date} at ${booking.pickup_time}</p>
                    <p><strong>Vehicle:</strong> ${booking.vehicle_type}</p>
                    <p><strong>Passengers:</strong> ${booking.passengers}</p>
                    <p><strong>Special Requests:</strong> ${booking.special_requests || 'None'}</p>
                    <hr>
                    <p style="font-size: 12px; color: #666;">View this in the Admin Dashboard to generate a PDF Quotation.</p>
                </div>
                `,
            });
        } catch (err) {
            console.error('Admin email failed:', err);
        }

        return NextResponse.json({
            success: true,
            bookingId: booking.id || 'pending'
        });
    } catch (error: any) {
        console.error('Email API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
