import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Train, Briefcase, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer Makkah Train Station | Premium Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service from Makkah Haramain Train Station (Rusaifah). Professional pickup for Umrah pilgrims.',
    keywords: ['Makkah train station VIP transfer', 'Haramain railway premium chauffeur', 'Rusaifah station VIP transport', 'Makkah station executive car'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/makkah/train-station/',
    },
    openGraph: {
        title: 'Taxi from Makkah Train Station (Haramain)',
        description: 'Direct transfer from Makkah Railway Station to Clock Tower and Haram hotels. Avoid the crowds with pre-booked pickups.',
        url: 'https://taxiserviceksa.com/locations/makkah/train-station/',
        type: 'website',
    },
};

export default function MakkahTrainStationPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally Makkah Train Station image
        '/makkah-kaaba-night.webp',
        '/hero-slide-3.webp',
    ];

    const stationSchema = {
        "@context": "https://schema.org",
        "@type": "TrainStation",
        "name": "Makkah Haramain High Speed Railway Station",
        "alternateName": "Rusaifah Station",
        "description": "Main railway station in Makkah serving the high-speed train from Jeddah and Madinah.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Makkah",
            "addressRegion": "Makkah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.4133",
            "longitude": "39.7995"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="makkah-station-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(stationSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer Makkah Train Station"
                bookingFormTitle="Request Station Pickup"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Premium Railway Chauffeur
                    </span>
                }
                subtitle="Exclusive VIP Arrival Service for Haramain Railway Guests"
                location="Rusaifah Station | Luxury Doorstep Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Makkah%20Train%20Station&dropoff=Clock%20Tower">
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
                            <span className="text-emerald-700 font-bold uppercase tracking-wider text-sm">Arrival in Makkah</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Seamless Transfer to Al Haram
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                The Makkah Haramain Train Station is located in the Rusaifah district, about 4-5 km west of the Grand Mosque (Al Haram). While it is a world-class facility, getting from the platform to your hotel can be chaotic due to the crowds.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Avoid the long lines for buses and public taxis. Our driver will meet you at the designated arrival area and take you directly to your hotel in Jabal Omar, Ajyad, or Aziziyah.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Train className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Station Pickup</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Flight/Train Tracking</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Luggage Assistance</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Direct to Hotel</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Drop-off Areas</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Jabal Omar (Hyatt, Hilton, Conrad)</h4>
                                        <p className="text-sm text-gray-500">10-15 mins drive. Closest hotels to the station.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Clock Tower / Ajyad</h4>
                                        <p className="text-sm text-gray-500">15-20 mins. Direct access via King Abdulaziz Gate.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Aziziyah</h4>
                                        <p className="text-sm text-gray-500">15-20 mins. Popular for groups and Hajj pilgrims.</p>
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
                                topic: "Shuttle Bus",
                                commonBelief: "It's free.",
                                reality: "A shuttle bus exists, but it can be very crowded. A private VIP transfer provides door-to-door service with luggage assistance.",
                                truthRange: "Crowded",
                                factors: ["Budget Option", "Waiting"]
                            },
                            {
                                topic: "Walking",
                                commonBelief: "We can walk to Haram.",
                                reality: "Absolutely NOT (5km distance). You need a pre-booked VIP transfer to reach your hotel safely through busy traffic.",
                                truthRange: "Impossible",
                                factors: ["Distance", "Heat"]
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
                        question: "How far is the train station from the Kaaba?",
                        shortAnswer: "10-15 mins",
                        detailedAnswer: "The station is about 5km from the Haram. By taxi, it typically takes 10-15 minutes depending on traffic at the checkpoints.",
                        perspectives: []
                    },
                    {
                        question: "Are taxis available at the station late at night?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, but they can be scarce or expensive if a late train arrives. Pre-booking ensures a driver is waiting specifically for you.",
                        perspectives: []
                    },
                    {
                        question: "Can you pick up large groups?",
                        shortAnswer: "Yes",
                        detailedAnswer: "We have Hiace vans and Coaster buses available for large family groups arriving by train with luggage.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
