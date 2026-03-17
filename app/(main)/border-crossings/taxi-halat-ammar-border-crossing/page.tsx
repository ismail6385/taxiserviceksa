import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, ShieldCheck, Globe, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi Halat Ammar Border Crossing (Jordan) | 24/7 VIP Transfers',
    description: 'Need a taxi at Halat Ammar Border? We provide reliable, 24/7 VIP cross-border transfers between Saudi Arabia and Jordan. Get a quote now.',
    keywords: ['Taxi Halat Ammar border crossing', 'Halat Ammar border to Saudi Arabia taxi', 'Taxi from Halat Ammar to Riyadh', 'Cross border taxi Jordan', 'Halat Ammar immigration taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/border-crossings/taxi-halat-ammar-border-crossing/',
    },
    openGraph: {
        title: 'Taxi Halat Ammar Border Crossing (Jordan)',
        description: 'Need a taxi at Halat Ammar Border? We provide reliable, 24/7 VIP cross-border transfers between Saudi Arabia and Jordan. Get a quote now.',
        url: 'https://taxiserviceksa.com/border-crossings/taxi-halat-ammar-border-crossing/',
        type: 'website',
    },
};

export default function HalatAmmarBorderPage() {
    const images = ['/hero-slide-3.webp', '/hero-slide-2.webp', '/jeddah-airport.webp'];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Taxi Halat Ammar Border Crossing (Jordan)",
        "provider": {
            "@type": "TransportationService",
            "name": "TaxiServiceKSA"
        },
        "areaServed": [
            { "@type": "Place", "name": "Halat Ammar Border" },
            { "@type": "Country", "name": "Saudi Arabia" },
            { "@type": "Country", "name": "Jordan" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Border Crossing Transfers",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Border Pick-up and Drop-off",
                        "description": "Premium transport to and from the Halat Ammar border."
                    }
                }
            ]
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="border-schema-taxi-halat-ammar-border-crossing"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={images}
                h1Text="Taxi at Halat Ammar Border Crossing"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Saudi & Jordan Border Service
                    </span>
                }
                subtitle="Stranded at Halat Ammar? We provide immediate VIP transfers."
                location="24/7 Border Pickups"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href="mailto:info@taxiserviceksa.com?subject=Immediate%20Taxi%20Request%20-%20Halat%20Ammar%20Border">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Email for Immediate Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                    <Link href="/booking?pickup=Halat Ammar%20Border&dropoff=Riyadh">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Book in Advance
                        </Button>
                    </Link>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Cross-Border Transport</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                VIP Taxi Services at Halat Ammar
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Arriving at the Halat Ammar border crossing between Saudi Arabia and Jordan can be stressful, especially if you lack onward transportation. Whether your previous driver couldn't cross, or you're walking through passport control, our premium taxis are ready to pick you up directly from either side of the border.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We specialize in high-comfort, long-distance SUV and Sedan transfers to major cities like Riyadh (1300 km away), Dammam, and Jeddah. Our drivers are fully licensed and hold valid clearance for GCC borders.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">24/7 Availability</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Licensed Drivers</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">GCC Insurance</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">VIP SUV Fleet</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Book With Us at Halat Ammar?</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Immediate Rescue Drop-offs</h4>
                                        <p className="text-sm text-gray-500">Often, passengers cross the border on foot because their local taxi isn't allowed through. We wait for you right after immigration.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Customs Assistance</h4>
                                        <p className="text-sm text-gray-500">Our experienced staff can help guide you on the necessary paperwork to make the Halat Ammar customs process smoother.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Direct Transport Anywhere</h4>
                                        <p className="text-sm text-gray-500">From the border, we can drive you non-stop to your hotel, home, or the nearest airport in Saudi Arabia or Jordan.</p>
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
                                topic: "Getting Taxis at the Border",
                                commonBelief: "It's easy to find a regular taxi once I cross the Halat Ammar border.",
                                reality: "Local city taxis rarely hang around remote border areas. Ride-hailing apps like Uber usually don't work or show no cars available at borders.",
                                truthRange: "Pre-booking is Essential",
                                factors: ["Remote Location", "No App Coverage"]
                            },
                            {
                                topic: "Vehicle Insurance",
                                commonBelief: "Any car can cross the border if the driver has a visa.",
                                reality: "Not true. Commercial vehicles crossing into Jordan or Saudi require specific cross-border vehicle insurance, authorizations, and permits. All our VIP fleet vehicles hold these.",
                                truthRange: "Strict Regulations",
                                factors: ["Special Permits Required", "Customs Forms"]
                            }
                        ]}
                    />
                </div>
            </section>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "Can I get a taxi exactly at the Halat Ammar immigration checkpoint?",
                        shortAnswer: "Yes, pre-book with us and we will meet you just outside the checkpoint.",
                        detailedAnswer: "Yes! If you are walking through the Halat Ammar border, our driver will park at the designated waiting area just after you clear customs and passport control on either the Saudi or Jordan side.",
                        perspectives: []
                    },
                    {
                        question: "How long does it take from Halat Ammar border to Riyadh?",
                        shortAnswer: "Approx 1300 km",
                        detailedAnswer: "The distance to Riyadh is roughly 1300 km. Travel times vary but we ensure a comfortable ride in our late-model SUVs with adequate rest stops along the way.",
                        perspectives: []
                    },
                    {
                        question: "Do your drivers speak English?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we prioritize English and Arabic speaking drivers who are thoroughly familiar with GCC border protocols.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}

