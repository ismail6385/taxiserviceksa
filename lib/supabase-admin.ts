
import { createClient } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Singleton pattern to prevent multiple instances
let supabaseAdminInstance: SupabaseClient | null = null

// Note: Using service role key bypasses RLS. Use with caution and only on server-side.
export const supabaseAdmin = (() => {
    if (!supabaseAdminInstance) {
        supabaseAdminInstance = createClient(supabaseUrl, supabaseServiceRoleKey, {
            auth: {
                autoRefreshToken: false,
                persistSession: false
            }
        })
    }
    return supabaseAdminInstance
})()
