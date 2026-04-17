import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
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

// Soft delete — sets deleted_at timestamp instead of removing the row
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    try {
        const session = await getSession();
        if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const { error } = await supabaseAdmin
            .from('bookings')
            .update({
                deleted_at: new Date().toISOString(),
                deleted_by: session.user.email,
            })
            .eq('id', id);

        if (error) {
            console.error('Supabase Soft Delete Error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ message: 'Booking moved to trash' });
    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

// Restore — clears deleted_at so the booking reappears in the main list
export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    try {
        const session = await getSession();
        if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const { error } = await supabaseAdmin
            .from('bookings')
            .update({ deleted_at: null, deleted_by: null })
            .eq('id', id);

        if (error) {
            console.error('Supabase Restore Error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ message: 'Booking restored' });
    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
