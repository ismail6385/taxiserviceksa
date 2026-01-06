
import os

def replace_domain(root_dir, old_domain, new_domain):
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith(('.tsx', '.ts', '.js', '.json', '.xml')):
                filepath = os.path.join(dirpath, filename)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    if old_domain in content:
                        new_content = content.replace(old_domain, new_domain)
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Updated: {filepath}")
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")

if __name__ == "__main__":
    # Fix canonicals: replace wrong domain with correct one
    replace_domain('d:\\taxiksa\\app', 'transferksa.com', 'taxiserviceksa.com')
    replace_domain('d:\\taxiksa\\components', 'transferksa.com', 'taxiserviceksa.com')
    replace_domain('d:\\taxiksa\\lib', 'transferksa.com', 'taxiserviceksa.com')
