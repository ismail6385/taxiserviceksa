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
    title: 'Abu Dhabi to Riyadh Taxi | Cross-Border Transfer | Taxi Service KSA',
    description: 'Request a premium quote from Abu Dhabi to Riyadh. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
    keywords: ['Taxi Abu Dhabi to Riyadh', 'Abu Dhabi to Riyadh transfer', 'cross border taxi Saudi Arabia', 'VIP transport Abu Dhabi Riyadh'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/abu-dhabi-riyadh/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Abu Dhabi to Riyadh Taxi | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Abu Dhabi to Riyadh Taxi | Taxi Service KSA',
        description: 'Request a premium quote from Abu Dhabi to Riyadh. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
        url: 'https://taxiserviceksa.com/routes/abu-dhabi-riyadh/',
        type: 'website',
    },
};

export default function AbuDhabiRiyadhRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Abu Dhabi to Riyadh"
                description="Professional private car service for Abu Dhabi to Riyadh. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Abu Dhabi to Riyadh Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Abu Dhabi to Riyadh Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Seamless Transfers: Abu Dhabi to Riyadh"
                location="Door-to-Door Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Abu Dhabi&dropoff=Riyadh">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            WhatsApp Booking (2300 SAR)
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/966563573531?text=Hello,%20I%20want%20to%20book%20a%20taxi%20from%20Abu Dhabi%20to%20Riyadh">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Al Batha Border</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Across the Empty Quarter Corridor to Riyadh
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Abu Dhabi to Riyadh covers approximately 880 km via the Al Ghuwaifat-Al Batha border crossing, running along the edge of the Empty Quarter into the Saudi capital. At around 9 hours of driving, it's the shortest of our UAE-Riyadh routes.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                This route is regularly booked by UAE government and diplomatic staff moving between the two capitals, business travellers attending meetings in Riyadh, and families who prefer door-to-door travel over a connecting flight and airport transfers.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Al Batha Crossing</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~9 hours Journey</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~880 km Total</span>
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
                                        <p className="text-sm text-gray-500">One vehicle, one driver, no connecting flight — straight from your Abu Dhabi pickup to your Riyadh destination.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Business & Diplomatic Travel</h4>
                                        <p className="text-sm text-gray-500">Wi-Fi-ready sedans and a quiet cabin for calls or work en route, regularly used by government and corporate travellers.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Desert Highway Rest Stops</h4>
                                        <p className="text-sm text-gray-500">The Empty Quarter stretch has limited services — our drivers know exactly where to stop for fuel, prayer, and refreshments.</p>
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
                        contextName="Abu Dhabi Riyadh"
                        points={[
                            {
                                topic: "The Empty Quarter Stretch",
                                commonBelief: "It's just an ordinary highway drive.",
                                reality: "A section of this route skirts the Rub al Khali (Empty Quarter) with wide gaps between towns — our drivers plan fuel and rest stops around this rather than assuming services are always nearby.",
                                truthRange: "Route-Specific Planning",
                                factors: ["Sparse Services Section", "Fuel Stop Planning"]
                            },
                            {
                                topic: "Fly vs Drive Between the Capitals",
                                commonBelief: "Flying is always faster for official travel.",
                                reality: "Once you add airport check-in, security, and taxis at both ends, a 9-hour direct drive is close to flying door-to-door — with no baggage handling and a private, working cabin throughout.",
                                truthRange: "Comparable Door-to-Door Time",
                                factors: ["Airport Overhead", "Direct Door-to-Door"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Riyadh" />
                <RelatedRoutes originSlug="abu-dhabi" currentSlug="abu-dhabi-riyadh" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long does a taxi take from Abu Dhabi to Riyadh?",
                        shortAnswer: "Around 9 hours",
                        detailedAnswer: "The total driving time is around 9 hours for the 880 km route. Border crossing at Al Batha typically adds 30 minutes to 2 hours depending on the season and time of day.",
                        perspectives: []
                    },
                    {
                        question: "Does the route pass through desert with no services?",
                        shortAnswer: "Yes, part of it",
                        detailedAnswer: "Yes, a stretch of this route runs along the edge of the Empty Quarter where towns are spaced further apart. Our drivers plan the journey around this so fuel and rest stops are never a problem.",
                        perspectives: []
                    },
                    {
                        question: "Is the border vehicle insurance included in the price?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, our quoted price of 2300 SAR includes the vehicle crossing insurance and toll fees.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}



