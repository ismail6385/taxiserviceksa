-- ============================================================
-- RLS Hardening — run this yourself in the Supabase SQL Editor.
-- Claude does not have a way to execute SQL against your production
-- database, and this changes access rules on live customer data, so
-- it must be reviewed and run by a human.
--
-- BEFORE RUNNING:
--   1. Replace the email below with the real email address(es) you use
--      to log into /admin/login. Add more rows for additional admins.
--   2. Read through each policy once — this assumes the table/column
--      names currently in the repo's schema files and lib/*Service.ts.
--      If your live schema differs, adjust accordingly.
--
-- WHAT THIS FIXES:
--   Today, admin reads/writes (bookings, blogs, reviews, comments,
--   pricing_rules) go through the browser using the public anon API
--   key — the same key embedded in every page's JS bundle. Whether
--   that's actually a leak depends entirely on each table's RLS
--   policies. This script locks every table down to: anon can only
--   INSERT where a public form needs to (booking, review, comment,
--   question) or SELECT already-public rows (published blogs,
--   approved reviews/comments/questions) — everything else requires
--   being in admin_users.
-- ============================================================

-- 1. Admin allowlist table
CREATE TABLE IF NOT EXISTS admin_users (
    email TEXT PRIMARY KEY
);

-- >>> EDIT THIS: put your real admin login email(s) here <<<
INSERT INTO admin_users (email) VALUES ('haramtaxiservice@gmail.com')
ON CONFLICT (email) DO NOTHING;

-- Helper used by every policy below
CREATE OR REPLACE FUNCTION is_admin() RETURNS boolean AS $$
    SELECT EXISTS (
        SELECT 1 FROM admin_users WHERE email = auth.email()
    );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- ============================================================
-- bookings — contains customer name/phone/email. Currently only has
-- "service_role can do everything" + "anyone can insert" policies, and
-- no SELECT policy at all for anon/authenticated — which is why a
-- "disable RLS" workaround exists in this repo's history. Re-enabling
-- RLS with a real admin policy is what actually fixes the admin panel
-- AND closes the read hole, instead of leaving RLS off.
-- ============================================================
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Service role can do everything" ON bookings;
DROP POLICY IF EXISTS "Anyone can create bookings" ON bookings;
DROP POLICY IF EXISTS "Enable insert for anon users" ON bookings;
DROP POLICY IF EXISTS "Enable read for service role" ON bookings;
DROP POLICY IF EXISTS "Enable all for service role" ON bookings;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON bookings;
DROP POLICY IF EXISTS "Admin full access" ON bookings;

CREATE POLICY "Anyone can create bookings" ON bookings
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin full access" ON bookings
    FOR ALL USING (is_admin()) WITH CHECK (is_admin());

-- ============================================================
-- reviews / questions — existing policies let ANY authenticated
-- Supabase user manage them (auth.role() = 'authenticated'), not just
-- admins. Tightened to the admin_users allowlist.
-- ============================================================
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admin can manage reviews" ON reviews;
DROP POLICY IF EXISTS "Public can view approved reviews" ON reviews;
DROP POLICY IF EXISTS "Public can submit reviews" ON reviews;

CREATE POLICY "Public can view approved reviews" ON reviews
    FOR SELECT USING (status = 'approved');
CREATE POLICY "Public can submit reviews" ON reviews
    FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin full access" ON reviews
    FOR ALL USING (is_admin()) WITH CHECK (is_admin());

DROP POLICY IF EXISTS "Admin can manage questions" ON questions;
DROP POLICY IF EXISTS "Public can view answered questions" ON questions;
DROP POLICY IF EXISTS "Public can submit questions" ON questions;

CREATE POLICY "Public can view answered questions" ON questions
    FOR SELECT USING (status = 'answered');
CREATE POLICY "Public can submit questions" ON questions
    FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin full access" ON questions
    FOR ALL USING (is_admin()) WITH CHECK (is_admin());

-- ============================================================
-- blogs — public site reads status = 'published' anonymously
-- (blogService.getPublishedBlogs). Drafts and writes are admin-only.
-- ============================================================
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can view published blogs" ON blogs;
DROP POLICY IF EXISTS "Admin full access" ON blogs;

CREATE POLICY "Public can view published blogs" ON blogs
    FOR SELECT USING (status = 'published');
CREATE POLICY "Admin full access" ON blogs
    FOR ALL USING (is_admin()) WITH CHECK (is_admin());

-- ============================================================
-- blog_comments — public can submit (pending) and read approved
-- comments for a post; moderation is admin-only.
-- ============================================================
ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can view approved comments" ON blog_comments;
DROP POLICY IF EXISTS "Public can submit comments" ON blog_comments;
DROP POLICY IF EXISTS "Admin full access" ON blog_comments;

CREATE POLICY "Public can view approved comments" ON blog_comments
    FOR SELECT USING (status = 'approved');
CREATE POLICY "Public can submit comments" ON blog_comments
    FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin full access" ON blog_comments
    FOR ALL USING (is_admin()) WITH CHECK (is_admin());

-- ============================================================
-- pricing_rules — only ever read/written from the admin panel.
-- No public policy at all: default-deny for anon.
-- ============================================================
ALTER TABLE pricing_rules ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admin full access" ON pricing_rules;

CREATE POLICY "Admin full access" ON pricing_rules
    FOR ALL USING (is_admin()) WITH CHECK (is_admin());

-- ============================================================
-- promo_codes — validated only through /api/validate-promo, which
-- already uses the service-role key. No public policy needed.
-- ============================================================
ALTER TABLE promo_codes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admin full access" ON promo_codes;

CREATE POLICY "Admin full access" ON promo_codes
    FOR ALL USING (is_admin()) WITH CHECK (is_admin());

SELECT 'RLS hardening applied. Log into /admin with an email from admin_users and confirm bookings/blogs/reviews/comments/pricing still load.' AS message;
