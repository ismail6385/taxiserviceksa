
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Plane, Clock, MapPin, CheckCircle2, Shield, User, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Makkah Taxi | JED to Haram Transfer',
    description: 'Official taxi service from Jeddah Airport (JED) to Makkah hotels. 24/7 Meet & Greet at arrivals. Fixed price private transfers for Umrah pilgrims. 1 hour journey.',
    keywords: ['Jeddah airport to Makkah taxi', 'JED to Makkah transfer', 'Taxi fare Jeddah airport to Haram', 'Jeddah to Makkah cab', 'Umrah taxi Jeddah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/jeddah-airport-to-makkah-taxi/',
    },
};

export default function JeddahAirportToMakkahPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="jeddah-route-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Jeddah Airport to Makkah Transfer",
                        "provider": { "@type": "Organization", "name": "Taxi Service KSA" },
                        "areaServed": { "@type": "City", "name": "Makkah" },
                        "offers": { "@type": "Offer", "price": "200", "priceCurrency": "SAR" }
                    })
                }}
            />

            <Hero
                images={['/jeddah-airport.webp', '/hero-slide-1.webp']}
                h1Text="Jeddah Airport to Makkah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Arrivals Transfer
                    </span>
                }
                subtitle="Start Your Umrah Smoothly"
                location="JED -> Makkah (80km)"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Airport"
                        description="The #1 trusted transfer for pilgrims arriving at King Abdulaziz International Airport. We track your flight and wait for you, ensuring a seamless connection to the Holy City."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Airport Pickups', value: '100k+', icon: Plane },
                            { label: 'On-Time', value: '99.9%', icon: Clock },
                            { label: 'Travel Time', value: '60 Mins', icon: MapPin }
                        ]}
                    />
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Seamless Airport Transfer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <Clock className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">Flight Tracking</h3>
                            <p className="text-gray-600">We monitor your flight status. If you are delayed, our driver adjusts the pickup time automatically. No stress.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <User className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">Meet & Greet</h3>
                            <p className="text-gray-600">Your driver waits at the arrivals hall holding a sign with your name. Easy identification in the crowded terminal.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <Shield className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">Direct to Hotel</h3>
                            <p className="text-gray-600">No shuttle buses or multiple stops. A private car takes you directly to your hotel entrance in Makkah.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "How much is the taxi fare?",
                                shortAnswer: "From 200 SAR.",
                                detailedAnswer: "Our fixed rate for a sedan starts at 200 SAR. Larger vehicles (GMC) are 350-400 SAR. This is a flat rate including waiting time and fuel.",
                                perspectives: [
                                    {
                                        role: "Comparison",
                                        icon: "CheckCircle2",
                                        insight: "Cheaper and more reliable than hailing a meter taxi at the curb during peak season."
                                    }
                                ]
                            },
                            {
                                question: "Where is the meeting point?",
                                shortAnswer: "Arrivals Hall.",
                                detailedAnswer: "For Terminal 1 (Saudia/Foreign airlines), the driver waits after customs exit. For North Terminal, outside the main exit. We send you the driver's details and a photo of the meeting spot upon booking.",
                                perspectives: [
                                    {
                                        role: "Logistics",
                                        icon: "MapPin",
                                        insight: "Look for the sign with your name."
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
                    <h2 className="text-2xl font-bold text-center mb-8">Traveler Reviews</h2>
                    <div className="space-y-12">
                        <ReviewsDisplay location="JeddahAirport" />
                        <QuestionsDisplay location="JeddahAirport" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="JeddahAirport" />
                        <QuestionForm locationName="JeddahAirport" />
                    </div>
                </div>
            </section>
        </div>
    );
}
