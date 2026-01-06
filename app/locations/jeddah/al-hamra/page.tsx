import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Building2, ArrowRight, Lamp, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer to Al Hamra Jeddah | Executive Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service to Al Hamra District, Jeddah. Transfers to Ritz Carlton and InterContinental with professional chauffeurs.',
    keywords: ['Al Hamra VIP transfer', 'Jeddah fountain premium chauffeur', 'Ritz Carlton Jeddah executive transport', 'Al Hamra Corniche VIP'],
    alternates: {
        canonical: 'https://transferksa.com/locations/jeddah/al-hamra/',
    },
    openGraph: {
        title: 'VIP Private Transfer Al Hamra | Executive Chauffeur',
        description: 'Premium VIP private transfers to Jeddah\'s most prestigious district. Executive chauffeur service for Ritz Carlton and InterContinental guests.',
        url: 'https://transferksa.com/locations/jeddah/al-hamra/',
        type: 'website',
    },
};

export default function AlHamraPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally King Fahd Fountain image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const alHamraSchema = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Al Hamra District",
        "description": "Upscale district in Jeddah known for the King Fahd Fountain, corniche promenade, and luxury hotels.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jeddah",
            "addressRegion": "Makkah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.5169",
            "longitude": "39.1555"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="alhamra-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(alHamraSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer to Al Hamra (Jeddah)"
                bookingFormTitle="Book Premium Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Executive Chauffeur Service
                    </span>
                }
                subtitle="Front-Row Access to Jeddah Prestige"
                location="Ritz Carlton | InterContinental | Consulates"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Jeddah%20Airport&dropoff=Al%20Hamra">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Diplomatic Service Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Diplomtic, Intercity, and Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-secondary font-bold uppercase tracking-wider text-sm">Prestige Location</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                The Heart of Upscale Jeddah
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Al Hamra is Jeddah's most prestigious district, hugging the coastline and offering front-row views of the King Fahad Fountain (The world's tallest). It hosts major consulates (USA, UK, France) and 5-star hotels.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our fleet includes luxury sedans and SUVs perfect for arrivals at the Ritz Carlton or business meetings at the Diplomatic Quarter. We ensure a professional, secure, and comfortable ride.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Hotel Drop-up</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Lamp className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Fountain Views</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Business Class</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <MapPin className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Consulate Access</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Major Landmarks</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">King Fahad Fountain</h4>
                                        <p className="text-sm text-gray-500">Visible from the corniche, best viewed at sunset.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Jeddah Corniche (Al Hamra)</h4>
                                        <p className="text-sm text-gray-500">A beautiful walking promenade with cafes and sculptures.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Diplomatic Quarter</h4>
                                        <p className="text-sm text-gray-500">Home to many international consulates and embassies.</p>
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
                                topic: "Traffic",
                                commonBelief: "Corniche is always blocked.",
                                reality: "Weekend evenings are very busy. However, Al Hamra has many internal access roads that our drivers know to bypass the jams.",
                                truthRange: "Busy Weekends",
                                factors: ["Sunset", "Thursday Night"]
                            },
                            {
                                topic: "Walking",
                                commonBelief: "We can walk to the fountain.",
                                reality: "You cannot walk TO the fountain (it's in the sea), but you can walk along the promenade viewing it. It stretches for kilometers.",
                                truthRange: "Promenade Only",
                                factors: ["Sea View", "Walking Path"]
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
                        question: "How far is Al Hamra from Jeddah Airport?",
                        shortAnswer: "25-35 mins",
                        detailedAnswer: "It typically takes 25-35 minutes to reach Al Hamra district from JED Airport.",
                        perspectives: []
                    },
                    {
                        question: "Can you drop us at a consulate?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we are familiar with all consulate locations (USA, UK, etc.) in Al Hamra and can drop you at the security checkpoint.",
                        perspectives: []
                    },
                    {
                        question: "Do you have business cars?",
                        shortAnswer: "Yes",
                        detailedAnswer: "We offer BMW, Mercedes, and Lexus options for VIP transfers to Al Hamra hotels.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
