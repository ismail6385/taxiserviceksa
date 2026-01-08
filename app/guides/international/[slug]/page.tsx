
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { internationalGuides } from '@/data/international_guides';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, MapPin, Plane, CreditCard, Clock, Shield, Globe } from 'lucide-react';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';


// Generate static params for all defined guides
export async function generateStaticParams() {
    return internationalGuides.map((guide) => ({
        slug: guide.slug,
    }));
}

interface PageProps {
    params: {
        slug: string;
    };
}

// Generate metadata dynamically
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const guide = internationalGuides.find((g) => g.slug === params.slug);

    if (!guide) {
        return {
            title: 'Guide Not Found',
        };
    }

    return {
        title: guide.title,
        description: guide.metaDescription,
        keywords: [
            `${guide.countryName} to makkah taxi`,
            `umrah taxi from ${guide.countryName}`,
            `jeddah airport transfer for ${guide.countryName} citizens`,
            `${guide.countryCode} to saudi arabia travel`,
        ],
        alternates: {
            canonical: `https://taxiserviceksa.com/guides/international/${guide.slug}/`,
        },
        openGraph: {
            title: guide.title,
            description: guide.metaDescription,
            type: 'article',
            url: `https://taxiserviceksa.com/guides/international/${guide.slug}/`,
            images: [
                {
                    url: '/og-image.jpg', // Should ideally specific image
                    width: 1200,
                    height: 630,
                    alt: guide.title,
                },
            ],
        },
    };
}

export default function InternationalGuidePage({ params }: PageProps) {
    const guide = internationalGuides.find((g) => g.slug === params.slug);

    if (!guide) {
        notFound();
    }

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-0">
            <JsonLdFAQ faqs={guide.faqs} />

            {/* Schema.org for Article/Guide */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TravelGuide",
                        "name": guide.title,
                        "description": guide.metaDescription,
                        "provider": {
                            "@type": "Organization",
                            "name": "VIP Transfer KSA",
                            "url": "https://taxiserviceksa.com"
                        },
                        "about": {
                            "@type": "Country",
                            "name": "Saudi Arabia"
                        },
                        "audience": {
                            "@type": "Audience",
                            "audienceType": `Travelers from ${guide.countryName}`
                        }
                    })
                }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full mb-6">
                        <span className="text-2xl">{guide.flagEmoji}</span>
                        <span className="text-indigo-900 font-semibold text-sm">Official Guide for {guide.countryName} Travelers</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {guide.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Planning your Umrah trip from {guide.countryName}? Here is everything you need to know about flights, visas, and booking your <span className="font-bold text-gray-900">Jeddah Airport taxi</span> before you fly.
                    </p>
                </div>

                {/* Hero Image */}
                <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={guide.heroImage}
                        alt={guide.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Flight Info */}
                    <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                            <Plane className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Flights from {guide.countryCode}</h3>
                        <p className="text-sm text-gray-600 mb-2"><strong>Duration:</strong> {guide.flightInfo.flightDuration}</p>
                        <div className="flex flex-wrap gap-2">
                            {guide.flightInfo.majorAirports.map(airport => (
                                <span key={airport} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 font-medium">{airport.split('(')[0]}</span>
                            ))}
                        </div>
                    </div>

                    {/* Visa Info */}
                    <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm">
                        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 text-emerald-600">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Visa Requirements</h3>
                        <p className="text-sm text-gray-600"><strong>Type:</strong> {guide.visaInfo.type}</p>
                        <p className="text-sm text-gray-600 mt-1"><strong>Cost:</strong> {guide.visaInfo.cost}</p>
                        <p className="text-sm text-gray-600 mt-1"><strong>Validity:</strong> {guide.visaInfo.validity}</p>
                    </div>

                    {/* Currency Info */}
                    <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm">
                        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 text-purple-600">
                            <CreditCard className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Currency ({guide.currency.code})</h3>
                        <p className="text-lg font-bold text-gray-900">{guide.currency.approxRate}</p>
                        <p className="text-sm text-gray-500 mt-1">ATMs widely available. Cards accepted almost everywhere.</p>
                    </div>
                </div>

                {/* Taxi Booking Section (Main Focus) */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white mb-16 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

                    <div className="relative z-10">
                        <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block">
                            Priority Transfer Service
                        </span>
                        <h2 className="text-3xl font-bold mb-6">{guide.taxiBooking.heading}</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <ul className="space-y-4">
                                {guide.taxiBooking.whyBookPreArrival.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                                    <CreditCard className="w-5 h-5 text-emerald-400" />
                                    Payment Options
                                </h4>
                                <ul className="space-y-3">
                                    {guide.taxiBooking.paymentMethods.map((method, idx) => (
                                        <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                            {method}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/booking/" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-8 py-6 h-auto">
                                    Book {guide.countryName} Transfer
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/fleet/" className="w-full sm:w-auto">
                                <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto">
                                    View Vehicle Options
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="prose prose-lg max-w-none mb-16">
                    {guide.contentSections.map((section, idx) => (
                        <div key={idx} className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                            <div
                                className="text-gray-700 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: section.content }}
                            />
                        </div>
                    ))}
                </div>

                {/* FAQs */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {guide.faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-gray-900 text-lg mb-3">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center mb-24">
                    <div className="inline-block p-4 rounded-full bg-gray-100 mb-6">
                        <Globe className="w-8 h-8 text-gray-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to start your journey from {guide.countryName}?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Secure your transport now and one of our professional drivers will be waiting for you at the {guide.flightInfo.majorAirports[0].split('(')[0]} arrivals terminal in Jeddah.
                    </p>
                    <Link href="/booking/">
                        <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold text-lg px-12 py-6 h-auto shadow-lg hover:shadow-xl transition-all">
                            Book My Ride Now
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
