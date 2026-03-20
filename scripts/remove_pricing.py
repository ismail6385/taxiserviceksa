import os
import re

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Remove priceRange from JsonLdLocation
    content = re.sub(r'priceRange=\{\{\s*min:\s*\d+,\s*max:\s*\d+,\s*currency:\s*"SAR"\s*\}\}', '', content)
    
    # 2. Update Hero location/subtitle text
    content = content.replace('Fixed Rates', 'Get Quote')
    content = content.replace('Affordable Rates', 'Get Quote')
    content = content.replace('Local Rates', 'Get Quote')
    
    # 3. Update FAQ short answers/detailed answers
    content = content.replace('shortAnswer: "Starting from Fixed Rates"', 'shortAnswer: "Get Quote via WhatsApp"')
    content = content.replace('shortAnswer: "Starting from 200 SAR"', 'shortAnswer: "Get Quote via WhatsApp"')
    content = content.replace('shortAnswer: "Starting from 250 SAR"', 'shortAnswer: "Get Quote via WhatsApp"')
    
    # 4. Update specific mentions of "fixed prices" or "total price upfront"
    # Although these are okay, the user wants "Pricing removed", so I'll be aggressive.
    
    # 5. Remove price Currency from schema if exists
    content = content.replace('"priceCurrency": "SAR"', '"priceCurrency": "SAR", "price": "Variable"')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

directories = [
    'd:/Taxi KSA/taxiksa/app/(main)/routes',
    'd:/Taxi KSA/taxiksa/app/(main)/services',
    'd:/Taxi KSA/taxiksa/app/(main)/locations',
    'd:/Taxi KSA/taxiksa/app/(main)/fleet'
]

for directory in directories:
    if not os.path.exists(directory):
        continue
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx'):
                process_file(os.path.join(root, file))

print("Cleanup complete.")
