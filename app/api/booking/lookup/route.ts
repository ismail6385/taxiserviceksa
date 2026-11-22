import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Only fields customers are allowed to see - excludes internal_notes, tags,
// payment_status and other admin-only fields.
const PUBLIC_FIELDS = 'id, created_at, pickup_location, destination, pickup_date, pickup_time, trip_end_date, vehicle_type, passengers, luggage, customer_name, customer_email, customer_phone, status, total_price, currency, special_requests, driver_name, driver_phone, driver_plate, has_return_trip, return_date, return_time, return_pickup_location, return_destination, booking_type, recipient_name, recipient_phone, item_type, item_description, item_count, item_size_weight';

// vehicle_options (alternative vehicle quotes) exists only once
// add_booking_vehicle_options.sql has been run; until then select without it.
const WITH_OPTIONS = `${PUBLIC_FIELDS}, vehicle_options`;
const missingColumn = (e: { code?: string } | null) => !!e && (e.code === '42703' || e.code === 'PGRST204');

export async function POST(request: NextRequest) {
    const ip = getClientIp(request);
    if (!checkRateLimit(`booking-lookup:${ip}`, 10, 60_000)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    let ref: string | undefined;
    let email: string | undefined;
    try {
        ({ ref, email } = await request.json());
    } catch {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    if (!ref && !email) {
        return NextResponse.json({ error: 'Missing ref or email' }, { status: 400 });
    }

    if (ref) {
        const byRef = (fields: string) => supabaseAdmin
            .from('bookings')
            .select(fields)
            .ilike('id', `${ref}%`)
            .limit(1)
            .single();
        let { data, error } = await byRef(WITH_OPTIONS);
        if (missingColumn(error)) ({ data, error } = await byRef(PUBLIC_FIELDS));
        if (data) return NextResponse.json({ booking: data });
    }

    if (email) {
        const byEmail = (fields: string) => supabaseAdmin
            .from('bookings')
            .select(fields)
            .eq('customer_email', email!.toLowerCase())
            .order('created_at', { ascending: false })
            .limit(1)
            .single();
        let { data, error } = await byEmail(WITH_OPTIONS);
        if (missingColumn(error)) ({ data, error } = await byEmail(PUBLIC_FIELDS));
        if (data) return NextResponse.json({ booking: data });
    }

    return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
}
