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
    title: 'Sharjah to Madinah Taxi | Cross-Border Transfer | Taxi Service KSA',
    description: 'Request a premium quote from Sharjah to Madinah. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
    keywords: ['Taxi Sharjah to Madinah', 'Sharjah to Madinah transfer', 'cross border taxi Saudi Arabia', 'VIP transport Sharjah Madinah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/sharjah-madinah/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Sharjah to Madinah Taxi | Cross-Border Transfer | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Sharjah to Madinah Taxi | Cross-Border Transfer | Taxi Service KSA',
        description: 'Request a premium quote from Sharjah to Madinah. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
        url: 'https://taxiserviceksa.com/routes/sharjah-madinah/',
        type: 'website',
    },
};

export default function SharjahMadinahRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Sharjah to Madinah"
                description="Professional private car service for Sharjah to Madinah. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Sharjah to Madinah Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Sharjah to Madinah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Seamless Transfers: Sharjah to Madinah"
                location="Door-to-Door Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Sharjah&dropoff=Madinah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            WhatsApp Booking
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com?text=Hello,%20I%20want%20to%20get%20a%20quote%20for%20a%20taxi%20from%20Sharjah%20to%20Madinah">
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
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Two-Day Pilgrimage Transfer</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                A Two-Day Drive Straight to the Prophet's Mosque
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Sharjah to Madinah covers approximately 1,895 km — at around 18.5 hours of driving, one of the longest routes we operate. We plan this honestly as a two-day journey with a scheduled overnight stop, not a single exhausting push.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Many clients on this route are performing Ziyarat before their Umrah, or UAE-based family groups combining a Madinah visit with a wider Saudi trip. Drivers on this route are Muslim and familiar with Madinah's Haram-area drop-off points.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Muslim Drivers</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~18.5 hours Journey</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~1,895 km Total</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Overnight Stop Planned</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Journey Highlights</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Madinah-First Itinerary</h4>
                                        <p className="text-sm text-gray-500">A popular choice for pilgrims who prefer to visit the Prophet's Mosque first, then continue to Makkah for Umrah on a separate leg.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Scheduled Overnight Stop</h4>
                                        <p className="text-sm text-gray-500">Rather than an 18.5-hour non-stop push, we build in a proper overnight rest roughly midway.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Muslim Drivers, Haram-Area Familiar</h4>
                                        <p className="text-sm text-gray-500">All drivers on this route are Muslim and know the designated drop-off points closest to Masjid an-Nabawi.</p>
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
                        contextName="Sharjah to Madinah"
                        points={[
                            {
                                topic: "Madinah First or Makkah First",
                                commonBelief: "It doesn't matter which holy city you visit first.",
                                reality: "Many pilgrims specifically choose to perform Ziyarat in Madinah before Umrah in Makkah — this route serves exactly that itinerary, with a separate onward transfer available for the Makkah leg.",
                                truthRange: "Personal / Scholarly Preference",
                                factors: ["Ziyarat Timing", "Onward Route to Makkah"]
                            },
                            {
                                topic: "Is This a One-Day Drive?",
                                commonBelief: "A determined driver could finish this in one day.",
                                reality: "At 1,895 km and around 18.5 hours, we don't book this as a single push — we plan a proper overnight stop so pilgrims arrive rested for their first visit to the mosque, not exhausted.",
                                truthRange: "Two-Day Journey by Design",
                                factors: ["Driver Fatigue", "Rest Before First Visit"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Madinah" />
                <RelatedRoutes originSlug="sharjah" currentSlug="sharjah-madinah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "Can I stop for Ziyarat sites along the way?",
                        shortAnswer: "Ziyarat is arranged once in Madinah",
                        detailedAnswer: "The direct route doesn't pass through other Ziyarat sites, but once in Madinah we can arrange a dedicated Ziyarat tour (Quba, Uhud, the Seven Mosques) separately — just ask when booking.",
                        perspectives: []
                    },
                    {
                        question: "Is this a one-day or two-day journey?",
                        shortAnswer: "Two days, with an overnight stop",
                        detailedAnswer: "At around 18.5 hours and 1,895 km, we plan this as a two-day journey with a scheduled overnight stop so you arrive rested rather than exhausted after a very late-night drive.",
                        perspectives: []
                    },
                    {
                        question: "Are the drivers on this route Muslim?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, drivers assigned to Madinah routes are Muslim and familiar with the designated drop-off areas closest to Masjid an-Nabawi.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}



