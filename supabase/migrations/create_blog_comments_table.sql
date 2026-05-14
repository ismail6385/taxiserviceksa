-- Create blog_comments table
CREATE TABLE IF NOT EXISTS blog_comments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    blog_slug TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    comment TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    admin_reply TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    approved_at TIMESTAMP WITH TIME ZONE
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_blog_comments_blog_slug ON blog_comments(blog_slug);
CREATE INDEX IF NOT EXISTS idx_blog_comments_status ON blog_comments(status);
CREATE INDEX IF NOT EXISTS idx_blog_comments_created_at ON blog_comments(created_at DESC);

-- Enable Row Level Security
ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;

-- Anyone can read approved comments
CREATE POLICY "Public can view approved comments" ON blog_comments
    FOR SELECT USING (status = 'approved');

-- Anyone can submit a comment
CREATE POLICY "Anyone can submit comments" ON blog_comments
    FOR INSERT WITH CHECK (true);

-- Authenticated users (admin) can manage all comments
CREATE POLICY "Authenticated users can manage comments" ON blog_comments
    FOR ALL USING (auth.role() = 'authenticated');
