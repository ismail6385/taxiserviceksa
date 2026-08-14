-- Add return-leg pickup/drop-off location columns to the Bookings table.
-- Run this in the Supabase SQL Editor (https://supabase.com), same as
-- add_return_trip_datetime.sql.
--
-- Round trips previously only recorded a return DATE/TIME and always
-- assumed the return leg was simply the outbound route reversed (e.g. a
-- Bahrain -> Dammam outbound implicitly became Dammam -> Bahrain on return).
-- That assumption doesn't hold for every trip (e.g. outbound picks up at
-- an airport, return drops off at a different hotel), so the return leg
-- needs its own real pickup/drop-off locations.
--
-- Both columns are nullable and purely additive — existing bookings
-- (including round trips created before this migration) are unaffected.
-- The app must treat NULL return_pickup_location/return_destination as
-- "not explicitly recorded" and fall back to the outbound route reversed
-- (lib/booking-validation.ts's getReturnRoute()) — never as an error, and
-- never blank in the UI.

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS return_pickup_location TEXT,
ADD COLUMN IF NOT EXISTS return_destination TEXT;

-- Verify columns
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'bookings' AND column_name IN ('return_pickup_location', 'return_destination');
