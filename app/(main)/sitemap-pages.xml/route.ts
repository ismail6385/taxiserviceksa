import fs from 'fs';
import path from 'path';

export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    const lastMod = new Date().toISOString().split('T')[0];

    // Standard static pages
    const basePages = [
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
        { url: '/fleet', priority: 0.7, changefreq: 'monthly' },
        { url: '/locations', priority: 0.8, changefreq: 'monthly' },
        { url: '/services', priority: 0.8, changefreq: 'monthly' }
    ];

    // Dynamic city array for 'join-as-driver/[city]'
    const driverCities = [
        'riyadh', 'jeddah', 'makkah', 'madinah', 'dammam', 'khobar', 'dhahran', 
        'taif', 'tabuk', 'abha', 'khamis-mushait', 'hail', 'buraidah', 'najran', 
        'jubail', 'yanbu', 'al-qassim', 'al-ahsa'
    ];
    
    const driverCityPages = driverCities.map(city => ({
        url: `/join-as-driver/${city}`,
        priority: 0.8,
        changefreq: 'monthly'
    }));

    // Dynamically list all other directories in app/(main) that contain a page.tsx
    let dynamicPages: any[] = [];
    try {
        const mainDirectory = path.join(process.cwd(), 'app', '(main)');
        const excludedDirs = [
            'api', 'fleet', 'locations', 'services', 'routes', 'blog', 'guides', 'partners', 'join-as-driver', 'author'
        ];
        
        const topLevelDirs = fs.readdirSync(mainDirectory).filter(file => {
            if (file.startsWith('sitemap') || excludedDirs.includes(file)) return false;
            
            const filePath = path.join(mainDirectory, file);
            if (fs.statSync(filePath).isDirectory()) {
                const pagePath = path.join(filePath, 'page.tsx');
                return fs.existsSync(pagePath);
            }
            return false;
        });
        
        dynamicPages = topLevelDirs.map(slug => {
            // Priority based on content type
            const isHighPriority = slug.includes('-taxi') || slug.includes('airport');
            const priority = isHighPriority ? 0.8 : 0.6;
            
            // Skip paths already in basePages
            if (basePages.some(p => p.url === `/${slug}`)) return null;

            return {
                url: `/${slug}`,
                priority,
                changefreq: 'monthly'
            };
        }).filter(Boolean);
        
    } catch (e) {
        console.error('Failed to read main directory:', e);
    }

    const pages = [...basePages, ...driverCityPages, ...dynamicPages];

    // Remove duplicates if any
    const uniquePages = Array.from(new Set(pages.map(p => p.url)))
        .map(url => pages.find(p => p.url === url));

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${uniquePages.map((page: any) => `
            <url>
                <loc>${baseUrl}${page.url === '' ? '/' : page.url + '/'}</loc>
                <lastmod>${lastMod}</lastmod>
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
