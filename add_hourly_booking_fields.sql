-- Add hourly-hire support to Bookings Table
-- Run this in the Supabase SQL Editor (https://supabase.com)
-- Needed so customers can request a driver "by the hour" (no fixed destination)
-- instead of only point-to-point / return trips.

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS trip_type VARCHAR(20) DEFAULT 'point_to_point',
ADD COLUMN IF NOT EXISTS duration_hours INTEGER;

-- Verify columns
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'bookings' AND column_name IN ('trip_type', 'duration_hours');
