import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Building2, Globe, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteFleetSection from '@/components/RouteFleetSection';


export const metadata: Metadata = {
    title: 'Amman to Riyadh Taxi | Cross-Border Transfer | Taxi Service KSA',
    description: 'Request a premium quote from Amman to Riyadh. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
    keywords: ['Taxi Amman to Riyadh', 'Amman to Riyadh transfer', 'cross border taxi Saudi Arabia', 'VIP transport Amman Riyadh'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/amman-riyadh/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Amman to Riyadh Taxi | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Amman to Riyadh Taxi | Taxi Service KSA',
        description: 'Request a premium quote from Amman to Riyadh. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
        url: 'https://taxiserviceksa.com/routes/amman-riyadh/',
        type: 'website',
    },
};

export default function AmmanRiyadhRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Amman to Riyadh"
                description="Professional private car service for Amman to Riyadh. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Amman to Riyadh Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Amman to Riyadh Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Seamless Transfers: Amman to Riyadh"
                location="Door-to-Door Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Amman&dropoff=Riyadh">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            WhatsApp Booking (3500 SAR)
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/966563573531?text=Hello,%20I%20want%20to%20book%20a%20taxi%20from%20Amman%20to%20Riyadh">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Al-Omari Border</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                A Full-Day Drive Down the Levant-Gulf Highway
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Amman to Riyadh covers approximately 1,450 km via the Al-Omari border crossing, running south through the Saudi interior to the capital. At around 14.5 hours of driving, this is a genuine full-day private hire.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                This route is regularly booked by Jordanian business travellers and government contacts working with Riyadh, along with families relocating between the two capitals who prefer one private vehicle door-to-door over a connecting flight.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Al-Omari Crossing</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~14.5 hours Journey</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~1,450 km Total</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Capital-to-Capital</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Journey Highlights</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Direct Capital-to-Capital Transfer</h4>
                                        <p className="text-sm text-gray-500">One vehicle, one driver, no connecting flight — straight from your Amman pickup to your Riyadh destination.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Business & Government Travel</h4>
                                        <p className="text-sm text-gray-500">Wi-Fi-ready sedans and a quiet cabin for calls or work en route, regularly used by Jordan-Saudi business travellers.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Driver Rotation Available</h4>
                                        <p className="text-sm text-gray-500">For the 14.5-hour drive, ask about a second driver joining partway for a safer, more comfortable journey.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <RouteFleetSection />

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                <TravelConsensus
                        contextName="Amman to Riyadh"
                        points={[
                            {
                                topic: "Fly vs Drive Between the Capitals",
                                commonBelief: "Flying is always faster for a business trip.",
                                reality: "Once you add airport check-in, security, and taxis at both ends, a 14.5-hour direct drive is a different trade-off — chosen by travellers who want a private working cabin or are moving heavy luggage, not for pure speed.",
                                truthRange: "Depends on Priority",
                                factors: ["Airport Overhead", "Private Door-to-Door"]
                            },
                            {
                                topic: "Booking Notice",
                                commonBelief: "You can book this route same-day.",
                                reality: "Because of the distance, we recommend at least 48 hours notice so the right vehicle — and a rotation driver if you'd like one — can be confirmed in advance.",
                                truthRange: "Advance Booking Recommended",
                                factors: ["Driver Availability", "Vehicle Assignment"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Riyadh" />
                <RelatedRoutes originSlug="amman" currentSlug="amman-riyadh" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long does a taxi take from Amman to Riyadh?",
                        shortAnswer: "Around 14.5 hours",
                        detailedAnswer: "The total driving time is around 14.5 hours for the 1,450 km route. Border crossing at Al-Omari typically adds 30 minutes to 2 hours depending on the season and time of day.",
                        perspectives: []
                    },
                    {
                        question: "Do you provide a second driver for this route?",
                        shortAnswer: "Yes, on request",
                        detailedAnswer: "Yes, for the full-distance drive we can arrange a driver rotation on request, which is safer and more comfortable than one driver covering the whole journey alone.",
                        perspectives: []
                    },
                    {
                        question: "Is the border vehicle insurance included in the price?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, our quoted price of 3500 SAR includes the vehicle crossing insurance and toll fees.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}



