-- Add commission tracking (driver payout vs. platform commission)
-- Run this in the Supabase SQL Editor (https://supabase.com)
-- The business is a commission broker, not a fleet owner — every driver
-- uses their own car. This lets each driver have a default commission %
-- (set on /admin/drivers), which auto-fills on a booking when that
-- driver is assigned, and can be overridden per booking.

ALTER TABLE drivers
ADD COLUMN IF NOT EXISTS commission_rate NUMERIC(5,2);

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS commission_rate NUMERIC(5,2);

-- Verify columns
SELECT table_name, column_name, data_type
FROM information_schema.columns
WHERE column_name = 'commission_rate' AND table_name IN ('drivers', 'bookings');
