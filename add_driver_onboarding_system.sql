-- ============================================================
-- Driver Onboarding + Vehicle Directory + Admin Approval system.
-- Run this in the Supabase SQL Editor (after supabase-rls-hardening.sql,
-- since it uses the is_admin() helper that script creates).
--
-- This EXTENDS the existing `drivers` table (used today by the
-- join-as-driver / partner-registration lead-capture forms and the
-- /admin/drivers page) rather than replacing it. The legacy `status`
-- column ('pending'|'approved'|'rejected') and that admin page are left
-- completely untouched — this adds a separate `onboarding_status` column
-- and a new set of tables that only the new /driver/onboarding wizard and
-- /admin/driver-management screens read/write. A lead captured by the old
-- forms is a different concept (a name+phone recruiting lead) from a fully
-- onboarded, publicly-listed driver profile with vehicle photos, service
-- areas and documents; admin creates a fresh onboarding link (a new
-- `drivers` row) when they want to move someone into the new flow.
-- ============================================================

ALTER TABLE drivers
  ADD COLUMN IF NOT EXISTS onboarding_token text UNIQUE,
  ADD COLUMN IF NOT EXISTS onboarding_token_expires_at timestamptz,
  ADD COLUMN IF NOT EXISTS onboarding_status text NOT NULL DEFAULT 'DRAFT'
    CHECK (onboarding_status IN ('DRAFT', 'PENDING_REVIEW', 'CHANGES_REQUESTED', 'APPROVED', 'REJECTED', 'SUSPENDED')),
  ADD COLUMN IF NOT EXISTS slug text UNIQUE,
  ADD COLUMN IF NOT EXISTS display_name text,
  ADD COLUMN IF NOT EXISTS whatsapp_number text,
  ADD COLUMN IF NOT EXISTS profile_photo_url text,
  ADD COLUMN IF NOT EXISTS languages text[] DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS years_experience integer,
  ADD COLUMN IF NOT EXISTS driver_type text,
  ADD COLUMN IF NOT EXISTS availability text,
  ADD COLUMN IF NOT EXISTS bio text,
  ADD COLUMN IF NOT EXISTS additional_notes text,
  ADD COLUMN IF NOT EXISTS changes_requested_feedback text,
  ADD COLUMN IF NOT EXISTS submitted_at timestamptz,
  ADD COLUMN IF NOT EXISTS approved_at timestamptz,
  ADD COLUMN IF NOT EXISTS suspended_at timestamptz,
  ADD COLUMN IF NOT EXISTS reviewed_by text;

-- One current vehicle per driver (structured so a future driver_id
-- FK-only-unique constraint could be relaxed to support multiple vehicles
-- later without a schema rewrite).
CREATE TABLE IF NOT EXISTS driver_vehicles (
  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_id           uuid NOT NULL REFERENCES drivers(id) ON DELETE CASCADE UNIQUE,
  make                text,
  model               text,
  year                integer,
  category            text,
  color               text,
  passenger_capacity  integer,
  luggage_capacity    integer,
  registration_info   text,
  notes               text,
  -- Named slots: front, rear, left, right, interior_front, interior_rear,
  -- boot, dashboard, additional -> each { url, uploaded_at }
  photos              jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at          timestamptz DEFAULT now(),
  updated_at          timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS driver_locations (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_id      uuid NOT NULL REFERENCES drivers(id) ON DELETE CASCADE,
  location_slug  text NOT NULL,
  created_at     timestamptz DEFAULT now(),
  UNIQUE (driver_id, location_slug)
);
CREATE INDEX IF NOT EXISTS idx_driver_locations_slug ON driver_locations(location_slug);

CREATE TABLE IF NOT EXISTS driver_services (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_id     uuid NOT NULL REFERENCES drivers(id) ON DELETE CASCADE,
  service_slug  text NOT NULL,
  created_at    timestamptz DEFAULT now(),
  UNIQUE (driver_id, service_slug)
);
CREATE INDEX IF NOT EXISTS idx_driver_services_slug ON driver_services(service_slug);

-- PRIVATE admin-only data — never selected by any public-facing code path.
CREATE TABLE IF NOT EXISTS driver_documents (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_id   uuid NOT NULL REFERENCES drivers(id) ON DELETE CASCADE,
  doc_type    text NOT NULL,
  file_url    text NOT NULL,
  uploaded_at timestamptz DEFAULT now()
);

ALTER TABLE driver_vehicles   ENABLE ROW LEVEL SECURITY;
ALTER TABLE driver_locations  ENABLE ROW LEVEL SECURITY;
ALTER TABLE driver_services   ENABLE ROW LEVEL SECURITY;
ALTER TABLE driver_documents  ENABLE ROW LEVEL SECURITY;

-- No public policies on any of these four tables, intentionally — the
-- onboarding wizard and public driver pages are both server-only code
-- (API routes / Server Components) using the service-role client, which
-- bypasses RLS. Only an authenticated admin (is_admin()) can read/write
-- these tables directly; anonymous/browser access has zero grants.
DROP POLICY IF EXISTS "Admin full access" ON driver_vehicles;
CREATE POLICY "Admin full access" ON driver_vehicles
    FOR ALL USING (is_admin()) WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admin full access" ON driver_locations;
CREATE POLICY "Admin full access" ON driver_locations
    FOR ALL USING (is_admin()) WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admin full access" ON driver_services;
CREATE POLICY "Admin full access" ON driver_services
    FOR ALL USING (is_admin()) WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admin full access" ON driver_documents;
CREATE POLICY "Admin full access" ON driver_documents
    FOR ALL USING (is_admin()) WITH CHECK (is_admin());

SELECT 'Driver onboarding schema added. Create the storage buckets listed in the driver onboarding report before testing uploads.' AS message;
