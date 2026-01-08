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
    title: 'Jeddah to Al Ula Taxi | 700km Heritage Route - Fixed Price',
    description: 'Taxi from Jeddah to Al Ula operates 24/7. 700km scenic journey to Hegra in 7-8 hours. Fixed rate from SAR 1400. Luxury SUVs for the long drive.',
    keywords: ['Jeddah to Al Ula taxi', 'taxi Jeddah airport to Al Ula', 'Al Ula transport', 'Jeddah Alula price', 'Hegra taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-alula/',
    },
    openGraph: {
        title: 'Jeddah to Al Ula Taxi | 700km Route - Fixed Price SAR 1400',
        description: 'Comfortable private transfer from Jeddah to Al Ula. 700km journey. Fixed rates starting SAR 1400. Visit the ancient city of Hegra.',
        url: 'https://taxiserviceksa.com/routes/jeddah-alula/',
        type: 'website',
    },
};

export default function JeddahAlulaRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '700 km', icon: Navigation },
        { label: 'Travel Time', value: '7-8 hours', icon: Clock },
        { label: 'Starting Price', value: 'SAR 1400', icon: DollarSign },
        { label: 'Terrain', value: 'Desert & Mountain', icon: Mountain },
    ];



    const routeImages = [
        '/alula-hegra.webp',
        '/hero-slide-3.webp',
        '/jeddah-airport.webp',
    ];



    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Jeddah to Al Ula",
        "fromLocation": {
            "@type": "Place",
            "name": "Jeddah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jeddah",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Place",
            "name": "Al Ula",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Al Ula",
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
                h1Text="Online Taxi from Jeddah to Al Ula"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Jeddah → Al Ula Route
                    </span>
                }
                subtitle="Journey to Hegra & Elephant Rock"
                location="700 km | ~7.5 Hours | From SAR 1400"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?route=jeddah-alula">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book This Route
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
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Long Distance</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Jeddah to Al Ula Heritage Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A comfortable, long-distance journey from the Red Sea coast to the ancient deserts of Al Ula.
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
                                <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Drive to Al Ula?</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    The drive to Al Ula is an adventure in itself. As you leave the coastal humidity of Jeddah, you'll ascend into the mountains and then across the vast, beautiful Saudi desert. Arrive directly at your resort or camp in Al Ula without the hassle of airport transfers or car rentals.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="bg-primary/20 p-2 rounded-full">
                                            <Mountain className="w-5 h-5 text-primary" />
                                        </div>
                                        <span>See the changing landscapes</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-primary/20 p-2 rounded-full">
                                            <Car className="w-5 h-5 text-primary" />
                                        </div>
                                        <span>Maximum comfort in GMC Yukon</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-primary/20 p-2 rounded-full">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <span>Flexible departure times</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                                <h4 className="font-bold text-xl mb-4">Recommended Schedule</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <span className="font-mono text-primary">08:00 AM</span>
                                        <p className="text-sm text-gray-300">Depart Jeddah to avoid rush hour</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="font-mono text-primary">12:00 PM</span>
                                        <p className="text-sm text-gray-300">Lunch & Prayer Stop (Halfway)</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="font-mono text-primary">03:30 PM</span>
                                        <p className="text-sm text-gray-300">Arrive in Al Ula for Check-in</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="font-mono text-primary">05:00 PM</span>
                                        <p className="text-sm text-gray-300">Sunset at Elephant Rock</p>
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
                            <span className="text-sm font-semibold text-emerald-900">Long Distance Fares</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-6">
                            Jeddah to Al Ula Pricing
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Flat rates for the 700km journey. Fuel and driver included.
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
                                MOST COMFORTABLE
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
                <RelatedLocations currentCity="Jeddah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the taxi ride from Jeddah to Al Ula?",
                        shortAnswer: "7 - 8 Hours",
                        detailedAnswer: "The journey from Jeddah to Al Ula is approximately 700 km and takes about 7 to 8 hours by car. The route passes through scenic desert landscapes and small towns.",
                        perspectives: []
                    },
                    {
                        question: "What is the price of a taxi from Jeddah to Al Ula?",
                        shortAnswer: "From SAR 1400",
                        detailedAnswer: "Fixed rates start from SAR 1400 for a sedan and SAR 1800 for a luxury GMC Yukon SUV. This price includes fuel, driver service, and taxes.",
                        perspectives: []
                    },
                    {
                        question: "Is it better to fly or drive to Al Ula?",
                        shortAnswer: "Drive = Scenic",
                        detailedAnswer: "Flying is faster (1 hour flight) but flights can be infrequent. Driving offers flexibility, door-to-door service, and the chance to see the changing Saudi landscape. It's often more economical for groups.",
                        perspectives: []
                    },
                    {
                        question: "Are there rest stops on the way to Al Ula?",
                        shortAnswer: "Yes, Many Stops",
                        detailedAnswer: "Yes, there are several gas stations and rest areas along the highway (Route 15 & Route 328) where you can stop for food, prayer, and restrooms.",
                        perspectives: []
                    }
                ]}
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Experience Al Ula
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Don't let flight schedules dictate your adventure. Book your private ride to Al Ula today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?route=jeddah-alula">
                            <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Now (SAR 1400+)
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
