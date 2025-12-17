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
