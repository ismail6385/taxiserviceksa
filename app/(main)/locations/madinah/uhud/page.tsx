import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Info, Car, Check, Clock, Users, Hotel, PlaneLanding, TrainFront, MapPin, ExternalLink } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import UhudQuoteCard from '@/components/uhud/UhudQuoteCard';
import QuoteAction from '@/components/uhud/QuoteAction';
import SitePicker from '@/components/uhud/SitePicker';
import ZiyaratBuilder, { type BuilderClass } from '@/components/uhud/ZiyaratBuilder';
import KhaybarFleet, { type FleetCard } from '@/components/khaybar/KhaybarFleet';
import { mountUhud, madinahToUhud } from '@/data/madinahPlaces';
import { ZIYARAT_SITE_PRESETS } from '@/data/ziyaratSites';
import { vehicles } from '@/lib/supabase';

const PAGE_URL = mountUhud.pageUrl;
const L = mountUhud.links;
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for a Mount Uhud visit from my Madinah hotel. Date, passengers and return: ')}`;

export const metadata: Metadata = {
    title: 'Mount Uhud Private Transfer & Ziyarat Taxi | Madinah',
    description: 'Book a private transfer from your Madinah hotel to Mount Uhud, with return service, waiting options and custom Ziyarat itineraries.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Mount Uhud Private Transfer & Ziyarat Transportation',
        description: 'Private transport from your Madinah hotel to Mount Uhud, with return and multi-stop Ziyarat options.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private transfer to Mount Uhud, Madinah' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mount Uhud Private Transfer & Ziyarat Transportation',
        description: 'Private transport from your Madinah hotel to Mount Uhud, with return and multi-stop Ziyarat options.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

// Fleet figures come from the booking system's vehicle list - one source of truth.
const FLEET_META: { cls: string; name: string; studio: boolean; comfort: string; use: string }[] = [
    { cls: 'Sedan', name: 'Toyota Camry', studio: false, comfort: 'Standard', use: 'Small groups going to Uhud and back.' },
    { cls: 'SUV', name: 'Toyota Fortuner', studio: false, comfort: 'Higher seating', use: 'Families, or a visit straight from the airport with luggage.' },
    { cls: 'Large SUV', name: 'GMC Yukon XL / Denali', studio: true, comfort: 'Premium', use: 'Larger families where available.' },
    { cls: 'Van', name: 'Hyundai Staria VIP', studio: false, comfort: 'Spacious', use: 'Groups visiting several Ziyarat stops together.' },
    { cls: 'Large van', name: 'Toyota Hiace', studio: false, comfort: 'Group', use: 'Larger groups travelling together.' },
];
const FLEET: FleetCard[] = FLEET_META.flatMap((m) => {
    const v = vehicles.find((x) => x.name === m.name);
    return v ? [{ ...m, image: v.image, passengers: v.passengers, luggage: v.luggage }] : [];
});
const pick = (names: string[]) => names.flatMap((n) => { const v = vehicles.find((x) => x.name === n); return v ? [{ name: v.name, passengers: v.passengers, luggage: v.luggage }] : []; });
const CLASSES: BuilderClass[] = [
    { cls: 'Sedan', vehicles: pick(['Toyota Camry']) },
    { cls: 'SUV', vehicles: pick(['Toyota Fortuner', 'GMC Yukon XL / Denali']) },
    { cls: 'Van', vehicles: pick(['Hyundai Staria VIP', 'Toyota Hiace']) },
];
// Ziyarat stops from the site's Madinah Ziyarat list.
const ZIYARAT_SITES = (ZIYARAT_SITE_PRESETS.find((c) => c.city === 'Madinah')?.sites ?? []).filter((s) => ['Mount Uhud', 'Masjid Quba', 'Masjid Qiblatain', "Seven Mosques (Sab'ah Masajid)"].includes(s));

const faqs = [
    { q: 'How far is Mount Uhud from central Madinah?', a: `${madinahToUhud.distance} north of Masjid an-Nabawi, according to ${madinahToUhud.source.label}. The distance from your hotel depends on where you are staying and which part of the Uhud area you visit.` },
    { q: 'How long does it take to reach Mount Uhud?', a: `${madinahToUhud.durationNote} Allow extra time around prayer times and busy periods.` },
    { q: 'Can I book a return transfer?', a: 'Yes. Choose "Return" and whether the driver waits or comes back at a set time.' },
    { q: 'Can the driver wait while I visit Uhud?', a: 'Waiting can be arranged when it is included in your booking. Tell us how long you expect to stay when you request a quote.' },
    { q: 'Can I combine Uhud with other Ziyarat sites?', a: 'Yes. Build a route with Quba, Qiblatain or other stops on this page, or see our Madinah Ziyarat service for complete itineraries.' },
    { q: 'Can I visit Uhud directly from Madinah Airport?', a: 'Yes, as an optional stop on the way to your hotel when your arrival time leaves enough time for it. Add your flight number when you book.' },
    { q: 'Can I visit Uhud from Madinah Train Station?', a: 'Yes, as an optional stop between the station and your hotel, when your schedule allows.' },
    { q: 'Do I need a ticket to enter Mount Uhud?', a: `${mountUhud.visitorInfo.ticket} Arrangements can change, so follow site instructions on the day.` },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private transfers to Mount Uhud',
            url: PAGE_URL,
            serviceType: 'Pre-booked private transfer',
            description: 'Private transport from Madinah hotels, the airport and the train station to Mount Uhud, with return trips, waiting and multi-stop Ziyarat itineraries.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: { '@type': 'City', name: 'Madinah' },
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const eyebrow = 'text-xs font-bold uppercase tracking-[0.24em]';
const link = 'font-semibold text-[#8a5530] hover:underline';
const btn = 'group inline-flex items-center gap-2 rounded-xl bg-[#2b2522] px-5 py-3 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5703f] focus-visible:ring-offset-2';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

// Illustration (not a photo): the long reddish ridge of Uhud in late light, with the city's low edge in front.
function UhudScene({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 620" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="uh-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#2b2522" />
                    <stop offset="0.6" stopColor="#5a3d2e" />
                    <stop offset="1" stopColor="#d6a275" />
                </linearGradient>
            </defs>
            <rect width="1440" height="620" fill="url(#uh-sky)" />
            <path d="M0 470 L 90 420 L 170 440 L 260 360 L 340 390 L 430 300 L 520 350 L 610 280 L 700 330 L 790 260 L 880 320 L 960 290 L 1060 350 L 1150 300 L 1240 370 L 1340 340 L 1440 390 V 620 H 0 Z" fill="#7a4b33" />
            <path d="M0 500 L 120 470 L 240 430 L 360 450 L 470 400 L 590 430 L 700 390 L 820 420 L 940 380 L 1080 430 L 1200 410 L 1320 440 L 1440 430 V 620 H 0 Z" fill="#5b3726" />
            <path d="M430 300 L 470 330 M790 260 L 820 300 M1150 300 L 1180 330" stroke="#a8694a" strokeWidth="3" strokeOpacity="0.6" />
            <g fill="#2b2522">
                <path d="M0 560 H 1440 V 620 H 0 Z" />
                {Array.from({ length: 24 }, (_, i) => <rect key={i} x={i * 62} y={544 - (i % 4) * 8} width={40 + (i % 3) * 8} height={20 + (i % 4) * 8} />)}
            </g>
            <path d="M0 596 C 400 580, 900 590, 1440 574" fill="none" stroke="#e2b48a" strokeWidth="2.5" strokeDasharray="18 14" pathLength={1} className="route-draw" />
        </svg>
    );
}

// Hotel → Uhud → chosen area → hotel, drawn as a loop. Not a map.
function LoopVisual({ className = '' }: { className?: string }) {
    const pts = [
        { x: 175, y: 170, l: 'Madinah hotel', a: 'end' as const, dx: -18, dy: 5 },
        { x: 300, y: 60, l: 'Mount Uhud', a: 'middle' as const, dx: 0, dy: -20 },
        { x: 425, y: 170, l: 'Chosen area', a: 'start' as const, dx: 18, dy: 5 },
    ];
    return (
        <svg viewBox="0 0 600 260" className={className} role="img" aria-labelledby="uh-loop-t">
            <title id="uh-loop-t">Madinah hotel to Mount Uhud, then the area you chose, then back to the hotel</title>
            <path d="M175 170 C 200 95, 245 60, 300 60 C 355 60, 400 95, 425 170 C 360 212, 240 212, 175 170" fill="none" stroke="#2b2522" strokeWidth="3" strokeLinecap="round" pathLength={1} className="route-draw" />
            {pts.map((p, i) => (
                <g key={p.l}>
                    <circle cx={p.x} cy={p.y} r="10" fill={i === 1 ? '#b5703f' : '#ffffff'} stroke="#2b2522" strokeWidth="3" />
                    <text x={p.x + p.dx} y={p.y + p.dy} textAnchor={p.a} fontSize="16" fontWeight="700" fill="#2b2522">{p.l}</text>
                </g>
            ))}
            <text x="300" y="238" textAnchor="middle" fontSize="13" fill="#6b5f55">Return to your hotel</text>
        </svg>
    );
}

export default function UhudPage() {
    return (
        <div className="uhud-page bg-[#f4efe8]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#2b2522]">
                <UhudScene className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2b2522]/90 via-[#2b2522]/[0.55] to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-10 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className={`${eyebrow} text-[#e2b48a] mb-5`}>Mount Uhud • Madinah</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-5">Mount Uhud Private Transfer &amp; Ziyarat Transportation</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl">Travel privately from your Madinah hotel to the Uhud area and return at your preferred time, or combine Uhud with other Ziyarat stops.</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#e2b48a] text-[#2b2522] hover:bg-[#ebc39e]">
                                <a href={QUOTE_HREF}>Plan My Uhud Visit <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Booking</a>
                            </Button>
                        </div>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <UhudQuoteCard vehicleOptions={FLEET.map((v) => v.name)} />
                    </div>
                </div>
                <p className="absolute bottom-2 right-4 text-[10px] text-white/40">Illustration</p>
            </section>

            {/* ================= LIVING HISTORY ================= */}
            <section aria-labelledby="history" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
                    <h2 id="history" className="text-3xl md:text-5xl font-semibold text-[#2b2522]">Mount Uhud is part of Madinah&apos;s living history</h2>
                    <div className="space-y-4 text-stone-700 leading-relaxed">
                        <p>Mount Uhud is the long mountain on the northern edge of Madinah. It is closely associated with the Battle of Uhud, fought in the third year after the Hijrah (625 CE), and Visit Saudi describes it as a mountain of historical and spiritual significance.</p>
                        <p>At its foot are the cemetery of the martyrs of Uhud, where Hamza ibn Abdul-Muttalib (may Allah be pleased with him) is buried, and the small hill of Jabal al-Rumah, associated with the archers during the battle.</p>
                        <p className="text-sm text-stone-500">Sources: <a href={madinahToUhud.source.href} target="_blank" rel="noopener noreferrer" className={link}>Visit Saudi<span className="sr-only"> (opens in a new tab)</span></a> · <a href="https://en.wikipedia.org/wiki/Battle_of_Uhud" target="_blank" rel="noopener noreferrer" className={link}>Battle of Uhud<span className="sr-only"> (opens in a new tab)</span></a></p>
                    </div>
                </div>
            </section>

            {/* ================= TIMELINE ================= */}
            <section aria-labelledby="flow" className="bg-[#2b2522] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10">
                    <div>
                        <h2 id="flow" className="text-3xl md:text-5xl font-semibold mb-4">Your Uhud visit, from hotel to return</h2>
                        <p className="text-white/70">One private vehicle, planned around how long you want to stay.</p>
                    </div>
                    <div className="relative pl-14">
                        <div className="absolute left-[1.1rem] top-0 bottom-0 w-0.5 bg-white/[0.15]" aria-hidden="true" />
                        <span className="car-descend absolute left-0 w-9 h-9 rounded-full bg-[#e2b48a] text-[#2b2522] flex items-center justify-center shadow-lg" aria-hidden="true"><Car className="w-4 h-4" /></span>
                        <ol className="space-y-8">
                            {[
                                ['Hotel pickup', 'The driver meets you at your Madinah accommodation, at the pickup point agreed with you.'],
                                ['Travel to Uhud', 'Straight to the Uhud-area stop you chose.'],
                                ['Visit', 'Time to visit the areas in your plan.'],
                                ['Return pickup', 'The driver waits if waiting was booked, or comes back at the agreed time.'],
                                ['Hotel drop-off', 'Back to your accommodation - or on to your next Ziyarat stop.'],
                            ].map(([t, d], i) => (
                                <li key={t}>
                                    <Reveal delay={i * 70}>
                                        <p className="text-xs font-bold text-[#e2b48a] mb-1">0{i + 1}</p>
                                        <h3 className="mb-1">{t}</h3>
                                        <p className="text-sm text-white/70">{d}</p>
                                    </Reveal>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* ================= WHAT TO SEE ================= */}
            <section aria-labelledby="see" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="see" className="text-3xl md:text-5xl font-semibold text-[#2b2522] mb-3">What would you like to see?</h2>
                    <p className="text-stone-600 mb-8">Choose a stop - it goes straight into your quote.</p>
                    <SitePicker />
                </div>
            </section>

            {/* ================= ROUTE + DISTANCE ================= */}
            <section aria-labelledby="route" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                    <div className="rounded-3xl bg-[#f4efe8] p-4">
                        <LoopVisual className="w-full h-auto" />
                    </div>
                    <div>
                        <h2 id="route" className="text-3xl md:text-4xl font-semibold text-[#2b2522] mb-5">How far is Uhud?</h2>
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                            <div className="rounded-2xl bg-[#f4efe8] p-5">
                                <dt className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">From Masjid an-Nabawi</dt>
                                <dd className="text-2xl font-semibold text-[#2b2522]">{madinahToUhud.distance}</dd>
                                <dd className="text-xs text-stone-500 mt-1">north, per {madinahToUhud.source.label}</dd>
                            </div>
                            <div className="rounded-2xl bg-[#f4efe8] p-5">
                                <dt className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">Travel time</dt>
                                <dd className="text-sm text-[#2b2522]">{madinahToUhud.durationNote}</dd>
                            </div>
                        </dl>
                        <p className="text-sm text-stone-600">Approximate distance and travel time vary by your hotel and exact Uhud stop.</p>
                    </div>
                </div>
            </section>

            {/* ================= ZIYARAT ================= */}
            <section aria-labelledby="ziyarat" className="bg-[#3a2f2a] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="ziyarat" className="text-3xl md:text-5xl font-semibold mb-3">Add Mount Uhud to a private Madinah Ziyarat</h2>
                    <p className="text-white/70 mb-10 max-w-2xl">Choose a quick option or build your own route. Want a complete multi-stop itinerary? Explore our <Link href={L.ziyarat} className="text-[#e2b48a] font-semibold hover:underline">Madinah Ziyarat service</Link>.</p>
                    <ZiyaratBuilder sites={ZIYARAT_SITES} classes={CLASSES} />
                </div>
            </section>

            {/* ================= ARRIVALS + HOTEL ================= */}
            <section aria-labelledby="arrive" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <h2 id="arrive" className="text-3xl md:text-4xl font-semibold text-[#2b2522] mb-5">Arriving in Madinah? Visit Uhud on the way to your hotel</h2>
                        <ul className="space-y-3 mb-5">
                            {[
                                { i: PlaneLanding, r: 'Madinah Airport → Mount Uhud → Hotel', set: { from: 'Prince Mohammad bin Abdulaziz Airport (MED)', to: 'Mount Uhud', trip: 'ziyarat' as const, notes: 'Stop at Uhud on the way to the hotel. Hotel: ' }, href: L.airport, l: 'Madinah Airport transfers' },
                                { i: TrainFront, r: 'Madinah Train Station → Mount Uhud → Hotel', set: { from: 'Madinah Train Station', to: 'Mount Uhud', trip: 'ziyarat' as const, notes: 'Stop at Uhud on the way to the hotel. Hotel: ' }, href: L.trainStation, l: 'Train station transfers' },
                            ].map((x) => (
                                <li key={x.r} className="rounded-2xl bg-white border border-stone-200 p-5">
                                    <p className="flex items-center gap-2 font-bold text-[#2b2522] mb-3"><x.i className="w-5 h-5 text-[#b5703f]" aria-hidden="true" />{x.r}</p>
                                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                                        <QuoteAction set={x.set} className="group inline-flex items-center gap-2 text-sm font-bold text-[#2b2522]">Add Uhud to my arrival <Arrow /></QuoteAction>
                                        <Link href={x.href} className={`${link} text-sm`}>{x.l}</Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm text-stone-600">Add Uhud as an optional stop when your arrival schedule allows enough time.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-stone-200 p-7 self-start">
                        <Hotel className="w-6 h-6 text-[#b5703f] mb-4" aria-hidden="true" />
                        <h2 className="yanbu-card-title font-semibold text-[#2b2522] mb-3">Hotel pickup across Madinah</h2>
                        <p className="text-stone-600 mb-3">Pickup can be arranged from your Madinah accommodation. Give us the hotel name when you book.</p>
                        <p className="text-sm text-stone-600">Some hotels, especially near the Haram, have controlled or busy drop-off areas. The exact pickup point is confirmed with you before the day.</p>
                    </div>
                </div>
            </section>

            {/* ================= RETURN OPTIONS ================= */}
            <section aria-labelledby="return" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="return" className="text-3xl md:text-5xl font-semibold text-[#2b2522] mb-10">Choose how you return</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-300 rounded-3xl overflow-hidden mb-8">
                        {[
                            { t: 'Driver waits', d: 'The vehicle stays available during your planned visit.', set: { trip: 'return' as const, to: 'Mount Uhud' } },
                            { t: 'Scheduled return', d: 'The driver comes back at a time agreed in advance.', set: { trip: 'return' as const, to: 'Mount Uhud', notes: 'Scheduled return at: ' } },
                            { t: 'One way', d: 'Drop-off only, if you are making your own way back or continuing elsewhere.', set: { trip: 'one' as const, to: 'Mount Uhud' } },
                        ].map((c) => (
                            <div key={c.t} className="bg-[#f4efe8] p-7 flex flex-col">
                                <h3 className="text-[#2b2522] mb-2">{c.t}</h3>
                                <p className="text-sm text-stone-600 flex-1 mb-5">{c.d}</p>
                                <QuoteAction set={c.set} className="group inline-flex items-center gap-2 text-sm font-bold text-[#2b2522] self-start">Choose this <Arrow /></QuoteAction>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <p className="flex gap-3 rounded-2xl border border-stone-200 p-5 text-sm text-stone-700"><Clock className="w-5 h-5 text-[#b5703f] shrink-0" aria-hidden="true" /><span><strong className="text-[#2b2522]">Waiting:</strong> waiting can be arranged when included in your booking. Tell us your expected visit duration when requesting a quote.</span></p>
                        <p className="flex gap-3 rounded-2xl border border-stone-200 p-5 text-sm text-stone-700"><Info className="w-5 h-5 text-[#b5703f] shrink-0" aria-hidden="true" /><span><strong className="text-[#2b2522]">How much time to allow:</strong> it depends on which areas you plan to see, walking time and your own plan. Allow more time if you are adding other Ziyarat stops.</span></p>
                    </div>
                </div>
            </section>

            {/* ================= FAMILY + VEHICLES ================= */}
            <section aria-labelledby="family" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Users className="w-7 h-7 text-[#b5703f] mb-5" aria-hidden="true" />
                    <h2 id="family" className="text-3xl md:text-5xl font-semibold text-[#2b2522] mb-4">Travelling with family or elderly passengers?</h2>
                    <p className="text-stone-700 max-w-2xl mb-2">Tell us when you book, so the vehicle and the plan can be arranged around your group.</p>
                    <p className="text-sm text-stone-600 max-w-2xl mb-10">Some areas around the site involve outdoor walking and uneven ground. Plan accordingly.</p>
                    <KhaybarFleet cards={FLEET} />
                    <p className="text-sm text-stone-500 mt-2">Availability is confirmed for your date. <Link href="/fleet/" className={link}>See the full fleet</Link>.</p>
                </div>
            </section>

            {/* ================= TRANSFER VS ZIYARAT ================= */}
            <section aria-labelledby="compare" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 id="compare" className="text-3xl md:text-4xl font-semibold text-[#2b2522] mb-8">Private transfer or Ziyarat itinerary?</h2>
                    <div className="overflow-hidden rounded-2xl border border-stone-200">
                        <table className="w-full text-sm">
                            <caption className="sr-only">Private transfer compared with a Ziyarat itinerary</caption>
                            <thead className="bg-[#2b2522] text-white"><tr><th scope="col" className="text-left px-4 py-3">Need</th><th scope="col" className="px-3 py-3">Private transfer</th><th scope="col" className="px-3 py-3">Ziyarat itinerary</th></tr></thead>
                            <tbody>
                                {[
                                    ['Hotel → Uhud', 'yes', 'yes'], ['Return trip', 'yes', 'yes'], ['Driver waits', 'If booked', 'Planned into the itinerary'],
                                    ['Several sites', 'Optional', 'yes'], ['Custom stops', 'Optional', 'yes'],
                                ].map(([n, a, b]) => (
                                    <tr key={n} className="border-t border-stone-200 even:bg-[#f4efe8]/60">
                                        <th scope="row" className="text-left font-medium px-4 py-3 text-stone-700">{n}</th>
                                        {[a, b].map((v, i) => <td key={i} className="text-center px-3 py-3 text-stone-700">{v === 'yes' ? <><Check className="w-4 h-4 mx-auto text-[#8a5530]" aria-hidden="true" /><span className="sr-only">Yes</span></> : v}</td>)}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ================= VISITOR INFO + PRICING ================= */}
            <section aria-labelledby="visitor" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-3xl bg-[#2b2522] text-white p-7">
                        <Info className="w-6 h-6 text-[#e2b48a] mb-4" aria-hidden="true" />
                        <h2 id="visitor" className="yanbu-card-title font-semibold mb-3">Visitor information</h2>
                        <p className="text-white/80 mb-3">{mountUhud.visitorInfo.ticket}</p>
                        <p className="text-white/80 mb-5">{mountUhud.visitorInfo.change}</p>
                        <a href={mountUhud.visitorInfo.source.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#e2b48a] hover:underline">Mount Uhud on {mountUhud.visitorInfo.source.label} <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span></a>
                    </div>
                    <div className="rounded-3xl bg-white border border-stone-200 p-7">
                        <MapPin className="w-6 h-6 text-[#b5703f] mb-4" aria-hidden="true" />
                        <h2 className="yanbu-card-title font-semibold text-[#2b2522] mb-3">Get your Uhud quote</h2>
                        <p className="text-stone-600 text-sm mb-4">Each visit is quoted for your plan, and you see the price before you confirm. It depends on:</p>
                        <ul className="flex flex-wrap gap-2 mb-6">{['Pickup', 'Destination', 'Vehicle', 'Passengers', 'Luggage', 'One way or return', 'Waiting', 'Number of stops', 'Duration'].map((x) => <li key={x} className="rounded-full bg-[#f4efe8] px-3 py-1.5 text-xs text-[#2b2522]">{x}</li>)}</ul>
                        <a href={QUOTE_HREF} className={btn}>Get Your Uhud Quote <Arrow /></a>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-semibold text-[#2b2522] mb-8">Mount Uhud visit questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-stone-200 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#2b2522] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <p className="text-sm text-stone-600 mt-8">
                        Planning more of your stay? See <Link href={L.madinah} className={link}>getting around Madinah</Link>, transfers to <Link href={L.quba} className={link}>Quba Mosque</Link> and <Link href={L.qiblatain} className={link}>Masjid Qiblatain</Link>, and the <Link href={L.makkah} className={link}>Madinah to Makkah</Link> journey.
                    </p>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#2b2522]">
                <UhudScene className="absolute inset-0 -z-10 w-full h-full opacity-50" />
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-5">Plan your visit to Mount Uhud</h2>
                    <p className="text-lg text-white/80 mb-10">Tell us your hotel, date, group size and whether you need the driver to wait or add other Ziyarat stops.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-[#e2b48a] text-[#2b2522] hover:bg-[#ebc39e]">
                            <a href={QUOTE_HREF}>Get Uhud Quote</a>
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
