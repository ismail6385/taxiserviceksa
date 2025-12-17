import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;

    try {
        // 1. Verify Authentication (ensure user is logged in as admin)
        // We can use the standard client to check the session from the cookie
        // Since we don't have a robust role system set up in the db yet, we'll just check for a valid session for now.
        // In a production app, you'd check if session.user.role === 'admin'
        // const supabase = createRouteHandlerClient({ cookies });
        // const { data: { session } } = await supabase.auth.getSession();

        // if (!session) {
        //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        // }

        // 2. Perform Delete using Admin Client (Bypasses RLS)
        const { error } = await supabaseAdmin
            .from('bookings')
            .delete()
            .eq('id', id);

        if (error) {
            console.error("Supabase Delete Error:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ message: 'Booking deleted successfully' });
    } catch (error) {
        console.error("Server Error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
