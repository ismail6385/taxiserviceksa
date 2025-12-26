import { MetadataRoute } from 'next'
import { cities } from '@/data/cities'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://taxiserviceksa.com'

    // Core static pages
    const routes = [
        '',
        '/about',
        '/contact',
        '/booking',
        '/gallery',
        '/faq',
        '/privacy-policy',
        '/terms-conditions',
        '/fleet',
        '/locations',
        '/routes',
        '/services',
        '/guides',
        '/submit-review',
        '/ask-question',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }))

    // Location Pages
    const locationPages = Object.keys(cities).map((citySlug) => ({
        url: `${baseUrl}/locations/${citySlug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Guide Pages (High Priority!)
    const guidePages = [
        '/guides/jeddah-airport-guide',
        '/guides/makkah-umrah-guide',
        '/guides/riyadh-business-guide',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.95, // Very high priority!
    }))

    // Route Pages
    const routePages = [
        '/routes/jeddah-makkah',
        '/routes/makkah-madinah',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Service Hub Pages
    const servicePages = [
        '/services/umrah-transport',
        '/services/airport-transfers',
        '/services/corporate-travel',
        '/services/heritage-tours',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Fleet Detail Pages
    const fleetPages = [
        '/fleet/gmc-yukon',
        '/fleet/toyota-camry',
        '/fleet/hyundai-staria',
        '/fleet/toyota-hiace',
        '/fleet/toyota-coaster',
        '/fleet/hyundai-starex',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...locationPages, ...guidePages, ...routePages, ...servicePages, ...fleetPages]
}
