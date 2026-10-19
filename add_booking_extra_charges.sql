-- Extra charges on a booking (e.g. "Border crossing charge" 181 SAR), shown
-- as separate lines on the quotation, invoice and receipt and added to the
-- total. transfer_price is the optional bank-transfer fare offered next to
-- the cash fare (total_price) on a quotation.
-- Run once in the Supabase SQL Editor.

ALTER TABLE bookings ADD COLUMN IF NOT EXISTS extra_charges jsonb;
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS transfer_price numeric(10,2);
-- true = 15% VAT is charged on top of total_price (4,500 + 675 = 5,175).
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS vat_added boolean;
