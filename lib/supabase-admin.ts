
import { createClient } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

/** False during a Cloudflare build, where only public env vars are available. */
export const hasSupabaseAdmin = !!supabaseServiceRoleKey

// Singleton pattern to prevent multiple instances
let supabaseAdminInstance: SupabaseClient | null = null

function getSupabaseAdmin(): SupabaseClient {
    if (!supabaseServiceRoleKey) {
        // Fail loudly instead of silently falling back to the anon key — a silent
        // fallback would make admin-only writes look like they succeeded while
        // actually being subject to (or blocked by) anon RLS policies.
        throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set. Required for lib/supabase-admin.ts.')
    }
    if (!supabaseAdminInstance) {
        supabaseAdminInstance = createClient(supabaseUrl, supabaseServiceRoleKey, {
            auth: {
                autoRefreshToken: false,
                persistSession: false
            }
        })
    }
    return supabaseAdminInstance
}

// Note: Using service role key bypasses RLS. Use with caution and only on server-side.
// Created on first use (not at import) so the build doesn't need the secret key:
// on Cloudflare, secrets only exist at runtime.
export const supabaseAdmin = new Proxy({} as SupabaseClient, {
    get(_target, prop) {
        const client = getSupabaseAdmin()
        const value = Reflect.get(client, prop)
        return typeof value === 'function' ? value.bind(client) : value
    },
})
