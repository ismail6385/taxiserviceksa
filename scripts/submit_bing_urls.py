import requests
import xml.etree.ElementTree as ET
import json
import argparse
import sys

# Constants
SITE_URL = "https://taxiserviceksa.com"
# The key provided is an IndexNow key (32-char hex). 
# This key is used for IndexNow, NOT for the legacy Bing Webmaster API (SubmitUrlBatch).
DEFAULT_KEY = "a8846de59f464c078b8b477cc3211493" 

SITEMAPS = [
    f"{SITE_URL}/sitemap-pages.xml",
    f"{SITE_URL}/sitemap-services.xml",
    f"{SITE_URL}/sitemap-locations.xml",
    f"{SITE_URL}/sitemap-blog.xml"
]

def fetch_sitemap_urls(sitemap_url):
    print(f"Fetching URLs from {sitemap_url}...")
    try:
        response = requests.get(sitemap_url, timeout=10)
        if response.status_code != 200:
             print(f"Failed to fetch {sitemap_url}: Status {response.status_code}")
             return []
        
        # Parse XML
        root = ET.fromstring(response.content)
        
        # XML Namespace logic
        urls = []
        for elem in root.iter():
            if 'loc' in elem.tag:
                if elem.text:
                    urls.append(elem.text.strip())
                
        print(f"Found {len(urls)} URLs in {sitemap_url}")
        return urls
    except Exception as e:
        print(f"Error fetching/parsing {sitemap_url}: {e}")
        return []

def submit_to_webmaster_api(api_key, urls):
    """
    Submit using the Bing Webmaster API (SubmitUrlBatch).
    Requires a special API Key generated in Bing Webmaster Tools -> Settings -> API Access.
    """
    endpoint = f"https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey={api_key}"
    BATCH_SIZE = 500
    urls = list(set(urls))
    
    print(f"\n[Bing Webmaster API] Submitting {len(urls)} URLs to Bing...")
    
    for i in range(0, len(urls), BATCH_SIZE):
        batch = urls[i:i + BATCH_SIZE]
        payload = {
            "siteUrl": SITE_URL,
            "urlList": batch
        }
        
        try:
            print(f"Sending batch {i//BATCH_SIZE + 1} ({len(batch)} URLs)...")
            response = requests.post(
                endpoint, 
                json=payload, 
                headers={"Content-Type": "application/json; charset=utf-8"}
            )
            
            if response.status_code == 200:
                print(f"Batch {i//BATCH_SIZE + 1}: Success.")
            else:
                print(f"Batch {i//BATCH_SIZE + 1}: Failed with status {response.status_code}")
                print(response.text)
        except Exception as e:
            print(f"Batch {i//BATCH_SIZE + 1}: Error - {e}")

def submit_to_indexnow(key, urls):
    """
    Submit using the IndexNow API.
    Works with the verification file/key format provided (32 char hex).
    """
    endpoint = "https://www.bing.com/indexnow"
    BATCH_SIZE = 10000 # IndexNow supports larger batches
    urls = list(set(urls))
    
    print(f"\n[IndexNow] Submitting {len(urls)} URLs...")
    
    for i in range(0, len(urls), BATCH_SIZE):
        batch = urls[i:i + BATCH_SIZE]
        payload = {
            "host": "taxiserviceksa.com",
            "key": key,
            "keyLocation": f"https://taxiserviceksa.com/{key}.txt",
            "urlList": batch
        }
        
        try:
            print(f"Sending batch {i//BATCH_SIZE + 1} ({len(batch)} URLs)...")
            response = requests.post(
                endpoint, 
                json=payload, 
                headers={"Content-Type": "application/json; charset=utf-8"}
            )
            
            if response.status_code in [200, 202]:
                print(f"Batch {i//BATCH_SIZE + 1}: Success (Status {response.status_code}).")
            else:
                print(f"Batch {i//BATCH_SIZE + 1}: Failed with status {response.status_code}")
                print(response.text)
        except Exception as e:
            print(f"Batch {i//BATCH_SIZE + 1}: Error - {e}")

def main():
    parser = argparse.ArgumentParser(description="Submit URLs to Bing")
    parser.add_argument("--key", help="API Key or IndexNow Key", default=DEFAULT_KEY)
    parser.add_argument("--mode", choices=['indexnow', 'webmaster'], default='indexnow', 
                        help="Submission mode: 'indexnow' (default, matches your key) or 'webmaster' (requires generated API key)")
    args = parser.parse_args()
    
    print(f"Using Key: {args.key[:4]}...{args.key[-4:]}")
    if args.mode == 'indexnow':
        print("Mode: IndexNow (Automatic submission)")
    else:
        print("Mode: Webmaster API (SubmitUrlBatch)")
    
    all_urls = []
    
    # 1. Fetch URLs from sitemaps
    for sitemap in SITEMAPS:
        urls = fetch_sitemap_urls(sitemap)
        all_urls.extend(urls)
        
    # 2. Submit
    if all_urls:
        if args.mode == 'indexnow':
            submit_to_indexnow(args.key, all_urls)
        else:
            submit_to_webmaster_api(args.key, all_urls)
    else:
        print("No URLs found to submit.")

if __name__ == "__main__":
    main()
