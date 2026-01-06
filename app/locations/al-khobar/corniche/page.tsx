import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Waves, Coffee, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi to Khobar Corniche | Waterfront & Restaurant Transfer',
    description: 'Book a taxi to Al Khobar Corniche. Visit the Water Tower, Ajdan Walk, and best waterfront restaurants. Reliable family transfers in Eastern Province.',
    keywords: ['Khobar Corniche taxi', 'Al Khobar waterfront taxi', 'Taxi to Ajdan Walk', 'Khobar Water Tower taxi', 'Eastern Province corniche taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/al-khobar/corniche/',
    },
    openGraph: {
        title: 'Taxi to Al Khobar Corniche & Waterfront',
        description: 'Enjoy the best views in the Eastern Province. Private taxi drop-off at Khobar Corniche, Ajdan Walk, and new extension.',
        url: 'https://taxiserviceksa.com/locations/al-khobar/corniche/',
        type: 'website',
    },
};

export default function KhobarCornichePage() {
    const images = [
        '/hero-slide-2.webp', // Ideally Khobar Water Tower or Corniche
        '/dammam-corniche.webp',
        '/jeddah-airport.webp',
    ];

    const khobarCornicheSchema = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Al Khobar Corniche",
        "description": "Scenic waterfront promenade in Al Khobar featuring parks, restaurants, tall water tower, and Ajdan Walk.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Al Khobar",
            "addressRegion": "Eastern Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "26.2946",
            "longitude": "50.2223"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="khobar-corniche-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(khobarCornicheSchema) }}
            />

            <Hero
                images={images}
                h1Text="Taxi to Al Khobar Corniche"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Eastern Province Waterfront
                    </span>
                }
                subtitle="Ajdan Walk | Water Tower | Seaside Dining"
                location="Family Friendly | Late Night Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Khobar%20Hotel&dropoff=Khobar%20Corniche">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Corniche Ride
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Hourly Driver Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm">Leisure & Dining</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                The Jewel of Khobar
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Al Khobar Corniche is the most popular recreational spot in the Eastern Province. It stretches for kilometers along the Arabian Gulf, featuring lush green parks, the iconic Khobar Water Tower, and the upscale Ajdan Walk.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Parking on weekends can be impossible. Our reliable taxi service drops you right at the entrance of your favorite restaurant or park, saving you the stress of finding a spot.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Waves className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Seafront Views</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Coffee className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Ajdan Walk Drops</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">No Parking Stress</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Late Night Pickup</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Zones</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Ajdan Walk</h4>
                                        <p className="text-sm text-gray-500">Luxury dining, cinema, and shopping village.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Khobar Water Tower</h4>
                                        <p className="text-sm text-gray-500">The city's most famous landmark (on its own island).</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">New Corniche</h4>
                                        <p className="text-sm text-gray-500">Newer extension with wider walking paths and playgrounds.</p>
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
                                topic: "Traffic",
                                commonBelief: "It's jammed on Fridays.",
                                reality: "Extremely jammed. Walking is faster once you are near. We drop you at the nearest accessible point to avoid sitting in traffic.",
                                truthRange: "Very Heavy",
                                factors: ["Weekend Evenings", "Cruising"]
                            },
                            {
                                topic: "Swimming",
                                commonBelief: "We can swim there.",
                                reality: "Swimming is generally not allowed along the main corniche promenade. For swimming, you need to go to Half Moon Bay.",
                                truthRange: "No Swimming",
                                factors: ["Walking Only", "View"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Al-Khobar" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is the Corniche from Dammam Airport?",
                        shortAnswer: "45-50 mins",
                        detailedAnswer: "It is about a 45-50 minute drive (60km) from King Fahd International Airport (DMM).",
                        perspectives: []
                    },
                    {
                        question: "Can you take us to Bahrain from Khobar Corniche?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we offer cross-border transfers to Bahrain via the King Fahd Causeway, which starts just south of the Corniche.",
                        perspectives: []
                    },
                    {
                        question: "Is Ajdan Walk part of the Corniche?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, Ajdan Walk is located centrally on the Corniche road and is the premium lifestyle destination there.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
