import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, ArrowRight, Plane, Navigation, Landmark, Shield } from 'lucide-react';
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
    title: 'VIP Private Transfer Misfalah Makkah | Premium Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service in Misfalah Makkah. Professional hotel pickups and airport transfers for Umrah pilgrims.',
    keywords: ['Misfalah VIP transfer', 'Misfalah to Haram premium chauffeur', 'Misfalah executive car', 'Makkah VIP pilgrim transport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/makkah/misfalah/',
    },
    openGraph: {
        title: 'Taxi Service in Misfalah Makkah | 24/7 Hotel Pickups',
        description: 'Staying in Misfalah? Get a comfortable ride to the Haram or Airport without the stress of street bargaining. Professional drivers specializing in Misfalah routes.',
        url: 'https://taxiserviceksa.com/locations/makkah/misfalah/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/makkah-misfalah-street.png', alt: 'Taxi service in Misfalah Makkah' }],
    },
};

export default function MisfalahPage() {
    const services = [
        { name: 'Hotel Doorstep Pickup', description: 'Direct service from Emaar, Swissotel, or any Misfalah hotel.', icon: MapPin },
        { name: 'Jeddah Airport Transfer', description: 'Fixed-price airport runs for pilgrims and families.', icon: Plane },
        { name: 'Ziyarat City Tours', description: 'Visit historical sites in Makkah with a knowledgeable driver.', icon: Landmark },
        { name: 'Intercity Taxi', description: 'Private hire for Misfalah to Madinah or Taif journeys.', icon: Navigation },
    ];

    const distanceData = [
        { destination: 'Masjid al-Haram (King Abdulaziz Gate)', distance: '0.8 km (0.5 mi)', time: '5-8 mins (Vehicle)', route: 'Ibrahim Al Khalil Rd' },
        { destination: 'Jeddah International Airport', distance: '94 km (58 mi)', time: '65-80 mins', route: 'Umm Al Qura Rd' },
        { destination: 'Mina Jamarat', distance: '7 km (4.3 mi)', time: '15-20 mins', route: 'Ring Road 1' },
        { destination: 'Arafat Holy Site', distance: '18 km (11 mi)', time: '30-40 mins', route: 'Route 15' }
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
                            { "@type": "ListItem", "position": 4, "name": "Misfalah", "item": "https://taxiserviceksa.com/locations/makkah/misfalah/" }
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
                        <span className="text-gray-900 font-semibold">Misfalah</span>
                    </nav>
                </div>
            </section>

            <Hero
                images={['/makkah-misfalah-street.png']}
                h1Text="VIP Private Transfer Misfalah Makkah"
                bookingFormTitle="Request VIP Pickup"
                title={
                    <span className="bg-orange-600 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block shadow-md">
                        Premium Chauffeur Service
                    </span>
                }
                subtitle="The Elite VIP Link for Makkah's Most Vibrant Neighborhood"
                location="Ibrahim Al Khalil Rd | Misfalah VIP Hotel Pickup"
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

            {/* Local Context Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="prose max-w-none text-gray-700">
                            <h2 className="text-3xl font-black text-gray-900 mb-8">Navigating Misfalah with Ease</h2>
                            <p className="text-xl leading-relaxed mb-8 font-medium italic text-gray-600">
                                Misfalah is known for its vibrance, its crowds, and its proximity to the Grand Mosque. But finding a taxi on Ibrahim al-Khalil road can be a challenge.
                            </p>
                            <p className="mb-6 leading-relaxed">
                                Our <strong>VIP Private Transfer Service in Misfalah Makkah</strong> takes the stress out of the equation. No more standing on the curb bargaining with street drivers. We offer fixed rates, professional chauffeurs, and a fleet of clean, air-conditioned luxury vehicles that can pick you up directly from your hotel lobby.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                Whether you're staying at one of the large towers or a smaller hotel tucked away in the Misfalah side-streets, our drivers know the shortcuts and access points better than anyone. We specialize in group transport, offering spacious vans for families performing Umrah together.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                                <div className="flex items-center gap-3 bg-orange-50 p-5 rounded-2xl border border-orange-100">
                                    <div className="bg-orange-600 p-2 rounded-lg shadow-sm text-white"><Clock className="w-5 h-5" /></div>
                                    <span className="font-bold text-orange-900">Avoid Peak-Hour Stress</span>
                                </div>
                                <div className="flex items-center gap-3 bg-orange-50 p-5 rounded-2xl border border-orange-100">
                                    <div className="bg-orange-600 p-2 rounded-lg shadow-sm text-white"><Car className="w-5 h-5" /></div>
                                    <span className="font-bold text-orange-900">Fixed, Honest Fares</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-200 to-transparent rounded-3xl blur-2xl opacity-30"></div>
                            <div className="relative bg-gray-900 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl">
                                <h3 className="text-2xl font-bold mb-8 text-orange-400">Misfalah Journey Guide</h3>
                                <DistanceTable origin="Misfalah" locations={distanceData} />
                                <div className="mt-12">
                                    <Link href="/booking/">
                                        <Button className="w-full bg-orange-600 text-white hover:bg-white hover:text-orange-600 font-bold h-16 rounded-2xl text-lg transition-all shadow-xl shadow-orange-500/20">
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

            {/* Interactive Service Highlights */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-b">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <div className="bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                                    <service.icon className="w-10 h-10 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-4">{service.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed font-medium">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Misfalah Specific FAQ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16 text-gray-900 underline decoration-orange-600 decoration-4 underline-offset-8">Misfalah Transport FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-6">
                        <AccordionItem value="item-1" className="bg-white px-8 rounded-3xl border border-gray-100 shadow-sm">
                            <AccordionTrigger className="font-bold text-lg py-6 hover:no-underline">Can you pick up from hotels deep inside Misfalah?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-8 text-base leading-relaxed">
                                Yes. While Misfalah has many narrow streets, our drivers are experienced in navigating them. If a street is too narrow for a large van, we coordinate the nearest possible meeting point via WhatsApp to ensure you don't have to carry your luggage far.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-white px-8 rounded-3xl border border-gray-100 shadow-sm">
                            <AccordionTrigger className="font-bold text-lg py-6 hover:no-underline">How do I get to the Haram from Misfalah during prayer times?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-8 text-base leading-relaxed">
                                Many pilgrims walk to the King Abdulaziz Gate, but if you have elderly family members or small children, a taxi is much easier. We recommend booking 20 minutes before the Adhan to ensure you reach the Haram boundaries before roads are closed.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-white px-8 rounded-3xl border border-gray-100 shadow-sm">
                            <AccordionTrigger className="font-bold text-lg py-6 hover:no-underline">Is it cheaper to take a taxi on the street in Misfalah?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-8 text-base leading-relaxed">
                                Street drivers often hike prices for tourists who look like they are in a hurry. By booking with us, you get a <strong>guaranteed fixed price</strong>, a vetted driver, and the security of a professional service company.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Final Conversion Section */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-5xl mx-auto bg-gray-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Staying in Misfalah? Reach the Haram Comfortably.</h2>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                            Don't stress over transport. Our Misfalah taxi specialists are ready to serve you 24/7.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/booking/">
                                <Button className="bg-orange-600 text-white hover:bg-white hover:text-orange-600 font-black px-12 py-8 text-xl rounded-2xl h-auto shadow-2xl transition-all">
                                    Book VIP Transfer
                                </Button>
                            </Link>
                            <a href="mailto:info@taxiserviceksa.com">
                                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black font-bold px-12 py-8 text-xl rounded-2xl h-auto">
                                    Contact Support
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
