import { BUS_ROUTES } from '@/data/busRoutes';

// Mirrors the sitemap-distance.xml pattern: /bus/ (the hub) is a top-level
// app/(main) directory with its own page.tsx, so it's already auto-discovered by
// sitemap-pages.xml. This sitemap covers the nested /bus/{slug}/ route pages,
// which that auto-discovery doesn't reach.
export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    const lastMod = new Date().toISOString();

    const busSlugs = Object.keys(BUS_ROUTES);

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${busSlugs.map((slug: string) => `
            <url>
                <loc>${baseUrl}/bus/${slug}/</loc>
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
