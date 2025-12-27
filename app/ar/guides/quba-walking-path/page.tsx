
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Footprints, MapPin, Sun, Clock, Heart, Coffee, Car } from 'lucide-react';

import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedServices from '@/components/seo/RelatedServices';

export const metadata: Metadata = {
    title: 'Quba Avenue Walking Path | Walk from Masjid Nabawi to Quba',
    description: 'A complete guide to the pedestrian walkway connecting Al-Masjid an-Nabawi to Masjid Quba. Distance, best time to walk, and amenities along the route.',
    keywords: ['Quba walking path', 'Masjid Nabawi to Quba walk', 'Quba avenue Madinah', 'Ziyarat walking tour', 'Sunnah walk Madinah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/guides/quba-walking-path',
    },
};

export default function QubaWalkingPathPage() {

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Guide to Quba Avenue Walking Path",
        "description": "Pedestrian path linking the Prophet's Mosque to Quba Mosque.",
        "image": "https://taxiserviceksa.com/madinah-prophets-mosque.webp"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="quba-walk-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Hero
                images={['/madinah-night-view.webp', '/hero-slide-2.webp']}
                h1Text="Quba Avenue Walking Path"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        The Sunnah Trail
                    </span>
                }
                subtitle="From Haram to Quba"
                location="3km Pedestrian Bouleverd"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <p className="text-gray-200 text-lg leading-relaxed text-center">
                        Revive the tradition of walking to Quba Mosque. The Prophet ﷺ used to go to Quba every Saturday (sometimes walking, sometimes riding).
                    </p>
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Path</h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                The Quba Avenue spans approximately <strong>3 kilometers</strong> linking the Holy Prophet's Mosque and Quba Mosque. It is a newly developed pedestrian-friendly boulevard lined with shops, cafes, and historical markers.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-6 h-6 text-emerald-600" />
                                    <div>
                                        <div className="font-bold text-gray-900">Walking Time</div>
                                        <div className="text-gray-600 text-sm">30 - 45 Minutes (Average Pace)</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Footprints className="w-6 h-6 text-emerald-600" />
                                    <div>
                                        <div className="font-bold text-gray-900">Distance</div>
                                        <div className="text-gray-600 text-sm">2.75 km - 3.0 km</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Coffee className="w-6 h-6 text-emerald-600" />
                                    <div>
                                        <div className="font-bold text-gray-900">Amenities</div>
                                        <div className="text-gray-600 text-sm">Benches, Water Misters, Cafes, Shops</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
                            <h3 className="text-xl font-bold text-emerald-900 mb-4">Why Walk?</h3>
                            <p className="text-emerald-800 mb-4 italic">
                                "The Prophet ﷺ used to go to the Mosque of Quba every Saturday (sometimes) walking and (sometimes) riding."
                            </p>
                            <p className="text-sm text-emerald-700">
                                This modern path allows you to follow this Sunnah comfortably. The path is wheelchair accessible and safe for families.
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
                                question: "What is the best time to walk?",
                                shortAnswer: "Early Morning or Evening.",
                                detailedAnswer: "To avoid the heat, start your walk immediately after Fajr prayer. The weather is cool, and you can reach Quba for Duha prayer. Alternatively, walking after Isha is pleasant as the path is beautifully lit and lively.",
                                perspectives: [
                                    {
                                        role: "Local Tip",
                                        icon: "Sun",
                                        insight: "Avoid 11 AM to 4 PM during summer months."
                                    }
                                ]
                            },
                            {
                                question: "Is it safe at night?",
                                shortAnswer: "Yes, very safe.",
                                detailedAnswer: "The area is well-lit, monitored by cameras, and always busy with families and pilgrims enjoying the atmosphere.",
                                perspectives: [
                                    {
                                        role: "Family",
                                        icon: "Heart",
                                        insight: "It's a festive atmosphere at night with food stalls and lights."
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Madinah Ziyarat Taxi',
                        description: 'Too tired to walk back? Book a taxi return from Quba.',
                        href: '/services/madinah-ziyarat',
                        icon: Car
                    }
                ]}
                title="Alternative Transport"
                description=""
            />
        </div>
    );
}
