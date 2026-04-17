import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '@/lib/supabase-admin';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

async function getSession() {
    const cookieStore = cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        { cookies: { get: (name) => cookieStore.get(name)?.value } }
    );
    const { data: { session } } = await supabase.auth.getSession();
    return session;
}

// POST: Insert one or many audit log entries
export async function POST(request: NextRequest) {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    const { booking_id, entries } = body as {
        booking_id: string;
        entries: { action: string; field_name?: string; old_value?: unknown; new_value?: unknown }[];
    };

    if (!booking_id || !entries?.length) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const rows = entries.map(e => ({
        booking_id,
        admin_email: session.user.email,
        action: e.action,
        field_name: e.field_name ?? null,
        old_value: e.old_value != null ? String(e.old_value) : null,
        new_value: e.new_value != null ? String(e.new_value) : null,
    }));

    const { error } = await supabaseAdmin.from('booking_audit_logs').insert(rows);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ success: true });
}

// GET: Fetch audit logs for a booking
export async function GET(request: NextRequest) {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const bookingId = new URL(request.url).searchParams.get('booking_id');
    if (!bookingId) return NextResponse.json({ error: 'Missing booking_id' }, { status: 400 });

    const { data, error } = await supabaseAdmin
        .from('booking_audit_logs')
        .select('*')
        .eq('booking_id', bookingId)
        .order('created_at', { ascending: false })
        .limit(100);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ logs: data ?? [] });
}
