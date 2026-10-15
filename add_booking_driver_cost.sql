-- Driver cost per booking (fuel, car, driver pay: everything spent on the trip).
-- Profit = total_price - driver_cost, split 50/50 between the owner and the
-- driver (see lib/profit-split.ts). Entered by the driver on their private
-- trip link (/my-trips/...) or by the admin.
-- Run once in the Supabase SQL Editor.

ALTER TABLE bookings ADD COLUMN IF NOT EXISTS driver_cost numeric(10,2);
