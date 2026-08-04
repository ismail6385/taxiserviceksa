-- Add permanent, sequential invoice numbers to Bookings
-- Run this in the Supabase SQL Editor (https://supabase.com)
-- Not required for ZATCA/VAT e-invoicing (you're not VAT-registered) —
-- this is just proper bookkeeping practice: a clean INV-000001,
-- INV-000002... sequence instead of a number derived from the booking's
-- date/ID, assigned once and never changing when you reopen the invoice.

CREATE SEQUENCE IF NOT EXISTS invoice_number_seq START 1;

ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS invoice_number TEXT UNIQUE;

CREATE OR REPLACE FUNCTION assign_invoice_number(p_booking_id uuid)
RETURNS text AS $$
DECLARE
  existing_number text;
  new_number text;
BEGIN
  SELECT invoice_number INTO existing_number FROM bookings WHERE id = p_booking_id;
  IF existing_number IS NOT NULL THEN
    RETURN existing_number;
  END IF;

  new_number := 'INV-' || LPAD(nextval('invoice_number_seq')::text, 6, '0');
  UPDATE bookings SET invoice_number = new_number WHERE id = p_booking_id;
  RETURN new_number;
END;
$$ LANGUAGE plpgsql;

-- Verify
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'bookings' AND column_name = 'invoice_number';
