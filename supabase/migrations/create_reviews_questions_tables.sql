-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title TEXT NOT NULL,
    review TEXT NOT NULL,
    route TEXT,
    travel_date DATE,
    location TEXT,
    service TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    admin_response TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    approved_at TIMESTAMP WITH TIME ZONE,
    responded_at TIMESTAMP WITH TIME ZONE
);

-- Create questions table
CREATE TABLE IF NOT EXISTS questions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    category TEXT NOT NULL,
    question TEXT NOT NULL,
    location TEXT,
    service TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'answered', 'rejected')),
    answer TEXT,
    answered_by TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    answered_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_reviews_status ON reviews(status);
CREATE INDEX IF NOT EXISTS idx_reviews_location ON reviews(location);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_questions_status ON questions(status);
CREATE INDEX IF NOT EXISTS idx_questions_category ON questions(category);
CREATE INDEX IF NOT EXISTS idx_questions_created_at ON questions(created_at DESC);

-- Enable Row Level Security
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

-- Policies for reviews
CREATE POLICY "Public can view approved reviews" ON reviews
    FOR SELECT USING (status = 'approved');

CREATE POLICY "Authenticated users can manage reviews" ON reviews
    FOR ALL USING (auth.role() = 'authenticated');

-- Policies for questions
CREATE POLICY "Public can view answered questions" ON questions
    FOR SELECT USING (status = 'answered');

CREATE POLICY "Authenticated users can manage questions" ON questions
    FOR ALL USING (auth.role() = 'authenticated');

-- Allow anyone to insert (for public submission)
CREATE POLICY "Anyone can submit reviews" ON reviews
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can submit questions" ON questions
    FOR INSERT WITH CHECK (true);
