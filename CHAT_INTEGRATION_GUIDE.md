# Taxi Chatbot Integration Guide

## Overview
I have successfully integrated the "ChatWithDocs" system into your main `taxiserviceksa.com` website. The chatbot now has full knowledge of your website content and can handle bookings.

## 1. Features Added
- **Site-Wide Knowledge**: I indexed **239 pages** of your website (English & Urdu) into the AI's memory. It knows your routes, services, and locations.
- **Smart Booking**: If a user asks to book and provides details (Pickup, Dropoff, Phone), the bot redirects them to the Booking Page with the form **pre-filled**.
- **Navigation**: If a user asks for "prices" or "blog", the bot will navigate them to the correct page automatically.
- **Integrated UI**: The Chat Widget is now part of your main site layout (bottom-right corner), matching your design.

## 2. How to Run
To see the chatbot in action, you need to run the Python backend alongside your Next.js app.

### Step A: Start the Backend (Python)
1. Open a terminal.
2. Go to the backend folder:
   ```powershell
   cd d:\taxiksa\TaxiKSA_Integration_Pack\backend
   ```
3. Run the server:
   ```powershell
   python -m uvicorn main:app --reload --port 8000
   ```
   *Ensure your `.env` file in `TaxiKSA_Integration_Pack` has `SUPABASE_URL`, `SUPABASE_KEY`, and `GEMINI_API_KEY`.*

### Step B: Start the Website (Next.js)
1. Open a new terminal.
2. Go to the root folder:
   ```powershell
   cd d:\taxiksa
   ```
3. Run the dev server:
   ```powershell
   npm run dev
   ```

## 3. Testing
1. Click the **Chat Icon** (bottom right).
2. Ask: *"How much is a taxi from Jeddah to Makkah?"* -> It should quote prices from your site pages.
3. Ask: *"I want to book a taxi from Jeddah Airport to Fairmont Makkah. My phone is 0555555555."* -> It should say "Redirecting..." and take you to the booking page with these details filled in.
