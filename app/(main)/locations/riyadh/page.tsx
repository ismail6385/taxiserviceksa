import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Plane, Briefcase, Hotel, Ticket, Building2, Route, Clock, Check, Info, Landmark, MapPin, PlaneLanding, PlaneTakeoff, TrafficCone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import AlUlaReviews from '@/components/alula/AlUlaReviews';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RiyadhNetwork from '@/components/riyadh/RiyadhNetwork';
import RiyadhIntentJourneys from '@/components/riyadh/RiyadhIntentJourneys';
import RiyadhVehicleFit, { type FleetItem } from '@/components/riyadh/RiyadhVehicleFit';
import { vehicles } from '@/lib/supabase';
import { getDistanceRoute } from '@/data/distanceRoutes';

const PAGE_URL = 'https://taxiserviceksa.com/locations/riyadh/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote in Riyadh. Pickup, destination, date, time and passengers: ')}`;

export const metadata: Metadata = {
    title: 'Riyadh Taxi & Private Transfers | Airport, Chauffeur & Intercity',
    description:
        'Pre-booked private transportation in Riyadh: RUH Airport transfers, hotel and business journeys, hourly chauffeur service, event transport and intercity trips across Saudi Arabia.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Riyadh Taxi & Private Transfer Service',
        description: 'Airport pickups, business travel, hotels, events, hourly journeys and long-distance trips from Riyadh.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private transfers in Riyadh' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Riyadh Taxi & Private Transfer Service',
        description: 'Airport pickups, business travel, hotels, events, hourly journeys and long-distance trips from Riyadh.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

const q = (p: Record<string, string>) => `/booking/?${new URLSearchParams(p).toString()}`;

// Fleet figures come from the booking system's vehicle list - one source of truth.
const toItem = (name: string, label: string): FleetItem | null => {
    const v = vehicles.find((x) => x.name === name);
    return v ? { name: v.name, image: v.image, passengers: v.passengers, luggage: v.luggage, label } : null;
};
const STANDARD = [
    toItem('Toyota Camry', 'Sedan'),
    toItem('Hyundai Staria VIP', 'Family van'),
    toItem('GMC Yukon XL / Denali', 'Large SUV'),
    toItem('Toyota Hiace', 'Van'),
    toItem('Toyota Coaster', 'Minibus'),
].filter(Boolean) as FleetItem[];
const EXECUTIVE = [
    toItem('Genesis G80 VIP', 'Executive sedan'),
    toItem('Mercedes S-Class', 'Luxury sedan'),
    toItem('GMC Yukon XL / Denali', 'Executive SUV'),
].filter(Boolean) as FleetItem[];

// Route distances from the site's distance data - one source of truth.
const ROUTES = [
    { to: 'Dammam / Al Khobar', slug: 'dammam-to-riyadh', href: '/routes/riyadh-dammam/' },
    { to: 'Jeddah', slug: 'riyadh-to-jeddah', href: '/routes/riyadh-jeddah/' },
    { to: 'Makkah', slug: 'riyadh-to-makkah', href: '/routes/riyadh-makkah/' },
    { to: 'Madinah', slug: 'riyadh-to-madinah', href: '/distance/riyadh-to-madinah/' },
    { to: 'Taif', slug: 'riyadh-to-taif', href: '/distance/riyadh-to-taif/' },
    { to: 'AlUla', slug: 'riyadh-to-alula', href: '/distance/riyadh-to-alula/' },
].map((r) => {
    const d = getDistanceRoute(r.slug);
    return { ...r, km: d?.distanceHeadline, time: d?.drivingTimeHeadline };
});

const faqs = [
    { q: 'Can I book a private car from RUH Airport to my Riyadh hotel?', a: 'Yes. Send your flight number, arrival time, hotel, passengers and luggage; you receive pickup instructions with your confirmed booking.' },
    { q: 'Can I book a Riyadh airport transfer for an early-morning flight?', a: 'Yes. Tell us your flight time and pickup address; we suggest a pickup time that leaves room for the road and airport procedures.' },
    { q: 'Can I book a private driver by the hour in Riyadh?', a: 'Yes. Choose hourly hire on the booking form and say how many hours; the car stays with you between planned stops.' },
    { q: 'Can I travel from Riyadh to Dammam by private car?', a: 'Yes - door to door to Dammam or Al Khobar. The Riyadh–Dammam route page has the journey details.' },
    { q: 'Can you pick up from KAFD?', a: 'Yes. Give us the tower or building name; towers often have set drop-off and pickup points.' },
    { q: 'Can I book transportation for Riyadh events?', a: 'Yes - hotel to venue and back, with a return time you agree in advance. Drop-off points depend on the venue’s traffic arrangements.' },
    { q: 'Which vehicle should I choose for 5 passengers with luggage?', a: 'A Hyundai Staria or GMC Yukon seats up to 7; if you have a lot of suitcases, a Toyota Hiace gives more room.' },
    { q: 'Can I book a return transfer?', a: 'Yes. Tick "I also need a return trip" and give the return date and time.' },
    { q: 'How far in advance should I book?', a: 'As early as you can, especially for airport runs, event days and long-distance trips. Send the details and we confirm availability.' },
    { q: 'How much does a transfer cost?', a: 'We quote each trip. The price depends on route, vehicle, passengers, date and any waiting, and you see it before you confirm.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private transfers in Riyadh',
            url: PAGE_URL,
            serviceType: 'Pre-booked private transfer',
            description: 'Pre-booked private transportation in Riyadh: King Khalid International Airport (RUH) transfers, hotel and business journeys, hourly chauffeur service, event transport and intercity trips.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: { '@type': 'City', name: 'Riyadh' },
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
const link = 'font-semibold text-[#9a7432] hover:underline';

// Illustrated skyline (not a photograph): Kingdom Centre, Al Faisaliah and a KAFD cluster.
function Skyline({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 420" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="rs-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#d4a857" stopOpacity="0" />
                    <stop offset="1" stopColor="#d4a857" stopOpacity="0.25" />
                </linearGradient>
            </defs>
            <rect x="0" y="180" width="1440" height="240" fill="url(#rs-sky)" />
            <g fill="#0e1014">
                {/* low city */}
                <path d="M0 420 V 360 H 60 V 340 H 110 V 365 H 170 V 330 H 230 V 355 H 300 V 345 H 360 V 420 Z" />
                {/* Al Faisaliah: tapering tower with a sphere */}
                <path d="M520 420 L 548 150 L 576 420 Z" />
                <circle cx="548" cy="200" r="13" fill="#d4a857" fillOpacity="0.55" />
                <rect x="545" y="110" width="6" height="45" />
                {/* Kingdom Centre: tower with the open arch at the top */}
                <path d="M760 420 V 190 C 760 140, 800 90, 820 70 C 840 90, 880 140, 880 190 V 420 Z M790 190 C 790 150, 810 120, 820 110 C 830 120, 850 150, 850 190 Z" fillRule="evenodd" />
                <rect x="782" y="186" width="76" height="6" fill="#d4a857" fillOpacity="0.5" />
                {/* KAFD cluster */}
                <path d="M1040 420 V 180 L 1070 150 V 420 Z" />
                <path d="M1080 420 V 210 H 1115 V 420 Z" />
                <path d="M1125 420 V 160 L 1150 130 L 1175 160 V 420 Z" />
                <path d="M1185 420 V 240 H 1220 V 420 Z" />
                {/* low city east */}
                <path d="M620 420 V 350 H 700 V 330 H 740 V 420 Z M900 420 V 340 H 960 V 360 H 1020 V 420 Z M1240 420 V 350 H 1300 V 330 H 1360 V 360 H 1440 V 420 Z" />
            </g>
            {/* road network line */}
            <path d="M0 400 C 300 380, 520 395, 760 385 S 1160 370, 1440 390" fill="none" stroke="#d4a857" strokeWidth="2" strokeLinecap="round" pathLength={1} className="route-draw" />
        </svg>
    );
}

export default function RiyadhPage() {
    return (
        <div className="riyadh-page bg-[#f6f3ee]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#14161b]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_20%,rgba(212,168,87,0.22),transparent_60%)]" aria-hidden="true" />
                <Skyline className="absolute bottom-0 left-0 -z-10 w-full h-[55%] opacity-90" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#14161b] via-[#14161b]/80 to-transparent" aria-hidden="true" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-6 lg:gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className="hidden sm:block text-xs font-bold uppercase tracking-[0.25em] text-[#d4a857] mb-6">Riyadh • RUH Airport • Private transfers</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-tight mb-5">Riyadh Taxi &amp; Private Transfer Service</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed sm:mb-8 max-w-xl">
                            Pre-book a private car for airport pickups, business travel, hotels, events, hourly journeys and long-distance trips from Riyadh.
                        </p>
                        <div className="hidden sm:flex gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#d4a857] text-[#14161b] hover:bg-[#e2bb70]">
                                <a href={QUOTE_HREF}>Get a Riyadh Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Booking</a>
                            </Button>
                        </div>
                        <p className="hidden sm:block text-sm text-white/60">Private • Pre-booked • Door-to-door</p>
                    </div>
                    <div id="quote" className="scroll-mt-32">
                        <RouteQuoteCard
                            title="Your Riyadh journey"
                            cta="Get My Quote"
                            fromPlaceholder="Airport, hotel, office or district"
                            toPlaceholder="Hotel, venue, district or another city"
                            fromChips={['King Khalid International Airport (RUH)', 'Riyadh hotel', 'KAFD, Riyadh', 'Olaya, Riyadh']}
                            toChips={['King Khalid International Airport (RUH)', 'Riyadh hotel', 'Riyadh Front', 'Diriyah', 'Dammam', 'Jeddah']}
                            showFlight="auto"
                            buttonClass="bg-[#14161b] hover:bg-black focus-visible:ring-[#d4a857]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= WHAT BRINGS YOU ================= */}
            <section aria-labelledby="brings" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="brings" className="text-3xl md:text-5xl font-bold text-[#14161b] mb-8">What Brings You to Riyadh?</h2>
                    <ul className="flex gap-3 overflow-x-auto snap-x pb-3 -mx-4 px-4 md:grid md:grid-cols-4 lg:grid-cols-7 md:overflow-visible md:mx-0 md:px-0">
                        {[
                            { i: Plane, t: 'Airport', s: 'RUH ↔ Riyadh', h: '/riyadh-airport-taxi/' },
                            { i: Briefcase, t: 'Business', s: 'KAFD • Olaya • DQ', h: '/locations/riyadh/kafd/' },
                            { i: Hotel, t: 'Hotels', s: 'Airport, hotel, city', h: '/services/riyadh-hotel-transfer/' },
                            { i: Ticket, t: 'Events', s: 'Riyadh Front • venues', h: '/services/event-transport/' },
                            { i: Building2, t: 'City travel', s: 'Across Riyadh', h: q({ from: 'Riyadh' }) },
                            { i: Route, t: 'Intercity', s: 'Jeddah • Makkah • Dammam', h: '/services/intercity/' },
                            { i: Clock, t: 'Hourly driver', s: 'Several stops', h: '/riyadh-chauffeur/' },
                        ].map((c) => (
                            <li key={c.t} className="snap-start shrink-0 w-40 md:w-auto">
                                <Link href={c.h} className="group flex h-full flex-col rounded-2xl bg-white border border-[#14161b]/10 p-5 transition hover:-translate-y-1 hover:border-[#d4a857] hover:shadow-lg motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a857]">
                                    <c.i className="w-6 h-6 text-[#9a7432] mb-4" aria-hidden="true" />
                                    <span className="font-bold text-[#14161b]">{c.t}</span>
                                    <span className="text-xs text-slate-500 mt-1">{c.s}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= SIGNATURE NETWORK ================= */}
            <section aria-labelledby="network" className="bg-[#14161b] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl mb-10">
                        <h2 id="network" className="text-3xl md:text-5xl font-bold mb-4">One Capital. Many Ways to Travel.</h2>
                        <p className="text-white/70 leading-relaxed">Riyadh is not one pickup area. The airport, business districts, event venues, Diriyah and the roads out to other cities each come with their own drop-off points and timing. Pick one to see what matters.</p>
                    </div>
                    <RiyadhNetwork />
                </div>
            </section>

            {/* ================= RUH ================= */}
            <section aria-labelledby="ruh" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9a7432] mb-3">RUH</p>
                    <h2 id="ruh" className="text-3xl md:text-5xl font-bold text-[#14161b] mb-10 max-w-3xl">Private Airport Transfers at King Khalid International Airport</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <Reveal className="h-full">
                            <div className="h-full rounded-3xl bg-white border border-[#14161b]/10 p-7">
                                <h3 className="mb-5 text-[#14161b] flex items-center gap-2"><PlaneLanding className="w-5 h-5 text-[#9a7432]" aria-hidden="true" /> Arriving in Riyadh</h3>
                                <ol className="space-y-3 text-sm text-slate-700">
                                    {['Your flight lands', 'You leave the terminal', 'Meet the driver as per the instructions sent with your booking', 'Luggage into the car', 'Straight to your hotel, office or home'].map((s, i) => (
                                        <li key={s} className="flex gap-3"><span className="w-6 h-6 shrink-0 rounded-full bg-[#f6f3ee] text-[#9a7432] text-xs font-black flex items-center justify-center" aria-hidden="true">{i + 1}</span>{s}</li>
                                    ))}
                                </ol>
                            </div>
                        </Reveal>
                        <Reveal className="h-full" delay={80}>
                            <div className="h-full rounded-3xl bg-white border border-[#14161b]/10 p-7">
                                <h3 className="mb-5 text-[#14161b] flex items-center gap-2"><PlaneTakeoff className="w-5 h-5 text-[#9a7432]" aria-hidden="true" /> Departing Riyadh</h3>
                                <p className="text-sm text-slate-700 mb-4">Hotel, office or home to RUH. The airport is well north of the centre, so the road time depends heavily on where you start and when.</p>
                                <p className="text-sm text-slate-700">Tell us your flight time and we suggest a pickup time that leaves room for the drive and airport procedures.</p>
                            </div>
                        </Reveal>
                        <Reveal className="h-full" delay={160}>
                            <div className="h-full rounded-3xl bg-[#14161b] text-white p-7 flex flex-col">
                                <h3 className="mb-4">Why the flight number?</h3>
                                <p className="text-sm text-white/75 mb-6">It lets us match the pickup to your actual arrival and find your booking quickly if plans change. Add it in the quote form once you choose RUH.</p>
                                <div className="mt-auto flex flex-col gap-2">
                                    <Link href={q({ from: 'King Khalid International Airport (RUH)' })} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#d4a857] px-5 py-3.5 font-bold text-[#14161b] hover:bg-[#e2bb70]">Book a RUH pickup <Arrow /></Link>
                                    <Link href="/riyadh-airport-taxi/" className="text-center text-sm font-bold text-[#d4a857] hover:underline py-2">Riyadh airport transfer details</Link>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ================= INTENT JOURNEYS ================= */}
            <section aria-labelledby="intent" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="intent" className="text-3xl md:text-4xl font-bold text-[#14161b] mb-3">One City, Different Reasons to Travel</h2>
                    <p className="text-slate-600 max-w-2xl mb-8">A typical day for each kind of trip - and what usually works best.</p>
                    <RiyadhIntentJourneys />
                </div>
            </section>

            {/* ================= DESTINATION GRID ================= */}
            <section aria-labelledby="dest" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="dest" className="text-3xl md:text-4xl font-bold text-[#14161b] mb-3">Riyadh Destinations</h2>
                    <p className="text-slate-600 max-w-2xl mb-8">Each has its own page with the details. Here is why people go, and what to tell us.</p>
                    <ul className="flex gap-4 overflow-x-auto snap-x pb-4 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:mx-0 md:px-0">
                        {[
                            { t: 'KAFD', c: 'The financial district - towers with set drop-off points.', h: '/locations/riyadh/kafd/', i: Briefcase },
                            { t: 'Olaya', c: 'Central business and hotel district along King Fahd Road.', h: '/locations/riyadh/olaya/', i: Building2 },
                            { t: 'Diplomatic Quarter', c: 'Embassies and residences; entry follows DQ access rules.', h: '/locations/riyadh/diplomatic-quarter/', i: Landmark },
                            { t: 'Diriyah', c: 'At-Turaif and the old town, north-west of the centre.', h: '/locations/riyadh/diriyah/', i: Landmark },
                            { t: 'Bujairi Terrace', c: 'Restaurants facing At-Turaif - usually an evening return trip.', h: '/locations/riyadh/bujairi-terrace/', i: Hotel },
                            { t: 'Riyadh Front', c: 'Exhibitions, conferences and events near the airport side of the city.', h: '/locations/riyadh/front/', i: Ticket },
                            { t: 'Boulevard World', c: 'Seasonal entertainment zone - plan around event traffic.', h: '/locations/riyadh/boulevard-world/', i: Ticket },
                            { t: 'RUH Airport', c: 'Arrivals and departures, well north of the centre.', h: '/riyadh-airport-taxi/', i: Plane },
                        ].map((d) => (
                            <li key={d.t} className="snap-start shrink-0 w-64 md:w-auto">
                                <Link href={d.h} className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-[#14161b] text-white p-6 transition hover:-translate-y-1 motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a857]">
                                    <svg className="absolute -right-6 -bottom-4 w-40 h-20 opacity-20" viewBox="0 0 120 40" aria-hidden="true"><path d="M0 40 L10 25 L20 40 L30 25 L40 40 L50 25 L60 40 L70 25 L80 40 L90 25 L100 40 L110 25 L120 40" fill="none" stroke="#d4a857" strokeWidth="2" /></svg>
                                    <d.i className="w-6 h-6 text-[#d4a857] mb-8" aria-hidden="true" />
                                    <span className="text-xl font-bold mb-2">{d.t}</span>
                                    <span className="text-sm text-white/70 mb-6">{d.c}</span>
                                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#d4a857]">Private transfer <Arrow /></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= HOURLY ================= */}
            <section aria-labelledby="hourly" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="hourly" className="text-3xl md:text-5xl font-bold text-[#14161b] mb-4">Need the Car for More Than One Stop?</h2>
                    <ol className="flex flex-wrap items-center gap-2 mb-10 text-sm font-bold" aria-label="Example day with an hourly driver">
                        {['Hotel', 'Meeting', 'Lunch', 'Office', 'Event', 'Hotel'].map((s, i, a) => (
                            <li key={`${s}-${i}`} className="flex items-center gap-2">
                                <span className={`rounded-lg px-3 py-2 ${i === 0 || i === a.length - 1 ? 'bg-[#14161b] text-white' : 'bg-[#f6f3ee] text-[#14161b]'}`}>{s}</span>
                                {i < a.length - 1 && <span className="text-[#9a7432]" aria-hidden="true">→</span>}
                            </li>
                        ))}
                    </ol>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            { t: 'Point-to-point transfer', d: 'One pickup → one destination.', best: ['Airport transfer', 'Hotel transfer', 'A single meeting', 'Intercity route'], cta: 'Book a transfer', h: q({ from: 'Riyadh' }), dark: false },
                            { t: 'Hourly private driver', d: 'The vehicle stays available for planned stops during the booked period.', best: ['Several meetings', 'Shopping', 'Event day', 'A flexible plan'], cta: 'Book by the hour', h: q({ trip: 'hourly', hours: '4', from: 'Riyadh' }), dark: true },
                        ].map((c) => (
                            <div key={c.t} className={`rounded-3xl p-7 md:p-8 flex flex-col ${c.dark ? 'bg-[#14161b] text-white' : 'bg-[#f6f3ee] text-[#14161b]'}`}>
                                <h3 className="mb-2">{c.t}</h3>
                                <p className={`mb-5 ${c.dark ? 'text-white/70' : 'text-slate-600'}`}>{c.d}</p>
                                <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${c.dark ? 'text-[#d4a857]' : 'text-[#9a7432]'}`}>Best when</p>
                                <ul className="grid grid-cols-2 gap-2 text-sm mb-7">
                                    {c.best.map((b) => <li key={b} className="flex gap-2"><Check className={`w-4 h-4 mt-0.5 shrink-0 ${c.dark ? 'text-[#d4a857]' : 'text-[#9a7432]'}`} aria-hidden="true" />{b}</li>)}
                                </ul>
                                <Link href={c.h} className={`group mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-bold ${c.dark ? 'bg-[#d4a857] text-[#14161b] hover:bg-[#e2bb70]' : 'bg-[#14161b] text-white hover:bg-black'}`}>{c.cta} <Arrow /></Link>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-slate-600 mt-5">More on the <Link href="/riyadh-chauffeur/" className={link}>Riyadh chauffeur service</Link>.</p>
                </div>
            </section>

            {/* ================= BUSINESS + EVENTS ================= */}
            <section aria-label="Business and events" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <Reveal className="h-full">
                        <article className="h-full rounded-3xl bg-white border border-[#14161b]/10 p-7 md:p-9 flex flex-col">
                            <Briefcase className="w-7 h-7 text-[#9a7432] mb-4" aria-hidden="true" />
                            <h2 className="text-2xl md:text-3xl font-bold text-[#14161b] mb-4">Riyadh Business Travel, Without the Logistics</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 mb-7">
                                {['Airport pickup', 'Executive meetings', 'Office transfers', 'Visiting employees', 'Conference transport', 'Multi-stop days', 'Recurring trips', 'Event movements'].map((i) => (
                                    <li key={i} className="flex gap-2"><Check className="w-4 h-4 text-[#9a7432] mt-0.5 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                            <Link href="/services/corporate-travel/" className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#14161b] px-5 py-3.5 font-bold text-white hover:bg-black">Request Corporate Quote <Arrow /></Link>
                        </article>
                    </Reveal>
                    <Reveal className="h-full" delay={100}>
                        <article className="h-full rounded-3xl bg-[#14161b] text-white p-7 md:p-9 flex flex-col">
                            <Ticket className="w-7 h-7 text-[#d4a857] mb-4" aria-hidden="true" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Event Transportation in Riyadh</h2>
                            <p className="text-white/75 mb-5">Hotel ↔ venue, airport ↔ venue and venue ↔ hotel, for one person or a group - with a return time agreed in advance. On big event days, drop-off points follow the venue&apos;s traffic arrangements.</p>
                            <div className="flex flex-wrap gap-2 mb-7">
                                <Link href="/locations/riyadh/front/" className="rounded-full border border-white/20 px-3.5 py-2 text-sm font-semibold hover:border-[#d4a857]">Riyadh Front</Link>
                                <Link href="/locations/riyadh/boulevard-world/" className="rounded-full border border-white/20 px-3.5 py-2 text-sm font-semibold hover:border-[#d4a857]">Boulevard World</Link>
                            </div>
                            <Link href="/services/event-transport/" className="group mt-auto inline-flex items-center gap-2 font-bold text-[#d4a857]">Event transport <Arrow /></Link>
                        </article>
                    </Reveal>
                </div>
            </section>

            {/* ================= INTERCITY ================= */}
            <section aria-labelledby="intercity" className="bg-[#14161b] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="intercity" className="text-3xl md:text-5xl font-bold mb-4">From Riyadh to the Rest of Saudi Arabia</h2>
                    <ol className="flex flex-wrap items-center gap-2 mb-10 text-xs font-bold uppercase tracking-wider text-white/60" aria-label="How a long-distance trip works">
                        {['Riyadh pickup', 'Vehicle chosen for bags', 'Highway', 'Planned stop, if you want one', 'Door drop-off'].map((s, i, a) => (
                            <li key={s} className="flex items-center gap-2"><span>{s}</span>{i < a.length - 1 && <span className="w-5 h-px bg-[#d4a857]" aria-hidden="true" />}</li>
                        ))}
                    </ol>
                    <ul className="flex gap-4 overflow-x-auto snap-x pb-4 -mx-4 px-4 md:grid md:grid-cols-3 md:overflow-visible md:mx-0 md:px-0">
                        {ROUTES.map((r) => (
                            <li key={r.to} className="snap-start shrink-0 w-64 md:w-auto">
                                <Link href={r.href} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-[#d4a857] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a857]">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#d4a857] mb-2">Riyadh →</span>
                                    <span className="text-2xl font-bold mb-3">{r.to}</span>
                                    {r.km && <span className="text-sm text-white/60">{r.km} · {r.time}</span>}
                                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#d4a857]">Route details <Arrow /></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <p className="text-xs text-white/40 mt-3">Approximate road distance and driving time; the route pages explain what changes them.</p>
                    <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                        <p className="text-sm text-white/70">
                            Nearby: <Link href="/locations/al-kharj/" className="font-semibold text-[#d4a857] hover:underline">Al Kharj</Link>, <Link href="/locations/al-majma-ah/" className="font-semibold text-[#d4a857] hover:underline">Al Majma&apos;ah</Link>, <Link href="/locations/al-ghat/" className="font-semibold text-[#d4a857] hover:underline">Al-Ghat</Link>. Across the border: <Link href="/routes/riyadh-bahrain/" className="font-semibold text-[#d4a857] hover:underline">Bahrain</Link>, <Link href="/routes/riyadh-kuwait/" className="font-semibold text-[#d4a857] hover:underline">Kuwait</Link>, <Link href="/routes/riyadh-doha/" className="font-semibold text-[#d4a857] hover:underline">Qatar</Link>, <Link href="/routes/riyadh-dubai/" className="font-semibold text-[#d4a857] hover:underline">Dubai</Link>.
                        </p>
                        <Link href="/routes/" className="group shrink-0 inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-bold hover:border-[#d4a857]">View All Routes <Arrow /></Link>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLE ================= */}
            <section aria-labelledby="vehicle" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicle" className="text-3xl md:text-4xl font-bold text-[#14161b] mb-3">Which Vehicle Fits Your Journey?</h2>
                    <p className="text-slate-600 max-w-2xl mb-8">Seats and bag figures come straight from our booking system. See every vehicle on the <Link href="/fleet/" className={link}>fleet page</Link>.</p>
                    <RiyadhVehicleFit standard={STANDARD} executive={EXECUTIVE} />
                </div>
            </section>

            {/* ================= PRICING + NEED + TRAFFIC ================= */}
            <section aria-labelledby="pricing" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <Reveal className="h-full">
                        <div className="h-full rounded-3xl bg-[#14161b] text-white p-7">
                            <h2 id="pricing" className="text-2xl font-bold mb-4">How Pricing Works</h2>
                            <p className="text-white/75 text-sm leading-relaxed mb-5">Pricing depends on route, vehicle, passenger count, date and booking requirements. Request a quote for the current fare - you see it before you confirm.</p>
                            <a href={QUOTE_HREF} className="inline-flex items-center gap-2 font-bold text-[#d4a857]">Request a quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></a>
                        </div>
                    </Reveal>
                    <Reveal className="h-full" delay={80}>
                        <div className="h-full rounded-3xl bg-[#f6f3ee] p-7">
                            <h2 className="text-2xl font-bold text-[#14161b] mb-4">To Arrange Your Transfer, Send Us</h2>
                            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-slate-700">
                                {['Pickup location', 'Destination', 'Date', 'Pickup time', 'Passengers', 'Luggage', 'Vehicle preference', 'Flight number (airport)', 'Return journey', 'Special requirements'].map((i) => (
                                    <li key={i} className="flex gap-2"><Check className="w-4 h-4 text-[#9a7432] mt-0.5 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                    <Reveal className="h-full" delay={160}>
                        <div className="h-full rounded-3xl border border-[#14161b]/10 p-7">
                            <h2 className="text-2xl font-bold text-[#14161b] mb-4 flex items-center gap-2"><TrafficCone className="w-6 h-6 text-[#9a7432]" aria-hidden="true" /> Planning Around Riyadh Traffic</h2>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li>Journey times vary a lot by time of day and route.</li>
                                <li>Airport departures need extra planning.</li>
                                <li>Event venues can create temporary congestion.</li>
                                <li>Business districts slow down at peak times.</li>
                                <li>Give a realistic pickup window for meetings and flights.</li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </section>

            <AlUlaReviews place="riyadh" title="What travellers said about their Riyadh trips" />

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-[#14161b] mb-8">Riyadh Transfer Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#14161b]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#14161b] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-bold text-[#14161b] mb-6">Services from Riyadh</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Riyadh airport transfers', '/riyadh-airport-taxi/'],
                            ['Riyadh hotel transfers', '/services/riyadh-hotel-transfer/'],
                            ['Chauffeur by the hour', '/riyadh-chauffeur/'],
                            ['Corporate travel', '/services/corporate-travel/'],
                            ['Event transport', '/services/event-transport/'],
                            ['Intercity transfers', '/services/intercity/'],
                            ['Airport transfers across Saudi', '/services/airport-transfers/'],
                            ['Our fleet', '/fleet/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#14161b]/15 px-4 py-2.5 text-sm font-semibold text-[#14161b] hover:border-[#9a7432] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a857]">{l}</Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#14161b]">
                <Skyline className="absolute bottom-0 left-0 -z-10 w-full h-1/2 opacity-60" />
                <div className="max-w-3xl mx-auto text-center text-white">
                    <MapPin className="w-9 h-9 text-[#d4a857] mx-auto mb-5" aria-hidden="true" />
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Where Are You Going From Riyadh?</h2>
                    <p className="text-lg text-white/75 mb-10">Send your pickup point, destination, date and passenger details and we&apos;ll help arrange the right private vehicle for your journey.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-[#d4a857] text-[#14161b] hover:bg-[#e2bb70]">
                            <a href={QUOTE_HREF}>Get a Quote</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book on WhatsApp</a>
                        </Button>
                    </div>
                    <p className="text-xs text-white/40 mt-8 flex items-center justify-center gap-2"><Info className="w-3.5 h-3.5" aria-hidden="true" />Skyline shown as an illustration.</p>
                </div>
            </section>
        </div>
    );
}
