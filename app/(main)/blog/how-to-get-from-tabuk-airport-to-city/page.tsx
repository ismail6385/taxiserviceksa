import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'How to Get from Tabuk Airport to City Centre — All Options',
    description: 'Getting from Tabuk Airport (TUU) to city centre: private transfer, rental car, Uber. 14 km, 15–20 minutes. Prices, tips, and what to avoid.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/how-to-get-from-tabuk-airport-to-city/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/how-to-get-from-tabuk-airport-to-city/',
            'ar': 'https://taxiserviceksa.com/blog/how-to-get-from-tabuk-airport-to-city/',
            'x-default': 'https://taxiserviceksa.com/blog/how-to-get-from-tabuk-airport-to-city/',
        },
    },
    openGraph: {
        title: 'How to Get from Tabuk Airport to City Centre — All Options',
        description: 'Tabuk Airport to city centre is 14 km. Your options: pre-booked transfer, Uber, car rental. Prices, tips, and honest recommendations.',
        url: 'https://taxiserviceksa.com/blog/how-to-get-from-tabuk-airport-to-city/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Get from Tabuk Airport to City Centre — All Options',
    description: 'Complete guide to getting from TUU to Tabuk city: private transfers, Uber, car rental, and practical tips for first-time visitors.',
    author: { '@type': 'Person', name: 'Taxi Service KSA Editorial Team' },
    publisher: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
    datePublished: '2026-05-22',
    dateModified: '2026-05-22',
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
            name: 'How far is Tabuk Airport from the city?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tabuk Airport (TUU) is approximately 14 km from Tabuk city centre. The drive takes 15 to 20 minutes by private car or taxi.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much is a taxi from Tabuk Airport to city centre?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A pre-booked private transfer from Tabuk Airport to the city centre costs SAR 60–100 depending on the vehicle. Uber or Careem rides, when available, cost SAR 35–60. There are no metered taxis at TUU.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a bus from Tabuk Airport to the city?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. There is no regular public bus service from Tabuk Airport (TUU) to Tabuk city centre. Your options are private transfer, car rental, or Uber/Careem.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I get Uber from Tabuk Airport?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Uber and Careem are available in Tabuk, but pickup at the airport can be inconsistent. You may need to request the ride while still inside the terminal and wait for the driver to arrive. A pre-booked private transfer with a meet-and-greet is more reliable.',
            },
        },
    ],
};

const hotels = [
    { name: 'Shaza Tabuk', area: 'City centre', dist: '13 km', time: '15 min', price: 'SAR 70–100' },
    { name: 'Radisson Blu Tabuk', area: 'City centre', dist: '14 km', time: '18 min', price: 'SAR 75–105' },
    { name: 'Movenpick Tabuk', area: 'North Tabuk', dist: '16 km', time: '20 min', price: 'SAR 80–110' },
    { name: 'Tabuk Park Hotel', area: 'City centre', dist: '13 km', time: '15 min', price: 'SAR 65–90' },
    { name: 'Al Marwa Hotel', area: 'South Tabuk', dist: '18 km', time: '22 min', price: 'SAR 85–115' },
];

export default function TabukAirportToCityPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; Airport &rsaquo; City Transfer</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        How to Get from Tabuk Airport to City Centre
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 4 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>📍 <strong>Distance:</strong> 14 km from TUU to city centre</li>
                        <li>⏱ <strong>Travel time:</strong> 15–20 minutes</li>
                        <li>💰 <strong>Pre-booked transfer:</strong> SAR 60–100</li>
                        <li>📱 <strong>Uber/Careem:</strong> Available but inconsistent at airport</li>
                        <li>🚌 <strong>Public bus:</strong> Does not exist on this route</li>
                    </ul>
                </div>

                {/* Quick numbers */}
                <section className="mb-8">
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { value: '14 km', label: 'Airport to city' },
                            { value: '15–20 min', label: 'Drive time' },
                            { value: 'SAR 60–100', label: 'Transfer price' },
                        ].map((s) => (
                            <div key={s.label} className="bg-muted rounded-lg p-4 text-center">
                                <div className="text-lg font-bold text-primary">{s.value}</div>
                                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Options comparison */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">All Transport Options Compared</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Option</th>
                                    <th className="border px-3 py-2 text-left">Cost</th>
                                    <th className="border px-3 py-2 text-left">Wait time</th>
                                    <th className="border px-3 py-2 text-left">Reliability</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-green-50">
                                    <td className="border px-3 py-2 font-medium">Pre-booked private transfer</td>
                                    <td className="border px-3 py-2">SAR 60–100</td>
                                    <td className="border px-3 py-2">0 min (driver waiting)</td>
                                    <td className="border px-3 py-2 text-green-700 font-medium">Excellent</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2 font-medium">Uber / Careem</td>
                                    <td className="border px-3 py-2">SAR 35–60</td>
                                    <td className="border px-3 py-2">5–20 min</td>
                                    <td className="border px-3 py-2 text-amber-600 font-medium">Variable</td>
                                </tr>
                                <tr className="bg-muted/30">
                                    <td className="border px-3 py-2 font-medium">Car rental (airport desks)</td>
                                    <td className="border px-3 py-2">SAR 200–350/day</td>
                                    <td className="border px-3 py-2">15–30 min (paperwork)</td>
                                    <td className="border px-3 py-2 text-green-700 font-medium">Good</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2 font-medium">Public bus</td>
                                    <td className="border px-3 py-2">—</td>
                                    <td className="border px-3 py-2">—</td>
                                    <td className="border px-3 py-2 text-red-600 font-medium">Not available</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Pre-booked */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Option 1: Pre-Booked Private Transfer (Recommended)</h2>
                    <p className="text-sm text-muted-foreground mb-3">
                        Book online or via WhatsApp before your flight. Your driver meets you in the arrivals hall holding a name board. Fixed price, no surprises, air-conditioned vehicle. Best option for:
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground list-disc ml-5 mb-4">
                        <li>Families or groups with luggage</li>
                        <li>Late night or early morning arrivals</li>
                        <li>Onward journeys to NEOM or AlUla (driver can take you straight there)</li>
                        <li>First-time visitors unfamiliar with the city</li>
                    </ul>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20transfer%20from%20Tabuk%20Airport%20(TUU)%20to%20the%20city.%20Please%20share%20price%20and%20availability."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book TUU → City Transfer
                    </a>
                </section>

                {/* Uber */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Option 2: Uber or Careem</h2>
                    <p className="text-sm text-muted-foreground mb-3">
                        Both Uber and Careem operate in Tabuk. However, airport pickup is inconsistent — sometimes drivers are available immediately, sometimes you wait 15–20 minutes or need to walk to the airport road to get a match.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
                        <p className="font-semibold text-amber-800 mb-1">Tips for using Uber at TUU:</p>
                        <ul className="space-y-1 text-amber-700 list-disc ml-4">
                            <li>Request the ride while still in the baggage hall to give the driver time to arrive</li>
                            <li>Pin your pickup to the main airport exit, not the terminal entrance</li>
                            <li>Have the Arabic name of your destination ready (Google Maps address)</li>
                            <li>Surge pricing can apply at busy flight times — check price before confirming</li>
                        </ul>
                    </div>
                </section>

                {/* Hotel distances */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">TUU to Major Tabuk Hotels — Distances &amp; Prices</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Hotel</th>
                                    <th className="border px-3 py-2 text-left">Area</th>
                                    <th className="border px-3 py-2 text-left">Distance</th>
                                    <th className="border px-3 py-2 text-left">Drive</th>
                                    <th className="border px-3 py-2 text-left">Transfer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hotels.map((h, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{h.name}</td>
                                        <td className="border px-3 py-2">{h.area}</td>
                                        <td className="border px-3 py-2">{h.dist}</td>
                                        <td className="border px-3 py-2">{h.time}</td>
                                        <td className="border px-3 py-2">{h.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'How far is Tabuk Airport from the city?',
                                a: 'Tabuk Airport (TUU) is approximately 14 km from Tabuk city centre. The drive takes 15 to 20 minutes by private car or taxi.',
                            },
                            {
                                q: 'How much is a taxi from Tabuk Airport to city centre?',
                                a: 'A pre-booked private transfer from Tabuk Airport to the city centre costs SAR 60–100 depending on the vehicle. Uber or Careem rides, when available, cost SAR 35–60. There are no metered taxis at TUU.',
                            },
                            {
                                q: 'Is there a bus from Tabuk Airport to the city?',
                                a: 'No. There is no regular public bus service from Tabuk Airport (TUU) to Tabuk city centre. Your options are private transfer, car rental, or Uber/Careem.',
                            },
                            {
                                q: 'Can I get Uber from Tabuk Airport?',
                                a: 'Uber and Careem are available in Tabuk, but pickup at the airport can be inconsistent. You may need to request the ride while still inside the terminal and wait for the driver to arrive. A pre-booked private transfer with a meet-and-greet is more reliable.',
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
                    <h2 className="text-xl font-bold mb-4">More Tabuk Airport Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/blog/tabuk-airport-tuu-arrivals-guide" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">TUU arrivals guide</div>
                            <div className="text-muted-foreground text-xs mt-1">Immigration, baggage, full step-by-step</div>
                        </Link>
                        <Link href="/tabuk-airport-taxi" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk Airport taxi — all routes</div>
                            <div className="text-muted-foreground text-xs mt-1">TUU to NEOM, AlUla, Haql and more</div>
                        </Link>
                        <Link href="/blog/is-there-uber-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Is there Uber in Tabuk?</div>
                            <div className="text-muted-foreground text-xs mt-1">Uber, Careem, apps, alternatives</div>
                        </Link>
                        <Link href="/blog/how-to-get-to-neom-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">TUU → NEOM guide</div>
                            <div className="text-muted-foreground text-xs mt-1">190 km from airport, 2–2.5 hrs</div>
                        </Link>
                        <Link href="/services/taxi-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">City rides, intercity, full fleet</div>
                        </Link>
                        <Link href="/booking" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Book online</div>
                            <div className="text-muted-foreground text-xs mt-1">Instant quote, meet &amp; greet</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </main>
        </>
    );
}
