
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Mountain, MapPin, Clock, CheckCircle2, Star, Shield } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';

export const metadata: Metadata = {
    title: 'Makkah Ziyarat Places | Holy Sites Taxi Tour',
    description: 'Book Makkah Ziyarat taxi tour. Visit Jabal Al-Nour (Cave Hira), Jabal Thawr, Arafat, Mina, and Muzdalifah. Comprehensive guided tours of Makkah\'s holy sites.',
    keywords: ['Makkah Ziyarat places', 'Jabal Nour taxi', 'Cave Hira visit', 'Arafat Mina tour', 'Makkah holy sites taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/makkah-ziyarat',
    },
};

export default function MakkahZiyaratPage() {
    const sites = [
        {
            name: "Jabal Al-Nour (Cave Hira)",
            desc: "The mountain where Prophet Muhammad ﷺ received the first revelation.",
            type: "Mountain"
        },
        {
            name: "Jabal Thawr",
            desc: "The cave where the Prophet ﷺ and Abu Bakr (RA) took refuge during migration.",
            type: "Mountain"
        },
        {
            name: "Arafat (Jabal ar-Rahmah)",
            desc: "The mount of mercy, the central pillar of Hajj.",
            type: "Plain/Mountain"
        },
        {
            name: "Mina & Muzdalifah",
            desc: "The tent city and the site of stoning (Jamarat). Pass-by tour.",
            type: "Valley"
        },
        {
            name: "Jannat al-Mualla",
            desc: "The historic cemetery where Khadija (RA) is buried.",
            type: "Cemetery"
        }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Makkah Ziyarat Sites",
        "description": "A collection of holy historical sites in Makkah.",
        "containsPlace": sites.map(s => ({ "@type": "Place", "name": s.name }))
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="makkah-ziyarat-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Hero
                images={['/locations/makkah.webp', '/hero-slide-2.webp']}
                h1Text="Makkah Ziyarat Tours"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Holy Sites
                    </span>
                }
                subtitle="Historical Journey"
                location="Makkah Al Mukarramah"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Tours"
                        description="Explore the sacred geography of Makkah beyond the Haram. Visit the mountains of revelation and refuge, and the plains of Hajj."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Ziyarat Trips', value: '15k+', icon: Mountain },
                            { label: 'Sites Covered', value: '6+', icon: MapPin },
                            { label: 'Duration', value: '3-4 Hrs', icon: Clock }
                        ]}
                    />
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Sites You Will Visit</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sites.map((site, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                                <div className="text-emerald-600 font-bold text-sm uppercase mb-2 tracking-wider">{site.type}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{site.name}</h3>
                                <p className="text-gray-600 text-sm">{site.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "Can we climb Cave Hira?",
                                shortAnswer: "Yes, but it's demanding.",
                                detailedAnswer: "The taxi drops you at the base of Jabal Al-Nour. The climb takes 45-90 minutes depending on fitness. Most standard Ziyarat tours stop at the base for photos and history unless you specifically request a 'Climbing Tour' which requires extra waiting time.",
                                perspectives: [
                                    {
                                        role: "Advice",
                                        icon: "Mountain",
                                        insight: "Best done separately from the main Ziyarat tour due to time/effort."
                                    }
                                ]
                            },
                            {
                                question: "How long is the tour?",
                                shortAnswer: "3 to 4 Hours.",
                                detailedAnswer: "A standard tour covering all major points (Arafat, Mina, Jabal Nour base, Jabal Thawr base) takes about 3-4 hours by car.",
                                perspectives: [
                                    {
                                        role: "Driver",
                                        icon: "Clock",
                                        insight: "Traffic in Makkah can be heavy; early morning is best."
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
                    <h2 className="text-2xl font-bold text-center mb-8">Pilgrim Experiences</h2>
                    <div className="space-y-12">
                        <ReviewsDisplay location="MakkahZiyarat" />
                        <QuestionsDisplay location="MakkahZiyarat" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="MakkahZiyarat" />
                        <QuestionForm locationName="MakkahZiyarat" />
                    </div>
                </div>
            </section>
        </div>
    );
}
