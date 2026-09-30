import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, PlaneLanding, PlaneTakeoff, Plane, Check, Info, MapPin, Luggage, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import TabukQuoteCard from '@/components/tabuk/TabukQuoteCard';
import QuoteLink from '@/components/tabuk/QuoteLink';
import { TUU, tabukRoute } from '@/data/tabukRoutes';
import { vehicles } from '@/lib/supabase';

const PAGE_URL = 'https://taxiserviceksa.com/tabuk-airport-taxi/';
const HUB = '/locations/tabuk/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a transfer at Tabuk Airport (TUU). Flight number, date and time, destination, passengers and luggage: ')}`;
const NEOM_ACCESS = 'NEOM access and project-site entry depend on the destination and current authorization requirements.';

export const metadata: Metadata = {
    title: 'Tabuk Airport Taxi & Private Transfers | TUU Airport',
    description: 'Pre-booked private transfers at Tabuk Airport (TUU): arrivals and departures, Tabuk hotels, and onward journeys toward NEOM, AlUla and the Red Sea coast.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Tabuk Airport Taxi & Private Transfers (TUU)',
        description: 'Pre-booked private transfers to and from Prince Sultan bin Abdulaziz Airport in Tabuk.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private transfers at Tabuk Airport (TUU)' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tabuk Airport Taxi & Private Transfers (TUU)',
        description: 'Pre-booked private transfers to and from Prince Sultan bin Abdulaziz Airport in Tabuk.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

// Seats and bags come from the booking system's vehicle list - one source of truth.
const FLEET = ['Toyota Camry', 'Genesis G80 VIP', 'Cadillac Escalade', 'GMC Yukon XL / Denali', 'Hyundai Staria VIP', 'Toyota Hiace', 'Toyota Coaster'].flatMap((name) => {
    const v = vehicles.find((x) => x.name === name);
    return v ? [{ name: v.name, passengers: v.passengers, luggage: v.luggage }] : [];
});

const DESTINATIONS = [
    { t: 'Tabuk city', d: 'Hotel, residence or business address in the city.', send: 'The hotel name or address.', to: 'Tabuk city' },
    { t: 'NEOM', d: 'A long onward road journey to a confirmed NEOM destination.', send: 'The exact accommodation, site or meeting point.', to: 'NEOM', href: tabukRoute('NEOM').href, l: 'Tabuk → NEOM route', note: NEOM_ACCESS },
    { t: 'AlUla', d: 'Straight from arrivals to your AlUla hotel or resort.', send: 'The hotel or resort name.', to: 'AlUla', href: tabukRoute('AlUla').href, l: 'Tabuk → AlUla route' },
    { t: 'Haql', d: 'To the Gulf of Aqaba coast in the north-west.', send: 'The hotel or address in Haql.', to: 'Haql', href: tabukRoute('Haql').href, l: 'Tabuk → Haql route' },
    { t: 'Al Wajh', d: 'To the Red Sea coast in the south-west.', send: 'The hotel, resort or address.', to: 'Al Wajh', href: tabukRoute('Al Wajh').href, l: 'Tabuk → Al Wajh route' },
    { t: 'Somewhere else', d: 'Madinah, Jeddah, Duba or another address.', send: 'The destination, and we confirm whether we can cover it.', to: '' },
];

const faqs = [
    { q: 'What is TUU airport?', a: 'TUU is the code for Prince Sultan bin Abdulaziz Airport, the airport that serves Tabuk in northwest Saudi Arabia.' },
    { q: 'How far is Tabuk Airport from the city?', a: 'The airport is close to the city, a short drive from most hotels and districts. The exact time depends on your address and the traffic.' },
    { q: 'How do I book a taxi from Tabuk Airport?', a: 'Use the form on this page or WhatsApp and send your flight number, arrival date and time, destination, passengers and luggage. We reply with the vehicle and price, and the booking is made once you confirm.' },
    { q: 'Where will I meet the driver?', a: 'The pickup point and the driver and vehicle details are sent with your confirmed booking.' },
    { q: 'What happens if my flight is delayed?', a: 'Message us on WhatsApp as soon as you know and we adjust the pickup where we can. Ask for the waiting terms to be stated in your quote.' },
    { q: 'Are there taxis waiting at Tabuk Airport?', a: 'We cannot speak for what is at the taxi rank at a given hour. If you want the vehicle, price and pickup arranged before you fly, pre-book.' },
    { q: 'Can I go straight from Tabuk Airport to NEOM?', a: `Yes, as a pre-booked road journey. We need the exact accommodation, site or meeting point before confirming. ${NEOM_ACCESS}` },
    { q: 'Can I go straight from Tabuk Airport to AlUla?', a: 'Yes, subject to availability. It is a long drive, so tell us your passengers and luggage when you ask for the quote.' },
    { q: 'Can you take me from my hotel to Tabuk Airport?', a: 'Yes. Send your flight time and pickup address and we suggest a pickup time that leaves room for the road and airport procedures.' },
    { q: 'Can I book a late-night or early-morning pickup?', a: 'These are arranged as pre-booked journeys. Send your flight time and we confirm availability before you rely on it.' },
    { q: 'We are a group with a lot of luggage. Which vehicle?', a: 'Tell us the passenger count and the number of large bags. The vehicle list on this page shows what each one holds, and we suggest two vehicles if one is not enough.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Service',
            '@id': `${PAGE_URL}#service`,
            name: 'Private transfers at Tabuk Airport (TUU)',
            url: PAGE_URL,
            serviceType: 'Pre-booked airport transfer',
            description: 'Pre-booked private transfers to and from Prince Sultan bin Abdulaziz Airport (TUU) in Tabuk, including onward road journeys toward NEOM, AlUla and the Red Sea coast.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: { '@type': 'Airport', name: 'Prince Sultan bin Abdulaziz Airport', iataCode: 'TUU', address: { '@type': 'PostalAddress', addressLocality: 'Tabuk', addressCountry: 'SA' } },
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const eyebrow = 'text-xs font-bold uppercase tracking-[0.22em]';
const link = 'font-semibold text-[#9a4f1c] hover:underline';
const qbtn = 'group inline-flex items-center gap-2 font-bold text-[#241a12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2a23b] rounded';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#241a12]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Steps({ items }: { items: string[] }) {
    return (
        <ol className="space-y-3">
            {items.map((s, i) => (
                <li key={s} className="flex gap-3">
                    <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-[#e2a23b] text-[#241a12] text-xs font-bold flex items-center justify-center" aria-hidden="true">{i + 1}</span>
                    <span>{s}</span>
                </li>
            ))}
        </ol>
    );
}

export default function TabukAirportTaxiPage() {
    return (
        <div className="tabuk-page bg-[#f3ebdd]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#241a12]">
                {/* Illustration (not a photo): a runway and an approach path. */}
                <svg className="absolute inset-0 -z-10 w-full h-full" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
                    <path d="M-40 700 L 520 430 L 600 430 L 420 700 Z" fill="#33251a" />
                    <path d="M190 700 L 560 430" fill="none" stroke="#f0c987" strokeOpacity="0.5" strokeWidth="4" strokeDasharray="26 22" />
                    <path d="M1440 90 C 1100 120, 800 250, 580 420" fill="none" stroke="#e2a23b" strokeWidth="2.5" strokeLinecap="round" pathLength={1} className="route-draw" />
                </svg>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-10 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className={`${eyebrow} text-[#f0c987] mb-5`}>Prince Sultan bin Abdulaziz Airport • TUU</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5">Tabuk Airport Taxi &amp; Private Transfers</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
                            A pre-booked car for your arrival or departure at TUU: to a Tabuk hotel, or straight on toward NEOM, AlUla or the coast.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#e2a23b] text-[#241a12] hover:bg-[#ebb65c]">
                                <a href={QUOTE_HREF}>Get an Airport Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book on WhatsApp</a>
                            </Button>
                        </div>
                        <p className="text-sm text-white/60">Private vehicle • Pre-booked • Flight number on the booking</p>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <TabukQuoteCard vehicleOptions={FLEET.map((v) => v.name)} initialFrom={TUU} title="Your TUU airport transfer" />
                    </div>
                </div>
            </section>

            {/* ================= ARRIVING / DEPARTING ================= */}
            <section aria-label="Arrivals and departures" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <article className="rounded-3xl bg-white border border-[#241a12]/10 p-7 md:p-8">
                        <PlaneLanding className="w-7 h-7 text-[#9a4f1c] mb-4" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#241a12] mb-5">Arriving at Tabuk Airport</h2>
                        <div className="text-stone-700 mb-6">
                            <Steps items={[
                                'Before you fly, send your flight number, arrival time, destination, passengers and luggage.',
                                'We confirm the vehicle and price, and send the pickup instructions with the booking.',
                                'After landing, collect your bags and follow those instructions to the pickup point.',
                                'Ride directly to your hotel, residence, business or onward destination.',
                            ]} />
                        </div>
                        <QuoteLink set={{ from: TUU }} className={qbtn}>Book an arrival <Arrow /></QuoteLink>
                    </article>
                    <article className="rounded-3xl bg-[#241a12] text-white p-7 md:p-8">
                        <PlaneTakeoff className="w-7 h-7 text-[#e2a23b] mb-4" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-5">Departing From Tabuk Airport</h2>
                        <div className="text-white/[0.85] mb-6">
                            <Steps items={[
                                'Send your flight number and departure time, pickup address, passengers and luggage.',
                                'We suggest a pickup time that leaves room for the road and airport procedures.',
                                'The driver collects you at the agreed address and time.',
                                'Coming from NEOM, AlUla or the coast? Allow extra buffer beyond the road estimate.',
                            ]} />
                        </div>
                        <QuoteLink set={{ from: '', to: TUU }} className="group inline-flex items-center gap-2 font-bold text-[#f0c987] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2a23b]">Book a departure <Arrow /></QuoteLink>
                    </article>
                </div>
            </section>

            {/* ================= FLIGHT NUMBER ================= */}
            <section aria-labelledby="flight" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div>
                        <Plane className="w-7 h-7 text-[#9a4f1c] mb-4" aria-hidden="true" />
                        <h2 id="flight" className={`${h2} mb-4`}>Why We Ask for Your Flight Number</h2>
                        <p className="text-stone-600 leading-relaxed mb-4">It tells us which flight to plan the pickup around, and it lets us match the booking to the right arrival if there are several that day.</p>
                        <p className="flex gap-3 rounded-xl bg-[#fbf3e2] p-4 text-sm text-stone-700"><Info className="w-4 h-4 mt-0.5 text-[#9a4f1c] shrink-0" aria-hidden="true" />If your flight is delayed, rebooked or cancelled, message us on WhatsApp as soon as you know so the pickup can be changed.</p>
                    </div>
                    <dl className="rounded-2xl bg-[#f3ebdd] p-6 text-sm space-y-4">
                        <div><dt className="font-bold text-[#241a12]">Airport</dt><dd className="text-stone-600">Prince Sultan bin Abdulaziz Airport</dd></div>
                        <div><dt className="font-bold text-[#241a12]">Code</dt><dd className="text-stone-600">TUU</dd></div>
                        <div><dt className="font-bold text-[#241a12]">Serves</dt><dd className="text-stone-600">Tabuk, and road journeys on to the wider northwest</dd></div>
                        <div><dt className="font-bold text-[#241a12]">Not the same as</dt><dd className="text-stone-600">NEOM Bay Airport (NUM). Check which one is on your ticket - <Link href="/locations/neom/" className={link}>NEOM airports explained</Link>.</dd></div>
                    </dl>
                </div>
            </section>

            {/* ================= DESTINATIONS ================= */}
            <section aria-labelledby="where" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="where" className={`${h2} mb-4`}>Where Are You Going From TUU?</h2>
                    <p className="text-stone-600 max-w-2xl mb-8">Pick a destination to start the quote. Distances and drive times for the longer journeys are on each route page.</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {DESTINATIONS.map((x) => (
                            <li key={x.t} className="rounded-2xl bg-white border border-[#241a12]/10 p-6 flex flex-col">
                                <p className={`${eyebrow} text-[#9a4f1c] mb-2`}>TUU →</p>
                                <h3 className="text-[#241a12] mb-2">{x.t}</h3>
                                <p className="text-sm text-stone-600 mb-3">{x.d}</p>
                                <p className="text-sm text-stone-600 flex-1"><MapPin className="inline w-4 h-4 mr-1 -mt-0.5 text-[#9a4f1c]" aria-hidden="true" /><strong className="text-[#241a12]">Send us:</strong> {x.send}</p>
                                {x.note && <p className="text-xs text-stone-500 mt-3">{x.note}</p>}
                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5">
                                    <QuoteLink set={{ from: TUU, to: x.to }} className={qbtn}>Get a quote <Arrow /></QuoteLink>
                                    {x.href && <Link href={x.href} className={`${link} text-sm`}>{x.l}</Link>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= LUGGAGE & VEHICLES ================= */}
            <section aria-labelledby="vehicles" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
                    <div>
                        <Luggage className="w-7 h-7 text-[#9a4f1c] mb-4" aria-hidden="true" />
                        <h2 id="vehicles" className={`${h2} mb-4`}>Count the Bags First</h2>
                        <p className="text-stone-600 leading-relaxed mb-4">At an airport, luggage usually decides the vehicle before the number of seats does. Count every checked bag, and mention pushchairs, equipment cases or anything oversized.</p>
                        <p className="text-sm text-stone-600">Need help choosing? Use the <Link href={`${HUB}#vehicles`} className={link}>vehicle selector on the Tabuk hub</Link>.</p>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {FLEET.map((v) => (
                            <li key={v.name} className="rounded-xl bg-[#f3ebdd] p-4">
                                <p className="font-bold text-[#241a12] mb-1">{v.name.split(' /')[0]}</p>
                                <p className="text-sm text-stone-600"><Luggage className="inline w-4 h-4 mr-1 -mt-0.5 text-[#9a4f1c]" aria-hidden="true" />About {v.luggage} large bags <Users className="inline w-4 h-4 ml-3 mr-1 -mt-0.5 text-[#9a4f1c]" aria-hidden="true" />Up to {v.passengers}</p>
                            </li>
                        ))}
                        <li className="rounded-xl border border-dashed border-[#241a12]/20 p-4 text-sm text-stone-600">Vehicle availability is confirmed for your date.</li>
                    </ul>
                </div>
            </section>

            {/* ================= PRE-BOOKING + CHECKLIST ================= */}
            <section aria-labelledby="prebook" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="rounded-2xl bg-white border border-[#241a12]/10 p-7">
                        <h2 id="prebook" className="yanbu-card-title font-extrabold text-[#241a12] mb-4">What Pre-Booking Settles Before You Land</h2>
                        <ul className="space-y-2.5 text-stone-700">
                            {['The price, agreed before you travel', 'A vehicle sized for your passengers and bags', 'Where and how you meet the driver', 'A long onward journey arranged in advance, not at the kerb', 'A return to the airport booked at the same time, if you want one'].map((x) => <li key={x} className="flex gap-3"><Check className="w-4 h-4 mt-1 text-[#9a4f1c] shrink-0" aria-hidden="true" />{x}</li>)}
                        </ul>
                        <p className="text-sm text-stone-500 mt-5">This is pre-booked private transport, not the airport taxi rank.</p>
                    </div>
                    <div className="rounded-2xl bg-[#241a12] text-white p-7">
                        <h2 className="yanbu-card-title font-extrabold mb-4">Send Us These for an Airport Booking</h2>
                        <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-white/[0.85] mb-5">
                            {['Flight number', 'Arrival or departure', 'Date and time', 'Destination or pickup address', 'Passengers', 'Large bags', 'Vehicle preference', 'Return transfer', 'Child seat, if needed', 'Project / site name, if any'].map((x) => <li key={x} className="flex gap-2.5"><span className="mt-0.5 w-4 h-4 shrink-0 rounded border border-white/40" aria-hidden="true" />{x}</li>)}
                        </ul>
                        <p className="text-sm text-white/70">The price depends on the destination, vehicle, date, time and any waiting, stops or return.</p>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Tabuk Airport Transfer Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#241a12]/10 px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#241a12] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <h2 id="related" className="sr-only">Related pages</h2>
                    {[
                        { t: 'Tabuk', l: [['Tabuk transport hub', HUB], ['Book a car in Tabuk', '/services/taxi-in-tabuk/'], ['NEOM transfers', '/locations/neom/'], ['AlUla transport', '/locations/alula/']] },
                        { t: 'Guides', l: [['TUU arrivals guide', '/blog/tabuk-airport-tuu-arrivals-guide/'], ['Airport to city', '/blog/how-to-get-from-tabuk-airport-to-city/'], ['Car rental at the airport', '/blog/car-rental-tabuk-airport-worth-it/']] },
                        { t: 'Other airports', l: [['All airport transfers', '/services/airport-transfers/'], ['AlUla Airport (ULH)', '/locations/alula/airport/'], ['Madinah Airport (MED)', '/madinah-airport-taxi/'], ['Jeddah Airport (JED)', '/jeddah-airport-transfer/'], ['Riyadh Airport (RUH)', '/riyadh-airport-taxi/']] },
                    ].map((g) => (
                        <div key={g.t}>
                            <p className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3">{g.t}</p>
                            <ul className="flex flex-wrap gap-2">{g.l.map(([l, h]) => <li key={h}><Link href={h} className="inline-block rounded-full border border-[#241a12]/[0.15] bg-white px-4 py-2.5 text-sm font-semibold text-[#241a12] hover:border-[#e2a23b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2a23b]">{l}</Link></li>)}</ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#241a12]">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Flying Into or Out of Tabuk?</h2>
                    <p className="text-lg text-white/80 mb-10">Send your flight number, destination, passengers and luggage. You get the vehicle and the price back before anything is confirmed.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-[#e2a23b] text-[#241a12] hover:bg-[#ebb65c]">
                            <a href={QUOTE_HREF}>Get an Airport Quote</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book on WhatsApp</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
