# 🚖 Project: Intelligent Taxi Booking Agent (RAG + Automation)

**Role:** Senior AI Engineer & Full Stack Developer
**Task:** Build/Deploy a RAG-based Chatbot for "TaxiServiceKSA" that answers customer queries from PDF documents and automates ride bookings.

## 🛠️ Tech Stack
- **Backend:** Python (FastAPI)
- **AI Brain:** Google Gemini 2.0 Flash (via `google-generativeai`)
- **Knowledge Base:** Supabase PostgreSQL (with `pgvector` extension)
- **Embeddings:** HuggingFace (`all-MiniLM-L6-v2`)
- **Frontend:** React/Next.js (Floating Chat Widget)

## ⚡ Core Features required:
1.  **RAG Pipeline:**
    - Ingest policy/rate-list PDFs.
    - Chunk text (500 chars) and generate vector embeddings.
    - Store in Supabase `documents` table.
    - Retrieval: Use Cosine Similarity to find relevant answers.

2.  **Smart Chat & Auto-Booking:**
    - If user asks general questions, answer from PDF.
    - If user provides **[Pickup, Dropoff, Phone]**, the AI must detect this intent.
    - **Logic:** The AI should output a hidden JSON tag: `||BOOKING_START||{"pickup": "...", "dropoff": "...", "phone": "..."}||BOOKING_END||`.
    - **Backend Action:** Parse this tag and insert a record into Supabase `bookings` table.

3.  **Chat History:**
    - Store every message (User/Bot) in Supabase `chats` table to maintain context.

4.  **Frontend Widget:**
    - A plug-and-play `ChatWidget.tsx` component.
    - Floating bubble style (like Intercom).
    - Hardcoded API URL pointing to the Backend.

## 💾 Database Schema (Supabase)
- `documents`: (id, content, embedding, metadata)
- `chats`: (id, role, message, created_at)
- `bookings`: (id, pickup, dropoff, phone, status)

## 🚀 Deliverables
- Fully functional `main.py` (FastAPI Server).
- `rag_core.py` (Logic for Embeddings & Gemini).
- `setup_database.sql` (Schema).
- `ChatWidget.tsx` (Frontend).

**Objective:** The system must run on low cost (Free Tier Gemini/Supabase) and handle daily customer queries efficiently.
