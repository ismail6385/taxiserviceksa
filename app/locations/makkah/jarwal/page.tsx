import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, ArrowRight, Plane, Landmark, LayoutDashboard, Navigation, Shield } from 'lucide-react';
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
    title: 'VIP Private Transfer Jarwal Makkah | Premium Expansion Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service in Jarwal Makkah. Professional hotel pickups for Sheraton and Jarwal Plaza guests.',
    keywords: ['Jarwal VIP transfer', 'Jarwal to Haram premium chauffeur', 'King Abdullah Expansion VIP transport', 'Makkah Jarwal executive car'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/makkah/jarwal/',
    },
    openGraph: {
        title: 'Taxi Service in Jarwal Makkah | King Abdullah Expansion Access',
        description: 'Staying near the new expansion in Jarwal? Our taxis provide direct hotel-to-Haram service with professional drivers who know the best Jarwal access points.',
        url: 'https://taxiserviceksa.com/locations/makkah/jarwal/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/makkah-jarwal-area.png', alt: 'Taxi service in Jarwal Makkah' }],
    },
};

export default function JarwalPage() {
    const services = [
        { name: 'Hotel to Expansion Gate', description: 'Direct pickup for hotels near the King Abdullah Expansion.', icon: Landmark },
        { name: 'Airport Shuttle Taxi', description: 'Fixed rates from Jarwal to Jeddah Airport Terminal 1.', icon: Plane },
        { name: 'Group Transport', description: 'Spacious HiAce vans for groups of up to 12 pilgrims.', icon: Users },
        { name: '24/7 Local Pickup', description: 'Immediate response across the Jarwal and Al-Taysir areas.', icon: Clock },
    ];

    const distanceData = [
        { destination: 'Masjid al-Haram (Expansion Gate)', distance: '1.2 km (0.7 mi)', time: '5-7 mins', route: 'Jabal Al Kaaba St' },
        { destination: 'Jeddah International Airport', distance: '90 km (56 mi)', time: '60-70 mins', route: 'Umm Al Qura Rd' },
        { destination: 'Makkah Train Station', distance: '6 km (3.7 mi)', time: '12-15 mins', route: 'Ring Road 1' },
        { destination: 'Taif City Center', distance: '88 km (55 mi)', time: '75-90 mins', route: 'Al Hada Mtn' }
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
                            { "@type": "ListItem", "position": 3, "name": "Makkah", "item": "https://taxiserviceksa.com/locations/makkah/" },
                            { "@type": "ListItem", "position": 4, "name": "Jarwal", "item": "https://taxiserviceksa.com/locations/makkah/jarwal/" }
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
                        <Link href="/locations/makkah/" className="hover:text-gray-900 transition-colors">Makkah</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-semibold">Jarwal</span>
                    </nav>
                </div>
            </section>

            <Hero
                images={['/makkah-jarwal-area.png']}
                h1Text="VIP Private Transfer Jarwal Makkah"
                bookingFormTitle="Request VIP Pickup"
                title={
                    <span className="bg-blue-600 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block shadow-lg">
                        Premium Expansion Chauffeur
                    </span>
                }
                subtitle="The Exclusive VIP Link to the King Abdullah Expansion"
                location="Sheraton | Jarwal Plaza | Al-Taysir VIP"
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

            {/* Modern Context Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
                        <div className="flex-1 prose max-w-none text-gray-700">
                            <h2 className="text-3xl font-black text-gray-900 mb-8 leading-tight">Accessing the Haram from Modern Jarwal</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                Jarwal is the rising star of Makkah's hospitality, offering modern hotels and direct access to the spectacular <strong>King Abdullah Expansion</strong> of Masjid al-Haram. Our <strong>Jarwal Makkah VIP Transfer Service</strong> is optimized for the wide boulevards and modern logistics of this district.
                            </p>
                            <p className="mb-10 leading-relaxed">
                                Whether you're staying at the <strong>Sheraton Makkah Jabal Al Kaaba</strong>, <strong>Jarwal Plaza</strong>, or any of the premium residences in Al-Taysir, we provide a fleet of high-end SUVs and sedans to make your journey to the Grand Mosque effortless. Our drivers are experts at navigating the Jabal al-Kaaba tunnels, ensuring you arrive for Salah with time to spare.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-10">
                                <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex items-center gap-4 group hover:bg-blue-600 transition-all duration-300">
                                    <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-white/20 group-hover:text-white transition-colors"><MapPin className="w-6 h-6 text-blue-600 group-hover:text-white" /></div>
                                    <span className="font-bold text-blue-900 group-hover:text-white">Seamless Tunnel Access</span>
                                </div>
                                <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex items-center gap-4 group hover:bg-blue-600 transition-all duration-300">
                                    <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-white/20 group-hover:text-white transition-colors"><LayoutDashboard className="w-6 h-6 text-blue-600 group-hover:text-white" /></div>
                                    <span className="font-bold text-blue-900 group-hover:text-white">Direct Expansion Drop</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 bg-gray-50 border border-gray-100 p-10 md:p-14 rounded-[3rem] shadow-xl relative">
                            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-600/5 rounded-full blur-2xl"></div>
                            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                                <Navigation className="w-6 h-6 text-blue-600" /> Jarwal Logistics Board
                            </h3>
                            <DistanceTable origin="Jarwal" locations={distanceData} />
                            <div className="mt-12 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                                    <strong>Tip for Jarwal Guests:</strong> Most taxis drop off near the Jabal al-Kaaba entrance, which is the shortest walk to the new expansion area.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Fleet Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900">Expert Service in Jarwal</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Modern transport for a modern district. 24/7 reliability for your spiritual journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white border-2 border-transparent hover:border-blue-600 p-10 rounded-[2.5rem] transition-all duration-300 shadow-sm hover:shadow-2xl">
                                <div className="bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center mb-8">
                                    <service.icon className="w-10 h-10 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-4">{service.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed font-medium">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jarwal Specific FAQ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16 text-gray-900">Jarwal & Al-Taysir FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-6">
                        <AccordionItem value="item-1" className="bg-gray-50 px-8 rounded-[2rem] border-none shadow-sm">
                            <AccordionTrigger className="font-bold text-lg py-8 hover:no-underline">Is it easy to get a taxi from Jabal al-Kaaba hotels?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-8 text-base leading-relaxed">
                                Street taxis are frequent but can be inconsistent during prayer times. Our pre-booked service guarantees your driver will be waiting at your hotel valet, ensuring a stress-free departure for your flights or prayers.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-gray-50 px-8 rounded-[2rem] border-none shadow-sm">
                            <AccordionTrigger className="font-bold text-lg py-8 hover:no-underline">Do you provide child seats for families in Jarwal?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-8 text-base leading-relaxed">
                                Yes! Being an family-oriented service, we can provide child car seats upon request. Please mention this in the "Special Requirements" section of our booking form.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-gray-50 px-8 rounded-[2rem] border-none shadow-sm">
                            <AccordionTrigger className="font-bold text-lg py-8 hover:no-underline">How much is a taxi from Jarwal to Madinah?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-8 text-base leading-relaxed">
                                Fares for a private taxi to Madinah start from 400 SAR for a standard sedan and 550 SAR for a luxury GMC Yukon. The journey takes approximately 4-5 hours.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Final Conversion Section */}
            <section className="py-24 bg-blue-600 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-blue-700 opacity-50"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Staying in Jarwal? Book Your Ride to the Haram Today.</h2>
                    <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
                        Professional, safe, and modern taxi services for Jabal al-Kaaba and Jarwal guests.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/booking/">
                            <Button className="bg-white text-blue-600 hover:bg-black hover:text-white font-black px-12 py-8 text-xl rounded-2xl h-auto shadow-2xl transition-all">
                                Book VIP Transfer
                            </Button>
                        </Link>
                        <Link href="/locations/makkah/">
                            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600 font-bold px-12 py-8 text-xl rounded-2xl h-auto">
                                Back to Makkah
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
