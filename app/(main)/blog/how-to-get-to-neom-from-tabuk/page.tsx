import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { CheckCircle2, ArrowRight, AlertTriangle, Car, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'How to Get to NEOM from Tabuk (2026 Guide) | Taxi Service KSA',
    description: 'Complete guide: Tabuk to NEOM by private car, taxi, or bus. Distance 190 km, 2–2.5 hours. Prices, checkpoints, vehicle recommendations for NEOM workers and visitors.',
    keywords: [
        'how to get to NEOM from Tabuk',
        'Tabuk to NEOM transport',
        'Tabuk to NEOM taxi',
        'NEOM from Tabuk distance',
        'private car Tabuk to NEOM',
        'Tabuk to NEOM driver',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/how-to-get-to-neom-from-tabuk/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/how-to-get-to-neom-from-tabuk/',
            'x-default': 'https://taxiserviceksa.com/blog/how-to-get-to-neom-from-tabuk/',
        },
    },
    openGraph: {
        title: 'How to Get to NEOM from Tabuk (2026 Guide)',
        description: '190 km, 2–2.5 hours. Every transport option from Tabuk to NEOM explained — private car, taxi, bus, and what to expect at checkpoints.',
        url: 'https://taxiserviceksa.com/blog/how-to-get-to-neom-from-tabuk/',
        type: 'article',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How far is NEOM from Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'NEOM (Sharma area) is approximately 190 km from Tabuk city centre. The drive takes 2–2.5 hours on the main highway heading northwest. The road is modern and well-maintained.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a bus from Tabuk to NEOM?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'There is no regular public bus service from Tabuk to NEOM as of 2026. NEOM is an active construction and development zone with controlled access. The only practical options are a private car or a company-arranged shuttle for NEOM project workers.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can tourists visit NEOM from Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'General tourist access to NEOM is restricted in 2026 as construction continues. Visitors need prior authorization from NEOM authorities. Project workers and authorized contractors can travel freely with the correct access credentials. Sindalah Island (part of NEOM) is planned to open to tourists in phases.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much does a private car from Tabuk to NEOM cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A private transfer from Tabuk to NEOM costs approximately SAR 400–600 in a Toyota Camry or Genesis G80 for solo/couple travelers. A GMC Yukon XL for groups costs SAR 700–1,000. All prices are fixed — agreed before departure, no meter. Contact Taxi Service KSA via WhatsApp for a quote.',
            },
        },
    ],
};

export default function HowToGetToNeomFromTabukPage() {

    const options = [
        {
            title: 'Pre-Booked Private Transfer',
            cost: 'SAR 400–1,000',
            time: '2–2.5 hrs',
            badge: 'Recommended',
            badgeColor: 'bg-emerald-600',
            pros: [
                'Door-to-door from hotel or airport',
                'Fixed price agreed before departure',
                'Driver knows NEOM access checkpoints',
                'GMC Yukon XL for teams with equipment',
                'English-speaking driver available',
                'Can book return trip same driver',
            ],
            cons: ['Must book in advance (WhatsApp)'],
            best: 'NEOM workers, consultants, executives, families',
        },
        {
            title: 'Company Shuttle / Bus',
            cost: 'Varies (employer arranged)',
            time: '2.5–3 hrs',
            badge: 'Workers Only',
            badgeColor: 'bg-blue-600',
            pros: [
                'Often provided free by NEOM contractor',
                'Group travel with colleagues',
            ],
            cons: [
                'Fixed schedule — no flexibility',
                'Not available to independent visitors',
                'No personal luggage guarantee',
            ],
            best: 'Employees of NEOM contractors on roster transport',
        },
        {
            title: 'Rent a Car + Self Drive',
            cost: 'SAR 150–300/day + fuel',
            time: '2–2.5 hrs',
            badge: 'Independent',
            badgeColor: 'bg-yellow-600',
            pros: [
                'Full flexibility on timing',
                'Good option for 2+ week stays',
            ],
            cons: [
                'Must know checkpoint procedures',
                'Navigation can be tricky on NEOM access roads',
                'IDP required for most nationalities',
                'Parking limited at some NEOM sites',
            ],
            best: 'Long-term workers who prefer driving themselves',
        },
        {
            title: 'Public Bus / SAPTCO',
            cost: '—',
            time: '—',
            badge: 'Not Available',
            badgeColor: 'bg-red-600',
            pros: [],
            cons: [
                'No public bus service to NEOM exists',
                'NEOM is not accessible by public transport',
            ],
            best: 'Not an option',
        },
    ];

    const checkpoints = [
        { name: 'Exit Tabuk City', note: 'Take the highway northwest — Route 15 towards Haql' },
        { name: 'Al Muwaylih / Sharma junction', note: 'Turn off towards NEOM access road — signposted' },
        { name: 'NEOM Security Checkpoint', note: 'ID + access authorization checked. Have credentials ready.' },
        { name: 'Arrival at NEOM site / accommodation', note: 'Driver drops at your registered site or camp' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <Script id="faq-neom-tabuk" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 to-black text-white pt-32 pb-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 inline-block">
                        Tabuk → NEOM Transport Guide 2026
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        How to Get to NEOM from Tabuk
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        190 km northwest of Tabuk. Every transport option explained — with real costs, checkpoint info, and vehicle recommendations for workers and visitors.
                    </p>
                    <div className="bg-white/10 rounded-2xl p-5 text-left text-sm border border-white/20 tldr-summary">
                        <p className="font-bold text-white mb-2 flex items-center gap-2"><Car className="w-4 h-4 text-emerald-400" /> Quick Answer</p>
                        <p className="text-gray-300 speakable-answer">The only practical way from Tabuk to NEOM is by <strong className="text-white">private car or employer shuttle</strong>. Distance: <strong className="text-white">190 km, 2–2.5 hours</strong>. No public bus exists. Pre-booked private transfer costs <strong className="text-white">SAR 400–1,000</strong> depending on vehicle. NEOM access requires authorization — have your credentials ready at the checkpoint.</p>
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
                        <span className="text-gray-900 font-medium">Tabuk to NEOM Transport</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* Route basics */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Tabuk to NEOM — Route Overview</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Distance', value: '190 km' },
                            { label: 'Drive Time', value: '2–2.5 hrs' },
                            { label: 'Road', value: 'Highway (Route 15)' },
                            { label: 'Checkpoint', value: 'NEOM security check' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 p-4 text-center">
                                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">{s.label}</div>
                                <div className="font-bold text-gray-900">{s.value}</div>
                            </div>
                        ))}
                    </div>
                    <div className="prose prose-lg prose-gray max-w-none">
                        <p>
                            NEOM — the mega-project on Saudi Arabia's northwest Red Sea coast — is accessible from Tabuk via a modern 4-lane highway heading northwest. The route passes through Al Muwaylih and enters the NEOM zone near the Sharma coastal area.
                        </p>
                        <p>
                            The road is in excellent condition. The drive is straightforward — one main highway with clear signage. However, <strong>NEOM has security checkpoints</strong> where access credentials are verified. All drivers (private or personal) must be prepared for this stop.
                        </p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-amber-900 text-sm"><strong>Access note:</strong> NEOM is not fully open to general tourists in 2026. Entry requires prior authorization from NEOM authorities or a valid contractor/employee credential. Visitors without authorization will be turned back at the checkpoint.</p>
                    </div>
                </section>

                {/* Checkpoint guide */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Route — Step by Step</h2>
                    <div className="space-y-4">
                        {checkpoints.map((c, i) => (
                            <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl border border-gray-200 p-5">
                                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                                <div>
                                    <p className="font-bold text-gray-900">{c.name}</p>
                                    <p className="text-gray-600 text-sm mt-0.5">{c.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Transport options */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">All Transport Options: Tabuk to NEOM</h2>
                    <div className="space-y-6">
                        {options.map((opt, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                                <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-white flex-wrap gap-3">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-lg font-bold text-gray-900">{opt.title}</h3>
                                        <span className={`${opt.badgeColor} text-white text-xs font-bold px-2 py-0.5 rounded-full`}>{opt.badge}</span>
                                    </div>
                                    <div className="text-right text-sm">
                                        <div className="font-bold text-gray-900">{opt.cost}</div>
                                        <div className="text-gray-500">{opt.time}</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                                    <div>
                                        <p className="text-xs font-bold text-emerald-700 mb-2 uppercase tracking-wide">Pros</p>
                                        <ul className="space-y-1">
                                            {opt.pros.length > 0 ? opt.pros.map((p, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />{p}
                                                </li>
                                            )) : <li className="text-sm text-gray-400 italic">None</li>}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-red-700 mb-2 uppercase tracking-wide">Cons</p>
                                        <ul className="space-y-1">
                                            {opt.cons.map((c, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <span className="text-red-500 font-bold flex-shrink-0">✕</span>{c}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="px-5 pb-4 text-xs text-gray-500 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" /> Best for: <strong className="text-gray-700 ml-1">{opt.best}</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Vehicle recommendation */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Which Vehicle for Tabuk to NEOM?</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl border border-gray-200 overflow-hidden text-sm">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-5 py-3 font-bold">Vehicle</th>
                                    <th className="px-5 py-3 font-bold">Passengers</th>
                                    <th className="px-5 py-3 font-bold">Bags</th>
                                    <th className="px-5 py-3 font-bold">Best For</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { v: 'Toyota Camry', p: '1–3', b: '2', f: 'Solo consultant, couple' },
                                    { v: 'Genesis G80', p: '1–3', b: '2', f: 'Executive, VIP solo' },
                                    { v: 'GMC Yukon XL', p: '1–7', b: '5', f: 'Project team, family — recommended for NEOM' },
                                    { v: 'Hyundai Staria VIP', p: '1–7', b: '4', f: 'Delegations, corporate group' },
                                    { v: 'Toyota Hiace', p: '1–11', b: '16', f: 'Large crew, equipment transfer' },
                                ].map((row, i) => (
                                    <tr key={i} className={`hover:bg-gray-50 ${i === 2 ? 'bg-emerald-50' : ''}`}>
                                        <td className="px-5 py-3 font-bold text-gray-900">{row.v} {i === 2 && <span className="text-xs bg-emerald-600 text-white px-1.5 py-0.5 rounded ml-1">Recommended</span>}</td>
                                        <td className="px-5 py-3 text-gray-600">{row.p}</td>
                                        <td className="px-5 py-3 text-gray-600">{row.b}</td>
                                        <td className="px-5 py-3 text-gray-600">{row.f}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-500 mt-3">For the 2–2.5 hour NEOM drive, GMC Yukon XL is the best balance of comfort, luggage space, and passenger capacity for most project teams.</p>
                </section>

                {/* FAQ */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">FAQ: Tabuk to NEOM Transport</h2>
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
                    <h2 className="text-2xl font-bold mb-4">Book Your Tabuk to NEOM Transfer</h2>
                    <p className="text-gray-400 mb-6 max-w-xl mx-auto">Send us your travel date, number of passengers, and pickup location. Fixed price confirmed in 30 minutes.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20private%20car%20from%20Tabuk%20to%20NEOM" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold px-8">
                                Book via WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/routes/tabuk-neom/">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold px-8">
                                View Route Details
                            </Button>
                        </Link>
                    </div>
                </section>

                {/* Internal links */}
                <section className="mb-16 border-t border-gray-200 pt-10">
                    <h3 className="font-bold text-gray-900 mb-4">Related Guides</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <Link href="/tabuk-airport-taxi/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Tabuk Airport (TUU) Transfer Guide
                        </Link>
                        <Link href="/services/taxi-in-tabuk/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Taxi Service in Tabuk
                        </Link>
                        <Link href="/blog/tabuk-to-neom-distance-drive-time/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Tabuk to NEOM Distance & Drive Time
                        </Link>
                        <Link href="/blog/private-driver-tabuk-neom-price/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Private Driver Tabuk to NEOM — Price Guide
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </div>
        </div>
    );
}
