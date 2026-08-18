-- Multi-stop itinerary support for bookings that involve more than one
-- pickup/drop-off pair (e.g. a multi-day retreat or event with several
-- trips across several dates) — the existing pickup/destination +
-- return_pickup_location/return_destination fields only cover a single
-- outbound leg plus a single return leg.
--
-- itinerary_legs stores an ordered array of extra legs as JSON:
--   [{ "date": "2026-10-16", "time": "15:15", "pickup": "Dar Tantora",
--      "dropoff": "Hegra" }, ...]
-- Nullable and purely additive — existing bookings are unaffected, and the
-- primary pickup_location/destination fields remain the first leg exactly
-- as before.

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS itinerary_legs JSONB;

-- Verify
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'bookings' AND column_name = 'itinerary_legs';
