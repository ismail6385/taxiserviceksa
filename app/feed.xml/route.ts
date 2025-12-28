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

    // Add blogs
    posts.forEach((post) => {
        const link = `${siteUrl}/blog/${post.slug}`;
        itemsXml += `
        <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${link}</link>
            <guid>${link}</guid>
            <pubDate>${new Date(post.published_at || post.created_at).toUTCString()}</pubDate>
            <description><![CDATA[${post.excerpt}]]></description>
            <author>${authorEmail} (${authorName})</author>
        </item>`;
    });

    // Add sticky pages
    stickyPages.forEach((page) => {
        const link = `${siteUrl}/${page.slug}`;
        itemsXml += `
        <item>
            <title><![CDATA[${page.title}]]></title>
            <link>${link}</link>
            <guid>${link}</guid>
            <pubDate>${new Date(page.date).toUTCString()}</pubDate>
            <description><![CDATA[${page.excerpt}]]></description>
            <author>${authorEmail} (${authorName})</author>
        </item>`;
    });

    const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
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
