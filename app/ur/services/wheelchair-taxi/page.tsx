
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Accessibility, Heart, Shield, Clock, Phone, UserCheck, Car, Star } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedServices from '@/components/seo/RelatedServices';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';

export const metadata: Metadata = {
    title: 'Wheelchair Accessible Taxi KSA | Handicap Transport Service',
    description: 'Reliable wheelchair taxi service in Saudi Arabia. Vehicles equipped for elderly and disabled passengers. Accessible transport for Umrah, hospital visits, and airport transfers.',
    keywords: ['Wheelchair taxi Saudi Arabia', 'Handicap accessible transport KSA', 'Disabled taxi service', 'Elderly transport Umrah', 'Medical taxi service'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/wheelchair-taxi/',
    },
};

export default function WheelchairTaxiPage() {
    const features = [
        { icon: Accessibility, title: "Accessible Vehicles", desc: "Spacious vans (GMC/H-1) with ample room for folded wheelchairs and easy boarding access." },
        { icon: Heart, title: "Driver Assistance", desc: "Drivers trained to assist passengers with mobility challenges, ensuring safe boarding and alighting." },
        { icon: Clock, title: "Patient Waiting", desc: "Flexible waiting times for hospital appointments or medical visits." },
        { icon: Shield, title: "Safety First", desc: "Gentle driving protocols to ensure the comfort of sensitive passengers." }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Wheelchair Accessible Taxi Service",

        "description": "Specialized transportation for passengers with mobility needs and wheelchairs.",
        "areaServed": "Saudi Arabia",
        "serviceType": "MedicalTransport"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="accessible-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Hero
                images={['/hero-slide-3.webp', '/hero-slide-1.webp']}
                h1Text="Wheelchair Accessible Taxi Service"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Care & Comfort
                    </span>
                }
                subtitle="Transport for Everyone"
                location="KSA Wide Service"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Care"
                        description="Providing dignified and comfortable mobility solutions for our elders and guests with special needs. Accessible transport for Umrah and daily needs."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Care Trips', value: '5,000+', icon: Heart },
                            { label: 'Assisted Guests', value: '8,000+', icon: UserCheck },
                            { label: 'Safety Rating', value: '100%', icon: Shield }
                        ]}
                    />
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Features for Mobility Needs</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We prioritize the safety and comfort of every passenger.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((f, i) => (
                            <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
                                <f.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                                <p className="text-gray-600 text-sm">{f.desc}</p>
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
                                question: "Do you have ramp-equipped vehicles?",
                                shortAnswer: "Foldable Wheelchairs only.",
                                detailedAnswer: "Currently, our fleet (GMC Yukon, Hyundai H1) accommodates **foldable wheelchairs** comfortably in the trunk. We do not operate hydraulic lift vans. Drivers assist in transferring passengers to the vehicle seat.",
                                perspectives: [
                                    {
                                        role: "Service Notice",
                                        icon: "Accessibility",
                                        insight: "Best suited for passengers who can transfer to a car seat with assistance."
                                    }
                                ]
                            },
                            {
                                question: "Can the driver push the wheelchair inside the Haram?",
                                shortAnswer: "Transport Only.",
                                detailedAnswer: "Our service is point-to-point transport. Inside the Haram (Makkah/Madinah), there are dedicated free wheelchair services and paid pushers available. Our driver drops you at the closest accessible point.",
                                perspectives: [
                                    {
                                        role: "Operations",
                                        icon: "MapPin",
                                        insight: "We know the best drop-off points closer to elevators and ramps at the mosques."
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
                    <h2 className="text-2xl font-bold text-center mb-8">Customer Care Reviews</h2>
                    <div className="space-y-12">
                        <ReviewsDisplay location="WheelchairTaxi" />
                        <QuestionsDisplay location="WheelchairTaxi" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="WheelchairTaxi" />
                        <QuestionForm locationName="WheelchairTaxi" />
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Intercity Transfers',
                        description: 'Comfortable long-distance travel in spacious vehicles for families.',
                        href: '/services/intercity',
                        icon: Car
                    },
                    {
                        name: 'Umrah Transport',
                        description: 'Respectful transport for your complete spiritual journey.',
                        href: '/services/umrah-transport',
                        icon: Star
                    }
                ]}
                title="Related Services"
                description=""
            />
        </div>
    );
}
