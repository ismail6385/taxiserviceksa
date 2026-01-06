import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Building2, ShoppingBag, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer to Olaya District Riyadh | Premium Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service for Olaya, Riyadh. Professional transport to Kingdom Centre, Al Faisaliah Tower, and Tahlia Street.',
    keywords: ['Olaya VIP transfer', 'Riyadh downtown premium chauffeur', 'Kingdom Centre VIP car', 'Faisaliah Tower executive transport', 'Olaya Street VIP transfer'],
    alternates: {
        canonical: 'https://transferksa.com/locations/riyadh/olaya/',
    },
    openGraph: {
        title: 'VIP Private Transfer to Olaya District (Riyadh Downtown)',
        description: 'Elite VIP private transfer and professional chauffeur service for Riyadh\'s financial heart. Serving Kingdom Centre, Faisaliah, and major hotels.',
        url: 'https://transferksa.com/locations/riyadh/olaya/',
        type: 'website',
    },
};

export default function OlayaPage() {
    const images = [
        '/riyadh-discovery-map.png', // Ideally Riyadh Olaya / Kingdom Tower image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const olayaSchema = {
        "@context": "https://schema.org",
        "@type": "AdministrativeArea",
        "name": "Olaya District",
        "description": "The financial and business heart of Riyadh, home to the Kingdom Centre and Al Faisaliah Tower.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Riyadh",
            "addressRegion": "Riyadh Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.6961",
            "longitude": "46.6841"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="olaya-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(olayaSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer to Olaya District"
                bookingFormTitle="Request VIP Pickup"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Elite Downtown Chauffeur
                    </span>
                }
                subtitle="Kingdom Centre & Al Faisaliah VIP Transfers"
                location="Olaya St | King Fahd Rd | Premium Downtown Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Riyadh%20Airport&dropoff=Olaya%20District">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            VIP Daily Driver
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
                            <span className="text-indigo-900 font-bold uppercase tracking-wider text-sm">Downtown Hub</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Navigating Riyadh's Main Artery
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Olaya is the spine of Riyadh. It runs between the iconic Kingdom Centre and Al Faisaliah Tower. It is packed with corporate HQs, 5-star hotels (Narcissus, Hyatt Regency), and luxury retail.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Traffic on Olaya Street and King Fahd Road is notorious. Our drivers know the side streets and parallel routes (like Takhassusi) to get you to your meeting on time.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Kingdom Centre</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <ShoppingBag className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Tahlia Street</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Business Class</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Rush Hour Pro</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Landmarks</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Kingdom Centre (Al Mamlaka)</h4>
                                        <p className="text-sm text-gray-500">The bottle-opener tower. Home to the Four Seasons and Sky Bridge.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Al Faisaliah</h4>
                                        <p className="text-sm text-gray-500">The pointed tower with the golden ball. Major business hub.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Tahlia Street</h4>
                                        <p className="text-sm text-gray-500">The intersection with Olaya is famous for cafes and luxury dining.</p>
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
                                topic: "Parking",
                                commonBelief: "I'll rent a car.",
                                reality: "Parking in Olaya is extremely difficult and expensive. Valet queues can take 20 mins. A pre-booked VIP transfer drops you right at the door without the stress.",
                                truthRange: "Impossible Parking",
                                factors: ["No Spaces", "High Cost"]
                            },
                            {
                                topic: "Traffic",
                                commonBelief: "It's a short distance.",
                                reality: "A 2km trip on King Fahd Road can take 30 minutes at 5 PM. We recommend booking early.",
                                truthRange: "Gridlock",
                                factors: ["5 PM Rush", "Thursday Night"]
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
                        question: "How far is Olaya from Airport?",
                        shortAnswer: "30-40 mins",
                        detailedAnswer: "Without traffic, it is about 30 minutes. In peak morning/evening rush, allow 45+ minutes.",
                        perspectives: []
                    },
                    {
                        question: "Do you pick up from Kingdom Centre?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we can pick you up from the main Four Seasons entrance or the Mall entrance.",
                        perspectives: []
                    },
                    {
                        question: "Is it close to DQ?",
                        shortAnswer: "15-20 mins",
                        detailedAnswer: "Yes, the Diplomatic Quarter is a straight drive west via Makkah Road/King Fahd Road, usually 15-20 minutes.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
