import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Info, Waves, Landmark, Compass, Plane, Check, CalendarDays, MapPin, ClipboardCheck, Car } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import DubaQuoteCard from '@/components/duba/DubaQuoteCard';
import QuoteAction from '@/components/duba/QuoteAction';
import DubaIntent from '@/components/duba/DubaIntent';
import RoadTripBuilder, { type TripClass } from '@/components/duba/RoadTripBuilder';
import DubaFleet, { type DubaFleetCard } from '@/components/duba/DubaFleet';
import { DUBA, DUBA_ROUTES, dubaRoute, TUU } from '@/data/dubaRoutes';
import { vehicles } from '@/lib/supabase';

const PAGE_URL = DUBA.pageUrl;
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for a journey from Duba. Pickup, destination, date, passengers and luggage: ')}`;

export const metadata: Metadata = {
    title: 'Duba Private Transfers & Coastal Transport | Taxi Service KSA',
    description: 'Book a private transfer in Duba for intercity journeys, Red Sea travel and Northwest Saudi routes including Tabuk, Al Wajh, Haql and AlUla.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Duba Private Transfers & Coastal Transportation',
        description: 'Private transport for Duba, the Red Sea coast and Northwest Saudi Arabia.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private transfers from Duba' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Duba Private Transfers & Coastal Transportation',
        description: 'Private transport for Duba, the Red Sea coast and Northwest Saudi Arabia.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

// Fleet figures come from the booking system's vehicle list - one source of truth.
// `studio` marks cut-out shots on a white background; the rest are photos that fill the frame.
const FLEET_META: { cls: string; name: string; studio: boolean; use: string }[] = [
    { cls: 'Sedan', name: 'Toyota Camry', studio: false, use: 'Couples or small groups with limited luggage.' },
    { cls: 'SUV', name: 'Toyota Fortuner', studio: false, use: 'Families and longer coastal drives.' },
    { cls: 'Large SUV', name: 'GMC Yukon XL / Denali', studio: true, use: 'More luggage and extra comfort on long journeys.' },
    { cls: 'Van', name: 'Hyundai Staria VIP', studio: false, use: 'Groups who want to travel together.' },
];
const FLEET: DubaFleetCard[] = FLEET_META.flatMap((m) => {
    const v = vehicles.find((x) => x.name === m.name);
    return v ? [{ ...m, image: v.image, passengers: v.passengers, luggage: v.luggage }] : [];
});
const pick = (names: string[]) => names.flatMap((n) => { const v = vehicles.find((x) => x.name === n); return v ? [{ name: v.name, passengers: v.passengers, luggage: v.luggage }] : []; });
const CLASSES: TripClass[] = [
    { cls: 'Sedan', vehicles: pick(['Toyota Camry']) },
    { cls: 'SUV', vehicles: pick(['Toyota Fortuner']) },
    { cls: 'Large SUV', vehicles: pick(['GMC Yukon XL / Denali']) },
    { cls: 'Van', vehicles: pick(['Hyundai Staria VIP', 'Toyota Hiace']) },
];

const faqs = [
    { q: 'Do you provide private transfers from Duba to Tabuk?', a: 'Yes. Door-to-door from your Duba address to Tabuk city or Tabuk Airport (TUU), one-way or return. Our Tabuk–Duba route page covers the journey in detail.' },
    { q: 'Can I book a Duba to AlUla transfer?', a: 'Yes, as a long-distance private transfer or part of a longer Northwest itinerary. Send your date, group size and luggage for a quote.' },
    { q: 'Can I travel from Duba to Al Wajh or Haql?', a: 'Yes. Both are quoted as private coastal transfers from your exact Duba pickup to your exact destination.' },
    { q: 'Can I book a return trip?', a: 'Yes. Choose "Return" on the form and tell us when you want to come back; any waiting is agreed in the quote.' },
    { q: 'Can I book a vehicle for several hours?', a: 'Yes. Choose "Hourly / itinerary" and tell us roughly how many hours and which stops you plan. We confirm availability for your date.' },
    { q: 'Which vehicle is suitable for a family with luggage?', a: 'It depends on the number of people and bags. The vehicle selector on this page shows seats and luggage space for each option.' },
    { q: 'Can I arrange airport transportation from Duba?', a: 'Yes, to and from Tabuk Airport (TUU). Add your flight number when you book so the pickup time allows for the road and the airport.' },
    { q: 'Do you provide local short-distance taxi service in Duba?', a: 'No. This is pre-booked private transport - mainly intercity, airport and planned journeys - not a street-hail taxi for short rides around town.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private transfers from Duba',
            url: PAGE_URL,
            serviceType: 'Pre-booked private transfer',
            description: 'Pre-booked private transport from Duba to Tabuk and TUU airport, Haql, Al Wajh, the NEOM area, AlUla and other Northwest Saudi destinations, including return trips and hourly itineraries.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: { '@type': 'City', name: 'Duba' },
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const eyebrow = 'text-xs font-bold uppercase tracking-[0.24em]';
const link = 'font-semibold text-[#1f6f8b] hover:underline';
const btnDark = 'group inline-flex items-center gap-2 rounded-xl bg-[#0b2a3a] px-5 py-3 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa77a] focus-visible:ring-offset-2';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

// Illustration (not a photo): evening over the Red Sea, the mountains behind the coast and the coastal road.
function DubaScene({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 620" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="db-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#0b2a3a" />
                    <stop offset="0.6" stopColor="#2b4a5c" />
                    <stop offset="1" stopColor="#d9956a" />
                </linearGradient>
                <linearGradient id="db-sea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1f6f8b" />
                    <stop offset="1" stopColor="#0b2a3a" />
                </linearGradient>
            </defs>
            <rect width="1440" height="620" fill="url(#db-sky)" />
            <circle cx="360" cy="420" r="50" fill="#f3c59a" fillOpacity="0.55" />
            {/* Mountains inland (right) */}
            <path d="M620 430 L 760 330 L 860 390 L 980 300 L 1100 380 L 1230 320 L 1440 400 V 620 H 620 Z" fill="#2d3238" />
            <path d="M760 460 L 900 400 L 1020 440 L 1160 390 L 1300 450 L 1440 430 V 620 H 760 Z" fill="#3b3a37" />
            {/* Sea (left) */}
            <path d="M0 440 H 720 C 660 480, 620 540, 600 620 H 0 Z" fill="url(#db-sea)" />
            <path d="M60 470 H 230 M300 500 H 460 M120 540 H 300" stroke="#f3c59a" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
            {/* Historic fort on the shore */}
            <g fill="#1b2328">
                <path d="M640 470 V 428 H 656 V 418 H 672 V 428 H 720 V 412 H 736 V 402 H 752 V 412 H 770 V 470 Z" />
                <rect x="690" y="440" width="6" height="12" fill="#d9956a" fillOpacity="0.6" />
            </g>
            {/* Coastal road */}
            <path d="M600 620 C 680 540, 760 500, 1440 486" fill="none" stroke="#141a1e" strokeWidth="24" />
            <path d="M600 620 C 680 540, 760 500, 1440 486" fill="none" stroke="#cfa77a" strokeWidth="2.5" strokeDasharray="20 16" pathLength={1} className="route-draw" />
        </svg>
    );
}

// Schematic of Duba and the Northwest - relative positions only, not to scale.
function NorthwestMap({ className = '' }: { className?: string }) {
    const P = { haql: [115, 83], neom: [176, 250], duba: [242, 355], tabuk: [392, 211], alWajh: [372, 510], umluj: [511, 681], alula: [600, 459] } as const;
    const nodes: [keyof typeof P, string, 'l' | 'r'][] = [['haql', 'Haql', 'r'], ['neom', 'NEOM area', 'l'], ['tabuk', 'Tabuk', 'r'], ['alWajh', 'Al Wajh', 'r'], ['umluj', 'Umluj', 'r'], ['alula', 'AlUla', 'l']];
    const line = (a: keyof typeof P, b: keyof typeof P) => `M${P[a][0]} ${P[a][1]} L ${P[b][0]} ${P[b][1]}`;
    return (
        <svg viewBox="0 0 640 720" className={className} role="img" aria-labelledby="dm-t dm-d">
            <title id="dm-t">Duba and nearby destinations</title>
            <desc id="dm-d">Duba on the Red Sea coast. North along the coast: the NEOM area and Haql. Inland to the north-east: Tabuk. South along the coast: Al Wajh and Umluj. Inland to the south-east: AlUla. Schematic, not to scale.</desc>
            <path d="M0 0 H 95 L 100 90 C 130 180, 160 260, 225 350 C 290 430, 340 490, 360 520 C 420 600, 480 660, 500 720 H 0 Z" fill="#1f6f8b" fillOpacity="0.18" />
            <text x="70" y="470" fontSize="14" fontWeight="700" letterSpacing="5" fill="#1f6f8b" transform="rotate(55 70 470)">RED SEA</text>
            <g fill="none" stroke="#0b2a3a" strokeWidth="3" strokeLinecap="round">
                {(['haql', 'neom', 'tabuk', 'alWajh', 'alula'] as const).map((k, i) => <path key={k} d={line('duba', k)} pathLength={1} className="route-draw" style={{ animationDelay: `${i * 180}ms` }} />)}
                <path d={line('alWajh', 'umluj')} strokeDasharray="6 7" strokeOpacity="0.6" />
            </g>
            {nodes.map(([k, l, side]) => (
                <g key={k}>
                    <circle cx={P[k][0]} cy={P[k][1]} r="7" fill="#ffffff" stroke="#0b2a3a" strokeWidth="3" />
                    <text x={P[k][0] + (side === 'r' ? 13 : -13)} y={P[k][1] + 5} textAnchor={side === 'r' ? 'start' : 'end'} fontSize="16" fontWeight="700" fill="#0b2a3a">{l}</text>
                </g>
            ))}
            <circle cx={P.duba[0]} cy={P.duba[1]} r="20" fill="#cfa77a" fillOpacity="0.35" className="origin-center animate-ping motion-reduce:animate-none" style={{ transformBox: 'fill-box', animationDuration: '2.8s' }} />
            <circle cx={P.duba[0]} cy={P.duba[1]} r="12" fill="#0b2a3a" />
            <text x={P.duba[0] + 20} y={P.duba[1] + 7} fontSize="22" fontWeight="800" fill="#0b2a3a">DUBA</text>
        </svg>
    );
}

function RouteCard({ id, title, points, cta, quote, extra }: { id: Parameters<typeof dubaRoute>[0]; title: string; points: string[]; cta: string; quote: { to: string; trip?: 'one' | 'return' | 'hourly' }; extra?: React.ReactNode }) {
    const r = dubaRoute(id);
    return (
        <article className="h-full flex flex-col rounded-3xl bg-white border border-[#0b2a3a]/10 p-7">
            <p className={`${eyebrow} text-[#1f6f8b] mb-2`}>{r.kind}</p>
            <h3 className="text-[#0b2a3a] mb-4">{title}</h3>
            <ul className="space-y-2 text-sm text-slate-700 mb-5 flex-1">{points.map((p) => <li key={p} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#1f6f8b] shrink-0" aria-hidden="true" />{p}</li>)}</ul>
            {extra}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-2">
                <QuoteAction set={{ from: 'Duba city', to: quote.to, trip: quote.trip ?? 'one' }} className={btnDark}>{cta} <Arrow /></QuoteAction>
                <Link href={r.guide} className={`${link} text-sm`}>{r.to} guide</Link>
            </div>
        </article>
    );
}

export default function DubaPage() {
    return (
        <div className="duba-page bg-[#f6f0e6]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0b2a3a]">
                <DubaScene className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b2a3a]/90 via-[#0b2a3a]/[0.55] to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-10 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className={`${eyebrow} text-[#e7c9a0] mb-5`}>Duba • Tabuk Region • Red Sea Coast</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5">Duba Private Transfers &amp; Coastal Transportation</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl">Pre-book a private vehicle for Duba city, Red Sea travel, intercity journeys and onward trips across Northwest Saudi Arabia.</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#cfa77a] text-[#0b2a3a] hover:bg-[#dbb88e]">
                                <a href={QUOTE_HREF}>Plan My Duba Transfer <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Booking</a>
                            </Button>
                        </div>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <DubaQuoteCard vehicleOptions={FLEET.map((v) => v.name).concat(vehicles.some((v) => v.name === 'Toyota Hiace') ? ['Toyota Hiace'] : [])} />
                    </div>
                </div>
                <p className="absolute bottom-2 right-4 text-[10px] text-white/40">Illustration</p>
            </section>

            {/* ================= ROAD MEETS RED SEA ================= */}
            <section aria-labelledby="where" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
                    <Reveal>
                        <div className="relative rounded-[2rem] bg-[#ece4d6] p-3 max-w-md mx-auto lg:max-w-none">
                            <NorthwestMap className="w-full h-auto max-h-[520px]" />
                            <p className="absolute bottom-3 right-5 text-[11px] text-slate-500">Schematic, not to scale</p>
                        </div>
                    </Reveal>
                    <div>
                        <h2 id="where" className="text-3xl md:text-5xl font-extrabold text-[#0b2a3a] mb-5">Duba sits where the road meets the Red Sea</h2>
                        <p className="text-slate-700 leading-relaxed mb-8">Duba is a small port town on the northern Red Sea coast, in the Tabuk region. For centuries, people and goods moved along this coast - and today it is still a place people travel through, north towards Haql, inland to Tabuk and south towards Al Wajh and AlUla.</p>
                        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {[
                                { i: Waves, t: 'Red Sea coast', d: 'Access to Saudi Arabia’s northwestern coastline.' },
                                { i: Landmark, t: 'Historic Duba', d: 'An old town and a historic fort on the old pilgrim road to the south.' },
                                { i: Compass, t: 'Northwest gateway', d: 'Onward to Tabuk, Haql, Al Wajh, AlUla and beyond.' },
                            ].map((c) => (
                                <div key={c.t} className="rounded-2xl bg-white border border-[#0b2a3a]/10 p-5">
                                    <c.i className="w-5 h-5 text-[#1f6f8b] mb-3" aria-hidden="true" />
                                    <dt className="font-bold text-[#0b2a3a] mb-1">{c.t}</dt>
                                    <dd className="text-sm text-slate-600">{c.d}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>

            {/* ================= WHAT BRINGS YOU ================= */}
            <section aria-labelledby="brings" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="brings" className="text-3xl md:text-5xl font-extrabold text-[#0b2a3a] mb-3">What brings you to Duba?</h2>
                    <p className="text-slate-600 mb-8">Pick one - the quote form updates to match.</p>
                    <DubaIntent />
                </div>
            </section>

            {/* ================= HERITAGE ================= */}
            <section aria-labelledby="heritage" className="relative isolate overflow-hidden bg-[#1b2328] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 -z-10 opacity-[0.06] bg-[repeating-linear-gradient(90deg,#cfa77a_0_2px,transparent_2px_26px)]" aria-hidden="true" />
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10">
                    <div>
                        <Landmark className="w-8 h-8 text-[#cfa77a] mb-5" aria-hidden="true" />
                        <h2 id="heritage" className="text-3xl md:text-4xl font-extrabold">A city with a long history on the Red Sea</h2>
                    </div>
                    <div className="space-y-5 text-white/80 leading-relaxed">
                        <p>Duba’s old town grew up around its harbour, at a time when this coast was a route for traders and travellers.</p>
                        <div className="rounded-2xl border border-white/[0.15] p-6">
                            <h3 className="text-white mb-2">Al-Ozlam (Al-Azlam) Castle</h3>
                            <p className="text-white/75">A fort south of Duba, near the road to Al Wajh. It was a station on the Egyptian pilgrim road to Makkah in the Mamluk and Ottoman periods, where travellers could stop, rest and find water.</p>
                            <p className="mt-4 flex gap-2.5 text-sm text-white/[0.65]"><Info className="w-4 h-4 mt-0.5 text-[#cfa77a] shrink-0" aria-hidden="true" />Check current visitor arrangements before travelling.</p>
                        </div>
                        <QuoteAction set={{ from: 'Duba city', to: 'Al-Ozlam Castle', trip: 'return' }} className="group inline-flex items-center gap-2 font-bold text-[#cfa77a] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa77a] rounded">Quote a return trip to the fort <Arrow /></QuoteAction>
                    </div>
                </div>
            </section>

            {/* ================= GETTING AROUND ================= */}
            <section aria-labelledby="around" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="around" className="text-3xl md:text-5xl font-extrabold text-[#0b2a3a] mb-4">Getting around Duba</h2>
                    <p className="rounded-2xl border-2 border-[#cfa77a] bg-[#fbf3e6] p-5 text-[#0b2a3a] max-w-3xl mb-10"><strong>This service is designed for pre-booked private transport.</strong> It is not a street-hail taxi for short rides around town.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0b2a3a]/10 rounded-3xl overflow-hidden">
                        {[
                            { t: 'Pre-booked private transfer', d: 'A planned journey from your address to a set destination - hotel, coast, business or heritage site.' },
                            { t: 'Intercity transfer', d: 'Leaving Duba for Tabuk, the coast, AlUla or another Saudi city.' },
                            { t: 'Hourly vehicle', d: 'A car and driver for an agreed number of hours, for a custom itinerary. Availability confirmed for your date.' },
                        ].map((c) => (
                            <div key={c.t} className="bg-[#f6f0e6] p-7">
                                <h3 className="text-[#0b2a3a] mb-2">{c.t}</h3>
                                <p className="text-sm text-slate-600">{c.d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-slate-600 mt-6">Port and coastal pickups: pickup arrangements depend on the exact location and its access rules. Tell us exactly where you are and we confirm the meeting point.</p>
                </div>
            </section>

            {/* ================= TABUK + NORTHWEST COAST ================= */}
            <section aria-label="Duba to Tabuk and the Northwest coast" className="bg-[#0b2a3a] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden">
                    <article className="bg-[#0b2a3a] p-8 md:p-10">
                        <p className={`${eyebrow} text-[#e7c9a0] mb-3`}>Inland</p>
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-5">Duba to Tabuk Private Transfer</h2>
                        <ul className="space-y-2.5 text-white/80 mb-7">
                            {['Pickup from your Duba address', 'Door-to-door to Tabuk city or TUU airport', 'Room for luggage', 'Family and group vehicles', 'One-way, return or your own departure time'].map((x) => <li key={x} className="flex gap-3"><Check className="w-4 h-4 mt-1 text-[#cfa77a] shrink-0" aria-hidden="true" />{x}</li>)}
                        </ul>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                            <QuoteAction set={{ from: 'Duba city', to: 'Tabuk', trip: 'one' }} className="group inline-flex items-center gap-2 rounded-xl bg-[#cfa77a] px-5 py-3 font-bold text-[#0b2a3a] hover:bg-[#dbb88e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Get Duba → Tabuk Quote <Arrow /></QuoteAction>
                            <Link href={dubaRoute('tabuk').route!} className="text-sm font-semibold text-[#e7c9a0] hover:underline">Tabuk–Duba route</Link>
                        </div>
                    </article>
                    <article className="bg-[#123748] p-8 md:p-10">
                        <p className={`${eyebrow} text-[#e7c9a0] mb-3`}>North along the coast</p>
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-5">Duba to the Northwest Coast</h2>
                        <p className="text-white/75 mb-5">North of Duba lie the NEOM area and, further up, Haql on the Gulf of Aqaba. We quote to the exact place you are going.</p>
                        <p className="flex gap-3 rounded-2xl bg-white/[0.06] p-4 text-sm text-white/75 mb-7"><Info className="w-4 h-4 mt-0.5 text-[#e7c9a0] shrink-0" aria-hidden="true" />NEOM includes different destinations and work areas with their own access arrangements. We do not arrange access to project, construction or restricted areas - confirm your entry with your host first.</p>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                            <QuoteAction set={{ from: 'Duba city', to: 'NEOM area', trip: 'one' }} className="group inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-bold hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfa77a]">Quote a NEOM-area trip <Arrow /></QuoteAction>
                            <Link href={dubaRoute('neom').guide} className="text-sm font-semibold text-[#e7c9a0] hover:underline">NEOM guide</Link>
                        </div>
                    </article>
                </div>
            </section>

            {/* ================= AL WAJH / HAQL / ALULA ================= */}
            <section aria-labelledby="routes" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="routes" className="text-3xl md:text-5xl font-extrabold text-[#0b2a3a] mb-10">Along the coast and inland</h2>
                    <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:grid md:grid-cols-3 md:overflow-visible md:mx-0 md:px-0">
                        <li className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-auto">
                            <RouteCard id="alWajh" title="Duba → Al Wajh" cta="Plan Al Wajh Transfer" quote={{ to: 'Al Wajh' }} points={['One-way or return', 'Private vehicle with room for luggage', 'Family and group options', 'Stops on the way, if you plan them']} />
                        </li>
                        <li className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-auto">
                            <RouteCard id="haql" title="Duba → Haql" cta="Plan Haql Transfer" quote={{ to: 'Haql' }} points={['North along the coast to the Gulf of Aqaba', 'One-way or return', 'Coastal stops you plan in advance']} extra={<p className="text-xs text-slate-500 mb-4">Not every beach or camping spot can be reached by a standard vehicle. Confirm current access conditions for your exact destination before departure.</p>} />
                        </li>
                        <li className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-auto">
                            <RouteCard id="alula" title="Duba → AlUla" cta="Request Duba → AlUla Quote" quote={{ to: 'AlUla' }} points={['A long-distance journey inland', 'Links the coast with AlUla in one itinerary', 'Luggage-friendly vehicles', 'Custom departure time']} extra={<p className="text-xs text-slate-500 mb-4 font-semibold">Duba → inland Northwest → AlUla</p>} />
                        </li>
                    </ul>
                </div>
            </section>

            {/* ================= AIRPORT ================= */}
            <section aria-labelledby="airport" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 items-center">
                    <div>
                        <Plane className="w-7 h-7 text-[#1f6f8b] mb-5" aria-hidden="true" />
                        <h2 id="airport" className="text-3xl md:text-4xl font-extrabold text-[#0b2a3a] mb-4">Airport Transfers from Duba</h2>
                        <p className="text-slate-600">Duba is connected by road to Tabuk’s airport. Add your flight number when you book; we suggest a pickup time with room for the road and the airport.</p>
                    </div>
                    <div className="rounded-3xl bg-[#f6f0e6] p-7">
                        <p className="text-4xl font-extrabold text-[#0b2a3a]">{TUU.code}</p>
                        <p className="text-sm text-slate-600 mb-6">{TUU.name}</p>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                            <QuoteAction set={{ from: 'Duba city', to: TUU.quote, trip: 'one' }} className={btnDark}>Book a TUU transfer <Arrow /></QuoteAction>
                            <Link href={TUU.href} className={`${link} text-sm`}>Tabuk Airport guide</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= RED SEA COAST ================= */}
            <section aria-labelledby="coast" className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#0b2a3a] text-white">
                <DubaScene className="absolute inset-0 -z-10 w-full h-full opacity-50" />
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl">
                        <h2 id="coast" className="text-3xl md:text-5xl font-extrabold mb-6">Duba on Saudi Arabia’s Red Sea coast</h2>
                        <p className="text-white/[0.85] leading-relaxed mb-4">The coast around Duba is a mix of shoreline, marine views and roads that follow the sea between mountains and water - good ground for a road trip that links several coastal towns.</p>
                        <p className="text-white/[0.85] leading-relaxed">Resorts and islands elsewhere on the Red Sea have their own transport and access arrangements, so not every coastal destination is reached directly from Duba. Tell us your exact destination and we confirm what we can arrange.</p>
                    </div>
                </div>
            </section>

            {/* ================= ROAD TRIP BUILDER ================= */}
            <section aria-labelledby="builder" className="bg-[#123748] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="builder" className="text-3xl md:text-5xl font-extrabold mb-3">Build a Northwest Red Sea road trip</h2>
                    <p className="text-white/70 mb-10">Start in Duba, add the stops you want and choose where to finish.</p>
                    <RoadTripBuilder stops={DUBA_ROUTES.filter((r) => r.id !== 'alula').map((r) => r.to)} finishes={['Duba', 'Tabuk', 'AlUla', 'Another city']} classes={CLASSES} />
                </div>
            </section>

            {/* ================= VEHICLES + COMPARISON ================= */}
            <section aria-labelledby="vehicles" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className="text-3xl md:text-5xl font-extrabold text-[#0b2a3a] mb-3">Choose your vehicle</h2>
                    <p className="text-slate-600 mb-8">Pick your group size. Availability is confirmed for your date. <Link href="/fleet/" className={link}>See the full fleet</Link>.</p>
                    <DubaFleet cards={FLEET} />

                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b2a3a] mt-16 mb-6">Private transfer or hourly driver?</h2>
                    <div className="overflow-hidden rounded-2xl border border-[#0b2a3a]/10 bg-white max-w-3xl">
                        <table className="w-full text-sm">
                            <caption className="sr-only">Which booking type fits which need</caption>
                            <thead className="bg-[#0b2a3a] text-white">
                                <tr><th scope="col" className="text-left px-4 py-3">Need</th><th scope="col" className="px-3 py-3">Private transfer</th><th scope="col" className="px-3 py-3">Hourly / custom</th></tr>
                            </thead>
                            <tbody>
                                {[['One destination', true, false], ['Multiple stops', false, true], ['Fixed pickup and drop-off', true, false], ['Sightseeing itinerary', false, true], ['Full-day vehicle', false, true]].map(([n, a, b]) => (
                                    <tr key={n as string} className="border-t border-[#0b2a3a]/10">
                                        <th scope="row" className="text-left font-medium px-4 py-3 text-slate-700">{n as string}</th>
                                        <td className="text-center px-3 py-3">{a ? <><Check className="w-4 h-4 mx-auto text-[#1f6f8b]" aria-hidden="true" /><span className="sr-only">Yes</span></> : <span className="sr-only">No</span>}</td>
                                        <td className="text-center px-3 py-3">{b ? <><Check className="w-4 h-4 mx-auto text-[#1f6f8b]" aria-hidden="true" /><span className="sr-only">Yes</span></> : <span className="sr-only">No</span>}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ================= QUOTE + BOOKING FLOW ================= */}
            <section aria-labelledby="quote-h" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
                    <div>
                        <h2 id="quote-h" className="text-3xl md:text-4xl font-extrabold text-[#0b2a3a] mb-4">Get a Duba-specific quote</h2>
                        <p className="text-slate-600 mb-5">You see the price before you confirm. It depends on:</p>
                        <ul className="flex flex-wrap gap-2">
                            {['Pickup', 'Destination', 'Vehicle', 'Passengers', 'Luggage', 'One-way or return', 'Waiting', 'Extra stops'].map((x) => <li key={x} className="rounded-full bg-[#f6f0e6] px-3.5 py-2 text-sm text-[#0b2a3a]">{x}</li>)}
                        </ul>
                    </div>
                    <ol className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {['Choose pickup', 'Choose destination', 'Choose vehicle', 'Passengers & luggage', 'Receive quote', 'Confirm booking'].map((t, k) => (
                            <li key={t}>
                                <Reveal delay={k * 60} className="h-full">
                                    <div className="h-full rounded-2xl border border-[#0b2a3a]/10 p-5">
                                        <p className="text-xs font-bold text-[#1f6f8b] mb-2">0{k + 1}</p>
                                        <p className="font-bold text-[#0b2a3a] leading-snug">{t}</p>
                                    </div>
                                </Reveal>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ================= PLANNING + SEASONS ================= */}
            <section aria-label="Planning" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-3xl bg-white border border-[#0b2a3a]/10 p-7">
                        <ClipboardCheck className="w-6 h-6 text-[#1f6f8b] mb-4" aria-hidden="true" />
                        <h2 className="yanbu-card-title font-extrabold text-[#0b2a3a] mb-4">Before you travel from Duba</h2>
                        <ul className="space-y-2.5 text-slate-700">
                            {['Confirm the exact pickup location', 'Confirm the destination', 'Check how much luggage you have', 'Confirm the passenger count', 'Check site or visitor access where relevant', 'Confirm the return time for a day trip', 'Keep your contact number available'].map((x) => <li key={x} className="flex gap-2.5"><span className="mt-0.5 w-4 h-4 shrink-0 rounded border border-[#0b2a3a]/30" aria-hidden="true" />{x}</li>)}
                        </ul>
                    </div>
                    <div className="rounded-3xl bg-[#0b2a3a] text-white p-7">
                        <CalendarDays className="w-6 h-6 text-[#cfa77a] mb-4" aria-hidden="true" />
                        <h2 className="yanbu-card-title font-extrabold mb-4">Planning a Red Sea journey?</h2>
                        <ul className="space-y-3 text-white/80 text-sm">
                            <li><strong className="text-white">Heat:</strong> summer days on the coast are hot - plan outdoor stops for early or late in the day.</li>
                            <li><strong className="text-white">Daylight:</strong> long coastal and inland drives are easier to plan within daylight hours.</li>
                            <li><strong className="text-white">Coastal conditions:</strong> wind and sea conditions change with the season; check before planning beach or boat time.</li>
                            <li><strong className="text-white">Timing:</strong> for a multi-stop road trip, leave slack between stops rather than a tight schedule.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-extrabold text-[#0b2a3a] mb-8">Duba transfer questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#0b2a3a]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0b2a3a] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <p className="text-sm text-slate-600 mt-8">
                        Heading further? See <Link href="/locations/tabuk/" className={link}>Tabuk</Link>, <Link href="/locations/al-wajh/" className={link}>Al Wajh</Link>, <Link href="/locations/haql/" className={link}>Haql</Link>, <Link href="/locations/umluj/" className={link}>Umluj</Link>, <Link href="/locations/neom/" className={link}>NEOM</Link> and <Link href="/locations/alula/" className={link}>AlUla</Link>, or our <Link href="/services/intercity/" className={link}>intercity transfers</Link>, <Link href="/services/private-driver/" className={link}>private driver</Link>, <Link href="/services/tourism-transport/" className={link}>tourism transport</Link> and <Link href="/services/airport-transfers/" className={link}>airport transfers</Link>.
                    </p>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#0b2a3a]">
                <DubaScene className="absolute inset-0 -z-10 w-full h-full opacity-40" />
                <div className="max-w-3xl mx-auto text-center text-white">
                    <MapPin className="w-8 h-8 text-[#cfa77a] mx-auto mb-5" aria-hidden="true" />
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Where is your journey going from Duba?</h2>
                    <p className="text-lg text-white/80 mb-10">Duba is your starting point on the northern Red Sea. Tell us where you&apos;re going next and we&apos;ll arrange the private vehicle.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-[#cfa77a] text-[#0b2a3a] hover:bg-[#dbb88e]">
                            <a href={QUOTE_HREF}><Car className="w-5 h-5 mr-2" aria-hidden="true" />Get a Quote</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Booking</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
