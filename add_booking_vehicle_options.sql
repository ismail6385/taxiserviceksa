-- Multiple vehicle quotation options on one booking, e.g.
--   [{"id":"a1","vehicle":"Ford Taurus / Lexus Sedan","price":1250,"currency":"SAR","trip":"one_way","notes":null,"selected":false},
--    {"id":"b2","vehicle":"Chevrolet Tahoe SUV","price":1500,"currency":"SAR","trip":"one_way","notes":null,"selected":true}]
-- NULL = an ordinary single-vehicle booking (vehicle_type + total_price).
-- When an option is marked selected, the app also copies it into
-- vehicle_type / total_price / currency so invoices, receipts and the driver
-- message keep working unchanged. See lib/vehicle-options.ts.
-- Run once in the Supabase SQL Editor (safe to re-run).

ALTER TABLE bookings ADD COLUMN IF NOT EXISTS vehicle_options jsonb;
