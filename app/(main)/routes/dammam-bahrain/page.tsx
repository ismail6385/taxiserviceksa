import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Car, Check, X, FileText, ShieldAlert, Plane, PlaneTakeoff, Briefcase, Repeat, Users, Clock, CalendarDays, Info, Flag } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import BahrainDestinationPicker from '@/components/bahrain/BahrainDestinationPicker';
import BahrainFleet from '@/components/bahrain/BahrainFleet';

const PAGE_URL = 'https://taxiserviceksa.com/routes/dammam-bahrain/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote from Dammam to Bahrain. Pickup, Bahrain destination, date, passengers and bags: ')}`;

export const metadata: Metadata = {
    title: 'Dammam to Bahrain Private Transfer | King Fahd Causeway',
    description:
        'Private transfer from Dammam or DMM Airport to your Bahrain hotel, airport or address via the King Fahd Causeway. Sedan, SUV and group vehicles - request a quote.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Dammam to Bahrain Private Transfer',
        description: 'Door-to-door from Dammam to Bahrain via the King Fahd Causeway, with sedan, SUV and group vehicle options.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Dammam to Bahrain private transfer' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dammam to Bahrain Private Transfer',
        description: 'Door-to-door from Dammam to Bahrain via the King Fahd Causeway.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

const q = (p: Record<string, string>) => `/booking/?${new URLSearchParams(p).toString()}`;

// One methodology for every figure on the page: central Dammam to Manama, road only; border time separate.
const DISTANCE = 'About 70–95 km';
const DRIVING = 'Roughly 1–1.5 hours';

const JOURNEY = [
    { n: 'Pickup', t: 'Your Dammam address', d: 'Home, hotel, office or DMM Airport.' },
    { n: 'Al Khobar', t: 'Dammam → Al Khobar', d: 'South through the city towards the causeway approach.' },
    { n: 'Saudi exit', t: 'Saudi border', d: 'Exit procedures on the Saudi side of the causeway.' },
    { n: 'Causeway', t: 'King Fahd Causeway', d: 'About 25 km of bridges and embankments over the Gulf.' },
    { n: 'Bahrain entry', t: 'Bahrain border', d: 'Immigration and customs on arrival in Bahrain.' },
    { n: 'Destination', t: 'Manama / BAH / your address', d: 'Drop-off at your hotel, the airport or another address.' },
];

const faqs = [
    { q: 'How much is a private transfer from Dammam to Bahrain?', a: 'We quote each trip. The price depends on your exact pickup, Bahrain destination, vehicle, one-way or return, and any waiting. You receive the price before you confirm.' },
    { q: 'How long does Dammam to Bahrain take?', a: `${DRIVING} of driving from central Dammam to Manama, plus border processing - which varies with traffic, day and time, so allow extra time.` },
    { q: 'Does the car cross the King Fahd Causeway?', a: 'Yes. You stay in the same private car from your Dammam pickup to your Bahrain destination.' },
    { q: 'What documents do I need?', a: 'A valid passport and any Bahrain visa or entry permission that applies to you, plus Saudi residency documents if relevant. Requirements vary by nationality and status - confirm current Bahrain entry requirements before travelling.' },
    { q: 'Is the price per person or per vehicle?', a: 'Per vehicle - the whole car is booked for your group.' },
    { q: 'Are Causeway fees included?', a: 'Ask when you request your quote; we confirm exactly what the price covers, including any causeway vehicle charges, before you book.' },
    { q: 'Can I book DMM Airport to Bahrain?', a: 'Yes. Choose DMM Airport as the pickup and add your flight number.' },
    { q: 'Can I go directly to Bahrain Airport?', a: 'Yes. Add your departure time and allow extra buffer for the border crossing before your flight.' },
    { q: 'Can I book a return trip?', a: 'Yes - the same day or on a later date. Tick "I also need a return trip" and give the return time.' },
    { q: 'Can I travel with children?', a: 'Yes. If you need child seats, mention it in your booking and we confirm what we can provide.' },
    { q: 'Can I book for 6–7 passengers?', a: 'Yes. A Toyota Veloz or GMC Yukon seats up to 7; with a lot of luggage, a Toyota Hiace gives more room.' },
    { q: 'Can I book from Al Khobar instead of Dammam?', a: 'Yes - see the Al Khobar to Bahrain route, which starts closer to the causeway.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Dammam to Bahrain private transfer',
            url: PAGE_URL,
            serviceType: 'Cross-border private transfer',
            description: 'Private door-to-door transfer from Dammam or King Fahd International Airport (DMM) to destinations in Bahrain via the King Fahd Causeway.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: [
                { '@type': 'City', name: 'Dammam' },
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

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}
const link = 'font-semibold text-[#ce1126] hover:underline';

export default function DammamBahrainPage() {
    return (
        <div className="bahrain-page bg-[#f5f6f9]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0a1a3a]">
                <svg className="absolute inset-0 -z-10 w-full h-full" viewBox="0 0 1440 860" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <defs>
                        <linearGradient id="db-sea" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0" stopColor="#0a1a3a" stopOpacity="0" />
                            <stop offset="1" stopColor="#15356e" stopOpacity="0.9" />
                        </linearGradient>
                    </defs>
                    <rect x="700" y="0" width="740" height="860" fill="url(#db-sea)" />
                    {/* causeway */}
                    <path d="M760 620 L 1240 540" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="14" strokeLinecap="round" />
                    <path d="M760 620 L 1240 540" stroke="#ffffff" strokeOpacity="0.8" strokeWidth="2" strokeDasharray="1" pathLength={1} className="route-draw" />
                    <rect x="990" y="568" width="22" height="22" rx="4" fill="#ce1126" transform="rotate(-9 1001 579)" />
                </svg>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a1a3a] via-[#0a1a3a]/90 to-[#0a1a3a]/30" aria-hidden="true" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-6 lg:gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <ol className="hidden sm:flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white/70 mb-6" aria-label="Route">
                            {['Dammam', 'Al Khobar', 'King Fahd Causeway', 'Bahrain'].map((s, i, a) => (
                                <li key={s} className="flex items-center gap-2">
                                    <span className={i === 2 ? 'text-[#ff8a95]' : ''}>{s}</span>
                                    {i < a.length - 1 && <span className="w-5 h-px bg-white/40" aria-hidden="true" />}
                                </li>
                            ))}
                        </ol>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-tight mb-5">Dammam to Bahrain Private Transfer</h1>
                        <p className="text-base sm:text-lg text-white/85 leading-relaxed sm:mb-8 max-w-xl">
                            Travel privately from Dammam to your Bahrain hotel, airport or destination via the King Fahd Causeway - with sedan, SUV and group vehicle options.
                        </p>
                        <div className="hidden sm:flex gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#0a1a3a] hover:bg-slate-100">
                                <a href={QUOTE_HREF}>Get Dammam → Bahrain Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                    </div>
                    <div id="quote" className="scroll-mt-32">
                        <RouteQuoteCard
                            title="Dammam → Bahrain"
                            cta="Get Dammam → Bahrain Quote"
                            fromPlaceholder="Dammam address, hotel or DMM"
                            toPlaceholder="Bahrain hotel, airport or address"
                            fromChips={['Dammam city', 'King Fahd International Airport (DMM)', 'Dammam hotel']}
                            toChips={['Manama, Bahrain', 'Bahrain International Airport (BAH)', 'Muharraq, Bahrain', 'Riffa, Bahrain']}
                            showFlight
                            returnNote="Return trip Bahrain to Dammam also needed - date and time to confirm."
                            buttonClass="bg-[#0a1a3a] hover:bg-black focus-visible:ring-[#ce1126]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= ROUTE SUMMARY ================= */}
            <section aria-label="Route summary" className="bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto py-6">
                    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            ['Road distance', DISTANCE, 'Central Dammam to Manama; depends on exact pickup and destination'],
                            ['Driving time', DRIVING, 'Road journey only, excluding border processing'],
                            ['Total journey', 'Varies', 'Depends on causeway traffic and border processing'],
                        ].map(([k, v, d]) => (
                            <div key={k} className="rounded-xl bg-[#f5f6f9] px-4 py-3">
                                <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">{k}</dt>
                                <dd className="text-xl font-bold text-[#0a1a3a]">{v}</dd>
                                <dd className="text-xs text-slate-500 mt-0.5">{d}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className="text-sm text-[#0a1a3a] mt-4 flex gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0 text-[#ce1126]" aria-hidden="true" />Allow additional time for border processing. No arrival time is guaranteed.</p>
                </div>
            </section>

            {/* ================= DESTINATION PICKER ================= */}
            <section aria-labelledby="where" className="py-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="where" className="text-3xl md:text-4xl font-bold text-[#0a1a3a] mb-6">Where Are You Going in Bahrain?</h2>
                    <BahrainDestinationPicker />
                </div>
            </section>

            {/* ================= ONE JOURNEY, TWO COUNTRIES ================= */}
            <section aria-labelledby="journey" className="bg-[#0a1a3a] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <p className="flex items-center gap-3 text-sm font-bold text-white/70 mb-3"><span>Saudi Arabia</span><span className="w-8 h-px bg-[#ce1126]" aria-hidden="true" /><span>Bahrain</span></p>
                    <h2 id="journey" className="text-3xl md:text-5xl font-bold mb-4">One Journey, Two Countries</h2>
                    <p className="text-white/70 max-w-2xl mb-12">One private car from your Dammam door to your Bahrain destination. The drive is short; the two border stops are what make timing vary.</p>

                    {/* Desktop: horizontal line with a moving car marker */}
                    <div className="hidden lg:block relative mb-10" aria-hidden="true">
                        <div className="absolute left-4 right-4 top-4 h-0.5 bg-white/20" />
                        <div className="absolute left-[calc(33.33%+0.5rem)] right-[calc(16.66%+0.5rem)] top-4 h-0.5 bg-[#ce1126]/70" />
                        <div className="relative h-9 mx-0">
                            <span className="car-travel absolute top-0 w-9 h-9 rounded-full bg-white text-[#0a1a3a] flex items-center justify-center shadow-lg">
                                <Car className="w-4 h-4" />
                            </span>
                        </div>
                    </div>

                    <ol className="grid grid-cols-1 lg:grid-cols-6 gap-3 lg:gap-4">
                        {JOURNEY.map((s, i) => {
                            const border = i === 2 || i === 4;
                            const bridge = i === 3;
                            return (
                                <li key={s.n} className={`relative rounded-2xl p-5 flex lg:block gap-4 ${bridge ? 'bg-white text-[#0a1a3a]' : border ? 'bg-[#ce1126]/15 border border-[#ce1126]/40' : 'bg-white/[0.06] border border-white/10'}`}>
                                    <span className={`shrink-0 w-9 h-9 lg:mb-3 rounded-full flex items-center justify-center text-sm font-black ${bridge ? 'bg-[#0a1a3a] text-white' : border ? 'bg-[#ce1126] text-white' : 'bg-white/10 text-white'}`} aria-hidden="true">
                                        {border ? <Flag className="w-4 h-4" /> : String(i + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <p className={`text-xs font-bold uppercase tracking-wider ${bridge ? 'text-[#ce1126]' : 'text-white/50'}`}>{s.n}</p>
                                        <h3 className="mb-1">{s.t}</h3>
                                        <p className={`text-sm ${bridge ? 'text-slate-600' : 'text-white/65'}`}>{s.d}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                    <p className="text-xs text-white/45 mt-4">Diagram of the journey stages - not a navigational map.</p>
                </div>
            </section>

            {/* ================= CAUSEWAY PROCESS ================= */}
            <section aria-labelledby="causeway" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="causeway" className="text-3xl md:text-5xl font-bold text-[#0a1a3a] mb-4 max-w-3xl">Crossing the King Fahd Causeway</h2>
                    <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mb-10">
                        The causeway starts just south of Al Khobar and runs about 25 km to Bahrain. Saudi exit and Bahrain entry procedures both happen along it, and the time they take varies with traffic, travel date, time of day, immigration processing and other operational factors.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Reveal className="h-full">
                            <div className="h-full rounded-3xl bg-white border border-slate-200 p-7">
                                <p className="text-xs font-bold uppercase tracking-wider text-[#0a1a3a]/60 mb-3 flex items-center gap-2"><Car className="w-4 h-4" aria-hidden="true" /> The driver</p>
                                <h3 className="mb-3 text-[#0a1a3a]">Handles the vehicle side</h3>
                                <p className="text-slate-700 leading-relaxed">The driver can assist with the vehicle-side journey and direct passengers to the relevant procedures.</p>
                            </div>
                        </Reveal>
                        <Reveal className="h-full" delay={100}>
                            <div className="h-full rounded-3xl bg-[#0a1a3a] text-white p-7">
                                <p className="text-xs font-bold uppercase tracking-wider text-[#ff8a95] mb-3 flex items-center gap-2"><ShieldAlert className="w-4 h-4" aria-hidden="true" /> The authorities</p>
                                <h3 className="mb-3">Decide immigration and customs</h3>
                                <p className="text-white/80 leading-relaxed">Immigration and customs decisions remain with the authorities. No driver can speed up processing, bypass queues or guarantee entry.</p>
                            </div>
                        </Reveal>
                    </div>
                    <p className="text-sm text-slate-600 mt-6">More on the crossing itself: <Link href="/border-crossings/taxi-king-fahd-causeway-border-crossing/" className={link}>King Fahd Causeway guide</Link>.</p>
                </div>
            </section>

            {/* ================= DOCUMENTS ================= */}
            <section aria-labelledby="docs" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
                    <div>
                        <h2 id="docs" className="text-3xl md:text-4xl font-bold text-[#0a1a3a] mb-6">Documents &amp; Entry Requirements</h2>
                        <details className="group rounded-3xl border border-slate-200 bg-[#f5f6f9] p-6 md:p-7" open>
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#0a1a3a] text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ce1126] rounded-lg">
                                <span className="flex items-center gap-3"><FileText className="w-5 h-5 text-[#ce1126]" aria-hidden="true" /> What should I bring?</span>
                                <span className="text-2xl text-[#ce1126] transition-transform group-open:rotate-45 motion-reduce:transition-none" aria-hidden="true">+</span>
                            </summary>
                            <ul className="mt-5 space-y-3 text-slate-700">
                                {[
                                    'Passport',
                                    'Bahrain visa or entry permission, where required',
                                    'Saudi residency documentation, where applicable',
                                    'Any additional documents required for your specific status',
                                ].map((i) => (
                                    <li key={i} className="flex gap-3"><span className="mt-1 w-4 h-4 rounded border-2 border-[#0a1a3a]/40 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                            <p className="text-sm text-slate-600 mt-5">Entry requirements vary by nationality, residency status and travel purpose. Confirm current Bahrain entry requirements before travelling.</p>
                        </details>
                    </div>
                    <aside className="rounded-3xl border-2 border-[#ce1126] bg-[#fff5f6] p-7 lg:mt-16">
                        <h3 className="mb-3 text-[#0a1a3a] flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-[#ce1126]" aria-hidden="true" /> Can I enter Bahrain?</h3>
                        <p className="text-sm text-[#0a1a3a]/85 leading-relaxed">Booking a vehicle does not guarantee admission to Bahrain. Each passenger is responsible for meeting the applicable entry and immigration requirements.</p>
                    </aside>
                </div>
            </section>

            {/* ================= PRICING / INCLUDED ================= */}
            <section aria-labelledby="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="pricing" className="text-3xl md:text-4xl font-bold text-[#0a1a3a] mb-4">Request a Current Quote</h2>
                    <p className="text-slate-700 max-w-3xl mb-8">
                        Prices are per vehicle and depend on your exact pickup, Bahrain destination, vehicle, one-way or return, and waiting. We send the price - and exactly what it covers - before you confirm.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-3xl bg-white border border-slate-200 p-7">
                            <h3 className="mb-4 text-[#0a1a3a]">Included in every transfer</h3>
                            <ul className="space-y-2.5 text-slate-700">
                                {['Private vehicle for your group only', 'Driver', 'Pickup at your Dammam address', 'Drop-off at your Bahrain destination', 'The agreed route'].map((i) => (
                                    <li key={i} className="flex gap-3"><Check className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-white border border-slate-200 p-7">
                            <h3 className="mb-4 text-[#0a1a3a]">Not included / confirmed with your quote</h3>
                            <ul className="space-y-2.5 text-slate-700">
                                <li className="flex gap-3"><X className="w-5 h-5 text-[#ce1126] shrink-0" aria-hidden="true" />Passenger visa and personal immigration fees</li>
                                <li className="flex gap-3"><X className="w-5 h-5 text-[#ce1126] shrink-0" aria-hidden="true" />Government penalties</li>
                                <li className="flex gap-3"><Info className="w-5 h-5 text-slate-500 shrink-0" aria-hidden="true" />Causeway vehicle charges, extra waiting, unusual luggage and changes after booking - confirmed in your quote</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FLEET ================= */}
            <section aria-labelledby="fleet" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="fleet" className="text-3xl md:text-4xl font-bold text-[#0a1a3a] mb-3">Choose Your Vehicle</h2>
                    <p className="text-slate-600 max-w-2xl mb-8">Pick passengers and luggage together - luggage decides the vehicle as often as seats do.</p>
                    <BahrainFleet />
                </div>
            </section>

            {/* ================= AIRPORT + BUSINESS + SAME-DAY ================= */}
            <section aria-label="Airport, business and same-day trips" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <Reveal className="h-full">
                        <article className="h-full rounded-3xl bg-white border border-slate-200 p-7 flex flex-col">
                            <Plane className="w-7 h-7 text-[#ce1126] mb-4" aria-hidden="true" />
                            <h2 className="text-2xl font-bold text-[#0a1a3a] mb-3">Dammam Airport to Bahrain</h2>
                            <p className="text-sm font-bold text-slate-500 mb-3">DMM → King Fahd Causeway → Bahrain</p>
                            <p className="text-slate-700 mb-6">Land at DMM and go straight on to a Bahrain hotel, a meeting in Manama or Bahrain Airport - without going into Dammam first. Add your flight number when booking.</p>
                            <div className="mt-auto flex flex-col sm:flex-row gap-3">
                                <Link href={q({ from: 'King Fahd International Airport (DMM)', to: 'Bahrain' })} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0a1a3a] px-5 py-3.5 font-bold text-white hover:bg-black">DMM → Bahrain quote <Arrow /></Link>
                                <Link href="/routes/dammam-airport-to-bahrain-airport-taxi/" className="inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-[#ce1126] hover:underline">DMM Airport → Bahrain Airport</Link>
                            </div>
                        </article>
                    </Reveal>
                    <Reveal className="h-full" delay={80}>
                        <article className="h-full rounded-3xl bg-white border border-slate-200 p-7 flex flex-col">
                            <PlaneTakeoff className="w-7 h-7 text-[#ce1126] mb-4" aria-hidden="true" />
                            <h2 className="text-2xl font-bold text-[#0a1a3a] mb-3">Dammam → Bahrain Airport</h2>
                            <p className="text-slate-700 mb-4">For flights from BAH. Send your flight number, departure time, pickup address, passengers and luggage.</p>
                            <p className="text-sm text-[#0a1a3a] rounded-xl bg-[#fff5f6] px-4 py-3 mb-6">We recommend allowing additional buffer time for the border crossing before your flight.</p>
                            <Link href={q({ from: 'Dammam', to: 'Bahrain International Airport (BAH)' })} className="group mt-auto inline-flex items-center gap-2 font-bold text-[#ce1126]">Bahrain Airport transfer quote <Arrow /></Link>
                        </article>
                    </Reveal>
                    <Reveal className="h-full" delay={160}>
                        <article className="h-full rounded-3xl bg-[#0a1a3a] text-white p-7 flex flex-col">
                            <Briefcase className="w-7 h-7 text-[#ff8a95] mb-4" aria-hidden="true" />
                            <h2 className="text-2xl font-bold mb-3">Dammam ↔ Bahrain for Business</h2>
                            <ul className="space-y-2 text-white/80 mb-6">
                                <li>Meetings, conferences and office visits</li>
                                <li>Hotel or office pickup, executive vehicles on request</li>
                                <li>Same-day return when the meeting ends</li>
                            </ul>
                            <Link href="/services/corporate-travel/" className="group mt-auto inline-flex items-center gap-2 font-bold text-[#ff8a95]">Corporate transfers <Arrow /></Link>
                        </article>
                    </Reveal>
                    <Reveal className="h-full" delay={240}>
                        <article className="h-full rounded-3xl bg-white border border-slate-200 p-7 flex flex-col">
                            <Repeat className="w-7 h-7 text-[#ce1126] mb-4" aria-hidden="true" />
                            <h2 className="text-2xl font-bold text-[#0a1a3a] mb-3">Dammam → Bahrain → Dammam Same Day</h2>
                            <p className="text-slate-700 mb-4">For a meeting, a flight connection, shopping or a family visit. Tell us:</p>
                            <ul className="grid grid-cols-2 gap-2 text-sm text-[#0a1a3a] mb-6">
                                {['Outbound date and time', 'Return time', 'Waiting needed or not', 'Bahrain destination'].map((i) => (
                                    <li key={i} className="flex gap-2"><Check className="w-4 h-4 text-[#ce1126] mt-0.5 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                            <Link href={q({ from: 'Dammam', to: 'Bahrain', notes: 'Same-day return to Dammam - return time and waiting: ' })} className="group mt-auto inline-flex items-center gap-2 font-bold text-[#ce1126]">Same-day return quote <Arrow /></Link>
                        </article>
                    </Reveal>
                </div>
            </section>

            {/* ================= COMPARISON + PLANNING ================= */}
            <section aria-labelledby="compare" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
                    <div>
                        <h2 id="compare" className="text-3xl md:text-4xl font-bold text-[#0a1a3a] mb-3">Private Transfer or Your Own Car?</h2>
                        <p className="text-slate-600 mb-6">Both work - it depends on what you need in Bahrain.</p>
                        <div className="overflow-hidden rounded-2xl border border-slate-200">
                            <table className="w-full text-sm">
                                <caption className="sr-only">Private transfer compared with driving your own car to Bahrain</caption>
                                <thead className="bg-[#0a1a3a] text-white">
                                    <tr><th scope="col" className="text-left px-4 py-3">Private transfer</th><th scope="col" className="text-left px-4 py-3">Own vehicle</th></tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Chauffeur-driven', 'You drive'],
                                        ['Door-to-door', 'You manage the route'],
                                        ['Driver handles the vehicle-side requirements', 'You manage vehicle documents and insurance'],
                                        ['No need to drive after the crossing', 'You remain responsible for driving'],
                                        ['Useful for groups and airport runs', 'Useful when you need your own car in Bahrain'],
                                    ].map(([a, b]) => (
                                        <tr key={a} className="border-t border-slate-200 even:bg-slate-50"><td className="px-4 py-3 text-[#0a1a3a]">{a}</td><td className="px-4 py-3 text-slate-600">{b}</td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <aside className="rounded-3xl bg-[#f5f6f9] p-7">
                        <h3 className="mb-4 text-[#0a1a3a] flex items-center gap-2"><CalendarDays className="w-5 h-5 text-[#ce1126]" aria-hidden="true" /> When should I leave?</h3>
                        <ul className="space-y-2.5 text-sm text-slate-700">
                            <li>Border demand varies, and weekends and public holidays can be busier.</li>
                            <li>Airport passengers should allow an extra buffer.</li>
                            <li>For meetings, schedule conservatively.</li>
                        </ul>
                        <p className="text-xs text-slate-500 mt-4">Border processing time varies with traffic, travel date, time of day, immigration processing and other operational factors. We do not show live wait times.</p>
                    </aside>
                </div>
            </section>

            {/* ================= PROCESS ================= */}
            <section aria-labelledby="process" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="process" className="text-3xl md:text-4xl font-bold text-[#0a1a3a] mb-8">How Booking Works</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            ['Send your trip', 'Pickup, Bahrain destination, date, time, passengers and bags.'],
                            ['Get your quote', 'Vehicle, price and what it covers - before you commit.'],
                            ['Check your documents', 'Make sure every passenger meets Bahrain entry requirements.'],
                            ['Travel', 'Driver and vehicle details come with your confirmed booking.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-white border border-slate-200 p-6">
                                <span className="text-3xl font-black text-[#ce1126]/30" aria-hidden="true">0{i + 1}</span>
                                <h3 className="mt-2 mb-2 text-[#0a1a3a]">{t}</h3>
                                <p className="text-sm text-slate-600">{d}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-[#0a1a3a] mb-8">Dammam to Bahrain Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-slate-200 px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0a1a3a] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED + REVERSE ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6">
                    <Link href="/routes/bahrain-dammam/" className="group rounded-3xl bg-[#0a1a3a] text-white p-8 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ce1126]">
                        <span className="text-sm font-semibold text-[#ff8a95] mb-2">Travelling back from Bahrain?</span>
                        <span className="text-2xl font-bold flex items-center gap-3">Bahrain → Dammam Private Transfer <Arrow /></span>
                    </Link>
                    <div>
                        <h2 id="related" className="text-xl font-bold text-[#0a1a3a] mb-4">Related routes</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {[
                                ['Need pickup from Al Khobar instead?', '/routes/khobar-bahrain/'],
                                ['DMM Airport → Bahrain Airport', '/routes/dammam-airport-to-bahrain-airport-taxi/'],
                                ['Dammam → Kuwait', '/routes/dammam-kuwait/'],
                                ['Dammam → Qatar', '/routes/dammam-doha/'],
                            ].map(([l, h]) => (
                                <li key={h}><Link href={h} className="group flex items-center justify-between gap-2 rounded-xl bg-white border border-slate-200 px-4 py-3.5 text-sm font-semibold text-[#0a1a3a] hover:border-[#0a1a3a]">{l} <Arrow /></Link></li>
                            ))}
                        </ul>
                        <p className="text-sm text-slate-600 mt-4">
                            Around Dammam: <Link href="/locations/dammam/" className={link}>Dammam transport</Link>, <Link href="/dammam-airport-taxi/" className={link}>Dammam Airport</Link>, <Link href="/locations/al-khobar/" className={link}>Al Khobar</Link>, <Link href="/services/private-driver/" className={link}>private driver</Link> and <Link href="/services/airport-transfers/" className={link}>airport transfers</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#0a1a3a]">
                <svg className="absolute inset-0 -z-10 w-full h-full" viewBox="0 0 1440 500" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 360 L 1440 250" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="10" />
                    <path d="M0 360 L 1440 250" stroke="#ce1126" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="6 12" />
                </svg>
                <div className="max-w-3xl mx-auto text-center text-white">
                    <Users className="w-10 h-10 text-[#ff8a95] mx-auto mb-5" aria-hidden="true" />
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Ready to Travel from Dammam to Bahrain?</h2>
                    <p className="text-lg text-white/75 mb-10">Send your pickup location, Bahrain destination, date, passengers, luggage and preferred vehicle. We&apos;ll provide the appropriate private transfer quote.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-white text-[#0a1a3a] hover:bg-slate-100">
                            <a href={QUOTE_HREF}>Get Dammam → Bahrain Quote</a>
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
