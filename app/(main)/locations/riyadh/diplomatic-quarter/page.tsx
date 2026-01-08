import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Building, ShieldCheck, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer to Diplomatic Quarter (DQ) Riyadh | Embassy Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service for the Diplomatic Quarter. Secure, professional transport for embassies and Oud Square.',
    keywords: ['Diplomatic Quarter VIP transfer', 'Riyadh DQ premium chauffeur', 'Embassy executive transport', 'Oud Square VIP transfer', 'Al Safarat VIP car service'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/riyadh/diplomatic-quarter/',
    },
    openGraph: {
        title: 'VIP Private Transfer to Diplomatic Quarter (DQ) Riyadh',
        description: 'Executive VIP private transfer to the Diplomatic Quarter. Professional chauffeur service handling all checkpoint protocols for embassy visits.',
        url: 'https://taxiserviceksa.com/locations/riyadh/diplomatic-quarter/',
        type: 'website',
    },
};

export default function DiplomaticQuarterPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally DQ or Oud Square image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const dqSchema = {
        "@context": "https://schema.org",
        "@type": "GovernmentBuilding",
        "name": "Diplomatic Quarter (Al Safarat)",
        "description": "The international district of Riyadh housing embassies, diplomatic missions, and luxury dining at Oud Square.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Riyadh",
            "addressRegion": "Riyadh Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.6806",
            "longitude": "46.6231"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="dq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(dqSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer to Diplomatic Quarter (DQ)"
                bookingFormTitle="Request VIP Pickup"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Embassy & VIP Chauffeur
                    </span>
                }
                subtitle="Exclusive Access to Al Safarat District & Oud Square"
                location="Professional Checkpoint Handling | Executive Fleet"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Riyadh%20City&dropoff=Diplomatic%20Quarter">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Diplomatic Visit Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Intercity, Airport, and Full-Day transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-slate-800 font-bold uppercase tracking-wider text-sm">International Zone</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Secure Access to Al Safarat
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                The Diplomatic Quarter (DQ), or Al Safarat, is the most secure and prestigious district in Riyadh. It houses all foreign embassies, the UN headquarters, and the popular Oud Square dining complex.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Access is controlled via security checkpoints. While open to the public, navigating the internal circular roads and finding specific embassy gates can be confusing. Our drivers are experienced in the DQ layout.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Checkpoint Ready</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Embassy Drop</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Luxury Sedans</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Hourly Waiting</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Stops</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Embassies (US, UK, Schengen)</h4>
                                        <p className="text-sm text-gray-500">Direct drop-off at visitor gates for visa appointments.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Oud Square</h4>
                                        <p className="text-sm text-gray-500">The premier dining and coffee hub in the district.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Cultural Palace</h4>
                                        <p className="text-sm text-gray-500">Venue for major diplomatic events and exhibitions.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        points={[
                            {
                                topic: "Access",
                                commonBelief: "It's closed to non-diplomats.",
                                reality: "It is open to the public daily. You just need to pass a security checkpoint where they may check ID/Iqama.",
                                truthRange: "Open with ID",
                                factors: ["Security Check", "Valid ID"]
                            },
                            {
                                topic: "Ride Apps",
                                commonBelief: "Uber drivers know the way.",
                                reality: "Many drivers get confused by the DQ's roundabouts and one-way systems, often dropping you far from the embassy gate.",
                                truthRange: "Confusing Roads",
                                factors: ["Complex Layout", "One Way"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Riyadh" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "Do I need a special pass to enter the DQ?",
                        shortAnswer: "No",
                        detailedAnswer: "No, standard visitors just need a valid ID (Iqama or Passport) to show at the security checkpoint.",
                        perspectives: []
                    },
                    {
                        question: "Can you wait while I attend my visa appointment?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, visa appointments can take varying times. We recommend our hourly service so the driver waits nearby.",
                        perspectives: []
                    },
                    {
                        question: "How far is the DQ from King Khalid Airport?",
                        shortAnswer: "35-40 mins",
                        detailedAnswer: "It is on the western side of Riyadh, approximately 35-40 minutes from the airport depending on traffic.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
