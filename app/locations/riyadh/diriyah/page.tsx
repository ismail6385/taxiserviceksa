import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Building, Utensils, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer to Diriyah | At-Turaif Premium Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service for Diriyah Gate and Bujairi Terrace. Professional transport to Riyadh\'s UNESCO heritage site.',
    keywords: ['Diriyah VIP transfer', 'Bujairi Terrace premium chauffeur', 'Diriyah Gate executive transport', 'At-Turaif VIP car', 'Riyadh to Diriyah premium transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/riyadh/diriyah/',
    },
    openGraph: {
        title: 'VIP Private Transfer to Diriyah Gate & Bujairi Terrace',
        description: 'Premium VIP private transfer to Riyadh\'s historical heart. Professional chauffeur service for dining at Bujairi Terrace and At-Turaif tours.',
        url: 'https://taxiserviceksa.com/locations/riyadh/diriyah/',
        type: 'website',
    },
};

export default function DiriyahPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally Diriyah / Mud brick architecture image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const diriyahSchema = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Diriyah Gate",
        "alternateName": "Bujairi Terrace",
        "description": "Historical center of Riyadh featuring the UNESCO World Heritage site At-Turaif and luxury dining at Bujairi Terrace.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Diriyah",
            "addressRegion": "Riyadh Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.7350",
            "longitude": "46.5750"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="diriyah-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(diriyahSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer to Diriyah (Bujairi Terrace)"
                bookingFormTitle="Request VIP Pickup"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Premium Heritage Chauffeur
                    </span>
                }
                subtitle="Exclusive Access to the Birthplace of the Kingdom"
                location="At-Turaif | Bujairi Terrace VIP Arrivals"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Riyadh%20Hotel&dropoff=Diriyah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            VIP Event Logistics
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
                            <span className="text-amber-800 font-bold uppercase tracking-wider text-sm">Culture & Luxury</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Experience Historical Luxury
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Diriyah is the jewel of Riyadh tourism. It combines the ancient mud-brick city of At-Turaif (UNESCO site) with the ultra-modern luxury dining district of Bujairi Terrace.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Parking at Diriyah can be expensive and distant (Valet is often mandatory/pricey). Our VIP chauffeurs drop you right at the visitor reception center, ready for your reservation at Tatsu, Hakkasan, or Takya.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Utensils className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Restaurant Drop</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">At-Turaif Tours</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Luxury Fleet</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Wait & Return</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Visitor Guide</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Entry Pass</h4>
                                        <p className="text-sm text-gray-500">You must have a 'Diriyah Entry Pass' (often redeemable against food bill) to enter Bujairi Terrace after 5 PM.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">At-Turaif</h4>
                                        <p className="text-sm text-gray-500">The historical site closes earlier than the restaurants. Plan to visit before sunset.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Dress Code</h4>
                                        <p className="text-sm text-gray-500">Smart casual is expected at Bujairi Terrace restaurants.</p>
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
                                topic: "Parking",
                                commonBelief: "Free parking available.",
                                reality: "Parking is limited and expensive (Valet only in many zones). A pre-booked VIP transfer is much more convenient and matches the premium nature of the district.",
                                truthRange: "Expensive Valet",
                                factors: ["Luxury Zone", "Limited Space"]
                            },
                            {
                                topic: "Walkability",
                                commonBelief: "We can walk from Riyadh.",
                                reality: "No, Diriyah is a separate town on the outskirts. You need a 20-30 minute ride from downtown Riyadh.",
                                truthRange: "Drive Required",
                                factors: ["Distance", "Highway"]
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
                        question: "How far is Diriyah from Riyadh Airport?",
                        shortAnswer: "25-30 mins",
                        detailedAnswer: "It is about a 25-30 minute drive from King Khalid International Airport (RUH), taking the Northern Ring Road.",
                        perspectives: []
                    },
                    {
                        question: "Can you wait for us while we dine?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Absolutely. We offer hourly booking packages so your driver is ready the moment you finish your meal.",
                        perspectives: []
                    },
                    {
                        question: "Is At-Turaif open every day?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, typically from 5 PM to midnight on weekdays and longer hours on weekends, but always check the official Diriyah Season schedule.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
