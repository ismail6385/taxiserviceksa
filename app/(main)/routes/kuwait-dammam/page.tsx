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
    title: 'Kuwait to Dammam Taxi | Cross-Border Transfer | Taxi Service KSA',
    description: 'Request a premium quote from Kuwait to Dammam. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
    keywords: ['Taxi Kuwait to Dammam', 'Kuwait to Dammam transfer', 'cross border taxi Saudi Arabia', 'VIP transport Kuwait Dammam'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/kuwait-dammam/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Kuwait to Dammam Taxi | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Kuwait to Dammam Taxi | Taxi Service KSA',
        description: 'Request a premium quote from Kuwait to Dammam. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
        url: 'https://taxiserviceksa.com/routes/kuwait-dammam/',
        type: 'website',
    },
};

export default function KuwaitDammamRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Kuwait to Dammam"
                description="Professional private car service for Kuwait to Dammam. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Kuwait to Dammam Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Kuwait to Dammam Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Seamless Transfers: Kuwait to Dammam"
                location="Door-to-Door Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Kuwait&dropoff=Dammam">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            WhatsApp Booking (1000 SAR)
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/966590209905?text=Hello,%20I%20want%20to%20book%20a%20taxi%20from%20Kuwait%20to%20Dammam">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Nuwaiseeb Border</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Across the Nuwaiseeb Crossing to the Eastern Province
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Kuwait to Dammam covers approximately 440 km via the Nuwaiseeb (Khafji) border crossing, the main land route connecting Kuwait to Saudi Arabia's Eastern Province. At 4-4.5 hours, it's a comfortable single-day drive rather than an overnight trip.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                This is a well-travelled corridor for Kuwaiti and Saudi families, oil-and-gas sector professionals moving between the two countries' petrochemical hubs, and residents visiting relatives across the border.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Nuwaiseeb Crossing</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">4-4.5 hours Journey</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~440 km Total</span>
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
                                        <h4 className="font-bold text-gray-900">Nuwaiseeb Border Crossing</h4>
                                        <p className="text-sm text-gray-500">Our drivers cross regularly at Nuwaiseeb (Khafji) and know the fastest lanes for GCC nationals and visiting passengers alike.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Petrochemical Corridor</h4>
                                        <p className="text-sm text-gray-500">A regular route for oil-and-gas professionals commuting between Kuwait and the Jubail/Dammam industrial belt.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Same-Day Return Available</h4>
                                        <p className="text-sm text-gray-500">At 4-4.5 hours each way, many clients book a same-day round trip for a single meeting or family visit.</p>
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
                        contextName="Kuwait to Dammam"
                        points={[
                            {
                                topic: "Holiday Border Queues",
                                commonBelief: "The Nuwaiseeb crossing is always quick.",
                                reality: "During Eid and Saudi/Kuwaiti national holidays, the Nuwaiseeb crossing sees significantly longer queues than a normal weekday. Booking a few hours' buffer around holiday travel is worth it.",
                                truthRange: "Holiday-Dependent",
                                factors: ["Eid Travel Season", "Weekday vs Holiday"]
                            },
                            {
                                topic: "Business vs Family Travel",
                                commonBelief: "This route is mainly for oil industry workers.",
                                reality: "While the petrochemical corridor drives a lot of traffic, an equal share of bookings are families visiting relatives across the border — the drive is short enough for a comfortable day trip either way.",
                                truthRange: "Mixed Use Route",
                                factors: ["Business Travel", "Family Visits"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Dammam" />
                <RelatedRoutes originSlug="kuwait" currentSlug="kuwait-dammam" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "Which border crossing do you use between Kuwait and Dammam?",
                        shortAnswer: "Nuwaiseeb (Khafji)",
                        detailedAnswer: "We cross at Nuwaiseeb on the Kuwaiti side, matched with Khafji on the Saudi side — the standard land crossing for this route, open 24 hours.",
                        perspectives: []
                    },
                    {
                        question: "Can I book a same-day round trip?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes. At 4-4.5 hours each way, a same-day round trip for a single meeting or family visit is a common way this route is booked.",
                        perspectives: []
                    },
                    {
                        question: "Is this route busy during Saudi or Kuwaiti holidays?",
                        shortAnswer: "Yes, plan extra time",
                        detailedAnswer: "Yes — during Eid and other national holidays, the Nuwaiseeb crossing gets noticeably busier. We recommend booking with a little extra buffer time during those periods.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}



