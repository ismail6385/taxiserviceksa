import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Plane, Factory, Anchor, Waves, Route, Building2, Info, Check, Clock, Repeat, CalendarDays, Briefcase, FileText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import AlUlaReviews from '@/components/alula/AlUlaReviews';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import YanbuJourneyPlanner from '@/components/yanbu/YanbuJourneyPlanner';
import YanbuTwoSides from '@/components/yanbu/YanbuTwoSides';
import YanbuFleet from '@/components/yanbu/YanbuFleet';
import YanbuHourly from '@/components/yanbu/YanbuHourly';

const PAGE_URL = 'https://taxiserviceksa.com/locations/yanbu/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for a transfer in Yanbu. Pickup, destination, date and passengers: ')}`;

export const metadata: Metadata = {
    title: 'Yanbu Taxi & Private Transfers | YNB Airport, Industrial City & Madinah',
    description:
        'Private transfers in Yanbu: Yanbu Airport (YNB) pickups, Yanbu Al Bahr and Industrial City journeys, hourly drivers, and private cars to Madinah and Jeddah. Request a quote.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Yanbu Taxi & Private Transfer Service',
        description: 'Airport, Industrial City, coastal and intercity private transportation in Yanbu.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private transfers in Yanbu' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Yanbu Taxi & Private Transfer Service',
        description: 'Airport, Industrial City, coastal and intercity private transportation in Yanbu.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const q = (p: Record<string, string>) => `/booking/?${new URLSearchParams(p).toString()}`;

// Approximate figures; the note under the network says how they vary.
const NETWORK = [
    { name: 'Yanbu Airport (YNB)', icon: Plane, type: 'Airport transfer', approx: 'Just north of Yanbu Al Bahr', vehicle: 'Sedan for 1–3; van for families', href: q({ from: 'Yanbu Airport (YNB)' }), more: { l: 'Airport transfers', h: '/services/airport-transfers/' } },
    { name: 'Yanbu Al Bahr', icon: Waves, type: 'City & hotel transfer', approx: 'The old town and waterfront', vehicle: 'Any - chosen by group size', href: q({ to: 'Yanbu Al Bahr' }) },
    { name: 'Yanbu Industrial City', icon: Factory, type: 'Business & site transfer', approx: 'About 20–25 km south-east of Al Bahr', vehicle: 'Sedan or SUV; Hiace for crews', href: q({ to: 'Yanbu Industrial City' }), more: { l: 'Industrial City', h: '/locations/yanbu/industrial-city/' } },
    { name: 'Madinah', icon: Route, type: 'Intercity transfer', approx: 'About 230 km, roughly 2.5 hours', vehicle: 'Staria or Yukon for families with luggage', href: q({ from: 'Yanbu', to: 'Madinah' }), more: { l: 'Distance guide', h: '/distance/yanbu-to-madinah/' } },
    { name: 'Jeddah', icon: Building2, type: 'Long-distance transfer', approx: 'About 330–345 km, roughly 3.5 hours', vehicle: 'Choose by luggage for the long drive', href: q({ from: 'Yanbu', to: 'Jeddah' }), more: { l: 'Yanbu to Jeddah', h: '/routes/yanbu-jeddah/' } },
];

const faqs = [
    { q: 'Do you provide transfers from Yanbu Airport?', a: 'Yes. Send your flight number, arrival time and destination - a Yanbu Al Bahr hotel, the Industrial City, Madinah or elsewhere - and we quote for the right vehicle. Sharing the flight number helps us coordinate the pickup around your arrival.' },
    { q: 'Can I book a private car to Yanbu Industrial City?', a: 'Yes, from the airport, a hotel or anywhere in Yanbu. Give us the company or facility name and the gate or reception you report to.' },
    { q: 'Can you pick me up from Yanbu Al Bahr?', a: 'Yes - hotels, homes, the waterfront and other addresses in the old town. Bookings are made in advance; we do not operate street-hail taxis.' },
    { q: 'Can I travel from Yanbu to Madinah by private car?', a: 'Yes. It is about 230 km inland, usually around 2.5 hours of driving. We drive to your Madinah hotel or another address you give us.' },
    { q: 'Do you provide Yanbu to Jeddah transfers?', a: 'Yes, to Jeddah hotels, addresses and King Abdulaziz International Airport. The full route is covered on our Yanbu to Jeddah page.' },
    { q: 'Can I book transport for a business trip in Yanbu?', a: 'Yes: single transfers, a driver for the day, or a repeating daily schedule between your hotel and work location. Send the dates and addresses for a quote.' },
    { q: 'What information do you need for an industrial-area booking?', a: 'The company or facility name, the exact gate or pickup point, reporting times, and the names or number of people travelling. Entry rules are set by each site, so the drop-off is the point you are permitted to use.' },
    { q: 'Can you collect passengers from port-related locations?', a: 'We can plan pickups at designated or publicly accessible points near port-area destinations. For restricted areas, pickup depends on the destination’s current rules - tell us the exact location when booking.' },
    { q: 'Can I book a larger vehicle for family luggage?', a: 'Yes. A Staria or Yukon suits most families; a Hiace takes more suitcases. Use the vehicle guide on this page and tell us your bag count.' },
    { q: 'Can I hire a private driver for several hours in Yanbu?', a: 'Yes. Choose hourly hire on the booking form and tell us how many hours you need; the car stays with you between stops.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private transfers in Yanbu',
            url: PAGE_URL,
            serviceType: 'Pre-booked private transfer',
            description:
                'Pre-booked private transfers in Yanbu: Yanbu Airport (YNB) pickups, journeys between Yanbu Al Bahr and Yanbu Industrial City, hourly drivers, and intercity transfers to Madinah and Jeddah.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: { '@type': 'City', name: 'Yanbu' },
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

const link = 'font-semibold text-[#0f5c8c] hover:underline';

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function YanbuPage() {
    return (
        <div className="yanbu-page bg-[#f8f4ec]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0a2540]">
                <svg className="absolute inset-0 -z-10 w-full h-full" viewBox="0 0 1440 860" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <defs>
                        <linearGradient id="yh-sea" x1="0" y1="1" x2="0.5" y2="0">
                            <stop offset="0" stopColor="#1d6fa3" stopOpacity="0.9" />
                            <stop offset="1" stopColor="#0a2540" stopOpacity="0" />
                        </linearGradient>
                        <pattern id="yh-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                            <path d="M48 0 H0 V48" fill="none" stroke="#ffffff" strokeOpacity="0.04" />
                        </pattern>
                    </defs>
                    <rect width="1440" height="860" fill="url(#yh-grid)" />
                    {/* Red Sea along the bottom-left */}
                    <path d="M0 420 C 240 470, 420 560, 640 640 S 1000 760, 1200 860 L 0 860 Z" fill="url(#yh-sea)" />
                    {/* Coastal road */}
                    <path d="M60 380 C 300 430, 520 520, 760 600 S 1100 700, 1380 780" fill="none" stroke="#efe3cc" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="2 10" />
                    <path d="M60 380 C 300 430, 520 520, 760 600 S 1100 700, 1380 780" fill="none" stroke="#e8765a" strokeWidth="2.5" strokeLinecap="round" pathLength={1} className="route-draw" />
                    {/* Industrial geometry, far right */}
                    <g fill="#ffffff" fillOpacity="0.05">
                        <rect x="1180" y="520" width="26" height="150" />
                        <rect x="1220" y="480" width="18" height="190" />
                        <rect x="1256" y="560" width="70" height="110" />
                        <circle cx="1350" cy="620" r="40" />
                    </g>
                </svg>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a2540] via-[#0a2540]/85 to-[#0a2540]/40" aria-hidden="true" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-6 lg:gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <ul className="hidden sm:flex flex-wrap gap-2 mb-6 text-xs font-semibold" aria-label="What we cover in Yanbu">
                            {[
                                { t: 'YNB Airport', i: Plane },
                                { t: 'Industrial City', i: Factory },
                                { t: 'Yanbu Al Bahr', i: Waves },
                                { t: 'Madinah · Jeddah', i: Route },
                            ].map(({ t, i: I }) => (
                                <li key={t} className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sky-100"><I className="w-3.5 h-3.5 text-[#f0a58f]" aria-hidden="true" />{t}</li>
                            ))}
                        </ul>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-tight mb-5">Yanbu Taxi &amp; Private Transfer Service</h1>
                        <p className="text-base sm:text-lg text-sky-50/85 leading-relaxed sm:mb-8 max-w-xl">
                            Private airport transfers, industrial-city transportation and long-distance chauffeur service across Yanbu Al Bahr, Yanbu Industrial City and the Red Sea coast.
                        </p>
                        <div className="hidden sm:flex flex-row gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#e8765a] text-white hover:bg-[#d9644a]">
                                <a href={QUOTE_HREF}>Get a Yanbu Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Booking</a>
                            </Button>
                        </div>
                    </div>
                    <div id="quote" className="scroll-mt-40">
                        <RouteQuoteCard
                            title="Your Yanbu transfer"
                            cta="Get My Yanbu Quote"
                            fromPlaceholder="Airport, hotel or address"
                            toPlaceholder="Hotel, site, city or airport"
                            fromChips={['Yanbu Airport (YNB)', 'Yanbu Al Bahr', 'Yanbu Industrial City', 'Yanbu hotel']}
                            toChips={['Yanbu Industrial City', 'Yanbu Al Bahr', 'Yanbu Airport (YNB)', 'Madinah', 'Jeddah']}
                            showFlight
                            buttonClass="bg-[#0f5c8c] hover:bg-[#0a4a72] focus-visible:ring-sky-600"
                        />
                    </div>
                </div>
            </section>

            {/* ================= WHERE ARE YOU GOING ================= */}
            <section aria-labelledby="where" className="bg-[#0d2f50] py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-8 text-white">
                        <h2 id="where" className="text-3xl md:text-5xl font-bold mb-3">Where Are You Going in Yanbu?</h2>
                        <p className="text-sky-100/75">Choose your journey for the details that matter and a quote form already filled in.</p>
                    </div>
                    <YanbuJourneyPlanner />
                </div>
            </section>

            {/* ================= TWO SIDES ================= */}
            <section aria-labelledby="two-sides" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl mb-10">
                        <h2 id="two-sides" className="text-3xl md:text-5xl font-bold text-[#0a2540] mb-4">The Two Sides of Yanbu</h2>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            &ldquo;Yanbu&rdquo; usually means one of two places about 20–25 km apart: the old coastal town of Yanbu Al Bahr, and Yanbu Industrial City to the south-east. Say which one - and the exact address - when you book. It changes the drive, the time and often the vehicle.
                        </p>
                    </div>
                    <YanbuTwoSides />
                </div>
            </section>

            {/* ================= AIRPORT ================= */}
            <section aria-labelledby="airport" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <Reveal>
                        <p className="text-sm font-bold uppercase tracking-wider text-[#e8765a] mb-3 flex items-center gap-2"><Plane className="w-4 h-4" aria-hidden="true" /> Prince Abdul Mohsin bin Abdulaziz Airport</p>
                        <h2 id="airport" className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">Yanbu Airport (YNB) Transfers</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-8">
                            YNB sits just north of Yanbu Al Bahr, so a hotel in the old town is a short drive. The Industrial City is further - about 25 km - and Madinah is a proper road trip. The same car can take you to any of them.
                        </p>
                        <ol className="space-y-0 border-l-2 border-dashed border-[#0f5c8c]/30 ml-2">
                            {[
                                ['YNB → Yanbu Al Bahr hotel', 'Short transfer to the old town and waterfront hotels.'],
                                ['YNB → Yanbu Industrial City', 'Straight to your hotel, residence or work location.'],
                                ['YNB → business destination', 'Meeting first, hotel later - luggage stays in the car.'],
                                ['YNB → Madinah', 'Land in Yanbu and continue by road to your Madinah hotel.'],
                                ['YNB → Jeddah or elsewhere', 'Long-distance transfers on request.'],
                            ].map(([t, d]) => (
                                <li key={t} className="relative pl-7 pb-5 last:pb-0">
                                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#0f5c8c]" aria-hidden="true" />
                                    <p className="font-bold text-[#0a2540]">{t}</p>
                                    <p className="text-sm text-slate-600">{d}</p>
                                </li>
                            ))}
                        </ol>
                    </Reveal>
                    <Reveal delay={100}>
                        <aside className="rounded-3xl bg-[#f3ecdf] p-7 md:p-8">
                            <h3 className="mb-4 text-[#0a2540] flex items-center gap-2"><FileText className="w-5 h-5 text-[#e8765a]" aria-hidden="true" /> Send with your booking</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 text-sm mb-6">
                                {['Flight number', 'Arrival time', 'Passenger count', 'Luggage', 'Destination address', 'Preferred vehicle'].map((i) => (
                                    <li key={i} className="flex gap-3 text-[#0a2540]"><Check className="w-4 h-4 text-[#0f5c8c] mt-0.5 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                            <p className="text-sm text-slate-600 mb-6">Share your flight number with us so the pickup can be coordinated around your arrival.</p>
                            <Link href={q({ from: 'Yanbu Airport (YNB)' })} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0a2540] px-5 py-3.5 font-bold text-white hover:bg-[#071a2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2">
                                Book a YNB pickup <Arrow />
                            </Link>
                        </aside>
                    </Reveal>
                </div>
            </section>

            {/* ================= ROUTE NETWORK ================= */}
            <section aria-labelledby="network" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a2540] text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-10">
                        <h2 id="network" className="text-3xl md:text-5xl font-bold mb-4">Yanbu to Where?</h2>
                        <p className="text-sky-100/75">Yanbu is a coastal junction: short hops to the airport and Industrial City, the inland road to Madinah, and the coastal road south to Jeddah.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
                        <div className="rounded-3xl bg-[#0d2f50] p-4">
                            <svg viewBox="0 0 520 520" className="w-full h-auto" role="img" aria-label="Schematic route map: Yanbu at the centre, the airport just north, the Industrial City to the south-east, Madinah inland to the east, and Jeddah far to the south along the coast.">
                                <path d="M0 150 C 80 170, 120 190, 135 215 S 190 290, 240 330 S 340 440, 380 520 L 0 520 Z" fill="#1d6fa3" fillOpacity="0.35" />
                                <text x="30" y="470" fontSize="14" letterSpacing="3" fontStyle="italic" className="fill-sky-100/40">RED SEA</text>
                                {[
                                    { d: 'M150 200 L 140 110', n: [140, 110], l: 'YNB', lx: 156, ly: 106 },
                                    { d: 'M150 200 C 180 215, 210 230, 240 245', n: [240, 245], l: 'Industrial City', lx: 256, ly: 250 },
                                    { d: 'M150 200 C 260 170, 380 150, 470 130', n: [470, 130], l: 'Madinah', lx: 470, ly: 110, anchor: 'end' as const },
                                    { d: 'M150 200 C 280 280, 400 360, 440 470', n: [440, 470], l: 'Jeddah', lx: 456, ly: 476 },
                                ].map((r) => (
                                    <g key={r.l}>
                                        <path d={r.d} fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="8" strokeLinecap="round" />
                                        <path d={r.d} fill="none" stroke="#e8765a" strokeWidth="2.5" strokeLinecap="round" pathLength={1} className="route-draw" />
                                        <circle cx={r.n[0]} cy={r.n[1]} r="8" fill="#0a2540" stroke="#efe3cc" strokeWidth="2.5" />
                                        <text x={r.lx} y={r.ly} fontSize="17" fontWeight="600" textAnchor={r.anchor ?? 'start'} className="fill-sky-50">{r.l}</text>
                                    </g>
                                ))}
                                <circle cx="150" cy="200" r="20" fill="#efe3cc" />
                                <text x="150" y="245" textAnchor="middle" fontSize="19" fontWeight="800" className="fill-[#efe3cc]">Yanbu</text>
                            </svg>
                            <p className="px-2 pt-2 text-xs text-sky-100/50">Schematic, not to scale.</p>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {NETWORK.map((r, i) => (
                                <li key={r.name} className={`rounded-2xl bg-white/[0.06] border border-white/10 p-5 flex flex-col ${i === NETWORK.length - 1 ? 'sm:col-span-2' : ''}`}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <r.icon className="w-5 h-5 text-[#f0a58f] shrink-0" aria-hidden="true" />
                                        <h3 className="text-white">{r.name}</h3>
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-sky-300 mb-2">{r.type} · one way or return</p>
                                    <p className="text-sm text-sky-100/80">{r.approx}</p>
                                    <p className="text-sm text-sky-100/60 mb-4">{r.vehicle}</p>
                                    <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2">
                                        <Link href={r.href} className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#f0a58f]">Quote <Arrow /></Link>
                                        {r.more && <Link href={r.more.h} className="text-sm font-semibold text-sky-200 hover:underline">{r.more.l}</Link>}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-xs text-sky-100/50 mt-6">Distances and times are approximate and depend on the exact pickup and drop-off, traffic and stops. Further afield, we also drive <Link href="/routes/yanbu-alula/" className="underline hover:text-white">Yanbu to AlUla</Link>.</p>
                </div>
            </section>

            {/* ================= MADINAH + JEDDAH ================= */}
            <section aria-labelledby="madinah" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-6">
                    <Reveal className="h-full">
                        <article className="h-full rounded-3xl bg-white border border-[#e6dccb] p-7 md:p-10 flex flex-col">
                            <p className="text-sm font-bold uppercase tracking-wider text-[#e8765a] mb-3">Inland · about 230 km</p>
                            <h2 id="madinah" className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">Yanbu to Madinah Private Transfer</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                One of the most common journeys out of Yanbu - families visiting Madinah, pilgrims arriving at YNB, and workers heading inland for the weekend. Around 2.5 hours of driving, in one private car from your door.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-700 mb-8">
                                {[
                                    'Pickup from a Yanbu Al Bahr hotel or home',
                                    'Straight from Yanbu Airport after landing',
                                    'Pickup in the Industrial City',
                                    'Drop-off at your Madinah hotel or another address',
                                    'Staria, Yukon or Hiace for families and groups',
                                    'Tell us your suitcase count so they all fit',
                                ].map((i) => (
                                    <p key={i} className="flex gap-2.5"><Check className="w-4 h-4 text-[#0f5c8c] mt-0.5 shrink-0" aria-hidden="true" />{i}</p>
                                ))}
                            </div>
                            <div className="mt-auto flex flex-col sm:flex-row gap-3">
                                <Link href={q({ from: 'Yanbu', to: 'Madinah' })} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f5c8c] px-5 py-3.5 font-bold text-white hover:bg-[#0a4a72] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2">Yanbu → Madinah quote <Arrow /></Link>
                                <Link href="/distance/yanbu-to-madinah/" className="group inline-flex items-center justify-center gap-2 px-4 py-3 font-bold text-[#0f5c8c]">Plan the full Yanbu → Madinah journey <Arrow /></Link>
                            </div>
                        </article>
                    </Reveal>
                    <Reveal className="h-full" delay={100}>
                        <article className="h-full rounded-3xl bg-[#0f5c8c] text-white p-7 md:p-8 flex flex-col">
                            <p className="text-sm font-bold uppercase tracking-wider text-sky-200 mb-3">Down the coast · about 3.5 hours</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Yanbu ↔ Jeddah</h2>
                            <p className="text-sky-50/85 leading-relaxed mb-5">
                                The link between Yanbu and Jeddah&apos;s airport, hotels and offices - for flights out of KAIA, business visits and family trips. Arriving the other way? Many visitors fly into Jeddah and are driven up to the Industrial City or the coast.
                            </p>
                            <div className="mt-auto flex flex-col gap-2">
                                <Link href="/routes/yanbu-jeddah/" className="group inline-flex items-center gap-2 font-bold text-white">Yanbu to Jeddah <Arrow /></Link>
                                <Link href="/routes/jeddah-yanbu/" className="group inline-flex items-center gap-2 font-bold text-white">Jeddah to Yanbu <Arrow /></Link>
                            </div>
                        </article>
                    </Reveal>
                </div>
            </section>

            {/* ================= CORPORATE + PORT ================= */}
            <section aria-labelledby="corporate" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 mb-12">
                        <Reveal>
                            <p className="text-sm font-bold uppercase tracking-wider text-[#e8765a] mb-3 flex items-center gap-2"><Briefcase className="w-4 h-4" aria-hidden="true" /> Business travel</p>
                            <h2 id="corporate" className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">Corporate &amp; Industrial Transportation in Yanbu</h2>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Most business travel in Yanbu runs between three points: the airport, a hotel, and a work location in the Industrial City. Consultants on a three-day visit, contractors on a longer assignment, a manager flying in for one meeting - the pattern is the same, only the schedule changes.
                            </p>
                        </Reveal>
                        <Reveal delay={100}>
                            <ul className="grid grid-cols-2 gap-3">
                                {[
                                    { i: Plane, t: 'Airport ↔ hotel ↔ site', d: 'Each leg booked, or one driver for the day.' },
                                    { i: Repeat, t: 'Scheduled transfers', d: 'The same hotel-to-site run at fixed times.' },
                                    { i: CalendarDays, t: 'Multi-day assignments', d: 'Send the dates and the daily plan.' },
                                    { i: Clock, t: 'Driver by the hour', d: 'For several meetings in one day.' },
                                ].map((m) => (
                                    <li key={m.t} className="rounded-2xl bg-[#f8f4ec] p-5">
                                        <m.i className="w-5 h-5 text-[#0f5c8c] mb-3" aria-hidden="true" />
                                        <p className="font-bold text-[#0a2540] text-sm mb-1">{m.t}</p>
                                        <p className="text-xs text-slate-600">{m.d}</p>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
                        <div className="rounded-3xl bg-[#0a2540] text-white p-7 md:p-9 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
                            <div>
                                <p className="text-xl font-bold mb-2">Need recurring Yanbu business transport?</p>
                                <p className="text-sm text-sky-100/75">Tell us the people, times and addresses. We confirm what we can cover and quote it.</p>
                            </div>
                            <Link href={q({ from: 'Yanbu', notes: 'Corporate / recurring transport request - schedule: ' })} className="group shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-[#e8765a] px-5 py-3.5 font-bold text-white hover:bg-[#d9644a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300">
                                Request a corporate quote <Arrow />
                            </Link>
                        </div>
                        <Reveal>
                            <article aria-labelledby="port" className="h-full rounded-3xl border-2 border-[#0f5c8c]/20 p-7">
                                <h3 id="port" className="mb-3 text-[#0a2540] flex items-center gap-2"><Anchor className="w-5 h-5 text-[#0f5c8c]" aria-hidden="true" /> Yanbu Port &amp; Commercial Transfers</h3>
                                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                                    Hotel or airport to port-area offices and meeting points, for business visitors and - where the destination allows - crew or contractor movements, using designated pickup and drop-off points.
                                </p>
                                <p className="text-sm text-slate-600 flex gap-2">
                                    <Info className="w-4 h-4 mt-0.5 shrink-0 text-[#0f5c8c]" aria-hidden="true" />
                                    For restricted port areas, pickup and access requirements depend on the destination&apos;s current rules. Provide the exact destination during booking so the transfer can be planned correctly.
                                </p>
                            </article>
                        </Reveal>
                    </div>
                    <p className="text-sm text-slate-600 mt-6">Company accounts and wider business travel: <Link href="/services/corporate-travel/" className={link}>corporate travel</Link>.</p>
                </div>
            </section>

            {/* ================= RED SEA + HOURLY ================= */}
            <section aria-labelledby="red-sea" className="relative isolate overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8f4ec] to-[#e9f2f8]">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <Reveal>
                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl">
                            <Image src="/yanbu-lake.webp" alt="Illustrative view of a Yanbu waterfront promenade at sunset" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <h2 id="red-sea" className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">Explore Yanbu&apos;s Red Sea Side by Private Car</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            The question is usually not what to see, but how to get there and back: a beach south of the town, a dive centre with a morning departure, a coastal hotel, or an evening on the waterfront.
                        </p>
                        <ul className="space-y-3 text-slate-700 mb-6">
                            {[
                                'Send the exact beach, resort or dive-centre name - they are spread along the coast',
                                'Early dive departures? Book the pickup time around the centre’s check-in',
                                'Wet gear and bags: mention them so they travel in the boot',
                            ].map((i) => (
                                <li key={i} className="flex gap-3"><Waves className="w-5 h-5 text-[#0f5c8c] shrink-0 mt-0.5" aria-hidden="true" />{i}</li>
                            ))}
                        </ul>
                        <Link href={q({ from: 'Yanbu hotel', notes: 'Coastal / leisure trip - destination: ' })} className="group inline-flex items-center gap-2 font-bold text-[#0f5c8c]">Quote a coastal transfer <Arrow /></Link>
                    </Reveal>
                </div>

                <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">Transfer or Hourly Driver?</h2>
                        <dl className="space-y-4">
                            <div className="rounded-2xl bg-white/70 p-5">
                                <dt className="font-bold text-[#0a2540]">Transfer</dt>
                                <dd className="text-sm text-slate-600">One pickup → one destination. Best for airport runs, a single meeting or a trip to Madinah.</dd>
                            </div>
                            <div className="rounded-2xl bg-white/70 p-5">
                                <dt className="font-bold text-[#0a2540]">Hourly chauffeur</dt>
                                <dd className="text-sm text-slate-600">The vehicle remains available for multiple movements during the booked period. Best when the day has several stops.</dd>
                            </div>
                        </dl>
                        <p className="text-sm text-slate-600 mt-4">More on our <Link href="/services/private-driver/" className={link}>private driver service</Link>.</p>
                    </div>
                    <YanbuHourly />
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section aria-labelledby="fleet" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-8">
                        <h2 id="fleet" className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">Choose Your Vehicle</h2>
                        <p className="text-slate-700">Set the passengers and large bags. The first vehicle that fits is highlighted - swipe along to compare.</p>
                    </div>
                    <YanbuFleet />
                </div>
            </section>

            {/* ================= WHICH TRANSFER ================= */}
            <section aria-labelledby="which" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 id="which" className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-8">Which Yanbu Transfer Do You Need?</h2>
                    <ul className="divide-y divide-[#e6dccb] border-y border-[#e6dccb]">
                        {[
                            { s: 'I am arriving at YNB', a: 'Airport transfer', h: q({ from: 'Yanbu Airport (YNB)' }) },
                            { s: 'I work in Yanbu Industrial City', a: 'Corporate / industrial transfer', h: q({ to: 'Yanbu Industrial City' }) },
                            { s: 'I am staying in Yanbu Al Bahr', a: 'Hotel / city transfer', h: q({ from: 'Yanbu Al Bahr' }) },
                            { s: 'I need to travel to Madinah', a: 'Intercity transfer', h: q({ from: 'Yanbu', to: 'Madinah' }) },
                            { s: 'I need to reach Jeddah', a: 'Long-distance transfer', h: q({ from: 'Yanbu', to: 'Jeddah' }) },
                            { s: 'I need a vehicle for several hours', a: 'Hourly chauffeur', h: q({ trip: 'hourly', from: 'Yanbu' }) },
                        ].map((r) => (
                            <li key={r.s}>
                                <Link href={r.h} className="group flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-lg">
                                    <span className="text-lg font-semibold text-[#0a2540]">{r.s}</span>
                                    <span className="flex items-center gap-2 font-bold text-[#e8765a] shrink-0">{r.a} <Arrow /></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= PRICING + BEFORE BOOKING + PROCESS ================= */}
            <section aria-labelledby="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Reveal className="h-full">
                        <div className="h-full rounded-3xl bg-[#0a2540] text-white p-7">
                            <h2 id="pricing" className="yanbu-card-title text-2xl font-bold mb-4">Request Your Current Yanbu Transfer Quote</h2>
                            <p className="text-sm text-sky-100/80 leading-relaxed mb-5">We quote each trip rather than publish fares that may not match yours. The price depends on:</p>
                            <ul className="grid grid-cols-2 gap-2 text-sm">
                                {['Route', 'Vehicle', 'Passengers', 'Luggage', 'One way or return', 'Waiting time', 'Special pickup requirements'].map((f) => (
                                    <li key={f} className="flex gap-2"><Check className="w-4 h-4 text-[#f0a58f] mt-0.5 shrink-0" aria-hidden="true" />{f}</li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                    <Reveal className="h-full" delay={80}>
                        <div className="h-full rounded-3xl bg-white border border-[#e6dccb] p-7">
                            <h2 className="yanbu-card-title text-2xl font-bold text-[#0a2540] mb-4">Before Booking Your Yanbu Transfer</h2>
                            <ul className="space-y-2 text-sm text-slate-700 mb-5">
                                {['Exact pickup address', 'Exact destination', 'Flight details, if flying', 'Passengers and luggage', 'Vehicle preference', 'Date and time', 'Company, gate or port-area details, if relevant'].map((i) => (
                                    <li key={i} className="flex gap-2"><Check className="w-4 h-4 text-[#0f5c8c] mt-0.5 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                            <p className="text-xs text-slate-500">For industrial or controlled-access destinations, exact pickup/drop-off details should be confirmed before travel.</p>
                        </div>
                    </Reveal>
                    <Reveal className="h-full" delay={160}>
                        <div className="h-full rounded-3xl bg-white border border-[#e6dccb] p-7">
                            <h2 className="yanbu-card-title text-2xl font-bold text-[#0a2540] mb-5">How It Works</h2>
                            <ol className="space-y-4">
                                {[
                                    ['Book your transfer', 'By the quote form or WhatsApp.'],
                                    ['Share pickup details', 'Exact address, gate or flight.'],
                                    ['Receive confirmation', 'Price, and driver and vehicle details as part of your confirmed booking.'],
                                    ['Travel directly', 'Straight to your destination.'],
                                ].map(([t, d], i) => (
                                    <li key={t} className="flex gap-4">
                                        <span className="text-xl font-black text-[#e8765a] leading-none w-7 shrink-0" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                        <div>
                                            <p className="font-bold text-[#0a2540]">{t}</p>
                                            <p className="text-sm text-slate-600">{d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </Reveal>
                </div>
            </section>

            <AlUlaReviews place="yanbu" title="What travellers said about their Yanbu trips" />

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-8">Yanbu Transfer Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#e6dccb] px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0a2540] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-bold text-[#0a2540] mb-6">Related Yanbu Routes &amp; Services</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            { l: 'Yanbu Industrial City', h: '/locations/yanbu/industrial-city/' },
                            { l: 'Yanbu to Jeddah', h: '/routes/yanbu-jeddah/' },
                            { l: 'Jeddah to Yanbu', h: '/routes/jeddah-yanbu/' },
                            { l: 'Yanbu to Madinah distance', h: '/distance/yanbu-to-madinah/' },
                            { l: 'Yanbu to AlUla', h: '/routes/yanbu-alula/' },
                            { l: 'Airport transfers', h: '/services/airport-transfers/' },
                            { l: 'Private driver', h: '/services/private-driver/' },
                            { l: 'Transport in Madinah', h: '/locations/madinah/' },
                            { l: 'Transport in Jeddah', h: '/locations/jeddah/' },
                            { l: 'AlUla', h: '/locations/alula/' },
                            { l: 'All routes', h: '/routes/' },
                        ].map((r) => (
                            <Link key={r.h} href={r.h} className="rounded-full border border-[#e6dccb] bg-white px-4 py-2.5 text-sm font-semibold text-[#0a2540] hover:border-[#0f5c8c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600">
                                {r.l}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#0a2540]">
                <svg className="absolute inset-0 -z-10 w-full h-full" viewBox="0 0 1440 500" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 360 C 360 400, 720 470, 1440 440 L 1440 500 L 0 500 Z" fill="#1d6fa3" fillOpacity="0.35" />
                    <path d="M0 330 C 360 360, 800 430, 1440 400" fill="none" stroke="#e8765a" strokeOpacity="0.6" strokeWidth="2" strokeDasharray="6 10" />
                </svg>
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Need a Private Ride in Yanbu?</h2>
                    <p className="text-lg text-sky-100/80 mb-10">
                        Tell us your pickup point, destination, date, passengers and luggage. We&apos;ll help arrange the appropriate private vehicle for your Yanbu journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-[#e8765a] text-white hover:bg-[#d9644a]">
                            <a href={QUOTE_HREF}>Get a Yanbu Quote</a>
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
