import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { findTeamDriver } from '@/lib/team-drivers';
import { isValidDriverLinkToken } from '@/lib/driver-links';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// One booking for a driver's quotation / invoice / receipt page. The driver's
// link token proves who is asking, and only bookings assigned to that driver
// are returned. Internal admin fields are removed.
const PRIVATE_FIELDS = ['internal_notes', 'commission_rate', 'tags', 'deleted_by'];

export async function GET(request: Request) {
    const url = new URL(request.url);
    const slug = url.searchParams.get('slug') || '';
    const token = url.searchParams.get('token') || '';
    const id = url.searchParams.get('id') || '';

    const driver = findTeamDriver(slug);
    if (!driver || !token || !isValidDriverLinkToken(driver.slug, token)) {
        return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
    }

    const { data: booking, error } = await supabaseAdmin.from('bookings').select('*').eq('id', id).maybeSingle();
    if (error || !booking || booking.deleted_at || (booking.driver_name || '').trim().toLowerCase() !== driver.name.toLowerCase()) {
        return NextResponse.json({ error: 'Trip not found' }, { status: 404 });
    }

    // Invoices keep one permanent number, assigned the first time one is opened.
    if (url.searchParams.get('invoice') === '1' && !booking.invoice_number) {
        const { data: assigned } = await supabaseAdmin.rpc('assign_invoice_number', { p_booking_id: booking.id });
        if (assigned) booking.invoice_number = assigned;
    }

    for (const f of PRIVATE_FIELDS) delete (booking as Record<string, unknown>)[f];
    return NextResponse.json({ booking });
}
