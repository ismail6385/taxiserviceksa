import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Building2, Globe, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Amman to Jeddah Taxi | Cross-Border Transfer | Taxi Service KSA',
    description: 'Request a premium quote from Amman to Jeddah. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
    keywords: ['Taxi Amman to Jeddah', 'Amman to Jeddah transfer', 'cross border taxi Saudi Arabia', 'VIP transport Amman Jeddah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/amman-jeddah/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Amman to Jeddah Taxi | Cross-Border Transfer | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Amman to Jeddah Taxi | Cross-Border Transfer | Taxi Service KSA',
        description: 'Request a premium quote from Amman to Jeddah. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
        url: 'https://taxiserviceksa.com/routes/amman-jeddah/',
        type: 'website',
    },
};

export default function AmmanJeddahRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Amman to Jeddah"
                description="Professional private car service for Amman to Jeddah. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Amman to Jeddah Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Amman to Jeddah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Seamless Transfers: Amman to Jeddah"
                location="Door-to-Door Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Amman&dropoff=Jeddah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            WhatsApp Booking
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com?text=Hello,%20I%20want%20to%20get%20a%20quote%20for%20a%20taxi%20from%20Amman%20to%20Jeddah">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Email Inquiry
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Umrah Transfer</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                A Full-Day Drive to the Red Sea Gateway
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Amman to Jeddah covers approximately 1,442 km via the Al-Omari border crossing, running south along the Red Sea corridor to Jeddah. At around 14.5 hours of driving, this is a genuine full-day private hire, popular with pilgrims and travellers who prefer to skip a connecting flight.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Most bookings are Umrah pilgrims travelling onward to Makkah, and Jordanian families visiting or relocating to the Jeddah area. Vehicles are equipped with extra space for Ihram bags and luggage.
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
                                    <span className="font-semibold text-gray-800">~1,442 km Total</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Umrah-Ready</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Journey Highlights</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">A Full Day Behind the Wheel</h4>
                                        <p className="text-sm text-gray-500">Plan your departure time around arriving in Jeddah at a reasonable hour — this is genuinely a full day's drive.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Driver Rotation Available</h4>
                                        <p className="text-sm text-gray-500">For the full 14.5-hour drive, ask about a second driver joining partway for a safer, more comfortable journey.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Umrah-Ready Vehicles</h4>
                                        <p className="text-sm text-gray-500">Vehicles are equipped for pilgrims travelling onward to Makkah, with space for Ihram bags and extra luggage.</p>
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
                        contextName="Amman to Jeddah"
                        points={[
                            {
                                topic: "Fly vs Drive for Umrah",
                                commonBelief: "Everyone should just fly this route.",
                                reality: "Flying is faster for a solo traveller, but pilgrims who want to skip airport transfers entirely, or families with heavy luggage, often still prefer the door-to-door private drive despite the extra hours.",
                                truthRange: "Group-Dependent Choice",
                                factors: ["~14.5-Hour Drive Time", "No Airport Transfers"]
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
                <RelatedLocations currentCity="Jeddah" />
                <RelatedRoutes originSlug="amman" currentSlug="amman-jeddah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long does a taxi take from Amman to Jeddah?",
                        shortAnswer: "Around 14.5 hours",
                        detailedAnswer: "The total driving time is around 14.5 hours for the 1,442 km route. Border crossing at Al-Omari typically adds 30 minutes to 2 hours depending on the season and time of day.",
                        perspectives: []
                    },
                    {
                        question: "Is this route suitable for Umrah pilgrims?",
                        shortAnswer: "Yes, a common booking",
                        detailedAnswer: "Yes, this is one of our regular long-distance bookings for pilgrims arriving via Amman who prefer to drive directly to Jeddah rather than book a connecting flight.",
                        perspectives: []
                    },
                    {
                        question: "How can I get a price for this border transfer?",
                        shortAnswer: "Request a Quote",
                        detailedAnswer: "Prices vary based on the vehicle type, number of passengers, and specific locations. Please use our 'WhatsApp Booking' button or contact us via Email to receive an accurate, all-inclusive quote that covers vehicle crossing insurance and toll fees.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}



