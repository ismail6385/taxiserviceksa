import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Compass, Landmark, Briefcase, History, Building2 } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Hero from '@/components/Hero';

import Script from 'next/script';
import DistanceTable from '@/components/seo/DistanceTable';
import SeasonalTravelTips from '@/components/seo/SeasonalTravelTips';
import RelatedLocations from '@/components/seo/RelatedLocations';


export const metadata: Metadata = {
    title: 'VIP Private Transfer & Umrah Chauffeur Makkah | Premium Transport',
    description: 'Premium VIP private transfer service in Makkah for Umrah pilgrims. Executive chauffeur service for Makkah, Madinah, and Jeddah Airport pickups. High-end fleet for a dignified journey.',
    keywords: ['VIP Umrah transport Makkah', 'Premium private transfer Makkah', 'Makkah VIP chauffeur', 'Executive Umrah taxi', 'Jeddah to Makkah VIP transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/makkah/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/makkah/',
            'ar': 'https://taxiserviceksa.com/ar/locations/makkah/',
            'ur': 'https://taxiserviceksa.com/ur/locations/makkah/',
            'x-default': 'https://taxiserviceksa.com/locations/makkah/',
        },
    },
    openGraph: {
        title: 'VIP Private Transfer in Makkah | 24/7 Umrah Transport',
        description: 'Book premium VIP private transfers in Makkah specifically for Umrah pilgrims and families. Direct hotel to Haram transfers and Jeddah Airport pickup.',
        url: 'https://taxiserviceksa.com/locations/makkah/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/makkah-kaaba-night.webp', alt: 'VIP private transfer in Makkah' }],
    },
};

export default async function MakkahPage() {

    const services = [
        { name: 'VIP Airport Pickup', description: 'Executive pickup from KAIA Terminal 1 & North Terminal directly to your Hotel.', icon: Plane },
        { name: 'Executive Umrah Transfers', description: 'Premium intercity travel between Makkah, Madinah, and Jeddah with VIP hospitality.', icon: Landmark },
        { name: 'VIP Makkah Ziyarat', description: 'Explore historical sites (Arafat, Mina, Jabal Al-Nour) in a luxury SUV with a professional driver.', icon: Compass },
        { name: 'Full-Day Chauffeur', description: 'Dedicated private chauffeur for your entire stay in Makkah. Punctual & Professional.', icon: Briefcase },
    ];

    const features = [
        'Experienced drivers knowing Makkah routes',
        'Hotels & Haram pickup/drop-off service',
        'Spacious vehicles for pilgrims & luggage',
        '24/7 availability for late prayers',
        'Fixed fares with no hidden charges',
        'English & Arabic speaking staff',
    ];

    // Makkah-specific hero images
    const makkahImages = [
        '/makkah-kaaba-night.webp',
        '/makkah-grand-mosque.webp',
        '/makkah-clock-tower.webp',
    ];

    const distanceData = [
        { destination: 'Jeddah Airport (KAIA)', distance: '95 km (59 mi)', time: '60-80 mins', route: 'Haramain Hwy' },
        { destination: 'Madinah (Prophet\'s Mosque)', distance: '450 km (280 mi)', time: '4-5 hours', route: 'Route 15' },
        { destination: 'Taif (City Center)', distance: '85 km (53 mi)', time: '60-90 mins', route: 'Al Hada Mtn' },
        { destination: 'Aziziyah (Makkah)', distance: '3-7 km (2-4 mi)', time: '10-20 mins', route: 'Tunnel Access' },
        { destination: 'Jabal Omar Hotels', distance: '1-3 km (0.6-1.8 mi)', time: '5-10 mins', route: 'King Abdulaziz Rd' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">

            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://taxiserviceksa.com/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Locations",
                                "item": "https://taxiserviceksa.com/locations/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Makkah",
                                "item": "https://taxiserviceksa.com/locations/makkah/"
                            }
                        ]
                    })
                }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": [
                            {
                                "@type": "Service",
                                "serviceType": "Umrah VIP Transfer Service",
                                "areaServed": {
                                    "@type": "City",
                                    "name": "Makkah"
                                },
                                "description": "Reliable VIP transfer service in Makkah for Umrah pilgrims. Specializing in hotel to Haram transfers and Ziyarat tours."
                            },
                            {
                                "@type": "Service",
                                "serviceType": "Airport VIP Transfer to Makkah",
                                "areaServed": [
                                    {
                                        "@type": "City",
                                        "name": "Jeddah"
                                    },
                                    {
                                        "@type": "City",
                                        "name": "Makkah"
                                    }
                                ],
                                "description": "Direct VIP airport transfer service from King Abdulaziz International Airport (Jeddah) to hotels in Makkah."
                            },
                            {
                                "@type": "Service",
                                "serviceType": "Hotel to Haram Taxi",

                                "areaServed": {
                                    "@type": "City",
                                    "name": "Makkah"
                                },
                                "description": "Quick pickup and drop-off service between hotels and Masjid al Haram for daily prayers."
                            }
                        ]
                    })
                }}
            />


            {/* Hero Section with Makkah-Focused H1 */}
            <Hero
                images={makkahImages}
                h1Text="VIP Private Transfer & Chauffeur Makkah"
                bookingFormTitle="Book Premium Umrah Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        VIP Chauffeur Service Makkah
                    </span>
                }
                subtitle="Premium Transport for Pilgrims & Families Seeking Excellence"
                location="24/7 Executive Intercity & Airport Service"
            />

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Umrah, Intercity, and Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            {/* Contextual Link Hub - Strategic Linking */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                        <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Popular Makkah Routes:</span>
                        <Link href="/routes/jeddah-makkah/" className="bg-primary/5 text-gray-900 px-4 py-2 rounded-full border border-primary/20 hover:bg-primary/10 transition-colors font-semibold">Jeddah to Makkah</Link>
                        <Link href="/routes/makkah-madinah/" className="bg-primary/5 text-gray-900 px-4 py-2 rounded-full border border-primary/20 hover:bg-primary/10 transition-colors font-semibold">Makkah to Madinah</Link>
                        <Link href="/routes/makkah-jeddah/" className="bg-primary/5 text-gray-900 px-4 py-2 rounded-full border border-primary/20 hover:bg-primary/10 transition-colors font-semibold">Makkah to Jeddah Airport</Link>
                    </div>
                </div>
            </div>

            {/* Breadcrumb Navigation */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">
                            Home
                        </Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/locations/" className="text-gray-500 hover:text-gray-900 transition-colors">
                            Locations
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-semibold">Makkah</span>
                    </nav>
                </div>
            </section>

            {/* Main Content & Services */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="bg-primary/10 text-gray-900 font-semibold tracking-wider uppercase text-sm px-4 py-2 rounded-full inline-block border border-primary/20">
                            Services in Makkah
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mt-6 mb-4">
                            Makkah VIP Transfer Services
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            From Jeddah Airport transfers to daily hotel pickups, we offer the <Link href="/" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-900 underline-offset-4 transition-all">Best Online Taxi Service in Saudi Arabia</Link>. Choose the right vehicle for your Umrah group.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-black/20 hover:shadow-xl transition-all duration-300 text-center group"
                            >
                                <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                                    <service.icon className="w-8 h-8 text-black" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Recommended Fleet for Makkah */}
                    <div className="mt-16 bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-4 text-primary">Recommended Fleet for Makkah</h3>
                                <p className="text-gray-400 mb-6">For families and large groups performing Umrah, we recommend our spacious SUVs and Vans.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Link href="/fleet/gmc-yukon/" className="flex items-center gap-2 group p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10">
                                        <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                                            <Car className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <span className="font-bold block group-hover:text-primary transition-colors">GMC Yukon</span>
                                            <span className="text-xs text-gray-500">7 Adults | 5 Large Bags</span>
                                        </div>
                                    </Link>
                                    <Link href="/fleet/toyota-hiace/" className="flex items-center gap-2 group p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10">
                                        <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                                            <Car className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <span className="font-bold block group-hover:text-primary transition-colors">Toyota HiAce</span>
                                            <span className="text-xs text-gray-500">12 Adults | 16 Large Bags</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <Link href="/fleet/">
                                <Button className="bg-primary text-white hover:bg-white hover:text-primary font-bold px-8 py-6 h-auto text-lg rounded-2xl shadow-xl shadow-primary/20 transition-all">
                                    View Full Fleet
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* Makkah Neighborhood Guides - Micro-Niche Strategy */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Local Expertise</span>
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                                Makkah Transport by Neighborhood
                            </h2>
                            <p className="text-gray-600 mt-4 text-lg">
                                Whether you are staying in the heart of the luxury district or a quiet residential pocket, we provide specialized taxi services for every corner of Makkah.
                            </p>
                        </div>
                        <Link href="/locations/" className="text-primary font-bold flex items-center gap-2 group border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
                            Explore All Locations <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {[
                            { name: 'Aziziyah', slug: 'aziziyah', desc: 'The heart of pilgrim accommodation.', icon: Building2 },
                            { name: 'Jabal Omar', slug: 'jabal-omar', desc: 'Luxury hotel district next to Haram.', icon: Star },
                            { name: 'Kudai', slug: 'kudai', desc: 'Vital transport and parking hub.', icon: MapPin },
                            { name: 'Misfalah', slug: 'misfalah', desc: 'Bustling area with many hotels.', icon: Users },
                            { name: 'Jarwal', slug: 'jarwal', desc: 'Modern area near the new expansion.', icon: Landmark },
                        ].map((district, idx) => (
                            <Link
                                key={idx}
                                href={`/locations/makkah/${district.slug}/`}
                                className="group relative bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                            >
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="relative z-10">
                                    <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                        <district.icon className="w-6 h-6 transition-transform group-hover:rotate-12" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{district.name}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors">
                                        {district.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                                        View Service Guide <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
                                <Users className="w-4 h-4 text-black" />
                                <span className="text-sm font-semibold text-gray-900">For Pilgrims & Tourists</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                                VIP Private Transfer for Umrah Pilgrims
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                                <p>
                                    Experience a <strong>dignified and premium Umrah journey</strong> with our VIP private transfer service. We provide an executive alternative to standard city transport, ensuring that your spiritual focus remains uninterrupted by logistical challenges.
                                </p>

                                <p>
                                    Our service is dedicated to <strong>high-end intercity travel and airport pickups</strong>. Whether you are arriving at King Abdulaziz International Airport or require a dedicated chauffeur for the journey to Madinah, we offer a specialized 2025 fleet designed for pilgrims and families. We prioritize international guests, providing professional, English-speaking chauffeurs and a level of hospitality that reflects the sanctity of your visit.
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Prayer Time Respect</h3>
                                        <p className="text-sm text-gray-600">Drivers understand Salah timings</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Zamzam Safe Transport</h3>
                                        <p className="text-sm text-gray-600">Secure space for holy water</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl">
                                <p className="text-sm text-gray-900 font-semibold flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    Book your taxi before entering Ihram to avoid travel delays during your pilgrimage.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl opacity-30"></div>
                                <Image
                                    src="/makkah-taxi-pilgrims.png"
                                    alt="Umrah pilgrims traveling to Masjid al-Haram in Makkah by taxi"
                                    width={700}
                                    height={600}
                                    className="relative rounded-2xl shadow-2xl w-full h-auto border-4 border-white"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Essential Makkah Logistics */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white" id="logistics-guide">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-4">Makkah Transport Guide</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Key distances and seasonal advice for your journey.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <DistanceTable origin="Makkah Haram" locations={distanceData} />
                        <SeasonalTravelTips city="Makkah" />
                    </div>
                </div>
            </section>


            {/* CTA Block 1 */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-12 shadow-2xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-black rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Phone className="w-4 h-4 text-black" />
                            <span className="text-sm font-semibold text-black">24/7 Booking Available</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-black mb-4">
                            Need a Reliable Umrah Taxi in Makkah?
                        </h2>

                        <p className="text-lg md:text-xl text-black/90 mb-8 max-w-2xl mx-auto font-medium">
                            Book safe and spacious vehicles for your family Ziyarat and Haram transfers. Professional drivers who understand your spiritual journey.
                        </p>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                            <Link href="/booking/">
                                <Button className="bg-black text-white hover:bg-black/90 font-bold px-10 py-7 text-lg rounded-2xl h-auto shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                    Book VIP Transfer Now
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <a href="mailto:info@taxiserviceksa.com">
                                <Button variant="outline" className="bg-white/20 backdrop-blur-sm text-black border-2 border-black/30 hover:bg-white/30 font-bold px-10 py-7 text-lg rounded-2xl h-auto">
                                    <Phone className="mr-2 w-5 h-5" />
                                    Email Us
                                </Button>
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center gap-6 text-black/80">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="font-semibold">Available 24/7</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="font-semibold">Trusted by Pilgrims</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="font-semibold">Licensed Drivers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Pricing Information */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-semibold text-yellow-900">Transparent Pricing</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Transparent Pricing for Makkah VIP Transfers
                        </h3>

                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            No hidden fees, no surge pricing. Fixed rates for your peace of mind during your spiritual journey.
                        </p>
                    </div>

                    {/* Pricing Image Banner */}
                    <div className="mb-12 relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-200/20 via-transparent to-yellow-200/20 rounded-3xl blur-2xl"></div>
                        <Image
                            src="/makkah-pricing.png"
                            alt="Transparent taxi pricing in Makkah with clear fare breakdown"
                            width={1200}
                            height={350}
                            className="relative rounded-3xl shadow-2xl w-full h-auto border-4 border-white"
                        />
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Plane className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Airport Transfers</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 250
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Jeddah Airport to Makkah hotels
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-primary/30 hover:border-primary hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white font-bold hover:text-black px-4 py-1 rounded-full text-xs">
                                RECOMMENDED
                            </div>
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Full-Day Chauffeur</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 600
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                12 Hours Dedicated Service
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Car className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Intercity Travel</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 400
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Makkah to Madinah or Taif
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-r-xl text-center">
                        <p className="text-sm text-gray-700">
                            <strong>Note:</strong> Prices vary based on vehicle type, distance, and travel time. Contact us for exact quotes.
                        </p>
                    </div>
                </div>
            </section>


            {/* Scraped Content: Holy Sites & Attractions */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
                            <Compass className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-semibold text-emerald-900">Spiritual Landmarks</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Holy Sites & Key Attractions
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Enrich your spiritual journey by visiting these significant historical sites in Makkah.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Site 1: Al Masjid Al Haram */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-gray-100 group">
                            <div className="h-48 bg-gray-200 relative">
                                <Image
                                    src="/makkah-grand-mosque.webp"
                                    alt="Al Masjid Al Haram"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                                    Must Visit
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Al Masjid Al Haram</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    The most sacred point in Islam, housing the Holy Kaaba. It is the focal point for every Muslim and the site of the annual Hajj pilgrimage.
                                </p>
                                <div className="flex items-center text-xs font-medium text-emerald-700">
                                    <Clock className="w-3 h-3 mr-1" /> Open 24 Hours
                                </div>
                            </div>
                        </div>

                        {/* Site 2: Jabal Al-Nour & Hira Cave */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-gray-100 group">
                            <div className="h-48 bg-gray-200 relative">
                                <Image
                                    src="/makkah-clock-tower.webp" // Using as a scenic fallback
                                    alt="Jabal Al-Nour and Hira Cave"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                                    Scenic View
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Jabal Al-Nour (Hira Cave)</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    The "Mountain of Light" housing the Hira Cave, where Prophet Muhammad (PBUH) received the first revelation of the Quran.
                                </p>
                                <div className="flex items-center text-xs font-medium text-blue-700">
                                    <MapPin className="w-3 h-3 mr-1" /> 7km from Haram
                                </div>
                            </div>
                        </div>

                        {/* Site 3: Masjid-e-Aisha */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-gray-100 group">
                            <div className="h-48 bg-gray-200 relative">
                                <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-indigo-700 flex items-center justify-center text-white/50">
                                    <Landmark className="w-16 h-16 opacity-30" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Masjid-e-Aisha (Taneem)</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Also known as Taneem Mosque, acts as a Miqat for those in Makkah intending to perform Umrah. A key starting point for pilgrims.
                                </p>
                                <div className="flex items-center text-xs font-medium text-blue-700">
                                    <MapPin className="w-3 h-3 mr-1" /> Nearest Miqat
                                </div>
                            </div>
                        </div>

                        {/* Site 4: Ain Zubaidah */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-gray-100 group">
                            <div className="h-48 bg-gray-200 relative">
                                <div className="w-full h-full bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center text-white/50">
                                    <History className="w-16 h-16 opacity-30" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Ain Zubaidah</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    An engineering marvel from the Abbasid era, this ancient aqueduct system was built to provide water to pilgrims performing Hajj.
                                </p>
                                <div className="flex items-center text-xs font-medium text-yellow-700">
                                    <History className="w-3 h-3 mr-1" /> Historical Site
                                </div>
                            </div>
                        </div>

                        {/* Site 5: Hira Cultural District */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-gray-100 group">
                            <div className="h-48 bg-gray-200 relative">
                                <div className="w-full h-full bg-gradient-to-br from-emerald-800 to-emerald-600 flex items-center justify-center text-white/50">
                                    <Star className="w-16 h-16 opacity-30" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Hira Cultural District</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    A modern landmark located at the foot of Jabal Al-Nour, featuring museums and exhibitions connecting visitors to the history of Revelation.
                                </p>
                                <div className="flex items-center text-xs font-medium text-emerald-700">
                                    <Star className="w-3 h-3 mr-1" /> New Attraction
                                </div>
                            </div>
                        </div>

                        {/* Site 6: Kiswa Factory */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-gray-100 group">
                            <div className="h-48 bg-gray-200 relative">
                                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-white/50">
                                    <Briefcase className="w-16 h-16 opacity-30" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">King Abdulaziz Kiswa Complex</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Witness the intricate craftsmanship and gold embroidery used to create the Kiswa, the black silk covering of the Holy Kaaba.
                                </p>
                                <div className="flex items-center text-xs font-medium text-purple-700">
                                    <Briefcase className="w-3 h-3 mr-1" /> Visit by Appt
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Reviews Section - Social Proof */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-semibold text-yellow-900">Pilgrim Reviews</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Trusted by Thousands
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            See what other Umrah pilgrims say about our online taxi service in Makkah.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Review 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6">"Excellent service! The driver was waiting for us at Jeddah airport even though our flight was delayed. The ride to Makkah was smooth and comfortable."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">
                                    AH
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Ahmed Hassan</div>
                                    <div className="text-xs text-gray-500">London, UK</div>
                                </div>
                            </div>
                        </div>

                        {/* Review 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6">"Used them for daily trips from Aziziyah to Haram. Very punctual and the cars are clean. Best online taxi service I have used in Saudi."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">
                                    FK
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Fatima Khan</div>
                                    <div className="text-xs text-gray-500">Dubai, UAE</div>
                                </div>
                            </div>
                        </div>

                        {/* Review 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6">"Booking was easy and the price was fixed. No bargaining or hidden charges. Highly recommend for family transportation."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">
                                    MR
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Mohamed Rahman</div>
                                    <div className="text-xs text-gray-500">Kuala Lumpur, MY</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - SEO Optimized */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Makkah VIP Transfer FAQ
                        </h2>
                        <p className="text-lg text-gray-600">
                            Common questions about our Makkah taxi service.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1 border-b">
                            <AccordionTrigger className="text-lg font-bold text-gray-900 py-6">How much is a taxi from Jeddah Airport to Makkah?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                                Our fixed rate for a standard sedan starts from SAR 250. For larger families needing a GMC Yukon or HiAce, prices range from SAR 400-500. There are no hidden fees or surge charges.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2 border-b">
                            <AccordionTrigger className="text-lg font-bold text-gray-900 py-6">Do you offer 24/7 service to Masjid al-Haram?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                                Yes, we operate 24 hours a day, 7 days a week. We can pick you up from your hotel in Aziziyah, Jabal Omar, or Kudai for any prayer time, including Tahajjud and Fajr.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3 border-b">
                            <AccordionTrigger className="text-lg font-bold text-gray-900 py-6">How can I book an online taxi in Makkah?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                                You can book directly through our website using the booking form above, or contact us via WhatsApp for instant confirmation. We recommend booking at least 24 hours in advance for airport transfers.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-lg font-bold text-gray-900 py-6">Are your drivers experienced with Ziyarat locations?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                                Absolutely. Our drivers are locals who know the exact locations and history of holy sites like Ghar Hira, Ghar Thawr, Mina, Arafat, and Muzdalifah.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {/* Strategic Internal Links Hub */}
                <div className="bg-white border border-gray-100 rounded-3xl p-8 mb-16 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Car className="w-5 h-5 text-primary" /> Specialist Umrah Fleet
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>GMC Yukon (Luxury Family)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Toyota Hiace (Group Van)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/fleet/" className="text-primary font-bold hover:underline">Compare All Vehicles →</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" /> Top Makkah Routes
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/routes/jeddah-makkah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Jeddah to Makkah (80km)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/routes/makkah-madinah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Makkah to Madinah (450km)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/routes/" className="text-primary font-bold hover:underline">View All Intercity Routes →</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <History className="w-5 h-5 text-primary" /> Makkah Travel Guides
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/guides/makkah-umrah-guide/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Complete Umrah Guide</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guides/makkah-shopping/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Makkah Shopping Guide</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guides/" className="text-primary font-bold hover:underline">Browse All Guides →</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <RelatedLocations currentCity="Makkah" />
            </div>
        </div>
    );
}
