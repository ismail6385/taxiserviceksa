-- Add review-request tracking to Bookings Table
-- Run this in the Supabase SQL Editor (https://supabase.com)
-- Needed by the new review-request cron (app/api/cron/send-review-requests)
-- so it knows which completed trips have already been asked for a review.

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS review_requested BOOLEAN DEFAULT false;

-- Verify column
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'bookings' AND column_name = 'review_requested';
