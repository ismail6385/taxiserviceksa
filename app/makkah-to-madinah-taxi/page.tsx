
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Car, Clock, MapPin, CheckCircle2, Shield, User, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';

export const metadata: Metadata = {
    title: 'Makkah to Madinah Taxi | Direct Hotel-to-Hotel Transfer',
    description: 'Book a private taxi from Makkah to Madinah. Direct travel with no stops (unless requested). 4.5 hour journey. Comfortable GMCs and sedans.',
    keywords: ['Makkah to Madinah taxi', 'Makkah to Madinah car rental', 'Makkah Madinah transfer', 'Taxi fare Makkah to Madinah', 'Private driver Makkah to Madinah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/makkah-to-madinah-taxi',
    },
};

export default function MakkahToMadinahPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-reverse"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Makkah to Madinah Transfer",
                        "provider": { "@type": "Organization", "name": "Taxi Service KSA" },
                        "areaServed": { "@type": "City", "name": "Madinah" },
                        "offers": { "@type": "Offer", "price": "450", "priceCurrency": "SAR" }
                    })
                }}
            />

            <Hero
                images={['/locations/makkah.webp', '/hero-slide-3.webp']}
                h1Text="Makkah to Madinah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Direct Journey
                    </span>
                }
                subtitle="Hotel to Hotel Transfer"
                location="KSA Highway Journey"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Intercity"
                        description="After completing your Umrah, travel comfortably to visit the Prophet's Mosque. Our direct taxi service ensures a smooth transition between the Two Holy Cities."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Routes Completed', value: '45k+', icon: Car },
                            { label: 'Duration', value: '4.5 Hrs', icon: Clock },
                            { label: 'Comfort', value: 'Premium', icon: Shield }
                        ]}
                    />
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Travel in Comfort</h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                The journey from Makkah to Madinah is approximately 450km. A private taxi allows you to relax, sleep, or read Quran in privacy without the hassle of bus schedules or train station transfers.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>Hotel Pickup:</strong> We come to your Makkah hotel.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>Standard Route:</strong> Fast, modern Hijrah Highway.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span><strong>Flexible Stops:</strong> Rest whenever you need.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <MapPin className="w-6 h-6 text-emerald-600" /> Ziyarat on the Way?
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Some pilgrims choose to visit the site of the **Battle of Badr** which is a slight detour off the main highway.
                            </p>
                            <div className="bg-emerald-50 text-emerald-800 p-4 rounded-lg text-sm">
                                <strong>Tip:</strong> If you wish to visit Badr, please mention it during booking so we can allocate extra time and adjust the fare slightly.
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
                                question: "Do we need to stop for Miqat?",
                                shortAnswer: "No.",
                                detailedAnswer: "When traveling from Makkah *to* Madinah, there is no Miqat requirement as you are leaving the Haram zone. Stops are only for rest, food, or prayer.",
                                perspectives: [
                                    {
                                        role: "Fiqh",
                                        icon: "CheckCircle2",
                                        insight: "The journey is straightforward."
                                    }
                                ]
                            },
                            {
                                question: "Is the train faster?",
                                shortAnswer: "Station-to-Station, yes.",
                                detailedAnswer: "The train ride is 2.5 hours. However, adding the time to get to Makkah station (30 mins), wait time (1 hr check-in), and get from Madinah station to hotel (30 mins) makes the total time comparable to a private taxi (4.5 hours door-to-door).",
                                perspectives: [
                                    {
                                        role: "Logistics",
                                        icon: "Clock",
                                        insight: "Taxi wins on convenience (no luggage hauling)."
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
                        <ReviewsDisplay location="MakkahToMadinah" />
                        <QuestionsDisplay location="MakkahToMadinah" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="MakkahToMadinah" />
                        <QuestionForm locationName="MakkahToMadinah" />
                    </div>
                </div>
            </section>
        </div>
    );
}
