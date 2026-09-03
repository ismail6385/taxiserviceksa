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
    title: 'Bahrain to Dammam Taxi | Cross-Border Transfer | Taxi Service KSA',
    description: 'Request a premium quote from Bahrain to Dammam. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
    keywords: ['Taxi Bahrain to Dammam', 'Bahrain to Dammam transfer', 'cross border taxi Saudi Arabia', 'VIP transport Bahrain Dammam'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/bahrain-dammam/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Bahrain to Dammam Taxi | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Bahrain to Dammam Taxi | Taxi Service KSA',
        description: 'Request a premium quote from Bahrain to Dammam. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
        url: 'https://taxiserviceksa.com/routes/bahrain-dammam/',
        type: 'website',
    },
};

export default function BahrainDammamRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Bahrain to Dammam"
                description="Professional private car service for Bahrain to Dammam. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Bahrain to Dammam Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Bahrain to Dammam Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Seamless Transfers: Bahrain to Dammam"
                location="Door-to-Door Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Bahrain&dropoff=Dammam">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            WhatsApp Booking (450 SAR)
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/966590209905?text=Hello,%20I%20want%20to%20book%20a%20taxi%20from%20Bahrain%20to%20Dammam">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">King Fahd Causeway</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                The Fastest Border Crossing in the GCC
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Bahrain to Dammam is the shortest and most established land crossing in the Gulf — a 25km drive across the King Fahd Causeway connects Manama directly to Al Khobar and Dammam in the Eastern Province. At around 110 km door-to-door, this is a comfortable day-trip drive, not a long-haul journey.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Thousands of Bahraini residents and Eastern Province workers cross the causeway every week for business meetings, shopping, and family visits. Our drivers know the dedicated passenger lanes and the weekend rush patterns, so you spend less time at passport control and more time at your destination.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Causeway Border</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">1.5-2 hours Journey</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~110 km Total</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Same-Day Return</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Journey Highlights</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">25km Causeway Crossing</h4>
                                        <p className="text-sm text-gray-500">The King Fahd Causeway itself takes about 20-25 minutes to drive, with dedicated passport control lanes for GCC nationals on both ends.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Same-Day Round Trips</h4>
                                        <p className="text-sm text-gray-500">At only 1.5-2 hours each way, a same-day return for a meeting or a shopping trip in Al Khobar or Dammam is our most common booking on this route.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Aramco &amp; Business District Access</h4>
                                        <p className="text-sm text-gray-500">A regular route for Saudi Aramco visitors and Eastern Province business travellers commuting between the two cities.</p>
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
                        contextName="Bahrain to Dammam"
                        points={[
                            {
                                topic: "Weekend Causeway Traffic",
                                commonBelief: "The causeway is quick at any time.",
                                reality: "Thursday evening and Friday morning see the heaviest weekend crossing traffic, as Bahraini and Saudi residents travel for the weekend. Booking a specific pickup time helps you avoid the queue.",
                                truthRange: "Time-of-Day Matters",
                                factors: ["Weekend Rush", "Passport Control Lanes"]
                            },
                            {
                                topic: "Same-Day vs Overnight",
                                commonBelief: "You need to stay overnight for this trip.",
                                reality: "At just 1.5-2 hours each way, a same-day round trip for a single meeting or a day of shopping is the most common way clients book this route.",
                                truthRange: "Day-Trip Friendly",
                                factors: ["Short Distance", "Fixed Return Rate"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Dammam" />
                <RelatedRoutes originSlug="bahrain" currentSlug="bahrain-dammam" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long does it take to cross the King Fahd Causeway?",
                        shortAnswer: "20-25 minutes on the bridge",
                        detailedAnswer: "The causeway itself is about 25 km and takes 20-25 minutes to drive, plus passport control on both the Bahrain and Saudi sides — typically 20-40 minutes total depending on how busy the crossing is.",
                        perspectives: []
                    },
                    {
                        question: "Can I book a same-day return from Dammam to Bahrain?",
                        shortAnswer: "Yes, it's our most common booking",
                        detailedAnswer: "Yes. Because the one-way trip is only 1.5-2 hours, same-day round trips are the most common way this route is booked — ideal for a single business meeting or a day of shopping in Al Khobar or Dammam.",
                        perspectives: []
                    },
                    {
                        question: "What documents do I need for the causeway crossing?",
                        shortAnswer: "A valid passport",
                        detailedAnswer: "A valid passport is required for all nationalities. GCC citizens can use their national ID at the dedicated GCC lanes, which move faster than the general visitor lanes.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}



