import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Factory, Building, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi to Jubail Industrial City (RC) | SABIC Transport',
    description: 'Book a taxi to Jubail Industrial City. Daily transfers from Dammam Airport (DMM) to SABIC, Sadara, and Royal Commission. Reliable business service.',
    keywords: ['Jubail Industrial City taxi', 'Royal Commission Jubail taxi', 'Dammam Airport to Jubail taxi', 'SABIC Jubail transport', 'Jubail RC transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/jubail/industrial-city/',
    },
    openGraph: {
        title: 'Taxi to Jubail Industrial City',
        description: 'Professional transport to the world\'s largest industrial city. Transfers to all major plants and RC camps.',
        url: 'https://taxiserviceksa.com/locations/jubail/industrial-city/',
        type: 'website',
    },
};

export default function JubailIndustrialPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally Jubail Industrial City image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const jubailSchema = {
        "@context": "https://schema.org",
        "@type": "IndustrialPark",
        "name": "Jubail Industrial City",
        "description": "The largest industrial city in the world, home to SADARA, SASREF, and major petrochemical complexes.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jubail",
            "addressRegion": "Eastern Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "27.0039",
            "longitude": "49.6606"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="jubail-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jubailSchema) }}
            />

            <Hero
                images={images}
                h1Text="Taxi to Jubail Industrial City"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Industrial Transport
                    </span>
                }
                subtitle="Daily Transfers to RC, SABIC & SATORP"
                location="Gate Access Knowledge | Airport Pickup"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Dammam%20Airport&dropoff=Jubail%20Industrial">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Jubail Taxi
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Monthly Contract Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">Industrial Powerhouse</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Reliable Transport for Industry Professionals
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Jubail Industrial City is a massive complex located 100km north of Dammam Airport. It is the heart of Saudi Arabia's petrochemical industry, hosting giants like SABIC, Sadara, and SATORP.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Finding a taxi at the airport willing to drive to Jubail (and finding the specific plant gate) can be challenging. Our drivers specialize in this route and know the layout of the Royal Commission area perfectly.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Factory className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Plant Gate Drop</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Airport Transfer</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Shift Changes</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <DollarSign className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Contract Rates</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Jubail 1 & 2</h4>
                                        <p className="text-sm text-gray-500">Access to all industrial zones including the new Jubail 2 expansion.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Fanateer Beach Area</h4>
                                        <p className="text-sm text-gray-500">Transfers to hotels (InterContinental) and residential camps.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Dammam Airport (DMM)</h4>
                                        <p className="text-sm text-gray-500">Pickups and drop-offs for incoming staff and executives.</p>
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
                                commonBelief: "It's near Dammam.",
                                reality: "It is a long drive (100km+). A taxi from Dammam city can cost SAR 250-350+. It is a separate city entirely.",
                                truthRange: "100km Drive",
                                factors: ["Highway", "Distance"]
                            },
                            {
                                topic: "Availability",
                                commonBelief: "Uber works there.",
                                reality: "Uber exists but availability can be spotty within the industrial zones especially during shift changes. Pre-booking is safer.",
                                truthRange: "Spotty",
                                factors: ["Remote", "Shift Work"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Jubail" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How much is a taxi from Dammam Airport to Jubail?",
                        shortAnswer: "SAR 250-350",
                        detailedAnswer: "The rate is typically between SAR 250 and SAR 350 depending on the exact location in Jubail (City vs Industrial vs Port).",
                        perspectives: []
                    },
                    {
                        question: "Do you know the plant locations?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, our drivers are familiar with the main gates for SABIC, Sadara, SASREF, and the Royal Commission HQ.",
                        perspectives: []
                    },
                    {
                        question: "Can I book a return ride?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we highly recommend booking your return ride in advance as finding a taxi on the street in the Industrial City is nearly impossible.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
