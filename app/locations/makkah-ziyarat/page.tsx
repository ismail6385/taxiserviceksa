
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Mountain, MapPin, Clock, CheckCircle2, Star, Shield, Car, Users, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TrendingTravelNote from '@/components/seo/TrendingTravelNote';
import QuestionGrouper from '@/components/seo/QuestionGrouper';
import SemanticField from '@/components/seo/SemanticField';
import TopicCluster from '@/components/seo/TopicCluster';
import TravelConsensus from '@/components/seo/TravelConsensus';
import ExpertReview from '@/components/seo/ExpertReview';
import RelatedLocations from '@/components/seo/RelatedLocations';

export const metadata: Metadata = {
    title: 'VIP Private Ziyarat Tours Makkah | Premium Chauffeur Heritage',
    description: 'Premium VIP private Ziyarat tours in Makkah. Visit Jabal Al-Nour, Jabal Thawr, Arafat, and Mina with an executive chauffeur. Luxury vehicle options for pilgrims.',
    keywords: ['Makkah VIP Ziyarat', 'Premium Makkah holy sites tour', 'Executive chauffeur Makkah Ziyarat', 'Luxury pilgrim transport Makkah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/makkah-ziyarat/',
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
                h1Text="VIP Private Ziyarat Tours Makkah"
                bookingFormTitle="Book Premium Ziyarat"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Executive Chauffeur Service
                    </span>
                }
                subtitle="A Premium Spiritual & Historical Journey"
                location="Makkah Al Mukarramah | VIP"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Ziyarat
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
                        OFFICIAL NOTE: We specialize in pre-booked VIP Private Tours and Heritage transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    topic="Jabal Al-Nour Access"
                    status="Insider Tip"
                    lastUpdated="New Cable Car Info"
                    content="Local authorities are developing a cable car to Cave Hira. Currently, access is only by foot (steep climb). Chauffeurs drop you at the visitor center at the base."
                    tags={["CaveHira", "JabalNour", "WalkingShoes", "VisitorCenter"]}
                />
            </div>

            {/* Semantic Hub */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
                <QuestionGrouper
                    mainQuestion="Why book a private VIP tour for Makkah Ziyarat?"
                    intro="Group buses are budget options but they often rush through sites. A private executive chauffeur lets you reflect and pray with dignity."
                    subQuestions={[
                        {
                            id: 'q1',
                            condition: 'Time',
                            question: 'Can we stay longer at Arafat?',
                            answer: 'Yes. With a private car, you control the schedule. You can spend 20 minutes making dua at Jabal Rahmah instead of the usual 5-minute photo stop.',
                            citation: 'Flexible Schedule'
                        },
                        {
                            id: 'q2',
                            condition: 'Elderly',
                            question: 'Is it walking-intensive?',
                            answer: 'Most sites are viewed from the car or close parking. Climbing Hura or Thawr is hiking. We can park close to minimize walking for elders.',
                            citation: 'Accessibility'
                        },
                        {
                            id: 'q3',
                            condition: 'Route',
                            question: 'Which route do we take?',
                            answer: 'We usually start with Jabal Al-Nour, then cemetery, then towards Arafat/Mina loop. But you can customize it.',
                            citation: 'Custom Route'
                        }
                    ]}
                />

                <SemanticField
                    title="Sacred Geography of Makkah"
                    explanation="Understanding the locations helps you visualize the Seerah."
                    concepts={[
                        {
                            label: 'Jabal Thawr',
                            description: 'Located in the south. The cave of migration. Higher and harder to climb than Hira.',
                            internalLink: '/locations/makkah'
                        },
                        {
                            label: 'Mina',
                            description: 'The City of Tents. Empty most of the year, but full of spiritual significance. We drive through the streets used during Hajj.',
                            internalLink: '/guides/makkah-umrah-guide'
                        },
                        {
                            label: 'Jannat al-Mualla',
                            description: 'Near the Haram (approx 1-2km). The resting place of Umm al-Mu\'mineen Khadija (RA).',
                            wikiLink: 'https://en.wikipedia.org/wiki/Jannat_al-Mu%27alla'
                        }
                    ]}
                />

                <TopicCluster
                    mainTopic="Ziyarat Experience"
                    clusters={[
                        {
                            category: "Preparation",
                            relevance: "Primary",
                            items: [
                                { label: "Makkah Hotels", url: "/locations/makkah" },
                                { label: "Umrah Guide", url: "/guides/makkah-umrah-guide" },
                                { label: "Madinah Ziyarat", url: "/locations/madinah" }
                            ]
                        },
                        {
                            category: "Logistics",
                            relevance: "Secondary",
                            items: [
                                { label: "VIP Booking", url: "/booking", description: "Reserve Slot" },
                                { label: "Jeddah Airport", url: "/services/airport-transfers", description: "Arrival" }
                            ]
                        }
                    ]}
                />

                <div className="mt-16">
                    <TravelConsensus
                        points={[
                            {
                                topic: "Climbing Cave Hira",
                                commonBelief: "It's a quick walk.",
                                reality: "It is a strenuous 1-hour hike up steep stairs. Not recommended for elderly or those with knee issues. The Hira Cultural District at the base offers a VR experience instead.",
                                truthRange: "Physically Demanding",
                                factors: ["Heat", "Stairs", "Elevation"]
                            }
                        ]}
                    />
                </div>
            </div>

            {/* Authoritative Signal */}
            <section className="bg-white mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ExpertReview
                        reviewerName='Guide Ahmed Al-Harbi'
                        reviewerTitle='Historical Tour Specialist'
                        reviewDate="25 Dec 2025"
                        expertise={["Seerah Sites", "Makkah Geography", "Crowd Management"]}
                    />
                </div>
            </section>

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
                                detailedAnswer: "The chauffeur drops you at the base of Jabal Al-Nour. The climb takes 45-90 minutes depending on fitness. Most standard VIP Ziyarat tours stop at the base for photos and history unless you specifically request a 'Climbing Tour' which requires extra waiting time.",
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

            {/* Pricing Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-emerald-700" />
                            <span className="text-sm font-semibold text-emerald-900">Ziyarat Fares</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-6">
                            VIP Private Tour Pricing
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive 3-4 hour tour of all holy sites. Price is per vehicle, not per person.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Car className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Sedan</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 200
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Up to 4 Passengers
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500 hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white hover:text-black px-4 py-1 rounded-full text-xs font-bold">
                                MOST POPULAR
                            </div>
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">SUV (GMC/Ford)</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 300
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Up to 7 Passengers
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">HiAce Bus</div>
                            <div className="text-4xl font-black text-emerald-600 mb-3">
                                <span className="text-2xl text-gray-500">SAR</span> 450
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Small Groups (10-12 pax)
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <RelatedLocations currentCity="Makkah" />
            </div>
        </div>
    );
}
