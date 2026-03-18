const fs = require('fs');
const path = require('path');

const routesDir = 'd:/Taxi KSA/taxiksa/app/(main)/routes';
const directories = fs.readdirSync(routesDir).filter(f => f.startsWith('tabuk-'));

directories.forEach(dirName => {
    const filePath = path.join(routesDir, dirName, 'page.tsx');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Add JsonLdLocation import, remove Script import
    if (!content.includes('JsonLdLocation')) {
        content = content.replace("import Script from 'next/script';", "");
        content = content.replace("import { Button }", "import JsonLdLocation from '@/components/JsonLdLocation';\nimport { Button }");
    }

    // 2. Extract city name and capitalize
    const toCitySlug = dirName.replace('tabuk-', '');
    const toCity = toCitySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // 3. Replace routeSchema constant
    const schemaRegex = /const routeSchema = \{[\s\S]*?\};/g;
    content = content.replace(schemaRegex, '');

    // 4. Replace Script component call
    const scriptRegex = /<Script[\s\S]*?id="route-schema-tabuk-[\s\S]*?\/>/g;
    const replacement = `<JsonLdLocation 
                cityName="Tabuk to ${toCity}"
                description="Professional VIP private car service from Tabuk to ${toCity}. Reliable, door-to-door long-distance transport for families and business travelers."
                services={[
                    { name: 'Tabuk to ${toCity} Taxi', description: 'Direct 24/7 private transfer with professional chauffeurs.' },
                    { name: 'Family SUV Transfer', description: 'Spacious and safe GMC Yukons for the drive between Tabuk and ${toCity}.' },
                    { name: 'Long-Distance Chauffeur', description: 'Comfortable long-distance travel across Saudi Arabia with luxury vehicles.' },
                    { name: 'Return Trip Booking', description: 'Book your return journey from ${toCity} back to Tabuk at competitive rates.' }
                ]}
                priceRange={{ min: 500, max: 4500, currency: "SAR" }}
                image="https://taxiserviceksa.com/locations/tabuk.webp"
            />`;
    
    content = content.replace(scriptRegex, replacement);

    // 5. Save file
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${dirName}`);
});
