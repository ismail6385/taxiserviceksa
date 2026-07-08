import fs from 'fs';
import path from 'path';
import { blogService } from '@/lib/blogService';

export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';

    // Fetch Blogs
    const blogs = await blogService.getPublishedBlogs();

    // Dynamically list all hand-written static blog post directories
    // (app/(main)/blog/<slug>/page.tsx). Excludes the [slug] catch-all
    // route and the /preview/ admin preview route.
    const blogDirectory = path.join(process.cwd(), 'app', '(main)', 'blog');
    const dbSlugSet = new Set(blogs.map(blog => blog.slug));
    const staticBlogSlugs = fs.readdirSync(blogDirectory).filter(file => {
        if (file === '[slug]' || file === 'preview') return false;
        const filePath = path.join(blogDirectory, file);
        if (!fs.statSync(filePath).isDirectory() || !fs.existsSync(path.join(filePath, 'page.tsx'))) return false;
        // A static page always wins over the [slug] catch-all at this URL, so skip
        // any slug that also exists as a DB row to avoid a duplicate <url> entry.
        return !dbSlugSet.has(file);
    });

    // Dynamically list all guide directories
    const guidesDirectory = path.join(process.cwd(), 'app', '(main)', 'guides');
    const guides = fs.readdirSync(guidesDirectory).filter(file => {
        const filePath = path.join(guidesDirectory, file);
        return fs.statSync(filePath).isDirectory();
    });

    // Extra Content
    const extras = [
        'insights/pilgrimage-transport-report-2026',
        'web-stories/5-umrah-mistakes-2026'
    ];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!-- Main Guides Index -->
        <url>
            <loc>${baseUrl}/guides/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.7</priority>
        </url>
        
        <!-- Individual Guides -->
        ${guides.map((slug: string) => `
            <url>
                <loc>${baseUrl}/guides/${slug}/</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.6</priority>
            </url>
        `).join('')}

        <!-- Extras (Insights & Web Stories) -->
        ${extras.map((slug: string) => `
            <url>
                <loc>${baseUrl}/${slug}/</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.6</priority>
            </url>
        `).join('')}

        <!-- Blog Index -->
        <url>
            <loc>${baseUrl}/blog/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.7</priority>
        </url>

        <!-- Static (hand-written) Blog Posts -->
        ${staticBlogSlugs.map((slug: string) => `
            <url>
                <loc>${baseUrl}/blog/${slug}/</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.6</priority>
            </url>
        `).join('')}

        <!-- Dynamic Blog Posts -->
        ${blogs.map(blog => {
        const publishDate = new Date(blog.published_at || blog.created_at);
        const isOld = (Date.now() - publishDate.getTime()) > (1000 * 60 * 60 * 24 * 365); // 1 year
        const freq = isOld ? 'yearly' : 'monthly';
        const lastMod = blog.updated_at ? new Date(blog.updated_at).toISOString() : publishDate.toISOString();

        return `
            <url>
                <loc>${baseUrl}/blog/${blog.slug}/</loc>
                <lastmod>${lastMod}</lastmod>
                <changefreq>${freq}</changefreq>
                <priority>0.6</priority>
            </url>
            `;
    }).join('')}
    </urlset>`;

    return new Response(sitemapXml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
