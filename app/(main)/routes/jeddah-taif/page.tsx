import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Plane, Hotel, Mountain, CloudFog, Coffee, CalendarDays, Users, Briefcase, Check, Minus, Info, Route, Flower2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';
import ClimbProfile from '@/components/jeddah-taif/ClimbProfile';
import TaifDestinationPicker from '@/components/jeddah-taif/TaifDestinationPicker';
import LuggageMatcher, { type RouteVehicle } from '@/components/jeddah-taif/LuggageMatcher';
import { JEDDAH_TAIF as R, JEDDAH_TAIF_TIME_NOTE } from '@/data/jeddahTaifRoute';
import { vehicles } from '@/lib/supabase';

const PAGE_URL = 'https://taxiserviceksa.com/routes/jeddah-taif/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for Jeddah to Taif. Pickup, destination (Taif city / Al Hada / Al Shafa), date, time, passengers and luggage: ')}`;
const JED = 'King Abdulaziz International Airport (JED)';
const q = (p: Record<string, string>) => `/booking/?${new URLSearchParams(p).toString()}`;

export const metadata: Metadata = {
    title: 'Jeddah to Taif Private Transfer | Al Hada Mountain Route',
    description: 'Book a private Jeddah to Taif transfer with direct pickup from Jeddah or KAIA. Travel to Taif, Al Hada or Shafa in a vehicle matched to your group and luggage.',
    alternates: {
        canonical: PAGE_URL,
        languages: {
            en: PAGE_URL,
            ar: 'https://taxiserviceksa.com/ar/routes/jeddah-taif/',
            'x-default': PAGE_URL,
        },
    },
    openGraph: {
        title: 'Jeddah to Taif Private Mountain Transfer',
        description: 'Private door-to-door transportation from Jeddah to Taif, Al Hada and surrounding mountain destinations.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private transfer from Jeddah to Taif' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jeddah to Taif Private Mountain Transfer',
        description: 'Private door-to-door transportation from Jeddah to Taif, Al Hada and surrounding mountain destinations.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

// Seats and luggage come from the booking system's vehicle list; the route object only says which vehicles run here.
const FLEET: RouteVehicle[] = R.vehicles.flatMap(({ name, cls }) => {
    const v = vehicles.find((x) => x.name === name);
    return v ? [{ name: v.name, cls, image: v.image, passengers: v.passengers, luggage: v.luggage }] : [];
});

const faqs = [
    { q: 'How far is Jeddah from Taif by road?', a: `About ${R.distance}. The exact distance varies with your pickup point in Jeddah, your destination in the Taif area and the road used.` },
    { q: 'How long does Jeddah to Taif take?', a: JEDDAH_TAIF_TIME_NOTE },
    { q: 'Which route does the car take?', a: `${R.corridorNote} The ${R.alternateCorridors[0]} road is the usual alternative.` },
    { q: 'Can I travel from Jeddah Airport to Taif?', a: 'Yes. Send your flight number and arrival time with the booking, along with your destination, passengers and luggage. Pickup instructions come with your confirmed booking.' },
    { q: 'Can I book Jeddah to Al Hada?', a: 'Yes. Give us the name of your hotel or resort in Al Hada and we drive you to it directly.' },
    { q: 'Can I book Jeddah to Shafa?', a: 'Yes. Al Shafa lies beyond Taif city, so it is a longer journey. Send the exact resort or a map pin so we can quote it properly.' },
    { q: 'Can I stop at Al Hada on the way?', a: 'Usually, if the car is taking the Al Hada road that day. Ask for the stop when you request your quote so it can be planned and priced in.' },
    { q: 'Can I book a return journey?', a: 'Yes. Tick the return option on the form and tell us the return date and time, the same day or later.' },
    { q: 'Can I book a Taif day trip from Jeddah?', a: 'Yes, as a return booking with planned stops and an agreed return time. Tell us the places you want to see so the day can be timed.' },
    { q: 'Which vehicle should I choose?', a: 'Go by passengers and luggage. The luggage matcher on this page shows which vehicles have room for your group.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Jeddah to Taif private transfer',
            url: PAGE_URL,
            serviceType: 'Pre-booked private intercity transfer',
            description: 'Pre-booked private door-to-door transfers from Jeddah and King Abdulaziz International Airport to Taif city, Al Hada and Al Shafa.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: [{ '@type': 'City', name: 'Jeddah' }, { '@type': 'City', name: 'Taif' }],
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const eyebrow = 'text-xs font-bold uppercase tracking-[0.22em]';
const link = 'font-semibold text-[#2f5d4b] hover:underline';
const qbtn = 'group inline-flex items-center gap-2 font-bold text-[#1f2a26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5d4b] rounded';
const solid = 'group inline-flex items-center gap-2 rounded-xl bg-[#1f2a26] px-5 py-3 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5d4b] focus-visible:ring-offset-2';
const h2 = 'text-3xl md:text-5xl font-extrabold text-[#1f2a26]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

// Illustration (not a photo): the Red Sea coast on the left, the climb with its bends, the highlands on the right.
function CoastToHighlands({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="jt-sky" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#1f2a26" />
                    <stop offset="0.6" stopColor="#2c4339" />
                    <stop offset="1" stopColor="#7fa58f" />
                </linearGradient>
            </defs>
            <rect width="1440" height="640" fill="url(#jt-sky)" />
            <circle cx="170" cy="470" r="52" fill="#e8c99a" fillOpacity="0.45" />
            {/* Sea */}
            <path d="M0 540 H 300 C 280 580, 270 610, 266 640 H 0 Z" fill="#3d7f8f" fillOpacity="0.55" />
            {/* Highlands */}
            <path d="M620 640 L 800 470 L 880 500 L 1000 360 L 1090 410 L 1200 280 L 1300 330 L 1440 240 V 640 Z" fill="#4f7662" />
            <path d="M260 640 L 300 560 L 640 548 L 820 520 L 980 440 L 1100 470 L 1240 360 L 1440 330 V 640 Z" fill="#365245" />
            {/* Road: flat along the coast, then the bends up the climb */}
            <path d="M300 590 L 640 578 C 720 574, 770 560, 800 540 C 830 520, 780 506, 830 488 C 890 466, 900 486, 940 462 C 990 432, 940 420, 1000 398 C 1070 372, 1080 392, 1130 364 C 1190 330, 1250 322, 1440 300" fill="none" stroke="#e8c99a" strokeWidth="3" strokeLinecap="round" pathLength={1} className="route-draw" />
        </svg>
    );
}

export default function JeddahTaifRoutePage() {
    return (
        <div className="jeddah-taif-page bg-[#f4f1ea]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#1f2a26]">
                <CoastToHighlands className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1f2a26] via-[#1f2a26]/50 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-10 animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className={`${eyebrow} text-[#a8c7b5] mb-5`}>Jeddah → Taif • Western Saudi Arabia</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5">Jeddah to Taif Private Mountain Transfer</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
                            Travel privately from Jeddah to Taif, Al Hada or nearby mountain destinations with a vehicle selected around your group and luggage.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#e8c99a] text-[#1f2a26] hover:bg-[#f0d9b5]">
                                <a href={QUOTE_HREF}>Plan My Taif Transfer <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Booking</a>
                            </Button>
                        </div>
                        <p className="text-sm text-white/60">Private door-to-door • Jeddah city or airport • Taif, Al Hada, Shafa</p>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Plan your Jeddah → Taif journey"
                            cta="Get a Quote"
                            fromPlaceholder="Jeddah hotel, home, office or airport"
                            toPlaceholder="Hotel, resort or address in the Taif area"
                            fromChips={['Jeddah city', JED, 'Jeddah hotel', 'Jeddah residence', 'Business address']}
                            toChips={['Taif city', 'Al Hada, Taif', 'Al Shafa, Taif', 'Taif hotel', 'Al Hada resort']}
                            showFlight="auto"
                            stop={{ label: 'Add a stop on the way', note: 'A stop on the way is requested (details in notes) - please plan and price it in.' }}
                            returnNote="Return trip Taif to Jeddah also needed - date and time to confirm."
                            buttonClass="bg-[#2f5d4b] hover:bg-[#244a3c] focus-visible:ring-[#2f5d4b]"
                        />
                        <p className="mt-3 text-xs text-white/60">Planning a day trip or several stops? Write the itinerary in the last field.</p>
                    </div>
                </div>
            </section>

            {/* ================= ROUTE FACTS ================= */}
            <section aria-labelledby="facts" className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-6xl mx-auto">
                    <h2 id="facts" className="sr-only">Route facts</h2>
                    <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {[
                            ['Distance', R.distance, 'Varies by pickup and destination'],
                            ['Estimated road time', R.roadTime, 'Depends on traffic and conditions'],
                            ['Route', R.primaryCorridor, 'Or an alternate road, by conditions'],
                            ['Service', 'Private', 'Door-to-door'],
                            ['Trip', 'One-way / return', 'Or a planned day trip'],
                            ['Vehicles', 'Sedan to group van', 'Matched to people and bags'],
                        ].map(([k, v, s]) => (
                            <div key={k} className="rounded-2xl bg-white border border-[#1f2a26]/10 p-4">
                                <dt className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">{k}</dt>
                                <dd className="font-bold text-[#1f2a26] leading-snug">{v}</dd>
                                <dd className="text-xs text-stone-500 mt-1">{s}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className="text-sm text-stone-600 mt-4">How these figures are worked out: <Link href={R.distanceHref} className={link}>Jeddah to Taif distance by road</Link>.</p>
                </div>
            </section>

            {/* ================= THE JOURNEY ================= */}
            <section aria-labelledby="journey" className="bg-white py-20 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <p className={`${eyebrow} text-[#2f5d4b] mb-4`}>Coast → climb → highlands</p>
                    <h2 id="journey" className={`${h2} mb-5`}>From Jeddah to the Taif Highlands</h2>
                    <p className="text-stone-600 leading-relaxed max-w-2xl mb-8">This route is short on the map and different in character: it starts at sea level on the Red Sea coast and ends on a mountain plateau. Most of the distance is flat; most of the change happens on the climb.</p>
                    <div className="rounded-3xl bg-[#f4f1ea] p-3 sm:p-5 mb-12">
                        <ClimbProfile className="w-full h-auto" />
                        <p className="text-right text-[11px] text-stone-500 mt-1">Illustration, not to scale</p>
                    </div>
                    <div className="rounded-3xl bg-[#082119] text-white p-7 md:p-10">
                        <RouteJourney
                            vehicle
                            palette="emerald"
                            stops={[
                                { title: 'Jeddah pickup', text: 'The driver collects you at your hotel, residence, office or King Abdulaziz International Airport.' },
                                { title: 'Mountain approach', text: 'The road leaves the coastal plain and climbs toward the Taif highlands. Which road is used depends on conditions on the day.', accent: true },
                                { title: 'Taif arrival', text: 'Drop-off at your door in Taif city, Al Hada or Al Shafa: a hotel, a resort or the address you gave us.' },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ================= AL HADA + ROUTE CHOICE + CONDITIONS ================= */}
            <section aria-labelledby="hada" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Mountain className="w-7 h-7 text-[#2f5d4b] mb-5" aria-hidden="true" />
                    <h2 id="hada" className={`${h2} mb-5`}>The Al Hada Mountain Route</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        <p className="text-stone-700 text-lg leading-relaxed">Al Hada is the mountain corridor that connects the western lowlands with Taif. The road climbs the escarpment in a long series of bends and arrives at Al Hada, on the edge of the plateau, before continuing to Taif city.</p>
                        <p className="rounded-2xl bg-white border-l-4 border-[#2f5d4b] p-5 text-stone-700">{R.corridorNote}</p>
                    </div>

                    <h3 className="text-[#1f2a26] mb-4">Which route will the driver take?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="rounded-2xl bg-white border border-[#1f2a26]/10 p-6">
                            <p className="text-lg font-bold text-[#1f2a26] mb-3">{R.primaryCorridor}</p>
                            <p className="text-sm text-stone-600 mb-3">May be used depending on:</p>
                            <ul className="flex flex-wrap gap-2">{['Your destination', 'Road status', 'Weather', 'Traffic'].map((x) => <li key={x} className="rounded-full bg-[#f4f1ea] px-3 py-1.5 text-sm text-[#1f2a26]">{x}</li>)}</ul>
                        </div>
                        <div className="rounded-2xl bg-white border border-[#1f2a26]/10 p-6">
                            <p className="text-lg font-bold text-[#1f2a26] mb-3">{R.alternateCorridors[0]}</p>
                            <p className="text-sm text-stone-600">May be used when the mountain road is unavailable or unsuitable on the day. It is a different approach to Taif, so the distance and timing are not the same.</p>
                        </div>
                    </div>
                    <p className="text-sm text-stone-600 mb-12">The route is decided from current road conditions and your booked destination. If you have a preference, tell us when you book.</p>

                    <div className="rounded-3xl bg-[#1f2a26] text-white p-7 md:p-9 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
                        <div>
                            <CloudFog className="w-7 h-7 text-[#a8c7b5] mb-4" aria-hidden="true" />
                            <h3 className="mb-3">Mountain road conditions matter</h3>
                            <p className="text-white/70 text-sm leading-relaxed">Travel time and route selection can change on the day. If you have a flight, a check-in time or an event in Taif, tell us so the pickup time leaves a margin.</p>
                        </div>
                        <ul className="grid grid-cols-2 gap-2 text-sm content-start">
                            {R.routeFactors.map((x) => <li key={x} className="flex gap-2.5 rounded-lg border border-white/[0.15] px-3 py-2.5 text-white/[0.85]"><Check className="w-4 h-4 mt-0.5 text-[#a8c7b5] shrink-0" aria-hidden="true" />{x}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= WHERE IN TAIF ================= */}
            <section aria-labelledby="where" className="bg-[#e7ede8] py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="where" className={`${h2} mb-4`}>Where Are You Going in Taif?</h2>
                    <p className="text-stone-700 max-w-2xl mb-8">&quot;Taif&quot; can mean the city, the top of the climb or the mountains beyond it. Pick one - it fills in the quote form and changes what we need from you.</p>
                    <TaifDestinationPicker />
                </div>
            </section>

            {/* ================= AIRPORT + HOTEL ================= */}
            <section aria-label="Airport and hotel transfers" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-5">
                    <Reveal className="h-full">
                        <article className="h-full rounded-3xl bg-[#1f2a26] text-white p-8 md:p-10">
                            <Plane className="w-7 h-7 text-[#e8c99a] mb-5" aria-hidden="true" />
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Jeddah Airport to Taif</h2>
                            <p className="text-white/75 leading-relaxed mb-6">A private pickup from King Abdulaziz International Airport straight to Taif, Al Hada, Al Shafa or your hotel or resort - no change of vehicle in Jeddah.</p>
                            <p className="text-sm font-bold text-[#e8c99a] mb-3">For an airport pickup, send:</p>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm mb-7">
                                {['Flight number', 'Arrival time', 'Passengers', 'Luggage', 'Destination'].map((x) => <li key={x} className="rounded-lg bg-white/[0.08] px-3 py-2.5">{x}</li>)}
                            </ul>
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                                <Link href={q({ from: JED, to: 'Taif' })} className="group inline-flex items-center gap-2 rounded-xl bg-[#e8c99a] px-5 py-3 font-bold text-[#1f2a26] hover:bg-[#f0d9b5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Quote airport → Taif <Arrow /></Link>
                                <Link href="/jeddah-airport-transfer/" className="font-semibold text-[#a8c7b5] hover:underline">Jeddah Airport transfers</Link>
                            </div>
                            <p className="text-xs text-white/50 mt-6">Pickup instructions come with your confirmed booking.</p>
                        </article>
                    </Reveal>
                    <Reveal className="h-full" delay={100}>
                        <article className="h-full rounded-3xl border border-[#1f2a26]/10 p-8">
                            <Hotel className="w-7 h-7 text-[#2f5d4b] mb-5" aria-hidden="true" />
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1f2a26] mb-5">Hotel-to-Hotel Taif Transfer</h2>
                            <ul className="space-y-2 mb-6">
                                {[['Jeddah hotel', 'Taif hotel'], ['Jeddah hotel', 'Al Hada resort'], ['Jeddah residence', 'Taif']].map(([a, b]) => (
                                    <li key={a + b} className="flex items-center gap-2 rounded-xl bg-[#f4f1ea] px-4 py-3 text-sm font-semibold text-[#1f2a26]">{a} <ArrowRight className="w-4 h-4 text-[#2f5d4b]" aria-hidden="true" /> {b}</li>
                                ))}
                            </ul>
                            <p className="text-sm text-stone-600 mb-5">Give us both names and the driver takes you door to door. Staying at Shaza Al Hada? It has its own page.</p>
                            <Link href="/routes/jeddah-to-shaza-al-hada-taif/" className={qbtn}>Jeddah → Shaza Al Hada <Arrow /></Link>
                        </article>
                    </Reveal>
                </div>
            </section>

            {/* ================= STOPS + DAY TRIP + COMPARISON ================= */}
            <section aria-labelledby="options" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
                        <div className="rounded-3xl bg-white border border-[#1f2a26]/10 p-8">
                            <Coffee className="w-7 h-7 text-[#2f5d4b] mb-5" aria-hidden="true" />
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1f2a26] mb-4">Want a Stop Along the Way?</h2>
                            <p className="text-stone-600 mb-4">Stops can be added when the trip is planned:</p>
                            <ul className="flex flex-wrap gap-2 mb-5">{['Food', 'Restroom', 'Viewpoint', 'Local market', 'A planned attraction'].map((x) => <li key={x} className="rounded-full bg-[#f4f1ea] px-3 py-1.5 text-sm text-[#1f2a26]">{x}</li>)}</ul>
                            <p className="text-sm text-stone-600 border-l-2 border-[#2f5d4b] pl-4">If you would like to stop at a market or viewpoint, mention it when requesting your quote so the itinerary can be planned accordingly. The quote states whether the stop changes the price.</p>
                        </div>
                        <div className="rounded-3xl bg-white border border-[#1f2a26]/10 p-8">
                            <CalendarDays className="w-7 h-7 text-[#2f5d4b] mb-5" aria-hidden="true" />
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1f2a26] mb-4">Jeddah → Taif Day Trip</h2>
                            <ol className="flex flex-wrap items-center gap-2 mb-5 text-sm font-semibold text-[#1f2a26]" aria-label="Day trip outline">
                                {['Jeddah pickup', 'Taif / Al Hada', 'Planned sightseeing', 'Return to Jeddah'].map((s, i, a) => (
                                    <li key={s} className="flex items-center gap-2"><span className="rounded-lg bg-[#f4f1ea] px-3 py-2">{s}</span>{i < a.length - 1 && <ArrowRight className="w-4 h-4 text-[#2f5d4b]" aria-hidden="true" />}</li>
                                ))}
                            </ol>
                            <p className="text-sm text-stone-600 mb-5">You choose the departure time, the return time, the vehicle and the stops. Time in Taif is whatever is agreed in the booking.</p>
                            <div className="flex flex-wrap gap-x-5 gap-y-3">
                                <Link href={q({ from: 'Jeddah', to: 'Taif', notes: 'Day trip with same-day return to Jeddah. Stops and return time: ' })} className={qbtn}>Plan a day trip <Arrow /></Link>
                                <Link href="/taif-day-trip/" className={link}>Taif day trip ideas</Link>
                            </div>
                        </div>
                    </div>

                    <h2 id="options" className="text-2xl md:text-3xl font-extrabold text-[#1f2a26] mb-5">One-Way, Return or Day Trip?</h2>
                    <div className="relative overflow-x-auto rounded-2xl border border-[#1f2a26]/10 bg-white">
                        <table className="w-full min-w-[560px] text-left text-sm">
                            <thead>
                                <tr className="bg-[#1f2a26] text-white">
                                    <th scope="col" className="px-4 py-3.5 font-bold">Need</th>
                                    <th scope="col" className="px-4 py-3.5 font-bold">One-way transfer</th>
                                    <th scope="col" className="px-4 py-3.5 font-bold">Return trip</th>
                                    <th scope="col" className="px-4 py-3.5 font-bold">Day trip</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#1f2a26]/10">
                                {([
                                    ['Jeddah → Taif', true, true, true],
                                    ['Taif → Jeddah', false, true, true],
                                    ['Driver waits', 'Optional', 'Optional', 'Planned'],
                                    ['Multiple sightseeing stops', 'Optional', 'Optional', true],
                                    ['Same-day return', false, true, true],
                                ] as [string, boolean | string, boolean | string, boolean | string][]).map(([k, ...cells]) => (
                                    <tr key={k}>
                                        <th scope="row" className="px-4 py-3.5 font-bold text-[#1f2a26]">{k}</th>
                                        {cells.map((c, i) => (
                                            <td key={i} className="px-4 py-3.5 text-stone-600">
                                                {c === true ? <><Check className="w-4 h-4 text-[#2f5d4b]" aria-hidden="true" /><span className="sr-only">Yes</span></> : c === false ? <><Minus className="w-4 h-4 text-stone-300" aria-hidden="true" /><span className="sr-only">No</span></> : c}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section aria-labelledby="vehicles" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className={`${h2} mb-4`}>Choose Your Vehicle Around Your Luggage</h2>
                    <p className="text-stone-600 max-w-2xl mb-8">Pick your group and bags. Vehicles with enough room stay highlighted.</p>
                    <LuggageMatcher fleet={FLEET} />
                    <p className="text-sm text-stone-500 mt-4">Vehicle availability is confirmed for your date. <Link href="/fleet/" className={link}>See the full fleet</Link>.</p>

                    <div className="mt-14 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
                        <h3 className="text-[#1f2a26]">Built for the climb and the journey</h3>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                            {['Climate control', 'Comfortable seating', 'Luggage space', 'A private vehicle', 'Rest stops, planned on request'].map((x) => <li key={x} className="rounded-lg bg-[#f4f1ea] px-3 py-2.5 text-[#1f2a26]">{x}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= QUOTE + FAMILY + BUSINESS ================= */}
            <section aria-labelledby="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="rounded-2xl bg-[#1f2a26] text-white p-7">
                        <h2 id="pricing" className="yanbu-card-title font-extrabold mb-4">Get Your Jeddah → Taif Quote</h2>
                        <p className="text-sm text-white/70 mb-4">There is no single fare for this route. The price depends on:</p>
                        <ul className="flex flex-wrap gap-2 mb-6">{R.priceFactors.map((x) => <li key={x} className="rounded-full bg-white/10 px-3 py-1.5 text-sm">{x}</li>)}</ul>
                        <Button asChild className="group h-auto py-3.5 px-6 rounded-xl font-bold bg-[#e8c99a] text-[#1f2a26] hover:bg-[#f0d9b5]">
                            <a href={QUOTE_HREF}>Get Jeddah → Taif Quote <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" /></a>
                        </Button>
                    </div>
                    <div className="rounded-2xl bg-white border border-[#1f2a26]/10 p-7">
                        <Users className="w-6 h-6 text-[#2f5d4b] mb-3" aria-hidden="true" />
                        <h2 className="yanbu-card-title font-extrabold text-[#1f2a26] mb-4">Traveling to Taif With Family?</h2>
                        <ul className="space-y-2 text-sm text-stone-700">
                            {['A private vehicle for your family only', 'Pickup at your door in Jeddah', 'Luggage counted before the vehicle is chosen', 'Child seat on request, where available', 'Drop-off at the hotel or resort entrance', 'Return journey booked at the same time'].map((x) => <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#2f5d4b] shrink-0" aria-hidden="true" />{x}</li>)}
                        </ul>
                    </div>
                    <div className="rounded-2xl bg-white border border-[#1f2a26]/10 p-7">
                        <Briefcase className="w-6 h-6 text-[#2f5d4b] mb-3" aria-hidden="true" />
                        <h2 className="yanbu-card-title font-extrabold text-[#1f2a26] mb-4">Jeddah ↔ Taif for Business</h2>
                        <ul className="space-y-2 text-sm text-stone-700 mb-5">
                            {['Hotel to a meeting in Taif', 'Jeddah office to Taif', 'Conference or event travel', 'Same-day return'].map((x) => <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#2f5d4b] shrink-0" aria-hidden="true" />{x}</li>)}
                        </ul>
                        <p className="text-sm text-stone-600">Several meetings in one day? See the <Link href="/services/private-driver/" className={link}>private driver service</Link>.</p>
                    </div>
                </div>
            </section>

            {/* ================= PLANNING + TOURISM ================= */}
            <section aria-labelledby="planning" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <Route className="w-7 h-7 text-[#2f5d4b] mb-5" aria-hidden="true" />
                        <h2 id="planning" className="text-3xl md:text-4xl font-extrabold text-[#1f2a26] mb-4">Planning Your Mountain Journey</h2>
                        <p className="text-stone-600 leading-relaxed mb-5">{JEDDAH_TAIF_TIME_NOTE}</p>
                        <p className="flex gap-3 rounded-xl bg-[#f4f1ea] p-4 text-sm text-stone-700"><Info className="w-4 h-4 mt-0.5 text-[#2f5d4b] shrink-0" aria-hidden="true" />Mountain conditions can affect the route, visibility, travel time and where a stop makes sense. For a fixed appointment in Taif, leave a margin.</p>
                    </div>
                    <div className="rounded-3xl border border-[#1f2a26]/10 p-8">
                        <Flower2 className="w-7 h-7 text-[#b4526f] mb-5" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1f2a26] mb-4">Making Taif More Than a Transfer</h2>
                        <p className="text-stone-600 mb-5">Rose-season visits, mountain sightseeing, Al Hada, Al Shafa and the city itself. Rose farms and the cable car keep their own seasons, hours and tickets, which are separate from the transfer.</p>
                        <div className="flex flex-wrap gap-x-5 gap-y-3">
                            <Link href="/locations/taif/" className={qbtn}>Transport in Taif <Arrow /></Link>
                            <Link href="/taif-day-trip/" className={link}>Taif day trip</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-extrabold text-[#1f2a26] mb-8">Common Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#1f2a26]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#1f2a26] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#1f2a26] mb-6">Related Pages</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Taif → Jeddah (return route)', R.reverseHref],
                            ['Transport in Jeddah', '/locations/jeddah/'],
                            ['Transport in Taif', '/locations/taif/'],
                            ['Jeddah Airport transfers', '/jeddah-airport-transfer/'],
                            ['Al Hada transfers', '/locations/taif/al-hada/'],
                            ['Al Shafa transfers', '/locations/taif/al-shafa/'],
                            ['Jeddah → Shaza Al Hada', '/routes/jeddah-to-shaza-al-hada-taif/'],
                            ['Taif day trip', '/taif-day-trip/'],
                            ['Private driver', '/services/private-driver/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#1f2a26]/[0.15] px-4 py-2.5 text-sm font-semibold text-[#1f2a26] hover:border-[#2f5d4b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f5d4b]">{l}</Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#1f2a26]">
                <CoastToHighlands className="absolute inset-0 -z-10 w-full h-full opacity-50" />
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Ready for the Drive Up to Taif?</h2>
                    <p className="text-lg text-white/80 mb-10">Send your Jeddah pickup, where in the Taif area you are going, the date, passengers and luggage. You get the vehicle and the price back before anything is confirmed.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-[#e8c99a] text-[#1f2a26] hover:bg-[#f0d9b5]">
                            <a href={QUOTE_HREF}>Get Jeddah → Taif Quote</a>
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
