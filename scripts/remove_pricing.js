const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Remove priceRange from JsonLdLocation
    content = content.replace(/priceRange=\{\{\s*min:\s*\d+,\s*max:\s*\d+,\s*currency:\s*"SAR"\s*\}\},?/g, '');
    
    // 2. Update Hero location/subtitle text
    content = content.replace(/Fixed Rates/g, 'Get Quote');
    content = content.replace(/Affordable Rates/g, 'Get Quote');
    content = content.replace(/Local Rates/g, 'Get Quote');
    content = content.replace(/Starting from Fixed Rates/g, 'Get Quote via WhatsApp');
    content = content.replace(/Starting from \d+ SAR/g, 'Get Quote via WhatsApp');
    
    // 3. Remove SAR amounts from FAQ
    content = content.replace(/Starting from \d+ SAR/g, 'Get Quote via WhatsApp');

    // 4. Schema update
    content = content.replace(/"priceRange":\s*"[^"]*"/g, '"priceRange": "$$$"');

    // 5. Special logic for routes price display
    content = content.replace(/price:\s*'[^']*'/g, "price: 'Get Quote'");

    fs.writeFileSync(filePath, content, 'utf8');
}

const directories = [
    'd:/Taxi KSA/taxiksa/app/(main)/routes',
    'd:/Taxi KSA/taxiksa/app/(main)/services',
    'd:/Taxi KSA/taxiksa/app/(main)/locations',
    'd:/Taxi KSA/taxiksa/app/(main)/fleet'
];

directories.forEach(dir => {
    if (fs.existsSync(dir)) {
        const walk = (d) => {
            fs.readdirSync(d).forEach(file => {
                const fullPath = path.join(d, file);
                if (fs.statSync(fullPath).isDirectory()) walk(fullPath);
                else if (file.endsWith('.tsx')) processFile(fullPath);
            });
        };
        walk(dir);
    }
});

console.log("Cleanup complete.");
