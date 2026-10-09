import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Info, AlertTriangle, Plane, FileText, Clock, Wallet } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';

const PAGE_URL = 'https://taxiserviceksa.com/riyadh-alternative-airports/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const UPDATED = 'October 2026';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, my flight from Riyadh is cancelled/disrupted. I need a car from Riyadh to another airport. Airport, flight time, passengers and luggage: ')}`;

// One row per airport we drive to from Riyadh. Fares are the owner-confirmed one-way prices on each route page.
const AIRPORTS = [
    {
        code: 'DMM', name: 'Dammam', airport: 'King Fahd International Airport', country: 'Saudi Arabia',
        distance: 'About 400 km', drive: 'Around 4 hours', border: 'None - domestic trip',
        fares: 'Sedan 1,000 SAR · SUV 1,500 SAR', href: '/routes/riyadh-to-dammam-airport/',
        note: 'The closest alternative and no visa needed. Some international airlines have also paused Dammam flights, so confirm yours is operating.',
    },
    {
        code: 'BAH', name: 'Bahrain', airport: 'Bahrain International Airport', country: 'Bahrain',
        distance: 'About 430–480 km', drive: 'Around 4–5 hours', border: 'King Fahd Causeway',
        fares: 'SUV 2,000 SAR', href: '/routes/riyadh-bahrain/',
        note: 'Close, but it is an international crossing: every passenger needs Bahrain entry permission and the causeway can queue.',
    },
    {
        code: 'DOH', name: 'Doha', airport: 'Hamad International Airport', country: 'Qatar',
        distance: 'About 600 km', drive: 'Around 6–8 hours', border: 'Salwa / Abu Samra',
        fares: 'GMC 3,000 SAR', href: '/routes/riyadh-doha/',
        note: 'A large hub with many onward connections. Qatar entry permission is needed for every passenger.',
    },
    {
        code: 'JED', name: 'Jeddah', airport: 'King Abdulaziz International Airport', country: 'Saudi Arabia',
        distance: 'About 950–1,000 km', drive: 'Around 9–11 hours', border: 'None - domestic trip',
        fares: 'Sedan 1,000 SAR · Staria VIP 1,600 SAR · GMC 2,000 SAR', href: '/routes/riyadh-to-jeddah-airport/',
        note: 'No visa needed, but it is a full day on the road. Leave early for an evening flight.',
    },
    {
        code: 'DXB', name: 'Dubai', airport: 'Dubai International Airport', country: 'UAE',
        distance: 'About 990–1,000 km', drive: 'Around 9–10 hours', border: 'Al Batha / Al Ghuwaifat',
        fares: 'Sedan 3,500 SAR · Fortuner 3,800 SAR · GMC 4,500 SAR', href: '/routes/riyadh-dubai/',
        note: 'The longest drive, plus a land border. Worth it when Dubai is where the airline has rebooked you.',
    },
];

const TITLE = 'Riyadh Flight Cancelled? Private Car to Another Airport';
const DESCRIPTION = 'Flights from Riyadh disrupted? Compare driving to Dammam, Bahrain, Doha, Jeddah or Dubai airport: distance, time, visa and fixed private car fares from 1,000 SAR.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car from Riyadh to another airport' }],
    },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['https://taxiserviceksa.com/og-image.jpg'] },
};

const faqs = [
    { q: 'Is Riyadh airport closed?', a: `As of ${UPDATED}, King Khalid International Airport has had repeated short suspensions, delays and cancellations after attacks on Saudi Arabia, and several foreign airlines have paused Riyadh flights for a period. It is not a single permanent closure. Check your own flight with the airline before you decide to travel to another airport.` },
    { q: 'Which airport is closest to Riyadh?', a: 'King Fahd International Airport in Dammam (DMM), about 400 km and around 4 hours by car. It is a domestic trip, so no visa is needed.' },
    { q: 'Which alternative airport needs no visa?', a: 'Dammam (DMM) and Jeddah (JED) are inside Saudi Arabia. Bahrain, Doha and Dubai are international road crossings, so every passenger needs permission to enter that country, and Saudi residents need a valid exit/re-entry visa.' },
    { q: 'How much is a taxi from Riyadh to Dubai Airport?', a: 'Sedan 3,500 SAR, Toyota Fortuner 3,800 SAR, GMC Yukon/Tahoe 4,500 SAR, one way per vehicle.' },
    { q: 'How much is a taxi from Riyadh to Bahrain Airport?', a: 'The private SUV is 2,000 SAR one way, including fuel and the King Fahd Causeway toll.' },
    { q: 'How much is a taxi from Riyadh to Doha Airport?', a: 'We run this route with a private GMC SUV at 3,000 SAR one way.' },
    { q: 'How much is a taxi from Riyadh to Jeddah Airport?', a: 'Sedan 1,000 SAR, Hyundai Staria VIP 1,600 SAR, GMC Yukon XL 2,000 SAR, one way per vehicle.' },
    { q: 'How much is a taxi from Riyadh to Dammam Airport?', a: 'Sedan 1,000 SAR, SUV 1,500 SAR, one way per vehicle.' },
    { q: 'Can you leave at short notice?', a: 'Often, yes, but it depends on vehicle availability for that day. Message us on WhatsApp with the airport and flight time and we will tell you straight away what we can do.' },
    { q: 'What if my new flight changes again?', a: 'Tell us as soon as the airline changes it. If the trip has not started, we can move the pickup time or change the airport, subject to availability and the fare for the new route.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private transfers from Riyadh to other airports',
            url: PAGE_URL,
            serviceType: 'Private intercity and cross-border airport transfer',
            description: 'Private car with driver from Riyadh to Dammam, Bahrain, Doha, Jeddah and Dubai airports.',
            provider: { '@id': 'https://taxiserviceksa.com/#organization' },
            areaServed: ['Saudi Arabia', 'Bahrain', 'Qatar', 'United Arab Emirates'],
        },
        {
            '@type': 'Organization',
            '@id': 'https://taxiserviceksa.com/#organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
            telephone: PHONE,
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const h2 = 'text-3xl md:text-4xl font-extrabold text-[#111827]';
const link = 'font-semibold text-[#1d4ed8] underline-offset-2 hover:underline';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

export default function RiyadhAlternativeAirportsPage() {
    return (
        <div className="alt-airports-page bg-[#f5f6f8]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="bg-[#111827] text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="min-w-0 lg:pt-4">
                        <p className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 text-amber-300 px-3 py-1.5 text-xs font-bold mb-5"><AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" />Updated {UPDATED}</p>
                        <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight mb-5">Riyadh Flight Cancelled? Drive to Another Airport</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            Private car with driver from your door in Riyadh to Dammam, Bahrain, Doha, Jeddah or Dubai airport. Fixed fares, one vehicle for your whole group, and the pickup time set from your new flight.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-amber-400 text-[#111827] hover:bg-amber-300">
                                <a href="#compare">Compare the 5 airports <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Your New Flight</a>
                            </Button>
                        </div>
                        <ul className="flex flex-wrap gap-2 text-sm">
                            {AIRPORTS.map((a) => (
                                <li key={a.code}><Link href={a.href} className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 font-semibold hover:bg-white/20"><Plane className="w-3.5 h-3.5 text-amber-300" aria-hidden="true" />{a.name} ({a.code})</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Book a car to another airport"
                            cta="Get My Airport Transfer"
                            fromPlaceholder="Home, hotel or office in Riyadh"
                            toPlaceholder="Which airport?"
                            fromChips={['Riyadh city', 'Riyadh hotel', 'King Khalid International Airport (RUH)']}
                            toChips={AIRPORTS.map((a) => `${a.airport} (${a.code})`)}
                            showFlight
                            buttonClass="bg-[#1d4ed8] hover:bg-[#1e40af] focus-visible:ring-[#1d4ed8]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= STATUS ================= */}
            <section aria-labelledby="status" className="px-4 sm:px-6 lg:px-8 py-10">
                <div className="max-w-6xl mx-auto rounded-2xl border border-amber-300 bg-amber-50 p-6 md:p-8">
                    <h2 id="status" className="text-xl md:text-2xl font-extrabold text-[#111827] mb-3">What is happening at Riyadh airport</h2>
                    <p className="text-stone-700 leading-relaxed mb-3">
                        In early {UPDATED}, flights at King Khalid International Airport (RUH) were suspended for periods and many were delayed or cancelled after attacks on Saudi Arabia, according to <a href="https://www.thenationalnews.com/travel/2026/10/08/riyadh-airport-flights-delayed-and-cancelled-after-houthi-attacks-on-saudi-arabia/" target="_blank" rel="noopener noreferrer" className={link}>The National</a>. Several foreign airlines have also paused their Riyadh flights for a period. The airport has not closed permanently, and the situation changes day to day.
                    </p>
                    <p className="flex gap-3 text-sm text-stone-700"><Info className="w-4 h-4 mt-0.5 text-amber-600 shrink-0" aria-hidden="true" />Always confirm your flight with the airline before driving to another airport. We are a transport company and cannot give flight or security advice.</p>
                </div>
            </section>

            {/* ================= COMPARE ================= */}
            <section id="compare" aria-labelledby="compare-h" className="px-4 sm:px-6 lg:px-8 pb-16 scroll-mt-24">
                <div className="max-w-6xl mx-auto">
                    <h2 id="compare-h" className={`${h2} mb-3`}>Compare Airports You Can Reach by Car from Riyadh</h2>
                    <p className="text-stone-600 mb-8">Closest first. Fares are one way, per vehicle, from a Riyadh address to the airport. Times are driving only; borders and stops add to them.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {AIRPORTS.map((a) => (
                            <article key={a.code} className="rounded-2xl bg-white border border-[#111827]/10 p-6 flex flex-col">
                                <div className="flex items-baseline justify-between gap-3 mb-1">
                                    <h3 className="text-[#111827]">{a.name} ({a.code})</h3>
                                    <span className="text-xs font-semibold text-stone-500">{a.country}</span>
                                </div>
                                <p className="text-sm text-stone-500 mb-4">{a.airport}</p>
                                <dl className="space-y-2 text-sm mb-4">
                                    {[['Distance', a.distance], ['Driving', a.drive], ['Border', a.border], ['Fare', a.fares]].map(([k, v]) => (
                                        <div key={k} className="flex justify-between gap-4">
                                            <dt className="text-stone-500 shrink-0">{k}</dt>
                                            <dd className={`text-right ${k === 'Fare' ? 'font-bold text-[#1d4ed8]' : 'font-semibold text-[#111827]'}`}>{v}</dd>
                                        </div>
                                    ))}
                                </dl>
                                <p className="text-sm text-stone-600 mb-5 flex-1">{a.note}</p>
                                <Link href={a.href} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#111827] px-5 py-3 text-sm font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2">Riyadh → {a.name} Airport <Arrow /></Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= HOW TO CHOOSE ================= */}
            <section aria-labelledby="choose" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="choose" className={`${h2} mb-8`}>How to Choose the Right Airport</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { icon: Plane, t: 'Start with your airline', d: 'If the airline has rebooked you from a specific airport, go there. If you are buying a new ticket, compare flights from all five before you book the car.' },
                            { icon: FileText, t: 'Check visas for every passenger', d: 'Dammam and Jeddah need no visa. Bahrain, Doha and Dubai are land borders: everyone needs entry permission, and Saudi residents need a valid exit/re-entry visa.' },
                            { icon: Clock, t: 'Work back from departure', d: 'Add the drive, any border time, a stop and the airline’s check-in time. Dammam can work for a same-day flight; Jeddah and Dubai usually mean leaving very early.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f5f6f8] p-6">
                                <Icon className="w-6 h-6 text-[#1d4ed8] mb-3" aria-hidden="true" />
                                <h3 className="text-[#111827] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 rounded-2xl bg-[#111827] text-white p-6 md:p-8 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 items-start">
                        <Wallet className="w-7 h-7 text-amber-300" aria-hidden="true" />
                        <p className="text-white/85 leading-relaxed">Fares are per vehicle, not per person, so a family or group of up to 6–7 in one SUV pays one price. What each fare includes is listed on that route&apos;s page.</p>
                    </div>
                </div>
            </section>

            {/* ================= DOMESTIC VS CROSS-BORDER ================= */}
            <section aria-labelledby="border" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="rounded-2xl bg-white border border-[#111827]/10 p-7">
                        <h2 id="border" className="text-2xl font-extrabold text-[#111827] mb-4">Staying in Saudi Arabia: Dammam or Jeddah</h2>
                        <ul className="space-y-2.5 text-sm text-stone-700">
                            {['No border, no visa, no exit/re-entry needed', 'Dammam is the shortest drive, around 4 hours', 'Jeddah has many domestic and international flights, but is a full day by road', 'One driver and one car from your door to the terminal'].map((x) => (
                                <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#1d4ed8] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl bg-white border border-[#111827]/10 p-7">
                        <h2 className="text-2xl font-extrabold text-[#111827] mb-4">Crossing a border: Bahrain, Doha or Dubai</h2>
                        <ul className="space-y-2.5 text-sm text-stone-700 mb-4">
                            {['Every passenger needs permission to enter that country', 'Saudi residents need a valid exit/re-entry visa', 'Border queues add time that nobody can predict', 'The driver handles the vehicle side; passengers handle their own immigration'].map((x) => (
                                <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#1d4ed8] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                        <p className="text-xs text-stone-500">Entry rules depend on nationality and residency and can change. Confirm yours before travelling.</p>
                    </div>
                </div>
            </section>

            {/* ================= INBOUND ================= */}
            <section aria-labelledby="inbound" className="bg-[#111827] text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="inbound" className="text-3xl md:text-4xl font-extrabold mb-4">Landed Somewhere Else? We Drive You to Riyadh</h2>
                    <p className="text-white/75 max-w-3xl mb-8">If your flight to Riyadh was diverted or rebooked to another airport, we can collect you there and drive you to your address in Riyadh. The fares are the same as the outbound trips.</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {[
                            ['Dammam Airport → Riyadh', 'Sedan 1,000 · SUV 1,500 SAR', '/routes/dammam-riyadh/'],
                            ['Bahrain → Riyadh', 'SUV 2,000 SAR', '/routes/bahrain-riyadh/'],
                            ['Doha → Riyadh', 'GMC 3,000 SAR', '/routes/doha-riyadh/'],
                            ['Dubai → Riyadh', 'From 3,500 SAR', '/routes/dubai-riyadh/'],
                        ].map(([t, p, h]) => (
                            <li key={h}>
                                <Link href={h} className="group flex h-full flex-col rounded-2xl bg-white/[0.08] p-5 hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">
                                    <span className="font-bold">{t}</span>
                                    <span className="text-sm text-amber-300 mt-1 mb-3">{p}</span>
                                    <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-white/80">View route <Arrow /></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#111827]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#111827] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className={`${h2} mb-4`}>Tell Us Your New Flight</h2>
                    <p className="text-stone-600 mb-8">Send the airport, departure time, passengers and luggage. We reply with the vehicle, the fare and a pickup time before anything is confirmed.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href={QUOTE_HREF} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#111827] px-6 py-3.5 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2">Book a Car to Another Airport <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#111827]/20 px-6 py-3.5 font-bold text-[#111827] hover:border-[#1d4ed8]"><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp Your New Flight</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-6">Taxi Service KSA · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a> · <Link href="/riyadh-airport-taxi/" className={link}>Riyadh Airport taxi</Link></p>
                </div>
            </section>
        </div>
    );
}
