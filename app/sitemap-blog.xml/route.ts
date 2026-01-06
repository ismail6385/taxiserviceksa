import { blogService } from '@/lib/blogService';

export async function GET() {
    const baseUrl = 'https://transferksa.com';

    // Fetch Blogs
    const blogs = await blogService.getPublishedBlogs();

    // Guides (Manually curated or could be dynamic if guides became a collection)
    const guides = [
        'jeddah-airport-guide',
        'makkah-umrah-guide',
        'riyadh-business-guide',
        'meeqat-locations',
        'avoid-taxi-scams',
        'uhud-history',
        'seven-mosques',
        'quba-walking-path',
        'madinah-food',
        'haram-gates-access',
        'currency',
        'makkah-shopping'
    ];

    // Extra Content
    const extras = [
        'insights/pilgrimage-transport-report-2025',
        'web-stories/5-umrah-mistakes-2025'
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
