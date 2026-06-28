import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'How to Get from Dammam Airport to City (DMM 2026) | All Options Compared',
    description: 'Getting from King Fahd International Airport to Dammam city, Al Khobar, or Dhahran. Private transfer, Uber, taxi — all options with prices and times.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/how-to-get-from-dammam-airport-to-city/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/how-to-get-from-dammam-airport-to-city/',
            'ar': 'https://taxiserviceksa.com/blog/how-to-get-from-dammam-airport-to-city/',
            'x-default': 'https://taxiserviceksa.com/blog/how-to-get-from-dammam-airport-to-city/',
        },
    },
    openGraph: {
        title: 'How to Get from Dammam Airport to City (DMM) | All Options',
        description: 'Private transfer, metered taxi, Uber/Careem from King Fahd Airport to Dammam, Al Khobar, Dhahran, and Bahrain. Prices, distances, and what to book in advance.',
        url: 'https://taxiserviceksa.com/blog/how-to-get-from-dammam-airport-to-city/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Get from Dammam Airport to City (DMM) | All Options Compared',
    description: 'Complete guide to transport from King Fahd International Airport (DMM) to Dammam, Al Khobar, Dhahran, and Bahrain. Prices, distances, and booking tips.',
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
            name: 'How far is Dammam Airport from the city centre?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'King Fahd International Airport (DMM) is approximately 35 km from Dammam city centre — about 30–40 minutes by car. It is also 40 km from Al Khobar (35–45 min) and 30 km from Dhahran/Aramco HQ (25–35 min). The airport is located northwest of Dammam, between the city and Riyadh.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much does a taxi from Dammam Airport to the city cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A private transfer from Dammam Airport to Dammam city centre or Al Khobar costs approximately SAR 120–180 in a Toyota Camry. Transfers to Dhahran/Aramco cost SAR 130–170. All prices are fixed — agreed before the flight lands. Contact us via WhatsApp for a precise quote.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there Uber at Dammam Airport?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Uber and Careem operate in the Eastern Province but airport pickup availability at DMM is inconsistent. Surge pricing is common when multiple flights land together. For guaranteed pickup — especially late-night or early-morning arrivals — pre-booking a private transfer is strongly recommended.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I book a private transfer from Dammam Airport?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Book via WhatsApp at +966 553 270 009. Send your flight number, arrival date, number of passengers, and destination. We confirm within 30 minutes and send driver details — name, photo, vehicle plate — before your flight lands. The driver meets you at DMM arrivals with a name sign.',
            },
        },
    ],
};

export default function HowToGetFromDammamAirportToCityPage() {
    const options = [
        {
            name: 'Pre-booked private transfer',
            cost: 'SAR 120–500',
            time: '25–60 min to destination',
            pros: ['Driver waiting at arrivals with name sign', 'Fixed price — no surge', 'Covers Bahrain, Aramco, Jubail', 'Handles all flight times including midnight'],
            cons: ['Must book in advance'],
            best: 'Airport arrivals, Bahrain transfers, corporate visits',
            verdict: '✅ Best for all arrivals',
        },
        {
            name: 'Metered airport taxi',
            cost: 'SAR 100–200 (estimated)',
            time: '25–60 min',
            pros: ['Available without pre-booking', 'Official taxi rank at arrivals'],
            cons: ['Metered — price not fixed', 'May not cover Bahrain or long distances', 'Language barrier common'],
            best: 'Domestic arrivals with standard destinations',
            verdict: '⚠️ Acceptable — but not for Bahrain',
        },
        {
            name: 'Uber / Careem',
            cost: 'SAR 80–180 (surge possible)',
            time: '25–60 min (wait 10–30 min)',
            pros: ['App booking — no cash needed', 'Price estimate upfront'],
            cons: ['Inconsistent availability at DMM', 'Surge pricing when multiple flights land', 'No Bahrain cross-border'],
            best: 'Daytime arrivals — domestic flights only',
            verdict: '⚠️ Risky for early morning/late night',
        },
        {
            name: 'Rental car',
            cost: 'SAR 150–300/day',
            time: 'Counter queue adds 30–60 min',
            pros: ['Full independence'],
            cons: ['Counter queues on busy days', 'Foreign licence restrictions apply', 'Saudi driving in unfamiliar city'],
            best: 'Long stays with confirmed international licence',
            verdict: '⚠️ Only if you know the Eastern Province roads',
        },
    ];

    const destinations = [
        { dest: 'Dammam City Centre', dist: '35 km', time: '30–40 min', price: 'SAR 120–160' },
        { dest: 'Al Khobar City', dist: '40 km', time: '35–45 min', price: 'SAR 130–170' },
        { dest: 'Dhahran / Aramco HQ', dist: '30 km', time: '25–35 min', price: 'SAR 130–170' },
        { dest: 'King Fahd Causeway (Bahrain border)', dist: '60 km', time: '50–60 min', price: 'SAR 300–450' },
        { dest: 'Jubail Industrial City', dist: '95 km', time: '1–1.25 hrs', price: 'SAR 350–500' },
        { dest: 'Riyadh (intercity)', dist: '400 km', time: '4–4.5 hrs', price: 'SAR 600–900' },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Dammam &rsaquo; Airport (DMM) &rsaquo; Transport Guide</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        How to Get from Dammam Airport to City (2026): All Options Compared
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated June 2026 &bull; 6 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR — Key Facts</p>
                    <ul className="space-y-1 text-sm">
                        <li>🛬 <strong>Airport (DMM):</strong> King Fahd International Airport, 35 km northwest of Dammam</li>
                        <li>🏙️ <strong>Dammam city:</strong> 30–40 min, approx SAR 120–160</li>
                        <li>🏙️ <strong>Al Khobar:</strong> 35–45 min, approx SAR 130–170</li>
                        <li>🏭 <strong>Dhahran / Aramco:</strong> 25–35 min, approx SAR 130–170</li>
                        <li>🇧🇭 <strong>Bahrain Causeway:</strong> 50–60 min, approx SAR 300–450 (private car only)</li>
                        <li>🚗 <strong>Best option:</strong> Pre-booked private transfer — driver at arrivals with name sign</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p className="speakable-answer">
                        King Fahd International Airport (IATA: DMM) sits 35 km northwest of Dammam, roughly equidistant between the city centre and Riyadh. It serves the entire Eastern Province — Dammam, Al Khobar, Dhahran, and points towards Bahrain and Jubail. There is no airport metro or bus link. Your four options are: pre-booked private transfer, metered airport taxi, Uber/Careem, or rental car. Here&apos;s which to use and when.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">Distances &amp; Prices from DMM Airport</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Destination</th>
                                    <th className="border px-3 py-2 text-left">Distance</th>
                                    <th className="border px-3 py-2 text-left">Drive Time</th>
                                    <th className="border px-3 py-2 text-left">Private Transfer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {destinations.map((d, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{d.dest}</td>
                                        <td className="border px-3 py-2">{d.dist}</td>
                                        <td className="border px-3 py-2">{d.time}</td>
                                        <td className="border px-3 py-2">{d.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Prices are estimates for Toyota Camry. GMC Yukon XL and other vehicles priced separately. All rates are fixed — no meter.</p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">All Transport Options from DMM Airport</h2>
                    <div className="space-y-5">
                        {options.map((opt, i) => (
                            <div key={i} className="border rounded-xl p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-bold text-base">{opt.name}</h3>
                                    <span className="text-xs font-semibold bg-muted px-2 py-1 rounded">{opt.verdict}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                                    <div><span className="font-semibold">Cost:</span> {opt.cost}</div>
                                    <div><span className="font-semibold">Time:</span> {opt.time}</div>
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
                                <p className="text-xs text-muted-foreground mt-3 border-t pt-2">Best for: {opt.best}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">What Happens at DMM Arrivals</h2>
                    <div className="prose prose-sm max-w-none text-muted-foreground space-y-3">
                        <p>
                            After clearing customs at King Fahd International Airport, you exit into the arrivals hall. For pre-booked transfers, your driver waits inside arrivals holding a name sign. For metered taxis, the official rank is just outside the terminal. Uber and Careem require you to open the app and wait for a driver to accept — this takes longer at the airport than in the city.
                        </p>
                        <p>
                            For <strong>Bahrain-bound passengers</strong>: book your private transfer in advance. There is no reliable app-based cross-border transport. Your driver will know which Causeway lane to use and the typical waiting times at immigration.
                        </p>
                        <p>
                            For <strong>Aramco visitors</strong>: pre-book. Your driver should know the correct visitor entrance at Dhahran compound and the check-in procedure. This is not something a random ride-hailing driver will know.
                        </p>
                    </div>
                </section>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Book Your Dammam Airport Transfer</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        Driver at DMM arrivals with your name sign. Flight tracking included. Fixed rates to Dammam, Al Khobar, Dhahran, Bahrain, and Jubail.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20transfer%20from%20Dammam%20Airport%20(DMM).%20Please%20share%20availability%20and%20pricing."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book DMM Airport Transfer
                    </a>
                </div>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'How far is Dammam Airport from the city centre?',
                                a: 'King Fahd International Airport (DMM) is approximately 35 km from Dammam city centre — about 30–40 minutes by car. It is also 40 km from Al Khobar (35–45 min) and 30 km from Dhahran/Aramco HQ (25–35 min).',
                            },
                            {
                                q: 'How much does a taxi from Dammam Airport to the city cost?',
                                a: 'A private transfer from Dammam Airport to Dammam city centre or Al Khobar costs approximately SAR 120–180 in a Toyota Camry. Transfers to Dhahran/Aramco cost SAR 130–170. All prices are fixed — agreed before the flight lands.',
                            },
                            {
                                q: 'Is there Uber at Dammam Airport?',
                                a: 'Uber and Careem operate in the Eastern Province but airport pickup availability at DMM is inconsistent. Surge pricing is common when multiple flights land together. For guaranteed pickup — especially late-night or early-morning arrivals — pre-booking a private transfer is recommended.',
                            },
                            {
                                q: 'How do I book a private transfer from Dammam Airport?',
                                a: 'Book via WhatsApp at +966 553 270 009. Send your flight number, arrival date, number of passengers, and destination. We confirm within 30 minutes and send driver details before your flight lands. The driver meets you at DMM arrivals with a name sign.',
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
                    <h2 className="text-xl font-bold mb-4">More Dammam Transport Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/dammam-airport-taxi/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Dammam Airport Taxi (DMM)</div>
                            <div className="text-muted-foreground text-xs mt-1">Full airport transfer service — DMM arrivals</div>
                        </Link>
                        <Link href="/blog/is-there-uber-in-dammam/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Is there Uber in Dammam?</div>
                            <div className="text-muted-foreground text-xs mt-1">App comparison — when to use vs. pre-book</div>
                        </Link>
                        <Link href="/routes/dammam-bahrain/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Dammam → Bahrain route</div>
                            <div className="text-muted-foreground text-xs mt-1">King Fahd Causeway, private car only</div>
                        </Link>
                        <Link href="/services/taxi-in-dammam/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Dammam</div>
                            <div className="text-muted-foreground text-xs mt-1">All Eastern Province routes — city to intercity</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} />
            </main>
        </>
    );
}
