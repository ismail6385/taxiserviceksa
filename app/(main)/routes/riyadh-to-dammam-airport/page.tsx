import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Info, Plane, Clock, Luggage, Users, Briefcase, CalendarClock } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';

const PAGE_URL = 'https://taxiserviceksa.com/routes/riyadh-to-dammam-airport/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const DMM = 'King Fahd International Airport (DMM)';
const RUH = 'King Khalid International Airport (RUH)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need a transfer from Riyadh to Dammam Airport (DMM). Pickup address, date, flight time, passengers and luggage: ')}`;

const FARES = [
    { name: 'Sedan', booking: 'Toyota Camry', price: 1000, seats: 'Up to 3–4 passengers', bags: 'About 2 large suitcases', note: 'Toyota Camry or similar. Right for one or two travellers, or a small family with light luggage.', image: '/toyota-camry.webp', alt: 'Toyota Camry sedan for a Riyadh to Dammam Airport transfer' },
    { name: 'SUV', booking: 'GMC Yukon XL / Denali', price: 1500, seats: 'Up to 6–7 passengers', bags: 'About 4–5 large suitcases', note: 'GMC Yukon or similar. For families, groups and anyone flying out with a lot of luggage.', image: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', alt: 'GMC Yukon SUV taking passengers from Riyadh to King Fahd International Airport' },
] as const;
const [SEDAN, SUV] = FARES;
const sar = (n: number) => `${n.toLocaleString('en-US')} SAR`;
const book = (vehicle: string) => `/booking/?${new URLSearchParams({ from: 'Riyadh', to: DMM, vehicle }).toString()}`;

const TITLE = `Riyadh to Dammam Airport Taxi | DMM Transfer from ${sar(SEDAN.price)}`;
const DESCRIPTION = `Private taxi from Riyadh to King Fahd International Airport (DMM). Sedan ${sar(SEDAN.price)}, SUV ${sar(SUV.price)}. Door-to-terminal, timed around your flight.`;

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car from Riyadh to Dammam Airport' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

const faqs = [
    { q: 'How much is a taxi from Riyadh to Dammam Airport?', a: `${sar(SEDAN.price)} for a sedan and ${sar(SUV.price)} for an SUV, one way, per vehicle. That covers pickup at your address in Riyadh and drop-off at the departures area of ${DMM}.` },
    { q: 'How long does it take from Riyadh to Dammam Airport by car?', a: 'Around 4 hours of driving in normal conditions. Traffic leaving Riyadh, a rest stop and your exact pickup point can add to that, so we plan the pickup with a margin rather than to the minute.' },
    { q: 'How far is Dammam Airport from Riyadh?', a: 'Roughly 400 km by road, depending on where in Riyadh you are collected.' },
    { q: 'When should I leave Riyadh for my flight?', a: 'Add the airline’s recommended check-in time to about 4 hours of driving, then add a buffer for traffic and a stop. For an international flight, that usually means leaving Riyadh about 8 hours before departure. Send us your flight time and we will suggest a pickup time.' },
    { q: 'Which vehicle should I choose?', a: `The sedan suits up to 3–4 passengers with about 2 large suitcases. If you have more people or more luggage, take the SUV, which seats up to 6–7 with room for about 4–5 large cases.` },
    { q: 'Can you pick me up from Riyadh Airport and drive me to Dammam Airport?', a: `Yes. Pickup at ${RUH} can be arranged; send your arrival flight so the driver is there when you land.` },
    { q: 'Do you also drive from Dammam Airport to Riyadh?', a: 'Yes. Book it as a separate trip or tick the return option in the form and send your arrival flight.' },
    { q: 'Can I stop on the way?', a: 'Yes, for food, prayer or a rest. Tell us when booking so the stop is included in the pickup time.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Riyadh to Dammam Airport private transfer',
            url: PAGE_URL,
            serviceType: 'Private airport transfer',
            description: `Private door-to-terminal car with driver from Riyadh to ${DMM}.`,
            provider: { '@id': 'https://taxiserviceksa.com/#organization' },
            areaServed: [{ '@type': 'City', name: 'Riyadh' }, { '@type': 'City', name: 'Dammam' }],
            offers: FARES.map((f) => ({ '@type': 'Offer', name: `${f.name} - Riyadh to Dammam Airport, one way`, price: f.price, priceCurrency: 'SAR', url: PAGE_URL })),
        },
        {
            '@type': 'Organization',
            '@id': 'https://taxiserviceksa.com/#organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
            telephone: PHONE,
            areaServed: 'Saudi Arabia',
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const eyebrow = 'text-xs font-bold uppercase tracking-[0.22em]';
const link = 'font-semibold text-[#2c4a8a] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#13203d]';
const card = 'rounded-2xl bg-white border border-[#13203d]/10';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

// Illustration (not a photo): highway at dusk heading to an airport, with a plane climbing away.
function RoadToRunway({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="ra-sky" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#13203d" />
                    <stop offset="0.65" stopColor="#24386a" />
                    <stop offset="1" stopColor="#d9954a" />
                </linearGradient>
            </defs>
            <rect width="1440" height="640" fill="url(#ra-sky)" />
            <path d="M0 540 C 260 520, 520 534, 780 516 C 1000 502, 1200 520, 1440 508 V 640 H 0 Z" fill="#0d1730" fillOpacity="0.55" />
            {/* Control tower */}
            <g fill="#0d1730" fillOpacity="0.75">
                <rect x="1232" y="420" width="14" height="100" />
                <path d="M1214 420 h50 l-8 -26 h-34 Z" />
                <rect x="1150" y="490" width="180" height="30" />
            </g>
            {/* Plane climbing */}
            <g fill="#f2b84b" fillOpacity="0.9" transform="translate(1120 230) rotate(-14)">
                <path d="M0 10 L 90 6 L 110 0 L 116 6 L 112 12 L 90 14 Z" />
                <path d="M40 9 L 62 -22 L 70 -22 L 60 10 Z" />
                <path d="M44 12 L 66 36 L 74 36 L 62 13 Z" />
            </g>
            <path d="M940 330 C 1000 300, 1060 270, 1110 248" fill="none" stroke="#f2b84b" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="4 8" />
            <path d="M0 610 C 320 598, 640 584, 900 562 C 1000 553, 1080 540, 1150 524" fill="none" stroke="#f2b84b" strokeWidth="3" strokeDasharray="14 10" strokeLinecap="round" />
        </svg>
    );
}

export default function RiyadhToDammamAirportPage() {
    return (
        <div className="riyadh-dmm-page bg-[#f3f5f9]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#13203d]">
                <RoadToRunway className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#13203d] via-[#13203d]/60 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#f2b84b] mb-4`}>Riyadh → King Fahd International Airport</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5">Riyadh to Dammam Airport Taxi</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            A private car from your door in Riyadh to the departures area at Dammam&apos;s King Fahd International Airport (DMM), with the pickup time worked out from your flight.
                        </p>
                        <ul className="grid grid-cols-2 gap-2 mb-7 max-w-md">
                            {FARES.map((f) => (
                                <li key={f.name} className={`rounded-xl px-4 py-3 ${f === SUV ? 'bg-[#f2b84b] text-[#13203d]' : 'bg-white/10 border border-white/20'}`}>
                                    <span className="block text-xs font-semibold opacity-80">{f.name}</span>
                                    <span className="block text-xl font-black">{sar(f.price)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-5">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#f2b84b] text-[#13203d] hover:bg-[#f6ca74]">
                                <a href={QUOTE_HREF}>Book Riyadh → DMM <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Your Flight Time</a>
                            </Button>
                        </div>
                        <p className="text-sm text-white/60">Per vehicle • One way • About 400 km</p>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Book your ride to Dammam Airport"
                            cta="Book Riyadh → Dammam Airport"
                            fromPlaceholder="Home, hotel or office in Riyadh"
                            toPlaceholder="King Fahd International Airport (DMM)"
                            fromChips={['Riyadh city', 'Riyadh hotel', RUH]}
                            toChips={[DMM]}
                            showFlight
                            returnNote="Return trip Dammam Airport to Riyadh also needed - arrival flight to follow."
                            vehicleOptions={[
                                { value: '', label: 'Not sure - recommend one' },
                                { value: SEDAN.booking, label: `Sedan - ${sar(SEDAN.price)}` },
                                { value: SUV.booking, label: `SUV (GMC or similar) - ${sar(SUV.price)}` },
                            ]}
                            buttonClass="bg-[#2c4a8a] hover:bg-[#223a6f] focus-visible:ring-[#2c4a8a]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section aria-labelledby="intro" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10">
                    <div className="space-y-5 text-stone-700 leading-relaxed text-[1.05rem]">
                        <h2 id="intro" className={`${h2} mb-2`}>Riyadh to King Fahd International Airport by Private Car</h2>
                        <p>
                            Plenty of people living in Riyadh fly out of Dammam rather than Riyadh: for a particular airline or route, a fare that works out better, a connection, or simply because their trip starts in the Eastern Province. Getting there means a drive of roughly 400 km, and this transfer is that drive done for you, from your front door to the departures area at DMM.
                        </p>
                        <p>
                            Driving time is around 4 hours in normal conditions, along the main highway east from Riyadh. Traffic getting out of the city, a stop for food or prayer, and your exact pickup point all change the total, so we set the pickup with a margin and ask for your flight time when you book.
                        </p>
                        <p>
                            The car is private: only your group travels in it. Choose the sedan if you are one or two people with normal luggage, or the SUV if you are a family, a group, or flying out with more bags than a sedan boot will take.
                        </p>
                        <p>
                            Landing at Riyadh and flying on from Dammam? We can collect you at {RUH} and drive straight to DMM. Arriving at Dammam instead? The <Link href="/dammam-airport-taxi/" className={link}>Dammam Airport taxi</Link> page covers pickups there, and <Link href="/routes/dammam-riyadh/" className={link}>Dammam to Riyadh</Link> covers the drive back.
                        </p>
                    </div>
                    <aside className="lg:pt-16">
                        <dl className="rounded-3xl bg-[#13203d] text-white p-7 space-y-4 text-sm">
                            {[
                                ['Distance', 'About 400 km'],
                                ['Driving time', 'Around 4 hours'],
                                ['Drop-off', 'DMM departures'],
                                ['Sedan', sar(SEDAN.price)],
                                ['SUV', sar(SUV.price)],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-white/60">{k}</dt>
                                    <dd className="font-semibold text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                    </aside>
                </div>
            </section>

            {/* ================= PRICES ================= */}
            <section aria-labelledby="prices" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 id="prices" className={`${h2} mb-3`}>Riyadh to Dammam Airport Taxi Prices</h2>
                    <p className="text-stone-600 mb-8">Private vehicle • One way • Riyadh address to DMM departures. The price is for the car, not per person.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {FARES.map((f) => (
                            <article key={f.name} className={`${card} overflow-hidden flex flex-col`}>
                                <div className="relative aspect-[16/9] bg-[#e6ebf3]">
                                    <Image src={f.image} alt={f.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-[#13203d]">{f.name}</h3>
                                    <p className="text-4xl font-black text-[#2c4a8a] mt-2">{f.price.toLocaleString('en-US')} <span className="text-base font-semibold text-stone-500">SAR</span></p>
                                    <p className="text-sm font-semibold text-stone-700 mt-1">{f.seats} · {f.bags}</p>
                                    <p className="text-sm text-stone-600 mt-3 mb-6 flex-1">{f.note}</p>
                                    <Link href={book(f.booking)} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#13203d] px-5 py-3 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c4a8a] focus-visible:ring-offset-2">
                                        Book {f.name} — {sar(f.price)} <Arrow />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className={`${card} p-5`}>
                            <p className="font-bold text-[#13203d] mb-2">Included</p>
                            <ul className="space-y-1.5 text-stone-700">
                                {['Private car and driver', 'Pickup at your Riyadh address', 'Drop-off at DMM departures', 'Help with luggage at both ends', 'A stop on the way if you ask'].map((x) => (
                                    <li key={x} className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#2c4a8a] shrink-0" aria-hidden="true" />{x}</li>
                                ))}
                            </ul>
                        </div>
                        <p className="flex gap-3 rounded-2xl bg-[#e6ebf3] p-5 text-stone-700">
                            <Info className="w-4 h-4 mt-0.5 text-[#2c4a8a] shrink-0" aria-hidden="true" />
                            Pickups outside Riyadh, extra stops that add real distance, or long waits that were not agreed are quoted separately. Larger vans and premium cars may be available on request.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= FLIGHT TIMING ================= */}
            <section aria-labelledby="timing" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div>
                        <CalendarClock className="w-7 h-7 text-[#2c4a8a] mb-4" aria-hidden="true" />
                        <h2 id="timing" className={`${h2} mb-5`}>When to Leave Riyadh for Your Flight</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">The question that matters on this route is not how long the drive takes, but when the car needs to leave. Work back from your departure time:</p>
                        <p className="text-stone-700 leading-relaxed mb-4">Take the airline&apos;s check-in recommendation, add around 4 hours of driving, then add a buffer for traffic in Riyadh and a stop on the way.</p>
                        <p className="flex gap-3 rounded-xl bg-[#f3f5f9] p-4 text-sm text-stone-700"><Info className="w-4 h-4 mt-0.5 text-[#2c4a8a] shrink-0" aria-hidden="true" />These are planning figures, not promises. Check your airline&apos;s own check-in times, and tell us your flight so we can suggest a pickup time.</p>
                    </div>
                    <div className={`${card} p-6`}>
                        <p className="text-sm font-bold text-[#13203d] mb-4">Example: international flight at 18:00</p>
                        <ol className="space-y-3 text-sm">
                            {[
                                ['Pickup in Riyadh', 'about 10:00'],
                                ['Driving, with one stop', 'about 4 – 4.5 hours'],
                                ['Arrive at DMM departures', 'about 14:00 – 14:30'],
                                ['Check-in and security', '3 hours before departure'],
                                ['Flight departs', '18:00'],
                            ].map(([k, v], i) => (
                                <li key={k} className="flex items-start gap-3 border-b border-[#13203d]/10 pb-3 last:border-0 last:pb-0">
                                    <span className="inline-flex w-6 h-6 shrink-0 items-center justify-center rounded-full bg-[#13203d] text-white text-xs font-bold" aria-hidden="true">{i + 1}</span>
                                    <span className="flex-1 text-stone-600">{k}</span>
                                    <span className="font-semibold text-[#13203d] text-right">{v}</span>
                                </li>
                            ))}
                        </ol>
                        <p className="mt-5 flex items-center gap-2 rounded-xl bg-[#13203d] px-4 py-3 text-sm font-bold text-white"><Clock className="w-4 h-4 text-[#f2b84b]" aria-hidden="true" />International: leave about 8 hours before departure</p>
                    </div>
                </div>
            </section>

            {/* ================= WHO ================= */}
            <section aria-labelledby="who" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="who" className={`${h2} mb-8`}>Who Takes This Transfer?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Plane, t: 'Travellers flying from DMM', d: 'Living in Riyadh, booked on a flight out of Dammam.' },
                            { icon: Users, t: 'Families', d: 'Everyone and the bags in one SUV, with a stop on the way.' },
                            { icon: Briefcase, t: 'Business travellers', d: <>Office or hotel to the terminal. Regular company bookings: <Link href="/services/business/" className={link}>business travel</Link>.</> },
                            { icon: Luggage, t: 'Heavy luggage', d: 'Long trips and big cases go straight from your door to the departures kerb.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className={`${card} p-6`}>
                                <Icon className="w-6 h-6 text-[#2c4a8a] mb-3" aria-hidden="true" />
                                <h3 className="text-[#13203d] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= HOW TO BOOK ================= */}
            <section aria-labelledby="book" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-8`}>How to Book</h2>
                    <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {[
                            ['Send your flight', 'Pickup address in Riyadh, flight number and departure time, passengers and bags.'],
                            ['Get a pickup time', 'We suggest when to leave Riyadh and which vehicle fits.'],
                            ['Confirm', 'You receive the confirmation and driver details before the day.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-[#f3f5f9] p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#2c4a8a] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-[#13203d] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#13203d] px-6 py-3.5 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c4a8a] focus-visible:ring-offset-2">Book Riyadh → Dammam Airport <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#13203d]/20 px-6 py-3.5 font-bold text-[#13203d] hover:border-[#2c4a8a]"><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp Your Flight Time</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Taxi Service KSA · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a> (call or WhatsApp)</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#13203d]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#13203d] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#13203d] mb-5">Related Transfers</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Dammam Airport taxi', '/dammam-airport-taxi/'],
                            ['Riyadh to Dammam city', '/routes/riyadh-dammam/'],
                            ['Dammam to Riyadh', '/routes/dammam-riyadh/'],
                            ['Dammam Airport to Al Khobar', '/routes/dammam-airport-to-khobar/'],
                            ['Riyadh Airport taxi', '/riyadh-airport-taxi/'],
                            ['Riyadh to Bahrain', '/routes/riyadh-bahrain/'],
                            ['Airport transfers', '/services/airport-transfers/'],
                            ['Intercity transfers', '/services/intercity/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#13203d]/15 px-4 py-2.5 text-sm font-semibold text-[#13203d] hover:border-[#2c4a8a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c4a8a]">{l}</Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
