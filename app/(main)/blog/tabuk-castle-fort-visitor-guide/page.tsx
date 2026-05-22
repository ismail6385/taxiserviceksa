import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Tabuk Castle (Fort) — Visitor Guide 2026 | History, Hours & Transport',
    description: 'Complete visitor guide to Tabuk Castle (Tabuk Fort). History, opening hours, ticket price, how to get there, and what to see at this Ottoman-era landmark.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/tabuk-castle-fort-visitor-guide/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/tabuk-castle-fort-visitor-guide/',
            'ar': 'https://taxiserviceksa.com/blog/tabuk-castle-fort-visitor-guide/',
            'x-default': 'https://taxiserviceksa.com/blog/tabuk-castle-fort-visitor-guide/',
        },
    },
    openGraph: {
        title: 'Tabuk Castle (Fort) — Visitor Guide 2026',
        description: 'Ottoman-era Tabuk Castle — opening hours, tickets, history, and how to get there from anywhere in the city.',
        url: 'https://taxiserviceksa.com/blog/tabuk-castle-fort-visitor-guide/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tabuk Castle (Fort) — Visitor Guide 2026',
    description: 'Visitor guide to Tabuk Castle: history, opening hours, what to see, nearby attractions, and transport from hotels and the airport.',
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
            name: 'What are the opening hours of Tabuk Castle?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tabuk Castle is generally open Saturday to Thursday, 9am to 12pm and 4pm to 8pm. It is typically closed on Fridays. Hours can change during Ramadan and public holidays. Check with the Saudi Heritage Commission or call ahead before visiting.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is Tabuk Castle free to enter?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tabuk Castle is free to enter. There is no ticket charge for visiting the castle and its grounds. A small museum inside may have a nominal entry fee — confirm on arrival.',
            },
        },
        {
            '@type': 'Question',
            name: 'How old is Tabuk Castle?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tabuk Castle dates to the 14th century in its original form, with major renovations during the Ottoman period in the 16th–17th centuries. It served as a rest stop on the Hajj route from the Levant to Makkah and was later used as a residence during the early Saudi state.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I get to Tabuk Castle from the city centre?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tabuk Castle is located in the old city area, about 2 km from the main commercial centre. An Uber or Careem ride costs SAR 15–20. You can also walk from nearby hotels in the old city area if the weather is cool (October–March).',
            },
        },
    ],
};

export default function TabukCastleVisitorGuidePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; Sightseeing &rsaquo; Tabuk Castle</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Tabuk Castle (Fort) — Visitor Guide 2026
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 5 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>🏰 <strong>What:</strong> Ottoman-era fort, 14th–17th century</li>
                        <li>⏰ <strong>Hours:</strong> Sat–Thu, 9am–12pm &amp; 4pm–8pm (closed Fri)</li>
                        <li>🎟 <strong>Entry:</strong> Free</li>
                        <li>📍 <strong>Location:</strong> Old city area, ~2 km from city centre</li>
                        <li>⏱ <strong>Time needed:</strong> 45–90 minutes</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p>
                        Tabuk Castle is the most important historical landmark in the city — a well-restored Ottoman-era fort that served for centuries as a rest stop on the Hajj pilgrimage route from the Levant to Makkah. It is compact, free to enter, and gives excellent insight into the region&apos;s history. For any tourist visiting Tabuk, it is the essential first stop.
                    </p>
                </section>

                {/* Quick info */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Key Information</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <tbody>
                                {[
                                    { label: 'Full name', value: 'Tabuk Castle (Qal\'at Tabuk / Tabuk Fort)' },
                                    { label: 'Built', value: '14th century — renovated by Ottomans in the 16th–17th c.' },
                                    { label: 'Opening hours', value: 'Sat–Thu: 9am–12pm and 4pm–8pm' },
                                    { label: 'Closed', value: 'Fridays, and during prayer times' },
                                    { label: 'Entry fee', value: 'Free' },
                                    { label: 'Time needed', value: '45–90 minutes' },
                                    { label: 'Location', value: 'Old city area, central Tabuk' },
                                    { label: 'Dress code', value: 'Modest — covered shoulders and knees' },
                                    { label: 'Photography', value: 'Permitted in grounds and exterior' },
                                ].map((row) => (
                                    <tr key={row.label} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium bg-muted w-36">{row.label}</td>
                                        <td className="border px-3 py-2">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* History */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">History of Tabuk Castle</h2>
                    <div className="space-y-3 text-sm text-muted-foreground">
                        <p>
                            The castle dates to the 14th century in its original form, though the structure visible today reflects significant Ottoman renovation in the 16th and 17th centuries. Tabuk sat on the critical Hajj road from Damascus and the Levant south to Makkah — the castle provided water, shelter, and security for the thousands of pilgrims who passed through annually.
                        </p>
                        <p>
                            The Prophet Muhammad (peace be upon him) is recorded to have passed through the Tabuk area during the Tabuk Campaign of 630 CE — one of the largest military expeditions in early Islamic history. The castle commemorates this connection with exhibits and signage.
                        </p>
                        <p>
                            In the early 20th century, the castle served as a residence and administrative building during the formation of the modern Saudi state. It was restored in the 1990s and again in the 2010s by the Saudi Heritage Commission and is now open as a museum.
                        </p>
                    </div>
                </section>

                {/* What to see */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">What to See Inside Tabuk Castle</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        {[
                            { name: 'Main courtyard', desc: 'The central open courtyard with the restored well — historically the water source for pilgrims. Good for photography.' },
                            { name: 'Mosque within the fort', desc: 'A small mosque inside the castle walls, believed to date to the early Islamic period. Visitors can enter outside prayer times.' },
                            { name: 'Castle tower & ramparts', desc: 'Climb the tower for views over the old city area. The defensive walls and cannon positions are well-preserved.' },
                            { name: 'Historical museum rooms', desc: 'Several rooms display artefacts, maps, and photographs showing Tabuk\'s role on the Hajj route and in early Saudi history.' },
                            { name: 'Arabic inscriptions', desc: 'Ottoman-era Arabic calligraphy and inscriptions on the main gate and interior walls. Photographed by many visitors.' },
                            { name: 'Old city surroundings', desc: 'The castle sits in the old quarter — the streets around it have traditional architecture worth exploring on foot.' },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-3">
                                <div className="font-semibold mb-1">{item.name}</div>
                                <div className="text-muted-foreground text-xs">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How to get there */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">How to Get to Tabuk Castle</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">From</th>
                                    <th className="border px-3 py-2 text-left">Distance</th>
                                    <th className="border px-3 py-2 text-left">Uber/Careem</th>
                                    <th className="border px-3 py-2 text-left">Walk</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { from: 'City centre hotels', dist: '1–3 km', uber: 'SAR 15–25', walk: '15–30 min (cool weather only)' },
                                    { from: 'Tabuk Airport (TUU)', dist: '16 km', uber: 'SAR 40–60', walk: 'Not viable' },
                                    { from: 'Mall of Tabuk', dist: '5 km', uber: 'SAR 20–30', walk: 'Not recommended' },
                                    { from: 'North Tabuk hotels', dist: '7–10 km', uber: 'SAR 25–40', walk: 'Not viable' },
                                ].map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.from}</td>
                                        <td className="border px-3 py-2">{row.dist}</td>
                                        <td className="border px-3 py-2">{row.uber}</td>
                                        <td className="border px-3 py-2">{row.walk}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Tips */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Visitor Tips</h2>
                    <div className="space-y-2 text-sm">
                        {[
                            { tip: 'Go early morning or evening', detail: 'The 9am–12pm slot is best — before midday heat. The 4pm–8pm slot is pleasant in cooler months and great for golden-hour photography.' },
                            { tip: 'Combine with old city walk', detail: 'The area around the castle has traditional old Tabuk architecture. Explore on foot in October–March when the weather is cool.' },
                            { tip: 'Dress modestly', detail: 'As a heritage site with religious significance, both men and women should cover shoulders and knees. Women do not need to wear abaya but modest clothing is expected.' },
                            { tip: 'No food or drinks inside', detail: 'Do not bring food or drinks into the castle proper. The surrounding area has small cafes nearby.' },
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
                    <h3 className="font-semibold mb-2">Need a Driver for Tabuk Sightseeing?</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        Half-day and full-day city tours from your hotel. Tabuk Castle, Al Disah Valley, and all main attractions in one comfortable trip.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20want%20a%20driver%20for%20Tabuk%20city%20sightseeing.%20Please%20share%20options%20and%20prices."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book Tabuk City Tour
                    </a>
                </div>

                {/* FAQ */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'What are the opening hours of Tabuk Castle?', a: 'Tabuk Castle is generally open Saturday to Thursday, 9am to 12pm and 4pm to 8pm. It is typically closed on Fridays. Hours can change during Ramadan and public holidays.' },
                            { q: 'Is Tabuk Castle free to enter?', a: 'Tabuk Castle is free to enter. There is no ticket charge for visiting the castle and its grounds. A small museum inside may have a nominal entry fee — confirm on arrival.' },
                            { q: 'How old is Tabuk Castle?', a: 'Tabuk Castle dates to the 14th century in its original form, with major renovations during the Ottoman period in the 16th–17th centuries. It served as a rest stop on the Hajj route from the Levant to Makkah.' },
                            { q: 'How do I get to Tabuk Castle from the city centre?', a: 'Tabuk Castle is located in the old city area, about 2 km from the main commercial centre. An Uber or Careem ride costs SAR 15–20. You can also walk from nearby hotels in the old city area if the weather is cool (October–March).' },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-4">
                                <h3 className="font-semibold text-sm mb-2">{item.q}</h3>
                                <p className="speakable-answer text-sm text-muted-foreground">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">More Tabuk Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/blog/how-to-get-around-tabuk-as-a-tourist" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">How to get around Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">Uber, private driver, full transport guide</div>
                        </Link>
                        <Link href="/blog/al-disah-valley-tabuk-how-to-visit" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Al Disah Valley — visitor guide</div>
                            <div className="text-muted-foreground text-xs mt-1">Tabuk&apos;s most dramatic natural attraction</div>
                        </Link>
                        <Link href="/blog/how-to-get-to-neom-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to NEOM guide</div>
                            <div className="text-muted-foreground text-xs mt-1">190 km northwest, transport options</div>
                        </Link>
                        <Link href="/tabuk-airport-taxi" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk Airport transfers</div>
                            <div className="text-muted-foreground text-xs mt-1">Arrive at TUU and get to the city</div>
                        </Link>
                        <Link href="/services/taxi-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">City and intercity, full fleet</div>
                        </Link>
                        <Link href="/booking" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Book your driver</div>
                            <div className="text-muted-foreground text-xs mt-1">Fixed prices, English-speaking</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </main>
        </>
    );
}
