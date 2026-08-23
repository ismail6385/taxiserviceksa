import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Route, Clock, Map as MapIcon, FileText } from 'lucide-react';
import JsonLdBreadcrumb from '@/components/seo/JsonLdBreadcrumb';
import { DISTANCE_HUB_CATEGORIES, getDistanceRoute } from '@/data/distanceRoutes';

export const metadata: Metadata = {
    title: 'Saudi Arabia & GCC Driving Distances by Road | Taxi Service KSA',
    description: 'Road distance, driving time, route and border information between GCC cities and major Saudi destinations like Makkah and Madinah.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/',
    },
    openGraph: {
        title: 'Saudi Arabia & GCC Driving Distances by Road',
        description: 'Road distance, driving time, route and border information between GCC cities and major Saudi destinations like Makkah and Madinah.',
        url: 'https://taxiserviceksa.com/distance/',
        siteName: 'Taxi Service KSA',
        type: 'website',
    },
};

const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Saudi Arabia & GCC Driving Distances by Road',
    description: 'Road distance, driving time, route and border information between GCC cities and major Saudi destinations.',
    url: 'https://taxiserviceksa.com/distance/',
    isPartOf: {
        '@type': 'WebSite',
        name: 'Taxi Service KSA',
        url: 'https://taxiserviceksa.com',
    },
};

export default function DistanceHubPage() {
    const populatedCategories = DISTANCE_HUB_CATEGORIES.filter((c) => c.routeSlugs.length > 0);
    const upcomingCategories = DISTANCE_HUB_CATEGORIES.filter((c) => c.routeSlugs.length === 0);

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdBreadcrumb
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Distance', item: '/distance' },
                ]}
            />
            <script
                id="distance-hub-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />

            {/* Header */}
            <section className="bg-gray-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Route Information</span>
                    <h1 className="text-3xl sm:text-5xl font-black mt-4 mb-6 leading-tight">
                        Saudi Arabia &amp; GCC Driving Distances by Road
                    </h1>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                        A growing library of route guides covering estimated road distance, driving time, route information, maps and border details for journeys between GCC cities and major Saudi destinations — starting with Makkah and Madinah.
                    </p>
                </div>
            </section>

            {/* What you'll find */}
            <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                    {[
                        { icon: Route, label: 'Estimated Road Distance' },
                        { icon: Clock, label: 'Estimated Driving Time' },
                        { icon: MapIcon, label: 'Route & Map' },
                        { icon: FileText, label: 'Border Information' },
                    ].map((item) => (
                        <div key={item.label} className="flex flex-col items-center text-center gap-3 p-4">
                            <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-xs font-bold text-gray-700 leading-snug">{item.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Populated categories */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto space-y-14">
                    {populatedCategories.map((category) => (
                        <div key={category.id}>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{category.title}</h2>
                            <p className="text-gray-500 mb-6">{category.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {category.routeSlugs.map((slug) => {
                                    const route = getDistanceRoute(slug);
                                    if (!route) return null;
                                    return (
                                        <Link
                                            key={slug}
                                            href={`/distance/${slug}/`}
                                            className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all"
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-xs font-bold uppercase tracking-widest text-primary">{route.origin} → {route.destination}</span>
                                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                            </div>
                                            <h3 className="font-black text-gray-900 text-lg mb-2">{route.h1}</h3>
                                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                                                <span><strong className="text-gray-900">{route.distanceHeadline}</strong> road distance</span>
                                                <span><strong className="text-gray-900">{route.drivingTimeHeadline}</strong> driving</span>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Upcoming categories — described, not linked, since no pages exist yet */}
            {upcomingCategories.length > 0 && (
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">More Routes Coming</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            We're expanding this section to cover {upcomingCategories.map((c) => c.title.toLowerCase()).join(', ')}. Check back soon, or contact us directly if you need road-distance information for a specific route today.
                        </p>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                    <div>
                        <h3 className="text-2xl font-black mb-2">Need a Private Taxi for Your Route?</h3>
                        <p className="text-gray-400">Browse our cross-border and intercity taxi routes, or send us your journey for a fixed quote.</p>
                    </div>
                    <Link href="/routes/" className="shrink-0">
                        <span className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-bold px-6 py-3 rounded-2xl transition-colors">
                            View Taxi Routes <ArrowRight className="w-4 h-4" />
                        </span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
