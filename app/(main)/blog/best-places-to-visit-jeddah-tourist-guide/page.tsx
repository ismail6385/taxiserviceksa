import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
    title: 'Best Places to Visit in Jeddah | Tourist Guide | Taxi Service KSA',
    description: 'Complete guide to Best Places to Visit in Jeddah Tourist Guide. Discover the best places, tips, and reliable transport options with Taxi Service KSA.',
    keywords: ['Best Places to Visit in Jeddah Tourist Guide'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/best-places-to-visit-jeddah-tourist-guide/',
    },
};

export default function JeddahGuidePage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero
                images={['/jeddah-corniche-sunset.webp', '/hero-slide-3.webp']}
                h1Text="Best Places to Visit in Jeddah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Tourist Guide
                    </span>
                }
                subtitle="Your complete guide to Jeddah Tourism"
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
                    <h2 className="text-3xl font-black text-gray-900 mb-6">Discover Jeddah</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Welcome to our comprehensive guide on <strong>Best Places to Visit in Jeddah</strong>. Whether you're traveling for business, pilgrimage, or leisure, having the right information and reliable transportation is key to a smooth journey.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Taxi Service KSA provides premium, comfortable, and safe transportation to and from this destination. Our professional chauffeurs are well-versed with the routes to ensure you arrive on time and in style.
                    </p>
                    
                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mt-8">
                        <h3 className="text-xl font-bold text-emerald-900 mb-2">Need a ride?</h3>
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
