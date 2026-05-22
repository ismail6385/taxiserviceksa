import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'How to Get Around Tabuk as a Tourist — Transport Guide 2026',
    description: 'Complete guide to getting around Tabuk as a tourist. Uber, Careem, private driver, car rental — what works, what doesn\'t, and honest prices.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/how-to-get-around-tabuk-as-a-tourist/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/how-to-get-around-tabuk-as-a-tourist/',
            'ar': 'https://taxiserviceksa.com/blog/how-to-get-around-tabuk-as-a-tourist/',
            'x-default': 'https://taxiserviceksa.com/blog/how-to-get-around-tabuk-as-a-tourist/',
        },
    },
    openGraph: {
        title: 'How to Get Around Tabuk as a Tourist — Transport Guide 2026',
        description: 'Everything a tourist needs to know about transport in Tabuk: apps, private drivers, car rental, and getting to NEOM and AlUla.',
        url: 'https://taxiserviceksa.com/blog/how-to-get-around-tabuk-as-a-tourist/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Get Around Tabuk as a Tourist — Transport Guide 2026',
    description: 'Tourist transport guide for Tabuk: ride apps, private drivers, car rental, city rides, and intercity travel to NEOM and AlUla.',
    author: { '@type': 'Person', name: 'Taxi Service KSA Editorial Team' },
    publisher: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
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
            name: 'Is Tabuk easy to get around as a tourist?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tabuk is a spread-out city and not walkable for most sightseeing. You need transport for everything. Uber and Careem work for city rides. For the airport, long-distance routes (NEOM, AlUla), or night travel, a pre-booked private driver is more reliable. There is no metro or tram system.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there public transport in Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tabuk has very limited public transport. There are some local bus routes but they are not practical for tourists — routes are limited, schedules are infrequent, and stops are not clearly marked in English. Most visitors rely on Uber, Careem, or pre-booked private drivers.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much does a taxi cost in Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A city ride in Tabuk via Uber or Careem costs SAR 15–50 depending on distance. A pre-booked private driver for a half-day in the city costs SAR 150–250. Traditional metered taxis are rare in Tabuk — most transport is app-based or pre-booked.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do I need a car to visit Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'You do not need your own car for Tabuk city sightseeing — Uber and Careem cover the main areas. However, if you plan to visit NEOM, AlUla, Haql, or any destination outside the city, you will need either a rental car (with international driving licence) or a private hired driver.',
            },
        },
    ],
};

export default function HowToGetAroundTabukPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; Getting Around &rsaquo; Tourist Guide</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        How to Get Around Tabuk as a Tourist — Transport Guide 2026
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 6 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>🚗 <strong>City rides:</strong> Uber &amp; Careem work — SAR 15–50 per ride</li>
                        <li>✈️ <strong>Airport:</strong> Pre-book a private transfer (Uber unreliable at TUU)</li>
                        <li>🏗 <strong>NEOM / AlUla:</strong> Private driver only — no apps cover these routes</li>
                        <li>🚌 <strong>Public bus:</strong> Exists but not practical for tourists</li>
                        <li>🚶 <strong>Walking:</strong> Not viable — city is spread out</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p>
                        Tabuk is a large, spread-out city in northwestern Saudi Arabia. It is not a walking city — attractions are far apart and the summer heat makes outdoor walking brutal. But transport is easy once you understand your options. Here is an honest breakdown of every way to get around Tabuk as a tourist.
                    </p>
                </section>

                {/* Transport overview */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Transport Options in Tabuk — Overview</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Option</th>
                                    <th className="border px-3 py-2 text-left">City rides</th>
                                    <th className="border px-3 py-2 text-left">Airport</th>
                                    <th className="border px-3 py-2 text-left">NEOM/AlUla</th>
                                    <th className="border px-3 py-2 text-left">Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { opt: 'Uber / Careem', city: '✅ Good', airport: '⚠️ Variable', intercity: '❌ No', cost: 'SAR 15–50' },
                                    { opt: 'Pre-booked private driver', city: '✅ Excellent', airport: '✅ Excellent', intercity: '✅ Yes', cost: 'SAR 60–900+' },
                                    { opt: 'Car rental', city: '✅ Good', airport: '✅ Available', intercity: '✅ With IDP', cost: 'SAR 150–600/day' },
                                    { opt: 'Public bus', city: '⚠️ Limited', airport: '❌ No', intercity: '❌ No', cost: 'SAR 3–10' },
                                    { opt: 'Walking', city: '❌ Not viable', airport: '❌ No', intercity: '❌ No', cost: 'Free' },
                                ].map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.opt}</td>
                                        <td className="border px-3 py-2">{row.city}</td>
                                        <td className="border px-3 py-2">{row.airport}</td>
                                        <td className="border px-3 py-2">{row.intercity}</td>
                                        <td className="border px-3 py-2">{row.cost}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* City rides */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Getting Around Tabuk City</h2>
                    <div className="space-y-4 text-sm">
                        <div className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">Uber &amp; Careem — best for city hops</h3>
                            <p className="text-muted-foreground mb-2">Both apps work well within central Tabuk during daytime. Open the app, request a ride, and a driver arrives in 5–10 minutes. Fare is displayed before you confirm — no meter surprises.</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-muted rounded p-2"><strong>Hotel → Tabuk Castle:</strong> SAR 20–30</div>
                                <div className="bg-muted rounded p-2"><strong>Hotel → Mall of Tabuk:</strong> SAR 25–40</div>
                                <div className="bg-muted rounded p-2"><strong>City centre → Airport:</strong> SAR 35–60</div>
                                <div className="bg-muted rounded p-2"><strong>Cross-city ride:</strong> SAR 30–50</div>
                            </div>
                        </div>

                        <div className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">Private driver for the day</h3>
                            <p className="text-muted-foreground mb-2">If you want to visit multiple attractions without waiting for Uber each time, book a driver for a half-day or full day. Fixed price, English-speaking, driver waits between stops.</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-muted rounded p-2"><strong>Half day (4 hrs):</strong> SAR 150–200</div>
                                <div className="bg-muted rounded p-2"><strong>Full day (8 hrs):</strong> SAR 250–350</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key attractions distances */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Distance from City Centre to Key Attractions</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Attraction</th>
                                    <th className="border px-3 py-2 text-left">Distance</th>
                                    <th className="border px-3 py-2 text-left">Uber approx.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { place: 'Tabuk Castle (Fort)', dist: '2 km', uber: 'SAR 15–20' },
                                    { place: 'Tabuk Museum', dist: '3 km', uber: 'SAR 18–25' },
                                    { place: 'Mall of Tabuk', dist: '6 km', uber: 'SAR 25–35' },
                                    { place: 'Al Disah Valley', dist: '80 km', uber: 'Not available — hire driver' },
                                    { place: 'Tabuk Airport (TUU)', dist: '14 km', uber: 'SAR 35–55' },
                                    { place: 'NEOM region', dist: '190 km', uber: 'Not available — hire driver' },
                                    { place: 'AlUla', dist: '330 km', uber: 'Not available — hire driver' },
                                ].map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.place}</td>
                                        <td className="border px-3 py-2">{row.dist}</td>
                                        <td className="border px-3 py-2">{row.uber}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Tips */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Practical Tips for Getting Around Tabuk</h2>
                    <div className="space-y-3 text-sm">
                        {[
                            { tip: 'Download Uber and Careem before landing', detail: 'Set up your account and add a payment method before you arrive. Both apps work with international cards.' },
                            { tip: 'Arabic address helps a lot', detail: 'Many drivers in Tabuk have limited English. Having your destination in Arabic on Google Maps makes communication smooth.' },
                            { tip: 'Pre-book airport transfers always', detail: 'Uber availability at TUU is unreliable. Any airport journey — arrival or departure — should be pre-booked with a private driver.' },
                            { tip: 'Avoid peak prayer times', detail: 'Transport demand spikes before and after Friday prayers (around 12–2pm). Book rides slightly before or after these windows.' },
                            { tip: 'Cash is widely accepted', detail: 'Both Uber and Careem accept cash payments in Saudi Arabia. Keep SAR 50–100 on you as backup.' },
                            { tip: 'Night rides: pre-book', detail: 'After midnight, Uber driver availability in Tabuk drops significantly. If you have a late dinner or event, arrange your return in advance.' },
                        ].map((item, i) => (
                            <div key={i} className="border-l-4 border-primary/30 pl-4 py-1">
                                <div className="font-semibold">{item.tip}</div>
                                <div className="text-muted-foreground">{item.detail}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Book a Private Driver in Tabuk</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        City tours, airport transfers, or intercity journeys to NEOM and AlUla. Fixed prices, English-speaking drivers, available 24/7.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20driver%20in%20Tabuk.%20Please%20share%20availability%20and%20pricing."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book a Tabuk Driver
                    </a>
                </div>

                {/* FAQ */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'Is Tabuk easy to get around as a tourist?', a: 'Tabuk is a spread-out city and not walkable for most sightseeing. You need transport for everything. Uber and Careem work for city rides. For the airport, long-distance routes (NEOM, AlUla), or night travel, a pre-booked private driver is more reliable. There is no metro or tram system.' },
                            { q: 'Is there public transport in Tabuk?', a: 'Tabuk has very limited public transport. There are some local bus routes but they are not practical for tourists — routes are limited, schedules are infrequent, and stops are not clearly marked in English. Most visitors rely on Uber, Careem, or pre-booked private drivers.' },
                            { q: 'How much does a taxi cost in Tabuk?', a: 'A city ride in Tabuk via Uber or Careem costs SAR 15–50 depending on distance. A pre-booked private driver for a half-day in the city costs SAR 150–250. Traditional metered taxis are rare in Tabuk — most transport is app-based or pre-booked.' },
                            { q: 'Do I need a car to visit Tabuk?', a: 'You do not need your own car for Tabuk city sightseeing — Uber and Careem cover the main areas. However, if you plan to visit NEOM, AlUla, Haql, or any destination outside the city, you will need either a rental car (with international driving licence) or a private hired driver.' },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-4">
                                <h3 className="font-semibold text-sm mb-2">{item.q}</h3>
                                <p className="speakable-answer text-sm text-muted-foreground">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">More Tabuk Transport Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/blog/is-there-uber-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Is there Uber in Tabuk?</div>
                            <div className="text-muted-foreground text-xs mt-1">Uber vs Careem, airport, intercity</div>
                        </Link>
                        <Link href="/blog/tabuk-airport-tuu-arrivals-guide" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk Airport arrivals guide</div>
                            <div className="text-muted-foreground text-xs mt-1">Immigration, transport from TUU</div>
                        </Link>
                        <Link href="/blog/how-to-get-to-neom-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to NEOM</div>
                            <div className="text-muted-foreground text-xs mt-1">190 km, private driver guide</div>
                        </Link>
                        <Link href="/blog/how-to-get-from-tabuk-to-alula" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to AlUla</div>
                            <div className="text-muted-foreground text-xs mt-1">330 km, transport options</div>
                        </Link>
                        <Link href="/services/taxi-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">Full fleet, all routes</div>
                        </Link>
                        <Link href="/booking" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Book your driver</div>
                            <div className="text-muted-foreground text-xs mt-1">Instant quote, 24/7</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </main>
        </>
    );
}
