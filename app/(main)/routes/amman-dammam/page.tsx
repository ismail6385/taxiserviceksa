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
    title: 'Amman to Dammam Taxi | Cross-Border Transfer | Taxi Service KSA',
    description: 'Request a premium quote from Amman to Dammam. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
    keywords: ['Taxi Amman to Dammam', 'Amman to Dammam transfer', 'cross border taxi Saudi Arabia', 'VIP transport Amman Dammam'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/amman-dammam/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Amman to Dammam Taxi | Cross-Border Transfer | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Amman to Dammam Taxi | Cross-Border Transfer | Taxi Service KSA',
        description: 'Request a premium quote from Amman to Dammam. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
        url: 'https://taxiserviceksa.com/routes/amman-dammam/',
        type: 'website',
    },
};

export default function AmmanDammamRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Amman to Dammam"
                description="Professional private car service for Amman to Dammam. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Amman to Dammam Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Amman to Dammam Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Seamless Transfers: Amman to Dammam"
                location="Door-to-Door Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Amman&dropoff=Dammam">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            WhatsApp Booking
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com?text=Hello,%20I%20want%20to%20get%20a%20quote%20for%20a%20taxi%20from%20Amman%20to%20Dammam">
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
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Two-Day Private Transfer</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                The Longest Route We Run From Amman
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Amman to Dammam covers approximately 1,596 km — genuinely further than Amman to Riyadh, since the road continues east across the Kingdom to reach the Eastern Province. At around 18 hours of driving, we plan this as a two-day journey with a scheduled overnight stop.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Most bookings are Jordanian families and business travellers connected to the Eastern Province's oil-and-gas sector. We require at least 72 hours notice to plan the route, overnight stop, and driver rotation properly.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Overnight Stop Planned</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~18 hours Journey</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~1,596 km Total</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Book 72h Ahead</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Journey Highlights</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Scheduled Overnight Stop</h4>
                                        <p className="text-sm text-gray-500">We plan a proper hotel stop roughly midway, rather than expecting one driver to cover 18 hours straight.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Driver Rotation Included</h4>
                                        <p className="text-sm text-gray-500">For a journey this long, a second driver is part of the standard plan — not an optional extra.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Petrochemical Corridor</h4>
                                        <p className="text-sm text-gray-500">A regular route for professionals connected to the Dammam/Jubail industrial belt.</p>
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
                        contextName="Amman to Dammam"
                        points={[
                            {
                                topic: "Dammam vs Riyadh Distance",
                                commonBelief: "Riyadh must be the further destination since it's the capital.",
                                reality: "Dammam is actually the longer drive from Amman — the road continues past Riyadh's latitude and east across the Kingdom, adding real distance rather than shortcutting to the coast.",
                                truthRange: "Counter-Intuitive Geography",
                                factors: ["Route Direction", "Total Distance"]
                            },
                            {
                                topic: "Is This a One-Day Drive?",
                                commonBelief: "A determined driver could finish this in one day.",
                                reality: "At 1,596 km and around 18 hours, we don't book this as a single push — we plan a proper overnight stop so the journey stays safe and comfortable.",
                                truthRange: "Two-Day Journey by Design",
                                factors: ["Driver Fatigue", "Safety Over Speed"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Dammam" />
                <RelatedRoutes originSlug="amman" currentSlug="amman-dammam" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "Is Amman to Dammam a one-day or two-day trip?",
                        shortAnswer: "Two days, with a planned overnight stop",
                        detailedAnswer: "At around 18 hours and 1,596 km, we plan this as a two-day journey with a scheduled overnight hotel stop roughly midway, rather than one driver attempting it non-stop.",
                        perspectives: []
                    },
                    {
                        question: "Why is Dammam further than Riyadh from Amman?",
                        shortAnswer: "The road continues east past Riyadh",
                        detailedAnswer: "The route to Dammam doesn't branch off early — it follows the same corridor toward Riyadh and then continues east across the Kingdom to the Eastern Province, adding real distance.",
                        perspectives: []
                    },
                    {
                        question: "How much advance notice do you need?",
                        shortAnswer: "At least 72 hours",
                        detailedAnswer: "We recommend at least 72 hours notice so we can properly plan the route, book the overnight stop, and confirm a driver rotation in advance.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}



