import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Plane, PlaneLanding, Building2, HardHat, Landmark, Waves, Route, Clock, Users, Briefcase, Check, Info, Car, MessageCircle, MapPin, Mountain, ClipboardList } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import TabukQuoteCard from '@/components/tabuk/TabukQuoteCard';
import QuoteLink from '@/components/tabuk/QuoteLink';
import TabukNetwork from '@/components/tabuk/TabukNetwork';
import TabukArrivalPlanner from '@/components/tabuk/TabukArrivalPlanner';
import TabukVehicleFit, { type TabukVehicle } from '@/components/tabuk/TabukVehicleFit';
import { TABUK_ROUTES, TUU, tabukRoute } from '@/data/tabukRoutes';
import { vehicles } from '@/lib/supabase';

const PAGE_URL = 'https://taxiserviceksa.com/locations/tabuk/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for a journey in or from Tabuk. Pickup, destination, date, time, passengers and luggage: ')}`;
const NEOM_ACCESS = 'NEOM access and project-site entry depend on the destination and current authorization requirements.';

export const metadata: Metadata = {
    title: 'Tabuk Taxi & Private Transfers | NEOM, TUU & AlUla',
    description: 'Private taxi and transfer service in Tabuk for TUU Airport, NEOM, AlUla, Red Sea destinations and long-distance journeys across Saudi Arabia.',
    alternates: {
        canonical: PAGE_URL,
        languages: {
            en: PAGE_URL,
            ar: 'https://taxiserviceksa.com/ar/locations/tabuk/',
            ur: 'https://taxiserviceksa.com/ur/locations/tabuk/',
            'x-default': PAGE_URL,
        },
    },
    openGraph: {
        title: 'Tabuk Taxi & Private Transfer Service',
        description: 'Pre-booked private transport for Tabuk city, TUU Airport, NEOM connections, AlUla, the Red Sea coast and long-distance journeys.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private transfers in Tabuk and northwest Saudi Arabia' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tabuk Taxi & Private Transfer Service',
        description: 'Pre-booked private transport for Tabuk city, TUU Airport, NEOM connections, AlUla, the Red Sea coast and long-distance journeys.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

// Fleet figures come from the booking system's vehicle list - one source of truth.
// `studio` marks cut-out shots on a white background; the rest are photos that fill the frame.
const FLEET_META: [string, string, boolean][] = [
    ['Toyota Camry', 'Sedan', false],
    ['Genesis G80 VIP', 'Executive sedan', true],
    ['Cadillac Escalade', 'Large SUV', true],
    ['GMC Yukon XL / Denali', 'Large SUV', true],
    ['Hyundai Staria VIP', 'Van / MPV', false],
    ['Toyota Hiace', 'Group van', false],
    ['Toyota Coaster', 'Minibus', false],
];
const FLEET: TabukVehicle[] = FLEET_META.flatMap(([name, cls, studio]) => {
    const v = vehicles.find((x) => x.name === name);
    return v ? [{ name: v.name, cls, image: v.image, passengers: v.passengers, luggage: v.luggage, studio }] : [];
});

const faqs = [
    { q: 'How far is TUU Airport from Tabuk?', a: 'Prince Sultan bin Abdulaziz Airport (TUU) is Tabuk’s own airport, a short drive from the city’s hotels and districts. Our Tabuk Airport transfer guide carries the distance and timing details.' },
    { q: 'Can I book a private transfer from Tabuk Airport?', a: 'Yes, subject to availability. Add your flight number and arrival time when you book; pickup instructions come with your confirmed booking.' },
    { q: 'Can I travel from Tabuk to NEOM?', a: `Yes, as a pre-booked road journey. NEOM is a large region rather than one address, so we need the exact accommodation, site or meeting point before confirming the route. ${NEOM_ACCESS}` },
    { q: 'Can I travel from Tabuk to AlUla?', a: 'Yes, subject to availability. It is a long road journey, so tell us your passengers and luggage and whether you need a return.' },
    { q: 'Can I travel from Tabuk to Madinah?', a: 'Yes, as a pre-booked long-distance transfer. We confirm availability for your date when you request a quote.' },
    { q: 'Can I travel from Tabuk to Jeddah?', a: 'Yes, subject to availability and route confirmation. It is one of the longest journeys from Tabuk, so departure time and rest stops are agreed in advance.' },
    { q: 'Can you pick me up from a NEOM-related project location?', a: 'Only where it is operationally possible and at a pickup point your site allows. Send the project or company name and the exact pickup point. Site entry remains subject to the destination’s own access requirements.' },
    { q: 'Which vehicle is suitable for long-distance travel?', a: 'It depends on passengers and luggage rather than one “best” vehicle. Use the vehicle selector on this page; if you are close to a vehicle’s limit on a long drive, choose one size up.' },
    { q: 'Can I book a private driver by the hour?', a: 'You can request an hourly booking, where the vehicle stays with you between stops. Hourly availability in Tabuk is confirmed for your date.' },
    { q: 'Do you offer airport pickup late at night?', a: 'Late-night and early-morning pickups are arranged as pre-booked journeys. Send your flight time and we confirm availability before you rely on it.' },
    { q: 'How much does a Tabuk transfer cost?', a: 'Each journey is quoted on its pickup, destination, vehicle, passengers, luggage, date, time and any waiting, stops or return. You see the price before you confirm.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private transfers in Tabuk',
            url: PAGE_URL,
            serviceType: 'Pre-booked private transfer',
            description: 'Pre-booked private transport in Tabuk: TUU Airport transfers, city journeys, road connections toward NEOM, AlUla and the Red Sea coast, business travel, hourly drivers and long-distance transfers.',
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
const solid = 'group inline-flex items-center gap-2 rounded-xl bg-[#241a12] px-5 py-3 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2a23b] focus-visible:ring-offset-2';
const h2 = 'text-3xl md:text-5xl font-extrabold text-[#241a12]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

// Illustration (not a photo): northwest sandstone mesas, contour lines and a highway running to the horizon.
function NorthwestScene({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="tb-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#241a12" />
                    <stop offset="0.55" stopColor="#6b4424" />
                    <stop offset="1" stopColor="#e9b35c" />
                </linearGradient>
            </defs>
            <rect width="1440" height="600" fill="url(#tb-sky)" />
            <g fill="none" stroke="#f0c987" strokeOpacity="0.14">
                {Array.from({ length: 7 }, (_, i) => (
                    <ellipse key={i} cx="1080" cy="210" rx={110 + i * 80} ry={54 + i * 40} transform="rotate(-12 1080 210)" />
                ))}
            </g>
            <circle cx="1010" cy="392" r="46" fill="#f6d9a4" fillOpacity="0.8" />
            {/* Far mesas */}
            <path d="M520 430 L 590 372 H 700 L 742 410 L 800 352 H 930 L 980 408 L 1060 380 H 1170 L 1230 426 L 1300 392 H 1440 V 600 H 520 Z" fill="#8a5a30" />
            {/* Near ridges */}
            <path d="M0 470 L 110 410 H 250 L 320 462 L 430 432 L 560 478 L 760 452 L 960 486 L 1180 458 L 1440 490 V 600 H 0 Z" fill="#5c3a1e" />
            {/* Highway to the horizon */}
            <path d="M560 600 L 990 470 L 1010 470 L 900 600 Z" fill="#1a120b" />
            <path d="M730 600 L 1000 470" fill="none" stroke="#e2a23b" strokeWidth="3" strokeDasharray="0.06 0.05" pathLength={1} />
        </svg>
    );
}

export default function TabukPage() {
    const neom = tabukRoute('NEOM');
    const alula = tabukRoute('AlUla');
    return (
        <div className="tabuk-page bg-[#f3ebdd]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#241a12]">
                <NorthwestScene className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#241a12] via-[#241a12]/65 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-10 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className={`${eyebrow} text-[#f0c987] mb-5`}>Tabuk • Northwest Saudi Arabia</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5">Tabuk Taxi &amp; Private Transfer Service</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
                            Pre-book a private vehicle for Tabuk Airport, city travel, NEOM connections, AlUla journeys, Red Sea destinations and intercity transfers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#e2a23b] text-[#241a12] hover:bg-[#ebb65c]">
                                <a href={QUOTE_HREF}>Get a Tabuk Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book on WhatsApp</a>
                            </Button>
                        </div>
                        <p className="text-sm text-white/60">Private vehicle • Pre-booked • Door-to-door</p>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <TabukQuoteCard vehicleOptions={FLEET.map((v) => v.name)} />
                    </div>
                </div>
            </section>

            {/* ================= JOURNEY SELECTOR ================= */}
            <section aria-labelledby="kind" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="kind" className={`${h2} mb-8`}>What Kind of Tabuk Journey Do You Need?</h2>
                    <ul className="flex gap-3 overflow-x-auto snap-x pb-3 -mx-4 px-4 md:grid md:grid-cols-4 lg:grid-cols-7 md:overflow-visible md:mx-0 md:px-0">
                        {[
                            { i: Plane, t: 'Airport', s: 'TUU ↔ Tabuk or onward', href: '/tabuk-airport-taxi/' },
                            { i: Building2, t: 'City', s: 'Hotel, residence, business', href: '#city' },
                            { i: HardHat, t: 'NEOM', s: 'Tabuk ↔ NEOM destination', href: neom.guide! },
                            { i: Landmark, t: 'AlUla', s: 'Tabuk ↔ AlUla', href: alula.href },
                            { i: Waves, t: 'Red Sea', s: 'Haql, Al Wajh, the coast', href: '#coast' },
                            { i: Route, t: 'Intercity', s: 'Madinah, Jeddah, Riyadh', href: '/services/intercity/' },
                            { i: Clock, t: 'Private driver', s: 'Hourly or multi-stop', href: '/services/private-driver/' },
                        ].map((c) => {
                            const cls = 'block h-full rounded-2xl bg-white border border-[#241a12]/10 p-5 transition hover:border-[#e2a23b] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2a23b]';
                            const inner = (
                                <>
                                    <c.i className="w-6 h-6 text-[#9a4f1c] mb-3" aria-hidden="true" />
                                    <span className="block font-bold text-[#241a12] leading-snug">{c.t}</span>
                                    <span className="block text-xs text-stone-500 mt-1">{c.s}</span>
                                </>
                            );
                            return (
                                <li key={c.t} className="snap-start shrink-0 w-[44%] sm:w-[30%] md:w-auto">
                                    {c.href.startsWith('#') ? <a href={c.href} className={cls}>{inner}</a> : <Link href={c.href} className={cls}>{inner}</Link>}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            {/* ================= NETWORK ================= */}
            <section aria-labelledby="network" className="bg-white py-20 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
                    <div>
                        <p className={`${eyebrow} text-[#9a4f1c] mb-4`}>The Northwest journey network</p>
                        <h2 id="network" className={`${h2} mb-5`}>Tabuk Is More Than a City</h2>
                        <p className="text-stone-600 leading-relaxed mb-4">Most people who book a car in Tabuk are going somewhere else. They land at TUU or stay a night in the city, then head west to the NEOM region, to the coast at Haql or Al Wajh, south-east to AlUla, or onward to Madinah, Jeddah and Riyadh.</p>
                        <h3 className="text-[#241a12] mb-2">A strategic starting point for northwest Saudi Arabia</h3>
                        <p className="text-stone-600 leading-relaxed mb-6">These are long road journeys with little in between. One private vehicle from your Tabuk pickup to the final address keeps luggage and people together and lets you set the departure time.</p>
                        <ul className="grid grid-cols-3 gap-2 text-center text-sm">
                            {[['NEOM', 'Projects'], ['AlUla', 'Tourism'], ['Red Sea', 'Coastal travel']].map(([a, b]) => (
                                <li key={a} className="rounded-xl bg-[#f3ebdd] px-2 py-3"><span className="block font-bold text-[#241a12]">{a}</span><span className="block text-xs text-stone-500">{b}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative rounded-3xl bg-[#f3ebdd] p-3">
                        <TabukNetwork className="w-full h-auto max-h-[480px]" />
                        <p className="absolute bottom-3 right-5 text-[11px] text-stone-500">Schematic, not to scale</p>
                    </div>
                </div>
            </section>

            {/* ================= TUU AIRPORT ================= */}
            <section aria-labelledby="airport" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Plane className="w-7 h-7 text-[#9a4f1c] mb-5" aria-hidden="true" />
                    <h2 id="airport" className={`${h2} mb-4`}>Tabuk Airport Transfers</h2>
                    <p className="text-stone-600 max-w-2xl mb-8">Prince Sultan bin Abdulaziz Airport (TUU) is where most northwest journeys begin. Add your flight number and the quote form asks only for what an airport pickup needs.</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                        {[
                            { t: 'TUU → Tabuk', d: 'Airport to hotel, residence or business.', to: 'Tabuk city' },
                            { t: 'TUU → NEOM', d: 'Airport to a confirmed NEOM destination.', to: 'NEOM' },
                            { t: 'TUU → AlUla', d: 'Airport to your AlUla hotel or resort.', to: 'AlUla' },
                            { t: 'TUU → Red Sea', d: 'Airport to Haql, Al Wajh or the coast.', to: '' },
                        ].map((r) => (
                            <li key={r.t}>
                                <QuoteLink set={{ from: TUU, to: r.to }} className="group flex h-full w-full flex-col text-left rounded-2xl bg-white border border-[#241a12]/10 p-5 transition hover:border-[#e2a23b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2a23b]">
                                    <span className="text-lg font-bold text-[#241a12]">{r.t}</span>
                                    <span className="text-sm text-stone-600 flex-1 mt-1">{r.d}</span>
                                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#241a12]">Get a quote <Arrow /></span>
                                </QuoteLink>
                            </li>
                        ))}
                    </ul>
                    <Link href="/tabuk-airport-taxi/" className={`${solid} mb-14`}>View Tabuk Airport Transfer Guide <Arrow /></Link>

                    <h3 className="text-[#241a12] mb-5">Landing at TUU? Find your booking type</h3>
                    <TabukArrivalPlanner />

                    <h3 className="text-[#241a12] mt-14 mb-2">Which airport are you using?</h3>
                    <p className="text-stone-600 max-w-2xl mb-5">The northwest has two airports. They are not interchangeable - check which one your ticket says.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white border border-[#241a12]/10 p-6">
                            <p className="text-3xl font-extrabold text-[#241a12]">TUU</p>
                            <p className="text-sm font-semibold text-stone-500 mb-3">Tabuk Airport</p>
                            <p className="text-sm text-stone-600">For Tabuk itself and for road journeys on to the surrounding region.</p>
                        </div>
                        <div className="rounded-2xl bg-white border border-[#241a12]/10 p-6">
                            <p className="text-3xl font-extrabold text-[#241a12]">NUM</p>
                            <p className="text-sm font-semibold text-stone-500 mb-3">NEOM Bay Airport</p>
                            <p className="text-sm text-stone-600 mb-3">For when your final destination is in or near the NEOM region and your flight operates there.</p>
                            <Link href="/locations/neom/" className={link}>NEOM transfers and airports</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= NEOM ================= */}
            <section aria-labelledby="neom" className="bg-[#241a12] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div>
                        <HardHat className="w-7 h-7 text-[#e2a23b] mb-5" aria-hidden="true" />
                        <h2 id="neom" className="text-3xl md:text-5xl font-extrabold mb-5">From Tabuk Toward NEOM</h2>
                        <p className="text-white/75 leading-relaxed mb-6">Tabuk is one starting point for road journeys toward the NEOM region. What we need from you is the exact destination, because &quot;NEOM&quot; on its own is not an address.</p>
                        <ul className="space-y-2.5 text-white/[0.85] mb-6">
                            {['NEOM is a large region, not a single point.', 'Travel requirements vary by project and location.', 'Some project areas have controlled access.'].map((x) => <li key={x} className="flex gap-3"><Check className="w-4 h-4 mt-1 text-[#e2a23b] shrink-0" aria-hidden="true" />{x}</li>)}
                        </ul>
                        <p className="flex gap-3 rounded-xl bg-white/[0.07] p-4 text-sm text-white/[0.85] mb-7"><Info className="w-4 h-4 mt-0.5 text-[#f0c987] shrink-0" aria-hidden="true" />{NEOM_ACCESS}</p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            <Link href={neom.guide!} className="group inline-flex items-center gap-2 rounded-xl bg-[#e2a23b] px-5 py-3 font-bold text-[#241a12] hover:bg-[#ebb65c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">NEOM access &amp; destinations <Arrow /></Link>
                            <Link href={neom.href} className="font-semibold text-[#f0c987] hover:underline">Tabuk → NEOM route</Link>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-[#f3ebdd] text-[#241a12] p-7">
                        <h3 className="mb-4">Tabuk and NEOM are different travel destinations</h3>
                        <dl className="space-y-4 text-sm">
                            <div><dt className="font-bold">Tabuk</dt><dd className="text-stone-600">A city with an airport, hotels and local business.</dd></div>
                            <div><dt className="font-bold">NEOM</dt><dd className="text-stone-600">A large regional development area with several separate destinations, each with its own access requirements.</dd></div>
                        </dl>
                        <p className="text-sm text-stone-600 border-l-2 border-[#e2a23b] pl-4 mt-5">If your booking only says &quot;NEOM&quot;, we ask for the exact project, accommodation or meeting point before confirming the route.</p>
                    </div>
                </div>
            </section>

            {/* ================= ALULA ================= */}
            <section aria-labelledby="alula" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    <div>
                        <Landmark className="w-7 h-7 text-[#9a4f1c] mb-5" aria-hidden="true" />
                        <h2 id="alula" className={`${h2} mb-4`}>Tabuk to AlUla</h2>
                        <p className="text-stone-600 leading-relaxed mb-6">AlUla lies south-east of Tabuk, and the road between them is one of the main tourism connections in the northwest. Visitors fly into TUU and continue by car, or add AlUla to a wider trip.</p>
                        <ul className="flex flex-wrap gap-2 mb-7">
                            {['International visitors', 'Families', 'Hotel transfers', 'Airport connections', 'Private road journey'].map((x) => <li key={x} className="rounded-full bg-[#f3ebdd] px-3 py-1.5 text-sm text-[#241a12]">{x}</li>)}
                        </ul>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            <Link href={alula.href} className={solid}>Tabuk → AlUla route <Arrow /></Link>
                            <Link href={alula.guide!} className={link}>Getting around AlUla</Link>
                        </div>
                    </div>
                    <p className="rounded-2xl bg-[#f3ebdd] p-6 text-sm text-stone-600">Distance, drive time and stops for this journey live on the route page, so there is one place to check them. Site tickets and tours in AlUla are booked separately from the transfer.</p>
                </div>
            </section>

            {/* ================= RED SEA ================= */}
            <section id="coast" aria-labelledby="coast-title" className="scroll-mt-32 bg-[#e6f0f1] py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Waves className="w-7 h-7 text-[#1f5f69] mb-5" aria-hidden="true" />
                    <h2 id="coast-title" className={`${h2} mb-4`}>From Tabuk Toward the Red Sea</h2>
                    <p className="text-stone-700 max-w-2xl mb-8">The coast is a long drive from Tabuk in either direction, so choose the vehicle around your passengers and luggage, not just the headcount.</p>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { ...tabukRoute('Haql'), d: 'North-west, on the Gulf of Aqaba.' },
                            { ...tabukRoute('Al Wajh'), d: 'South-west, on the Red Sea coast.' },
                        ].map((r) => (
                            <li key={r.to} className="rounded-2xl bg-white border border-[#1f5f69]/[0.15] p-6 flex flex-col">
                                <p className={`${eyebrow} text-[#1f5f69] mb-2`}>Tabuk →</p>
                                <h3 className="text-[#241a12] mb-2">{r.to}</h3>
                                <p className="text-sm text-stone-600 flex-1 mb-5">{r.d}</p>
                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                                    <Link href={r.href} className={qbtn}>Transfer details <Arrow /></Link>
                                    <Link href={r.guide!} className="text-sm font-semibold text-[#1f5f69] hover:underline">{r.to} transport</Link>
                                </div>
                            </li>
                        ))}
                        <li className="rounded-2xl bg-white border border-[#1f5f69]/[0.15] p-6 flex flex-col">
                            <p className={`${eyebrow} text-[#1f5f69] mb-2`}>Custom route</p>
                            <h3 className="text-[#241a12] mb-2">Another coastal destination</h3>
                            <p className="text-sm text-stone-600 flex-1 mb-5">Duba, Umluj or a specific resort: send the exact place and we confirm whether we can cover it.</p>
                            <QuoteLink set={{ from: 'Tabuk', to: '' }} className={qbtn}>Request this route <Arrow /></QuoteLink>
                        </li>
                    </ul>
                </div>
            </section>

            {/* ================= TABUK CITY ================= */}
            <section id="city" aria-labelledby="city-title" className="scroll-mt-32 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <Building2 className="w-7 h-7 text-[#9a4f1c] mb-5" aria-hidden="true" />
                        <h2 id="city-title" className={`${h2} mb-4`}>Private Transportation Around Tabuk</h2>
                        <p className="text-stone-600 leading-relaxed mb-6">For journeys inside the city: between a hotel and the airport, a residence and an office, or a run of appointments and meetings.</p>
                        <ul className="grid grid-cols-2 gap-2 mb-6">
                            {['Hotel ↔ airport', 'Hotel ↔ business location', 'Residence ↔ office', 'Shopping', 'Appointments', 'Several stops in one trip'].map((x) => <li key={x} className="rounded-lg bg-white border border-[#241a12]/10 px-3 py-2.5 text-sm font-semibold text-[#241a12]">{x}</li>)}
                        </ul>
                        <p className="rounded-xl border-2 border-[#e2a23b] bg-[#fbf3e2] p-4 text-sm text-[#241a12]"><strong>Pre-booked only.</strong> This is private transport arranged in advance, not a street-hail or shared taxi service.</p>
                    </div>
                    <div>
                        <h3 className="text-[#241a12] mb-4">Where people ask to go in Tabuk</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                { t: 'Tabuk Castle', d: 'Send your hotel as the pickup; tell us if the driver should wait.', href: '/blog/tabuk-castle-fort-visitor-guide/', l: 'Visitor guide' },
                                { t: 'City hotels', d: 'The hotel name is enough for pickup or drop-off.' },
                                { t: 'Souq & central areas', d: 'Name a landmark or drop a map pin for the meeting point.' },
                                { t: 'Business locations', d: 'Company name plus the entrance or reception to use.' },
                            ].map((p) => (
                                <li key={p.t} className="rounded-2xl bg-white border border-[#241a12]/10 p-5">
                                    <MapPin className="w-5 h-5 text-[#9a4f1c] mb-2" aria-hidden="true" />
                                    <p className="font-bold text-[#241a12]">{p.t}</p>
                                    <p className="text-sm text-stone-600">{p.d}</p>
                                    {p.href && <Link href={p.href} className={`${link} text-sm mt-2 inline-block`}>{p.l}</Link>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= BUSINESS & PROJECT ================= */}
            <section aria-labelledby="business" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div>
                        <Briefcase className="w-7 h-7 text-[#9a4f1c] mb-5" aria-hidden="true" />
                        <h2 id="business" className={`${h2} mb-6`}>Business Transportation in Tabuk</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                            {['Airport → hotel', 'Hotel → meeting', 'Tabuk → project location', 'Contractor and consultant travel', 'Scheduled site visits', 'Multi-stop business day', 'Long-distance business transfer'].map((x) => <li key={x} className="flex gap-3 rounded-lg bg-[#f3ebdd] px-4 py-3 font-semibold text-[#241a12]"><Check className="w-4 h-4 mt-1 text-[#9a4f1c] shrink-0" aria-hidden="true" />{x}</li>)}
                        </ul>
                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                            <Link href="/services/business/" className={qbtn}>Business chauffeur service <Arrow /></Link>
                            <Link href="/services/private-driver/" className={link}>Private driver</Link>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-[#241a12] text-white p-7">
                        <h3 className="mb-3">Pickup at a business or project site?</h3>
                        <p className="text-white/70 text-sm mb-5">Mark it on the quote form and add what gets the car to the right point:</p>
                        <ul className="space-y-2 text-sm text-white/[0.85] mb-5">
                            {['Company or project name', 'Exact pickup point', 'Site or reception instructions', 'Contact person, if needed', 'Access notes', 'Passengers and equipment'].map((x) => <li key={x} className="flex gap-2.5"><MapPin className="w-4 h-4 mt-0.5 text-[#e2a23b] shrink-0" aria-hidden="true" />{x}</li>)}
                        </ul>
                        <p className="text-xs text-white/60 mb-6">Site entry remains subject to the destination&apos;s own access requirements.</p>
                        <QuoteLink set={{ from: 'Tabuk', project: true }} className="group inline-flex items-center gap-2 rounded-xl bg-[#e2a23b] px-5 py-3 font-bold text-[#241a12] hover:bg-[#ebb65c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                            Add project details <Arrow />
                        </QuoteLink>
                    </div>
                </div>
            </section>

            {/* ================= LONG-DISTANCE ================= */}
            <section aria-labelledby="long" className="bg-[#241a12] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Mountain className="w-7 h-7 text-[#e2a23b] mb-5" aria-hidden="true" />
                    <h2 id="long" className="text-3xl md:text-5xl font-extrabold mb-4">Long-Distance Private Transfers From Tabuk</h2>
                    <p className="text-white/70 max-w-2xl mb-8">Popular journeys from Tabuk. Each route page holds that journey&apos;s distance, drive time and details.</p>
                    <ul className="flex gap-3 overflow-x-auto snap-x pb-3 -mx-4 px-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:mx-0 sm:px-0">
                        {TABUK_ROUTES.map((r) => (
                            <li key={r.to} className="snap-start shrink-0 w-[70%] sm:w-auto">
                                <Link href={r.href} className="group flex h-full flex-col rounded-2xl border border-white/[0.15] p-5 min-h-[150px] transition hover:border-[#e2a23b] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2a23b]">
                                    <span className="text-sm text-white/60">Tabuk</span>
                                    <ArrowDown className="w-4 h-4 my-1 text-[#e2a23b]" aria-hidden="true" />
                                    <span className="text-lg font-bold">{r.to}</span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#f0c987] flex-1 mt-1">{r.kind}</span>
                                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold">View journey <Arrow /></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-14 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
                        <h3>Built around longer northwest journeys</h3>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                            {['Air conditioning', 'Luggage space', 'Passenger comfort', 'Rest stops, planned where needed', 'Vehicle size', 'Departure timing', 'Route conditions'].map((x) => <li key={x} className="rounded-lg border border-white/[0.15] px-3 py-2.5 text-white/[0.85]">{x}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLE SELECTOR ================= */}
            <section aria-labelledby="vehicles" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Car className="w-7 h-7 text-[#9a4f1c] mb-5" aria-hidden="true" />
                    <h2 id="vehicles" className={`${h2} mb-4`}>Which Vehicle Fits Your Tabuk Journey?</h2>
                    <p className="text-stone-600 max-w-2xl mb-8">Answer three questions - you see the smallest vehicles with enough seats and luggage space.</p>
                    <TabukVehicleFit fleet={FLEET} />
                    <p className="text-sm text-stone-500 mt-4">Vehicle availability is confirmed for your date. <Link href="/fleet/" className={link}>See the full fleet</Link>.</p>
                </div>
            </section>

            {/* ================= PRIVATE DRIVER + FAMILY ================= */}
            <section aria-label="Hourly and family travel" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <Reveal className="h-full">
                        <article className="h-full rounded-3xl bg-[#f3ebdd] p-8">
                            <Clock className="w-7 h-7 text-[#9a4f1c] mb-5" aria-hidden="true" />
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#241a12] mb-5">Need the Vehicle for Several Stops?</h2>
                            <ol className="flex flex-wrap items-center gap-2 mb-6 text-sm font-semibold text-[#241a12]" aria-label="Example day">
                                {['Hotel', 'Meeting', 'Business location', 'Lunch', 'Airport'].map((s, i, a) => (
                                    <li key={s} className="flex items-center gap-2"><span className="rounded-lg bg-white px-3 py-2 border border-[#241a12]/10">{s}</span>{i < a.length - 1 && <ArrowRight className="w-4 h-4 text-[#9a4f1c]" aria-hidden="true" />}</li>
                                ))}
                            </ol>
                            <div className="grid grid-cols-2 gap-3 mb-5">
                                <div className="rounded-xl bg-white border border-[#241a12]/10 p-4"><p className="font-bold text-[#241a12]">Transfer</p><p className="text-sm text-stone-600">Point A → point B.</p></div>
                                <div className="rounded-xl bg-[#241a12] text-white p-4"><p className="font-bold">Hourly driver</p><p className="text-sm text-white/70">The vehicle stays with you for an agreed time and itinerary.</p></div>
                            </div>
                            <p className="text-sm text-stone-600 mb-5">Hourly availability in Tabuk is confirmed for your date.</p>
                            <div className="flex flex-wrap gap-x-5 gap-y-3">
                                <Link href={`/booking/?${new URLSearchParams({ from: 'Tabuk', trip: 'hourly', hours: '4' }).toString()}`} className={qbtn}>Request an hourly booking <Arrow /></Link>
                                <Link href="/services/private-driver/" className={link}>Private driver service</Link>
                            </div>
                        </article>
                    </Reveal>
                    <Reveal className="h-full" delay={100}>
                        <article className="h-full rounded-3xl border border-[#241a12]/10 p-8">
                            <Users className="w-7 h-7 text-[#9a4f1c] mb-5" aria-hidden="true" />
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#241a12] mb-5">Travelling Through Northwest Saudi Arabia With Family?</h2>
                            <ul className="space-y-2.5 text-stone-700 mb-6">
                                {['Larger vehicles for bigger families', 'Luggage counted before the vehicle is chosen', 'Child seats on request, where available', 'Comfort planned for long drives', 'Return trips', 'Multi-stop itineraries'].map((x) => <li key={x} className="flex gap-3"><Check className="w-4 h-4 mt-1 text-[#9a4f1c] shrink-0" aria-hidden="true" />{x}</li>)}
                            </ul>
                            <p className="text-sm text-stone-600 mb-5">Choose based on passenger count and luggage.</p>
                            <a href="#vehicles" className={qbtn}>Use the vehicle selector <Arrow /></a>
                        </article>
                    </Reveal>
                </div>
            </section>

            {/* ================= PRICING / DETAILS / PLANNING ================= */}
            <section aria-labelledby="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="rounded-2xl bg-white border border-[#241a12]/10 p-7">
                        <h2 id="pricing" className="yanbu-card-title font-extrabold text-[#241a12] mb-4">What Determines Your Tabuk Transfer Price?</h2>
                        <ul className="flex flex-wrap gap-2 mb-6">
                            {['Pickup', 'Destination', 'Vehicle', 'Passengers', 'Luggage', 'Date', 'Time', 'One-way or return', 'Waiting', 'Stops', 'Special requirements', 'Project / site requirements'].map((x) => <li key={x} className="rounded-full bg-[#f3ebdd] px-3 py-1.5 text-sm text-[#241a12]">{x}</li>)}
                        </ul>
                        <Button asChild className="group h-auto py-3.5 px-6 rounded-xl font-bold bg-[#241a12] text-white hover:bg-black">
                            <a href={QUOTE_HREF}>Request a Tabuk Quote <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" /></a>
                        </Button>
                    </div>
                    <div className="rounded-2xl bg-white border border-[#241a12]/10 p-7">
                        <ClipboardList className="w-6 h-6 text-[#9a4f1c] mb-3" aria-hidden="true" />
                        <h2 className="yanbu-card-title font-extrabold text-[#241a12] mb-4">Send Us These Details</h2>
                        <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-stone-700">
                            {['Pickup location', 'Destination', 'Date', 'Time', 'Passengers', 'Luggage', 'Vehicle preference', 'Flight number', 'Project / site name', 'Return journey', 'Special requirements'].map((x) => <li key={x} className="flex gap-2.5"><span className="mt-0.5 w-4 h-4 shrink-0 rounded border border-[#241a12]/30" aria-hidden="true" />{x}</li>)}
                        </ul>
                    </div>
                    <div className="rounded-2xl bg-[#241a12] text-white p-7">
                        <h2 className="yanbu-card-title font-extrabold mb-4">Planning a Long Drive From Tabuk?</h2>
                        <p className="text-white/70 text-sm mb-4">We don&apos;t guarantee an arrival time. Actual travel time varies with:</p>
                        <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-white/[0.85] mb-4">
                            {['Departure time', 'Traffic', 'Road conditions', 'Weather', 'Rest stops', 'Airport procedures', 'Site access', 'Stops you request'].map((x) => <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#e2a23b] shrink-0" aria-hidden="true" />{x}</li>)}
                        </ul>
                        <p className="text-sm text-[#f0c987]"><PlaneLanding className="inline w-4 h-4 mr-1.5 -mt-0.5" aria-hidden="true" />Catching a flight? Allow sufficient buffer beyond the road estimate.</p>
                    </div>
                </div>
            </section>

            {/* ================= WHAT TO EXPECT + TOURISM ================= */}
            <section aria-labelledby="expect" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="expect" className="text-3xl md:text-4xl font-extrabold text-[#241a12] mb-8">What You Can Expect</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-14">
                        {[
                            [Info, 'Clear booking details', 'Pickup, destination, date and vehicle confirmed before travel.'],
                            [Car, 'Private vehicle', 'No shared passengers on a private booking.'],
                            [Users, 'Vehicle matching', 'Chosen around your passengers and luggage.'],
                            [MessageCircle, 'Direct communication', 'Handled through WhatsApp or the booking form.'],
                            [Route, 'Route-specific planning', 'Long-distance needs discussed before departure.'],
                        ].map(([I, t, d]) => {
                            const Icon = I as typeof Info;
                            return (
                                <div key={t as string} className="rounded-2xl bg-[#f3ebdd] p-5">
                                    <Icon className="w-5 h-5 text-[#9a4f1c] mb-3" aria-hidden="true" />
                                    <h3 className="text-[#241a12] mb-1">{t as string}</h3>
                                    <p className="text-sm text-stone-600">{d as string}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="rounded-3xl border border-[#241a12]/10 p-7 md:p-9 grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-6 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#241a12] mb-3">Explore Tabuk and the Northwest</h2>
                            <p className="text-stone-600">Tabuk Castle and the city&apos;s heritage, mountain and desert scenery, AlUla, and the Red Sea coast - with a private vehicle for the day or for each leg.</p>
                        </div>
                        <Link href="/services/tourism-transport/" className={`${solid} justify-self-start md:justify-self-end`}>Explore Private Tourism Transport <Arrow /></Link>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-extrabold text-[#241a12] mb-8">Tabuk Transfer Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#241a12]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#241a12] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <p className="text-sm text-stone-500 mt-4">Airport figures and arrival details: <Link href="/tabuk-airport-taxi/" className={link}>Tabuk Airport transfer guide</Link>.</p>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <h2 id="related" className="sr-only">Related pages</h2>
                    {[
                        { t: 'Northwest destinations', l: [['Tabuk Airport (TUU)', '/tabuk-airport-taxi/'], ['NEOM', '/locations/neom/'], ['AlUla', '/locations/alula/'], ['Haql', '/locations/haql/'], ['Al Wajh', '/locations/al-wajh/'], ['Duba', '/locations/duba/']] },
                        { t: 'Routes from Tabuk', l: TABUK_ROUTES.filter((r) => r.group !== 'airport').map((r) => [`Tabuk → ${r.to}`, r.href]) },
                        { t: 'Services', l: [['Book a car in Tabuk', '/services/taxi-in-tabuk/'], ['Airport transfers', '/services/airport-transfers/'], ['Intercity transfers', '/services/intercity/'], ['Private driver', '/services/private-driver/'], ['Business chauffeur', '/services/business/'], ['Tourism transport', '/services/tourism-transport/'], ['VIP chauffeur', '/services/vip-chauffeur/']] },
                    ].map((g) => (
                        <div key={g.t}>
                            <p className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-3">{g.t}</p>
                            <ul className="flex flex-wrap gap-2">{g.l.map(([l, h]) => <li key={h}><Link href={h} className="inline-block rounded-full border border-[#241a12]/[0.15] px-4 py-2.5 text-sm font-semibold text-[#241a12] hover:border-[#e2a23b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2a23b]">{l}</Link></li>)}</ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#241a12]">
                <NorthwestScene className="absolute inset-0 -z-10 w-full h-full opacity-50" />
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Where Are You Going From Tabuk?</h2>
                    <p className="text-lg text-white/80 mb-10">Tell us your pickup point, destination, date, passengers and luggage. We&apos;ll help arrange the appropriate private vehicle for your journey.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-[#e2a23b] text-[#241a12] hover:bg-[#ebb65c]">
                            <a href={QUOTE_HREF}>Get a Tabuk Quote</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book on WhatsApp</a>
                        </Button>
                    </div>
                    <p className="text-sm text-white/60 mt-8">TUU Airport • NEOM • AlUla • Red Sea • Intercity</p>
                </div>
            </section>
        </div>
    );
}
