import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, MountainSnow, CloudRain, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi to Al Soudah (Abha) | Highest Peak Transfer',
    description: 'Book a taxi from Abha Airport to Al Soudah, the highest peak in Saudi Arabia. Enjoy the cool weather and cable cars. Reliable 4x4 mountain transport.',
    keywords: ['Taxi to Al Soudah', 'Abha Airport to Soudah taxi', 'Al Soudah mountain taxi', 'Abha local tour taxi', 'Rijal Almaa taxi'],
    alternates: {
        canonical: 'https://transferksa.com/locations/abha/al-soudah/',
    },
    openGraph: {
        title: 'Taxi to Al Soudah Mountain (Abha)',
        description: 'Ride to the clouds. Safe mountain transfers from Abha City and Airport to Al Soudah Park and Rijal Almaa.',
        url: 'https://transferksa.com/locations/abha/al-soudah/',
        type: 'website',
    },
};

export default function AlSoudahPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally Abha / Green Mountain / Soudah image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const soudahSchema = {
        "@context": "https://schema.org",
        "@type": "Mountain",
        "name": "Al Soudah",
        "description": "The highest peak in Saudi Arabia, known for its juniper forests, cold weather, and cable car system.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abha",
            "addressRegion": "Asir Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "18.2667",
            "longitude": "42.3667"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="soudah-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(soudahSchema) }}
            />

            <Hero
                images={images}
                h1Text="Taxi to Al Soudah (Abha)"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Summer Capital Transfer
                    </span>
                }
                subtitle="Saudi Arabia's Highest Peak"
                location="Cable Car | Rijal Almaa | Green Mountain"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Abha%20Airport&dropoff=Al%20Soudah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Mountain Ride
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Full Day Tour Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Nature & Heritage</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Experience the Cool Asir Mountains
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Al Soudah is the premier summer destination in KSA, featuring dense juniper forests and temperatures often 15°C cooler than Riyadh. It is the starting point for the famous cable car down to Rijal Almaa heritage village.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Mountain roads can be steep and winding. Our drivers are locals from the Asir region, experienced in safe mountain driving and familiar with the best viewpoints (dams/parks).
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CloudRain className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Fog Handling</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <MountainSnow className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Al Soudah Park</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Safe Driving</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Tour Packages</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Must-Visit Spots</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Al Soudah Park</h4>
                                        <p className="text-sm text-gray-500">The main park with cable car station, zip-lines, and camping spots.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Rijal Almaa</h4>
                                        <p className="text-sm text-gray-500">The UNESCO heritage 'Gingerbread Village' at the bottom of the valley.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">High City (Abha)</h4>
                                        <p className="text-sm text-gray-500">Nearby attraction with cafes overlooking the mountains.</p>
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
                                commonBelief: "It's hot like Riyadh.",
                                reality: "No! It can be cold and foggy even in summer. Bring a jacket. Roads can be slippery due to sudden rain.",
                                truthRange: "Cool & Foggy",
                                factors: ["Elevation", "Monsoon"]
                            },
                            {
                                topic: "Ride Apps",
                                commonBelief: "Careem is everywhere.",
                                reality: "Careem/Uber work in the city center, but getting a return ride from the top of Al Soudah or Rijal Almaa can be very difficult.",
                                truthRange: "Return Issues",
                                factors: ["Remote Areas", "Network"]
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
                        question: "How far is Soudah from Abha Airport?",
                        shortAnswer: "45-50 mins",
                        detailedAnswer: "It is about a 45-50 minute drive uphill from Abha International Airport (AHB).",
                        perspectives: []
                    },
                    {
                        question: "Can you take us to Rijal Almaa?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we can drive you down the mountain road to Rijal Almaa village if you prefer not to take the cable car.",
                        perspectives: []
                    },
                    {
                        question: "Do you have 4x4 vehicles?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we offer Chevrolet Tahoe and GMC Yukons, which are recommended for comfortable mountain travel.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
