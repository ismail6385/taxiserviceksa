import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, ArrowRight, Navigation, Building2 } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RecentTrips from '@/components/RecentTrips';

export const metadata: Metadata = {
    title: 'Madinah to Jeddah Airport (JED) Departures Taxi | 24/7 Transfer',
    description: 'Reliable taxi from Madinah to Jeddah Airport Departures (North Terminal & Terminal 1). Flight tracking included to ensure on-time arrival. Fixed Price SAR 450.',
    keywords: ['Madinah to Jeddah Airport taxi', 'JED airport departure transfer', 'Madinah to Terminal 1', 'taxi to Jeddah North Terminal', 'Madinah Jeddah airport fare'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/madinah-to-jeddah-airport-departures/',
    },
    openGraph: {
        title: 'Madinah to Jeddah Airport (JED) Departures Taxi',
        description: 'Direct transfer for your return flight. Madinah to JED Terminal 1/North. On-time guarantee.',
        url: 'https://taxiserviceksa.com/madinah-to-jeddah-airport-departures/',
        type: 'website',
    },
};

export default function MadinahToJeddahAirportPage() {
    const routeDetails = [
        { label: 'Distance', value: '450 km', icon: Navigation },
        { label: 'Travel Time', value: '4-5 Hours', icon: Clock },
        { label: 'Fixed Price', value: 'SAR 450', icon: DollarSign },
        { label: 'Terminal', value: 'All Terminals', icon: MapPin },
    ];

    const routeImages = [
        '/jeddah-corniche-sunset.webp', // Need a good airport image or generic highway
        '/gmc-yukon.webp',
        '/hero-slide-3.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Madinah to Jeddah Airport",
        "fromLocation": {
            "@type": "Place",
            "name": "Madinah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madinah",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Airport",
            "name": "King Abdulaziz International Airport",
            "iataCode": "JED",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jeddah",
                "addressCountry": "SA"
            }
        },
        "price": "450",
        "priceCurrency": "SAR"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-jed-departures"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            {/* Hero Section */}
            <Hero
                images={routeImages}
                h1Text="Madinah to Jeddah Airport Taxi"
                title={
                    <span className="bg-blue-600/90 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block shadow-lg">
                        Airport Drop-off
                    </span>
                }
                subtitle="Reliable Transfer to JED Terminals"
                location="Door-to-Terminal • Fixed Rate"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?destination=Jeddah%20Airport">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Airport Drop
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Get Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Reverse Silo Link */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <ArrowRight className="w-4 h-4" />
                        <span>Part of our popular</span>
                        <Link href="/routes/madinah-jeddah/" className="text-primary font-bold hover:underline">
                            Madinah to Jeddah Taxi
                        </Link>
                        <span>route</span>
                    </div>
                </div>
            </div>

            {/* Route Details Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-blue-100 text-blue-800 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Departure Transfer</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Madinah to Jeddah Airport (JED)</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Don't miss your flight. We provide punctual pickups from your Madinah hotel and drop you directly at the <strong>Departure Curbside</strong> of King Abdulaziz International Airport (Terminal 1 or North).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {routeDetails.map((detail, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200 hover:border-blue-500 transition-colors">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
                                    <detail.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">{detail.label}</div>
                                <div className="text-2xl font-bold text-gray-900">{detail.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Specific Airport Context */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-6">Which Terminal?</h3>
                                <p className="mb-6 text-gray-300">We drop passenger off at all major terminals. Please check your ticket:</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="font-bold text-sm">T1</span>
                                        </div>
                                        <div>
                                            <strong className="text-blue-300">Terminal 1 (New Airport):</strong>
                                            <p className="text-sm text-gray-400">Saudia, Flynas, and most International Airlines.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="font-bold text-sm">N</span>
                                        </div>
                                        <div>
                                            <strong className="text-blue-300">North Terminal:</strong>
                                            <p className="text-sm text-gray-400">Select international budget carriers.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="font-bold text-sm">H</span>
                                        </div>
                                        <div>
                                            <strong className="text-blue-300">Hajj Terminal:</strong>
                                            <p className="text-sm text-gray-400">Dedicated terminal for Hajj charter flights (seasonal).</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <h4 className="font-bold text-xl mb-4">Travel Time Planner</h4>
                                <div className="space-y-4 text-sm text-gray-300">
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span>Driving Time</span>
                                        <span className="font-mono text-white">4.5 Hours</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span>Recommended Buffer</span>
                                        <span className="font-mono text-white">+1 Hour</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span>Check-in Closure</span>
                                        <span className="font-mono text-white">60 Mins Before</span>
                                    </div>
                                    <div className="bg-blue-600/20 p-3 rounded-lg mt-4 border border-blue-500/30">
                                        <p className="text-blue-200 text-xs">
                                            <strong>Pro Tip:</strong> For international flights, we recommend leaving Madinah <strong>7-8 hours</strong> before your flight time to account for check-in and potential traffic.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RecentTrips />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How much is a taxi from Madinah to Jeddah Airport?",
                        shortAnswer: "SAR 450",
                        detailedAnswer: "A standard sedan taxi from Madinah to Jeddah Airport costs SAR 450. Larger vehicles like the GMC Yukon are available for SAR 850.",
                        perspectives: []
                    },
                    {
                        question: "How early should I leave Madinah for my Jeddah flight?",
                        shortAnswer: "7-8 Hours Before",
                        detailedAnswer: "We strongly recommend leaving Madinah at least 7-8 hours before your flight's scheduled departure time. The drive is 4.5 hours, plus you need 3 hours for international check-in.",
                        perspectives: []
                    },
                    {
                        question: "Do you drop off at Terminal 1?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we drop off at the departure curbside of Terminal 1, North Terminal, and the Hajj Terminal.",
                        perspectives: []
                    }
                ]}
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Seamless Airport Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        End your journey with peace of mind. Book your Madinah to Jeddah Airport taxi today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/?destination=Jeddah%20Airport">
                            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Airport Taxi (SAR 450)
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email Us
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
