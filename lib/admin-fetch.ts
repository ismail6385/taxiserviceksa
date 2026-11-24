import { supabase } from './supabase';

// This admin panel's session lives in localStorage (lib/supabase.ts uses the
// plain browser client, not @supabase/ssr's cookie-syncing client), so the
// server can't read it via cookies. Use this instead of plain fetch() for
// any admin-only API route — it attaches the current access token as a
// Bearer header so the server can verify it with supabase.auth.getUser().
//
// If the server answers 401 (access token expired while the page was open,
// e.g. the quotation page left open for an hour), the session is refreshed
// once and the request retried, so the admin doesn't see a random failure.
export async function adminFetch(url: string, options: RequestInit = {}) {
    const send = (token?: string) => {
        const headers = new Headers(options.headers);
        if (token) headers.set('Authorization', `Bearer ${token}`);
        return fetch(url, { ...options, headers });
    };

    const { data: { session } } = await supabase.auth.getSession();
    const res = await send(session?.access_token);
    if (res.status !== 401) return res;

    const { data: refreshed } = await supabase.auth.refreshSession();
    const token = refreshed.session?.access_token;
    if (!token || token === session?.access_token) return res;
    return send(token);
}
