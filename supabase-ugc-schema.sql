-- UGC Tables: Reviews and Questions
-- Run this in your Supabase SQL Editor to fix the RLS issues

-- Create Reviews Table
CREATE TABLE IF NOT EXISTS reviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    rating INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    review TEXT NOT NULL,
    route VARCHAR(255),
    travel_date DATE,
    location VARCHAR(255),
    service VARCHAR(255),
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    admin_response TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    approved_at TIMESTAMP WITH TIME ZONE,
    responded_at TIMESTAMP WITH TIME ZONE
);

-- Create Questions Table
CREATE TABLE IF NOT EXISTS questions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL DEFAULT 'General',
    question TEXT NOT NULL,
    location VARCHAR(255),
    service VARCHAR(255),
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'answered', 'rejected')),
    answer TEXT,
    answered_by VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    answered_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS (Ensure tables exist first)
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

-- Policies for Reviews

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Public can view approved reviews" ON reviews;
DROP POLICY IF EXISTS "Public can submit reviews" ON reviews;
DROP POLICY IF EXISTS "Admin can manage reviews" ON reviews;

-- Allow anyone to read APPROVED reviews
CREATE POLICY "Public can view approved reviews" ON reviews
    FOR SELECT
    USING (status = 'approved');

-- Allow anyone to insert reviews (submission)
CREATE POLICY "Public can submit reviews" ON reviews
    FOR INSERT
    WITH CHECK (true);

-- Allow authenticated users (admin) to manage reviews
CREATE POLICY "Admin can manage reviews" ON reviews
    FOR ALL
    USING (auth.role() = 'authenticated');

-- Policies for Questions

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Public can view answered questions" ON questions;
DROP POLICY IF EXISTS "Public can submit questions" ON questions;
DROP POLICY IF EXISTS "Admin can manage questions" ON questions;

-- Allow anyone to read ANSWERED questions
CREATE POLICY "Public can view answered questions" ON questions
    FOR SELECT
    USING (status = 'answered');

-- Allow anyone to insert questions (submission)
CREATE POLICY "Public can submit questions" ON questions
    FOR INSERT
    WITH CHECK (true);

-- Allow authenticated users (admin) to manage questions
CREATE POLICY "Admin can manage questions" ON questions
    FOR ALL
    USING (auth.role() = 'authenticated');

-- Create indexes (IF NOT EXISTS is already handled by CREATE INDEX IF NOT EXISTS syntax usually, but good practice)
CREATE INDEX IF NOT EXISTS idx_reviews_status ON reviews(status);
CREATE INDEX IF NOT EXISTS idx_reviews_location ON reviews(location);
CREATE INDEX IF NOT EXISTS idx_questions_status ON questions(status);
CREATE INDEX IF NOT EXISTS idx_questions_location ON questions(location);
