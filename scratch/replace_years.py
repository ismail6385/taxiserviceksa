import os

root_dir = r"d:\Taxi KSA\taxi-service-ksa\app\(main)"

files_modified = 0
total_replacements = 0

for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if filename.endswith(('.ts', '.tsx', '.json', '.xml')):
            filepath = os.path.join(dirpath, filename)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if "2025" in content:
                    count = content.count("2025")
                    new_content = content.replace("2025", "2026")
                    
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    
                    print(f"Updated {filepath}: replaced {count} occurrence(s)")
                    files_modified += 1
                    total_replacements += count
            except Exception as e:
                print(f"Error reading/writing {filepath}: {e}")

print(f"\nDone! Modified {files_modified} file(s) with {total_replacements} total replacement(s).")
