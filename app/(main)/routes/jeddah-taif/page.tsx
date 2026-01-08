import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Mountain, CloudSun, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi Jeddah Airport to Taif | Al Hada Mountain Transfers',
    description: 'Book a taxi from Jeddah Airport to Taif. Enjoy the scenic drive up Al Hada mountain. Reliable transfers to Taif city, glorious resorts, and historic sites.',
    keywords: ['Taxi Jeddah to Taif', 'Jeddah Airport to Taif taxi', 'Al Hada mountain taxi service', 'Taif cable car transfer', 'Jeddah to Taif car'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-taif/',
    },
    openGraph: {
        title: 'Scenic Taxi Ride: Jeddah to Taif (Al Hada)',
        description: 'Escape the humidity. Travel from Jeddah to the cool mountains of Taif in comfort. We specialize in the Al Hada mountain route.',
        url: 'https://taxiserviceksa.com/routes/jeddah-taif/',
        type: 'website',
    },
};

export default function JeddahTaifRoutePage() {
    const images = [
        '/jeddah-airport.webp', // Ideally Al Hada Mountain Road
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Jeddah to Taif Taxi",
        "provider": {
            "@type": "TransportationService",
            "name": "TaxiServiceKSA"
        },
        "areaServed": {
            "@type": "City",
            "name": "Taif"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Mountain Route",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Sedan (Al Hada Route)",
                        "description": "Comfortable sedan for up to 3 passengers."
                    },
                    "price": "350",
                    "priceCurrency": "SAR"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "GMC/SUV Mountain Special",
                        "description": "Powerful SUV ideal for the mountain ascent."
                    },
                    "price": "550",
                    "priceCurrency": "SAR"
                }
            ]
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={images}
                h1Text="Taxi Jeddah to Taif (Al Hada)"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        City of Roses
                    </span>
                }
                subtitle="The Cool Mountain Escape | 2 Hours"
                location="Via Al Hada Mountain Road"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Jeddah%20Airport&dropoff=Taif">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Taif Ride (350 SAR)
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Summer Tour
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-rose-900 font-bold uppercase tracking-wider text-sm">Mountain Retreat</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Journey Above the Clouds
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Taif is Jeddah's favorite summer getaway. Located at an elevation of 1,800 meters, it offers cool weather, fruit orchards, and the famous Taif roses.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                The drive involves ascending the spectacular Al Hada mountain road with its winding turns and stunning views. It requires a skilled driver and a well-maintained vehicle to navigate safely and comfortably.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Mountain className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Al Hada Road</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CloudSun className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Cool Weather</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Experienced Driver</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Family SUVs</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Must-Visit Spots</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Al Hada Cable Car</h4>
                                        <p className="text-sm text-gray-500">The longest cable car in the region, connecting the mountain top to the water park below.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Shubra Palace</h4>
                                        <p className="text-sm text-gray-500">A stunning historic palace that offers a glimpse into Taif's royal past.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Rose Factories</h4>
                                        <p className="text-sm text-gray-500">Visit in spring to see how the world-famous Taif rose water is distilled.</p>
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
                                topic: "Motion Sickness",
                                commonBelief: "It's just a normal road.",
                                reality: "The Al Hada zig-zag road can cause motion sickness. Our drivers know how to drive smoothly to minimize discomfort.",
                                truthRange: "Windy Roads",
                                factors: ["Zig-Zag Descent", "Altitude Change"]
                            },
                            {
                                topic: "Monkeys",
                                commonBelief: "They are aggressive.",
                                reality: "You will see baboons on the roadside. They are generally fine if you stay in the car. Do not feed them.",
                                truthRange: "Wildlife Present",
                                factors: ["Baboons", "Don't Feed"]
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
                        question: "How long does it take to get to Taif?",
                        shortAnswer: "2 - 2.5 Hours",
                        detailedAnswer: "It typically takes about 2 to 2.5 hours from Jeddah Airport, depending on whether you take the Al Hada mountain road (scenic) or the Sail road (truck route).",
                        perspectives: []
                    },
                    {
                        question: "Is the Al Hada road always open?",
                        shortAnswer: "Mostly",
                        detailedAnswer: "It is occasionally closed during heavy rain or fog for safety. In that case, we take the alternative Sail Road route.",
                        perspectives: []
                    },
                    {
                        question: "Can we stop for photos on the mountain?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Absolutely. There are dedicated viewpoints (Fruit Market area) where we can pause for you to enjoy the view and buy local fruits.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
