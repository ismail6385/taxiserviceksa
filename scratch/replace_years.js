const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..', 'app', '(main)');

let filesModified = 0;
let totalReplacements = 0;

function walkDir(currentDir) {
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
        const filePath = path.join(currentDir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if (stat.isFile() && (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json') || file.endsWith('.xml'))) {
            try {
                let content = fs.readFileSync(filePath, 'utf8');
                if (content.includes('2025')) {
                    const occurrences = content.split('2025').length - 1;
                    content = content.replace(/2025/g, '2026');
                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log(`Updated ${filePath}: replaced ${occurrences} occurrence(s)`);
                    filesModified++;
                    totalReplacements += occurrences;
                }
            } catch (err) {
                console.error(`Error processing ${filePath}:`, err);
            }
        }
    }
}

walkDir(rootDir);
console.log(`\nDone! Modified ${filesModified} file(s) with ${totalReplacements} total replacement(s).`);
