-- Records how much of the total price has already been paid as a
-- deposit/advance (e.g. a customer paying 50% online, balance due later).
-- Nullable and purely additive — existing bookings are unaffected.
-- Balance due is always computed as total_price - deposit_amount, never
-- stored separately, so it can never drift out of sync.

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS deposit_amount NUMERIC;

-- Verify
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'bookings' AND column_name = 'deposit_amount';
