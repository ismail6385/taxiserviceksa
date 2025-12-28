
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
import DriverMeetGreet from '@/components/DriverMeetGreet';

export const metadata: Metadata = {
    title: 'Madinah Airport Taxi | Prince Mohammad Airport (MED) Transfer',
    description: 'Reliable taxi from Madinah Airport to Masjid Nabawi hotels. 24/7 pickup reliability. Fixed rates starting from 50 SAR. Professional drivers.',
    keywords: ['Madinah airport taxi', 'Prince Mohammad airport transfer', 'MED airport taxi', 'Taxi Madinah airport to Haram', 'Madinah airport pickup'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/madinah-airport-taxi/',
    },
};

export default function MadinahAirportTaxiPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="madinah-airport-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Madinah Airport Transfer",
                        "provider": { "@type": "Organization", "name": "Taxi Service KSA" },
                        "areaServed": { "@type": "City", "name": "Madinah" },
                        "offers": { "@type": "Offer", "price": "100", "priceCurrency": "SAR", "priceValidUntil": "2025-12-31" }
                    })
                }}
            />

            <Hero
                images={['/locations/madinah.webp', '/hero-slide-2.webp']}
                h1Text="Madinah Airport Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        MED Arrivals
                    </span>
                }
                subtitle="Fast Transfer to Prophet's Mosque"
                location="20 Minute Drive"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Madinah"
                        description="Welcoming you to the City of Light. Our drivers ensure a smooth, quick transfer from Prince Mohammad Bin Abdulaziz International Airport (MED) to your hotel."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Airport Transfers', value: '30k+', icon: Plane },
                            { label: 'To Haram', value: '25 Mins', icon: Clock },
                            { label: 'Satisfaction', value: '5.0', icon: Shield }
                        ]}
                    />
                </div>
            </Hero>

            <DriverMeetGreet />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-emerald-900">
                                <Plane className="w-6 h-6 text-emerald-600" /> Why Book With Us?
                            </h3>
                            <ul className="space-y-4 text-emerald-800">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>Flight Monitoring:</strong> We track your landing time.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>Meet & Greet:</strong> Driver waits at the exit.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>Standard Rates:</strong> No haggling required.</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Journey to Haram</h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                Prince Mohammad Bin Abdulaziz International Airport (MED) is located just 15-20 km from the central Haram area. It is one of the most convenient airports for pilgrims due to its proximity to the city center.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our drivers know all the hotels in the Central Zone (Markaziyah) and can navigate the traffic restrictions efficiently to get you to your lobby quickly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "How much is a taxi from Madinah Airport to Haram?",
                                shortAnswer: "Approx 80-120 SAR.",
                                detailedAnswer: "While metered taxis are available, our fixed-rate private transfer ensures a premium car (Camry/Ford) for around 100-150 SAR depending on the season, with zero waiting time.",
                                perspectives: [
                                    {
                                        role: "Value",
                                        icon: "CheckCircle2",
                                        insight: "Peace of mind upon arrival is worth the small premium over street hail."
                                    }
                                ]
                            },
                            {
                                question: "Can I book a van for my family?",
                                shortAnswer: "Yes, GMC/Hiace available.",
                                detailedAnswer: "We offer 7-seater GMCs and 10-seater H1 vans for larger families with luggage. Please book in advance to ensure availability of large vehicles.",
                                perspectives: [
                                    {
                                        role: "Family",
                                        icon: "User",
                                        insight: "Essential if you have more than 2 large suitcases."
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
                        <ReviewsDisplay location="MadinahAirport" />
                        <QuestionsDisplay location="MadinahAirport" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="MadinahAirport" />
                        <QuestionForm locationName="MadinahAirport" />
                    </div>
                </div>
            </section>
        </div>
    );
}
