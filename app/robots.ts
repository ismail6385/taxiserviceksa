import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/wp-content/', '/_next/', '/2025/'],
        },
        sitemap: [
            'https://taxiserviceksa.com/sitemap-index.xml',
            'https://taxiserviceksa.com/sitemap.xml',
        ],
    }
}
