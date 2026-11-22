-- Admin bookings can be saved before the pickup date/time (or route,
-- vehicle, customer details) are decided; they are filled in later.
-- Run once in the Supabase SQL Editor (safe to re-run).
-- Empty text fields are saved as '' by the app; date/time as NULL.

ALTER TABLE bookings ALTER COLUMN pickup_date DROP NOT NULL;
ALTER TABLE bookings ALTER COLUMN pickup_time DROP NOT NULL;
ALTER TABLE bookings ALTER COLUMN pickup_location DROP NOT NULL;
ALTER TABLE bookings ALTER COLUMN destination DROP NOT NULL;
ALTER TABLE bookings ALTER COLUMN vehicle_type DROP NOT NULL;
ALTER TABLE bookings ALTER COLUMN customer_name DROP NOT NULL;
ALTER TABLE bookings ALTER COLUMN customer_email DROP NOT NULL;
ALTER TABLE bookings ALTER COLUMN customer_phone DROP NOT NULL;
