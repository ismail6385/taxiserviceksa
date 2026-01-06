import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, BookOpen, Mic2, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi to Ithra (Dhahran) | King Abdulaziz Center for World Culture',
    description: 'Book a taxi to Ithra (King Abdulaziz Center for World Culture) in Dhahran. Visit the library, museum, and theater. Reliable pickups from Aramco camp.',
    keywords: ['Taxi to Ithra', 'Ithra Dhahran taxi', 'King Abdulaziz Center taxi', 'Aramco visitor taxi', 'Dhahran museums transport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/dhahran/ithra/',
    },
    openGraph: {
        title: 'Taxi to Ithra Cultural Center (Dhahran)',
        description: 'Visit the stunning Ithra building. We provide gate drop-offs for visitors to the library, cinema, and museums.',
        url: 'https://taxiserviceksa.com/locations/dhahran/ithra/',
        type: 'website',
    },
};

export default function IthraPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally an image of the Ithra building (stones)
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const ithraSchema = {
        "@context": "https://schema.org",
        "@type": "Museum",
        "name": "King Abdulaziz Center for World Culture (Ithra)",
        "description": "A world-class cultural center featuring a library, theater, cinema, museum, and iconic architecture.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dhahran",
            "addressRegion": "Eastern Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "26.3359",
            "longitude": "50.1215"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="ithra-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ithraSchema) }}
            />

            <Hero
                images={images}
                h1Text="Taxi to Ithra (King Abdulaziz Center)"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Culture & Arts Transfer
                    </span>
                }
                subtitle="The Architectural Icon of Dhahran"
                location="Library | Museum | Cinema | Theater"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Khobar%20City&dropoff=Ithra">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Ride to Ithra
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            School Trip Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-stone-600 font-bold uppercase tracking-wider text-sm">Design & Innovation</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Visit Saudi Arabia's Cultural Heart
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                King Abdulaziz Center for World Culture (Ithra) is an architectural marvel located near the "Prosperity Well" in Dhahran. It houses a massive library, an 18-story knowledge tower, and interactive museums.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Located within the Aramco area, navigating the correct visitor gates can be confusing for first-timers. Our drivers know the exact drop-off points for the main entrance and the theater.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <BookOpen className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Library Access</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Mic2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Theater Events</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Correct Gate Drop</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Event Pickup</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Inside Ithra</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">The Library</h4>
                                        <p className="text-sm text-gray-500">A stunning 4-story library with over 200,000 books.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Great Hall</h4>
                                        <p className="text-sm text-gray-500">Host to international art exhibitions and conferences.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Energy Exhibit</h4>
                                        <p className="text-sm text-gray-500">A hands-on science museum explaining oil and energy.</p>
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
                                topic: "Access",
                                commonBelief: "Only for Aramco employees.",
                                reality: "False. Ithra is open to the public. You do not need an Aramco ID to visit the museum areas, just a visitor ticket/pass.",
                                truthRange: "Open to Public",
                                factors: ["Tickets Required", "Security Check"]
                            },
                            {
                                topic: "Getting There",
                                commonBelief: "Hard to find.",
                                reality: "It has its own dedicated public entrance from the highway, separate from the main Aramco residential gates.",
                                truthRange: "Dedicated Entry",
                                factors: ["Signage", "Highway"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Dhahran" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is Ithra from Khobar?",
                        shortAnswer: "15-20 mins",
                        detailedAnswer: "It is very close to Al Khobar, typically a 15-20 minute drive via King Abdulaziz Road.",
                        perspectives: []
                    },
                    {
                        question: "Do I need a ticket to enter?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Entry to the building is often free, but specific exhibits, the cinema, and the museum usually require a ticket booked online.",
                        perspectives: []
                    },
                    {
                        question: "Is there parking?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, there is ample visitor parking, but it is a bit of a walk to the main building. We can drop you closer at the passenger drop-off zone.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
