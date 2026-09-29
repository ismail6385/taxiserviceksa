import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldAlert, Plane, PlaneLanding, HardHat, Check, Package, Clock, Repeat, CalendarDays, Route, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import NeomGateways from '@/components/neom/NeomGateways';
import NeomRegionExplorer from '@/components/neom/NeomRegionExplorer';
import NeomFleet from '@/components/neom/NeomFleet';

const PAGE_URL = 'https://taxiserviceksa.com/locations/neom/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for a NEOM transfer. Pickup, exact destination / site, date and passengers: ')}`;

export const metadata: Metadata = {
    title: 'NEOM Private Transfer & Chauffeur Service | Tabuk, NEOM Bay Airport',
    description:
        'Pre-booked private transfers for NEOM, Tabuk and the northwest coast: NEOM Bay Airport and Tabuk Airport pickups, project and contractor transport, subject to destination access requirements.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'NEOM Private Transfer & Chauffeur Service',
        description: 'Pre-booked airport, project and intercity transportation across NEOM and northwest Saudi Arabia.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private transfers for NEOM and northwest Saudi Arabia' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NEOM Private Transfer & Chauffeur Service',
        description: 'Pre-booked airport, project and intercity transportation across NEOM and northwest Saudi Arabia.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

const q = (p: Record<string, string>) => `/booking/?${new URLSearchParams(p).toString()}`;

const ACCESS_NOTE =
    'NEOM includes areas with different access requirements. Some project, construction, accommodation and controlled zones may require prior authorization, a valid credential, host confirmation or a designated pickup point. Provide the exact destination when requesting a quote so the transfer can be planned around the applicable access rules.';

const faqs = [
    { q: 'Can I book a private transfer from Tabuk to NEOM?', a: 'Yes - from Tabuk Airport or a Tabuk hotel to your NEOM destination or its designated drop-off point. Journey time depends on the exact destination, route conditions, checkpoints and access arrangements.' },
    { q: 'Do you provide transfers from NEOM Bay Airport?', a: 'Yes. Share your flight number and destination; we drive to your accommodation or the pickup/drop-off point your destination has confirmed.' },
    { q: 'Can a driver enter NEOM project areas?', a: 'Only where the destination allows it. Entry is decided by the site, not by us, so many trips end at a security point, reception or designated drop-off.' },
    { q: 'Do I need authorization to enter restricted NEOM areas?', a: 'Controlled areas may require prior authorization, a credential or host confirmation. Check with your host or employer; we cannot issue or arrange access.' },
    { q: 'Can you take contractors to NEOM project locations?', a: 'We can transport contractors to the approved pickup/drop-off point for their site. Send the project name, reporting point and times.' },
    { q: 'What information do you need for a NEOM booking?', a: 'Exact pickup, exact destination and site name, approved drop-off point, date and time, passengers, luggage or equipment, flight number if flying, and whether you need a return.' },
    { q: 'Can I book a return transfer from NEOM to Tabuk?', a: 'Yes - book both legs together or the return on its own, with pickup at the same approved point.' },
    { q: 'Can I hire a private driver for several hours?', a: 'Yes. Choose hourly hire on the booking form; the car stays with you between approved stops.' },
    { q: 'Which vehicle should I book for a NEOM project team?', a: 'A Staria or Yukon for up to about six with bags, a Hiace or Coaster for larger teams. Tell us about equipment so we can confirm it fits.' },
    { q: 'Can you provide transfers between NEOM and other northwest destinations?', a: 'Yes - for example Duba, Sharma, Haql, Al Wajh and Tabuk. Send the route and we quote it.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private transfers for NEOM and northwest Saudi Arabia',
            url: PAGE_URL,
            serviceType: 'Pre-booked private transfer',
            description:
                'Pre-booked private transfers from NEOM Bay Airport, Tabuk Airport, Duba and Sharma to accommodation and approved pickup/drop-off points in the NEOM region, subject to destination access requirements.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: { '@type': 'AdministrativeArea', name: 'Tabuk Province, Saudi Arabia' },
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}
const mono = 'font-mono text-xs font-bold tracking-[0.2em]';

export default function NeomPage() {
    return (
        <div className="neom-page bg-[#f4f6f8]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0a0f14]">
                <svg className="absolute inset-0 -z-10 w-full h-full" viewBox="0 0 1440 860" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <defs>
                        <pattern id="nh-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M40 0 H0 V40" fill="none" stroke="#22d3ee" strokeOpacity="0.05" />
                        </pattern>
                    </defs>
                    <rect width="1440" height="860" fill="url(#nh-grid)" />
                    {/* contour lines */}
                    <g fill="none" stroke="#94a3b8" strokeOpacity="0.07">
                        {Array.from({ length: 7 }, (_, i) => (
                            <ellipse key={i} cx="1100" cy="300" rx={120 + i * 70} ry={70 + i * 40} transform={`rotate(-18 1100 300)`} />
                        ))}
                    </g>
                    {/* coast */}
                    <path d="M620 860 C 700 700, 760 600, 820 520 S 940 360, 980 0" fill="none" stroke="#22d3ee" strokeOpacity="0.18" strokeWidth="1.5" />
                    {/* route Tabuk -> checkpoint -> NEOM */}
                    <path d="M1380 140 C 1200 220, 1080 320, 960 420 S 860 560, 820 600" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" pathLength={1} className="route-draw" />
                    <rect x="1370" y="130" width="20" height="20" fill="#0a0f14" stroke="#22d3ee" strokeWidth="2" />
                    <rect x="952" y="412" width="16" height="16" fill="#f59e0b" transform="rotate(45 960 420)" />
                    <circle cx="820" cy="600" r="9" fill="#22d3ee" />
                </svg>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a0f14] via-[#0a0f14]/90 to-[#0a0f14]/40" aria-hidden="true" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-6 lg:gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className={`hidden sm:block ${mono} text-cyan-300 mb-6`}>TABUK · NEOM BAY AIRPORT · PROJECT DESTINATIONS · DUBA · SHARMA</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-tight mb-5">NEOM Private Transfer &amp; Chauffeur Service</h1>
                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed sm:mb-6 max-w-xl">
                            Pre-booked airport, project and intercity transportation across NEOM and northwest Saudi Arabia - subject to destination access requirements.
                        </p>
                        <p className="hidden sm:flex items-start gap-2 text-sm text-amber-200/90 mb-8 max-w-xl">
                            <ShieldAlert className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                            Some NEOM areas are controlled. <a href="#access" className="underline hover:text-white">Read before you book</a>.
                        </p>
                        <div className="hidden sm:flex gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-cyan-400 text-[#0a0f14] hover:bg-cyan-300">
                                <a href={QUOTE_HREF}>Request NEOM Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/5 text-white border-white/30 hover:bg-white/15 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Booking</a>
                            </Button>
                        </div>
                    </div>
                    <div id="quote" className="scroll-mt-40">
                        <RouteQuoteCard
                            title="NEOM transfer request"
                            cta="Request NEOM Quote"
                            fromPlaceholder="Airport, hotel or exact address"
                            toPlaceholder="Accommodation, site or meeting point"
                            fromChips={['Tabuk Airport (TUU)', 'Tabuk city', 'NEOM Bay Airport (NUM)', 'Duba', 'Sharma']}
                            toChips={['NEOM accommodation', 'NEOM project site', 'Designated meeting point', 'NEOM Bay Airport (NUM)', 'Tabuk', 'Duba']}
                            showFlight
                            extraFields={[
                                { id: 'site', label: 'NEOM project / site name', placeholder: 'Project, company or accommodation' },
                                { id: 'access', label: 'Access notes', placeholder: 'Approved drop-off point, host, gate' },
                            ]}
                            buttonClass="bg-[#0a0f14] hover:bg-black focus-visible:ring-cyan-500"
                        />
                        <p className="mt-3 text-xs text-slate-400">Entering a site name helps us plan; it does not grant access to that site.</p>
                    </div>
                </div>
            </section>

            {/* ================= ACCESS (first, and easy to find) ================= */}
            <section id="access" aria-labelledby="access-title" className="scroll-mt-28 bg-amber-50 border-y border-amber-200 px-4 sm:px-6 lg:px-8 py-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-5 items-start">
                    <ShieldAlert className="w-9 h-9 text-amber-700" aria-hidden="true" />
                    <div>
                        <h2 id="access-title" className="text-2xl md:text-3xl font-bold text-amber-950 mb-3">Before You Book a NEOM Transfer</h2>
                        <p className="text-amber-950/85 leading-relaxed max-w-4xl">{ACCESS_NOTE}</p>
                        <p className="text-sm text-amber-900/80 mt-3">We provide the vehicle and driver. We do not issue credentials, and we cannot take passengers past a point their destination has not approved.</p>
                    </div>
                </div>
            </section>

            {/* ================= GATEWAYS (primary interactive) ================= */}
            <section aria-labelledby="gateways" className="bg-[#0a0f14] text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <p className={`${mono} text-cyan-300 mb-3`}>STEP 1</p>
                    <h2 id="gateways" className="text-3xl md:text-5xl font-bold mb-3">Where Are You Starting?</h2>
                    <p className="text-slate-400 max-w-2xl mb-10">Pick your gateway. Each one changes what we need from you.</p>
                    <NeomGateways />
                </div>
            </section>

            {/* ================= REGION EXPLORER ================= */}
            <section aria-labelledby="region" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <p className={`${mono} text-cyan-700 mb-3`}>STEP 2</p>
                    <h2 id="region" className="text-3xl md:text-5xl font-bold text-[#0a0f14] mb-4">Where in NEOM Are You Going?</h2>
                    <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mb-10">
                        NEOM is a region, not one destination. There is no single centre to drive to - an airport, a coastal town, an industrial port area, project zones and accommodation are spread across it, each with its own access arrangements. Tell us which one, and the exact point.
                    </p>
                    <NeomRegionExplorer />
                </div>
            </section>

            {/* ================= TABUK -> NEOM ================= */}
            <section aria-labelledby="tabuk" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
                    <Reveal>
                        <p className={`${mono} text-cyan-700 mb-3`}>TUU → NEOM</p>
                        <h2 id="tabuk" className="text-3xl md:text-4xl font-bold text-[#0a0f14] mb-4">Tabuk to NEOM Private Transfer</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            Tabuk is the main gateway city for the region, and the drive west to NEOM is long. One private car from your Tabuk hotel or the airport to your destination saves changing vehicles and keeps equipment and luggage together.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-slate-700 mb-6">
                            {['Tabuk Airport or hotel pickup', 'Private vehicle the whole way', 'To accommodation or approved project point', 'Room planned for luggage and equipment', 'Return transfer on request', 'Stops on the way when you ask'].map((i) => (
                                <li key={i} className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-700 mt-1 shrink-0" aria-hidden="true" />{i}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-slate-500 border-l-2 border-amber-400 pl-4">Journey time depends on the exact NEOM destination, route conditions, checkpoints and access arrangements.</p>
                    </Reveal>
                    <Reveal delay={100}>
                        <div className="rounded-3xl bg-[#0a0f14] text-white p-7">
                            <ol className="space-y-4 mb-7 font-mono text-sm" aria-label="Tabuk to NEOM">
                                {[['TUU', 'Tabuk Airport or hotel'], ['ROAD', 'Long drive west'], ['CHECK', 'Checkpoints where they apply'], ['NEOM', 'Approved drop-off point']].map(([c, t], i) => (
                                    <li key={c} className="flex items-center gap-4">
                                        <span className={`w-16 text-center rounded-md py-1 text-xs font-bold ${i === 2 ? 'bg-amber-400 text-[#0a0f14]' : i === 3 ? 'bg-cyan-400 text-[#0a0f14]' : 'bg-white/10 text-cyan-200'}`}>{c}</span>
                                        <span className="font-sans text-slate-200">{t}</span>
                                    </li>
                                ))}
                            </ol>
                            <div className="flex flex-col gap-2">
                                <Link href="/routes/tabuk-neom/" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 font-bold text-[#0a0f14] hover:bg-cyan-300">View Tabuk → NEOM Transfer <Arrow /></Link>
                                <Link href="/tabuk-airport-taxi/" className="text-center text-sm font-bold text-cyan-300 hover:underline py-2">Tabuk Airport transfers</Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ================= AIRPORTS ================= */}
            <section aria-labelledby="airports" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="airports" className="text-3xl md:text-4xl font-bold text-[#0a0f14] mb-3">Which Airport Should You Use for NEOM?</h2>
                    <p className="text-slate-600 max-w-2xl mb-10">Neither is simply “better”. It depends on your flights and where exactly you are going.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                code: 'TUU', name: 'Tabuk Airport', icon: Plane,
                                best: ['Your flight arrives in Tabuk', 'Your destination is reached by road from Tabuk', 'You need onward ground transport', 'You are connecting from wider Saudi routes'],
                                cta: q({ from: 'Tabuk Airport (TUU)', to: 'NEOM' }),
                            },
                            {
                                code: 'NUM', name: 'NEOM Bay Airport', icon: PlaneLanding,
                                best: ['Your itinerary lands there', 'Your final destination suits that airport', 'Your accommodation or project access is confirmed'],
                                cta: q({ from: 'NEOM Bay Airport (NUM)' }),
                            },
                        ].map((a) => (
                            <Reveal key={a.code} className="h-full">
                                <article className="h-full rounded-3xl bg-white border border-slate-200 p-7 flex flex-col">
                                    <div className="flex items-center justify-between mb-5">
                                        <span className="font-mono text-4xl font-black text-[#0a0f14]">{a.code}</span>
                                        <a.icon className="w-7 h-7 text-cyan-700" aria-hidden="true" />
                                    </div>
                                    <h3 className="mb-4 text-[#0a0f14]">{a.name}</h3>
                                    <p className={`${mono} text-slate-500 mb-3`}>BEST WHEN</p>
                                    <ul className="space-y-2 text-slate-700 mb-7">
                                        {a.best.map((b) => <li key={b} className="flex gap-2.5"><Check className="w-4 h-4 text-cyan-700 mt-1 shrink-0" aria-hidden="true" />{b}</li>)}
                                    </ul>
                                    <Link href={a.cta} className="group mt-auto inline-flex items-center gap-2 font-bold text-cyan-800">Transfer from {a.code} <Arrow /></Link>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                    <div className="mt-6 rounded-3xl bg-[#0a0f14] text-white p-7 md:p-9 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-3">NEOM Bay Airport Private Transfer</h2>
                            <p className="text-slate-300 leading-relaxed">From NUM at Sharma to your accommodation, a project destination or a designated meeting point - and back to the airport for your departure. Share your flight number so the pickup can be coordinated around your arrival.</p>
                        </div>
                        <ul className="grid grid-cols-2 gap-2 text-sm text-slate-200 content-start">
                            {['Airport pickup', 'Accommodation transfer', 'Project destination', 'Designated meeting point', 'Return to NUM', 'Luggage planned in advance'].map((i) => (
                                <li key={i} className="flex gap-2"><Check className="w-4 h-4 text-cyan-300 mt-0.5 shrink-0" aria-hidden="true" />{i}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= PROJECT + ACCESS FLOW ================= */}
            <section aria-labelledby="project" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <Reveal>
                        <HardHat className="w-8 h-8 text-cyan-700 mb-4" aria-hidden="true" />
                        <h2 id="project" className="text-3xl md:text-4xl font-bold text-[#0a0f14] mb-4">NEOM Project &amp; Contractor Transportation</h2>
                        <p className="text-slate-700 leading-relaxed mb-6">
                            Consultants, engineers, contractors, project teams and visiting executives - usually between an airport, accommodation and a work location, sometimes every day for weeks. We book single transfers, scheduled runs and multi-day assignments. We do not claim any NEOM contract, partnership or site clearance - access is always set by your destination.
                        </p>
                        <ul className="grid grid-cols-2 gap-3 mb-6">
                            {[
                                { i: Plane, t: 'Airport ↔ accommodation' },
                                { i: Route, t: 'Accommodation ↔ project point' },
                                { i: Repeat, t: 'Scheduled / recurring runs' },
                                { i: CalendarDays, t: 'Multi-day assignments' },
                            ].map((m) => (
                                <li key={m.t} className="flex items-center gap-3 rounded-xl bg-[#f4f6f8] px-4 py-3.5 text-sm font-semibold text-[#0a0f14]"><m.i className="w-4 h-4 text-cyan-700 shrink-0" aria-hidden="true" />{m.t}</li>
                            ))}
                        </ul>
                        <Link href={q({ to: 'NEOM project site', notes: 'Project team transport - schedule and head count: ' })} className="group inline-flex items-center gap-2 rounded-xl bg-[#0a0f14] px-5 py-3.5 font-bold text-white hover:bg-black">Request a NEOM project quote <Arrow /></Link>
                    </Reveal>
                    <Reveal delay={100}>
                        <p className={`${mono} text-slate-500 mb-4`}>DESTINATION ACCESS FLOW</p>
                        <ol className="relative border-l border-dashed border-cyan-600/40 ml-4">
                            {[
                                'Tell us the exact project or site',
                                'Confirm your approved pickup/drop-off arrangement',
                                'Provide date, time and passenger details',
                                'Receive the transfer arrangement',
                                'Travel to the agreed pickup/drop-off point',
                            ].map((s, i) => (
                                <li key={s} className="relative pl-8 pb-6 last:pb-0">
                                    <span className={`absolute -left-4 top-0 w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${i === 1 ? 'bg-amber-400 text-[#0a0f14]' : 'bg-[#0a0f14] text-cyan-300'}`} aria-hidden="true">0{i + 1}</span>
                                    <p className="pt-1.5 font-semibold text-[#0a0f14]">{s}</p>
                                </li>
                            ))}
                        </ol>
                    </Reveal>
                </div>
            </section>

            {/* ================= CHECKPOINTS ================= */}
            <section aria-labelledby="checkpoints" className="bg-[#0a0f14] text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="checkpoints" className="text-3xl md:text-4xl font-bold mb-8">NEOM Access &amp; Checkpoint Planning</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                        {[
                            'Controlled areas may have access restrictions.',
                            'Credentials or authorization may be required.',
                            'Whether the driver can go further depends on the destination.',
                            'Security checkpoints can add time to the journey.',
                            'A designated pickup/drop-off point may be required.',
                        ].map((t, i) => (
                            <li key={t} className="rounded-2xl border border-white/10 p-5">
                                <span className="font-mono text-xs font-bold text-amber-400">0{i + 1}</span>
                                <p className="mt-2 text-sm text-slate-300">{t}</p>
                            </li>
                        ))}
                    </ul>
                    <p className="text-xs text-slate-500 mt-5">General planning information. Follow the instructions your host, employer or destination gives you.</p>
                </div>
            </section>

            {/* ================= NORTHWEST + DRIVER ================= */}
            <section aria-labelledby="northwest" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="northwest" className="text-3xl md:text-4xl font-bold text-[#0a0f14] mb-3">NEOM &amp; Northwest Coast Connections</h2>
                    <p className="text-slate-600 max-w-2xl mb-8">Towns along the coast road and back inland, each with its own page.</p>
                    <ul className="flex gap-3 overflow-x-auto snap-x pb-3 -mx-4 px-4 md:grid md:grid-cols-4 md:overflow-visible md:mx-0 md:px-0">
                        {[
                            { n: 'Duba', d: 'Coastal town and port - roughly 195–225 km by road from Tabuk.', h: '/locations/duba/' },
                            { n: 'Sharma', d: 'Home of NEOM Bay Airport - about 100 km up the coast from Duba.', h: '/locations/sharma/' },
                            { n: 'Haql', d: 'On the Gulf of Aqaba, at the north of the region.', h: '/locations/haql/' },
                            { n: 'Al Wajh', d: 'Further south along the Red Sea coast.', h: '/locations/al-wajh/' },
                        ].map((c) => (
                            <li key={c.n} className="snap-start shrink-0 w-64 md:w-auto rounded-2xl bg-white border border-slate-200 p-5 flex flex-col">
                                <MapPin className="w-5 h-5 text-cyan-700 mb-3" aria-hidden="true" />
                                <h3 className="mb-2 text-[#0a0f14]">{c.n}</h3>
                                <p className="text-sm text-slate-600 mb-4">{c.d}</p>
                                <div className="mt-auto flex gap-4">
                                    <Link href={q({ from: c.n, to: 'NEOM' })} className="group inline-flex items-center gap-1.5 text-sm font-bold text-cyan-800">Quote <Arrow /></Link>
                                    <Link href={c.h} className="text-sm font-semibold text-slate-700 hover:underline">Transport in {c.n}</Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm text-slate-600 mt-4">Continuing inland? See <Link href="/routes/tabuk-alula/" className="font-semibold text-cyan-800 hover:underline">Tabuk to AlUla</Link>, <Link href="/routes/tabuk-umluj/" className="font-semibold text-cyan-800 hover:underline">Tabuk to Umluj</Link> and <Link href="/routes/tabuk-tayma/" className="font-semibold text-cyan-800 hover:underline">Tabuk to Tayma</Link>.</p>

                    <div className="mt-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0a0f14] mb-3">Private Driver for NEOM Trips</h2>
                        <p className="text-slate-600 max-w-2xl mb-8">Useful when you have more than one approved destination in a day.</p>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            {[
                                { i: Route, t: 'Point-to-point', d: 'One destination.', h: q({ to: 'NEOM' }) },
                                { i: Repeat, t: 'Return', d: 'Destination, waiting, return.', h: q({ to: 'NEOM', notes: 'Return with waiting time: ' }) },
                                { i: Clock, t: 'Hourly', d: 'Several movements within the booked hours.', h: q({ trip: 'hourly', hours: '4' }) },
                                { i: CalendarDays, t: 'Full day', d: 'A project or business schedule.', h: q({ trip: 'hourly', hours: '10' }) },
                            ].map((m) => (
                                <Link key={m.t} href={m.h} className="group rounded-2xl bg-white border border-slate-200 p-5 hover:border-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500">
                                    <m.i className="w-5 h-5 text-cyan-700 mb-3" aria-hidden="true" />
                                    <p className="font-bold text-[#0a0f14]">{m.t}</p>
                                    <p className="text-sm text-slate-600 mt-1">{m.d}</p>
                                </Link>
                            ))}
                        </div>
                        <p className="text-sm text-slate-600 mt-4">More on the <Link href="/services/private-driver/" className="font-semibold text-cyan-800 hover:underline">private driver service</Link>.</p>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES + EQUIPMENT ================= */}
            <section aria-labelledby="vehicles" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className="text-3xl md:text-4xl font-bold text-[#0a0f14] mb-3">Vehicles for NEOM Journeys</h2>
                    <p className="text-slate-600 max-w-2xl mb-8">Long distances and project luggage make space the deciding factor. We do not assume a 4x4 is needed; tell us if your destination requires one.</p>
                    <NeomFleet />
                    <aside className="mt-10 rounded-3xl bg-[#f4f6f8] p-7 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-5">
                        <Package className="w-8 h-8 text-cyan-700" aria-hidden="true" />
                        <div>
                            <h3 className="mb-2 text-[#0a0f14]">Travelling With Project Equipment?</h3>
                            <p className="text-slate-700 text-sm leading-relaxed">Tell us the number of passengers, how much luggage, and any equipment or oversized items. Not every vehicle can carry tools or cases, so confirm equipment requirements before booking - we will tell you what fits.</p>
                        </div>
                    </aside>
                </div>
            </section>

            {/* ================= PRICING + CHECKLIST + PROCESS ================= */}
            <section aria-labelledby="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                    <Reveal>
                        <h2 id="pricing" className="text-3xl md:text-4xl font-bold text-[#0a0f14] mb-4">Request a NEOM Project Quote</h2>
                        <p className="text-slate-700 leading-relaxed mb-5">NEOM trips vary too much for a price list - the same “Tabuk to NEOM” request can mean very different destinations and waiting times. You receive the price before you confirm. It depends on:</p>
                        <div className="flex flex-wrap gap-2">
                            {['Pickup', 'Exact destination', 'Project / site', 'Vehicle', 'Passengers', 'Luggage', 'One way / return', 'Waiting', 'Date and time'].map((f) => (
                                <span key={f} className="rounded-md bg-white border border-slate-200 px-3 py-2 font-mono text-xs font-bold text-[#0a0f14]">{f.toUpperCase()}</span>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0a0f14] mb-4">What We Need From You</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {['Exact pickup', 'Exact destination', 'Project / site name', 'Approved pickup/drop-off point', 'Date', 'Time', 'Passenger count', 'Luggage / equipment', 'Flight number, if flying', 'Return requirement', 'Access or credential information relevant to the destination'].map((i) => (
                                <li key={i} className={`flex gap-2.5 rounded-lg bg-white border border-slate-200 px-3 py-2.5 text-sm text-[#0a0f14] ${i.startsWith('Access') ? 'sm:col-span-2' : ''}`}>
                                    <span className="mt-0.5 w-4 h-4 rounded border-2 border-cyan-600 shrink-0" aria-hidden="true" />{i}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0a0f14] mb-8">How Booking Works</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            ['Send the request', 'Form or WhatsApp, with the details above.'],
                            ['We check the plan', 'Route, vehicle and the drop-off point your destination allows.'],
                            ['Confirm', 'You receive the price and arrangement before committing.'],
                            ['Travel', 'Driver and vehicle details come with the confirmed booking.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-white border border-slate-200 p-6">
                                <span className="font-mono text-xs font-bold text-cyan-700">STEP 0{i + 1}</span>
                                <h3 className="mt-2 mb-2 text-[#0a0f14]">{t}</h3>
                                <p className="text-sm text-slate-600">{d}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-[#0a0f14] mb-8">NEOM Transfer Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-slate-200 px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0a0f14] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-bold text-[#0a0f14] mb-6">Related Routes</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Tabuk → NEOM transfer', '/routes/tabuk-neom/'],
                            ['Tabuk Airport transfers', '/tabuk-airport-taxi/'],
                            ['Tabuk → Duba', '/routes/tabuk-duba/'],
                            ['Tabuk → Sharma', '/routes/tabuk-sharma/'],
                            ['Tabuk → Haql', '/routes/tabuk-haql/'],
                            ['Tabuk → Al Wajh', '/routes/tabuk-al-wajh/'],
                            ['NEOM Bay Airport → Four Seasons AMAALA', '/routes/neom-bay-airport-to-four-seasons-amaala-taxi/'],
                            ['Private driver service', '/services/private-driver/'],
                            ['Airport transfers', '/services/airport-transfers/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#0a0f14] hover:border-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500">{l}</Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f14]">
                <svg className="absolute inset-0 -z-10 w-full h-full" viewBox="0 0 1440 500" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                        <pattern id="nf-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M40 0 H0 V40" fill="none" stroke="#22d3ee" strokeOpacity="0.05" />
                        </pattern>
                    </defs>
                    <rect width="1440" height="500" fill="url(#nf-grid)" />
                    <path d="M0 420 C 400 380, 900 300, 1440 120" fill="none" stroke="#22d3ee" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4 10" />
                </svg>
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Planning a NEOM Transfer?</h2>
                    <p className="text-lg text-slate-300 mb-10">
                        Send us your pickup point, exact destination, travel date, passengers, luggage and any relevant project/access information. We&apos;ll help determine the appropriate private transfer arrangement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-cyan-400 text-[#0a0f14] hover:bg-cyan-300">
                            <a href={QUOTE_HREF}>Request NEOM Quote</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold bg-white/5 text-white border-white/30 hover:bg-white/15 hover:text-white">
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Booking</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
