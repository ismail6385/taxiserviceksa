
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Building2, Briefcase, Clock, Shield, Wifi, FileText, CheckCircle2, Car, Star, MapPin, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedServices from '@/components/seo/RelatedServices';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Business & Corporate Taxi Service KSA | Executive Chauffeur',
    description: 'Premier corporate VIP transfer service in Saudi Arabia for business professionals. Executive cars, monthly invoicing, reliable airport transfers, and event transport.',
    keywords: ['Corporate VIP transfer Saudi Arabia', 'Business executive transfer KSA', 'Chauffeur service Riyadh', 'Jeddah business transfer', 'VIP transport Saudi Arabia'],
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
            desc: 'Stay connected on the go with high-speed internet available in our executive fleet.'
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
        "description": "Executive transportation services for business travelers in Saudi Arabia.",
        "areaServed": "Saudi Arabia",
        "serviceType": "VIP Transport"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            {/* Hero Section - Standardized Premium Style */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-primary/20 text-primary font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-sm border border-primary/20">
                        Executive Excellence
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 px-4 leading-tight">
                        Corporate Transport Solutions<br />
                        <span className="text-primary">For Business Professionals</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 mb-10">
                        Efficiency, discretion, and reliability. Powering Saudi business mobility with a fleet of premium vehicles and professional chauffeurs dedicated to your schedule.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-12">
                        <Button asChild size="lg" className="bg-primary hover:bg-emerald-600 text-white font-black text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            <Link href="https://wa.me/966552202642?text=Hello,%20I%20want%20to%20open%20a%20Corporate%20Account" target="_blank">
                                Open Account via WhatsApp
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl transition-all w-full sm:w-auto">
                            <Link href="/booking/">
                                Get Corporate Quote
                            </Link>
                        </Button>
                    </div>

                    {/* AI SEO: TL;DR Summary Block - Fixed visibility with dark text */}
                    <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-sm mb-12 max-w-4xl mx-auto text-left">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                            TL;DR: Corporate Service Quick Facts
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm">
                            <li><strong className="text-gray-900">Priority:</strong> Corporate clients receive 100% on-time guarantee and priority dispatch.</li>
                            <li><strong className="text-gray-900">Billing:</strong> Flexible monthly invoicing and automated digital receipts for expenses.</li>
                            <li><strong className="text-gray-900">Fleet:</strong> Mercedes S-Class, BMW 7 Series, and GMC Yukon XL available.</li>
                            <li><strong className="text-gray-900">Privacy:</strong> Drivers are trained for discreet, confidential executive service.</li>
                        </ul>
                    </div>

                </div>
            </section>

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
                        contextName="Business"
                        faqs={[
                            {
                                question: "How do I open a corporate VIP account?",
                                shortAnswer: "Contact Sales.",
                                detailedAnswer: "Please email our corporate sales team at info@taxiserviceksa.com with your company details. We will set up your account with credit terms and a dedicated booking portal.",
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
            
            {/* Author Section */}
            <div className="max-w-4xl mx-auto border-t border-gray-100 pt-16 mb-20">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-emerald-50" />
            </div>

        </div>
    );
}

import { Users } from 'lucide-react';
