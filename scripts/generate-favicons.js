/**
 * Favicon Generator Script
 * 
 * Generates all required favicon sizes from the source SVG logo.
 * Run: node scripts/generate-favicons.js
 * 
 * Requires: npm install sharp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SVG_SOURCE = path.join(PUBLIC_DIR, 'logo.svg');

async function generateFavicons() {
  console.log('🎨 Generating favicon files from logo.svg...\n');

  const svgBuffer = fs.readFileSync(SVG_SOURCE);

  // 1. Generate favicon.ico (48x48) — Google's recommended minimum for search results
  console.log('  → favicon.ico (48x48)');
  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'favicon-48.png'));

  // 2. Generate standard favicon PNG sizes
  const sizes = [16, 32, 48, 96, 128, 192, 512];
  for (const size of sizes) {
    const filename = `favicon-${size}x${size}.png`;
    console.log(`  → ${filename}`);
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(PUBLIC_DIR, filename));
  }

  // 3. Generate Apple Touch Icon (180x180)
  console.log('  → apple-touch-icon.png (180x180)');
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));

  // 4. Generate Android Chrome Icons (192x192 and 512x512 — already done above)
  console.log('  → android-chrome-192x192.png');
  fs.copyFileSync(
    path.join(PUBLIC_DIR, 'favicon-192x192.png'),
    path.join(PUBLIC_DIR, 'android-chrome-192x192.png')
  );
  console.log('  → android-chrome-512x512.png');
  fs.copyFileSync(
    path.join(PUBLIC_DIR, 'favicon-512x512.png'),
    path.join(PUBLIC_DIR, 'android-chrome-512x512.png')
  );

  console.log('\n✅ All favicon files generated successfully!');
  console.log('\n⚠️  Note: To create a proper .ico file, use an online converter');
  console.log('    (like https://realfavicongenerator.net) with the favicon-48.png,');
  console.log('    or use the SVG favicon which is already referenced in the layout.\n');
}

generateFavicons().catch(console.error);
