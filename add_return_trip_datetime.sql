-- Add return trip date/time columns to Bookings Table
-- Run this in the Supabase SQL Editor (https://supabase.com)
-- Needed so round-trip bookings (has_return_trip = true) can record a real,
-- structured return date/time instead of only free-text inside special_requests.
-- Both columns are nullable and purely additive — existing bookings (including
-- ones with has_return_trip = true created before this migration) are
-- unaffected. The app must treat a NULL return_date as "no return leg on
-- record / unspecified", never as an error, everywhere it's read.

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS return_date DATE,
ADD COLUMN IF NOT EXISTS return_time TIME;

-- Verify columns
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'bookings' AND column_name IN ('return_date', 'return_time');
