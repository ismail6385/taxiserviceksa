
import os
import re

root_dir = r"d:\taxiksa\app"
count = 0

for subdir, dirs, files in os.walk(root_dir):
    for file in files:
        if file == "page.tsx":
            filepath = os.path.join(subdir, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Regex to find canonical URLs without trailing slash
                # Matches: canonical: 'https://taxiserviceksa.com/some/path'
                # Excludes: canonical: 'https://taxiserviceksa.com/some/path/'
                # Excludes: canonical: 'https://taxiserviceksa.com/' (homepage) - Wait, regex `([^']+)` matches `locations/jeddah`.
                # If homepage is `https://taxiserviceksa.com/`, `[^']+` matches nothing if it sees slash immediately? 
                # No `https://taxiserviceksa.com/` -> the part after com/ is empty string? 
                # My regex was `https://taxiserviceksa\.com/([^']+)`. `[^']+` requires at least 1 char.
                # So homepage with trailing slash `com/` is NOT matched. Good.
                # Homepage without trailing slash `com` (no slash) -> Regex expects `com/`.
                # If the code is `canonical: 'https://taxiserviceksa.com'`, it won't match my regex because of the slash after com.
                # But usually homepage is defined as `...com/`.
                
                new_content = re.sub(
                    r"canonical:\s*'https://taxiserviceksa\.com/([^']+)(?<!/)'",
                    r"canonical: 'https://taxiserviceksa.com/\1/'",
                    content
                )
                
                if content != new_content:
                    print(f"Updating {filepath}")
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    count += 1
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

print(f"Total files updated: {count}")
