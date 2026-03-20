const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    if (content.includes('<WhatsAppIcon') && !content.includes('import WhatsAppIcon')) {
        const importStatement = "import WhatsAppIcon from '@/components/WhatsAppIcon';\n";
        
        // Find last import
        const lastImportRegex = /import.*from.*(?:'|").*(?:'|");?/g;
        let match;
        let lastIndex = -1;
        while ((match = lastImportRegex.exec(content)) !== null) {
            lastIndex = match.index + match[0].length;
        }

        if (lastIndex !== -1) {
            // Include newline before import to be safe
            content = content.slice(0, lastIndex) + '\n' + importStatement + content.slice(lastIndex);
        } else {
            content = importStatement + content;
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Added import to", filePath);
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
