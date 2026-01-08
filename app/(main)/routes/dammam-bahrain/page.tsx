import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Building2, Globe, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi Dammam Airport to Bahrain | Causeway Transfers',
    description: 'Book a taxi from Dammam Airport (DMM) to Bahrain. Reliable cross-border transfers via King Fahd Causeway. Door-to-door to Manama, Juffair, and Bahrain Airport.',
    keywords: ['Taxi Dammam to Bahrain', 'Dammam Airport to Bahrain taxi', 'Khobar to Bahrain taxi', 'Dammam to Manama transfer', 'King Fahd Causeway taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/dammam-bahrain/',
    },
    openGraph: {
        title: 'Taxi Service: Dammam Airport to Bahrain',
        description: 'Landing in Dammam and heading to Bahrain? We provide seamless cross-border taxi services. We handle the causeway paperwork for you.',
        url: 'https://taxiserviceksa.com/routes/dammam-bahrain/',
        type: 'website',
    },
};

export default function DammamBahrainRoutePage() {
    const images = [
        '/jeddah-airport.webp', // Ideally King Fahd Causeway image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Dammam to Bahrain Taxi",
        "provider": {
            "@type": "TransportationService",
            "name": "TaxiServiceKSA"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Bahrain"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Cross-Border Transfers",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "One Way Transfer",
                        "description": "Direct drop-off in Manama or Bahrain Airport."
                    },
                    "price": "450",
                    "priceCurrency": "SAR"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Round Trip",
                        "description": "Same day return or future pickup."
                    },
                    "price": "850",
                    "priceCurrency": "SAR"
                }
            ]
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={images}
                h1Text="Taxi Dammam Airport to Bahrain"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Cross-Border Service
                    </span>
                }
                subtitle="Seamless Causeway Transfers to Manama"
                location="DMM Airport | Khobar"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Dammam%20Airport&dropoff=Bahrain">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Ride (450 SAR)
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Weekly Commuter
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">International Travel</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                The Easy Way to Bahrain
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                King Fahd International Airport (DMM) is a popular gateway for travelers heading to Bahrain. The drive via the Causeway is scenic and fast, typically taking 60-90 minutes.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Why wait for a connecting flight or rent a car with expensive insurance? Our drivers are experts at the border crossing. We handle the paperwork and get you to your hotel in Manama, Juffair, or Seef smoothy.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Border Experts</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">1.5 Hrs Typical</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">To Manama/Seef</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Insurance Included</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Drop-offs</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Bahrain International Airport (BAH)</h4>
                                        <p className="text-sm text-gray-500">Connecting flight? We drop you right at departures.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Manama & Juffair</h4>
                                        <p className="text-sm text-gray-500">The main hotel and nightlife districts. Direct to your hotel lobby.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Seef District</h4>
                                        <p className="text-sm text-gray-500">Business hub and major malls (City Centre Bahrain).</p>
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
                                topic: "Visa",
                                commonBelief: "Driver does it all.",
                                reality: "You must have your Bahrain visa ready (or be eligible for Visa on Arrival). The driver cannot arrange your visa, only the car insurance.",
                                truthRange: "Passenger Responsibility",
                                factors: ["Visa Required", "Passport"]
                            },
                            {
                                topic: "Weekends",
                                commonBelief: "It's fast.",
                                reality: "Thursday afternoon and Saturday evening are peak times. The Causeway can have 2-3 hour delays. We recommend early departure.",
                                truthRange: "Heavy Traffic",
                                factors: ["Thursday Rush", "Causeway Jam"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Dammam" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the waiting time at the border?",
                        shortAnswer: "20-60 mins",
                        detailedAnswer: "On weekdays, it is fast (20 mins). On weekends (Thu-Sat), it can take 1-3 hours. We advise planning accordingly.",
                        perspectives: []
                    },
                    {
                        question: "Does the price include Causeway toll fees?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, our quoted price typically includes the driver's toll and vehicle insurance fees.",
                        perspectives: []
                    },
                    {
                        question: "Can I book a return from Bahrain to Dammam?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we can pick you up from any hotel in Bahrain and drive you back to Dammam or Al Khobar.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
