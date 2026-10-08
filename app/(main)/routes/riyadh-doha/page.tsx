import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Info, Users, Briefcase, Luggage, Globe2, Home, Car, ShieldCheck, FileText, Plane, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';

const PAGE_URL = 'https://taxiserviceksa.com/routes/riyadh-doha/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const PRICE = 3000;
const PRICE_TEXT = '3,000 SAR';
const GMC = 'GMC Yukon XL / Denali'; // booking-system vehicle name (lib/supabase.ts)
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent(`Hello, I want to check GMC availability for Riyadh to Doha (${PRICE_TEXT}). Pickup, Doha drop-off, date, passengers and luggage: `)}`;
const RUH = 'King Khalid International Airport (RUH)';
const DOH = 'Hamad International Airport (DOH)';
const BOOK_GMC = `/booking/?${new URLSearchParams({ from: 'Riyadh', to: 'Doha', vehicle: GMC }).toString()}`;

const TITLE = `Riyadh to Doha Taxi | Private GMC Transfer – ${PRICE_TEXT}`;
const DESCRIPTION = `Book a private Riyadh to Doha GMC SUV transfer for ${PRICE_TEXT}. Door-to-door service, professional chauffeur and Saudi-Qatar border assistance. Book via WhatsApp.`;

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private GMC SUV from Riyadh to Doha' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

const faqs = [
    { q: 'How much is a taxi from Riyadh to Doha?', a: `A private GMC SUV transfer from Riyadh to Doha is ${PRICE_TEXT} one way, subject to booking confirmation and the agreed trip details. The price is for the whole vehicle, not per passenger.` },
    { q: 'How long does Riyadh to Doha by car take?', a: 'The road journey is typically around 6–8 hours of driving, while the total journey can take longer depending on border processing, traffic and stops.' },
    { q: 'How far is Riyadh from Doha by road?', a: 'The road distance is approximately 600 km, depending on the exact pickup and drop-off locations.' },
    { q: 'What vehicle is available for Riyadh to Doha?', a: 'We currently run this route with a private GMC Yukon / Denali SUV. It suits families, groups and passengers travelling with luggage.' },
    { q: 'How much is the GMC from Riyadh to Doha?', a: `The private GMC transfer is ${PRICE_TEXT} one way, for up to 6–7 passengers.` },
    { q: 'Is Riyadh to Doha a cross-border journey?', a: 'Yes. You leave Saudi Arabia at Salwa and enter Qatar at Abu Samra, and every passenger must meet the immigration and entry requirements that apply to them.' },
    { q: 'What documents do I need?', a: 'A valid passport (or national ID for GCC citizens where accepted), Qatar entry permission where your nationality requires it, and - for Saudi residents - a valid Iqama and exit/re-entry visa. Requirements depend on your nationality and residency and can change.' },
    { q: 'Does the driver assist at the border?', a: 'Yes. The driver assists with vehicle-side border procedures and coordinates the journey, while passengers remain responsible for their own immigration documents and eligibility.' },
    { q: 'Can I travel with luggage?', a: 'Yes. The GMC has room for about 5 large suitcases with a full load of passengers. Tell us your luggage when booking so we can confirm it fits.' },
    { q: 'Can I book a Riyadh to Doha Airport transfer?', a: `Yes. Pickup at ${RUH} and drop-off at ${DOH} can be requested as part of the private transfer, subject to booking confirmation.` },
    { q: 'Can I book a round trip?', a: 'Yes. Tick the return option in the booking form or send your dates on WhatsApp, and we will confirm the return leg with you.' },
    { q: 'Can I book a different vehicle?', a: 'Other premium vehicles may be available on request. Availability and pricing must be confirmed with us before booking.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Riyadh to Doha private GMC SUV transfer',
            url: PAGE_URL,
            serviceType: 'Private cross-border transfer',
            description: 'Private door-to-door GMC SUV with chauffeur from Riyadh to Doha via the Salwa / Abu Samra border, with vehicle-side border assistance.',
            provider: { '@id': 'https://taxiserviceksa.com/#organization' },
            areaServed: [{ '@type': 'City', name: 'Riyadh' }, { '@type': 'City', name: 'Doha' }],
            offers: { '@type': 'Offer', name: 'GMC Yukon / Denali - Riyadh to Doha, one way', price: PRICE, priceCurrency: 'SAR', url: PAGE_URL },
        },
        {
            '@type': 'Organization',
            '@id': 'https://taxiserviceksa.com/#organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
            telephone: PHONE,
            areaServed: ['Saudi Arabia', 'Qatar'],
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const eyebrow = 'text-xs font-bold uppercase tracking-[0.22em]';
const link = 'font-semibold text-[#7a2541] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#2a1019]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#7a2541] px-6 py-3.5 font-bold text-white hover:bg-[#5f1c32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a2541] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#2a1019]/20 px-6 py-3.5 font-bold text-[#2a1019] hover:border-[#7a2541] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a2541]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

// Illustration (not a photo): flat inland desert giving way to the Gulf, with the Doha skyline on the water.
function DesertToGulf({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="rq-sky" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#2a1019" />
                    <stop offset="0.6" stopColor="#5a1d31" />
                    <stop offset="1" stopColor="#c48a5a" />
                </linearGradient>
            </defs>
            <rect width="1440" height="640" fill="url(#rq-sky)" />
            <circle cx="300" cy="430" r="56" fill="#f0cf9c" fillOpacity="0.35" />
            <path d="M0 540 C 200 515, 420 530, 640 512 C 820 498, 960 520, 1100 512 V 640 H 0 Z" fill="#9c6a3c" fillOpacity="0.6" />
            {/* Gulf */}
            <path d="M1060 520 C 1160 512, 1300 508, 1440 506 V 640 H 1020 Z" fill="#3d6f7d" fillOpacity="0.7" />
            {/* Skyline */}
            <g fill="#2a1019" fillOpacity="0.6">
                <rect x="1180" y="440" width="18" height="70" />
                <path d="M1206 510 V 400 Q 1218 360 1230 400 V 510 Z" />
                <rect x="1240" y="420" width="14" height="90" />
                <path d="M1262 510 V 380 L 1272 350 L 1282 380 V 510 Z" />
                <rect x="1292" y="450" width="24" height="60" />
                <rect x="1324" y="430" width="12" height="80" />
            </g>
            <path d="M0 600 C 300 590, 600 578, 860 562 C 960 556, 1040 548, 1120 540" fill="none" stroke="#f0cf9c" strokeWidth="3" strokeDasharray="14 10" strokeLinecap="round" />
        </svg>
    );
}

export default function RiyadhDohaRoutePage() {
    return (
        <div className="riyadh-doha-page bg-[#f7f2ea]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#2a1019]">
                <DesertToGulf className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2a1019] via-[#2a1019]/60 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#f0cf9c] mb-4`}>Private Saudi Arabia–Qatar Transfer</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-3">Riyadh to Doha Taxi</h1>
                        <p className="text-xl sm:text-2xl font-bold text-white/90 mb-4">Private GMC SUV Transfer from Riyadh to Doha</p>
                        <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-7 max-w-xl">
                            Travel from Riyadh to Doha in a private GMC SUV with a professional chauffeur, door-to-door pickup and assistance with the Saudi–Qatar border journey.
                        </p>
                        <div className="inline-flex flex-col rounded-2xl bg-[#f0cf9c] text-[#2a1019] px-6 py-4 mb-7">
                            <span className="text-4xl font-black leading-none">{PRICE_TEXT}</span>
                            <span className="text-sm font-semibold mt-1.5">Private GMC SUV · One Way</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#2a1019] hover:bg-[#f7f2ea]">
                                <a href={QUOTE_HREF}>Book GMC — {PRICE_TEXT} <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp for Availability</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                            {['Private Vehicle', 'Professional Chauffeur', 'Door-to-Door', 'Cross-Border Transfer'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#f0cf9c] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Book your private GMC to Doha"
                            cta={`Book GMC — ${PRICE_TEXT}`}
                            fromPlaceholder="Home, hotel, office or airport in Riyadh"
                            toPlaceholder="Hotel, residence, office or airport in Doha"
                            fromChips={['Riyadh city', RUH, 'Riyadh hotel', 'Office address']}
                            toChips={['Doha city', DOH, 'West Bay', 'The Pearl', 'Lusail', 'Doha hotel']}
                            showFlight="auto"
                            returnNote="Return trip Doha to Riyadh also needed - dates to confirm."
                            vehicleOptions={[{ value: GMC, label: `GMC Yukon / Denali - ${PRICE_TEXT}` }]}
                            buttonClass="bg-[#7a2541] hover:bg-[#5f1c32] focus-visible:ring-[#7a2541]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= INTRODUCTION ================= */}
            <section aria-labelledby="intro" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10">
                    <div className="space-y-5 text-stone-700 leading-relaxed text-[1.05rem]">
                        <h2 id="intro" className={`${h2} mb-2`}>Riyadh to Doha Private GMC Taxi</h2>
                        <p>
                            Riyadh to Doha is an international road journey: you leave Saudi Arabia at the Salwa border post and enter Qatar at Abu Samra. We run it as a private transfer in one vehicle, a GMC Yukon or Denali SUV with a chauffeur, collected at your door in Riyadh and driven to your door in Doha.
                        </p>
                        <p>
                            The road distance is approximately 600 km. Driving time is usually around 6–8 hours before you add the border and any stops. How long the crossing takes depends on queues, immigration checks and the time of day, so the total journey is often longer than the driving alone. Weekends and public holidays are generally busier.
                        </p>
                        <p>
                            Pickup can be from your home, hotel or office anywhere in Riyadh, or from {RUH}. In Doha we drop you where you are actually going: a hotel in West Bay, an apartment at The Pearl or Lusail, an office, a family home, or {DOH}.
                        </p>
                        <p>
                            Why only the GMC? On a 600 km cross-border drive, space and comfort matter more than on a city ride. A full-size SUV gives a family or a group room to sit properly for several hours, with the luggage in the back rather than on laps. It is also the vehicle we can reliably supply for this route, so it is the one we offer.
                        </p>
                        <p>
                            Flying between the two capitals is faster, and if you are travelling alone with a small bag it may well be the better choice. The road makes more sense when several people travel together, when there is a lot of luggage, or when you would rather not deal with two airports, check-in and a taxi at the other end. The car leaves when you are ready, stops for food and prayer when you ask, and nobody else rides with you.
                        </p>
                        <p>
                            Heading somewhere else in the Gulf instead? We also drive <Link href="/routes/riyadh-bahrain/" className={link}>Riyadh to Bahrain</Link>, <Link href="/routes/riyadh-dubai/" className={link}>Riyadh to Dubai</Link> and <Link href="/routes/riyadh-kuwait/" className={link}>Riyadh to Kuwait</Link>. Coming the other way? See <Link href="/routes/doha-riyadh/" className={link}>Doha to Riyadh</Link>.
                        </p>
                    </div>
                    <aside className="lg:pt-16">
                        <dl className="rounded-3xl bg-[#2a1019] text-white p-7 space-y-4 text-sm">
                            {[
                                ['Distance', 'Approx. 600 km'],
                                ['Driving time', 'Around 6–8 hours'],
                                ['Border', 'Salwa (Saudi) / Abu Samra (Qatar)'],
                                ['Vehicle', 'GMC Yukon / Denali'],
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

            {/* ================= PRICE + INCLUDED ================= */}
            <section aria-labelledby="price" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="price" className={`${h2} mb-8`}>Riyadh to Doha Taxi Price</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-5">
                        <article className="rounded-3xl bg-[#2a1019] text-white overflow-hidden flex flex-col">
                            <div className="relative aspect-[16/9]">
                                <Image src="/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp" alt="GMC Yukon private taxi from Riyadh to Doha" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                            </div>
                            <div className="p-7 flex flex-col flex-1">
                                <h3 className="text-white">GMC Yukon / Denali</h3>
                                <p className="text-5xl font-black text-[#f0cf9c] mt-2">{PRICE.toLocaleString('en-US')} <span className="text-lg font-semibold text-white/70">SAR</span></p>
                                <p className="text-sm text-white/70 mt-1 mb-5">Private one-way transfer · Up to 6–7 passengers</p>
                                <ul className="flex flex-wrap gap-2 mb-6 text-sm">
                                    {['Professional Chauffeur', 'Door-to-Door Service', 'Private Vehicle'].map((x) => <li key={x} className="rounded-full bg-white/10 px-3 py-1.5">{x}</li>)}
                                </ul>
                                <Link href={BOOK_GMC} className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#f0cf9c] px-6 py-3.5 font-bold text-[#2a1019] hover:bg-[#f6ddb6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Book GMC — {PRICE_TEXT} <Arrow /></Link>
                            </div>
                        </article>
                        <div className="rounded-3xl bg-white border border-[#2a1019]/10 p-7 md:p-9">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2a1019] mb-5">What&apos;s Included in the Riyadh to Doha Transfer?</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 text-sm text-stone-700 mb-6">
                                {['Private GMC SUV for your group only', 'Professional driver for the whole trip', 'Pickup at your Riyadh address', 'Drop-off at your Doha address', 'Fuel and road tolls', 'Qatar insurance for the vehicle', 'Vehicle-side border assistance', 'Luggage space for the group', 'Route coordination and stops on the way', 'Booking support before the trip'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#7a2541] shrink-0" aria-hidden="true" />{x}</li>
                                ))}
                            </ul>
                            <p className="text-sm text-stone-600 mb-4"><span className="font-semibold text-[#2a1019]">Not included:</span> passenger visas or entry fees, meals and personal expenses, and detours or long waits not agreed when booking.</p>
                            <p className="flex gap-3 rounded-xl bg-[#f7f2ea] p-4 text-sm text-stone-700"><Info className="w-4 h-4 mt-0.5 text-[#7a2541] shrink-0" aria-hidden="true" />Other premium vehicles may be available on request. Contact us for availability and pricing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= DISTANCE + ROUTE ================= */}
            <section aria-labelledby="time" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 id="time" className={`${h2} mb-5`}>Riyadh to Doha Distance and Journey Time</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">Approximately 600 km by road. Driving time is typically around 6–8 hours, but the complete journey may take longer because border processing, traffic, rest stops and immigration procedures can vary.</p>
                        <p className="text-stone-700 leading-relaxed mb-8">We cannot promise an exact arrival time. If you need to be in Doha for a flight, a meeting or a hotel check-in, tell us and we will set the pickup with a sensible margin.</p>

                        <h2 id="route" className={`${h2} mb-5`}>Riyadh to Doha Driving Route</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">The road heads east from Riyadh across the central desert towards the Al Ahsa region, then on to the Salwa border on the Saudi side. After Saudi exit formalities, you cross to Qatar&apos;s Abu Samra post and continue north-east to Doha.</p>
                        <p className="text-stone-700 leading-relaxed">The exact route can vary with road conditions and with your pickup and drop-off points. For the road distance in more detail, see <Link href="/distance/doha-to-riyadh/" className={link}>Doha to Riyadh distance</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-[#1d0b12] text-white p-7 md:p-10">
                        <RouteJourney
                            vehicle
                            palette="platinum"
                            stops={[
                                { title: 'Riyadh pickup', text: 'Your home, hotel, office or King Khalid International Airport.' },
                                { title: 'East across the desert', text: 'Highway driving towards the Al Ahsa region, with a rest stop when you want one.' },
                                { title: 'Salwa - Saudi exit', text: 'Saudi passport control for passengers; exit checks for the vehicle.', accent: true },
                                { title: 'Abu Samra - Qatar entry', text: 'Qatar immigration for passengers; entry and insurance checks for the vehicle.', accent: true },
                                { title: 'Doha drop-off', text: 'Your hotel, residence, office or Hamad International Airport.' },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ================= BORDER + DOCUMENTS ================= */}
            <section aria-labelledby="border" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <ShieldCheck className="w-7 h-7 text-[#7a2541] mb-4" aria-hidden="true" />
                    <h2 id="border" className={`${h2} mb-5`}>Riyadh to Doha Saudi-Qatar Border Crossing</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">This is an international border, with two sets of checks: Saudi exit at Salwa and Qatar entry at Abu Samra. Every passenger goes through immigration in person, and the vehicle has its own paperwork and insurance checks.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
                        <div className="rounded-2xl bg-white border border-[#2a1019]/10 p-7">
                            <h3 className="text-[#2a1019] mb-4">The driver&apos;s side of the crossing</h3>
                            <ul className="space-y-2.5 text-sm text-stone-700">
                                {['Vehicle registration and exit paperwork', 'Insurance needed for the vehicle in Qatar', 'Vehicle inspection when asked', 'Guiding you on where to go and in what order', 'Waiting for you, then continuing to Doha'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#7a2541] shrink-0" aria-hidden="true" />{x}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl bg-white border-l-4 border-[#c48a5a] p-7">
                            <h3 className="text-[#2a1019] mb-4">Your side of the crossing</h3>
                            <p className="text-sm text-stone-700 leading-relaxed mb-3">Our driver assists with the vehicle-side border process and helps coordinate the journey. Passengers remain responsible for their own passports, visas and immigration requirements.</p>
                            <p className="text-sm text-stone-700 leading-relaxed">The driver cannot speed up immigration, and border queues vary. Keep your documents in the cabin with you, not packed in a suitcase.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
                        <div>
                            <FileText className="w-7 h-7 text-[#7a2541] mb-4" aria-hidden="true" />
                            <h2 id="documents" className="text-2xl md:text-3xl font-extrabold text-[#2a1019] mb-4">Documents Needed for Riyadh to Doha by Road</h2>
                            <p className="text-stone-700 leading-relaxed">What you need depends on your nationality and residency status. Check it for every passenger, including children.</p>
                        </div>
                        <div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                                {[
                                    ['Valid passport', 'GCC citizens may be able to use their national ID.'],
                                    ['Qatar entry permission', 'A visa or entry permit where your nationality requires one.'],
                                    ['Saudi Iqama', 'For Saudi residents, valid for the trip.'],
                                    ['Exit/re-entry visa', 'For Saudi residents planning to return.'],
                                    ['Anything else asked for', 'By Saudi or Qatari border authorities.'],
                                ].map(([k, v]) => (
                                    <li key={k} className="flex gap-3 rounded-xl bg-white border border-[#2a1019]/10 p-4">
                                        <Check className="w-5 h-5 mt-0.5 text-[#7a2541] shrink-0" aria-hidden="true" />
                                        <span><span className="font-bold text-[#2a1019]">{k}</span><span className="block text-sm text-stone-600">{v}</span></span>
                                    </li>
                                ))}
                            </ul>
                            <p className="flex gap-3 text-sm text-stone-600"><Info className="w-4 h-4 mt-0.5 text-[#7a2541] shrink-0" aria-hidden="true" />Travel and immigration requirements can change. Passengers should verify their individual eligibility before travelling.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHY GMC + VS FLIGHT ================= */}
            <section aria-labelledby="why" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
                        <div>
                            <h2 id="why" className={`${h2} mb-6`}>Why Book a Private GMC from Riyadh to Doha?</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    ['Private vehicle', 'No shared passengers'],
                                    ['Door-to-door', 'Your address to your address'],
                                    ['Luggage space', 'Room for a family’s bags'],
                                    ['Long-trip comfort', 'Three rows of proper seats'],
                                    ['Families and groups', 'Up to 6–7 passengers'],
                                    ['Flexible pickup', 'You choose the time'],
                                ].map(([k, v]) => (
                                    <li key={k} className="rounded-xl bg-[#f7f2ea] p-4">
                                        <span className="block font-bold text-[#2a1019]">{k}</span>
                                        <span className="text-sm text-stone-600">{v}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                            <Image src="/gmc-yukon.webp" alt="Private GMC SUV for a Saudi Arabia to Qatar transfer" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                        </div>
                    </div>

                    <h2 id="vs" className={`${h2} mb-4`}>Riyadh to Doha Taxi vs Flight</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">Neither is right for everyone. The flight is quicker in the air; the car removes the airports at both ends.</p>
                    <div className="relative overflow-x-auto rounded-2xl border border-[#2a1019]/10">
                        <table className="w-full min-w-[520px] text-left text-sm">
                            <thead>
                                <tr className="bg-[#2a1019] text-white">
                                    <th scope="col" className="px-4 py-3.5 font-bold"><span className="sr-only">Compare</span></th>
                                    <th scope="col" className="px-4 py-3.5 font-bold">Private GMC</th>
                                    <th scope="col" className="px-4 py-3.5 font-bold">Flight</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#2a1019]/10">
                                {[
                                    ['Travel time', 'Longer road journey plus border', 'Faster'],
                                    ['Door-to-door', 'Yes', 'No - airport transfers needed'],
                                    ['Check-in and security', 'None', 'Yes'],
                                    ['Pickup time', 'Flexible', 'Fixed by the schedule'],
                                    ['Luggage', 'Limited by the vehicle, not an airline', 'Airline baggage rules'],
                                    ['Privacy', 'Private vehicle', 'Shared cabin'],
                                    ['Groups', 'One price for the vehicle', 'One ticket per person'],
                                ].map(([k, a, b]) => (
                                    <tr key={k}>
                                        <th scope="row" className="px-4 py-3.5 font-bold text-[#2a1019]">{k}</th>
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
            <section aria-labelledby="who" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="who" className={`${h2} mb-8`}>Who Uses Our Riyadh to Doha Private Transfer?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: Users, t: 'Families', d: 'Visiting relatives in Qatar or heading for a holiday, with the children and the bags in one car and stops when you need them.' },
                            { icon: Briefcase, t: 'Business travellers', d: <>From a Riyadh office to a Doha meeting without airports in between. Company bookings: see <Link href="/services/business/" className={link}>business travel</Link>.</> },
                            { icon: Globe2, t: 'GCC residents', d: 'Residents of Saudi Arabia travelling to Qatar for a weekend, a visit or work, with their Iqama and exit/re-entry in order.' },
                            { icon: Users, t: 'Small groups', d: 'Friends or colleagues up to 6–7 people sharing one vehicle for one price.' },
                            { icon: Luggage, t: 'Passengers with luggage', d: 'Longer stays and heavy bags, with no airline weight limits to plan around.' },
                            { icon: Home, t: 'Private road travellers', d: 'Anyone who simply prefers to travel by road, at their own pace, without other passengers.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-white border border-[#2a1019]/10 p-6">
                                <Icon className="w-6 h-6 text-[#7a2541] mb-3" aria-hidden="true" />
                                <h3 className="text-[#2a1019] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= VEHICLE + AIRPORT ================= */}
            <section aria-labelledby="vehicle" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="rounded-3xl border border-[#2a1019]/10 p-8">
                        <Car className="w-7 h-7 text-[#7a2541] mb-4" aria-hidden="true" />
                        <h2 id="vehicle" className="text-2xl md:text-3xl font-extrabold text-[#2a1019] mb-2">The Vehicle: GMC Yukon XL / Denali</h2>
                        <p className="text-3xl font-black text-[#7a2541] mb-5">{PRICE_TEXT} <span className="text-base font-semibold text-stone-500">one way</span></p>
                        <ul className="grid grid-cols-2 gap-2 text-sm mb-6">
                            {['Up to 6–7 passengers', 'Large luggage capacity', 'Professional chauffeur', 'Executive SUV', 'Comfortable interior', 'Private cross-border transfer'].map((x) => (
                                <li key={x} className="flex gap-2 rounded-lg bg-[#f7f2ea] px-3 py-2.5 text-[#2a1019]"><Check className="w-4 h-4 mt-0.5 text-[#7a2541] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                        <Link href={BOOK_GMC} className={primary}>Book GMC <Arrow /></Link>
                        <p className="text-sm text-stone-600 mt-5">Other premium vehicles may be available on request - ask us before booking. <Link href="/fleet/gmc-yukon/" className={link}>More about the GMC Yukon</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-[#2a1019] text-white p-8">
                        <Plane className="w-7 h-7 text-[#f0cf9c] mb-4" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Riyadh to Doha Airport Transfer</h2>
                        <p className="text-white/80 leading-relaxed mb-4">You can ask for pickup at {RUH} or any approved address in Riyadh, and drop-off at {DOH}, a Doha hotel, or an address in the city and its business districts, subject to booking confirmation.</p>
                        <p className="text-white/80 leading-relaxed mb-6">Catching a flight from Doha? Send the departure time; because border waits vary, we plan the pickup with a wide margin.</p>
                        <ul className="flex flex-wrap gap-2 text-sm mb-6">
                            {['Hamad International Airport', 'West Bay', 'The Pearl', 'Lusail', 'Doha hotels'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5 rounded-lg bg-white/[0.08] px-3 py-2"><MapPin className="w-3.5 h-3.5 text-[#f0cf9c]" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                        <Link href="/riyadh-airport-taxi/" className="font-semibold text-[#f0cf9c] hover:underline">Riyadh Airport transfers</Link>
                    </div>
                </div>
            </section>

            {/* ================= HOW TO BOOK ================= */}
            <section aria-labelledby="book" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-8`}>How to Book a Riyadh to Doha GMC</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            ['Send pickup and date', 'Your Riyadh address, Doha destination and travel date.'],
                            ['Confirm passengers and luggage', 'So we can check everyone and everything fits the GMC.'],
                            [`Confirm at ${PRICE_TEXT}`, 'Your GMC booking is confirmed at the one-way price.'],
                            ['Receive trip details', 'Driver and trip details are shared before the journey.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-white border border-[#2a1019]/10 p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#7a2541] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-[#2a1019] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={primary}>Book Riyadh to Doha GMC <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp for Riyadh → Doha</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Taxi Service KSA · Saudi Arabia · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a> (call or WhatsApp)</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#2a1019]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#2a1019] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#2a1019] mb-5">Popular Saudi Arabia &amp; GCC Transfers</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Riyadh to Dubai taxi', '/routes/riyadh-dubai/'],
                            ['Riyadh to Abu Dhabi transfer', '/routes/riyadh-abu-dhabi/'],
                            ['Riyadh to Kuwait taxi', '/routes/riyadh-kuwait/'],
                            ['Riyadh to Bahrain taxi', '/routes/riyadh-bahrain/'],
                            ['Doha to Riyadh taxi', '/routes/doha-riyadh/'],
                            ['Riyadh to Dammam taxi', '/routes/riyadh-dammam/'],
                            ['Riyadh to Jeddah taxi', '/routes/riyadh-jeddah/'],
                            ['Riyadh Airport transfers', '/riyadh-airport-taxi/'],
                            ['GCC chauffeur service', '/services/gcc-chauffeur-service/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#2a1019]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#2a1019] hover:border-[#7a2541] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a2541]">{l}</Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
