import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Car Rental at Tabuk Airport — Is It Worth It? 2026 Guide',
    description: 'Should you rent a car at Tabuk Airport (TUU)? Honest guide covering rental prices, what you need, road conditions, and when a private driver is better value.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/car-rental-tabuk-airport-worth-it/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/car-rental-tabuk-airport-worth-it/',
            'ar': 'https://taxiserviceksa.com/blog/car-rental-tabuk-airport-worth-it/',
            'x-default': 'https://taxiserviceksa.com/blog/car-rental-tabuk-airport-worth-it/',
        },
    },
    openGraph: {
        title: 'Car Rental at Tabuk Airport — Is It Worth It? 2026 Guide',
        description: 'Rental car vs hired driver at Tabuk Airport. Price comparison, licence requirements, NEOM road rules, and honest verdict for tourists.',
        url: 'https://taxiserviceksa.com/blog/car-rental-tabuk-airport-worth-it/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Car Rental at Tabuk Airport — Is It Worth It? 2026 Guide',
    description: 'Honest guide to renting a car at Tabuk Airport (TUU): prices, licence requirements, fuel situation for NEOM routes, and when hiring a driver is better.',
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
            name: 'Is there a car rental at Tabuk Airport?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, several car rental companies have desks at Tabuk Airport (TUU) arrivals hall, including Hertz, Budget, Avis, and local Saudi companies. You can also pre-book online before your trip for better availability and pricing.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do I need an international driving licence to rent a car in Saudi Arabia?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Foreign visitors need an International Driving Permit (IDP) in addition to their national driving licence to rent and drive a car in Saudi Arabia. The IDP must be obtained in your home country before travel. GCC country licence holders are exempt.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much does car rental cost at Tabuk Airport?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Car rental at Tabuk Airport costs SAR 150–250 per day for a compact/sedan, SAR 250–400 per day for an SUV, and SAR 400–600 for a 4WD or large SUV. Prices vary by company and season. International insurance is included but check the excess.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I drive a rental car to NEOM from Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can drive a rental car toward the NEOM region on the public highway (Route 55). However, you cannot enter active NEOM construction zones. Ensure the rental company permits long-distance driving and that you have a full tank — fuel stations are very limited in the NEOM corridor.',
            },
        },
    ],
};

const scenarios = [
    {
        scenario: 'Visiting only Tabuk city',
        rent: 'Worth considering',
        driver: 'Not necessary',
        verdict: 'Either works — Uber/Careem also fine for city rides',
        color: 'text-amber-600',
    },
    {
        scenario: 'Day trip to NEOM coastal area',
        rent: 'Possible but risky (no fuel)',
        driver: 'Best option',
        verdict: 'Hire a driver — no fuel stations in NEOM zone',
        color: 'text-green-700',
    },
    {
        scenario: 'Day trip to AlUla / Hegra',
        rent: 'Works (fill up in Tayma)',
        driver: 'Convenient',
        verdict: 'Either works — driver lets you rest on return',
        color: 'text-amber-600',
    },
    {
        scenario: 'Multi-day road trip (Tabuk + NEOM + AlUla)',
        rent: 'Good option',
        driver: 'Also available multi-day',
        verdict: 'Rental gives more flexibility for multi-day trips',
        color: 'text-green-700',
    },
    {
        scenario: 'Group of 4+ people',
        rent: 'Need large vehicle',
        driver: 'SUV or minivan available',
        verdict: 'Driver often cheaper per-person for groups',
        color: 'text-green-700',
    },
    {
        scenario: 'Late night airport arrival',
        rent: 'Desk may be closed',
        driver: '24/7 available',
        verdict: 'Pre-book a private driver for night arrivals',
        color: 'text-green-700',
    },
];

export default function CarRentalTabukAirportPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; Airport &rsaquo; Car Rental Guide</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Car Rental at Tabuk Airport — Is It Worth It? (2026)
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 5 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>✅ <strong>Rental desks at TUU:</strong> Yes — Hertz, Budget, Avis + local companies</li>
                        <li>📋 <strong>Requirement:</strong> International Driving Permit (IDP) + passport</li>
                        <li>💰 <strong>Price:</strong> SAR 150–600/day depending on vehicle</li>
                        <li>⛽ <strong>Fuel warning:</strong> Very limited stations on NEOM and desert routes</li>
                        <li>🚗 <strong>Verdict:</strong> Good for multi-day independent trips; private driver better for airport + intercity</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p>
                        Tabuk Airport has car rental desks in the arrivals hall. But whether renting is the right choice depends entirely on where you&apos;re going, how long you&apos;re staying, and whether you have an international driving licence. This guide gives you an honest answer.
                    </p>
                </section>

                {/* What you need */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">What You Need to Rent a Car in Saudi Arabia</h2>
                    <div className="space-y-3">
                        {[
                            {
                                req: 'Valid passport',
                                detail: 'Original passport required — a photo is not sufficient.',
                                required: true,
                            },
                            {
                                req: 'Saudi tourist visa',
                                detail: 'Your valid e-visa. Standard tourist visa allows car rental.',
                                required: true,
                            },
                            {
                                req: 'International Driving Permit (IDP)',
                                detail: 'Required for all non-GCC licence holders. Must be obtained before travel in your home country. Available from automobile clubs (AA, AAA, ADAC, etc.).',
                                required: true,
                            },
                            {
                                req: 'National driving licence',
                                detail: 'Your home country driving licence — carry alongside the IDP.',
                                required: true,
                            },
                            {
                                req: 'Credit card',
                                detail: 'For security deposit. Most companies require a card in the driver\'s name.',
                                required: true,
                            },
                            {
                                req: 'Age minimum',
                                detail: 'Usually 21–25 depending on the company and vehicle class.',
                                required: false,
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-3 border rounded-lg p-3 text-sm">
                                <span className={`text-lg shrink-0 ${item.required ? 'text-green-600' : 'text-amber-500'}`}>
                                    {item.required ? '✅' : 'ℹ️'}
                                </span>
                                <div>
                                    <div className="font-semibold">{item.req}</div>
                                    <div className="text-muted-foreground text-xs mt-0.5">{item.detail}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Prices */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Car Rental Prices at TUU (2026)</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Vehicle type</th>
                                    <th className="border px-3 py-2 text-left">Examples</th>
                                    <th className="border px-3 py-2 text-left">Per day</th>
                                    <th className="border px-3 py-2 text-left">Best for</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { type: 'Economy / compact', ex: 'Yaris, Accent', price: 'SAR 150–200', for: 'City driving only' },
                                    { type: 'Sedan', ex: 'Camry, Sonata', price: 'SAR 200–280', for: 'City + highway' },
                                    { type: 'Midsize SUV', ex: 'Fortuner, Prado', price: 'SAR 280–400', for: 'Highway + desert roads' },
                                    { type: 'Large SUV / 4WD', ex: 'GMC Yukon, Land Cruiser', price: 'SAR 400–600', for: 'NEOM, AlUla, rough terrain' },
                                    { type: 'Minivan', ex: 'Hiace, H1', price: 'SAR 350–500', for: 'Groups of 6–8' },
                                ].map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.type}</td>
                                        <td className="border px-3 py-2 text-muted-foreground">{row.ex}</td>
                                        <td className="border px-3 py-2">{row.price}</td>
                                        <td className="border px-3 py-2">{row.for}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Prices include basic insurance. Excess (deductible) varies — check before signing. Pre-booking online is usually 15–25% cheaper than desk rates.</p>
                </section>

                {/* Scenarios */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Rent or Hire a Driver? By Journey Type</h2>
                    <div className="space-y-2">
                        {scenarios.map((s, i) => (
                            <div key={i} className="border rounded-lg p-3 text-sm">
                                <div className="font-semibold mb-1">{s.scenario}</div>
                                <div className="grid grid-cols-3 gap-2 text-xs">
                                    <div><span className="text-muted-foreground">Rent: </span>{s.rent}</div>
                                    <div><span className="text-muted-foreground">Driver: </span>{s.driver}</div>
                                    <div className={`font-medium ${s.color}`}>{s.verdict}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Fuel warning */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Critical: Fuel Situation on Tabuk Routes</h2>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm">
                        <p className="font-semibold text-red-800 mb-2">Read this before driving to NEOM or AlUla</p>
                        <ul className="space-y-2 text-red-700 list-disc ml-4">
                            <li><strong>Tabuk → NEOM (190 km):</strong> No fuel stations in the NEOM construction corridor. Fill up completely in Tabuk before leaving — there is nowhere to refuel.</li>
                            <li><strong>Tabuk → AlUla (330 km):</strong> Fuel available at Al Bad (85 km) and Tayma (230 km). Fill up at both stops — do not assume you can find a station.</li>
                            <li><strong>Rental cars:</strong> Many companies have restrictions on how far you can drive from the rental city. Confirm the policy before booking if you plan to drive to NEOM or AlUla.</li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Skip the rental — book a private driver</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        No licence worries, no fuel stress, no speed camera fines. A private driver from Tabuk Airport to your destination is fixed price and often comparable to car rental once you factor in insurance, fuel, and fines.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20am%20arriving%20at%20Tabuk%20Airport%20and%20need%20a%20private%20driver.%20Please%20share%20availability%20and%20prices."
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
                            {
                                q: 'Is there a car rental at Tabuk Airport?',
                                a: 'Yes, several car rental companies have desks at Tabuk Airport (TUU) arrivals hall, including Hertz, Budget, Avis, and local Saudi companies. You can also pre-book online before your trip for better availability and pricing.',
                            },
                            {
                                q: 'Do I need an international driving licence to rent a car in Saudi Arabia?',
                                a: 'Yes. Foreign visitors need an International Driving Permit (IDP) in addition to their national driving licence to rent and drive a car in Saudi Arabia. The IDP must be obtained in your home country before travel. GCC country licence holders are exempt.',
                            },
                            {
                                q: 'How much does car rental cost at Tabuk Airport?',
                                a: 'Car rental at Tabuk Airport costs SAR 150–250 per day for a compact/sedan, SAR 250–400 per day for an SUV, and SAR 400–600 for a 4WD or large SUV. Prices vary by company and season.',
                            },
                            {
                                q: 'Can I drive a rental car to NEOM from Tabuk?',
                                a: 'You can drive a rental car toward the NEOM region on the public highway (Route 55). However, you cannot enter active NEOM construction zones. Ensure the rental company permits long-distance driving and that you have a full tank — fuel stations are very limited in the NEOM corridor.',
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
                        <Link href="/blog/tabuk-airport-tuu-arrivals-guide" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">TUU arrivals guide</div>
                            <div className="text-muted-foreground text-xs mt-1">Immigration, baggage, transport options</div>
                        </Link>
                        <Link href="/blog/how-to-get-from-tabuk-airport-to-city" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">TUU → Tabuk city centre</div>
                            <div className="text-muted-foreground text-xs mt-1">All options compared, hotel distances</div>
                        </Link>
                        <Link href="/blog/how-to-get-to-neom-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">How to get to NEOM from Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">190 km, no fuel en route, checkpoints</div>
                        </Link>
                        <Link href="/blog/how-to-get-from-tabuk-to-alula" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">How to get from Tabuk to AlUla</div>
                            <div className="text-muted-foreground text-xs mt-1">330 km, fuel stops, route guide</div>
                        </Link>
                        <Link href="/tabuk-airport-taxi" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk Airport taxi — all routes</div>
                            <div className="text-muted-foreground text-xs mt-1">Private transfer prices from TUU</div>
                        </Link>
                        <Link href="/booking" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Book a private driver</div>
                            <div className="text-muted-foreground text-xs mt-1">Fixed prices, English-speaking</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </main>
        </>
    );
}
