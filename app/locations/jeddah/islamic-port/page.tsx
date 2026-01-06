import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Anchor, Ship, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer Jeddah Islamic Port | Seaport Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service from Jeddah Islamic Port to Makkah. Reliable terminal pickup for pilgrims arriving by ferry.',
    keywords: ['Jeddah Islamic Port VIP transfer', 'Jeddah seaport premium chauffeur', 'Jeddah port to Makkah VIP', 'Ferry terminal executive transport'],
    alternates: {
        canonical: 'https://transferksa.com/locations/jeddah/islamic-port/',
    },
    openGraph: {
        title: 'VIP Private Transfer Jeddah Islamic Port | Seaport Chauffeur',
        description: 'Direct VIP private transfer for sea arrivals. Premier chauffeur service from the passenger terminal to Makkah or Madinah.',
        url: 'https://transferksa.com/locations/jeddah/islamic-port/',
        type: 'website',
    },
};

export default function JeddahPortPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally Jeddah Port / Ship image
        '/makkah-kaaba.webp',
        '/hero-slide-3.webp',
    ];

    const portSchema = {
        "@context": "https://schema.org",
        "@type": "CivicStructure",
        "name": "Jeddah Islamic Port",
        "description": "The largest seaport in Saudi Arabia, handling the majority of pilgrim traffic arriving by sea.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jeddah",
            "addressRegion": "Makkah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.4858",
            "longitude": "39.1925"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="jeddah-port-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(portSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer Jeddah Islamic Port"
                bookingFormTitle="Book Premium Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Premium Seaport Chauffeur
                    </span>
                }
                subtitle="Direct to Holy Sites for Sea Arrivals"
                location="Passenger Terminal VIP Pickup"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Jeddah%20Islamic%20Port&dropoff=Makkah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Group VIP Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Seaport, Intercity, and Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-800 font-bold uppercase tracking-wider text-sm">Sea Arrival</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Reliable Pickup for Sea Pilgrims
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Jeddah Islamic Port is the primary entry point for pilgrims arriving by ferry from Egypt (Safaga) and Sudan (Suakin). The passenger terminal area can be extremely busy during Hajj and Umrah seasons.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Unlike the airport, taxi hailing apps can be unreliable inside the port complex due to security zones. Our registered drivers have the necessary permits to access the arrival terminals and pick you up seamlessly.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Anchor className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Terminal Access</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Ship className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Ferry Tracking</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Large Groups</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Direct Makkah</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Routes</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Port to Makkah (Haram)</h4>
                                        <p className="text-sm text-gray-500">1 hour drive (approx 75km). The most common route.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Port to Madinah</h4>
                                        <p className="text-sm text-gray-500">4-5 hours drive. Comfortable GMC Yukons available.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Port to Jeddah City</h4>
                                        <p className="text-sm text-gray-500">20-30 mins. VIP transfer to hotels or Red Sea Mall.</p>
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
                                topic: "Port Security",
                                commonBelief: "Any car can enter.",
                                reality: "Strictly controlled. Only authorized chauffeurs and vehicles with permits can enter the passenger loading zones.",
                                truthRange: "Permit Required",
                                factors: ["Customs", "Security"]
                            },
                            {
                                topic: "Buses",
                                commonBelief: "Buses are available.",
                                reality: "Yes, but they fill up fast and wait until full. A private VIP transfer leaves immediately when you are ready.",
                                truthRange: "Faster by VIP Transfer",
                                factors: ["No Waiting", "Privacy"]
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
                        question: "How far is Makkah from Jeddah Port?",
                        shortAnswer: "1 hour",
                        detailedAnswer: "It is approximately 75km, usually taking about 1 hour via the direct highway.",
                        perspectives: []
                    },
                    {
                        question: "Can I wear Ihram at the Port?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, there are facilities, but most ferry pilgrims wear Ihram from the departure point (e.g., Egypt) as the Miqat is crossed at sea.",
                        perspectives: []
                    },
                    {
                        question: "How much is a taxi to Makkah?",
                        shortAnswer: "SAR 200-300",
                        detailedAnswer: "Prices vary by season, but typically range between SAR 200-300 for a sedan car.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
