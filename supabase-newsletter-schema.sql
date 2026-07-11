-- ============================================================
-- newsletter_subscribers — backs the homepage "Be the first to
-- discover more" email signup form (components/HomeNewsletter.tsx,
-- app/api/newsletter/route.ts). Run this once against the Supabase
-- project before the form's inserts will persist.
-- ============================================================
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email       text NOT NULL UNIQUE,
  source      text NOT NULL DEFAULT 'homepage',
  created_at  timestamptz DEFAULT now()
);
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can subscribe" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Admin full access" ON newsletter_subscribers;

CREATE POLICY "Public can subscribe" ON newsletter_subscribers
    FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin full access" ON newsletter_subscribers
    FOR ALL USING (is_admin()) WITH CHECK (is_admin());

SELECT 'newsletter_subscribers table ready.' AS message;
