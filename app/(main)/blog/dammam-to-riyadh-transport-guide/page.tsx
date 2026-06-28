import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Dammam to Riyadh Transport Guide (2026) | Flight, Bus, Private Car',
    description: 'How to get from Dammam to Riyadh: private car (4.5 hrs, SAR 600–900), SAPTCO bus, or domestic flight. All options compared with prices and booking tips.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/dammam-to-riyadh-transport-guide/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/dammam-to-riyadh-transport-guide/',
            'ar': 'https://taxiserviceksa.com/blog/dammam-to-riyadh-transport-guide/',
            'x-default': 'https://taxiserviceksa.com/blog/dammam-to-riyadh-transport-guide/',
        },
    },
    openGraph: {
        title: 'Dammam to Riyadh — All Transport Options 2026',
        description: 'Private car (4–4.5 hrs, SAR 600–900), SAPTCO bus, or flight from Dammam to Riyadh. Full comparison of time, cost, and convenience for every traveller.',
        url: 'https://taxiserviceksa.com/blog/dammam-to-riyadh-transport-guide/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dammam to Riyadh Transport Guide (2026) | Flight, Bus, Private Car',
    description: 'Complete guide to getting from Dammam to Riyadh. Covers private car, SAPTCO bus, and domestic flight options with prices, times, and booking advice.',
    author: { '@type': 'Person', name: 'Muhammad Ismail' },
    publisher: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
    datePublished: '2026-06-27',
    dateModified: '2026-06-27',
    speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.tldr-summary', '.speakable-answer'],
    },
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How far is Dammam from Riyadh?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dammam is approximately 400 km from Riyadh by road — roughly 4–4.5 hours of driving on Highway 40 (Dammam-Riyadh Expressway). This is one of Saudi Arabia\'s most heavily used intercity highways, well maintained with petrol stations and rest stops along the way.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much does a private car from Dammam to Riyadh cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A private car from Dammam to Riyadh costs approximately SAR 600–900 depending on vehicle type. Toyota Camry: SAR 600–700. GMC Yukon XL: SAR 750–900. All rates are fixed — agreed before departure. The driver makes scheduled rest stops on request.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a bus from Dammam to Riyadh?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. SAPTCO (Saudi Public Transport Company) operates coach services between Dammam and Riyadh. The journey takes approximately 5–6 hours. Buses depart from the Dammam bus terminal. Tickets cost approximately SAR 80–120 per person. For comfort and door-to-door service, a private car is the better option for families and business travellers.',
            },
        },
        {
            '@type': 'Question',
            name: 'Should I fly or drive from Dammam to Riyadh?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A domestic flight takes about 1 hour but requires 2+ hours for airport check-in, security, and baggage. Total door-to-door time is often 3.5–5 hours — similar to a private car. Flights cost SAR 150–400 per person. For families or groups of 3+, a private car is usually cheaper and more convenient.',
            },
        },
    ],
};

export default function DammamToRiyadhTransportGuidePage() {
    const options = [
        {
            mode: '🚗 Private Car (pre-booked)',
            time: '4–4.5 hrs',
            cost: 'SAR 600–900 total',
            pros: ['Door to door — no airport transfers', 'Fixed price agreed in advance', 'Departure time is yours to choose', 'Rest stops on request', 'Better for families & groups', 'Luggage in boot — no baggage fees'],
            cons: ['Single payment upfront', 'Longer in-vehicle time than flight'],
            verdict: '✅ Best for families, groups, and corporate travel',
        },
        {
            mode: '✈️ Domestic Flight (DMM → RUH)',
            time: '1 hr flight + 2–3 hrs total',
            cost: 'SAR 150–400 per person',
            pros: ['Shortest in-flight time', 'Per-person pricing (cheaper solo)'],
            cons: ['Airport check-in + security add 2+ hrs each end', 'Baggage fees possible', 'No flexibility on departure time', 'Airport taxi needed at both ends'],
            verdict: '⚠️ Best for solo travellers on a tight deadline',
        },
        {
            mode: '🚌 SAPTCO Bus',
            time: '5–6 hrs',
            cost: 'SAR 80–120 per person',
            pros: ['Cheapest option', 'Multiple daily departures'],
            cons: ['Longest total journey time', 'Fixed schedule, no flexibility', 'No door-to-door service', 'Less comfortable for long rides'],
            verdict: '⚠️ Best for budget solo travellers',
        },
    ];

    const stops = [
        { location: 'Dammam / Al Khobar', km: '0 km', note: 'Departure point' },
        { location: 'Hofuf (Al-Ahsa)', km: '~130 km', note: 'Optional rest stop — 1 hr 15 min from Dammam' },
        { location: 'Haradh SASCO Station', km: '~230 km', note: 'Midpoint petrol and prayer stop' },
        { location: 'Al Kharj', km: '~350 km', note: 'Outskirts of greater Riyadh area' },
        { location: 'Riyadh City Centre', km: '~400 km', note: 'Destination — 4–4.5 hrs total' },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Dammam &rsaquo; Intercity &rsaquo; Riyadh</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Dammam to Riyadh Transport Guide (2026): Private Car, Bus &amp; Flight Compared
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated June 2026 &bull; 5 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR — Key Facts</p>
                    <ul className="space-y-1 text-sm">
                        <li>📏 <strong>Distance:</strong> ~400 km on Highway 40 (Dammam–Riyadh Expressway)</li>
                        <li>🚗 <strong>Private car:</strong> 4–4.5 hrs, SAR 600–900 total</li>
                        <li>✈️ <strong>Domestic flight:</strong> 1 hr + 2–3 hrs at airports each end</li>
                        <li>🚌 <strong>SAPTCO bus:</strong> 5–6 hrs, SAR 80–120 per person</li>
                        <li>✅ <strong>Best for families/groups:</strong> Private car — door to door, fixed price</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p className="speakable-answer">
                        Dammam to Riyadh is approximately 400 km — about 4 to 4.5 hours by car on the well-maintained Dammam–Riyadh Expressway (Highway 40). This is one of the most important intercity routes in Saudi Arabia, connecting the Eastern Province&apos;s oil hub with the capital. You have three realistic options: private car, domestic flight, or SAPTCO bus. Here&apos;s how to choose.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">All Options: Dammam to Riyadh Compared</h2>
                    <div className="space-y-5">
                        {options.map((opt, i) => (
                            <div key={i} className="border rounded-xl p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-bold text-base">{opt.mode}</h3>
                                    <span className="text-xs font-semibold bg-muted px-2 py-1 rounded">{opt.verdict}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                                    <div><span className="font-semibold">Time:</span> {opt.time}</div>
                                    <div><span className="font-semibold">Cost:</span> {opt.cost}</div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                    <div>
                                        <p className="font-semibold text-green-700 mb-1">Pros</p>
                                        <ul className="space-y-1">{opt.pros.map((p, j) => <li key={j}>✅ {p}</li>)}</ul>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-red-700 mb-1">Cons</p>
                                        <ul className="space-y-1">{opt.cons.map((c, j) => <li key={j}>❌ {c}</li>)}</ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-4">The Route: Dammam to Riyadh by Road</h2>
                    <p className="text-sm text-muted-foreground mb-4">Highway 40 (the Dammam–Riyadh Expressway) is a well-maintained dual carriageway with SASCO petrol stations, rest areas, and mosques along the route. The road is flat and straight across the Najd plateau.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Location</th>
                                    <th className="border px-3 py-2 text-left">Distance</th>
                                    <th className="border px-3 py-2 text-left">Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stops.map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.location}</td>
                                        <td className="border px-3 py-2">{row.km}</td>
                                        <td className="border px-3 py-2 text-muted-foreground text-xs">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Book Private Car: Dammam to Riyadh</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        Door to door, fixed price, scheduled rest stops included. Toyota Camry, GMC Yukon XL, and Cadillac Escalade available. Book 24 hours ahead for best availability.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20private%20car%20from%20Dammam%20to%20Riyadh.%20Please%20share%20availability%20and%20pricing."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book Dammam → Riyadh
                    </a>
                </div>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'How far is Dammam from Riyadh?',
                                a: 'Dammam is approximately 400 km from Riyadh by road — roughly 4–4.5 hours on Highway 40. This is one of Saudi Arabia\'s most used intercity highways, well maintained with petrol stations and rest stops.',
                            },
                            {
                                q: 'How much does a private car from Dammam to Riyadh cost?',
                                a: 'A private car from Dammam to Riyadh costs approximately SAR 600–900 depending on vehicle type. Toyota Camry: SAR 600–700. GMC Yukon XL: SAR 750–900. All rates are fixed — agreed before departure.',
                            },
                            {
                                q: 'Is there a bus from Dammam to Riyadh?',
                                a: 'Yes. SAPTCO operates coach services between Dammam and Riyadh. The journey takes approximately 5–6 hours. Tickets cost approximately SAR 80–120 per person from the Dammam bus terminal.',
                            },
                            {
                                q: 'Should I fly or drive from Dammam to Riyadh?',
                                a: 'A domestic flight takes 1 hour but requires 2+ hours at each airport for check-in and baggage. Total door-to-door time is often 3.5–5 hours — similar to a private car. For families or groups of 3+, a private car is usually cheaper and more convenient.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-4">
                                <h3 className="font-semibold text-sm mb-2">{item.q}</h3>
                                <p className="speakable-answer text-sm text-muted-foreground">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">More Eastern Province Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/routes/dammam-riyadh/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Dammam → Riyadh route page</div>
                            <div className="text-muted-foreground text-xs mt-1">Book your private car transfer</div>
                        </Link>
                        <Link href="/services/taxi-in-dammam/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Dammam</div>
                            <div className="text-muted-foreground text-xs mt-1">All Eastern Province routes</div>
                        </Link>
                        <Link href="/blog/dammam-to-bahrain-private-car/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Dammam to Bahrain by private car</div>
                            <div className="text-muted-foreground text-xs mt-1">Causeway crossing guide</div>
                        </Link>
                        <Link href="/dammam-airport-taxi/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Dammam Airport (DMM) transfers</div>
                            <div className="text-muted-foreground text-xs mt-1">Airport pickup — Eastern Province</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} />
            </main>
        </>
    );
}
