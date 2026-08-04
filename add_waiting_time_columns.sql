-- Add waiting-time tracking to Bookings Table
-- Run this in the Supabase SQL Editor (https://supabase.com)
-- Lets admin log when the driver arrived vs when the trip actually
-- started, so extra waiting time beyond the free allowance can be
-- calculated and optionally added to the price.

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS driver_arrived_at TIME,
ADD COLUMN IF NOT EXISTS trip_started_at TIME;

-- Verify columns
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'bookings' AND column_name IN ('driver_arrived_at', 'trip_started_at');
