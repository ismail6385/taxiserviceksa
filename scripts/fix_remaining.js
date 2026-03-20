const fs = require('fs');
const path = require('path');

const filesToFix = [
    'd:/Taxi KSA/taxiksa/components/seo/QuestionForm.tsx',
    'd:/Taxi KSA/taxiksa/components/QuestionsDisplay.tsx',
    'd:/Taxi KSA/taxiksa/components/FloatingWhatsApp.tsx',
];

filesToFix.forEach(fp => {
    if (!fs.existsSync(fp)) { console.log('Skip:', fp); return; }
    let c = fs.readFileSync(fp, 'utf8');

    // Remove MessageCircle from imports
    c = c.replace(/,\s*MessageCircle/g, '');
    c = c.replace(/MessageCircle\s*,\s*/g, '');
    c = c.replace(/import\s*\{\s*MessageCircle\s*\}\s*from\s*'lucide-react';\s*\r?\n?/g, '');
    c = c.replace(/import\s*\{\s*\}\s*from\s*'lucide-react';\s*\r?\n?/g, '');

    // Add WhatsAppIcon import if not present
    if (!c.includes("import WhatsAppIcon")) {
        const lastLucide = c.lastIndexOf("from 'lucide-react';");
        if (lastLucide > -1) {
            const insertPos = c.indexOf('\n', lastLucide) + 1;
            c = c.slice(0, insertPos) + "import WhatsAppIcon from '@/components/WhatsAppIcon';\n" + c.slice(insertPos);
        } else {
            // No lucide import, add at top after 'use client' or first line
            const firstNewline = c.indexOf('\n') + 1;
            c = c.slice(0, firstNewline) + "import WhatsAppIcon from '@/components/WhatsAppIcon';\n" + c.slice(firstNewline);
        }
    }

    // Replace <MessageCircle with <WhatsAppIcon
    c = c.replace(/<MessageCircle/g, '<WhatsAppIcon');

    fs.writeFileSync(fp, c, 'utf8');
    console.log('Fixed:', path.basename(fp));
});

console.log('Done!');
