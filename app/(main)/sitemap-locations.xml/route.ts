import fs from 'fs';
import path from 'path';
import { cities } from '@/data/cities';

export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    const lastMod = new Date().toISOString();

    const locationsDir = path.join(process.cwd(), 'app', '(main)', 'locations');

    const topLevelSlugs = fs.readdirSync(locationsDir, { withFileTypes: true })
        .filter(d => d.isDirectory() && d.name !== '[city]')
        .map(d => d.name);

    // cities.ts entries with no dedicated static folder are served by the
    // [city] dynamic route fallback — still real, indexable pages (e.g. dhahran, tabuk).
    const dynamicOnlyCities = Object.keys(cities).filter(slug => !topLevelSlugs.includes(slug));

    const topLevelUrls = [...topLevelSlugs, ...dynamicOnlyCities].map(slug => ({
        url: `/locations/${slug}/`,
        priority: 0.8,
    }));

    // Sub-district pages under a static location folder, e.g. locations/{city}/{district}/page.tsx
    const subUrls: { url: string; priority: number }[] = [];
    for (const slug of topLevelSlugs) {
        const cityDir = path.join(locationsDir, slug);
        let entries: fs.Dirent[] = [];
        try {
            entries = fs.readdirSync(cityDir, { withFileTypes: true });
        } catch {
            continue;
        }
        for (const entry of entries) {
            if (!entry.isDirectory()) continue;
            if (fs.existsSync(path.join(cityDir, entry.name, 'page.tsx'))) {
                subUrls.push({ url: `/locations/${slug}/${entry.name}/`, priority: 0.7 });
            }
        }
    }

    const allLocations = [...topLevelUrls, ...subUrls];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allLocations.map((item) => `
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
