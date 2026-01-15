
import os
import glob
import re
from typing import List, Dict
from dotenv import load_dotenv
from supabase import create_client
from sentence_transformers import SentenceTransformer

# Load .env from TaxiKSA pack
env_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "TaxiKSA_Integration_Pack", ".env")
load_dotenv(env_path)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    print(f"Error: Supabase credentials not found. Checked: {env_path}")
    # Fallback to process env if checking script manually
    if not os.getenv("SUPABASE_URL"):
        exit(1)

print(f"Connecting to Supabase: {SUPABASE_URL[:10]}...")
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

print("Loading Embedding Model...")
model = SentenceTransformer("all-MiniLM-L6-v2")

# Root is ../app relative to scripts/
ROOT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "app")

def clean_tsx(content):
    # Simple regex to strip tags
    # 1. Remove imports
    content = re.sub(r'^import .*?$', '', content, flags=re.MULTILINE)
    # 2. Remove HTML tags
    clean = re.sub(r'<[^>]+>', ' ', content)
    # 3. Collapse whitespace
    clean = re.sub(r'\s+', ' ', clean).strip()
    return clean

def index_site():
    print(f"Scanning {ROOT_DIR}...")
    pages = glob.glob(os.path.join(ROOT_DIR, "**", "page.tsx"), recursive=True)
    
    print(f"Found {len(pages)} pages.")
    
    for page_path in pages:
        try:
            # Determine relative URL from path
            rel_path = os.path.relpath(page_path, ROOT_DIR)
            dir_name = os.path.dirname(rel_path)
            
            # Convert basic routes
            url_path = "/" + dir_name.replace("\\", "/")
            if url_path == "/.": url_path = "/"
            
            # Skip dynamic routes for now if too complex, or keep them as generic
            # e.g. /blog/[slug] -> might be useful to know it exists
            
            with open(page_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            cleaned_text = clean_tsx(content)
            if len(cleaned_text) < 50: 
                print(f"Skipping {url_path} (too short)")
                continue 
            
            # Content Context
            full_text = f"Page URL: {url_path}\nPage Content: {cleaned_text}"
            
            # Embed
            embedding = model.encode(full_text).tolist()
            
            record = {
                "content": full_text,
                "embedding": embedding,
                "metadata": {"source": "website-crawl", "url": url_path}
            }
            
            # Upsert? We don't have a unique ID easily, implies simple insert.
            # ideally we should delete old entries for this URL first.
            
            # Try delete old (requires match on metadata which is hard in supabase generic delete without ID)
            # We will just insert for now.
            
            supabase.table("documents").insert(record).execute()
            print(f"Indexed {url_path}")
            
        except Exception as e:
            print(f"Failed to process {page_path}: {e}")

    print("Indexing complete.")

if __name__ == "__main__":
    index_site()
