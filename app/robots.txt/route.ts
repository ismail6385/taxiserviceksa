import { NextResponse } from 'next/server';

export async function GET() {
    const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /wp-content/
Disallow: /_next/
Disallow: /2025/

Sitemap: https://taxiserviceksa.com/sitemap.xml
`;

    return new NextResponse(robotsTxt, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}

