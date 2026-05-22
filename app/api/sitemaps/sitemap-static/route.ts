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
        { route: '/riyadh-airport-taxi', priority: 0.9 },
        { route: '/riyadh-chauffeur', priority: 0.9 },
        { route: '/blog/how-to-get-from-riyadh-airport-to-city', priority: 0.85 },
        { route: '/blog/how-much-is-taxi-from-riyadh-airport', priority: 0.85 },
        { route: '/blog/should-i-rent-a-car-in-saudi-arabia', priority: 0.85 },
        { route: '/blog/private-driver-vs-uber-riyadh-tourist', priority: 0.85 },
        { route: '/tabuk-airport-taxi', priority: 0.9 },
        { route: '/services/taxi-in-tabuk', priority: 0.9 },
        { route: '/blog/how-to-get-to-neom-from-tabuk', priority: 0.85 },
        { route: '/blog/tabuk-to-neom-distance-drive-time', priority: 0.85 },
        { route: '/blog/private-driver-tabuk-neom-price', priority: 0.85 },
        { route: '/blog/can-tourists-visit-neom-from-tabuk', priority: 0.85 },
        { route: '/blog/how-to-get-from-tabuk-to-alula', priority: 0.85 },
        { route: '/blog/tabuk-to-alula-distance-drive-time', priority: 0.85 },
        { route: '/blog/hegra-madain-salih-how-to-visit-from-tabuk', priority: 0.85 },
        { route: '/blog/alula-visitor-guide-from-tabuk', priority: 0.85 },
        { route: '/blog/tabuk-airport-tuu-arrivals-guide', priority: 0.85 },
        { route: '/blog/how-to-get-from-tabuk-airport-to-city', priority: 0.85 },
        { route: '/blog/is-there-uber-in-tabuk', priority: 0.85 },
        { route: '/blog/car-rental-tabuk-airport-worth-it', priority: 0.85 },
        { route: '/blog/tabuk-to-haql-transport-guide', priority: 0.85 },
        { route: '/blog/best-red-sea-beaches-near-tabuk', priority: 0.85 },
        { route: '/blog/tabuk-to-sharma-beach-how-to-get-there', priority: 0.85 },
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

