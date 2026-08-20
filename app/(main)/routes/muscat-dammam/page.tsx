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
    title: 'Muscat to Dammam Taxi | Cross-Border Transfer | Taxi Service KSA',
    description: 'Request a premium quote from Muscat to Dammam. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
    keywords: ['Taxi Muscat to Dammam', 'Muscat to Dammam transfer', 'cross border taxi Saudi Arabia', 'VIP transport Muscat Dammam'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/muscat-dammam/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Muscat to Dammam Taxi | Cross-Border Transfer | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Muscat to Dammam Taxi | Cross-Border Transfer | Taxi Service KSA',
        description: 'Request a premium quote from Muscat to Dammam. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
        url: 'https://taxiserviceksa.com/routes/muscat-dammam/',
        type: 'website',
    },
};

export default function MuscatDammamRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Muscat to Dammam"
                description="Professional private car service for Muscat to Dammam. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Muscat to Dammam Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Muscat to Dammam Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Seamless Transfers: Muscat to Dammam"
                location="Door-to-Door Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Muscat&dropoff=Dammam">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            WhatsApp Booking
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com?text=Hello,%20I%20want%20to%20get%20a%20quote%20for%20a%20taxi%20from%20Muscat%20to%20Dammam">
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
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Shortest Muscat Route</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Across the Interior to the Eastern Province
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Muscat to Dammam covers approximately 1,149 km, the shortest of our Muscat routes, crossing Oman's interior near Ibri before continuing into Saudi Arabia's Eastern Province. At around 12 hours of driving, it's a comfortable single-day journey.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                This route is used by Omani families and business travellers connected to the Eastern Province's oil-and-gas sector, along with residents who prefer a private door-to-door drive over a connecting flight and multiple transfers.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Interior Desert Route</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~12 hours Journey</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~1,149 km Total</span>
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
                                        <h4 className="font-bold text-gray-900">The Shortest Muscat Route</h4>
                                        <p className="text-sm text-gray-500">At 1,149 km, Dammam is genuinely the closest major Saudi city we serve from Muscat — shorter than Riyadh despite being further north.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Petrochemical Corridor</h4>
                                        <p className="text-sm text-gray-500">A regular route for professionals connected to the Dammam/Jubail industrial belt.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Interior Desert Crossing</h4>
                                        <p className="text-sm text-gray-500">The route runs through Oman's interior near Ibri — our drivers know the fuel and rest stops along this less-travelled stretch.</p>
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
                        contextName="Muscat to Dammam"
                        points={[
                            {
                                topic: "Dammam vs Riyadh Distance",
                                commonBelief: "Riyadh should be closer since it's the more commonly booked route.",
                                reality: "Dammam is actually the shorter drive from Muscat — around 1,149 km versus roughly 1,345 km to Riyadh, since the Eastern Province sits closer along this corridor.",
                                truthRange: "Route-Dependent",
                                factors: ["Interior Route", "Comparative Distance"]
                            },
                            {
                                topic: "Business vs Family Travel",
                                commonBelief: "This route is mainly for oil industry workers.",
                                reality: "While the petrochemical corridor drives a lot of traffic, an equal share of bookings are Omani families and travellers who simply prefer a private door-to-door drive.",
                                truthRange: "Mixed Use Route",
                                factors: ["Business Travel", "Family Visits"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Dammam" />
                <RelatedRoutes originSlug="muscat" currentSlug="muscat-dammam" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long does a taxi take from Muscat to Dammam?",
                        shortAnswer: "Around 12 hours",
                        detailedAnswer: "The total driving time is around 12 hours for the 1,149 km route — the shortest of our Muscat routes. Border crossing times can vary between 30 minutes to 2 hours depending on the season and time of day.",
                        perspectives: []
                    },
                    {
                        question: "Is this genuinely the closest Saudi city from Muscat?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, Dammam is genuinely the closest major Saudi city we serve from Muscat, slightly shorter than the drive to Riyadh.",
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



