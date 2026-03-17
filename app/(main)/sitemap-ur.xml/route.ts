import fs from 'fs';
import path from 'path';

export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    const lastMod = new Date().toISOString();

    const urPath = path.join(process.cwd(), 'app', '(main)', 'ur');

    // Root Urdu pages (excluding directories already handled)
    const urPages = [
        { url: '/ur', priority: 1.0 },
    ];

    // Read top-level directories that contain page.tsx directly
    try {
        const topDirs = fs.readdirSync(urPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory() && !['services', 'locations', 'guides'].includes(dirent.name))
            .map(dirent => dirent.name);

        topDirs.forEach(dir => {
            if (fs.existsSync(path.join(urPath, dir, 'page.tsx'))) {
                urPages.push({ url: `/ur/${dir}`, priority: 0.9 });
            }
        });
    } catch (e) {
        console.error('Error reading Urdu top-level pages:', e);
    }

    const getDynamicPaths = (subDir: string, priority: number) => {
        try {
            const fullPath = path.join(urPath, subDir);
            if (!fs.existsSync(fullPath)) return [];
            
            return fs.readdirSync(fullPath, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory())
                .filter(dirent => fs.existsSync(path.join(fullPath, dirent.name, 'page.tsx')))
                .map(dirent => ({
                    url: `/ur/${subDir}/${dirent.name}`,
                    priority: priority
                }));
        } catch (e) {
            console.error(`Error reading Urdu ${subDir}:`, e);
            return [];
        }
    };

    const urServices = getDynamicPaths('services', 0.8);
    const urLocations = getDynamicPaths('locations', 0.7);
    const urGuides = getDynamicPaths('guides', 0.6);

    const allUrUrls = [...urPages, ...urServices, ...urLocations, ...urGuides];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allUrUrls.map((item: any) => `
            <url>
                <loc>${baseUrl}${item.url}/</loc>
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
