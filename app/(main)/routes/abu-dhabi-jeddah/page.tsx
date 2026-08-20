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
    title: 'Abu Dhabi to Jeddah Taxi | Cross-Border Transfer | Taxi Service KSA',
    description: 'Request a premium quote from Abu Dhabi to Jeddah. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
    keywords: ['Taxi Abu Dhabi to Jeddah', 'Abu Dhabi to Jeddah transfer', 'cross border taxi Saudi Arabia', 'VIP transport Abu Dhabi Jeddah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/abu-dhabi-jeddah/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Abu Dhabi to Jeddah Taxi | Cross-Border Transfer | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Abu Dhabi to Jeddah Taxi | Cross-Border Transfer | Taxi Service KSA',
        description: 'Request a premium quote from Abu Dhabi to Jeddah. Reliable cross-border transfers, comfortable SUVs, and door-to-door service across the GCC.',
        url: 'https://taxiserviceksa.com/routes/abu-dhabi-jeddah/',
        type: 'website',
    },
};

export default function AbuDhabiJeddahRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Abu Dhabi to Jeddah"
                description="Professional private car service for Abu Dhabi to Jeddah. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Abu Dhabi to Jeddah Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Abu Dhabi to Jeddah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Seamless Transfers: Abu Dhabi to Jeddah"
                location="Door-to-Door Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Abu Dhabi&dropoff=Jeddah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            WhatsApp Booking
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com?text=Hello,%20I%20want%20to%20get%20a%20quote%20for%20a%20taxi%20from%20Abu Dhabi%20to%20Jeddah">
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
                                A Genuine Two-Day Crossing to the Red Sea
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Abu Dhabi to Jeddah covers approximately 1,915 km, at around 19.5 hours of driving. We're upfront about this: it is not a one-day trip. We plan it as a two-day journey with a scheduled overnight stop, not a single marathon drive.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Most bookings are Umrah pilgrims who prefer a fully private drive over a connecting flight, and UAE-based families relocating to or visiting the Jeddah area. We require at least 72 hours notice to plan the route, overnight stop, and driver rotation properly.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Overnight Stop Planned</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~19.5 hours Journey</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~1,915 km Total</span>
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
                                        <p className="text-sm text-gray-500">We plan a proper hotel stop roughly midway, rather than expecting one driver to cover 19.5 hours straight.</p>
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
                        contextName="Abu Dhabi Jeddah"
                        points={[
                            {
                                topic: "Is This Really Driveable in One Day?",
                                commonBelief: "A long enough drive can always be pushed through in one day.",
                                reality: "At 1,915 km, we don't offer this as a single non-stop drive — fatigue risk on a 19.5-hour route is real, so we build in a planned overnight stop rather than pretending it's a long day trip.",
                                truthRange: "Two-Day Journey by Design",
                                factors: ["Driver Fatigue", "Safety Over Speed"]
                            },
                            {
                                topic: "Fly vs Drive for This Distance",
                                commonBelief: "Nobody would choose to drive this far.",
                                reality: "Pilgrims who want to skip airport transfers entirely, or families with heavy luggage and no interest in a connecting flight, regularly choose the private overnight drive despite the extra time.",
                                truthRange: "Group-Dependent Choice",
                                factors: ["No Airport Transfers", "Private Door-to-Door"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Jeddah" />
                <RelatedRoutes originSlug="abu-dhabi" currentSlug="abu-dhabi-jeddah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "Is Abu Dhabi to Jeddah a one-day or two-day trip?",
                        shortAnswer: "Two days, with a planned overnight stop",
                        detailedAnswer: "At around 19.5 hours and 1,915 km, we plan this as a two-day journey with a scheduled overnight hotel stop roughly midway, rather than one driver attempting it non-stop.",
                        perspectives: []
                    },
                    {
                        question: "Do you provide a second driver for this route?",
                        shortAnswer: "Yes, included",
                        detailedAnswer: "Yes, a driver rotation is part of the standard plan for a journey this long, not an optional extra — it's safer and more comfortable for everyone.",
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



