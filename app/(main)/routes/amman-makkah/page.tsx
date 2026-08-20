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
    title: 'Amman to Makkah Taxi | Cross-Border Transfer | Taxi Service KSA',
    description: 'Request a premium quote from Amman to Makkah. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
    keywords: ['Taxi Amman to Makkah', 'Amman to Makkah transfer', 'cross border taxi Saudi Arabia', 'VIP transport Amman Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/amman-makkah/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Amman to Makkah Taxi | Cross-Border Transfer | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Amman to Makkah Taxi | Cross-Border Transfer | Taxi Service KSA',
        description: 'Request a premium quote from Amman to Makkah. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
        url: 'https://taxiserviceksa.com/routes/amman-makkah/',
        type: 'website',
    },
};

export default function AmmanMakkahRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Amman to Makkah"
                description="Professional private car service for Amman to Makkah. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Amman to Makkah Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Amman to Makkah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Seamless Transfers: Amman to Makkah"
                location="Door-to-Door Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Amman&dropoff=Makkah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            WhatsApp Booking
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com?text=Hello,%20I%20want%20to%20get%20a%20quote%20for%20a%20taxi%20from%20Amman%20to%20Makkah">
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
                                The Direct Route for Umrah Pilgrims From Jordan
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Amman to Makkah covers approximately 1,520 km — the longest of our Amman routes, at around 15 hours of driving. This is a dedicated Umrah transfer for pilgrims who want a single private vehicle from Amman straight to the Haram, without a connecting flight or shared transport.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Vehicles on this route are set up for pilgrims, with extra space for Ihram bags, and Muslim drivers who know the approved drop-off points near the Grand Mosque given the vehicle access restrictions close to the Haram.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Meeqat Stop Available</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~15 hours Journey</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~1,520 km Total</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Muslim Drivers</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Journey Highlights</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Door-to-Haram-Area Service</h4>
                                        <p className="text-sm text-gray-500">Your driver takes you as close to the Haram as vehicle access rules allow, then guides you to the nearest entrance on foot.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Meeqat Stop Included</h4>
                                        <p className="text-sm text-gray-500">For pilgrims entering Ihram, we stop at the appropriate Meeqat point along the route before continuing to Makkah.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Multi-Vehicle Group Bookings</h4>
                                        <p className="text-sm text-gray-500">For larger Umrah groups travelling together, we coordinate multiple vehicles departing Amman on the same schedule.</p>
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
                        contextName="Amman to Makkah"
                        points={[
                            {
                                topic: "Meeqat Timing",
                                commonBelief: "You can enter Ihram any time before Makkah.",
                                reality: "Pilgrims must enter Ihram at or before the Meeqat boundary for their route — our drivers know exactly where this is on the Amman-Makkah road and will stop there on request.",
                                truthRange: "Fixed Boundary Point",
                                factors: ["Meeqat Location", "Ihram Timing"]
                            },
                            {
                                topic: "Vehicle Access Near the Haram",
                                commonBelief: "The driver can drop you right at the Haram entrance.",
                                reality: "Private vehicles are restricted from the innermost zone around the Grand Mosque — your driver drops you at the nearest permitted point, a short walk from the entrances.",
                                truthRange: "Drop-off Zone Restrictions",
                                factors: ["Haram Vehicle Restrictions", "Walking Distance"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Makkah" />
                <RelatedRoutes originSlug="amman" currentSlug="amman-makkah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "Where is the Meeqat stop for this route?",
                        shortAnswer: "Qarn al-Manazil or Dhul Hulaifah",
                        detailedAnswer: "Pilgrims travelling from Amman typically enter Ihram at Qarn al-Manazil or Dhul Hulaifah depending on the exact route taken — tell your driver you need a Meeqat stop when booking and they'll plan accordingly.",
                        perspectives: []
                    },
                    {
                        question: "How close to the Haram can the car drop us off?",
                        shortAnswer: "A short walk from the entrances",
                        detailedAnswer: "Private vehicles cannot enter the innermost pedestrian zone around the Grand Mosque. Your driver will drop you at the nearest permitted point, typically a short walk from the Haram entrances.",
                        perspectives: []
                    },
                    {
                        question: "Can you arrange multiple vehicles for a group Umrah trip?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, for larger groups we can coordinate several vehicles departing Amman on the same schedule so everyone arrives together.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}



