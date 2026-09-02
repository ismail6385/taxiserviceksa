import { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowRight, CheckCircle2, AlertTriangle, Car,
    Luggage, Sun, FileText, Droplets, Battery, Baby, ExternalLink,
} from 'lucide-react';

import JsonLdBreadcrumb from '@/components/seo/JsonLdBreadcrumb';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import DistanceStatBar from '@/components/distance/DistanceStatBar';
import DistanceRouteMap from '@/components/distance/DistanceRouteMap';
import { getDistanceRoute } from '@/data/distanceRoutes';

const route = getDistanceRoute('kuwait-to-makkah')!;
// This page always has a matching commercial route page, so this is guaranteed non-null
// (the field became optional on DistanceRoute only to support later routes that don't).
const relatedTaxiRoute = route.relatedTaxiRoute!;

export const metadata: Metadata = {
    title: route.seoTitle,
    description: route.metaDescription,
    keywords: [
        'Kuwait to Makkah distance by road',
        'Kuwait City to Makkah distance',
        'Kuwait to Makkah driving distance',
        'Kuwait to Makkah driving time',
        'Kuwait to Makkah by car',
        'Kuwait to Makkah road distance',
        'Kuwait to Makkah route',
        'Kuwait to Makkah map',
        'how far is Kuwait from Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/distance/kuwait-to-makkah/',
    },
    openGraph: {
        title: route.seoTitle,
        description: route.metaDescription,
        url: 'https://taxiserviceksa.com/distance/kuwait-to-makkah/',
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: route.seoTitle }],
    },
    twitter: {
        card: 'summary_large_image',
        title: route.seoTitle,
        description: route.metaDescription,
    },
};

// WebPage schema — deliberately NOT a Service/TaxiService type, since this is an
// informational distance/route guide, not the commercial booking page (that schema
// already lives on /routes/kuwait-makkah/).
const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: route.h1,
    description: route.metaDescription,
    url: 'https://taxiserviceksa.com/distance/kuwait-to-makkah/',
    about: {
        '@type': 'Trip',
        name: `${route.originFull} to ${route.destinationFull}`,
        itinerary: {
            '@type': 'ItemList',
            itemListElement: [
                { '@type': 'City', name: route.originFull },
                { '@type': 'City', name: route.destinationFull },
            ],
        },
    },
    isPartOf: {
        '@type': 'WebSite',
        name: 'Taxi Service KSA',
        url: 'https://taxiserviceksa.com',
    },
};

const faqItems = route.faqs.map((f) => ({
    question: f.question,
    shortAnswer: f.shortAnswer,
    detailedAnswer: f.detailedAnswer,
    perspectives: [],
}));

export default function KuwaitToMakkahDistancePage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdBreadcrumb
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Distance', item: '/distance' },
                    { name: 'Kuwait to Makkah Distance', item: '/distance/kuwait-to-makkah' },
                ]}
            />
            <script
                id="kuwait-to-makkah-distance-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />

            {/* Header — H1 + immediate quick answer, above the fold */}
            <section className="bg-gray-900 text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Route Information</span>
                    <h1 className="text-3xl sm:text-5xl font-black mt-4 mb-6 leading-tight">
                        {route.h1}
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                        Kuwait City to Makkah is {route.distanceRange} by road ({route.distanceHeadline}), with {route.drivingTimeRange} of pure driving. The route runs through Saudi Arabia&apos;s Eastern Province and on to Makkah, crossing the border at {route.borderName}.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
                        <Link href={relatedTaxiRoute.url}>
                            <span className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-2xl hover:bg-primary/90 transition-colors w-full sm:w-auto">
                                Book {relatedTaxiRoute.name}
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                        <a
                            href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20a%20quote%20for%20a%20taxi%20from%20Kuwait%20to%20Makkah."
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                        >
                            <span className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/20 text-white font-bold px-7 py-3.5 rounded-2xl hover:bg-white/20 transition-colors w-full sm:w-auto">
                                WhatsApp a Quote
                            </span>
                        </a>
                    </div>
                    <p className="text-white/40 text-xs mt-6 font-bold uppercase tracking-widest">Figures last checked: {route.lastVerified}</p>
                </div>
            </section>

            {/* Quick-answer stat bar */}
            <div className="-mt-8 sm:-mt-10 relative z-10 mb-8">
                <DistanceStatBar route={route} />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section: Road Distance */}
                <section className="py-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Kuwait to Makkah Road Distance</h2>
                    {route.routeDescription.map((p, i) => (
                        <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4">{p}</p>
                    ))}
                </section>

                {/* Section: Driving Time */}
                <section className="py-10 border-t border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Kuwait to Makkah Driving Time</h2>
                    {route.drivingTimeDescription.map((p, i) => (
                        <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4">{p}</p>
                    ))}
                </section>

                {/* Section: Map */}
                <section className="py-10 border-t border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Kuwait to Makkah Road Map</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Use the map below for a live, general reference of the driving route between Kuwait City and Makkah. For turn-by-turn navigation on your actual travel date, open the route directly in Google Maps.
                    </p>
                    <DistanceRouteMap
                        originQuery={route.mapOriginQuery}
                        destinationQuery={route.mapDestinationQuery}
                        originLabel={route.origin}
                        destinationLabel={route.destination}
                    />
                </section>

                {/* Section: Route */}
                <section className="py-10 border-t border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Kuwait to Makkah Route</h2>
                    {route.routeJourneyDescription.map((p, i) => (
                        <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4">{p}</p>
                    ))}
                </section>

                {/* Section: Border Crossing */}
                <section className="py-10 border-t border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Kuwait–Saudi Arabia Border Crossing</h2>
                    {route.borderDescription?.map((p, i) => (
                        <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4">{p}</p>
                    ))}
                    {route.relatedBorderLink && (
                        <Link
                            href={route.relatedBorderLink.url}
                            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline mt-2"
                        >
                            {route.relatedBorderLink.name} <ArrowRight className="w-4 h-4" />
                        </Link>
                    )}
                    <div className="mt-6 flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl p-5">
                        <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-900">
                            We are a transport provider, not a visa or immigration authority. Passengers are responsible for holding valid, eligible travel documents before departure — confirm your own requirements with the relevant embassy or a licensed visa service.
                        </p>
                    </div>
                </section>

                {/* Section: By Car */}
                <section className="py-10 border-t border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Kuwait to Makkah by Car</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        There are three general ways to cover this distance by car: self-driving, a private pre-booked taxi, or a chauffeur-driven transfer. Each suits a different kind of traveler.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">Self-Driving</h3>
                            <p className="text-sm text-gray-500">Full control of your schedule and stops, but a genuinely tiring 16+ hour drive to manage yourself, plus handling border formalities for your own vehicle.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">Private Taxi</h3>
                            <p className="text-sm text-gray-500">A pre-booked vehicle and driver for the full route. No fatigue, no navigation to manage, one fixed vehicle door-to-door.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">Chauffeur Transfer</h3>
                            <p className="text-sm text-gray-500">Similar to a private taxi, with an emphasis on comfort and privacy — a common choice for families and business travelers.</p>
                        </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Whichever option you choose, plan for genuine long-distance fatigue on a 1,600 km trip. Families traveling with children or elderly passengers, or anyone with significant luggage, generally find a private vehicle with a professional driver more comfortable than self-driving the entire way — you can rest, and someone else is managing the road and the border.
                    </p>
                </section>

                {/* Section: Taxi (commercial bridge) */}
                <section className="py-10 border-t border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Kuwait to Makkah Taxi</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        If you'd rather not drive the full distance yourself, a pre-booked private{' '}
                        <Link href={relatedTaxiRoute.url} className="text-primary font-semibold hover:underline">
                            Kuwait to Makkah taxi
                        </Link>{' '}
                        covers the same route with a professional driver, in a single vehicle from your Kuwait pickup point through to your Makkah drop-off point. We don't publish a generic price on this page — fares depend on vehicle type, passenger count, and current conditions, so request a quote for your exact trip.
                    </p>
                    <div className="bg-primary/5 border border-primary/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="font-black text-gray-900 text-lg mb-1">{relatedTaxiRoute.name}</h3>
                            <p className="text-sm text-gray-600">{relatedTaxiRoute.description}</p>
                        </div>
                        <Link href={relatedTaxiRoute.url} className="shrink-0">
                            <span className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors">
                                Get a Quote <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                    </div>
                </section>

                {/* Section: Journey Planning */}
                <section className="py-10 border-t border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Journey Planning</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        A few practical things to prepare for a trip of this length, whichever way you travel:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: FileText, text: 'Valid passport and correct Saudi visa/entry permission for every passenger' },
                            { icon: Droplets, text: 'Water and snacks for a long drive with limited stops' },
                            { icon: Battery, text: 'Phone charger and a power bank for the journey' },
                            { icon: Luggage, text: 'Realistic luggage planning — confirm space if traveling with a private vehicle' },
                            { icon: Sun, text: 'Planned rest breaks rather than one continuous 16+ hour drive' },
                            { icon: Baby, text: 'Extra time and comfort planning if traveling with children or elderly passengers' },
                        ].map((item) => (
                            <div key={item.text} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-gray-100">
                                <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section: Best Time to Travel */}
                <section className="py-10 border-t border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Best Time to Travel</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        There's no single "best" departure time we can guarantee will beat traffic or border queues — both vary by day and by season. What we can say generally:
                    </p>
                    <ul className="space-y-3 mb-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                            <span className="text-gray-700">Road traffic within Saudi Arabia varies by time of day and day of the week, same as any long-distance route.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                            <span className="text-gray-700">Border traffic at Khafji/Nuwaiseeb varies by day and volume, and can be busier around weekends and holidays.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                            <span className="text-gray-700">Hajj and Umrah peak seasons bring significantly more traffic on approaches to Makkah — build in extra time if traveling during these periods.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                            <span className="text-gray-700">If you have a fixed appointment, flight, or check-in time in Makkah, build in a meaningful buffer rather than cutting it close on a 16+ hour route.</span>
                        </li>
                    </ul>
                </section>
            </div>

            {/* FAQs */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-2">Frequently Asked Questions</h2>
                <MicroSemanticFAQ contextName="Kuwait to Makkah Distance" faqs={faqItems} />
            </div>

            {/* Related Distance Guides */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200 pt-16 mt-4 pb-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Related Distance Guides</h2>
                    <p className="text-gray-500 mt-2">More GCC-to-Saudi road distance guides are being added regularly</p>
                </div>
                <div className="flex justify-center">
                    <Link
                        href="/distance/"
                        className="group inline-flex items-center gap-2 bg-white hover:bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 hover:border-primary/40 hover:shadow-md transition-all"
                    >
                        <span className="font-bold text-gray-900 group-hover:text-primary transition-colors">Browse All Distance Guides</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                </div>
            </div>

            {/* Related Taxi Routes */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200 pt-16 pb-16">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Related Taxi Routes</h2>
                    <p className="text-gray-500 mt-2">Pre-booked private transfers on this corridor</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[relatedTaxiRoute, ...(route.relatedReturnTaxiRoute ? [route.relatedReturnTaxiRoute] : []), ...route.relatedTaxiRoutes].map((link) => (
                        <Link
                            key={link.url}
                            href={link.url}
                            className="group block bg-white hover:bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-primary/50 hover:shadow-md transition-all"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <Car className="w-4 h-4 text-primary" />
                                <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors">{link.name}</h3>
                            </div>
                            <p className="text-xs text-gray-500 mb-3 line-clamp-2">{link.description}</p>
                            <div className="flex items-center text-xs font-semibold text-primary">
                                View Route <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Final CTA */}
            <section className="pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                    <div>
                        <h3 className="text-2xl font-black mb-2">Ready to Book Your Transfer?</h3>
                        <p className="text-gray-400">Send your travel date and passenger count via WhatsApp for a fixed quote on the Kuwait to Makkah route.</p>
                    </div>
                    <a
                        href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20a%20quote%20for%20a%20taxi%20from%20Kuwait%20to%20Makkah."
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="shrink-0"
                    >
                        <span className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-bold px-7 py-3.5 rounded-2xl transition-colors">
                            WhatsApp Us <ExternalLink className="w-4 h-4" />
                        </span>
                    </a>
                </div>
            </section>
        </div>
    );
}
