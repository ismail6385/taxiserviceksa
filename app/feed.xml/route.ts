import { blogService } from '@/lib/blogService';

export async function GET() {
    const siteUrl = "https://taxiserviceksa.com";
    const authorName = "Taxi Service KSA";
    const authorEmail = "taxiserviceksa9988@gmail.com";

    // 1. Fetch Dynamic Blogs
    let posts: any[] = [];
    try {
        posts = await blogService.getPublishedBlogs();
    } catch (e) {
        console.error("Failed to fetch blogs for RSS feed:", e);
    }

    // 2. Static Sticky Pages
    const stickyPages = [
        {
            title: "Jeddah Airport to Makkah Taxi",
            slug: "jeddah-airport-to-makkah-taxi",
            excerpt: "Book your reliable transfer from King Abdulaziz Airport to Makkah hotels. 24/7 Service.",
            date: "2024-01-01"
        },
        {
            title: "Makkah to Madinah Taxi",
            slug: "makkah-to-madinah-taxi",
            excerpt: "Comfortable GMC Yukon transfers between the Holy Cities. Zero stress journey.",
            date: "2024-01-01"
        },
        {
            title: "AlUla Tour from Madinah",
            slug: "locations/alula",
            excerpt: "Visit the ancient city of Hegra. Day trips available from Madinah.",
            date: "2024-01-01"
        }
    ];

    // Build Items XML
    let itemsXml = "";

    // Smart Image Helper
    const getFallbackImage = (title: string, excerpt: string) => {
        const text = (title + " " + excerpt).toLowerCase();

        // Exact Article Matches (High Priority)
        if (text.includes('hidden') && text.includes('makkah')) return `${siteUrl}/blog/hidden-makkah-spots.png`;
        if (text.includes('shopping') && text.includes('jeddah')) return `${siteUrl}/blog/jeddah-shopping-guide.png`;
        if (text.includes('taif') && text.includes('rose')) return `${siteUrl}/blog/taif-rose-festival.png`;

        // General Fallbacks (Medium Priority)
        if (text.includes('makkah') || text.includes('haram') || text.includes('umrah') || text.includes('kaaba')) return `${siteUrl}/locations/makkah.webp`;
        if (text.includes('madinah') || text.includes('prophet') || text.includes('masjid') || text.includes('nabawi')) return `${siteUrl}/locations/madinah.webp`;
        if (text.includes('jeddah') || text.includes('airport') || text.includes('terminal')) return `${siteUrl}/locations/jeddah.webp`;
        if (text.includes('alula') || text.includes('hegra') || text.includes('elephant')) return `${siteUrl}/locations/alula.webp`;
        if (text.includes('taif') || text.includes('cable car')) return `${siteUrl}/locations/taif.webp`;
        if (text.includes('yanbu')) return `${siteUrl}/locations/yanbu.webp`;
        if (text.includes('khayber')) return `${siteUrl}/locations/khayber.webp`;

        return `${siteUrl}/opengraph-image.png`; // Final Brand Fallback
    };

    // Add blogs
    posts.forEach((post) => {
        const link = `${siteUrl}/blog/${post.slug}`;
        // Logic: Use DB image -> OR Smart Fallback -> OR Brand Card
        let validImage = post.featured_image;
        if (!validImage || validImage.trim() === "") {
            validImage = getFallbackImage(post.title, post.excerpt || "");
        } else if (validImage.startsWith('/')) {
            validImage = `${siteUrl}${validImage}`;
        }

        itemsXml += `
        <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${link}</link>
            <guid>${link}</guid>
            <pubDate>${new Date(post.published_at || post.created_at).toUTCString()}</pubDate>
            <description><![CDATA[${post.excerpt}]]></description>
            <author>${authorEmail} (${authorName})</author>
            <enclosure url="${validImage}" length="0" type="image/webp" />
            <media:content xmlns:media="http://search.yahoo.com/mrss/" url="${validImage}" medium="image" />
        </item>`;
    });

    // Add sticky pages
    stickyPages.forEach((page) => {
        const link = `${siteUrl}/${page.slug}`;
        const image = getFallbackImage(page.title, page.excerpt);

        itemsXml += `
        <item>
            <title><![CDATA[${page.title}]]></title>
            <link>${link}</link>
            <guid>${link}</guid>
            <pubDate>${new Date(page.date).toUTCString()}</pubDate>
            <description><![CDATA[${page.excerpt}]]></description>
            <author>${authorEmail} (${authorName})</author>
            <enclosure url="${image}" length="0" type="image/webp" />
            <media:content xmlns:media="http://search.yahoo.com/mrss/" url="${image}" medium="image" />
        </item>`;
    });

    const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
    <channel>
        <title>Taxi Service KSA - Travel Insights</title>
        <link>${siteUrl}</link>
        <description>Official travel guides, transport reports, and news from Taxi Service KSA.</description>
        <language>en</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <image>
            <url>${siteUrl}/logo.png</url>
            <title>Taxi Service KSA</title>
            <link>${siteUrl}</link>
        </image>
        ${itemsXml}
    </channel>
</rss>`;

    return new Response(rssXml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
}
