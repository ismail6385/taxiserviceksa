import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, ArrowRight, Plane, ShieldCheck, Briefcase, Shield } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Hero from '@/components/Hero';
import Script from 'next/script';
import DistanceTable from '@/components/seo/DistanceTable';

export const metadata: Metadata = {
    title: 'VIP Private Transfer Madinah Airport | Premium Chauffeur Pickup',
    description: 'Premium VIP private transfer and executive chauffeur service at Madinah Airport (MED). Book your professional pickup to Masjid Nabawi and local hotels.',
    keywords: ['Madinah Airport VIP transfer', 'MED Airport premium chauffeur', 'Madinah Airport executive car', 'Prince Mohammad Airport VIP pickup'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/madinah/madinah-airport/',
    },
    openGraph: {
        title: 'Madinah Airport Taxi Service | Prince Mohammad Bin Abdulaziz Pickup',
        description: 'Skip the airport queues. Book a professional taxi from Madinah Airport. Fixed pricing and comfortable SUVs for families.',
        url: 'https://taxiserviceksa.com/locations/madinah/madinah-airport/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/madinah-airport-taxi.png', alt: 'Taxi service at Madinah Airport' }],
    },
};

export default function MadinahAirportPage() {
    const services = [
        { name: 'Meet & Greet', description: 'Your driver will wait at the arrivals hall with a name sign.', icon: ShieldCheck },
        { name: 'Hotel Transfers', description: 'Direct service to any hotel in Madinah Central Area.', icon: MapPin },
        { name: 'Intercity to Makkah', description: 'Private direct transfers from MED Airport to Makkah.', icon: Car },
        { name: 'Business VIP', description: 'Executive chauffeur service for corporate travelers.', icon: Briefcase },
    ];

    const distanceData = [
        { destination: 'Masjid An-Nabawi (Central Area)', distance: '18 km (11 mi)', time: '20-25 mins', route: 'Airport Rd' },
        { destination: 'Quba Mosque', distance: '22 km (13.6 mi)', time: '25-30 mins', route: 'King Abdullah Rd' },
        { destination: 'Mount Uhud', distance: '15 km (9 mi)', time: '15-20 mins', route: 'Prince Nayif St' },
        { destination: 'Makkah (Masjid al-Haram)', distance: '460 km (285 mi)', time: '4.5 - 5 hours', route: 'Hijrah Hwy' }
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
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://taxiserviceksa.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://taxiserviceksa.com/locations/" },
                            { "@type": "ListItem", "position": 3, "name": "Madinah", "item": "https://taxiserviceksa.com/locations/madinah/" },
                            { "@type": "ListItem", "position": 4, "name": "Airport", "item": "https://taxiserviceksa.com/locations/madinah/madinah-airport/" }
                        ]
                    })
                }}
            />

            {/* Breadcrumb Navigation */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <nav className="flex items-center space-x-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/locations/" className="hover:text-gray-900 transition-colors">Locations</Link>
                        <span>/</span>
                        <Link href="/locations/madinah/" className="hover:text-gray-900 transition-colors">Madinah</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-semibold">Airport</span>
                    </nav>
                </div>
            </section>

            <Hero
                images={['/madinah-airport-taxi.png']}
                h1Text="VIP Private Transfer Madinah Airport"
                bookingFormTitle="Request Airport Pickup"
                title={
                    <span className="bg-emerald-700 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block">
                        Prince Mohammad Bin Abdulaziz (MED) VIP
                    </span>
                }
                subtitle="Premium VIP Chauffeur Service for International Pilgrims"
                location="24/7 Professional Executive Service"
            />

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Airport and Intercity transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            {/* Airport Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="prose max-w-none text-gray-700">
                            <h2 className="text-3xl font-black text-gray-900 mb-6 underline decoration-emerald-500 decoration-4 underline-offset-8">Stress-Free Madinah Airport VIP Transfers</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Arriving at <strong>Prince Mohammad Bin Abdulaziz International Airport (MED)</strong> should be the start of a peaceful spiritual journey. Our <strong>Madinah Airport VIP Transfer Service</strong> ensures you skip the queues and enjoy international chauffeur standards.
                            </p>
                            <p className="mb-8">
                                We specialize in "Meet & Greet" services. Your professional driver will be waiting in the arrivals hall with a personalized name board, ready to help with your luggage and guide you to your pre-booked, air-conditioned vehicle. Whether you are traveling alone or with a large family group, our fleet of sedans and SUVs like the <strong>GMC Yukon</strong> and <strong>Toyota HiAce</strong> are at your service.
                            </p>

                            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex items-start gap-4">
                                <CheckCircle2 className="text-emerald-600 w-6 h-6 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-emerald-900">Fixed Airport Rates</h4>
                                    <p className="text-sm text-emerald-800">No hidden fees or "airport surcharges." The price you book is the price you pay.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-950 rounded-3xl p-8 md:p-12 text-white relative h-full overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Plane className="w-6 h-6 text-emerald-400" /> MED Airport Logistics
                            </h3>
                            <DistanceTable origin="Madinah Airport" locations={distanceData} />
                            <div className="mt-10">
                                <Link href="/booking/">
                                    <Button className="w-full bg-emerald-600 text-white hover:bg-white hover:text-emerald-900 font-black h-16 rounded-xl text-lg shadow-xl shadow-emerald-900/40">
                                        Pre-Book Your VIP Transfer
                                        <ArrowRight className="ml-2 w-6 h-6" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Icons Grid */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-16 text-gray-900">Our Airport Priorities</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                                <div className="bg-emerald-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-emerald-600 transition-colors">
                                    <service.icon className="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Airport FAQ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16">Madinah Airport Help</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1" className="bg-gray-50 px-8 rounded-3xl border-none">
                            <AccordionTrigger className="font-bold text-lg hover:no-underline">What if my flight is delayed?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-8 text-base leading-relaxed">
                                Don't worry! We monitor flight statuses in real-time. If your flight is delayed, we automatically adjust your pickup time. Your driver will still be there when you land, at no extra cost.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-gray-50 px-8 rounded-3xl border-none">
                            <AccordionTrigger className="font-bold text-lg hover:no-underline">Where is the driver meeting point at MED Airport?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-8 text-base leading-relaxed">
                                For Terminal 1 (International/Domestic), our drivers wait at the **Exit Gate 4** arrivals hall. We will send you the driver's photo and contact details via WhatsApp as soon as you land.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-gray-50 px-8 rounded-3xl border-none">
                            <AccordionTrigger className="font-bold text-lg hover:no-underline">Is there a night limit for airport pickups?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-8 text-base leading-relaxed">
                                No, we operate 24 hours a day, 7 days a week. We serve all flights, including late-night and early-morning arrivals.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Conversion CTA */}
            <section className="py-24 bg-emerald-900 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Ready to Start Your Madinah Journey?</h2>
                    <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">
                        Secure your comfortable airport transfer now and focus on your prayers.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/booking/">
                            <Button className="bg-white text-emerald-900 hover:bg-primary hover:text-white font-black px-12 py-8 text-xl rounded-2xl h-auto shadow-2xl scale-100 hover:scale-105 transition-all">
                                Book VIP Airport Transfer
                            </Button>
                        </Link>
                        <Link href="/locations/madinah/">
                            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-900 font-bold px-12 py-8 text-xl rounded-2xl h-auto">
                                Madinah City Guide
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
