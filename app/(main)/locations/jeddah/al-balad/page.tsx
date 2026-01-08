import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Building2, ArrowRight, ShoppingBag, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer to Al-Balad | Historic Jeddah UNESCO Tour',
    description: 'Premium VIP private transfer and executive chauffeur service to Historic Jeddah (Al-Balad). UNESCO World Heritage site tours with professional heritage-trained drivers.',
    keywords: ['Al-Balad VIP transfer', 'Historic Jeddah executive chauffeur', 'Jeddah Old Town premium transport', 'UNESCO Jeddah tour'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/jeddah/al-balad/',
    },
    openGraph: {
        title: 'VIP Private Transfer to Historic Jeddah (Al-Balad)',
        description: 'Explore the UNESCO heritage site of Al-Balad in comfort. Premium VIP private transfer and elite chauffeur service for historic tours.',
        url: 'https://taxiserviceksa.com/locations/jeddah/al-balad/',
        type: 'website',
    },
};

export default function AlBaladPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally an image of Roshan balconies or Old Jeddah
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const alBaladSchema = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Al-Balad (Historic Jeddah)",
        "description": "UNESCO World Heritage site featuring traditional coral stone buildings and roshan balconies.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jeddah",
            "addressRegion": "Makkah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.4858",
            "longitude": "39.1861"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="albalad-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(alBaladSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer to Al-Balad"
                bookingFormTitle="Book Heritage Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        UNESCO Heritage VIP Chauffeur
                    </span>
                }
                subtitle="Premium Access to the Heart of Old Jeddah"
                location="Historic Jeddah / Al-Balad"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Jeddah%20My%20Hotel&dropoff=Al-Balad">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Visit
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            VIP Daily Rental
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Heritage Tours, Intercity, and Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-wider text-sm">Culture & History</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                The Charm of Old Jeddah
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Al-Balad is the historic center of Jeddah, famous for its ancient coral stone buildings and intricate wooden lattice windows (Roshan). It is a UNESCO World Heritage site and a bustling marketplace.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Parking in Al-Balad is notoriously difficult. Our VIP chauffeur service is the most seamless way to visit—we drop you right at the historic gates (Baab Makkah or Baab Jadid) so you can explore on foot without parking stress.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <MapPin className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Gate Drop-off</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Evening Tours</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <ShoppingBag className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Shopping Wait Time</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Pickup Assistance</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Must-Visit Spots</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Naseef House</h4>
                                        <p className="text-sm text-gray-500">The most famous historic house, now a museum/cultural center.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Souq Al Alawi</h4>
                                        <p className="text-sm text-gray-500">The oldest market in Jeddah, selling spices, perfumes, and gold.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Baab Makkah</h4>
                                        <p className="text-sm text-gray-500">The ancient gate facing Makkah, a popular photo spot.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        points={[
                            {
                                topic: "Walking",
                                commonBelief: "We can drive inside.",
                                reality: "No, the streets are very narrow and mostly pedestrian-only. We drop you at the entrance, and you must walk.",
                                truthRange: "Mainly Walking",
                                factors: ["Narrow Alleys", "Pedestrian Zones"]
                            },
                            {
                                topic: "Best Time",
                                commonBelief: "Morning is best.",
                                reality: "It comes alive in the evening (after Maghrib prayer). Shops are open late, and the lighting is beautiful.",
                                truthRange: "Evening is Best",
                                factors: ["Heat", "Market Hours"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Jeddah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is Al-Balad from the Corniche?",
                        shortAnswer: "15-20 mins",
                        detailedAnswer: "It's a short 15-20 minute drive from the Corniche area, but traffic can be heavy in the evenings.",
                        perspectives: []
                    },
                    {
                        question: "Is there parking in Al-Balad?",
                        shortAnswer: "Very Difficult",
                        detailedAnswer: "Parking is extremely limited and congested. Taking a taxi is strongly recommended to avoid the headache of finding a spot.",
                        perspectives: []
                    },
                    {
                        question: "Are shops open on Friday?",
                        shortAnswer: "Friday Evening Only",
                        detailedAnswer: "On Fridays, most shops in the Souq open only after Asr or Maghrib prayer. Weekday evenings are fully open.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
