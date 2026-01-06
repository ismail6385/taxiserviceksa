import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How to Avoid Taxi Scams in Makkah & Jeddah (2025 Safety Guide)',
    description: 'Don\'t get overcharged. Learn the top taxi scams in Saudi Arabia and how to avoid them. Trusted tips for pilgrims and tourists.',
    keywords: ['taxi scams jeddah', 'makkah taxi safety', 'saudi taxi prices', 'avoid taxi fraud ksa'],
};

export default function TaxiScamGuide() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gray-900 py-24 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                        <AlertTriangle className="w-4 h-4" /> Travel Safety Alert 2025
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        Don't Let a <span className="text-red-500">Taxi Scam</span> <br />Ruin Your Umrah
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Landing in Jeddah or Makkah should be a spiritual experience, not a negotiation battle. Here is exactly how to spot, avoid, and report transport fraud.
                    </p>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* Intro Hook */}
                <div className="prose prose-lg prose-gray max-w-none mb-12">
                    <p className="text-xl leading-relaxed font-medium text-gray-700">
                        You've just landed at King Abdulaziz International Airport. You're tired, maybe in Ihram, and eager to reach the Haram. A driver approaches you, offering a ride for "very cheap."
                    </p>
                    <p>
                        <strong>Stop right there.</strong>
                    </p>
                    <p>
                        While most Saudi drivers are hospitable and honest, unregistered "freelance" drivers can turn your journey into a nightmare of hidden fees and unsafe routes. In this guide, we break down the 5 most common tricks and how to protect yourself on your journey in 2025.
                    </p>
                </div>

                {/* The Scams List */}
                <div className="grid gap-12">

                    {/* Scam 1 */}
                    <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
                        <div className="flex items-start gap-4">
                            <div className="bg-red-100 p-3 rounded-xl shrink-0">
                                <AlertTriangle className="w-8 h-8 text-red-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-gray-900 mb-3 mt-0">1. The "Broken Meter" Trick</h2>
                                <p className="text-gray-700 mb-4">
                                    The driver claims his meter is broken or that "for you, I give special fixed price." Usually, this fixed price is 200-300% higher than the actual metered fare.
                                </p>
                                <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                                    <h4 className="font-bold text-red-600 text-sm uppercase mb-2">How to Avoid:</h4>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Insist on the meter ("Mishwar") before getting in.</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Use a pre-booked service like <strong>TaxiServiceKSA</strong> where the price is fixed online.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scam 2 */}
                    <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
                        <div className="flex items-start gap-4">
                            <div className="bg-orange-100 p-3 rounded-xl shrink-0">
                                <XCircle className="w-8 h-8 text-orange-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-gray-900 mb-3 mt-0">2. The "Airport Fee" Surprise</h2>
                                <p className="text-gray-700 mb-4">
                                    You agree on 200 SAR. But upon arrival, the driver demands an extra 50 SAR for "Airport Parking" or "Gate Fees" that supposedly weren't included.
                                </p>
                                <div className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
                                    <h4 className="font-bold text-orange-600 text-sm uppercase mb-2">The Truth:</h4>
                                    <p className="text-sm text-gray-600">Legit airport taxis cover entry fees in their base fare. Never pay cash for extras unless it was explicitly agreed upon before the ride started.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scam 3 */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                        <div className="flex items-start gap-4">
                            <div className="bg-gray-200 p-3 rounded-xl shrink-0">
                                <Info className="w-8 h-8 text-gray-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-gray-900 mb-3 mt-0">3. Similar Sounding Hotels</h2>
                                <p className="text-gray-700 mb-4">
                                    Mecca has hundreds of hotels. A driver might drop you at "Al Massa Hotel" instead of "Al Massa Grand" because it was closer for him, leaving you stranded with your luggage in the heat.
                                </p>
                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    <h4 className="font-bold text-gray-900 text-sm uppercase mb-2">Pro Tip:</h4>
                                    <p className="text-sm text-gray-600">Always show the <strong>Google Maps location</strong>, not just the hotel name. Verify the arrival point on your own phone before letting the driver leave.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Solution Section */}
                <div className="mt-16 bg-emerald-50 rounded-[3rem] p-10 text-center border border-emerald-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-[80px]"></div>

                    <div className="relative z-10">
                        <ShieldCheck className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
                        <h2 className="text-3xl font-black text-gray-900 mb-4">The Smart Way to Travel</h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            Don't gamble with your safety. Book a licensed, fixed-price private transfer. You get a professional driver, a clean car, and 24/7 support.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/booking/">
                                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-10 py-6 rounded-2xl text-lg shadow-xl shadow-emerald-200">
                                    Check Fair Price
                                </Button>
                            </Link>
                            <Link href="/fleet/">
                                <Button className="bg-white hover:bg-emerald-50 text-emerald-900 font-black px-10 py-6 rounded-2xl text-lg">
                                    View Our Cars
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
