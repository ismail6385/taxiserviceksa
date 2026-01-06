import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Palmtree, Coffee, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi to Dammam Corniche | Seaside & Marjan Island Transfer',
    description: 'Book a taxi to Dammam Corniche and Marjan Island. Enjoy the sea breeze with our reliable transfers from Dammam Airport (DMM) or Al Khobar.',
    keywords: ['Taxi to Dammam Corniche', 'Dammam waterfront taxi', 'Marjan Island transport', 'Dammam Airport to Corniche', 'Khobar to Dammam Corniche'],
    alternates: {
        canonical: 'https://transferksa.com/locations/dammam/corniche/',
    },
    openGraph: {
        title: 'Taxi to Dammam Corniche & Marjan Island',
        description: 'The best family picnic spot in the Eastern Province. We provide safe rides for families and groups to the Dammam waterfront.',
        url: 'https://transferksa.com/locations/dammam/corniche/',
        type: 'website',
    },
};

export default function DammamCornichePage() {
    const images = [
        '/jeddah-airport.webp', // Ideally Dammam Corniche / Sea image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const cornicheSchema = {
        "@context": "https://schema.org",
        "@type": "Park",
        "name": "Dammam Corniche",
        "description": "A popular waterfront promenade in Dammam featuring parks, restaurants, and Marjan Island.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dammam",
            "addressRegion": "Eastern Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "26.4422",
            "longitude": "50.1118"
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
                h1Text="Taxi to Dammam Corniche"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Seaside Getaway
                    </span>
                }
                subtitle="Transfers to Marjan Island & Waterfront"
                location="King Fahd Park | Dolphin Village"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Dammam%20Airport&dropoff=Dammam%20Corniche">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Corniche Ride
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Weekend Trip Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-cyan-700 font-bold uppercase tracking-wider text-sm">Family Leisure</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                The Gulf's Best Picnic Spot
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Dammam Corniche is the heart of family life in the Eastern Province. Stretching for miles, it offers lush green lawns, children's play areas, and the famous man-made Marjan Island.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Whether you are arriving from King Fahd International Airport (DMM) for a weekend break or crossing over from Bahrain, we provide spacious SUVs (Valid for 7 pax) perfect for picnic gear and families.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Palmtree className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Marjan Island</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Coffee className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Seaside Cafes</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Dolphin Village</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Family SUVs</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Stops</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Marjan Island</h4>
                                        <p className="text-sm text-gray-500">Connected by a bridge, this island park is iconic for sunsets.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Dolphin Village</h4>
                                        <p className="text-sm text-gray-500">An amusement park and dolphin show located right on the Corniche.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Dareen Mall</h4>
                                        <p className="text-sm text-gray-500">A major shopping center just opposite the waterfront area.</p>
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
                                topic: "Humidity",
                                commonBelief: "It's always nice.",
                                reality: "Summer (June-Sept) humidity is extreme. The Corniche is best enjoyed from Oct-April. In summer, book our AC taxis for mall hopping.",
                                truthRange: "Seasonal",
                                factors: ["High Humidity", "Winter Best"]
                            },
                            {
                                topic: "Parking",
                                commonBelief: "Plenty of spaces.",
                                reality: "On Thursday/Friday nights, parking is a nightmare. It can take 45 mins just to find a spot. Taxi drops you right at the walkway.",
                                truthRange: "Weekend Chaos",
                                factors: ["Crowds", "No Parking"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Dammam" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is Dammam Airport to the Corniche?",
                        shortAnswer: "35-40 mins",
                        detailedAnswer: "It is about a 40km drive from King Fahd International Airport (DMM), taking roughly 35-40 minutes.",
                        perspectives: []
                    },
                    {
                        question: "Is it close to Khobar?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, Dammam and Khobar are merged. The drive from Khobar Corniche to Dammam Corniche is about 20-25 minutes.",
                        perspectives: []
                    },
                    {
                        question: "Do you have baby seats?",
                        shortAnswer: "On Request",
                        detailedAnswer: "Yes, we can provide baby seats for families if requested at the time of booking.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
