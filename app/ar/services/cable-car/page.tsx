
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Mountain, Cloud, MapPin, Camera, Car, Star, Navigation, Clock } from 'lucide-react';

import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedServices from '@/components/seo/RelatedServices';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';

export const metadata: Metadata = {
    title: 'Cable Car Transfers Saudi Arabia | Taif & Abha Telefric Taxi',
    description: 'Taxi service to Cable Car (Telefric) stations in Taif (Al Hada) and Abha. Enjoy the scenic mountain views with reliable transport to and from the terminals.',
    keywords: ['Taif cable car taxi', 'Al Hada telefric transport', 'Abha cable car ride', 'Saudi Arabia cable car', 'Mountain tourism taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/cable-car/',
    },
};

export default function CableCarPage() {
    const locations = [
        {
            name: 'Taif Cable Car (Al Hada)',
            desc: 'The most famous cable car in KSA, connecting the mountain top of Al Hada to the Al Kar Tourist Village at the bottom of the escarpment.',
            height: '2000m ASL',
            rideTime: '20 Minutes',
            image: '/locations/taif.webp'
        },
        {
            name: 'Abha Cable Car (Green Mountain)',
            desc: 'Offers panoramic views of Abha city and the surrounding Sarawat mountains. A must-visit landmark in the Asir region.',
            height: '2200m ASL',
            rideTime: '15 Minutes',
            image: '/hero-slide-3.webp' // Placeholder
        },
        {
            name: 'Abha Cable Car (Habala Village)',
            desc: 'Descends down a steep cliff to the historic "Hanging Village" of Habala, accessible only by these cars.',
            height: 'Vertical Drop',
            rideTime: '10 Minutes',
            image: '/hero-slide-1.webp' // Placeholder
        }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Cable Car Station Transfers",

        "description": "Transport service to major cable car tourist attractions in Saudi Arabia.",
        "areaServed": ["Taif", "Abha"],
        "serviceType": "TouristTransport"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="cable-car-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Hero
                images={['/locations/taif.webp', '/hero-slide-3.webp']}
                h1Text="Cable Car Station Transfers"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Scenic Heights
                    </span>
                }
                subtitle="Ride to the Clouds"
                location="Taif & Abha Mountains"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Tourism"
                        description="Your gateway to the Kingdom's most breathtaking views. We provide safe, reliable transport to the remote mountain stations of Taif and Abha."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Mountain Trips', value: '3,000+', icon: Mountain },
                            { label: 'Stations Served', value: '4', icon: MapPin },
                            { label: 'Tourist Rating', value: '4.9', icon: Star }
                        ]}
                    />
                </div>
            </Hero>

            {/* Locations */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Major Cable Car Depots</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We drop you right at the ticket counter.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {locations.map((loc, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all group border border-gray-200">
                                <div className="h-48 bg-gray-200 relative">
                                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                                        <Mountain className="w-12 h-12 text-gray-400" />
                                    </div>
                                    {/* Ideally <Image src={loc.image} ... /> */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <h3 className="text-white font-bold text-xl">{loc.name}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{loc.desc}</p>
                                    <div className="flex items-center justify-between text-sm font-semibold text-emerald-700">
                                        <div className="flex items-center gap-1"><Cloud className="w-4 h-4" /> {loc.height}</div>
                                        <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> {loc.rideTime}</div>
                                    </div>
                                    <Link href="/booking" className="block mt-6">
                                        <Button variant="outline" className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-50">Book Ride Here</Button>
                                    </Link>
                                </div>
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
                                question: "Can the taxi wait for us while we ride the cable car?",
                                shortAnswer: "Yes, waiting time available.",
                                detailedAnswer: "The round trip plus time at the destination (e.g., Al Kar water park) can take several hours. You can book a 'Wait and Return' service so the driver is ready when you come back up.",
                                perspectives: [
                                    {
                                        role: "Tourist Tip",
                                        icon: "Clock",
                                        insight: "Booking a return trip separately might be harder in remote mountain areas. Keeping the driver is safer."
                                    }
                                ]
                            },
                            {
                                question: "Is the cable car included in the taxi fare?",
                                shortAnswer: "No, transport only.",
                                detailedAnswer: "We provide transportation to the cable car station. You must purchase cable car tickets separately at the venue.",
                                perspectives: [
                                    {
                                        role: "Budgeting",
                                        icon: "Navigation",
                                        insight: "Taif cable car tickets are around 80-100 SAR per person."
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
                    <h2 className="text-2xl font-bold text-center mb-8">Adventure Reviews</h2>
                    <div className="space-y-12">
                        <ReviewsDisplay location="CableCar" />
                        <QuestionsDisplay location="CableCar" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="CableCar" />
                        <QuestionForm locationName="CableCar" />
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Taif City Tour',
                        description: 'Explore the City of Roses including Shubra Palace and the cable car.',
                        href: '/locations/taif', // Assuming taif location page covers tours or links to it
                        icon: MapPin
                    },
                    {
                        name: 'Intercity Taxi',
                        description: 'Travel from Jeddah or Makkah to Taif comfortably.',
                        href: '/services/intercity',
                        icon: Car
                    }
                ]}
                title="Explore More"
                description=""
            />
        </div>
    );
}
