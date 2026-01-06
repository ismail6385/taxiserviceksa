import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Factory, Building, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import DistanceTable from '@/components/seo/DistanceTable';

export const metadata: Metadata = {
    title: 'Taxi to Yanbu Industrial City (Royal Commission) | Business Transfer',
    description: 'Book a reliable taxi to Yanbu Industrial City (Royal Commission). Daily transfers from Yanbu Airport (YNB) to major plants (SABIC, Yanpet) and hotels.',
    keywords: ['Yanbu Industrial City taxi', 'Royal Commission Yanbu transport', 'Yanbu Airport to Industrial City', 'Yanbu RC taxi', 'SABIC Yanbu transfer'],
    alternates: {
        canonical: 'https://transferksa.com/locations/yanbu/industrial-city/',
    },
    openGraph: {
        title: 'Taxi to Yanbu Industrial City (Royal Commission)',
        description: 'Professional transport services for business travelers in Yanbu Industrial City. Gate drop-offs for major industries.',
        url: 'https://transferksa.com/locations/yanbu/industrial-city/',
        type: 'website',
    },
};

export default function YanbuIndustrialPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally an image of Yanbu Industrial City skyline/corniche
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const yanbuIndustrialSchema = {
        "@context": "https://schema.org",
        "@type": "IndustrialPark",
        "name": "Yanbu Industrial City",
        "alternateName": "Royal Commission Yanbu",
        "description": "Major industrial hub on the Red Sea coast, home to petrochemical refineries and the Royal Commission headquarters.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Yanbu Al Sinaiyah",
            "addressRegion": "Madinah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "23.9877",
            "longitude": "38.2163"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="yanbu-rc-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(yanbuIndustrialSchema) }}
            />

            <Hero
                images={images}
                h1Text="Taxi to Yanbu Industrial City (Royal Commission)"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Business & Corporate Transport
                    </span>
                }
                subtitle="Daily Transfers to RC, SABIC, and Refineries"
                location="Gate Access Knowledge | 24/7 Availability"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Yanbu%20Airport&dropoff=Yanbu%20Industrial%20City">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Industrial City Taxi
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Contract Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <span className="bg-blue-100 text-blue-800 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full">Corporate Hub</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                                Reliable Transport for Yanbu Industry
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Yanbu Industrial City ("Yanbu Al Sinaiyah") is distinct from Yanbu Al Bahr (The Old Town). It is a sprawling zone managed by the Royal Commission, featuring wide avenues and strict traffic regulations.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Finding a taxi within the Industrial zone can be difficult compared to the town center. Our pre-booked service ensures you have a driver waiting for you at Yanbu Airport (YNB) to take you directly to your meeting, hotel, or plant gate.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Hotel Transfers</h4>
                                        <p className="text-sm text-gray-500">Service to Mövenpick, Novotel, and Holiday Inn within the RC area.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Plant Gate Drop-off</h4>
                                        <p className="text-sm text-gray-500">We know the locations of major gates for SABIC, Aramco, and Marafiq.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Daily Commute</h4>
                                        <p className="text-sm text-gray-500">Monthly driver contracts available for long-term project staff.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                            <DistanceTable
                                origin="Yanbu Airport (YNB)"
                                locations={[
                                    { destination: 'Royal Commission HQ', distance: '25 km', time: '25 mins', route: 'King Abdulaziz Rd' },
                                    { destination: 'Mövenpick Hotel', distance: '28 km', time: '30 mins', route: 'Al Mina' },
                                    { destination: 'Yanbu Commercial Port', distance: '15 km', time: '15 mins', route: 'Port Rd' },
                                    { destination: 'Yanbu Old Town', distance: '8 km', time: '10 mins', route: 'City Center' }
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Yanbu" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is the Industrial City from Yanbu Airport?",
                        shortAnswer: "20-30 km",
                        detailedAnswer: "It is about 20-30 km South-East of the airport, depending on your exact destination within the Royal Commission area.",
                        perspectives: []
                    },
                    {
                        question: "Are taxis easily available inside Yanbu Industrial City?",
                        shortAnswer: "No, limited",
                        detailedAnswer: "Street-hailing taxis is rare inside the residential and industrial quarters of the Royal Commission. It is highly recommended to book a ride in advance.",
                        perspectives: []
                    },
                    {
                        question: "Do you offer invoices for business travelers?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, we can provide digital invoices for expense reimbursement upon request.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
