import fs from 'fs';
import path from 'path';

export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';
    const lastMod = new Date().toISOString();

    // Dynamically list all service directories
    const servicesDirectory = path.join(process.cwd(), 'app', '(main)', 'services');
    const services = fs.readdirSync(servicesDirectory).filter(file => {
        const filePath = path.join(servicesDirectory, file);
        return fs.statSync(filePath).isDirectory();
    });

    const serviceUrls = services.map((slug: string) => ({
        url: `/services/${slug}/`,
        priority: 0.8
    }));

    // Routes (High intent -> 0.8 priority for featured routes)
    const routeUrls = [
        'jeddah-makkah', 'makkah-madinah', 'jeddah-yanbu', 'jeddah-taif',
        'jeddah-alula', 'madinah-jeddah', 'riyadh-jeddah', 'makkah-jeddah',
        'riyadh-dammam', 'dammam-bahrain', 'alula-jeddah', 'jeddah-riyadh',
        'jeddah-train-station-taxi', 'madinah-makkah', 'madinah-to-jeddah-airport-departures',
        'madinah-train-station-taxi', 'taif-jeddah', 'yanbu-jeddah',
        'jeddah-to-dar-al-taqwa-madinah', 'jeddah-to-fairmont-makkah',
        'jeddah-to-hilton-madinah', 'jeddah-to-oberoi-madinah',
        'jeddah-to-pullman-makkah', 'jeddah-to-swissotel-makkah', 'madinah-alula', 'tabuk-alula',
        'makkah-taif', 'riyadh-makkah', 'makkah-riyadh'
    ].map((slug: string) => ({
        url: `/routes/${slug}/`,
        priority: 0.8
    }));

    // Dynamically list all fleet directories
    const fleetDirectory = path.join(process.cwd(), 'app', '(main)', 'fleet');
    const fleetSlugs = fs.readdirSync(fleetDirectory).filter(file => {
        const filePath = path.join(fleetDirectory, file);
        return fs.statSync(filePath).isDirectory();
    });

    const fleetUrls = fleetSlugs.map((slug: string) => ({
        url: `/fleet/${slug}/`,
        priority: 0.6
    }));

    // New high-value service pages (manually added for highest priority)
    const newServicePages = [
        { url: '/jeddah-airport-transfer/', priority: 0.9 },
        { url: '/riyadh-to-jeddah-private-car/', priority: 0.9 },
        { url: '/riyadh-to-dammam-taxi/', priority: 0.9 },
        { url: '/vip-chauffeur-jeddah/', priority: 0.9 },
        { url: '/private-taxi-madinah/', priority: 0.9 },
        { url: '/makkah-to-jeddah-taxi/', priority: 0.9 },
        { url: '/vip-transfer-dammam/', priority: 0.9 },
        { url: '/services/jeddah-port-taxi-transfer/', priority: 0.9 },
        { url: '/services/jeddah-corniche-hotel-taxi/', priority: 0.9 },
        { url: '/blog/complete-jeddah-guide/', priority: 0.85 },
        { url: '/blog/top-15-places-to-visit-in-jeddah/', priority: 0.85 },
        { url: '/blog/best-beaches-in-jeddah/', priority: 0.85 },
        { url: '/blog/jeddah-corniche-guide/', priority: 0.85 },
        { url: '/blog/why-you-should-visit-al-balad-in-jeddah/', priority: 0.85 },
        { url: '/blog/floating-mosque-al-rahma-mosque-travel-guide/', priority: 0.85 },
        { url: '/blog/fakieh-aquarium-jeddah-complete-guide/', priority: 0.85 },
        { url: '/blog/ihram-rules-umrah-pilgrims/', priority: 0.85 },
        { url: '/blog/tawaf-guide-hajj-umrah/', priority: 0.85 },
        { url: '/blog/sai-guide-hajj-umrah/', priority: 0.85 },
        { url: '/blog/halq-vs-taqsir-hair-cutting-umrah/', priority: 0.85 },
        { url: '/blog/common-umrah-mistakes-to-avoid/', priority: 0.85 },
        { url: '/blog/ultimate-umrah-packing-list/', priority: 0.85 },
        { url: '/blog/best-time-to-perform-umrah/', priority: 0.85 },
        { url: '/blog/ramadan-umrah-guide/', priority: 0.85 },
        { url: '/blog/womens-umrah-guide/', priority: 0.85 },
        { url: '/blog/elderly-umrah-guide-tips/', priority: 0.85 },
        { url: '/blog/zamzam-water-rules-pilgrims/', priority: 0.85 },
        { url: '/blog/masjid-al-haram-complete-guide/', priority: 0.85 },
        { url: '/blog/kaaba-history-significance/', priority: 0.85 },
        { url: '/blog/hajar-al-aswad-black-stone-guide/', priority: 0.85 },
        { url: '/blog/maqam-ibrahim-guide/', priority: 0.85 },
        { url: '/blog/zamzam-well-history-facts/', priority: 0.85 },
        { url: '/blog/safa-marwah-guide/', priority: 0.85 },
        { url: '/blog/jabal-al-noor-guide/', priority: 0.85 },
        { url: '/blog/cave-of-hira-history/', priority: 0.85 },
        { url: '/blog/jabal-thawr-guide/', priority: 0.85 },
        { url: '/blog/jannat-al-mualla-makkah-guide/', priority: 0.85 },
        { url: '/blog/abraj-al-bait-clock-tower-makkah/', priority: 0.85 },
        { url: '/blog/makkah-museum-guide/', priority: 0.85 },
        { url: '/blog/cave-of-thawr-hijra-history/', priority: 0.85 },
        { url: '/blog/birthplace-prophet-muhammad-makkah/', priority: 0.85 },
        { url: '/blog/best-ziyarat-places-makkah/', priority: 0.85 },
        { url: '/blog/religious-landmarks-makkah-guide/', priority: 0.85 },
        { url: '/blog/islamic-history-makkah/', priority: 0.85 },
        { url: '/blog/sacred-places-makkah/', priority: 0.85 },
        { url: '/blog/historical-mosques-makkah/', priority: 0.85 },
        { url: '/blog/hidden-religious-sites-makkah/', priority: 0.85 },
        { url: '/blog/complete-madinah-travel-guide/', priority: 0.85 },
        { url: '/blog/best-time-to-visit-madinah-weather/', priority: 0.85 },
        { url: '/blog/madinah-first-time-visitor-guide-tips/', priority: 0.85 },
        { url: '/blog/top-places-visit-things-do-madinah/', priority: 0.85 },
        { url: '/blog/madinah-budget-luxury-family-solo-travel/', priority: 0.85 },
        { url: '/blog/madinah-travel-itinerary-planning/', priority: 0.85 },
        { url: '/blog/madinah-hotels-budget-luxury-family/', priority: 0.85 },
        { url: '/blog/best-restaurants-cafes-street-food-madinah/', priority: 0.85 },
        { url: '/blog/shopping-guide-malls-dates-perfumes-madinah/', priority: 0.85 },
        { url: '/blog/masjid-an-nabawi-complete-guide-history/', priority: 0.85 },
        { url: '/blog/how-to-book-visit-rawdah-madinah/', priority: 0.85 },
        { url: '/blog/quba-mosque-history-visit-guide/', priority: 0.85 },
        { url: '/blog/qiblatain-mosque-seven-mosques-guide/', priority: 0.85 },
        { url: '/blog/jannat-al-baqi-madinah-cemetery-guide/', priority: 0.85 },
        { url: '/blog/mount-uhud-history-visit-guide/', priority: 0.85 },
        { url: '/blog/madinah-ziyarat-places-museums-landmarks/', priority: 0.85 },
        { url: '/blog/visiting-madinah-ramadan-hajj-season/', priority: 0.85 },
        { url: '/blog/madinah-airport-taxi-transfer-guide/', priority: 0.85 },
        { url: '/blog/private-taxi-services-fares-madinah/', priority: 0.85 },
        { url: '/blog/practical-guide-rules-customs-madinah/', priority: 0.85 },
        { url: '/blog/complete-alula-travel-guide/', priority: 0.85 },
        { url: '/blog/best-time-to-visit-alula-weather/', priority: 0.85 },
        { url: '/blog/alula-travel-tips-checklist-safety/', priority: 0.85 },
        { url: '/blog/alula-budget-luxury-family-solo-travel/', priority: 0.85 },
        { url: '/blog/alula-travel-itinerary-planning/', priority: 0.85 },
        { url: '/blog/top-places-visit-things-do-alula/', priority: 0.85 },
        { url: '/blog/hegra-madain-salih-visitor-guide/', priority: 0.85 },
        { url: '/blog/elephant-rock-alula-natural-landmarks/', priority: 0.85 },
        { url: '/blog/alula-old-town-dadan-jabal-ikmah/', priority: 0.85 },
        { url: '/blog/maraya-concert-hall-art-culture-alula/', priority: 0.85 },
        { url: '/blog/alula-oasis-heritage-trail-picnic-spots/', priority: 0.85 },
        { url: '/blog/alula-desert-adventures-safari-activities/', priority: 0.85 },
        { url: '/blog/stargazing-camping-sunset-spots-alula/', priority: 0.85 },
        { url: '/blog/alula-photography-instagram-spots/', priority: 0.85 },
        { url: '/blog/where-to-stay-alula-hotels-resorts/', priority: 0.85 },
        { url: '/blog/best-restaurants-cafes-food-alula/', priority: 0.85 },
        { url: '/blog/shopping-guide-souvenirs-markets-alula/', priority: 0.85 },
    ];

    const allUrls = [...newServicePages, ...serviceUrls, ...routeUrls, ...fleetUrls];


    // Remove duplicates if any
    const uniqueUrls = Array.from(new Set(allUrls.map(u => u.url)))
        .map(url => allUrls.find(u => u.url === url));

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${uniqueUrls.map((item: any) => `
            <url>
                <loc>${baseUrl}${item.url}</loc>
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
