import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Train, Luggage, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer Madinah Train Station | Premium Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service at Madinah Haramain Train Station. Fast, professional pickup to Masjid Nabawi and local hotels.',
    keywords: ['Madinah train station VIP transfer', 'Haramain railway premium chauffeur', 'Madinah station executive car', 'Madinah railway VIP pickup'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/madinah/train-station/',
    },
    openGraph: {
        title: 'Taxi from Madinah Train Station (Haramain)',
        description: 'Direct transfer from Madinah Railway Station to your hotel door. 24/7 service for arriving pilgrims.',
        url: 'https://taxiserviceksa.com/locations/madinah/train-station/',
        type: 'website',
    },
};

export default function MadinahTrainStationPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally Madinah Train Station image
        '/madinah-prophets-mosque.webp',
        '/hero-slide-3.webp',
    ];

    const stationSchema = {
        "@context": "https://schema.org",
        "@type": "TrainStation",
        "name": "Madinah Haramain High Speed Railway Station",
        "description": "The terminus station of the Haramain High Speed Railway in Madinah.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madinah",
            "addressRegion": "Madinah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.4686",
            "longitude": "39.6142"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="madinah-station-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(stationSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer Madinah Train Station"
                bookingFormTitle="Request Station Pickup"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Premium Railway Chauffeur
                    </span>
                }
                subtitle="Exclusive VIP Arrival Service for Haramain Guests"
                location="Luxury Doorstep Service to Madinah Hotels"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Madinah%20Train%20Station&dropoff=Masjid%20Nabawi">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Full VIP Ziyarat Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Intercity and Railway transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-700 font-bold uppercase tracking-wider text-sm">Welcome to Madinah</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Fast Transfer to Your Hotel
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                The Madinah Haramain Station is located about 9km east of the Prophet's Mosque (Masjid Nabawi). It is a beautiful, modern terminal, but finding a taxi for a large family with luggage can be stressful upon arrival.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We offer pre-booked station pickups. Our driver will greet you at the arrival hall exit and assist with your luggage, ensuring a smooth 15-minute drive to your hotel in the Central Area (Markazia).
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Train className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Arrival Pickup</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Luggage className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Large Trunk Space</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Family Vans</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Fixed Rates</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Estimated Travel Times</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Masjid Nabawi (Central)</h4>
                                        <p className="text-sm text-gray-500">10-15 mins via King Abdulaziz Rd.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Quba Mosque</h4>
                                        <p className="text-sm text-gray-500">15-20 mins. Direct highway access.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Madinah Airport</h4>
                                        <p className="text-sm text-gray-500">20 mins. If you are transferring to a flight.</p>
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
                                topic: "Bus Service",
                                commonBelief: "SAPTCO is best.",
                                reality: "SAPTCO buses are cheap but drop you at designated stops. A private VIP transfer provides door-to-door service with luggage assistance.",
                                truthRange: "Not Door-to-Door",
                                factors: ["Luggage", "Walking"]
                            },
                            {
                                topic: "Distance",
                                commonBelief: "Next to Haram.",
                                reality: "The station is NOT within walking distance of the Haram (9km). You need a pre-booked VIP transfer for a smooth arrival.",
                                truthRange: "9km Away",
                                factors: ["Highway Drive", "New Station"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Madinah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How much is a taxi from Madinah station to Haram?",
                        shortAnswer: "SAR 50-80",
                        detailedAnswer: "Typical rates are around SAR 50-80 depending on the type of car and exact hotel location.",
                        perspectives: []
                    },
                    {
                        question: "Does the train go to Madinah Airport?",
                        shortAnswer: "No",
                        detailedAnswer: "No, the train station is in the city. You need a taxi to get to Prince Mohammad Bin Abdulaziz International Airport (MED).",
                        perspectives: []
                    },
                    {
                        question: "Can we visit Ziyarat places on the way?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we can arrange for the driver to take you to Quba Mosque or Mount Uhud before checking into your hotel.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
