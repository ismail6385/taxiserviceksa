import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Ticket, Globe2, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer to Boulevard World | Premium Season Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service to Boulevard World and Boulevard City. Professional door-to-door transport for Riyadh Season.',
    keywords: ['Boulevard World VIP transfer', 'Riyadh Season premium chauffeur', 'Boulevard City executive transport', 'Riyadh entertainment VIP car'],
    alternates: {
        canonical: 'https://transferksa.com/locations/riyadh/boulevard-world/',
    },
    openGraph: {
        title: 'VIP Private Transfer to Boulevard World & City (Riyadh)',
        description: 'The elite way to visit Riyadh Season. Premium VIP private transfer and professional chauffeur service to the entrance gate.',
        url: 'https://transferksa.com/locations/riyadh/boulevard-world/',
        type: 'website',
    },
};

export default function BoulevardWorldPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally Boulevard World image (Globe/Lake)
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const boulevardSchema = {
        "@context": "https://schema.org",
        "@type": "AmusementPark",
        "name": "Boulevard World",
        "description": "A premier entertainment zone in Riyadh Season featuring global cultures, a massive lake, and rides.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Riyadh",
            "addressRegion": "Riyadh Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.7743",
            "longitude": "46.6025"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="boulevard-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(boulevardSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer to Boulevard World"
                bookingFormTitle="Request VIP Pickup"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Premium Season Chauffeur
                    </span>
                }
                subtitle="The Elite VIP Link to Boulevard World & City"
                location="Skip the Traffic | Professional Gate Drop-off"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Riyadh%20Hotel&dropoff=Boulevard%20World">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            VIP Daily Rental
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Intercity, Airport, and Full-Day transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-purple-700 font-bold uppercase tracking-wider text-sm">Fun & Entertainment</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Visit the World in One Day
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Boulevard World is the most visited attraction in Riyadh, featuring zones from over 10 countries (Italy, France, China, etc.) around a massive man-made lake. Adjacent is Boulevard City, known for gaming, concerts, and dining.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-semibold text-red-600">
                                Warning: Traffic around the Boulevard zones is extremely heavy from 6 PM to midnight. Finding parking can take hours.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our professional chauffeurs know the best drop-off points to get you close to the gates without getting stuck in the main parking jams.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">World Zones</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Ticket className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Gate Drop-off</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Avoid Parking</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Family Vans</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Zone Guide</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Boulevard World</h4>
                                        <p className="text-sm text-gray-500">Requires a specific entry ticket. Cultural zones & cable car.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Boulevard City</h4>
                                        <p className="text-sm text-gray-500">Entry is often free (check season rules). Shopping & Dining.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Kingdom Arena</h4>
                                        <p className="text-sm text-gray-500">Venue for major boxing matches and concerts nearby.</p>
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
                                commonBelief: "We will drive there.",
                                reality: "Bad idea. Traffic jams can delay you by 1-2 hours, and parking lots are huge (long walk). A drop-off taxi is much faster.",
                                truthRange: "Extreme Gridlock",
                                factors: ["Weekends", "Events"]
                            },
                            {
                                topic: "Getting Home",
                                commonBelief: "Easy to hail Uber.",
                                reality: "Surge pricing is insane (3x-4x) and drivers cancel often. Pre-booking a return VIP transfer saves you money and stress.",
                                truthRange: "High Surge",
                                factors: ["Demand", "Cancellations"]
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
                        question: "How far is Boulevard World from Olaya?",
                        shortAnswer: "15-20 mins",
                        detailedAnswer: "Without traffic, it is about 15-20 minutes. During Riyadh Season peak hours, expect 45 minutes.",
                        perspectives: []
                    },
                    {
                        question: "Can you drop us at the VIP gate?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, if you have VIP tickets, we can access the dedicated VIP drop-off lanes.",
                        perspectives: []
                    },
                    {
                        question: "Do I need a ticket to enter?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Boulevard World always requires a paid ticket. Boulevard City entry varies by season.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
