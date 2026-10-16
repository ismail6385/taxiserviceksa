-- Passenger nationality, needed for border-crossing trips (Bahrain, UAE,
-- Qatar, Kuwait, Oman, Jordan). Asked on the booking form for cross-border
-- routes and printed on the quotation, invoice and receipt.
-- Run once in the Supabase SQL Editor.

ALTER TABLE bookings ADD COLUMN IF NOT EXISTS passenger_nationality text;
