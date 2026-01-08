import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Palmtree, Waves, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer to Obhur Jeddah | Beach Resort Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service to Obhur, Jeddah. Reliable luxury transfers to Indigo, Oia, and all private beach resorts.',
    keywords: ['Obhur VIP transfer', 'Jeddah beach premium chauffeur', 'Jeddah to Obhur VIP', 'Indigo resort premium transport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/jeddah/obhur/',
    },
    openGraph: {
        title: 'VIP Private Transfer to Obhur Beach Resorts | Premium Chauffeur',
        description: 'Going to the beach? We provide premium VIP private transfers and executive SUVs for families and divers heading to Obhur resorts.',
        url: 'https://taxiserviceksa.com/locations/jeddah/obhur/',
        type: 'website',
    },
};

export default function ObhurPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally Obhur / Red Sea image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const obhurSchema = {
        "@context": "https://schema.org",
        "@type": "Beach",
        "name": "Obhur",
        "description": "A coastal area north of Jeddah known for private beach resorts, diving centers, and luxury chalets.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jeddah",
            "addressRegion": "Makkah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.7135",
            "longitude": "39.1174"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="obhur-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(obhurSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer to Obhur Beach Resorts"
                bookingFormTitle="Book Resort Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Premium Resort Chauffeur
                    </span>
                }
                subtitle="Your Luxury Gateway to the Red Sea"
                location="North & South Obhur VIP Pickup"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Jeddah%20City&dropoff=Obhur">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Diving Group VIP Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Leisure, Intercity, and Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm">Sun & Sea</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                The Ultimate Weekend Escape
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Obhur is situated 30km north of Jeddah's city center. It is the hub for private beaches, scuba diving, and boat trips.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Most resorts here (like Indigo and Oia) are exclusive and far from the main road. Finding a taxi <em>back</em> to the city at night can be a nightmare. Our pre-booked service ensures you have a guaranteed ride home.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Palmtree className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Indigo / Oia</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Waves className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Diving Centers</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">SUV for Gear</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Late Night Return</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Resorts</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Indigo / Oia / Bohemia</h4>
                                        <p className="text-sm text-gray-500">The most Instagrammable luxury beaches. Hard to reach without a car.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Bhadur Resort</h4>
                                        <p className="text-sm text-gray-500">A classic family favorite with water parks and chalets.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Jeddah Boat Marina</h4>
                                        <p className="text-sm text-gray-500">Pickup point for snorkeling and diving boat trips.</p>
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
                                topic: "Getting Back",
                                commonBelief: "I'll call an Uber later.",
                                reality: "Obhur is far. Ubers rarely accept trips back to the city late at night, or they charge double. Pre-booking a return is critical.",
                                truthRange: "Risk of Stranding",
                                factors: ["Remote Area", "High Demand"]
                            },
                            {
                                topic: "Scuba Gear",
                                commonBelief: "Any car works.",
                                reality: "If you have tanks and gear, a small sedan won't fit. You need our XL SUVs.",
                                truthRange: "SUV Needed",
                                factors: ["Equipment", "Space"]
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
                        question: "How far is Obhur from Jeddah city?",
                        shortAnswer: "45 mins",
                        detailedAnswer: "It is about 30-40km from the city center, taking 40-50 minutes depending on traffic on Medina Road.",
                        perspectives: []
                    },
                    {
                        question: "Can I book a round trip?",
                        shortAnswer: "Highly Recommended",
                        detailedAnswer: "Yes, we strongly recommend booking a round trip. We can drop you off in the morning and pick you up at sunset.",
                        perspectives: []
                    },
                    {
                        question: "Do you go to King Abdullah Economic City (KAEC)?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, Obhur is on the way to KAEC. We offer transfers to KAEC and the train station there as well.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
