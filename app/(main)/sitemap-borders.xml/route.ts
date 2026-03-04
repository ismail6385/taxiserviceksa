export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    const lastMod = new Date().toISOString();

    const borderCrossings = [
        "taxi-al-batha-border-crossing",
        "taxi-king-fahd-causeway-border-crossing",
        "taxi-salwa-border-crossing",
        "taxi-abu-samra-border-crossing",
        "taxi-khafji-border-crossing",
        "taxi-nuwaiseeb-border-crossing",
        "taxi-al-salmi-border-crossing",
        "taxi-al-haditha-border-crossing",
        "taxi-halat-ammar-border-crossing",
        "taxi-al-durrah-border-crossing",
        "taxi-rub-al-khali-border-crossing",
        "taxi-ramlat-khaliya-border-crossing"
    ];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${borderCrossings.map((slug: string) => `
            <url>
                <loc>${baseUrl}/border-crossings/${slug}/</loc>
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
