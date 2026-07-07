-- ============================================================
-- DO NOT RUN THIS ON PRODUCTION.
-- This disables Row Level Security on `bookings`, which means ANY
-- visitor (using only the public anon API key already shipped in the
-- site's JS bundle) can read every customer's name, phone, and email,
-- and write/delete rows. Kept here only as a historical record of a
-- debugging step — see supabase-rls-hardening.sql for the correct fix.
-- ============================================================
-- Temporary Fix: Disable RLS for Testing
-- Run this in Supabase SQL Editor
-- WARNING: This is for development/testing only!

-- Disable RLS on bookings table
ALTER TABLE bookings DISABLE ROW LEVEL SECURITY;

-- Success message
SELECT 'RLS disabled! Bookings should work now. Re-enable RLS later for production.' as message;

-- ========================================
-- TO RE-ENABLE RLS LATER (for production):
-- ========================================
-- ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
-- 
-- Then create proper policies:
-- 
-- CREATE POLICY "Allow public insert" ON bookings
--   FOR INSERT
--   WITH CHECK (true);
-- 
-- CREATE POLICY "Allow service role all" ON bookings
--   FOR ALL
--   USING (auth.role() = 'service_role');
