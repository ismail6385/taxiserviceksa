export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    const lastMod = new Date().toISOString();

    const locations = [
        'jeddah', 'makkah', 'madinah', 'riyadh',
        'taif', 'yanbu', 'alula', 'dammam',
        'dhahran', 'al-khobar', 'jubail', 'neom', 'abha',
        'khayber-fort', 'makkah-ziyarat',
        'jeddah/islamic-port', 'jeddah/corniche', 'jeddah/obhur', 'jeddah/al-balad', 'jeddah/al-hamra', 'jeddah/kaec-transfer',
        'makkah/train-station', 'makkah/aziziyah', 'makkah/jabal-omar', 'makkah/jarwal', 'makkah/kudai', 'makkah/misfalah',
        'madinah/train-station', 'madinah/quba', 'madinah/uhud', 'madinah/qiblatain', 'madinah/central-area', 'madinah/madinah-airport', 'madinah/sultana',
        'riyadh/diriyah', 'riyadh/boulevard-world', 'riyadh/kafd', 'riyadh/diplomatic-quarter', 'riyadh/front', 'riyadh/olaya', 'riyadh/bujairi-terrace',
        'dammam/corniche', 'al-khobar/bahrain-causeway', 'dhahran/ithra', 'jubail/industrial-city',
        'abha/al-soudah', 'alula/hegra'
    ];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${locations.map((slug: string) => `
            <url>
                <loc>${baseUrl}/locations/${slug}/</loc>
                <lastmod>${lastMod}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.8</priority>
            </url>
        `).join('')}
    </urlset>`;

    return new Response(sitemapXml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
