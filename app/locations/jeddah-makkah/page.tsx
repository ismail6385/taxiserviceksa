
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

export const metadata: Metadata = {
    title: 'Jeddah to Makkah Taxi | Private Transfers 24/7',
    description: 'Book a private taxi from Jeddah to Makkah. Direct hotel drop-off, clean vehicles, and experienced drivers. Umrah transfers from KAIA Airport available.',
    keywords: ['Jeddah to Makkah taxi', 'Jeddah airport to Makkah', 'Makkah transfer', 'Taxi fare Jeddah Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/jeddah-makkah/',
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
                h1Text="Jeddah to Makkah Taxi Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Most Popular Route
                    </span>
                }
                subtitle="Direct from Airport/City to Hotel"
                location="Jeddah ➔ Makkah"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Route"
                        description="Professional chauffeur and taxi transfer services between Jeddah and Makkah. We help pilgrims and travelers with reliable door-to-door transport and 24/7 availability."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Route Trips', value: '25k+', icon: Car },
                            { label: 'On-Time', value: '99.8%', icon: Clock },
                            { label: 'Safe', value: '100%', icon: Shield }
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Now
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

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
                            answer: 'The Haramain Train has strict baggage limits (similar to airlines). Large suitcases are often rejected. Our taxis have no such restrictions.',
                            citation: 'HHR Policy'
                        },
                        {
                            id: 'q2',
                            condition: 'Directness',
                            question: 'Does the bus go to my hotel?',
                            answer: 'No. SAPTCO buses drop you at a central station (Jarwal). You still need a taxi to reach your hotel near the Haram. We drive you door-to-door.',
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
                            <p className="text-gray-500">Hotel lobby drop-off</p>
                        </div>

                    </div>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <DistanceTable origin="Jeddah" locations={distanceData} />

                    <div className="mt-16">
                        <TravelConsensus
                            points={[
                                {
                                    topic: "Taxi vs Train",
                                    commonBelief: "Train is faster.",
                                    reality: "The Train is fast on track (50 mins), but stations are far from hotels. Taxi is door-to-door and usually faster overall for groups with luggage.",
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
