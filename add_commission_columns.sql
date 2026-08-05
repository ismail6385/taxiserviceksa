-- Add commission tracking (driver payout vs. platform commission)
-- Run this in the Supabase SQL Editor (https://supabase.com)
-- The business is a commission broker, not a fleet owner — every driver
-- uses their own car. This lets each driver have a default commission %
-- (set on /admin/drivers), which auto-fills on a booking when that
-- driver is assigned, and can be overridden per booking.
--
-- Self-contained: creates the drivers table if it doesn't exist yet
-- (the join-as-driver public form already inserts into it, but nothing
-- had created the table in this database).

CREATE TABLE IF NOT EXISTS drivers (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name       text NOT NULL,
  phone_number    text NOT NULL,
  email           text NOT NULL,
  city            text NOT NULL,
  vehicle_model   text NOT NULL,
  status          text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  admin_notes     text,
  reviewed_at     timestamptz,
  commission_rate numeric(5,2),
  created_at      timestamptz DEFAULT now()
);
ALTER TABLE drivers
  ADD COLUMN IF NOT EXISTS admin_notes text,
  ADD COLUMN IF NOT EXISTS reviewed_at timestamptz,
  ADD COLUMN IF NOT EXISTS commission_rate numeric(5,2);

ALTER TABLE drivers ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can submit driver applications" ON drivers;
DROP POLICY IF EXISTS "Admin full access" ON drivers;
CREATE POLICY "Public can submit driver applications" ON drivers
    FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin full access" ON drivers
    FOR ALL USING (auth.role() = 'authenticated');

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS commission_rate NUMERIC(5,2);

-- Verify columns
SELECT table_name, column_name, data_type
FROM information_schema.columns
WHERE column_name = 'commission_rate' AND table_name IN ('drivers', 'bookings');
