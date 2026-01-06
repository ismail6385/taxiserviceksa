import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, FerrisWheel, Palmtree, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer to Jeddah Corniche | F1 Track VIP Service',
    description: 'Premium VIP private transfer and executive chauffeur service to the New Jeddah Corniche. Visit the F1 Track, Yacht Club, and Red Sea Mall with an professional driver.',
    keywords: ['Jeddah Corniche VIP transfer', 'Jeddah Waterfront premium chauffeur', 'Jeddah F1 Track VIP', 'Red Sea Mall executive transport'],
    alternates: {
        canonical: 'https://transferksa.com/locations/jeddah/corniche/',
    },
    openGraph: {
        title: 'Taxi to Jeddah Corniche (New Waterfront)',
        description: 'The #1 leisure destination in Jeddah. Reliable transfers to the F1 Circuit and Yacht Club for international visitors.',
        url: 'https://transferksa.com/locations/jeddah/corniche/',
        type: 'website',
    },
};

export default function JeddahCornichePage() {
    const images = [
        '/jeddah-airport.webp', // Ideally Jeddah Corniche / F1 Track image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const cornicheSchema = {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": "Jeddah Corniche",
        "description": "A 30km coastal resort area in Jeddah featuring recreation areas, pavilions, sculptures, and the King Fahd's Fountain.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jeddah",
            "addressRegion": "Makkah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.6169",
            "longitude": "39.1102"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="corniche-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(cornicheSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer to Jeddah Corniche"
                bookingFormTitle="Book Premium Visit"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Executive Chauffeur Service
                    </span>
                }
                subtitle="The Red Sea's Premier Lifestyle Destination"
                location="Jeddah Waterfront | F1 Circuit / Yacht Club"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Jeddah%20Airport&dropoff=Jeddah%20Corniche">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Visit
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            VIP Custom City Tour
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Leisure, Intercity, and Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm">International Hotspot</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Experience the New Jeddah
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                The Jeddah Waterfront (Corniche) is the modern face of the city. It hosts the Saudi Arabian Grand Prix (F1), the Jeddah Yacht Club, and world-class sculpture parks. It is the #1 spot for international tourists to relax after Umrah.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                It stretches over 30km. Walking the whole length is impossible. We recommend booking a driver for 3-4 hours to drop you at the sign (“Jeddah Sign”), wait while you explore the Floating Mosque, and then take you to dinner at the Yacht Club.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <FerrisWheel className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">F1 Circuit</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Palmtree className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Floating Mosque</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Yacht Club</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Star className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Red Sea Mall</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tourist Favorites</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Jeddah Yacht Club</h4>
                                        <p className="text-sm text-gray-500">Luxury dining and marina views. Requires drop-off at the gate.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Al Rahma (Floating) Mosque</h4>
                                        <p className="text-sm text-gray-500">Iconic mosque built on the sea. A must for photos.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Jeddah Sign (X, Y, Z)</h4>
                                        <p className="text-sm text-gray-500">The famous sculpture. Best visited at sunset.</p>
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
                                commonBelief: "We can walk everywhere.",
                                reality: "The Corniche is HUGE (30km). You cannot walk from the F1 track to the Floating Mosque. You need a car to hop between zones.",
                                truthRange: "Too Long",
                                factors: ["Heat", "Distance"]
                            },
                            {
                                topic: "Ride Apps",
                                commonBelief: "Uber is easy.",
                                reality: "On weekends, traffic is gridlocked. Ubers cancel or take 30 mins to arrive. A pre-booked driver stays with you.",
                                truthRange: "Unreliable",
                                factors: ["Gridlock", "Cancellations"]
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
                        question: "How far is the Corniche from the Airport?",
                        shortAnswer: "20-25 mins",
                        detailedAnswer: "The New Corniche is very close to KAIA Airport, typically a 20-25 minute drive depending on traffic.",
                        perspectives: []
                    },
                    {
                        question: "Can you wait while we visit the Floating Mosque?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Absolutely. We recommend our 'Hourly Booking' service so the driver waits for you while you take photos and pray.",
                        perspectives: []
                    },
                    {
                        question: "Is it safe for families at night?",
                        shortAnswer: "Very Safe",
                        detailedAnswer: "Yes, the Corniche is extremely popular and well-lit until late at night. It is the center of Jeddah's nightlife.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
