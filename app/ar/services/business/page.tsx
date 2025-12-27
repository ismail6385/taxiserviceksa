
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Building2, Briefcase, Clock, Shield, Wifi, FileText, CheckCircle2, Car, Star, MapPin } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedServices from '@/components/seo/RelatedServices';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';

export const metadata: Metadata = {
    title: 'Business & Corporate Taxi Service KSA | Executive Transfers',
    description: 'Premier corporate taxi service in Saudi Arabia for business professionals. Executive cars, monthly invoicing, reliable airport transfers, and event transport.',
    keywords: ['Corporate taxi Saudi Arabia', 'Business executive transfer KSA', 'Chauffeur service Riyadh', 'Jeddah business taxi', 'VIP transport Saudi Arabia'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/business/',
    },
};

export default function BusinessPage() {
    const features = [
        {
            icon: Clock,
            title: 'Punctuality Guaranteed',
            desc: 'We understand the value of your time. Our drivers arrive 15 minutes early for all business bookings.'
        },
        {
            icon: Building2,
            title: 'Corporate Accounts',
            desc: 'Streamlined billing with monthly invoicing and detailed reporting for registered corporate clients.'
        },
        {
            icon: Shield,
            title: 'Confidentiality',
            desc: 'Professional, discreet drivers trained to respect your privacy during sensitive discussions.'
        },
        {
            icon: Wifi,
            title: 'On-Board WiFi',
            desc: 'Stay connected on the go with high-speed internet available in our executive fleet (upon request).'
        }
    ];

    const fleet = [
        { name: 'Mercedes S-Class', type: 'First Class', capacity: '3 Pax' },
        { name: 'BMW 7 Series', type: 'Business Class', capacity: '3 Pax' },
        { name: 'GMC Yukon', type: 'Executive SUV', capacity: '6 Pax' },
        { name: 'Lexus ES', type: 'Premium Sedan', capacity: '3 Pax' }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Corporate Taxi Service KSA",
        "provider": {
            "@type": "Organization",
            "name": "Taxi Service KSA"
        },
        "description": "Executive transportation services for business travelers in Saudi Arabia.",
        "areaServed": "Saudi Arabia",
        "serviceType": "Taxis"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Hero
                images={['/hero-slide-3.webp', '/hero-slide-1.webp']}
                h1Text="Executive Corporate Transport Solutions"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Business Class Travel
                    </span>
                }
                subtitle="Efficiency & Excellence"
                location="Riyadh - Jeddah - Dammam"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Corporate"
                        description="Powering Saudi business mobility with a fleet of premium vehicles and professional chauffeurs dedicated to your schedule."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Corporate Clients', value: '500+', icon: Building2 },
                            { label: 'On-Time Rate', value: '99.8%', icon: Clock },
                            { label: 'Premium Fleet', value: '100+', icon: Car }
                        ]}
                    />
                </div>
            </Hero>

            {/* Features Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Businesses Choose Us</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Dedicated support for the demands of modern corporate travel.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((f, i) => (
                            <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                                <f.icon className="w-10 h-10 text-emerald-700 mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fleet Showcase */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Executive Fleet</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {fleet.map((car, i) => (
                            <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <div className="text-emerald-400 text-xs font-bold uppercase trackin-wider mb-2">{car.type}</div>
                                <h3 className="text-xl font-bold mb-1">{car.name}</h3>
                                <div className="text-gray-400 text-sm flex items-center gap-2">
                                    <Users className="w-4 h-4" /> Up to {car.capacity}
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
                                question: "How do I open a corporate account?",
                                shortAnswer: "Contact Sales.",
                                detailedAnswer: "Please email our corporate sales team at taxiserviceksa9988@gmail.com with your company details. We will set up your account with credit terms and a dedicated booking portal.",
                                perspectives: [
                                    {
                                        role: "Account Manager",
                                        icon: "Briefcase",
                                        insight: "Corporate accounts get priority dispatch and discounted rates for high volume usage."
                                    }
                                ]
                            },
                            {
                                question: "Do you provide receipts for expense reimbursement?",
                                shortAnswer: "Yes, instant digital receipts.",
                                detailedAnswer: "Every trip generates an automatic digital invoice sent to your email. For corporate accounts, we provide a consolidated monthly statement.",
                                perspectives: [
                                    {
                                        role: "Finance Dept",
                                        icon: "FileText",
                                        insight: "Correctly formatted tax invoices are essential for VAT reclamation."
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
                    <h2 className="text-2xl font-bold text-center mb-8">Client Feedback</h2>
                    <div className="space-y-12">
                        <ReviewsDisplay location="Business" />
                    </div>
                    <div className="mt-12">
                        <ReviewForm locationName="Business" />
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Airport Transfers',
                        description: 'Reliable airport pickups for your executives and guests.',
                        href: '/services/airport-transfers',
                        icon: Star
                    },
                    {
                        name: 'Intercity Travel',
                        description: 'Travel between branches in different cities comfortably.',
                        href: '/services/intercity',
                        icon: MapPin
                    }
                ]}
                title="Related Corporate Services"
                description=""
            />

        </div>
    );
}

import { Users } from 'lucide-react';

