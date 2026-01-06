
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Train, Clock, MapPin, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';

export const metadata: Metadata = {
    title: 'Makkah Train Station Taxi | Haramain Station to Hotel Transfer',
    description: 'Taxi service from Makkah Haramain Train Station (Rusayfah) to Haram hotels. Bridge the gap between the station and your hotel smoothly. Fixed rates.',
    keywords: ['Makkah train station taxi', 'Haramain station transfer Makkah', 'Rusayfah station taxi', 'Makkah station to Haram', 'Train station pickup Makkah'],
    alternates: {
        canonical: 'https://transferksa.com/makkah-train-station-taxi/',
    },
};

export default function MakkahTrainStationPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="station-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Makkah Train Station Transfer",

                        "areaServed": { "@type": "City", "name": "Makkah" },
                        "offers": { "@type": "Offer", "price": "100", "priceCurrency": "SAR", "priceValidUntil": "2025-12-31" }
                    })
                }}
            />

            <Hero
                images={['/locations/makkah.webp', '/hero-slide-3.webp']}
                h1Text="Makkah Train Station Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Station Transfer
                    </span>
                }
                subtitle="The Final Leg of Your Journey"
                location="Rusayfah Station"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Station"
                        description="Bridging the gap between the Haramain High-Speed Station and your hotel doorstep. Avoid the chaos of finding a taxi at the station exit."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Station Pickups', value: '20k+', icon: Train },
                            { label: 'To Haram', value: '15 Mins', icon: Clock },
                            { label: 'Reliability', value: '100%', icon: Shield }
                        ]}
                    />
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Pre-book Station Transfer?</h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                The Makkah Station is located in Rusayfah, about 10-15 minutes drive from the Haram (depending on traffic). When a train arrives, hundreds of passengers flood the taxi stand, leading to long queues and surge pricing.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>Skip the Queue:</strong> Driver waits for you.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>Fixed Price:</strong> No bargaining needed.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>Luggage Help:</strong> Driver assists with bags.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <MapPin className="w-6 h-6 text-emerald-600" /> Station Location
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                <strong>Name:</strong> Makkah Haramain High Speed Railway Station<br />
                                <strong>District:</strong> Al Rusayfah<br />
                                <strong>Distance to King Abdulaziz Gate:</strong> ~6 km
                            </p>
                            <div className="bg-emerald-50 text-emerald-800 p-4 rounded-lg text-sm">
                                <strong>Note:</strong> Shuttle buses exist but drop you at bus stations (requiring a walk). Our taxi takes you to your hotel door.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "How much is the taxi from Makkah station to Haram?",
                                shortAnswer: "100 - 150 SAR.",
                                detailedAnswer: "Our private transfer service starts at 100 SAR for a sedan. This guarantees a car waiting for you without the hassle of negotiating at the curb.",
                                perspectives: [
                                    {
                                        role: "Comparison",
                                        icon: "CheckCircle2",
                                        insight: "Station taxis can charge much more during peak arrival times."
                                    }
                                ]
                            },
                            {
                                question: "Where will the driver wait?",
                                shortAnswer: "Arrivals Exit.",
                                detailedAnswer: "The driver acts as a meet-and-greet service at the designated pickup point outside the arrival terminal. We share the car plate and location via WhatsApp.",
                                perspectives: [
                                    {
                                        role: "Logistics",
                                        icon: "MapPin",
                                        insight: "Connection is seamless."
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </section>

            {/* UGC Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-12">
                        <ReviewsDisplay location="MakkahStation" />
                        <QuestionsDisplay location="MakkahStation" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="MakkahStation" />
                        <QuestionForm locationName="MakkahStation" />
                    </div>
                </div>
            </section>
        </div>
    );
}
