import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Minus, Plane, Hotel, Briefcase, Clock, CalendarDays, Ticket, Users, Map, Route, Globe2, Lock, Languages, Info, Car, MessageCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import RouteJourney from '@/components/routes/RouteJourney';
import ChauffeurRequestCard from '@/components/vip/ChauffeurRequestCard';
import VipVehicleMatch, { type VipVehicle } from '@/components/vip/VipVehicleMatch';
import VipChecklist from '@/components/vip/VipChecklist';
import { vehicles } from '@/lib/supabase';

const PAGE_URL = 'https://taxiserviceksa.com/services/vip-chauffeur/';
const QUOTE_HREF = '#arrange';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a VIP chauffeur quote. Service type, pickup, date, time, passengers and vehicle preference: ')}`;

export const metadata: Metadata = {
    title: 'VIP Chauffeur Service Saudi Arabia | Private Luxury Driver',
    description:
        'Book a private VIP chauffeur in Saudi Arabia for airport arrivals, hotels, executive travel, events, hourly journeys and multi-day itineraries in premium vehicles.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Private VIP Chauffeur Service in Saudi Arabia',
        description: 'Airport arrivals, hotel journeys, meetings, events, hourly and multi-day chauffeur service in premium vehicles.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private VIP chauffeur service in Saudi Arabia' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Private VIP Chauffeur Service in Saudi Arabia',
        description: 'Airport arrivals, hotel journeys, meetings, events, hourly and multi-day chauffeur service in premium vehicles.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

const q = (p: Record<string, string>) => `/booking/?${new URLSearchParams(p).toString()}`;

// Fleet figures come from the booking system's vehicle list - one source of truth.
const FLEET_META: { name: string; kind: string; href: string; best: string }[] = [
    { name: 'Mercedes S-Class', kind: 'Luxury sedan', href: '/fleet/mercedes-s-class/', best: 'Executive arrivals, formal meetings, one or two guests travelling light.' },
    { name: 'Genesis G80 VIP', kind: 'Executive sedan', href: '/fleet/genesis-g80/', best: 'Quiet city travel between hotel, office and dinner.' },
    { name: 'Cadillac Escalade', kind: 'Luxury SUV', href: '/fleet/cadillac-escalade/', best: 'Small groups or families who want an SUV with presence and room.' },
    { name: 'GMC Yukon XL / Denali', kind: 'Large SUV', href: '/fleet/gmc-yukon-xl/', best: 'The most luggage space among our SUVs - families and longer drives.' },
    { name: 'Hyundai Staria VIP', kind: 'Luxury MPV', href: '/fleet/hyundai-staria-vip/', best: 'Groups who want to sit together, with easy step-in and a flat floor.' },
];
const FLEET = FLEET_META.flatMap((m) => {
    const v = vehicles.find((x) => x.name === m.name);
    return v ? [{ ...m, image: v.image, passengers: v.passengers, luggage: v.luggage }] : [];
});
const sprinter = vehicles.find((x) => x.name === 'Mercedes Sprinter');
const MATCH_FLEET: VipVehicle[] = [
    ...FLEET.map((f) => ({ name: f.name, image: f.image, passengers: f.passengers, luggage: f.luggage, kind: f.kind, href: f.href })),
    ...(sprinter ? [{ name: sprinter.name, image: sprinter.image, passengers: sprinter.passengers, luggage: sprinter.luggage, kind: 'Executive van', href: '/fleet/mercedes-sprinter/' }] : []),
];

const faqs = [
    { q: 'What is a VIP chauffeur service?', a: 'A pre-booked private car with a driver, arranged around your plan rather than a single ride: the vehicle is chosen for your group, the chauffeur is assigned in advance and pickup details are confirmed before you travel.' },
    { q: 'Can I book a VIP chauffeur from the airport?', a: 'Yes. Choose "Airport transfer", add your flight number, arrival time, passengers and luggage, and you receive pickup instructions with your confirmed booking.' },
    { q: 'Can I book a luxury car and driver by the hour?', a: 'Yes. Choose hourly on the form and say roughly how many hours and which stops you have in mind. The car stays with you between stops.' },
    { q: 'Can I request a Mercedes S-Class?', a: 'Yes - request it by name. We confirm whether it is available for your date; if it is not, we suggest the closest alternative before you book.' },
    { q: 'Is a Cadillac Escalade or GMC Yukon available?', a: 'Both are in our fleet and can be requested. Availability depends on the date and city, and is confirmed with your quote.' },
    { q: 'Can I book a VIP chauffeur for a full day?', a: 'Yes. Tell us the start time, an approximate end time and the main stops. Full-day plans can change during the day within what was agreed.' },
    { q: 'Can I arrange a chauffeur for several days?', a: 'Yes. Send the itinerary day by day - cities, hotels and rough timings - and we quote the whole trip. Longer itineraries are easier to arrange with notice.' },
    { q: 'Can I book for a guest or executive?', a: 'Yes. Book on their behalf and give us the guest’s name and contact number for the pickup, plus any preferences they have.' },
    { q: 'Can the chauffeur wait between meetings?', a: 'Yes, when you book by the hour or for a full day. For a single transfer, tell us in advance if you expect a wait so it can be included.' },
    { q: 'Can I travel with multiple passengers and luggage?', a: 'Yes. Give the exact number of passengers and bags; we suggest an SUV, MPV or van that fits, or two vehicles if needed.' },
    { q: 'Can I request a specific language preference?', a: 'You can tell us your preference. We will confirm whether it can be accommodated for your booking - see our bilingual chauffeur page for more.' },
    { q: 'Can I book for an event or wedding?', a: 'Yes. Send the venue, the arrival time and when you expect to leave. Access and drop-off follow the venue’s own arrangements on the day.' },
    { q: 'Do you provide VIP chauffeur service outside Saudi Arabia?', a: 'Some cross-border journeys to neighbouring GCC countries can be arranged. Send the route and dates and we confirm what is possible.' },
    { q: 'How is a VIP chauffeur quote calculated?', a: 'By service type, vehicle, route, hours, date and any waiting or extra stops. You see the price before you confirm.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private VIP chauffeur service in Saudi Arabia',
            url: PAGE_URL,
            serviceType: 'Pre-booked chauffeur-driven car',
            description: 'Pre-booked private chauffeur service in Saudi Arabia for airport arrivals, hotel journeys, executive travel, events, hourly bookings and multi-day itineraries in premium vehicles.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const JOURNEY = [
    { title: 'Airport', text: 'You land with pickup instructions already in hand.' },
    { title: 'Chauffeur', text: 'The chauffeur and vehicle assigned to you before the day.', accent: true },
    { title: 'Hotel', text: 'Check in, change, and keep the car if the plan continues.' },
    { title: 'Meeting', text: 'Dropped at the right entrance; the car waits if you booked by the hour.' },
    { title: 'Event', text: 'Evening arrival and a pickup planned around when you leave.' },
    { title: 'Return', text: 'Back to the hotel - or to the airport at the end of the trip.', accent: true },
];

const eyebrow = 'text-[11px] font-bold uppercase tracking-[0.25em]';
const link = 'font-semibold text-[#9b8656] hover:underline';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

// Architectural line art - a canopy entrance and a road leading away. Illustration, not a photo.
function LineArt({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 520" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <g fill="none" stroke="#c9ced6" strokeOpacity="0.13" strokeWidth="1">
                {Array.from({ length: 14 }, (_, i) => <line key={i} x1={820 + i * 44} y1={80 + (i % 3) * 16} x2={820 + i * 44} y2={430} />)}
                <path d="M780 180 H 1440 M780 250 H 1440 M780 320 H 1440" />
                <path d="M700 430 L 900 300 H 1300 L 1440 380" />
                <path d="M0 430 H 1440" strokeOpacity="0.25" />
            </g>
            <path d="M-20 505 C 320 470, 560 450, 820 440 S 1240 432, 1460 436" fill="none" stroke="#d8c7a3" strokeWidth="1.5" strokeLinecap="round" pathLength={1} className="route-draw" />
        </svg>
    );
}

export default function VipChauffeurPage() {
    return (
        <div className="vip-page bg-[#f7f5f0]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0e1116]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_10%,rgba(216,199,163,0.14),transparent_55%)]" aria-hidden="true" />
                <LineArt className="absolute bottom-0 left-0 -z-10 w-full h-full" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-24 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-14 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className={`${eyebrow} text-[#d8c7a3] mb-6`}>Private • Premium • Chauffeur-driven</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-6">Private VIP Chauffeur Service in Saudi Arabia</h1>
                        <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
                            Pre-book a premium vehicle and a private chauffeur for airport arrivals, hotel journeys, meetings, events, hourly travel and multi-day itineraries - planned around you before the day begins.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mb-8">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#d8c7a3] text-[#0e1116] hover:bg-[#e6d8b9]">
                                <a href={QUOTE_HREF}>Book a VIP Chauffeur <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Request a Custom Quote</a>
                            </Button>
                        </div>
                        <p className="text-sm text-white/[0.45]">Airport • Hotel • Executive • Events • Hourly • Multi-day</p>
                    </div>
                    <div id="arrange" className="scroll-mt-32">
                        <ChauffeurRequestCard />
                    </div>
                </div>
            </section>

            {/* ================= SIGNATURE JOURNEY ================= */}
            <section aria-labelledby="journey" className="bg-[#0e1116] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
                    <div className="lg:sticky lg:top-32 self-start">
                        <p className={`${eyebrow} text-[#d8c7a3] mb-4`}>One chauffeur, one plan</p>
                        <h2 id="journey" className="text-3xl md:text-5xl font-semibold mb-5">Your Journey, Privately Arranged</h2>
                        <p className="text-white/60 leading-relaxed">A VIP booking can be a single airport run or a whole day that moves from arrival to hotel, meeting, dinner and back. You tell us the shape of the day; we match the vehicle and the chauffeur to it.</p>
                    </div>
                    <RouteJourney stops={JOURNEY} vehicle palette="platinum" />
                </div>
            </section>

            {/* ================= WHICH SERVICE ================= */}
            <section aria-labelledby="which" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <p className={`${eyebrow} text-[#9b8656] mb-4`}>Choosing the right service</p>
                    <h2 id="which" className="text-3xl md:text-5xl font-semibold text-[#0e1116] mb-4">Is VIP Chauffeur the Right Service?</h2>
                    <p className="text-slate-600 max-w-2xl mb-10">We run several private services. VIP chauffeur is the one built around premium vehicles and a planned itinerary - if another fits your trip better, use that page.</p>
                    <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                        <table className="w-full min-w-[640px] text-left text-sm border-separate border-spacing-0">
                            <caption className="sr-only">How VIP chauffeur compares with our other private services</caption>
                            <thead>
                                <tr className="text-[#0e1116]">
                                    <th scope="col" className="py-3 pr-4 font-bold border-b border-[#0e1116]/[0.15]">Service</th>
                                    <th scope="col" className="py-3 pr-4 font-bold border-b border-[#0e1116]/[0.15]">Best for</th>
                                    <th scope="col" className="py-3 font-bold border-b border-[#0e1116]/[0.15]">Typical vehicle</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-700">
                                {[
                                    ['VIP chauffeur', 'Premium arrivals, hosted guests, full days and itineraries', 'S-Class, Escalade, Yukon, Staria VIP, G80', null],
                                    ['Business chauffeur', 'Meetings, offices and company travel', 'Executive sedan or SUV', '/services/business/'],
                                    ['Private driver', 'A car and driver by the hour for your own plan', 'Any fleet vehicle', '/services/private-driver/'],
                                    ['Tourism transport', 'Sightseeing days and heritage visits', 'Sedan, SUV or van', '/services/tourism-transport/'],
                                    ['Intercity transfer', 'Door-to-door between Saudi cities', 'Sedan, SUV, van or minibus', '/services/intercity/'],
                                ].map(([s, b, v, h]) => (
                                    <tr key={s as string} className={h ? '' : 'bg-[#0e1116] text-white'}>
                                        <th scope="row" className={`py-4 px-4 font-semibold border-b ${h ? 'border-[#0e1116]/10' : 'border-transparent rounded-l-xl'}`}>
                                            {h ? <Link href={h} className={link}>{s}</Link> : s}
                                        </th>
                                        <td className={`py-4 pr-4 border-b ${h ? 'border-[#0e1116]/10' : 'border-transparent'}`}>{b}</td>
                                        <td className={`py-4 pr-4 border-b ${h ? 'border-[#0e1116]/10' : 'border-transparent rounded-r-xl'}`}>{v}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ================= PLANNED JOURNEY FLOW ================= */}
            <section aria-labelledby="planned" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="planned" className="text-3xl md:text-5xl font-semibold text-[#0e1116] mb-4">More Than a Car. A Planned Private Journey.</h2>
                    <p className="text-slate-600 max-w-2xl mb-12">The difference is in what happens before the pickup. Each step is confirmed with you, not assumed.</p>
                    <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#0e1116]/10 rounded-2xl overflow-hidden">
                        {[
                            ['Booking', 'Your plan, passengers and luggage.'],
                            ['Vehicle confirmed', 'Matched to your group and requested model.'],
                            ['Chauffeur assigned', 'Before the day, not at the last minute.'],
                            ['Pickup instructions', 'Where and how you meet.'],
                            ['Private journey', 'Your car, your stops, your pace.'],
                            ['Journey complete', 'Drop-off or the next leg of the plan.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="bg-white p-5">
                                <Reveal delay={i * 70}>
                                    <span className="block text-xs font-bold text-[#9b8656] mb-3">0{i + 1}</span>
                                    <h3 className="text-[#0e1116] mb-1.5">{t}</h3>
                                    <p className="text-sm text-slate-600">{d}</p>
                                </Reveal>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ================= AUDIENCE ================= */}
            <section aria-labelledby="who" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="who" className="text-3xl md:text-5xl font-semibold text-[#0e1116] mb-10">Who Books a VIP Chauffeur?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { i: Briefcase, t: 'Executives and visiting teams', d: 'Airport to hotel to meetings, with a car that waits between them.' },
                            { i: Users, t: 'Hosted guests', d: 'Companies and families booking a car for someone arriving - the guest simply gets in.' },
                            { i: Hotel, t: 'Hotel guests', d: 'A private car at the entrance for dinners, shopping and appointments.' },
                            { i: Ticket, t: 'Event and wedding guests', d: 'Arrive together and leave when the evening ends, not when a ride app finds a car.' },
                            { i: Map, t: 'Families on longer trips', d: 'One vehicle and chauffeur across several days and cities.' },
                            { i: Globe2, t: 'GCC and international visitors', d: 'Travellers who want arrival and transport sorted before they fly.' },
                        ].map((c, i) => (
                            <Reveal key={c.t} delay={i * 60} className="h-full">
                                <div className="h-full rounded-2xl border border-[#0e1116]/10 bg-white p-6">
                                    <c.i className="w-6 h-6 text-[#9b8656] mb-4" aria-hidden="true" />
                                    <h3 className="text-[#0e1116] mb-2">{c.t}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{c.d}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= VIP VS STANDARD ================= */}
            <section aria-labelledby="vs" className="bg-[#0e1116] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 id="vs" className="text-3xl md:text-5xl font-semibold mb-4">VIP Chauffeur or Standard Private Transfer?</h2>
                    <p className="text-white/60 max-w-2xl mb-10">Both are private, pre-booked and door-to-door. The difference is the format of the service - not how safely you travel.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-white/10 p-7">
                            <p className={`${eyebrow} text-white/50 mb-4`}>Standard private transfer</p>
                            <ul className="space-y-3 text-white/75">
                                {['A → B journey', 'Vehicle chosen by size', 'Priced per trip', 'Ideal for simple transfers'].map((x) => <li key={x} className="flex gap-3"><Minus className="w-4 h-4 mt-1 text-white/40 shrink-0" aria-hidden="true" />{x}</li>)}
                            </ul>
                            <Link href="/services/airport-transfers/" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white">Airport transfers <Arrow /></Link>
                        </div>
                        <div className="rounded-2xl border border-[#d8c7a3]/40 bg-[#d8c7a3]/[0.06] p-7">
                            <p className={`${eyebrow} text-[#d8c7a3] mb-4`}>VIP chauffeur</p>
                            <ul className="space-y-3 text-white/[0.85]">
                                {['A journey, an afternoon or several days', 'Premium vehicle, requested by model', 'Priced around your plan and hours', 'Chauffeur can stay with you between stops'].map((x) => <li key={x} className="flex gap-3"><Check className="w-4 h-4 mt-1 text-[#d8c7a3] shrink-0" aria-hidden="true" />{x}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section aria-labelledby="vehicles" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <p className={`${eyebrow} text-[#9b8656] mb-4`}>The vehicles</p>
                    <h2 id="vehicles" className="text-3xl md:text-5xl font-semibold text-[#0e1116] mb-4">Premium Vehicles for Private Travel</h2>
                    <p className="text-slate-600 max-w-2xl mb-10">Request a model by name. Availability depends on the date and city and is confirmed with your quote.</p>
                    <ul className="relative flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:mx-0 md:px-0" aria-label="VIP chauffeur vehicles">
                        {FLEET.map((v) => (
                            <li key={v.name} className="snap-start shrink-0 w-[82%] sm:w-[60%] md:w-auto">
                                <article className="h-full rounded-2xl bg-white border border-[#0e1116]/10 overflow-hidden flex flex-col">
                                    <div className="relative aspect-[16/10] bg-[#f3f1ec]">
                                        <Image src={v.image} alt={v.name.split(' /')[0]} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 82vw" className={v.image.startsWith('/fleet/') ? 'object-contain p-5' : 'object-cover'} />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <p className={`${eyebrow} text-[#9b8656] mb-1`}>{v.kind}</p>
                                        <h3 className="text-[#0e1116] mb-2">{v.name}</h3>
                                        <p className="text-sm text-slate-600 mb-4 flex-1">{v.best}</p>
                                        <p className="text-sm text-slate-500 mb-5">Up to {v.passengers} passengers · about {v.luggage} large bags</p>
                                        <div className="flex items-center justify-between gap-3">
                                            <Link href={q({ vehicle: v.name, notes: 'VIP chauffeur request.' })} className="group inline-flex items-center gap-2 font-bold text-[#0e1116]">Request <Arrow /></Link>
                                            <Link href={v.href} className="text-sm font-semibold text-[#9b8656] hover:underline">Details<span className="sr-only"> about the {v.name}</span></Link>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm text-slate-500 mt-4">Other vehicles, including the BMW 7 Series and Mercedes Sprinter, are on our <Link href="/fleet/" className={link}>fleet page</Link>.</p>
                </div>
            </section>

            {/* ================= SELECTOR ================= */}
            <section aria-labelledby="match" className="bg-[#efece5] py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="match" className="text-3xl md:text-5xl font-semibold text-[#0e1116] mb-4">Which Vehicle Suits Your Journey?</h2>
                    <p className="text-slate-600 max-w-2xl mb-10">Three questions. The suggestion only includes vehicles whose seats and luggage space fit.</p>
                    <VipVehicleMatch fleet={MATCH_FLEET} />
                </div>
            </section>

            {/* ================= AIRPORT ================= */}
            <section aria-labelledby="airport" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <Plane className="w-7 h-7 text-[#9b8656] mb-5" aria-hidden="true" />
                        <h2 id="airport" className="text-3xl md:text-5xl font-semibold text-[#0e1116] mb-5">VIP Airport Arrivals</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">Send your flight number and arrival time with the booking. Your pickup instructions tell you where to meet the chauffeur once you are through arrivals, and the vehicle is chosen for your luggage, not just your headcount.</p>
                        <p className="text-slate-600 leading-relaxed">Departures work the same way in reverse: we suggest a pickup time that leaves room for the road and airport procedures.</p>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            ['Riyadh', 'King Khalid International (RUH)', '/riyadh-airport-taxi/'],
                            ['Jeddah', 'King Abdulaziz International (JED)', '/locations/jeddah/'],
                            ['Dammam', 'King Fahd International (DMM)', '/locations/dammam/'],
                            ['Madinah', 'Prince Mohammad bin Abdulaziz (MED)', '/locations/madinah/'],
                        ].map(([c, a, h]) => (
                            <li key={c}>
                                <div className="h-full rounded-2xl bg-white border border-[#0e1116]/10 p-5">
                                    <h3 className="text-[#0e1116] mb-1">{c}</h3>
                                    <p className="text-sm text-slate-600 mb-4">{a}</p>
                                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                                        <Link href={q({ from: a, notes: 'VIP chauffeur - Airport transfer.' })} className="group inline-flex items-center gap-1.5 font-bold text-[#0e1116]">Book arrival <Arrow /></Link>
                                        <Link href={h} className={link}>{c} guide</Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= HOTEL ================= */}
            <section aria-labelledby="hotel" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Hotel className="w-7 h-7 text-[#9b8656] mb-5" aria-hidden="true" />
                    <h2 id="hotel" className="text-3xl md:text-5xl font-semibold text-[#0e1116] mb-4">A Chauffeur From Your Hotel</h2>
                    <p className="text-slate-600 max-w-2xl mb-10">Book directly with us for pickups at any hotel entrance - give the hotel name and we plan the pickup there.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            ['Arrival day', 'Airport to hotel with luggage space to match.'],
                            ['Dinner and evenings', 'Out and back without looking for a car at night.'],
                            ['Appointments', 'Meetings, clinics or shopping with the car waiting.'],
                            ['Checkout', 'Hotel to the airport or on to the next city.'],
                        ].map(([t, d]) => (
                            <div key={t} className="rounded-2xl border border-[#0e1116]/10 p-6">
                                <h3 className="text-[#0e1116] mb-2">{t}</h3>
                                <p className="text-sm text-slate-600">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= HOURLY ================= */}
            <section aria-labelledby="hourly" className="bg-[#0e1116] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <Clock className="w-7 h-7 text-[#d8c7a3] mb-5" aria-hidden="true" />
                        <h2 id="hourly" className="text-3xl md:text-5xl font-semibold mb-5">Keep Your Chauffeur With You</h2>
                        <p className="text-white/[0.65] leading-relaxed mb-6">Book by the hour and the car stays with you between stops. Useful when the day has several meetings, or when you do not know exactly how long each stop will take.</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-6 rounded-xl font-bold bg-[#d8c7a3] text-[#0e1116] hover:bg-[#e6d8b9]">
                                <Link href={q({ trip: 'hourly', hours: '4', notes: 'VIP chauffeur - Hourly chauffeur.' })}>Book by the hour <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" /></Link>
                            </Button>
                            <Link href="/services/private-driver/" className="group inline-flex items-center gap-2 px-2 py-3 font-semibold text-white/80 hover:text-white">Private driver by the hour <Arrow /></Link>
                        </div>
                    </div>
                    <div>
                        <p className={`${eyebrow} text-white/[0.45] mb-5`}>An example afternoon</p>
                        <ol className="relative border-l border-white/[0.15] ml-2 space-y-7">
                            {[
                                ['1:00 pm', 'Pickup at the hotel entrance'],
                                ['1:30 pm', 'First meeting - the chauffeur waits nearby'],
                                ['3:15 pm', 'Second meeting across the city'],
                                ['5:00 pm', 'A stop for shopping or a coffee'],
                                ['6:00 pm', 'Back to the hotel'],
                            ].map(([t, d]) => (
                                <li key={t} className="pl-7 relative">
                                    <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#d8c7a3]" aria-hidden="true" />
                                    <p className="text-sm font-bold text-[#d8c7a3]">{t}</p>
                                    <p className="text-white/80">{d}</p>
                                </li>
                            ))}
                        </ol>
                        <p className="text-xs text-white/40 mt-6">Illustrative only - your plan sets the times.</p>
                    </div>
                </div>
            </section>

            {/* ================= FULL / MULTI-DAY ================= */}
            <section aria-labelledby="days" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="days" className="text-3xl md:text-5xl font-semibold text-[#0e1116] mb-10">Full-Day and Multi-Day Chauffeur Service</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Reveal className="h-full">
                            <div className="h-full rounded-2xl bg-white border border-[#0e1116]/10 p-7">
                                <Clock className="w-6 h-6 text-[#9b8656] mb-4" aria-hidden="true" />
                                <h3 className="text-[#0e1116] mb-3">Full day</h3>
                                <p className="text-slate-600 leading-relaxed mb-5">One vehicle and chauffeur from morning to evening. Tell us the start time, an approximate finish and the main stops; the order can change during the day within what was agreed.</p>
                                <Link href={q({ trip: 'hourly', hours: '10', notes: 'VIP chauffeur - Full-day chauffeur.' })} className="group inline-flex items-center gap-2 font-bold text-[#0e1116]">Plan a full day <Arrow /></Link>
                            </div>
                        </Reveal>
                        <Reveal className="h-full" delay={100}>
                            <div className="h-full rounded-2xl bg-white border border-[#0e1116]/10 p-7">
                                <CalendarDays className="w-6 h-6 text-[#9b8656] mb-4" aria-hidden="true" />
                                <h3 className="text-[#0e1116] mb-3">Several days</h3>
                                <p className="text-slate-600 leading-relaxed mb-5">Send the itinerary day by day - cities, hotels and rough timings. We quote the whole trip and confirm the vehicle and chauffeur arrangement for each day before you travel.</p>
                                <Link href={q({ notes: 'VIP chauffeur - Multi-day itinerary. Day 1: ' })} className="group inline-flex items-center gap-2 font-bold text-[#0e1116]">Send an itinerary <Arrow /></Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ================= EXECUTIVE & EVENTS ================= */}
            <section aria-label="Executive travel and events" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <Briefcase className="w-7 h-7 text-[#9b8656] mb-5" aria-hidden="true" />
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#0e1116] mb-4">Executive Travel</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">Book for yourself or for a visiting executive. Give us the guest&apos;s name and contact number, the office tower or gate, and meeting times; business districts often have set drop-off points, so the exact entrance helps.</p>
                        <p className="text-slate-600 leading-relaxed mb-5">For regular company bookings, see our business service.</p>
                        <div className="flex flex-wrap gap-x-5 gap-y-2">
                            <Link href="/services/business/" className="group inline-flex items-center gap-2 font-bold text-[#0e1116]">Business chauffeur <Arrow /></Link>
                            <Link href="/services/corporate-travel/" className={link}>Corporate travel</Link>
                        </div>
                    </div>
                    <div>
                        <Ticket className="w-7 h-7 text-[#9b8656] mb-5" aria-hidden="true" />
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#0e1116] mb-4">Events and Special Occasions</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">Weddings, gala dinners, concerts and conferences. Send the venue, arrival time and when you expect to leave. Drop-off and pickup follow each venue&apos;s own access arrangements on the day, which can change for large events.</p>
                        <p className="text-slate-600 leading-relaxed mb-5">Several guests? We can suggest one larger vehicle or a few cars arriving together.</p>
                        <Link href="/services/event-transport/" className="group inline-flex items-center gap-2 font-bold text-[#0e1116]">Event transport <Arrow /></Link>
                    </div>
                </div>
            </section>

            {/* ================= PRIVACY / LANGUAGE / PREFERENCES ================= */}
            <section aria-labelledby="private" className="bg-[#0e1116] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Lock className="w-7 h-7 text-[#d8c7a3] mb-5" aria-hidden="true" />
                    <h2 id="private" className="text-3xl md:text-5xl font-semibold mb-5">A More Private Way to Travel</h2>
                    <p className="text-white/[0.65] max-w-2xl leading-relaxed mb-10">A private booking means the car is yours - no shared rides and no other passengers. Your booking details are used to arrange the journey and handled as described in our <Link href="/privacy-policy/" className="text-[#d8c7a3] hover:underline">privacy policy</Link>.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-white/10 p-7">
                            <Languages className="w-6 h-6 text-[#d8c7a3] mb-4" aria-hidden="true" />
                            <h3 className="mb-2">Language preference</h3>
                            <p className="text-white/[0.65] text-sm leading-relaxed mb-4">Tell us your preferred language when you book. We confirm whether it can be accommodated for your date.</p>
                            <Link href="/services/bilingual-chauffeur/" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#d8c7a3]">Bilingual chauffeur <Arrow /></Link>
                        </div>
                        <div className="rounded-2xl border border-white/10 p-7">
                            <Users className="w-6 h-6 text-[#d8c7a3] mb-4" aria-hidden="true" />
                            <h3 className="mb-2">Travelling as a woman or family</h3>
                            <p className="text-white/[0.65] text-sm leading-relaxed">If you have preferences for how the journey is arranged, include them in special requirements. We tell you what is possible before you confirm.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= AREAS & GCC ================= */}
            <section aria-labelledby="areas" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12">
                    <div>
                        <Route className="w-7 h-7 text-[#9b8656] mb-5" aria-hidden="true" />
                        <h2 id="areas" className="text-3xl md:text-5xl font-semibold text-[#0e1116] mb-4">Where We Arrange Chauffeurs</h2>
                        <p className="text-slate-600 mb-8">Pickups in the main cities, plus longer journeys between them. Send your route and we confirm availability.</p>
                        <div className="flex flex-wrap gap-2">
                            {[
                                ['Riyadh', '/locations/riyadh/'],
                                ['Jeddah', '/locations/jeddah/'],
                                ['Makkah', '/locations/makkah/'],
                                ['Madinah', '/locations/madinah/'],
                                ['Dammam', '/locations/dammam/'],
                                ['Al Khobar', '/locations/al-khobar/'],
                                ['Taif', '/locations/taif/'],
                                ['AlUla', '/locations/alula/'],
                                ['Abha', '/locations/abha/'],
                                ['Intercity journeys', '/services/intercity/'],
                            ].map(([l, h]) => (
                                <Link key={h} href={h} className="rounded-full border border-[#0e1116]/[0.15] bg-white px-4 py-2.5 text-sm font-semibold text-[#0e1116] hover:border-[#9b8656] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b8656]">{l}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-2xl bg-white border border-[#0e1116]/10 p-7 self-start">
                        <Globe2 className="w-6 h-6 text-[#9b8656] mb-4" aria-hidden="true" />
                        <h3 className="text-[#0e1116] mb-2">Beyond Saudi Arabia</h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-5">Some cross-border journeys to neighbouring GCC countries can be arranged, subject to border requirements and vehicle permissions for the route.</p>
                        <Link href="/services/gcc-chauffeur-service/" className="group inline-flex items-center gap-2 font-bold text-[#0e1116]">GCC chauffeur service <Arrow /></Link>
                    </div>
                </div>
            </section>

            {/* ================= PRICING ================= */}
            <section aria-labelledby="pricing" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="pricing" className="text-3xl md:text-5xl font-semibold text-[#0e1116] mb-4">Request a Tailored VIP Quote</h2>
                    <p className="text-slate-600 max-w-2xl mb-10">VIP bookings vary too much for a fixed price list. Your quote depends on the service type, vehicle, route, hours, date and any waiting or extra stops - and you see it before you confirm.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-2xl border border-[#0e1116]/10 p-7">
                            <h3 className="text-[#0e1116] mb-4">Usually included</h3>
                            <ul className="space-y-3 text-slate-700">
                                {['The vehicle and chauffeur for the agreed journey or hours', 'Pickup at your address, hotel or airport', 'Pickup instructions before the day'].map((x) => <li key={x} className="flex gap-3"><Check className="w-4 h-4 mt-1 text-[#9b8656] shrink-0" aria-hidden="true" />{x}</li>)}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-[#0e1116]/10 bg-[#f7f5f0] p-7">
                            <h3 className="text-[#0e1116] mb-4">May require additional arrangement</h3>
                            <ul className="space-y-3 text-slate-700">
                                {['Extra hours beyond the booking', 'Unplanned waiting or added stops', 'Late-night or very early changes', 'Cross-border journeys', 'Additional vehicles for larger groups'].map((x) => <li key={x} className="flex gap-3"><Info className="w-4 h-4 mt-1 text-slate-400 shrink-0" aria-hidden="true" />{x}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PROCESS & TIMING ================= */}
            <section aria-labelledby="process" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12">
                    <div>
                        <h2 id="process" className="text-3xl md:text-5xl font-semibold text-[#0e1116] mb-10">How to Book</h2>
                        <ol className="space-y-6">
                            {[
                                ['Send your plan', 'Service type, pickup, date, time, passengers, luggage and any vehicle preference.'],
                                ['Receive your quote', 'With the vehicle we can confirm for your date.'],
                                ['Confirm the booking', 'Once you are happy with the price and details.'],
                                ['Get pickup instructions', 'Where to meet and how to reach the chauffeur on the day.'],
                            ].map(([t, d], i) => (
                                <li key={t} className="flex gap-5">
                                    <span className="w-10 h-10 shrink-0 rounded-full bg-[#0e1116] text-[#d8c7a3] font-bold flex items-center justify-center" aria-hidden="true">{i + 1}</span>
                                    <div>
                                        <h3 className="text-[#0e1116] mb-1">{t}</h3>
                                        <p className="text-slate-600">{d}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="rounded-2xl bg-white border border-[#0e1116]/10 p-7 self-start">
                        <CalendarDays className="w-6 h-6 text-[#9b8656] mb-4" aria-hidden="true" />
                        <h2 className="text-2xl font-semibold text-[#0e1116] mb-3">When Should I Book?</h2>
                        <p className="text-slate-600 leading-relaxed mb-3">As early as your plans allow. A specific model, a full day, several days or an event date all depend on availability, so earlier requests give more choice.</p>
                        <p className="text-slate-600 leading-relaxed">Short-notice requests are worth sending too - we tell you straight away what we can confirm.</p>
                    </div>
                </div>
            </section>

            {/* ================= CHECKLIST ================= */}
            <section aria-labelledby="checklist" className="bg-[#0e1116] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="checklist" className="text-3xl md:text-5xl font-semibold mb-4">What Does Your Journey Need?</h2>
                    <p className="text-white/60 max-w-2xl mb-10">Tick what applies. It goes into your booking notes so the quote reflects it.</p>
                    <VipChecklist />
                </div>
            </section>

            {/* ================= TRUST ================= */}
            <section aria-labelledby="trust" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="trust" className="text-3xl md:text-5xl font-semibold text-[#0e1116] mb-10">What You Can Expect From Us</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            [Car, 'Vehicle confirmed first', 'You know which vehicle is booked before you confirm.'],
                            [Info, 'Price before you confirm', 'The quote is agreed before the booking is confirmed.'],
                            [Map, 'Clear pickup instructions', 'Sent with your confirmed booking.'],
                            [MessageCircle, 'One contact channel', 'Changes and questions on WhatsApp.'],
                        ].map(([I, t, d]) => {
                            const Icon = I as typeof Car;
                            return (
                                <div key={t as string} className="rounded-2xl border border-[#0e1116]/10 bg-white p-6">
                                    <Icon className="w-6 h-6 text-[#9b8656] mb-4" aria-hidden="true" />
                                    <h3 className="text-[#0e1116] mb-2">{t as string}</h3>
                                    <p className="text-sm text-slate-600">{d as string}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-semibold text-[#0e1116] mb-8">VIP Chauffeur Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#0e1116]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0e1116] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#0e1116]">
                <LineArt className="absolute bottom-0 left-0 -z-10 w-full h-full opacity-70" />
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-5">Your Journey. Your Vehicle. Your Chauffeur.</h2>
                    <p className="text-lg text-white/[0.65] mb-10">Send your plan and we will confirm the vehicle, the chauffeur arrangement and the price before you travel.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-[#d8c7a3] text-[#0e1116] hover:bg-[#e6d8b9]">
                            <a href={QUOTE_HREF}>Request VIP Quote</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white">
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book on WhatsApp</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white">
                            <Link href="/fleet/">Explore the Fleet</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
