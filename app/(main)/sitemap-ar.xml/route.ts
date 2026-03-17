import fs from 'fs';
import path from 'path';

export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    const lastMod = new Date().toISOString();

    const arPath = path.join(process.cwd(), 'app', '(main)', 'ar');

    // Root Arabic pages (excluding directories already handled)
    const arPages = [
        { url: '/ar', priority: 1.0 },
    ];

    // Read top-level directories that contain page.tsx directly
    try {
        const topDirs = fs.readdirSync(arPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory() && !['services', 'locations', 'guides'].includes(dirent.name))
            .map(dirent => dirent.name);

        topDirs.forEach(dir => {
            if (fs.existsSync(path.join(arPath, dir, 'page.tsx'))) {
                arPages.push({ url: `/ar/${dir}`, priority: 0.9 });
            }
        });
    } catch (e) {
        console.error('Error reading Arabic top-level pages:', e);
    }

    const getDynamicPaths = (subDir: string, priority: number) => {
        try {
            const fullPath = path.join(arPath, subDir);
            if (!fs.existsSync(fullPath)) return [];
            
            return fs.readdirSync(fullPath, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory())
                .filter(dirent => fs.existsSync(path.join(fullPath, dirent.name, 'page.tsx')))
                .map(dirent => ({
                    url: `/ar/${subDir}/${dirent.name}`,
                    priority: priority
                }));
        } catch (e) {
            console.error(`Error reading Arabic ${subDir}:`, e);
            return [];
        }
    };

    const arServices = getDynamicPaths('services', 0.8);
    const arLocations = getDynamicPaths('locations', 0.7);
    const arGuides = getDynamicPaths('guides', 0.6);

    const allArUrls = [...arPages, ...arServices, ...arLocations, ...arGuides];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allArUrls.map((item: any) => `
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
