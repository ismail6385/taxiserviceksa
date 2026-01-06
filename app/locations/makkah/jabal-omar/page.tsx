import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Building2, Crown, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer Jabal Omar Makkah | Premium Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service for Jabal Omar hotels. Professional airport pickups for Hilton, Conrad, and Hyatt Regency.',
    keywords: ['Jabal Omar VIP transfer', 'Makkah Hilton premium chauffeur', 'Conrad Makkah VIP', 'Hyatt Regency Makkah executive car'],
    alternates: {
        canonical: 'https://transferksa.com/locations/makkah/jabal-omar/',
    },
    openGraph: {
        title: 'VIP Taxi to Jabal Omar Hotels (Makkah)',
        description: 'Staying at the Hilton, Conrad, or Hyatt in Makkah? We provide luxury GMC transfers directly to the Jabal Omar main entrance.',
        url: 'https://transferksa.com/locations/makkah/jabal-omar/',
        type: 'website',
    },
};

export default function JabalOmarPage() {
    const images = [
        '/makkah-kaaba-night.webp', // Ideally Jabal Omar Towers image
        '/jeddah-airport.webp',
        '/hero-slide-3.webp',
    ];

    const jabalOmarSchema = {
        "@context": "https://schema.org",
        "@type": "Hotel",
        "name": "Jabal Omar Development",
        "description": "A major luxury hotel and residential complex in Makah, directly facing the Grand Mosque (Haram).",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Makkah",
            "addressRegion": "Makkah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.4190",
            "longitude": "39.8226"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="jabal-omar-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jabalOmarSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer Jabal Omar Makkah"
                bookingFormTitle="Request VIP Pickup"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Ultra-Luxury Logistics
                    </span>
                }
                subtitle="The Premier Chauffeur Service for Jabal Omar Hotels"
                location="Hilton | Conrad | Hyatt | Marriott VIP Entrance"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Jeddah%20Airport&dropoff=Jabal%20Omar%20Makkah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Corporate Booking
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Airport, Intercity, and Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-amber-800 font-bold uppercase tracking-wider text-sm">Premium Stay</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Direct Hotel Drop-Offs
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Jabal Omar is the premier address in Makkah, hosting the city's finest 5-star hotels including the Hilton Suites, Conrad, Hyatt Regency, and Marriott. It is located directly across from the King Fahd Gate.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Unlike other areas where traffic is restricted, Jabal Omar has its own dedicated underground access tunnels and lobbies. Our drivers are experts at navigating these tunnels to drop you right at your hotel's reception.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Underground Drop</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Crown className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">VIP Service</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">GMC Yukon Fleet</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Luggage Assistance</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Hotels Served</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Makkah Hilton Suites</h4>
                                        <p className="text-sm text-gray-500">The most popular choice for families. Direct views of the Haram.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Conrad Makkah</h4>
                                        <p className="text-sm text-gray-500">Luxury stay. Accessible via the dedicated bus/taxi ramp.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Hyatt Regency</h4>
                                        <p className="text-sm text-gray-500">Located slightly deeper in the complex. We know the exact entrance.</p>
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
                                topic: "Drop-off",
                                commonBelief: "Taxis can't go close.",
                                reality: "Regular taxis are stopped far away. Authorized private VIP transport can access the Jabal Omar underground lobbies directly.",
                                truthRange: "Direct Lobby Access",
                                factors: ["Authorization", "Underground"]
                            },
                            {
                                topic: "Access",
                                commonBelief: "We can walk.",
                                reality: "Jabal Omar is huge. Walking from the main street to the hotel lobby with luggage is steep and exhausting. A door-to-door VIP ride is essential.",
                                truthRange: "VIP Arrival",
                                factors: ["Hills", "Heat"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Makkah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How much is a taxi from Jeddah Airport to Jabal Omar?",
                        shortAnswer: "SAR 350-450",
                        detailedAnswer: "For a luxury GMC Yukon or Hyundai Staria, prices typically range from SAR 350 to SAR 450 depending on the season.",
                        perspectives: []
                    },
                    {
                        question: "Do you know the Hilton Suites entrance?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, our drivers are aware of the specific P1/P2/P3 underground entrances for Hilton, Conrad, and Hyatt.",
                        perspectives: []
                    },
                    {
                        question: "Can I book a return to Jeddah Airport?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Absolutely. We can pick you up from the same lobby at your designated check-out time.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
