const fs = require('fs');
const path = require('path');

const routesDir = 'd:/Taxi KSA/taxiksa/app/(main)/routes';
const directories = fs.readdirSync(routesDir).filter(f => fs.lstatSync(path.join(routesDir, f)).isDirectory());

const commonFirstWords = ['tabuk', 'jeddah', 'makkah', 'madinah', 'riyadh', 'dammam', 'alula', 'yanbu', 'taif', 'abha', 'abu-dhabi', 'doha', 'dubai', 'kuwait', 'muscat', 'sharjah', 'amman', 'bahrain'];

directories.forEach(dirName => {
    const filePath = path.join(routesDir, dirName, 'page.tsx');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already has JsonLdLocation or doesn't have routeSchema
    if (content.includes('JsonLdLocation') || !content.includes('const routeSchema =')) {
        return;
    }

    // 1. Add JsonLdLocation import, remove Script import
    content = content.replace(/import Script from 'next\/script';/g, "");
    if (!content.includes('JsonLdLocation')) {
        content = content.replace("import { Button }", "import JsonLdLocation from '@/components/JsonLdLocation';\nimport { Button }");
    }

    // 2. Extract city names from slug
    let fromCity = '';
    let toCity = '';

    if (dirName.includes('-to-')) {
        const parts = dirName.split('-to-');
        fromCity = parts[0].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        toCity = parts[1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    } else {
        // Try matching against common first words
        let matched = false;
        for (const city of commonFirstWords) {
            if (dirName.startsWith(city + '-')) {
                fromCity = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                const rest = dirName.slice(city.length + 1);
                toCity = rest.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                matched = true;
                break;
            }
        }
        
        if (!matched) {
            // Default split if no match
            const parts = dirName.split('-');
            if (parts.length >= 2) {
                fromCity = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
                toCity = parts.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            } else {
                fromCity = dirName.charAt(0).toUpperCase() + dirName.slice(1);
                toCity = '';
            }
        }
    }

    const routeName = toCity ? `${fromCity} to ${toCity}` : fromCity;

    // 3. Replace routeSchema constant
    const schemaRegex = /const routeSchema = \{[\s\S]*?\};/g;
    content = content.replace(schemaRegex, '');

    // 4. Replace Script component call
    const scriptRegex = /<Script[\s\S]*?id="[\s\S]*?"[\s\S]*?\/>/g;
    
    // Custom prices based on distance/keywords
    let minPrice = 200;
    let maxPrice = 2500;
    
    if (fromCity.includes('Abu Dhabi') || toCity.includes('Abu Dhabi') || 
        fromCity.includes('Doha') || toCity.includes('Doha') ||
        fromCity.includes('Dubai') || toCity.includes('Dubai') ||
        fromCity.includes('Kuwait') || toCity.includes('Kuwait') ||
        fromCity.includes('Muscat') || toCity.includes('Muscat') ||
        fromCity.includes('Amman') || toCity.includes('Amman')) {
        minPrice = 1500;
        maxPrice = 8000; // Border crossings
    } else if (fromCity.includes('Tabuk') || toCity.includes('Tabuk') ||
               fromCity.includes('Abha') || toCity.includes('Abha') ||
               fromCity.includes('Jizan') || toCity.includes('Jizan')) {
        minPrice = 1000;
        maxPrice = 5000; // Long distance
    }

    const replacement = `<JsonLdLocation 
                cityName="${routeName}"
                description="Professional VIP private car service for ${routeName}. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: '${routeName} Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                priceRange={{ min: ${minPrice}, max: ${maxPrice}, currency: "SAR" }}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />`;
    
    content = content.replace(scriptRegex, replacement);

    // 5. Save file
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${dirName} (${routeName})`);
});
