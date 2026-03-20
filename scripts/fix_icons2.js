const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // We look for typical button contents that are just "WhatsApp Booking"
    const regex1 = />\s*WhatsApp Booking\s*<\/Button>/g;
    if (regex1.test(content)) {
        content = content.replace(regex1, '><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>');
        changed = true;
    }

    const regex2 = />\s*WhatsApp Booking\s*<\/span>/g;
    if (regex2.test(content)) {
        content = content.replace(regex2, '><WhatsAppIcon className="w-4 h-4 mr-2 fill-current inline-block" /> WhatsApp Booking</span>');
        changed = true;
    }
    
    // Also add import if missing and changed
    if (changed && !content.includes("WhatsAppIcon")) {
        const importStatement = "import WhatsAppIcon from '@/components/WhatsAppIcon';\n";
        
        // Find last import
        const lastImportRegex = /import.*from.*(?:'|").*(?:'|");?/g;
        let match;
        let lastIndex = -1;
        while ((match = lastImportRegex.exec(content)) !== null) {
            lastIndex = match.index + match[0].length;
        }

        if (lastIndex !== -1) {
            content = content.slice(0, lastIndex) + '\n' + importStatement + content.slice(lastIndex);
        } else {
            content = importStatement + content;
        }
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Updated", filePath);
    }
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (filePath.includes('.next') || filePath.includes('node_modules')) return;
        if (fs.statSync(filePath).isDirectory()) {
            traverse(filePath);
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
            processFile(filePath);
        }
    });
}

traverse('components');
traverse('app');
