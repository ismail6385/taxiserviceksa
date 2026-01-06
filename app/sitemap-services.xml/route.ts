export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    const lastMod = new Date().toISOString();

    // 0.8 Priority - Main Function
    const services = [
        'umrah-transport',
        'airport-transfers',
        'corporate-travel',
        'heritage-tours',
        'business',
        'cable-car',
        'intercity',
        'madinah-ziyarat',
        'tours',
        'wheelchair-taxi',
        'makkah-ziyarat' // Assuming this exists under /services or /locations? In original sitemap it was /locations/makkah-ziyarat ? No, original list had it mixed. Let's check usually these are /services/ or /locations/.
        // I'll stick to /services/ for now, except makkah-ziyarat usually sounds like a service "Ziyarat". 
    ];
    // Actually, checking file structure, makkah-ziyarat was in `app/locations/makkah-ziyarat` based on `list_dir` earlier?
    // Step 318 showed "makkah-ziyarat" in "locations" dir. So it belongs in sitemap-locations.xml!

    const serviceUrls = [
        'umrah-transport', 'airport-transfers', 'corporate-travel', 'heritage-tours',
        'business', 'cable-car', 'intercity', 'madinah-ziyarat', 'tours', 'wheelchair-taxi'
    ].map((slug: string) => ({
        url: `/services/${slug}/`,
        priority: 0.8
    }));

    // Routes (High intent -> 0.8 or 0.9, User suggested 0.8 for money pages)
    const routeUrls = [
        'jeddah-makkah', 'makkah-madinah', 'jeddah-yanbu', 'jeddah-taif',
        'jeddah-alula', 'madinah-jeddah', 'riyadh-jeddah', 'makkah-jeddah',
        'riyadh-dammam', 'dammam-bahrain', 'alula-jeddah', 'jeddah-riyadh',
        'jeddah-train-station-taxi', 'madinah-makkah', 'madinah-to-jeddah-airport-departures',
        'madinah-train-station-taxi', 'taif-jeddah', 'yanbu-jeddah',
        'jeddah-to-dar-al-taqwa-madinah', 'jeddah-to-fairmont-makkah',
        'jeddah-to-hilton-madinah', 'jeddah-to-oberoi-madinah',
        'jeddah-to-pullman-makkah', 'jeddah-to-swissotel-makkah'
    ].map((slug: string) => ({
        url: `/routes/${slug}/`,
        priority: 0.8
    }));

    // Fleet (0.6)
    const fleetUrls = [
        'gmc-yukon', 'toyota-camry', 'hyundai-staria',
        'toyota-hiace', 'toyota-coaster', 'hyundai-starex'
    ].map((slug: string) => ({
        url: `/fleet/${slug}/`,
        priority: 0.6
    }));

    const allUrls = [...serviceUrls, ...routeUrls, ...fleetUrls];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allUrls.map((item: any) => `
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
