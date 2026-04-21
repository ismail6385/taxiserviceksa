import { Metadata } from 'next';

import JsonLdLocation from '@/components/JsonLdLocation';
import { CheckCircle2, Clock, Shield, Star, ArrowRight, Zap, Users } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Riyadh to Dubai Taxi | 3500 SAR GMC VIP Transfer | Taxi Service KSA',
    description: 'Book a private VIP taxi from Riyadh to Dubai. GMC Yukon / Chevy Tahoe from 3500 SAR. Door-to-door, border assistance included. WhatsApp booking available 24/7.',
    keywords: ['Taxi Riyadh to Dubai', 'Riyadh to Dubai transfer', 'Riyadh Dubai price 3500 SAR', 'cross border taxi Saudi Arabia', 'VIP transport Riyadh Dubai GMC'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/riyadh-dubai/',
    },
    openGraph: {
        title: 'Riyadh to Dubai Taxi | 3500 SAR VIP GMC Transfer',
        description: 'Book a private VIP taxi from Riyadh to Dubai. GMC Yukon / Chevy Tahoe from 3500 SAR. Door-to-door, border assistance included.',
        url: 'https://taxiserviceksa.com/routes/riyadh-dubai/',
        type: 'website',
    },
};

const WA_LINK = "https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20book%20a%20VIP%20taxi%20from%20Riyadh%20to%20Dubai.%20Please%20share%20availability.";

export default function RiyadhDubaiRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Riyadh to Dubai"
                description="Professional VIP private car service for Riyadh to Dubai. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Riyadh to Dubai Taxi', description: 'Premium private GMC/Tahoe transfer from 3500 SAR.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family SUV Service', description: 'Spacious vehicles for groups up to 7 passengers.' },
                    { name: 'Border Crossing Assistance', description: 'Driver handles all border paperwork and vehicle insurance.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            {/* ─── HERO ─── */}
            <Hero
                images={images}
                h1Text="Riyadh to Dubai Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-3 py-2 rounded-lg inline-block leading-snug text-xs sm:text-sm">
                        GCC Cross-Border VIP Transfer
                    </span>
                }
                subtitle="Riyadh to Dubai — Private SUV from 3500 SAR"
                location="Door-to-Door · Border Assistance Included"
            >
                <div className="w-full max-w-xl mx-auto px-4 mt-6 flex flex-col items-center gap-4">

                    {/* Price Badges */}
                    <div className="flex flex-wrap items-center gap-2 justify-center">
                        <div className="bg-emerald-500 text-white font-black px-5 py-2.5 rounded-full shadow-lg text-base sm:text-lg tracking-tight whitespace-nowrap">
                            GMC — 3,500 SAR
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-4 py-2.5 rounded-full text-xs sm:text-sm whitespace-nowrap">
                            Sedan from 2,000 SAR
                        </div>
                    </div>

                    {/* Single CTA — full width on mobile */}
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-full">
                        <button className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-black text-base sm:text-lg px-6 py-4 sm:py-5 rounded-2xl shadow-2xl transition-all active:scale-95">
                            <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                            <span>Book on WhatsApp — Instant Reply</span>
                        </button>
                    </a>

                    {/* Trust micro-line — 2 cols on mobile */}
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-4 gap-y-1 text-white/90 text-xs sm:text-sm justify-center w-full">
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Fixed Price</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> No Hidden Fees</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 24/7 Available</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 25,000+ Served</span>
                    </div>
                </div>
            </Hero>

            {/* ─── URGENCY BANNER ─── */}
            <div className="bg-amber-500 py-3 px-4">
                <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-semibold text-center">
                    <Zap className="w-4 h-4 shrink-0" />
                    <span>🔥 Limited weekend slots — Book at least 24 hrs early to secure your GMC</span>
                </div>
            </div>

            {/* ─── PRICING SECTION ─── */}
            <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <span className="text-emerald-700 font-bold uppercase tracking-wider text-xs">Transparent Pricing</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Riyadh to Dubai Taxi Fares</h2>
                        <p className="text-gray-500 mt-2 text-xs sm:text-sm">Per vehicle · Fuel, border insurance & tolls included · No surprise charges</p>
                    </div>

                    {/* Pricing cards — stack on mobile, 3-col on sm+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                        {/* Sedan */}
                        <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50 flex flex-col gap-3">
                            <div className="flex sm:flex-col gap-3 sm:gap-0 items-center sm:items-start">
                                <div className="flex-1">
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Economy</p>
                                    <h3 className="text-lg font-bold text-gray-900">Sedan</h3>
                                    <p className="text-xs text-gray-500">Camry / Sonata · Up to 4 passengers</p>
                                </div>
                                <p className="text-3xl font-black text-gray-900 sm:mt-3">2,000 <span className="text-sm font-semibold text-gray-500">SAR</span></p>
                            </div>
                            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 rounded-xl text-sm transition-colors">
                                <WhatsAppIcon className="w-4 h-4 fill-current" /> Book Sedan
                            </a>
                        </div>

                        {/* Fortuner */}
                        <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50 flex flex-col gap-3">
                            <div className="flex sm:flex-col gap-3 sm:gap-0 items-center sm:items-start">
                                <div className="flex-1">
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Standard SUV</p>
                                    <h3 className="text-lg font-bold text-gray-900">Toyota Fortuner</h3>
                                    <p className="text-xs text-gray-500">Mid-size SUV · Up to 6 passengers</p>
                                </div>
                                <p className="text-3xl font-black text-gray-900 sm:mt-3">2,800 <span className="text-sm font-semibold text-gray-500">SAR</span></p>
                            </div>
                            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 rounded-xl text-sm transition-colors">
                                <WhatsAppIcon className="w-4 h-4 fill-current" /> Book Fortuner
                            </a>
                        </div>

                        {/* GMC — Hero Card */}
                        <div className="border-2 border-emerald-500 rounded-2xl p-5 bg-emerald-50 flex flex-col gap-3 relative overflow-hidden shadow-lg">
                            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-black px-3 py-1.5 rounded-bl-xl">MOST POPULAR</div>
                            <div className="flex sm:flex-col gap-3 sm:gap-0 items-center sm:items-start">
                                <div className="flex-1">
                                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Premium VIP</p>
                                    <h3 className="text-lg font-bold text-gray-900">GMC / Tahoe</h3>
                                    <p className="text-xs text-gray-600">Full-size SUV · Up to 7 passengers</p>
                                </div>
                                <p className="text-4xl font-black text-emerald-700 sm:mt-3">3,500 <span className="text-sm font-semibold text-gray-500">SAR</span></p>
                            </div>
                            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3.5 rounded-xl text-sm transition-colors shadow-md">
                                <WhatsAppIcon className="w-4 h-4 fill-current" /> Book GMC Now
                            </a>
                        </div>
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-4">* Per-vehicle price. All taxes and fees included.</p>
                </div>
            </section>

            {/* ─── TRUST SIGNALS ─── */}
            <section className="bg-gray-900 text-white py-10 px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                        <p className="text-xl sm:text-2xl font-black">4.9★</p>
                        <p className="text-xs text-gray-400">Average Rating</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Users className="w-6 h-6 text-emerald-400" />
                        <p className="text-xl sm:text-2xl font-black">25,000+</p>
                        <p className="text-xs text-gray-400">Passengers Served</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Shield className="w-6 h-6 text-blue-400" />
                        <p className="text-xl sm:text-2xl font-black">100%</p>
                        <p className="text-xs text-gray-400">Border Insurance</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Clock className="w-6 h-6 text-purple-400" />
                        <p className="text-xl sm:text-2xl font-black">24/7</p>
                        <p className="text-xs text-gray-400">Always Available</p>
                    </div>
                </div>
            </section>

            {/* ─── JOURNEY DETAILS ─── */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                        <span className="text-emerald-700 font-bold uppercase tracking-wider text-xs">Route Info</span>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 mb-5">Riyadh → Dubai: What to Expect</h2>
                        <ul className="space-y-4">
                            {[
                                { title: "~1000 km · 10-12 hours", desc: "Riyadh → Al Batha Border → Abu Dhabi → Dubai. Stops for prayer, food & rest on request." },
                                { title: "Border Handled by Driver", desc: "Vehicle crossing insurance, paperwork prep, and GCC border protocols — all managed by your chauffeur." },
                                { title: "Door-to-Door. No Transfers.", desc: "Pickup from your home/hotel in Riyadh, drop directly at your Dubai destination." },
                                { title: "Bilingual Chauffeurs", desc: "Fluent Arabic & English. Professional, uniformed, and experienced on this exact route." },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</p>
                                        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick CTA card */}
                    <div className="bg-gray-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col gap-5">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-1">Ready to Book?</h3>
                            <p className="text-gray-400 text-sm">Message us on WhatsApp. Get confirmed in under 5 minutes.</p>
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                            <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Share pickup address + travel date</p>
                            <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Choose your vehicle</p>
                            <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Confirm & relax</p>
                        </div>
                        <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                            <button className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-black text-base py-4 rounded-2xl transition-all active:scale-95 shadow-lg">
                                <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                                WhatsApp Us Now
                                <ArrowRight className="w-4 h-4 shrink-0" />
                            </button>
                        </a>
                        <p className="text-center text-xs text-gray-500">Average reply: under 2 minutes</p>
                    </div>
                </div>
            </section>

            {/* ─── VIDEO SECTION ─── */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-emerald-700 font-bold uppercase tracking-wider text-xs">Real Client Journey</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 mb-2">Watch: Riyadh → Dubai in Our GMC SUV</h2>
                    <p className="text-gray-500 text-sm mb-6">Real footage from the road — see the comfort, space, and professionalism firsthand.</p>

                    {/* aspect-video keeps 16:9 on all screens */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 aspect-video mb-6">
                        <iframe
                            src="https://www.youtube.com/embed/eu4SNAISbNk"
                            width="100%"
                            height="100%"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            title="Riyadh to Dubai VIP GMC Taxi – Real Trip Video"
                            className="w-full h-full"
                        />
                    </div>

                    {/* CTA below video — stacks on mobile */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 shadow-sm text-left">
                        <div className="flex-1">
                            <p className="font-bold text-gray-900 text-sm sm:text-base">Impressed? Book the same experience.</p>
                            <p className="text-xs sm:text-sm text-gray-500">GMC Yukon / Chevy Tahoe · 3,500 SAR · All-inclusive</p>
                        </div>
                        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto shrink-0">
                            <button className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-black px-6 py-3.5 rounded-xl text-sm transition-all active:scale-95 shadow-md whitespace-nowrap">
                                <WhatsAppIcon className="w-4 h-4 fill-current" />
                                Book Now on WhatsApp
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                        <p className="text-gray-500 text-sm mt-1">Everything you need to know before booking</p>
                    </div>
                    <MicroSemanticFAQ
                        faqs={[
                            {
                                question: "How long does the Riyadh to Dubai taxi take?",
                                shortAnswer: "10-12 hours",
                                detailedAnswer: "Total driving time is 10-12 hours depending on border traffic. The Al Batha crossing usually takes 30 min–2 hours on weekends and holidays.",
                                perspectives: []
                            },
                            {
                                question: "What is the Riyadh to Dubai taxi price?",
                                shortAnswer: "From 2,000 SAR (Sedan) to 3,500 SAR (GMC)",
                                detailedAnswer: "Sedan from 2,000 SAR, Toyota Fortuner 2,800 SAR, GMC Yukon/Chevy Tahoe 3,500 SAR. All prices are per-vehicle, include fuel, toll, and border crossing insurance.",
                                perspectives: []
                            },
                            {
                                question: "Is border vehicle insurance included?",
                                shortAnswer: "Yes, fully included",
                                detailedAnswer: "Yes — vehicle crossing insurance, tolls, and paperwork are all included in the quoted price. No hidden charges.",
                                perspectives: []
                            },
                            {
                                question: "What documents do I need to cross the border?",
                                shortAnswer: "Valid passport + GCC visa/ID",
                                detailedAnswer: "You need a valid passport and appropriate visa/GCC residency. Saudi residents need Iqama + exit-re-entry. The driver assists with the vehicle process but passenger documents are your responsibility.",
                                perspectives: []
                            },
                            {
                                question: "Can I pay in Saudi Riyal or UAE Dirham?",
                                shortAnswer: "Yes — SAR, AED, USD, EUR accepted",
                                detailedAnswer: "We accept SAR, AED, USD, EUR, GBP, and KWD. Payment is made directly to the driver in cash or via agreed electronic payment.",
                                perspectives: []
                            }
                        ]}
                    />

                    {/* FAQ bottom CTA */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-500 text-sm mb-4">Still have questions? Our team replies in under 2 minutes.</p>
                        <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-black px-8 py-4 rounded-2xl transition-all active:scale-95 shadow-lg">
                                <WhatsAppIcon className="w-5 h-5 fill-current" />
                                Chat with Us on WhatsApp
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── RELATED LOCATIONS (bottom) ─── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <RelatedLocations currentCity="Riyadh" />
            </div>
        </div>
    );
}
