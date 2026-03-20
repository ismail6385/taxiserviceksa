-- Update Bookings Table Schema
-- Run this in the Supabase SQL Editor (https://supabase.com)

ALTER TABLE bookings 
ADD COLUMN IF NOT EXISTS has_return_trip BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS child_seats INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS payment_status VARCHAR(50) DEFAULT 'unpaid',
ADD COLUMN IF NOT EXISTS driver_name VARCHAR(255),
ADD COLUMN IF NOT EXISTS flight_number VARCHAR(100),
ADD COLUMN IF NOT EXISTS actual_vehicle VARCHAR(255),
ADD COLUMN IF NOT EXISTS tags TEXT,
ADD COLUMN IF NOT EXISTS internal_notes TEXT;

-- Verify columns
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'bookings';
