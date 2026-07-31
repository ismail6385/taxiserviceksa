-- Add multi-day trip support to Bookings Table
-- Run this in the Supabase SQL Editor (https://supabase.com)
-- Needed for package bookings that span more than one day (e.g. 3-day tour with a resort pickup/drop),
-- where a single Pickup Date isn't enough to describe the trip.

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS trip_end_date DATE;

-- Verify column
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'bookings' AND column_name = 'trip_end_date';
