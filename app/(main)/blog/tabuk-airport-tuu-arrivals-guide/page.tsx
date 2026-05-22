import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Tabuk Airport (TUU) Arrivals Guide — What to Do When You Land',
    description: 'Complete arrivals guide for Tabuk Airport (TUU). Immigration, baggage, transport options, taxi, car rental, and what to do on arrival in Tabuk.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/tabuk-airport-tuu-arrivals-guide/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/tabuk-airport-tuu-arrivals-guide/',
            'ar': 'https://taxiserviceksa.com/blog/tabuk-airport-tuu-arrivals-guide/',
            'x-default': 'https://taxiserviceksa.com/blog/tabuk-airport-tuu-arrivals-guide/',
        },
    },
    openGraph: {
        title: 'Tabuk Airport (TUU) Arrivals Guide — What to Do When You Land',
        description: 'Step-by-step arrivals guide for Tabuk Regional Airport. Immigration, baggage, taxis, car rental, and how to get to the city or NEOM.',
        url: 'https://taxiserviceksa.com/blog/tabuk-airport-tuu-arrivals-guide/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tabuk Airport (TUU) Arrivals Guide — What to Do When You Land',
    description: 'Step-by-step guide for arriving at Tabuk Regional Airport (TUU): immigration, baggage, transport, taxis, and onward travel to NEOM and AlUla.',
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
            name: 'What is the IATA code for Tabuk Airport?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The IATA code for Tabuk Regional Airport is TUU. It is also known as Prince Sultan bin Abdulaziz Airport or Tabuk Airport.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I get from Tabuk Airport to the city?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tabuk Airport is approximately 14 km from the city centre. A pre-booked private taxi takes 15–20 minutes and costs SAR 60–100. Car rental desks are available in arrivals. There is no public bus from TUU to the city centre.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there Uber at Tabuk Airport?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Uber and Careem operate in Tabuk city but availability at the airport itself is inconsistent. You may need to wait or walk to the main road. A pre-booked private transfer is more reliable for airport pickups.',
            },
        },
        {
            '@type': 'Question',
            name: 'How long does immigration take at Tabuk Airport?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Immigration at TUU is generally fast — 15 to 30 minutes for most international arrivals. The airport is smaller than Riyadh or Jeddah, so queues are shorter. Have your Saudi e-visa QR code, passport, and return ticket ready.',
            },
        },
    ],
};

export default function TabukAirportArrivalsPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; Airport &rsaquo; Arrivals Guide</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Tabuk Airport (TUU) Arrivals Guide — What to Do When You Land
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 5 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>✈️ <strong>Airport code:</strong> TUU (Prince Sultan bin Abdulaziz Airport)</li>
                        <li>🏙 <strong>Distance to city:</strong> 14 km — 15–20 minutes</li>
                        <li>⏱ <strong>Immigration time:</strong> 15–30 minutes (smaller airport, shorter queues)</li>
                        <li>🚗 <strong>Best transport:</strong> Pre-booked private taxi (SAR 60–100)</li>
                        <li>🚌 <strong>Public bus:</strong> Not available from TUU</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p>
                        Tabuk Regional Airport (TUU) is a mid-size regional airport serving northwestern Saudi Arabia. It handles domestic routes from Riyadh, Jeddah, and Madinah, plus a growing number of international connections. If you are visiting for NEOM, AlUla, or the Red Sea coast — this is where you land. Here is exactly what to expect when you arrive.
                    </p>
                </section>

                {/* Airport basics */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">TUU Airport — Key Facts</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <tbody>
                                {[
                                    { label: 'Full name', value: 'Prince Sultan bin Abdulaziz Airport' },
                                    { label: 'IATA code', value: 'TUU' },
                                    { label: 'City', value: 'Tabuk, Northwestern Saudi Arabia' },
                                    { label: 'Distance to city centre', value: '14 km (15–20 min drive)' },
                                    { label: 'Terminal', value: 'Single terminal' },
                                    { label: 'Airlines', value: 'Saudia, flyadeal, flynas + international carriers' },
                                    { label: 'Operating hours', value: '24 hours' },
                                ].map((row) => (
                                    <tr key={row.label} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium bg-muted w-40">{row.label}</td>
                                        <td className="border px-3 py-2">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Step by step */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Step-by-Step: What to Do on Arrival</h2>
                    <div className="space-y-3">
                        {[
                            {
                                step: '1',
                                title: 'Disembark and follow arrivals signs',
                                desc: 'TUU has a single terminal. Follow signs for Arrivals / Immigration. The walk from the gate is short — 5 minutes maximum.',
                            },
                            {
                                step: '2',
                                title: 'Immigration — have these ready',
                                desc: 'Passport, Saudi e-visa (QR code on phone or printed), return/onward ticket, and accommodation address in Saudi Arabia. Queue is usually 15–30 minutes.',
                            },
                            {
                                step: '3',
                                title: 'Baggage claim',
                                desc: 'One baggage hall with multiple carousels. Check the arrivals board for your carousel number. Bags typically arrive 15–25 minutes after landing.',
                            },
                            {
                                step: '4',
                                title: 'Customs',
                                desc: 'Green channel (nothing to declare) for most tourists. Do not carry alcohol, pork products, or items prohibited in Saudi Arabia.',
                            },
                            {
                                step: '5',
                                title: 'Exit to arrivals hall',
                                desc: 'Car rental desks, SIM card kiosks, and your pre-booked driver will be in the arrivals hall. ATMs are available here.',
                            },
                            {
                                step: '6',
                                title: 'Get your SIM card',
                                desc: 'STC, Mobily, and Zain kiosks are in the terminal. A tourist SIM with data costs SAR 30–60. Buy one here before leaving the airport.',
                            },
                        ].map((item) => (
                            <div key={item.step} className="flex gap-4 border rounded-lg p-4 text-sm">
                                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                                    {item.step}
                                </div>
                                <div>
                                    <div className="font-semibold mb-1">{item.title}</div>
                                    <div className="text-muted-foreground">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Transport options */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Transport from TUU to Your Destination</h2>
                    <div className="overflow-x-auto mb-4">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Destination</th>
                                    <th className="border px-3 py-2 text-left">Distance</th>
                                    <th className="border px-3 py-2 text-left">Time</th>
                                    <th className="border px-3 py-2 text-left">Private Car</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { dest: 'Tabuk City Centre', dist: '14 km', time: '15–20 min', price: 'SAR 60–100' },
                                    { dest: 'Tabuk Hotels', dist: '12–18 km', time: '15–25 min', price: 'SAR 70–120' },
                                    { dest: 'NEOM Region', dist: '190 km', time: '2–2.5 hrs', price: 'SAR 450–600' },
                                    { dest: 'AlUla', dist: '345 km', time: '3.5–4 hrs', price: 'SAR 700–900' },
                                    { dest: 'Haql', dist: '290 km', time: '3 hrs', price: 'SAR 550–700' },
                                    { dest: 'Al Wajh', dist: '220 km', time: '2.5 hrs', price: 'SAR 450–600' },
                                ].map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.dest}</td>
                                        <td className="border px-3 py-2">{row.dist}</td>
                                        <td className="border px-3 py-2">{row.time}</td>
                                        <td className="border px-3 py-2">{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Transport modes */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Which Transport Option Is Best?</h2>
                    <div className="space-y-3 text-sm">
                        {[
                            {
                                mode: 'Pre-booked private transfer',
                                verdict: 'Best option',
                                color: 'border-green-400',
                                desc: 'Your driver meets you in arrivals with a name board. Fixed price, no meter, no surge. Available for city and long-distance (NEOM, AlUla). Book before you fly.',
                            },
                            {
                                mode: 'Car rental (at airport)',
                                verdict: 'Good for independent travellers',
                                color: 'border-amber-400',
                                desc: 'Hertz, Budget, and local companies have desks in arrivals. Requires international driving licence. Good if you plan to explore independently. Confirm fuel situation before driving to NEOM/AlUla.',
                            },
                            {
                                mode: 'Uber / Careem',
                                verdict: 'Inconsistent at airport',
                                color: 'border-amber-400',
                                desc: 'Both apps work in Tabuk city but airport pickup availability is unreliable. You may wait 10–20 minutes or need to walk to the main road. Not recommended for heavy luggage.',
                            },
                            {
                                mode: 'Public bus',
                                verdict: 'Not available',
                                color: 'border-red-400',
                                desc: 'There is no regular public bus service from TUU to Tabuk city centre.',
                            },
                        ].map((item) => (
                            <div key={item.mode} className={`border-l-4 ${item.color} pl-4 py-2`}>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-semibold">{item.mode}</span>
                                    <span className="text-xs text-muted-foreground">— {item.verdict}</span>
                                </div>
                                <div className="text-muted-foreground">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Pre-book Your TUU Airport Transfer</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        We offer meet-and-greet transfers from Tabuk Airport to your hotel, NEOM, AlUla, and all destinations in the region. Book before you fly — your driver will be waiting.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20an%20airport%20transfer%20from%20Tabuk%20Airport%20(TUU).%20Please%20share%20availability%20and%20price."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book TUU Airport Transfer
                    </a>
                </div>

                {/* FAQ */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'What is the IATA code for Tabuk Airport?',
                                a: 'The IATA code for Tabuk Regional Airport is TUU. It is also known as Prince Sultan bin Abdulaziz Airport or Tabuk Airport.',
                            },
                            {
                                q: 'How do I get from Tabuk Airport to the city?',
                                a: 'Tabuk Airport is approximately 14 km from the city centre. A pre-booked private taxi takes 15–20 minutes and costs SAR 60–100. Car rental desks are available in arrivals. There is no public bus from TUU to the city centre.',
                            },
                            {
                                q: 'Is there Uber at Tabuk Airport?',
                                a: 'Uber and Careem operate in Tabuk city but availability at the airport itself is inconsistent. You may need to wait or walk to the main road. A pre-booked private transfer is more reliable for airport pickups.',
                            },
                            {
                                q: 'How long does immigration take at Tabuk Airport?',
                                a: 'Immigration at TUU is generally fast — 15 to 30 minutes for most international arrivals. The airport is smaller than Riyadh or Jeddah, so queues are shorter. Have your Saudi e-visa QR code, passport, and return ticket ready.',
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
                    <h2 className="text-xl font-bold mb-4">From TUU — Where Are You Going?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/tabuk-airport-taxi" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk Airport taxi — all routes</div>
                            <div className="text-muted-foreground text-xs mt-1">Full price guide TUU to all destinations</div>
                        </Link>
                        <Link href="/blog/how-to-get-to-neom-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">TUU → NEOM transfer guide</div>
                            <div className="text-muted-foreground text-xs mt-1">190 km, 2–2.5 hrs, checkpoints</div>
                        </Link>
                        <Link href="/blog/how-to-get-from-tabuk-to-alula" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">TUU → AlUla transfer guide</div>
                            <div className="text-muted-foreground text-xs mt-1">330 km, 3.5–4 hrs, route options</div>
                        </Link>
                        <Link href="/blog/is-there-uber-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Is there Uber in Tabuk?</div>
                            <div className="text-muted-foreground text-xs mt-1">Uber, Careem, and alternatives</div>
                        </Link>
                        <Link href="/services/taxi-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">City rides, intercity, full fleet</div>
                        </Link>
                        <Link href="/booking" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Book your transfer</div>
                            <div className="text-muted-foreground text-xs mt-1">Instant quote, meet &amp; greet service</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </main>
        </>
    );
}
