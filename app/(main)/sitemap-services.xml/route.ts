import fs from 'fs';
import path from 'path';

export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    const lastMod = new Date().toISOString();

    // Dynamically list all service directories
    const servicesDirectory = path.join(process.cwd(), 'app', '(main)', 'services');
    const services = fs.readdirSync(servicesDirectory).filter(file => {
        const filePath = path.join(servicesDirectory, file);
        return fs.statSync(filePath).isDirectory();
    });

    const serviceUrls = services.map((slug: string) => ({
        url: `/services/${slug}/`,
        priority: 0.8
    }));

    // Routes (High intent -> 0.8 priority for featured routes)
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

    // Dynamically list all fleet directories
    const fleetDirectory = path.join(process.cwd(), 'app', '(main)', 'fleet');
    const fleetSlugs = fs.readdirSync(fleetDirectory).filter(file => {
        const filePath = path.join(fleetDirectory, file);
        return fs.statSync(filePath).isDirectory();
    });

    const fleetUrls = fleetSlugs.map((slug: string) => ({
        url: `/fleet/${slug}/`,
        priority: 0.6
    }));

    const allUrls = [...serviceUrls, ...routeUrls, ...fleetUrls];

    // Remove duplicates if any
    const uniqueUrls = Array.from(new Set(allUrls.map(u => u.url)))
        .map(url => allUrls.find(u => u.url === url));

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${uniqueUrls.map((item: any) => `
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
