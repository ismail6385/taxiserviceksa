import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Share2, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import TaxiFareCalculator from '@/components/TaxiFareCalculator';

export const metadata: Metadata = {
    title: 'Taxi Fare Calculator Saudi Arabia | Jeddah, Makkah, Madinah Rates',
    description: 'Calculate official taxi fares between Jeddah Airport, Makkah, and Madinah. Check fixed prices for Sedan, GMC Yukon, and Bus. No hidden fees.',
    keywords: ['taxi fare calculator saudi arabia', 'jeddah to makkah taxi price', 'makkah to madinah taxi fare', 'saudi taxi rates', 'umrah taxi cost'],
    alternates: {
        canonical: 'https://transferksa.com/calculator/',
    },
    openGraph: {
        title: 'Check Taxi Fares: Jeddah, Makkah & Madinah (Official Rates)',
        description: 'Plan your Umrah budget. See fixed taxi prices for Jeddah Airport to Makkah and Madinah transfers.',
        url: 'https://transferksa.com/calculator/',
        type: 'website',
    },
};

export default function CalculatorPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
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

            {/* Calculator Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 relative -mt-32 z-20">
                <div className="max-w-4xl mx-auto">
                    <TaxiFareCalculator />

                    <div className="mt-8 text-center">
                        <p className="text-gray-500 text-sm mb-4">
                            Found a better rate? We match official competitor quotes for GMC Yukon bookings.
                        </p>
                    </div>
                </div>
            </section>

            {/* SEO Content */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto prose prose-lg prose-emerald">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Understanding Saudi Taxi Fares</h2>
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

                    <div className="mt-16 bg-blue-50 p-8 rounded-2xl border border-blue-100 flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-blue-900 mb-2">Share This Tool</h3>
                            <p className="text-blue-700 text-sm">
                                Help other pilgrims plan their journey. Share this calculator on WhatsApp or your travel blog.
                            </p>
                        </div>
                        <Button variant="outline" className="bg-white text-blue-600 border-blue-200 hover:bg-blue-50 gap-2">
                            <Share2 className="w-4 h-4" /> Share Link
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
