import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';

// Server-side check for the admin cookie session. Mirrors the pattern already
// used in app/api/admin/bookings/[id]/route.ts.
// If ADMIN_EMAILS is set (comma-separated), the signed-in user's email must be
// in that list — otherwise any authenticated Supabase user counts as admin.
export async function getAdminSession() {
    const cookieStore = cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        { cookies: { get: (name) => cookieStore.get(name)?.value } }
    );
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return null;

    const allowlist = process.env.ADMIN_EMAILS;
    if (allowlist) {
        const allowed = allowlist.split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
        const email = session.user.email?.toLowerCase();
        if (!email || !allowed.includes(email)) return null;
    }

    return session;
}

// For server-to-server calls (e.g. one API route invoking another) that
// can't carry a browser session cookie. Caller must send this header with a
// value matching INTERNAL_API_SECRET.
export function isInternalRequest(request: NextRequest | Request): boolean {
    const secret = process.env.INTERNAL_API_SECRET;
    if (!secret) return false;
    const header = (request as Request).headers.get('x-internal-secret');
    return header === secret;
}
