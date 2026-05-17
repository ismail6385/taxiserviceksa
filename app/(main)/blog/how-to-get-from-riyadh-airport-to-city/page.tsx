import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { CheckCircle2, Clock, Car, MapPin, ArrowRight, AlertTriangle, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'How to Get from Riyadh Airport to City Centre (2026 Guide) | Taxi Service KSA',
    description: 'Complete guide to getting from King Khalid International Airport (RUH) to Riyadh city centre. Private transfer, Uber, bus, taxi stand — costs, times, pros and cons.',
    keywords: [
        'how to get from Riyadh airport to city',
        'King Khalid Airport to Riyadh city centre',
        'RUH airport transfer',
        'Riyadh airport to hotel',
        'transport from Riyadh airport',
        'taxi from King Khalid Airport',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/how-to-get-from-riyadh-airport-to-city/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/how-to-get-from-riyadh-airport-to-city/',
            'x-default': 'https://taxiserviceksa.com/blog/how-to-get-from-riyadh-airport-to-city/',
        },
    },
    openGraph: {
        title: 'How to Get from Riyadh Airport to City Centre (2026 Guide)',
        description: 'Private transfer, Uber, bus, taxi stand — every option explained with costs and times.',
        url: 'https://taxiserviceksa.com/blog/how-to-get-from-riyadh-airport-to-city/',
        type: 'article',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How far is King Khalid International Airport from Riyadh city centre?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'King Khalid International Airport (RUH) is approximately 35 km north of Riyadh city centre. The drive takes 30–45 minutes depending on traffic. King Fahd Road connects the airport directly to the city.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much does a taxi from Riyadh airport to city cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A pre-booked private transfer from RUH Airport to Riyadh city centre costs approximately SAR 120–180 in a Toyota Camry. Uber and Careem typically charge SAR 80–150 but surge pricing applies during peak hours and Ramadan. Airport taxi stands charge metered fares that can exceed SAR 200.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a bus from Riyadh airport to the city?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'There is no direct public bus service from King Khalid International Airport to Riyadh city centre as of 2026. The Riyadh Metro does not connect to the airport. The only public transport option is the SAPTCO bus, which is infrequent and not suitable for travelers with luggage.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is Uber available at King Khalid International Airport?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Uber and Careem both operate at RUH Airport. However, surge pricing is common during flight arrival peaks (especially late night and early morning). Wait times for UberX can be 15–25 minutes. Pre-booking a private transfer avoids surge and guarantees a driver at arrival.',
            },
        },
    ],
};

export default function RiyadhAirportToCityGuide() {
    const options = [
        {
            title: 'Pre-Booked Private Transfer',
            cost: 'SAR 120–180',
            time: '30–45 min',
            badge: 'Recommended',
            badgeColor: 'bg-emerald-600',
            pros: [
                'Driver waiting with name sign at arrivals',
                'Fixed rate — no surge ever',
                'Flight tracking included',
                'Luggage assistance',
                'English-speaking driver',
            ],
            cons: ['Must book in advance (WhatsApp)'],
            best: 'Business travelers, families, first-time visitors',
        },
        {
            title: 'Uber / Careem App',
            cost: 'SAR 80–200+',
            time: '35–60 min (wait + drive)',
            badge: 'Variable Cost',
            badgeColor: 'bg-yellow-600',
            pros: [
                'No advance booking needed',
                'Cheap during off-peak hours',
                'Familiar app interface',
            ],
            cons: [
                'Surge pricing at peak times',
                '15–25 min wait time at airport',
                'No guaranteed vehicle type',
                'Driver may not speak English',
            ],
            best: 'Solo travelers, short notice arrivals',
        },
        {
            title: 'Airport Taxi Stand',
            cost: 'SAR 150–250+',
            time: '30–45 min',
            badge: 'Most Expensive',
            badgeColor: 'bg-red-600',
            pros: ['No booking needed', 'Immediately available'],
            cons: [
                'Metered fare — often most expensive option',
                'Queue can be 20–40 minutes',
                'No vehicle choice',
                'Variable driver quality',
            ],
            best: 'Last resort only',
        },
        {
            title: 'SAPTCO Bus',
            cost: 'SAR 15–25',
            time: '60–90+ min',
            badge: 'Budget',
            badgeColor: 'bg-gray-600',
            pros: ['Very cheap'],
            cons: [
                'Infrequent schedule',
                'No luggage storage',
                'Not air-conditioned consistently',
                'Drops at bus station, not hotels',
                'No metro connection to airport',
            ],
            best: 'Not recommended for tourists',
        },
    ];

    const hotels = [
        { name: 'Four Seasons Riyadh (Al Olaya)', dist: '32 km', time: '30–40 min' },
        { name: 'Ritz-Carlton Riyadh (Diplomatic Quarter)', dist: '30 km', time: '25–35 min' },
        { name: 'Rosewood Riyadh (KAFD)', dist: '28 km', time: '25–35 min' },
        { name: 'Marriott Hotel Al Olaya', dist: '33 km', time: '30–40 min' },
        { name: 'Hyatt Regency Riyadh Olaya', dist: '33 km', time: '30–40 min' },
        { name: 'Courtyard by Marriott (King Fahd Road)', dist: '30 km', time: '28–38 min' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <Script id="faq-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 to-black text-white pt-32 pb-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 inline-block">
                        Riyadh Airport Guide 2026
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        How to Get from Riyadh Airport to City Centre
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
                        King Khalid International Airport (RUH) is 35 km from the city. Here are every transport option — with real costs, wait times, and honest pros and cons.
                    </p>
                    {/* TL;DR AEO block */}
                    <div className="bg-white/10 rounded-2xl p-5 text-left text-sm border border-white/20 tldr-summary">
                        <p className="font-bold text-white mb-2 flex items-center gap-2"><Plane className="w-4 h-4" /> Quick Answer</p>
                        <p className="text-gray-300">The fastest and most reliable way from RUH Airport to Riyadh city is a <strong className="text-white">pre-booked private transfer</strong> — driver meets you at arrivals, fixed rate SAR 120–180, 30–45 minutes. Uber is available but surges at peak hours. There is no metro or direct bus to the airport.</p>
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
                        <span className="text-gray-900 font-medium">Riyadh Airport to City Guide</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* Airport basics */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">About King Khalid International Airport (RUH)</h2>
                    <div className="prose prose-lg prose-gray max-w-none">
                        <p>
                            King Khalid International Airport — IATA code <strong>RUH</strong> — is Riyadh's main international airport and one of the largest airports in the world by land area. It sits approximately <strong>35 km north of Riyadh city centre</strong>, connected via King Fahd Road (Highway 65).
                        </p>
                        <p>
                            The airport has four passenger terminals:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        {[
                            { t: 'Terminal 1', desc: 'International arrivals (non-Saudia airlines)' },
                            { t: 'Terminal 2', desc: 'Domestic departures and arrivals' },
                            { t: 'Terminal 3', desc: 'Saudia international flights' },
                            { t: 'Terminal 5', desc: 'Domestic and regional operations' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <div className="bg-black text-white text-xs font-bold px-2 py-1 rounded flex-shrink-0">{item.t}</div>
                                <p className="text-gray-700 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-amber-900 text-sm"><strong>Tip:</strong> Check which terminal your airline uses before landing — terminals are far apart. Your pre-booked driver will meet you at the correct arrivals hall with a name sign.</p>
                    </div>
                </section>

                {/* Options comparison */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">All Transport Options: Compared</h2>
                    <div className="space-y-6">
                        {options.map((opt, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                                <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-white">
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
                                            {opt.pros.map((p, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-red-700 mb-2 uppercase tracking-wide">Cons</p>
                                        <ul className="space-y-1">
                                            {opt.cons.map((c, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <span className="text-red-500 flex-shrink-0 font-bold mt-0.5">✕</span>
                                                    {c}
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

                {/* Hotel distances */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">RUH Airport to Popular Riyadh Hotels</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl border border-gray-200 overflow-hidden text-sm">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-5 py-3 font-bold">Hotel</th>
                                    <th className="px-5 py-3 font-bold">Distance</th>
                                    <th className="px-5 py-3 font-bold">Drive Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {hotels.map((h, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-5 py-3 font-medium text-gray-900">{h.name}</td>
                                        <td className="px-5 py-3 text-gray-600">{h.dist}</td>
                                        <td className="px-5 py-3 text-gray-600">{h.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-500 mt-3">Times are for off-peak hours. Add 10–20 minutes during morning (7–9 AM) and evening (4–7 PM) rush.</p>
                </section>

                {/* How to book */}
                <section className="mb-16 bg-black text-white rounded-3xl p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">How to Book a Private Transfer from RUH Airport</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {[
                            { step: '1', title: 'WhatsApp Us', desc: 'Send your flight number, arrival date, number of passengers, and hotel name. We confirm within 30 minutes.' },
                            { step: '2', title: 'Get Driver Details', desc: 'Before your flight lands, receive your driver\'s name, photo, vehicle plate, and terminal meeting point.' },
                            { step: '3', title: 'Walk Out — Driver Waiting', desc: 'Driver holds your name sign at arrivals. Luggage assistance included. Straight to your hotel.' },
                        ].map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">{s.step}</div>
                                <h3 className="font-bold mb-2">{s.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20transfer%20from%20King%20Khalid%20Airport%20to%20Riyadh%20city" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold px-8">
                                Book via WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/riyadh-airport-taxi/">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold px-8">
                                Full RUH Airport Guide
                            </Button>
                        </Link>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-5">
                        {faqSchema.mainEntity.map((faq, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                                <h3 className="font-bold text-gray-900 mb-3">{faq.name}</h3>
                                <p className="text-gray-600 leading-relaxed speakable-answer">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Internal links */}
                <section className="mb-16 border-t border-gray-200 pt-10">
                    <h3 className="font-bold text-gray-900 mb-4">Related Guides</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <Link href="/riyadh-airport-taxi/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            King Khalid Airport Transfer Service
                        </Link>
                        <Link href="/blog/how-much-is-taxi-from-riyadh-airport/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            How Much is a Taxi from Riyadh Airport?
                        </Link>
                        <Link href="/services/riyadh-hotel-transfer/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Riyadh Hotel Pickup Service
                        </Link>
                        <Link href="/blog/should-i-rent-a-car-in-saudi-arabia/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Should I Rent a Car in Saudi Arabia?
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </div>
        </div>
    );
}
