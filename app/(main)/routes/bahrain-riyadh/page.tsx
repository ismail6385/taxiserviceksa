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
    title: 'Bahrain to Riyadh Taxi | Cross-Border Transfer | Taxi Service KSA',
    description: 'Request a premium quote from Bahrain to Riyadh. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
    keywords: ['Taxi Bahrain to Riyadh', 'Bahrain to Riyadh transfer', 'cross border taxi Saudi Arabia', 'VIP transport Bahrain Riyadh'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/bahrain-riyadh/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Bahrain to Riyadh Taxi | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Bahrain to Riyadh Taxi | Taxi Service KSA',
        description: 'Request a premium quote from Bahrain to Riyadh. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
        url: 'https://taxiserviceksa.com/routes/bahrain-riyadh/',
        type: 'website',
    },
};

export default function BahrainRiyadhRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Bahrain to Riyadh"
                description="Professional private car service for Bahrain to Riyadh. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Bahrain to Riyadh Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Bahrain to Riyadh Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Seamless Transfers: Bahrain to Riyadh"
                location="Door-to-Door Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Bahrain&dropoff=Riyadh">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            WhatsApp Booking (1200 SAR)
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/966569487569?text=Hello,%20I%20want%20to%20book%20a%20taxi%20from%20Bahrain%20to%20Riyadh">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Causeway + Highway 95</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                A Comfortable Half-Day Drive to the Capital
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Bahrain to Riyadh covers roughly 490 km — across the King Fahd Causeway, then west along Highway 95 through the Eastern Province to the capital. It's a genuine half-day drive, comfortably doable in a single sitting with one rest stop.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                This route is popular with business travellers heading to meetings in Riyadh, and with GCC residents visiting family in the capital who prefer door-to-door privacy over a connecting flight through Dammam.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Via Highway 95</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">5-5.5 hours Journey</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~490 km Total</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Single-Day Trip</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Journey Highlights</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Causeway Then Highway 95</h4>
                                        <p className="text-sm text-gray-500">The route crosses the King Fahd Causeway before joining Highway 95, the main Eastern Province-to-Riyadh corridor.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">One Comfortable Rest Stop</h4>
                                        <p className="text-sm text-gray-500">Most journeys include a single stop roughly halfway, at a highway service station, for prayer, fuel, and refreshments.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Direct to Your Riyadh Address</h4>
                                        <p className="text-sm text-gray-500">Whether it's a hotel, a business district, or a private residence, you're dropped exactly where you need to be — no transfer required.</p>
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
                        contextName="Bahrain to Riyadh"
                        points={[
                            {
                                topic: "Flight vs Private Car",
                                commonBelief: "A flight is always faster overall.",
                                reality: "Flight time is under two hours, but add airport check-in, security, and baggage claim on both ends, and a private car's 5-5.5 hour door-to-door drive is often competitive — especially for groups or anyone with extra luggage.",
                                truthRange: "Depends on Group Size",
                                factors: ["Total Door-to-Door Time", "Luggage & Group Comfort"]
                            },
                            {
                                topic: "Best Time to Travel",
                                commonBelief: "Any time of day is the same.",
                                reality: "An early morning departure avoids both the weekend causeway rush and the worst of the daytime heat on the Highway 95 stretch through the Eastern Province.",
                                truthRange: "Morning Departure Recommended",
                                factors: ["Causeway Traffic", "Desert Heat"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Riyadh" />
                <RelatedRoutes originSlug="bahrain" currentSlug="bahrain-riyadh" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "Is Bahrain to Riyadh doable in one day?",
                        shortAnswer: "Yes, easily",
                        detailedAnswer: "Yes. At 5-5.5 hours of driving, it's a comfortable single-day journey with time to spare for a rest stop — no overnight stay is needed.",
                        perspectives: []
                    },
                    {
                        question: "What's the route from Bahrain to Riyadh?",
                        shortAnswer: "Causeway, then Highway 95",
                        detailedAnswer: "The drive crosses the King Fahd Causeway into the Eastern Province, then follows Highway 95 west to Riyadh — the main road used for Eastern Province-to-capital traffic.",
                        perspectives: []
                    },
                    {
                        question: "Can I book a large SUV for a family trip to Riyadh?",
                        shortAnswer: "Yes, GMC Yukon or similar",
                        detailedAnswer: "Yes. For the 490 km journey, we recommend a GMC Yukon or similar SUV for families or groups of 4+ — more comfortable than a sedan over a multi-hour drive.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}



