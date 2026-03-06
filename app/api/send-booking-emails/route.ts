import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail-server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Helper function to format booking ID
function formatBookingId(id: string | number | undefined): string {
    if (!id) return 'N/A';
    return `#${String(id).slice(0, 8).toUpperCase()}`;
}

// Helper function to format phone number for WhatsApp
function formatPhoneForWhatsApp(phone: string | number | undefined): string {
    if (!phone) return '';
    const cleaned = String(phone).replace(/\D/g, '');
    if (cleaned.startsWith('0')) return cleaned.substring(1);
    if (!cleaned.startsWith('966')) return `966${cleaned}`;
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
                subject: 'Booking Confirmation - Taxi Service KSA',
                html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #333;">
                    <div style="background-color: #C6FF00; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h1 style="margin: 0; color: #000;">Booking Confirmed!</h1>
                    </div>
                    <div style="padding: 20px; border: 1px solid #eee; border-top: none; border-radius: 0 0 10px 10px;">
                        <p>Dear <strong>${booking.customer_name}</strong>,</p>
                        <p>Thank you for choosing Taxi Service KSA. Your ride has been successfully booked.</p>
                        
                        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="margin-top: 0;">Journey Details</h3>
                            <p><strong>Booking ID:</strong> ${formatBookingId(booking.id)}</p>
                            <p><strong>Pickup:</strong> ${booking.pickup_location}</p>
                            <p><strong>Destination:</strong> ${booking.destination}</p>
                            <p><strong>Date/Time:</strong> ${booking.pickup_date} at ${booking.pickup_time}</p>
                            <p><strong>Vehicle:</strong> ${booking.vehicle_type}</p>
                            ${price ? `<p style="font-size: 1.2em;"><strong>Total Fare:</strong> SAR ${price}</p>` : ''}
                        </div>
                        
                        <p>Our team will contact you shortly with driver details.</p>
                        <p>Need help? Contact us at <a href="mailto:info@taxiserviceksa.com" style="color: #000; font-weight: bold;">info@taxiserviceksa.com</a></p>
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
                subject: `🚗 New Booking - ${booking.customer_name}`,
                html: `
                <div style="font-family: Arial, sans-serif;">
                    <h2>New Booking Received</h2>
                    <p><strong>Customer:</strong> ${booking.customer_name}</p>
                    <p><strong>Email:</strong> ${booking.customer_email}</p>
                    <p><strong>Phone:</strong> ${booking.customer_phone}</p>
                    <p><strong>Route:</strong> ${booking.pickup_location} to ${booking.destination}</p>
                    <p><strong>Vehicle:</strong> ${booking.vehicle_type}</p>
                    <p><strong>Price:</strong> ${price ? 'SAR ' + price : 'Pending'}</p>
                    <hr>
                    <p>Booking ID: ${booking.id || 'N/A'}</p>
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
