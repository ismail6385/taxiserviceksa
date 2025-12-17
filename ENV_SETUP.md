# Environment Variables Setup

Create a `.env.local` file in the root directory with these values:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://fdojxnluwuzsqeejslzo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkb2p4bmx1d3V6c3FlZWpzbHpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4ODQzMjgsImV4cCI6MjA4MTQ2MDMyOH0.TaoQFtgnOrE1KVmTyweuPjENOHDmgtXBP__aZYMIWjA
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkb2p4bmx1d3V6c3FlZWpzbHpvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTg4NDMyOCwiZXhwIjoyMDgxNDYwMzI4fQ.FoMKTuznOjWu2MdD-32RrNXK8Birul1GY28dDXnVHlo

# Resend Email Configuration
RESEND_API_KEY=re_5kKdnCAR_mLeyHteVFREEe5LwnZFy5Exx

# Admin Configuration
ADMIN_EMAIL=taxiserviceksa9988@gmail.com
NEXT_PUBLIC_SITE_URL=https://taxiserviceksa.com
```

## Setup Instructions:

1. Copy the above content
2. Create `.env.local` file in `d:\taxiksa\`
3. Paste the content
4. Save the file
5. Restart the dev server

## Next Steps:

After creating `.env.local`, I will:
- Install required packages (Supabase client, Resend)
- Create Supabase database table
- Build 3-step booking form
- Setup email notifications
- Create admin dashboard
