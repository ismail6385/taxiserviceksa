export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';

    const pages = [
        { url: '', priority: 1.0, changefreq: 'monthly' },
        { url: '/booking', priority: 0.9, changefreq: 'monthly' },
        { url: '/about', priority: 0.6, changefreq: 'monthly' },
        { url: '/contact', priority: 0.6, changefreq: 'monthly' },
        { url: '/gallery', priority: 0.5, changefreq: 'monthly' },
        { url: '/faq', priority: 0.5, changefreq: 'monthly' },
        { url: '/calculator', priority: 0.7, changefreq: 'monthly' },
        { url: '/ask-question', priority: 0.5, changefreq: 'monthly' },
        { url: '/submit-review', priority: 0.5, changefreq: 'monthly' },
        { url: '/map', priority: 0.4, changefreq: 'monthly' },
        { url: '/partners', priority: 0.4, changefreq: 'monthly' },
        { url: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
        { url: '/terms-conditions', priority: 0.3, changefreq: 'yearly' },
        { url: '/author/muhammad-ismail', priority: 0.4, changefreq: 'monthly' },
        // Direct high-value landing pages in app root
        { url: '/madinah-airport-taxi', priority: 0.8, changefreq: 'monthly' },
        { url: '/makkah-to-madinah-taxi', priority: 0.8, changefreq: 'monthly' },
        { url: '/makkah-train-station-taxi', priority: 0.8, changefreq: 'monthly' },
    ];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages.map((page: any) => `
            <url>
                <loc>${baseUrl}${page.url === '' ? '/' : page.url + '/'}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>${page.changefreq}</changefreq>
                <priority>${page.priority}</priority>
            </url>
        `).join('')}
    </urlset>`;

    return new Response(sitemapXml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
