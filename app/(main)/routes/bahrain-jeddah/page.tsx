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
    title: 'Bahrain to Jeddah Taxi | Cross-Border Transfer | Taxi Service KSA',
    description: 'Request a premium quote from Bahrain to Jeddah. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
    keywords: ['Taxi Bahrain to Jeddah', 'Bahrain to Jeddah transfer', 'cross border taxi Saudi Arabia', 'VIP transport Bahrain Jeddah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/bahrain-jeddah/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Bahrain to Jeddah Taxi | Cross-Border Transfer | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Bahrain to Jeddah Taxi | Cross-Border Transfer | Taxi Service KSA',
        description: 'Request a premium quote from Bahrain to Jeddah. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
        url: 'https://taxiserviceksa.com/routes/bahrain-jeddah/',
        type: 'website',
    },
};

export default function BahrainJeddahRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Bahrain to Jeddah"
                description="Professional private car service for Bahrain to Jeddah. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Bahrain to Jeddah Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Bahrain to Jeddah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Seamless Transfers: Bahrain to Jeddah"
                location="Door-to-Door Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Bahrain&dropoff=Jeddah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            WhatsApp Booking
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com?text=Hello,%20I%20want%20to%20get%20a%20quote%20for%20a%20taxi%20from%20Bahrain%20to%20Jeddah">
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
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Long-Distance Private Hire</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                A Genuine Full-Day Cross-Country Journey
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Bahrain to Jeddah is a genuine long-distance drive — approximately 1,420 km across the causeway and the length of Saudi Arabia's east-west corridor, taking around 14 hours behind the wheel. This is a full-day private hire, not a quick transfer, and best suited to travellers who value door-to-door privacy over a connecting flight.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Most bookings on this route are Umrah pilgrims arriving via Bahrain who prefer to drive straight through to Jeddah rather than fly, along with families relocating between the two cities. We recommend at least 48 hours notice so we can arrange the right vehicle and plan rest stops.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Full Day Journey</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~14 hours Journey</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~1,420 km Total</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Book 48h Ahead</span>
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
                                        <p className="text-sm text-gray-500">Plan your pickup time and any stops around arriving in Jeddah at a reasonable hour — this is genuinely a full day's drive.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Driver Rotation Available</h4>
                                        <p className="text-sm text-gray-500">For the full 14-hour drive, ask about a second driver joining partway — safer and more comfortable than one driver covering it alone.</p>
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
                        contextName="Bahrain to Jeddah"
                        points={[
                            {
                                topic: "Fly vs Drive for This Distance",
                                commonBelief: "Everyone should just fly this route.",
                                reality: "Flying is faster for a solo traveller, but families or groups with heavy luggage, or pilgrims who want to skip airport transfers entirely, often still prefer the door-to-door private drive despite the longer duration.",
                                truthRange: "Group-Dependent Choice",
                                factors: ["~14-Hour Drive Time", "No Airport Transfers"]
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
                <RelatedRoutes originSlug="bahrain" currentSlug="bahrain-jeddah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "Is Bahrain to Jeddah really a single continuous drive?",
                        shortAnswer: "Yes, or split with an overnight stop",
                        detailedAnswer: "Yes, it can be completed in one continuous trip of around 14 hours with rest stops, though many clients prefer to break the journey with an overnight stop partway. Let us know your preference when booking.",
                        perspectives: []
                    },
                    {
                        question: "Do you provide a second driver for this route?",
                        shortAnswer: "Yes, on request",
                        detailedAnswer: "Yes, for the full-distance drive we can arrange a driver rotation on request, which is safer and more comfortable than one driver covering all ~14 hours alone.",
                        perspectives: []
                    },
                    {
                        question: "Is this route suitable for Umrah pilgrims?",
                        shortAnswer: "Yes, a common booking",
                        detailedAnswer: "Yes, this is one of our regular long-distance bookings for pilgrims arriving via Bahrain who prefer to drive directly to Jeddah rather than book a connecting flight.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}



