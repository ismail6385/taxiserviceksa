import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'How Much is a Taxi from Riyadh Airport? (2026 Prices) | Taxi Service KSA',
    description: 'Exact taxi fares from King Khalid International Airport (RUH) to Riyadh hotels, KAFD, Diplomatic Quarter. Private transfer vs Uber vs metered taxi — all prices explained.',
    keywords: [
        'taxi from Riyadh airport price',
        'how much is taxi from King Khalid Airport',
        'RUH airport taxi fare',
        'Riyadh airport to city cost',
        'cost of taxi Riyadh airport',
        'private transfer price Riyadh airport',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/how-much-is-taxi-from-riyadh-airport/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/how-much-is-taxi-from-riyadh-airport/',
            'x-default': 'https://taxiserviceksa.com/blog/how-much-is-taxi-from-riyadh-airport/',
        },
    },
    openGraph: {
        title: 'How Much is a Taxi from Riyadh Airport? (2026 Prices)',
        description: 'Private transfer, Uber, and metered taxi fares from King Khalid International Airport to all Riyadh destinations.',
        url: 'https://taxiserviceksa.com/blog/how-much-is-taxi-from-riyadh-airport/',
        type: 'article',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How much does a taxi from Riyadh airport to city centre cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A pre-booked private transfer from King Khalid International Airport (RUH) to Riyadh city centre costs approximately SAR 120–180 in a Toyota Camry. Uber and Careem typically charge SAR 80–150 but add surge pricing during peak hours. Airport metered taxis cost SAR 150–250 depending on destination.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a fixed-price taxi from Riyadh airport?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Pre-booked private transfer services like Taxi Service KSA offer fixed rates from RUH Airport — no meter, no surge, price agreed before you land. SAR 120–180 to city centre, SAR 500–800 for a GMC Yukon XL for families.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much is Uber from King Khalid Airport to Riyadh?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Uber from King Khalid International Airport to Riyadh city centre is typically SAR 80–120 during off-peak hours. During surge (late night flights, early morning, Ramadan, National Day), prices jump to SAR 180–300+. Average wait time at the airport is 15–25 minutes.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do airport taxis in Riyadh use meters?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Official airport taxis in Riyadh use meters. The flag-fall starts at approximately SAR 8–10 and the per-km rate is around SAR 2–3. For a 35 km trip to city centre, the metered fare typically comes to SAR 100–180. However, waiting time in airport traffic can inflate this significantly.',
            },
        },
    ],
};

export default function RiyadhAirportTaxiFarePage() {
    const fares = [
        { dest: 'Riyadh City Centre / Al Olaya', dist: '35 km', private: 'SAR 120–180', uber: 'SAR 80–150', metered: 'SAR 150–220', time: '30–45 min' },
        { dest: 'KAFD (Financial District)', dist: '28 km', private: 'SAR 110–160', uber: 'SAR 75–130', metered: 'SAR 130–200', time: '25–35 min' },
        { dest: 'Diplomatic Quarter', dist: '30 km', private: 'SAR 110–165', uber: 'SAR 78–135', metered: 'SAR 135–200', time: '25–35 min' },
        { dest: 'Four Seasons / Ritz-Carlton', dist: '32 km', private: 'SAR 115–175', uber: 'SAR 80–140', metered: 'SAR 140–210', time: '28–40 min' },
        { dest: 'Diriyah Heritage Site', dist: '22 km', private: 'SAR 90–130', uber: 'SAR 60–100', metered: 'SAR 100–160', time: '20–30 min' },
        { dest: 'Jeddah (intercity)', dist: '950 km', private: 'SAR 1,200–1,800', uber: 'N/A', metered: 'N/A', time: '9–10 hrs' },
    ];

    const vehiclePrices = [
        { vehicle: 'Toyota Camry', pax: '1–3', bags: '2', price: 'SAR 120–180', note: 'Most affordable, solo/couple' },
        { vehicle: 'Genesis G80', pax: '1–3', bags: '2', price: 'SAR 180–250', note: 'Executive sedan' },
        { vehicle: 'GMC Yukon XL', pax: '1–7', bags: '5', price: 'SAR 350–500', note: 'Families, groups' },
        { vehicle: 'Hyundai Staria VIP', pax: '1–7', bags: '4', price: 'SAR 300–450', note: 'Delegations, VIP families' },
        { vehicle: 'Toyota Hiace (van)', pax: '1–11', bags: '16', price: 'SAR 450–650', note: 'Large groups, tours' },
        { vehicle: 'Cadillac Escalade', pax: '1–6', bags: '4', price: 'SAR 500–750', note: 'Royal/diplomatic arrivals' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <Script id="faq-schema-prices" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 to-black text-white pt-32 pb-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 inline-block">
                        Riyadh Airport Prices 2026
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        How Much is a Taxi from Riyadh Airport?
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        Exact prices for every transport option from King Khalid International Airport (RUH) — private transfer, Uber, and metered taxi compared.
                    </p>
                    <div className="bg-white/10 rounded-2xl p-5 text-left text-sm border border-white/20 tldr-summary">
                        <p className="font-bold text-white mb-2">Quick Answer</p>
                        <p className="text-gray-300">Pre-booked private transfer: <strong className="text-white">SAR 120–180</strong> to city centre (fixed, no surge). Uber: <strong className="text-white">SAR 80–150</strong> off-peak, up to SAR 300+ with surge. Metered airport taxi: <strong className="text-white">SAR 150–250</strong>. Distance from airport to city: <strong className="text-white">35 km, 30–45 minutes</strong>.</p>
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
                        <span className="text-gray-900 font-medium">Riyadh Airport Taxi Prices</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* Fare comparison table */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Riyadh Airport Taxi Fares by Destination (2026)</h2>
                    <p className="text-gray-600 mb-8">All prices in Saudi Riyals (SAR). Private transfer prices are fixed — Uber/metered prices are estimates and vary with traffic and surge.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl border border-gray-200 overflow-hidden text-sm">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-4 py-3 font-bold">Destination</th>
                                    <th className="px-4 py-3 font-bold">Dist.</th>
                                    <th className="px-4 py-3 font-bold text-emerald-400">Private (Fixed)</th>
                                    <th className="px-4 py-3 font-bold text-yellow-400">Uber/Careem</th>
                                    <th className="px-4 py-3 font-bold text-red-400">Metered Taxi</th>
                                    <th className="px-4 py-3 font-bold">Drive Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {fares.map((r, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 font-medium text-gray-900">{r.dest}</td>
                                        <td className="px-4 py-3 text-gray-600">{r.dist}</td>
                                        <td className="px-4 py-3 font-bold text-emerald-700">{r.private}</td>
                                        <td className="px-4 py-3 text-gray-600">{r.uber}</td>
                                        <td className="px-4 py-3 text-gray-600">{r.metered}</td>
                                        <td className="px-4 py-3 text-gray-600">{r.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-amber-900 text-sm"><strong>Surge warning:</strong> Uber and Careem surge heavily at peak arrival times (late night, early morning, Ramadan, Riyadh Season). Pre-booking a private transfer locks in the price before your flight takes off.</p>
                    </div>
                </section>

                {/* Vehicle prices */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Private Transfer Prices by Vehicle</h2>
                    <p className="text-gray-600 mb-8">All private transfer prices are fixed — confirmed before you land, no meter running, no surprises. Prices shown are for city centre destinations.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl border border-gray-200 overflow-hidden text-sm">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-4 py-3 font-bold">Vehicle</th>
                                    <th className="px-4 py-3 font-bold">Passengers</th>
                                    <th className="px-4 py-3 font-bold">Bags</th>
                                    <th className="px-4 py-3 font-bold">Price (to City)</th>
                                    <th className="px-4 py-3 font-bold">Best For</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {vehiclePrices.map((v, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 font-bold text-gray-900">{v.vehicle}</td>
                                        <td className="px-4 py-3 text-gray-600">{v.pax}</td>
                                        <td className="px-4 py-3 text-gray-600">{v.bags}</td>
                                        <td className="px-4 py-3 font-bold text-emerald-700">{v.price}</td>
                                        <td className="px-4 py-3 text-gray-500 text-xs">{v.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Why fixed price */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why a Fixed-Price Transfer is Worth It</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            'Price confirmed before your flight — no surprises at arrivals',
                            'Driver waiting with your name sign — no waiting at taxi queues',
                            'Flight tracking included — driver adjusts for delays at no extra charge',
                            '90 minutes free wait for international flights',
                            'Fixed price covers all luggage — no extra bag charges',
                            'English-speaking driver confirmed in advance',
                        ].map((f, i) => (
                            <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-sm">{f}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">FAQ: Riyadh Airport Taxi Prices</h2>
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
                    <h2 className="text-2xl font-bold mb-4">Get Your Fixed Quote from RUH Airport</h2>
                    <p className="text-gray-400 mb-6">Message us on WhatsApp with your flight number, arrival date, and hotel — we reply with your fixed price in 30 minutes.</p>
                    <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20fixed-price%20transfer%20from%20King%20Khalid%20Airport%20Riyadh" target="_blank">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold px-10">
                            Get My Quote <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </section>

                {/* Internal links */}
                <section className="mb-16 border-t border-gray-200 pt-10">
                    <h3 className="font-bold text-gray-900 mb-4">Related Guides</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <Link href="/riyadh-airport-taxi/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Full RUH Airport Transfer Guide
                        </Link>
                        <Link href="/blog/how-to-get-from-riyadh-airport-to-city/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            All Transport Options: RUH to City
                        </Link>
                        <Link href="/services/riyadh-hotel-transfer/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Riyadh Hotel Pickup Service
                        </Link>
                        <Link href="/fleet/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            View Full Fleet &amp; Prices
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </div>
        </div>
    );
}
