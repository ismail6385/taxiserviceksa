-- ============================================================
-- Adds a persisted "additional stops" list to bookings — e.g. named
-- Ziyarat sites (Masjid Quba, Jabal Uhud, Al-Hada Cable Car, etc.) or any
-- other intermediate waypoints for a single-trip booking.
--
-- Before this migration, the admin invoice page (app/(main)/admin/
-- bookings/[id]/invoice/page.tsx) already had an "Extra Stops" builder
-- UI, but it only lived in local React state — it was never saved
-- anywhere, so reopening the invoice always showed an empty list. This
-- column makes that data real and shared across the admin create/edit
-- booking form, the quote email, and the invoice.
-- ============================================================

ALTER TABLE bookings ADD COLUMN IF NOT EXISTS additional_stops JSONB;

SELECT 'additional_stops column added to bookings.' AS message;
