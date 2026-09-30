import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Info, ExternalLink, Trees, Mountain, Route, Landmark, CalendarDays, MapPin, Car, Clock } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import KhaybarQuoteCard from '@/components/khaybar/KhaybarQuoteCard';
import CorridorLine from '@/components/khaybar/CorridorLine';
import JourneyChooser from '@/components/khaybar/JourneyChooser';
import DayTripBuilder, { type ClassOption } from '@/components/khaybar/DayTripBuilder';
import KhaybarFleet, { type FleetCard } from '@/components/khaybar/KhaybarFleet';
import QuoteAction from '@/components/khaybar/QuoteAction';
import { KHAYBAR } from '@/data/khaybar';
import { vehicles } from '@/lib/supabase';

const PAGE_URL = KHAYBAR.pageUrl;
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for a Khaybar trip. Starting point, date, passengers and plan: ')}`;

export const metadata: Metadata = {
    title: 'Khaybar Private Transfers & Heritage Tours | Taxi Service KSA',
    description: 'Book a private transfer to Khaybar from Madinah, AlUla or other Saudi cities. Choose one-way transport, return trips or a custom Khaybar itinerary.',
    alternates: {
        canonical: PAGE_URL,
        languages: {
            en: PAGE_URL,
            ar: 'https://taxiserviceksa.com/ar/locations/khayber-fort/',
            ur: 'https://taxiserviceksa.com/ur/locations/khayber-fort/',
            'x-default': PAGE_URL,
        },
    },
    openGraph: {
        title: 'Khaybar Private Transfers & Heritage Tours',
        description: 'Private transport between Madinah, Khaybar and AlUla, arranged around your itinerary.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private transfers to Khaybar' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Khaybar Private Transfers & Heritage Tours',
        description: 'Private transport between Madinah, Khaybar and AlUla, arranged around your itinerary.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

// Fleet figures come from the booking system's vehicle list - one source of truth.
// `studio` marks cut-out shots on a white background; the rest are photos that fill the frame.
const FLEET_META: { cls: string; name: string; studio: boolean; comfort: string; use: string }[] = [
    { cls: 'Sedan', name: 'Toyota Camry', studio: false, comfort: 'Standard', use: 'Couples or small groups with lighter luggage.' },
    { cls: 'SUV', name: 'Toyota Fortuner', studio: false, comfort: 'Higher seating', use: 'Families wanting more space and a higher seating position.' },
    { cls: 'Large SUV', name: 'GMC Yukon XL / Denali', studio: true, comfort: 'Premium', use: 'Larger families, more luggage or extra comfort on a long day.' },
    { cls: 'Van', name: 'Hyundai Staria VIP', studio: false, comfort: 'Spacious', use: 'Families and groups who want to travel together.' },
    { cls: 'Large van', name: 'Toyota Hiace', studio: false, comfort: 'Group', use: 'Larger groups travelling together.' },
];
const FLEET: FleetCard[] = FLEET_META.flatMap((m) => {
    const v = vehicles.find((x) => x.name === m.name);
    return v ? [{ ...m, image: v.image, passengers: v.passengers, luggage: v.luggage }] : [];
});
const pick = (names: string[]) => names.flatMap((n) => { const v = vehicles.find((x) => x.name === n); return v ? [{ name: v.name, passengers: v.passengers, luggage: v.luggage }] : []; });
const CLASSES: ClassOption[] = [
    { cls: 'Sedan', vehicles: pick(['Toyota Camry']) },
    { cls: 'SUV', vehicles: pick(['Toyota Fortuner', 'GMC Yukon XL / Denali']) },
    { cls: 'Van', vehicles: pick(['Hyundai Staria VIP', 'Toyota Hiace']) },
];

const faqs = [
    { q: 'Can I book a private transfer from Madinah to Khaybar?', a: 'Yes. Choose Madinah (city or airport) as your starting point, add your date and group size, and we quote the journey. Journey time depends on the exact pickup, road conditions and your plan.' },
    { q: 'Can I book a same-day return trip?', a: 'Yes. Choose "Return trip" or "Full-day Khaybar visit" and tell us roughly how long you want at Khaybar; waiting is agreed in the quote.' },
    { q: 'Can I travel from Khaybar to AlUla?', a: 'Yes, as a one-way transfer or as part of a longer itinerary. Our AlUla to Khaybar page covers the same corridor in the other direction.' },
    { q: 'Can the driver wait while I visit Khaybar?', a: 'Yes, when waiting is part of your booking - a day trip or multi-stop itinerary. Tell us your plan so the waiting time is included.' },
    { q: 'Which vehicle should I choose for a family?', a: 'It depends on the number of people and bags. The vehicle selector on this page shows seats and luggage space for each option.' },
    { q: 'Can I include multiple stops?', a: 'Yes. Choose "Multi-stop itinerary" and list your stops; we plan the route and quote it.' },
    { q: 'Do I need to arrange entry tickets separately?', a: 'Yes. Our service is transport only. Tickets, tours and guides for heritage or natural sites are arranged with the site or tour operator.' },
    { q: 'Can the driver take me directly to every heritage or natural site?', a: 'No. Access to archaeological and natural areas follows each site’s own rules, which can change - some areas are only visited on organised tours. The driver takes you to the permitted drop-off point.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private transfers to Khaybar',
            url: PAGE_URL,
            serviceType: 'Pre-booked private transfer',
            description: 'Private transport to and from Khaybar, including Madinah and AlUla transfers, return trips, day visits and multi-stop itineraries.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: { '@type': 'Place', name: 'Khaybar, Saudi Arabia' },
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const eyebrow = 'text-xs font-bold uppercase tracking-[0.24em]';
const link = 'font-semibold text-[#9b6a35] hover:underline';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

// Illustration (not a photo): dusk light over basalt plateaus, a fortification on a lava outcrop,
// the palm belt of the oasis below and distant volcanic cones - one of them pale.
function KhaybarScene({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="kb-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1b1a18" />
                    <stop offset="0.55" stopColor="#4a3526" />
                    <stop offset="0.9" stopColor="#c08a4a" />
                </linearGradient>
            </defs>
            <rect width="1440" height="640" fill="url(#kb-sky)" />
            {/* Distant cones - one pale, like the white volcanoes of Harrat Khaybar */}
            <path d="M820 360 L 900 290 L 980 360 Z" fill="#3a2d24" />
            <path d="M960 365 L 1060 270 L 1170 365 Z" fill="#d9cfc0" fillOpacity="0.55" />
            <path d="M1150 365 L 1230 305 L 1320 365 Z" fill="#3a2d24" />
            {/* Basalt plateau */}
            <path d="M0 420 L 120 392 L 260 404 L 420 380 L 600 398 L 760 372 L 980 392 L 1200 376 L 1440 396 V 640 H 0 Z" fill="#241d19" />
            {/* Fortification on a lava outcrop */}
            <g fill="#15110f" transform="translate(360 0)">
                <path d="M300 430 L 330 372 L 420 352 L 540 360 L 600 400 L 610 440 Z" />
                <path d="M350 372 V 318 H 372 V 306 H 392 V 318 H 440 V 300 H 462 V 290 H 484 V 300 H 520 V 330 H 540 V 364 L 350 372 Z" />
                <rect x="400" y="330" width="6" height="12" fill="#c08a4a" fillOpacity="0.5" />
                <rect x="470" y="318" width="6" height="12" fill="#c08a4a" fillOpacity="0.5" />
            </g>
            {/* Oasis palm belt */}
            <g fill="#1f2a1c">
                <path d="M0 500 C 200 470, 420 488, 640 472 S 1080 480, 1440 468 V 640 H 0 Z" />
                {Array.from({ length: 30 }, (_, i) => {
                    const x = 20 + i * 48;
                    const y = 478 - (i % 3) * 8;
                    return <path key={i} d={`M${x} ${y + 40} V ${y} M${x} ${y} q -18 -4 -26 8 M${x} ${y} q 18 -4 26 8 M${x} ${y} q -10 -14 -22 -14 M${x} ${y} q 10 -14 22 -14`} stroke="#1f2a1c" strokeWidth="4" fill="none" strokeLinecap="round" />;
                })}
            </g>
            <rect y="560" width="1440" height="80" fill="#171512" />
        </svg>
    );
}

// Two landscapes side by side: the oasis and the lava field.
function TwoLandscapes({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 600 520" aria-hidden="true">
            <defs>
                <linearGradient id="tl-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#f3e2c7" />
                    <stop offset="1" stopColor="#d9a86c" />
                </linearGradient>
            </defs>
            <rect width="600" height="520" fill="url(#tl-sky)" />
            {/* Harrat side: basalt plateau and cones, one pale */}
            <path d="M300 300 L 350 240 L 400 270 L 450 200 L 520 260 L 600 230 V 520 H 300 Z" fill="#2a2320" />
            <path d="M420 215 L 480 140 L 545 215 Z" fill="#e9e2d6" />
            <path d="M320 380 L 600 360 M320 440 L 600 430" stroke="#3a312c" strokeWidth="10" strokeLinecap="round" />
            {/* Oasis side: palms, fields and a water channel */}
            <path d="M0 330 C 90 310, 200 340, 300 318 V 520 H 0 Z" fill="#5f6d45" />
            {Array.from({ length: 6 }, (_, i) => {
                const x = 28 + i * 48;
                const y = 250 + (i % 2) * 14;
                return <path key={i} d={`M${x} ${y + 80} V ${y} M${x} ${y} q -24 -4 -34 12 M${x} ${y} q 24 -4 34 12 M${x} ${y} q -14 -20 -30 -20 M${x} ${y} q 14 -20 30 -20`} stroke="#34402a" strokeWidth="6" fill="none" strokeLinecap="round" />;
            })}
            <path d="M0 430 C 90 418, 190 440, 300 424" stroke="#9fb6c2" strokeWidth="8" fill="none" strokeLinecap="round" />
            <path d="M0 470 H 300" stroke="#7c8a58" strokeWidth="14" />
            <line x1="300" y1="0" x2="300" y2="520" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="2" />
            <text x="150" y="60" textAnchor="middle" fontSize="24" fontWeight="700" fill="#3f4a2f">Oasis</text>
            <text x="450" y="60" textAnchor="middle" fontSize="24" fontWeight="700" fill="#2a2320">Harrat</text>
        </svg>
    );
}

// Schematic of the Northwest corridor - relative positions only, not to scale.
function NorthwestMap({ className = '' }: { className?: string }) {
    const P = { tabuk: [120, 70], alula: [310, 265], yanbu: [330, 540], khaybar: [500, 365], madinah: [545, 500] } as const;
    return (
        <svg viewBox="0 0 640 600" className={className} role="img" aria-labelledby="nw-t nw-d">
            <title id="nw-t">Khaybar in the Northwest Saudi corridor</title>
            <desc id="nw-d">Madinah lies south of Khaybar, AlUla to the north-west, Tabuk further north-west and Yanbu to the west on the Red Sea coast. Schematic, not to scale.</desc>
            <path d="M0 160 C 110 300, 230 470, 330 600 H 0 Z" fill="#8fa3b0" fillOpacity="0.25" />
            <text x="60" y="470" fontSize="13" fontWeight="700" letterSpacing="4" fill="#5d7280" transform="rotate(55 60 470)">RED SEA</text>
            <path d={`M${P.madinah[0]} ${P.madinah[1]} L ${P.khaybar[0]} ${P.khaybar[1]} L ${P.alula[0]} ${P.alula[1]}`} fill="none" stroke="#1b1a18" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" pathLength={1} className="route-draw" />
            <path d={`M${P.alula[0]} ${P.alula[1]} L ${P.tabuk[0]} ${P.tabuk[1]} M${P.madinah[0]} ${P.madinah[1]} L ${P.yanbu[0]} ${P.yanbu[1]}`} fill="none" stroke="#9b6a35" strokeWidth="2" strokeDasharray="6 7" />
            {([
                ['madinah', 'Madinah', 'City · MED airport', 12, 0],
                ['khaybar', 'Khaybar', 'Oasis · Harrat', 16, 0],
                ['alula', 'AlUla', '', 14, 0],
                ['tabuk', 'Tabuk', '', 14, 0],
                ['yanbu', 'Yanbu', '', 14, 0],
            ] as const).map(([k, l, s, dx]) => (
                <g key={k}>
                    <circle cx={P[k][0]} cy={P[k][1]} r={k === 'khaybar' ? 11 : 7} fill={k === 'khaybar' ? '#c08a4a' : '#ffffff'} stroke="#1b1a18" strokeWidth="3" />
                    <text x={P[k][0] + dx} y={P[k][1] + 5} fontSize={k === 'khaybar' ? 20 : 15} fontWeight="800" fill="#1b1a18">{l}</text>
                    {s && <text x={P[k][0] + dx} y={P[k][1] + 24} fontSize="12" fill="#6b5f55">{s}</text>}
                </g>
            ))}
        </svg>
    );
}

export default function KhaybarPage() {
    return (
        <div className="khaybar-page bg-[#f3eee6]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#1b1a18]">
                <KhaybarScene className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1b1a18]/90 via-[#1b1a18]/50 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-8 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className={`${eyebrow} text-[#e0b07a] mb-5`}>Khaybar • Northwest Saudi Arabia</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-5">Khaybar Private Transfers &amp; Heritage Tours</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl">Travel comfortably between Madinah, Khaybar and AlUla with a private vehicle arranged around your itinerary.</p>
                        <div className="flex flex-col sm:flex-row gap-3 mb-8">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#e0b07a] text-[#1b1a18] hover:bg-[#e8c08f]">
                                <a href={QUOTE_HREF}>Plan My Khaybar Trip <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Booking</a>
                            </Button>
                        </div>
                        <div className="max-w-md hidden sm:block">
                            <CorridorLine stops={KHAYBAR.corridor} />
                        </div>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <KhaybarQuoteCard vehicleOptions={FLEET.map((v) => v.name)} />
                    </div>
                </div>
                <div className="sm:hidden px-4 pb-8">
                    <CorridorLine stops={KHAYBAR.corridor} />
                </div>
                <p className="absolute bottom-2 right-4 text-[10px] text-white/40">Illustration</p>
            </section>

            {/* ================= WHY KHAYBAR ================= */}
            <section aria-labelledby="why" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
                    <Reveal>
                        <div className="rounded-[2rem] overflow-hidden shadow-xl max-w-md mx-auto lg:max-w-none">
                            <TwoLandscapes className="w-full h-auto" />
                        </div>
                    </Reveal>
                    <div>
                        <p className={`${eyebrow} text-[#9b6a35] mb-4`}>Why Khaybar</p>
                        <h2 id="why" className="text-3xl md:text-5xl font-semibold text-[#1b1a18] mb-6">Khaybar is a journey, not just a stop</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">Khaybar has two sides. One is the historic oasis, where wadis meet between basalt plateaus and people have farmed and settled for thousands of years. The other is Harrat Khaybar, a wide volcanic field of dark lava flows and cones around it.</p>
                        <p className="text-stone-700 leading-relaxed mb-8">Visitors usually come from Madinah or AlUla, and a visit often means waiting, several stops and a return drive - so it is planned differently from an ordinary city ride.</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {[
                                { i: Trees, t: 'Historic oasis', d: 'A long-settled agricultural landscape, still lived in today.' },
                                { i: Mountain, t: 'Volcanic landscape', d: 'Harrat Khaybar looks very different from the surrounding desert.' },
                                { i: Route, t: 'Northwest connection', d: 'Often part of a wider Madinah–Khaybar–AlUla itinerary.' },
                            ].map((c) => (
                                <li key={c.t} className="rounded-2xl bg-white/70 border border-stone-200 p-5">
                                    <c.i className="w-5 h-5 text-[#9b6a35] mb-3" aria-hidden="true" />
                                    <h3 className="text-[#1b1a18] mb-1">{c.t}</h3>
                                    <p className="text-sm text-stone-600">{c.d}</p>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs text-stone-500 mt-5">Background: <a href={KHAYBAR.official.rcu} target="_blank" rel="noopener noreferrer" className={link}>Royal Commission for AlUla<span className="sr-only"> (opens in a new tab)</span></a>.</p>
                    </div>
                </div>
            </section>

            {/* ================= MAP ================= */}
            <section aria-labelledby="map" className="bg-[#faf7f1] py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
                    <div className="relative rounded-3xl bg-[#efe9df] p-3 order-2 lg:order-1">
                        <NorthwestMap className="w-full h-auto max-h-[480px]" />
                        <p className="absolute bottom-3 right-5 text-[11px] text-stone-500">Schematic, not to scale</p>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 id="map" className="text-3xl md:text-5xl font-semibold text-[#1b1a18] mb-5">Where Khaybar fits into your Northwest Saudi journey</h2>
                        <p className="text-stone-700 leading-relaxed mb-6">Khaybar lies north of Madinah, on the way towards AlUla. From there, trips can continue to Tabuk; Yanbu lies west of Madinah on the Red Sea coast.</p>
                        <p className="flex gap-3 rounded-2xl bg-white border border-stone-200 p-4 text-sm text-stone-600 mb-6"><Info className="w-4 h-4 mt-0.5 text-[#9b6a35] shrink-0" aria-hidden="true" />Route distance and travel time are worked out from your exact pickup and destination, so we don&apos;t show one fixed figure here.</p>
                        <div className="flex flex-wrap gap-2">
                            {[['Madinah', '/locations/madinah/'], ['AlUla', '/locations/alula/'], ['Tabuk', '/locations/tabuk/'], ['Yanbu', '/locations/yanbu/']].map(([l, h]) => (
                                <Link key={h} href={h} className="rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#1b1a18] hover:border-[#9b6a35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c08a4a]">{l}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CHOOSE JOURNEY ================= */}
            <section aria-labelledby="choose" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="choose" className="text-3xl md:text-5xl font-semibold text-[#1b1a18] mb-3">How would you like to experience Khaybar?</h2>
                    <p className="text-stone-600 mb-10">Choose one - the quote form above updates to match.</p>
                    <JourneyChooser />
                </div>
            </section>

            {/* ================= MADINAH → KHAYBAR / KHAYBAR → ALULA ================= */}
            <section aria-label="Main journeys" className="bg-[#1b1a18] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden">
                    <article className="bg-[#1b1a18] p-8 md:p-10">
                        <p className={`${eyebrow} text-[#e0b07a] mb-3`}>From the south</p>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-5">Madinah to Khaybar Private Transfer</h2>
                        <ul className="space-y-2.5 text-white/80 mb-6">
                            {['Pickup from your Madinah hotel, home or MED airport', 'Direct private travel', 'Optional waiting while you visit', 'Return drive or a day-trip plan', 'Vehicles sized for families and groups', 'Your own itinerary if you have one'].map((x) => <li key={x} className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#e0b07a] shrink-0" aria-hidden="true" />{x}</li>)}
                        </ul>
                        <p className="text-sm text-white/60 mb-7">Journey time depends on the exact pickup point, road conditions and your itinerary.</p>
                        <QuoteAction set={{ start: 'Madinah', need: 'One-way transfer', to: 'Khaybar' }} className="group inline-flex items-center gap-2 rounded-xl bg-[#e0b07a] px-5 py-3 font-bold text-[#1b1a18] hover:bg-[#e8c08f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Request Madinah → Khaybar Quote <Arrow /></QuoteAction>
                    </article>
                    <article className="bg-[#26221f] p-8 md:p-10">
                        <p className={`${eyebrow} text-[#e0b07a] mb-3`}>Onward to the north-west</p>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-5">Khaybar to AlUla Private Transfer</h2>
                        <p className="text-white/75 mb-5">Khaybar sits on the way between Madinah and AlUla, and the Royal Commission for AlUla works across AlUla, Tayma and Khaybar as connected oases.</p>
                        <ul className="space-y-2.5 text-white/80 mb-7">
                            {['Visit Khaybar, then continue to AlUla', 'Room for your luggage for the onward trip', 'Leave when your visit ends', 'Planned stops where they can be arranged', 'A custom itinerary across several days'].map((x) => <li key={x} className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#e0b07a] shrink-0" aria-hidden="true" />{x}</li>)}
                        </ul>
                        <div className="flex flex-wrap gap-x-5 gap-y-3">
                            <QuoteAction set={{ from: 'Khaybar', need: 'One-way transfer', to: 'AlUla' }} className="group inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-bold hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0b07a]">Request Khaybar → AlUla Quote <Arrow /></QuoteAction>
                            <Link href={KHAYBAR.routes.alulaKhaybar} className="self-center text-sm font-semibold text-[#e0b07a] hover:underline">Starting in AlUla? AlUla to Khaybar day trip</Link>
                        </div>
                    </article>
                </div>
            </section>

            {/* ================= WHAT YOU CAN SEE ================= */}
            <section aria-labelledby="see" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="see" className="text-3xl md:text-5xl font-semibold text-[#1b1a18] mb-12">A different side of Northwest Saudi Arabia</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {[
                            { i: Trees, t: 'Historic oasis', d: 'The oasis forms where several wadis come together between basalt plateaus. Palm groves, fields and water channels sit beside a community that still lives there today.' },
                            { i: Landmark, t: 'Heritage remains', d: 'Old fortifications and settlements stand on the lava outcrops above the oasis. Archaeological work in the area, overseen by the Royal Commission for AlUla, continues to study how long people have lived here.' },
                            { i: Mountain, t: 'Harrat Khaybar', d: 'A large volcanic field of dark basalt flows and cones. It is a very different landscape from the sand and sandstone further north around AlUla.' },
                            { i: Mountain, t: 'Jabal Al Abyad (White Mountain)', d: 'A pale volcanic peak in the harrat. Experience AlUla says access is limited to guests on the tours it operates, so the visit is booked with them. If your tour needs transport to a meeting point, tell us when you book.' },
                        ].map((m, k) => (
                            <Reveal key={m.t} delay={k * 70}>
                                <div className="flex gap-5">
                                    <span className="w-12 h-12 shrink-0 rounded-full bg-[#1b1a18] text-[#e0b07a] flex items-center justify-center"><m.i className="w-5 h-5" aria-hidden="true" /></span>
                                    <div>
                                        <h3 className="text-[#1b1a18] mb-2">{m.t}</h3>
                                        <p className="text-stone-700 leading-relaxed">{m.d}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <aside className="mt-14 rounded-3xl bg-white border border-stone-200 p-6 md:p-8 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-5 items-center">
                        <Info className="w-6 h-6 text-[#9b6a35]" aria-hidden="true" />
                        <div>
                            <p className="font-bold text-[#1b1a18] mb-1">Planning a heritage or natural-area visit?</p>
                            <p className="text-sm text-stone-600">Access, opening hours, guided experiences, parking and site restrictions can change. Confirm the current visitor requirements with the relevant destination operator before your trip.</p>
                        </div>
                        <a href={KHAYBAR.official.experienceAlula} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-stone-300 px-4 py-3 text-sm font-bold text-[#1b1a18] hover:border-[#9b6a35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c08a4a]">Khaybar on Experience AlUla <ExternalLink className="w-4 h-4" aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span></a>
                    </aside>
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section aria-labelledby="vehicles" className="bg-[#faf7f1] py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className="text-3xl md:text-5xl font-semibold text-[#1b1a18] mb-3">Choose the vehicle around your group</h2>
                    <p className="text-stone-600 mb-8">Pick your group size to see which vehicles have room. Availability is confirmed for your date. <Link href="/fleet/" className={link}>See the full fleet</Link>.</p>
                    <KhaybarFleet cards={FLEET} />
                </div>
            </section>

            {/* ================= DAY TRIP BUILDER ================= */}
            <section aria-labelledby="builder" className="bg-[#1b1a18] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="builder" className="text-3xl md:text-5xl font-semibold mb-3">Build your Khaybar day trip</h2>
                    <p className="text-white/70 mb-10">Set up the day, then send it for a quote.</p>
                    <DayTripBuilder classes={CLASSES} />
                </div>
            </section>

            {/* ================= WAITING / MULTI-STOP ================= */}
            <section aria-labelledby="formats" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="formats" className="text-3xl md:text-4xl font-semibold text-[#1b1a18] mb-3">Transfer, day trip or itinerary?</h2>
                    <p className="text-stone-600 max-w-2xl mb-10">Many people searching for a Khaybar taxi actually need a vehicle for several hours. These are the three ways to book.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-300 rounded-3xl overflow-hidden">
                        {[
                            { i: Car, t: 'Point-to-point transfer', f: 'Pickup → destination', d: 'The simplest option when you are continuing your journey.' },
                            { i: Clock, t: 'Day trip', f: 'Pickup → Khaybar → back', d: 'The vehicle stays available during your planned visit, then brings you back.' },
                            { i: Route, t: 'Multi-stop itinerary', f: 'Your own route', d: 'The vehicle follows a custom plan with several destinations, over one day or more.' },
                        ].map((c) => (
                            <div key={c.t} className="bg-[#f3eee6] p-7">
                                <c.i className="w-6 h-6 text-[#9b6a35] mb-4" aria-hidden="true" />
                                <h3 className="text-[#1b1a18] mb-1">{c.t}</h3>
                                <p className="text-sm font-semibold text-[#9b6a35] mb-3">{c.f}</p>
                                <p className="text-sm text-stone-600">{c.d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-stone-500 mt-4">Waiting time is agreed for each booking as part of the quote.</p>
                </div>
            </section>

            {/* ================= PLANNING + SEASONS + PRICING ================= */}
            <section aria-labelledby="plan" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14">
                    <div>
                        <h2 id="plan" className="text-3xl md:text-4xl font-semibold text-[#1b1a18] mb-8">Plan your Khaybar visit around the journey</h2>
                        <ol className="relative border-l-2 border-[#c08a4a]/40 ml-3 space-y-8">
                            {[
                                ['Before departure', 'Confirm the pickup point, passenger count, luggage and the access arrangements for the places you want to visit.'],
                                ['En route', 'Direct private travel, with planned stops if you want them.'],
                                ['At Khaybar', 'Follow the current visitor and access arrangements at each site.'],
                                ['Continuing onward', 'Return to Madinah, or continue to AlUla or another destination.'],
                            ].map(([t, d], k) => (
                                <li key={t} className="pl-8 relative">
                                    <span className="absolute -left-[11px] top-0.5 w-5 h-5 rounded-full bg-[#1b1a18] ring-4 ring-white" aria-hidden="true" />
                                    <p className="text-xs font-bold text-[#9b6a35] mb-1">0{k + 1}</p>
                                    <h3 className="text-[#1b1a18] mb-1">{t}</h3>
                                    <p className="text-stone-600">{d}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="space-y-5">
                        <div className="rounded-3xl bg-[#f3eee6] p-7">
                            <CalendarDays className="w-6 h-6 text-[#9b6a35] mb-3" aria-hidden="true" />
                            <h2 className="yanbu-card-title font-semibold text-[#1b1a18] mb-3">When to plan your Khaybar journey</h2>
                            <ul className="space-y-2.5 text-sm text-stone-700">
                                <li><strong>Outdoor comfort:</strong> much of a visit is outdoors, so the cooler months are easier for walking; in hot months, plan outdoor time for early or late in the day.</li>
                                <li><strong>Daylight:</strong> fit the visit and the drive back into daylight hours where you can, especially on a long day.</li>
                                <li><strong>Site schedules:</strong> opening times and tour dates change - check with the operator before you fix your date.</li>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-[#1b1a18] text-white p-7">
                            <h2 className="yanbu-card-title font-semibold mb-3">What decides your quote</h2>
                            <p className="text-sm text-white/70 mb-4">Every Khaybar trip is quoted for your plan, and you see the price before you confirm. It depends on:</p>
                            <ul className="flex flex-wrap gap-2 mb-5">
                                {['Pickup city', 'Destination', 'Vehicle', 'Passengers', 'Luggage', 'One-way or return', 'Waiting time', 'Extra stops', 'Your itinerary'].map((x) => <li key={x} className="rounded-full bg-white/10 px-3 py-1.5 text-xs">{x}</li>)}
                            </ul>
                            <p className="text-sm text-white/70"><strong className="text-white">Included:</strong> a private vehicle and driver, pickup and drop-off at the agreed places, and waiting where it is part of your booking. Site tickets, tours and guides are booked separately.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= TRANSFER VS SELF-DRIVE ================= */}
            <section aria-labelledby="self" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 id="self" className="text-3xl md:text-4xl font-semibold text-[#1b1a18] mb-8">Private transfer or self-drive?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { t: 'Private transfer', i: ['The driver handles the road journey', 'You can focus on the destination', 'Useful for custom itineraries and waiting'] },
                            { t: 'Self-drive', i: ['You control the vehicle and timing', 'You handle navigation and parking', 'You arrange the vehicle yourself'] },
                        ].map((c) => (
                            <div key={c.t} className="rounded-2xl bg-white border border-stone-200 p-7">
                                <h3 className="text-[#1b1a18] mb-4">{c.t}</h3>
                                <ul className="space-y-2.5 text-stone-700">{c.i.map((x) => <li key={x} className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#9b6a35] shrink-0" aria-hidden="true" />{x}</li>)}</ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-semibold text-[#1b1a18] mb-8">Khaybar trip questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-stone-200 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#1b1a18] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <p className="text-sm text-stone-600 mt-8">
                        Planning more of the region? Read about <Link href="/locations/madinah/" className={link}>transport in Madinah</Link> and <Link href="/locations/alula/" className={link}>getting around AlUla</Link>, book a <Link href="/services/private-driver/" className={link}>private driver</Link> or <Link href="/services/tourism-transport/" className={link}>tourism transport</Link> for a longer trip, or see our <Link href="/services/intercity/" className={link}>intercity transfers</Link> and <Link href="/services/airport-transfers/" className={link}>airport transfers</Link>.
                    </p>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1a18]">
                <KhaybarScene className="absolute inset-0 -z-10 w-full h-full opacity-50" />
                <div className="max-w-3xl mx-auto text-center text-white">
                    <MapPin className="w-8 h-8 text-[#e0b07a] mx-auto mb-5" aria-hidden="true" />
                    <h2 className="text-3xl md:text-5xl font-semibold mb-5">Plan your trip to Khaybar</h2>
                    <p className="text-lg text-white/80 mb-10">Tell us where you&apos;re starting, your date, your group and what you want to do at Khaybar. We&apos;ll confirm the vehicle and quote the trip.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-[#e0b07a] text-[#1b1a18] hover:bg-[#e8c08f]">
                            <a href={QUOTE_HREF}>Get a Khaybar Quote</a>
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
