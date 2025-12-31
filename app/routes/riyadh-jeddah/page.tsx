
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Train, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Riyadh to Jeddah Taxi | Long Distance 950km Transfer',
    description: 'Private taxi from Riyadh to Jeddah. Comfortable long-distance travel (950 km). Professional drivers, luxury cars, door-to-door service. Book your intercity ride.',
    keywords: ['Riyadh to Jeddah taxi', 'Riyadh to Jeddah distance', 'taxi fare Riyadh Jeddah', 'intercity taxi Saudi Arabia', 'long distance taxi KSA', 'private taxi service in riyadh', '7 seater rent a car riyadh', 'toyota hiace for rent in riyadh', 'cab service in riyadh', 'riyadh to makkah car service', 'luxury chauffeur service'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/riyadh-jeddah/',
    },
    openGraph: {
        title: 'Taxi From Riyadh to Jeddah | 950km Private Transfer',
        description: 'Book a comfortable private taxi from Riyadh to Jeddah. Door-to-door service for the 10-hour drive. Sleep while we drive.',
        url: 'https://taxiserviceksa.com/routes/riyadh-jeddah/',
        type: 'website',
    },
};

export default function RiyadhJeddahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '950 km', icon: Navigation },
        { label: 'Travel Time', value: '10-12 Hours', icon: Clock },
        { label: 'Starting Price', value: 'SAR 1800', icon: DollarSign },
        { label: 'Availability', value: 'Advance Booking', icon: CheckCircle2 },
    ];



    const routeImages = [
        '/jeddah-corniche-sunset.webp', // Need a Riyadh image ideally, but will reuse existing for now or generic highway
        '/makkah-kaaba-night.webp',
        '/hero-slide-3.webp',
    ];



    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Riyadh to Jeddah",
        "fromLocation": {
            "@type": "Place",
            "name": "Riyadh",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Riyadh",
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
        "distance": "950 km",

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
                h1Text="Online Taxi from Riyadh to Jeddah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Riyadh → Jeddah Route
                    </span>
                }
                subtitle="Riyadh City/Airport to Jeddah"
                location="10-12 Hours | Starting SAR 1800"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?route=riyadh-jeddah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book This Route
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
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
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Route Information</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Riyadh to Jeddah Intercity Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A premium long-distance chauffeur service connecting the capital, Riyadh, to the gateway of the holy cities, Jeddah.
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

                    {/* Flight vs Taxi Comparison */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
                        <div className="flex items-center gap-3 mb-6">
                            <Plane className="w-8 h-8 text-white" />
                            <h3 className="text-2xl font-bold">Flight vs Private Taxi (Riyadh-Jeddah)</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">Domestic Flight</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Flight time: 1.5 hours</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Cost: ~SAR 300-600 per person</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold mr-2">⚠</span>
                                        <span>Strict luggage limits</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">Private Taxi (Road Trip)</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Door-to-door convenience</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Unlimited luggage (SUV/Van)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold mr-2">⚠</span>
                                        <span>Travel time: 10-12 hours</span>
                                    </li>
                                </ul>
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
                            Riyadh to Jeddah Pricing
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Flat rates for the 950km cross-country journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Car className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Camry (Sedan)</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 1800
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                4 Passengers / 2 Bags
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
                                <span className="text-2xl text-gray-500">SAR</span> 2500
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                7 Passengers / 5 Bags
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">HiAce Bus</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 3000
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Large Groups (10-12 pax)
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            {/* Micro-Semantic FAQ Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RelatedLocations currentCity="Riyadh" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the drive from Riyadh to Jeddah?",
                        shortAnswer: "10-12 Hours",
                        detailedAnswer: "The 950km journey across the Peninsula is a full day trip. We recommend starting at 5:00 AM to arrive by late afternoon. We plan stops every 3-4 hours at major service stations (SASCO) for fuel, prayers, and food.",
                        perspectives: [
                            { role: "Driver", icon: "Clock", insight: "Speed limit is 140km/h on most sections. We adhere strictly to safety limits." },
                            { role: "Safety", icon: "Shield", insight: "Night driving is safe but day driving is preferred for better visibility." }
                        ]
                    },
                    {
                        question: "Is flying better than taking a taxi?",
                        shortAnswer: "For Speed: Yes",
                        detailedAnswer: "Flying is much faster (1.5 hours flight). Taxi is recommended ONLY if you have: 1) Excess luggage, 2) Pets (not allowed on Saudia cabin), or 3) A large family where 6 tickets cost more than 1 van rental.",
                        perspectives: [
                            { role: "Budget Traveler", icon: "DollarSign", insight: "For a family of 7, one GMC rental is half the price of 7 flex-flight tickets." }
                        ]
                    },
                    {
                        question: "What cars do you use for this long trip?",
                        shortAnswer: "SUVs Recommended",
                        detailedAnswer: "We strongly recommend GMC Yukon or Chevrolet Suburban. Sedans (Camry) are available but sitting for 10 hours in a sedan is tiring. SUVs allow leg stretching and reclining.",
                        perspectives: [
                            { role: "Passenger", icon: "Car", insight: "The extra space in the Yukon makes sleeping possible during the ride." }
                        ]
                    },
                    {
                        question: "Can we stop for sightseeing?",
                        shortAnswer: "Yes, Flexible",
                        detailedAnswer: "The route passes through desert landscapes. If you want to stop for photos or at a specific rest house, just ask the driver. It's your private charter.",
                        perspectives: [
                            { role: "Tourist", icon: "MapPin", insight: "There are some scenic dunes near Taif if you take the southern route." }
                        ]
                    }
                ]}
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Riyadh to Jeddah Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        A long journey requires a comfortable vehicle and a trusted driver. Book with Taxi Service KSA for peace of mind.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?route=riyadh-jeddah">
                            <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Now (SAR 1800+)
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
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
