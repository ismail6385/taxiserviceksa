import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Mountain, ArrowRight, Cloud, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer & Chauffeur Abha | AHB Airport Pickup',
    description: 'Premium VIP private transfer and executive chauffeur service in Abha. Specialized Abha Airport (AHB) pickups and mountain transfers to Al Soudah and Rijal Almaa. Professional high-altitude service.',
    keywords: ['Abha VIP private transfer', 'Executive chauffeur Abha', 'AHB Airport VIP pickup', 'Ride to Al Soudah VIP', 'Abha premium driver'],
    alternates: {
        canonical: 'https://transferksa.com/locations/abha/',
    },
    openGraph: {
        title: 'Abha VIP Transfer & Airport Pickups',
        description: 'Need a premium VIP transfer in Abha? We provide comfortable chauffeured trips to Al Soudah, Green Mountain, and Abha Airport.',
        url: 'https://transferksa.com/locations/abha/',
        type: 'website',
    },
};

export default function AbhaPage() {
    const images = [
        '/hero-slide-4.webp', // Ideally Abha Mountains / Green Mountain image
        '/jeddah-airport.webp',
        '/hero-slide-3.webp',
    ];

    const abhaSchema = {
        "@context": "https://schema.org",
        "@type": "City",
        "name": "Abha",
        "description": "The capital of Aseer Province, known for its mild climate, mountains, and heritage.",
        "url": "https://transferksa.com/locations/abha/",
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "18.2167",
            "longitude": "42.5000"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="abha-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(abhaSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer & Chauffeur Abha"
                bookingFormTitle="Book Premium Transfer in Abha"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        VIP Chauffeur Service Abha
                    </span>
                }
                subtitle="High-Altitude Excellence in the High City"
                location="Abha | Aseer Region | Soudah"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Abha%20Airport&dropoff=Selected%20Hotel">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Email Us
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked Mountain, Intercity, and VIP Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Mountain Transport</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                VIP Transfer Services in Aseer
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Abha's terrain is mountainous and beautiful, but it requires skilled drivers. Whether you are heading up to Al Soudah park, visiting the heritage village of Rijal Almaa, or need a transfer to Khamis Mushait, we have you covered.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We cover Abha Airport (AHB) pickups with flight tracking, ensuring your driver is waiting even if your flight is delayed due to fog.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Cloud className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Airport Pickups</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Mountain className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Soudah Trips</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Local Experts</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <DollarSign className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Fixed Rates</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Destinations</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Al Soudah</h4>
                                        <p className="text-sm text-gray-500">The highest peak. Famous for cable cars and juniper forests.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Rijal Almaa</h4>
                                        <p className="text-sm text-gray-500">The historical gingerbread village. A must-visit day trip.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Green Mountain</h4>
                                        <p className="text-sm text-gray-500">Jebel Zarafa. Great night views of the city.</p>
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
                                topic: "Weather",
                                commonBelief: "It's hot.",
                                reality: "Abha is cool and often foggy, even in summer. Driving in fog requires local expertise which our drivers possess.",
                                truthRange: "Foggy & Cool",
                                factors: ["Fog Advice", "Safety"]
                            },
                            {
                                topic: "Ride Apps",
                                commonBelief: "Uber is everywhere.",
                                reality: "Ride apps can be unreliable in remote mountain areas like Soudah. A pre-booked driver ensures you aren't stranded.",
                                truthRange: "Limited Coverage",
                                factors: ["Remote Areas", "Reliability"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Abha" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is Soudah from Abha?",
                        shortAnswer: "25-30 mins",
                        detailedAnswer: "Al Soudah is about 25-30 minutes drive from downtown Abha. The road is scenic but winding.",
                        perspectives: []
                    },
                    {
                        question: "Do you go to Khamis Mushait?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we provide transfers between Abha and Khamis Mushait, including the military city and industrial areas.",
                        perspectives: []
                    },
                    {
                        question: "Is Rijal Almaa far?",
                        shortAnswer: "1 hour+",
                        detailedAnswer: "Yes, Rijal Almaa is about an hour's drive down the mountains. It involves steep roads, so a reliable car is essential.",
                        perspectives: []
                    }
                ]}
            />
        </div >
    );
}
