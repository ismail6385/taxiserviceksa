import fs from 'fs';
import path from 'path';

export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    const lastMod = new Date().toISOString();

    // Dynamically list all service directories
    const servicesDirectory = path.join(process.cwd(), 'app', '(main)', 'services');
    const services = fs.readdirSync(servicesDirectory).filter(file => {
        const filePath = path.join(servicesDirectory, file);
        return fs.statSync(filePath).isDirectory();
    });

    const serviceUrls = services.map((slug: string) => ({
        url: `/services/${slug}/`,
        priority: 0.8
    }));

    const uniqueUrls = serviceUrls;

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${uniqueUrls.map((item: any) => `
            <url>
                <loc>${baseUrl}${item.url}</loc>
                <lastmod>${lastMod}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>${item.priority}</priority>
            </url>
        `).join('')}
    </urlset>`;

    return new Response(sitemapXml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
