
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Shield, ArrowRight, CheckCircle2, Car } from 'lucide-react';
import Hero from '@/components/Hero';
import ExpertReview from '@/components/seo/ExpertReview';
import DistanceTable from '@/components/seo/DistanceTable';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

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
                images={['/jeddah-airport-terminal.webp', '/mecca-royal-clock-tower.webp']}
                h1Text="Jeddah to Makkah Taxi Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Most Popular Route
                    </span>
                }
                subtitle="Direct from Airport/City to Hotel"
                location="Jeddah ➔ Makkah"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Now
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
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
        </div>
    );
}
