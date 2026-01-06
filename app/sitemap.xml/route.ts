export async function GET() {
    const baseUrl = 'https://transferksa.com';

    // We manually list the sub-sitemaps
    const sitemaps = [
        `${baseUrl}/sitemap-pages.xml`,
        `${baseUrl}/sitemap-services.xml`,
        `${baseUrl}/sitemap-locations.xml`,
        `${baseUrl}/sitemap-blog.xml`,
    ];

    const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemaps.map(url => `
            <sitemap>
                <loc>${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </sitemap>
        `).join('')}
    </sitemapindex>`;

    return new Response(sitemapIndexXml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
