const fs = require('fs');
let c = fs.readFileSync('components/FleetCard.tsx', 'utf8');

const t = `                    {/* CTA Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                        <Link href={\`/booking?vehicle=\${encodeURIComponent(name.replace(/\\s+/g, '-'))}\`} className="block">
                            <Button className="w-full bg-primary hover:bg-primary/90 text-black font-extrabold h-12 rounded-xl text-sm">
                                WhatsApp Booking
                            </Button>
                        </Link>
                        <a 
                            href={\`https://wa.me/966569487569?text=Hello%2C%20I%20would%20like%20to%20book%20a%20\${encodeURIComponent(name)}.\`} 
                            target="_blank" 
                            className="block"
                        >
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold h-12 rounded-xl text-sm gap-2">
                                <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                                WhatsApp
                            </Button>
                        </a>
                    </div>`;

const r = `                    {/* CTA Buttons */}
                    <div className="grid grid-cols-1 gap-2">
                        <Link href={\`/booking?vehicle=\${encodeURIComponent(name.replace(/\\s+/g, '-'))}\`} className="block">
                            <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black h-12 rounded-xl text-sm flex items-center justify-center gap-2">
                                <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                                WhatsApp Booking
                            </Button>
                        </Link>
                    </div>`;

if(c.includes(t)) {
    c = c.replace(t, r);
    fs.writeFileSync('components/FleetCard.tsx', c, 'utf8');
    console.log("Replaced successfully (exact match)");
} else {
    // Try regex
    const start = c.indexOf('<div className="grid grid-cols-2 gap-2">');
    const end = c.indexOf('<Link href={href} className="block mt-2">');
    if (start !== -1 && end !== -1) {
        c = c.substring(0, start) + r.split('\n').slice(1).join('\n') + '\n                    ' + c.substring(end);
        fs.writeFileSync('components/FleetCard.tsx', c, 'utf8');
        console.log("Replaced using substring");
    } else {
        console.log("Could not find section");
    }
}
