const fs = require('fs');
const path = require('path');

const locationsDir = 'd:/Taxi KSA/taxiksa/app/(main)/locations';

function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (file === 'page.tsx') {
            processFile(fullPath);
        }
    });
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already has JsonLdLocation or doesn't have Script
    // Many location pages use Script for things OTHER than schema, so be careful.
    // If it has a schema constant ending in 'Schema', it's a target.
    const schemaConstRegex = /const (\w+)Schema = \{[\s\S]*?\};/g;
    const match = schemaConstRegex.exec(content);
    
    if (!match) return;

    const schemaName = match[1]; // e.g., 'jeddah', 'riyadh'

    // 1. Add JsonLdLocation import, remove Script import if no other Script remains
    // Actually just add the import if needed.
    if (!content.includes('JsonLdLocation')) {
        content = content.replace("import { Button }", "import JsonLdLocation from '@/components/JsonLdLocation';\nimport { Button }");
    }
    
    // We'll leave the Script import if it's used elsewhere, but usually it's used for this.
    // Let's remove the specific Script block first.

    // 2. Determine city name from path
    const relativePath = path.relative(locationsDir, filePath);
    let cityName = relativePath.split(path.sep)[0];
    if (cityName === 'page.tsx') {
        // This is locations/page.tsx, skip
        return;
    }
    if (cityName === '[city]') {
        // Dynamic route, handle differently or skip
        return;
    }

    // Capitalize cityName
    cityName = cityName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // 3. Replace the schema constant
    content = content.replace(schemaConstRegex, '');

    // 4. Replace Script component call
    // Support id="{cityName}-schema" or id="location-schema"
    const scriptRegex = new RegExp(`<Script[\\s\\S]*?id="[\\s\\S]*?${cityName.toLowerCase()}[\\s\\S]*?"[\\s\\S]*?\\/>`, 'g');
    
    const replacement = `<JsonLdLocation 
                cityName="${cityName}"
                description="Professional taxi and private car services in ${cityName}. 24/7 reliable transport for residents, business travelers, and tourists."
                services={[
                    { name: '${cityName} Airport Taxi', description: 'Reliable airport pickups and drop-offs.' },
                    { name: 'City Chauffeur Service', description: 'Professional drivers for local travel and business.' },
                    { name: 'Intercity Transfers', description: 'Private long-distance travel to other major cities.' },
                    { name: 'Family SUW/Van', description: 'Large vehicles for groups and extra luggage.' }
                ]}
                priceRange={{ min: 50, max: 2000, currency: "SAR" }}
                image="https://taxiserviceksa.com/locations/${cityName.toLowerCase().replace(/ /g, '-')}.webp"
            />`;
    
    const newContent = content.replace(scriptRegex, replacement);
    
    // If scriptRegex didn't match, try a more generic one if it has a schema name in it
    if (newContent === content) {
        const genericScriptRegex = /<Script[\s\S]*?dangerouslySetInnerHTML=\{\{ __html: JSON\.stringify\(\w+Schema\) \}\}[\s\S]*?\/>/g;
        content = content.replace(genericScriptRegex, replacement);
    } else {
        content = newContent;
    }

    // 5. Cleanup Script import if no Script tags left
    if (!content.includes('<Script')) {
        content = content.replace(/import Script from 'next\/script';/g, "");
    }

    // 6. Save file
    fs.writeFileSync(filePath, content);
    console.log(`Updated Location: ${relativePath} (${cityName})`);
}

walk(locationsDir);
