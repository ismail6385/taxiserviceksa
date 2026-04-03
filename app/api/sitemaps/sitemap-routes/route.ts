import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    
    // Dynamically read routes from the filesystem
    let routePages: string[] = [];
    try {
        const routesDirectory = path.join(process.cwd(), 'app', '(main)', 'routes');
        const routes = fs.readdirSync(routesDirectory);
        
        routePages = routes
            .filter(file => {
                const filePath = path.join(routesDirectory, file);
                return fs.statSync(filePath).isDirectory();
            })
            .map(slug => `/routes/${slug}`);
    } catch (e) {
        console.error('Failed to read routes directory:', e);
    }

    const routeUrls = routePages.map((route) => {
        return `  <url>
    <loc>${baseUrl}${route}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
    }).join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routeUrls}
</urlset>`;

    return new NextResponse(sitemap, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}

