import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { readVehicleOptions, applySelectedOption } from '@/lib/vehicle-options';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
    const ip = getClientIp(request);
    if (!checkRateLimit(`accept-quote:${ip}`, 5, 60_000)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    let bookingId: string;
    let optionId: string | null = null;
    try {
        ({ bookingId, optionId = null } = await request.json());
    } catch {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    if (!bookingId) {
        return NextResponse.json({ error: 'Missing bookingId' }, { status: 400 });
    }

    const fetchBooking = (fields: string) => supabaseAdmin
        .from('bookings')
        .select(fields)
        .eq('id', bookingId)
        .single();
    // vehicle_options exists only after add_booking_vehicle_options.sql.
    let { data: booking, error: fetchError } = await fetchBooking('id, status, customer_name, customer_email, vehicle_type, total_price, currency, vehicle_options') as { data: Record<string, any> | null; error: { code?: string } | null };
    if (fetchError && (fetchError.code === '42703' || fetchError.code === 'PGRST204')) {
        ({ data: booking, error: fetchError } = await fetchBooking('id, status, customer_name, customer_email') as { data: Record<string, any> | null; error: { code?: string } | null });
    }

    if (fetchError || !booking) {
        return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    if (!['quote_sent', 'pending'].includes(booking.status)) {
        return NextResponse.json(
            { error: 'Booking cannot be accepted in this state', currentStatus: booking.status },
            { status: 409 }
        );
    }

    // Several vehicles were quoted for this trip: the customer must pick one,
    // which becomes the booking's vehicle and price (others kept for reference).
    const options = readVehicleOptions(booking.vehicle_options);
    let update: Record<string, unknown> = { status: 'confirmed' };
    if (options.length && !options.some(o => o.selected)) {
        const chosen = options.find(o => o.id === optionId && o.price > 0);
        if (!chosen) {
            return NextResponse.json({ error: 'Please choose one of the vehicle options first.' }, { status: 400 });
        }
        const { vehicle_options, vehicle_type, total_price, currency } = applySelectedOption(
            { vehicle_type: booking.vehicle_type, total_price: booking.total_price, currency: booking.currency }, options, chosen.id);
        update = { ...update, vehicle_options, vehicle_type, total_price, currency };
    }

    const { error: updateError } = await supabaseAdmin
        .from('bookings')
        .update(update)
        .eq('id', bookingId);

    if (updateError) {
        return NextResponse.json({ error: 'Failed to confirm booking' }, { status: 500 });
    }

    // Fire-and-forget confirmation email
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://taxiserviceksa.com';
    const internalHeaders: Record<string, string> = { 'Content-Type': 'application/json' };
    if (process.env.INTERNAL_API_SECRET) {
        internalHeaders['x-internal-secret'] = process.env.INTERNAL_API_SECRET;
    }
    fetch(`${baseUrl}/api/send-status-email`, {
        method: 'POST',
        headers: internalHeaders,
        body: JSON.stringify({
            bookingId: booking.id,
            status: 'confirmed',
            customerEmail: booking.customer_email,
            customerName: booking.customer_name
        })
    }).catch(() => {});

    return NextResponse.json({ success: true });
}
