import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { findTeamDriver } from '@/lib/team-drivers';
import { isValidDriverLinkToken } from '@/lib/driver-links';
import { ksaNowTime } from '@/lib/ksa-time';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Trip updates from a driver's private link: arrived, customer picked up
// (trip in progress), trip completed, or a free-text note. Every update is
// also written to the booking's internal notes as "🚗 [time] Driver: ..."
// so the admin sees it on the booking.
type Action = 'arrived' | 'picked_up' | 'completed' | 'note';
const LABEL: Record<Exclude<Action, 'note'>, string> = {
    arrived: 'Arrived at pickup',
    picked_up: 'Customer picked up, trip in progress',
    completed: 'Trip completed',
};

export async function POST(request: Request) {
    let body: { slug?: string; token?: string; bookingId?: string; action?: Action; note?: string };
    try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }

    const driver = body.slug ? findTeamDriver(body.slug) : undefined;
    if (!driver || !body.token || !isValidDriverLinkToken(driver.slug, body.token)) {
        return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
    }
    const action = body.action;
    if (!action || !['arrived', 'picked_up', 'completed', 'note'].includes(action)) {
        return NextResponse.json({ error: 'Unknown update' }, { status: 400 });
    }
    const note = (body.note || '').trim().slice(0, 500);
    if (action === 'note' && !note) return NextResponse.json({ error: 'Write a note first' }, { status: 400 });

    const { data: booking } = await supabaseAdmin
        .from('bookings')
        .select('id,driver_name,status,deleted_at,internal_notes')
        .eq('id', body.bookingId || '')
        .maybeSingle();
    if (!booking || booking.deleted_at || (booking.driver_name || '').trim().toLowerCase() !== driver.name.toLowerCase()) {
        return NextResponse.json({ error: 'Trip not found' }, { status: 404 });
    }
    if (booking.status === 'cancelled') return NextResponse.json({ error: 'This trip was cancelled.' }, { status: 409 });

    const now = ksaNowTime();
    const update: Record<string, string> = {};
    if (action === 'arrived') update.driver_arrived_at = now;
    if (action === 'picked_up') { update.status = 'in_progress'; update.trip_started_at = now; }
    if (action === 'completed') update.status = 'completed';

    const stamp = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Riyadh', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
    const line = `🚗 [${stamp}] ${driver.name}: ${action === 'note' ? note : LABEL[action]}`;
    update.internal_notes = booking.internal_notes ? `${booking.internal_notes}\n${line}` : line;

    const { error } = await supabaseAdmin.from('bookings').update(update).eq('id', booking.id);
    if (error) return NextResponse.json({ error: 'Could not save. Please try again.' }, { status: 500 });
    return NextResponse.json({ ok: true });
}
