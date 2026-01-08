import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Coffee, Navigation, Mountain } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Al Ula to Jeddah Taxi | 700km Return Transfer - Fixed Price',
    description: 'Taxi from Al Ula to Jeddah. 700km return journey to Jeddah Airport or Hotel. Fixed rate from SAR 1400. 4x4 SUVs available for luggage.',
    keywords: ['Al Ula to Jeddah taxi', 'taxi Al Ula to Jeddah airport', 'Al Ula transport', 'Al Ula to Jeddah price', 'Al Ula car hire'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/alula-jeddah/',
    },
    openGraph: {
        title: 'Al Ula to Jeddah Taxi | 700km Route - Fixed Price SAR 1400',
        description: 'Comfortable private transfer from Al Ula to Jeddah. 700km journey. Fixed rates starting SAR 1400. Door-to-door service.',
        url: 'https://taxiserviceksa.com/routes/alula-jeddah/',
        type: 'website',
    },
};

export default function AlulaJeddahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '700 km', icon: Navigation },
        { label: 'Travel Time', value: '7-8 hours', icon: Clock },
        { label: 'Starting Price', value: 'SAR 1400', icon: DollarSign },
        { label: 'Terrain', value: 'Mountain & Desert', icon: Mountain },
    ];

    const routeImages = [
        '/alula-hegra-tombs.webp',
        '/jeddah-airport.webp',
        '/hero-slide-2.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Al Ula to Jeddah",
        "fromLocation": {
            "@type": "Place",
            "name": "Al Ula",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Al Ula",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Place",
            "name": "Jeddah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jeddah",
                "addressCountry": "SA"
            }
        },
        "distance": "700 km",
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            {/* Hero Section */}
            <Hero
                images={routeImages}
                h1Text="Online Taxi from Al Ula to Jeddah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Al Ula → Jeddah Return Route
                    </span>
                }
                subtitle="From Heritage Sites to the Red Sea Coast"
                location="700 km | ~7.5 Hours | From SAR 1400"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?route=alula-jeddah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Return Trip
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Email for Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Route Details Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Return Journey</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Al Ula to Jeddah Airport Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A seamless transfer from your Al Ula resort or camp directly to Jeddah International Airport or city hotel.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {routeDetails.map((detail, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <detail.icon className="w-8 h-8 text-black" />
                                </div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">{detail.label}</div>
                                <div className="text-2xl font-bold text-gray-900">{detail.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Features */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-6">Return to Jeddah Comfortably</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    After exploring the wonders of Hegra, Elephant Rock, and the Old Town, enjoy a relaxing drive back to Jeddah. Our drivers are experienced with the long desert highway and will ensure you arrive rested and refreshed. We can coordinate with your resort checkout time.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="bg-primary/20 p-2 rounded-full">
                                            <Plane className="w-5 h-5 text-primary" />
                                        </div>
                                        <span>Direct to Jeddah Airport (JED)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-primary/20 p-2 rounded-full">
                                            <Car className="w-5 h-5 text-primary" />
                                        </div>
                                        <span>Full luggage capacity in SUVs</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-primary/20 p-2 rounded-full">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <span>Timely arrival for flights</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                                <h4 className="font-bold text-xl mb-4">Recommended Schedule</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <span className="font-mono text-primary">09:00 AM</span>
                                        <p className="text-sm text-gray-300">Checkout & Depart Al Ula</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="font-mono text-primary">01:00 PM</span>
                                        <p className="text-sm text-gray-300">Rest Stop (Medina Region)</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="font-mono text-primary">04:30 PM</span>
                                        <p className="text-sm text-gray-300">Arrive Jeddah North Terminal</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="font-mono text-primary">05:00 PM</span>
                                        <p className="text-sm text-gray-300">Arrive Jeddah City Center</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-emerald-700" />
                            <span className="text-sm font-semibold text-emerald-900">Return Fares</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-6">
                            Al Ula to Jeddah Pricing
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Flat rates for the 700km return journey. No hidden fees.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Car className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Camry (Sedan)</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 1400
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                3 Passengers / 2 Bags
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500 hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white hover:text-black px-4 py-1 rounded-full text-xs font-bold">
                                RECOMMENDED
                            </div>
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">GMC Yukon (SUV)</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 1800
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                6 Passengers / 5 Bags
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Hyundai Staria</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 1600
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                7 Passengers / 6 Bags
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RelatedLocations currentCity="AlUla" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the taxi ride from Al Ula to Jeddah?",
                        shortAnswer: "7 - 8 Hours",
                        detailedAnswer: "The return journey from Al Ula to Jeddah is about 700 km and typically takes 7-8 hours. We recommend starting in the morning to enjoy the daylight views.",
                        perspectives: []
                    },
                    {
                        question: "Can you drop us at Jeddah Airport (JED)?",
                        shortAnswer: "Yes, Door-to-Terminal",
                        detailedAnswer: "Absolutely. We provide direct drop-off at King Abdulaziz International Airport (JED), whether it's the New Terminal 1 for international flights or the North Terminal.",
                        perspectives: []
                    },
                    {
                        question: "What is the price for Al Ula to Jeddah taxi?",
                        shortAnswer: "From SAR 1400",
                        detailedAnswer: "The price is the same as the outbound trip: SAR 1400 for a sedan and SAR 1800 for a GMC Yukon. This is a fixed rate with no hidden charges.",
                        perspectives: []
                    },
                    {
                        question: "Is the road from Al Ula to Jeddah safe?",
                        shortAnswer: "Yes, Highway Route",
                        detailedAnswer: "Yes, the route follows well-maintained highways. Our drivers are experienced in long-distance travel and ensure a safe, smooth journey.",
                        perspectives: []
                    }
                ]}
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Return to Jeddah
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Secure your return transport in advance for a worry-free ending to your Al Ula trip.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?route=alula-jeddah">
                            <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Return (SAR 1400+)
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
