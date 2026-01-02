import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    
    const guidePages = [
        '/guides/jeddah-airport-guide',
        '/guides/makkah-umrah-guide',
        '/guides/riyadh-business-guide',
        '/guides/meeqat-locations',
        '/guides/currency',
        '/guides/haram-gates-access',
        '/guides/madinah-food',
        '/guides/madinah-prayer-times',
        '/guides/madinah-weather',
        '/guides/makkah-shopping',
        '/guides/quba-walking-path',
        '/guides/seven-mosques',
        '/guides/uhud-history',
        '/guides/umrah-tawaf-guide',
    ];

    const guideUrls = guidePages.map((route) => {
        return `  <url>
    <loc>${baseUrl}${route}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>`;
    }).join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${guideUrls}
</urlset>`;

    return new NextResponse(sitemap, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}

