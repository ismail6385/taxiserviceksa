import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Umbrella, Tent, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'Taxi to Half Moon Bay (Dana Bay) | Beach & Resort Transfer',
    description: 'Book a taxi to Half Moon Bay (Al Khobar/Dammam). Transfers to Dana Bay, private beach resorts, and amusement parks. Reliable pickup and return.',
    keywords: ['Half Moon Bay taxi', 'Taxi to Half Moon Beach', 'Dana Beach Resort taxi', 'Khobar beach taxi', 'Half Moon Bay transport'],
    alternates: {
        canonical: 'https://transferksa.com/locations/al-khobar/half-moon-bay/',
    },
    openGraph: {
        title: 'Taxi to Half Moon Bay Beach & Resorts',
        description: 'Reliable transfer to the Eastern Province\'s premier beach destination. Guaranteed return rides from resorts.',
        url: 'https://transferksa.com/locations/al-khobar/half-moon-bay/',
        type: 'website',
    },
};

export default function HalfMoonBayPage() {
    const images = [
        '/jeddah-airport.webp', // Ideally a beach/Half Moon Bay image
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    const halfMoonSchema = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Half Moon Bay",
        "description": "Crescent-shaped bay area south of Al Khobar, famous for sandy beaches, Dana Bay resort, and water sports.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dhahran/Khobar",
            "addressRegion": "Eastern Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "26.1529",
            "longitude": "50.0335"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="halfmoon-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(halfMoonSchema) }}
            />

            <Hero
                images={images}
                h1Text="Taxi to Half Moon Bay"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Beach & Resort Escape
                    </span>
                }
                subtitle="Daily Transfers to Dana Bay & Private Resorts"
                location="Safe Clean Beaches | Water Sports | Villas"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Khobar%20City&dropoff=Half%20Moon%20Bay">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Beach Ride
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@transferksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Resort Pickup Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Sun & Sand</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                The Best Beach in the East
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Half Moon Bay is a sprawling coastline south of Al Khobar known for its shallow, calm waters and golden sands. It hosts major resorts like Dana Beach Resort, Radisson Blu, and numerous private rental chalets.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Since most resorts are located 30-40km away from the city center, reliable transport is essential. We provide spacious SUVs for families carrying beach gear and barbecue equipment.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Umbrella className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Resort Drop-off</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Tent className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Private Chalets</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Guaranteed Return</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Family Vans</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Destinations</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Dana Beach Resort</h4>
                                        <p className="text-sm text-gray-500">The premier luxury resort with private pools and ladies-only beach.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Enduro Circuit / Dune Bashing</h4>
                                        <p className="text-sm text-gray-500">Desert sports areas surrounding the bay access roads.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Public Beaches</h4>
                                        <p className="text-sm text-gray-500">Free access areas with pergolas and playgrounds.</p>
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
                                commonBelief: "It's near Khobar.",
                                reality: "It's actually a 30-40 minute drive on a highway. It is NOT walkable from the city.",
                                truthRange: "Requires Highway Drive",
                                factors: ["Remote", "Highway"]
                            },
                            {
                                topic: "Ride Availability",
                                commonBelief: "Easy to get back.",
                                reality: "Drivers often cancel pickup requests FROM Half Moon Bay because it's far. Pre-booking a return ride is critical.",
                                truthRange: "Return is Hard",
                                factors: ["Cancellations", "Distance"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Al-Khobar" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is Half Moon Bay from Dammam Airport?",
                        shortAnswer: "50-60 mins",
                        detailedAnswer: "It is about 50-60 minutes (75km) from King Fahd International Airport (DMM).",
                        perspectives: []
                    },
                    {
                        question: "Can we rent ATVs there?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, there are many ATV and dune buggy rental spots along the road leading to the bay.",
                        perspectives: []
                    },
                    {
                        question: "Is there an entry fee?",
                        shortAnswer: "Dependent",
                        detailedAnswer: "Public beaches are free. Private resorts (like Dana Beach or Radisson) require a booking or day pass.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
