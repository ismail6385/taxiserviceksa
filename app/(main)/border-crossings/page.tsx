import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Clock, Globe, CheckCircle2, FileText, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import BookingProcess from '@/components/BookingProcess';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';

export const metadata: Metadata = {
    title: 'Saudi Arabia Border Crossing Taxi & Private Transfers | Taxi Service KSA',
    description: 'Private cross-border taxi transfers from Saudi Arabia to Bahrain, Kuwait, Qatar, UAE, Jordan and Oman. Pre-booked vehicles, route-specific pickup arrangements.',
    keywords: ['Saudi border crossing taxi', 'King Fahd Causeway taxi', 'cross border taxi KSA', 'Salwa border transfer', 'Khafji border taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/border-crossings/',
    },
};

const COUNTRIES = [
    {
        country: 'Bahrain',
        crossings: [
            { name: 'King Fahd Causeway', slug: 'taxi-king-fahd-causeway-border-crossing', note: 'The only land route between Saudi Arabia and Bahrain — Al Khobar to Manama.' },
        ],
        bestFor: 'Business & leisure',
    },
    {
        country: 'Kuwait',
        crossings: [
            { name: 'Khafji / Nuwaiseeb', slug: 'taxi-khafji-border-crossing', note: 'The main Saudi-Kuwait crossing (Khafji is the Saudi-side name, Nuwaiseeb the Kuwait-side name for the same crossing) — the primary route between the Eastern Province and Kuwait City.' },
            { name: 'Al Salmi', slug: 'taxi-al-salmi-border-crossing', note: 'A separate, more western crossing point, used less for typical city-to-city passenger routes.' },
        ],
        bestFor: 'Family & business travel',
    },
    {
        country: 'Qatar',
        crossings: [
            { name: 'Salwa Border', slug: 'taxi-salwa-border-crossing', note: "The only land crossing between Saudi Arabia and Qatar (Abu Samra is the Qatar-side name for this same crossing) — Eastern Province to Doha." },
        ],
        bestFor: 'Family & business travel',
    },
    {
        country: 'UAE',
        crossings: [
            { name: 'Al Batha Border', slug: 'taxi-al-batha-border-crossing', note: 'Crossing point for travelers heading to Abu Dhabi and Dubai.' },
        ],
        bestFor: 'Long-distance travel',
    },
    {
        country: 'Jordan',
        crossings: [
            { name: 'Al Haditha', slug: 'taxi-al-haditha-border-crossing', note: "Saudi Arabia's largest land crossing to Jordan." },
            { name: 'Halat Ammar', slug: 'taxi-halat-ammar-border-crossing', note: 'Tabuk-region crossing, connecting toward Ma\'an in southern Jordan.' },
            { name: 'Al Durrah (Haql)', slug: 'taxi-al-durrah-border-crossing', note: 'Tabuk-province crossing near the Gulf of Aqaba.' },
        ],
        bestFor: 'International travel',
    },
    {
        country: 'Oman',
        crossings: [
            { name: 'Ramlat Khaliya', slug: 'taxi-ramlat-khaliya-border-crossing', note: 'Southeastern crossing point toward Oman.' },
            { name: 'Rub al Khali', slug: 'taxi-rub-al-khali-border-crossing', note: 'Empty Quarter crossing point toward Oman.' },
        ],
        bestFor: 'Long-distance travel',
    },
];

const faqs = [
    {
        question: "Can your vehicle actually cross the border?",
        shortAnswer: "Depends on the route, vehicle and documentation",
        detailedAnswer: "Cross-border vehicle availability depends on the specific route, the vehicle's documentation, and current border requirements. When you book, we confirm which vehicle is eligible for your route.",
        perspectives: []
    },
    {
        question: "What do you handle, and what do I need to handle myself?",
        shortAnswer: "We handle the vehicle side; you handle immigration",
        detailedAnswer: "We arrange the private vehicle, driver, route planning, vehicle documentation, and applicable cross-border insurance. Passengers remain responsible for their own passport, visa, immigration requirements and personal customs declarations.",
        perspectives: []
    },
    {
        question: "Are border fees and tolls included in the price?",
        shortAnswer: "Confirmed in your quote, not blanket-included",
        detailedAnswer: "Any applicable tolls or border-related vehicle charges are confirmed in the quotation before booking, since this can vary by route.",
        perspectives: []
    },
    {
        question: "Is pickup always door-to-door?",
        shortAnswer: "Where border access allows",
        detailedAnswer: "Pickup is door-to-door where border and vehicle access permits it. For some border crossings, we confirm a designated meeting point before travel instead.",
        perspectives: []
    },
    {
        question: "What happens if my border crossing is delayed?",
        shortAnswer: "Contact us as soon as possible",
        detailedAnswer: "Border processing times can change. If you experience a delay, contact us as soon as possible with your updated status and we'll coordinate with the driver and adjust the pickup where operationally possible.",
        perspectives: []
    },
    {
        question: "How do I book a cross-border transfer?",
        shortAnswer: "WhatsApp your route and travel date",
        detailedAnswer: "Send us your pickup city, destination country, and travel date via WhatsApp. We confirm route eligibility, vehicle availability, and provide a fixed quote before booking.",
        perspectives: []
    },
];

export default function BorderCrossingsPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero
                images={['/hero-slide-3.webp', '/hero-slide-2.webp']}
                h1Text="Saudi Arabia Border Crossing Taxi & Private Transfers"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Cross-Border Transfers
                    </span>
                }
                subtitle="Private cross-border transfers from Saudi Arabia to Bahrain, Kuwait, Qatar, UAE, Jordan and Oman, with pre-booked vehicles and route-specific pickup arrangements."
                location="Bahrain • Kuwait • Qatar • UAE • Jordan • Oman"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?type=cross-border">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Get Cross-Border Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            B2B Inquiry
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Quick facts */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-center gap-6 p-4">
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                            <FileText className="w-7 h-7 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Cross-Border Documentation</h3>
                            <p className="text-xs text-gray-400 font-bold">Assessed per route and vehicle</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 p-4 border-l border-gray-100">
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                            <Globe className="w-7 h-7 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">6 Countries</h3>
                            <p className="text-xs text-gray-400 font-bold">Bahrain, Kuwait, Qatar, UAE, Jordan, Oman</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 p-4 border-l border-gray-100">
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                            <Clock className="w-7 h-7 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Pre-Booked Transfers</h3>
                            <p className="text-xs text-gray-400 font-bold">24/7 booking support</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intro */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed">
                    We provide private, pre-booked cross-border taxi transfers from Saudi Arabia to neighboring countries. Each border crossing has its own route, vehicle documentation requirements, and typical use case — select yours below for full details, or contact us with your route for a fixed quote.
                </p>
            </section>

            {/* How it works */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">How a Cross-Border Taxi Booking Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { step: '1', title: 'Choose Your Route', desc: 'Tell us your pickup city, destination country and preferred vehicle.' },
                            { step: '2', title: 'We Confirm Eligibility', desc: 'We check the route, vehicle availability and required cross-border arrangements.' },
                            { step: '3', title: 'Receive Your Quote', desc: "The quotation states the fare and confirms what's included." },
                            { step: '4', title: 'Driver Pickup', desc: 'The driver collects you from your agreed Saudi-side location.' },
                            { step: '5', title: 'Border Processing', desc: 'Passengers complete immigration/customs while the driver handles vehicle-side requirements.' },
                            { step: '6', title: 'Continue to Destination', desc: 'The journey continues after border clearance.' },
                        ].map((s) => (
                            <div key={s.step} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-sm mb-3">{s.step}</div>
                                <h4 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What we handle vs passengers */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-gray-100">
                        <h3 className="font-bold text-gray-900 mb-4">What We Handle</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {['Private vehicle & driver', 'Route planning', 'Vehicle documentation', 'Applicable cross-border insurance', 'Pickup coordination', 'Fixed quote before booking'].map((item) => (
                                <li key={item} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100">
                        <h3 className="font-bold text-gray-900 mb-4">What Passengers Need</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {['Valid passport', 'Visa / entry permission for the destination country', 'Residency documents where applicable', 'Personal customs declarations'].map((item) => (
                                <li key={item} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> {item}</li>
                            ))}
                        </ul>
                        <p className="text-xs text-gray-500 mt-4">Requirements vary by nationality, destination and travel status. Check current entry requirements before departure.</p>
                    </div>
                </div>
            </section>

            {/* Border crossings by country */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Saudi Border Crossings by Country</h2>
                    <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">Select your destination country to see the relevant crossing.</p>

                    <div className="space-y-10">
                        {COUNTRIES.map((c) => (
                            <div key={c.country} className="border-b border-gray-100 pb-10 last:border-0">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">{c.country}</h3>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full border border-gray-100">{c.bestFor}</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {c.crossings.map((cr) => (
                                        <Link key={cr.slug} href={`/border-crossings/${cr.slug}/`} className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-emerald-500 hover:shadow-md transition-all block">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{cr.name}</h4>
                                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                                            </div>
                                            <p className="text-gray-500 text-sm leading-relaxed">{cr.note}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison table */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Destination Overview</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse bg-white rounded-2xl border border-gray-100 overflow-hidden">
                            <thead className="bg-gray-900 text-white">
                                <tr>
                                    <th className="text-left py-3 px-4 font-bold">Destination</th>
                                    <th className="text-left py-3 px-4 font-bold">Main Crossing(s)</th>
                                    <th className="text-left py-3 px-4 font-bold">Common Route</th>
                                    <th className="text-left py-3 px-4 font-bold">Best For</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                <tr><td className="py-3 px-4 font-semibold text-gray-900">Bahrain</td><td className="py-3 px-4 text-gray-600">King Fahd Causeway</td><td className="py-3 px-4 text-gray-600">Al Khobar → Manama</td><td className="py-3 px-4 text-gray-600">Business/leisure</td></tr>
                                <tr><td className="py-3 px-4 font-semibold text-gray-900">Kuwait</td><td className="py-3 px-4 text-gray-600">Khafji/Nuwaiseeb, Al Salmi</td><td className="py-3 px-4 text-gray-600">Eastern Province → Kuwait City</td><td className="py-3 px-4 text-gray-600">Family/business</td></tr>
                                <tr><td className="py-3 px-4 font-semibold text-gray-900">Qatar</td><td className="py-3 px-4 text-gray-600">Salwa</td><td className="py-3 px-4 text-gray-600">Eastern Province → Doha</td><td className="py-3 px-4 text-gray-600">Family/business</td></tr>
                                <tr><td className="py-3 px-4 font-semibold text-gray-900">UAE</td><td className="py-3 px-4 text-gray-600">Al Batha</td><td className="py-3 px-4 text-gray-600">Saudi → Abu Dhabi/Dubai</td><td className="py-3 px-4 text-gray-600">Long-distance</td></tr>
                                <tr><td className="py-3 px-4 font-semibold text-gray-900">Jordan</td><td className="py-3 px-4 text-gray-600">Al Haditha, Halat Ammar, Al Durrah</td><td className="py-3 px-4 text-gray-600">Northern Saudi → Amman</td><td className="py-3 px-4 text-gray-600">International travel</td></tr>
                                <tr><td className="py-3 px-4 font-semibold text-gray-900">Oman</td><td className="py-3 px-4 text-gray-600">Ramlat Khaliya, Rub al Khali</td><td className="py-3 px-4 text-gray-600">Saudi → Oman</td><td className="py-3 px-4 text-gray-600">Long-distance</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-500 text-center mt-6">
                        Pricing depends on route, vehicle, passenger count and current border requirements. See each crossing's page, or contact us for a fixed quote.
                    </p>
                </div>
            </section>

            {/* Delays */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Border Delays & Waiting</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Border processing times vary by crossing, day and traffic, and can be significantly longer during weekends and peak periods. If you experience a delay, contact us as soon as possible with your updated status — we'll coordinate with the driver and adjust the pickup where operationally possible.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BookingProcess />
            </div>

            <div className="max-w-4xl mx-auto px-4 pb-4 pt-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Frequently Asked Questions</h2>
            </div>
            <MicroSemanticFAQ faqs={faqs} />

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white mt-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Book Your Cross-Border Transfer</h2>
                    <p className="text-gray-400 text-lg mb-10">Send your route and travel date via WhatsApp for a fixed quote.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/?type=cross-border">
                            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200 font-black px-10 py-6 h-auto text-lg rounded-2xl">
                                Get Cross-Border Quote
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-bold px-10 py-6 h-auto text-lg rounded-2xl">
                                B2B Inquiry
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
