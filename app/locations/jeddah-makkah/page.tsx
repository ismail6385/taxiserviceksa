
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Shield, ArrowRight, CheckCircle2, Car } from 'lucide-react';
import Hero from '@/components/Hero';
import ExpertReview from '@/components/seo/ExpertReview';
import DistanceTable from '@/components/seo/DistanceTable';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import TrendingTravelNote from '@/components/seo/TrendingTravelNote';
import QuestionGrouper from '@/components/seo/QuestionGrouper';
import SemanticField from '@/components/seo/SemanticField';
import TopicCluster from '@/components/seo/TopicCluster';
import RoutePerspective from '@/components/seo/RoutePerspective';
import RelatedLocations from '@/components/seo/RelatedLocations';

export const metadata: Metadata = {
    title: 'VIP Private Transfer Jeddah to Makkah | Premium Chauffeur',
    description: 'Premium VIP private transfer and executive chauffeur service from Jeddah to Makkah. Specialized Umrah transfers with luxury SUVs and professional drivers.',
    keywords: ['Jeddah to Makkah VIP transfer', 'Premium chauffeur Jeddah Makkah', 'Executive Makkah transfer', 'Luxury Umrah transport'],
    alternates: {
        canonical: 'https://transferksa.com/locations/jeddah-makkah/',
    },
};

export default function JeddahMakkahRoutePage() {
    const distanceData = [
        { destination: 'Makkah (Haram)', distance: '95 km', time: '1h 15m', route: 'Haramain Expy' },
        { destination: 'Aziziyah', distance: '100 km', time: '1h 25m', route: 'Ring Road' },
        { destination: 'Jeddah Airport', distance: '0 km', time: '0 mins', route: '-' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero
                images={['/jeddah-airport-terminal.webp', '/mecca-royal-clock-tower.png']}
                h1Text="VIP Private Transfer Jeddah to Makkah"
                bookingFormTitle="Book Premium Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Executive Chauffeur Service
                    </span>
                }
                subtitle="The Premium Link for Pilgrims & Professionals"
                location="Jeddah ➔ Makkah | VIP"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="VIP Transfer KSA™ Route"
                        description="Professional chauffeur and VIP transfer services between Jeddah and Makkah. We help pilgrims and travelers with reliable door-to-door transport and 24/7 availability."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Route Trips', value: '25k+', icon: Car },
                            { label: 'On-Time', value: '99.8%', icon: Clock },
                            { label: 'Safe', value: '100%', icon: Shield }
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Intercity and Airport transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    topic="Haramain Highway Traffic"
                    status="Traffic Alert"
                    lastUpdated="Peak Season"
                    content="The Jeddah-Makkah Highway (Route 40) is currently experiencing high volume due to Umrah season. Checkpoints at the Shumaisi boundary may add 15-20 mins to the trip."
                    tags={["HighwayTraffic", "Shumaisi", "UmrahSeason", "Route40"]}
                />
            </div>

            {/* Semantic Hub */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    mainQuestion="Why book a private transfer to Makkah?"
                    intro="Public transport options exists but have limitations for pilgrims with luggage."
                    subQuestions={[
                        {
                            id: 'q1',
                            condition: 'Luggage',
                            question: 'Can I take luggage on the Train?',
                            answer: 'The Haramain Train has strict baggage limits (similar to airlines). Large suitcases are often rejected. Our VIP transfers have no such restrictions.',
                            citation: 'HHR Policy'
                        },
                        {
                            id: 'q2',
                            condition: 'Directness',
                            question: 'Does the bus go to my hotel?',
                            answer: 'No. SAPTCO buses drop you at a central station (Jarwal). You still need a VIP transfer to reach your hotel near the Haram. We drive you door-to-door.',
                            citation: 'Bus Route'
                        },
                        {
                            id: 'q3',
                            condition: 'Ihram',
                            question: 'Can we stop at a Miqat?',
                            answer: 'If you are coming by land/sea, yes. If arriving by air at JED, you should already be in Ihram. However, we can stop at services for Wudu/Change if needed.',
                            citation: 'Fiqh Rule'
                        }
                    ]}
                />

                <SemanticField
                    title="The Route: Jeddah to Makkah"
                    explanation="It is a short but spiritually significant journey."
                    concepts={[
                        {
                            label: 'King Abdulaziz Airport (JED)',
                            description: 'The main entry point. The new Terminal 1 is massive. Meeting drivers requires clear coordination at specific gates.',
                            wikiLink: 'https://kaia.sa/'
                        },
                        {
                            label: 'Haramain Expressway',
                            description: 'The main 8-lane highway connecting the two cities. Speed limit is 120km/h.',
                            internalLink: '/locations/jeddah'
                        },
                        {
                            label: 'The Haram Boundary',
                            description: 'Non-Muslims are diverted before entering the Holy City. Our drivers are fully authorized for the Haram zone.',
                            internalLink: '/locations/makkah'
                        }
                    ]}
                />

                <TopicCluster
                    mainTopic="Makkah Logistics"
                    clusters={[
                        {
                            category: "Arrival Options",
                            relevance: "Primary",
                            items: [
                                { label: "JED Airport Pickup", url: "/services/airport-transfers" },
                                { label: "Jeddah City to Makkah", url: "/locations/jeddah" },
                                { label: "Train Station Transfer", url: "/services/city-transport" }
                            ]
                        },
                        {
                            category: "Return Trip",
                            relevance: "Secondary",
                            items: [
                                { label: "Makkah to Jeddah Airport", url: "/locations/makkah", description: "Departure" },
                                { label: "Makkah to Madinah", url: "/locations/madinah", description: "Ziyarat" }
                            ]
                        }
                    ]}
                />

                <div className="mt-16">
                    <RoutePerspective
                        route="Jeddah Airport (JED) to Makkah Hotel"
                        perspectives={[
                            {
                                id: "pilgrim",
                                targetAudience: "Umrah Family",
                                icon: Car,
                                intent: "Worship",
                                description: "Landing at Terminal 1. Tired from the flight. The driver meets you with a name sign, loads all 6 suitcases, and drives gently to the hotel while you recite Talbiyah.",
                                structuredFeatures: [
                                    { label: "Vehicle", value: "GMC Yukon XL" },
                                    { label: "Capacity", value: "7 Pax + Luggage" },
                                    { label: "Comfort", value: "AC Max" }
                                ],
                                visualContext: "Night drive on the lit highway."
                            },
                            {
                                id: "business",
                                targetAudience: "Solo Traveler",
                                icon: Clock,
                                intent: "Speed",
                                description: "Quick exit from the airport. Direct dash to the Clock Tower for a meeting.",
                                structuredFeatures: [
                                    { label: "Vehicle", value: "Luxury Sedan" },
                                    { label: "Speed", value: "Express" }
                                ],
                                visualContext: "Passing the Makkah Gate structure."
                            }
                        ]}
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        <div className="p-4">
                            <Clock className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900">75 Minutes</h3>
                            <p className="text-gray-500">Average travel time via Highway</p>
                        </div>
                        <div className="p-4">
                            <Shield className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900">Fixed Design</h3>
                            <p className="text-gray-500">No hidden fees or surge pricing</p>
                        </div>
                        <div className="p-4">
                            <Car className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900">Door-to-Door</h3>
                            <p className="text-gray-500">Hotel lobby drop-off (Makkah Tower)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
                            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                            <span className="text-sm font-semibold text-emerald-900">Route Fares</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-6">
                            VIP Jeddah to Makkah Rates
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Flat rates from Jeddah Airport to your Makkah hotel.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Car className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Standard Sedan</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 200
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                4 Pax Max / 2 Bags
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500 hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white hover:text-black px-4 py-1 rounded-full text-xs font-bold">
                                BEST SELLER
                            </div>
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">GMC VIP (SUV)</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 350
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                7 Pax / 7 Bags
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Family Bus</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 450
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                HiAce for 10 Passengers
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations currentCity="Jeddah" />
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <DistanceTable origin="Jeddah" locations={distanceData} />

                    <div className="mt-16">
                        <TravelConsensus
                            points={[
                                {
                                    topic: "VIP Transfer vs Train",
                                    commonBelief: "Train is faster.",
                                    reality: "The Train is fast on track (50 mins), but stations are far from hotels. Private VIP transfer is door-to-door and usually faster overall for groups with luggage.",
                                    truthRange: "Taxi = Convenience",
                                    factors: ["Luggage", "Family Size"]
                                }
                            ]}
                        />
                    </div>

                    <div className="mt-16">
                        <MicroSemanticFAQ
                            faqs={[
                                {
                                    question: "Can I wear Ihram?",
                                    shortAnswer: "Yes.",
                                    detailedAnswer: "Most pilgrims wear Ihram from the plane. If you need to stop at a Miqat (if you arrived by land to Jeddah), we can stop. If you arrived by air, you should already be in Ihram.",
                                    perspectives: []
                                },
                                {
                                    question: "What car types are available?",
                                    shortAnswer: "Sedans & SUVs.",
                                    detailedAnswer: "We have Toyota Camry/Ford Taurus (Sedan) for up to 3 pax, and GMC Yukon/Hyundai Staria (XL) for up to 7 pax.",
                                    perspectives: []
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>
        </div >
    );
}
