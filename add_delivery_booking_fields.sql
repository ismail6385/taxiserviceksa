-- Adds Delivery / Item Transfer support to the Bookings table.
-- Run this in the Supabase SQL Editor (https://supabase.com)
--
-- Booking type is additive, not a separate table: a delivery booking is a
-- normal row in `bookings` with booking_type = 'delivery'. It reuses
-- customer_name/customer_email/customer_phone as the SENDER, pickup_location
-- as the pickup point, destination as the drop-off point, and
-- special_requests as delivery instructions — exactly like a passenger
-- booking — so driver assignment, pricing, status, WhatsApp and tracking
-- all keep working unchanged (see lib/booking-validation.ts). Only the
-- recipient + item details below are new.
--
-- passengers/luggage are already nullable in the base schema, so a delivery
-- booking simply leaves them null instead of requiring a fake passenger
-- count.

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS booking_type VARCHAR(20) DEFAULT 'passenger',
ADD COLUMN IF NOT EXISTS recipient_name VARCHAR(255),
ADD COLUMN IF NOT EXISTS recipient_phone VARCHAR(50),
ADD COLUMN IF NOT EXISTS item_type VARCHAR(50),
ADD COLUMN IF NOT EXISTS item_description TEXT,
ADD COLUMN IF NOT EXISTS item_count INTEGER,
ADD COLUMN IF NOT EXISTS item_size_weight VARCHAR(255);

CREATE INDEX IF NOT EXISTS idx_bookings_booking_type ON bookings(booking_type);

-- Backfill existing rows explicitly (DEFAULT only applies to new inserts on
-- some Postgres versions' ALTER TABLE semantics for pre-existing rows —
-- this guarantees every legacy booking is explicitly 'passenger').
UPDATE bookings SET booking_type = 'passenger' WHERE booking_type IS NULL;

-- Verify columns
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'bookings'
AND column_name IN ('booking_type', 'recipient_name', 'recipient_phone', 'item_type', 'item_description', 'item_count', 'item_size_weight');
