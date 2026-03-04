const fs = require('fs');
const path = require('path');

function toTitleCase(citySlug) {
    const specialCases = {
        'abu-dhabi': 'Abu Dhabi',
        'alula': 'AlUla'
    };
    if (specialCases[citySlug]) {
        return specialCases[citySlug];
    }
    return citySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function processRoutes() {
    const baseDir = path.join(__dirname, 'app', '(main)', 'routes');
    const borderCities = ['abu-dhabi', 'amman', 'bahrain', 'muscat', 'sharjah', 'dubai', 'doha', 'kuwait'];

    const folders = fs.readdirSync(baseDir);

    for (const foldername of folders) {
        if (foldername === 'page.tsx') continue;

        const folderPath = path.join(baseDir, foldername);
        const pagePath = path.join(folderPath, 'page.tsx');

        if (!fs.statSync(folderPath).isDirectory() || !fs.existsSync(pagePath)) continue;

        let parts = foldername.split('-');
        let fromPart = '';
        let toPart = '';

        if (parts[0] === 'abu' && parts.length > 1 && parts[1] === 'dhabi') {
            fromPart = 'abu-dhabi';
            toPart = parts.slice(2).join('-');
        } else {
            fromPart = parts[0];
            if (!borderCities.includes(fromPart) && parts.length >= 3 && parts[parts[parts.length - 2]] === 'abu' && parts[parts.length - 1] === 'dhabi') {
                toPart = 'abu-dhabi';
                fromPart = parts.slice(0, -2).join('-');
            } else {
                toPart = parts.slice(1).join('-');
            }
        }

        if (!borderCities.includes(fromPart) && !borderCities.includes(toPart)) continue;

        const fromCity = toTitleCase(fromPart);
        const toCity = toTitleCase(toPart);

        const imageSlug = borderCities.includes(fromPart) ? fromPart : toPart;

        let content = fs.readFileSync(pagePath, 'utf8');

        const newImageLine = `const images = ['/locations/${imageSlug}.webp', '/hero-slide-3.webp', '/hero-slide-2.webp'];`;
        content = content.replace(/const\s+images\s*=\s*\[.*?\];/, newImageLine);

        content = content.replace(/<RelatedLocations\s+currentCity=["'].*?["']\s*\/>/g, `<RelatedLocations currentCity="${toCity}" />`);

        const schemaRegex = /"areaServed":\s*\[\s*\{\s*"@type":\s*"City",\s*"name":\s*".*?"\s*\},?\s*\{\s*"@type":\s*"City",\s*"name":\s*".*?"\s*\}\s*\]/;
        const newSchema = `"areaServed": [
            { "@type": "City", "name": "${fromCity}" },
            { "@type": "City", "name": "${toCity}" }
        ]`;
        content = content.replace(schemaRegex, newSchema);

        content = content.replace(/canonical:\s*['"]https:\/\/taxiserviceksa\.com\/routes\/.*?\/['"]/g, `canonical: 'https://taxiserviceksa.com/routes/${foldername}/'`);
        content = content.replace(/url:\s*['"]https:\/\/taxiserviceksa\.com\/routes\/.*?\/['"]/g, `url: 'https://taxiserviceksa.com/routes/${foldername}/'`);

        fs.writeFileSync(pagePath, content, 'utf8');
        console.log(`Updated: ${foldername}`);
    }
}

processRoutes();
console.log("All border crossing routes updated successfully!");
