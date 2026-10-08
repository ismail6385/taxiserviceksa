import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Info, Users, Briefcase, Plane, Globe2, ShieldCheck, FileText, MapPin, Clock } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';

const PAGE_URL = 'https://taxiserviceksa.com/routes/riyadh-bahrain/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const PRICE = 2000;
const PRICE_TEXT = '2,000 SAR';
const SUV = 'GMC Yukon XL / Denali'; // booking-system vehicle name (lib/supabase.ts)
const RUH = 'King Khalid International Airport (RUH)';
const BAH = 'Bahrain International Airport (BAH)';
const CAUSEWAY_GUIDE = '/border-crossings/taxi-king-fahd-causeway-border-crossing/';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent(`Hello, I want to check SUV availability for Riyadh to Bahrain (${PRICE_TEXT}). Pickup, Bahrain drop-off, date, passengers and luggage: `)}`;
const book = (vehicle: string) => `/booking/?${new URLSearchParams({ from: 'Riyadh', to: 'Bahrain', vehicle }).toString()}`;

const TITLE = `Riyadh to Bahrain Taxi | Private SUV Transfer from ${PRICE_TEXT}`;
const DESCRIPTION = `Book a private Riyadh to Bahrain SUV transfer via the King Fahd Causeway from ${PRICE_TEXT}. Door-to-door service, professional drivers and cross-border assistance.`;

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private SUV from Riyadh to Bahrain via the King Fahd Causeway' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

// Other vehicles run this route but have no confirmed fixed fare, so they are quoted per booking.
const ON_REQUEST = [
    { name: 'Toyota Camry (sedan)', seats: 'Up to 3–4 passengers, about 2 suitcases', booking: 'Toyota Camry' },
    { name: 'Hyundai Staria VIP', seats: 'Up to 7 passengers, about 4 suitcases', booking: 'Hyundai Staria VIP' },
    { name: 'Mercedes Sprinter', seats: 'Larger groups; luggage depends on seating', booking: 'Mercedes Sprinter' },
];

const faqs = [
    { q: 'How much is a private SUV from Riyadh to Bahrain?', a: `A private SUV transfer from Riyadh to Bahrain is ${PRICE_TEXT} one way, subject to booking confirmation and the agreed trip details.` },
    { q: 'How much is a taxi from Riyadh to Bahrain?', a: `Private Riyadh to Bahrain transfers vary by vehicle. The featured private SUV option is ${PRICE_TEXT} one way. A sedan, Hyundai Staria VIP or Mercedes Sprinter can be quoted on request.` },
    { q: 'How far is Riyadh from Bahrain by road?', a: 'Approximately 430–480 km, depending on the exact pickup and drop-off locations.' },
    { q: 'How long does Riyadh to Bahrain take by car?', a: 'Around 4–5 hours of driving, plus King Fahd Causeway and border processing, which varies with queues.' },
    { q: 'Does the Riyadh to Bahrain taxi cross the King Fahd Causeway?', a: 'Yes. The road journey normally crosses into Bahrain over the King Fahd Causeway, subject to the applicable requirements.' },
    { q: `Is the ${PRICE_TEXT} price per person?`, a: `No. ${PRICE_TEXT} is for the private SUV, not per passenger, as long as your group fits the vehicle's passenger and luggage capacity.` },
    { q: 'Are Causeway tolls included?', a: `Yes. Fuel and the King Fahd Causeway toll are included in the ${PRICE_TEXT} SUV fare.` },
    { q: 'Can I book a Riyadh to Bahrain airport transfer?', a: `Yes, subject to availability. Leave enough time for Causeway and border processing if you have a flight from ${BAH}.` },
    { q: 'Can you pick me up from Riyadh Airport?', a: `Yes. Pickup at ${RUH} can be arranged; send your arrival flight when booking.` },
    { q: 'Can you drop me at Bahrain Airport?', a: `Yes, subject to booking confirmation. Drop-off is at ${BAH}.` },
    { q: 'Do I need a Bahrain visa?', a: 'It depends on your nationality, residency status and the current Bahrain entry requirements. Check your own eligibility before you travel.' },
    { q: 'Can I travel with luggage?', a: 'Yes, within the SUV’s luggage capacity of about 4–5 large suitcases with a full load of passengers. Tell us your luggage when booking.' },
    { q: 'Can I book a return trip?', a: 'Yes, subject to availability and confirmation. Tick the return option in the form or send your return date.' },
    { q: 'Can families book the SUV?', a: 'Yes. The private SUV suits families and small groups of up to 6–7 passengers, within its passenger and luggage capacity.' },
    { q: 'What happens if the King Fahd Causeway is busy?', a: 'Causeway and immigration queues are outside the driver’s control. Allow extra time at weekends, during holidays and at peak periods.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Riyadh to Bahrain private SUV transfer',
            url: PAGE_URL,
            serviceType: 'Private cross-border transfer',
            description: 'Private door-to-door SUV with driver from Riyadh to Bahrain via the King Fahd Causeway, with vehicle-side border assistance.',
            provider: { '@id': 'https://taxiserviceksa.com/#organization' },
            areaServed: [{ '@type': 'City', name: 'Riyadh' }, { '@type': 'Country', name: 'Bahrain' }],
            offers: { '@type': 'Offer', name: 'Private SUV (GMC Yukon) - Riyadh to Bahrain, one way', price: PRICE, priceCurrency: 'SAR', url: PAGE_URL },
        },
        {
            '@type': 'Organization',
            '@id': 'https://taxiserviceksa.com/#organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
            telephone: PHONE,
            areaServed: ['Saudi Arabia', 'Bahrain'],
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const eyebrow = 'text-xs font-bold uppercase tracking-[0.22em]';
const link = 'font-semibold text-[#b8372c] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#0c2433]';
const card = 'rounded-2xl bg-white border border-[#0c2433]/10';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#c8402f] px-6 py-3.5 font-bold text-white hover:bg-[#a83527] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8402f] focus-visible:ring-offset-2';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

// Illustration (not a photo): the causeway running low across the Gulf towards the Bahrain shoreline.
function CausewayScene({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="rb-sky" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#0c2433" />
                    <stop offset="0.6" stopColor="#1c4a63" />
                    <stop offset="1" stopColor="#e39a6a" />
                </linearGradient>
            </defs>
            <rect width="1440" height="640" fill="url(#rb-sky)" />
            <circle cx="1180" cy="400" r="54" fill="#f6c99b" fillOpacity="0.4" />
            {/* Sea */}
            <rect x="0" y="500" width="1440" height="140" fill="#245c74" fillOpacity="0.75" />
            {/* Causeway deck and piers */}
            <path d="M0 520 C 400 506, 900 494, 1440 486" fill="none" stroke="#0c2433" strokeOpacity="0.7" strokeWidth="10" />
            <g stroke="#0c2433" strokeOpacity="0.55" strokeWidth="4">
                {Array.from({ length: 18 }, (_, i) => {
                    const x = 40 + i * 80;
                    const y = 520 - (x / 1440) * 34;
                    return <line key={x} x1={x} y1={y} x2={x} y2={y + 34} />;
                })}
            </g>
            {/* Border island tower */}
            <g fill="#0c2433" fillOpacity="0.7">
                <rect x="700" y="420" width="12" height="80" />
                <path d="M686 420 h40 l-6 -22 h-28 Z" />
            </g>
            {/* Bahrain shoreline */}
            <path d="M1260 486 C 1320 470, 1380 468, 1440 470 V 500 H 1260 Z" fill="#0c2433" fillOpacity="0.6" />
            <path d="M0 512 C 400 498, 900 486, 1440 478" fill="none" stroke="#f6c99b" strokeWidth="2.5" strokeDasharray="14 10" strokeLinecap="round" />
        </svg>
    );
}

export default function RiyadhBahrainRoutePage() {
    return (
        <div className="riyadh-bahrain-page bg-[#f4f6f7]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0c2433]">
                <CausewayScene className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0c2433] via-[#0c2433]/60 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#f6c99b] mb-4`}>Saudi Arabia → Bahrain • King Fahd Causeway</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-3">Riyadh to Bahrain Taxi</h1>
                        <p className="text-xl sm:text-2xl font-bold text-white/90 mb-4">Private Riyadh to Bahrain SUV Transfer</p>
                        <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-7 max-w-xl">
                            Travel from Riyadh to Bahrain in a private SUV with a professional driver, door-to-door pickup and drop-off, and assistance throughout the King Fahd Causeway journey.
                        </p>
                        <div className="inline-flex flex-col rounded-2xl bg-white text-[#0c2433] px-6 py-4 mb-7">
                            <span className="text-sm font-bold text-[#c8402f]">SUV</span>
                            <span className="text-4xl font-black leading-none mt-0.5">{PRICE_TEXT}</span>
                            <span className="text-sm font-semibold mt-1.5 text-stone-600">Private One-Way Transfer</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#c8402f] text-white hover:bg-[#a83527]">
                                <a href={QUOTE_HREF}>Book SUV — {PRICE_TEXT} <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp for Availability</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                            {['Private Vehicle', 'Door-to-Door', 'King Fahd Causeway', 'Professional Driver'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#f6c99b] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Book your Riyadh → Bahrain SUV"
                            cta={`Book SUV — ${PRICE_TEXT}`}
                            fromPlaceholder="Home, hotel, office or airport in Riyadh"
                            toPlaceholder="Hotel, address or airport in Bahrain"
                            fromChips={['Riyadh city', RUH, 'KAFD', 'Olaya', 'Diplomatic Quarter']}
                            toChips={['Manama', BAH, 'Seef', 'Juffair', 'Riffa', 'Muharraq']}
                            showFlight="auto"
                            returnNote="Return trip Bahrain to Riyadh also needed - date and time to confirm."
                            vehicleOptions={[
                                { value: SUV, label: `SUV (GMC Yukon) - ${PRICE_TEXT}` },
                                ...ON_REQUEST.map((v) => ({ value: v.booking, label: `${v.name} - price on request` })),
                            ]}
                            buttonClass="bg-[#c8402f] hover:bg-[#a83527] focus-visible:ring-[#c8402f]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= INTRODUCTION ================= */}
            <section aria-labelledby="intro" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10">
                    <div className="space-y-5 text-stone-700 leading-relaxed text-[1.05rem]">
                        <h2 id="intro" className={`${h2} mb-2`}>Riyadh to Bahrain Private SUV Transfer</h2>
                        <p>
                            Riyadh to Bahrain is an international road journey, and the last stretch of it runs over the sea. You cross the Eastern Province, reach the coast near Al Khobar, and drive onto the King Fahd Causeway, which carries you to the border post and on to Bahrain. We do the whole trip in one private SUV with one driver, from your door in Riyadh to your door in Bahrain.
                        </p>
                        <p>
                            The road distance is approximately 430–480 km, depending on where you are collected and where you are going. Driving usually takes around 4–5 hours. Causeway and border processing, traffic and rest stops come on top of that, so we cannot promise an exact arrival time, and weekends and holidays are noticeably busier at the crossing.
                        </p>
                        <p>
                            Pickup can be from your home, hotel or office, from business districts such as KAFD and Olaya, or from {RUH}. Drop-off is wherever you are staying or working in Bahrain: a hotel in Manama, Seef or Juffair, an address in Riffa or Muharraq, or {BAH}.
                        </p>
                        <p>
                            The SUV is the vehicle we feature on this route because it suits the people who usually book it. Families get room for everyone and their bags. Business travellers get a quiet, private car between a meeting in Riyadh and one in Manama. Groups share one vehicle and one fare instead of arranging several cars. Airport passengers go straight from one terminal to the other, or from their home to their flight.
                        </p>
                        <p>
                            Compared with shared or scheduled transport, a private SUV means you set the departure time, stop when you need to, and travel only with the people you know. Luggage travels with you, within the vehicle&apos;s capacity, without airline weight limits.
                        </p>
                        <p>
                            Already in the Eastern Province? We also run <Link href="/routes/dammam-bahrain/" className={link}>Dammam to Bahrain</Link> and <Link href="/routes/khobar-bahrain/" className={link}>Al Khobar to Bahrain</Link> transfers. For the trip home, see <Link href="/routes/bahrain-riyadh/" className={link}>Bahrain to Riyadh</Link>.
                        </p>
                    </div>
                    <aside className="lg:pt-16">
                        <dl className="rounded-3xl bg-[#0c2433] text-white p-7 space-y-4 text-sm">
                            {[
                                ['Distance', 'Approx. 430–480 km'],
                                ['Driving time', 'Around 4–5 hours'],
                                ['Crossing', 'King Fahd Causeway'],
                                ['Vehicle', 'Private SUV (GMC Yukon)'],
                                ['Fare', `${PRICE_TEXT}, one way`],
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

            {/* ================= PRICE ================= */}
            <section aria-labelledby="price" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="price" className={`${h2} mb-8`}>Riyadh to Bahrain Taxi Price</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-5">
                        <article className="rounded-3xl bg-[#0c2433] text-white overflow-hidden grid grid-cols-1 sm:grid-cols-2">
                            <div className="relative min-h-[220px]">
                                <Image src="/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp" alt="GMC Yukon private taxi from Riyadh to Bahrain" fill sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                            </div>
                            <div className="p-7 flex flex-col">
                                <h3 className="text-white">Private SUV / GMC Yukon</h3>
                                <p className="text-5xl font-black text-[#f6c99b] mt-2">{PRICE.toLocaleString('en-US')} <span className="text-lg font-semibold text-white/70">SAR</span></p>
                                <p className="text-sm text-white/70 mt-1 mb-4">One-way private transfer · Up to 6–7 passengers</p>
                                <p className="text-sm text-white/80 mb-4">Suitable for families, groups and passengers travelling with luggage.</p>
                                <ul className="flex flex-wrap gap-2 mb-6 text-xs">
                                    {['Professional Chauffeur', 'Private Vehicle', 'Door-to-Door Service', 'King Fahd Causeway Route'].map((x) => <li key={x} className="rounded-full bg-white/10 px-3 py-1.5">{x}</li>)}
                                </ul>
                                <Link href={book(SUV)} className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#c8402f] px-6 py-3.5 font-bold text-white hover:bg-[#a83527] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Book SUV — {PRICE_TEXT} <Arrow /></Link>
                            </div>
                        </article>
                        <div className={`${card} p-7`}>
                            <h3 className="text-[#0c2433] mb-1">Other vehicles</h3>
                            <p className="text-sm text-stone-600 mb-5">Available on this route with the price confirmed when you book.</p>
                            <ul className="space-y-3">
                                {ON_REQUEST.map((v) => (
                                    <li key={v.name} className="flex items-center justify-between gap-4 rounded-xl bg-[#f4f6f7] px-4 py-3">
                                        <span>
                                            <span className="block font-bold text-[#0c2433] text-sm">{v.name}</span>
                                            <span className="block text-xs text-stone-600">{v.seats}</span>
                                        </span>
                                        <Link href={book(v.booking)} className="shrink-0 text-xs font-bold text-[#b8372c] hover:underline">Price on request</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= INCLUDED ================= */}
            <section aria-labelledby="included" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
                    <h2 id="included" className={h2}>What&apos;s Included in the Riyadh to Bahrain SUV Transfer?</h2>
                    <div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                            {['Private SUV for your group only', 'Professional driver', 'Door-to-door pickup in Riyadh', 'Door-to-door drop-off in Bahrain', 'Fuel', 'King Fahd Causeway toll', 'Vehicle-side border assistance', 'Help with luggage'].map((x) => (
                                <li key={x} className="flex gap-2.5 rounded-xl bg-[#f4f6f7] px-4 py-3 text-sm text-[#0c2433]"><Check className="w-4 h-4 mt-0.5 text-[#c8402f] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-stone-600"><span className="font-semibold text-[#0c2433]">Not included:</span> passenger visas or entry fees, meals and personal expenses, and detours or long waits not agreed when booking.</p>
                    </div>
                </div>
            </section>

            {/* ================= DISTANCE + ROUTE ================= */}
            <section aria-labelledby="time" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <Clock className="w-7 h-7 text-[#c8402f] mb-4" aria-hidden="true" />
                        <h2 id="time" className={`${h2} mb-5`}>Riyadh to Bahrain Distance and Travel Time</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">Approximately 430–480 km by road. Driving is usually around 4–5 hours before allowing for King Fahd Causeway processing, border procedures, traffic and rest stops.</p>
                        <p className="text-stone-700 leading-relaxed mb-10">The total journey can take longer during weekends, holidays and busy periods. We do not guarantee a fixed arrival time; if you have a flight or an appointment in Bahrain, tell us and we will set an earlier pickup.</p>

                        <h2 id="route" className={`${h2} mb-5`}>Riyadh to Bahrain Driving Route</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">The road runs east from Riyadh across the Eastern Province towards Dammam and Al Khobar, then onto the King Fahd Causeway. After the border post on the causeway, you continue into Bahrain and on to Manama, Seef, Juffair, Bahrain International Airport or your final address.</p>
                        <p className="text-stone-700 leading-relaxed">The exact route depends on your pickup and drop-off points and on road conditions on the day.</p>
                    </div>
                    <div className="rounded-3xl bg-[#081a25] text-white p-7 md:p-10">
                        <RouteJourney
                            vehicle
                            palette="gulf"
                            stops={[
                                { title: 'Riyadh', text: 'Pickup at your home, hotel, office or King Khalid International Airport.' },
                                { title: 'Dammam / Al Khobar', text: 'Across the Eastern Province to the Gulf coast. A good place for a rest stop.' },
                                { title: 'King Fahd Causeway', text: 'Saudi exit, the crossing, and Bahrain entry at the border post on the causeway.', accent: true },
                                { title: 'Bahrain', text: 'Into the island, towards Manama and the surrounding areas.' },
                                { title: 'Your destination', text: 'Manama, Seef, Juffair, Bahrain International Airport or your address.' },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ================= CAUSEWAY ================= */}
            <section aria-labelledby="causeway" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <ShieldCheck className="w-7 h-7 text-[#c8402f] mb-4" aria-hidden="true" />
                    <h2 id="causeway" className={`${h2} mb-5`}>Riyadh to Bahrain via King Fahd Causeway</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-10">The King Fahd Causeway connects Saudi Arabia and Bahrain and is the normal road crossing for this journey. Both countries&apos; border procedures take place on the causeway itself, so you clear Saudi exit and Bahrain entry before reaching the island.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {[
                            ['Saudi side', 'Passengers go through Saudi exit and passport control. Saudi residents need a valid Iqama and exit/re-entry visa. The vehicle’s papers are checked.'],
                            ['The crossing', 'The causeway runs over the sea between the two border areas. The toll is part of the fare.'],
                            ['Bahrain side', 'Passengers go through Bahrain immigration with their passport and entry permission. The vehicle has its own entry and insurance checks.'],
                        ].map(([t, d], i) => (
                            <div key={t} className="rounded-2xl bg-[#f4f6f7] p-6">
                                <p className={`${eyebrow} text-[#c8402f] mb-2`}>Step {i + 1}</p>
                                <h3 className="text-[#0c2433] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="rounded-2xl bg-[#0c2433] text-white p-7">
                            <h3 className="mb-3">What the driver does, and what stays with you</h3>
                            <p className="text-sm text-white/80 leading-relaxed">Our driver assists with the vehicle-side process and coordinates the journey. Passengers remain responsible for their own passport, visa and immigration requirements.</p>
                        </div>
                        <div className="rounded-2xl border-l-4 border-[#c8402f] bg-[#f4f6f7] p-7">
                            <h3 className="text-[#0c2433] mb-3">Queues and busy times</h3>
                            <p className="text-sm text-stone-700 leading-relaxed mb-4">Queues on the causeway vary, and weekends and public holidays can be much busier. Nobody can promise how long the crossing will take.</p>
                            <Link href={CAUSEWAY_GUIDE} className="group inline-flex items-center gap-2 text-sm font-bold text-[#b8372c] hover:underline">Read the full King Fahd Causeway guide <Arrow /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= DOCUMENTS ================= */}
            <section aria-labelledby="documents" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
                    <div>
                        <FileText className="w-7 h-7 text-[#c8402f] mb-4" aria-hidden="true" />
                        <h2 id="documents" className={`${h2} mb-4`}>Documents Needed for Riyadh to Bahrain Travel</h2>
                        <p className="text-stone-700 leading-relaxed">Requirements vary with nationality and residency status. Check them for every passenger, including children.</p>
                    </div>
                    <div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                            {[
                                ['Valid passport', 'GCC citizens may be able to travel on their national ID.'],
                                ['Bahrain entry permission', 'A visa or entry permit where your nationality requires one.'],
                                ['Saudi residency (Iqama)', 'For Saudi residents, valid for the trip.'],
                                ['Exit/re-entry visa', 'For Saudi residents planning to return.'],
                                ['Other authorisation', 'Any further travel or vehicle documents the border asks for.'],
                            ].map(([k, v]) => (
                                <li key={k} className={`${card} flex gap-3 p-4`}>
                                    <Check className="w-5 h-5 mt-0.5 text-[#c8402f] shrink-0" aria-hidden="true" />
                                    <span><span className="font-bold text-[#0c2433]">{k}</span><span className="block text-sm text-stone-600">{v}</span></span>
                                </li>
                            ))}
                        </ul>
                        <p className="flex gap-3 text-sm text-stone-600"><Info className="w-4 h-4 mt-0.5 text-[#c8402f] shrink-0" aria-hidden="true" />Entry requirements can change, so passengers should confirm their individual eligibility before travelling.</p>
                    </div>
                </div>
            </section>

            {/* ================= VS FLIGHT ================= */}
            <section aria-labelledby="vs" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 id="vs" className={`${h2} mb-4`}>Riyadh to Bahrain Taxi vs Flight</h2>
                    <p className="text-stone-700 leading-relaxed mb-8">The flight is shorter in the air. The SUV removes the airports, check-in and the taxi at the other end. Which is better depends on your group, your bags and where exactly you are going.</p>
                    <div className="relative overflow-x-auto rounded-2xl border border-[#0c2433]/10">
                        <table className="w-full min-w-[520px] text-left text-sm">
                            <thead>
                                <tr className="bg-[#0c2433] text-white">
                                    <th scope="col" className="px-4 py-3.5 font-bold"><span className="sr-only">Compare</span></th>
                                    <th scope="col" className="px-4 py-3.5 font-bold">Private SUV</th>
                                    <th scope="col" className="px-4 py-3.5 font-bold">Flight</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#0c2433]/10">
                                {[
                                    ['Travel time', 'Longer, plus the causeway', 'Faster pure travel time'],
                                    ['Door-to-door', 'Yes, direct to your destination', 'No - airport transfers needed'],
                                    ['Check-in and security', 'None', 'Yes'],
                                    ['Departure', 'Flexible', 'Fixed by the schedule'],
                                    ['Luggage', 'Within the vehicle’s capacity', 'Airline baggage rules'],
                                    ['Groups', 'One vehicle, one fare', 'One ticket per person'],
                                    ['Privacy', 'Private vehicle', 'Shared cabin'],
                                ].map(([k, a, b]) => (
                                    <tr key={k}>
                                        <th scope="row" className="px-4 py-3.5 font-bold text-[#0c2433]">{k}</th>
                                        <td className="px-4 py-3.5 text-stone-700">{a}</td>
                                        <td className="px-4 py-3.5 text-stone-600">{b}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ================= AIRPORT + PLACES ================= */}
            <section aria-labelledby="airport" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-5">
                    <div className="rounded-3xl bg-[#0c2433] text-white p-8">
                        <Plane className="w-7 h-7 text-[#f6c99b] mb-4" aria-hidden="true" />
                        <h2 id="airport" className="text-2xl md:text-3xl font-extrabold mb-4">Riyadh to Bahrain Airport Transfer</h2>
                        <ul className="space-y-2 text-sm text-white/85 mb-5">
                            {[`${RUH} → ${BAH}`, `Riyadh city → ${BAH}`, 'Bahrain → Riyadh Airport, on the return route'].map((x) => (
                                <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#f6c99b] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                        <p className="text-white/75 text-sm leading-relaxed mb-6">If you are catching a flight, allow plenty of time for the causeway and border processing on top of the drive. Send us the departure time and we will suggest a pickup time with a margin.</p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            <Link href={`/booking/?${new URLSearchParams({ from: RUH, to: BAH, vehicle: SUV }).toString()}`} className="group inline-flex items-center gap-2 rounded-xl bg-[#f6c99b] px-5 py-3 font-bold text-[#0c2433] hover:bg-[#f9d8b5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Book RUH → BAH <Arrow /></Link>
                            <Link href="/riyadh-alternative-airports/" className="font-semibold text-[#f6c99b] hover:underline">Riyadh flight cancelled? Compare airports</Link>
                        </div>
                    </div>
                    <div className={`${card} p-8`}>
                        <h3 className="text-[#0c2433] mb-3">Common pickups in Riyadh</h3>
                        <ul className="flex flex-wrap gap-2 mb-7 text-sm">
                            {['King Khalid International Airport', 'KAFD', 'Olaya', 'Diplomatic Quarter', 'Al Malaz', 'Riyadh hotels'].map((x) => (
                                <li key={x} className="rounded-lg bg-[#f4f6f7] px-3 py-2 text-[#0c2433]">{x}</li>
                            ))}
                        </ul>
                        <h3 className="text-[#0c2433] mb-3">Common drop-offs in Bahrain</h3>
                        <ul className="flex flex-wrap gap-2 text-sm">
                            {['Manama', 'Bahrain International Airport', 'Seef', 'Juffair', 'Diplomatic Area', 'Riffa', 'Muharraq', 'Bahrain hotels'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5 rounded-lg bg-[#f4f6f7] px-3 py-2 text-[#0c2433]"><MapPin className="w-3.5 h-3.5 text-[#c8402f]" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= WHO ================= */}
            <section aria-labelledby="who" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="who" className={`${h2} mb-8`}>Who Is the Riyadh to Bahrain Private SUV Best For?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[
                            { icon: Users, t: 'Families', d: 'Private space, room for luggage and flexible stops.' },
                            { icon: Briefcase, t: 'Business travellers', d: <>Direct private transport between Riyadh and Bahrain. See <Link href="/services/business/" className={link}>business travel</Link>.</> },
                            { icon: Plane, t: 'Airport travellers', d: 'Direct airport pickup and drop-off at either end.' },
                            { icon: Users, t: 'Groups', d: 'One private SUV for the group rather than several vehicles.' },
                            { icon: Globe2, t: 'GCC residents', d: 'Convenient road travel between Saudi Arabia and Bahrain.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f4f6f7] p-6">
                                <Icon className="w-6 h-6 text-[#c8402f] mb-3" aria-hidden="true" />
                                <h3 className="text-[#0c2433] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= VEHICLE ================= */}
            <section aria-labelledby="vehicle" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden order-last lg:order-first">
                        <Image src="/gmc-yukon.webp" alt="Riyadh to Bahrain private SUV transfer in a GMC Yukon" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                    </div>
                    <div>
                        <h2 id="vehicle" className={`${h2} mb-2`}>Riyadh to Bahrain SUV</h2>
                        <p className="text-stone-600 mb-4">GMC Yukon XL or an equivalent premium SUV</p>
                        <p className="text-4xl font-black text-[#c8402f] mb-2">{PRICE_TEXT}</p>
                        <p className="text-sm text-stone-700 mb-6">Up to 6–7 passengers, depending on the vehicle&apos;s seating configuration. Around 4–5 large suitcases with a full load of passengers.</p>
                        <ul className="grid grid-cols-2 gap-2 text-sm mb-7">
                            {['Professional Chauffeur', 'Executive SUV', 'Spacious Interior', 'Climate Control', 'Private Transfer', 'Door-to-Door Service'].map((x) => (
                                <li key={x} className={`${card} flex gap-2 px-3 py-2.5 text-[#0c2433]`}><Check className="w-4 h-4 mt-0.5 text-[#c8402f] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                        <Link href={book(SUV)} className={primary}>Book SUV — {PRICE_TEXT} <Arrow /></Link>
                    </div>
                </div>
            </section>

            {/* ================= HOW TO BOOK ================= */}
            <section aria-labelledby="book" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-8`}>How to Book a Riyadh to Bahrain SUV</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                        {[
                            ['Send your journey details', 'Pickup location, destination, date, passengers and luggage.'],
                            ['Confirm SUV availability', 'We confirm the GMC/SUV for your selected date.'],
                            [`Confirm the ${PRICE_TEXT} fare`, 'Confirm the one-way private SUV fare.'],
                            ['Prepare your documents', 'Passport and Bahrain entry documents ready for every passenger.'],
                            ['Meet your driver', 'Your private SUV arrives at the agreed pickup location.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-[#f4f6f7] p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#0c2433] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-[#0c2433] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={primary}>Book Riyadh to Bahrain SUV <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0c2433]/20 px-6 py-3.5 font-bold text-[#0c2433] hover:border-[#c8402f]"><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp for Availability</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Taxi Service KSA · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a> (call or WhatsApp)</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Riyadh to Bahrain Taxi FAQs</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#0c2433]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0c2433] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#0c2433] mb-5">Saudi Arabia – Bahrain Transfers</h2>
                        <ul className="space-y-2 text-sm">
                            {[
                                ['Bahrain to Riyadh taxi', '/routes/bahrain-riyadh/', 'the same trip in reverse'],
                                ['Dammam to Bahrain taxi', '/routes/dammam-bahrain/', 'if you start in Dammam'],
                                ['Al Khobar to Bahrain taxi', '/routes/khobar-bahrain/', 'the shortest run to the causeway'],
                                ['Bahrain to Dammam taxi', '/routes/bahrain-dammam/', 'back to the Eastern Province'],
                                ['King Fahd Causeway taxi guide', CAUSEWAY_GUIDE, 'how the crossing works'],
                            ].map(([l, h, d]) => (
                                <li key={h}><Link href={h} className={link}>{l}</Link> <span className="text-stone-500">- {d}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0c2433] mb-5">Other Routes from Riyadh</h2>
                        <ul className="space-y-2 text-sm">
                            {[
                                ['Riyadh to Doha taxi', '/routes/riyadh-doha/'],
                                ['Riyadh to Kuwait taxi', '/routes/riyadh-kuwait/'],
                                ['Riyadh to Abu Dhabi transfer', '/routes/riyadh-abu-dhabi/'],
                                ['Riyadh to Dammam taxi', '/routes/riyadh-dammam/'],
                                ['GCC chauffeur service', '/services/gcc-chauffeur-service/'],
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
