import os
import re

def to_title_case(city_slug):
    special_cases = {
        'abu-dhabi': 'Abu Dhabi',
        'alula': 'AlUla'
    }
    if city_slug in special_cases:
        return special_cases[city_slug]
    return ' '.join(word.capitalize() for word in city_slug.split('-'))

def process_routes():
    base_dir = r"d:\Taxi KSA\taxiksa\app\(main)\routes"
    
    border_cities = ['abu-dhabi', 'amman', 'bahrain', 'muscat', 'sharjah', 'dubai', 'doha', 'kuwait']
    
    for foldername in os.listdir(base_dir):
        if foldername == 'page.tsx':
            continue
            
        parts = foldername.split('-')
        
        if parts[0] == 'abu' and len(parts) > 1 and parts[1] == 'dhabi':
            from_part = 'abu-dhabi'
            to_part = '-'.join(parts[2:])
        else:
            from_part = parts[0]
            if from_part not in border_cities and len(parts) >= 3 and parts[-2] == 'abu' and parts[-1] == 'dhabi':
                to_part = 'abu-dhabi'
                from_part = '-'.join(parts[:-2])
            else:
                to_part = '-'.join(parts[1:])
        
        if from_part not in border_cities and to_part not in border_cities:
            continue
            
        folder_path = os.path.join(base_dir, foldername)
        page_path = os.path.join(folder_path, 'page.tsx')
        
        if not os.path.isdir(folder_path) or not os.path.exists(page_path):
            continue
            
        from_city = to_title_case(from_part)
        to_city = to_title_case(to_part)
        
        # Decide which city to use for the image (prefer the border city)
        image_slug = from_part if from_part in border_cities else to_part
        
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()

        new_image_line = f"const images = ['/locations/{image_slug}.webp', '/hero-slide-3.webp', '/hero-slide-2.webp'];"
        content = re.sub(r"const\s+images\s*=\s*\[.*?\];", new_image_line, content)

        content = re.sub(r"<RelatedLocations\s+currentCity=[\"'].*?[\"']\s*/>", f'<RelatedLocations currentCity="{to_city}" />', content)

        schema_re = re.compile(r'"areaServed":\s*\[\s*\{\s*"@type":\s*"City",\s*"name":\s*".*?"\s*\},?\s*\{\s*"@type":\s*"City",\s*"name":\s*".*?"\s*\}\s*\]', re.DOTALL)
        new_schema = f'"areaServed": [\n            {{ "@type": "City", "name": "{from_city}" }},\n            {{ "@type": "City", "name": "{to_city}" }}\n        ]'
        content = schema_re.sub(new_schema, content)

        content = re.sub(r'canonical:\s*[\'"]https://taxiserviceksa.com/routes/.*?/[\'"]', f"canonical: 'https://taxiserviceksa.com/routes/{foldername}/'", content)
        content = re.sub(r'url:\s*[\'"]https://taxiserviceksa.com/routes/.*?/[\'"]', f"url: 'https://taxiserviceksa.com/routes/{foldername}/'", content)

        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Updated: {foldername}")

if __name__ == '__main__':
    process_routes()
    print("All border crossing routes updated successfully!")
