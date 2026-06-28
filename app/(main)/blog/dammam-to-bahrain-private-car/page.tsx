import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Dammam to Bahrain by Private Car (2026) | King Fahd Causeway Guide',
    description: 'How to get from Dammam to Bahrain by private car. King Fahd Causeway crossing, drive time, prices (SAR 300–500), and what to know at the border.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/dammam-to-bahrain-private-car/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/dammam-to-bahrain-private-car/',
            'ar': 'https://taxiserviceksa.com/blog/dammam-to-bahrain-private-car/',
            'x-default': 'https://taxiserviceksa.com/blog/dammam-to-bahrain-private-car/',
        },
    },
    openGraph: {
        title: 'Dammam to Bahrain by Private Car — Causeway Guide 2026',
        description: 'Private car from Dammam to Bahrain (Manama) via King Fahd Causeway. 95 km, 1.5–2.5 hours, SAR 300–500. What happens at the border and how to book.',
        url: 'https://taxiserviceksa.com/blog/dammam-to-bahrain-private-car/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dammam to Bahrain by Private Car (2026) | King Fahd Causeway Guide',
    description: 'Complete guide to the Dammam to Bahrain private car journey via King Fahd Causeway. Distance, drive time, prices, border crossing tips, and booking information.',
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
            name: 'How far is Dammam from Bahrain by car?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dammam city to Bahrain (Manama) is approximately 95 km by road, crossing the King Fahd Causeway. The drive itself takes 50–60 minutes. Total journey time including Causeway border formalities is typically 1.5–2.5 hours depending on traffic and immigration queues.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much does it cost to go from Dammam to Bahrain by private car?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A private car from Dammam to Bahrain (Manama) costs approximately SAR 300–500 depending on vehicle type and waiting time at the border. Toyota Camry: SAR 300–380. GMC Yukon XL: SAR 400–500. All prices are fixed — agreed before the journey starts. The price includes Causeway toll fees for the vehicle.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I take Uber from Dammam to Bahrain?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Uber and Careem do not permit cross-border trips. You cannot book an Uber from Dammam to Bahrain. A pre-booked private car service is the only ride-hailing equivalent option for the Dammam to Bahrain Causeway route.',
            },
        },
        {
            '@type': 'Question',
            name: 'What happens at the King Fahd Causeway border?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'At King Fahd Causeway, there are two border checkpoints — Saudi immigration (exit) and Bahraini immigration (entry). Both checkpoints process passports and vehicles. Saudi residents and GCC nationals have faster lanes. Tourists and visitors use general lanes — processing takes 20–60 minutes depending on traffic. Our drivers know the correct lanes for foreign passenger vehicles.',
            },
        },
    ],
};

export default function DammamToBahrainPrivateCarPage() {
    const timeline = [
        { step: '1', label: 'Dammam pickup', detail: 'Driver arrives at your hotel, home, or office in Dammam city or Al Khobar at the agreed time.' },
        { step: '2', label: 'Drive to Causeway (35–60 min)', detail: 'Highway drive from Dammam to the King Fahd Causeway entrance. Smooth road, well-lit highway.' },
        { step: '3', label: 'Saudi exit immigration', detail: 'Passport check and vehicle exit stamp. Usually 10–25 minutes. GCC nationals have fast lanes.' },
        { step: '4', label: 'Cross the Causeway (25 km bridge)', detail: 'The 25 km causeway bridge over the Arabian Gulf. Stunning views on a clear day.' },
        { step: '5', label: 'Bahrain entry immigration', detail: 'Passport check and visa (if required). Most nationalities get visa on arrival. 15–40 minutes.' },
        { step: '6', label: 'Arrival in Bahrain (Manama)', detail: 'Your driver takes you directly to your hotel, business meeting, or destination in Manama or anywhere in Bahrain.' },
    ];

    const prices = [
        { vehicle: 'Toyota Camry', pax: '1–3', price: 'SAR 300–380', note: 'Standard — business trip or couple' },
        { vehicle: 'Genesis G80', pax: '1–3', price: 'SAR 380–450', note: 'Executive — corporate delegation' },
        { vehicle: 'GMC Yukon XL', pax: '1–7', price: 'SAR 400–500', note: 'Best for families and groups' },
        { vehicle: 'Cadillac Escalade', pax: '1–6', price: 'SAR 500–650', note: 'VIP and diplomatic transfers' },
        { vehicle: 'Toyota Hiace (minibus)', pax: '1–11', price: 'SAR 500–700', note: 'Large groups, Aramco teams' },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Dammam &rsaquo; Cross-Border &rsaquo; Bahrain</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Dammam to Bahrain by Private Car (2026): Causeway Guide, Prices &amp; What to Expect
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated June 2026 &bull; 6 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR — Key Facts</p>
                    <ul className="space-y-1 text-sm">
                        <li>📍 <strong>Route:</strong> Dammam → King Fahd Causeway → Bahrain (Manama)</li>
                        <li>📏 <strong>Distance:</strong> ~95 km total (including 25 km bridge)</li>
                        <li>⏱️ <strong>Drive time:</strong> 50–60 min driving + 20–60 min at border = 1.5–2.5 hrs total</li>
                        <li>💰 <strong>Private car cost:</strong> SAR 300–500 depending on vehicle</li>
                        <li>❌ <strong>Uber/Careem:</strong> Not available for cross-border trips</li>
                        <li>✅ <strong>How to book:</strong> WhatsApp +966 553 270 009 — 24 hours advance booking recommended</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p className="speakable-answer">
                        The Dammam to Bahrain crossing via King Fahd Causeway is one of the busiest land border crossings in the Gulf. Thousands of people make this journey daily for work, shopping, and leisure. There is no public transport across the Causeway — it is private cars only. Uber and Careem do not offer cross-border service. A pre-booked private car is the standard option for visitors and expats making this trip.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">Step-by-Step Journey: Dammam to Bahrain</h2>
                    <div className="space-y-4">
                        {timeline.map((step, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">{step.step}</div>
                                <div>
                                    <h3 className="font-semibold text-sm">{step.label}</h3>
                                    <p className="text-xs text-muted-foreground mt-1">{step.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-4">Private Car Prices — Dammam to Bahrain (2026)</h2>
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
                                {prices.map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.vehicle}</td>
                                        <td className="border px-3 py-2">{row.pax}</td>
                                        <td className="border px-3 py-2">{row.price}</td>
                                        <td className="border px-3 py-2 text-muted-foreground text-xs">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Prices are fixed rates (June 2026). Toll fees for the vehicle are included. Waiting time beyond 60 minutes at the border may incur an additional charge.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">King Fahd Causeway Border Crossing — What to Know</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        {[
                            { title: 'Documents needed', desc: 'Valid passport (or GCC national ID). Saudi residents need Iqama. Check Bahrain visa requirements for your nationality — many get visa on arrival.' },
                            { title: 'Toll fees', desc: 'The Causeway charges a toll per vehicle. This is included in our private transfer price. Individual passengers do not pay separate toll.' },
                            { title: 'Border hours', desc: 'The King Fahd Causeway is open 24/7. Busiest times are Thursday afternoon, Friday morning, and public holidays. Expect longer queues during these periods.' },
                            { title: 'Lanes', desc: 'Saudi nationals and GCC residents have dedicated express lanes. Foreign passport holders (tourists, expats on visit visa) use general lanes — longer queues.' },
                            { title: 'What our driver does', desc: 'The driver parks at the checkpoint, accompanies you through the process, handles vehicle documents, and drives you out on the Bahrain side once immigration is cleared.' },
                            { title: 'Return trip', desc: 'If you need a return journey (Bahrain to Dammam), book in advance. We can arrange same-day or next-day return trips.' },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-3">
                                <div className="font-semibold text-sm mb-1">{item.title}</div>
                                <div className="text-muted-foreground text-xs">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Book Dammam to Bahrain Private Car</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        Book at least 24 hours in advance for Bahrain Causeway transfers. GMC Yukon XL recommended for families. Driver experienced with the border crossing.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20private%20car%20from%20Dammam%20to%20Bahrain.%20Please%20share%20availability%20and%20pricing."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book Dammam → Bahrain
                    </a>
                </div>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'How far is Dammam from Bahrain by car?',
                                a: 'Dammam city to Bahrain (Manama) is approximately 95 km by road, crossing the King Fahd Causeway. The drive itself takes 50–60 minutes. Total journey time including Causeway border formalities is typically 1.5–2.5 hours.',
                            },
                            {
                                q: 'How much does it cost to go from Dammam to Bahrain by private car?',
                                a: 'A private car from Dammam to Bahrain costs approximately SAR 300–500 depending on vehicle type. Toyota Camry: SAR 300–380. GMC Yukon XL: SAR 400–500. All prices are fixed — agreed before the journey. Causeway toll for the vehicle is included.',
                            },
                            {
                                q: 'Can I take Uber from Dammam to Bahrain?',
                                a: 'No. Uber and Careem do not permit cross-border trips. A pre-booked private car is the only ride option for Dammam to Bahrain via the Causeway.',
                            },
                            {
                                q: 'What happens at the King Fahd Causeway border?',
                                a: 'There are two border checkpoints — Saudi immigration (exit) and Bahraini immigration (entry). Both process passports and vehicles. Processing takes 20–60 minutes total depending on traffic. Our drivers know the correct lanes for foreign passenger vehicles.',
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
                    <h2 className="text-xl font-bold mb-4">Related Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/routes/dammam-bahrain/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Dammam → Bahrain route page</div>
                            <div className="text-muted-foreground text-xs mt-1">Full route details, vehicles, booking</div>
                        </Link>
                        <Link href="/services/taxi-in-dammam/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Dammam</div>
                            <div className="text-muted-foreground text-xs mt-1">All Eastern Province routes</div>
                        </Link>
                        <Link href="/dammam-airport-taxi/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Dammam Airport (DMM) transfers</div>
                            <div className="text-muted-foreground text-xs mt-1">Airport pickup — Dammam, Al Khobar, Bahrain</div>
                        </Link>
                        <Link href="/blog/is-there-uber-in-dammam/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Is there Uber in Dammam?</div>
                            <div className="text-muted-foreground text-xs mt-1">App limitations for cross-border travel</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} />
            </main>
        </>
    );
}
