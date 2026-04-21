import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
    title: 'Hajj 2026 Preparation & Transport Guide | Taxi Service KSA',
    description: 'Complete guide to Hajj 2026 Preparation & Transport. Discover the best places, tips, and reliable transport options with Taxi Service KSA.',
    keywords: ['Hajj 2026 Preparation Transport Guide'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/hajj-2026-preparation-transport-guide/',
    },
};

export default function HajjGuidePage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero
                images={['/locations/makkah.webp', '/hero-slide-1.webp']}
                h1Text="Hajj 2026 Preparation & Transport"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Hajj Guide
                    </span>
                }
                subtitle="Your complete guide to Hajj 2026 Transport"
                location="Saudi Arabia | Premium Transport"
            >
                <div className="flex justify-center mt-8">
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                            Book Your Ride Now
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-black text-gray-900 mb-6">Discover Hajj 2026 Transport</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Welcome to our comprehensive guide on <strong>Hajj 2026 Preparation & Transport</strong>. Preparing for Hajj requires booking transportation in advance to avoid the massive crowds.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Taxi Service KSA provides premium, comfortable, and safe transportation to and from Jeddah Airport to Makkah during Hajj. Our professional chauffeurs are well-versed with the routes to ensure you arrive safely.
                    </p>
                    
                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mt-8">
                        <h3 className="text-xl font-bold text-emerald-900 mb-2">Need a ride for Hajj?</h3>
                        <p className="text-emerald-800 mb-4">Book a VIP Private Car for your trip today and enjoy a seamless travel experience.</p>
                        <Link href="/booking/">
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold">
                                Reserve Private Car
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
