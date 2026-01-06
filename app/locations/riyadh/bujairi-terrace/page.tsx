import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Utensils, History, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer to Bujairi Terrace Diriyah | Premium Dining',
    description: 'Premium VIP private transfer and executive chauffeur service for Al Bujairi Terrace. Arrive in style for fine dining at Hakkasan, Angelina, and more.',
    keywords: ['Bujairi Terrace VIP transfer', 'Diriyah premium chauffeur', 'Hakkasan Riyadh executive car', 'Bujairi Terrace luxury transport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/riyadh/bujairi-terrace/',
    },
    openGraph: {
        title: 'VIP Private Transfer to Al Bujairi Terrace (Diriyah)',
        description: 'Going for fine dining in Diriyah? Premium VIP private transfers and professional chauffeur service to Bujairi Terrace. Elite arrival for elite destinations.',
        url: 'https://taxiserviceksa.com/locations/riyadh/bujairi-terrace/',
        type: 'website',
    },
};

export default function BujairiTerracePage() {
    const images = [
        '/riyadh-discovery-map.png', // Ideally Bujairi Terrace / Diriyah At-Turaif image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const bujairiSchema = {
        "@context": "https://schema.org",
        "@type": "FoodEstablishment",
        "name": "Bujairi Terrace",
        "description": "A premium dining destination in Diriyah overlooking the UNESCO World Heritage site of At-Turaif.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Diriyah",
            "addressRegion": "Riyadh",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.7333",
            "longitude": "46.5750"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="bujairi-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(bujairiSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer to Al Bujairi Terrace"
                bookingFormTitle="Request VIP Pickup"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Elite Dining Chauffeur
                    </span>
                }
                subtitle="VIP Drop-off at Hakkasan, Angelina & Tatel"
                location="Diriyah Gate | Riyadh VIP Transport"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Riyadh%20Hotel&dropoff=Bujairi%20Terrace">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Events & Corporate
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Intercity, Airport, and Full-Day transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-amber-900 font-bold uppercase tracking-wider text-sm">Culinary Excellence</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Riyadh's Premier Dining Hub
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Al Bujairi Terrace is a collection of world-class restaurants overlooking the historic At-Turaif district. It features Michelin-starred brands like Hakkasan, Chez Bruno, and Tatel.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Parking here is premium and valet queues can be long. Arriving in a chauffeur-driven black car matches the elegance of the evening. We ensure a smooth drop-off right at the reception.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Utensils className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Fine Dining</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <History className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">At-Turaif Views</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">VIP Drop-off</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Star className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Top Brands</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Restaurants</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Hakkasan</h4>
                                        <p className="text-sm text-gray-500">World-famous Cantonese fine dining. Smart chic dress code.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Angelina Paris</h4>
                                        <p className="text-sm text-gray-500">The iconic tearoom and patisserie. Famous for hot chocolate.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Takya</h4>
                                        <p className="text-sm text-gray-500">Modern Saudi cuisine. A must-try for international visitors.</p>
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
                                topic: "Getting Home",
                                commonBelief: "Easy to get a taxi.",
                                reality: "At 11 PM on weekends, finding a ride OUT of Diriyah is very hard. Demand surges. A pre-booked return driver is essential.",
                                truthRange: "High Surge Pricing",
                                factors: ["11 PM Rush", "Surge Pricing"]
                            },
                            {
                                topic: "Dress Code",
                                commonBelief: "Casual is fine.",
                                reality: "Bujairi is upscale. Smart casual or formal is expected. Arriving in a clean, premium car sets the tone.",
                                truthRange: "Smart Casual",
                                factors: ["Luxury Vibe", "Strict Entry"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Riyadh" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is Bujairi from Riyadh center?",
                        shortAnswer: "20-25 mins",
                        detailedAnswer: "It is located in Diriyah, about 20-25 minutes from the main Olaya district and King Abdullah Financial District (KAFD).",
                        perspectives: []
                    },
                    {
                        question: "Do I need a ticket to enter?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, access to Bujairi Terrace usually requires a 'Diriyah Pass' or a dining reservation. Please check the official Diriyah website.",
                        perspectives: []
                    },
                    {
                        question: "Can you wait for us while we dine?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we offer premium hourly booking packages so your chauffeur waits nearby and is ready the moment you finish your meal.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
