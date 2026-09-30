import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Car, Check, X, Info, FileText, ShieldAlert, PlaneTakeoff, Hotel, Briefcase, Repeat, Users, Coffee, Landmark, Home, Plane, Route } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import QatarDestinationPicker from '@/components/qatar/QatarDestinationPicker';
import QatarFleet from '@/components/qatar/QatarFleet';
import QuoteFactors from '@/components/qatar/QuoteFactors';

const PAGE_URL = 'https://taxiserviceksa.com/routes/khobar-to-qatar-taxi/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote from Al Khobar to Qatar. Pickup, Qatar destination, date, passengers and bags: ')}`;

export const metadata: Metadata = {
    title: 'Al Khobar to Qatar Private Transfer | Doha Road Transfer',
    description:
        'Private road transfer from Al Khobar to Doha and other Qatar destinations via the Saudi–Qatar land border. Vehicles for individuals, families and groups - request a quote.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Al Khobar to Qatar Private Transfer',
        description: 'Door-to-door by road from Al Khobar to Doha and other Qatar destinations.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Al Khobar to Qatar private transfer' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Al Khobar to Qatar Private Transfer',
        description: 'Door-to-door by road from Al Khobar to Doha and other Qatar destinations.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

const q = (p: Record<string, string>) => `/booking/?${new URLSearchParams(p).toString()}`;

// One methodology: Al Khobar to central Doha by road via the Salwa / Abu Samra crossing.
const ROAD = 'About 390–400 km';
const DRIVE = 'Roughly 4 hours';

const STAGES = [
    { flag: 'SA', t: 'Al Khobar', d: 'Pickup at your hotel, home or office.', seg: 'About 300 km of Saudi road' },
    { flag: 'SA', t: 'Saudi road', d: 'Private vehicle south towards the border. Planned stops on request.', seg: null },
    { flag: 'BORDER', t: 'Saudi–Qatar border', d: 'Saudi exit at Salwa, then Qatar entry at Abu Samra. Time varies.', seg: 'About 100 km in Qatar' },
    { flag: 'QA', t: 'Qatar', d: 'On towards Doha and your destination.', seg: null },
    { flag: 'QA', t: 'Doha / Lusail / DOH / destination', d: 'Final drop-off at the address you gave us.', seg: null },
];

const faqs = [
    { q: 'Can I travel from Al Khobar to Doha by private car?', a: 'Yes - door to door by road, from your Al Khobar address to your Doha hotel, office or other address.' },
    { q: 'Does the vehicle cross the Saudi–Qatar border?', a: 'Yes. We assign a vehicle and driver eligible for the crossing, so you stay in the same car to your Qatar destination.' },
    { q: 'How long does Al Khobar to Doha take?', a: `${DRIVE} of driving for ${ROAD.toLowerCase()}, plus border processing, which varies. Allow additional time for border formalities and traffic.` },
    { q: 'How much does the transfer cost?', a: 'We quote each trip per vehicle. The price depends on pickup, Qatar destination, vehicle, passengers, luggage, one-way or return and waiting. You receive it before you confirm.' },
    { q: 'What documents do I need?', a: 'A valid passport and any Qatar visa or entry permission that applies to you, plus Saudi residency documents if relevant. Requirements vary - confirm current requirements before departure.' },
    { q: 'Does the driver handle immigration?', a: 'No. The driver handles the vehicle and can direct you to the relevant procedures; immigration and customs decisions remain with the authorities.' },
    { q: 'Can you take me to Hamad International Airport?', a: 'Yes. Share your flight and departure time, and allow a substantial buffer - border processing is variable.' },
    { q: 'Can I travel with my family?', a: 'Yes. Tell us every passenger and suitcase so the vehicle fits; mention child seats if you need them and we confirm what we can provide.' },
    { q: 'Can I book a return transfer?', a: 'Yes - tick "I also need a return trip" and give the return date and time, or ask about a same-day return.' },
    { q: 'Can I go to Lusail or Al Wakrah?', a: 'Yes. Choose the destination in the booking form or enter the full address.' },
    { q: 'Which vehicle should I choose?', a: 'Choose by passengers and luggage - use the vehicle selector on this page. For a long international drive, a little extra space helps.' },
    { q: 'Can I book from DMM Airport instead of Al Khobar?', a: 'Yes - enter DMM Airport as the pickup, or see the DMM Airport to Doha route.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Al Khobar to Qatar private transfer',
            url: PAGE_URL,
            serviceType: 'Cross-border private transfer',
            description: 'Private door-to-door road transfer from Al Khobar to Doha, Hamad International Airport, Lusail, Al Wakrah and other Qatar destinations via the Saudi–Qatar land border.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: [
                { '@type': 'City', name: 'Al Khobar' },
                { '@type': 'Country', name: 'Qatar' },
            ],
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
const link = 'font-semibold text-[#8a1538] hover:underline';

export default function KhobarQatarPage() {
    return (
        <div className="qatar-page bg-[#f6f5f7]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0b1c3d]">
                <svg className="absolute inset-0 -z-10 w-full h-full" viewBox="0 0 1440 860" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    {/* maroon serrated edge nods to Qatar without a flag */}
                    <path d={`M1180 0 ${Array.from({ length: 9 }, (_, i) => `L ${i % 2 === 0 ? 1210 : 1180} ${(i + 1) * 96}`).join(' ')} L1440 860 L1440 0 Z`} fill="#8a1538" fillOpacity="0.35" />
                    <path d="M200 120 C 420 260, 520 420, 760 520 S 1080 640, 1240 760" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="12" strokeLinecap="round" />
                    <path d="M200 120 C 420 260, 520 420, 760 520 S 1080 640, 1240 760" fill="none" stroke="#e8a3b6" strokeWidth="2" strokeLinecap="round" pathLength={1} className="route-draw" />
                    <rect x="752" y="512" width="18" height="18" rx="3" fill="#ffffff" transform="rotate(45 761 521)" />
                </svg>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1c3d] via-[#0b1c3d]/90 to-[#0b1c3d]/30" aria-hidden="true" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-6 lg:gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className="hidden sm:flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/70 mb-6">
                            <span>Al Khobar</span><span aria-hidden="true">→</span><span className="text-[#e8a3b6]">Saudi–Qatar border</span><span aria-hidden="true">→</span><span>Qatar</span>
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-tight mb-5">Al Khobar to Qatar Private Transfer</h1>
                        <p className="text-base sm:text-lg text-white/85 leading-relaxed sm:mb-8 max-w-xl">
                            Travel privately from Al Khobar to Doha and other Qatar destinations by road, with a vehicle selected for your passengers, luggage and journey.
                        </p>
                        <div className="hidden sm:flex gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#0b1c3d] hover:bg-slate-100">
                                <a href={QUOTE_HREF}>Get Qatar Transfer Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                    </div>
                    <div id="quote" className="scroll-mt-32">
                        <RouteQuoteCard
                            title="Al Khobar → Qatar"
                            cta="Get Qatar Transfer Quote"
                            fromPlaceholder="Al Khobar hotel, home or office"
                            toPlaceholder="Qatar hotel, airport or address"
                            fromChips={['Al Khobar', 'Al Khobar hotel', 'King Fahd International Airport (DMM)']}
                            toChips={['Doha, Qatar', 'Hamad International Airport (DOH), Qatar', 'Lusail, Qatar', 'Al Wakrah, Qatar']}
                            showFlight
                            returnNote="Return trip Qatar to Al Khobar also needed - date and time to confirm."
                            buttonClass="bg-[#8a1538] hover:bg-[#6f102d] focus-visible:ring-[#8a1538]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= TIMING ================= */}
            <section aria-label="Journey timing" className="bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto py-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                        ['Road journey', `${ROAD} · ${DRIVE}`, 'Al Khobar to central Doha, driving only'],
                        ['Border processing', 'Variable', 'Saudi exit and Qatar entry'],
                        ['Total journey', 'Driving + border + stops', 'Allow additional time for border formalities and traffic'],
                    ].map(([k, v, d], i) => (
                        <div key={k} className={`rounded-xl px-4 py-3 ${i === 1 ? 'bg-[#8a1538] text-white' : 'bg-[#f6f5f7]'}`}>
                            <p className={`text-xs font-bold uppercase tracking-wider ${i === 1 ? 'text-white/70' : 'text-slate-500'}`}>{k}</p>
                            <p className={`text-lg font-bold ${i === 1 ? '' : 'text-[#0b1c3d]'}`}>{v}</p>
                            <p className={`text-xs ${i === 1 ? 'text-white/70' : 'text-slate-500'}`}>{d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= WHERE IN QATAR ================= */}
            <section aria-labelledby="where" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="where" className="text-3xl md:text-4xl font-bold text-[#0b1c3d] mb-6">Where in Qatar?</h2>
                    <QatarDestinationPicker />
                </div>
            </section>

            {/* ================= ONE BOOKING, TWO COUNTRIES (signature) ================= */}
            <section aria-labelledby="journey" className="bg-[#0b1c3d] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
                    <div className="lg:sticky lg:top-28">
                        <h2 id="journey" className="text-3xl md:text-5xl font-bold mb-4">One Booking, Two Countries</h2>
                        <p className="text-white/70 leading-relaxed mb-6">The same private car from your Al Khobar door to your Qatar destination: a long Saudi road stretch, the land border, then the last stretch into Qatar.</p>
                        <p className="text-xs text-white/40">Diagram of the journey stages - not a navigational map.</p>
                    </div>
                    <ol className="relative">
                        <span className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-white/15" aria-hidden="true" />
                        <span className="car-descend hidden sm:flex absolute left-0 z-10 w-9 h-9 rounded-full bg-white text-[#0b1c3d] items-center justify-center shadow-lg" aria-hidden="true"><Car className="w-4 h-4" /></span>
                        {STAGES.map((s, i) => (
                            <li key={s.t} className="relative pl-16 pb-8 last:pb-0">
                                <span className={`absolute left-[9px] top-1.5 w-5 h-5 rounded-full border-2 ${s.flag === 'BORDER' ? 'bg-[#8a1538] border-[#e8a3b6]' : s.flag === 'QA' ? 'bg-[#e8a3b6] border-[#e8a3b6]' : 'bg-[#0b1c3d] border-white'}`} aria-hidden="true" />
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">{s.flag === 'BORDER' ? 'Border' : s.flag === 'QA' ? 'Qatar' : 'Saudi Arabia'}</p>
                                <h3 className="mb-1">{s.t}</h3>
                                <p className="text-sm text-white/70">{s.d}</p>
                                {s.seg && <p className="mt-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">↓ {s.seg}</p>}
                                {i === 2 && <span className="sr-only">Border processing time varies.</span>}
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ================= BORDER PROCESS ================= */}
            <section aria-labelledby="border" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="border" className="text-3xl md:text-5xl font-bold text-[#0b1c3d] mb-4 max-w-3xl">Saudi Arabia → Qatar Border Crossing</h2>
                    <p className="text-lg text-slate-700 max-w-3xl mb-10">The land crossing is at Salwa on the Saudi side and Abu Samra on the Qatari side. Border processing can vary significantly depending on traffic, passenger processing and current border conditions.</p>
                    <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
                        {['Al Khobar pickup', 'Drive to the border', 'Saudi departure procedures', 'Border crossing', 'Qatar entry procedures', 'On to your destination'].map((s, i) => (
                            <li key={s} className={`rounded-2xl p-4 ${i === 2 || i === 4 ? 'bg-[#8a1538] text-white' : 'bg-white border border-slate-200 text-[#0b1c3d]'}`}>
                                <span className={`text-xs font-black ${i === 2 || i === 4 ? 'text-white/70' : 'text-[#8a1538]'}`}>0{i + 1}</span>
                                <p className="font-bold text-sm mt-1">{s}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-3xl bg-white border border-slate-200 p-7">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2"><Car className="w-4 h-4" aria-hidden="true" /> Our side</p>
                            <p className="text-slate-700">A vehicle and driver eligible for the crossing. The driver handles the vehicle and can direct you to the relevant procedures.</p>
                        </div>
                        <div className="rounded-3xl bg-[#0b1c3d] text-white p-7">
                            <p className="text-xs font-bold uppercase tracking-wider text-[#e8a3b6] mb-2 flex items-center gap-2"><ShieldAlert className="w-4 h-4" aria-hidden="true" /> The authorities&apos; side</p>
                            <p className="text-white/80">Immigration and customs decisions. Nobody can offer priority processing, skip queues or guarantee a crossing time.</p>
                        </div>
                    </div>
                    <aside className="mt-6 rounded-3xl border-2 border-[#8a1538] bg-[#fbf2f5] p-7 flex gap-4">
                        <ShieldAlert className="w-7 h-7 text-[#8a1538] shrink-0" aria-hidden="true" />
                        <p className="text-[#0b1c3d] font-medium leading-relaxed">Transportation booking does not guarantee immigration clearance or entry into Qatar. Each passenger is responsible for meeting the applicable travel, visa and entry requirements.</p>
                    </aside>
                    <p className="text-sm text-slate-600 mt-5">More on the crossing: <Link href="/border-crossings/taxi-abu-samra-border-crossing/" className={link}>Abu Samra border guide</Link>.</p>
                </div>
            </section>

            {/* ================= DOCUMENTS ================= */}
            <section aria-labelledby="docs" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <details className="group rounded-3xl border border-slate-200 bg-[#f6f5f7] p-6 md:p-8" open>
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a1538] rounded-lg">
                            <h2 id="docs" className="text-2xl md:text-3xl font-bold text-[#0b1c3d] flex items-center gap-3"><FileText className="w-6 h-6 text-[#8a1538]" aria-hidden="true" /> Before Travelling to Qatar</h2>
                            <span className="text-2xl text-[#8a1538] transition-transform group-open:rotate-45 motion-reduce:transition-none" aria-hidden="true">+</span>
                        </summary>
                        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                            {['Passport', 'Saudi residency documentation, where applicable', 'Qatar visa or entry permission, where applicable', 'Any documents required for minors or special cases'].map((i) => (
                                <li key={i} className="flex gap-3 rounded-xl bg-white px-4 py-3"><span className="mt-1 w-4 h-4 rounded border-2 border-[#8a1538]/50 shrink-0" aria-hidden="true" />{i}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-slate-600 mt-5">Requirements can vary by nationality, residency status, travel purpose and current regulations. Confirm current requirements before departure.</p>
                    </details>
                </div>
            </section>

            {/* ================= DESTINATIONS ================= */}
            <section aria-label="Qatar destinations" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <article className="rounded-3xl bg-white border border-slate-200 p-7 md:p-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 mb-5">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a1538] mb-2">Main route</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c3d] mb-4">Al Khobar to Doha Private Transfer</h2>
                                <p className="text-slate-700 leading-relaxed">From your Al Khobar hotel, home or office, straight through the border to your Doha hotel or business address - with the option of a return on the same day or later.</p>
                            </div>
                            <div className="flex flex-col justify-center gap-3">
                                <Link href={q({ from: 'Al Khobar', to: 'Doha, Qatar' })} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#8a1538] px-5 py-4 font-bold text-white hover:bg-[#6f102d]">Get Al Khobar → Doha Quote <Arrow /></Link>
                                <Link href="/routes/dammam-doha/" className="text-center text-sm font-bold text-[#8a1538] hover:underline">Starting in Dammam? Dammam → Doha</Link>
                            </div>
                        </article>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { i: PlaneTakeoff, t: 'Al Khobar to Hamad International Airport', d: 'For flights from Doha. Send flight number, departure time, pickup, passengers and luggage. Because border processing is variable, allow a substantial buffer before your flight.', h: q({ from: 'Al Khobar', to: 'Hamad International Airport (DOH), Qatar' }), l: 'Airport transfer quote' },
                            { i: Hotel, t: 'Al Khobar to Your Qatar Hotel', d: 'Doha, Lusail, Al Wakrah or elsewhere. Send the hotel name, full address, passengers and luggage.', h: q({ from: 'Al Khobar', to: 'Qatar hotel', notes: 'Hotel name and address: ' }), l: 'Hotel transfer quote' },
                            { i: Landmark, t: 'Al Khobar to Lusail', d: 'Hotels, business and events north of central Doha.', h: q({ from: 'Al Khobar', to: 'Lusail, Qatar' }), l: 'Lusail quote' },
                            { i: Home, t: 'Al Khobar to Al Wakrah', d: 'Hotels, homes and businesses south of Doha.', h: q({ from: 'Al Khobar', to: 'Al Wakrah, Qatar' }), l: 'Al Wakrah quote' },
                        ].map((c, idx) => (
                            <Reveal key={c.t} delay={idx * 70} className="h-full">
                                <article className="h-full rounded-2xl bg-white border border-slate-200 p-6 flex flex-col">
                                    <c.i className="w-6 h-6 text-[#8a1538] mb-4" aria-hidden="true" />
                                    <h3 className="mb-2 text-[#0b1c3d]">{c.t}</h3>
                                    <p className="text-sm text-slate-600 mb-5">{c.d}</p>
                                    <Link href={c.h} className="group mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#8a1538]">{c.l} <Arrow /></Link>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= BUSINESS + SAME DAY ================= */}
            <section aria-label="Business and same-day return" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <article className="rounded-3xl bg-[#0b1c3d] text-white p-7 md:p-9">
                        <Briefcase className="w-7 h-7 text-[#e8a3b6] mb-4" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Al Khobar → Qatar for Business</h2>
                        <ul className="space-y-2 text-white/80 mb-6">
                            <li>Meetings, conferences and company visits</li>
                            <li>Hotel or airport drop-off in Qatar</li>
                            <li>Executive vehicles on request</li>
                            <li>Same-day or overnight trips where operationally possible</li>
                        </ul>
                        <Link href="/services/corporate-travel/" className="group inline-flex items-center gap-2 font-bold text-[#e8a3b6]">Corporate transfers <Arrow /></Link>
                    </article>
                    <article className="rounded-3xl bg-[#fbf2f5] p-7 md:p-9">
                        <Repeat className="w-7 h-7 text-[#8a1538] mb-4" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0b1c3d] mb-4">Al Khobar → Qatar → Al Khobar</h2>
                        <p className="text-slate-700 mb-4">For a meeting, an appointment, an event or a short visit. The border is crossed twice, so plan a long day. Tell us:</p>
                        <ul className="grid grid-cols-2 gap-2 text-sm text-[#0b1c3d] mb-6">
                            {['Outbound time', 'Qatar destination', 'Return time', 'Waiting needed or not'].map((i) => (
                                <li key={i} className="flex gap-2"><Check className="w-4 h-4 text-[#8a1538] mt-0.5 shrink-0" aria-hidden="true" />{i}</li>
                            ))}
                        </ul>
                        <Link href={q({ from: 'Al Khobar', to: 'Doha, Qatar', notes: 'Same-day return to Al Khobar - return time and waiting: ' })} className="group inline-flex items-center gap-2 font-bold text-[#8a1538]">Same-day return quote <Arrow /></Link>
                    </article>
                </div>
            </section>

            {/* ================= FLEET ================= */}
            <section aria-labelledby="fleet" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="fleet" className="text-3xl md:text-4xl font-bold text-[#0b1c3d] mb-3">Choose a Vehicle for the Drive</h2>
                    <p className="text-slate-600 max-w-2xl mb-8">Four hours or more on the road, plus the border. Match the vehicle to your group and luggage.</p>
                    <QatarFleet />
                </div>
            </section>

            {/* ================= PRICING ================= */}
            <section aria-labelledby="pricing" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="pricing" className="text-3xl md:text-4xl font-bold text-[#0b1c3d] mb-3">Request a Current Qatar Transfer Quote</h2>
                    <p className="text-slate-700 max-w-3xl mb-8">Cross-border prices depend on the vehicle and operational requirements, so we quote each trip per vehicle. Here is what goes into it:</p>
                    <QuoteFactors />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                        <div className="rounded-3xl border border-slate-200 p-7">
                            <h3 className="mb-4 text-[#0b1c3d]">Included</h3>
                            <ul className="space-y-2.5 text-slate-700">
                                {['Private vehicle for your group only', 'Driver', 'Pickup at the agreed Al Khobar address', 'Drop-off at the agreed Qatar destination'].map((i) => (
                                    <li key={i} className="flex gap-3"><Check className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl border border-slate-200 p-7">
                            <h3 className="mb-4 text-[#0b1c3d]">Not included / confirmed with your quote</h3>
                            <ul className="space-y-2.5 text-slate-700">
                                <li className="flex gap-3"><X className="w-5 h-5 text-[#8a1538] shrink-0" aria-hidden="true" />Passenger visa, entry fees and personal immigration charges</li>
                                <li className="flex gap-3"><Info className="w-5 h-5 text-slate-500 shrink-0" aria-hidden="true" />Border-related vehicle charges, extra waiting, route changes and special luggage - stated in your quote</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PLANNING + STOPS + FAMILY ================= */}
            <section aria-label="Planning your trip" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="rounded-3xl bg-white border border-slate-200 p-7">
                        <h2 className="text-2xl font-bold text-[#0b1c3d] mb-4">Planning Your Departure</h2>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li>Weekends can bring different traffic patterns.</li>
                            <li>Holidays and events can increase border demand.</li>
                            <li>Airport passengers need an extra buffer.</li>
                            <li>Schedule business appointments conservatively.</li>
                        </ul>
                        <p className="text-xs text-slate-500 mt-4">We do not publish live border status.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-slate-200 p-7">
                        <h2 className="text-2xl font-bold text-[#0b1c3d] mb-4 flex items-center gap-2"><Coffee className="w-6 h-6 text-[#8a1538]" aria-hidden="true" /> Stops on the Way</h2>
                        <p className="text-sm text-slate-700 mb-3">On a long drive you may want a rest, prayer, meal or fuel stop. Ask for planned stops when you book so they are part of the plan.</p>
                        <p className="text-xs text-slate-500">Longer stops or extra waiting follow the terms stated in your quote.</p>
                    </div>
                    <div className="rounded-3xl bg-[#0b1c3d] text-white p-7">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Users className="w-6 h-6 text-[#e8a3b6]" aria-hidden="true" /> Family or Group?</h2>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>List every passenger and suitcase.</li>
                            <li>Need child seats? Ask - we confirm what we can provide.</li>
                            <li>Every passenger needs their own documents, including children.</li>
                            <li>Book the return with the outbound trip if you know your dates.</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mt-5 rounded-3xl bg-[#fbf2f5] p-7">
                    <h2 className="text-2xl font-bold text-[#0b1c3d] mb-2">Need the Vehicle for Multiple Stops?</h2>
                    <p className="text-slate-700 text-sm">Point-to-point and return journeys are standard. If you need the car to stay with you in Qatar for several movements, ask first - we confirm whether that can be arranged for your dates before quoting.</p>
                </div>
            </section>

            {/* ================= ROAD VS FLIGHT ================= */}
            <section aria-labelledby="compare" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
                    <div>
                        <h2 id="compare" className="text-3xl md:text-4xl font-bold text-[#0b1c3d] mb-3">Private Road Transfer or Flight?</h2>
                        <p className="text-slate-600 mb-6">Neither is better for everyone. Compare what matters for your trip.</p>
                        <div className="overflow-hidden rounded-2xl border border-slate-200">
                            <table className="w-full text-sm">
                                <caption className="sr-only">Private road transfer compared with flying to Qatar</caption>
                                <thead className="bg-[#0b1c3d] text-white"><tr><th scope="col" className="text-left px-4 py-3">Private road transfer</th><th scope="col" className="text-left px-4 py-3">Flight</th></tr></thead>
                                <tbody>
                                    {[
                                        ['Door-to-door', 'Airport-to-airport'],
                                        ['No airport check-in process', 'Airport procedures required'],
                                        ['Border processing applies', 'Airport security applies'],
                                        ['Flexible pickup time', 'Fixed flight schedule'],
                                        ['Luggage limited by vehicle size', 'Airline baggage rules'],
                                    ].map(([a, b]) => (
                                        <tr key={a} className="border-t border-slate-200 even:bg-slate-50"><td className="px-4 py-3 text-[#0b1c3d]">{a}</td><td className="px-4 py-3 text-slate-600">{b}</td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-4 text-[#0b1c3d]">Which fits you?</h3>
                        <ul className="space-y-2">
                            {[
                                { a: 'I want door-to-door', b: 'Private road transfer', h: QUOTE_HREF, i: Route },
                                { a: 'I need to fly', b: 'Airport transfer', h: '/routes/khobar-to-dammam-airport/', i: Plane },
                                { a: 'I have a lot of luggage', b: 'Check vehicle capacity', h: '#fleet', i: Users },
                                { a: 'I am travelling for business', b: 'Executive / private transfer', h: '/services/corporate-travel/', i: Briefcase },
                            ].map((r) => (
                                <li key={r.a}>
                                    <Link href={r.h} className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 px-4 py-3.5 hover:border-[#8a1538] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a1538]">
                                        <span className="flex items-center gap-3"><r.i className="w-4 h-4 text-[#8a1538] shrink-0" aria-hidden="true" /><span><span className="block text-xs text-slate-500">{r.a}</span><span className="block font-bold text-[#0b1c3d]">{r.b}</span></span></span>
                                        <Arrow />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= PROCESS ================= */}
            <section aria-labelledby="process" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="process" className="text-3xl md:text-4xl font-bold text-[#0b1c3d] mb-8">How Booking Works</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            ['Send your trip', 'Pickup, Qatar destination, date, time, passengers and bags.'],
                            ['Receive your quote', 'Eligible vehicle, price and what it covers.'],
                            ['Check documents', 'Every passenger confirms their Qatar entry requirements.'],
                            ['Travel', 'Driver and vehicle details come with your confirmed booking.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-white border border-slate-200 p-6">
                                <span className="text-3xl font-black text-[#8a1538]/30" aria-hidden="true">0{i + 1}</span>
                                <h3 className="mt-2 mb-2 text-[#0b1c3d]">{t}</h3>
                                <p className="text-sm text-slate-600">{d}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-[#0b1c3d] mb-8">Al Khobar to Qatar Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-slate-200 px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0b1c3d] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED + REVERSE ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6">
                    <Link href="/routes/doha-dammam/" className="group rounded-3xl bg-[#0b1c3d] text-white p-8 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a1538]">
                        <span className="text-sm font-semibold text-[#e8a3b6] mb-2">Travelling back from Qatar?</span>
                        <span className="text-2xl font-bold flex items-center gap-3">Doha → Eastern Province Private Transfer <Arrow /></span>
                    </Link>
                    <div>
                        <h2 id="related" className="text-xl font-bold text-[#0b1c3d] mb-4">Related routes</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {[
                                ['Al Khobar → Bahrain', '/routes/khobar-bahrain/'],
                                ['Al Khobar → Kuwait', '/routes/khobar-to-kuwait-taxi/'],
                                ['Dammam → Doha', '/routes/dammam-doha/'],
                                ['DMM Airport → Doha', '/routes/dammam-airport-to-doha-taxi/'],
                            ].map(([l, h]) => (
                                <li key={h}><Link href={h} className="group flex items-center justify-between gap-2 rounded-xl bg-white border border-slate-200 px-4 py-3.5 text-sm font-semibold text-[#0b1c3d] hover:border-[#0b1c3d]">{l} <Arrow /></Link></li>
                            ))}
                        </ul>
                        <p className="text-sm text-slate-600 mt-4">
                            Starting points: <Link href="/locations/al-khobar/" className={link}>Al Khobar</Link> and <Link href="/locations/dammam/" className={link}>Dammam</Link>. Also: <Link href="/services/private-driver/" className={link}>private driver</Link>, <Link href="/services/airport-transfers/" className={link}>airport transfers</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#0b1c3d]">
                <svg className="absolute inset-0 -z-10 w-full h-full" viewBox="0 0 1440 500" preserveAspectRatio="none" aria-hidden="true">
                    <path d={`M1300 0 ${Array.from({ length: 6 }, (_, i) => `L ${i % 2 === 0 ? 1330 : 1300} ${(i + 1) * 84}`).join(' ')} L1440 500 L1440 0 Z`} fill="#8a1538" fillOpacity="0.35" />
                </svg>
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Ready to Travel from Al Khobar to Qatar?</h2>
                    <p className="text-lg text-white/75 mb-10">Send your pickup location, Qatar destination, travel date, passengers, luggage and preferred vehicle. We&apos;ll provide the appropriate private transfer quote and booking details.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-white text-[#0b1c3d] hover:bg-slate-100">
                            <a href={QUOTE_HREF}>Get Qatar Transfer Quote</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
