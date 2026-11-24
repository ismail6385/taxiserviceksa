import { NextRequest, NextResponse } from 'next/server';
import { writeWithOptionalColumns } from '@/lib/optional-columns';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { bookingSchema, adminBookingSchema, toFieldErrors } from '@/lib/booking-validation';
import { getAdminSession } from '@/lib/admin-auth';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { vehicleOptionFields } from '@/lib/vehicle-options';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Single source of truth for creating a booking. Every booking form (public
// multi-step form, both homepage hero widgets, and the admin "create
// booking" panel) submits here instead of writing to Supabase directly, so
// validation (see lib/booking-validation.ts) can never drift between callers.
export async function POST(request: NextRequest) {
    const ip = getClientIp(request);
    if (!checkRateLimit(`booking-create:${ip}`, 10, 60_000)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    // Route-only flag, not part of the persisted booking shape.
    const sendCustomerEmail = body.sendCustomerEmail !== false;
    const { sendCustomerEmail: _omit, ...bookingInput } = body;

    // Admin-originated requests (Bearer token from the admin panel's
    // adminFetch) use the relaxed admin schema — the admin "quick create"
    // form has always allowed saving a booking before contact details are
    // known (walk-in/phone bookings). Unauthenticated public requests always
    // go through the strict customer-facing schema.
    const adminSession = await getAdminSession(request);
    // An admin request (Bearer token) whose login could not be verified must
    // not fall through to the public path, which would silently drop the
    // price, payment and driver details. Answer 401 so adminFetch refreshes
    // the login and retries.
    if (!adminSession && (request.headers.get('authorization') || '').startsWith('Bearer ')) {
        return NextResponse.json({ error: 'Admin login expired. Please log in again.' }, { status: 401 });
    }
    const schema = adminSession ? adminBookingSchema : bookingSchema;

    const parsed = schema.safeParse(bookingInput);
    if (!parsed.success) {
        return NextResponse.json(
            { error: 'Validation failed', fieldErrors: toFieldErrors(parsed.error) },
            { status: 400 }
        );
    }

    // Round-trip fields should never be persisted as stray values on a
    // one-way booking, even if a client accidentally sends them. Likewise,
    // passenger fields and delivery fields (recipient/item) are mutually
    // exclusive on a single booking row — never persist the ones that don't
    // match the booking's own type.
    // Fields only the admin may set. A website booking is always a pending
    // request with no price, payment or driver details, whatever the request
    // body says (the public form never sends these; this blocks hand-made
    // API calls marking their own booking confirmed / paid / priced).
    const ADMIN_ONLY = ['status', 'total_price', 'deposit_amount', 'payment_status', 'payment_method',
        'driver_name', 'driver_phone', 'driver_plate', 'driver_arrived_at', 'trip_started_at',
        'actual_vehicle', 'tags', 'internal_notes', 'commission_rate', 'contract_id',
        'driver_cost', 'vat_added', 'vehicle_options'] as const;
    const data: typeof parsed.data = { ...parsed.data };
    if (!adminSession) {
        for (const k of ADMIN_ONLY) delete (data as Record<string, unknown>)[k];
    }
    const isDelivery = data.booking_type === 'delivery';
    const insertPayload = {
        ...data,
        return_date: data.has_return_trip ? data.return_date ?? null : null,
        return_time: data.has_return_trip ? data.return_time ?? null : null,
        return_pickup_location: data.has_return_trip ? data.return_pickup_location ?? null : null,
        return_destination: data.has_return_trip ? data.return_destination ?? null : null,
        booking_type: data.booking_type || 'passenger',
        passengers: isDelivery ? null : data.passengers,
        luggage: isDelivery ? null : data.luggage,
        recipient_name: isDelivery ? data.recipient_name ?? null : null,
        recipient_phone: isDelivery ? data.recipient_phone ?? null : null,
        item_type: isDelivery ? data.item_type ?? null : null,
        item_description: isDelivery ? data.item_description ?? null : null,
        item_count: isDelivery ? data.item_count ?? null : null,
        item_size_weight: isDelivery ? data.item_size_weight ?? null : null,
        status: adminSession ? (data.status || 'pending') : 'pending',
        // Vehicle quote options are an admin tool; never taken from the public form.
        ...vehicleOptionFields(adminSession ? data.vehicle_options : null),
    };

    const { data: inserted, error } = await writeWithOptionalColumns(insertPayload, (p) => supabaseAdmin
        .from('bookings')
        .insert([p])
        .select()
        .single());

    if (error || !inserted) {
        console.error('Booking create error:', error);
        // Show the database's reason so a failure can be fixed on the spot.
        const reason = error?.message ? `: ${error.message}` : (inserted ? '' : ': no row returned');
        return NextResponse.json({ error: `Failed to create booking${reason}` }, { status: 500 });
    }

    if (sendCustomerEmail) {
        // Don't block booking success on email delivery. On Cloudflare an
        // un-awaited fetch is cancelled once the response is sent, so hand
        // it to waitUntil to keep it running.
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://taxiserviceksa.com';
        const internalHeaders: Record<string, string> = { 'Content-Type': 'application/json' };
        if (process.env.INTERNAL_API_SECRET) {
            internalHeaders['x-internal-secret'] = process.env.INTERNAL_API_SECRET;
        }
        const emailJob = fetch(`${baseUrl}/api/send-booking-emails/`, {
            method: 'POST',
            headers: internalHeaders,
            body: JSON.stringify({ booking: inserted }),
        }).catch((err) => console.error('send-booking-emails fetch failed:', err));
        try {
            getCloudflareContext().ctx.waitUntil(emailJob);
        } catch {
            // Not running on Cloudflare (local dev): the fetch just runs.
        }
    }

    return NextResponse.json({ booking: inserted }, { status: 201 });
}
