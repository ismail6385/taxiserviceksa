import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Route, Repeat, Clock, Check, Minus, Send, ClipboardCheck, Wallet, Car } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import TopicCluster from '@/components/seo/TopicCluster';
import TabukQuoteCard from '@/components/tabuk/TabukQuoteCard';
import QuoteLink from '@/components/tabuk/QuoteLink';
import { TABUK_ROUTES } from '@/data/tabukRoutes';
import { vehicles } from '@/lib/supabase';

const PAGE_URL = 'https://taxiserviceksa.com/services/taxi-in-tabuk/';
const HUB = '/locations/tabuk/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like to book a private car in Tabuk. Pickup, destination, date, time, passengers and luggage: ')}`;
const HOURLY_HREF = `/booking/?${new URLSearchParams({ from: 'Tabuk', trip: 'hourly', hours: '4' }).toString()}`;

export const metadata: Metadata = {
    title: 'Taxi in Tabuk | Book a Private Car With Driver',
    description: 'Book a pre-booked private car with driver in Tabuk: one-way transfers, return trips and hourly hire. Send your journey, see the price, then confirm.',
    alternates: {
        canonical: PAGE_URL,
        languages: {
            en: PAGE_URL,
            ar: 'https://taxiserviceksa.com/ar/services/taxi-in-tabuk/',
            ur: 'https://taxiserviceksa.com/ur/services/taxi-in-tabuk/',
            'x-default': PAGE_URL,
        },
    },
    openGraph: {
        title: 'Taxi in Tabuk: Book a Private Car With Driver',
        description: 'A pre-booked car and driver in Tabuk for one journey, a return trip or by the hour.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Book a private car with driver in Tabuk' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Taxi in Tabuk: Book a Private Car With Driver',
        description: 'A pre-booked car and driver in Tabuk for one journey, a return trip or by the hour.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

// Seats and bags come from the booking system's vehicle list - one source of truth.
const FLEET_META: [string, string, string][] = [
    ['Toyota Camry', 'Sedan', '/fleet/toyota-camry/'],
    ['Genesis G80 VIP', 'Executive sedan', '/fleet/genesis-g80/'],
    ['Cadillac Escalade', 'Large SUV', '/fleet/cadillac-escalade/'],
    ['GMC Yukon XL / Denali', 'Large SUV', '/fleet/gmc-yukon-xl/'],
    ['Hyundai Staria VIP', 'Van / MPV', '/fleet/hyundai-staria-vip/'],
    ['Toyota Hiace', 'Group van', '/fleet/toyota-hiace/'],
    ['Toyota Coaster', 'Minibus', '/fleet/toyota-coaster/'],
];
const FLEET = FLEET_META.flatMap(([name, cls, href]) => {
    const v = vehicles.find((x) => x.name === name);
    return v ? [{ name: v.name, cls, href, passengers: v.passengers, luggage: v.luggage }] : [];
});

const faqs = [
    { q: 'How do I book a taxi in Tabuk?', a: 'Fill in the quote form on this page or message us on WhatsApp with your pickup, destination, date, time, passengers and luggage. We reply with the vehicle and price, and the booking is made once you confirm.' },
    { q: 'How far ahead should I book?', a: 'As early as you can, especially for airport pickups and long journeys out of Tabuk. For a request at short notice, message us and we tell you what is available.' },
    { q: 'Is this a street taxi I can hail in Tabuk?', a: 'No. This is a pre-booked private car with driver. We do not operate street-hail or shared taxis.' },
    { q: 'Is Uber available in Tabuk?', a: 'We cannot speak for ride-app coverage on a given day - check the app when you need it. A pre-booked car is for when you want the vehicle, pickup time and price agreed in advance.' },
    { q: 'Will I know the price before I travel?', a: 'Yes. You receive the price with the quote and confirm only if you are happy with it.' },
    { q: 'How will I find my driver?', a: 'The pickup point and the driver and vehicle details are sent with your confirmed booking.' },
    { q: 'Can I ask for an English- or Urdu-speaking driver?', a: 'Tell us the language you need when you request the quote and we confirm whether it is available for your date.' },
    { q: 'Can I book for someone else?', a: 'Yes. Give us the passenger’s name and phone number so the driver can reach them at pickup.' },
    { q: 'Can I keep the car for several hours?', a: 'You can request an hourly booking, where the vehicle stays with you between stops. Hourly availability in Tabuk is confirmed for your date.' },
    { q: 'Can I arrange regular or repeated journeys?', a: 'Send us the schedule - days, times, pickup and drop-off - and we quote it as a recurring arrangement.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Service',
            '@id': `${PAGE_URL}#service`,
            name: 'Pre-booked private car with driver in Tabuk',
            url: PAGE_URL,
            serviceType: 'Pre-booked private car with driver',
            description: 'Pre-booked private car with driver in Tabuk for one-way transfers, return trips and hourly hire.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: { '@type': 'City', name: 'Tabuk' },
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

export default function TaxiInTabukPage() {
    return (
        <div className="tabuk-page bg-[#f3ebdd]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#241a12]">
                <svg className="absolute inset-0 -z-10 w-full h-full" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <g fill="none" stroke="#f0c987" strokeOpacity="0.1">
                        {Array.from({ length: 9 }, (_, i) => (
                            <ellipse key={i} cx="260" cy="560" rx={120 + i * 90} ry={70 + i * 52} transform="rotate(-10 260 560)" />
                        ))}
                    </g>
                </svg>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-10 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className={`${eyebrow} text-[#f0c987] mb-5`}>Pre-booked private car • Tabuk</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5">Taxi in Tabuk: Book a Private Car With Driver</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
                            A car and driver booked in advance for one journey, a return trip or by the hour. Send the trip, see the price, then confirm.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#e2a23b] text-[#241a12] hover:bg-[#ebb65c]">
                                <a href={QUOTE_HREF}>Get My Price <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book on WhatsApp</a>
                            </Button>
                        </div>
                        <p className="text-sm text-white/60">Planning a wider trip? See how Tabuk connects to NEOM, AlUla and the coast on the <Link href={HUB} className="font-semibold text-[#f0c987] hover:underline">Tabuk transport hub</Link>.</p>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <TabukQuoteCard vehicleOptions={FLEET.map((v) => v.name)} />
                    </div>
                </div>
            </section>

            {/* ================= WAYS TO BOOK ================= */}
            <section aria-labelledby="ways" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="ways" className={`${h2} mb-8`}>Three Ways to Book a Car in Tabuk</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <article className="rounded-2xl bg-white border border-[#241a12]/10 p-6 flex flex-col">
                            <Route className="w-6 h-6 text-[#9a4f1c] mb-4" aria-hidden="true" />
                            <h3 className="text-[#241a12] mb-2">One-way transfer</h3>
                            <p className="text-sm text-stone-600 flex-1 mb-5">One pickup, one drop-off. For an airport run, a hotel change or a journey out of Tabuk.</p>
                            <QuoteLink set={{ from: 'Tabuk', trip: 'one' }} className={qbtn}>Quote a transfer <Arrow /></QuoteLink>
                        </article>
                        <article className="rounded-2xl bg-white border border-[#241a12]/10 p-6 flex flex-col">
                            <Repeat className="w-6 h-6 text-[#9a4f1c] mb-4" aria-hidden="true" />
                            <h3 className="text-[#241a12] mb-2">Return trip</h3>
                            <p className="text-sm text-stone-600 flex-1 mb-5">There and back, the same day or another day. Tell us when you need the return pickup so waiting is agreed up front.</p>
                            <QuoteLink set={{ from: 'Tabuk', trip: 'return' }} className={qbtn}>Quote a return <Arrow /></QuoteLink>
                        </article>
                        <article className="rounded-2xl bg-[#241a12] text-white p-6 flex flex-col">
                            <Clock className="w-6 h-6 text-[#e2a23b] mb-4" aria-hidden="true" />
                            <h3 className="mb-2">By the hour</h3>
                            <p className="text-sm text-white/70 flex-1 mb-5">The car stays with you between stops for an agreed number of hours. Availability in Tabuk is confirmed for your date.</p>
                            <Link href={HOURLY_HREF} className="group inline-flex items-center gap-2 font-bold text-[#f0c987]">Request hourly hire <Arrow /></Link>
                        </article>
                    </div>
                </div>
            </section>

            {/* ================= HOW IT WORKS ================= */}
            <section aria-labelledby="how" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="how" className={`${h2} mb-8`}>How Booking Works</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { i: Send, t: 'Send the journey', d: 'Pickup, destination, date, time, passengers and luggage - by the form or WhatsApp.' },
                            { i: ClipboardCheck, t: 'We check it', d: 'We match a vehicle to your group and confirm it is available for your date.' },
                            { i: Wallet, t: 'You see the price', d: 'The price comes with the quote. Nothing is booked until you confirm.' },
                            { i: Car, t: 'Pickup details', d: 'The pickup point and the driver and vehicle details come with the confirmed booking.' },
                        ].map((s, n) => (
                            <li key={s.t} className="rounded-2xl bg-[#f3ebdd] p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <s.i className="w-6 h-6 text-[#9a4f1c]" aria-hidden="true" />
                                    <span className="text-xs font-bold tracking-widest text-stone-400">STEP {n + 1}</span>
                                </div>
                                <h3 className="text-[#241a12] mb-2">{s.t}</h3>
                                <p className="text-sm text-stone-600">{s.d}</p>
                            </li>
                        ))}
                    </ol>
                    <p className="text-sm text-stone-600 mt-6 max-w-3xl">To avoid surprises, ask us to state in the quote anything that matters to you: waiting time, extra stops, a return leg or a child seat.</p>
                </div>
            </section>

            {/* ================= PRE-BOOKED VS ON-DEMAND ================= */}
            <section aria-labelledby="compare" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 id="compare" className={`${h2} mb-4`}>Pre-Booked Car or On-Demand Ride?</h2>
                    <p className="text-stone-600 mb-8">They suit different trips. We only offer the first one.</p>
                    <div className="overflow-x-auto rounded-2xl border border-[#241a12]/10 bg-white">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="bg-[#241a12] text-white">
                                    <th scope="col" className="px-4 py-3.5 font-bold"><span className="sr-only">Feature</span></th>
                                    <th scope="col" className="px-4 py-3.5 font-bold">Pre-booked private car</th>
                                    <th scope="col" className="px-4 py-3.5 font-bold">Street taxi or ride app</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#241a12]/10">
                                {[
                                    ['When you arrange it', 'In advance', 'When you need it'],
                                    ['Price', 'Agreed before you travel', 'Meter or app fare'],
                                    ['Vehicle', 'Chosen for your group and luggage', 'Whichever is nearby'],
                                    ['Long journeys out of Tabuk', 'Planned with you', 'Depends on the driver'],
                                    ['Best for', 'Airport runs, families, long distances, fixed schedules', 'Short, spontaneous hops'],
                                ].map(([k, a, b]) => (
                                    <tr key={k}>
                                        <th scope="row" className="px-4 py-3.5 font-bold text-[#241a12] align-top">{k}</th>
                                        <td className="px-4 py-3.5 text-stone-700 align-top"><Check className="inline w-4 h-4 mr-1.5 -mt-0.5 text-[#9a4f1c]" aria-hidden="true" />{a}</td>
                                        <td className="px-4 py-3.5 text-stone-500 align-top"><Minus className="inline w-4 h-4 mr-1.5 -mt-0.5" aria-hidden="true" />{b}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-stone-600 mt-4">More on the options in town: <Link href="/blog/is-there-uber-in-tabuk/" className={link}>Is there Uber in Tabuk?</Link> and <Link href="/blog/how-to-get-around-tabuk-as-a-tourist/" className={link}>getting around Tabuk</Link>.</p>
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section aria-labelledby="vehicles" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 id="vehicles" className={`${h2} mb-4`}>Vehicles You Can Request</h2>
                    <p className="text-stone-600 mb-8">Pick by seats and luggage. Availability is confirmed for your date.</p>
                    <div className="overflow-x-auto rounded-2xl border border-[#241a12]/10">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="bg-[#f3ebdd] text-[#241a12]">
                                    <th scope="col" className="px-4 py-3.5 font-bold">Vehicle</th>
                                    <th scope="col" className="px-4 py-3.5 font-bold">Type</th>
                                    <th scope="col" className="px-4 py-3.5 font-bold">Passengers</th>
                                    <th scope="col" className="px-4 py-3.5 font-bold">Large bags</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#241a12]/10">
                                {FLEET.map((v) => (
                                    <tr key={v.name}>
                                        <th scope="row" className="px-4 py-3.5"><Link href={v.href} className="font-bold text-[#241a12] hover:underline">{v.name.split(' /')[0]}</Link></th>
                                        <td className="px-4 py-3.5 text-stone-600">{v.cls}</td>
                                        <td className="px-4 py-3.5 text-stone-600">Up to {v.passengers}</td>
                                        <td className="px-4 py-3.5 text-stone-600">About {v.luggage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-stone-600 mt-4">Not sure which one? The <Link href={`${HUB}#vehicles`} className={link}>vehicle selector on the Tabuk hub</Link> narrows it down from your group and luggage.</p>
                </div>
            </section>

            {/* ================= WHERE TO ================= */}
            <section aria-labelledby="where" className="bg-[#241a12] text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
                    <div>
                        <h2 id="where" className="text-3xl md:text-4xl font-extrabold mb-3">Know Where You&apos;re Going?</h2>
                        <p className="text-white/70">Each journey has its own page with the details. For the full picture of the northwest, start at the <Link href={HUB} className="font-semibold text-[#f0c987] hover:underline">Tabuk transport hub</Link>.</p>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                        {TABUK_ROUTES.map((r) => (
                            <li key={r.to}><Link href={r.href} className="inline-block rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold hover:border-[#e2a23b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2a23b]">Tabuk → {r.to}</Link></li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Booking a Taxi in Tabuk: Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#241a12]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#241a12] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= TABUK GUIDES ================= */}
            <section aria-label="Tabuk guides" className="bg-white px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-6xl mx-auto">
                    <TopicCluster
                        mainTopic="Tabuk Guides"
                        clusters={[
                            {
                                category: 'Getting there',
                                relevance: 'Primary',
                                items: [
                                    { label: 'Airport (TUU) Arrivals Guide', url: '/blog/tabuk-airport-tuu-arrivals-guide/' },
                                    { label: 'Airport to City Guide', url: '/blog/how-to-get-from-tabuk-airport-to-city/' },
                                    { label: 'Getting Around as a Tourist', url: '/blog/how-to-get-around-tabuk-as-a-tourist/' },
                                    { label: 'Is There Uber in Tabuk?', url: '/blog/is-there-uber-in-tabuk/' },
                                    { label: 'Car Rental at the Airport', url: '/blog/car-rental-tabuk-airport-worth-it/' },
                                ],
                            },
                            {
                                category: 'Journeys from Tabuk',
                                relevance: 'Secondary',
                                items: [
                                    { label: 'Tabuk to NEOM Guide', url: '/blog/how-to-get-to-neom-from-tabuk/' },
                                    { label: 'Visiting NEOM from Tabuk', url: '/blog/can-tourists-visit-neom-from-tabuk/' },
                                    { label: 'Tabuk to AlUla Guide', url: '/blog/how-to-get-from-tabuk-to-alula/' },
                                    { label: 'Hegra (Madain Salih) Guide', url: '/blog/hegra-madain-salih-how-to-visit-from-tabuk/' },
                                    { label: 'Tabuk to Haql Guide', url: '/blog/tabuk-to-haql-transport-guide/' },
                                    { label: 'Tabuk to Madinah Guide', url: '/blog/tabuk-to-madinah-private-car-guide/' },
                                    { label: 'Tabuk to Jeddah Guide', url: '/blog/tabuk-to-jeddah-transport-guide/' },
                                    { label: 'Tabuk to Riyadh Guide', url: '/blog/tabuk-to-riyadh-transport-guide/' },
                                    { label: 'Sharma Beach Guide', url: '/blog/tabuk-to-sharma-beach-how-to-get-there/' },
                                ],
                            },
                            {
                                category: 'In and around Tabuk',
                                relevance: 'Tertiary',
                                items: [
                                    { label: 'Complete Tabuk Travel Guide', url: '/blog/complete-tabuk-travel-guide/' },
                                    { label: 'Top Places to Visit', url: '/blog/top-places-to-visit-tabuk-saudi-arabia/' },
                                    { label: 'Things to Do in Tabuk', url: '/blog/top-places-visit-things-do-tabuk/' },
                                    { label: 'Tabuk Castle & Fort Guide', url: '/blog/tabuk-castle-fort-visitor-guide/' },
                                    { label: 'Railway Museum Guide', url: '/blog/tabuk-castle-railway-museum-guide/' },
                                    { label: 'Al Disah Valley', url: '/blog/al-disah-valley-tabuk-how-to-visit/' },
                                    { label: 'Best Red Sea Beaches', url: '/blog/best-red-sea-beaches-near-tabuk/' },
                                    { label: 'Red Sea Beaches (Magna, Tayyib Ism)', url: '/blog/tabuk-red-sea-beaches-magna-tayyib-ism/' },
                                    { label: 'Adventure, Hiking & Camping', url: '/blog/tabuk-adventure-activities-hiking-camping/' },
                                    { label: 'Best Photo Spots', url: '/blog/tabuk-photography-instagram-spots/' },
                                    { label: 'Best Restaurants & Cafes', url: '/blog/best-restaurants-cafes-food-tabuk/' },
                                    { label: 'Shopping Guide (Malls & Markets)', url: '/blog/shopping-guide-malls-markets-tabuk/' },
                                    { label: 'Best Time to Visit (Weather)', url: '/blog/best-time-to-visit-tabuk-weather/' },
                                    { label: 'Travel Itinerary Planning', url: '/blog/tabuk-travel-itinerary-planning/' },
                                    { label: 'Travel Tips & Cost Checklist', url: '/blog/tabuk-travel-tips-checklist-cost/' },
                                    { label: 'Budget to Luxury Travel Guide', url: '/blog/tabuk-budget-luxury-family-solo-travel/' },
                                ],
                            },
                        ]}
                    />
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#241a12]">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Ready to Book Your Car in Tabuk?</h2>
                    <p className="text-lg text-white/80 mb-10">Send the journey now. You get the vehicle and the price back before anything is confirmed.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-[#e2a23b] text-[#241a12] hover:bg-[#ebb65c]">
                            <a href={QUOTE_HREF}>Get My Price</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book on WhatsApp</a>
                        </Button>
                    </div>
                    <p className="text-sm text-white/60 mt-8"><Link href="/tabuk-airport-taxi/" className="underline hover:text-white">Tabuk Airport (TUU)</Link> • <Link href={HUB} className="underline hover:text-white">Tabuk transport hub</Link> • <Link href="/services/private-driver/" className="underline hover:text-white">Private driver</Link></p>
                </div>
            </section>
        </div>
    );
}
