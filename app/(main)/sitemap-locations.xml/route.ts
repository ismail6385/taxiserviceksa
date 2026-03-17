import { cities } from '@/data/cities';

export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    const lastMod = new Date().toISOString();

    // Main cities from data/cities.ts
    const mainLocations = Object.keys(cities).map(slug => ({
        url: `/locations/${slug}/`,
        priority: 0.8
    }));

    // Additional sub-locations or special landing pages
    const subLocations = [
        'khayber-fort', 'makkah-ziyarat', 'alula/hegra', 'abha/al-soudah',
        'jeddah/islamic-port', 'jeddah/corniche', 'jeddah/obhur', 'jeddah/al-balad', 'jeddah/al-hamra', 'jeddah/kaec-transfer',
        'makkah/train-station', 'makkah/aziziyah', 'makkah/jabal-omar', 'makkah/jarwal', 'makkah/kudai', 'makkah/misfalah',
        'madinah/train-station', 'madinah/quba', 'madinah/uhud', 'madinah/qiblatain', 'madinah/central-area', 'madinah/madinah-airport', 'madinah/sultana',
        'riyadh/diriyah', 'riyadh/boulevard-world', 'riyadh/kafd', 'riyadh/diplomatic-quarter', 'riyadh/front', 'riyadh/olaya', 'riyadh/bujairi-terrace',
        'dammam/corniche', 'al-khobar/bahrain-causeway', 'dhahran/ithra', 'jubail/industrial-city'
    ].map(slug => ({
        url: `/locations/${slug}/`,
        priority: 0.7
    }));

    const allLocations = [...mainLocations, ...subLocations];

    // Remove duplicates if any
    const uniqueLocations = Array.from(new Set(allLocations.map(l => l.url)))
        .map(url => allLocations.find(l => l.url === url));

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${uniqueLocations.map((item: any) => `
            <url>
                <loc>${baseUrl}${item.url}</loc>
                <lastmod>${lastMod}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>${item.priority}</priority>
            </url>
        `).join('')}
    </urlset>`;

    return new Response(sitemapXml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}

