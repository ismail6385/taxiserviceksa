
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Building2, Briefcase, Clock, Shield, Wifi, FileText, CheckCircle2, Car, Star, MapPin, ArrowRight, Zap } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedServices from '@/components/seo/RelatedServices';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import AuthorCard from '@/components/AuthorCard';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Private Car, Taxi and Chauffeur Service for Business Travelers | Single-Trip Executive Rides | Taxi Service KSA',
    description: 'Need an executive car for one business trip? No account or contract required — book a premium chauffeur by the single ride for meetings, airport runs, or a business day out in Saudi Arabia. Pay per trip via WhatsApp.',
    keywords: ['single trip executive car Saudi Arabia', 'business traveler taxi KSA', 'one-off chauffeur Riyadh', 'business trip car no account', 'ad-hoc executive transfer Jeddah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/business/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/business/',
            'ar': 'https://taxiserviceksa.com/ar/services/business/',
            'ur': 'https://taxiserviceksa.com/ur/services/business/',
            'x-default': 'https://taxiserviceksa.com/services/business/',
        },
    },
};

export default function BusinessPage() {
    const features = [
        {
            icon: Zap,
            title: 'No Account Needed',
            desc: 'Book a single ride for one trip — no sign-up, no contract, no minimum. Pay per trip via WhatsApp.'
        },
        {
            icon: Clock,
            title: 'Punctuality Guaranteed',
            desc: 'We understand the value of your time. Our drivers arrive 15 minutes early for all business bookings.'
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
        "name": "Single-Trip Business Traveler Car Service KSA",
        "description": "Pay-per-trip executive car service for business travelers in Saudi Arabia — no account or contract required.",
        "areaServed": "Saudi Arabia",
        "serviceType": "Single-Trip Executive Transport"
    };

    const faqs = [
        {
            question: 'Do I need to open an account to book a business trip?',
            answer: 'No. This service is pay-per-trip — book a single ride via WhatsApp or our online form with no sign-up, no contract, and no minimum number of trips. If your company needs regular, ongoing transport with monthly billing, see our Corporate Travel account service instead.',
        },
        {
            question: 'Can I book just one ride, like an airport pickup between meetings?',
            answer: 'Yes. Most business-traveler bookings are single trips — an airport pickup, a client meeting, or a few hours of city travel during a short visit. Each ride is booked and paid for individually.',
        },
        {
            question: 'Do you provide a receipt for expense reimbursement?',
            answer: 'Yes. Every trip generates an automatic digital invoice emailed to you immediately after the ride, formatted for expense reports.',
        },
        {
            question: 'What if I need transport every day for a month or longer?',
            answer: 'For ongoing, multi-trip business travel with monthly invoicing and a dedicated account manager, our Corporate Travel service is the better fit — it is built for exactly that.',
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero Section - Standardized Premium Style */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-primary/20 text-primary font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-sm border border-primary/20">
                        No Account Required
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 px-4 leading-tight">
                        Private Car, Taxi and Chauffeur Service<br />{' '}
                        <span className="text-primary">for Business Travelers</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 mb-10">
                        In Saudi Arabia for a single meeting, client visit, or a few days of business? Book a premium chauffeur one ride at a time — no sign-up, no contract, pay per trip.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-12">
                        <Button asChild size="lg" className="bg-primary hover:bg-emerald-600 text-white font-black text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20car%20for%20a%20business%20trip" target="_blank">
                                Book via WhatsApp
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl transition-all w-full sm:w-auto">
                            <Link href="/booking/">
                                Get a Quote
                            </Link>
                        </Button>
                    </div>

                    {/* AI SEO: TL;DR Summary Block - Fixed visibility with dark text */}
                    <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-sm mb-12 max-w-4xl mx-auto text-left">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                            TL;DR: Business Traveler Quick Facts
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm">
                            <li><strong className="text-gray-900">No Account:</strong> Book a single trip with no sign-up or minimum — pay per ride.</li>
                            <li><strong className="text-gray-900">Billing:</strong> Instant digital receipt for expense reports, per trip.</li>
                            <li><strong className="text-gray-900">Fleet:</strong> Mercedes S-Class, BMW 7 Series, and GMC Yukon XL available.</li>
                            <li><strong className="text-gray-900">Need it daily instead?</strong> See our <Link href="/services/corporate-travel/" className="text-emerald-700 underline font-semibold">Corporate Travel account</Link> for monthly billing.</li>
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
                                question: "Do I need to sign up for an account?",
                                shortAnswer: "No — book a single trip.",
                                detailedAnswer: "No sign-up required. Message us on WhatsApp with your trip details and pay per ride. This service is built for one-off business travel, not ongoing accounts.",
                                perspectives: [
                                    {
                                        role: "Booking Desk",
                                        icon: "Compass",
                                        insight: "Most business-traveler bookings are confirmed within 30 minutes of the WhatsApp message."
                                    }
                                ]
                            },
                            {
                                question: "Do you provide receipts for expense reimbursement?",
                                shortAnswer: "Yes, instant digital receipts.",
                                detailedAnswer: "Every trip generates an automatic digital invoice sent to your email immediately, formatted for expense reports.",
                                perspectives: [
                                    {
                                        role: "Finance Dept",
                                        icon: "FileText",
                                        insight: "Correctly formatted tax invoices are essential for VAT reclamation."
                                    }
                                ]
                            },
                            {
                                question: "I need transport every day for a longer stay — is there a better option?",
                                shortAnswer: "Yes, see Corporate Travel.",
                                detailedAnswer: "For recurring business travel with monthly invoicing, priority booking, and a dedicated account manager, our Corporate Travel service is designed for exactly that — see /services/corporate-travel/.",
                                perspectives: [
                                    {
                                        role: "Account Manager",
                                        icon: "Briefcase",
                                        insight: "Corporate accounts typically make sense from around 10+ trips a month."
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
                        name: 'Corporate Travel (Monthly Account)',
                        description: 'Need transport every day, not just once? Open a company account with monthly billing instead.',
                        href: '/services/corporate-travel',
                        icon: Building2
                    },
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
