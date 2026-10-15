import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { findTeamDriver } from '@/lib/team-drivers';
import { isValidDriverLinkToken } from '@/lib/driver-links';
import { isMissingCostColumn } from '@/lib/profit-split';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// A driver records what a trip cost from their private trip link. The token
// proves which driver is asking, and only bookings assigned to that driver
// can be changed.
export async function POST(request: Request) {
    let body: { slug?: string; token?: string; bookingId?: string; cost?: number | string | null };
    try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }

    const driver = body.slug ? findTeamDriver(body.slug) : undefined;
    if (!driver || !body.token || !isValidDriverLinkToken(driver.slug, body.token)) {
        return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
    }
    if (!body.bookingId) return NextResponse.json({ error: 'Missing booking' }, { status: 400 });

    const raw = body.cost;
    const cost = raw === null || raw === '' || raw === undefined ? null : Number(raw);
    if (cost !== null && (!Number.isFinite(cost) || cost < 0 || cost > 1_000_000)) {
        return NextResponse.json({ error: 'Enter a valid amount' }, { status: 400 });
    }

    const { data: booking, error: findError } = await supabaseAdmin
        .from('bookings')
        .select('id,driver_name,deleted_at')
        .eq('id', body.bookingId)
        .maybeSingle();
    if (findError || !booking || booking.deleted_at || (booking.driver_name || '').trim().toLowerCase() !== driver.name.toLowerCase()) {
        return NextResponse.json({ error: 'Trip not found' }, { status: 404 });
    }

    const { error } = await supabaseAdmin.from('bookings').update({ driver_cost: cost }).eq('id', booking.id);
    if (error) {
        if (isMissingCostColumn(error)) return NextResponse.json({ error: 'Saving costs is not switched on yet. Please tell the office.' }, { status: 503 });
        return NextResponse.json({ error: 'Could not save. Please try again.' }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
}
