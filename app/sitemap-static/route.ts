import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    
    const staticPages = [
        { route: '', priority: 1.0 },
        { route: '/about', priority: 0.8 },
        { route: '/contact', priority: 0.8 },
        { route: '/booking', priority: 0.9 },
        { route: '/gallery', priority: 0.7 },
        { route: '/faq', priority: 0.8 },
        { route: '/privacy-policy', priority: 0.5 },
        { route: '/terms-conditions', priority: 0.5 },
        { route: '/fleet', priority: 0.8 },
        { route: '/locations', priority: 0.8 },
        { route: '/routes', priority: 0.8 },
        { route: '/services', priority: 0.8 },
        { route: '/guides', priority: 0.9 },
        { route: '/submit-review', priority: 0.7 },
        { route: '/ask-question', priority: 0.7 },
    ];

    const staticUrls = staticPages.map(({ route, priority }) => {
        return `  <url>
    <loc>${baseUrl}${route}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    }).join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
</urlset>`;

    return new NextResponse(sitemap, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}

