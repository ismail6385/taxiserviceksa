import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Minus, Info, Users, Briefcase, Luggage, Building2, Home, ShieldCheck, FileText, Plane, Car, MapPin, Route } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';

const PAGE_URL = 'https://taxiserviceksa.com/routes/riyadh-dubai/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like to book Riyadh to Dubai. Pickup address, Dubai drop-off, date, passengers, luggage and vehicle: ')}`;
const BORDER_WA_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I want to check availability for a Riyadh to Dubai transfer via the Al Batha / Al Ghuwaifat border. My date and number of passengers: ')}`;
const RUH = 'King Khalid International Airport (RUH)';
const DXB = 'Dubai International Airport (DXB)';
const q = (p: Record<string, string>) => `/booking/?${new URLSearchParams({ from: 'Riyadh', to: 'Dubai', ...p }).toString()}`;

const TITLE = 'Riyadh to Dubai Taxi | Private Transfer from 3,500 SAR';
const DESCRIPTION = 'Book a private Riyadh to Dubai taxi with door-to-door service, professional drivers and border assistance. Sedan from 3,500 SAR and GMC from 4,500 SAR.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: PAGE_URL,
        languages: {
            en: PAGE_URL,
            ar: 'https://taxiserviceksa.com/ar/routes/riyadh-dubai/',
            'x-default': PAGE_URL,
        },
    },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car with driver from Riyadh to Dubai' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

// The three fixed fares for this route. Everything else on the page (cards, FAQ, schema) reads from here.
const FARES = [
    { name: 'Sedan', booking: 'Toyota Camry', price: 3500, seats: 'Up to 3–4 passengers', note: 'Toyota Camry or similar. Comfortable private transfer for a couple or a small family travelling light.' },
    { name: 'Toyota Fortuner', booking: 'Toyota Fortuner', price: 3800, seats: 'Up to 5–6 passengers', note: 'Spacious SUV for families and small groups with more luggage than a sedan can take.' },
    { name: 'GMC Yukon / Tahoe', booking: 'GMC Yukon XL / Denali', price: 4500, seats: 'Up to 6–7 passengers', note: 'Premium full-size SUV with extra luggage space. Popular with families for the long drive.' },
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
    { name: 'Sedan (Toyota Camry)', price: sar(SEDAN.price), seats: '3–4 passengers', bags: '2 large suitcases', image: '/toyota-camry.webp', alt: 'Toyota Camry for Riyadh to Dubai private transfer', booking: 'Toyota Camry' },
    { name: 'Toyota Fortuner', price: sar(FORTUNER.price), seats: '5–6 passengers', bags: '3–4 suitcases', image: null, alt: '', booking: 'Toyota Fortuner' },
    { name: 'GMC Yukon / Tahoe', price: sar(GMC.price), seats: '6–7 passengers', bags: '4–5 suitcases', image: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', alt: 'GMC Yukon private taxi for Riyadh to Dubai transfer', booking: 'GMC Yukon XL / Denali' },
    { name: 'Cadillac Escalade', price: 'Price on request', seats: 'Up to 7 passengers', bags: 'Up to 4 suitcases', image: '/fleet/cadillac-escalade-chauffeur-service-ksa.webp', alt: 'Cadillac Escalade chauffeur service from Riyadh to Dubai', booking: 'Cadillac Escalade' },
    { name: 'Hyundai Staria VIP', price: 'Price on request', seats: 'Up to 7 passengers', bags: 'Up to 4 suitcases', image: '/hyundai-staria.webp', alt: 'Hyundai Staria VIP van for a family trip from Riyadh to Dubai', booking: 'Hyundai Staria VIP' },
    { name: 'Mercedes S-Class', price: 'Price on request', seats: 'Up to 3 passengers', bags: '2 suitcases', image: '/fleet/mercedes-s-class-vip-chauffeur-service-saudi.webp', alt: 'Mercedes S-Class executive car for Riyadh to Dubai', booking: 'Mercedes S-Class' },
    { name: 'Mercedes Sprinter', price: 'Price on request', seats: 'Larger groups', bags: 'Depends on seating layout', image: '/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp', alt: 'Mercedes Sprinter group van for Riyadh to Dubai', booking: 'Mercedes Sprinter' },
];

const faqs = [
    { q: 'How much is a taxi from Riyadh to Dubai?', a: `Private Riyadh to Dubai transfers start at ${sar(SEDAN.price)} for a sedan, ${sar(FORTUNER.price)} for a Toyota Fortuner and ${sar(GMC.price)} for a GMC Yukon/Tahoe. The price is for the whole vehicle, one way, from your address in Riyadh to your address in Dubai. Cadillac Escalade, Hyundai Staria VIP, Mercedes S-Class and Sprinter are quoted on request.` },
    { q: 'How long does Riyadh to Dubai by car take?', a: 'Plan for around 10–12 hours or more door to door. The driving itself is roughly 9–10 hours; border processing, traffic, rest stops and your exact pickup and drop-off points add to that, and the border is the part nobody can time precisely.' },
    { q: 'How far is Riyadh from Dubai by road?', a: 'Approximately 990–1,000 km, depending on where in Riyadh you are collected and where in Dubai you are going.' },
    { q: 'Where is the Riyadh Dubai border crossing?', a: 'At Al Batha on the Saudi side and Al Ghuwaifat on the UAE side, in the far east of Saudi Arabia where it meets Abu Dhabi emirate. You leave Saudi Arabia at Al Batha and enter the UAE at Al Ghuwaifat a short distance further on.' },
    { q: 'What documents do I need to travel from Saudi Arabia to Dubai by car?', a: 'A valid passport, permission to enter the UAE (a visa where your nationality needs one), and - for Saudi residents - a valid Iqama and exit/re-entry visa. Requirements depend on your nationality and residency and can change, so confirm your own eligibility before you travel. The driver cannot arrange passenger visas.' },
    { q: 'Is border vehicle insurance included?', a: 'Yes. The vehicle insurance needed to drive our car into the UAE is included in the fare, along with fuel and road tolls. Passenger visa fees are not included.' },
    { q: 'Can I book a Riyadh to Dubai Airport transfer?', a: `Yes. We can collect you at ${RUH} or anywhere in Riyadh and drop you at ${DXB}. If you have a flight to catch, tell us the departure time so the pickup leaves a generous margin for the border.` },
    { q: 'Can I travel with luggage?', a: 'Yes. Tell us how many suitcases you have when you book and we will suggest a vehicle with enough room. As a guide, a sedan takes about 2 large cases and a GMC Yukon about 4–5.' },
    { q: 'Can families book a private SUV?', a: 'Yes. The Toyota Fortuner and GMC Yukon/Tahoe are the usual choice for families. The car is yours alone for the whole trip, and you can stop for food, prayer and rest on the way. Child seats can be requested and are subject to availability.' },
    { q: 'Can I book a round trip?', a: 'Yes. Tick the return option in the quote form or tell us your return date, and we will quote the Dubai to Riyadh leg as well.' },
    { q: 'Do you provide a chauffeur for the full journey?', a: 'Yes. One driver takes you from your pickup in Riyadh, across the border and to your drop-off in Dubai. You do not change cars at the border.' },
    { q: 'Can I book a GMC Yukon from Riyadh to Dubai?', a: `Yes. The GMC Yukon / Chevrolet Tahoe is ${sar(GMC.price)} one way for up to 6–7 passengers, subject to availability on your date.` },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Riyadh to Dubai private taxi transfer',
            url: PAGE_URL,
            serviceType: 'Private cross-border transfer',
            description: 'Private door-to-door car with driver from Riyadh to Dubai via the Al Batha / Al Ghuwaifat border, with vehicle-side border assistance.',
            provider: { '@id': 'https://taxiserviceksa.com/#organization' },
            areaServed: [{ '@type': 'City', name: 'Riyadh' }, { '@type': 'City', name: 'Dubai' }],
            offers: FARES.map((f) => ({ '@type': 'Offer', name: `${f.name} - Riyadh to Dubai, one way`, price: f.price, priceCurrency: 'SAR', url: PAGE_URL })),
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

// Illustration (not a photo): desert highway running east to a border post, the Gulf coast and a city skyline beyond.
function DesertRoad({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="rd-sky" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#0f2a33" />
                    <stop offset="0.65" stopColor="#1d4650" />
                    <stop offset="1" stopColor="#c99a5b" />
                </linearGradient>
            </defs>
            <rect width="1440" height="640" fill="url(#rd-sky)" />
            <circle cx="1210" cy="420" r="60" fill="#e9c48a" fillOpacity="0.4" />
            {/* Dunes */}
            <path d="M0 520 C 180 470, 330 500, 480 470 C 640 440, 760 500, 920 480 C 1060 462, 1180 500, 1440 470 V 640 H 0 Z" fill="#a8783f" fillOpacity="0.55" />
            <path d="M0 570 C 220 540, 420 575, 640 548 C 860 522, 1060 560, 1440 535 V 640 H 0 Z" fill="#7d5a30" fillOpacity="0.7" />
            {/* Skyline */}
            <g fill="#0f2a33" fillOpacity="0.55">
                <rect x="1250" y="430" width="16" height="70" />
                <rect x="1272" y="400" width="12" height="100" />
                <path d="M1294 500 V 330 L 1300 300 L 1306 330 V 500 Z" />
                <rect x="1316" y="440" width="22" height="60" />
                <rect x="1344" y="415" width="14" height="85" />
            </g>
            {/* Border post */}
            <g fill="#e9c48a" fillOpacity="0.85">
                <rect x="980" y="500" width="6" height="46" />
                <rect x="1040" y="500" width="6" height="46" />
                <rect x="974" y="494" width="78" height="8" />
            </g>
            {/* Road */}
            <path d="M0 610 C 300 600, 560 590, 800 572 C 940 562, 1040 548, 1160 530 C 1240 518, 1320 508, 1440 500" fill="none" stroke="#e9c48a" strokeWidth="3" strokeDasharray="14 10" strokeLinecap="round" />
        </svg>
    );
}

export default function RiyadhDubaiRoutePage() {
    return (
        <div className="riyadh-dubai-page bg-[#f6f1e7]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0f2a33]">
                <DesertRoad className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0f2a33] via-[#0f2a33]/60 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#e9c48a] mb-4`}>Saudi Arabia → UAE • Private transfer</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5">Riyadh to Dubai Taxi</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            Private door-to-door taxi and chauffeur transfers from Riyadh to Dubai with professional drivers, comfortable vehicles and Saudi-UAE border assistance.
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
                                <a href={QUOTE_HREF}>Book Riyadh → Dubai <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp for Availability</a>
                            </Button>
                        </div>
                        <p className="text-sm text-white/60">Per vehicle • One way • Riyadh address to Dubai address</p>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Plan your Riyadh → Dubai transfer"
                            cta="Get My Riyadh to Dubai Quote"
                            fromPlaceholder="Home, hotel, office or airport in Riyadh"
                            toPlaceholder="Hotel, address or airport in Dubai"
                            fromChips={['Riyadh city', RUH, 'Riyadh hotel', 'Business address']}
                            toChips={['Dubai city', DXB, 'Downtown Dubai', 'Business Bay', 'Dubai Marina', 'Jumeirah', 'Palm Jumeirah']}
                            showFlight="auto"
                            returnNote="Return trip Dubai to Riyadh also needed - date and time to confirm."
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
                        ['Distance', '≈ 990–1,000 km', 'Varies with pickup and drop-off'],
                        ['Driving time', '≈ 9–10 hours', 'Border time is extra'],
                        ['Border', 'Al Batha / Al Ghuwaifat', 'Saudi exit, UAE entry'],
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
                        <h2 id="intro" className={`${h2} mb-2`}>Riyadh to Dubai Private Taxi Transfer</h2>
                        <p>
                            A Riyadh to Dubai taxi with us is a private car and driver for the whole journey: we collect you from your home, hotel or office in Riyadh, or from {RUH}, and drive you to the door of your hotel, apartment or office in Dubai. Nobody else shares the vehicle and you do not change cars at the border.
                        </p>
                        <p>
                            The road distance is approximately 990–1,000 km. The driving alone usually takes around 9–10 hours, depending on the exact route and road conditions. On top of that comes the border: you leave Saudi Arabia at Al Batha and enter the UAE at Al Ghuwaifat, and the time spent there depends on queues and checks on the day. Most passengers should allow 10–12 hours or more from pickup to drop-off.
                        </p>
                        <p>
                            Flying is faster, and we would not pretend otherwise. People choose the road because of what happens either side of the flight. There is no airport check-in, no baggage allowance to worry about and no taxi to find on arrival in Dubai. The car leaves when you are ready, stops when you need it to, and finishes at the address you gave us.
                        </p>
                        <p>
                            That suits some travellers particularly well. Families moving between the two cities often have more luggage than an airline allows and children who travel better with regular stops. Business travellers use the drive to work, take calls or rest between a morning in Riyadh and an evening in Dubai. Small private groups find that one SUV for everyone compares well with several plane tickets plus airport transfers at both ends. And people relocating, or carrying equipment, simply prefer to see their bags loaded once and unloaded once.
                        </p>
                        <p>
                            The driver handles the vehicle side of the crossing, including the car&apos;s papers and its UAE insurance, and helps you through the order of the checks. Your passport, your visa and your eligibility to leave Saudi Arabia and enter the UAE remain your responsibility, which is why there is a short <a href="#documents" className={link}>documents checklist</a> further down this page.
                        </p>
                        <p>
                            Drop-off can be anywhere in Dubai, from Downtown and Business Bay to Dubai Marina, Jumeirah, Palm Jumeirah or {DXB}. If you are going further, we also run <Link href="/routes/riyadh-abu-dhabi/" className={link}>Riyadh to Abu Dhabi</Link> and <Link href="/routes/riyadh-sharjah/" className={link}>Riyadh to Sharjah</Link> transfers, and the return journey is covered on the <Link href="/routes/dubai-riyadh/" className={link}>Dubai to Riyadh</Link> page.
                        </p>
                    </div>
                    <aside className="lg:pt-16">
                        <div className="rounded-3xl bg-[#0f2a33] text-white p-7">
                            <p className={`${eyebrow} text-[#e9c48a] mb-4`}>At a glance</p>
                            <ul className="space-y-3 text-sm">
                                {['Private car and driver, one way or return', 'Pickup anywhere in Riyadh or at RUH', 'Drop-off anywhere in Dubai or at DXB', 'Vehicle-side border assistance', 'Stops for food, prayer and rest on the way', 'Fare per vehicle, not per passenger'].map((x) => (
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
                    <h2 id="prices" className={`${h2} mb-3`}>Riyadh to Dubai Taxi Prices</h2>
                    <p className="text-stone-600 mb-8">Private vehicle • One-way • Door-to-door. The price is for the car, not per person.</p>
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
                        Ask us about the Cadillac Escalade, Mercedes S-Class, Hyundai Staria VIP and Mercedes Sprinter - these are quoted on request. Prices cover a pickup in Riyadh and a drop-off in Dubai; other start or end points are quoted separately.
                    </p>
                </div>
            </section>

            {/* ================= INCLUDED ================= */}
            <section aria-labelledby="included" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="included" className={`${h2} mb-8`}>What&apos;s Included in Your Riyadh to Dubai Transfer?</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="rounded-2xl bg-[#eef4f3] p-7">
                            <h3 className="text-[#0f2a33] mb-4">Included in the fare</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 text-sm text-stone-700">
                                {['The private vehicle you booked', 'A professional driver for the whole trip', 'Pickup at your Riyadh address', 'Drop-off at your Dubai address', 'Fuel and road tolls', 'UAE insurance for the vehicle', 'Vehicle-side border assistance', 'Help loading and unloading luggage', 'Route planning and stops on the way'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#0f6b78] shrink-0" aria-hidden="true" />{x}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-[#0f2a33]/10 p-7">
                            <h3 className="text-[#0f2a33] mb-4">Not included</h3>
                            <ul className="space-y-2.5 text-sm text-stone-700 mb-5">
                                {['Passenger visas and any personal immigration fees', 'Meals and hotel costs on the way', 'Extra detours or long waits that were not agreed when booking'].map((x) => (
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
                        <h2 id="time" className={`${h2} mb-5`}>Riyadh to Dubai Distance and Journey Time</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">The drive from Riyadh to Dubai is approximately 990–1,000 km by road. Driving time is around 9–10 hours depending on the route and road conditions.</p>
                        <p className="text-stone-700 leading-relaxed mb-4">The complete journey usually takes 10–12 hours or more. Border processing, traffic in Riyadh and Dubai, rest stops and your exact pickup and drop-off points all change the total, and we cannot guarantee an exact arrival time.</p>
                        <p className="text-stone-700 leading-relaxed">Weekends and public holidays tend to be busier at the border. If you need to be in Dubai for a flight, a check-in or a meeting, tell us and we will set an earlier pickup.</p>
                    </div>
                    <div className={`${card} p-6`}>
                        <p className="text-sm font-bold text-[#0f2a33] mb-4">Where the time goes</p>
                        <ul className="space-y-3 text-sm">
                            {[
                                ['Driving', 'About 9–10 hours'],
                                ['Saudi exit and UAE entry', 'Varies with queues and checks'],
                                ['Rest, food and prayer stops', 'As many as you need'],
                                ['City traffic at either end', 'Depends on time of day'],
                            ].map(([k, v]) => (
                                <li key={k} className="flex justify-between gap-4 border-b border-[#0f2a33]/10 pb-3 last:border-0 last:pb-0">
                                    <span className="text-stone-600">{k}</span>
                                    <span className="font-semibold text-[#0f2a33] text-right">{v}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 rounded-xl bg-[#0f2a33] px-4 py-3 text-sm font-bold text-white">Allow 10–12+ hours door to door</p>
                    </div>
                </div>
            </section>

            {/* ================= ROUTE ================= */}
            <section aria-labelledby="route" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
                    <div>
                        <Route className="w-7 h-7 text-[#0f6b78] mb-4" aria-hidden="true" />
                        <h2 id="route" className={`${h2} mb-5`}>Riyadh to Dubai Driving Route</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">The usual road runs south-east out of Riyadh through Al Kharj and Haradh, then east across the desert to the Al Batha border. Once in the UAE, it follows the coast road through Abu Dhabi emirate to Dubai.</p>
                        <p className="text-stone-700 leading-relaxed mb-5">The exact route can vary with road conditions, roadworks and your final pickup and drop-off locations.</p>
                        <p className="text-sm text-stone-600">More detail on the road itself: <Link href="/blog/car-with-driver-riyadh-to-dubai/" className={link}>Riyadh to Dubai with a car and driver</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-[#06232b] text-white p-7 md:p-10">
                        <RouteJourney
                            vehicle
                            palette="gulf"
                            stops={[
                                { title: 'Riyadh', text: 'Pickup at your home, hotel, office or King Khalid International Airport.' },
                                { title: 'Al Kharj → Haradh', text: 'South-east out of the capital and across the desert. A good place for a first rest stop.' },
                                { title: 'Al Batha (Saudi exit)', text: 'Saudi passport control and vehicle exit checks.', accent: true },
                                { title: 'Al Ghuwaifat (UAE entry)', text: 'UAE passport control, vehicle entry and insurance checks.', accent: true },
                                { title: 'Abu Dhabi emirate', text: 'The coast road east through Abu Dhabi emirate towards Dubai.' },
                                { title: 'Dubai', text: 'Drop-off at your hotel, home, office or Dubai International Airport.' },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ================= BORDER ================= */}
            <section aria-labelledby="border" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <ShieldCheck className="w-7 h-7 text-[#0f6b78] mb-4" aria-hidden="true" />
                    <h2 id="border" className={`${h2} mb-5`}>Riyadh to Dubai Saudi-UAE Border Crossing</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-10">Road traffic between Saudi Arabia and the UAE crosses at Al Batha on the Saudi side and Al Ghuwaifat on the UAE side. They are two separate posts a short drive apart: you complete Saudi exit formalities first, then UAE entry.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                        <div className={`${card} p-7`}>
                            <p className={`${eyebrow} text-[#0f6b78] mb-2`}>Step 1</p>
                            <h3 className="text-[#0f2a33] mb-3">Al Batha - leaving Saudi Arabia</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">Passengers go through Saudi passport control, where exit permission is checked. Saudi residents need a valid Iqama and exit/re-entry visa. The vehicle&apos;s registration and exit paperwork are checked at the same time.</p>
                        </div>
                        <div className={`${card} p-7`}>
                            <p className={`${eyebrow} text-[#0f6b78] mb-2`}>Step 2</p>
                            <h3 className="text-[#0f2a33] mb-3">Al Ghuwaifat - entering the UAE</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">Passengers go through UAE immigration with their passport and entry permission. The vehicle needs valid UAE insurance and can be inspected before it is allowed through.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="rounded-2xl bg-[#0f2a33] text-white p-7">
                            <h3 className="mb-4">What the driver does</h3>
                            <ul className="space-y-2.5 text-sm text-white/85">
                                {['Carries the vehicle registration and exit papers', 'Arranges the vehicle insurance needed for the UAE', 'Handles the vehicle inspection', 'Tells you which queue to join and in what order', 'Waits for you and continues to Dubai'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#e9c48a] shrink-0" aria-hidden="true" />{x}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl bg-white border-l-4 border-[#c99a5b] p-7">
                            <h3 className="text-[#0f2a33] mb-4">What stays with you</h3>
                            <p className="text-sm text-stone-700 leading-relaxed mb-3">Our driver handles the vehicle-side crossing requirements and assists you through the process. Passengers remain responsible for their own passport, visa and immigration documents.</p>
                            <p className="text-sm text-stone-700 leading-relaxed mb-5">Waiting times at the border vary and nobody can promise how long processing will take. Keep your passports and residency cards in a bag inside the car, not in the boot.</p>
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
                        <h2 id="docs" className={`${h2} mb-5`}>What Documents Do I Need to Travel from Riyadh to Dubai?</h2>
                        <p className="text-stone-700 leading-relaxed">Check this before you book, for every passenger in the car, including children.</p>
                    </div>
                    <div>
                        <ul className="space-y-3 mb-5">
                            {[
                                ['Valid passport', 'Check the expiry date well ahead of travel.'],
                                ['UAE entry permission', 'A UAE visa where your nationality requires one. GCC citizens usually travel on their national ID.'],
                                ['Saudi residency (Iqama)', 'For Saudi residents - it must be valid.'],
                                ['Exit/re-entry visa', 'For Saudi residents who plan to come back to Saudi Arabia.'],
                                ['Anything else the border asks for', 'Rules for your situation may add documents.'],
                            ].map(([k, v]) => (
                                <li key={k} className="flex gap-3 rounded-xl bg-[#f6f1e7] p-4">
                                    <Check className="w-5 h-5 mt-0.5 text-[#0f6b78] shrink-0" aria-hidden="true" />
                                    <span><span className="font-bold text-[#0f2a33]">{k}</span><span className="block text-sm text-stone-600">{v}</span></span>
                                </li>
                            ))}
                        </ul>
                        <p className="flex gap-3 text-sm text-stone-600"><Info className="w-4 h-4 mt-0.5 text-[#0f6b78] shrink-0" aria-hidden="true" />Immigration requirements can change. Please confirm your own eligibility with the official Saudi and UAE authorities before you travel; we cannot give legal or visa advice.</p>
                    </div>
                </div>
            </section>

            {/* ================= TAXI VS FLIGHT ================= */}
            <section aria-labelledby="vs" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 id="vs" className={`${h2} mb-4`}>Riyadh to Dubai Taxi vs Flying</h2>
                    <p className="text-stone-700 leading-relaxed mb-8">Flying is normally much faster. A private car trades time for door-to-door convenience, privacy and flexibility. Which is better depends on who is travelling and how much they are carrying.</p>
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
                                    ['Door-to-door', 'Yes', 'No - transfers needed at both airports'],
                                    ['Airport check-in and security', 'None', 'Yes'],
                                    ['Private vehicle', 'Yes', 'No'],
                                    ['Pickup time', 'You choose', 'Set by the flight schedule'],
                                    ['Luggage', 'Limited only by vehicle size', 'Airline baggage rules'],
                                    ['Journey time', 'Longer - a full day on the road', 'Significantly faster'],
                                    ['Border crossing', 'Land border at Al Batha / Al Ghuwaifat', 'Airport immigration'],
                                    ['Best for', 'Families, groups, heavy luggage, private travel', 'Time-sensitive solo or light travellers'],
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
                    <h2 id="who" className={`${h2} mb-8`}>Who Books a Private Riyadh to Dubai Taxi?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: Users, t: 'Families', d: 'One car for everyone, room for the bags, and stops whenever the children need them. The Fortuner and GMC Yukon are the usual choice.' },
                            { icon: Briefcase, t: 'Business travellers', d: 'Leave from the office or hotel, work or rest on the way, and arrive at your Dubai meeting address without an airport in between.' },
                            { icon: Users, t: 'Private groups', d: 'Friends or colleagues travelling together can split one vehicle. Larger groups can ask about the Staria VIP or a Sprinter.' },
                            { icon: Luggage, t: 'Passengers with luggage', d: 'Moving house, a long stay or equipment - no airline weight limits, and the bags are loaded once and unloaded once.' },
                            { icon: Home, t: 'Door-to-door travellers', d: 'Older passengers, or anyone who would rather not deal with two airports and two taxis, can stay in one seat the whole way.' },
                            { icon: Building2, t: 'Corporate and executive travel', d: <>Company bookings and senior staff transfers, including the Mercedes S-Class on request. See <Link href="/services/business/" className={link}>business and executive travel</Link>.</> },
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
                        <h2 id="airport" className="text-3xl md:text-4xl font-extrabold mb-5">Riyadh to Dubai Airport Private Transfer</h2>
                        <p className="text-white/80 leading-relaxed mb-4">We can collect you at {RUH} after you land and drive you straight to Dubai, or take you from anywhere in Riyadh to {DXB} for an onward flight. Airport pickups and drop-offs are subject to booking confirmation.</p>
                        <p className="text-white/80 leading-relaxed mb-6">If you are catching a flight from DXB, send us the departure time. Because border waits vary, we plan the pickup with a wide margin rather than to the minute.</p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            <Link href={q({ to: DXB })} className="group inline-flex items-center gap-2 rounded-xl bg-[#e9c48a] px-5 py-3 font-bold text-[#0f2a33] hover:bg-[#f2d6a8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Quote Riyadh → DXB <Arrow /></Link>
                            <Link href="/riyadh-airport-taxi/" className="font-semibold text-[#e9c48a] hover:underline">Riyadh Airport transfers</Link>
                            <Link href="/riyadh-alternative-airports/" className="font-semibold text-[#e9c48a] hover:underline">Riyadh flight cancelled? Compare airports</Link>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-[#e9c48a] mb-3">Common Dubai drop-offs</p>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            {['Dubai International Airport', 'Downtown Dubai', 'Business Bay', 'Dubai Marina', 'Jumeirah', 'Palm Jumeirah'].map((x) => (
                                <li key={x} className="flex items-center gap-2 rounded-lg bg-white/[0.08] px-3 py-2.5"><MapPin className="w-3.5 h-3.5 text-[#e9c48a] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section aria-labelledby="vehicles" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className={`${h2} mb-3`}>Choose Your Vehicle for Riyadh to Dubai</h2>
                    <p className="text-stone-600 mb-8 max-w-2xl">Passenger and luggage figures are realistic for a 1,000 km trip, not the maximum the vehicle can seat. Availability is confirmed for your date when you book.</p>
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

            {/* ================= REAL TRIP ================= */}
            <section aria-labelledby="trip" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-8 items-start">
                    <div>
                        <h2 id="trip" className={`${h2} mb-3`}>Real Riyadh to Dubai GMC Transfer</h2>
                        <p className="text-stone-600 mb-6">Footage from one of our own trips on this route.</p>
                        <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-[#0f2a33]/10 aspect-video bg-black">
                            <iframe
                                src="https://www.youtube-nocookie.com/embed/eu4SNAISbNk"
                                loading="lazy"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                title="Riyadh to Dubai GMC transfer - trip video"
                                className="w-full h-full border-0"
                            />
                        </div>
                    </div>
                    <dl className={`${card} p-6 lg:mt-24 space-y-3 text-sm`}>
                        {[
                            ['Vehicle', 'GMC Yukon'],
                            ['Route', 'Riyadh → Dubai'],
                            ['Border', 'Al Batha / Al Ghuwaifat'],
                            ['Fare today', sar(GMC.price)],
                        ].map(([k, v]) => (
                            <div key={k} className="flex justify-between gap-4 border-b border-[#0f2a33]/10 pb-3 last:border-0 last:pb-0">
                                <dt className="text-stone-500">{k}</dt>
                                <dd className="font-semibold text-[#0f2a33] text-right">{v}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* ================= HOW TO BOOK ================= */}
            <section aria-labelledby="book" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-8`}>How to Book a Riyadh to Dubai Taxi</h2>
                    <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {[
                            ['Send your pickup and date', 'Your Riyadh address, where you are going in Dubai, the date, and how many passengers and suitcases.'],
                            ['Choose your vehicle', 'Sedan, Fortuner or GMC at the fixed prices above, or ask for a quote on a larger or premium vehicle.'],
                            ['Confirm and get driver details', 'Once the booking is confirmed, you receive the driver and vehicle details before the trip.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-[#f6f1e7] p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#0f2a33] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-[#0f2a33] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={solid}>Get My Riyadh to Dubai Quote <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0f2a33]/20 px-5 py-3 font-bold text-[#0f2a33] hover:border-[#0f6b78]"><WhatsAppIcon className="w-4 h-4 fill-current" /> Book on WhatsApp</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Taxi Service KSA · Saudi Arabia · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a></p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
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
            <section aria-labelledby="related" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2">
                        <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#0f2a33] mb-5">Popular Saudi Arabia &amp; UAE Routes</h2>
                        <div className="flex flex-wrap gap-2">
                            {[
                                ['Dubai to Riyadh', '/routes/dubai-riyadh/'],
                                ['Riyadh to Abu Dhabi', '/routes/riyadh-abu-dhabi/'],
                                ['Riyadh to Sharjah', '/routes/riyadh-sharjah/'],
                                ['Dammam to Dubai', '/routes/dammam-dubai/'],
                                ['Jeddah to Dubai', '/routes/jeddah-dubai/'],
                                ['Riyadh to Doha', '/routes/riyadh-doha/'],
                                ['Riyadh to Kuwait', '/routes/riyadh-kuwait/'],
                                ['Riyadh to Dammam', '/routes/riyadh-dammam/'],
                                ['Riyadh to Jeddah', '/routes/riyadh-jeddah/'],
                                ['Riyadh to Makkah', '/routes/riyadh-makkah/'],
                                ['Guide: Riyadh to Dubai Airport by car', '/blog/riyadh-to-dubai-airport-by-car/'],
                                ['Guide: Riyadh flights cancelled, travel by road', '/blog/riyadh-flights-cancelled-travel-by-road/'],
                            ].map(([l, h]) => (
                                <Link key={h} href={h} className="rounded-full border border-[#0f2a33]/15 px-4 py-2.5 text-sm font-semibold text-[#0f2a33] hover:border-[#0f6b78] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f6b78]">{l}</Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-extrabold text-[#0f2a33] mb-5">Related Services</h2>
                        <ul className="space-y-2 text-sm">
                            {[
                                ['GCC chauffeur service', '/services/gcc-chauffeur-service/'],
                                ['Airport transfers', '/services/airport-transfers/'],
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
