import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { CheckCircle2, ArrowRight, AlertTriangle, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Should I Rent a Car in Saudi Arabia? (Honest 2026 Guide) | Taxi Service KSA',
    description: 'Honest guide for tourists: Is renting a car in Saudi Arabia worth it? Costs, driving rules, alternatives like private drivers and Uber. When to rent, when to hire a driver.',
    keywords: [
        'should I rent a car in Saudi Arabia',
        'renting a car Saudi Arabia tourist',
        'driving in Saudi Arabia as a tourist',
        'car rental Saudi Arabia',
        'is it easy to drive in Saudi Arabia',
        'private driver vs car rental Saudi Arabia',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/should-i-rent-a-car-in-saudi-arabia/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/should-i-rent-a-car-in-saudi-arabia/',
            'x-default': 'https://taxiserviceksa.com/blog/should-i-rent-a-car-in-saudi-arabia/',
        },
    },
    openGraph: {
        title: 'Should I Rent a Car in Saudi Arabia? Honest 2026 Guide',
        description: 'For most tourists, hiring a private driver beats renting a car in Saudi Arabia. Here\'s exactly when each option makes sense.',
        url: 'https://taxiserviceksa.com/blog/should-i-rent-a-car-in-saudi-arabia/',
        type: 'article',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Can tourists rent a car in Saudi Arabia?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Tourists with a valid foreign driving license from most countries can rent a car in Saudi Arabia. An International Driving Permit (IDP) is recommended but not always required. Rental companies like Budget, Avis, and Hertz operate at major airports including RUH, JED, and MED.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is driving in Saudi Arabia difficult for tourists?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Driving in Saudi Arabia is manageable but has challenges for first-time visitors. Roads are wide and modern but highways are fast (120–140 km/h). Riyadh is extremely spread out — destinations are 20–40 km apart. GPS is reliable on main roads but can lag on newer developments. Lane discipline differs from Western countries. Most tourists find it easier and less stressful to hire a private driver for short stays.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is it cheaper to rent a car or hire a private driver in Saudi Arabia?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For stays under 7 days, hiring a private driver is often cheaper when you factor in car rental (SAR 150–300/day), fuel (SAR 50–100/day), parking at hotels and malls (SAR 20–50/day), and the risk of fines. A full-day private driver costs SAR 450–600 all-inclusive with no parking stress. For longer stays (2+ weeks) with lots of independent driving, a rental car becomes cost-competitive.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do I need an International Driving Permit for Saudi Arabia?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Saudi Arabia officially requires an International Driving Permit (IDP) for tourists renting cars. In practice, some rental companies accept foreign licenses from English-speaking countries without an IDP. However, if stopped by police without an IDP, you risk a fine. If visiting for less than 10 days, it is easier to use a private driver service and skip the permit entirely.',
            },
        },
    ],
};

export default function ShouldIRentCarSaudiPage() {
    const rentPros = [
        'Full independence — go anywhere, any time',
        'Cost-effective for 2+ week stays with heavy driving',
        'Road trips between cities at your own pace',
        'AlUla, Tabuk, Asir — remote areas where drivers add wait costs',
    ];

    const rentCons = [
        'Riyadh is huge — 20–40 km between attractions, exhausting to self-navigate',
        'No parking at many malls, hotels charge for parking',
        'Fast motorway speeds (120–140 km/h) surprise first-time visitors',
        'GPS can be unreliable on newer roads and compounds',
        'Traffic fines hit rental card — often discovered weeks later',
        'No one to ask for directions or local knowledge',
        'International Driving Permit required (extra admin before travel)',
        'Fuel stops, insurance documents, accident paperwork — all your problem',
    ];

    const driverPros = [
        'Driver handles navigation, parking, and local knowledge',
        'Arrive at every meeting fresh — no driving stress',
        'English-speaking driver doubles as a local guide',
        'Wait time included — driver stays while you visit or meet',
        'Cost predictable — fixed daily rate, no hidden extras',
        'No IDP needed, no insurance admin, no accident risk',
        'Better for business visitors: arrive at meetings professionally',
        'Female travelers: driver confirmed in advance, safer option',
    ];

    const driverCons = [
        'Less spontaneous — best to plan your day in advance',
        'Extra cost for 2+ week independent road trips',
        'Must coordinate schedule with driver',
    ];

    const scenarios = [
        {
            scenario: 'Short visit (3–7 days), Riyadh only',
            verdict: 'Hire a driver',
            reason: 'Riyadh is too spread out to self-drive efficiently. Parking is a headache. A driver saves time, stress, and often money.',
            color: 'bg-emerald-50 border-emerald-200',
        },
        {
            scenario: 'Business trip — meetings across Riyadh',
            verdict: 'Hire a driver',
            reason: 'Arriving at meetings in a chauffeured car is the professional choice. Driver waits between stops. No parking stress.',
            color: 'bg-emerald-50 border-emerald-200',
        },
        {
            scenario: 'Family holiday, 2 weeks, multiple cities',
            verdict: 'Consider renting',
            reason: 'For Riyadh + Jeddah + AlUla, a rental gives flexibility. But use a private driver in each city for daily sightseeing.',
            color: 'bg-yellow-50 border-yellow-200',
        },
        {
            scenario: 'Solo road trip — AlUla, Tabuk, Asir',
            verdict: 'Rent a car',
            reason: 'Remote areas where independent driving at your own pace makes a rental more practical than a driver waiting for hours.',
            color: 'bg-blue-50 border-blue-200',
        },
        {
            scenario: 'Female traveler, solo or small group',
            verdict: 'Hire a driver',
            reason: 'A vetted, pre-confirmed female-friendly driver is far safer and more comfortable than self-driving unfamiliar Saudi roads alone.',
            color: 'bg-emerald-50 border-emerald-200',
        },
        {
            scenario: 'Expat relocating, staying 1+ months',
            verdict: 'Rent or buy a car',
            reason: 'For long-term stays, a personal vehicle makes economic sense. A monthly private driver contract is also available for those who prefer not to drive.',
            color: 'bg-yellow-50 border-yellow-200',
        },
    ];

    const costComparison = [
        { item: 'Car rental (economy)', rental: 'SAR 150–250/day', driver: '—' },
        { item: 'Fuel', rental: 'SAR 50–100/day', driver: 'Included' },
        { item: 'Parking', rental: 'SAR 20–50/day', driver: 'Driver handles it' },
        { item: 'Insurance excess', rental: 'SAR 2,000–5,000 risk', driver: 'Not your problem' },
        { item: 'Navigation stress', rental: 'High in Riyadh', driver: 'Zero' },
        { item: 'International Driving Permit', rental: 'Required', driver: 'Not needed' },
        { item: 'Full-day (8–10 hrs, city)', rental: 'SAR 220–400 total', driver: 'SAR 450–600 fixed' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <Script id="faq-schema-rental" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 to-black text-white pt-32 pb-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 inline-block">
                        Saudi Arabia Travel Guide 2026
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        Should I Rent a Car in Saudi Arabia?
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        An honest answer for tourists and business visitors — when renting makes sense, and when hiring a private driver is the smarter move.
                    </p>
                    <div className="bg-white/10 rounded-2xl p-5 text-left text-sm border border-white/20 tldr-summary">
                        <p className="font-bold text-white mb-2">Quick Answer</p>
                        <p className="text-gray-300 speakable-answer">For most tourists visiting Riyadh for under 10 days, <strong className="text-white">hiring a private driver beats renting a car</strong>. Riyadh is too spread out to navigate casually, parking is a headache, and a driver costs a similar daily rate once you add fuel and parking. Renting makes more sense for 2+ week independent road trips across multiple cities.</p>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 py-3 text-sm">
                    <nav className="flex items-center space-x-2 text-gray-500">
                        <Link href="/" className="hover:text-gray-900">Home</Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-gray-900">Blog</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">Rent a Car vs Private Driver Saudi Arabia</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* Scenarios table */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Which Option for Your Trip?</h2>
                    <p className="text-gray-600 mb-8">Every visitor's situation is different. Here's the honest answer for the most common Saudi Arabia trip types.</p>
                    <div className="space-y-4">
                        {scenarios.map((s, i) => (
                            <div key={i} className={`rounded-2xl border p-5 ${s.color}`}>
                                <div className="flex items-start justify-between gap-4 flex-wrap">
                                    <div className="flex-1">
                                        <p className="font-bold text-gray-900 mb-1">{s.scenario}</p>
                                        <p className="text-gray-600 text-sm">{s.reason}</p>
                                    </div>
                                    <span className="bg-black text-white font-bold text-sm px-3 py-1 rounded-full flex-shrink-0">
                                        → {s.verdict}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pros/cons */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Renting a Car vs Hiring a Driver: Full Comparison</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Car className="w-5 h-5" /> Renting a Car</h3>
                            <div className="mb-6">
                                <p className="text-xs font-bold text-emerald-700 mb-3 uppercase tracking-wide">Pros</p>
                                <ul className="space-y-2">
                                    {rentPros.map((p, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-red-700 mb-3 uppercase tracking-wide">Cons</p>
                                <ul className="space-y-2">
                                    {rentCons.map((c, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                            <span className="text-red-500 font-bold flex-shrink-0">✕</span> {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-600" /> Hiring a Private Driver</h3>
                            <div className="mb-6">
                                <p className="text-xs font-bold text-emerald-700 mb-3 uppercase tracking-wide">Pros</p>
                                <ul className="space-y-2">
                                    {driverPros.map((p, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-red-700 mb-3 uppercase tracking-wide">Cons</p>
                                <ul className="space-y-2">
                                    {driverCons.map((c, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                            <span className="text-red-500 font-bold flex-shrink-0">✕</span> {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cost table */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">True Cost Comparison</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl border border-gray-200 overflow-hidden text-sm">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-5 py-3 font-bold">Cost Item</th>
                                    <th className="px-5 py-3 font-bold">Car Rental</th>
                                    <th className="px-5 py-3 font-bold text-emerald-400">Private Driver</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {costComparison.map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-5 py-3 font-medium text-gray-900">{row.item}</td>
                                        <td className="px-5 py-3 text-gray-600">{row.rental}</td>
                                        <td className="px-5 py-3 text-emerald-700 font-medium">{row.driver}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-amber-900 text-sm"><strong>Hidden rental costs:</strong> Car rental in Saudi Arabia often excludes full insurance in the base rate. The excess (deductible) can be SAR 2,000–5,000. Speed camera fines are sent to the rental company and charged to your card weeks later — sometimes after you've left the country.</p>
                    </div>
                </section>

                {/* Driving tips if they do rent */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">If You Do Rent a Car in Saudi Arabia</h2>
                    <div className="prose prose-lg prose-gray max-w-none">
                        <p>If you decide a rental is right for your trip, here are the most important things to know:</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        {[
                            { title: 'Get full insurance', desc: 'Always pay for the zero-excess insurance add-on. The base rate almost never covers full damage.' },
                            { title: 'Download Google Maps offline', desc: 'Saudi roads are well-mapped but internet can be patchy outside cities. Download Riyadh offline before landing.' },
                            { title: 'Speed cameras are everywhere', desc: 'King Fahd Road and all major highways have speed cameras. The limit is usually 120 km/h — do not exceed it.' },
                            { title: 'Petrol is cheap', desc: 'Fuel in Saudi Arabia is heavily subsidised — around SAR 0.67–2.18 per litre. Fill up freely.' },
                            { title: 'Parking varies by area', desc: 'Many malls have free parking. Hotels charge SAR 20–60/day. Street parking is mostly free but space is tight in Al Olaya.' },
                            { title: 'Right-hand traffic', desc: 'Saudi Arabia drives on the right side of the road, same as Europe, USA, and most of Asia.' },
                        ].map((tip, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 p-4">
                                <p className="font-bold text-gray-900 text-sm mb-1">{tip.title}</p>
                                <p className="text-gray-600 text-sm">{tip.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">FAQ: Renting a Car in Saudi Arabia</h2>
                    <div className="space-y-5">
                        {faqSchema.mainEntity.map((faq, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                                <h3 className="font-bold text-gray-900 mb-3">{faq.name}</h3>
                                <p className="text-gray-600 leading-relaxed speakable-answer">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="mb-16 bg-black text-white rounded-3xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Skip the Rental — Book a Private Driver Instead</h2>
                    <p className="text-gray-400 mb-6 max-w-xl mx-auto">No IDP needed, no parking stress, no speed camera risk. A professional English-speaking driver ready for your Riyadh trip.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20private%20driver%20in%20Riyadh" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold px-8">
                                Book Private Driver <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/services/private-driver/">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold px-8">
                                View Driver Packages
                            </Button>
                        </Link>
                    </div>
                </section>

                {/* Internal links */}
                <section className="mb-16 border-t border-gray-200 pt-10">
                    <h3 className="font-bold text-gray-900 mb-4">Related Guides</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <Link href="/riyadh-chauffeur/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Private Chauffeur Riyadh
                        </Link>
                        <Link href="/blog/private-driver-vs-uber-riyadh-tourist/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Private Driver vs Uber in Riyadh
                        </Link>
                        <Link href="/services/tourism-transport/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Tourist Transport Saudi Arabia
                        </Link>
                        <Link href="/services/private-driver/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Hourly &amp; Daily Driver Hire
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </div>
        </div>
    );
}
