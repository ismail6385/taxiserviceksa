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

        // Replace "Book Now" (case insensitive) -> WhatsApp Booking
        if (/Book Now/i.test(c)) {
            c = c.replace(/Book Now/gi, 'WhatsApp Booking');
            modified = true;
        }

        // Replace "Get Quote" (case insensitive) -> WhatsApp Booking
        if (/Get Quote/i.test(c)) {
            // Let's avoid breaking URLs if it exists in them, though unlikely separated by space. 
            // In case of "Get Quote for VIP...", "WhatsApp Booking for VIP..." sounds fine.
            c = c.replace(/Get Quote/gi, 'WhatsApp Booking');
            modified = true;
        }

        // The user also mentioned "qet quote". In case of typos
        if (/qet quote/i.test(c)) {
            c = c.replace(/qet quote/gi, 'WhatsApp Booking');
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(fp, c, 'utf8');
            fixed++;
        }
    });
}

console.log(`\nTotal files updated with text replacement: ${fixed} files`);
