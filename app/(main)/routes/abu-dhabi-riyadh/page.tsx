import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Minus, Info, Users, Briefcase, Luggage, Building2, Home, ShieldCheck, FileText, Plane, Car, MapPin, Route, Fuel } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';

const PAGE_URL = 'https://taxiserviceksa.com/routes/abu-dhabi-riyadh/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like to book Abu Dhabi to Riyadh. Pickup address in Abu Dhabi, Riyadh drop-off, date, passengers, luggage and vehicle: ')}`;
const BORDER_WA_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I want to check availability for an Abu Dhabi to Riyadh transfer via the Al Ghuwaifat / Al Batha border. My date and number of passengers: ')}`;
const AUH = 'Zayed International Airport (AUH)';
const RUH = 'King Khalid International Airport (RUH)';
const q = (p: Record<string, string>) => `/booking/?${new URLSearchParams({ from: 'Abu Dhabi', to: 'Riyadh', ...p }).toString()}`;

const TITLE = 'Abu Dhabi to Riyadh Taxi | Private Transfer from 3,500 SAR';
const DESCRIPTION = 'Private Abu Dhabi to Riyadh taxi, door to door via the Al Ghuwaifat / Al Batha border. Sedan 3,500 SAR, Toyota Fortuner 3,800 SAR, GMC Yukon 4,500 SAR per vehicle.';

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car with driver from Abu Dhabi to Riyadh' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

// The three fixed fares for this route (same as Riyadh to Abu Dhabi). Cards, FAQ and schema all read from here.
const FARES = [
    { name: 'Sedan', booking: 'Toyota Camry', price: 3500, seats: 'Up to 3–4 passengers', note: 'Toyota Camry or similar. A quiet private car for one to three people travelling with normal luggage.' },
    { name: 'Toyota Fortuner', booking: 'Toyota Fortuner', price: 3800, seats: 'Up to 5–6 passengers', note: 'Higher, roomier SUV for a family or small group with more bags than a sedan boot can take.' },
    { name: 'GMC Yukon / Tahoe', booking: 'GMC Yukon XL / Denali', price: 4500, seats: 'Up to 6–7 passengers', note: 'Full-size premium SUV with the most luggage space. The usual pick for families on the long desert stretch.' },
] as const;
const sar = (n: number) => `${n.toLocaleString('en-US')} SAR`;
const [SEDAN, FORTUNER, GMC] = FARES;

const QUOTE_VEHICLES = [
    { value: '', label: 'Not sure - recommend one' },
    { value: 'Toyota Camry', label: `Sedan - ${sar(SEDAN.price)}` },
    { value: 'Toyota Fortuner', label: `Toyota Fortuner - ${sar(FORTUNER.price)}` },
    { value: 'GMC Yukon XL / Denali', label: `GMC Yukon / Tahoe - ${sar(GMC.price)}` },
    { value: 'Cadillac Escalade', label: 'Cadillac Escalade - price on request' },
    { value: 'Hyundai Staria VIP', label: 'Hyundai Staria VIP - price on request' },
    { value: 'Mercedes S-Class', label: 'Mercedes S-Class - price on request' },
    { value: 'Mercedes Sprinter', label: 'Mercedes Sprinter - price on request' },
];

const VEHICLES = [
    { name: 'Sedan (Toyota Camry)', price: sar(SEDAN.price), seats: '3–4 passengers', bags: '2 large suitcases', image: '/toyota-camry.webp', alt: 'Toyota Camry for an Abu Dhabi to Riyadh private transfer', booking: 'Toyota Camry' },
    { name: 'Toyota Fortuner', price: sar(FORTUNER.price), seats: '5–6 passengers', bags: '3–4 suitcases', image: null, alt: '', booking: 'Toyota Fortuner' },
    { name: 'GMC Yukon / Tahoe', price: sar(GMC.price), seats: '6–7 passengers', bags: '4–5 suitcases', image: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', alt: 'GMC Yukon private SUV for Abu Dhabi to Riyadh', booking: 'GMC Yukon XL / Denali' },
    { name: 'Cadillac Escalade', price: 'Price on request', seats: 'Up to 7 passengers', bags: 'Up to 4 suitcases', image: '/fleet/cadillac-escalade-chauffeur-service-ksa.webp', alt: 'Cadillac Escalade chauffeur car from Abu Dhabi to Riyadh', booking: 'Cadillac Escalade' },
    { name: 'Hyundai Staria VIP', price: 'Price on request', seats: 'Up to 7 passengers', bags: 'Up to 4 suitcases', image: '/hyundai-staria.webp', alt: 'Hyundai Staria VIP van for a family trip from Abu Dhabi to Riyadh', booking: 'Hyundai Staria VIP' },
    { name: 'Mercedes S-Class', price: 'Price on request', seats: 'Up to 3 passengers', bags: '2 suitcases', image: '/fleet/mercedes-s-class-vip-chauffeur-service-saudi.webp', alt: 'Mercedes S-Class executive car for Abu Dhabi to Riyadh', booking: 'Mercedes S-Class' },
    { name: 'Mercedes Sprinter', price: 'Price on request', seats: 'Larger groups', bags: 'Depends on seating layout', image: '/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp', alt: 'Mercedes Sprinter group van for Abu Dhabi to Riyadh', booking: 'Mercedes Sprinter' },
];

const faqs = [
    { q: 'How much is a taxi from Abu Dhabi to Riyadh?', a: `${sar(SEDAN.price)} for a sedan, ${sar(FORTUNER.price)} for a Toyota Fortuner and ${sar(GMC.price)} for a GMC Yukon/Tahoe. That is the price of the whole vehicle, one way, from your address in Abu Dhabi to your address in Riyadh. The Cadillac Escalade, Hyundai Staria VIP, Mercedes S-Class and Sprinter are quoted on request.` },
    { q: 'Is the Abu Dhabi to Riyadh fare the same as Riyadh to Abu Dhabi?', a: 'Yes. Both directions cost the same for the same vehicle. If you book a return, each leg is charged at the one-way fare.' },
    { q: 'How long does Abu Dhabi to Riyadh take by car?', a: 'The driving itself is roughly 8–9 hours. Add the border, rest stops and city traffic at both ends, and most passengers should allow 9–11 hours or more from pickup to drop-off.' },
    { q: 'How far is Abu Dhabi from Riyadh by road?', a: 'Approximately 870–890 km, depending on where in Abu Dhabi you are collected and where in Riyadh you are going. It is the shortest of the UAE to Riyadh road routes.' },
    { q: 'Which border do you cross from Abu Dhabi to Riyadh?', a: 'You leave the UAE at Al Ghuwaifat and enter Saudi Arabia at Al Batha, in the far west of Abu Dhabi emirate. They are two separate posts a short drive apart.' },
    { q: 'What documents do I need to enter Saudi Arabia by road from Abu Dhabi?', a: 'A valid passport and permission to enter Saudi Arabia: a Saudi visa where your nationality needs one, or a valid Iqama and exit/re-entry visa if you are a Saudi resident returning home. GCC citizens usually travel on their national ID. UAE residents should also carry their Emirates ID. Rules depend on your nationality and residency and can change, so confirm your own eligibility before you travel. The driver cannot arrange passenger visas.' },
    { q: 'Is border vehicle insurance included?', a: 'Yes. The vehicle insurance needed for the cross-border trip is included in the fare, together with fuel and road tolls. Passenger visa fees are not included.' },
    { q: 'Can you pick me up at Abu Dhabi Airport?', a: `Yes. We can collect you at ${AUH} after you land, or anywhere in Abu Dhabi city, and drive you to Riyadh. Send us your flight number so the driver can follow the arrival time.` },
    { q: 'Can I be dropped at Riyadh Airport?', a: `Yes. We can drop you at ${RUH} for an onward flight. Tell us the departure time and we will set an early pickup in Abu Dhabi, because nobody can predict exactly how long the border will take.` },
    { q: 'Are there places to stop on the way?', a: 'Yes, but they are spread out. Part of the road runs along the edge of the Empty Quarter, where towns are far apart. The driver plans fuel, food and prayer stops around that stretch, and you can ask for a stop whenever you need one.' },
    { q: 'Can families book a private SUV?', a: 'Yes. The Toyota Fortuner and GMC Yukon/Tahoe are the usual choice for families. The car is yours alone for the whole trip. Child seats can be requested and are subject to availability.' },
    { q: 'Can I book a round trip?', a: 'Yes. Tick the return option in the quote form or tell us your return date, and we will quote the Riyadh to Abu Dhabi leg as well.' },
    { q: 'Do I change cars at the border?', a: 'No. One driver and one vehicle take you from your pickup in Abu Dhabi, through both border posts and to your drop-off in Riyadh.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Abu Dhabi to Riyadh private taxi transfer',
            url: PAGE_URL,
            serviceType: 'Private cross-border transfer',
            description: 'Private door-to-door car with driver from Abu Dhabi to Riyadh via the Al Ghuwaifat / Al Batha border, with vehicle-side border assistance.',
            provider: { '@id': 'https://taxiserviceksa.com/#organization' },
            areaServed: [{ '@type': 'City', name: 'Abu Dhabi' }, { '@type': 'City', name: 'Riyadh' }],
            offers: FARES.map((f) => ({ '@type': 'Offer', name: `${f.name} - Abu Dhabi to Riyadh, one way`, price: f.price, priceCurrency: 'SAR', url: PAGE_URL })),
        },
        {
            '@type': 'Organization',
            '@id': 'https://taxiserviceksa.com/#organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
            telephone: PHONE,
            areaServed: ['Saudi Arabia', 'United Arab Emirates'],
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const eyebrow = 'text-xs font-bold uppercase tracking-[0.22em]';
const link = 'font-semibold text-[#0f6b78] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#0f2a33]';
const card = 'rounded-2xl bg-white border border-[#0f2a33]/10';
const solid = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f2a33] px-5 py-3 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f6b78] focus-visible:ring-offset-2';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

// Illustration (not a photo): open desert road crossing a border post towards the Riyadh skyline.
function DesertRoad({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="adr-sky" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#0f2a33" />
                    <stop offset="0.6" stopColor="#1d4650" />
                    <stop offset="1" stopColor="#d1a160" />
                </linearGradient>
            </defs>
            <rect width="1440" height="640" fill="url(#adr-sky)" />
            <circle cx="1180" cy="400" r="70" fill="#e9c48a" fillOpacity="0.35" />
            {/* Long, low dunes of the Empty Quarter edge */}
            <path d="M0 500 C 200 455, 380 495, 560 462 C 740 430, 880 488, 1060 468 C 1200 452, 1320 480, 1440 462 V 640 H 0 Z" fill="#a8783f" fillOpacity="0.55" />
            <path d="M0 565 C 240 532, 470 572, 700 545 C 920 520, 1120 556, 1440 530 V 640 H 0 Z" fill="#7d5a30" fillOpacity="0.7" />
            {/* Riyadh skyline: tower with an open top, a needle tower and blocks */}
            <g fill="#0f2a33" fillOpacity="0.55">
                <path d="M1262 500 V 360 C 1262 330, 1278 310, 1284 300 C 1290 310, 1306 330, 1306 360 V 500 H 1294 V 372 C 1294 358, 1290 350, 1284 344 C 1278 350, 1274 358, 1274 372 V 500 Z" />
                <path d="M1322 500 V 400 L 1330 360 L 1338 400 V 500 Z" />
                <rect x="1236" y="445" width="18" height="55" />
                <rect x="1348" y="430" width="20" height="70" />
                <rect x="1376" y="455" width="14" height="45" />
            </g>
            {/* Border post */}
            <g fill="#e9c48a" fillOpacity="0.85">
                <rect x="900" y="506" width="6" height="44" />
                <rect x="960" y="506" width="6" height="44" />
                <rect x="894" y="500" width="78" height="8" />
            </g>
            {/* Road */}
            <path d="M0 612 C 280 602, 520 594, 760 578 C 900 568, 1020 552, 1140 534 C 1230 520, 1320 510, 1440 502" fill="none" stroke="#e9c48a" strokeWidth="3" strokeDasharray="14 10" strokeLinecap="round" />
        </svg>
    );
}

export default function AbuDhabiRiyadhRoutePage() {
    return (
        <div className="abu-dhabi-riyadh-page bg-[#f6f1e7]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0f2a33]">
                <DesertRoad className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0f2a33] via-[#0f2a33]/60 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#e9c48a] mb-4`}>UAE → Saudi Arabia • Capital to capital</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5">Abu Dhabi to Riyadh Taxi</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            A private car and driver from your door in Abu Dhabi to your door in Riyadh, through the Al Ghuwaifat and Al Batha border posts, without changing vehicles.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-7 max-w-xl">
                            {FARES.map((f) => (
                                <li key={f.name} className={`rounded-xl px-4 py-3 ${f === GMC ? 'bg-[#e9c48a] text-[#0f2a33]' : 'bg-white/10 border border-white/20'}`}>
                                    <span className="block text-xs font-semibold opacity-80">{f.name}</span>
                                    <span className="block text-lg font-black">{sar(f.price)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-3 mb-5">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#e9c48a] text-[#0f2a33] hover:bg-[#f2d6a8]">
                                <a href={QUOTE_HREF}>Book Abu Dhabi → Riyadh <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp for Availability</a>
                            </Button>
                        </div>
                        <p className="text-sm text-white/60">Per vehicle • One way • Abu Dhabi address to Riyadh address</p>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Plan your Abu Dhabi → Riyadh transfer"
                            cta="Get My Abu Dhabi to Riyadh Quote"
                            fromPlaceholder="Home, hotel, office or airport in Abu Dhabi"
                            toPlaceholder="Hotel, address or airport in Riyadh"
                            fromChips={['Abu Dhabi city', AUH, 'Al Reem Island', 'Saadiyat Island', 'Yas Island', 'Khalifa City']}
                            toChips={['Riyadh city', RUH, 'Olaya', 'KAFD', 'Diplomatic Quarter', 'Riyadh hotel']}
                            showFlight="auto"
                            returnNote="Return trip Riyadh to Abu Dhabi also needed - date and time to confirm."
                            vehicleOptions={QUOTE_VEHICLES}
                            buttonClass="bg-[#0f6b78] hover:bg-[#0c5964] focus-visible:ring-[#0f6b78]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= ROUTE FACTS ================= */}
            <section aria-label="Route facts" className="px-4 sm:px-6 lg:px-8 py-10">
                <dl className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                        ['Distance', '≈ 870–890 km', 'Shortest UAE to Riyadh route'],
                        ['Driving time', '≈ 8–9 hours', 'Border time is extra'],
                        ['Border', 'Al Ghuwaifat / Al Batha', 'UAE exit, Saudi entry'],
                        ['Service', 'Private, door-to-door', 'One driver the whole way'],
                    ].map(([k, v, s]) => (
                        <div key={k} className={`${card} p-4`}>
                            <dt className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">{k}</dt>
                            <dd className="font-bold text-[#0f2a33] leading-snug">{v}</dd>
                            <dd className="text-xs text-stone-500 mt-1">{s}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            {/* ================= INTRODUCTION ================= */}
            <section aria-labelledby="intro" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10">
                    <div className="space-y-5 text-stone-700 leading-relaxed text-[1.05rem]">
                        <h2 id="intro" className={`${h2} mb-2`}>Abu Dhabi to Riyadh by Private Car</h2>
                        <p>
                            This is a capital-to-capital transfer. We collect you from your home, hotel or office in Abu Dhabi, or from {AUH}, and drive you to the address you give us in Riyadh. The car is booked for you alone, and the same driver stays with you from the first kilometre to the last.
                        </p>
                        <p>
                            At approximately 870–890 km, Abu Dhabi to Riyadh is the shortest of the UAE to Riyadh road routes. Dubai and Sharjah sit further east, so starting in Abu Dhabi saves the first stretch of the journey. The driving takes around 8–9 hours. The border adds time on top: you leave the UAE at Al Ghuwaifat and enter Saudi Arabia at Al Batha, and how long that takes depends on queues and checks on the day.
                        </p>
                        <p>
                            The road west from Abu Dhabi follows the coast past Ruwais before turning inland. After the border, the route crosses a long, empty section along the edge of the Empty Quarter (Rub al Khali), where fuel stations and towns are far apart. This is the part of the trip where an experienced driver matters most: stops are planned before you need them, not after.
                        </p>
                        <p>
                            Most people who choose the road over a flight are carrying something a flight makes awkward. That can be a family with suitcases and children who need breaks, someone moving to Riyadh for a new job, or a small group who would otherwise buy several tickets and two sets of airport taxis. Business travellers use the private cabin to work or rest and arrive at their Riyadh meeting address directly.
                        </p>
                        <p>
                            The driver handles the vehicle side of both border posts and tells you the order of the checks. Your passport, Saudi entry permission and any residency documents stay your responsibility. There is a short <a href="#documents" className={link}>documents checklist</a> further down this page.
                        </p>
                        <p>
                            Drop-off can be anywhere in Riyadh: Olaya, King Abdullah Financial District (KAFD), the Diplomatic Quarter, northern districts such as Al Malqa and Hittin, or {RUH}. Going the other way? See <Link href="/routes/riyadh-abu-dhabi/" className={link}>Riyadh to Abu Dhabi</Link>. Starting further east? See <Link href="/routes/dubai-riyadh/" className={link}>Dubai to Riyadh</Link> or <Link href="/routes/sharjah-riyadh/" className={link}>Sharjah to Riyadh</Link>.
                        </p>
                    </div>
                    <aside className="lg:pt-16">
                        <div className="rounded-3xl bg-[#0f2a33] text-white p-7">
                            <p className={`${eyebrow} text-[#e9c48a] mb-4`}>At a glance</p>
                            <ul className="space-y-3 text-sm">
                                {['Private car and driver, one way or return', 'Pickup anywhere in Abu Dhabi or at AUH', 'Drop-off anywhere in Riyadh or at RUH', 'Same fare in both directions', 'Vehicle-side border assistance', 'Planned stops on the Empty Quarter stretch', 'Fare per vehicle, not per passenger'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#e9c48a] shrink-0" aria-hidden="true" />{x}</li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* ================= PRICES ================= */}
            <section aria-labelledby="prices" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="prices" className={`${h2} mb-3`}>Abu Dhabi to Riyadh Taxi Prices</h2>
                    <p className="text-stone-600 mb-8">Private vehicle • One-way • Door-to-door. The price is for the car, not per person, and is the same as Riyadh to Abu Dhabi.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {FARES.map((f) => {
                            const featured = f === GMC;
                            return (
                                <article key={f.name} className={`rounded-2xl p-6 flex flex-col ${featured ? 'bg-[#0f2a33] text-white shadow-xl' : 'bg-white border border-[#0f2a33]/10'}`}>
                                    <h3 className={featured ? 'text-white' : 'text-[#0f2a33]'}>{f.name}</h3>
                                    <p className={`text-4xl font-black mt-2 ${featured ? 'text-[#e9c48a]' : 'text-[#0f2a33]'}`}>{f.price.toLocaleString('en-US')} <span className="text-base font-semibold opacity-70">SAR</span></p>
                                    <p className={`text-sm font-semibold mt-1 ${featured ? 'text-white/80' : 'text-stone-600'}`}>{f.seats}</p>
                                    <p className={`text-sm mt-3 mb-6 flex-1 ${featured ? 'text-white/70' : 'text-stone-600'}`}>{f.note}</p>
                                    <Link href={q({ vehicle: f.booking })} className={`group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f6b78] focus-visible:ring-offset-2 ${featured ? 'bg-[#e9c48a] text-[#0f2a33] hover:bg-[#f2d6a8]' : 'bg-[#0f2a33] text-white hover:bg-black'}`}>
                                        Choose {f === GMC ? 'GMC' : f === FORTUNER ? 'Fortuner' : f.name} — {sar(f.price)} <Arrow />
                                    </Link>
                                </article>
                            );
                        })}
                    </div>
                    <p className="text-sm text-stone-600 mt-5">
                        The Cadillac Escalade, Mercedes S-Class, Hyundai Staria VIP and Mercedes Sprinter are quoted on request. Prices cover a pickup in Abu Dhabi and a drop-off in Riyadh; other start or end points are quoted separately.
                    </p>
                </div>
            </section>

            {/* ================= INCLUDED ================= */}
            <section aria-labelledby="included" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="included" className={`${h2} mb-8`}>What&apos;s Included in Your Abu Dhabi to Riyadh Transfer?</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="rounded-2xl bg-[#eef4f3] p-7">
                            <h3 className="text-[#0f2a33] mb-4">Included in the fare</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 text-sm text-stone-700">
                                {['The private vehicle you booked', 'A professional driver for the whole trip', 'Pickup at your Abu Dhabi address', 'Drop-off at your Riyadh address', 'Fuel and road tolls', 'Cross-border vehicle insurance', 'Vehicle-side border assistance', 'Help loading and unloading luggage', 'Planned rest, food and prayer stops'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#0f6b78] shrink-0" aria-hidden="true" />{x}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-[#0f2a33]/10 p-7">
                            <h3 className="text-[#0f2a33] mb-4">Not included</h3>
                            <ul className="space-y-2.5 text-sm text-stone-700 mb-5">
                                {['Saudi visas and any personal immigration fees', 'Meals and hotel costs on the way', 'Extra detours or long waits that were not agreed when booking'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><Minus className="w-4 h-4 mt-0.5 text-stone-400 shrink-0" aria-hidden="true" />{x}</li>
                                ))}
                            </ul>
                            <p className="flex gap-3 rounded-xl bg-[#f6f1e7] p-4 text-sm text-stone-700">
                                <Info className="w-4 h-4 mt-0.5 text-[#0f6b78] shrink-0" aria-hidden="true" />
                                Passengers are responsible for their own passport, visa and immigration documents. The driver assists with the vehicle, not with anyone&apos;s entry permission.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= DISTANCE + TIME ================= */}
            <section aria-labelledby="time" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div>
                        <h2 id="time" className={`${h2} mb-5`}>Abu Dhabi to Riyadh Distance and Journey Time</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">By road, Abu Dhabi to Riyadh is approximately 870–890 km. The driving takes around 8–9 hours, depending on the exact route and road conditions.</p>
                        <p className="text-stone-700 leading-relaxed mb-4">Door to door, plan for 9–11 hours or more. The border is the part nobody can time precisely; traffic leaving Abu Dhabi and entering Riyadh, and the number of stops you want, make up the rest. We cannot guarantee an exact arrival time.</p>
                        <p className="text-stone-700 leading-relaxed">An early-morning start puts the empty desert section in daylight and gets you into Riyadh before the evening traffic. Weekends and public holidays tend to be busier at the border.</p>
                    </div>
                    <div className={`${card} p-6`}>
                        <p className="text-sm font-bold text-[#0f2a33] mb-4">Where the time goes</p>
                        <ul className="space-y-3 text-sm">
                            {[
                                ['Driving', 'About 8–9 hours'],
                                ['UAE exit and Saudi entry', 'Varies with queues and checks'],
                                ['Rest, fuel and prayer stops', 'Planned around the empty stretch'],
                                ['City traffic at either end', 'Depends on time of day'],
                            ].map(([k, v]) => (
                                <li key={k} className="flex justify-between gap-4 border-b border-[#0f2a33]/10 pb-3 last:border-0 last:pb-0">
                                    <span className="text-stone-600">{k}</span>
                                    <span className="font-semibold text-[#0f2a33] text-right">{v}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 rounded-xl bg-[#0f2a33] px-4 py-3 text-sm font-bold text-white">Allow 9–11+ hours door to door</p>
                    </div>
                </div>
            </section>

            {/* ================= ROUTE ================= */}
            <section aria-labelledby="route" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
                    <div>
                        <Route className="w-7 h-7 text-[#0f6b78] mb-4" aria-hidden="true" />
                        <h2 id="route" className={`${h2} mb-5`}>Abu Dhabi to Riyadh Driving Route</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">The usual road runs west from Abu Dhabi along the coast past Ruwais to the Al Ghuwaifat border. On the Saudi side, it heads inland across the desert towards Haradh, then north-west through Al Kharj into Riyadh.</p>
                        <p className="text-stone-700 leading-relaxed mb-5">The exact route can change with road conditions, roadworks and your pickup and drop-off locations.</p>
                        <div className="flex gap-3 rounded-xl bg-[#f6f1e7] p-4 text-sm text-stone-700 mb-5">
                            <Fuel className="w-4 h-4 mt-0.5 text-[#0f6b78] shrink-0" aria-hidden="true" />
                            <span>Between the border and Haradh, services are sparse. Keep water and snacks in the car, and use the stop before the border even if you do not feel you need it.</span>
                        </div>
                        <p className="text-sm text-stone-600">More on the road: <Link href="/blog/riyadh-to-abu-dhabi-by-road-guide/" className={link}>Riyadh to Abu Dhabi by road guide</Link> · <Link href="/distance/abu-dhabi-to-riyadh/" className={link}>Abu Dhabi to Riyadh distance</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-[#06232b] text-white p-7 md:p-10">
                        <RouteJourney
                            vehicle
                            palette="gulf"
                            stops={[
                                { title: 'Abu Dhabi', text: 'Pickup at your home, hotel, office or Zayed International Airport.' },
                                { title: 'Western Region coast road', text: 'West along the coast past Ruwais. The last easy place for a full rest stop in the UAE.' },
                                { title: 'Al Ghuwaifat (UAE exit)', text: 'UAE passport control and vehicle exit checks.', accent: true },
                                { title: 'Al Batha (Saudi entry)', text: 'Saudi passport control, customs and vehicle entry checks.', accent: true },
                                { title: 'Empty Quarter edge → Haradh', text: 'The long, quiet desert section. Fuel and prayer stops are planned in advance.' },
                                { title: 'Al Kharj → Riyadh', text: 'Into the capital and drop-off at your hotel, home, office or King Khalid International Airport.' },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ================= BORDER ================= */}
            <section aria-labelledby="border" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <ShieldCheck className="w-7 h-7 text-[#0f6b78] mb-4" aria-hidden="true" />
                    <h2 id="border" className={`${h2} mb-5`}>Crossing from the UAE into Saudi Arabia</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-10">Coming from Abu Dhabi, the order is the reverse of the outbound trip: UAE exit at Al Ghuwaifat first, then Saudi entry at Al Batha a short drive further on. Saudi entry usually takes longer, because it includes customs and a vehicle inspection.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                        <div className={`${card} p-7`}>
                            <p className={`${eyebrow} text-[#0f6b78] mb-2`}>Step 1</p>
                            <h3 className="text-[#0f2a33] mb-3">Al Ghuwaifat - leaving the UAE</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">Passengers go through UAE exit passport control. UAE residents show their Emirates ID along with their passport. The vehicle&apos;s exit paperwork is checked at the same time.</p>
                        </div>
                        <div className={`${card} p-7`}>
                            <p className={`${eyebrow} text-[#0f6b78] mb-2`}>Step 2</p>
                            <h3 className="text-[#0f2a33] mb-3">Al Batha - entering Saudi Arabia</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">Passengers go through Saudi immigration with their passport and visa, or Iqama and re-entry visa for residents. Luggage can pass through customs and the vehicle can be inspected before it is allowed through.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="rounded-2xl bg-[#0f2a33] text-white p-7">
                            <h3 className="mb-4">What the driver does</h3>
                            <ul className="space-y-2.5 text-sm text-white/85">
                                {['Carries the vehicle registration and border papers', 'Has the cross-border vehicle insurance in place', 'Handles the vehicle inspection and customs side', 'Tells you which queue to join and in what order', 'Waits for you and continues to Riyadh'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#e9c48a] shrink-0" aria-hidden="true" />{x}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl bg-white border-l-4 border-[#c99a5b] p-7">
                            <h3 className="text-[#0f2a33] mb-4">What stays with you</h3>
                            <p className="text-sm text-stone-700 leading-relaxed mb-3">The driver handles the vehicle side of the crossing and helps you through the process. Passengers remain responsible for their own passport, visa and immigration documents.</p>
                            <p className="text-sm text-stone-700 leading-relaxed mb-5">Waiting times vary and nobody can promise how long processing will take. Keep passports and ID cards in a bag inside the car, not in the boot, and pack anything you might be asked about where it is easy to reach.</p>
                            <a href={BORDER_WA_HREF} target="_blank" rel="nofollow noopener noreferrer" className={solid}><WhatsAppIcon className="w-4 h-4 fill-current" /> Check Border Transfer Availability</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= DOCUMENTS ================= */}
            <section id="documents" aria-labelledby="docs" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-start">
                    <div>
                        <FileText className="w-7 h-7 text-[#0f6b78] mb-4" aria-hidden="true" />
                        <h2 id="docs" className={`${h2} mb-5`}>What Documents Do I Need to Travel from Abu Dhabi to Riyadh?</h2>
                        <p className="text-stone-700 leading-relaxed">Check this before you book, for every passenger in the car, including children.</p>
                    </div>
                    <div>
                        <ul className="space-y-3 mb-5">
                            {[
                                ['Valid passport', 'Check the expiry date well ahead of travel.'],
                                ['Saudi entry permission', 'A Saudi visa where your nationality requires one. GCC citizens usually travel on their national ID.'],
                                ['Iqama and exit/re-entry visa', 'For Saudi residents returning home - both must be valid.'],
                                ['Emirates ID', 'For UAE residents, to leave the UAE and come back later.'],
                                ['Anything else the border asks for', 'Rules for your situation may add documents.'],
                            ].map(([k, v]) => (
                                <li key={k} className="flex gap-3 rounded-xl bg-[#f6f1e7] p-4">
                                    <Check className="w-5 h-5 mt-0.5 text-[#0f6b78] shrink-0" aria-hidden="true" />
                                    <span><span className="font-bold text-[#0f2a33]">{k}</span><span className="block text-sm text-stone-600">{v}</span></span>
                                </li>
                            ))}
                        </ul>
                        <p className="flex gap-3 text-sm text-stone-600"><Info className="w-4 h-4 mt-0.5 text-[#0f6b78] shrink-0" aria-hidden="true" />Immigration requirements can change. Please confirm your own eligibility with the official UAE and Saudi authorities before you travel; we cannot give legal or visa advice.</p>
                    </div>
                </div>
            </section>

            {/* ================= TAXI VS FLIGHT ================= */}
            <section aria-labelledby="vs" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 id="vs" className={`${h2} mb-4`}>Abu Dhabi to Riyadh: Private Car vs Flying</h2>
                    <p className="text-stone-700 leading-relaxed mb-8">A flight between the two capitals is much faster. The car makes sense when the airport steps, baggage rules or the number of passengers outweigh the extra hours on the road.</p>
                    <div className="relative overflow-x-auto rounded-2xl border border-[#0f2a33]/10 bg-white">
                        <table className="w-full min-w-[520px] text-left text-sm">
                            <thead>
                                <tr className="bg-[#0f2a33] text-white">
                                    <th scope="col" className="px-4 py-3.5 font-bold"><span className="sr-only">Compare</span></th>
                                    <th scope="col" className="px-4 py-3.5 font-bold">Private car</th>
                                    <th scope="col" className="px-4 py-3.5 font-bold">Flight</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#0f2a33]/10">
                                {[
                                    ['Door-to-door', 'Yes', 'No - transfers needed at AUH and RUH'],
                                    ['Airport check-in and security', 'None', 'Yes'],
                                    ['Private vehicle', 'Yes', 'No'],
                                    ['Departure time', 'You choose', 'Set by the flight schedule'],
                                    ['Luggage', 'Limited only by vehicle size', 'Airline baggage rules'],
                                    ['Journey time', 'Longer - most of a day', 'Significantly faster'],
                                    ['Cost for a group', 'One fare for the whole car', 'One ticket per passenger'],
                                    ['Best for', 'Families, groups, heavy luggage, relocation', 'Time-sensitive solo or light travellers'],
                                ].map(([k, a, b]) => (
                                    <tr key={k}>
                                        <th scope="row" className="px-4 py-3.5 font-bold text-[#0f2a33]">{k}</th>
                                        <td className="px-4 py-3.5 text-stone-700">{a}</td>
                                        <td className="px-4 py-3.5 text-stone-600">{b}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ================= WHO ================= */}
            <section aria-labelledby="who" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="who" className={`${h2} mb-8`}>Who Books a Private Abu Dhabi to Riyadh Taxi?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: Users, t: 'Families visiting Riyadh', d: 'UAE-based families visiting relatives in the Kingdom, with the bags, gifts and children that make a flight hard work. The Fortuner and GMC Yukon are the usual choice.' },
                            { icon: Briefcase, t: 'Business travellers', d: 'Leave Abu Dhabi in the morning, work or rest in the back, and arrive at an office in Olaya or KAFD without an airport in between.' },
                            { icon: Luggage, t: 'People relocating', d: 'Starting a job in Riyadh or moving back home - no airline weight limits, and everything is loaded once and unloaded once.' },
                            { icon: Users, t: 'Private groups', d: 'Friends or colleagues travelling together pay one fare for the car. Larger groups can ask about the Staria VIP or a Sprinter.' },
                            { icon: Home, t: 'Older passengers', d: 'Anyone who would rather avoid two airports, two taxis and a lot of walking can stay in one seat the whole way.' },
                            { icon: Building2, t: 'Corporate and executive travel', d: <>Company bookings and senior staff transfers between the two capitals, including the Mercedes S-Class on request. See <Link href="/services/business/" className={link}>business and executive travel</Link>.</> },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f6f1e7] p-6">
                                <Icon className="w-6 h-6 text-[#0f6b78] mb-3" aria-hidden="true" />
                                <h3 className="text-[#0f2a33] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= AIRPORT ================= */}
            <section aria-labelledby="airport" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto rounded-3xl bg-[#0f2a33] text-white p-8 md:p-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
                    <div>
                        <Plane className="w-7 h-7 text-[#e9c48a] mb-4" aria-hidden="true" />
                        <h2 id="airport" className="text-3xl md:text-4xl font-extrabold mb-5">Abu Dhabi Airport to Riyadh, and Riyadh Airport Drop-offs</h2>
                        <p className="text-white/80 leading-relaxed mb-4">Landed in Abu Dhabi and heading to Riyadh? We can meet you at {AUH} and drive straight to the Kingdom. We can also take you from anywhere in Abu Dhabi to {RUH} for an onward flight. Airport pickups and drop-offs are subject to booking confirmation.</p>
                        <p className="text-white/80 leading-relaxed mb-6">For a flight out of Riyadh, send us the departure time. Because border waits vary, we plan the pickup with a wide margin rather than to the minute.</p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            <Link href={q({ from: AUH })} className="group inline-flex items-center gap-2 rounded-xl bg-[#e9c48a] px-5 py-3 font-bold text-[#0f2a33] hover:bg-[#f2d6a8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Quote AUH → Riyadh <Arrow /></Link>
                            <Link href={q({ to: RUH })} className="font-semibold text-[#e9c48a] hover:underline">Abu Dhabi → Riyadh Airport</Link>
                            <Link href="/riyadh-airport-taxi/" className="font-semibold text-[#e9c48a] hover:underline">Riyadh Airport transfers</Link>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-[#e9c48a] mb-3">Common Riyadh drop-offs</p>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            {['King Khalid Int’l Airport', 'Olaya', 'KAFD', 'Diplomatic Quarter', 'Al Malqa / Hittin', 'Riyadh hotels'].map((x) => (
                                <li key={x} className="flex items-center gap-2 rounded-lg bg-white/[0.08] px-3 py-2.5"><MapPin className="w-3.5 h-3.5 text-[#e9c48a] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section aria-labelledby="vehicles" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className={`${h2} mb-3`}>Choose Your Vehicle for Abu Dhabi to Riyadh</h2>
                    <p className="text-stone-600 mb-8 max-w-2xl">Passenger and luggage figures are realistic for a 900 km trip, not the maximum the vehicle can seat. Availability is confirmed for your date when you book.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {VEHICLES.map((v, i) => (
                            <article key={v.name} className={`rounded-2xl border overflow-hidden flex flex-col ${i < 3 ? 'border-[#0f6b78]/40' : 'border-[#0f2a33]/10'}`}>
                                <div className="relative aspect-[16/10] bg-[#eef4f3]">
                                    {v.image ? (
                                        <Image src={v.image} alt={v.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center"><Car className="w-12 h-12 text-[#0f6b78]/40" aria-hidden="true" /></div>
                                    )}
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-[#0f2a33]">{v.name}</h3>
                                    <p className={`font-black mt-1 ${v.price.endsWith('SAR') ? 'text-[#0f6b78] text-lg' : 'text-stone-500 text-sm'}`}>{v.price}</p>
                                    <p className="text-sm text-stone-600 mt-2 flex-1">{v.seats} · {v.bags}</p>
                                    <Link href={q({ vehicle: v.booking })} className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0f2a33] hover:text-[#0f6b78]">
                                        {v.price.endsWith('SAR') ? 'Book this vehicle' : 'Ask for a price'} <Arrow />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                    <p className="text-sm text-stone-600 mt-6">See every vehicle on the <Link href="/fleet/" className={link}>fleet page</Link>.</p>
                </div>
            </section>

            {/* ================= HOW TO BOOK ================= */}
            <section aria-labelledby="book" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-8`}>How to Book an Abu Dhabi to Riyadh Taxi</h2>
                    <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {[
                            ['Send your pickup and date', 'Your Abu Dhabi address, where you are going in Riyadh, the date, and how many passengers and suitcases.'],
                            ['Choose your vehicle', 'Sedan, Fortuner or GMC at the fixed prices above, or ask for a quote on a larger or premium vehicle.'],
                            ['Confirm and get driver details', 'Once the booking is confirmed, you receive the driver and vehicle details before the trip.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-white border border-[#0f2a33]/10 p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#0f2a33] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-[#0f2a33] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={solid}>Get My Abu Dhabi to Riyadh Quote <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0f2a33]/20 px-5 py-3 font-bold text-[#0f2a33] hover:border-[#0f6b78]"><WhatsAppIcon className="w-4 h-4 fill-current" /> Book on WhatsApp</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Taxi Service KSA · Saudi Arabia · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a></p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#0f2a33]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0f2a33] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2">
                        <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#0f2a33] mb-5">Popular UAE &amp; Saudi Arabia Routes</h2>
                        <div className="flex flex-wrap gap-2">
                            {[
                                ['Riyadh to Abu Dhabi', '/routes/riyadh-abu-dhabi/'],
                                ['Dubai to Riyadh', '/routes/dubai-riyadh/'],
                                ['Sharjah to Riyadh', '/routes/sharjah-riyadh/'],
                                ['Abu Dhabi to Dammam', '/routes/abu-dhabi-dammam/'],
                                ['Abu Dhabi to Jeddah', '/routes/abu-dhabi-jeddah/'],
                                ['Abu Dhabi to Makkah', '/routes/abu-dhabi-makkah/'],
                                ['Abu Dhabi to Madinah', '/routes/abu-dhabi-madinah/'],
                                ['Doha to Riyadh', '/routes/doha-riyadh/'],
                                ['Bahrain to Riyadh', '/routes/bahrain-riyadh/'],
                                ['Kuwait to Riyadh', '/routes/kuwait-riyadh/'],
                                ['Guide: Riyadh to Abu Dhabi by road', '/blog/riyadh-to-abu-dhabi-by-road-guide/'],
                                ['Abu Dhabi to Riyadh distance', '/distance/abu-dhabi-to-riyadh/'],
                            ].map(([l, h]) => (
                                <Link key={h} href={h} className="rounded-full border border-[#0f2a33]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#0f2a33] hover:border-[#0f6b78] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f6b78]">{l}</Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-extrabold text-[#0f2a33] mb-5">Related Services</h2>
                        <ul className="space-y-2 text-sm">
                            {[
                                ['GCC chauffeur service', '/services/gcc-chauffeur-service/'],
                                ['Al Batha border crossing', '/border-crossings/taxi-al-batha-border-crossing/'],
                                ['Intercity transfers', '/services/intercity/'],
                                ['Business and executive travel', '/services/business/'],
                                ['Our fleet', '/fleet/'],
                                ['Transport in Riyadh', '/locations/riyadh/'],
                            ].map(([l, h]) => (
                                <li key={h}><Link href={h} className={link}>{l}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
