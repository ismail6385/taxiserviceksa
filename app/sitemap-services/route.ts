import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    
    const servicePages = [
        '/services/umrah-transport',
        '/services/airport-transfers',
        '/services/corporate-travel',
        '/services/heritage-tours',
        '/services/business',
        '/services/cable-car',
        '/services/intercity',
        '/services/madinah-ziyarat',
        '/services/tours',
        '/services/wheelchair-taxi',
    ];

    const serviceUrls = servicePages.map((route) => {
        return `  <url>
    <loc>${baseUrl}${route}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
    }).join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${serviceUrls}
</urlset>`;

    return new NextResponse(sitemap, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}

