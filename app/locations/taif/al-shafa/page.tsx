import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Mountain, Cloud, ArrowRight, Trees } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi to Al Shafa Taif | Mountain Park & Resort Transfer',
    description: 'Book a taxi to Al Shafa Mountain (Jabal Shafa) in Taif. Visit scenic parks, horse riding spots, and fruit farms. Reliable mountain drivers.',
    keywords: ['Taxi to Al Shafa', 'Al Shafa Taif taxi', 'Jabal Shafa transport', 'Taif nature tour', 'Al Shafa resorts taxi'],
    alternates: {
        canonical: 'https://transferksa.com/locations/taif/al-shafa/',
    },
    openGraph: {
        title: 'Taxi to Al Shafa Mountains (Taif)',
        description: 'Private transfer to the stunning peaks of Al Shafa. Enjoy cool weather, horse riding, and nature parks with our reliable taxi service.',
        url: 'https://transferksa.com/locations/taif/al-shafa/',
        type: 'website',
    },
};

export default function AlShafaPage() {
    const images = [
        '/hero-slide-3.webp', // Ideally an image of green mountains/Al Shafa
        '/hero-slide-2.webp',
        '/jeddah-airport.webp',
    ];

    const alShafaSchema = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Al Shafa (Jabal Shafa)",
        "description": "Popular mountain resort area in Taif known for its lush greenery, colder climate, and agricultural terraces.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Taif",
            "addressRegion": "Makkah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.1070",
            "longitude": "40.3553"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="alshafa-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(alShafaSchema) }}
            />

            <Hero
                images={images}
                h1Text="Taxi to Al Shafa Mountains (Taif)"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Nature & Adventure Tour
                    </span>
                }
                subtitle="Taif's Highest & Coolest Peak"
                location="Horse Riding | Fruit Farms | Parks"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Taif%20City&dropoff=Al%20Shafa">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Al Shafa Trip
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Tour Package Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-green-700 font-bold uppercase tracking-wider text-sm">Mountain Escape</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Discover the Beauty of Al Shafa
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Located about 25-30km southwest of Taif city, Al Shafa sits at a higher altitude than Al Hada, making it cooler and greener. It is famous for its agricultural terraces growing figs, grapes, and pomegranates.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                The road to Al Shafa is scenic but steep. Our experienced local drivers ensure a safe journey to the top parks where you can enjoy picnics, horse riding, and stunning panoramic views.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Cloud className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Coolest Weather</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Trees className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Nature Parks</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Mountain className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Mountain Top View</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Full Day Trips</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Activities</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Horse & Camel Riding</h4>
                                        <p className="text-sm text-gray-500">Available at many parks along the main road.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Farm Visits</h4>
                                        <p className="text-sm text-gray-500">Buy fresh honey, ghee, and local fruits directly from farmers.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Daka Mountain Park</h4>
                                        <p className="text-sm text-gray-500">The highest point in the area, offering incredible sunset views.</p>
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
                                topic: "Al Hada vs Al Shafa",
                                commonBelief: "They are the same.",
                                reality: "Al Hada has the cable car and overlooks Makkah. Al Shafa is higher, deeper in nature, and cooler. Both are worth visiting.",
                                truthRange: "Different Vibes",
                                factors: ["Scenery", "Activities"]
                            },
                            {
                                topic: "Fog",
                                commonBelief: "Clear views always.",
                                reality: "It frequently gets foggy in the afternoons due to the altitude. Drive carefully or hire a professional.",
                                truthRange: "Foggy Afternoons",
                                factors: ["Visibility", "Weather"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Taif" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is Al Shafa from Taif?",
                        shortAnswer: "30 mins",
                        detailedAnswer: "It is a 25-30 km drive uphill from Taif city center, taking about 30 minutes.",
                        perspectives: []
                    },
                    {
                        question: "Is there a cable car in Al Shafa?",
                        shortAnswer: "No",
                        detailedAnswer: "No, the famous Teleferic (Cable Car) is in **Al Hada**. Al Shafa is known for parks, horses, and nature.",
                        perspectives: []
                    },
                    {
                        question: "Can we combine Al Hada and Al Shafa in one trip?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, but they are in opposite directions from Taif city. It makes for a full day trip. We can arrange a driver for the whole day.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
