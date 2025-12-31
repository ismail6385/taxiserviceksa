
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Train, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';


export const metadata: Metadata = {
    title: 'Madinah to Jeddah Taxi | Airport Transfer 450km - Fixed Price',
    description: 'Taxi from Madinah to Jeddah Airport (JED). 4-5 hour comfortable journey. Fixed rates from SAR 450. Door-to-door service 24/7. Book your ride now.',
    keywords: ['Madinah to Jeddah taxi', 'Madinah to Jeddah Airport', 'taxi fare Madinah Jeddah', 'Prince Mohammad Bin Abdulaziz to King Abdulaziz Airport', 'Umrah return taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/madinah-jeddah/',
    },
    openGraph: {
        title: 'Madinah to Jeddah Taxi | Airport Transfer 450km - Fixed Price',
        description: 'Taxi from Madinah to Jeddah Airport (JED). 4-5 hour comfortable journey. Fixed rates from SAR 450. Book your ride now.',
        url: 'https://taxiserviceksa.com/routes/madinah-jeddah/',
        type: 'website',
    },
};

export default function MadinahJeddahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '450 km', icon: Navigation },
        { label: 'Travel Time', value: '4-5 Hours', icon: Clock },
        { label: 'Starting Price', value: 'SAR 450', icon: DollarSign },
        { label: 'Availability', value: '24/7 Service', icon: CheckCircle2 },
    ];



    const routeImages = [
        '/madinah-prophets-mosque.webp',
        '/jeddah-corniche-sunset.webp',
        '/hero-slide-3.webp',
    ];



    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Madinah to Jeddah",
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
            "@type": "Place",
            "name": "King Abdulaziz International Airport",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jeddah",
                "addressCountry": "SA"
            }
        },
        "distance": "450 km",

    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />
            <Script
                id="route-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            {/* Hero Section */}
            <Hero
                images={routeImages}
                h1Text="Online Taxi from Madinah to Jeddah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Madinah → Jeddah Route
                    </span>
                }
                subtitle="Hotel Pickup to Jeddah Airport Drop-off"
                location="4-5 Hours | Fixed Rate SAR 450+"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?route=madinah-jeddah">
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Madinah to Jeddah Airport Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A comfortable return journey from the Prophet's City to Jeddah. Perfect for pilgrims catching their return flights or visiting Jeddah.
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

                    {/* Train vs Taxi Comparison */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
                        <div className="flex items-center gap-3 mb-6">
                            <Train className="w-8 h-8 text-white" />
                            <h3 className="text-2xl font-bold">Haramain Train vs Private Taxi (Madinah-Jeddah)</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">Haramain High Speed Railway</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Ticket: SAR 125-250 per person</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Travel time: ~2 hours (station to station)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold mr-2">⚠</span>
                                        <span>Fixed schedule (runs approx every hour)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold mr-2">⚠</span>
                                        <span>Luggage limits apply</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">Private Taxi (Door-to-Door)</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Fixed rate: SAR 450 (per vehicle)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Total flexibility (depart anytime)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Unlimited luggage (SUV/Van)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Cheaper for groups of 4+</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-white/10 rounded-xl border border-white/20">
                            <p className="text-sm text-gray-300">
                                <strong className="text-white">Our Advice:</strong> For a group of 3 or more people, a taxi is often cheaper than buying individual train tickets, plus you get the convenience of being picked up from your hotel and dropped off exactly at your terminal or hotel.
                            </p>
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
                            <span className="text-sm font-semibold text-emerald-900">Return Route Fares</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-6">
                            Madinah to Jeddah Pricing
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Flat rates including rest stops.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Car className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Camry (Sedan)</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 450
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                4 Passengers / 2 Bags
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500 hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white hover:text-black px-4 py-1 rounded-full text-xs font-bold">
                                MOST POPULAR
                            </div>
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">GMC Yukon (SUV)</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 850
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
                                <span className="text-2xl text-gray-500">SAR</span> 650
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Small Groups (10-12 pax)
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RelatedLocations currentCity="Madinah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the taxi ride from Madinah to Jeddah?",
                        shortAnswer: "4 - 5 Hours",
                        detailedAnswer: "The journey takes approximately 4 to 5 hours depending on traffic and the number of rest stops you wish to take. The distance is about 450 kilometers along the fast and modern highway.",
                        perspectives: []
                    },
                    {
                        question: "How much is a taxi from Madinah to Jeddah Airport?",
                        shortAnswer: "From SAR 450",
                        detailedAnswer: "Our fixed rates start from SAR 450 for a standard sedan. SUVs are available from SAR 850, and large vans for groups start from SAR 650. These are fixed prices with no hidden fees.",
                        perspectives: []
                    },
                    {
                        question: "Can we stop for breaks during the recurring journey?",
                        shortAnswer: "Yes, Flexible",
                        detailedAnswer: "Yes, absolutely. Since it is a longer trip (450 km), we are happy to stop at designated rest areas for food, prayer, or restrooms. Common stops include SASCO rest houses.",
                        perspectives: []
                    },
                    {
                        question: "Is it better to take a taxi or the train from Madinah to Jeddah?",
                        shortAnswer: "Taxi = Direct",
                        detailedAnswer: "The Haramain High Speed Train is faster (approx 2 hours) but requires transport to/from stations and follows a strict schedule. A private taxi offers door-to-door convenience, flexibility with departure times, and is often more economical for groups.",
                        perspectives: []
                    },
                    {
                        question: "Do you pick up from hotels in Madinah?",
                        shortAnswer: "Yes, Door-to-Door",
                        detailedAnswer: "Yes, we provide door-to-door service. We will pick you up directly from your hotel lobby in Madinah near the Prophet's Mosque or any other location in the city.",
                        perspectives: []
                    },
                    {
                        question: "Is the road between Madinah and Jeddah safe?",
                        shortAnswer: "Yes, Modern Hwy",
                        detailedAnswer: "Yes, the highway connecting the two holy cities is a modern, well-maintained multi-lane expressway. Our drivers are experienced professionals who drive this route daily.",
                        perspectives: []
                    }
                ]}
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Madinah to Jeddah Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Reliable, comfortable, and fixed-price transfers for your return journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?route=madinah-jeddah">
                            <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Now (SAR 450+)
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
