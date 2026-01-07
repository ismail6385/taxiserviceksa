
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Clock, Star, CheckCircle2, Car, Users, Shield, Compass, MapPin, ArrowRight, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import ExpertReview from '@/components/seo/ExpertReview';
import TravelConsensus from '@/components/seo/TravelConsensus';
import RoutePerspective from '@/components/seo/RoutePerspective';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TrendingTravelNote from '@/components/seo/TrendingTravelNote';
import QuestionGrouper from '@/components/seo/QuestionGrouper';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import SemanticField from '@/components/seo/SemanticField';
import TopicCluster from '@/components/seo/TopicCluster';
import RelatedServices from '@/components/seo/RelatedServices';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';

export const metadata: Metadata = {
    title: 'Intercity VIP Transfer KSA | Long Distance Private Chauffeur',
    description: 'Premium intercity VIP transfer service in Saudi Arabia. Executive private transfers between Jeddah, Makkah, Madinah, Riyadh, and more. Luxury long-distance travel with fixed rates.',
    keywords: ['Intercity VIP transfer Saudi Arabia', 'Jeddah to Riyadh premium transfer', 'Long distance private chauffeur KSA', 'City to city VIP transfer Saudi Arabia', 'Private executive car hire Saudi cities'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/intercity/',
    },
    openGraph: {
        url: 'https://taxiserviceksa.com/services/intercity/',
    },
};

export default function IntercityServicePage() {
    const popularRoutes = [
        { name: 'Jeddah ↔ Makkah', distance: '85 km', time: '1 hr 15 min', price: 'From SAR 250' },
        { name: 'Makkah ↔ Madinah', distance: '450 km', time: '4 hr 30 min', price: 'From SAR 450' },
        { name: 'Jeddah ↔ Madinah', distance: '420 km', time: '4 hr', price: 'From SAR 400' },
        { name: 'Riyadh ↔ Dammam', distance: '400 km', time: '3 hr 45 min', price: 'From SAR 600' },
        { name: 'Jeddah ↔ Taif', distance: '170 km', time: '2 hr', price: 'From SAR 300' },
        { name: 'Madinah ↔ AlUla', distance: '330 km', time: '3 hr 30 min', price: 'From SAR 500' },
    ];

    const features = [
        'Door-to-door service',
        'Fixed upfront pricing',
        'Professional licensed drivers',
        'Comfortable long-distance vehicles',
        'Stops available upon request',
        'Luggage assistance included',
    ];

    const faqs = [
        {
            question: "How do I book an intercity VIP transfer?",
            answer: "You can book easily through our website using the booking form. Simply select your pickup and drop-off cities to get an instant executive quote and confirmation."
        },
        {
            question: "Are the rates fixed for long-distance trips?",
            answer: "Yes, all our intercity rates are fixed. The price you see includes fuel, toll charges, and driver fees. There are no hidden costs."
        },
        {
            question: "What type of vehicles are used for intercity travel?",
            answer: "We use well-maintained sedans (Camry/Sonata) for up to 4 passengers and GMC/H-1 vans for families and groups. All vehicles are air-conditioned and suitable for long journeys."
        },
        {
            question: "Can we make stops during the journey?",
            answer: "Yes, our private transfer service allows for flexibility. You can request rest stops for prayer, food, or restrooms at no extra cost."
        }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Intercity VIP Transfer KSA",

        "description": "Professional executive long-distance intercity transfer service connecting major cities in Saudi Arabia.",
        "areaServed": "Saudi Arabia",
        "serviceType": "VIP Transport"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Hero
                images={['/hero-slide-1.webp', '/hero-slide-3.webp']}
                h1Text="Intercity VIP Transfer Service Saudi Arabia"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Nationwide Coverage
                    </span>
                }
                subtitle="City-to-City Transfers"
                location="Kingdom Wide"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="VIP Transfer KSA™ Intercity"
                        description="Connecting the Kingdom's major hubs with reliable, private transportation. From the Red Sea coast of Jeddah to the capital Riyadh and the holy cities."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Cities Covered', value: '20+', icon: MapPin },
                            { label: 'Trips Completed', value: '15k+', icon: Navigation },
                            { label: 'Reliability', value: '99.9%', icon: Shield }
                        ]}
                    />
                </div>
            </Hero>

            {/* Trending Note */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
                <TrendingTravelNote
                    topic="New Highway Routes"
                    status="Seasonal Update"

                    lastUpdated="December 2025"
                    content="The road network between Makkah and Madinah has recently been upgraded with more rest areas and service stations, making the 450km journey more comfortable than ever by car."
                    tags={["HighwayTravel", "Infrastructure", "Comfort"]}
                    linkText="Book Intercity Ride"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Intercity Routes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {popularRoutes.map((route, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-lg text-gray-900">{route.name}</h3>
                                <ArrowRight className="text-gray-400 w-5 h-5" />
                            </div>
                            <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex justify-between">
                                    <span>Distance:</span>
                                    <span className="font-medium text-gray-900">{route.distance}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Est. Time:</span>
                                    <span className="font-medium text-gray-900">{route.time}</span>
                                </div>
                                <div className="pt-2 border-t mt-2 flex justify-between items-center">
                                    <span className="text-emerald-600 font-bold text-lg">{route.price}</span>
                                    <Link href="/booking/" className="text-blue-600 text-xs font-semibold hover:underline">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8" id="intercity-details">
                <div className="max-w-7xl mx-auto">
                    <RoutePerspective
                        route="Intercity Travel Experience"
                        perspectives={[
                            {
                                id: "business",
                                targetAudience: "Business Traveler",
                                icon: Users,
                                intent: "Efficiency & Comfort",
                                description: "Travel between Riyadh and Dammam or Jeddah for meetings without the hassle of airports. Use the travel time to work or relax in a private, quiet vehicle.",
                                structuredFeatures: [
                                    { label: "Privacy", value: "Guaranteed" },
                                    { label: "WiFi", value: "On Request" },
                                    { label: "Receipts", value: "Available" }
                                ],
                                visualContext: "Executive sedan on a modern highway."
                            },
                            {
                                id: "family",
                                targetAudience: "Family Vacation",
                                icon: Car,
                                intent: "Convenience & Safety",
                                description: "Avoid the stress of public transport with children. Our spacious GMCs offer ample luggage space and the freedom to stop whenever needed.",
                                structuredFeatures: [
                                    { label: "Capacity", value: "Up to 7 Pax" },
                                    { label: "Child Seats", value: "Available" },
                                    { label: "Breaks", value: "Flexible" }
                                ],
                                visualContext: "Family enjoying a comfortable ride in a large SUV."
                            }
                        ]}
                    />
                </div>
            </section>

            {/* Semantic SEO */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        points={[
                            {
                                topic: "VIP Transfer vs Flight (Jeddah to Riyadh)",
                                commonBelief: "Flight is always faster.",
                                reality: "While flight time is 1.5 hours, airport procedures (check-in, security, bag claim) add 3-4 hours. A private car takes longer (9-10 hours) but offers door-to-door convenience and privacy, preferred by some for scenery or fear of flying.",
                                truthRange: "Depends on Preference",
                                factors: ["Total Travel Time", "Convenience", "Cost for Groups"]
                            },
                            {
                                topic: "Intercity Bus vs VIP Private Transfer",
                                commonBelief: "Bus is good enough.",
                                reality: "Buses are cheaper but follow fixed schedules and stations. Private VIP transfers leave on your schedule, pick you up from your door, and save substantial time by going direct.",
                                truthRange: "Transfer = Time Saver",
                                factors: ["Schedule", "Privacy", "Door-to-Door"]
                            }
                        ]}
                    />

                    <div className="mt-12">
                        <MicroSemanticFAQ
                            faqs={[
                                {
                                    question: "Is it safe to travel between cities by VIP transfer at night?",
                                    shortAnswer: "Yes, generally safe.",
                                    detailedAnswer: "Saudi highways are well-lit and patrolled. Our drivers are experienced in night driving. However, for the most scenic views, day travel is recommended.",
                                    perspectives: [
                                        {
                                            role: "Safety Officer",
                                            icon: "Shield",
                                            insight: "We monitor all trips. Drivers are mandated to take rest breaks on long journeys to ensure alertness."
                                        }
                                    ]
                                },
                                {
                                    question: "How much luggage can we take?",
                                    shortAnswer: "Depends on vehicle.",
                                    detailedAnswer: "Sedans hold 2-3 large suitcases. GMCs/SUVs can hold 5-6. Please specify your luggage amount when booking so we send the right car.",
                                    perspectives: [
                                        {
                                            role: "Logistics",
                                            icon: "Car",
                                            insight: "Always overestimate luggage. It's better to have extra space than not enough."
                                        }
                                    ]
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="space-y-4 max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>

            {/* UGC Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Traveler Reviews</h2>
                    </div>
                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="Intercity" />
                        <QuestionsDisplay location="Intercity" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReviewForm locationName="Intercity" />
                        <QuestionForm locationName="Intercity" />
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Airport Transfers',
                        description: 'Arrive in style. Transfers from all major Saudi airports to your destination city.',
                        href: '/services/airport-transfers',
                        icon: Car
                    },
                    {
                        name: 'Umrah Transport',
                        description: 'Specialized intercity transport for Umrah pilgrims between Makkah and Madinah.',
                        href: '/services/umrah-transport',
                        icon: Star
                    },
                ]}
                title="Other Transport Services"
                description="Comprehensive travel solutions for your journey in Saudi Arabia."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <TopicCluster
                    mainTopic="Saudi Intercity Travel"
                    clusters={[
                        {
                            category: "Major Routes",
                            relevance: "Primary",
                            items: [
                                { label: "Jeddah to Makkah", url: "/routes/jeddah-makkah" },
                                { label: "Makkah to Madinah", url: "/routes/makkah-madinah" },
                                { label: "Riyadh to Jeddah", url: "/routes/riyadh-jeddah" }
                            ]
                        },
                        {
                            category: "Travel Guides",
                            relevance: "Secondary",
                            items: [
                                { label: "Meqat Locations", url: "/guides/meeqat-locations" },
                                { label: "Currency Guide", url: "/guides/currency" }
                            ]
                        }
                    ]}
                />
            </div>

        </div>
    );
}
