const fs = require('fs');
const path = require('path');

// Map generated image PNGs to their target webp filenames
const imageMap = {
    'abu_dhabi_hero_1772607753794.png': 'abu-dhabi.webp',
    'amman_city_1772608990273.png': 'amman.webp',
    'bahrain_city_1772609008346.png': 'bahrain.webp',
    'muscat_city_1772609025315.png': 'muscat.webp',
    'sharjah_city_1772609054533.png': 'sharjah.webp',
    'dubai_city_1772609087462.png': 'dubai.webp',
    'doha_city_1772609105374.png': 'doha.webp',
    'kuwait_city_1772609131849.png': 'kuwait.webp',
    'dammam_city_1772609152306.png': 'dammam.webp',
    'riyadh_city_1772609169805.png': 'riyadh.webp',
};

const sourceDir = 'C:\\Users\\Latitude 7420\\.gemini\\antigravity\\brain\\a0314428-933b-4db2-afdd-07698e9d0c6f';
const targetDir = path.join(__dirname, 'public', 'locations');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

for (const [srcFile, destFile] of Object.entries(imageMap)) {
    const srcPath = path.join(sourceDir, srcFile);
    const destPath = path.join(targetDir, destFile);

    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${srcFile} -> ${destFile}`);
    } else {
        console.log(`NOT FOUND: ${srcFile}`);
    }
}

console.log('\nAll images copied to public/locations/!');
console.log('Note: These are PNG files renamed to .webp. For production, convert them properly using sharp or similar.');
