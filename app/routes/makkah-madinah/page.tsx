import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Coffee, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Makkah to Madinah Taxi | 450km Umrah Route - Fixed Price SAR 450',
    description: 'Taxi from Makkah to Madinah operates 24/7. 450km pilgrimage route in 4-5 hours. Fixed rate SAR 450. Rest stops included. Complete your Umrah journey.',
    keywords: ['Makkah to Madinah taxi', 'Umrah taxi Makkah Madinah', 'taxi price Makkah Madinah', 'Makkah Madinah distance', 'pilgrimage transport', 'taxi fare from makkah to madinah', 'gmc from makkah to madinah', 'how far is badr from makkah', 'madinah to makkah taxi time'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/makkah-madinah/',
    },
    openGraph: {
        title: 'Makkah to Madinah Taxi | 450km Umrah Route - Fixed Price',
        description: 'Taxi from Makkah to Madinah operates 24/7. 450km pilgrimage route in 4-5 hours. Fixed rate SAR 450. Complete your Umrah journey.',
        url: 'https://taxiserviceksa.com/routes/makkah-madinah/',
        type: 'website',
    },
};

export default function MakkahMadinahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '450 km', icon: Navigation },
        { label: 'Travel Time', value: '4-5 hours', icon: Clock },
        { label: 'Starting Price', value: 'SAR 450', icon: DollarSign },
        { label: 'Rest Stops', value: '2-3 breaks', icon: Coffee },
    ];



    const restStops = [
        {
            name: 'Badr Rest Area',
            distance: '150 km from Makkah',
            facilities: 'Restrooms, mosque, refreshments',
            duration: '15-20 minutes'
        },
        {
            name: 'Rabigh Service Station',
            distance: '80 km from Makkah',
            facilities: 'Fuel, food court, prayer area',
            duration: '10-15 minutes'
        },
        {
            name: 'Al-Juhfah Historical Marker',
            distance: '200 km from Makkah',
            facilities: 'Historical site, restrooms',
            duration: '10 minutes'
        },
    ];

    const routeImages = [
        '/madinah-prophets-mosque.webp',
        '/makkah-kaaba-night.webp',
        '/hero-slide-3.webp',
    ];



    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Makkah to Madinah",
        "fromLocation": {
            "@type": "Place",
            "name": "Makkah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Makkah",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Place",
            "name": "Madinah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madinah",
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


            {/* Hero Section */}
            <Hero
                images={routeImages}
                h1Text="Taxi from Makkah to Madinah: 450km Umrah Pilgrimage Route"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Makkah → Madinah Route
                    </span>
                }
                subtitle="Complete Your Umrah Journey"
                location="4-5 Hours | Fixed Rate SAR 450+"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?route=makkah-madinah">
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Makkah to Madinah Pilgrimage Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The sacred journey between the two holy cities. Complete your Umrah with comfortable, direct transport from Makkah hotels to Madinah accommodations.
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

                    {/* Journey Timeline */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Clock className="w-8 h-8 text-white" />
                            Typical Journey Timeline
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black hover:text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">1</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Pickup from Makkah Hotel (6:00 AM)</div>
                                    <p className="text-gray-300 text-sm">Driver arrives after Fajr prayer. Luggage and Zamzam water loading.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black hover:text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">2</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">First Rest Stop - Rabigh (7:00 AM)</div>
                                    <p className="text-gray-300 text-sm">80 km from Makkah. Restroom break, refreshments, fuel if needed.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black hover:text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">3</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Second Rest Stop - Badr (8:30 AM)</div>
                                    <p className="text-gray-300 text-sm">150 km from Makkah. Historical site, mosque for prayers, refreshments.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black hover:text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">4</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Arrival in Madinah (10:30 AM)</div>
                                    <p className="text-gray-300 text-sm">Drop-off at hotel. Time to rest before Dhuhr prayer at Prophet's Mosque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rest Stops Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Rest Stops Along the Route</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comfortable breaks for prayers, refreshments, and restrooms during your journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {restStops.map((stop, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <Coffee className="w-8 h-8 text-primary" />
                                    <h3 className="text-xl font-bold text-gray-900">{stop.name}</h3>
                                </div>
                                <div className="space-y-2 text-gray-600">
                                    <p className="flex items-center gap-2">
                                        <Navigation className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm">{stop.distance}</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm">{stop.duration}</span>
                                    </p>
                                    <p className="text-sm mt-3">{stop.facilities}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-emerald-700" />
                            <span className="text-sm font-semibold text-emerald-900">Pilgrimage Fares</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-6">
                            Makkah to Madinah Pricing
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Flat rates including fuel, driver, and rest stops.
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



            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-12">
                <RelatedLocations currentCity="Makkah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How much does a taxi cost from Makkah to Madinah?",
                        shortAnswer: "From SAR 450",
                        detailedAnswer: "Taxi rates from Makkah to Madinah start from SAR 450 for a sedan (Toyota Camry). SUV rates (GMC Yukon) start from SAR 850. Van rates (Toyota Hiace) start from SAR 650. Prices are fixed for the 450 km journey and include rest stops.",
                        perspectives: []
                    },
                    {
                        question: "How long does it take to travel from Makkah to Madinah by taxi?",
                        shortAnswer: "4 - 5 Hours",
                        detailedAnswer: "Taxi travel time from Makkah to Madinah is 4-5 hours depending on traffic and rest stops. Distance is 450 kilometers via Route 15 (Madinah Road). Early morning departures (5-7 AM) avoid peak traffic.",
                        perspectives: []
                    },
                    {
                        question: "What is the best time to travel from Makkah to Madinah?",
                        shortAnswer: "Early Morning (Fajr)",
                        detailedAnswer: "The best departure time is early morning (5-7 AM) after Fajr prayer. This avoids midday heat and Makkah traffic. Drivers recommend completing the journey before Dhuhr prayer.",
                        perspectives: []
                    },
                    {
                        question: "Are rest stops included in the Makkah to Madinah taxi journey?",
                        shortAnswer: "Yes, 2-3 Stops",
                        detailedAnswer: "Rest stops are included in the fixed rate. Standard stops include Badr rest area and Rabigh service station. Each stop is 15-20 minutes for restrooms, prayers, and refreshments.",
                        perspectives: []
                    },
                    {
                        question: "Can I book a GMC from Makkah to Madinah?",
                        shortAnswer: "Yes, Yukon XL Available",
                        detailedAnswer: "Yes, we offer GMC Yukon XL and other large SUVs for the Makkah to Madinah route. These are ideal for families carrying Zamzam water and extra luggage.",
                        perspectives: []
                    }
                ]}
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Makkah to Madinah Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Complete your Umrah journey with comfortable, direct transport. Fixed rates, rest stops included, and experienced drivers who understand pilgrimage schedules.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?route=makkah-madinah">
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
