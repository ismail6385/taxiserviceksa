import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'How Long Is the Drive from Madinah to AlUla? (2026 Complete Guide)',
    description: 'Madinah to AlUla is 330 km — about 3.5 hours by private car on Route 15 and Route 70. What the drive is like, rest stops, and how to book a private transfer.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/how-long-is-drive-from-madinah-to-alula/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/how-long-is-drive-from-madinah-to-alula/',
            'ar': 'https://taxiserviceksa.com/blog/how-long-is-drive-from-madinah-to-alula/',
            'x-default': 'https://taxiserviceksa.com/blog/how-long-is-drive-from-madinah-to-alula/',
        },
    },
    openGraph: {
        title: 'Madinah to AlUla Drive Time & Distance (2026)',
        description: '330 km, 3.5 hours on well-maintained desert highway. What to expect on the Madinah to AlUla drive, where to stop, and why private car is the only option.',
        url: 'https://taxiserviceksa.com/blog/how-long-is-drive-from-madinah-to-alula/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Long Is the Drive from Madinah to AlUla? (2026 Complete Guide)',
    description: 'Distance and drive time from Madinah to AlUla: 330 km, approximately 3.5 hours by private car. Covers the route, rest stops, and transport options.',
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
            name: 'How long does it take to drive from Madinah to AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The drive from Madinah to AlUla takes approximately 3.5 hours. The distance is about 330 km via Route 15 south to Khaybar, then Route 70 west into AlUla. The road is well-paved with light traffic. You may add 30–45 minutes for prayer stops and rest breaks.',
            },
        },
        {
            '@type': 'Question',
            name: 'How far is Madinah from AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Madinah to AlUla is approximately 330 km by road. The most direct route goes south on Route 15 (towards Khaybar/Tabuk direction), then west on Route 70 into AlUla. There is no shorter route — this is the standard highway used by all private transfers.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there public transport from Madinah to AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No regular public transport covers the Madinah to AlUla route. There is no intercity bus or train service on this corridor. A private car transfer or rental car are the only practical options for tourists and visitors.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the road like from Madinah to AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Madinah to AlUla road (Route 15 then Route 70) is a well-maintained paved highway through the Hejaz mountains and desert landscape. The scenery is dramatic — volcanic rock, date palm valleys, and ancient Nabataean terrain as you approach AlUla. The road is safe but remote — petrol up before leaving Madinah.',
            },
        },
    ],
};

export default function HowLongIsDriveFromMadinahToAlulaPage() {
    const stops = [
        { location: 'Madinah (departure)', km: '0 km', note: 'Fuel up — petrol stations sparse on highway' },
        { location: 'Khaybar town', km: '~145 km', note: 'Good rest stop — 1.5 hrs from Madinah. Petrol, food, mosques.' },
        { location: 'Hazm Al-Jalamid junction', km: '~200 km', note: 'Route 70 turn-off towards AlUla' },
        { location: 'Al-Ula city entrance', km: '~310 km', note: 'AlUla Heritage Village area' },
        { location: 'Hegra / Habitas / Banyan Tree', km: '~330–340 km', note: 'UNESCO site and luxury resorts — 3.5 hrs total' },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Madinah &rsaquo; AlUla &rsaquo; Drive Guide</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        How Long Is the Drive from Madinah to AlUla? (2026 Complete Guide)
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated June 2026 &bull; 5 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR — Quick Answer</p>
                    <ul className="space-y-1 text-sm">
                        <li>📏 <strong>Distance:</strong> ~330 km</li>
                        <li>⏱️ <strong>Drive time:</strong> ~3.5 hours (without stops)</li>
                        <li>🛣️ <strong>Route:</strong> Route 15 south → Route 70 west into AlUla</li>
                        <li>⛽ <strong>Fuel up:</strong> In Madinah — petrol stations sparse on highway</li>
                        <li>🚗 <strong>Transport:</strong> Private car only — no public transport on this corridor</li>
                        <li>✅ <strong>Book in advance:</strong> WhatsApp +966 553 270 009</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p className="speakable-answer">
                        The drive from Madinah to AlUla takes approximately <strong>3.5 hours</strong> covering <strong>330 km</strong>. The route heads south from Madinah on Route 15 through the Hejaz mountain terrain, passing through Khaybar, before turning west on Route 70 into the AlUla valley. It is a well-paved, lightly trafficked highway — one of the most scenic drives in the Kingdom, passing through volcanic rock formations and ancient Nabataean landscape as you approach AlUla.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-4">Madinah to AlUla: Route Breakdown</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Location</th>
                                    <th className="border px-3 py-2 text-left">Distance from Madinah</th>
                                    <th className="border px-3 py-2 text-left">Notes</th>
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

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">What the Drive Is Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        {[
                            { title: 'Road quality', desc: 'Route 15 and Route 70 are well-maintained paved highways. The surface is smooth and suitable for all vehicle types including regular sedans.' },
                            { title: 'Traffic', desc: 'Very light outside Madinah city limits. The highway is not congested. You will have long stretches of near-empty road through the desert.' },
                            { title: 'Scenery', desc: 'Spectacular. Harrat Khaybar volcanic field, ancient lava fields, sandstone cliffs, and the famous AlUla rock formations. Many visitors rate it as one of the most dramatic drives in Saudi Arabia.' },
                            { title: 'Petrol & stops', desc: 'Fuel up in Madinah before departing. Khaybar town (~145 km) has a reliable petrol station and food. After Khaybar, stops become very infrequent until AlUla.' },
                            { title: 'Mobile coverage', desc: 'Coverage is patchy between Khaybar and AlUla. Download offline maps before departure. Google Maps or Waze work in populated areas.' },
                            { title: 'Best time to drive', desc: 'Early morning (before 9am) or evening (after 5pm) avoids the peak Saudi afternoon heat. The drive is comfortable at night but road lighting is minimal after Khaybar.' },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-3">
                                <div className="font-semibold text-sm mb-1">{item.title}</div>
                                <div className="text-muted-foreground text-xs">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Why There Is No Public Transport on This Route</h2>
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                        <p>
                            Unlike the Madinah–Jeddah or Jeddah–Riyadh corridors, the Madinah to AlUla route has no regular SAPTCO bus service, no train, and no shared taxi system. AlUla is a destination that Saudi Arabia has deliberately developed as a premium heritage tourism site — the Royal Commission for AlUla (RCU) has invested heavily in resorts and attractions but ground transport from Madinah remains private car only.
                        </p>
                        <p className="mt-3">
                            Uber and Careem do not offer intercity trips. A pre-booked private car transfer or a rental car are the two realistic options for the Madinah to AlUla journey.
                        </p>
                    </div>
                </section>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Book Your Madinah to AlUla Transfer</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        Door-to-door private car from Madinah city or Madinah Airport (MED) to AlUla Heritage Village, Hegra, Habitas, Banyan Tree, or any AlUla resort. GMC Yukon XL recommended for families. Book 24 hours ahead.
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
                                q: 'How long does it take to drive from Madinah to AlUla?',
                                a: 'The drive from Madinah to AlUla takes approximately 3.5 hours. The distance is about 330 km via Route 15 south to Khaybar, then Route 70 west into AlUla. You may add 30–45 minutes for prayer stops and rest breaks.',
                            },
                            {
                                q: 'How far is Madinah from AlUla?',
                                a: 'Madinah to AlUla is approximately 330 km by road. The most direct route goes south on Route 15 towards Khaybar, then west on Route 70 into AlUla.',
                            },
                            {
                                q: 'Is there public transport from Madinah to AlUla?',
                                a: 'No regular public transport covers the Madinah to AlUla route. There is no intercity bus or train. A private car transfer or rental car are the only practical options.',
                            },
                            {
                                q: 'What is the road like from Madinah to AlUla?',
                                a: 'Route 15 then Route 70 is a well-maintained paved highway through spectacular desert and mountain landscape. The road is safe but remote — petrol up before leaving Madinah and plan a stop in Khaybar.',
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
                            <div className="text-muted-foreground text-xs mt-1">Private car, fixed rate, door to door</div>
                        </Link>
                        <Link href="/blog/how-to-get-from-madinah-to-alula/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">How to get from Madinah to AlUla</div>
                            <div className="text-muted-foreground text-xs mt-1">All transport options compared</div>
                        </Link>
                        <Link href="/blog/best-places-to-visit-alula-guide/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Best places to visit in AlUla</div>
                            <div className="text-muted-foreground text-xs mt-1">Hegra, Elephant Rock, Dadan &amp; more</div>
                        </Link>
                        <Link href="/routes/tabuk-alula/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to AlUla route</div>
                            <div className="text-muted-foreground text-xs mt-1">Alternative approach to AlUla from north</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} />
            </main>
        </>
    );
}
