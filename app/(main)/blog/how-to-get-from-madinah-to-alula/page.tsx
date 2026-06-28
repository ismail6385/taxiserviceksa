import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'How to Get from Madinah to AlUla (2026) | All Transport Options',
    description: 'Getting from Madinah to AlUla: private car (3.5 hrs), rental car, or fly into ULH. No bus or train exists. Full guide with prices and booking tips for 2026.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/how-to-get-from-madinah-to-alula/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/how-to-get-from-madinah-to-alula/',
            'ar': 'https://taxiserviceksa.com/blog/how-to-get-from-madinah-to-alula/',
            'x-default': 'https://taxiserviceksa.com/blog/how-to-get-from-madinah-to-alula/',
        },
    },
    openGraph: {
        title: 'How to Get from Madinah to AlUla — 2026 Transport Guide',
        description: 'Private car (330 km, 3.5 hrs), rental car, or domestic flight into AlUla Airport (ULH). No public bus or train. Options, prices, and what to book in advance.',
        url: 'https://taxiserviceksa.com/blog/how-to-get-from-madinah-to-alula/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Get from Madinah to AlUla (2026) | All Transport Options',
    description: 'Complete transport guide from Madinah to AlUla. Private car, rental car, and flight options compared with prices, travel times, and booking tips for 2026 visitors.',
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
            name: 'How do I get from Madinah to AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'There are three options to get from Madinah to AlUla: (1) Pre-booked private car — 330 km, 3.5 hours, SAR 400–600. (2) Rental car — same drive time, SAR 150–300 per day plus fuel. (3) Domestic flight — fly from Prince Mohammad Airport (MED) to AlUla International Airport (ULH), about 1 hour. There is no bus or train on this route.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a bus from Madinah to AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. There is no regular bus service from Madinah to AlUla as of 2026. SAPTCO does not cover this route. The only ground transport options are private car or rental car. Domestic flights from MED (Madinah) to ULH (AlUla) are an alternative.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I fly from Madinah to AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Domestic flights operate between Prince Mohammad Airport (MED) in Madinah and AlUla International Airport (ULH). Flight time is approximately 50–60 minutes. Saudia and Flynas both serve this route. Check current schedules as frequency varies seasonally. You will still need transport from ULH airport to your AlUla resort.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much does a private taxi from Madinah to AlUla cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A private car from Madinah to AlUla costs approximately SAR 400–600 for a Toyota Camry or similar sedan. GMC Yukon XL for families costs SAR 550–750. Prices are fixed — agreed before departure. The journey is 330 km and takes approximately 3.5 hours.',
            },
        },
    ],
};

export default function HowToGetFromMadinahToAlulaPage() {
    const options = [
        {
            mode: '🚗 Pre-booked Private Car',
            time: '3.5 hours',
            cost: 'SAR 400–750 total',
            pros: [
                'Door to door — hotel in Madinah to resort in AlUla',
                'Departure time is yours to choose',
                'Stop at Khaybar, prayer stops, rest breaks on request',
                'Fixed price — no meter',
                'Driver handles navigation on remote highway',
                'Can depart from Madinah Airport (MED)',
            ],
            cons: ['Must book in advance (24 hours+)', 'Longer journey than flight'],
            verdict: '✅ Best for families, groups, and Umrah pilgrims continuing to AlUla',
        },
        {
            mode: '✈️ Domestic Flight (MED → ULH)',
            time: '50–60 min flight + airport time',
            cost: 'SAR 150–350 per person',
            pros: ['Shortest travel time', 'Good views of Hejaz landscape'],
            cons: [
                'Limited flight frequency — check schedules',
                'Need transport to/from both airports',
                'Baggage restrictions',
                'Cost multiplies per person for families',
            ],
            verdict: '⚠️ Good for solo travellers and couples — not ideal for families with luggage',
        },
        {
            mode: '🚗 Rental Car (self-drive)',
            time: '3.5 hours',
            cost: 'SAR 150–300/day + fuel (~SAR 50)',
            pros: ['Maximum flexibility in AlUla', 'Explore at your own pace'],
            cons: [
                'International driving licence required for non-Saudi nationals',
                'Navigation on remote highway without local knowledge',
                'Must return the car',
                'Saudi driving rules and speed cameras',
            ],
            verdict: '⚠️ Good if you plan to explore independently in AlUla for multiple days',
        },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Madinah &rsaquo; AlUla &rsaquo; Transport Guide</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        How to Get from Madinah to AlUla (2026): All Transport Options Compared
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated June 2026 &bull; 6 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR — Key Options</p>
                    <ul className="space-y-1 text-sm">
                        <li>🚗 <strong>Private car:</strong> 330 km, 3.5 hrs, SAR 400–750 (door to door)</li>
                        <li>✈️ <strong>Domestic flight:</strong> MED → ULH, ~1 hr, SAR 150–350 per person</li>
                        <li>🚗 <strong>Rental car:</strong> Same 3.5 hr drive, SAR 150–300/day + fuel</li>
                        <li>🚌 <strong>Bus:</strong> ❌ No bus service on this route</li>
                        <li>🚆 <strong>Train:</strong> ❌ No train service on this route</li>
                        <li>✅ <strong>Recommended for families:</strong> Pre-booked private car</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p className="speakable-answer">
                        Getting from Madinah to AlUla requires either a <strong>private car (330 km, 3.5 hours)</strong>, a <strong>domestic flight from Prince Mohammad Airport (MED) to AlUla Airport (ULH)</strong>, or a <strong>rental car</strong>. There is no public bus, shared taxi, or train on this corridor as of 2026. AlUla has positioned itself as a premium destination — access is private transport only.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">All Transport Options: Madinah to AlUla</h2>
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

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Madinah to AlUla: Private Car Prices (2026)</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Vehicle</th>
                                    <th className="border px-3 py-2 text-left">Passengers</th>
                                    <th className="border px-3 py-2 text-left">Price (SAR)</th>
                                    <th className="border px-3 py-2 text-left">Best for</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { v: 'Toyota Camry', pax: '1–3', price: 'SAR 400–500', note: 'Solo or couple' },
                                    { v: 'Genesis G80', pax: '1–3', price: 'SAR 500–600', note: 'Executive traveller' },
                                    { v: 'GMC Yukon XL', pax: '1–7', price: 'SAR 550–750', note: 'Best for families' },
                                    { v: 'Hyundai Staria VIP', pax: '1–7', price: 'SAR 500–650', note: 'Comfortable family van' },
                                    { v: 'Toyota Hiace', pax: '1–11', price: 'SAR 650–900', note: 'Large groups' },
                                ].map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.v}</td>
                                        <td className="border px-3 py-2">{row.pax}</td>
                                        <td className="border px-3 py-2">{row.price}</td>
                                        <td className="border px-3 py-2 text-muted-foreground text-xs">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Prices are estimates as of June 2026. All rates are fixed — agreed before departure. Pickup from Madinah city or Prince Mohammad Airport (MED).</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Travelling from Madinah After Umrah</h2>
                    <div className="prose prose-sm max-w-none text-muted-foreground space-y-3">
                        <p>
                            Many visitors combine Madinah (Umrah/Hajj ziyarat) with an AlUla heritage tour. This is an increasingly popular itinerary — the AlUla valley, Hegra UNESCO World Heritage Site, and luxury resorts make it a natural extension of a Saudi trip.
                        </p>
                        <p>
                            If you are departing from a Madinah hotel near Masjid al-Nabawi, our driver will collect you directly. For pilgrims departing from Prince Mohammad Airport (MED), we can meet you at arrivals or curbside for the onward transfer to AlUla.
                        </p>
                        <p>
                            <strong>Recommended itinerary:</strong> Madinah → Khaybar rest stop (historic Jewish fortress ruins — worth a brief stop if your schedule allows) → AlUla. A 3.5-hour journey that passes through some of the most historically significant terrain in the Hejaz.
                        </p>
                    </div>
                </section>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Book Your Madinah to AlUla Transfer</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        Door-to-door from Madinah city or MED Airport to AlUla. GMC Yukon XL for families. Driver experienced on the Route 15 / Route 70 highway. Book 24 hours in advance.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20private%20car%20from%20Madinah%20to%20AlUla.%20Please%20share%20availability%20and%20pricing."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book Madinah → AlUla
                    </a>
                </div>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'How do I get from Madinah to AlUla?',
                                a: 'Three options: (1) Pre-booked private car — 330 km, 3.5 hours, SAR 400–750. (2) Domestic flight from MED to ULH — about 1 hour plus airport time. (3) Rental car — same 3.5 hour drive. There is no bus or train on this route.',
                            },
                            {
                                q: 'Is there a bus from Madinah to AlUla?',
                                a: 'No. There is no regular bus service from Madinah to AlUla as of 2026. SAPTCO does not cover this route. The only ground transport options are private car or rental car.',
                            },
                            {
                                q: 'Can I fly from Madinah to AlUla?',
                                a: 'Yes. Domestic flights operate between Prince Mohammad Airport (MED) in Madinah and AlUla International Airport (ULH). Flight time is approximately 50–60 minutes. Check Saudia and Flynas for current schedules as frequency varies seasonally.',
                            },
                            {
                                q: 'How much does a private taxi from Madinah to AlUla cost?',
                                a: 'A private car from Madinah to AlUla costs approximately SAR 400–500 for a Toyota Camry. GMC Yukon XL for families costs SAR 550–750. Prices are fixed — agreed before departure. The journey is 330 km, approximately 3.5 hours.',
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
                    <h2 className="text-xl font-bold mb-4">Related AlUla Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/routes/madinah-alula/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Madinah to AlUla — Book Transfer</div>
                            <div className="text-muted-foreground text-xs mt-1">Private car, fixed rate, 24/7</div>
                        </Link>
                        <Link href="/blog/how-long-is-drive-from-madinah-to-alula/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">How long is the drive Madinah to AlUla?</div>
                            <div className="text-muted-foreground text-xs mt-1">Route details, stops, road conditions</div>
                        </Link>
                        <Link href="/blog/best-places-to-visit-alula-guide/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Best places to visit in AlUla</div>
                            <div className="text-muted-foreground text-xs mt-1">Hegra, Elephant Rock, Dadan &amp; more</div>
                        </Link>
                        <Link href="/blog/how-to-get-from-tabuk-to-alula/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to AlUla guide</div>
                            <div className="text-muted-foreground text-xs mt-1">Alternative approach from north</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} />
            </main>
        </>
    );
}
