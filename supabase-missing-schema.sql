-- ============================================================
-- Run this in the Supabase SQL Editor (after supabase-rls-hardening.sql,
-- since it uses the is_admin() helper that script creates).
--
-- Fixes two things found via browser console errors on the admin panel:
--   1. bookings is missing deleted_at/deleted_by — the soft-delete
--      feature and the dashboard/customers/notifications/reports/
--      calendar pages all filter on deleted_at, so every one of those
--      queries was failing with a Postgres "column does not exist" 400.
--   2. whatsapp_templates table was never created — the admin page for
--      it already had this exact SQL sitting in its own source as a
--      "run this to set up" hint; it just never got run.
-- ============================================================

ALTER TABLE bookings
  ADD COLUMN IF NOT EXISTS deleted_at timestamptz,
  ADD COLUMN IF NOT EXISTS deleted_by text,
  ADD COLUMN IF NOT EXISTS reminder_sent boolean DEFAULT false;

CREATE TABLE IF NOT EXISTS whatsapp_templates (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title      text NOT NULL,
  category   text NOT NULL DEFAULT 'Custom',
  body       text NOT NULL,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE whatsapp_templates ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admin full access" ON whatsapp_templates;
CREATE POLICY "Admin full access" ON whatsapp_templates
    FOR ALL USING (is_admin()) WITH CHECK (is_admin());

-- ============================================================
-- drivers — the join-as-driver / driver-registration forms already
-- insert into this table (full_name, phone_number, email, city,
-- vehicle_model, status), but there was no admin UI to review
-- applications and the table may not have existed at all. Adds the
-- admin-only moderation columns and locks reads/writes to admin,
-- while keeping public application submission open.
-- ============================================================
CREATE TABLE IF NOT EXISTS drivers (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name     text NOT NULL,
  phone_number  text NOT NULL,
  email         text NOT NULL,
  city          text NOT NULL,
  vehicle_model text NOT NULL,
  status        text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  admin_notes   text,
  reviewed_at   timestamptz,
  created_at    timestamptz DEFAULT now()
);
ALTER TABLE drivers
  ADD COLUMN IF NOT EXISTS admin_notes text,
  ADD COLUMN IF NOT EXISTS reviewed_at timestamptz;
ALTER TABLE drivers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can submit driver applications" ON drivers;
DROP POLICY IF EXISTS "Admin full access" ON drivers;

CREATE POLICY "Public can submit driver applications" ON drivers
    FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin full access" ON drivers
    FOR ALL USING (is_admin()) WITH CHECK (is_admin());

-- ============================================================
-- support_inquiries — the admin Support inbox page already expected
-- this table (its own source has this exact setup SQL as a hint), but
-- the site's contact form only sent an email and never wrote here, so
-- the table may not exist and the inbox was always empty. The contact
-- API route now inserts into it too.
-- ============================================================
CREATE TABLE IF NOT EXISTS support_inquiries (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL,
  email       text NOT NULL,
  phone       text,
  subject     text NOT NULL,
  message     text NOT NULL,
  status      text NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'resolved')),
  booking_ref text,
  admin_notes text,
  created_at  timestamptz DEFAULT now()
);
ALTER TABLE support_inquiries
  ADD COLUMN IF NOT EXISTS admin_notes text;
ALTER TABLE support_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public insert" ON support_inquiries;
DROP POLICY IF EXISTS "Admin read/update" ON support_inquiries;
DROP POLICY IF EXISTS "Admin full access" ON support_inquiries;

CREATE POLICY "Public can submit inquiries" ON support_inquiries
    FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin full access" ON support_inquiries
    FOR ALL USING (is_admin()) WITH CHECK (is_admin());

SELECT 'Missing schema added. Reload the dashboard/customers/notifications/reports/calendar/whatsapp-templates/drivers/support pages.' AS message;
