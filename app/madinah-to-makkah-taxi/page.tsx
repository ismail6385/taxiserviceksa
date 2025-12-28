
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Car, Clock, MapPin, CheckCircle2, Shield, User, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedServices from '@/components/seo/RelatedServices';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import RoutePerspective from '@/components/seo/RoutePerspective';

export const metadata: Metadata = {
    title: 'Madinah to Makkah Taxi | Private Transfer with Miqat Stop',
    description: 'Book private taxi from Madinah to Makkah. Comfortable GMC/Sedan with mandatory stop at Miqat Dhul Hulaifah (Abyar Ali) for Ihram. Fixed rates, licensed drivers.',
    keywords: ['Madinah to Makkah taxi', 'Madinah to Makkah car hire', 'Taxi with Miqat stop', 'Madinah Makkah transfer', 'Private cab Madinah to Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/madinah-to-makkah-taxi/',
    },
};

export default function MadinahToMakkahPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Madinah to Makkah Taxi Transfer",
                        "provider": { "@type": "Organization", "name": "Taxi Service KSA" },
                        "areaServed": { "@type": "City", "name": "Makkah" },
                        "offers": { "@type": "Offer", "price": "450", "priceCurrency": "SAR", "priceValidUntil": "2025-12-31" }
                    })
                }}
            />

            <Hero
                images={['/locations/madinah.webp', '/hero-slide-3.webp']}
                h1Text="Madinah to Makkah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        The Hijrah Route
                    </span>
                }
                subtitle="Private Transfer with Miqat Stop"
                location="450 km Journey"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Intercity"
                        description="Experience a spiritual journey from the City of the Prophet ﷺ to the Holy Kaaba. Our drivers ensure a respectful, comfortable ride with the essential stop for Ihram."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Trips Completed', value: '50k+', icon: Car },
                            { label: 'Miqat Stops', value: '100%', icon: MapPin },
                            { label: 'Travel Time', value: '4.5 Hrs', icon: Clock }
                        ]}
                    />
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <RoutePerspective
                        route="Madinah to Makkah"
                        perspectives={[
                            {
                                id: "pilgrim",
                                targetAudience: "Umrah Pilgrim",
                                icon: User,
                                intent: "Spiritual Preparation",
                                description: "The most important part of this trip is the stop at Miqat Dhul Hulaifah (Abyar Ali). We pause here for 45-60 minutes, allowing you ample time to shower, wear Ihram, and pray 2 Rakats before continuing the Talbiyah journey to Makkah.",
                                structuredFeatures: [
                                    { label: "Miqat Stop", value: "Included" },
                                    { label: "Duration", value: "4-5 Hours" },
                                    { label: "Comfort", value: "High" }
                                ],
                                visualContext: "Vehicle waiting at Miqat mosque parking."
                            }
                        ]}
                    />
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Book Private Taxi?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <Clock className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">Door-to-Door</h3>
                            <p className="text-gray-600">Pick up from your Madinah hotel lobby and drop off directly at your Makkah hotel. No hauling luggage to train stations.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <MapPin className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">Miqat Convenience</h3>
                            <p className="text-gray-600">Unlike the train (which requires you to wear Ihram on board) or buses (limited stop time), our private taxi waits for you as long as you need at the Miqat.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <Shield className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="font-bold text-xl mb-2">Private & Safe</h3>
                            <p className="text-gray-600">Travel with just your family. Clean vehicles, sanitized interiors, and professional drivers.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "How long is the journey?",
                                shortAnswer: "4 to 5 Hours.",
                                detailedAnswer: "The distance is approximately 450km. Without stops, it takes 4 hours. With the Miqat stop and a rest break, expect ~5 hours.",
                                perspectives: [
                                    {
                                        role: "Driver",
                                        icon: "Clock",
                                        insight: "Traffic entering Makkah can add time during Ramadan."
                                    }
                                ]
                            },
                            {
                                question: "What is the price?",
                                shortAnswer: "Starts from 450 SAR.",
                                detailedAnswer: "Sedan cars start around 450 SAR. larger GMC/H1 vans for families are around 650-800 SAR. Prices are fixed per vehicle, not per person.",
                                perspectives: [
                                    {
                                        role: "Value",
                                        icon: "CheckCircle2",
                                        insight: "Cheaper than 4 train tickets + station transfers."
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </section>

            {/* UGC Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8">Passenger Reviews</h2>
                    <div className="space-y-12">
                        <ReviewsDisplay location="MadinahToMakkah" />
                        <QuestionsDisplay location="MadinahToMakkah" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="MadinahToMakkah" />
                        <QuestionForm locationName="MadinahToMakkah" />
                    </div>
                </div>
            </section>
        </div>
    );
}
