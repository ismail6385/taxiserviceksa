import fs from 'fs';
import path from 'path';

export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    const lastMod = new Date().toISOString();

    // Dynamically list all route directories
    const routesDirectory = path.join(process.cwd(), 'app', '(main)', 'routes');
    const routes = fs.readdirSync(routesDirectory).filter(file => {
        const filePath = path.join(routesDirectory, file);
        return fs.statSync(filePath).isDirectory();
    });

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

