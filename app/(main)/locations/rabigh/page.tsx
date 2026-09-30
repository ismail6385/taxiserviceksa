import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Plane, Building2, Factory, Waves, Clock, Users, Briefcase, Route, Check, Info, CalendarDays, Car, MessageCircle, MapPin, PlaneTakeoff, PlaneLanding, HardHat } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import RabighQuoteCard from '@/components/rabigh/RabighQuoteCard';
import QuoteLink from '@/components/rabigh/QuoteLink';
import RabighCorridor from '@/components/rabigh/RabighCorridor';
import RabighAreas, { type Area } from '@/components/rabigh/RabighAreas';
import RabighVehicleFit, { type RabighVehicle } from '@/components/rabigh/RabighVehicleFit';
import { vehicles } from '@/lib/supabase';

const PAGE_URL = 'https://taxiserviceksa.com/locations/rabigh/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for a journey in or from Rabigh. Pickup, destination, date, time, passengers and luggage: ')}`;
const JED = 'King Abdulaziz International Airport (JED)';
const MED = 'Prince Mohammad bin Abdulaziz Airport (MED)';

export const metadata: Metadata = {
    title: 'Rabigh Taxi & Private Transfers | Jeddah, KAEC & Madinah',
    description: 'Private taxi and transfer service in Rabigh for Jeddah Airport, KAEC, Thuwal, Madinah, industrial and long-distance journeys.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Rabigh Taxi & Private Transfer Service',
        description: 'Pre-booked private transport for Rabigh, Jeddah, KAEC, Thuwal, Madinah, industrial sites and long-distance journeys.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private transfers in Rabigh' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rabigh Taxi & Private Transfer Service',
        description: 'Pre-booked private transport for Rabigh, Jeddah, KAEC, Thuwal, Madinah, industrial sites and long-distance journeys.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

// Fleet figures come from the booking system's vehicle list - one source of truth.
// `studio` marks cut-out shots on a white background; the rest are photos that fill the frame.
const FLEET_META: [string, string, boolean][] = [
    ['Toyota Camry', 'Sedan', false],
    ['Toyota Fortuner', 'SUV', false],
    ['GMC Yukon XL / Denali', 'Large SUV', true],
    ['Hyundai Staria VIP', 'Van / MPV', false],
    ['Hyundai Starex', 'Van / MPV', false],
    ['Toyota Hiace', 'Van', false],
    ['Mercedes Sprinter', 'Sprinter', true],
];
const FLEET: RabighVehicle[] = FLEET_META.flatMap(([name, cls, studio]) => {
    const v = vehicles.find((x) => x.name === name);
    return v ? [{ name: v.name, cls, image: v.image, passengers: v.passengers, luggage: v.luggage, studio }] : [];
});
const classOf = (cls: string) => FLEET.filter((v) => v.cls === cls);

const AREAS: Area[] = [
    { name: 'Rabigh city', tag: 'Homes & hotels', text: 'Residential and hotel pickups in town, for local runs, family trips and longer journeys out of Rabigh.', tip: 'the hotel name, or the district and a nearby landmark.', set: { from: 'Rabigh' } },
    { name: 'Industrial area', tag: 'Business & site pickups', text: 'Worksites and business premises around Rabigh’s industrial area. Gates, visitor car parks and reception points matter more than the street address here.', tip: 'the company or site name and the exact gate or reception point.', set: { from: 'Rabigh industrial area', industrial: true } },
    { name: 'Coastal area', tag: 'Destination-specific', text: 'Coastal spots north and south of town. Access to some coastal places depends on current rules, so tell us exactly where you are going.', tip: 'the exact place or a map pin.', set: { from: 'Rabigh coast' } },
    { name: 'KAEC / Thuwal', tag: 'Regional business & hotels', text: 'King Abdullah Economic City and Thuwal lie south of Rabigh on the way to Jeddah. KAEC also has a station on the Haramain high-speed railway.', tip: 'the hotel, building, district or station.', set: { from: 'KAEC' }, link: { label: 'Jeddah ↔ KAEC transfers', href: '/locations/jeddah/kaec-transfer/' } },
    { name: 'Jeddah', tag: 'Airport & city pickups', text: 'City addresses or King Abdulaziz International Airport, for journeys north to Rabigh.', tip: 'your flight number for airport pickups, or the hotel or address.', set: { from: 'Jeddah', to: 'Rabigh' }, link: { label: 'Jeddah airport transfers', href: '/jeddah-airport-transfer/' } },
];

const faqs = [
    { q: 'Do you provide private transfers from Jeddah to Rabigh?', a: 'Yes. Pickups from Jeddah homes, hotels and offices to any address in Rabigh, including business and industrial destinations. Send the exact addresses for a quote.' },
    { q: 'Can you pick me up from Jeddah Airport and take me to Rabigh?', a: 'Yes. Add your flight number and arrival time when you book; pickup instructions come with your confirmed booking.' },
    { q: 'Can I travel from Rabigh to Madinah by private car?', a: 'Yes, door to door from your Rabigh address to your Madinah hotel, home or the airport.' },
    { q: 'Can you pick up from Rabigh’s industrial area?', a: 'Yes. Give the site or company name and the exact gate or reception point. Site access stays subject to the destination’s own security and visitor rules.' },
    { q: 'Can I book a vehicle from Rabigh to KAEC?', a: 'Yes. KAEC is a separate place from Rabigh city, so send the exact hotel, building or district in KAEC.' },
    { q: 'Can I travel from Rabigh to Thuwal?', a: 'Yes. Send the exact destination in Thuwal and we quote the journey.' },
    { q: 'Can I book a return journey?', a: 'Yes. Choose "Return" on the form and tell us when you need the return pickup; waiting time is agreed in advance.' },
    { q: 'Which vehicle should I choose for a family with luggage?', a: 'It depends on passengers and bags. Use the vehicle selector on this page - it only shows vehicles whose seats and luggage space fit.' },
    { q: 'Can I book a private driver by the hour in Rabigh?', a: 'Yes. Book hourly and the car stays with you between stops for the agreed time. We confirm availability for your date.' },
    { q: 'Can I book an early-morning airport transfer?', a: 'Yes, as a pre-booked journey. Send your flight time and we suggest a pickup time with enough road and airport buffer, then confirm availability.' },
    { q: 'Do you provide local street-hail taxi service?', a: 'No. This is pre-booked private transport - not a street-hail or shared taxi service.' },
    { q: 'How much does a private transfer from Rabigh cost?', a: 'Each journey is quoted on its pickup, destination, vehicle, passengers, luggage, date, time and any waiting or return. You see the price before you confirm.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private transfers in Rabigh',
            url: PAGE_URL,
            serviceType: 'Pre-booked private transfer',
            description: 'Pre-booked private transport in Rabigh: Jeddah and Madinah airport connections, Jeddah, KAEC, Thuwal and Madinah transfers, business and industrial travel, hourly drivers and long-distance journeys.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: { '@type': 'City', name: 'Rabigh' },
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const eyebrow = 'text-xs font-bold uppercase tracking-[0.22em]';
const link = 'font-semibold text-[#c4553a] hover:underline';
const qbtn = 'group inline-flex items-center gap-2 font-bold text-[#10213f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b5a] rounded';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

// Illustration (not a photo): the Red Sea on the left, low Hijaz hills inland and the coastal road running north.
function CoastScene({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 560" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="rb-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#10213f" />
                    <stop offset="0.7" stopColor="#233e6b" />
                    <stop offset="1" stopColor="#f07b5a" stopOpacity="0.55" />
                </linearGradient>
            </defs>
            <rect width="1440" height="560" fill="url(#rb-sky)" />
            <circle cx="260" cy="360" r="54" fill="#f7b49a" fillOpacity="0.45" />
            {/* Hijaz hills inland */}
            <path d="M560 420 L 700 330 L 790 380 L 900 300 L 1020 370 L 1120 320 L 1260 390 L 1440 340 V 560 H 560 Z" fill="#1a3055" />
            <path d="M760 440 L 880 370 L 980 420 L 1100 360 L 1230 430 L 1440 400 V 560 H 760 Z" fill="#152847" />
            {/* Sea */}
            <path d="M0 410 H 620 C 560 450, 520 500, 500 560 H 0 Z" fill="#1c6fa3" fillOpacity="0.55" />
            <path d="M40 440 H 180 M240 470 H 360 M90 510 H 230" stroke="#f7b49a" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
            {/* Coastal road */}
            <path d="M560 560 C 640 500, 760 470, 1440 452" fill="none" stroke="#0b182f" strokeWidth="26" />
            <path d="M560 560 C 640 500, 760 470, 1440 452" fill="none" stroke="#f07b5a" strokeWidth="2.5" strokeDasharray="22 18" pathLength={1} className="route-draw" />
        </svg>
    );
}

export default function RabighPage() {
    return (
        <div className="rabigh-page bg-[#f5efe4]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#10213f]">
                <CoastScene className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10213f] via-[#10213f]/75 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-10 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className={`${eyebrow} text-[#f7b49a] mb-5`}>Rabigh • Western Saudi Arabia</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5">Rabigh Taxi &amp; Private Transfer Service</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
                            Private, pre-booked transportation for Rabigh, Jeddah, KAEC, Thuwal, Madinah and surrounding destinations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#f07b5a] text-[#10213f] hover:bg-[#f39579]">
                                <a href={QUOTE_HREF}>Get a Rabigh Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book on WhatsApp</a>
                            </Button>
                        </div>
                        <p className="text-sm text-white/60">Private vehicle • Pre-booked journey • Door-to-door</p>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RabighQuoteCard vehicleOptions={FLEET.map((v) => v.name)} />
                    </div>
                </div>
            </section>

            {/* ================= WHAT BRINGS YOU ================= */}
            <section aria-labelledby="brings" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="brings" className="text-3xl md:text-5xl font-extrabold text-[#10213f] mb-8">What Brings You to Rabigh?</h2>
                    <ul className="flex gap-3 overflow-x-auto snap-x pb-3 -mx-4 px-4 md:grid md:grid-cols-3 lg:grid-cols-7 md:overflow-visible md:mx-0 md:px-0">
                        {[
                            { i: Plane, t: 'Airport transfer', s: 'Airport ↔ Rabigh', set: { from: JED, to: 'Rabigh' } },
                            { i: Building2, t: 'Jeddah connection', s: 'Jeddah ↔ Rabigh', set: { from: 'Jeddah', to: 'Rabigh' } },
                            { i: Briefcase, t: 'KAEC / Thuwal', s: 'Business or hotel travel', set: { from: 'Rabigh', to: 'KAEC' } },
                            { i: Factory, t: 'Industrial travel', s: 'Rabigh industrial area', set: { to: 'Rabigh industrial area', industrial: true } },
                            { i: Route, t: 'Madinah journey', s: 'Rabigh ↔ Madinah', set: { from: 'Rabigh', to: 'Madinah' } },
                            { i: Waves, t: 'Coastal trip', s: 'Private coastal journeys', set: { from: 'Rabigh', to: '' } },
                            { i: Clock, t: 'Hourly driver', s: 'Several stops around Rabigh', href: '/services/private-driver/' },
                        ].map((c) => {
                            const inner = (
                                <>
                                    <c.i className="w-6 h-6 text-[#c4553a] mb-3" aria-hidden="true" />
                                    <span className="block font-bold text-[#10213f] leading-snug">{c.t}</span>
                                    <span className="block text-xs text-slate-500 mt-1">{c.s}</span>
                                </>
                            );
                            const cls = 'block h-full w-full text-left rounded-2xl bg-white border border-[#10213f]/10 p-5 transition hover:border-[#f07b5a] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b5a]';
                            return (
                                <li key={c.t} className="snap-start shrink-0 w-[44%] sm:w-[30%] md:w-auto">
                                    {'href' in c && c.href ? <Link href={c.href} className={cls}>{inner}</Link> : <QuoteLink set={c.set!} className={cls}>{inner}</QuoteLink>}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            {/* ================= CORRIDOR ================= */}
            <section aria-labelledby="corridor" className="bg-white py-20 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
                    <div>
                        <p className={`${eyebrow} text-[#c4553a] mb-4`}>Where coastal &amp; intercity routes meet</p>
                        <h2 id="corridor" className="text-3xl md:text-5xl font-extrabold text-[#10213f] mb-5">Rabigh Sits Between Major Western Saudi Journeys</h2>
                        <p className="text-slate-600 leading-relaxed mb-5">Heading north from Jeddah along the Red Sea coast, you pass Thuwal and King Abdullah Economic City (KAEC) before reaching Rabigh. From Rabigh, journeys continue inland to Madinah - or stay local, to the industrial area, hotels, homes and the coast.</p>
                        <p className="text-slate-600 leading-relaxed">KAEC lies within Rabigh Governorate but is a separate place from Rabigh city, so the exact address always matters.</p>
                    </div>
                    <div className="relative rounded-3xl bg-[#f5efe4] p-3">
                        <RabighCorridor className="w-full h-auto max-h-[440px]" />
                        <p className="absolute bottom-3 right-5 text-[11px] text-slate-500">Schematic, not to scale</p>
                    </div>
                </div>
            </section>

            {/* ================= MAIN ROUTES ================= */}
            <section aria-label="Main journeys" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <Reveal className="h-full">
                        <article className="h-full rounded-3xl bg-[#10213f] text-white p-8">
                            <p className={`${eyebrow} text-[#f7b49a] mb-3`}>South along the coast</p>
                            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Jeddah to Rabigh Private Transfer</h2>
                            <ul className="space-y-2.5 text-white/80 mb-7">
                                {['Pickup from a Jeddah hotel, home or office', 'JED Airport pickups, with your flight number', 'Drop-off anywhere in Rabigh city', 'Business and industrial destinations', 'Return journeys on the same or another day', 'Larger vehicles for families and groups'].map((x) => <li key={x} className="flex gap-3"><Check className="w-4 h-4 mt-1 text-[#f07b5a] shrink-0" aria-hidden="true" />{x}</li>)}
                            </ul>
                            <QuoteLink set={{ from: 'Jeddah', to: 'Rabigh' }} className="group inline-flex items-center gap-2 rounded-xl bg-[#f07b5a] px-5 py-3 font-bold text-[#10213f] hover:bg-[#f39579] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                                Quote Jeddah → Rabigh <Arrow />
                            </QuoteLink>
                        </article>
                    </Reveal>
                    <Reveal className="h-full" delay={100}>
                        <article className="h-full rounded-3xl bg-white border border-[#10213f]/10 p-8">
                            <p className={`${eyebrow} text-[#c4553a] mb-3`}>Inland to the north-east</p>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#10213f] mb-4">Rabigh to Madinah Private Transfer</h2>
                            <p className="text-slate-600 mb-4">Rabigh links the western coast with Madinah. Travel door to door, one-way or return.</p>
                            <ul className="space-y-2.5 text-slate-700 mb-7">
                                {['Hotel or residence pickup', 'Families with luggage', 'Business travel', 'Connections to Madinah airport', 'One-way or return'].map((x) => <li key={x} className="flex gap-3"><Check className="w-4 h-4 mt-1 text-[#c4553a] shrink-0" aria-hidden="true" />{x}</li>)}
                            </ul>
                            <div className="flex flex-wrap items-center gap-4">
                                <QuoteLink set={{ from: 'Rabigh', to: 'Madinah' }} className="group inline-flex items-center gap-2 rounded-xl bg-[#10213f] px-5 py-3 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b5a] focus-visible:ring-offset-2">
                                    Quote Rabigh → Madinah <Arrow />
                                </QuoteLink>
                                <Link href="/locations/madinah/" className={link}>Madinah guide</Link>
                            </div>
                        </article>
                    </Reveal>
                </div>
            </section>

            {/* ================= KAEC / THUWAL ================= */}
            <section aria-labelledby="kaec" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-10 items-start">
                    <ol className="flex flex-wrap md:flex-col items-center justify-center gap-2 text-center" aria-label="Order along the coast, north to south">
                        {['Rabigh', 'KAEC', 'Thuwal', 'Jeddah'].map((p, i, a) => (
                            <li key={p} className="flex md:flex-col items-center gap-2">
                                <span className={`rounded-xl px-3 py-2 sm:px-4 sm:py-3 font-bold ${p === 'Rabigh' ? 'bg-[#10213f] text-white' : 'bg-[#f5efe4] text-[#10213f]'}`}>{p}</span>
                                {i < a.length - 1 && <ArrowDown className="w-4 h-4 text-[#c4553a] -rotate-90 md:rotate-0" aria-hidden="true" />}
                            </li>
                        ))}
                    </ol>
                    <div>
                        <h2 id="kaec" className="text-3xl md:text-5xl font-extrabold text-[#10213f] mb-4">Rabigh, KAEC &amp; Thuwal Connections</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">Three separate places a short way apart on the coast. We plan each pickup and drop-off to the exact address you give us - a hotel, office, project site, home or the KAEC rail station.</p>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-7">
                            {['Hotel transfers', 'Business meetings', 'Project visits', 'Family travel', 'Airport connections', 'Scheduled pickups'].map((x) => <li key={x} className="rounded-lg bg-[#f5efe4] px-3 py-2.5 text-sm font-semibold text-[#10213f]">{x}</li>)}
                        </ul>
                        <div className="flex flex-wrap gap-x-5 gap-y-3">
                            <QuoteLink set={{ from: 'Rabigh', to: 'KAEC' }} className={qbtn}>Quote Rabigh → KAEC <Arrow /></QuoteLink>
                            <QuoteLink set={{ from: 'Rabigh', to: 'Thuwal' }} className={qbtn}>Quote Rabigh → Thuwal <Arrow /></QuoteLink>
                            <Link href="/locations/kaec/" className={link}>KAEC</Link>
                            <Link href="/locations/thuwal/" className={link}>Thuwal</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= INDUSTRIAL ================= */}
            <section aria-labelledby="industrial" className="bg-[#10213f] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <HardHat className="w-7 h-7 text-[#f07b5a] mb-5" aria-hidden="true" />
                    <h2 id="industrial" className="text-3xl md:text-5xl font-extrabold mb-4">Business &amp; Industrial Transport in Rabigh</h2>
                    <p className="text-white/70 max-w-2xl mb-10">Transport to and from worksites and business premises, planned around the exact gate or reception point.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
                        <div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                                {['Employee transport', 'Contractor travel', 'Business visitors', 'Airport pickups for site visits', 'Hotel ↔ worksite', 'Scheduled site visits', 'Intercity corporate travel'].map((x) => <li key={x} className="flex gap-3 rounded-lg border border-white/[0.15] px-4 py-3 text-white/[0.85]"><Check className="w-4 h-4 mt-1 text-[#f07b5a] shrink-0" aria-hidden="true" />{x}</li>)}
                            </ul>
                            <p className="flex gap-3 rounded-xl bg-white/[0.06] p-4 text-sm text-white/80"><Info className="w-4 h-4 mt-0.5 text-[#f7b49a] shrink-0" aria-hidden="true" />Site access remains subject to the destination&apos;s own security and visitor requirements. We transport passengers to the agreed pickup and drop-off points.</p>
                        </div>
                        <div className="rounded-2xl bg-[#f5efe4] text-[#10213f] p-7 self-start">
                            <h3 className="mb-3">Going to an industrial site?</h3>
                            <p className="text-slate-600 text-sm mb-5">Mark it on the quote form and add the details that get the car to the right place:</p>
                            <ul className="space-y-2 text-sm text-slate-700 mb-6">
                                {['Site or company name', 'Exact pickup / drop-off point', 'Gate or reception instructions', 'On-site contact, if needed', 'Access or PPE notes, if the site has them'].map((x) => <li key={x} className="flex gap-2.5"><MapPin className="w-4 h-4 mt-0.5 text-[#c4553a] shrink-0" aria-hidden="true" />{x}</li>)}
                            </ul>
                            <QuoteLink set={{ to: 'Rabigh industrial area', industrial: true }} className="group inline-flex items-center gap-2 rounded-xl bg-[#10213f] px-5 py-3 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b5a] focus-visible:ring-offset-2">
                                Add site details <Arrow />
                            </QuoteLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CITY VS INDUSTRIAL ================= */}
            <section aria-labelledby="city-vs" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 id="city-vs" className="text-3xl md:text-5xl font-extrabold text-[#10213f] mb-4">Rabigh City or the Industrial Area?</h2>
                    <p className="text-slate-600 max-w-2xl mb-10">Both are Rabigh, but pickups work differently. For business and industrial locations, the exact pickup instructions matter more than the address.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { i: Building2, t: 'Rabigh city', items: ['Homes', 'Hotels', 'Family travel', 'City transfers', 'Restaurants and shopping', 'Local pickups'], send: 'Hotel name or a landmark.' },
                            { i: Factory, t: 'Industrial / business area', items: ['Worksite visits', 'Contractors', 'Corporate travel', 'Employee movements'], send: 'Site name plus gate or reception point.' },
                        ].map((c) => (
                            <div key={c.t} className="rounded-2xl bg-white border border-[#10213f]/10 p-7">
                                <c.i className="w-6 h-6 text-[#c4553a] mb-4" aria-hidden="true" />
                                <h3 className="text-[#10213f] mb-4">{c.t}</h3>
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Best for</p>
                                <ul className="flex flex-wrap gap-2 mb-5">{c.items.map((x) => <li key={x} className="rounded-full bg-[#f5efe4] px-3 py-1.5 text-sm text-[#10213f]">{x}</li>)}</ul>
                                <p className="text-sm text-slate-600"><strong className="text-[#10213f]">Send us:</strong> {c.send}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= AIRPORTS ================= */}
            <section aria-labelledby="airports" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Plane className="w-7 h-7 text-[#c4553a] mb-5" aria-hidden="true" />
                    <h2 id="airports" className="text-3xl md:text-5xl font-extrabold text-[#10213f] mb-4">Getting to Rabigh From Nearby Airports</h2>
                    <p className="text-slate-600 max-w-2xl mb-10">Rabigh is reached by road from the airports in Jeddah and Madinah.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
                        {[
                            { code: 'JED', name: 'King Abdulaziz International Airport, Jeddah', set: { from: JED, to: 'Rabigh' }, href: '/jeddah-airport-transfer/', l: 'Jeddah airport transfers' },
                            { code: 'MED', name: 'Prince Mohammad bin Abdulaziz International Airport, Madinah', set: { from: MED, to: 'Rabigh' }, href: '/madinah-airport-taxi/', l: 'Madinah airport transfers' },
                        ].map((a) => (
                            <div key={a.code} className="rounded-2xl border border-[#10213f]/10 bg-[#f5efe4] p-7">
                                <p className="text-3xl font-extrabold text-[#10213f] mb-1">{a.code}</p>
                                <p className="text-sm text-slate-600 mb-5">{a.name}</p>
                                <ol className="flex flex-wrap items-center gap-2 mb-6 text-sm font-semibold text-[#10213f]">
                                    {['Airport', 'Private pickup', 'Your Rabigh address'].map((s, i, arr) => (
                                        <li key={s} className="flex items-center gap-2"><span className="rounded-lg bg-white px-3 py-2 border border-[#10213f]/10">{s}</span>{i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-[#c4553a]" aria-hidden="true" />}</li>
                                    ))}
                                </ol>
                                <div className="flex flex-wrap gap-x-5 gap-y-2">
                                    <QuoteLink set={a.set} className={qbtn}>Book arrival <Arrow /></QuoteLink>
                                    <Link href={a.href} className={link}>{a.l}</Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-[#10213f] mb-6">Arriving in Rabigh from another city?</h3>
                    <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
                        {[
                            { i: CalendarDays, t: 'Before arrival', d: 'Send your flight number, passengers, luggage, destination and a contact number.' },
                            { i: PlaneLanding, t: 'After landing', d: 'Pickup follows the instructions sent with your confirmed booking.' },
                            { i: Car, t: 'Final journey', d: 'Direct to your hotel, residence, business or industrial destination.' },
                        ].map((s, i) => (
                            <li key={s.t}>
                                <Reveal delay={i * 90} className="h-full">
                                    <div className="h-full rounded-2xl border border-[#10213f]/10 p-6">
                                        <s.i className="w-6 h-6 text-[#c4553a] mb-3" aria-hidden="true" />
                                        <p className="font-bold text-[#10213f] mb-1">{s.t}</p>
                                        <p className="text-sm text-slate-600">{s.d}</p>
                                    </div>
                                </Reveal>
                            </li>
                        ))}
                    </ol>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-2xl bg-[#10213f] text-white p-7">
                            <PlaneTakeoff className="w-6 h-6 text-[#f07b5a] mb-4" aria-hidden="true" />
                            <h3 className="mb-3">Returning from Rabigh to Jeddah Airport?</h3>
                            <p className="text-sm text-white/70 mb-4">Rabigh pickup → Jeddah → King Abdulaziz International Airport. Send your flight number, departure date and time, terminal if you know it, passengers and luggage. We suggest a pickup time that leaves room for the road and airport procedures.</p>
                            <QuoteLink set={{ from: 'Rabigh', to: JED }} className="group inline-flex items-center gap-2 font-bold text-[#f7b49a]">Book a JED departure <Arrow /></QuoteLink>
                        </div>
                        <div className="rounded-2xl bg-[#10213f] text-white p-7">
                            <PlaneTakeoff className="w-6 h-6 text-[#f07b5a] mb-4" aria-hidden="true" />
                            <h3 className="mb-3">Rabigh to Madinah Airport</h3>
                            <p className="text-sm text-white/70 mb-4">Hotel or residence pickup in Rabigh to Madinah airport. Add your flight number and departure time, your luggage, and whether you need a return pickup later.</p>
                            <QuoteLink set={{ from: 'Rabigh', to: MED }} className="group inline-flex items-center gap-2 font-bold text-[#f7b49a]">Book a MED departure <Arrow /></QuoteLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= HOURLY ================= */}
            <section aria-labelledby="hourly" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <Clock className="w-7 h-7 text-[#c4553a] mb-5" aria-hidden="true" />
                        <h2 id="hourly" className="text-3xl md:text-5xl font-extrabold text-[#10213f] mb-5">Need More Than One Stop?</h2>
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="rounded-xl bg-white border border-[#10213f]/10 p-4"><p className="font-bold text-[#10213f]">Transfer</p><p className="text-sm text-slate-600">Point A → point B.</p></div>
                            <div className="rounded-xl bg-[#10213f] text-white p-4"><p className="font-bold">Hourly driver</p><p className="text-sm text-white/70">The car stays with you for the agreed time and stops.</p></div>
                        </div>
                        <p className="text-slate-600 mb-6">Availability for hourly bookings in Rabigh is confirmed for your date.</p>
                        <div className="flex flex-wrap gap-x-5 gap-y-3">
                            <Link href={`/booking/?${new URLSearchParams({ from: 'Rabigh', trip: 'hourly', hours: '4' }).toString()}`} className={qbtn}>Book by the hour <Arrow /></Link>
                            <Link href="/services/private-driver/" className={link}>Private driver service</Link>
                        </div>
                    </div>
                    <ol className="relative border-l-2 border-dashed border-[#f07b5a]/60 ml-3 space-y-5" aria-label="Example day">
                        {['Hotel', 'Business meeting', 'Industrial location', 'Lunch', 'Return'].map((s) => (
                            <li key={s} className="pl-7 relative">
                                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#10213f] ring-4 ring-[#f5efe4]" aria-hidden="true" />
                                <span className="font-bold text-[#10213f]">{s}</span>
                            </li>
                        ))}
                        <li className="pl-7 text-xs text-slate-500">An example - your stops set the plan.</li>
                    </ol>
                </div>
            </section>

            {/* ================= FAMILY & VEHICLES ================= */}
            <section aria-labelledby="family" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Users className="w-7 h-7 text-[#c4553a] mb-5" aria-hidden="true" />
                    <h2 id="family" className="text-3xl md:text-5xl font-extrabold text-[#10213f] mb-4">Travelling With Family or Extra Luggage?</h2>
                    <p className="text-slate-600 max-w-2xl mb-8">Enter your group and bags - only vehicles with enough seats and space are shown.</p>
                    <RabighVehicleFit fleet={FLEET} />

                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#10213f] mt-16 mb-6">Choose the Vehicle Around Your Journey</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                        {[
                            ['Sedan', 'Smaller groups and light luggage.'],
                            ['SUV', 'Families and extra luggage.'],
                            ['Large SUV', 'Larger families or executive travel.'],
                            ['Van / MPV', 'Larger groups.'],
                            ['Sprinter', 'Group transport, where available.'],
                        ].map(([c, d]) => {
                            const vs = c === 'Van / MPV' ? [...classOf('Van / MPV'), ...classOf('Van')] : classOf(c);
                            return (
                                <li key={c} className="rounded-2xl border border-[#10213f]/10 bg-[#f5efe4] p-5">
                                    <p className="font-bold text-[#10213f]">{c}</p>
                                    <p className="text-sm text-slate-600 mb-3">{d}</p>
                                    <p className="text-xs text-slate-500">{vs.map((v) => `${v.name.split(' /')[0]} (${v.passengers} seats)`).join(' · ')}</p>
                                </li>
                            );
                        })}
                    </ul>
                    <p className="text-sm text-slate-500 mt-4">Vehicle availability is confirmed for your date. <Link href="/fleet/" className={link}>See the full fleet</Link>.</p>
                </div>
            </section>

            {/* ================= COAST & DAY TRIPS ================= */}
            <section aria-labelledby="coast" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
                    <div>
                        <Waves className="w-7 h-7 text-[#c4553a] mb-5" aria-hidden="true" />
                        <h2 id="coast" className="text-3xl md:text-4xl font-extrabold text-[#10213f] mb-4">Rabigh &amp; Red Sea Coastal Journeys</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">A private car for family outings along the coast, photography stops, day trips and hotel or resort connections. Tell us exactly where you want to go.</p>
                        <p className="flex gap-3 rounded-xl bg-white border border-[#10213f]/10 p-4 text-sm text-slate-600"><Info className="w-4 h-4 mt-0.5 text-[#c4553a] shrink-0" aria-hidden="true" />Some coastal places have tickets, opening hours or access rules. Access depends on the current rules at each place, not on the transfer.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#10213f] mb-6">Private Day Trips From Rabigh</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                { t: 'Jeddah', c: 'South along the coast', href: '/locations/jeddah/' },
                                { t: 'KAEC', c: 'Short coastal hop', href: '/locations/kaec/' },
                                { t: 'Yanbu', c: 'North along the coast', href: '/locations/yanbu/' },
                                { t: 'Madinah', c: 'Longer inland journey', href: '/locations/madinah/' },
                            ].map((d) => (
                                <li key={d.t} className="rounded-2xl bg-white border border-[#10213f]/10 p-5 transition hover:-translate-y-0.5 motion-reduce:hover:translate-y-0">
                                    <p className="text-xs font-bold uppercase tracking-wider text-[#c4553a]">{d.c}</p>
                                    <p className="text-lg font-bold text-[#10213f] mb-3">{d.t}</p>
                                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                                        <QuoteLink set={{ from: 'Rabigh', to: d.t, trip: 'return' }} className={qbtn}>Day trip with return <Arrow /></QuoteLink>
                                        <Link href={d.href} className={link}>{d.t} guide</Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm text-slate-500 mt-4">For sightseeing plans, see <Link href="/services/tourism-transport/" className={link}>tourism transport</Link>.</p>
                    </div>
                </div>
            </section>

            {/* ================= BUSINESS ================= */}
            <section aria-labelledby="business" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    <div>
                        <Briefcase className="w-7 h-7 text-[#c4553a] mb-5" aria-hidden="true" />
                        <h2 id="business" className="text-3xl md:text-4xl font-extrabold text-[#10213f] mb-6">Business Travel Around Rabigh</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {['Jeddah ↔ Rabigh', 'Airport ↔ business location', 'Hotel ↔ industrial site', 'KAEC ↔ Rabigh', 'Rabigh ↔ Madinah', 'Visitor transport for companies'].map((x) => <li key={x} className="rounded-lg bg-[#f5efe4] px-4 py-3 font-semibold text-[#10213f]">{x}</li>)}
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-[#10213f]/10 p-7">
                        <p className="text-slate-600 mb-5">Booking for a visitor? Give their name and number for the pickup and the meeting location. For regular company travel:</p>
                        <Link href="/services/business/" className={qbtn}>Business chauffeur service <Arrow /></Link>
                    </div>
                </div>
            </section>

            {/* ================= ROUTE NETWORK ================= */}
            <section aria-labelledby="popular" className="bg-[#10213f] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="popular" className="text-3xl md:text-5xl font-extrabold mb-8">Popular Journeys From Rabigh</h2>
                    <ul className="flex gap-3 overflow-x-auto snap-x pb-3 -mx-4 px-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:mx-0 sm:px-0">
                        {[
                            { g: 'South', t: 'Rabigh → Jeddah', k: 'City transfer', set: { from: 'Rabigh', to: 'Jeddah' } },
                            { g: 'Airport', t: 'Rabigh → JED', k: 'Airport departure', set: { from: 'Rabigh', to: JED } },
                            { g: 'Airport', t: 'Rabigh → MED', k: 'Airport departure', set: { from: 'Rabigh', to: MED } },
                            { g: 'North / inland', t: 'Rabigh → Madinah', k: 'Intercity', set: { from: 'Rabigh', to: 'Madinah' } },
                            { g: 'Business', t: 'Rabigh → KAEC', k: 'Regional', set: { from: 'Rabigh', to: 'KAEC' } },
                            { g: 'Business', t: 'Rabigh → Thuwal', k: 'Regional', set: { from: 'Rabigh', to: 'Thuwal' } },
                            { g: 'Local', t: 'Rabigh → industrial area', k: 'Site transfer', set: { from: 'Rabigh', to: 'Rabigh industrial area', industrial: true } },
                            { g: 'Coast', t: 'Rabigh → Yanbu', k: 'Coastal intercity', set: { from: 'Rabigh', to: 'Yanbu' } },
                        ].map((r) => (
                            <li key={r.t} className="snap-start shrink-0 w-[70%] sm:w-auto">
                                <QuoteLink set={r.set} className="group flex h-full w-full flex-col text-left rounded-2xl border border-white/[0.15] p-5 min-h-[128px] transition hover:border-[#f07b5a] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b5a]">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#f7b49a]">{r.g}</span>
                                    <span className="text-lg font-bold mt-1">{r.t}</span>
                                    <span className="text-sm text-white/60 flex-1">{r.k}</span>
                                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold">Get a quote <Arrow /></span>
                                </QuoteLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= AREAS ================= */}
            <section aria-labelledby="areas" className="bg-[#0b182f] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="areas" className="text-3xl md:text-5xl font-extrabold mb-8">Where Should We Pick You Up?</h2>
                    <RabighAreas areas={AREAS} />
                </div>
            </section>

            {/* ================= PRICING / DETAILS / PLANNING ================= */}
            <section aria-labelledby="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="rounded-2xl bg-white border border-[#10213f]/10 p-7">
                        <h2 id="pricing" className="yanbu-card-title font-extrabold text-[#10213f] mb-4">What Determines Your Rabigh Transfer Price?</h2>
                        <ul className="flex flex-wrap gap-2 mb-6">
                            {['Pickup', 'Destination', 'Vehicle', 'Passengers', 'Luggage', 'Date', 'Time', 'One-way or return', 'Waiting', 'Extra stops', 'Special requirements'].map((x) => <li key={x} className="rounded-full bg-[#f5efe4] px-3 py-1.5 text-sm text-[#10213f]">{x}</li>)}
                        </ul>
                        <Button asChild className="group h-auto py-3.5 px-6 rounded-xl font-bold bg-[#10213f] text-white hover:bg-black">
                            <a href={QUOTE_HREF}>Request Rabigh Quote <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" /></a>
                        </Button>
                    </div>
                    <div className="rounded-2xl bg-white border border-[#10213f]/10 p-7">
                        <h2 className="yanbu-card-title font-extrabold text-[#10213f] mb-4">Send Us These Details</h2>
                        <ul className="space-y-2 text-sm text-slate-700">
                            {['Pickup location', 'Destination', 'Date', 'Time', 'Passengers', 'Luggage', 'Vehicle preference', 'Flight number, if airport', 'Return journey', 'Site access notes, if industrial'].map((x) => <li key={x} className="flex gap-2.5"><span className="mt-0.5 w-4 h-4 shrink-0 rounded border border-[#10213f]/30" aria-hidden="true" />{x}</li>)}
                        </ul>
                    </div>
                    <div className="rounded-2xl bg-[#10213f] text-white p-7">
                        <h2 className="yanbu-card-title font-extrabold mb-4">Planning a Long-Distance Journey?</h2>
                        <p className="text-white/70 text-sm mb-4">Journey time changes with conditions, so we don&apos;t quote one fixed duration. It depends on:</p>
                        <ul className="space-y-2 text-sm text-white/[0.85]">
                            {['Traffic and departure time', 'Road conditions and weather', 'Stops along the way', 'Airport procedures', 'Site access at the destination'].map((x) => <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#f07b5a] shrink-0" aria-hidden="true" />{x}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= NOT STREET-HAIL + TRUST ================= */}
            <section aria-labelledby="trust" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <p className="rounded-2xl border-2 border-[#f07b5a] bg-[#fdf1ec] p-5 text-[#10213f] mb-12"><strong>Pre-booked only.</strong> This service is for pre-booked private transportation. It is not a street-hail or shared taxi service.</p>
                    <h2 id="trust" className="text-3xl md:text-4xl font-extrabold text-[#10213f] mb-8">How a Rabigh Booking Works</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                        {[
                            [Info, 'Clear quote', 'You see the agreed fare before you travel.'],
                            [Car, 'Private vehicle', 'No shared passengers.'],
                            [MapPin, 'Door-to-door', 'Pickup and drop-off at the agreed places.'],
                            [Users, 'Vehicle matching', 'Chosen around passengers and luggage.'],
                            [MessageCircle, 'Direct booking', 'WhatsApp or the booking form.'],
                        ].map(([I, t, d]) => {
                            const Icon = I as typeof Info;
                            return (
                                <div key={t as string} className="rounded-2xl bg-[#f5efe4] p-5">
                                    <Icon className="w-5 h-5 text-[#c4553a] mb-3" aria-hidden="true" />
                                    <h3 className="text-[#10213f] mb-1">{t as string}</h3>
                                    <p className="text-sm text-slate-600">{d as string}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-extrabold text-[#10213f] mb-8">Rabigh Transfer Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#10213f]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#10213f] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <h2 id="related" className="sr-only">Related pages</h2>
                    {[
                        { t: 'Nearby', l: [['Jeddah', '/locations/jeddah/'], ['KAEC', '/locations/kaec/'], ['Thuwal', '/locations/thuwal/'], ['Madinah', '/locations/madinah/'], ['Yanbu', '/locations/yanbu/']] },
                        { t: 'Services', l: [['Intercity transfers', '/services/intercity/'], ['Airport transfers', '/services/airport-transfers/'], ['Private driver', '/services/private-driver/'], ['Business chauffeur', '/services/business/'], ['Tourism transport', '/services/tourism-transport/']] },
                    ].map((g) => (
                        <div key={g.t}>
                            <p className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">{g.t}</p>
                            <ul className="flex flex-wrap gap-2">{g.l.map(([l, h]) => <li key={h}><Link href={h} className="inline-block rounded-full border border-[#10213f]/[0.15] px-4 py-2.5 text-sm font-semibold text-[#10213f] hover:border-[#f07b5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b5a]">{l}</Link></li>)}</ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#10213f]">
                <CoastScene className="absolute inset-0 -z-10 w-full h-full opacity-60" />
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Where Are You Going From Rabigh?</h2>
                    <p className="text-lg text-white/80 mb-10">Tell us your pickup, destination, date, passengers and luggage. We&apos;ll confirm the appropriate private vehicle and quote for your journey.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-[#f07b5a] text-[#10213f] hover:bg-[#f39579]">
                            <a href={QUOTE_HREF}>Get a Rabigh Quote</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book on WhatsApp</a>
                        </Button>
                    </div>
                    <p className="text-sm text-white/60 mt-8">Jeddah • KAEC • Thuwal • Madinah • Industrial &amp; Long-Distance Transfers</p>
                </div>
            </section>
        </div>
    );
}
