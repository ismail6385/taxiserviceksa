-- Bookings Table for Taxi Service KSA
-- Run this SQL in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- User Details (Step 1)
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50) NOT NULL,
  
  -- Trip Details (Step 2)
  pickup_location VARCHAR(500) NOT NULL,
  destination VARCHAR(500) NOT NULL,
  pickup_date DATE NOT NULL,
  pickup_time TIME NOT NULL,
  
  -- Vehicle Selection (Step 2)
  vehicle_type VARCHAR(100) NOT NULL,
  vehicle_image VARCHAR(500),
  passengers INTEGER,
  luggage INTEGER,
  
  -- Booking Status
  status VARCHAR(50) DEFAULT 'pending',
  -- pending, confirmed, completed, cancelled
  
  -- Additional Info
  special_requests TEXT,
  total_price DECIMAL(10, 2),
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(customer_email);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(pickup_date);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow service role to do everything
CREATE POLICY "Service role can do everything" ON bookings
  FOR ALL
  USING (auth.role() = 'service_role');

-- Create policy to allow anon users to insert bookings
CREATE POLICY "Anyone can create bookings" ON bookings
  FOR INSERT
  WITH CHECK (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Success message
SELECT 'Bookings table created successfully!' as message;
