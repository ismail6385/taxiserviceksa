export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    const lastMod = new Date().toISOString();

    const routes = [
        "abu-dhabi-dammam", "abu-dhabi-jeddah", "abu-dhabi-madinah", "abu-dhabi-makkah", "abu-dhabi-riyadh",
        "alula-jeddah", "amman-dammam", "amman-jeddah", "amman-madinah", "amman-makkah", "amman-riyadh",
        "bahrain-dammam", "bahrain-jeddah", "bahrain-madinah", "bahrain-makkah", "bahrain-riyadh",
        "dammam-abu-dhabi", "dammam-amman", "dammam-bahrain", "dammam-doha", "dammam-dubai", "dammam-kuwait", "dammam-muscat", "dammam-sharjah",
        "doha-dammam", "doha-jeddah", "doha-madinah", "doha-makkah", "doha-riyadh",
        "dubai-dammam", "dubai-jeddah", "dubai-madinah", "dubai-makkah", "dubai-riyadh",
        "jeddah-abu-dhabi", "jeddah-alula", "jeddah-amman", "jeddah-bahrain", "jeddah-doha", "jeddah-dubai", "jeddah-kuwait", "jeddah-madinah", "jeddah-makkah", "jeddah-makkah-old", "jeddah-muscat", "jeddah-riyadh", "jeddah-sharjah", "jeddah-taif",
        "jeddah-to-dar-al-taqwa-madinah", "jeddah-to-fairmont-makkah", "jeddah-to-hilton-madinah", "jeddah-to-oberoi-madinah", "jeddah-to-pullman-makkah", "jeddah-to-swissotel-makkah", "jeddah-train-station-taxi", "jeddah-yanbu",
        "kuwait-dammam", "kuwait-jeddah", "kuwait-madinah", "kuwait-makkah", "kuwait-riyadh",
        "madinah-abu-dhabi", "madinah-amman", "madinah-bahrain", "madinah-doha", "madinah-dubai", "madinah-jeddah", "madinah-kuwait", "madinah-makkah", "madinah-muscat", "madinah-sharjah",
        "madinah-to-jeddah-airport-departures", "madinah-train-station-taxi",
        "makkah-abu-dhabi", "makkah-amman", "makkah-bahrain", "makkah-doha", "makkah-dubai", "makkah-jeddah", "makkah-kuwait", "makkah-madinah", "makkah-muscat", "makkah-sharjah",
        "muscat-dammam", "muscat-jeddah", "muscat-madinah", "muscat-makkah", "muscat-riyadh",
        "riyadh-abu-dhabi", "riyadh-amman", "riyadh-bahrain", "riyadh-dammam", "riyadh-doha", "riyadh-dubai", "riyadh-jeddah", "riyadh-kuwait", "riyadh-muscat", "riyadh-sharjah",
        "sharjah-dammam", "sharjah-jeddah", "sharjah-madinah", "sharjah-makkah", "sharjah-riyadh",
        "taif-jeddah", "yanbu-jeddah"
    ];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${routes.map((slug: string) => `
            <url>
                <loc>${baseUrl}/routes/${slug}/</loc>
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
