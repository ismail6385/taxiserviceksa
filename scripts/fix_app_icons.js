const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fp = path.join(dir, file);
        const stat = fs.statSync(fp);
        if (stat.isDirectory()) {
            results = results.concat(walk(fp));
        } else if (fp.endsWith('.tsx') && !fp.endsWith('.bak_links')) {
            results.push(fp);
        }
    });
    return results;
}

const allFiles = walk('d:/Taxi KSA/taxiksa/app/(main)');
let fixed = 0;

allFiles.forEach(fp => {
    let c = fs.readFileSync(fp, 'utf8');
    if (!c.includes('MessageCircle')) return;

    // Remove MessageCircle from imports
    c = c.replace(/,\s*MessageCircle/g, '');
    c = c.replace(/MessageCircle\s*,\s*/g, '');
    c = c.replace(/import\s*\{\s*MessageCircle\s*\}\s*from\s*'lucide-react';\s*\r?\n?/g, '');
    c = c.replace(/import\s*\{\s*\}\s*from\s*'lucide-react';\s*\r?\n?/g, '');

    // Add WhatsAppIcon import
    if (!c.includes("import WhatsAppIcon")) {
        const lastLucide = c.lastIndexOf("from 'lucide-react';");
        if (lastLucide > -1) {
            const insertPos = c.indexOf('\n', lastLucide) + 1;
            c = c.slice(0, insertPos) + "import WhatsAppIcon from '@/components/WhatsAppIcon';\n" + c.slice(insertPos);
        } else {
            c = "import WhatsAppIcon from '@/components/WhatsAppIcon';\n" + c;
        }
    }

    // Replace <MessageCircle with <WhatsAppIcon
    c = c.replace(/<MessageCircle/g, '<WhatsAppIcon');

    // Remove "Get Quote" and "Book Now" from button text
    c = c.replace(/>Get Quote</g, '>WhatsApp Booking<');
    c = c.replace(/>Book Now</g, '>WhatsApp Booking<');

    fs.writeFileSync(fp, c, 'utf8');
    fixed++;
    console.log('Fixed:', path.basename(fp));
});

console.log(`\nTotal fixed: ${fixed} files`);
