const fs = require('fs');
const path = require('path');

const dir = 'd:/Taxi KSA/taxiksa/components/';
const files = [
    'Navbar.tsx',
    'Hero.tsx',
    'Footer.tsx',
    'FloatingWhatsApp.tsx',
    'FleetCard.tsx',
    'MobileStickyWhatsApp.tsx',
    'SocialSidebar.tsx',
    'BookingFormContent.tsx',
];

files.forEach(f => {
    const fp = path.join(dir, f);
    if (!fs.existsSync(fp)) { console.log('Skip (not found):', f); return; }

    let c = fs.readFileSync(fp, 'utf8');
    if (!c.includes('MessageCircle')) { console.log('Skip (no MessageCircle):', f); return; }

    // Remove MessageCircle from lucide imports
    // Handle: , MessageCircle at end
    c = c.replace(/,\s*MessageCircle/g, '');
    // Handle: MessageCircle, at start
    c = c.replace(/MessageCircle\s*,\s*/g, '');
    // Handle: import { MessageCircle } alone
    c = c.replace(/import\s*\{\s*\}\s*from\s*'lucide-react';\s*\n?/g, '');

    // Add WhatsAppIcon import if not present
    if (!c.includes("import WhatsAppIcon")) {
        // Add after the last lucide-react import
        const lastLucide = c.lastIndexOf("from 'lucide-react';");
        if (lastLucide > -1) {
            const insertPos = c.indexOf('\n', lastLucide) + 1;
            c = c.slice(0, insertPos) + "import WhatsAppIcon from '@/components/WhatsAppIcon';\n" + c.slice(insertPos);
        }
    }

    // Replace <MessageCircle .../> with <WhatsAppIcon .../>
    c = c.replace(/<MessageCircle/g, '<WhatsAppIcon');

    // Replace "Get Quote" and "Book Now" text in buttons with WhatsApp text
    c = c.replace(/>Get Quote</g, '>WhatsApp Booking<');
    c = c.replace(/>Book Now</g, '>WhatsApp Booking<');
    c = c.replace(/Get Quote via WhatsApp/g, 'Book via WhatsApp');

    fs.writeFileSync(fp, c, 'utf8');
    console.log('Fixed:', f);
});

// Also fix page-client.tsx
const pageClient = 'd:/Taxi KSA/taxiksa/app/(main)/page-client.tsx';
if (fs.existsSync(pageClient)) {
    let c = fs.readFileSync(pageClient, 'utf8');
    if (c.includes('MessageCircle')) {
        c = c.replace(/,\s*MessageCircle/g, '');
        c = c.replace(/MessageCircle\s*,\s*/g, '');
        if (!c.includes("import WhatsAppIcon")) {
            const lastLucide = c.lastIndexOf("from 'lucide-react';");
            if (lastLucide > -1) {
                const insertPos = c.indexOf('\n', lastLucide) + 1;
                c = c.slice(0, insertPos) + "import WhatsAppIcon from '@/components/WhatsAppIcon';\n" + c.slice(insertPos);
            }
        }
        c = c.replace(/<MessageCircle/g, '<WhatsAppIcon');
        c = c.replace(/>Get Quote</g, '>WhatsApp Booking<');
        c = c.replace(/>Book Now</g, '>WhatsApp Booking<');
        fs.writeFileSync(pageClient, c, 'utf8');
        console.log('Fixed: page-client.tsx');
    }
}

console.log('\nAll done! MessageCircle -> WhatsAppIcon replacement complete.');
