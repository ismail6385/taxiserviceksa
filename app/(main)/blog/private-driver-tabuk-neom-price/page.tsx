import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Private Driver Tabuk to NEOM — Price Guide 2026 | Taxi Service KSA',
    description: 'Exact prices for private car from Tabuk to NEOM. Toyota Camry to GMC Yukon XL — all vehicle rates, monthly contracts, and how to book. Fixed rates, no surge.',
    keywords: [
        'private driver Tabuk to NEOM price',
        'Tabuk to NEOM taxi cost',
        'how much Tabuk to NEOM car',
        'NEOM transfer price from Tabuk',
        'private car Tabuk NEOM cost',
        'monthly driver Tabuk NEOM',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/private-driver-tabuk-neom-price/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/private-driver-tabuk-neom-price/',
            'x-default': 'https://taxiserviceksa.com/blog/private-driver-tabuk-neom-price/',
        },
    },
    openGraph: {
        title: 'Private Driver Tabuk to NEOM — Price Guide 2026',
        description: 'All vehicle prices, monthly contract rates, and what\'s included in a Tabuk to NEOM private transfer.',
        url: 'https://taxiserviceksa.com/blog/private-driver-tabuk-neom-price/',
        type: 'article',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How much does a private car from Tabuk to NEOM cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A private car from Tabuk to NEOM costs approximately SAR 400–600 in a Toyota Camry or Genesis G80 for solo travelers. A GMC Yukon XL for groups of up to 7 costs SAR 700–1,000. All prices are fixed — agreed before departure with no meter or surge pricing.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a monthly driver contract for Tabuk to NEOM?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. For NEOM project workers who travel regularly between Tabuk and NEOM, a monthly dedicated driver contract is available. A pre-assigned driver covers your regular routes at a fixed monthly rate. Contact Taxi Service KSA via WhatsApp to discuss your schedule and get a monthly quote.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is included in the Tabuk to NEOM transfer price?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The price includes: door-to-door transfer, professional driver, full A/C, luggage assistance, one scheduled rest stop (SASCO ~90 km), driver assistance at the NEOM checkpoint, and all fuel. There are no extra charges for highway tolls, fuel, or standard luggage.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I split the cost with colleagues for Tabuk to NEOM?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. The price is per vehicle, not per person. A GMC Yukon XL at SAR 700–1,000 fits 7 passengers. Split between 5–6 colleagues, the per-person cost is SAR 117–200 — comparable to a single Uber fare in Riyadh. Booking a group transfer is the most cost-effective option for NEOM project teams.',
            },
        },
    ],
};

export default function PrivateDriverTabukNeomPricePage() {

    const pricingTable = [
        { vehicle: 'Toyota Camry', pax: '1–3', bags: '2 bags', oneWay: 'SAR 400–600', roundTrip: 'SAR 700–950', monthly: 'On request', note: 'Solo consultant, couple' },
        { vehicle: 'Genesis G80', pax: '1–3', bags: '2 bags', oneWay: 'SAR 500–700', roundTrip: 'SAR 850–1,100', monthly: 'On request', note: 'Executive, VIP solo' },
        { vehicle: 'GMC Yukon XL', pax: '1–7', bags: '5 bags', oneWay: 'SAR 700–1,000', roundTrip: 'SAR 1,100–1,500', monthly: 'On request', note: 'Teams — recommended' },
        { vehicle: 'Hyundai Staria VIP', pax: '1–7', bags: '4 bags', oneWay: 'SAR 650–900', roundTrip: 'SAR 1,000–1,400', monthly: 'On request', note: 'Delegations, families' },
        { vehicle: 'Toyota Hiace', pax: '1–11', bags: '16 bags', oneWay: 'SAR 900–1,300', roundTrip: 'SAR 1,400–1,900', monthly: 'On request', note: 'Large crew, equipment' },
    ];

    const included = [
        'Door-to-door pickup from hotel, camp, or airport',
        'Professional licensed driver',
        'Full A/C — desert-ready vehicle',
        'Luggage assistance included',
        'One scheduled rest stop at SASCO (~90 km mark)',
        'Driver assistance at NEOM security checkpoint',
        'All fuel costs included in price',
        'No highway toll charges',
        'WhatsApp communication throughout journey',
    ];

    const notIncluded = [
        'Additional stop requests beyond 1 rest stop (can be arranged)',
        'Return trip — book separately or as round-trip at discount',
        'Vehicle upgrade on arrival (book correct vehicle in advance)',
    ];

    return (
        <div className="bg-white min-h-screen">
            <Script id="faq-price-neom" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 to-black text-white pt-32 pb-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 inline-block">
                        Tabuk → NEOM Price Guide 2026
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        Private Driver Tabuk to NEOM<br />
                        <span className="text-white/70 text-2xl md:text-3xl">Price Guide &amp; What&apos;s Included</span>
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        Exact vehicle prices, round-trip rates, monthly contracts, and everything included in your Tabuk to NEOM private transfer.
                    </p>
                    <div className="bg-white/10 rounded-2xl p-5 text-left text-sm border border-white/20 tldr-summary">
                        <p className="font-bold text-white mb-2">Quick Answer</p>
                        <p className="text-gray-300 speakable-answer">One-way private car Tabuk to NEOM: <strong className="text-white">SAR 400–600</strong> (Toyota Camry, 1–3 pax) or <strong className="text-white">SAR 700–1,000</strong> (GMC Yukon XL, up to 7 pax). All prices fixed — fuel, luggage, and rest stop included. No surge pricing.</p>
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
                        <span className="text-gray-900 font-medium">Tabuk to NEOM Price</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* Pricing table */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Tabuk to NEOM — All Vehicle Prices (2026)</h2>
                    <p className="text-gray-600 mb-8">All prices in Saudi Riyals (SAR). Fixed rates — confirmed before departure. Round-trip discount applies when both legs booked together.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl border border-gray-200 overflow-hidden text-sm">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-4 py-3 font-bold">Vehicle</th>
                                    <th className="px-4 py-3 font-bold">Pax</th>
                                    <th className="px-4 py-3 font-bold">Bags</th>
                                    <th className="px-4 py-3 font-bold text-emerald-400">One Way</th>
                                    <th className="px-4 py-3 font-bold text-blue-300">Round Trip</th>
                                    <th className="px-4 py-3 font-bold">Best For</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {pricingTable.map((r, i) => (
                                    <tr key={i} className={`hover:bg-gray-50 ${i === 2 ? 'bg-emerald-50/50' : ''}`}>
                                        <td className="px-4 py-3 font-bold text-gray-900">
                                            {r.vehicle}
                                            {i === 2 && <span className="text-xs bg-emerald-600 text-white px-1.5 py-0.5 rounded ml-1">Popular</span>}
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">{r.pax}</td>
                                        <td className="px-4 py-3 text-gray-600">{r.bags}</td>
                                        <td className="px-4 py-3 font-bold text-emerald-700">{r.oneWay}</td>
                                        <td className="px-4 py-3 text-blue-700 font-medium">{r.roundTrip}</td>
                                        <td className="px-4 py-3 text-gray-500 text-xs">{r.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-amber-900 text-sm"><strong>Price note:</strong> Prices are estimates based on 2026 rates. Final price depends on exact pickup location, any additional stops, and vehicle availability. Contact us on WhatsApp for a confirmed fixed quote before your trip.</p>
                    </div>
                </section>

                {/* Per person breakdown */}
                <section className="mb-16 bg-gray-50 rounded-2xl border border-gray-200 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost Per Person — Team Travel</h2>
                    <p className="text-gray-600 mb-6">The price is per vehicle, not per person. For NEOM project teams traveling together, the per-person cost drops significantly:</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-xl border border-gray-200 overflow-hidden text-sm">
                            <thead className="bg-gray-900 text-white">
                                <tr>
                                    <th className="px-4 py-3 font-bold">Vehicle</th>
                                    <th className="px-4 py-3 font-bold">Total Price</th>
                                    <th className="px-4 py-3 font-bold">Per Person (4 pax)</th>
                                    <th className="px-4 py-3 font-bold">Per Person (7 pax)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { v: 'GMC Yukon XL', total: 'SAR 800', per4: 'SAR 200', per7: 'SAR 115' },
                                    { v: 'Hyundai Staria VIP', total: 'SAR 750', per4: 'SAR 188', per7: 'SAR 107' },
                                    { v: 'Toyota Hiace', total: 'SAR 1,000', per4: 'SAR 250', per7: 'SAR 143' },
                                ].map((r, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 font-bold text-gray-900">{r.v}</td>
                                        <td className="px-4 py-3 text-gray-600">{r.total}</td>
                                        <td className="px-4 py-3 text-gray-700 font-medium">{r.per4}</td>
                                        <td className="px-4 py-3 text-emerald-700 font-bold">{r.per7}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-500 mt-3">At 7 passengers in a GMC Yukon XL, per-person cost is just SAR 115 — less than most short Uber trips in Riyadh.</p>
                </section>

                {/* What's included */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What&apos;s Included in the Price</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {included.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Not Included</h3>
                    <div className="space-y-2">
                        {notIncluded.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-gray-50 p-3 rounded-xl border border-gray-200">
                                <span className="text-gray-400 font-bold text-sm flex-shrink-0">—</span>
                                <span className="text-gray-600 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">FAQ: Tabuk to NEOM Price</h2>
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
                    <h2 className="text-2xl font-bold mb-4">Get Your Fixed Quote — Tabuk to NEOM</h2>
                    <p className="text-gray-400 mb-6">Tell us your date, passengers, pickup point, and destination inside NEOM. Fixed price in 30 minutes.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20price%20for%20private%20car%20from%20Tabuk%20to%20NEOM" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold px-8">
                                Get Price on WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
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
                        <Link href="/blog/how-to-get-to-neom-from-tabuk/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            All Transport Options: Tabuk to NEOM
                        </Link>
                        <Link href="/blog/tabuk-to-neom-distance-drive-time/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Tabuk to NEOM Distance & Drive Time
                        </Link>
                        <Link href="/services/taxi-in-tabuk/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            All Tabuk Taxi Services
                        </Link>
                        <Link href="/services/private-driver/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Monthly Private Driver Contracts
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </div>
        </div>
    );
}
