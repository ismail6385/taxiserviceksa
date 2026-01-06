import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Factory, Anchor, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi Jeddah Airport to Yanbu | Industrial & Diving Transfers',
    description: 'Book a taxi from Jeddah Airport (JED) to Yanbu. Reliable transfers to Yanbu Industrial City, Royal Commission, and Red Sea resorts. 24/7 Service.',
    keywords: ['Taxi Jeddah to Yanbu', 'Jeddah Airport to Yanbu taxi', 'Yanbu Industrial City transfer', 'Yanbu Royal Commission taxi', 'Jeddah to Yanbu car'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-yanbu/',
    },
    openGraph: {
        title: 'Taxi Service: Jeddah Airport to Yanbu',
        description: 'Direct transfers from Jeddah to Yanbu Industrial City. Safe, comfortable cars for engineers, executives, and divers.',
        url: 'https://taxiserviceksa.com/routes/jeddah-yanbu/',
        type: 'website',
    },
};

export default function JeddahYanbuRoutePage() {
    const images = [
        '/jeddah-airport.webp', // Ideally Yanbu Industrial / Red Sea
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Jeddah to Yanbu Taxi",
        "provider": {
            "@type": "TransportationService",
            "name": "TaxiServiceKSA"
        },
        "areaServed": {
            "@type": "City",
            "name": "Yanbu"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Intercity Route",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Standard Sedan",
                        "description": "Camry/Sonata for up to 3 passengers."
                    },
                    "price": "550",
                    "priceCurrency": "SAR"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "SUV (GMC/Hyundai)",
                        "description": "Spacious ride for up to 7 passengers."
                    },
                    "price": "850",
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
                h1Text="Taxi Jeddah Airport to Yanbu"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        The Industrial Hub
                    </span>
                }
                subtitle="Direct to Royal Commission & Resorts"
                location="Door-to-Door | 3.5 Hours"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Jeddah%20Airport&dropoff=Yanbu">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Yanbu Ride (550 SAR)
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Project Logistics
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">Vital Connection</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Linking Jeddah to the Red Sea Hub
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Yanbu is a dual city: The historic "Yanbu Al Bahr" (tourism/diving) and the modern "Yanbu Industrial City" (petrochemicals/Royal Commission).
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We specialize in transfers for engineers, consultants, and divers landing in Jeddah. The drive is a straight 330km shot north along the Red Sea coast, taking roughly 3.5 hours.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Factory className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Industrial City</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Anchor className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Diving Resorts</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Royal Commission</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">24/7 Pickup</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Stops</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Yanbu Industrial City</h4>
                                        <p className="text-sm text-gray-500">Drop-off at Royal Commission HQ, refineries, or staff camps.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Yanbu Waterfront</h4>
                                        <p className="text-sm text-gray-500">Beautiful corniche area popular with tourists.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Barracuda Beach</h4>
                                        <p className="text-sm text-gray-500">Famous diving spot. We transport divers with gear.</p>
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
                                topic: "Bus/SAPTCO",
                                commonBelief: "Bus is cheaper.",
                                reality: "The bus is cheaper but takes 5-6 hours and drops you at a central station. You still need a taxi to get to Industrial City (20km away).",
                                truthRange: "Slow & Indirect",
                                factors: ["Long Travel Time", "Not Door-to-Door"]
                            },
                            {
                                topic: "Road Safety",
                                commonBelief: "The road is dark.",
                                reality: "There are strict speed cameras (Saher) along the route. Our drivers respect speed limits and drive modern, safe vehicles.",
                                truthRange: "Strictly Monitored",
                                factors: ["Speed Cameras", "Safe Driving"]
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
                        question: "How far is Yanbu from Jeddah Airport?",
                        shortAnswer: "330 km",
                        detailedAnswer: "It is approximately 330km. Without stops, the drive takes about 3 hours and 30 minutes.",
                        perspectives: []
                    },
                    {
                        question: "Can you drop me inside the Industrial City?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we can enter the Royal Commission area and drop you at your specific company gate or hotel.",
                        perspectives: []
                    },
                    {
                        question: "I have diving gear. Is there space?",
                        shortAnswer: "Yes",
                        detailedAnswer: "We recommend booking our SUV/GMC option if you are carrying heavy scuba equipment or multiple large bags.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
