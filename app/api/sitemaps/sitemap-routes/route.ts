import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    
    const routePages = [
        '/routes/jeddah-makkah',
        '/routes/makkah-madinah',
        '/routes/jeddah-yanbu',
        '/routes/jeddah-taif',
        '/routes/jeddah-alula',
        '/routes/madinah-jeddah',
        '/routes/riyadh-jeddah',
    ];

    const routeUrls = routePages.map((route) => {
        return `  <url>
    <loc>${baseUrl}${route}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
    }).join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routeUrls}
</urlset>`;

    return new NextResponse(sitemap, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}

