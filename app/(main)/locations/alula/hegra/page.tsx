import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Camera, Landmark, ArrowRight, Bus } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi to Hegra (Madain Saleh) | UNESCO AlUla Tour Transport',
    description: 'Book a taxi to Hegra (Madain Saleh) in AlUla. We drop you at Winter Park for the official bus or directly at the gate if you have a permit. Reliable 4x4 service.',
    keywords: ['Taxi to Hegra', 'Madain Saleh taxi', 'AlUla Hegra transport', 'Hegra tour driver', 'AlUla heritage taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/alula/hegra/',
    },
    openGraph: {
        title: 'Taxi to Hegra (Madain Saleh) UNESCO Site',
        description: 'Private transfer to Hegra. Note: Private cars cannot enter the tombs area without a permit. We take you to the Visitor Center.',
        url: 'https://taxiserviceksa.com/locations/alula/hegra/',
        type: 'website',
    },
};

export default function HegraPage() {
    const images = [
        '/alula-hegra-tombs.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];

    const hegraSchema = {
        "@context": "https://schema.org",
        "@type": "landmarkOrHistoricalBuilding",
        "name": "Hegra (Madain Saleh)",
        "description": "UNESCO World Heritage site featuring Nabataean tombs carved into sandstone.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "AlUla",
            "addressRegion": "Madinah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "26.8055",
            "longitude": "37.9547"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="hegra-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(hegraSchema) }}
            />

            <Hero
                images={images}
                h1Text="Taxi to Hegra (Madain Saleh)"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        UNESCO Heritage Transport
                    </span>
                }
                subtitle="Visiting Saudi Arabia's First World Heritage Site"
                location="Drop-off @ Winter Park | Fixed Rates"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=AlUla%20Hotel&dropoff=Winter%20Park">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Ride to Winter Park
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="/booking?pickup=AlUla%20Airport&dropoff=Hegra">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Airport to Hegra
                        </Button>
                    </Link>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-wider text-sm">Ancient Wonders</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Visiting Hegra Made Easy
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Hegra (Madain Saleh) is the jewel of AlUla. It contains over 110 monumental tombs carved into rock.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-semibold text-red-600">
                                Important Rule: Private vehicles are generally NOT allowed to drive freely inside the tombs area.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our taxi service drops you at **Winter Park (Visitor Center)**, which is the mandatory starting point for the official RCU (Royal Commission for AlUla) bus tours. We ensure you arrive on time for your booked slot.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Bus className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Winter Park Drop</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Punctual Arrival</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Camera className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Photography Gear</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">4x4 Available</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">How Your Visit Works</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Book Taxi to Winter Park</h4>
                                        <p className="text-sm text-gray-500">We pick you up from your hotel and drive you to the Visitor Center.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Board Required Bus</h4>
                                        <p className="text-sm text-gray-500">Show your ticket and board the Heritage Bus for the guided tour.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Return Pickup</h4>
                                        <p className="text-sm text-gray-500">We wait or return to pick you up after your tour finishes (usually 2-3 hours).</p>
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
                                topic: "Getting Inside",
                                commonBelief: "We can drive inside.",
                                reality: "NO. Only authorized official vehicles. You MUST utilize the park-and-ride system from Winter Park.",
                                truthRange: "Bus Only",
                                factors: ["Preservation", "Rules"]
                            },
                            {
                                topic: "Distance from Old Town",
                                commonBelief: "It's close.",
                                reality: "Hegra is about 22km north of AlUla Old Town. Walking is impossible. A car is needed to reach the bus station.",
                                truthRange: "22km Away",
                                factors: ["Desert Heat", "Highway"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="AlUla" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "Can you drop us directly at the tombs?",
                        shortAnswer: "No, Winter Park Only",
                        detailedAnswer: "Unless you have a very specific VIP 'Private Range Rover' tour booked directly with ExperienceAlUla, all standard ticket holders must go to Winter Park first.",
                        perspectives: []
                    },
                    {
                        question: "How far is Hegra from AlUla Airport?",
                        shortAnswer: "45 mins",
                        detailedAnswer: "It takes about 45 minutes to drive from the airport to Winter Park.",
                        perspectives: []
                    },
                    {
                        question: "Do I need a 4x4 for this?",
                        shortAnswer: "Recommended",
                        detailedAnswer: "The road to Winter Park is paved, but a 4x4 is more comfortable and spacious, especially if you plan to visit Elephant Rock afterwards.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
