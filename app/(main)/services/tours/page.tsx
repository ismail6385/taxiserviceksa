
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button'; // Assuming Button is available
import { MapPin, Camera, Sun, Clock, Users, Star, Car, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import TrendingTravelNote from '@/components/seo/TrendingTravelNote';
import QuestionGrouper from '@/components/seo/QuestionGrouper';
import TravelConsensus from '@/components/seo/TravelConsensus'; // Reusing components
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedServices from '@/components/seo/RelatedServices'; // Reusing components
import ReviewsDisplay from '@/components/ReviewsDisplay'; // Reusing
import QuestionsDisplay from '@/components/QuestionsDisplay'; // Reusing
import ReviewForm from '@/components/seo/ReviewForm'; // Reusing
import QuestionForm from '@/components/seo/QuestionForm'; // Reusing
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight } from 'lucide-react';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Private Car, Taxi and Chauffeur Service for Combination Tours & Multi-Stop Itineraries | Taxi Service KSA',
    description: 'Combine multiple Saudi Arabia sights in one private hire — Jeddah Al-Balad + Corniche, Taif city + cable car, or a custom multi-city day. Not sure which tour fits you? Compare all our tour pages here.',
    keywords: ['Saudi Arabia multi-stop tour', 'combination day trip Saudi Arabia', 'custom tour itinerary KSA', 'Taif Jeddah combined tour', 'private tour driver KSA'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/tours/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/tours/',
            'ar': 'https://taxiserviceksa.com/ar/services/tours/',
            'ur': 'https://taxiserviceksa.com/ur/services/tours/',
            'x-default': 'https://taxiserviceksa.com/services/tours/',
        },
    },
};

export default function ToursPage() {
    const popularTours = [
        {
            name: 'Madinah Ziyarat',
            duration: '3-4 Hours',
            spots: ['Masjid Quba', 'Mount Uhud', 'Seven Mosques', 'Qiblatain'],
            price: 'WhatsApp Booking',
            image: '/madinah-prophets-mosque.webp', // Using existing asset
            link: '/services/madinah-ziyarat'
        },
        {
            name: 'Makkah Ziyarat',
            duration: '3-4 Hours',
            spots: ['Jabal Al-Nour', 'Jabal Thawr', 'Mina/Arafat', 'Jannat al-Mualla'],
            price: 'WhatsApp Booking',
            image: '/locations/makkah.webp', // Placeholder path, falling back if not exists is handled in Hero usually, here in card just img tag
            link: '/locations/makkah-ziyarat'
        },
        {
            name: 'AlUla Heritage Tour',
            duration: 'Full Day',
            spots: ['Hegra (Madain Saleh)', 'Elephant Rock', 'Old Town', 'Dadan'],
            price: 'WhatsApp Booking',
            image: '/alula-hegra.webp', // User provided link content
            link: '/locations/alula'
        },
        {
            name: 'Taif City Tour',
            duration: '4-6 Hours',
            spots: ['Shubra Palace', 'Al Rudaf Park', 'Taif Rose Factory', 'Al Hada Mountain'],
            price: 'WhatsApp Booking',
            image: '/locations/taif.webp', // Placeholder
            link: '/locations/taif'
        },
        {
            name: 'Jeddah Historical Tour',
            duration: '4 Hours',
            spots: ['Al-Balad (Old Jeddah)', 'Corniche', 'King Fahd Fountain', 'Floating Mosque'],
            price: 'WhatsApp Booking',
            image: '/jeddah-airport.webp', // Using existing asset
            link: '/locations/jeddah'
        }
    ];

    const faqs = [
        {
            question: 'Do the drivers speak English?',
            answer: 'Yes — our tour drivers are selected for their language skills and ability to communicate basic historical information about the sites. For specialized historical lectures, we recommend hiring a licensed tour guide, but our drivers provide excellent logistical and basic historical support.',
        },
        {
            question: 'Are entry tickets to sites included?',
            answer: 'No — our prices cover the private vehicle, fuel, and driver only. Entry tickets to gated museums or AlUla sites must be purchased separately (e.g. via the Experience AlUla app). Mosques and open historical sites are free.',
        },
        {
            question: 'Can you build a custom multi-stop itinerary?',
            answer: 'Yes — this is what this page is for. Tell us which sites you want to combine (across cities or over several days) via WhatsApp, and we\'ll build a private itinerary with one driver for the whole trip.',
        },
        {
            question: 'How is this different from booking Heritage Tours or Tourism Transport directly?',
            answer: 'Those pages are built for one specific destination — AlUla heritage sites, or general city/desert sightseeing. This page is for combining multiple stops (possibly across more than one of those categories) into a single custom-planned trip.',
        },
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Saudi Arabia Combination Tours & Custom Itineraries",

        "description": "Private multi-stop and combination day trips across Saudi Arabia — combining sights across cities into one custom-planned itinerary.",
        "areaServed": "Saudi Arabia",
        "serviceType": "TourOperator"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="tour-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={['/hero-slide-2.webp', '/alula-hegra.webp']}
                h1Text="Private Car, Taxi and Chauffeur Service for Combination Tours & Multi-Stop Itineraries"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Build Your Own Day
                    </span>
                }
                subtitle="Combine Multiple Sights in One Private Hire"
                location="KSA Historic Sites"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Tours"
                        description="Experience the deep history of Arabia with knowledgeable private drivers. From the sacred paths of the Prophets to ancient Nabatean tombs."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Tour Routes', value: '50+', icon: MapPin },
                            { label: 'Happy Tourists', value: '10k+', icon: DefaultUserIcon },
                            { label: 'Local Experts', value: '100%', icon: Star }
                        ]}
                    />
                </div>
            </Hero>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    topic="Taif Rose Season"
                    status="Seasonal Update"

                    lastUpdated="Spring 2026"
                    content="Experience the blooming of the famous Taif Roses in spring (March-April). Our Taif City Tour includes visits to traditional rose water distilleries during this fragrant season."
                    tags={["TaifRoses", "Nature", "Seasonal"]}
                    linkText="WhatsApp Booking for Taif Tour"
                />
            </div>

            {/* Combination Itineraries — the genuine differentiator for this page */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Combination Day Trips</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Want more than one stop in a single hire? These combine sights across our other tour pages into one day.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Jeddah Al-Balad + Corniche', duration: 'Half Day', desc: 'Historic Old Jeddah in the morning, then the waterfront Corniche and King Fahd Fountain in the afternoon — one driver, one booking.' },
                            { name: 'Taif City + Cable Car', duration: 'Full Day', desc: 'Shubra Palace and the Rose Factory, then a ride up the Al Hada cable car — see our Cable Car page for the ride itself.' },
                            { name: 'Custom Multi-City Itinerary', duration: 'Your Schedule', desc: "Want to combine sites across two or more of our tour pages — say, AlUla plus Madinah Ziyarat over a few days? Tell us your plan on WhatsApp and we'll build it." },
                        ].map((combo, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{combo.name}</h3>
                                <div className="flex items-center gap-1 text-sm text-emerald-600 font-semibold mb-4"><Clock className="w-4 h-4" /> {combo.duration}</div>
                                <p className="text-gray-600 text-sm leading-relaxed">{combo.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tour Finder — which single-destination page fits you */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Not Sure Which Tour Fits You?</h2>
                        <p className="text-gray-600">If you know exactly what you want, these dedicated pages go deeper than a combo day allows.</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100 overflow-hidden">
                        {[
                            { want: 'AlUla / Hegra heritage sites specifically', go: 'Heritage Tours', href: '/services/heritage-tours/' },
                            { want: 'General city, desert, or shopping sightseeing', go: 'Tourism Transport', href: '/services/tourism-transport/' },
                            { want: 'Madinah pilgrimage sites — Quba, Uhud, Seven Mosques', go: 'Madinah Ziyarat', href: '/services/madinah-ziyarat/' },
                        ].map((row, i) => (
                            <Link key={i} href={row.href} className="flex items-center justify-between gap-4 p-5 hover:bg-gray-50 transition-colors group">
                                <span className="text-gray-700 text-sm">{row.want}</span>
                                <span className="flex items-center gap-1 text-emerald-700 font-bold text-sm whitespace-nowrap">
                                    {row.go} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Tours Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Or Book a Single-Site Tour</h2>
                    <p className="text-center text-gray-600 mb-12">Curated experiences for spiritual and cultural enrichment</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {popularTours.map((tour, idx) => (
                            <Link href={tour.link} key={idx} className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                                <div className="h-48 bg-gray-200 relative">
                                    {/* In a real scenario, use actual Next/Image here with proper sources. 
                                        Since I am assuming paths, I'll use a placeholder div or text if image fails to load visually but code structure is there.
                                     */}
                                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                                        {/* Placeholder for Image */}
                                        <Camera className="w-12 h-12 opacity-20" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{tour.name}</h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> {tour.duration}</div>
                                        <div className="flex items-center gap-1 font-semibold text-emerald-600">{tour.price}</div>
                                    </div>
                                    <div className="space-y-1 mb-4">
                                        {tour.spots.map((spot, sIdx) => (
                                            <div key={sIdx} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                                {spot}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center text-blue-600 font-medium text-sm mt-4">
                                        View Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Semantic Guide Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        contextName="Tours"
                        points={[
                            {
                                topic: "Ziyarat: Guided vs Self-Guided",
                                commonBelief: "I can just use Google Maps.",
                                reality: "While maps work for navigation, a local driver-guide knows the best parking spots, the historical context (Seerah), and the optimal order to visit sites to avoid crowds and prayer time closures.",
                                truthRange: "Guided = Richer Experience",
                                factors: ["Context", "Efficiency", "Access"]
                            },
                            {
                                topic: "AlUla Tour Requirements",
                                commonBelief: "I can drive to Hegra myself.",
                                reality: "Access to the UNESCO site of Hegra is restricted. You generally need tickets and must use their official buses OR have a special permit. Our drivers take you to the Winter Park assembly point or handle transfers between widespread resort areas.",
                                truthRange: "Requires Planning",
                                factors: ["Permits", "Transport Rules", "Distances"]
                            }
                        ]}
                    />

                    <div className="mt-12">
                        <MicroSemanticFAQ
                            faqs={[
                                {
                                    question: "Do the drivers speak English?",
                                    shortAnswer: "Yes, English/Urdu/Arabic.",
                                    detailedAnswer: "Our tour drivers are selected for their language skills and ability to communicate historical information basic to the sites. For specialized deep historical lectures, we recommend hiring a licensed tour guide, but our drivers provide excellent logistical and basic historical support.",
                                    perspectives: [
                                        {
                                            role: "Tourist",
                                            icon: "Users",
                                            insight: "Communication is key. Being able to ask 'What is this mountain?' and get an answer makes the trip memorable."
                                        }
                                    ]
                                },
                                {
                                    question: "Are tickets to sites included?",
                                    shortAnswer: "Transport Only.",
                                    detailedAnswer: "Our prices cover the private vehicle, fuel, and driver. Entry tickets to specific gated museums or AlUla sites must be purchased separately (e.g., via Experience AlUla app). Mosques and open historical sites are free.",
                                    perspectives: [
                                        {
                                            role: "Booking Agent",
                                            icon: "Shield",
                                            insight: "We can advise you on where and how to book tickets, but we focus on the logistics of getting you there comfortably."
                                        }
                                    ]
                                },
                                {
                                    question: "Can you build a custom multi-stop itinerary?",
                                    shortAnswer: "Yes, that's this page.",
                                    detailedAnswer: "Tell us which sites you want to combine — across cities or over several days — via WhatsApp, and we'll build a private itinerary with one driver for the whole trip.",
                                    perspectives: []
                                },
                                {
                                    question: "How is this different from Heritage Tours or Tourism Transport?",
                                    shortAnswer: "Those are single-destination.",
                                    detailedAnswer: "Heritage Tours and Tourism Transport are each built for one specific destination or category. This page is for combining multiple stops, possibly across more than one of those categories, into a custom-planned trip.",
                                    perspectives: []
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* UGC */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Questons & Reviews</h2>
                    </div>
                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="Tours" />
                        <QuestionsDisplay location="Tours" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReviewForm locationName="Tours" />
                        <QuestionForm locationName="Tours" />
                    </div>
                </div>
            </section>
        </div>
    );
}

function DefaultUserIcon(props: any) {
    return <Users {...props} />
}

