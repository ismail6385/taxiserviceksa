-- ============================================================
-- SUPERSEDED — do not run as-is. This grants `service_role` FOR SELECT/ALL
-- with USING(true), which is redundant (service_role already bypasses RLS)
-- and grants `authenticated` FOR INSERT with no ownership check, meaning
-- any signed-up user could insert arbitrary bookings. It does not restrict
-- who can SELECT/UPDATE/DELETE bookings for the anon role, which is the
-- actual gap. See supabase-rls-hardening.sql for the corrected policy set.
-- ============================================================
-- Fix RLS Policy for Bookings Table
-- Run this in Supabase SQL Editor

-- Drop existing policies
DROP POLICY IF EXISTS "Service role can do everything" ON bookings;
DROP POLICY IF EXISTS "Anyone can create bookings" ON bookings;

-- Create new policies that actually work
CREATE POLICY "Enable insert for anon users" ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Enable read for service role" ON bookings
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Enable all for service role" ON bookings
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Also allow authenticated users (if needed later)
CREATE POLICY "Enable insert for authenticated users" ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Success message
SELECT 'RLS Policies updated successfully! Try booking again.' as message;
