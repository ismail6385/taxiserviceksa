import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Check, X, Info, AlertTriangle, Plane, Briefcase, Users, Car, FileText, ShieldCheck, Landmark, Clock, CalendarDays, Route, ExternalLink, UserRound, Building2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import RouteJourney from '@/components/routes/RouteJourney';
import CausewayQuoteCard from '@/components/causeway/CausewayQuoteCard';
import CausewayMap from '@/components/causeway/CausewayMap';
import CausewayRoutePicker from '@/components/causeway/CausewayRoutePicker';
import PlacePicker, { type Place } from '@/components/causeway/PlacePicker';
import CausewayVehicleFit, { type FitVehicle } from '@/components/causeway/CausewayVehicleFit';
import TickList from '@/components/causeway/TickList';
import { SAUDI_START, BAHRAIN_START } from '@/data/causewayRoutes';
import { vehicles } from '@/lib/supabase';

const PAGE_URL = 'https://taxiserviceksa.com/border-crossings/taxi-king-fahd-causeway-border-crossing/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote to cross King Fahd Causeway. Direction, pickup, destination, date, time, passengers and luggage: ')}`;

// Official sources passengers should check before travelling.
const OFFICIAL = [
    { label: 'King Fahd Causeway Authority', href: 'https://kfca.sa/en/' },
    { label: 'Bahrain eVisa (NPRA)', href: 'https://www.evisa.gov.bh/' },
    { label: 'KSA Visa (Saudi Ministry of Foreign Affairs)', href: 'https://ksavisa.sa/' },
];

export const metadata: Metadata = {
    title: 'King Fahd Causeway Private Transfer & Border Crossing Guide',
    description:
        'Plan a private Saudi–Bahrain transfer via King Fahd Causeway with route guidance, border preparation, vehicle options and door-to-door booking information.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'King Fahd Causeway Private Transfer & Border Crossing Guide',
        description: 'How the Saudi–Bahrain crossing works, what to prepare, and how to arrange a private vehicle across King Fahd Causeway.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'King Fahd Causeway private transfer guide' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'King Fahd Causeway Private Transfer & Border Crossing Guide',
        description: 'How the Saudi–Bahrain crossing works, what to prepare, and how to arrange a private vehicle across King Fahd Causeway.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

// Fleet figures come from the booking system's vehicle list - one source of truth.
// `studio` marks cut-out shots on a white background; the rest are photos that fill the frame.
const FIT_META: [string, string, boolean][] = [
    ['Toyota Camry', 'Sedan', false],
    ['Toyota Veloz 2024', 'Family MPV', false],
    ['Hyundai Staria VIP', 'Family van', false],
    ['GMC Yukon XL / Denali', 'Large SUV', true],
    ['Toyota Hiace', 'Group van', false],
];
const FIT_FLEET: FitVehicle[] = FIT_META.flatMap(([name, label, studio]) => {
    const v = vehicles.find((x) => x.name === name);
    return v ? [{ name: v.name, label, image: v.image, passengers: v.passengers, luggage: v.luggage, studio }] : [];
});

const JOURNEY = [
    { title: 'Saudi Arabia', text: 'Pickup from your home, hotel, office or airport.' },
    { title: 'Al Khobar / Dammam', text: 'The Eastern Province cities closest to the Causeway. From Riyadh, this comes after a long drive east.' },
    { title: 'King Fahd Causeway', text: 'Around 25 km of bridges and embankments between Al Khobar and Al Jasra in Bahrain.', accent: true },
    { title: 'Saudi exit procedures', text: 'Handled by the Saudi authorities at the border facilities on the Causeway.' },
    { title: 'The Causeway', text: 'The crossing continues over the water towards Bahrain.' },
    { title: 'Bahrain entry procedures', text: 'Handled by the Bahrain authorities. Entry decisions are theirs alone.' },
    { title: 'Manama, Muharraq, Riffa or your address', text: 'The final drive to your destination in Bahrain.', accent: true },
];

const BAHRAIN_PLACES: Place[] = [
    { name: 'Manama', tag: 'Hotels • offices • city centre', text: 'The capital, in the north-east of the island. Give the hotel or building name so the drop-off is at the right entrance.', set: { direction: 'sa-bh', to: 'Manama, Bahrain' } },
    { name: 'Muharraq', tag: 'Airport • hotels • residential', text: 'The island next to Manama, home to Bahrain International Airport. For flights, add your flight time and allow a generous border buffer.', set: { direction: 'sa-bh', to: 'Bahrain International Airport (BAH)' }, link: { label: 'Dammam Airport → Bahrain Airport', href: '/routes/dammam-airport-to-bahrain-airport-taxi/' } },
    { name: 'Riffa', tag: 'Residential & business', text: 'South of Manama in the centre of the island. Send the full address or a nearby landmark.', set: { direction: 'sa-bh', to: 'Riffa, Bahrain' } },
    { name: 'Seef', tag: 'Hotels • business • shopping', text: 'On Manama’s north-west side, with hotels, offices and malls. Name the building you are going to.', set: { direction: 'sa-bh', to: 'Seef, Manama, Bahrain' } },
    { name: 'Juffair', tag: 'Hotels • hospitality • residential', text: 'East of central Manama, with many hotels and apartments. The hotel or tower name is enough.', set: { direction: 'sa-bh', to: 'Juffair, Manama, Bahrain' } },
    { name: 'Other Bahrain address', tag: 'Custom destination', text: 'Anywhere else in Bahrain - type the address in the quote form and we confirm the option.', set: { direction: 'sa-bh', to: '' } },
];

const SAUDI_PLACES: Place[] = [
    { name: 'Al Khobar', tag: 'Closest major city', text: 'The Causeway starts just outside Al Khobar, so the Saudi-side drive is the shortest from here.', set: { direction: 'sa-bh', from: 'Al Khobar' }, link: { label: 'Al Khobar → Bahrain route', href: '/routes/khobar-bahrain/' } },
    { name: 'Dammam', tag: 'City and airport pickups', text: 'North of Al Khobar. Pickups from the city or straight from King Fahd International Airport (DMM).', set: { direction: 'sa-bh', from: 'Dammam' }, link: { label: 'Dammam → Bahrain route', href: '/routes/dammam-bahrain/' } },
    { name: 'Riyadh', tag: 'Long-distance journey', text: 'A long drive across to the Eastern Province before reaching the Causeway - plan it as a full travel day.', set: { direction: 'sa-bh', from: 'Riyadh' }, link: { label: 'Riyadh → Bahrain route', href: '/routes/riyadh-bahrain/' } },
    { name: 'Other Eastern Province', tag: 'Check availability', text: 'Dhahran, Jubail, Qatif or elsewhere nearby - send the address and we confirm whether we can arrange it.', set: { direction: 'sa-bh', from: '' } },
];

const faqs = [
    { q: 'Can a private taxi cross King Fahd Causeway?', a: 'Only a vehicle and driver that meet the current cross-border requirements can. When you request a quote we confirm whether an eligible vehicle is available for your route and date.' },
    { q: 'Do I need a visa to enter Bahrain?', a: 'It depends on your nationality, residency status and the purpose of your trip. There is no single rule for everyone - check the Bahrain eVisa portal or the relevant authorities before you travel.' },
    { q: 'Will I change vehicles at the Causeway?', a: 'That depends on the vehicle confirmed for your booking and current border requirements. Your quote states whether the journey continues in one vehicle.' },
    { q: 'How long does the Causeway crossing take?', a: 'The bridge itself is about 25 km, but border processing time varies with traffic, date, time and the authorities’ procedures. Neither the driver nor we control it, so plan with a buffer.' },
    { q: 'Are Causeway tolls included?', a: 'Any applicable Causeway or border-related vehicle charges are explained in your quotation, so you know what the price covers before you book.' },
    { q: 'Can I travel from Bahrain to Saudi Arabia?', a: 'Yes, where the requested route and vehicle are operationally supported. Choose "Bahrain → Saudi" on the quote form.' },
    { q: 'Can I travel from Riyadh to Bahrain?', a: 'Yes - see the Riyadh to Bahrain route page for the journey details.' },
    { q: 'Can I travel from Dammam Airport to Bahrain?', a: 'Yes - see the Dammam Airport to Manama and airport-to-airport route pages. Add your flight number when you book.' },
    { q: 'Can I book a same-day return?', a: 'Subject to availability. Waiting time and the return pickup must be agreed when you book.' },
    { q: 'Can I take a large family vehicle across the Causeway?', a: 'Subject to vehicle availability and cross-border eligibility for that vehicle. Send your passenger and luggage numbers and we confirm the option.' },
    { q: 'What documents should I carry?', a: 'A valid passport, any Bahrain visa or entry permission that applies to you, and Saudi residency or visa documents where relevant. Requirements change - confirm with the official Saudi and Bahrain authorities before travelling.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private transfers via King Fahd Causeway',
            url: PAGE_URL,
            serviceType: 'Pre-booked cross-border private transfer',
            description: 'Pre-booked private transfers between Saudi Arabia and Bahrain via King Fahd Causeway, with route, vehicle and border-preparation guidance.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: [
                { '@type': 'Country', name: 'Saudi Arabia' },
                { '@type': 'Country', name: 'Bahrain' },
            ],
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const eyebrow = 'text-xs font-bold uppercase tracking-[0.2em]';
const link = 'font-semibold text-[#0f5e6e] hover:underline';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

// Illustration (not a photo): late-afternoon Gulf light, the Causeway's low spans and the twin towers
// on the border island, with a car crossing from the Saudi side.
function BridgeScene({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 520" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="cw-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#06232b" />
                    <stop offset="0.62" stopColor="#15505a" />
                    <stop offset="0.9" stopColor="#e9b872" stopOpacity="0.85" />
                </linearGradient>
                <linearGradient id="cw-sea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#0f4c57" />
                    <stop offset="1" stopColor="#06232b" />
                </linearGradient>
            </defs>
            <rect width="1440" height="420" fill="url(#cw-sky)" />
            <circle cx="1080" cy="392" r="46" fill="#f4d19a" fillOpacity="0.55" />
            <rect y="410" width="1440" height="110" fill="url(#cw-sea)" />
            <path d="M960 430 H 1200" stroke="#f4d19a" strokeOpacity="0.35" strokeWidth="3" strokeDasharray="30 18" />
            <g fill="#041a20">
                {/* Saudi shore and Bahrain shore */}
                <path d="M0 410 H 120 L 150 402 H 0 Z" />
                <path d="M1300 402 L 1330 410 H 1440 V 400 Z" />
                {/* Border island with twin towers */}
                <path d="M640 410 C 660 396, 800 396, 820 410 Z" />
                <path d="M700 402 V 318 L 706 304 L 712 318 V 402 Z M748 402 V 318 L 754 304 L 760 318 V 402 Z" />
                <rect x="694" y="326" width="24" height="10" rx="3" />
                <rect x="742" y="326" width="24" height="10" rx="3" />
                {/* Deck and piers */}
                <path d="M0 398 H 640 M820 398 H 1440" stroke="#041a20" strokeWidth="6" />
                <path d="M300 398 Q 400 360, 500 398" fill="none" stroke="#041a20" strokeWidth="6" />
                {Array.from({ length: 28 }, (_, i) => i * 50 + 20).filter((x) => x < 640 || x > 820).map((x) => <rect key={x} x={x} y="398" width="5" height="16" />)}
            </g>
            {/* Car crossing */}
            <g className="deck-drive">
                <path d="M60 396 v -8 l 6 -7 h 18 l 7 7 h 5 v 8 z" fill="#e9b872" />
            </g>
        </svg>
    );
}

export default function KingFahdCausewayPage() {
    return (
        <div className="causeway-page bg-[#f7f3ec]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#06232b]">
                <BridgeScene className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06232b] via-[#06232b]/70 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.92fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-10 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className={`${eyebrow} text-[#e9b872] mb-5`}>Saudi Arabia ⇄ Bahrain</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5">King Fahd Causeway Private Transfer &amp; Border Crossing Guide</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
                            Plan a private door-to-door journey between Saudi Arabia and Bahrain via King Fahd Causeway, with route-specific vehicle options, pickup coordination and practical border-crossing information.
                        </p>
                        <div className="hidden sm:flex flex-wrap gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#e9b872] text-[#06232b] hover:bg-[#f1c98c]">
                                <a href={QUOTE_HREF}>Get Cross-Border Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href="#how-it-works">How the crossing works</a>
                            </Button>
                        </div>
                    </div>
                    <div id="quote" className="scroll-mt-32">
                        <CausewayQuoteCard vehicleOptions={FIT_FLEET.map((v) => v.name)} whatsappHref={WHATSAPP_HREF} />
                    </div>
                </div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
                    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 backdrop-blur">
                        {[
                            ['Saudi ⇄ Bahrain', 'An international road journey'],
                            ['King Fahd Causeway', 'About 25 km between Al Khobar and Al Jasra'],
                            ['Private transfer', 'Door-to-door where operationally available'],
                            ['Border processing', 'Varies with traffic and the authorities'],
                        ].map(([t, d]) => (
                            <div key={t} className="bg-[#06232b]/70 p-4 sm:p-5">
                                <dt className="font-bold text-white text-sm sm:text-base">{t}</dt>
                                <dd className="text-xs sm:text-sm text-white/[0.65] mt-1">{d}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* ================= ONE JOURNEY, TWO COUNTRIES ================= */}
            <section id="how-it-works" aria-labelledby="one-journey" className="scroll-mt-24 bg-[#06232b] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12">
                    <div className="lg:sticky lg:top-32 self-start">
                        <p className={`${eyebrow} text-[#e9b872] mb-4`}>The whole trip, in order</p>
                        <h2 id="one-journey" className="text-3xl md:text-5xl font-extrabold mb-5">One Journey. Two Countries.</h2>
                        <p className="text-white/70 leading-relaxed mb-6">A Causeway transfer is one planned journey that passes through two sets of border procedures. The road is the part we drive; the border is the part the authorities run.</p>
                        <p className="text-sm text-white/[0.55]">Travelling the other way? The same steps apply in reverse, from Bahrain into Saudi Arabia.</p>
                    </div>
                    <RouteJourney stops={JOURNEY} vehicle palette="gulf" />
                </div>
            </section>

            {/* ================= THREE PARTS ================= */}
            <section aria-labelledby="three-parts" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <p className={`${eyebrow} text-[#0f5e6e] mb-4`}>The Causeway is part of the journey</p>
                    <h2 id="three-parts" className="text-3xl md:text-5xl font-extrabold text-[#06232b] mb-4">Your Total Journey Has Three Parts</h2>
                    <p className="text-slate-600 max-w-2xl mb-10">Pickup, the drive to the Causeway, Saudi procedures, the crossing, Bahrain procedures and the final drive all add up. That is why no honest page can give you one fixed door-to-door time.</p>

                    <div className="mb-10 rounded-2xl bg-white border border-[#06232b]/10 p-5 sm:p-6" aria-hidden="true">
                        <div className="flex h-4 w-full overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full w-[30%] bg-[#0f5e6e]" />
                            <div className="var-time h-full bg-[repeating-linear-gradient(45deg,#e9b872_0_8px,#f1cf9c_8px_16px)]" />
                            <div className="h-full flex-1 bg-[#06232b]" />
                        </div>
                        <div className="mt-3 flex justify-between text-xs font-semibold text-slate-500">
                            <span>Road to the Causeway</span><span>Border processing - length varies</span><span>Final transfer</span>
                        </div>
                    </div>

                    <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { n: '01', t: 'Road journey', s: 'Pickup → Causeway', d: ['Your starting city', 'Traffic', 'Departure time', 'Exact address'] },
                            { n: '02', t: 'Border processing', s: 'Saudi departure + Bahrain entry', d: ['Passenger documents', 'Vehicle requirements', 'Traffic and day of the week', 'The authorities’ procedures', 'Conditions on the day'], hl: true },
                            { n: '03', t: 'Final transfer', s: 'Causeway → your destination', d: ['Where in Bahrain (or Saudi) you are going', 'Local traffic'] },
                        ].map((p, i) => (
                            <li key={p.n}>
                                <Reveal delay={i * 90} className="h-full">
                                    <div className={`h-full rounded-2xl p-6 ${p.hl ? 'bg-[#06232b] text-white' : 'bg-white border border-[#06232b]/10'}`}>
                                        <p className={`text-sm font-bold mb-3 ${p.hl ? 'text-[#e9b872]' : 'text-[#0f5e6e]'}`}>{p.n}</p>
                                        <h3 className="mb-1">{p.t}</h3>
                                        <p className={`text-sm mb-4 ${p.hl ? 'text-white/70' : 'text-slate-500'}`}>{p.s}</p>
                                        <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${p.hl ? 'text-white/60' : 'text-slate-400'}`}>Depends on</p>
                                        <ul className={`space-y-1.5 text-sm ${p.hl ? 'text-white/[0.85]' : 'text-slate-700'}`}>
                                            {p.d.map((x) => <li key={x} className="flex gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#e9b872] shrink-0" aria-hidden="true" />{x}</li>)}
                                        </ul>
                                    </div>
                                </Reveal>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ================= BORDER TIMELINE ================= */}
            <section aria-labelledby="timeline" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 id="timeline" className="text-3xl md:text-5xl font-extrabold text-[#06232b] mb-4">What Happens at the Causeway?</h2>
                    <p className="text-slate-600 mb-10">Tap a step for more. Border processing is handled by the relevant authorities; the driver looks after the vehicle side where applicable, but passenger entry decisions remain with immigration.</p>
                    <ol className="relative border-l-2 border-[#0f5e6e]/20 ml-4 space-y-3">
                        {[
                            ['Pickup in Saudi Arabia or Bahrain', 'The driver meets you at the agreed pickup point with the vehicle confirmed in your booking.'],
                            ['Drive toward the Causeway', 'From Al Khobar this is short; from Dammam or DMM a little longer; from Riyadh it is most of the day’s driving.'],
                            ['Saudi departure procedures', 'Passport and exit procedures with the Saudi authorities, plus vehicle-side procedures handled by the driver where applicable.'],
                            ['Causeway crossing', 'The crossing continues over the water. The border facilities sit on the island in the middle of the Causeway.'],
                            ['Bahrain entry procedures', 'Passport and entry procedures with the Bahrain authorities. Whether you are admitted is their decision.'],
                            ['Continue to your destination', 'The final drive to your hotel, address or airport.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="pl-8 relative">
                                <span className="absolute -left-[17px] top-3 w-8 h-8 rounded-full bg-[#06232b] text-[#e9b872] text-sm font-bold flex items-center justify-center" aria-hidden="true">{i + 1}</span>
                                <details className="group rounded-xl border border-[#06232b]/10 bg-[#f7f3ec] open:bg-white">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-bold text-[#06232b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5e6e] rounded-xl [&::-webkit-details-marker]:hidden">
                                        <span><span className="sr-only">Step {i + 1}: </span>{t}</span>
                                        <ArrowDown className="w-4 h-4 shrink-0 text-[#0f5e6e] transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
                                    </summary>
                                    <p className="px-5 pb-4 text-slate-600">{d}</p>
                                </details>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ================= MAP + ROUTE NETWORK ================= */}
            <section aria-labelledby="routes" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-center mb-12">
                        <div>
                            <p className={`${eyebrow} text-[#0f5e6e] mb-4`}>The route network</p>
                            <h2 id="routes" className="text-3xl md:text-5xl font-extrabold text-[#06232b] mb-4">Where Are You Starting?</h2>
                            <p className="text-slate-600">This page covers the crossing itself. Each route page covers its own pickup details, vehicles and pricing - pick yours below.</p>
                        </div>
                        <div className="relative rounded-3xl bg-[#e8f0ef] overflow-hidden">
                            <CausewayMap className="w-full h-auto" />
                            <p className="absolute top-2 right-4 text-[11px] text-slate-500">Schematic, not to scale</p>
                        </div>
                    </div>
                    <CausewayRoutePicker saudi={SAUDI_START} bahrain={BAHRAIN_START} />
                </div>
            </section>

            {/* ================= DOCUMENTS ================= */}
            <section aria-labelledby="documents" className="bg-[#06232b] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <FileText className="w-7 h-7 text-[#e9b872] mb-5" aria-hidden="true" />
                    <h2 id="documents" className="text-3xl md:text-5xl font-extrabold mb-5">What Should Passengers Prepare?</h2>
                    <div className="rounded-2xl border border-[#e9b872]/50 bg-[#e9b872]/10 p-5 mb-8 flex gap-3">
                        <AlertTriangle className="w-5 h-5 text-[#e9b872] shrink-0 mt-0.5" aria-hidden="true" />
                        <p className="text-white/90 leading-relaxed">Entry requirements depend on nationality, residency status, destination and current regulations. Check the official Saudi and Bahrain authorities before travelling.</p>
                    </div>
                    <details open className="group rounded-2xl border border-white/[0.15] p-5 sm:p-6">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e9b872] rounded-lg [&::-webkit-details-marker]:hidden">
                            Document checklist
                            <ArrowDown className="w-4 h-4 text-[#e9b872] transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
                        </summary>
                        <div className="mt-5">
                            <TickList
                                tone="dark"
                                label="Passenger documents"
                                items={[
                                    'Valid passport',
                                    'Required Saudi documents (visa or residency)',
                                    'Bahrain visa or entry permission, where applicable',
                                    'Residency documentation, where applicable',
                                    'Vehicle or travel documents, where applicable',
                                    'Any other authorisation your journey needs',
                                ]}
                            />
                        </div>
                    </details>
                    <div className="mt-8">
                        <p className="text-sm font-bold text-white/70 mb-3">Official sources</p>
                        <ul className="flex flex-wrap gap-2">
                            {OFFICIAL.map((o) => (
                                <li key={o.href}>
                                    <a href={o.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold hover:border-[#e9b872] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e9b872]">
                                        {o.label} <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= RESPONSIBILITIES ================= */}
            <section aria-labelledby="who-does-what" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="who-does-what" className="text-3xl md:text-5xl font-extrabold text-[#06232b] mb-4">Who Is Responsible for What?</h2>
                    <p className="text-slate-600 max-w-2xl mb-10">Three parties are involved in every crossing. Knowing which is which avoids most surprises.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { i: UserRound, t: 'Passenger', items: ['Passport', 'Visa or entry permission', 'Residency documents', 'Personal belongings', 'Immigration eligibility'] },
                            { i: Car, t: 'Transport provider', items: ['The vehicle and driver', 'Booking coordination', 'Agreed pickup and drop-off', 'Vehicle documentation for the confirmed vehicle', 'Cross-border arrangements for that vehicle'], hl: true },
                            { i: Landmark, t: 'Border authorities', items: ['Immigration and entry decisions', 'Customs', 'Vehicle checks', 'Processing times'] },
                        ].map((c, k) => (
                            <Reveal key={c.t} delay={k * 90} className="h-full">
                                <div className={`h-full rounded-2xl p-7 ${c.hl ? 'bg-[#06232b] text-white' : 'bg-white border border-[#06232b]/10'}`}>
                                    <c.i className={`w-6 h-6 mb-4 ${c.hl ? 'text-[#e9b872]' : 'text-[#0f5e6e]'}`} aria-hidden="true" />
                                    <h3 className="mb-4">{c.t}</h3>
                                    <ul className={`space-y-2.5 text-sm ${c.hl ? 'text-white/[0.85]' : 'text-slate-700'}`}>
                                        {c.items.map((x) => <li key={x} className="flex gap-2.5"><Check className={`w-4 h-4 mt-0.5 shrink-0 ${c.hl ? 'text-[#e9b872]' : 'text-[#0f5e6e]'}`} aria-hidden="true" />{x}</li>)}
                                    </ul>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= VEHICLE ELIGIBILITY / SAME CAR / DOOR-TO-DOOR ================= */}
            <section aria-label="Vehicles at the border" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <ShieldCheck className="w-7 h-7 text-[#0f5e6e] mb-5" aria-hidden="true" />
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#06232b] mb-4">Can Every Taxi Cross the Causeway?</h2>
                        <p className="text-slate-600 leading-relaxed mb-5">No. Whether a vehicle can make the crossing depends on several things, which is why we confirm the vehicle for each cross-border booking rather than sending any available car:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                            {['Vehicle registration', 'Applicable insurance', 'Commercial or private-use status', 'Cross-border authorisation', 'Driver documentation', 'Current Causeway requirements', 'Destination-country requirements'].map((x) => (
                                <li key={x} className="flex gap-2.5 rounded-lg bg-[#f7f3ec] px-3 py-2.5"><Info className="w-4 h-4 mt-0.5 text-[#0f5e6e] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <Car className="w-7 h-7 text-[#0f5e6e] mb-5" aria-hidden="true" />
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#06232b] mb-4">Will I Change Cars at the Border?</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">Where the vehicle and driver confirmed for your booking are eligible for the crossing, you stay in the same car from pickup to destination. This is not automatic for every vehicle or every date - your quote says whether your journey continues in one vehicle.</p>
                        <div className="space-y-4">
                            <div className="rounded-2xl border border-slate-200 p-5">
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">What people want to avoid</p>
                                <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
                                    {['Hotel', 'Taxi', 'Border', 'Another taxi', 'Destination'].map((s, i, a) => <span key={s} className="inline-flex items-center gap-2"><span className={s === 'Another taxi' ? 'line-through decoration-red-500' : ''}>{s}</span>{i < a.length - 1 && <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}</span>)}
                                </p>
                            </div>
                            <div className="rounded-2xl border-2 border-[#0f5e6e] p-5">
                                <p className="text-xs font-bold uppercase tracking-wider text-[#0f5e6e] mb-3">Where available</p>
                                <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-bold text-[#06232b]">
                                    {['Home / hotel', 'Private vehicle', 'Causeway', 'Destination'].map((s, i, a) => <span key={s} className="inline-flex items-center gap-2">{s}{i < a.length - 1 && <ArrowRight className="w-4 h-4 text-[#0f5e6e]" aria-hidden="true" />}</span>)}
                                </p>
                                <p className="text-xs text-slate-500 mt-3">Cross-border vehicle continuity depends on current vehicle, driver and border requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= TIMING ================= */}
            <section aria-labelledby="timing" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
                    <div>
                        <Clock className="w-7 h-7 text-[#0f5e6e] mb-5" aria-hidden="true" />
                        <h2 id="timing" className="text-3xl md:text-5xl font-extrabold text-[#06232b] mb-4">How Long Can the Border Take?</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">There is no fixed answer, and we would rather not invent one. Processing time changes with:</p>
                        <ul className="flex flex-wrap gap-2">
                            {['Day of the week', 'Public holidays', 'Traffic', 'Passenger volume', 'Immigration procedures', 'Customs procedures', 'Vehicle processing', 'Individual passenger circumstances'].map((x) => (
                                <li key={x} className="rounded-full bg-white border border-[#06232b]/10 px-4 py-2 text-sm font-semibold text-[#06232b]">{x}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-slate-500 mt-6">The King Fahd Causeway Authority publishes live updates on its <a href="https://kfca.sa/en/" target="_blank" rel="noopener noreferrer" className={link}>official website<span className="sr-only"> (opens in a new tab)</span></a>.</p>
                    </div>
                    <div className="rounded-3xl bg-[#06232b] text-white p-7 self-start">
                        <CalendarDays className="w-6 h-6 text-[#e9b872] mb-4" aria-hidden="true" />
                        <h3 className="mb-4">Travelling on busy days?</h3>
                        <ul className="space-y-3 text-white/80">
                            {['Allow extra buffer around weekends and public holidays.', 'Don’t book a flight that leaves soon after an estimated crossing time.', 'Tell us if you have a fixed appointment on the other side.', 'Keep return journeys flexible where you can.'].map((x) => <li key={x} className="flex gap-3"><Check className="w-4 h-4 mt-1 text-[#e9b872] shrink-0" aria-hidden="true" />{x}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= AIRPORTS ================= */}
            <section aria-labelledby="airports" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Plane className="w-7 h-7 text-[#0f5e6e] mb-5" aria-hidden="true" />
                    <h2 id="airports" className="text-3xl md:text-5xl font-extrabold text-[#06232b] mb-10">Airport ↔ Causeway ↔ Final Destination</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            { code: 'DMM → Bahrain', steps: ['Dammam Airport', 'Causeway', 'Manama / Muharraq / Riffa / other'], links: [['Dammam Airport → Manama', '/routes/dammam-airport-to-manama-taxi/'], ['Dammam Airport → Bahrain Airport', '/routes/dammam-airport-to-bahrain-airport-taxi/']] },
                            { code: 'BAH → Saudi Arabia', steps: ['Bahrain Airport', 'Causeway', 'Al Khobar / Dammam / Riyadh / other'], links: [['Bahrain Airport → Dammam Airport', '/routes/bahrain-airport-to-dammam-airport-taxi/'], ['Manama → Dammam Airport', '/routes/manama-to-dammam-airport-taxi/']] },
                        ].map((a) => (
                            <div key={a.code} className="rounded-2xl border border-[#06232b]/10 bg-[#f7f3ec] p-7">
                                <h3 className="text-[#06232b] mb-5">{a.code}</h3>
                                <ol className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3 mb-6">
                                    {a.steps.map((s, i) => (
                                        <li key={s} className="flex items-center gap-3">
                                            <span className={`rounded-lg px-3 py-2 text-sm font-semibold ${i === 1 ? 'bg-[#e9b872] text-[#06232b]' : 'bg-white text-[#06232b] border border-[#06232b]/10'}`}>{s}</span>
                                            {i < a.steps.length - 1 && <ArrowRight className="hidden sm:block w-4 h-4 text-[#0f5e6e]" aria-hidden="true" />}
                                        </li>
                                    ))}
                                </ol>
                                <div className="flex flex-wrap gap-x-5 gap-y-2">
                                    {a.links.map(([l, h]) => <Link key={h} href={h} className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#06232b]">{l} <Arrow /></Link>)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-slate-500 mt-5">Add your flight number on the quote form. With a flight at the end of the journey, plan the pickup time with a generous border buffer.</p>
                </div>
            </section>

            {/* ================= PLACES ================= */}
            <section aria-labelledby="bahrain-places" className="bg-[#06232b] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-20">
                    <div>
                        <h2 id="bahrain-places" className="text-3xl md:text-5xl font-extrabold mb-8">Where in Bahrain?</h2>
                        <PlacePicker places={BAHRAIN_PLACES} label="Bahrain destinations" tone="dark" />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Where Are You Starting in Saudi Arabia?</h2>
                        <PlacePicker places={SAUDI_PLACES} label="Saudi pickup areas" tone="dark" />
                    </div>
                </div>
            </section>

            {/* ================= FAMILY / GROUP ================= */}
            <section aria-labelledby="family" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Users className="w-7 h-7 text-[#0f5e6e] mb-5" aria-hidden="true" />
                    <h2 id="family" className="text-3xl md:text-5xl font-extrabold text-[#06232b] mb-4">Crossing With Family or Luggage?</h2>
                    <p className="text-slate-600 max-w-2xl mb-8">The right vehicle depends on passengers, suitcases, child seats and comfort - and on which vehicles are eligible for the crossing on your date. Here is what has the room; we confirm cross-border availability with your quote.</p>
                    <CausewayVehicleFit fleet={FIT_FLEET} />
                </div>
            </section>

            {/* ================= BUSINESS + SAME-DAY RETURN ================= */}
            <section aria-label="Business travel and same-day returns" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <Briefcase className="w-7 h-7 text-[#0f5e6e] mb-5" aria-hidden="true" />
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#06232b] mb-4">Saudi–Bahrain Business Travel</h2>
                        <ul className="space-y-2.5 text-slate-700 mb-6">
                            {['Saudi office → Bahrain meeting', 'Bahrain → Eastern Province', 'Dammam Airport → Bahrain hotel', 'Same-day return', 'Executive travel', 'Corporate visitors'].map((x) => <li key={x} className="flex gap-3"><Building2 className="w-4 h-4 mt-1 text-[#0f5e6e] shrink-0" aria-hidden="true" />{x}</li>)}
                        </ul>
                        <p className="text-slate-600 mb-5">Give the building, meeting time and a contact name for the guest. For regular company travel or a premium vehicle:</p>
                        <div className="flex flex-wrap gap-x-5 gap-y-2">
                            <Link href="/services/business/" className="group inline-flex items-center gap-2 font-bold text-[#06232b]">Business chauffeur <Arrow /></Link>
                            <Link href="/services/vip-chauffeur/" className={link}>VIP chauffeur</Link>
                        </div>
                    </div>
                    <div className="rounded-3xl bg-[#f7f3ec] p-7">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#06232b] mb-6">Going to Bahrain and Returning the Same Day?</h2>
                        <ol className="relative border-l-2 border-dashed border-[#0f5e6e]/30 ml-2 space-y-4 mb-6">
                            {['Morning Saudi pickup', 'Causeway', 'Bahrain meeting', 'Waiting / agreed schedule', 'Causeway', 'Return in Saudi Arabia'].map((s, i) => (
                                <li key={i} className="pl-6 relative">
                                    <span className={`absolute -left-[7px] top-1.5 w-3 h-3 rounded-full ${s === 'Causeway' ? 'bg-[#e9b872]' : 'bg-[#06232b]'}`} aria-hidden="true" />
                                    <span className="font-semibold text-[#06232b]">{s}</span>
                                </li>
                            ))}
                        </ol>
                        <p className="text-sm text-slate-600">Return waiting and vehicle availability must be agreed when you book. A same-day return is not always possible, and two border crossings in one day need a generous schedule.</p>
                    </div>
                </div>
            </section>

            {/* ================= PRIVATE VS SELF-DRIVE ================= */}
            <section aria-labelledby="self-drive" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 id="self-drive" className="text-3xl md:text-5xl font-extrabold text-[#06232b] mb-4">Private Transfer or Drive Yourself?</h2>
                    <p className="text-slate-600 max-w-2xl mb-10">Neither is better for everyone. It depends on what you need on the other side.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { t: 'Private transfer', i: ['You can focus on the journey, not the road', 'No driving after the crossing', 'Pickup arranged in advance', 'Vehicle and driver coordination handled for you'] },
                            { t: 'Self-drive', i: ['You control when you leave', 'You are responsible for the vehicle', 'You handle border and vehicle requirements', 'You drive and park after arrival'] },
                        ].map((c) => (
                            <div key={c.t} className="rounded-2xl bg-white border border-[#06232b]/10 p-7">
                                <h3 className="text-[#06232b] mb-4">{c.t}</h3>
                                <ul className="space-y-2.5 text-slate-700">{c.i.map((x) => <li key={x} className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0f5e6e] shrink-0" aria-hidden="true" />{x}</li>)}</ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= DRIVER CAN / CANNOT ================= */}
            <section aria-labelledby="driver" className="bg-[#06232b] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 id="driver" className="text-3xl md:text-5xl font-extrabold mb-10">What the Driver Can and Cannot Do</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-white/[0.15] p-7">
                            <p className={`${eyebrow} text-[#e9b872] mb-5`}>The driver can</p>
                            <ul className="space-y-3 text-white/[0.85]">
                                {['Provide the booked transportation', 'Help with normal journey coordination', 'Point you toward the applicable process where appropriate', 'Handle vehicle-side requirements within their role'].map((x) => <li key={x} className="flex gap-3"><Check className="w-5 h-5 text-[#e9b872] shrink-0" aria-hidden="true" />{x}</li>)}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-white/[0.15] p-7">
                            <p className={`${eyebrow} text-white/60 mb-5`}>The driver cannot</p>
                            <ul className="space-y-3 text-white/[0.85]">
                                {['Guarantee immigration approval', 'Guarantee border processing time', 'Approve visas', 'Override customs', 'Guarantee entry into Bahrain or Saudi Arabia'].map((x) => <li key={x} className="flex gap-3"><X className="w-5 h-5 text-white/50 shrink-0" aria-hidden="true" />{x}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PRICING ================= */}
            <section aria-labelledby="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
                    <div>
                        <h2 id="pricing" className="text-3xl md:text-5xl font-extrabold text-[#06232b] mb-4">How Cross-Border Pricing Works</h2>
                        <p className="text-slate-600 mb-6">Every Causeway transfer is quoted for the journey you describe. The price depends on:</p>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            {['Pickup city', 'Destination', 'Vehicle', 'Passengers', 'Luggage', 'Date', 'One-way or return', 'Waiting requirements', 'Special vehicle requirements', 'Cross-border arrangements'].map((x) => (
                                <li key={x} className="rounded-lg bg-white border border-[#06232b]/10 px-3 py-2.5 font-semibold text-[#06232b]">{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4 self-start">
                        <div className="rounded-2xl bg-white border border-[#06232b]/10 p-7">
                            <h3 className="text-[#06232b] mb-2">Causeway fees</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Any applicable Causeway or border-related charges will be explained in your quotation. Passenger visa and personal immigration fees are not part of a transport fare.</p>
                        </div>
                        <div className="rounded-2xl bg-[#06232b] text-white p-7">
                            <h3 className="mb-2">Get a route-specific quote</h3>
                            <p className="text-white/70 text-sm mb-5">Each route page is the reference for its own journey. Or send your details and we quote directly.</p>
                            <Button asChild className="group h-auto py-3.5 px-6 rounded-xl font-bold bg-[#e9b872] text-[#06232b] hover:bg-[#f1c98c]">
                                <a href={QUOTE_HREF}>Get Cross-Border Quote <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" /></a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= BEFORE YOU BOOK ================= */}
            <section aria-labelledby="before" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <Route className="w-7 h-7 text-[#0f5e6e] mb-5" aria-hidden="true" />
                    <h2 id="before" className="text-3xl md:text-5xl font-extrabold text-[#06232b] mb-4">Before Your Causeway Journey</h2>
                    <p className="text-slate-600 mb-8">Your own checklist - ticks stay on this page and are not sent anywhere.</p>
                    <TickList
                        label="Before your Causeway journey"
                        items={[
                            'Passport and documents ready',
                            'Destination entry requirements checked',
                            'Passenger count confirmed',
                            'Luggage count confirmed',
                            'Right vehicle selected',
                            'Pickup address confirmed',
                            'Destination address confirmed',
                            'Flight or meeting time checked',
                            'Enough border-time buffer allowed',
                            'Return journey arranged, if needed',
                        ]}
                    />
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-extrabold text-[#06232b] mb-8">King Fahd Causeway Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#06232b]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#06232b] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <h2 id="related" className="sr-only">Related pages</h2>
                    {[
                        { t: 'Routes', l: [['Al Khobar → Bahrain', '/routes/khobar-bahrain/'], ['Dammam → Bahrain', '/routes/dammam-bahrain/'], ['DMM Airport → Bahrain', '/routes/dammam-airport-to-manama-taxi/'], ['Riyadh → Bahrain', '/routes/riyadh-bahrain/'], ['Bahrain → Dammam', '/routes/bahrain-dammam/'], ['Bahrain → Riyadh', '/routes/bahrain-riyadh/']] },
                        { t: 'Services', l: [['GCC cross-border chauffeur', '/services/gcc-chauffeur-service/'], ['VIP chauffeur', '/services/vip-chauffeur/'], ['Business chauffeur', '/services/business/'], ['Airport transfers', '/services/airport-transfers/']] },
                        { t: 'Cities', l: [['Al Khobar', '/locations/al-khobar/'], ['Dammam', '/locations/dammam/'], ['Riyadh', '/locations/riyadh/'], ['All border crossings', '/border-crossings/']] },
                    ].map((g) => (
                        <div key={g.t}>
                            <p className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">{g.t}</p>
                            <ul className="space-y-2">{g.l.map(([l, h]) => <li key={h}><Link href={h} className={link}>{l}</Link></li>)}</ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#06232b]">
                <BridgeScene className="absolute inset-0 -z-10 w-full h-full opacity-60" />
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Crossing the Causeway?</h2>
                    <p className="text-lg text-white/80 mb-3">Tell us where you&apos;re starting, where you&apos;re going, when, how many passengers and bags, and any vehicle preference.</p>
                    <p className="text-white/[0.65] mb-10">We&apos;ll confirm the available cross-border option and quote.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-[#e9b872] text-[#06232b] hover:bg-[#f1c98c]">
                            <a href={QUOTE_HREF}>Get Cross-Border Quote</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book on WhatsApp</a>
                        </Button>
                    </div>
                    <p className="text-xs text-white/[0.55] mt-8">Border entry and processing remain subject to the relevant authorities and current requirements.</p>
                </div>
            </section>
        </div>
    );
}
