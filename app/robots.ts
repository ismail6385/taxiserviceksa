import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/wp-content/'],
        },
        sitemap: 'https://taxiserviceksa.com/sitemap.xml',
    }
}
