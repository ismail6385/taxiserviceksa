import os
from typing import List, Dict, Any
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# ============================================================
# PART 1: MOCK CLASSES (FALLBACKS)
# ============================================================
# ... (Leaving mocks out if not needed, but keeping for safety if imports fail)
# For production pack, we assume dependencies are installed.

# ============================================================
# PART 2: PDF LOADER
# ============================================================
class PDFLoader:
    """Loads text from a PDF file"""
    def load(self, pdf_path: str) -> str:
        try:
            import PyPDF2
            with open(pdf_path, 'rb') as f:
                reader = PyPDF2.PdfReader(f)
                text = ""
                for page in reader.pages:
                    text += page.extract_text() + "\n"
            return text
        except Exception as e:
            print(f"Error loading PDF: {e}")
            return ""

# ============================================================
# PART 3: TEXT SPLITTER
# ============================================================
class RecursiveTextSplitter:
    """Splits text into chunks"""
    def __init__(self, chunk_size=500, chunk_overlap=50):
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap
        
    def split(self, text: str) -> List[str]:
        chunks = []
        start = 0
        while start < len(text):
            end = start + self.chunk_size
            chunks.append(text[start:end])
            start = end - self.chunk_overlap
        return chunks

# ============================================================
# PART 4: EMBEDDINGS & VECTOR STORE
# ============================================================
class HuggingFaceEmbeddings:
    """Generates embeddings using sentence-transformers"""
    def __init__(self, model_name="all-MiniLM-L6-v2"):
        try:
            from sentence_transformers import SentenceTransformer
            self.model = SentenceTransformer(model_name)
            print(f"✓ Embeddings model loaded: {model_name}")
        except Exception as e:
            print(f"⚠ Error loading embeddings model: {e}")
            self.model = None

    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        if not self.model: return []
        return self.model.encode(texts).tolist()

    def embed_query(self, text: str) -> List[float]:
        if not self.model: return []
        return self.model.encode([text])[0].tolist()

class SupabaseVectorStore:
    """Manages vector storage in Supabase"""
    def __init__(self, supabase_url: str, supabase_key: str):
        try:
            from supabase import create_client
            self.client = create_client(supabase_url, supabase_key)
            print("✓ Connected to Supabase")
        except Exception as e:
            print(f"⚠ Error connecting to Supabase: {e}")
            self.client = None
            
    def add_documents(self, texts: List[str], embeddings: List[List[float]], metadatas: List[Dict]):
        if not self.client: return
        
        data = []
        for i, text in enumerate(texts):
            record = {
                "content": text,
                "embedding": embeddings[i],
                "metadata": metadatas[i]
            }
            data.append(record)
            
        try:
            self.client.table("documents").insert(data).execute()
        except Exception as e:
            print(f"⚠ Error storing documents: {e}")
            
    def similarity_search(self, query_embedding: List[float], k: int = 3) -> List[Dict]:
        if not self.client: return []
        
        try:
            # RPC call to match_documents function created via SQL
            response = self.client.rpc(
                'match_documents',
                {
                    'query_embedding': query_embedding,
                    'match_threshold': 0.1, 
                    'match_count': k
                }
            ).execute()
            
            return response.data
        except Exception as e:
            print(f"⚠ Error searching: {e}")
            return []

# ============================================================
# PART 5: LLM (Gemini)
# ============================================================
class GeminiLLM:
    """Google Gemini LLM wrapper"""
    def __init__(self, api_key: str):
        try:
            import google.generativeai as genai
            genai.configure(api_key=api_key)
            self.model = genai.GenerativeModel('gemini-flash-latest')
            print("✓ Gemini ready")
        except Exception as e:
            print(f"⚠ Error initializing Gemini: {e}")
            self.model = None
    
    def generate(self, prompt: str) -> str:
        if not self.model: return "LLM Not Initialized"
        try:
            response = self.model.generate_content(prompt)
            return response.text
        except Exception as e:
            return f"Error: {e}"

# ============================================================
# PART 6: RAG PIPELINE
# ============================================================
class RAGPipeline:
    """Complete RAG system orchestrator"""
    def __init__(self, vector_store: SupabaseVectorStore, embeddings: HuggingFaceEmbeddings, llm: GeminiLLM):
        self.vector_store = vector_store
        self.embeddings = embeddings
        self.llm = llm
    
    def query(self, question: str, k: int = 3) -> str:
        print(f"\n❓ Question: {question}")
        
        # 1. Embed & Retrieve
        query_embedding = self.embeddings.embed_query(question)
        results = self.vector_store.similarity_search(query_embedding, k=k)
        
        # 2. Build Context
        context = "\n\n".join([r["content"] for r in results])
        if not context:
            context = "No specific document context available. Rely on your general knowledge and act as a polite Taxi Service Assistant."
        
        # 3. Prompt Engineering (Taxi Mode)
        prompt = f"""You are Muhammad Ismail, a helpful AI assistant for 'Taxi Service KSA'.

Question: {question}

Context from documents:
{context}


Sitemap Checklist (Use these exact paths for navigation):
- Home: /
- Booking: /booking
- Contact: /contact
- Services: /services
- Airport Transfers: /services/airport-transfers
- Umrah Transport: /services/umrah-transport
- Corporate Travel: /services/corporate-travel
- Heritage Tours: /services/heritage-tours
- Fleet: /fleet
- Blog: /blog
- About: /about
- Pricing: /booking (Assume booking page allows price check)

Instructions:
1. If the Context contains the answer, use it strictly.
2. If Context is missing or irrelevant, DO NOT apologize. ACT as a helpful Booking Agent.
3. CRITICAL: If the user provides "Pickup Location", "Dropoff Location", and "Phone Number", DO NOT just say thanks. Instead, OUTPUT this exact format at the end of your message:
   ||BOOKING_START||{{"pickup": "...", "dropoff": "...", "phone": "..."}}||BOOKING_END||
4. If the user asks for a specific page or information found in the Sitemap Checklist, OUTPUT the navigation token:
   ||NAVIGATE||/exact/path||
5. If details are missing, ASK for them politely.
6. Be polite, professional, and concise.

Answer:"""
        
        return self.llm.generate(prompt)
