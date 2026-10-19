import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Info, Users, Briefcase, Luggage, Globe2, Home, Plane, MapPin, ShieldCheck, FileText, Clock, Building2, CalendarClock } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';

const PAGE_URL = 'https://taxiserviceksa.com/routes/doha-riyadh/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const PRICE = 3000;
const PRICE_TEXT = '3,000 SAR';
const GMC = 'GMC Yukon XL / Denali'; // booking-system vehicle name (lib/supabase.ts)
const DOH = 'Hamad International Airport (DOH)';
const RUH = 'King Khalid International Airport (RUH)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent(`Hello, I want a private transfer from Doha to Riyadh (GMC, ${PRICE_TEXT}). Pickup in Doha (or flight number), Riyadh drop-off, date, passengers and luggage: `)}`;
const BOOK_GMC = `/booking/?${new URLSearchParams({ from: 'Doha', to: 'Riyadh', vehicle: GMC }).toString()}`;

const TITLE = `Doha to Riyadh Taxi | Private Airport Transfer – ${PRICE_TEXT}`;
const DESCRIPTION = `Private Doha to Riyadh transfer in a GMC SUV, ${PRICE_TEXT} one way. Pickup at Hamad International Airport or any Doha address, door-to-door via the Abu Samra / Salwa border.`;

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private GMC SUV transfer from Doha to Riyadh' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

const faqs = [
    { q: 'Can I book a private transfer from Doha Airport to Riyadh?', a: `Yes. You can ask for pickup at ${DOH} and drop-off at your address in Riyadh. Send your flight number and arrival time when you request the quote, and we confirm the pickup arrangement before the trip.` },
    { q: 'Where will the driver meet me at Hamad International Airport?', a: 'The meeting point is agreed with you before the trip and shared together with the driver’s name and phone number. Keep your phone on after landing so the driver can reach you. We do not promise access to restricted airport areas.' },
    { q: 'How much is a taxi from Doha to Riyadh?', a: `A private GMC Yukon / Denali from Doha to Riyadh is ${PRICE_TEXT} one way for the whole vehicle, not per passenger. The fare is confirmed with you before the booking is final.` },
    { q: 'How far is Doha from Riyadh by road?', a: 'Roughly 570–620 km, depending on where you are collected in Doha and where you are going in Riyadh.' },
    { q: 'How long does the Doha to Riyadh journey take?', a: 'Plan on around 6–7 hours of driving. The full door-to-door journey is usually longer, because the border, rest stops and traffic all add time. We cannot guarantee an exact arrival time.' },
    { q: 'Which border crossing does this route use?', a: 'You leave Qatar at Abu Samra and enter Saudi Arabia at Salwa. It is an international crossing with immigration and customs checks on both sides.' },
    { q: 'What documents do passengers need?', a: 'It depends on each passenger’s nationality, residency and visa status. Every passenger, including children, must hold the documents and permissions needed to leave Qatar and enter Saudi Arabia. Please check current requirements with the official authorities before you travel; booking a transfer does not confirm eligibility to enter Saudi Arabia.' },
    { q: 'Can I travel from a Doha hotel to a Riyadh hotel?', a: 'Yes. Give us the exact names and addresses of both hotels, and the driver collects you at the Doha hotel and drops you at the Riyadh hotel.' },
    { q: 'Which vehicle should I choose for a family with luggage?', a: 'We run this route with a GMC Yukon / Denali. Tell us the number of adults, children and suitcases. Seven people with seven large cases will not fit comfortably, so we check the load with you before confirming.' },
    { q: 'Can I request a different vehicle?', a: 'You can ask. Other vehicles may be possible on some dates, but availability and price must be confirmed with us first. The fare on this page is for the GMC.' },
    { q: 'Can I book the return trip from Riyadh to Doha?', a: 'Yes. Tick the return option in the form or send the return date on WhatsApp. The Riyadh to Doha leg is the same fare and is confirmed separately.' },
    { q: 'Is my booking confirmed as soon as I send the form?', a: 'No. Sending the form or a WhatsApp message is a request. The booking is confirmed only after we have checked the vehicle for your date and agreed the fare and pickup details with you.' },
    { q: 'What if my flight into Doha is delayed or changed?', a: 'Message us on WhatsApp as soon as you know, with the new flight number or time. We then adjust the pickup where the driver’s schedule allows, and tell you if the change affects the booking.' },
    { q: 'What is included in the fare?', a: 'The GMC, the driver for the whole trip, fuel, road tolls and the vehicle’s cross-border insurance. Passenger visas or entry fees, meals and any detours or long waits not agreed at booking are not included.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Doha to Riyadh private GMC SUV transfer',
            url: PAGE_URL,
            serviceType: 'Private cross-border transfer',
            description: 'Private door-to-door GMC SUV with driver from Doha or Hamad International Airport to Riyadh, via the Abu Samra / Salwa border.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: [{ '@type': 'City', name: 'Doha' }, { '@type': 'City', name: 'Riyadh' }],
            offers: { '@type': 'Offer', name: 'GMC Yukon / Denali - Doha to Riyadh, one way', price: PRICE, priceCurrency: 'SAR', url: PAGE_URL },
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
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#0e2a3b]';
const h3 = 'text-xl font-bold text-[#0e2a3b]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f6b78] px-6 py-3.5 font-bold text-white hover:bg-[#0b5560] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f6b78] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#0e2a3b]/20 px-6 py-3.5 font-bold text-[#0e2a3b] hover:border-[#0f6b78] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f6b78]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#0f6b78] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

// Illustration (not a photo): the Doha waterfront on the left, desert in the middle, the Riyadh skyline on the right.
function GulfToCapital({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="dr-sky" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#0e2a3b" />
                    <stop offset="0.6" stopColor="#174a5c" />
                    <stop offset="1" stopColor="#c99a5b" />
                </linearGradient>
            </defs>
            <rect width="1440" height="640" fill="url(#dr-sky)" />
            <circle cx="1120" cy="420" r="60" fill="#e9c48a" fillOpacity="0.3" />
            {/* Gulf water and Doha towers */}
            <path d="M0 520 C 120 516, 260 514, 380 518 V 640 H 0 Z" fill="#3d7f8a" fillOpacity="0.6" />
            <g fill="#0e2a3b" fillOpacity="0.55">
                <rect x="70" y="430" width="16" height="85" />
                <path d="M96 515 V 395 Q 108 355 120 395 V 515 Z" />
                <rect x="132" y="445" width="22" height="70" />
                <path d="M164 515 V 410 L 174 380 L 184 410 V 515 Z" />
                <rect x="196" y="460" width="14" height="55" />
            </g>
            {/* Desert */}
            <path d="M360 545 C 560 520, 760 535, 960 518 C 1100 508, 1260 520, 1440 512 V 640 H 360 Z" fill="#9c6a3c" fillOpacity="0.55" />
            {/* Riyadh skyline */}
            <g fill="#0e2a3b" fillOpacity="0.6">
                <path d="M1230 512 V 380 Q 1252 330 1274 380 V 512 Z" />
                <rect x="1288" y="440" width="18" height="72" />
                <path d="M1314 512 V 360 L 1326 330 L 1338 360 V 512 Z" />
                <rect x="1350" y="455" width="24" height="57" />
            </g>
            <path d="M210 600 C 480 588, 760 572, 1000 560 C 1100 555, 1180 548, 1250 540" fill="none" stroke="#e9c48a" strokeWidth="3" strokeDasharray="14 10" strokeLinecap="round" />
        </svg>
    );
}

export default function DohaRiyadhRoutePage() {
    return (
        <div className="doha-riyadh-page bg-[#f4f1ea]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0e2a3b]">
                <GulfToCapital className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0e2a3b] via-[#0e2a3b]/65 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#e9c48a] mb-4`}>Private Qatar–Saudi Arabia Transfer</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-3">Doha to Riyadh Taxi</h1>
                        <p className="text-xl sm:text-2xl font-bold text-white/90 mb-4">Private transfer from Doha or Hamad International Airport to Riyadh</p>
                        <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-7 max-w-xl">
                            One private GMC SUV and one driver, from your flight, hotel or home in Doha to your hotel, office or residence in Riyadh. Every booking is confirmed against availability before you travel.
                        </p>
                        <div className="inline-flex flex-col rounded-2xl bg-[#e9c48a] text-[#0e2a3b] px-6 py-4 mb-7">
                            <span className="text-4xl font-black leading-none">{PRICE_TEXT}</span>
                            <span className="text-sm font-semibold mt-1.5">Private GMC SUV · One Way · Per Vehicle</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#0e2a3b] hover:bg-[#f4f1ea]">
                                <a href={QUOTE_HREF}>Request a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp for Availability</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                            {['Airport or address pickup', 'Private vehicle', 'Door-to-door', 'Abu Samra / Salwa border'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#e9c48a] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Doha to Riyadh transfer"
                            cta={`Request GMC — ${PRICE_TEXT}`}
                            fromPlaceholder="Hamad Airport, hotel, home or office in Doha"
                            toPlaceholder="Hotel, residence, office or airport in Riyadh"
                            fromChips={[DOH, 'Doha hotel', 'West Bay', 'The Pearl', 'Lusail']}
                            toChips={['Riyadh city', 'Riyadh hotel', 'Office address', RUH]}
                            showFlight="auto"
                            returnNote="Return trip Riyadh to Doha also needed - dates to confirm."
                            vehicleOptions={[{ value: GMC, label: `GMC Yukon / Denali - ${PRICE_TEXT}` }]}
                            buttonClass="bg-[#0f6b78] hover:bg-[#0b5560] focus-visible:ring-[#0f6b78]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= INTRODUCTION ================= */}
            <section aria-labelledby="intro" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10">
                    <div className={prose}>
                        <h2 id="intro" className={`${h2} mb-2`}>Doha to Riyadh Private Transfer</h2>
                        <p>
                            The road from Doha to Riyadh crosses an international border, so it is not an ordinary taxi ride. You leave Qatar at Abu Samra, enter Saudi Arabia at Salwa, and then drive west across the Eastern Province and the central desert to the capital. We arrange that journey as a private transfer: one GMC Yukon or Denali, one driver, your group only, from the address you give us in Doha to the address you give us in Riyadh.
                        </p>
                        <p>
                            Most of our Doha requests fall into two groups. Some passengers are already in Qatar, at a hotel, a family home or an office, and want to be collected there. Others are landing at Hamad International Airport and would rather continue to Riyadh by road than take a second flight. Both work the same way once the details are clear; the airport pickup simply needs a little more information, which we explain below.
                        </p>
                        <p>
                            People choose the road for practical reasons. A family with several suitcases avoids airline baggage limits and a connection. A small team travelling to a meeting can share one vehicle instead of buying several tickets. Someone who has just finished a long-haul flight can sit in a quiet car rather than check in again. If you are travelling alone with hand luggage and need to be in Riyadh quickly, a direct flight may suit you better, and we would rather tell you that than sell you a long drive you do not need.
                        </p>
                        <p>
                            What we can promise is a clear process: an agreed fare, an agreed pickup, a driver who knows the crossing, and honest timing advice. What we cannot promise is how long the border will take on a given day, or that any passenger will be admitted to Saudi Arabia. Those decisions belong to the border authorities, and this page explains how to plan around them.
                        </p>
                    </div>
                    <aside className="lg:pt-16">
                        <dl className="rounded-3xl bg-[#0e2a3b] text-white p-7 space-y-4 text-sm">
                            {[
                                ['Distance', 'Approx. 570–620 km'],
                                ['Driving time', 'Around 6–7 hours'],
                                ['Border', 'Abu Samra (Qatar) / Salwa (Saudi)'],
                                ['Pickup', 'Hamad Airport or any Doha address'],
                                ['Vehicle', 'GMC Yukon / Denali'],
                                ['Fare', `${PRICE_TEXT}, one way`],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-white/60">{k}</dt>
                                    <dd className="font-semibold text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-xs text-stone-500 mt-3 px-1">Distance and time vary with your exact pickup and drop-off. Border time is extra.</p>
                    </aside>
                </div>
            </section>

            {/* ================= DOHA AIRPORT ================= */}
            <section aria-labelledby="airport" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    <div className={prose}>
                        <Plane className="w-7 h-7 text-[#0f6b78]" aria-hidden="true" />
                        <h2 id="airport" className={`${h2} mb-2`}>Doha Airport to Riyadh Transfer</h2>
                        <p>
                            If you are flying into {DOH} and continuing to Riyadh by road, the transfer starts where your flight ends. Two things are worth understanding before you book. First, this is an international road journey that begins in Qatar, not a Saudi airport taxi: you clear Qatar arrival formalities at the airport, then later leave Qatar again at the land border. Second, the pickup time depends on when you actually walk out of the terminal, which is rarely the scheduled landing time.
                        </p>
                        <h3 className={`${h3} pt-2`}>What to send us for an airport pickup</h3>
                        <ul className="space-y-2">
                            <Tick>Your flight number and the scheduled arrival date and time in Doha. The flight number lets us see which flight you are on and plan the pickup around it.</Tick>
                            <Tick>The number of adults and children, and how many suitcases and large items you will collect from the belt.</Tick>
                            <Tick>The full destination address in Riyadh: hotel name, residence or office, not just &ldquo;Riyadh&rdquo;.</Tick>
                            <Tick>A phone number that works in Qatar after you land, ideally with WhatsApp.</Tick>
                            <Tick>Anything that needs planning: a child seat request, a stop on the way, or a deadline in Riyadh.</Tick>
                        </ul>
                        <h3 className={`${h3} pt-2`}>Meeting the driver</h3>
                        <p>
                            The meeting point at Hamad International Airport is agreed with you before the trip and sent with the driver&apos;s name and number. Allow time for immigration, baggage and, if it applies, customs before you look for the driver. We do not promise that a driver can wait inside restricted areas of the terminal, so please follow the meeting instructions you receive rather than expecting a sign at the aircraft door.
                        </p>
                        <h3 className={`${h3} pt-2`}>If your flight changes</h3>
                        <p>
                            Tell us on WhatsApp as soon as you know about a new flight, a delay or a missed connection. We will adjust the pickup where the driver&apos;s schedule allows and tell you straight away if the change affects the booking. Any waiting arrangement is confirmed with the booking; please do not assume unlimited waiting after a late arrival.
                        </p>
                        <h3 className={`${h3} pt-2`}>Plan for the border, not just the drive</h3>
                        <p>
                            After a long flight it is tempting to think of the road as six hours and done. The Abu Samra and Salwa checks come after roughly an hour of driving from the airport, and their queues are outside anyone&apos;s control. If you have an evening appointment or a hotel check-in deadline in Riyadh, tell us and we will be honest about whether it is realistic from your arrival time.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-[#0e2a3b] text-white p-8 lg:sticky lg:top-28">
                        <h3 className="text-xl font-bold mb-4">Arriving at DOH?</h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-5">Choose &ldquo;{DOH}&rdquo; as the pickup in the form. A flight number field appears so you can add it straight away.</p>
                        <a href={QUOTE_HREF} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e9c48a] px-6 py-3.5 font-bold text-[#0e2a3b] hover:bg-[#f2d6a8]">Request airport pickup <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-bold text-white hover:bg-white/10"><WhatsAppIcon className="w-4 h-4 fill-current" /> Send flight details</a>
                    </aside>
                </div>
            </section>

            {/* ================= DOOR TO DOOR ================= */}
            <section aria-labelledby="door" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="door" className={`${h2} mb-5`}>Door-to-Door from Doha to Riyadh</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        The driver collects you at an agreed point in Doha and takes you to an agreed point in Riyadh, with the luggage travelling in the same vehicle. Exact addresses matter: Doha and Riyadh are both large cities, and &ldquo;central Riyadh&rdquo; can mean a 40-minute difference at the end of a long day. A pinned location on WhatsApp is the easiest way to remove any doubt.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-2xl bg-[#f4f1ea] p-7">
                            <h3 className={`${h3} mb-4 flex items-center gap-2`}><MapPin className="w-5 h-5 text-[#0f6b78]" aria-hidden="true" />Pickup in Doha</h3>
                            <ul className="space-y-2 text-stone-700">
                                <Tick>{DOH}, at the agreed meeting point</Tick>
                                <Tick>Hotels in West Bay, Msheireb, The Pearl, Lusail and elsewhere in Doha</Tick>
                                <Tick>A private residence or compound</Tick>
                                <Tick>An office or business address</Tick>
                                <Tick>Another pickup point you confirm with us</Tick>
                            </ul>
                        </div>
                        <div className="rounded-2xl bg-[#f4f1ea] p-7">
                            <h3 className={`${h3} mb-4 flex items-center gap-2`}><Building2 className="w-5 h-5 text-[#0f6b78]" aria-hidden="true" />Drop-off in Riyadh</h3>
                            <ul className="space-y-2 text-stone-700">
                                <Tick>A hotel anywhere in Riyadh</Tick>
                                <Tick>A family home or residence</Tick>
                                <Tick>An office, business district or government address</Tick>
                                <Tick>A conference or event venue</Tick>
                                <Tick>{RUH}, when you have a separate flight to catch</Tick>
                            </ul>
                        </div>
                    </div>
                    <p className="text-sm text-stone-600 mt-5 flex gap-2"><Info className="w-4 h-4 mt-0.5 text-[#0f6b78] shrink-0" aria-hidden="true" />These are typical examples, not a list of every place we can reach. Some sites, such as secure compounds or venues, may have their own access rules, so mention them when booking.</p>
                </div>
            </section>

            {/* ================= DISTANCE + BORDER ================= */}
            <section aria-labelledby="time" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className={prose}>
                        <h2 id="time" className={`${h2} mb-2`}>Distance, Driving Time and the Border Crossing</h2>
                        <p>
                            By road, Doha to Riyadh is roughly 570–620 km. Route planners put the pure driving time at around six and a half hours, and we tell passengers to expect 6–7 hours behind the wheel. That figure is driving only. The door-to-door time is what matters for your plans, and it is longer.
                        </p>
                        <p>
                            The first stretch runs south-west from Doha to the Abu Samra border post, usually a little over an hour. You complete Qatar exit formalities there, drive a short distance to the Saudi post at Salwa, and go through Saudi entry. From Salwa the road continues through the Al Ahsa region to the main highway and on to Riyadh.
                        </p>
                        <h3 className={`${h3} pt-2`}>What can add time</h3>
                        <ul className="space-y-2">
                            <Tick>Immigration and customs checks on both sides, including document checks for every passenger.</Tick>
                            <Tick>Queues at the border, which are typically longer at weekends, during holidays and around Eid.</Tick>
                            <Tick>Vehicle documentation and inspection when the authorities ask for it.</Tick>
                            <Tick>Rest stops for food, fuel and prayer, which are worth taking on a drive this long.</Tick>
                            <Tick>Traffic entering Riyadh, especially in the evening rush.</Tick>
                        </ul>
                        <p>
                            We do not quote a fixed border time because there is no honest fixed figure. If something in Riyadh cannot move, such as a flight, a contract signing or an event start, tell us what it is and when, and we will suggest a pickup time with a sensible margin. For a same-day round trip, think carefully: two long drives and two crossings make for a very long day, and it is rarely the comfortable choice.
                        </p>
                        <p>
                            For more detail on the road itself, see the <Link href="/distance/doha-to-riyadh/" className={link}>Doha to Riyadh distance guide</Link>.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-[#081c27] text-white p-7 md:p-10 lg:sticky lg:top-28">
                        <RouteJourney
                            vehicle
                            palette="platinum"
                            stops={[
                                { title: 'Doha pickup', text: 'Hamad International Airport, your hotel, home or office.' },
                                { title: 'South-west to the border', text: 'Usually a little over an hour from central Doha.' },
                                { title: 'Abu Samra - Qatar exit', text: 'Qatar exit formalities for passengers and the vehicle.', accent: true },
                                { title: 'Salwa - Saudi entry', text: 'Saudi immigration and customs; vehicle checks when asked.', accent: true },
                                { title: 'Across Al Ahsa to the capital', text: 'Highway driving west, with rest stops on request.' },
                                { title: 'Riyadh drop-off', text: 'Your hotel, residence, office or King Khalid International Airport.' },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ================= DOCUMENTS ================= */}
            <section aria-labelledby="documents" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
                    <div>
                        <FileText className="w-7 h-7 text-[#0f6b78] mb-4" aria-hidden="true" />
                        <h2 id="documents" className={`${h2} mb-4`}>Border Documents and Travel Preparation</h2>
                        <p className="text-stone-700 leading-relaxed">
                            Each passenger is responsible for holding the passport, visa, residency or other permission that their own situation requires to leave Qatar and enter Saudi Arabia. The rules depend on nationality, residency, visa type and other conditions, and they change from time to time.
                        </p>
                    </div>
                    <div className={prose}>
                        <p>
                            We do not publish a single checklist for every traveller, because one does not exist. A Qatari citizen, a Saudi resident returning home and a visitor on a tourist visa can face quite different requirements at the same counter. Before you book, check the current rules for every passenger, including children, with the official immigration authorities or the relevant embassy.
                        </p>
                        <p>
                            Booking a private transfer does not establish that anyone may enter Saudi Arabia, and our driver cannot influence an immigration decision. If a passenger is refused at the border, the journey cannot continue for that passenger, so it really is worth checking in advance.
                        </p>
                        <h3 className={`${h3} pt-2`}>Simple habits that help on the day</h3>
                        <ul className="space-y-2">
                            <Tick>Keep passports and any visa printouts in the cabin with you, not in a suitcase in the back.</Tick>
                            <Tick>Make sure every name and passport number matches the documents you were issued.</Tick>
                            <Tick>Carry a charged phone and the address of your accommodation in Riyadh.</Tick>
                            <Tick>Pack medicines and anything you may need at the border in a small bag you can reach.</Tick>
                        </ul>
                        <p className="text-sm">
                            Travelling the other way later? The <Link href="/blog/saudi-to-uae-qatar-by-road-documents/" className={link}>guide to documents for Saudi to Qatar by road</Link> covers the return direction.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLE + PRICE ================= */}
            <section aria-labelledby="vehicle" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicle" className={`${h2} mb-8`}>Vehicle, Capacity and Price</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-5">
                        <article className="rounded-3xl bg-[#0e2a3b] text-white overflow-hidden flex flex-col">
                            <div className="relative aspect-[16/9]">
                                <Image src="/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp" alt="GMC Yukon XL used for private transfers between Doha and Riyadh" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                            </div>
                            <div className="p-7 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-white">GMC Yukon / Denali</h3>
                                <p className="text-5xl font-black text-[#e9c48a] mt-2">{PRICE.toLocaleString('en-US')} <span className="text-lg font-semibold text-white/70">SAR</span></p>
                                <p className="text-sm text-white/70 mt-1 mb-5">Private one-way transfer · Price per vehicle</p>
                                <ul className="space-y-2 text-sm text-white/85 mb-6">
                                    <li>Included: the vehicle and driver for the whole trip, fuel, road tolls and the vehicle&apos;s cross-border insurance.</li>
                                    <li>Not included: passenger visas or entry fees, meals and personal costs, and detours or long waits not agreed when booking.</li>
                                </ul>
                                <Link href={BOOK_GMC} className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#e9c48a] px-6 py-3.5 font-bold text-[#0e2a3b] hover:bg-[#f2d6a8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Book the GMC <Arrow /></Link>
                            </div>
                        </article>
                        <div className={`rounded-3xl bg-white border border-[#0e2a3b]/10 p-7 md:p-9 ${prose}`}>
                            <p>
                                This route runs with a GMC Yukon or Denali, a full-size SUV with three rows of seats. On a drive of six hours or more, room to sit properly and space for the bags make a real difference, which is why we use it here rather than a sedan.
                            </p>
                            <p>
                                The GMC has seats for up to seven passengers, but seats and luggage compete for space. As a rough guide it carries about five large suitcases when most seats are in use. Seven adults with seven large cases will not travel comfortably, and we would rather tell you that when booking than at the pickup.
                            </p>
                            <p>
                                So when you request a quote, give us the real numbers: adults, children and their ages, large suitcases, cabin bags, and anything unusual such as a pushchair, golf bags or a wheelchair. If you need a child seat or have an accessibility requirement, say so up front so we can tell you what is possible.
                            </p>
                            <p>
                                You can ask for a different vehicle. Something else may be possible on some dates, but its availability and fare must be confirmed with us first. A vehicle is only reserved for you once the booking is confirmed for your date. <Link href="/fleet/gmc-yukon/" className={link}>More about the GMC Yukon</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHO ================= */}
            <section aria-labelledby="who" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="who" className={`${h2} mb-8`}>Who Books a Doha to Riyadh Transfer?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: Plane, t: 'Airport arrivals', d: 'Long-haul passengers landing in Doha who would rather not take a connecting flight. Send the flight number and the luggage count, and leave room in your plans for the border after the flight.' },
                            { icon: Briefcase, t: 'Corporate travellers', d: <>Executives and project teams heading to Riyadh offices or ministries. Give us the meeting time as well as the address, so the pickup time is set backwards from it. Company accounts: see <Link href="/services/business/" className={link}>business travel</Link>.</> },
                            { icon: Users, t: 'Families', d: 'Parents with children and a full load of bags. Tell us the children’s ages and any child-seat needs, and plan stops: a long drive goes better with a proper break halfway.' },
                            { icon: Globe2, t: 'Private groups', d: 'Friends or colleagues sharing one vehicle for one price. Check that everyone holds the documents they need, because one refused passenger can hold up the whole group.' },
                            { icon: Luggage, t: 'Tourists and visitors', d: 'International visitors combining Qatar and Saudi Arabia in one trip. Confirm your Saudi entry eligibility before you book, and give us the Riyadh hotel name and address.' },
                            { icon: Home, t: 'Hotel and home moves', d: 'Passengers going to a hotel, a family home or a new residence, often with more luggage than an airline would allow. Mention boxes or large items early.' },
                            { icon: CalendarClock, t: 'Connecting to a flight from Riyadh', d: `If you are driving to ${RUH} for a flight, tell us the departure time. Because border waits vary, we plan with a wide margin, and for very tight connections we may advise against the road.` },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f4f1ea] p-6">
                                <Icon className="w-6 h-6 text-[#0f6b78] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#0e2a3b] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SCENARIOS ================= */}
            <section aria-labelledby="scenarios" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="scenarios" className={`${h2} mb-4`}>How Different Trips Are Planned</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">These are typical situations rather than real bookings. Each shows the questions we need answered before the trip can be arranged.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            { t: 'Landing at Hamad, staying at a Riyadh hotel', d: 'A traveller arrives on an afternoon flight and wants to reach a hotel in Riyadh the same evening.', q: ['Which flight, and when does it land?', 'How many bags will come off the belt?', 'What is the hotel’s exact name and address?', 'Is there a late check-in arrangement with the hotel?'] },
                            { t: 'A family moving from a Doha home to Riyadh', d: 'Two adults and three children leave their home in Doha with a lot of luggage.', q: ['How many suitcases and how large?', 'How old are the children, and are child seats needed?', 'Does everyone hold the right documents for Saudi Arabia?', 'Would an early start with a midday break suit the children?'] },
                            { t: 'A business traveller with a Riyadh meeting', d: 'An executive leaves a Doha hotel for an afternoon meeting at an office in Riyadh.', q: ['What time does the meeting start, and where exactly?', 'How much margin is acceptable for the border?', 'Should the trip end at the office or at a hotel first?', 'Is a return to Doha needed, and when?'] },
                            { t: 'Driving to King Khalid Airport for a flight', d: 'A passenger leaves Doha to catch a separately booked flight from Riyadh.', q: ['What is the flight departure time?', 'How early does the airline require check-in?', 'Is there checked luggage?', 'Is the connection realistic given border variability?'] },
                        ].map(({ t, d, q }) => (
                            <div key={t} className="rounded-2xl bg-white border border-[#0e2a3b]/10 p-7">
                                <h3 className={`${h3} mb-2`}>{t}</h3>
                                <p className="text-stone-600 text-sm leading-relaxed mb-4">{d}</p>
                                <ul className="space-y-1.5 text-sm text-stone-700">
                                    {q.map((x) => <Tick key={x}>{x}</Tick>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= HOW TO BOOK ================= */}
            <section aria-labelledby="book" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-4`}>How to Book a Doha to Riyadh Transfer</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Use the form at the top of this page or send the same details on WhatsApp. Either way, there are three stages: you send a <strong>request</strong>, we check <strong>availability</strong> for your date, and the booking becomes <strong>confirmed</strong> only when we have agreed the fare and the pickup with you.
                    </p>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            ['Pickup in Doha', 'Hamad Airport or an exact address.'],
                            ['Destination in Riyadh', 'Hotel, residence, office or airport.'],
                            ['Date and time', 'Your preferred local pickup time.'],
                            ['Passengers and luggage', 'Adults, children and suitcases.'],
                            ['Vehicle', `The GMC at ${PRICE_TEXT}, or ask about others.`],
                            ['Flight details', 'Flight number and arrival time for airport pickups.'],
                            ['Quote and availability', 'We confirm the vehicle, fare and what is included.'],
                            ['Confirmation', 'You receive the confirmed booking and pickup instructions.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-[#f4f1ea] p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#0f6b78] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#0e2a3b] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={primary}>Request a Doha to Riyadh quote <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp for Doha → Riyadh</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Taxi Service KSA · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a> (call or WhatsApp)</p>
                </div>
            </section>

            {/* ================= CHECKLIST ================= */}
            <section aria-labelledby="checklist" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
                    <div>
                        <ShieldCheck className="w-7 h-7 text-[#0f6b78] mb-4" aria-hidden="true" />
                        <h2 id="checklist" className={`${h2} mb-4`}>What to Confirm Before Departure</h2>
                        <p className="text-stone-700 leading-relaxed">A few minutes checking these details the day before saves most of the problems we see on long cross-border trips. If anything in the confirmation is unclear, ask before you travel rather than at the pickup.</p>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            ['Pickup point', 'Exact address or airport meeting point'],
                            ['Drop-off point', 'Exact address in Riyadh'],
                            ['Date and time', 'Local pickup time in Doha'],
                            ['Passengers', 'Adults and children, with ages'],
                            ['Luggage', 'Number and size of bags'],
                            ['Vehicle', 'GMC Yukon / Denali or as agreed'],
                            ['Fare', 'The final agreed amount'],
                            ['Payment', 'Method and timing agreed at booking'],
                            ['Border', 'Every passenger’s documents checked'],
                            ['Driver', 'Name, phone and meeting instructions'],
                            ['Special requests', 'Child seats, stops, accessibility'],
                            ['Return trip', 'Dates and pickup, if booked'],
                        ].map(([k, v]) => (
                            <li key={k} className="flex gap-3 rounded-xl bg-white border border-[#0e2a3b]/10 p-4">
                                <Check className="w-5 h-5 mt-0.5 text-[#0f6b78] shrink-0" aria-hidden="true" />
                                <span><span className="font-bold text-[#0e2a3b]">{k}</span><span className="block text-sm text-stone-600">{v}</span></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#0e2a3b]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0e2a3b] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#0e2a3b] mb-3">Related Routes and Services</h2>
                    <p className="text-stone-700 mb-5 flex items-center gap-2"><Clock className="w-4 h-4 text-[#0f6b78]" aria-hidden="true" />Going back later? The <Link href="/routes/riyadh-doha/" className={link}>Riyadh to Doha transfer</Link> runs at the same fare.</p>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Riyadh to Doha taxi', '/routes/riyadh-doha/'],
                            ['Riyadh Airport transfers', '/riyadh-airport-taxi/'],
                            ['Taxi service in Riyadh', '/locations/riyadh/'],
                            ['Doha to Dammam taxi', '/routes/doha-dammam/'],
                            ['GMC Yukon', '/fleet/gmc-yukon/'],
                            ['GCC chauffeur service', '/services/gcc-chauffeur-service/'],
                            ['Doha to Riyadh distance', '/distance/doha-to-riyadh/'],
                            ['Guide: Riyadh to Doha by road', '/blog/riyadh-to-doha-by-road-guide/'],
                            ['Book a transfer', '/booking/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#0e2a3b]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#0e2a3b] hover:border-[#0f6b78] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f6b78]">{l}</Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
