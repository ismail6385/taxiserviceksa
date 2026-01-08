import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, ArrowRight, Plane, Landmark, LayoutDashboard, ShieldCheck, Shield } from 'lucide-react';
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
    title: 'VIP Private Transfer Madinah Central Area | Premium Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service in the Madinah Central Area (Markaziya). Dedicated pickups for Oberoi and Hilton pilgrims.',
    keywords: ['Madinah Central Area VIP transfer', 'Markaziya premium chauffeur', 'Oberoi Madinah VIP transport', 'Hilton Madinah executive car'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/madinah/central-area/',
    },
    openGraph: {
        title: 'VIP Taxi Service Madinah Central Area | Markaziya Transfers',
        description: 'Elite transportation in the heart of the Holy City. Specialized taxi services for all major hotels in the Madinah Markaziya district.',
        url: 'https://taxiserviceksa.com/locations/madinah/central-area/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/madinah-central-area-taxi.png', alt: 'VIP taxi service in Madinah Central Area' }],
    },
};

export default function CentralAreaPage() {
    const services = [
        { name: 'Hotel Doorstep VIP Pickup', description: 'Discrete service for Markaziya hotels like Oberoi and Pullman.', icon: ShieldCheck },
        { name: 'Airport VIP Transfer', description: 'Premium meet-and-greet at Madinah International Airport (MED).', icon: Plane },
        { name: 'Direct Makkah Transfer', description: 'Luxury intercity transfers from your hotel to Makkah Haram area.', icon: Car },
        { name: 'Full Day VIP Ziyarat', description: 'Private chauffeur for visiting Uhud, Quba, and historical sites.', icon: Landmark },
    ];

    const distanceData = [
        { destination: 'Masjid An-Nabawi (Green Dome)', distance: '0.1 km (0.05 mi)', time: '1-2 mins walk', route: 'Direct Pedestrian' },
        { destination: 'Madinah Airport (MED)', distance: '19 km (11.8 mi)', time: '20-25 mins', route: 'Airport Rd' },
        { destination: 'Masjid Quba', distance: '11 km (6.8 mi)', time: '15-20 mins', route: 'Quba Rd' },
        { destination: 'Uhud Martyrs Cemetery', distance: '8 km (5 mi)', time: '15 mins', route: 'King Abdullah Rd' }
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
                            { "@type": "ListItem", "position": 4, "name": "Central Area", "item": "https://taxiserviceksa.com/locations/madinah/central-area/" }
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
                        <span className="text-gray-900 font-semibold">Central Area</span>
                    </nav>
                </div>
            </section>

            <Hero
                images={['/madinah-central-area-taxi.png']}
                h1Text="VIP Private Transfer Madinah Central Area"
                bookingFormTitle="Request Premium Transfer"
                title={
                    <span className="bg-black text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block border border-white/20">
                        Markaziya Elite
                    </span>
                }
                subtitle="Premium VIP Logistics for Madinah's Most Exclusive Hotel District"
                location="Doorstep VIP Service for All Markaziya Hotels"
            />

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Intercity, Airport, and Full-Day transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            {/* Premium Content Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-8 text-sm font-bold">
                                <Star className="w-4 h-4 fill-yellow-800" />
                                Premium Service Standard
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                Luxury Chauffeur in the Markaziya District
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                The Central Area (Markaziya) of Madinah is the spiritual and logistical core of the city. Our <strong>VIP Taxi Service in the Madinah Central Area</strong> is designed to complement the world-class hospitality of its premium hotels.
                            </p>
                            <p className="text-gray-600 mb-10 leading-relaxed font-medium">
                                We provide specialized transport for guests staying at the <strong>Oberoi Madinah</strong>, <strong>Pullman Zamzam</strong>, <strong>Hilton Madinah</strong>, and <strong>Anwar Al Madinah Movenpick</strong>. From the moment you arrive at the airport to your departure for Makkah, we ensure your journey is discrete, punctual, and safe.
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                <li className="flex items-center gap-3 text-gray-900 font-bold bg-gray-50 p-4 rounded-xl border border-gray-100 italic">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Professional Chauffeurs
                                </li>
                                <li className="flex items-center gap-3 text-gray-900 font-bold bg-gray-50 p-4 rounded-xl border border-gray-100 italic">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Luxury SUV Fleet
                                </li>
                                <li className="flex items-center gap-3 text-gray-900 font-bold bg-gray-50 p-4 rounded-xl border border-gray-100 italic">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Airport VIP Meet
                                </li>
                                <li className="flex items-center gap-3 text-gray-900 font-bold bg-gray-50 p-4 rounded-xl border border-gray-100 italic">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Prayer-Time Synergy
                                </li>
                            </ul>
                        </div>

                        <div className="flex-1 relative">
                            <div className="absolute -inset-10 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
                            <div className="relative bg-gray-900 rounded-[3rem] p-10 md:p-14 text-white shadow-2xl">
                                <h3 className="text-2xl font-black mb-8 text-primary flex items-center gap-3">
                                    <LayoutDashboard className="w-6 h-6" /> Local Movement Hub
                                </h3>
                                <DistanceTable origin="Central Area" locations={distanceData} />
                                <div className="mt-12 bg-white/5 p-6 rounded-2xl border border-white/10">
                                    <p className="text-sm font-medium text-gray-300">
                                        <strong>Pro Tip:</strong> Most Central Area hotels have dedicated valet zones where our drivers will meet you for a smooth pickup.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VIP Services Grid */}
            <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all group overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="relative z-10 text-center mx-auto mb-8">
                                    <div className="bg-gray-50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <service.icon className="w-10 h-10 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 mb-4">{service.name}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed font-medium">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16 text-gray-900">Markaziya Service FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-6">
                        <AccordionItem value="item-1" className="bg-gray-50 px-8 rounded-3xl border-none">
                            <AccordionTrigger className="font-bold text-lg py-8 hover:no-underline">How do I meet my driver at a Markaziya hotel?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-8 text-base">
                                Once you book, we coordinate with the hotel valet desk. Your driver will arrive at the main entrance and message you via WhatsApp 10 minutes before pickup.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-gray-50 px-8 rounded-3xl border-none">
                            <AccordionTrigger className="font-bold text-lg py-8 hover:no-underline">Is the service available for Madinah Train Station transfers?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-8 text-base">
                                Yes. We provide direct transfers from the Central Area to the Haramain High-Speed Rail station. It typically takes 15-20 minutes.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-gray-50 px-8 rounded-3xl border-none">
                            <AccordionTrigger className="font-bold text-lg py-8 hover:no-underline">Do you have luxury cars like Mercedes or BMW in Madinah?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-8 text-base">
                                While our primary luxury fleet consists of GMC Yukons and Cadillac Escalades, we can arrange luxury sedans upon request for executive guests.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Conversion CTA */}
            <section className="py-24 bg-black text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Image src="/madinah-central-area-taxi.png" alt="Madinah background" fill className="object-cover" />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Experience Premium VIP Transport in Markaziya.</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Don't settle for regular transport. Choose our VIP executive chauffeur service in the heart of Madinah.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/booking/">
                            <Button className="bg-primary text-white hover:bg-white hover:text-black font-black px-12 py-8 text-xl rounded-2xl h-auto shadow-2xl transition-all">
                                Book VIP Transfer
                            </Button>
                        </Link>
                        <Link href="/locations/madinah/">
                            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black font-bold px-12 py-8 text-xl rounded-2xl h-auto">
                                Back to Madinah
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
