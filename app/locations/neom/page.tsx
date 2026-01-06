import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Gem, Construction, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer & Chauffeur NEOM | Tabuk to The Line',
    description: 'Premium VIP private transfer and executive chauffeur service to NEOM, The Line, Trojena, and Sindalah. Specialized 4x4 desert luxury for consultants and executives.',
    keywords: ['NEOM VIP private transfer', 'Executive chauffeur NEOM', 'Tabuk to NEOM VIP', 'The Line premium transport', 'Sindalah VIP transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/neom/',
    },
    openGraph: {
        title: 'VIP Transfer to NEOM (The Line, Trojena, Sindalah)',
        description: 'Premium VIP transfer from Tabuk to NEOM projects. We serve NC1, NC2, Oxagon, and the Base Camp.',
        url: 'https://taxiserviceksa.com/locations/neom/',
        type: 'website',
    },
};

export default function NeomPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally NEOM / Desert landscape image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const neomSchema = {
        "@context": "https://schema.org",
        "@type": "Place",
        "name": "NEOM",
        "description": "A futuristic region in northwest Saudi Arabia being built from scratch, including The Line, Oxagon, and Trojena.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tabuk Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.0000",
            "longitude": "35.3000"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="neom-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(neomSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer & Chauffeur NEOM"
                bookingFormTitle="Book Premium Transfer in NEOM"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        VIP Chauffeur Service NEOM
                    </span>
                }
                subtitle="Future-Ready Executive Logistics"
                location="Tabuk & NEOM Bay VIP Pickup"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Tabuk%20Airport&dropoff=NEOM%20Community%201">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Executive Project Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked Project, Intercity, and VIP Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">Giga-Project Access</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Reliable Transport to the New Frontier
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                NEOM is a massive region, not a single city. Getting there usually involves flying into Tabuk Regional Airport (TUU) or the new NEOM Bay Airport (NUM).
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Distances are vast. The drive from Tabuk to the NEOM Community camps (NC1, NC2) can take 2-3 hours through the desert. We provide reliable GMC Yukons and 4x4s for consultants, engineers, and early visitors.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Construction className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Community Camps</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Gem className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">The Line Visits</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Long Distance 4x4</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <DollarSign className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Fixed Project Rates</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Locations</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">NEOM Community 1 & 2</h4>
                                        <p className="text-sm text-gray-500">The main residential camps for staff and contractors. ~180km from Tabuk.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Oxagon</h4>
                                        <p className="text-sm text-gray-500">The industrial floating city project near Duba port.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Gayal / Sharma</h4>
                                        <p className="text-sm text-gray-500">Coastal towns that serve as the gateway to Sindalah and The Line.</p>
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
                                topic: "Distance",
                                commonBelief: "It's close to Tabuk.",
                                reality: "It is FAR. Tabuk to NEOM Bay is ~200km (2+ hours). You need a reliable SUV with AC, not a basic city vehicle.",
                                truthRange: "200km+",
                                factors: ["Desert Drive", "No Stops"]
                            },
                            {
                                topic: "Access",
                                commonBelief: "Anyone can drive in.",
                                reality: "Construction zones are strictly restricted. You need a badge or a host to enter the camps. We drop you at the security reception.",
                                truthRange: "Restricted Zones",
                                factors: ["Security Badges", "Checkpoints"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Tabuk" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How much is a VIP transfer from Tabuk to NEOM?",
                        shortAnswer: "SAR 400-600",
                        detailedAnswer: "Due to the long distance (3-4 hour round trip for the driver), rates typically range from SAR 400 to SAR 600.",
                        perspectives: []
                    },
                    {
                        question: "Do you serve NEOM Bay Airport?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we can pick you up from NEOM Bay Airport (NUM) if you have flight booking there.",
                        perspectives: []
                    },
                    {
                        question: "Can you enter the community camps?",
                        shortAnswer: "Reception Only",
                        detailedAnswer: "Without a specific vehicle permit, we can only drop you at the main security reception centers (Visitor Center).",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
