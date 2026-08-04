-- Add estimated distance/duration to Bookings Table
-- Run this in the Supabase SQL Editor (https://supabase.com)
-- Shown on the Quotation document so the customer can see roughly how
-- many kilometers and how long the trip will take.

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS distance_km INTEGER,
ADD COLUMN IF NOT EXISTS duration_estimate TEXT;

-- Verify columns
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'bookings' AND column_name IN ('distance_km', 'duration_estimate');
