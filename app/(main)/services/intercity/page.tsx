import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Clock, Star, CheckCircle2, Car, Users, Shield, MapPin, ArrowRight, Navigation, Luggage, FileCheck, Briefcase, Baby, RefreshCw, CalendarDays } from 'lucide-react';
import RelatedServices from '@/components/seo/RelatedServices';
import TopicCluster from '@/components/seo/TopicCluster';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import AuthorCard from '@/components/AuthorCard';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Private Intercity Taxi & Chauffeur Service in Saudi Arabia | Taxi Service KSA',
    description: 'Private intercity transfers between Jeddah, Makkah, Madinah, Riyadh, Dammam, Taif and AlUla. Door-to-door pickup, fixed fares, sedan to van vehicle options.',
    keywords: ['intercity taxi Saudi Arabia', 'private intercity transfer Saudi Arabia', 'city to city taxi Saudi Arabia', 'long distance taxi Saudi Arabia', 'Jeddah to Riyadh private car'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/intercity/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/intercity/',
            'ar': 'https://taxiserviceksa.com/ar/services/intercity/',
            'ur': 'https://taxiserviceksa.com/ur/services/intercity/',
            'x-default': 'https://taxiserviceksa.com/services/intercity/',
        },
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        url: 'https://taxiserviceksa.com/services/intercity/',
    },
};

const popularRoutes = [
    { name: 'Jeddah ↔ Makkah', distance: '~90 km', time: '~1.5 hours', desc: 'Door-to-door from Jeddah hotels or the airport, straight to Makkah.', link: '/routes/jeddah-makkah/' },
    { name: 'Riyadh ↔ Jeddah', distance: '~950 km', time: '~9-10 hours', desc: 'Capital-to-coast, a genuine full-day drive between the two cities.', link: '/routes/riyadh-jeddah/' },
    { name: 'Makkah ↔ Madinah', distance: '~450 km', time: '~4.5 hours', desc: 'The main road between the two holy cities, with stops arranged along the way.', link: '/routes/makkah-madinah/' },
    { name: 'Jeddah ↔ Madinah', distance: '~415 km', time: '~4-4.5 hours', desc: 'Direct transfer for pilgrims and travelers heading to Madinah.', link: '/routes/jeddah-madinah/' },
    { name: 'Riyadh ↔ Dammam', distance: '~400 km', time: '~4 hours', desc: 'The main business corridor between the capital and the Eastern Province.', link: '/routes/riyadh-dammam/' },
    { name: 'Jeddah ↔ Taif', distance: '~170 km', time: '~2 hours', desc: 'Mountain-route transfer to Taif\'s cooler climate.', link: '/routes/jeddah-taif/' },
];

const includedItems = [
    'Private vehicle', 'Professional licensed driver', 'Fuel', 'Door-to-door pickup',
    'Luggage space matched to your vehicle', 'Planned rest stops, arranged on request',
    'Tolls, where the route has them', 'Flight coordination for airport pickups',
];

const notIncludedItems = [
    'Extra stops beyond what was arranged at booking', 'Overnight accommodation', 'Meals',
];

const vehicleGuide = [
    { range: '1-3 passengers, normal luggage', vehicle: 'Toyota Camry', link: '/fleet/toyota-camry/' },
    { range: '4-7 passengers, or a family', vehicle: 'GMC Yukon XL / Hyundai Staria', link: '/fleet/gmc-yukon-xl/' },
    { range: '8-11 passengers', vehicle: 'Toyota Hiace', link: '/fleet/toyota-hiace/' },
    { range: 'Larger groups', vehicle: 'Mercedes Sprinter', link: '/fleet/mercedes-sprinter/' },
];

const intercityGuides = [
    { title: 'Jeddah to Makkah Taxi Fare Guide 2026', href: '/blog/jeddah-airport-makkah-taxi-fare-2026/' },
    { title: 'Private Taxi Fares in Madinah', href: '/blog/private-taxi-services-fares-madinah/' },
    { title: 'Private Driver Price: Tabuk to NEOM', href: '/blog/private-driver-tabuk-neom-price/' },
    { title: 'How to Get from Riyadh Airport to City', href: '/blog/how-to-get-from-riyadh-airport-to-city/' },
];

const faqs = [
    {
        question: "How much does a private intercity taxi cost in Saudi Arabia?",
        answer: "Price depends on the route, vehicle, and passenger count — a short hop like Jeddah to Makkah costs much less than a long haul like Riyadh to Jeddah. WhatsApp us your route and passenger count for a fixed quote before you book."
    },
    {
        question: "How do I book an intercity transfer?",
        answer: "Send your pickup city, destination, date, and passenger count on WhatsApp or through our booking form. We confirm the vehicle and fixed price before your trip."
    },
    {
        question: "Are intercity taxi fares fixed?",
        answer: "Yes, fares are quoted before booking and clearly state any applicable tolls or extra services, so the price you agree to is the price you pay — no meter running during the trip."
    },
    {
        question: "Can I travel between Saudi cities at night?",
        answer: "Yes, night travel is available. Saudi highways are well-lit and our drivers are experienced with night driving, taking rest breaks on longer routes."
    },
    {
        question: "Can we stop for meals or prayers during the journey?",
        answer: "Yes, planned rest and prayer stops can be arranged when you book — just let us know your preference so the driver can plan the route around them."
    },
    {
        question: "How much luggage can I take?",
        answer: "A sedan holds 2-3 large suitcases, while a GMC Yukon or similar SUV holds 5-6. Tell us your luggage count when booking so we send the right vehicle."
    },
    {
        question: "Which vehicle is best for a family?",
        answer: "The GMC Yukon XL or Hyundai Staria suit most families — enough room for passengers, luggage, and a child seat if needed. See the vehicle guide above for other group sizes."
    },
    {
        question: "Do you offer one-way and return intercity transfers?",
        answer: "Yes, both are available. One-way is for a single trip to another city; return transfers cover the same route back, whether on the same day or a later date."
    },
    {
        question: "Can I book an intercity chauffeur for multiple days?",
        answer: "Yes, multi-day chauffeur hire is available for travelers who need a vehicle and driver across several days rather than a single point-to-point trip — see our Business Chauffeur service for details."
    },
    {
        question: "Do you provide airport-to-city intercity transfers?",
        answer: "Yes, we cover transfers starting or ending at any of the 8 airports we serve — see our Airport Transfers page for the full network."
    }
];

const schemas = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Intercity Taxi Service Saudi Arabia",
    "category": "Intercity Transport",
    "description": "Private intercity transfer service connecting major cities in Saudi Arabia.",
    "provider": {
        "@type": "Organization",
        "name": "Taxi Service KSA",
        "url": "https://taxiserviceksa.com"
    },
    "areaServed": "Saudi Arabia",
    "serviceType": "Intercity Transport"
};

export default function IntercityServicePage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-primary/20 text-primary font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-sm border border-primary/20">
                        Intercity Transfers
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 px-4 leading-tight">
                        Private Intercity Taxi &amp; Chauffeur Service in Saudi Arabia
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 mb-10">
                        Travel between Jeddah, Makkah, Madinah, Riyadh, Dammam and more with a private driver. Your vehicle comes to your hotel, home or office, and you choose a sedan, SUV or van based on your group size.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-12">
                        <Button asChild size="lg" className="bg-primary hover:bg-emerald-600 text-white font-black text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            <Link href="https://wa.me/966569487569?text=Hello,%20I%20want%20to%20book%20Intercity%20Transfer" target="_blank">
                                Book via WhatsApp
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl transition-all w-full sm:w-auto">
                            <Link href="#routes">
                                See Routes
                            </Link>
                        </Button>
                    </div>

                    <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-sm mb-4 max-w-4xl mx-auto text-left">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                            Quick Facts
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm">
                            <li><strong className="text-gray-900">Major Routes:</strong> Jeddah-Makkah, Riyadh-Jeddah, Makkah-Madinah, Riyadh-Dammam.</li>
                            <li><strong className="text-gray-900">Vehicles:</strong> Sedan up to Mercedes Sprinter, matched to your group.</li>
                            <li><strong className="text-gray-900">Stops:</strong> Planned rest and prayer stops arranged on request.</li>
                            <li><strong className="text-gray-900">Pricing:</strong> Fixed fare quoted before booking, no meter.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Popular Routes */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16" id="routes">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Intercity Routes</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Distances and times are estimates — actual duration varies with traffic, road conditions and stops.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {popularRoutes.map((route, idx) => (
                        <Link key={idx} href={route.link} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-primary/40 transition-all group">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-bold text-lg text-gray-900">{route.name}</h3>
                                <ArrowRight className="text-gray-400 w-5 h-5 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </div>
                            <p className="text-sm text-gray-500 mb-4">{route.desc}</p>
                            <div className="space-y-1 text-sm text-gray-600 pt-3 border-t border-gray-100">
                                <div className="flex justify-between">
                                    <span>Distance:</span>
                                    <span className="font-medium text-gray-900">{route.distance}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Est. Time:</span>
                                    <span className="font-medium text-gray-900">{route.time}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Business & Family sections */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl p-8 border border-gray-100">
                        <Briefcase className="w-8 h-8 text-emerald-600 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Business Intercity Travel</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Private city-to-city transportation for executives traveling between Riyadh, Dammam, Jeddah and other business destinations, without airport check-in and security.
                        </p>
                        <Link href="/services/business/" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-2">Business Chauffeur Service <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                    <div className="bg-white rounded-2xl p-8 border border-gray-100">
                        <Baby className="w-8 h-8 text-emerald-600 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Intercity Travel for Families</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            A GMC Yukon or Hyundai Staria gives room for luggage and a child seat on request. Rest stops can be planned around the journey, and pickup is door-to-door from your hotel or home.
                        </p>
                    </div>
                </div>
            </section>

            {/* Private Car vs Train vs Bus */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Private Car vs Train vs Bus</h2>
                        <p className="text-gray-600">Each option suits a different kind of trip.</p>
                    </div>
                    <div className="overflow-x-auto bg-gray-50 rounded-2xl border border-gray-100">
                        <table className="min-w-full text-left text-sm">
                            <thead className="border-b border-gray-200">
                                <tr>
                                    <th className="py-3 px-4 font-bold"></th>
                                    <th className="py-3 px-4 font-bold text-center">Private Car</th>
                                    <th className="py-3 px-4 font-bold text-center">Train</th>
                                    <th className="py-3 px-4 font-bold text-center">Bus</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[
                                    ['Hotel pickup', '✓', '✕', '✕'],
                                    ['Door-to-door', '✓', '✕', '✕'],
                                    ['Flexible departure time', '✓', '✕', '✕'],
                                    ['Private vehicle', '✓', '✕', '✕'],
                                    ['Runs on Haramain rail route only', 'Anywhere', '✓', 'Fixed stations'],
                                    ['Best for', 'Families, groups, flexibility', 'Jeddah-Makkah-Madinah corridor', 'Budget travel'],
                                ].map((row, i) => (
                                    <tr key={i}>
                                        <td className="py-3 px-4 font-bold text-gray-900">{row[0]}</td>
                                        <td className="py-3 px-4 text-center text-gray-700">{row[1]}</td>
                                        <td className="py-3 px-4 text-center text-gray-700">{row[2]}</td>
                                        <td className="py-3 px-4 text-center text-gray-700">{row[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">The Haramain High-Speed Railway connects Jeddah, Makkah, and Madinah on a fixed schedule — a private car covers routes the rail line doesn't, and picks you up directly from your door.</p>
                </div>
            </section>

            {/* What's included */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included in an Intercity Transfer?</h2>
                        <div className="space-y-2">
                            {includedItems.map((item) => (
                                <div key={item} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span className="text-sm text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Not Included</h2>
                        <div className="space-y-2">
                            {notIncludedItems.map((item) => (
                                <div key={item} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100">
                                    <div className="w-4 h-4 rounded-full border-2 border-gray-300 shrink-0" />
                                    <span className="text-sm text-gray-500">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-400 mt-4">Extra stops or services can usually be arranged — just ask when booking.</p>
                    </div>
                </div>
            </section>

            {/* One-way / Return / Multi-day */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">One-Way, Return, or Multi-Day</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                            <ArrowRight className="w-6 h-6 text-emerald-600 mb-3" />
                            <h3 className="font-bold text-gray-900 mb-2">One-Way Transfers</h3>
                            <p className="text-gray-500 text-sm">For passengers travelling to another city without returning with the same driver.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                            <RefreshCw className="w-6 h-6 text-emerald-600 mb-3" />
                            <h3 className="font-bold text-gray-900 mb-2">Return Transfers</h3>
                            <p className="text-gray-500 text-sm">For travelers who need the same route in both directions, on the same day or a later date.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                            <CalendarDays className="w-6 h-6 text-emerald-600 mb-3" />
                            <h3 className="font-bold text-gray-900 mb-2">Multi-Day Chauffeur</h3>
                            <p className="text-gray-500 text-sm mb-3">For travelers who need a vehicle and driver across multiple days.</p>
                            <Link href="/services/business/" className="text-primary font-bold text-xs hover:underline">See Business Chauffeur →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicle guide */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Which Vehicle Should I Book?</h2>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100">
                        {vehicleGuide.map((v) => (
                            <Link key={v.vehicle} href={v.link} className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors group">
                                <div>
                                    <p className="text-sm text-gray-500">{v.range}</p>
                                    <p className="font-bold text-gray-900">{v.vehicle}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-6">
                        <Link href="/fleet/" className="text-primary font-bold hover:underline">Explore Entire Fleet →</Link>
                    </div>
                </div>
            </section>

            {/* FAQ — single, consolidated section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="space-y-4 max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>

            {/* Real reviews */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Traveler Reviews</h2>
                    </div>
                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="Intercity" />
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <ReviewForm locationName="Intercity" />
                    </div>
                </div>
            </section>

            {/* Lower-priority Q&A */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-6">Questions About Intercity Travel?</h3>
                    <div className="space-y-8">
                        <QuestionsDisplay location="Intercity" />
                    </div>
                    <div className="max-w-2xl mx-auto mt-8">
                        <QuestionForm locationName="Intercity" />
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Airport Transfers',
                        description: 'Transfers from all 8 Saudi airports to your destination city.',
                        href: '/services/airport-transfers',
                        icon: Car
                    },
                    {
                        name: 'Umrah Transport',
                        description: 'Specialized intercity transport for Umrah pilgrims between Makkah and Madinah.',
                        href: '/services/umrah-transport',
                        icon: Star
                    },
                    {
                        name: 'Business Chauffeur',
                        description: 'Hourly and full-day chauffeur for executives and business travel.',
                        href: '/services/business',
                        icon: Briefcase
                    },
                ]}
                title="Related Transport Services"
                description=""
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <TopicCluster
                    mainTopic="Popular Saudi Intercity Routes"
                    clusters={[
                        {
                            category: "Major Routes",
                            relevance: "Primary",
                            items: [
                                { label: "Jeddah to Makkah", url: "/routes/jeddah-makkah" },
                                { label: "Riyadh to Jeddah", url: "/routes/riyadh-jeddah" },
                                { label: "Makkah to Madinah", url: "/routes/makkah-madinah" },
                                { label: "Jeddah to Madinah", url: "/routes/jeddah-madinah" },
                                { label: "Riyadh to Dammam", url: "/routes/riyadh-dammam" },
                            ]
                        },
                        {
                            category: "Fares & Route Guides",
                            relevance: "Secondary",
                            items: intercityGuides.map(g => ({ label: g.title, url: g.href }))
                        }
                    ]}
                />

                {/* Author Section */}
                <div className="max-w-4xl mx-auto border-t border-gray-100 pt-16 mb-20">
                    <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-emerald-50" />
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="max-w-4xl mx-auto pb-20 px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-center text-white">
                    <h2 className="text-3xl font-black mb-4">Book Your Intercity Transfer</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Send your route, date, and passenger count for a fixed-rate quote.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            <Link href="https://wa.me/966569487569?text=Hello,%20I%20want%20to%20book%20Intercity%20Transfer" target="_blank">
                                WhatsApp Booking
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            <a href="mailto:taxiserviceksa9988@gmail.com">
                                Email for Quote
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
