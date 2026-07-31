-- Add columns that the app code has used for a while but were never
-- committed to a tracked migration (driver plate/phone, currency, payment method).
-- Run this in the Supabase SQL Editor (https://supabase.com)
-- This is why saving a driver's plate number (or currency/payment method) from
-- the admin panel could fail: the column may not actually exist in the DB.

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS driver_phone VARCHAR(50),
ADD COLUMN IF NOT EXISTS driver_plate VARCHAR(50),
ADD COLUMN IF NOT EXISTS currency VARCHAR(10) DEFAULT 'SAR',
ADD COLUMN IF NOT EXISTS payment_method VARCHAR(50);

-- Verify columns
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'bookings'
AND column_name IN ('driver_phone', 'driver_plate', 'currency', 'payment_method');
