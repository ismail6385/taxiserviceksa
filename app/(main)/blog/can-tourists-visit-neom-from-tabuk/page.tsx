import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Can Tourists Visit NEOM from Tabuk? Access Guide 2026',
    description: 'Find out if tourists can visit NEOM, The Line, Sindalah, and Sharma from Tabuk. What requires a permit, what is open, and how to get there.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/can-tourists-visit-neom-from-tabuk/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/can-tourists-visit-neom-from-tabuk/',
            'ar': 'https://taxiserviceksa.com/blog/can-tourists-visit-neom-from-tabuk/',
            'x-default': 'https://taxiserviceksa.com/blog/can-tourists-visit-neom-from-tabuk/',
        },
    },
    openGraph: {
        title: 'Can Tourists Visit NEOM from Tabuk? Access Guide 2026',
        description: 'NEOM tourist access explained: what is open, what needs a permit, and how to travel from Tabuk by private car.',
        url: 'https://taxiserviceksa.com/blog/can-tourists-visit-neom-from-tabuk/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Can Tourists Visit NEOM from Tabuk? Access Guide 2026',
    description: 'NEOM tourist access rules for 2026: which zones are open, which require permits, and the best way to travel from Tabuk.',
    author: {
        '@type': 'Person',
        name: 'Taxi Service KSA Editorial Team',
    },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        url: 'https://taxiserviceksa.com',
    },
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
            name: 'Can tourists visit NEOM from Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tourists with a valid Saudi visa can travel to the NEOM region and stay in certain areas. However, The Line construction zone and some NEOM sub-projects require a work permit or invitation. Sindalah Island is expected to begin receiving tourists in late 2026. The Sharma area around the Red Sea coast is accessible. Always confirm current access rules before travel as NEOM zones are still actively developing.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do I need a special permit to enter NEOM?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Active NEOM construction zones — including The Line and Oxagon — require a NEOM company permit or worker badge. Tourists cannot enter these zones freely. However, the coastal road through the NEOM region, areas around Haql, and designated tourist zones do not require a special permit beyond a standard Saudi tourist visa.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is Sindalah Island open to tourists?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sindalah Island is NEOM\'s luxury yacht island in the Red Sea. As of early 2026, it is in advanced stages of completion and expected to open to visitors in late 2026 or 2027. Check the NEOM official website for the latest opening timeline.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I get from Tabuk to NEOM as a tourist?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best way is by private car or hired driver from Tabuk. The distance is approximately 190 km (2–2.5 hours) via Route 55 heading northwest. There is no public bus or train service. A private driver from Tabuk costs SAR 450–600 one-way and includes checkpoint support.',
            },
        },
    ],
};

export default function CanTouristsVisitNeomPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <main className="max-w-3xl mx-auto px-4 py-10">

                {/* Hero */}
                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">
                        Tabuk &rsaquo; NEOM &rsaquo; Tourist Access Guide
                    </p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Can Tourists Visit NEOM from Tabuk? Access Guide 2026
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 6 min read</p>
                </header>

                {/* TL;DR */}
                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>✅ <strong>Coastal road &amp; Sharma area</strong> — open to tourists with a Saudi visa</li>
                        <li>🔒 <strong>The Line &amp; Oxagon</strong> — active construction zones, permit required</li>
                        <li>🕐 <strong>Sindalah Island</strong> — opening to visitors expected late 2026/2027</li>
                        <li>🚗 <strong>Only way to get there</strong> — private car or hired driver from Tabuk (~190 km)</li>
                        <li>💰 <strong>Private driver cost</strong> — SAR 450–600 one-way from Tabuk</li>
                    </ul>
                </div>

                {/* Intro */}
                <section className="mb-8 prose prose-sm max-w-none">
                    <p>
                        NEOM is one of the most talked-about megaprojects in the world — but a lot of what you see in promotional videos is still under construction. Before making the 190 km drive from Tabuk, it&apos;s important to know exactly which parts of NEOM you can actually visit as a tourist in 2026, and which zones are restricted to workers and permit holders.
                    </p>
                    <p>
                        This guide breaks down each NEOM sub-project, current access status, and how to plan your trip responsibly.
                    </p>
                </section>

                {/* What is NEOM */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">What Is NEOM — The Different Zones Explained</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        NEOM is not a single city — it&apos;s a region of several distinct projects spread across the northwestern Saudi coastline. Each has a different development status and different tourist access rules.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Zone</th>
                                    <th className="border px-3 py-2 text-left">What It Is</th>
                                    <th className="border px-3 py-2 text-left">Tourist Access</th>
                                    <th className="border px-3 py-2 text-left">Status 2026</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-3 py-2 font-medium">The Line</td>
                                    <td className="border px-3 py-2">Linear city, 170 km long</td>
                                    <td className="border px-3 py-2 text-amber-600">Permit required</td>
                                    <td className="border px-3 py-2">Under construction</td>
                                </tr>
                                <tr className="bg-muted/30">
                                    <td className="border px-3 py-2 font-medium">Sindalah</td>
                                    <td className="border px-3 py-2">Luxury yacht island</td>
                                    <td className="border px-3 py-2 text-amber-600">Opening soon</td>
                                    <td className="border px-3 py-2">Near completion</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2 font-medium">Oxagon</td>
                                    <td className="border px-3 py-2">Industrial floating port city</td>
                                    <td className="border px-3 py-2 text-red-600">No access</td>
                                    <td className="border px-3 py-2">Construction</td>
                                </tr>
                                <tr className="bg-muted/30">
                                    <td className="border px-3 py-2 font-medium">Sharma</td>
                                    <td className="border px-3 py-2">Red Sea beach &amp; nature area</td>
                                    <td className="border px-3 py-2 text-green-600">Open</td>
                                    <td className="border px-3 py-2">Accessible</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2 font-medium">Aqaba Coast Road</td>
                                    <td className="border px-3 py-2">Coastal highway through region</td>
                                    <td className="border px-3 py-2 text-green-600">Open</td>
                                    <td className="border px-3 py-2">Public road</td>
                                </tr>
                                <tr className="bg-muted/30">
                                    <td className="border px-3 py-2 font-medium">NEOM HQ / Sharma City</td>
                                    <td className="border px-3 py-2">Worker city &amp; offices</td>
                                    <td className="border px-3 py-2 text-red-600">Workers only</td>
                                    <td className="border px-3 py-2">Operational</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* The Line */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">The Line — Can Tourists Go?</h2>
                    <p className="text-sm text-muted-foreground mb-3">
                        The Line is NEOM&apos;s most famous project — the 170 km linear mirror-walled city you&apos;ve seen in videos. As of 2026, The Line is still a major construction site in the Hisma Valley area. Tourist access is not permitted without a formal NEOM company invitation or work permit.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
                        <p className="font-semibold text-amber-800 mb-1">What you can do:</p>
                        <ul className="space-y-1 text-amber-700 list-disc ml-4">
                            <li>Drive Route 55 northwest of Tabuk — the road passes through the broader NEOM region</li>
                            <li>View the mountains and desert landscape of the Hisma area from the highway</li>
                            <li>Stop at designated rest areas along the route</li>
                        </ul>
                        <p className="font-semibold text-amber-800 mt-3 mb-1">What you cannot do:</p>
                        <ul className="space-y-1 text-amber-700 list-disc ml-4">
                            <li>Enter the The Line construction zone</li>
                            <li>Take photos near NEOM security checkpoints</li>
                            <li>Drive off Route 55 into restricted areas</li>
                        </ul>
                    </div>
                </section>

                {/* Sindalah */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Sindalah Island — When Will It Open?</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        Sindalah is NEOM&apos;s luxury island destination in the Red Sea, designed for yacht owners and premium tourists. It will include marinas, hotels, beach clubs, and watersports. As of early 2026, it is in an advanced construction phase with selective soft launches expected.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <div className="bg-muted rounded-lg p-4 text-sm text-center">
                            <div className="text-2xl font-bold text-primary mb-1">2026 Q3/Q4</div>
                            <div className="text-muted-foreground">Expected soft opening</div>
                        </div>
                        <div className="bg-muted rounded-lg p-4 text-sm text-center">
                            <div className="text-2xl font-bold text-primary mb-1">Red Sea</div>
                            <div className="text-muted-foreground">Location (Gulf of Aqaba)</div>
                        </div>
                        <div className="bg-muted rounded-lg p-4 text-sm text-center">
                            <div className="text-2xl font-bold text-primary mb-1">Luxury</div>
                            <div className="text-muted-foreground">Yacht-focused destination</div>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        There is no road access to Sindalah — it will be accessible by yacht, private boat, or future ferry service from Sharma or nearby ports. Monitor the official NEOM website for booking information when it opens.
                    </p>
                </section>

                {/* Sharma */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Sharma — The Best Tourist Option Right Now</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        Sharma (also spelled Sharm) is the coastal area within the NEOM region that is most accessible to general visitors. It sits along the Gulf of Aqaba with clear Red Sea waters, coral reefs, and dramatic mountain scenery.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div className="border rounded-lg p-4 text-sm">
                            <h3 className="font-semibold mb-2">What to expect at Sharma</h3>
                            <ul className="space-y-1 text-muted-foreground list-disc ml-4">
                                <li>Red Sea beaches with snorkeling</li>
                                <li>Mountain scenery (Hisma Desert &amp; Tabuk highlands)</li>
                                <li>Very limited tourist infrastructure currently</li>
                                <li>Some basic camping areas</li>
                                <li>Spectacular coastline with near-zero crowds</li>
                            </ul>
                        </div>
                        <div className="border rounded-lg p-4 text-sm">
                            <h3 className="font-semibold mb-2">Practical notes</h3>
                            <ul className="space-y-1 text-muted-foreground list-disc ml-4">
                                <li>No large hotels in Sharma yet (as of 2026)</li>
                                <li>No petrol stations in the NEOM coastal zone — fill up in Tabuk</li>
                                <li>Bring all food, water, and supplies</li>
                                <li>4WD vehicle recommended off main road</li>
                                <li>Mobile signal is limited outside urban areas</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Checkpoints */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Military &amp; NEOM Checkpoints — What to Expect</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        The road from Tabuk to the NEOM region passes through security checkpoints. These are standard procedure in the area due to the scale of construction and national security considerations.
                    </p>
                    <div className="space-y-3">
                        {[
                            {
                                step: '1',
                                title: 'Passport / ID check',
                                desc: 'Officers will ask to see your passport and Saudi visa. Make sure your visa is valid and you have the original document, not just a photo.',
                            },
                            {
                                step: '2',
                                title: 'Purpose of travel',
                                desc: 'Be honest — say you are a tourist visiting the Sharma coastal area or passing through. Do not claim to be a NEOM employee unless you are one.',
                            },
                            {
                                step: '3',
                                title: 'Vehicle inspection',
                                desc: 'Checkpoints may check the vehicle boot. Nothing unusual about this. Professional private drivers know the checkpoint protocol and handle this routinely.',
                            },
                            {
                                step: '4',
                                title: 'Restricted zone signs',
                                desc: 'If you see orange cones, barriers, or Arabic signs reading NEOM company access, do not proceed. Turn back at these points — they are not for tourists.',
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

                {/* Best time */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Best Time to Visit the NEOM Region from Tabuk</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Season</th>
                                    <th className="border px-3 py-2 text-left">Temp (Tabuk)</th>
                                    <th className="border px-3 py-2 text-left">Coast (Sharma)</th>
                                    <th className="border px-3 py-2 text-left">Verdict</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-3 py-2">Oct – Feb</td>
                                    <td className="border px-3 py-2">10–22°C</td>
                                    <td className="border px-3 py-2">18–26°C</td>
                                    <td className="border px-3 py-2 text-green-600 font-medium">Best season</td>
                                </tr>
                                <tr className="bg-muted/30">
                                    <td className="border px-3 py-2">Mar – Apr</td>
                                    <td className="border px-3 py-2">18–30°C</td>
                                    <td className="border px-3 py-2">22–30°C</td>
                                    <td className="border px-3 py-2 text-amber-600 font-medium">Good (some heat)</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">May – Sep</td>
                                    <td className="border px-3 py-2">30–44°C</td>
                                    <td className="border px-3 py-2">28–36°C</td>
                                    <td className="border px-3 py-2 text-red-600 font-medium">Avoid if possible</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* How to get there */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">How to Get from Tabuk to NEOM as a Tourist</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        There is no public transport. The only practical way to reach the NEOM coastal region from Tabuk is by private car or hired driver.
                    </p>
                    <div className="overflow-x-auto mb-4">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Option</th>
                                    <th className="border px-3 py-2 text-left">Distance</th>
                                    <th className="border px-3 py-2 text-left">Time</th>
                                    <th className="border px-3 py-2 text-left">Cost</th>
                                    <th className="border px-3 py-2 text-left">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-3 py-2 font-medium">Private driver from Tabuk</td>
                                    <td className="border px-3 py-2">190 km</td>
                                    <td className="border px-3 py-2">2–2.5 hrs</td>
                                    <td className="border px-3 py-2">SAR 450–600</td>
                                    <td className="border px-3 py-2">Recommended — driver knows checkpoints</td>
                                </tr>
                                <tr className="bg-muted/30">
                                    <td className="border px-3 py-2 font-medium">Rental car from Tabuk</td>
                                    <td className="border px-3 py-2">190 km</td>
                                    <td className="border px-3 py-2">2–2.5 hrs</td>
                                    <td className="border px-3 py-2">SAR 250–400/day</td>
                                    <td className="border px-3 py-2">International DL required, no fuel in region</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2 font-medium">NEOM company shuttle</td>
                                    <td className="border px-3 py-2">190 km</td>
                                    <td className="border px-3 py-2">2.5 hrs</td>
                                    <td className="border px-3 py-2">Employees only</td>
                                    <td className="border px-3 py-2">Not available to tourists</td>
                                </tr>
                                <tr className="bg-muted/30">
                                    <td className="border px-3 py-2 font-medium">Public bus</td>
                                    <td className="border px-3 py-2">—</td>
                                    <td className="border px-3 py-2">—</td>
                                    <td className="border px-3 py-2">—</td>
                                    <td className="border px-3 py-2">Does not exist on this route</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                        <h3 className="font-semibold mb-2">Book a Private Driver: Tabuk → NEOM</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                            Our drivers make this trip daily, know all checkpoints, and can take you to the Sharma coast or any accessible part of the NEOM region. English-speaking drivers available.
                        </p>
                        <a
                            href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20private%20driver%20from%20Tabuk%20to%20NEOM%20%2F%20Sharma.%20Please%20share%20availability%20and%20price."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                        >
                            WhatsApp: Book Tabuk → NEOM Transfer
                        </a>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'Can tourists visit NEOM from Tabuk?',
                                a: 'Tourists with a valid Saudi visa can travel to the NEOM region and stay in certain areas. However, The Line construction zone and some NEOM sub-projects require a work permit or invitation. Sindalah Island is expected to begin receiving tourists in late 2026. The Sharma area around the Red Sea coast is accessible. Always confirm current access rules before travel as NEOM zones are still actively developing.',
                            },
                            {
                                q: 'Do I need a special permit to enter NEOM?',
                                a: 'Yes. Active NEOM construction zones — including The Line and Oxagon — require a NEOM company permit or worker badge. Tourists cannot enter these zones freely. However, the coastal road through the NEOM region, areas around Haql, and designated tourist zones do not require a special permit beyond a standard Saudi tourist visa.',
                            },
                            {
                                q: 'Is Sindalah Island open to tourists?',
                                a: "Sindalah Island is NEOM's luxury yacht island in the Red Sea. As of early 2026, it is in advanced stages of completion and expected to open to visitors in late 2026 or 2027. Check the NEOM official website for the latest opening timeline.",
                            },
                            {
                                q: 'How do I get from Tabuk to NEOM as a tourist?',
                                a: 'The best way is by private car or hired driver from Tabuk. The distance is approximately 190 km (2–2.5 hours) via Route 55 heading northwest. There is no public bus or train service. A private driver from Tabuk costs SAR 450–600 one-way and includes checkpoint support.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-4">
                                <h3 className="font-semibold text-sm mb-2">{item.q}</h3>
                                <p className="speakable-answer text-sm text-muted-foreground">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Internal links */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Plan Your Tabuk Trip</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/blog/how-to-get-to-neom-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">How to get to NEOM from Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">Transport options, checkpoints, route guide</div>
                        </Link>
                        <Link href="/blog/tabuk-to-neom-distance-drive-time" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to NEOM — distance &amp; drive time</div>
                            <div className="text-muted-foreground text-xs mt-1">190 km, 2–2.5 hours, milestone map</div>
                        </Link>
                        <Link href="/blog/private-driver-tabuk-neom-price" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Private driver Tabuk → NEOM — prices</div>
                            <div className="text-muted-foreground text-xs mt-1">Full pricing table for all vehicle types</div>
                        </Link>
                        <Link href="/tabuk-airport-taxi" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk Airport (TUU) transfers</div>
                            <div className="text-muted-foreground text-xs mt-1">Arrivals, routes, prices from TUU</div>
                        </Link>
                        <Link href="/services/taxi-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">City rides, intercity, NEOM workers</div>
                        </Link>
                        <Link href="/booking" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Book your transfer</div>
                            <div className="text-muted-foreground text-xs mt-1">Instant quote, English-speaking drivers</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </main>
        </>
    );
}
