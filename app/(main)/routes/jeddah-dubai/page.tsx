import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Building2, Globe, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi Jeddah to Dubai | VIP Cross-Border Transfer',
    description: 'Book a premium taxi from Jeddah to Dubai. Reliable cross-border VIP transfers, comfortable SUVs, and door-to-door service across the GCC.',
    keywords: ['Taxi Jeddah to Dubai', 'Jeddah to Dubai transfer', 'cross border taxi Saudi Arabia', 'VIP transport Jeddah Dubai'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-dubai/',
    },
    openGraph: {
        title: 'Taxi Jeddah to Dubai | VIP Cross-Border Transfer',
        description: 'Book a premium taxi from Jeddah to Dubai. Reliable cross-border VIP transfers, comfortable SUVs, and door-to-door service across the GCC.',
        url: 'https://taxiserviceksa.com/routes/jeddah-dubai/',
        type: 'website',
    },
};

export default function JeddahDubaiRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Taxi Jeddah to Dubai",
        "provider": {
            "@type": "TransportationService",
            "name": "TaxiServiceKSA"
        },
        "areaServed": [
            { "@type": "City", "name": "Jeddah" },
            { "@type": "City", "name": "Dubai" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Cross-Border Transfers",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "One Way Transfer",
                        "description": "Direct drop-off from Jeddah to Dubai."
                    }
                }
            ]
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-jeddah-dubai"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={images}
                h1Text="Taxi Jeddah to Dubai"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Seamless VIP Transfers: Jeddah to Dubai"
                location="Door-to-Door Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Jeddah&dropoff=Dubai">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Get Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/966569487569?text=Hello,%20I%20want%20to%20get%20a%20quote%20for%20a%20taxi%20from%20Jeddah%20to%20Dubai">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            WhatsApp Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">International Border</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                The Premium Way from Jeddah to Dubai
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Traveling between Jeddah and Dubai by road is a popular option for families, businessmen, and GCC residents. The distance is approximately 2199 km, and the journey typically takes 21-23 hours.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Avoid the hassle of airport queues and strict baggage allowances. Our professional chauffeurs handle the border crossing paperwork, vehicle insurance, and navigate the journey while you relax in a spacious SUV.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Border Assistance</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">21-23 hours Journey</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Door-to-Door</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">VIP Comfort</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Journey Highlights</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Seamless Door-to-Door Service</h4>
                                        <p className="text-sm text-gray-500">We pick you up from your exact location in Jeddah and drop you directly at your destination in Dubai.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Custom Border Procedures</h4>
                                        <p className="text-sm text-gray-500">Our drivers are experienced with GCC borders, assisting you through passport control quickly and smoothly.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Rest Stops on Demand</h4>
                                        <p className="text-sm text-gray-500">Take breaks whenever you want. We stop at hygienic service facilities along the highway for refreshments and prayer.</p>
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
                                topic: "Visas & ID",
                                commonBelief: "Just jump in and go.",
                                reality: "You must have a valid passport, Iqama/GCC ID, and appropriate visas depending on your nationality. The driver assists but cannot issue visas.",
                                truthRange: "Passenger Responsibility",
                                factors: ["Valid Passport", "GCC Visa"]
                            },
                            {
                                topic: "Pricing",
                                commonBelief: "It's expensive for groups.",
                                reality: "For families or groups of 4-6 people, a private VIP SUV transfer is often cheaper than buying multiple flight tickets.",
                                truthRange: "Highly Cost-Effective",
                                factors: ["Get Quote For Details", "No Luggage Fees"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Jeddah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long does a taxi take from Jeddah to Dubai?",
                        shortAnswer: "21-23 hours",
                        detailedAnswer: "The total driving time is around 21-23 hours. Please note that border crossing times can vary between 30 minutes to 2 hours depending on the season, weekends, and time of day.",
                        perspectives: []
                    },
                    {
                        question: "What vehicle options do you have for this route?",
                        shortAnswer: "SUVs & Sedans",
                        detailedAnswer: "We offer comfortable sedans for 1-2 passengers and premium SUVs (like GMC Yukon or Chevy Suburban) which are highly recommended for the long 2199 km journey.",
                        perspectives: []
                    },
                    {
                        question: "How can I get a price for this border transfer?",
                        shortAnswer: "Request a Quote",
                        detailedAnswer: "Prices vary based on the vehicle type, number of passengers, and specific locations. Please use our 'Get Quote' button or contact us via WhatsApp to receive an accurate, all-inclusive quote that covers vehicle crossing insurance and toll fees.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
