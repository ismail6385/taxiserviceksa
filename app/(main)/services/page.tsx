import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Plane, PlaneLanding, PlaneTakeoff, Crown, FileText, Route, Check, Moon, Info, Car, MessageCircle, MapPin, Users, CalendarCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import QuotePanel from '@/components/services-hub/QuotePanel';
import QuoteButton from '@/components/services-hub/QuoteButton';
import ServiceFinder from '@/components/services-hub/ServiceFinder';
import ServiceMatcher, { type MatchService } from '@/components/services-hub/ServiceMatcher';
import ServiceDirectory from '@/components/services-hub/ServiceDirectory';
import RegionMap, { type RegionData } from '@/components/services-hub/RegionMap';
import VehicleMatch, { type VehicleClass } from '@/components/services-hub/VehicleMatch';
import { activeServices, byCategory, byId, type Service } from '@/data/serviceHub';
import { vehicles } from '@/lib/supabase';

const PAGE_URL = 'https://taxiserviceksa.com/services/';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need help choosing a transport service. Pickup, destination, date, passengers and luggage: ')}`;
const B2B_WHATSAPP = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like to talk about business / agency transport.')}`;

export const metadata: Metadata = {
    title: 'Private Taxi & Chauffeur Services Saudi Arabia | Taxi Service KSA',
    description: 'Explore private airport transfers, intercity travel, chauffeur hire, tourism transport, Umrah services, group transportation and GCC transfers across Saudi Arabia.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Private Transportation Services Across Saudi Arabia',
        description: 'Airport transfers, intercity travel, chauffeurs, tourism, Umrah, business, group and GCC transport - find the service that fits your journey.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private transportation services in Saudi Arabia' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Private Transportation Services Across Saudi Arabia',
        description: 'Find the right private transport service for your journey in Saudi Arabia.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

// Fleet figures come from the booking system's vehicle list - one source of truth.
const VEHICLE_META: [string, string, string, boolean][] = [
    ['Sedan', 'Toyota Camry', 'Normal luggage', false],
    ['SUV', 'GMC Yukon XL / Denali', 'Family or extra luggage', true],
    ['Luxury sedan', 'Mercedes S-Class', 'Executive travel', true],
    ['MPV', 'Hyundai Staria VIP', 'Family or premium group', false],
    ['Hiace', 'Toyota Hiace', 'Larger group', false],
    ['Coaster', 'Toyota Coaster', 'Large group, where available', false],
];
const VEHICLE_CLASSES: VehicleClass[] = VEHICLE_META.flatMap(([cls, name, note, studio]) => {
    const v = vehicles.find((x) => x.name === name);
    return v ? [{ cls, note, name: v.name, image: v.image, passengers: v.passengers, luggage: v.luggage, studio }] : [];
});
const VEHICLE_OPTIONS = ['Toyota Camry', 'GMC Yukon XL / Denali', 'Hyundai Staria VIP', 'Genesis G80 VIP', 'Mercedes S-Class', 'Cadillac Escalade', 'Toyota Hiace', 'Mercedes Sprinter', 'Toyota Coaster'].filter((n) => vehicles.some((v) => v.name === n));

const QUOTE_OPTIONS = activeServices.filter((s) => s.tier === 'primary').map((s) => ({ id: s.id, name: s.name, bookingType: s.bookingType }));
const MATCH: MatchService[] = [
    ...activeServices.map((s) => ({ id: s.id, name: s.name, href: s.href, shortDescription: s.shortDescription })),
    { id: 'city', name: 'City Transfer', href: '/locations/', shortDescription: 'A pre-booked private ride within your city. Find your city, or send the addresses for a quote.' },
];

const INTERCITY = [
    { r: 'Jeddah ↔ Makkah', href: '/routes/jeddah-makkah/', v: 'Sedan to minibus' },
    { r: 'Makkah ↔ Madinah', href: '/routes/makkah-madinah/', v: 'Sedan to minibus' },
    { r: 'Jeddah ↔ Madinah', href: '/routes/jeddah-madinah/', v: 'Sedan to minibus' },
    { r: 'Riyadh ↔ Jeddah', href: '/routes/riyadh-jeddah/', v: 'Sedan, SUV or van' },
    { r: 'Riyadh ↔ Dammam', href: '/routes/riyadh-dammam/', v: 'Sedan, SUV or van' },
];

const REGIONS: RegionData[] = [
    { key: 'northern', name: 'Northern & Northwest', col: 'col-start-1 col-span-2 row-start-1', places: [{ name: 'Tabuk', href: '/locations/tabuk/' }, { name: 'NEOM', href: '/locations/neom/' }, { name: 'AlUla', href: '/locations/alula/' }, { name: 'Hail', href: '/locations/hail/' }], services: [{ name: 'Taxi in Tabuk', href: '/services/taxi-in-tabuk/' }, { name: 'Tabuk airport', href: '/tabuk-airport-taxi/' }, { name: 'Heritage tours', href: '/services/heritage-tours/' }] },
    { key: 'gcc', name: 'GCC', col: 'col-start-3 row-start-1', places: [{ name: 'King Fahd Causeway', href: '/border-crossings/taxi-king-fahd-causeway-border-crossing/' }, { name: 'All border crossings', href: '/border-crossings/' }], services: [{ name: 'GCC chauffeur service', href: '/services/gcc-chauffeur-service/' }] },
    { key: 'western', name: 'Western', col: 'col-start-1 row-start-2 row-span-2', places: [{ name: 'Jeddah', href: '/locations/jeddah/' }, { name: 'Makkah', href: '/locations/makkah/' }, { name: 'Madinah', href: '/locations/madinah/' }, { name: 'Taif', href: '/locations/taif/' }, { name: 'Rabigh', href: '/locations/rabigh/' }, { name: 'Yanbu', href: '/locations/yanbu/' }], services: [{ name: 'Umrah transport', href: '/services/umrah-transport/' }, { name: 'Makkah city transport', href: '/services/makkah-city-transport/' }, { name: 'Madinah city transport', href: '/services/madinah-city-transport/' }, { name: 'Jeddah cruise port', href: '/services/jeddah-port-taxi-transfer/' }] },
    { key: 'central', name: 'Central', col: 'col-start-2 row-start-2', places: [{ name: 'Riyadh', href: '/locations/riyadh/' }, { name: 'Diriyah', href: '/locations/riyadh/diriyah/' }, { name: 'Al Kharj', href: '/locations/al-kharj/' }], services: [{ name: 'Riyadh hotel transfers', href: '/services/riyadh-hotel-transfer/' }, { name: 'Business chauffeur', href: '/services/business/' }, { name: 'Event transport', href: '/services/event-transport/' }] },
    { key: 'eastern', name: 'Eastern', col: 'col-start-3 row-start-2', places: [{ name: 'Dammam', href: '/locations/dammam/' }, { name: 'Al Khobar', href: '/locations/al-khobar/' }, { name: 'Dhahran', href: '/locations/dhahran/' }, { name: 'Jubail', href: '/locations/jubail/' }, { name: 'Al Ahsa', href: '/locations/al-ahsa/' }], services: [{ name: 'Taxi in Dammam', href: '/services/taxi-in-dammam/' }, { name: 'GCC chauffeur service', href: '/services/gcc-chauffeur-service/' }] },
    { key: 'southern', name: 'Southern', col: 'col-start-2 col-span-2 row-start-3', places: [{ name: 'Abha', href: '/locations/abha/' }, { name: 'Khamis Mushait', href: '/locations/khamis-mushait/' }, { name: 'Jazan', href: '/locations/jizan/' }], services: [{ name: 'Cable car transfers', href: '/services/cable-car/' }, { name: 'Tourism transport', href: '/services/tourism-transport/' }] },
];

const faqs = [
    { q: 'What types of private transportation do you offer?', a: 'Airport transfers, intercity journeys, private drivers and chauffeurs, tourism transport, Umrah transport, business and event transport, group hire and some cross-border GCC transfers. Each has its own page with the details.' },
    { q: 'Which service should I choose for an airport transfer?', a: 'Airport Transfers covers arrivals and departures. If you want a premium vehicle and a chauffeur for the rest of the day, look at VIP Chauffeur instead.' },
    { q: 'Can I hire a private driver by the hour?', a: 'Yes - Private Driver is booked by the hour, day or longer, and the car stays with you between stops.' },
    { q: 'Do you provide intercity transfers?', a: 'Yes. Intercity Transfers covers door-to-door travel between Saudi cities; route pages have the journey details.' },
    { q: 'Can I book a vehicle for sightseeing?', a: 'Yes. Tourism Transport covers sightseeing and day trips; Heritage Tours and Combination Tours cover specific kinds of trip.' },
    { q: 'Do you provide Umrah transportation?', a: 'Yes. Umrah Transport covers journeys between Jeddah, Makkah and Madinah; Makkah and Madinah City Transport cover journeys within each city.' },
    { q: 'Can larger groups book private vehicles?', a: 'Yes. Vans and minibuses are available depending on the date, or a group can be split across several vehicles. See Toyota Hiace Group Hire.' },
    { q: 'Do you offer Saudi–GCC transfers?', a: 'Some cross-border road transfers can be arranged. The GCC Chauffeur Service page explains what is possible and what passengers need to prepare.' },
    { q: 'Can I request a specific vehicle?', a: 'Yes. Choose it on the quote form; we confirm whether it is available for your date.' },
    { q: 'How do I get a quote?', a: 'Use Get a Quote on this page or message us on WhatsApp with your pickup, destination, date, passengers and luggage. You see the price before you confirm.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'CollectionPage',
            '@id': `${PAGE_URL}#page`,
            url: PAGE_URL,
            name: 'Private Transportation Services Across Saudi Arabia',
            isPartOf: { '@id': 'https://taxiserviceksa.com/#website' },
            publisher: { '@id': 'https://taxiserviceksa.com/#organization' },
            mainEntity: {
                '@type': 'ItemList',
                itemListElement: activeServices.filter((s) => s.tier === 'primary').map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.name, url: `https://taxiserviceksa.com${s.href}` })),
            },
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const eyebrow = 'text-xs font-bold uppercase tracking-[0.22em]';
const link = 'font-semibold text-[#8a6d2c] hover:underline';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function SvcCard({ s, dark = false }: { s: Service; dark?: boolean }) {
    return (
        <Link href={s.href} className={`group flex h-full flex-col rounded-2xl p-6 transition hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a] ${dark ? 'bg-white/[0.06] border border-white/[0.15] hover:border-[#c8a24a]' : 'bg-white border border-[#131a2e]/10 hover:border-[#c8a24a]'}`}>
            <span className={`text-lg font-bold ${dark ? 'text-white' : 'text-[#131a2e]'}`}>{s.name}</span>
            <span className={`text-sm mt-1.5 ${dark ? 'text-white/70' : 'text-slate-600'}`}>{s.shortDescription}</span>
            <span className={`text-xs mt-4 mb-5 flex-1 ${dark ? 'text-white/60' : 'text-slate-500'}`}><strong className={dark ? 'text-white/80' : 'text-slate-600'}>Best for:</strong> {s.bestFor.join(' · ')}</span>
            <span className={`inline-flex items-center gap-2 text-sm font-bold ${dark ? 'text-[#c8a24a]' : 'text-[#131a2e]'}`}>Explore Service <Arrow /></span>
        </Link>
    );
}

function Head({ id, kicker, title, text, dark = false }: { id: string; kicker: string; title: string; text: string; dark?: boolean }) {
    return (
        <div className="max-w-2xl mb-10">
            <p className={`${eyebrow} mb-3 ${dark ? 'text-[#c8a24a]' : 'text-[#8a6d2c]'}`}>{kicker}</p>
            <h2 id={id} className={`text-3xl md:text-5xl font-extrabold mb-4 ${dark ? 'text-white' : 'text-[#131a2e]'}`}>{title}</h2>
            <p className={dark ? 'text-white/70' : 'text-slate-600'}>{text}</p>
        </div>
    );
}

// Illustration (not a map): journeys fanning out between cities - one platform, many ways to travel.
function Network({ className = '' }: { className?: string }) {
    const n = {
        jed: [210, 330], mak: [260, 360], med: [250, 210], ruh: [700, 290], dmm: [930, 230], tbk: [150, 70], abh: [430, 470], bah: [1010, 250],
    } as const;
    const lines: [keyof typeof n, keyof typeof n][] = [['jed', 'mak'], ['mak', 'med'], ['jed', 'med'], ['jed', 'ruh'], ['ruh', 'dmm'], ['med', 'tbk'], ['jed', 'abh'], ['dmm', 'bah'], ['ruh', 'abh']];
    const label: Record<keyof typeof n, string> = { jed: 'Jeddah', mak: 'Makkah', med: 'Madinah', ruh: 'Riyadh', dmm: 'Dammam', tbk: 'Tabuk', abh: 'Abha', bah: 'Bahrain' };
    return (
        <svg className={className} viewBox="0 0 1100 540" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            {lines.map(([a, b], i) => (
                <path key={i} d={`M${n[a][0]} ${n[a][1]} Q ${(n[a][0] + n[b][0]) / 2} ${Math.min(n[a][1], n[b][1]) - 40}, ${n[b][0]} ${n[b][1]}`} fill="none" stroke="#c8a24a" strokeOpacity="0.7" strokeWidth="2" pathLength={1} className="route-draw" style={{ animationDelay: `${i * 150}ms` }} />
            ))}
            {(Object.keys(n) as (keyof typeof n)[]).map((k) => (
                <g key={k}>
                    <circle cx={n[k][0]} cy={n[k][1]} r="7" fill="#c8a24a" />
                    <text x={n[k][0] + 12} y={n[k][1] + 5} fontSize="18" fontWeight="600" fill="#ffffff" fillOpacity="0.8">{label[k]}</text>
                </g>
            ))}
        </svg>
    );
}

export default function ServicesPage() {
    const chauffeur = ['vip', 'private-driver', 'business'].map((id) => byId(id)!).filter(Boolean);
    const specialists = activeServices.filter((s) => s.tier === 'specialist');

    return (
        <div className="services-hub-page bg-[#f4f1ea]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#131a2e]">
                <Network className="absolute inset-y-0 right-0 -z-10 h-full w-[48%] hidden lg:block" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#131a2e] via-[#131a2e]/70 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
                    <div className="max-w-3xl text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className={`${eyebrow} text-[#c8a24a] mb-6`}>Airport • Intercity • Chauffeur • Tourism • Umrah • Business • GCC</p>
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight mb-6">Private Transportation Services Across Saudi Arabia</h1>
                        <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                            Choose the type of journey you need - airport transfer, intercity travel, private chauffeur, tourism, corporate transport, group hire or cross-border travel.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <QuoteButton className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl font-bold text-base bg-[#c8a24a] text-[#131a2e] hover:bg-[#d8b560] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#131a2e]">
                                Get a Quote <Arrow />
                            </QuoteButton>
                            <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Us</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FINDER ================= */}
            <section aria-labelledby="finder" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="finder" className="text-3xl md:text-5xl font-extrabold text-[#131a2e] mb-3">What Type of Journey Are You Planning?</h2>
                    <p className="text-slate-600 mb-8">Pick one - we&apos;ll show you the service that covers it.</p>
                    <ServiceFinder />
                </div>
            </section>

            {/* ================= 01 AIRPORT ================= */}
            <section aria-labelledby="cat-airport" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
                    <div>
                        <p className={`${eyebrow} text-[#8a6d2c] mb-3`}>01 · Airport</p>
                        <h2 id="cat-airport" className="text-3xl md:text-5xl font-extrabold text-[#131a2e] mb-4">Airport Transfers</h2>
                        <p className="text-slate-600 mb-8">Private transport to and from major Saudi airports.</p>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link href="/services/airport-transfers/" className="group inline-flex items-center gap-2 rounded-xl bg-[#131a2e] px-6 py-4 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a] focus-visible:ring-offset-2">Explore Airport Transfers <Arrow /></Link>
                            <QuoteButton service="airport" className={`${link} min-h-[44px]`}>Get a quote</QuoteButton>
                        </div>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { i: PlaneLanding, t: 'Arrivals', d: 'Airport → hotel, home or business.' },
                            { i: PlaneTakeoff, t: 'Departures', d: 'Hotel or home → airport, with time to spare.' },
                            { i: Crown, t: 'Executive pickup', d: 'A premium vehicle and chauffeur.', href: '/services/vip-chauffeur/' },
                            { i: FileText, t: 'Flight-based booking', d: 'Give your flight number when you book.' },
                        ].map((c, k) => (
                            <li key={c.t}>
                                <Reveal delay={k * 70} className="h-full">
                                    <div className="h-full rounded-2xl bg-[#f4f1ea] p-6">
                                        <c.i className="w-6 h-6 text-[#8a6d2c] mb-3" aria-hidden="true" />
                                        <h3 className="text-[#131a2e] mb-1">{c.t}</h3>
                                        <p className="text-sm text-slate-600">{c.d}</p>
                                        {c.href && <Link href={c.href} className={`${link} text-sm inline-block mt-2`}>VIP chauffeur</Link>}
                                    </div>
                                </Reveal>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= 02 INTERCITY ================= */}
            <section aria-labelledby="cat-intercity" className="bg-[#131a2e] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Head dark id="cat-intercity" kicker="02 · Intercity" title="Travel Between Saudi Cities" text="Door-to-door long-distance journeys, with the vehicle sized to your group. Each route page has its own distance, vehicles and pricing." />
                    <ul className="flex gap-3 overflow-x-auto snap-x pb-3 -mx-4 px-4 md:grid md:grid-cols-5 md:overflow-visible md:mx-0 md:px-0">
                        {INTERCITY.map((r) => (
                            <li key={r.href} className="snap-start shrink-0 w-[62%] sm:w-[40%] md:w-auto">
                                <Link href={r.href} className="group flex h-full flex-col rounded-2xl border border-white/[0.15] p-5 transition hover:border-[#c8a24a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a]">
                                    <Route className="w-5 h-5 text-[#c8a24a] mb-3" aria-hidden="true" />
                                    <span className="text-lg font-bold">{r.r}</span>
                                    <span className="text-xs text-white/60 mt-1 flex-1">{r.v}</span>
                                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#c8a24a]">Route details <Arrow /></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link href="/services/intercity/" className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#c8a24a] px-6 py-4 font-bold text-[#131a2e] hover:bg-[#d8b560] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">View All Intercity Routes <Arrow /></Link>
                </div>
            </section>

            {/* ================= 03 CHAUFFEUR ================= */}
            <section aria-labelledby="cat-chauffeur" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Head id="cat-chauffeur" kicker="03 · Chauffeur" title="Private Chauffeur Services" text="Three different ways to have a driver with you - pick the one that matches your trip." />
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {chauffeur.map((s, k) => (
                            <li key={s.id}>
                                <Reveal delay={k * 80} className="h-full">
                                    <Link href={s.href} className={`group flex h-full flex-col rounded-3xl p-7 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a] ${k === 0 ? 'bg-[#131a2e] text-white' : 'bg-white border border-[#131a2e]/10 text-[#131a2e] hover:border-[#c8a24a]'}`}>
                                        <span className="text-2xl font-extrabold mb-2">{s.name}</span>
                                        <span className={`mb-5 ${k === 0 ? 'text-white/75' : 'text-slate-600'}`}>{s.shortDescription}</span>
                                        <ul className={`space-y-1.5 text-sm flex-1 mb-6 ${k === 0 ? 'text-white/80' : 'text-slate-700'}`}>{s.bestFor.map((b) => <li key={b} className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#c8a24a] shrink-0" aria-hidden="true" />{b}</li>)}</ul>
                                        <span className={`inline-flex items-center gap-2 font-bold ${k === 0 ? 'text-[#c8a24a]' : ''}`}>Explore Service <Arrow /></span>
                                    </Link>
                                </Reveal>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= 04 TOURISM ================= */}
            <section aria-labelledby="cat-tourism" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10">
                    <div>
                        <Head id="cat-tourism" kicker="04 · Tourism" title="Explore Saudi Arabia With a Private Vehicle" text="Sightseeing, heritage sites and day trips at your own pace. For religious sites, see Umrah & Pilgrimage below." />
                    </div>
                    <ul className="space-y-3 self-center">
                        {byCategory('tourism').map((s) => (
                            <li key={s.id}>
                                <Link href={s.href} className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-6 items-center rounded-2xl border border-[#131a2e]/10 p-5 hover:border-[#c8a24a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a]">
                                    <span>
                                        <span className="block text-lg font-bold text-[#131a2e]">{s.name}</span>
                                        <span className="block text-sm text-slate-600">{s.shortDescription} <span className="text-slate-500">Best for: {s.bestFor.join(' · ')}.</span></span>
                                    </span>
                                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#131a2e]">Explore <Arrow /></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= 05 PILGRIMAGE ================= */}
            <section aria-labelledby="cat-umrah" className="relative isolate overflow-hidden bg-[#0f2a24] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 -z-10 opacity-[0.07] bg-[radial-gradient(circle_at_1px_1px,#c8a24a_1px,transparent_0)] [background-size:22px_22px]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto">
                    <Moon className="w-7 h-7 text-[#c8a24a] mb-5" aria-hidden="true" />
                    <Head dark id="cat-umrah" kicker="05 · Pilgrimage" title="Umrah & Pilgrimage Transportation" text="Transfers between Jeddah, Makkah and Madinah, and journeys within the two holy cities." />
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {byCategory('pilgrimage').map((s) => <li key={s.id}><SvcCard s={s} dark /></li>)}
                    </ul>
                </div>
            </section>

            {/* ================= 06 BUSINESS & EVENTS ================= */}
            <section aria-labelledby="cat-business" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Head id="cat-business" kicker="06 · Business & events" title="Business, Corporate & Event Transportation" text="From a single executive trip to guests moving between hotel and venue." />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {['business', 'corporate', 'events'].map((id) => { const s = byId(id)!; return <SvcCard key={id} s={s} />; })}
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center rounded-2xl bg-[#131a2e] text-white p-6">
                        <div>
                            <p className="font-bold">Travel agencies, hotels &amp; corporate partners</p>
                            <p className="text-sm text-white/70">Bulk or recurring bookings and custom quotes. <Link href="/services/b2b-solutions/" className="text-[#c8a24a] font-semibold hover:underline">About B2B transport</Link></p>
                        </div>
                        <a href={B2B_WHATSAPP} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-bold hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a]">Talk to the Business Team</a>
                    </div>
                </div>
            </section>

            {/* ================= 07 GROUP & ACCESSIBILITY ================= */}
            <section aria-labelledby="cat-group" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Head id="cat-group" kicker="07 · Groups & special requirements" title="Transportation for Families, Groups & Special Requirements" text="Larger vehicles, or journeys planned around a passenger's needs." />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <SvcCard s={byId('hiace')!} />
                        <div className="rounded-2xl border border-[#131a2e]/10 p-6">
                            <Link href="/services/wheelchair-taxi/" className="text-lg font-bold text-[#131a2e] hover:underline">{byId('wheelchair')!.name}</Link>
                            <p className="text-sm text-slate-600 mt-1.5 mb-3">{byId('wheelchair')!.shortDescription}</p>
                            <p className="text-sm text-slate-600 flex gap-2"><Info className="w-4 h-4 mt-0.5 text-[#8a6d2c] shrink-0" aria-hidden="true" />Not every vehicle is wheelchair-accessible. Tell us the wheelchair type and size, passengers and luggage, and we confirm a suitable vehicle.</p>
                            <Link href="/services/wheelchair-taxi/" className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#131a2e]">Explore Service <Arrow /></Link>
                        </div>
                        <a href="#vehicles" className="group rounded-2xl bg-[#f4f1ea] p-6 hover:ring-2 hover:ring-[#c8a24a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a]">
                            <Users className="w-6 h-6 text-[#8a6d2c] mb-3" aria-hidden="true" />
                            <p className="text-lg font-bold text-[#131a2e]">Family private transfers</p>
                            <p className="text-sm text-slate-600 mt-1 mb-4">SUV, MPV or van - sized around your family and luggage.</p>
                            <span className="inline-flex items-center gap-2 text-sm font-bold text-[#131a2e]">Match a vehicle <ArrowDown className="w-4 h-4" aria-hidden="true" /></span>
                        </a>
                        <QuoteButton service="hiace" className="group text-left rounded-2xl bg-[#f4f1ea] p-6 hover:ring-2 hover:ring-[#c8a24a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a]">
                            <Car className="w-6 h-6 text-[#8a6d2c] mb-3" aria-hidden="true" />
                            <span className="block text-lg font-bold text-[#131a2e]">Large group transport</span>
                            <span className="block text-sm text-slate-600 mt-1 mb-4">Hiace, Sprinter or Coaster depending on the date - or several vehicles.</span>
                            <span className="inline-flex items-center gap-2 text-sm font-bold text-[#131a2e]">Get a group quote <Arrow /></span>
                        </QuoteButton>
                    </div>
                </div>
            </section>

            {/* ================= 08 GCC ================= */}
            <section aria-labelledby="cat-gcc" className="bg-[#131a2e] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Head dark id="cat-gcc" kicker="08 · Cross-border" title="Saudi Arabia ↔ GCC Private Transfers" text="Some road journeys to neighbouring countries can be arranged. The GCC page and each crossing page cover what passengers need to prepare." />
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10" aria-label="Saudi Arabia connects by road to Bahrain, Kuwait, Qatar and the UAE">
                        <span className="rounded-xl bg-[#c8a24a] px-4 py-2.5 font-bold text-[#131a2e]">Saudi Arabia</span>
                        {['Bahrain', 'Kuwait', 'Qatar', 'UAE'].map((c) => (
                            <span key={c} className="inline-flex items-center gap-2 sm:gap-3"><span className="text-[#c8a24a]" aria-hidden="true">↔</span><span className="rounded-xl border border-white/20 px-4 py-2.5 font-semibold">{c}</span></span>
                        ))}
                    </div>
                    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                        {[
                            { c: 'Bahrain', s: 'King Fahd Causeway', href: '/border-crossings/taxi-king-fahd-causeway-border-crossing/' },
                            { c: 'Kuwait', s: 'Saudi–Kuwait road transfer', href: '/border-crossings/taxi-khafji-border-crossing/' },
                            { c: 'Qatar', s: 'Saudi–Qatar road transfer', href: '/routes/khobar-to-qatar-taxi/' },
                            { c: 'UAE', s: 'Saudi–UAE private transfer', href: '/border-crossings/taxi-al-batha-border-crossing/' },
                        ].map((g) => (
                            <li key={g.c}>
                                <Link href={g.href} className="group block h-full rounded-2xl border border-white/[0.15] p-5 hover:border-[#c8a24a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a]">
                                    <span className="block text-lg font-bold">{g.c}</span>
                                    <span className="block text-sm text-white/[0.65]">{g.s}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link href="/services/gcc-chauffeur-service/" className="group inline-flex items-center gap-2 rounded-xl bg-[#c8a24a] px-6 py-4 font-bold text-[#131a2e] hover:bg-[#d8b560] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Explore GCC Transfers <Arrow /></Link>
                </div>
            </section>

            {/* ================= SPECIALIST ================= */}
            <section aria-labelledby="specialist" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="specialist" className="text-2xl md:text-3xl font-extrabold text-[#131a2e] mb-2">Need a Specific Local Transfer?</h2>
                    <p className="text-slate-600 mb-6">Specialist services for particular places and needs.</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                        {specialists.map((s) => (
                            <li key={s.id}>
                                <Link href={s.href} className="group flex h-full flex-col rounded-xl bg-white border border-[#131a2e]/10 px-4 py-3 hover:border-[#c8a24a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a24a]">
                                    <span className="font-bold text-sm text-[#131a2e]">{s.name}</span>
                                    <span className="text-xs text-slate-500 mt-0.5">{s.shortDescription}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= JOURNEY FIRST + HOW TO CHOOSE ================= */}
            <section aria-labelledby="choose" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#131a2e] mb-5">Choose Your Journey First. Your Location Second.</h2>
                        <ul className="space-y-4">
                            {[
                                ['“Riyadh → Jeddah”', 'is an Intercity Transfer', 'not just “Riyadh taxi”.'],
                                ['“RUH → hotel”', 'is an Airport Transfer', ''],
                                ['“A driver for 8 hours”', 'is a Private Driver booking', ''],
                            ].map(([a, b, c]) => (
                                <li key={a} className="rounded-2xl bg-[#f4f1ea] p-5">
                                    <p className="font-bold text-[#131a2e]">{a}</p>
                                    <p className="text-slate-600">{b}{c && <> - {c}</>}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 id="choose" className="text-3xl md:text-4xl font-extrabold text-[#131a2e] mb-5">Which Service Should I Book?</h2>
                        <div className="hidden md:block overflow-hidden rounded-2xl border border-[#131a2e]/10">
                            <table className="w-full text-left text-sm">
                                <caption className="sr-only">Your need and the matching service</caption>
                                <thead className="bg-[#131a2e] text-white"><tr><th scope="col" className="px-5 py-3">Your need</th><th scope="col" className="px-5 py-3">Service</th></tr></thead>
                                <tbody>
                                    {[
                                        ['Airport → hotel', 'airport'], ['One city → another', 'intercity'], ['Driver for several hours', 'private-driver'], ['Premium executive journey', 'vip'],
                                        ['Business meeting', 'business'], ['Sightseeing', 'tourism'], ['Umrah', 'umrah'], ['Multiple attractions', 'tours'], ['Wedding or conference', 'events'],
                                        ['Saudi → Bahrain, UAE, Kuwait or Qatar', 'gcc'], ['Large family or group', 'hiace'],
                                    ].map(([need, id]) => { const s = byId(id)!; return (
                                        <tr key={need} className="border-t border-[#131a2e]/10 even:bg-[#f4f1ea]/60"><td className="px-5 py-3 text-slate-700">{need}</td><td className="px-5 py-3"><Link href={s.href} className={link}>{s.name}</Link></td></tr>
                                    ); })}
                                </tbody>
                            </table>
                        </div>
                        <ul className="md:hidden space-y-2">
                            {[['Airport → hotel', 'airport'], ['One city → another', 'intercity'], ['Driver for several hours', 'private-driver'], ['Premium executive journey', 'vip'], ['Business meeting', 'business'], ['Sightseeing', 'tourism'], ['Umrah', 'umrah'], ['Multiple attractions', 'tours'], ['Wedding or conference', 'events'], ['Saudi → GCC country', 'gcc'], ['Large family or group', 'hiace']].map(([need, id]) => { const s = byId(id)!; return (
                                <li key={need}><Link href={s.href} className="flex items-center justify-between gap-3 rounded-xl bg-[#f4f1ea] px-4 py-3 min-h-[44px]"><span className="text-sm text-slate-700">{need}</span><span className="text-sm font-bold text-[#8a6d2c] text-right">{s.name}</span></Link></li>
                            ); })}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= MATCHER ================= */}
            <section aria-labelledby="matcher" className="bg-[#131a2e] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="matcher" className="text-3xl md:text-5xl font-extrabold mb-10">Not Sure Which Service You Need?</h2>
                    <ServiceMatcher services={MATCH} />
                </div>
            </section>

            {/* ================= DIRECTORY ================= */}
            <section aria-labelledby="directory" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="directory" className="text-3xl md:text-5xl font-extrabold text-[#131a2e] mb-8">Find a Service</h2>
                    <ServiceDirectory services={activeServices} />
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section id="vehicles" aria-labelledby="vehicles-h" className="scroll-mt-24 bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles-h" className="text-3xl md:text-5xl font-extrabold text-[#131a2e] mb-3">Match Your Service With the Right Vehicle</h2>
                    <p className="text-slate-600 mb-8">Availability is confirmed for your date. <Link href="/fleet/" className={link}>See the full fleet</Link>.</p>
                    <VehicleMatch classes={VEHICLE_CLASSES} />
                </div>
            </section>

            {/* ================= REGIONS ================= */}
            <section aria-labelledby="regions" className="bg-[#131a2e] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="regions" className="text-3xl md:text-5xl font-extrabold mb-3">Services by Region</h2>
                    <p className="text-white/70 mb-10">Pick a region to see the places we have guides for and the services people book there.</p>
                    <RegionMap regions={REGIONS} />
                </div>
            </section>

            {/* ================= HOW BOOKING WORKS + TRUST ================= */}
            <section aria-labelledby="how" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="how" className="text-3xl md:text-5xl font-extrabold text-[#131a2e] mb-10">How Booking Works</h2>
                    <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
                        {[
                            [MapPin, 'Tell us where you’re going'], [Route, 'Choose the service'], [Car, 'Choose your vehicle'],
                            [CalendarCheck, 'Confirm date & time'], [FileText, 'Receive your booking details'], [Plane, 'Travel'],
                        ].map(([I, t], k) => {
                            const Icon = I as typeof MapPin;
                            return (
                                <li key={t as string}>
                                    <Reveal delay={k * 70} className="h-full">
                                        <div className="h-full rounded-2xl bg-white border border-[#131a2e]/10 p-5">
                                            <span className="text-xs font-bold text-[#8a6d2c]">0{k + 1}</span>
                                            <Icon className="w-5 h-5 text-[#131a2e] my-3" aria-hidden="true" />
                                            <p className="font-bold text-[#131a2e] leading-snug">{t as string}</p>
                                        </div>
                                    </Reveal>
                                </li>
                            );
                        })}
                    </ol>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#131a2e] mb-6">What You Can Expect</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                        {[
                            ['Private booking', 'No shared passengers on private services.'],
                            ['Clear quote', 'You know the fare before you confirm.'],
                            ['Vehicle matching', 'Chosen around passengers and luggage.'],
                            ['Door-to-door', 'Pickup and drop-off at agreed places.'],
                            ['Direct communication', 'Book through the form or WhatsApp.'],
                        ].map(([t, d]) => (
                            <div key={t} className="rounded-2xl bg-[#131a2e] text-white p-5">
                                <p className="font-bold mb-1">{t}</p>
                                <p className="text-sm text-white/70">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-extrabold text-[#131a2e] mb-3">Choosing a Service</h2>
                    <p className="text-slate-600 mb-8">For detailed questions, see the relevant service page.</p>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#131a2e]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#131a2e] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#131a2e]">
                <Network className="absolute inset-0 -z-10 w-full h-full opacity-20" />
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Tell Us What Kind of Journey You Need</h2>
                    <p className="text-lg text-white/80 mb-3">Not sure which service fits? Send us:</p>
                    <p className="font-bold text-[#c8a24a] mb-3">Pickup → Destination → Date → Passengers → Luggage</p>
                    <p className="text-white/70 mb-10">and we can recommend the appropriate service and vehicle.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <QuoteButton className="inline-flex items-center justify-center h-14 px-8 rounded-xl font-bold bg-[#c8a24a] text-[#131a2e] hover:bg-[#d8b560] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Get a Quote</QuoteButton>
                        <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-xl font-bold bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Us</a>
                        </Button>
                    </div>
                    <p className="text-sm text-white/60 mt-8 flex items-center justify-center gap-2"><MessageCircle className="w-4 h-4" aria-hidden="true" /> We reply with the service, vehicle and price for your journey.</p>
                </div>
            </section>

            <QuotePanel options={QUOTE_OPTIONS} vehicleOptions={VEHICLE_OPTIONS} />
        </div>
    );
}
