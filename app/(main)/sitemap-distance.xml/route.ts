import { DISTANCE_ROUTES } from '@/data/distanceRoutes';

// Mirrors the sitemap-borders.xml pattern: /distance/ (the hub) is a top-level
// app/(main) directory with its own page.tsx, so it's already auto-discovered by
// sitemap-pages.xml. This sitemap covers the nested /distance/{slug}/ route pages,
// which that auto-discovery doesn't reach.
export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    const lastMod = new Date().toISOString();

    const distanceSlugs = Object.keys(DISTANCE_ROUTES);

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${distanceSlugs.map((slug: string) => `
            <url>
                <loc>${baseUrl}/distance/${slug}/</loc>
                <lastmod>${lastMod}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.7</priority>
            </url>
        `).join('')}
    </urlset>`;

    return new Response(sitemapXml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
