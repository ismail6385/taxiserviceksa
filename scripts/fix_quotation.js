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

const dirsToProcess = [
    'd:/Taxi KSA/taxiksa/app/',
    'd:/Taxi KSA/taxiksa/components/'
];

let fixed = 0;

for (const dir of dirsToProcess) {
    if (!fs.existsSync(dir)) continue;
    const allFiles = walk(dir);
    
    allFiles.forEach(fp => {
        let c = fs.readFileSync(fp, 'utf8');
        let modified = false;

        if (/Request Quotation/i.test(c)) {
            c = c.replace(/Request Quotation/gi, 'WhatsApp Booking');
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(fp, c, 'utf8');
            fixed++;
        }
    });
}

console.log(`\nTotal files updated with text replacement: ${fixed} files`);
