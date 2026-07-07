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
  ADD COLUMN IF NOT EXISTS deleted_by text;

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

SELECT 'Missing schema added. Reload the dashboard/customers/notifications/reports/calendar/whatsapp-templates pages.' AS message;
