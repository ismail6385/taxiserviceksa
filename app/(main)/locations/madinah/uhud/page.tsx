import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, DollarSign, Mountain, Swords, ArrowRight, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: 'VIP Private Transfer to Mount Uhud | Madinah Ziyarat',
    description: 'Premium VIP private transfer and executive chauffeur service to Mount Uhud and Archers Mound. Visit the historic Shuhada cemetery with a professional driver.',
    keywords: ['Mount Uhud VIP transfer', 'Madinah Archers Mound premium chauffeur', 'Shuhada Uhud VIP transport', 'Madinah heritage executive car'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/madinah/uhud/',
    },
    openGraph: {
        title: 'Taxi to Mount Uhud & Archers Mound',
        description: 'Visit the historic site of the Battle of Uhud. We provide comfortable transport for Ziyarat to Shuhada Uhud.',
        url: 'https://taxiserviceksa.com/locations/madinah/uhud/',
        type: 'website',
    },
};

export default function UhudPage() {
    const images = [
        '/madinah-prophets-mosque.webp', // Ideally Mount Uhud / Archers Mound image
        '/jeddah-airport.webp',
        '/hero-slide-3.webp',
    ];

    const uhudSchema = {
        "@context": "https://schema.org",
        "@type": "LandmarksOrHistoricalBuildings",
        "name": "Mount Uhud",
        "description": "A mountain north of Madinah, known for the Battle of Uhud. It contains the Archers' Mound and the cemetery of 70 martyrs.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madinah",
            "addressRegion": "Madinah Province",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.5034",
            "longitude": "39.6108"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="uhud-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(uhudSchema) }}
            />

            <Hero
                images={images}
                h1Text="VIP Private Transfer to Mount Uhud"
                bookingFormTitle="Book Heritage Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Premium Chauffeur Heritage
                    </span>
                }
                subtitle="The Historic Site of the Battle of Uhud"
                location="Archers' Mound | Martyrs Cemetery | VIP Pickup"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=Masjid%20Nabawi&dropoff=Mount%20Uhud">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Full Ziyarat Tour Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Heritage Tours, intercity, and Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-red-800 font-bold uppercase tracking-wider text-sm">Islamic History</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Witness the History of Uhud
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Mount Uhud is a major landmark in Islamic history, located about 5km north of the Prophet's Mosque. It is the site of the second major battle in Islam.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Visitors can climb the small Archers' Mound (Jabal Rumaat) for a panoramic view of the battlefield and pay respects at the cemetery of the 70 martyrs, including Hamza ibn Abdul-Muttalib (RA).
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Mountain className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Archers' Mound</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Swords className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Battle Site</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Car className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Close to Parking</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Group Visits</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Visiting Tips</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Best Time: Early Morning</h4>
                                        <p className="text-sm text-gray-500">Visit right after Fajr to avoid the intense sun, as there is little shade on the mound.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Souq</h4>
                                        <p className="text-sm text-gray-500">There is a small market nearby selling dates and local herbs.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Sayyid Al-Shuhada Mosque</h4>
                                        <p className="text-sm text-gray-500">A newly renovated large mosque is right next to the site for prayer.</p>
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
                                topic: "Climbing",
                                commonBelief: "We climb the big mountain.",
                                reality: "No, you climb the small 'Archers' Mound' (Jabal Rumaat). Climbing the main Mount Uhud is reserved for hiking. A VIP transfer drops you at the base.",
                                truthRange: "Small Hill Only",
                                factors: ["Safety", "Heat"]
                            },
                            {
                                topic: "Transport",
                                commonBelief: "Buses are everywhere.",
                                reality: "Hop-on Hop-off buses exist, but they have fixed schedules. A private VIP transfer allows you to stay as long as you want and leave comfortably.",
                                truthRange: "VIP is Flexible",
                                factors: ["Freedom", "No Waiting"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Madinah" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How far is Mount Uhud from Haram?",
                        shortAnswer: "15 mins",
                        detailedAnswer: "It is approximately 5-6 km north of the Haram, a 15-minute drive.",
                        perspectives: []
                    },
                    {
                        question: "Is there an entrance fee?",
                        shortAnswer: "No",
                        detailedAnswer: "No, visiting Mount Uhud, the Archers' Mound, and the cemetery is free.",
                        perspectives: []
                    },
                    {
                        question: "Can we buy dates there?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, there is a popular date market adjacent to the site known for competitive prices.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
