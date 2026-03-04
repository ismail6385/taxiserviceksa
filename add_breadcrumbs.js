const fs = require('fs');
const path = require('path');

function toTitleCase(citySlug) {
    const specialCases = {
        'abu-dhabi': 'Abu Dhabi',
        'alula': 'AlUla'
    };
    if (specialCases[citySlug]) return specialCases[citySlug];
    return citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
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
        let fromPart = '', toPart = '';

        if (parts[0] === 'abu' && parts.length > 1 && parts[1] === 'dhabi') {
            fromPart = 'abu-dhabi';
            toPart = parts.slice(2).join('-');
        } else {
            fromPart = parts[0];
            if (!borderCities.includes(fromPart) && parts.length >= 3 && parts[parts.length - 2] === 'abu' && parts[parts.length - 1] === 'dhabi') {
                toPart = 'abu-dhabi';
                fromPart = parts.slice(0, -2).join('-');
            } else {
                toPart = parts.slice(1).join('-');
            }
        }

        if (!borderCities.includes(fromPart) && !borderCities.includes(toPart)) continue;

        const fromCity = toTitleCase(fromPart);
        const toCity = toTitleCase(toPart);

        let content = fs.readFileSync(pagePath, 'utf8');

        // Skip if already has RouteBreadcrumb JSX tag (not just import)
        if (content.includes('<RouteBreadcrumb')) {
            console.log(`SKIP (already has breadcrumb tag): ${foldername}`);
            continue;
        }

        // Add the RouteBreadcrumb component right after the Schema Script closing tag, before Hero
        // Use regex to handle various whitespace/line endings
        const regex = /(dangerouslySetInnerHTML=\{\{ __html: JSON\.stringify\(routeSchema\) \}\}[\s\S]*?\/>)([\s\S]*?)(<Hero)/;

        const breadcrumbTag = `\n\n            <RouteBreadcrumb fromCity="${fromCity}" toCity="${toCity}" fromSlug="${fromPart}" toSlug="${toPart}" />\n\n            `;

        if (regex.test(content)) {
            content = content.replace(regex, `$1$2${breadcrumbTag}$3`);
            fs.writeFileSync(pagePath, content, 'utf8');
            console.log(`Added breadcrumb tag: ${foldername}`);
        } else {
            console.log(`WARN - pattern not found: ${foldername}`);
        }
    }
}

processRoutes();
console.log("\nAll breadcrumb tags added successfully!");
