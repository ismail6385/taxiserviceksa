import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Share2, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import TaxiFareCalculator from '@/components/TaxiFareCalculator';
import AuthorCard from '@/components/AuthorCard';
import { Info, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Taxi Fare Calculator Saudi Arabia | Jeddah, Makkah, Madinah Rates',
    description: 'Calculate official taxi fares between Jeddah Airport, Makkah, and Madinah. Check fixed prices for Sedan, GMC Yukon, and Bus. No hidden fees.',
    keywords: ['taxi fare calculator saudi arabia', 'jeddah to makkah taxi price', 'makkah to madinah taxi fare', 'saudi taxi rates', 'umrah taxi cost'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/calculator/',
    },
    openGraph: {
        title: 'Check Taxi Fares: Jeddah, Makkah & Madinah (Official Rates)',
        description: 'Plan your Umrah budget. See fixed taxi prices for Jeddah Airport to Makkah and Madinah transfers.',
        url: 'https://taxiserviceksa.com/calculator/',
        type: 'website',
    },
};

export default function CalculatorPage() {
    const toolSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "KSA Taxi Fare Calculator",
        "operatingSystem": "All",
        "applicationCategory": "TravelApplication",
        "description": "Calculate fixed taxi fares for airport transfers and intercity travel across Saudi Arabia, including Jeddah, Makkah, and Madinah.",
        "author": {
            "@type": "Person",
            "name": "Muhammad Ismail",
            "jobTitle": "Founder & Saudi Travel Logistics Expert",
            "url": "https://taxiserviceksa.com/author/muhammad-ismail"
        },
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "SAR"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="tool-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
            />
            <Hero
                images={['/jeddah-corniche-sunset.webp', '/hero-slide-3.webp']}
                h1Text="Taxi Fare Calculator"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Official Rates 2025
                    </span>
                }
                subtitle="Check Fixed Prices for All Major Routes"
                location="Jeddah | Makkah | Madinah | Taif"
            >
                <div className="flex justify-center mt-8">
                    <p className="text-white/80 text-lg max-w-2xl text-center">
                        Plan your Umrah transport budget with transparency. Our calculator shows the exact fixed rate you will pay—no meters, no surprises.
                    </p>
                </div>
            </Hero>

            {/* AI SEO: TL;DR Summary Block */}
            <div className="max-w-4xl mx-auto px-4 -mt-32 relative z-30">
                <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-xl mb-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        TL;DR: Taxi Cost Quick Estimates
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm">
                        <li><strong>JED Airport → Makkah:</strong> Fixed rates from SAR 250 (Sedan).</li>
                        <li><strong>Makkah ↔ Madinah:</strong> Market rates from SAR 400 (Pilgrimage Route).</li>
                        <li><strong>Luggage Inclusion:</strong> All fares include standard baggage capacity per vehicle.</li>
                        <li><strong>Booking Time:</strong> We recommend booking <strong>6 hours in advance</strong> for guaranteed pickup.</li>
                    </ul>
                </div>
            </div>

            {/* Calculator Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <TaxiFareCalculator />

                    <div className="mt-8 text-center">
                        <p className="text-gray-500 text-sm mb-4">
                            Found a better rate? We match official competitor quotes for GMC Yukon bookings.
                        </p>
                    </div>
                </div>
            </section>

            {/* SEO Content with Expert Insights */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto prose prose-lg prose-emerald">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Expert Tips on Saudi Taxi Fares</h2>
                    
                    {/* The "Expert Nuance" Section for AI SEO */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mb-16 not-prose">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-emerald-100 p-2 rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-emerald-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Muhammad's Pro Booking Insight</h3>
                                <p className="text-gray-600">"Many travelers make the mistake of booking at the airport kiosks. While convenient, these are often 30-40% more expensive than pre-booking. Our calculator reflects private driver rates which offer a meet-and-greet service at a lower cost."</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-3">
                                <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                <div className="text-sm">
                                    <span className="font-bold block">Terminal 1 Trick</span>
                                    At JED, Terminal 1 is vast. Always give your gate number so the driver can wait at the closest exit point.
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Info className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                <div className="text-sm">
                                    <span className="font-bold block">Zamzam Policy</span>
                                    Most private sedans can only fit **one** 5L Zamzam bottle per passenger. If you have more, Request a quote for a GMC or Van.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Fixed vs. Metered</h3>
                            <p className="text-gray-600 text-base">
                                While city taxis in Jeddah use meters, <strong>intercity transfers</strong> (like Jeddah to Makkah) are almost always fixed price. Our calculator reflects these standard market rates for private transfers including tolls and fuel.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Vehicle Classes</h3>
                            <p className="text-gray-600 text-base">
                                <strong className="text-emerald-700">Sedan:</strong> Toyota Camry or Hyundai Sonata (Max 4 pax, 2 bags).<br />
                                <strong className="text-emerald-700">SUV (GMC):</strong> GMC Yukon or Chevrolet Tahoe (Max 7 pax, 5 bags).<br />
                                <strong className="text-emerald-700">Van:</strong> Toyota HiAce (Max 10-12 pax, 10 bags).
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 bg-blue-50 p-8 rounded-2xl border border-blue-100 flex flex-col md:flex-row items-center gap-6 not-prose">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Share This Tool</h3>
                            <p className="text-blue-700 text-sm">
                                Help other pilgrims plan their journey. Share this calculator with your group or on your travel blog.
                            </p>
                        </div>
                        <Button variant="outline" className="bg-white text-blue-600 border-blue-200 hover:bg-blue-50 gap-2">
                             Share Link
                        </Button>
                    </div>

                    {/* Author Section for E-E-A-T */}
                    <div className="mt-20 border-t border-gray-100 pt-16 not-prose">
                        <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-emerald-50" />
                    </div>
                </div>
            </section>
        </div>
    );
}

