import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, ArrowRight, Plane, Info, Bus, Shield } from 'lucide-react';
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
    title: 'VIP Private Transfer Kudai Makkah | Premium Hub Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service in Kudai Makkah. Professional hotel pickups for Le Meridien Towers and Kudai Hub guests.',
    keywords: ['Kudai VIP transfer', 'Kudai to Haram premium chauffeur', 'Le Meridien Towers VIP transport', 'Makkah Kudai executive car'],
    alternates: {
        canonical: 'https://transferksa.com/locations/makkah/kudai/',
    },
    openGraph: {
        title: 'Taxi Service in Kudai Makkah | Efficient Haram Transfers',
        description: 'Need a ride from Kudai to the Haram? Our taxis provide 24/7 service from Kudai transport hub and nearby hotels. Avoid the wait and book professional.',
        url: 'https://transferksa.com/locations/makkah/kudai/',
        type: 'website',
        images: [{ url: 'https://transferksa.com/makkah-kudai-transport.png', alt: 'Taxi service in Kudai Makkah' }],
    },
};

export default function KudaiPage() {
    const services = [
        { name: 'Kudai Parking Pickup', description: 'Quick service for pilgrims using the Kudai parking lot.', icon: Bus },
        { name: 'Le Meridien Transfers', description: 'Dedicated door-to-door service for Le Meridien Towers guests.', icon: MapPin },
        { name: '24/7 Haram Access', description: 'Continuous shuttle and private taxi service to Ajyad.', icon: Clock },
        { name: 'Group Van Service', description: 'Spacious HiAce vans for groups arriving at Kudai Hub.', icon: Users },
    ];

    const distanceData = [
        { destination: 'Masjid al-Haram (Ajyad Tunnel)', distance: '3.5 km (2.1 mi)', time: '8-12 mins', route: 'Kudai Rd' },
        { destination: 'Jeddah International Airport', distance: '98 km (61 mi)', time: '70-85 mins', route: 'Haramain Hwy' },
        { destination: 'Aziziyah District', distance: '5 km (3 mi)', time: '10-15 mins', route: 'Ring Road 3' },
        { destination: 'Makkah Train Station', distance: '7 km (4.3 mi)', time: '15-20 mins', route: 'King Khalid Rd' }
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
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://transferksa.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://transferksa.com/locations/" },
                            { "@type": "ListItem", "position": 3, "name": "Makkah", "item": "https://transferksa.com/locations/makkah/" },
                            { "@type": "ListItem", "position": 4, "name": "Kudai", "item": "https://transferksa.com/locations/makkah/kudai/" }
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
                        <span className="text-gray-900 font-semibold">Kudai</span>
                    </nav>
                </div>
            </section>

            <Hero
                images={['/makkah-kudai-transport.png']}
                h1Text="VIP Private Transfer Kudai Makkah"
                bookingFormTitle="Request VIP Pickup"
                title={
                    <span className="bg-emerald-600 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block shadow-lg">
                        Premium Hub Chauffeur
                    </span>
                }
                subtitle="The Exclusive VIP Gateway Between Kudai and the Grand Mosque"
                location="Le Meridien Towers | Kudai VIP Parking Access"
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

            {/* Logistics Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-8 rounded-r-3xl mb-10 shadow-sm">
                                <h2 className="text-2xl font-black text-emerald-900 mb-4 flex items-center gap-3">
                                    <Info className="w-6 h-6" /> Specialized for Kudai Logisitcs
                                </h2>
                                <p className="text-emerald-800 leading-relaxed font-medium">
                                    Kudai is the primary gateway for thousands of pilgrims arriving by car or shuttle. Our <strong>VIP Private Transfer Service in Kudai</strong> eliminates the long wait times for public buses, offering you a private, air-conditioned ride directly to your destination.
                                </p>
                            </div>

                            <div className="prose max-w-none text-gray-700">
                                <p className="text-lg leading-relaxed mb-6">
                                    Staying at the <strong>Le Meridien Towers Makkah</strong>? We provide dedicated door-to-door transfers that bypass the crowded bus queues. Our drivers know the Kudai tunnels better than anyone, ensuring you avoid traffic during the intense Hajj and Ramadan seasons.
                                </p>
                                <p className="mb-8">
                                    We also serve the <strong>Kudai Parking lots</strong>, providing a much-needed service for families who have parked their cars and need a quick, reliable way to reach Masjid al-Haram or return to their hotels in Aziziyah or Jabal Omar.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose">
                                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
                                        <div className="bg-white p-2 rounded-lg shadow-sm"><Bus className="w-5 h-5 text-emerald-600" /></div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Avoid Bus Queues</h4>
                                            <p className="text-sm text-gray-500 font-medium italic">Instant private pickups</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
                                        <div className="bg-white p-2 rounded-lg shadow-sm"><MapPin className="w-5 h-5 text-emerald-600" /></div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Direct Ajyad Drop</h4>
                                            <p className="text-sm text-gray-500 font-medium italic">Reach the Haram faster</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <Clock className="w-6 h-6 text-emerald-400" /> Kudai Route Efficiency
                                </h3>
                                <DistanceTable origin="Kudai" locations={distanceData} />
                                <div className="mt-10">
                                    <Link href="/booking/">
                                        <Button className="w-full bg-emerald-600 text-white hover:bg-white hover:text-emerald-600 font-bold h-16 rounded-2xl text-lg transition-all shadow-xl shadow-emerald-500/20">
                                            Request VIP Transfer
                                            <ArrowRight className="ml-2 w-6 h-6" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Icons Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-emerald-200 transition-all text-center group">
                                <div className="bg-emerald-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-emerald-100 transition-colors">
                                    <service.icon className="w-10 h-10 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Local Context FAQ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16 text-gray-900">Kudai Transport FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1" className="bg-gray-100 px-8 rounded-3xl border-none">
                            <AccordionTrigger className="font-bold text-lg py-6 hover:no-underline">Where is the best pickup point in Kudai?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-8 text-base">
                                Most of our clients prefer to be picked up directly from the <strong>Le Meridien Towers lobby</strong> or the <strong>Kudai Transport Hub parking</strong> near the main exit. We coordinate via WhatsApp to find you easily.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-gray-100 px-8 rounded-3xl border-none">
                            <AccordionTrigger className="font-bold text-lg py-6 hover:no-underline">Are taxis available during Ramadan nights in Kudai?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-8 text-base">
                                Yes, we operate 24/7 during Ramadan. Kudai is extremely busy after Ishaa and Taraweeh, so we recommend pre-booking your ride to ensure a vehicle is reserved for you.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-gray-100 px-8 rounded-3xl border-none">
                            <AccordionTrigger className="font-bold text-lg py-6 hover:no-underline">How many passengers can your vans take from Kudai?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-8 text-base">
                                Our Toyota HiAce vans can comfortably accommodate up to 10-12 passengers with luggage. For smaller groups or families, we recommend our 7-seater GMC Yukon or Hyundai Staria.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Final Local CTA */}
            <section className="py-24 bg-emerald-900 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-black text-white mb-8">Ready to Skip the Bus Queue in Kudai?</h2>
                    <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto font-medium">
                        Book your private taxi now and reach the Haram without the hassle.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/booking/">
                            <Button className="bg-white text-emerald-900 hover:bg-primary hover:text-white font-black px-12 py-8 text-xl rounded-2xl h-auto shadow-2xl transition-all">
                                Book VIP Transfer
                            </Button>
                        </Link>
                        <Link href="/locations/makkah/">
                            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-900 font-bold px-12 py-8 text-xl rounded-2xl h-auto">
                                Makkah Guide
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
