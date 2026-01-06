import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Building2, Briefcase, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi Riyadh to Dammam | Business & Private Transfers',
    description: 'Book a private taxi from Riyadh to Dammam. Door-to-door luxury transfers for business meetings, airport connections, and family trips. Fixed rates.',
    keywords: ['Taxi Riyadh to Dammam', 'Riyadh to Dammam car', 'Riyadh to Khobar taxi', 'Riyadh to Dammam airport transfer', 'One way taxi Riyadh Dammam'],
    alternates: {
        canonical: 'https://transferksa.com/routes/riyadh-dammam/',
    },
    openGraph: {
        title: 'Executive Taxi: Riyadh to Dammam / Khobar',
        description: 'Need to travel between Riyadh and Dammam? Skip the flight hassle. Our luxury GMCs provide comfortable 3.5-hour door-to-door service.',
        url: 'https://transferksa.com/routes/riyadh-dammam/',
        type: 'website',
    },
};

export default function RiyadhDammamRoutePage() {
    const images = [
        '/riyadh-discovery-map.png', // Ideally Highway / Desert Road image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Riyadh to Dammam Taxi",
        "provider": {
            "@type": "TransportationService",
            "name": "TaxiServiceKSA"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Saudi Arabia"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Intercity Transfers",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Standard Sedan",
                        "description": "Comfortable sedan for up to 3 passengers."
                    },
                    "price": "750",
                    "priceCurrency": "SAR"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "GMC Yukon XL",
                        "description": "Luxury SUV for up to 7 passengers and luggage."
                    },
                    "price": "1200",
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
                h1Text="Taxi Riyadh to Dammam & Khobar"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        The Business Corridor
                    </span>
                }
                subtitle="Daily Executive Transfers | 3.5 Hours"
                location="Door-to-Door Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Riyadh&dropoff=Dammam">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Route (800 SAR)
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Corporate Contract
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">City-to-City</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Riyadh to Dammam: Smooth & Stress-Free
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Traveling between the capital and the Eastern Province is a daily routine for many businesses. While flights are short (1 hour), the airport hassle adds 3 hours to your trip.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our private taxi service gets you from your Riyadh office to your Dammam meeting in about 3.5 to 4 hours. No security lines, no waiting. Just a comfortable highway cruise in a GMC Yukon or Hyundai Staria.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">4 Hours Total</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Work in Car</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Group Travel</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <DollarSign className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Fixed Rate</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Route Highlights</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Door-to-Door</h4>
                                        <p className="text-sm text-gray-500">Pick up from Riyadh (Olaya, KAFD) to Drop off in Dammam/Khobar Corniche.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Comfort Stops</h4>
                                        <p className="text-sm text-gray-500">The highway has modern service stations (SASCO) with Starbucks and fast food.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Flexibility</h4>
                                        <p className="text-sm text-gray-500">Depart at any time you choose. No flight schedules to stick to.</p>
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
                                topic: "Flying vs Driving",
                                commonBelief: "Flying is faster.",
                                reality: "Flight time is 1h, but Airport (1h) + Security (1h) + Taxi (1h) = 4h. Driving is also 4h, but stress-free and cheaper for groups.",
                                truthRange: "Same Time",
                                factors: ["Airport Hassle", "Remote Work"]
                            },
                            {
                                topic: "Train",
                                commonBelief: "Train is best.",
                                reality: "The train is fast but tickets sell out 3 days in advance. Taxis are available instantly 24/7.",
                                truthRange: "Tickets Sold Out",
                                factors: ["Availability", "Last Minute"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Riyadh" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the drive from Riyadh to Dammam?",
                        shortAnswer: "3.5 - 4 Hours",
                        detailedAnswer: "The distance is approximately 400km. On the smooth highway, it takes about 3.5 to 4 hours.",
                        perspectives: []
                    },
                    {
                        question: "Why choose a taxi over the train?",
                        shortAnswer: "Door-to-Door",
                        detailedAnswer: "The train requires you to get to the station 45 mins early. A taxi picks you up from your home and drops you at your hotel.",
                        perspectives: []
                    },
                    {
                        question: "Do you go to Khobar and Jubail too?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we serve the entire Eastern Province including Al Khobar, Dammam, Dhahran, and Jubail.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
