import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Camera, Mountain, ArrowRight, Coffee } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi to Elephant Rock (Jabal AlFil) AlUla | Sunset View Transfer',
    description: 'Book a taxi to Elephant Rock (Jabal AlFil) in AlUla. The best spot for sunset views and evening coffee. Reliable pickup and return service.',
    keywords: ['Taxi to Elephant Rock', 'Jabal AlFil taxi', 'AlUla sunset taxi', 'Elephant Rock cafes', 'AlUla sightseeing taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/alula/elephant-rock/',
    },
    openGraph: {
        title: 'Taxi to Elephant Rock (Jabal AlFil)',
        description: 'Private transfer to AlUla\'s most iconic geological wonder. Enjoy sunset and return safely to your hotel.',
        url: 'https://taxiserviceksa.com/locations/alula/elephant-rock/',
        type: 'website',
    },
};

export default function ElephantRockPage() {
    const images = [
        '/hero-slide-2.webp', // Ideally an image of Elephant Rock at sunset
        '/alula-hegra-tombs.webp',
        '/hero-slide-3.webp',
    ];

    const elephantRockSchema = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Elephant Rock (Jabal AlFil)",
        "description": "Information geological rock formation resembling an elephant, popular for sunset viewing and cafes.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "AlUla",
            "addressRegion": "Madinah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "26.7028",
            "longitude": "37.9922"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="elephant-rock-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(elephantRockSchema) }}
            />

            <Hero
                images={images}
                h1Text="Taxi to Elephant Rock (Jabal AlFil)"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Sunset & Evening Hub
                    </span>
                }
                subtitle="AlUla's Most Iconic Natural Landmark"
                location="Sunset Views | Outdoor Cafes | Stargazing"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=AlUla%20Old%20Town&dropoff=Elephant%20Rock">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Sunset Ride
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Hourly Booking
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Natural Wonder</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                The Golden Hour Experience
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Elephant Rock (Jabal AlFil) is a massive sandstone monolith that stands 52 meters high. Unlike Hegra, it is open to the public without a ticket (usually) and is the most popular spot for sunset.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                The site is located in the desert, away from the main road. Taxi apps may work to get there, but finding a ride *back* to your hotel in the dark can be challenging. Our "Wait and Return" service is highly recommended.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Camera className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Best Photo Spot</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Coffee className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Outdoor Cafes</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Reliable Return</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <MapPin className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Desert Location</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience Tips</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Arrive Early</h4>
                                        <p className="text-sm text-gray-500">Get there at least 45 minutes before sunset to secure a good seating spot.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Entrance Fees</h4>
                                        <p className="text-sm text-gray-500">Access is often free, but seating at the sunken cafes requires ordering food/drinks.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Dress Warmly</h4>
                                        <p className="text-sm text-gray-500">Desert temperatures drop rapidly after sunset. Bring a jacket.</p>
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
                                topic: "Getting There",
                                commonBelief: "We can walk.",
                                reality: "It is in the desert, far from hotels. You definitely need a car. The sand tracks can be soft, so stay on marked roads.",
                                truthRange: "Car Required",
                                factors: ["Desert", "Distance"]
                            },
                            {
                                topic: "Booking",
                                commonBelief: "Tickets needed.",
                                reality: "Usually, general entry to look at the rock is free. Tickets or reservations are sometimes needed for specific events or cafe seating.",
                                truthRange: "Check Status",
                                factors: ["Seasonality", "Events"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="AlUla" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is Elephant Rock from Old Town?",
                        shortAnswer: "15 mins",
                        detailedAnswer: "It is a short 15-20 minute drive from the Old Town parking area.",
                        perspectives: []
                    },
                    {
                        question: "Can the taxi wait for us during sunset?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, this is our most popular option. The driver waits in the parking lot while you enjoy the sunset, ensuring you have a ride back immediately.",
                        perspectives: []
                    },
                    {
                        question: "Are there restrooms there?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, there are high-quality portable restroom trailers near the cafe seating area.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
