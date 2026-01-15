from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import shutil
import os
import re
import json
from dotenv import load_dotenv

# Load env from parent directory or current
load_dotenv() 

# Import RAG Components from local file
from rag_core import PDFLoader, RecursiveTextSplitter, HuggingFaceEmbeddings, SupabaseVectorStore, GeminiLLM, RAGPipeline

# Initialize FastAPI
app = FastAPI(title="TaxiKSA AI Agent")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize RAG Logic
from supabase import create_client, Client
supabase_client: Client = None
rag_system = None

try:
    supabase_url = os.getenv("SUPABASE_URL")
    supabase_key = os.getenv("SUPABASE_KEY")
    gemini_key = os.getenv("GEMINI_API_KEY")
    
    if supabase_url and supabase_key:
        supabase_client = create_client(supabase_url, supabase_key)

    if supabase_url and supabase_key and gemini_key:
        vector_store = SupabaseVectorStore(supabase_url, supabase_key)
        embeddings = HuggingFaceEmbeddings()
        llm = GeminiLLM(gemini_key)
        rag_system = RAGPipeline(vector_store, embeddings, llm)
        print("✅ Taxi AI Agent Initialized")
    else:
        print("⚠ Missing API Keys in .env")
except Exception as e:
    print(f"❌ Error initializing: {e}")

# Models
class ChatRequest(BaseModel):
    question: str

class ChatResponse(BaseModel):
    answer: str
    sources: List[str] = []

class Message(BaseModel):
    role: str
    message: str

# API Endpoints
@app.get("/")
def read_root():
    return {"status": "active", "message": "TaxiKSA AI Backend"}

@app.get("/history", response_model=List[Message])
async def get_history():
    if not supabase_client: return []
    try:
        res = supabase_client.table("chats").select("*").order("created_at", desc=False).execute()
        return res.data
    except Exception as e:
        print(f"Error fetching history: {e}")
        return []

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    if not rag_system:
         raise HTTPException(status_code=503, detail="System not ready")
         
    try:
        # 1. Save User Msg
        if supabase_client:
            supabase_client.table("chats").insert({"role": "user", "message": request.question}).execute()

        # 2. RAG Query
        raw_answer = rag_system.query(request.question)
        
        # 3. Auto-Booking Logic - DISABLED (Handled by Frontend Redirect)
        # match = re.search(r"\|\|BOOKING_START\|\|(.*?)\|\|BOOKING_END\|\|", raw_answer, re.DOTALL)
        # if match:
        #     json_str = match.group(1)
        #     try:
        #         booking_info = json.loads(json_str)
        #         if supabase_client:
        #             supabase_client.table("bookings").insert({
        #                 "pickup_location": booking_info.get("pickup", "Unknown"),
        #                 "dropoff_location": booking_info.get("dropoff", "Unknown"),
        #                 "phone_number": booking_info.get("phone", "Unknown")
        #             }).execute()
        #         print("✅ Auto-Booking Created!")
        #         clean_answer = raw_answer.replace(match.group(0), "").strip()
        #         clean_answer += "\n\n(✅ System: Booking confirmed! Agent will call you shortly.)"
        #     except Exception as e:
        #         print(f"Booking Parse Error: {e}")
        
        clean_answer = raw_answer
        
        # 4. Save Bot Msg
        if supabase_client:
             supabase_client.table("chats").insert({"role": "bot", "message": clean_answer}).execute()
        
        return ChatResponse(answer=clean_answer, sources=[])
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    if not rag_system: raise HTTPException(status_code=503, detail="System not ready")
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF allowed")
    
    try:
        os.makedirs("temp", exist_ok=True)
        path = f"temp/{file.filename}"
        with open(path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            
        loader = PDFLoader()
        text = loader.load(path)
        splitter = RecursiveTextSplitter()
        chunks = splitter.split(text)
        embs = rag_system.embeddings.embed_documents(chunks)
        metas = [{"source": file.filename, "chunk_id": i} for i in range(len(chunks))]
        rag_system.vector_store.add_documents(chunks, embs, metas)
        
        os.remove(path)
        return {"status": "Ingested", "chunks": len(chunks)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
