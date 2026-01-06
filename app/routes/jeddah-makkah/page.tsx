import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Plane, ArrowRight, Train, Navigation, Building2 } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RecentTrips from '@/components/RecentTrips';

export const metadata: Metadata = {
    title: 'Best Jeddah to Makkah VIP Transfer | Private Taxi Alternative',
    description: 'Pre-book your Jeddah to Makkah taxi from UK, USA & Canada. 60-90 min transfer from King Abdulaziz Airport. Fixed rate SAR 250. 24/7 Service.',
    keywords: ['Jeddah to Makkah taxi', 'Jeddah Airport to Makkah', 'taxi price Jeddah Makkah', 'King Abdulaziz Airport Makkah transfer', 'Haramain train alternative', 'makkah to jeddah taxi service', 'jeddah to makkah taxi fare 7 seater', 'airport pick and drop', 'how much is taxi from jeddah to makkah', 'taxi jeddah to makkah from uk', 'jeddah airport transfer usa', 'prebook taxi jeddah'],
    alternates: {
        canonical: 'https://transferksa.com/routes/jeddah-makkah/',
    },
    openGraph: {
        title: 'Jeddah to Makkah VIP Transfer | Private Taxi Alternative',
        description: 'Pre-book your Jeddah to Makkah taxi from UK, USA & Canada. 60-90 min transfer from King Abdulaziz Airport. Fixed rate SAR 250. 24/7 Service.',
        url: 'https://transferksa.com/routes/jeddah-makkah/',
        type: 'website',
    },
};

export default function JeddahMakkahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '80-95 km', icon: Navigation },
        { label: 'Travel Time', value: '60-90 minutes', icon: Clock },
        { label: 'Starting Price', value: 'SAR 250', icon: DollarSign },
        { label: 'Availability', value: '24/7 Service', icon: CheckCircle2 },
    ];



    const routeImages = [
        '/makkah-kaaba-night.webp',
        '/jeddah-corniche-sunset.webp',
        '/hero-slide-3.webp',
    ];



    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Jeddah to Makkah",
        "fromLocation": {
            "@type": "Place",
            "name": "King Abdulaziz International Airport",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jeddah",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Place",
            "name": "Makkah",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Makkah",
                "addressCountry": "SA"
            }
        },
        "distance": "80 km",

    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Script
                id="speakable-schema-jeddah-makkah"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Speakable",
                        "cssSelector": [".faq-answer"]
                    })
                }}
            />

            {/* Hero Section */}
            <Hero
                images={routeImages}
                h1Text="Best Jeddah to Makkah VIP Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Jeddah → Makkah Route
                    </span>
                }
                subtitle="King Abdulaziz Airport to Makkah Hotels"
                location="60-90 Minutes | Fixed Rate SAR 200+"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=jeddah-makkah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book This Route
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Email for Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Strategic Internal Links Hub */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Route Destinations:</span>
                            <Link href="/locations/makkah/" className="text-gray-900 hover:text-primary font-semibold flex items-center gap-1">
                                <MapPin className="w-4 h-4" /> Makkah Services
                            </Link>
                            <Link href="/locations/jeddah/" className="text-gray-900 hover:text-primary font-semibold flex items-center gap-1">
                                <MapPin className="w-4 h-4" /> Jeddah Services
                            </Link>
                            <Link href="/routes/makkah-madinah/" className="text-gray-900 hover:text-primary font-semibold flex items-center gap-1">
                                <Navigation className="w-4 h-4" /> Makkah to Madinah
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center md:justify-end gap-4 text-sm">
                            <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Recommended for this Route:</span>
                            <Link href="/fleet/gmc-yukon/" className="text-gray-900 hover:text-primary font-semibold flex items-center gap-1">
                                <Car className="w-4 h-4" /> GMC Yukon (Luxury)
                            </Link>
                            <Link href="/fleet/toyota-hiace/" className="text-gray-900 hover:text-primary font-semibold flex items-center gap-1">
                                <Car className="w-4 h-4" /> Toyota HiAce (Groups)
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Route Details Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Route Information</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Best Jeddah Airport to Makkah VIP Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our <strong>Best Jeddah to Makkah VIP transfer</strong> service provides a direct, fixed-price transfer for international Umrah pilgrims from <strong>all countries worldwide</strong> (including UK, USA, Europe, & Asia). We pick up 24/7 from <strong>King Abdulaziz International Airport</strong> (KAIA Terminal 1 & North Terminal) and drive you via the Meeqat to your <strong>Makkah hotel</strong> or the Clock Tower in just 60-90 minutes.
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

                    {/* Video Guide - Entity Signal */}
                    <div className="mb-16">
                        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="relative aspect-video">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/QjAa-OCAT2o?rel=0"
                                    title="Jeddah Airport to Makkah Taxi Transfer"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-6 bg-gray-900 text-white border-t border-gray-800">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                    <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded font-bold uppercase">Watch</span>
                                    The Journey: Jeddah Airport to Makkah
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    See exactly what your arrival experience looks like with VIP Transfer KSA. From the KAIA Arrivals hall to the Makkah Clock Tower, we handle every step of your Umrah transfer.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Train vs Taxi Comparison */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
                        <div className="flex items-center gap-3 mb-6">
                            <Train className="w-8 h-8 text-white" />
                            <h3 className="text-2xl font-bold">Haramain Train vs Private Taxi</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">Haramain High Speed Railway</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Ticket: SAR 35-60 (economy/business)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Travel time: 35 minutes (station to station)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold mr-2">⚠</span>
                                        <span>Requires taxi to/from stations (+SAR 40-80)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold mr-2">⚠</span>
                                        <span>Total journey time: 90-120 minutes</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-4 text-white">Private Taxi (Door-to-Door)</h4>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Fixed rate: SAR 250-500 (vehicle type)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Direct: Airport → Hotel (no transfers)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Total journey time: 60-90 minutes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Best for families with luggage (3+ people)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>Fully TGA Licensed Vehicles</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-white/10 rounded-xl border border-white/20">
                            <p className="text-sm text-gray-300">
                                <strong className="text-white">Verdict:</strong> For families (3+ passengers) with luggage, private taxi is 40% more time-efficient and cost-effective when total journey time is considered. Solo travelers with light luggage benefit from train pricing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Direct Hotel Drop-offs - Reverse Silo Interlinking */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-blue-100 text-blue-800 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Clock Tower Specialists</span>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Direct Makkah Hotel Drop-offs</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We provide specialized drop-off service to the complicated <strong className="text-gray-900">Abraj Al Bait (Clock Tower)</strong> tunnels. Don't get lost—our drivers know the exact entrance for:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link href="/jeddah-to-swissotel-makkah/" className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all flex items-start gap-4">
                            <div className="bg-emerald-100 p-3 rounded-xl group-hover:bg-emerald-600 transition-colors">
                                <Building2 className="w-6 h-6 text-emerald-700 group-hover:text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">Swissotel Makkah</h3>
                                <p className="text-sm text-gray-500 mt-1">Direct Tunnel Access</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                        </Link>

                        <Link href="/jeddah-to-fairmont-makkah/" className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-amber-500 hover:shadow-lg transition-all flex items-start gap-4">
                            <div className="bg-amber-100 p-3 rounded-xl group-hover:bg-amber-600 transition-colors">
                                <Building2 className="w-6 h-6 text-amber-700 group-hover:text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 group-hover:text-amber-700 transition-colors">Fairmont Clock Tower</h3>
                                <p className="text-sm text-gray-500 mt-1">Royal Entrance Drop-off</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                        </Link>

                        <Link href="/jeddah-to-pullman-makkah/" className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 transition-colors">
                                <Building2 className="w-6 h-6 text-blue-700 group-hover:text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">Pullman ZamZam</h3>
                                <p className="text-sm text-gray-500 mt-1">Abraj Al Bait Complex</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Traveler Essentials - Entity Injection */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                        Jeddah to Makkah Essentials
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Terminal Pickups</h4>
                            <p className="text-sm text-gray-600">
                                We cover all KAIA terminals: <strong className="text-gray-900">Terminal 1 (New Airport)</strong> for Saudi/Flynas, and <strong className="text-gray-900">North Terminal</strong> for international airlines.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Meeqat & Ihram</h4>
                            <p className="text-sm text-gray-600">
                                Most pilgrims enter Ihram on the plane. For residents or second Umrah, we can stop at <strong className="text-gray-900">Masjid Aisha (Tan'eem)</strong> or <strong className="text-gray-900">Masjid Al-Ji'ranah</strong> upon request.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Group Travel</h4>
                            <p className="text-sm text-gray-600">
                                Our <strong>GMC Yukon (7 Seater)</strong> and <strong>Toyota Hiace (10 Seater)</strong> are perfect for families with multiple large suitcases (check-in size).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Local SEO Hierarchy: Neighborhood Coverage */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Coverage Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-primary" /> Jeddah Pickup Zones
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                            We pick you up from King Abdulaziz International Airport (KAIA) or any district in Jeddah, ensuring a direct route to Makkah.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['KAIA (Airport)', 'Al Hamra', 'Al Shati', 'Al Rawdah', 'Al Bawadi', 'Obhur', 'Al Balad', 'Al Safa', 'Prince Majed Rd', 'Al Naeem'].map((zone) => (
                                <span key={zone} className="text-xs bg-gray-50 border border-gray-200 px-2 py-1 rounded-md text-gray-700">
                                    {zone}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-emerald-600" /> Makkah Drop-off Districts
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                            Arriving in Makkah? We drop you off exactly at your hotel entrance, whether in the Clock Tower or surrounding neighborhoods.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['Abraj Al Bait (Clock Tower)', 'Al Markaziyah (Central)', 'Aziziyah', 'Jabal Omar', 'Al Naseem', 'Kudai', 'Ajyad', 'Misfalah', 'Al Awali'].map((zone) => (
                                <span key={zone} className="text-xs bg-gray-50 border border-gray-200 px-2 py-1 rounded-md text-gray-700">
                                    {zone}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-emerald-700" />
                            <span className="text-sm font-semibold text-emerald-900">Route Fares</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-6">
                            Jeddah to Makkah Pricing
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Flat rates from Jeddah Airport to your Makkah hotel.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Car className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Camry (Sedan)</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 250
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                4 Passengers / 2 Bags
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500 hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white hover:text-black px-4 py-1 rounded-full text-xs font-bold">
                                BEST SELLER
                            </div>
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">GMC Yukon (SUV)</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 450
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                7 Passengers / 7 Bags
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">HiAce Bus</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 350
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Small Groups (10-12 pax)
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RecentTrips />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <RelatedLocations currentCity="Jeddah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How much does a taxi cost from Jeddah Airport to Makkah?",
                        shortAnswer: "From SAR 200",
                        detailedAnswer: "Taxi rates from King Abdulaziz International Airport (Jeddah) to Makkah start from SAR 200 for a sedan (Toyota Camry). A 7 seater (GMC/Starex) starts from SAR 350. Van rates (Toyota Hiace) start from SAR 450. Prices are fixed with no surge charges.",
                        perspectives: []
                    },
                    {
                        question: "How long is the taxi ride from Jeddah to Makkah?",
                        shortAnswer: "60 - 90 Minutes",
                        detailedAnswer: "The taxi ride from Jeddah to Makkah takes about 60 to 90 minutes. Distance is 80-95 kilometers via the Haramain Highway. Early mornings are fastest, but traffic can increase during Ramadan and Hajj.",
                        perspectives: []
                    },
                    {
                        question: "Is it better to take a taxi or the Haramain Train to Makkah?",
                        shortAnswer: "Taxi = Door-to-Door",
                        detailedAnswer: "A taxi provides direct door-to-door service from the airport to your hotel. The Haramain Train is faster (35 mins) but requires two extra taxi rides (Airport to Station, and Makkah Station to Hotel). For families with luggage, a direct taxi is usually faster overall.",
                        perspectives: []
                    },
                    {
                        question: "Do you offer meet-and-greet at Jeddah Airport?",
                        shortAnswer: "Yes, Included",
                        detailedAnswer: "Yes, meet-and-greet is included. Our driver waits at the arrivals hall with a name sign. We track your flight to ensure we are there when you land. We also help with luggage.",
                        perspectives: []
                    },
                    {
                        question: "Can I get a taxi from Jeddah to Makkah late at night?",
                        shortAnswer: "24/7 Service",
                        detailedAnswer: "Yes, our taxi service operates 24/7. Late-night pickups (10 PM - 6 AM) cost the same fixed rate. We recommend booking in advance for late arrivals.",
                        perspectives: []
                    },
                    {
                        question: "Can I book a Jeddah taxi from the UK or USA?",
                        shortAnswer: "Yes, Pre-book Online",
                        detailedAnswer: "Yes, we specialize in serving international pilgrims. You can pre-book your Jeddah to Makkah taxi from the UK, USA, Canada, or <strong>any country in the world</strong>. We track your flight and guarantee your driver will be waiting.",
                        perspectives: []
                    }
                ]}
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Jeddah to Makkah Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Fixed rates, meet-and-greet service, and direct door-to-door transport from King Abdulaziz Airport to your Makkah hotel.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/?route=jeddah-makkah">
                            <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Now (SAR 250+)
                            </Button>
                        </Link>
                        <a href="mailto:info@transferksa.com">
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
