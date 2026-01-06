import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, ShoppingBag, Bus, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer Aziziyah to Haram Makkah | Premium Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service from Aziziyah to Haram. Exclusive hotel pickups and dedicated pilgrim logistics.',
    keywords: ['Aziziyah VIP transfer', 'Aziziyah to Haram premium chauffeur', 'Aziziyah executive car', 'Makkah VIP pilgrim transport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/makkah/aziziyah/',
    },
    openGraph: {
        title: 'Taxi from Aziziyah to Haram (Makkah)',
        description: 'Staying in Aziziyah? We provide fast 24/7 transfers to King Abdulaziz Gate and the Clock Tower.',
        url: 'https://taxiserviceksa.com/locations/makkah/aziziyah/',
        type: 'website',
    },
};

export default function AziziyahPage() {
    const images = [
        '/makkah-kaaba-night.webp', // Ideally Aziziyah street / Hotel image
        '/jeddah-airport.webp',
        '/hero-slide-3.webp',
    ];

    const aziziyahSchema = {
        "@context": "https://schema.org",
        "@type": "Neighborhood",
        "name": "Aziziyah",
        "description": "A major district in Makkah, popular for affordable pilgrim accommodation and shopping, located near Mina.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Makkah",
            "addressRegion": "Makkah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.4050",
            "longitude": "39.8550"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="aziziyah-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aziziyahSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer Aziziyah to Haram"
                bookingFormTitle="Request VIP Pickup"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Premium Chauffeur Service
                    </span>
                }
                subtitle="Exclusive VIP Logistics for Aziziyah Hotel Guests"
                location="North Aziziyah | South Aziziyah | VIP Shuttles"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Aziziyah&dropoff=Haram%20Makkah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Weekly VIP Quote
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
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Pilgrim Hub</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Convenience for Aziziyah Residents
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Aziziyah is the most popular district for long-term pilgrims and Hajj groups due to its affordability and proximity to Mina. However, getting to the Haram for the 5 daily prayers can be a struggle with crowded public buses.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We offer a reliable "call-and-go" service. Our drivers are stationed in Aziziyah and can pick you up from your hotel (near Concorde, Mahbas Jin, or Bin Dawood) within minutes.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <ShoppingBag className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Near Markets</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">24/7 Prayer Pickup</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Quick Tunnel Access</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Shared Van Rates</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Points</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Mahbas Al Jin</h4>
                                        <p className="text-sm text-gray-500">The main tunnel entrance to Haram. We drop provided traffic allows.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Aziziyah North vs South</h4>
                                        <p className="text-sm text-gray-500">We cover both. North is closer to Jamarat; South is closer to the University.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Jamarat Station</h4>
                                        <p className="text-sm text-gray-500">Pickup available from the train station during Hajj season (permit dependent).</p>
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
                                topic: "Public Bus",
                                commonBelief: "It's free and easy.",
                                reality: "Free buses are often dangerously overcrowded. A private VIP transfer ensures you arrive comfortably and on time for Salah.",
                                truthRange: "Overcrowded",
                                factors: ["Waiting", "Crowds"]
                            },
                            {
                                topic: "Walking",
                                commonBelief: "We can walk.",
                                reality: "Only if you are very fit and staying in Mahbas Jin. Most of Aziziyah requires a 3-5km walk through tunnels. A VIP car is safer.",
                                truthRange: "Too Far",
                                factors: ["Tunnels", "Exhaustion"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Makkah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How much is a taxi from Aziziyah to Haram?",
                        shortAnswer: "SAR 20-30",
                        detailedAnswer: "For a standard one-way trip, prices usually range from SAR 20 to SAR 40 depending on traffic and exact hotel distance.",
                        perspectives: []
                    },
                    {
                        question: "How long does it take?",
                        shortAnswer: "10-15 mins",
                        detailedAnswer: "Via the King Abdulaziz Road tunnel, it is typically a 10-15 minute drive to the Haram drop-off points.",
                        perspectives: []
                    },
                    {
                        question: "Do you offer monthly packages?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we have monthly packages for residents who need daily transportation to and from the Haram.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
