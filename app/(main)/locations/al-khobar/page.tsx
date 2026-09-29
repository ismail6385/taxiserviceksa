import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Plane, Briefcase, Building2, Factory, FileText, Check, Info, Clock, CalendarDays, Crown, MapPin, Waves, Flag } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import AlUlaReviews from '@/components/alula/AlUlaReviews';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import KhobarDestinations from '@/components/khobar/KhobarDestinations';
import KhobarLines from '@/components/khobar/KhobarLines';
import KhobarVehiclePicker from '@/components/khobar/KhobarVehiclePicker';
import KhobarHourly from '@/components/khobar/KhobarHourly';

const PAGE_URL = 'https://taxiserviceksa.com/locations/al-khobar/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for a transfer from Al Khobar. Pickup, destination, date and passengers: ')}`;

export const metadata: Metadata = {
    title: 'Al Khobar Taxi & Private Transfers | DMM Airport, Bahrain & Dhahran',
    description:
        'Private transfers from Al Khobar to DMM Airport, Bahrain via the King Fahd Causeway, Dhahran, Dammam, Jubail and GCC routes, plus hourly chauffeur hire. Request a quote.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Al Khobar Taxi & Private Transfer Service',
        description: 'Airport transfers, Bahrain Causeway journeys, business transportation and chauffeur service from Al Khobar.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private transfers from Al Khobar' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Al Khobar Taxi & Private Transfer Service',
        description: 'Airport transfers, Bahrain Causeway journeys, business transportation and chauffeur service from Al Khobar.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

const q = (p: Record<string, string>) => `/booking/?${new URLSearchParams(p).toString()}`;

const DOC_NOTE =
    'Cross-border travel requires valid travel documents and destination entry permissions applicable to each passenger. Requirements vary by nationality and travel status. Confirm current requirements before departure.';

const faqs = [
    { q: 'Do you provide private transfers from Al Khobar to Bahrain?', a: 'Yes - from your Al Khobar address across the King Fahd Causeway to your destination in Bahrain, one way or return. Border processing time varies, so we do not promise an arrival time.' },
    { q: 'How do I book an Al Khobar to DMM Airport transfer?', a: 'Use the quote form with your pickup address, flight time and passenger and bag count. For departures, allow additional time during peak traffic and for airport check-in requirements.' },
    { q: 'Can you pick me up from Al Khobar Corniche?', a: 'Yes. Tell us the restaurant, hotel or nearest landmark on the Corniche, and whether you need a return pickup later.' },
    { q: 'Do you provide transfers between Al Khobar and Dhahran?', a: 'Yes, to offices, hotels and meeting places. For restricted destinations, give us the exact pickup/drop-off point and confirm any access requirements before the trip.' },
    { q: 'Can I book a private car from Al Khobar to Jubail?', a: 'Yes, to Jubail town or Jubail Industrial City. For industrial facilities, confirm the exact destination and any access requirements when booking.' },
    { q: 'Can I hire a chauffeur by the hour in Al Khobar?', a: 'Yes. Choose hourly hire on the booking form and say how many hours; the car stays with you between stops.' },
    { q: 'Can you provide cross-border transportation to Kuwait?', a: 'Yes, by road via the Saudi–Kuwait land border. See the Khobar to Kuwait route for the journey; passengers carry their own valid documents.' },
    { q: 'Can you provide private transportation to Qatar?', a: 'Yes, by road via the Saudi–Qatar land border. See the Khobar to Qatar route; passengers carry their own valid documents.' },
    { q: 'What information do you need for a Bahrain Causeway booking?', a: 'Pickup address, Bahrain destination, date and time, passenger and bag count, and each passenger’s nationality so we can check the crossing is possible for your group.' },
    { q: 'Can I book a larger vehicle for family luggage?', a: 'Yes. A Veloz or Yukon suits most families; a Hiace takes more suitcases. Tell us the bag count so the vehicle has room.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private transfers from Al Khobar',
            url: PAGE_URL,
            serviceType: 'Pre-booked private transfer',
            description:
                'Pre-booked private transfers from Al Khobar to King Fahd International Airport (DMM), Dhahran, Dammam, Jubail and Riyadh, across the King Fahd Causeway to Bahrain, and by road to Kuwait and Qatar; hourly chauffeur hire.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: { '@type': 'City', name: 'Al Khobar' },
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
const link = 'font-semibold text-[#2f6bff] hover:underline';

export default function AlKhobarPage() {
    return (
        <div className="khobar-page bg-[#f5f7fc]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0b1535]">
                <svg className="absolute inset-0 -z-10 w-full h-full" viewBox="0 0 1440 860" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <defs>
                        <linearGradient id="kh-gulf" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0" stopColor="#0b1535" stopOpacity="0" />
                            <stop offset="1" stopColor="#123a7a" stopOpacity="0.85" />
                        </linearGradient>
                    </defs>
                    {/* Gulf to the east */}
                    <path d="M980 0 C 940 200, 1000 360, 960 520 S 1000 760, 980 860 L 1440 860 L 1440 0 Z" fill="url(#kh-gulf)" />
                    {/* Waterfront skyline, very faint */}
                    <g fill="#ffffff" fillOpacity="0.04">
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                            <rect key={i} x={620 + i * 42} y={560 - ((i * 37) % 120)} width="30" height={300 + ((i * 37) % 120)} />
                        ))}
                    </g>
                    {/* Causeway: coast to Bahrain */}
                    <path d="M960 560 L 1260 600" stroke="#7dd3fc" strokeOpacity="0.2" strokeWidth="10" strokeLinecap="round" />
                    <path d="M960 560 L 1260 600" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round" pathLength={1} className="route-draw" />
                    <circle cx="1270" cy="602" r="9" fill="#0b1535" stroke="#7dd3fc" strokeWidth="2.5" />
                    {/* North to Dhahran / Dammam / DMM */}
                    <path d="M960 560 C 900 420, 860 300, 700 140" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="3 9" />
                    <circle cx="700" cy="140" r="7" fill="#0b1535" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" />
                    <circle cx="960" cy="560" r="10" fill="#2f6bff" />
                </svg>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1535] via-[#0b1535]/90 to-[#0b1535]/30" aria-hidden="true" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-6 lg:gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className="hidden sm:flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-300 mb-6">
                            <span>City</span><span className="w-6 h-px bg-sky-300/60" aria-hidden="true" />
                            <span>Airport</span><span className="w-6 h-px bg-sky-300/60" aria-hidden="true" />
                            <span>Business</span><span className="w-6 h-px bg-sky-300/60" aria-hidden="true" />
                            <span>Causeway</span>
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-tight mb-5">Al Khobar Taxi &amp; Private Transfer Service</h1>
                        <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed sm:mb-8 max-w-xl">
                            Private airport transfers, Bahrain Causeway journeys, corporate transportation and chauffeur service from Al Khobar across the Eastern Province.
                        </p>
                        <div className="hidden sm:flex gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#2f6bff] text-white hover:bg-[#1f55e0]">
                                <a href={QUOTE_HREF}>Get Al Khobar Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                    </div>
                    <div id="quote" className="scroll-mt-40">
                        <RouteQuoteCard
                            title="Your Al Khobar transfer"
                            cta="Get Al Khobar Quote"
                            fromPlaceholder="Hotel, district or address"
                            toPlaceholder="Airport, city or Bahrain address"
                            fromChips={['Al Khobar Corniche', 'Al Ulaya', 'Al Aqrabiyah', 'Al Khobar hotel']}
                            toChips={['King Fahd International Airport (DMM)', 'Bahrain', 'Dhahran', 'Dammam', 'Jubail']}
                            showFlight
                            buttonClass="bg-[#2f6bff] hover:bg-[#1f55e0] focus-visible:ring-[#2f6bff]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= WHERE ARE YOU GOING ================= */}
            <section aria-labelledby="where" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="where" className="text-3xl md:text-5xl font-bold text-[#0b1535] mb-8 max-w-2xl">Where Are You Going From Al Khobar?</h2>
                    <KhobarDestinations />
                </div>
            </section>

            {/* ================= NETWORK (signature) ================= */}
            <section aria-labelledby="network" className="bg-[#0b1535] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-10">
                        <h2 id="network" className="text-3xl md:text-5xl font-bold mb-4">Al Khobar → The Eastern Province → Bahrain</h2>
                        <p className="text-slate-300 leading-relaxed">Three lines leave the city: north through Dhahran and Dammam to the airport and Jubail, east across the causeway to Bahrain, and the long roads to Riyadh, Kuwait and Qatar. Tap a stop.</p>
                    </div>
                    <KhobarLines />
                </div>
            </section>

            {/* ================= BAHRAIN ================= */}
            <section aria-labelledby="bahrain" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <p className="text-sm font-bold uppercase tracking-wider text-[#2f6bff] mb-3 flex items-center gap-2"><Flag className="w-4 h-4" aria-hidden="true" /> King Fahd Causeway</p>
                        <h2 id="bahrain" className="text-3xl md:text-5xl font-bold text-[#0b1535] mb-4 max-w-3xl">Al Khobar to Bahrain Private Transfer</h2>
                        <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mb-10">
                            The causeway begins at the southern edge of Al Khobar, so the road part of the trip is short. What takes time is the border: Saudi departure and Bahrain entry are both processed on the causeway, and queues vary by day and hour.
                        </p>
                    </Reveal>
                    <ol className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-10" aria-label="The journey to Bahrain">
                        {[
                            ['Al Khobar', 'Pickup at your address'],
                            ['Saudi departure', 'Exit processing'],
                            ['King Fahd Causeway', 'About 25 km over the water'],
                            ['Bahrain entry', 'Immigration and customs'],
                            ['Destination', 'Hotel, office or airport'],
                        ].map(([t, d], i) => (
                            <li key={t} className={`relative rounded-2xl p-4 ${i === 2 ? 'bg-[#2f6bff] text-white' : 'bg-white border border-slate-200 text-[#0b1535]'}`}>
                                <span className={`text-xs font-black ${i === 2 ? 'text-sky-100' : 'text-[#2f6bff]'}`}>0{i + 1}</span>
                                <p className="font-bold mt-1">{t}</p>
                                <p className={`text-xs mt-0.5 ${i === 2 ? 'text-sky-100' : 'text-slate-500'}`}>{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="rounded-3xl bg-white border border-slate-200 p-7">
                            <h3 className="mb-4 text-[#0b1535]">What we arrange</h3>
                            <ul className="space-y-2.5 text-slate-700">
                                {['A private car and driver permitted to make the crossing', 'Pickup at your Al Khobar address and drop-off at your Bahrain address', 'One way, or a return the same day or later', 'Room for the luggage you tell us about'].map((i) => (
                                    <li key={i} className="flex gap-3"><Check className="w-4 h-4 text-[#2f6bff] mt-1 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-[#eef2fb] p-7">
                            <h3 className="mb-4 text-[#0b1535]">What stays with you</h3>
                            <ul className="space-y-2.5 text-slate-700">
                                {['Passports, visas and entry permissions for every passenger', 'Customs rules for what you carry', 'Time at the border - it cannot be guaranteed'].map((i) => (
                                    <li key={i} className="flex gap-3"><Info className="w-4 h-4 text-[#0b1535] mt-1 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <Link href="/routes/khobar-bahrain/" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b1535] px-6 py-4 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6bff] focus-visible:ring-offset-2">View Al Khobar → Bahrain Transfer <Arrow /></Link>
                        <Link href="/locations/al-khobar/bahrain-causeway/" className="group inline-flex items-center justify-center gap-2 px-4 py-3 font-bold text-[#2f6bff]">About the causeway crossing <Arrow /></Link>
                    </div>
                </div>
            </section>

            {/* ================= DMM ================= */}
            <section aria-labelledby="dmm" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <Reveal>
                        <p className="text-sm font-bold uppercase tracking-wider text-[#2f6bff] mb-3 flex items-center gap-2"><Plane className="w-4 h-4" aria-hidden="true" /> King Fahd International Airport</p>
                        <h2 id="dmm" className="text-3xl md:text-4xl font-bold text-[#0b1535] mb-4">Al Khobar to DMM Airport</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            DMM sits on the far side of Dammam - roughly 45–60 km from most of Al Khobar, often 40–60 minutes by road. Allow additional time during peak traffic and for airport check-in requirements, especially for early-morning departures.
                        </p>
                        {/* Geography strip */}
                        <ol className="flex items-center gap-2 text-sm font-semibold mb-8" aria-label="Route to the airport">
                            {['Al Khobar', 'Dammam', 'DMM Airport'].map((s, i, a) => (
                                <li key={s} className="flex items-center gap-2">
                                    <span className={`rounded-full px-3 py-1.5 ${i === a.length - 1 ? 'bg-[#2f6bff] text-white' : 'bg-[#eef2fb] text-[#0b1535]'}`}>{s}</span>
                                    {i < a.length - 1 && <span className="w-6 sm:w-12 h-px bg-[#2f6bff]" aria-hidden="true" />}
                                </li>
                            ))}
                        </ol>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                ['Hotel or home → DMM', 'Departure pickups timed around your flight.'],
                                ['Office → DMM', 'Straight from your last meeting to the airport.'],
                                ['DMM → Al Khobar', 'Arrivals to your hotel, home or office.'],
                                ['Families & executives', 'Larger vehicles for luggage; premium cars on request.'],
                            ].map(([t, d]) => (
                                <div key={t} className="rounded-2xl border border-slate-200 p-5">
                                    <p className="font-bold text-[#0b1535]">{t}</p>
                                    <p className="text-sm text-slate-600">{d}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <aside className="rounded-3xl bg-[#0b1535] text-white p-7 md:p-8">
                            <h3 className="mb-4">Flying?</h3>
                            <p className="text-sm text-slate-300 mb-5">Share your flight number when booking so the pickup can be coordinated. Also send:</p>
                            <ul className="space-y-2.5 text-sm mb-7">
                                {['Flight time', 'Pickup address', 'Passengers', 'Suitcases', 'Vehicle preference'].map((i) => (
                                    <li key={i} className="flex gap-3"><Check className="w-4 h-4 text-sky-300 mt-0.5 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                            <div className="flex flex-col gap-2">
                                <Link href={q({ from: 'Al Khobar', to: 'King Fahd International Airport (DMM)' })} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#2f6bff] px-5 py-3.5 font-bold text-white hover:bg-[#1f55e0]">DMM airport transfer quote <Arrow /></Link>
                                <Link href="/routes/khobar-to-dammam-airport/" className="text-center text-sm font-bold text-sky-300 hover:underline py-2">Khobar to DMM route details</Link>
                            </div>
                        </aside>
                    </Reveal>
                </div>
            </section>

            {/* ================= DHAHRAN + DAMMAM + JUBAIL ================= */}
            <section aria-label="Dhahran, Dammam and Jubail" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 mb-6">
                        <Reveal className="h-full">
                            <article className="h-full rounded-3xl bg-white border border-slate-200 p-7 md:p-9">
                                <Briefcase className="w-7 h-7 text-[#2f6bff] mb-4" aria-hidden="true" />
                                <h2 className="text-2xl md:text-3xl font-bold text-[#0b1535] mb-4">Al Khobar ↔ Dhahran Private Transportation</h2>
                                <p className="text-slate-700 leading-relaxed mb-5">
                                    Dhahran is Al Khobar&apos;s immediate neighbour, and the two are usually one trip: stay in a Khobar hotel, work in Dhahran. We handle meeting runs, office-to-hotel transfers, airport connections and scheduled daily movements for visiting consultants and staff.
                                </p>
                                <p className="text-sm text-slate-600 flex gap-2 rounded-xl bg-[#eef2fb] p-4">
                                    <Info className="w-4 h-4 mt-0.5 shrink-0 text-[#2f6bff]" aria-hidden="true" />
                                    For a restricted destination, give us the exact pickup/drop-off point and confirm any destination-specific access requirements before the trip.
                                </p>
                                <Link href="/locations/dhahran/" className="group mt-6 inline-flex items-center gap-2 font-bold text-[#2f6bff]">Transport in Dhahran <Arrow /></Link>
                            </article>
                        </Reveal>
                        <Reveal className="h-full" delay={100}>
                            <article className="h-full rounded-3xl bg-white border border-slate-200 p-7 md:p-9 flex flex-col">
                                <Building2 className="w-7 h-7 text-[#2f6bff] mb-4" aria-hidden="true" />
                                <h2 className="text-2xl md:text-3xl font-bold text-[#0b1535] mb-4">Al Khobar to Dammam</h2>
                                <p className="text-slate-700 leading-relaxed mb-5">
                                    About 20–25 km north. Hotels, family visits and meetings in Dammam - and it is the way to DMM Airport and onward to Jubail or Riyadh, so it is often the first stretch of a longer trip.
                                </p>
                                <Link href="/locations/dammam/" className="group mt-auto inline-flex items-center gap-2 font-bold text-[#2f6bff]">Transport in Dammam <Arrow /></Link>
                            </article>
                        </Reveal>
                    </div>
                    <Reveal>
                        <article className="rounded-3xl bg-[#0b1535] text-white p-7 md:p-9 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-center">
                            <Factory className="w-10 h-10 text-sky-300" aria-hidden="true" />
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-2">From Al Khobar to Jubail &amp; the Eastern Province</h2>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Roughly 110–130 km up the coast to Jubail Industrial City or Jubail town, for business visits, corporate transfers and family trips. For industrial facilities, confirm the exact destination and any access requirements when booking.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Link href={q({ from: 'Al Khobar', to: 'Jubail' })} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#2f6bff] px-5 py-3.5 font-bold text-white hover:bg-[#1f55e0] whitespace-nowrap">Jubail quote <Arrow /></Link>
                                <Link href="/locations/jubail/industrial-city/" className="text-center text-sm font-bold text-sky-300 hover:underline">Jubail Industrial City</Link>
                            </div>
                        </article>
                    </Reveal>
                </div>
            </section>

            {/* ================= GCC ================= */}
            <section aria-labelledby="gcc" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="gcc" className="text-3xl md:text-4xl font-bold text-[#0b1535] mb-3">From Al Khobar Across the Gulf</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl">Three border journeys start here. Each has its own route page with the details.</p>
                    <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:grid md:grid-cols-3 md:overflow-visible md:mx-0 md:px-0">
                        {[
                            { c: 'Bahrain', b: 'King Fahd Causeway', d: 'Short drive, variable border time.', h: '/routes/khobar-bahrain/', l: 'Private Bahrain transfer', to: 'Bahrain' },
                            { c: 'Kuwait', b: 'Saudi–Kuwait land border', d: 'About 440 km to Kuwait City, plus border time.', h: '/routes/khobar-to-kuwait-taxi/', l: 'Khobar to Kuwait route', to: 'Kuwait' },
                            { c: 'Qatar', b: 'Salwa / Abu Samra land border', d: 'A long drive south-east, plus border time.', h: '/routes/khobar-to-qatar-taxi/', l: 'Khobar to Qatar route', to: 'Qatar' },
                        ].map((r) => (
                            <li key={r.c} className="snap-start shrink-0 w-72 md:w-auto rounded-3xl border border-slate-200 p-6 flex flex-col">
                                <p className="text-xs font-bold uppercase tracking-wider text-[#2f6bff] mb-1">{r.b}</p>
                                <h3 className="mb-3 text-[#0b1535]">Al Khobar → {r.c}</h3>
                                <ul className="text-sm text-slate-600 space-y-1.5 mb-5">
                                    <li>Private vehicle, door to door</li>
                                    <li>{r.d}</li>
                                    <li className="flex gap-2"><FileText className="w-4 h-4 shrink-0 mt-0.5 text-[#2f6bff]" aria-hidden="true" />Each passenger carries valid documents</li>
                                </ul>
                                <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2">
                                    <Link href={q({ from: 'Al Khobar', to: r.to })} className="group inline-flex items-center gap-1.5 font-bold text-[#2f6bff]">Quote <Arrow /></Link>
                                    <Link href={r.h} className="text-sm font-semibold text-slate-700 hover:underline self-center">{r.l}</Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <aside className="mt-6 rounded-2xl border-l-4 border-[#2f6bff] bg-[#eef2fb] p-5 text-sm text-[#0b1535] flex gap-3">
                        <FileText className="w-5 h-5 shrink-0 text-[#2f6bff]" aria-hidden="true" />
                        <p><span className="font-bold">Border travel documents. </span>{DOC_NOTE}</p>
                    </aside>
                </div>
            </section>

            {/* ================= BUSINESS ================= */}
            <section aria-labelledby="business" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="business" className="text-3xl md:text-4xl font-bold text-[#0b1535] mb-3">Built Around Business Travel</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl">A typical week here: land at DMM, check in on the Khobar waterfront, meetings in Dhahran, perhaps a day in Jubail or Bahrain.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { i: Plane, t: 'Airport meetings', d: 'DMM ↔ hotel ↔ office, booked as one plan.' },
                            { i: Clock, t: 'Multiple meetings', d: 'An hourly chauffeur waits between appointments.' },
                            { i: Crown, t: 'Executive travel', d: 'Genesis G80 or GMC Yukon when the car matters.' },
                            { i: CalendarDays, t: 'Multi-day assignment', d: 'Pre-arranged daily transport; send the schedule.' },
                        ].map((m, idx) => (
                            <Reveal key={m.t} delay={idx * 80} className="h-full">
                                <div className="h-full rounded-2xl bg-white border border-slate-200 p-6">
                                    <m.i className="w-6 h-6 text-[#2f6bff] mb-4" aria-hidden="true" />
                                    <h3 className="mb-2 text-[#0b1535]">{m.t}</h3>
                                    <p className="text-sm text-slate-600">{m.d}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <p className="text-sm text-slate-600 mt-6">Company bookings: <Link href="/services/corporate-travel/" className={link}>corporate travel</Link>.</p>
                </div>
            </section>

            {/* ================= CORNICHE + HOURLY ================= */}
            <section aria-labelledby="corniche" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <Reveal>
                        <Link href="/locations/al-khobar/corniche/" className="group block rounded-3xl overflow-hidden bg-gradient-to-br from-[#123a7a] via-[#0b1535] to-[#0b1535] text-white p-8 md:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6bff]">
                            <Waves className="w-9 h-9 text-sky-300 mb-6" aria-hidden="true" />
                            <h2 id="corniche" className="text-3xl font-bold mb-4">Al Khobar Corniche</h2>
                            <p className="text-slate-300 leading-relaxed mb-5">
                                Evenings on the waterfront, dinner at a Corniche restaurant, a family walk. We drop you off, and come back when you are ready - or keep the car with you by the hour.
                            </p>
                            <ul className="text-sm text-slate-300 space-y-1.5 mb-7">
                                <li>Hotel → Corniche → hotel</li>
                                <li>Restaurant transfers with a set return time</li>
                                <li>Weekend trips south to Half Moon Bay</li>
                            </ul>
                            <span className="inline-flex items-center gap-2 font-bold text-sky-300">Al Khobar Corniche transportation <Arrow /></span>
                        </Link>
                        <p className="text-sm text-slate-600 mt-4">Heading to the beach? <Link href="/locations/al-khobar/half-moon-bay/" className={link}>Half Moon Bay transfers</Link>.</p>
                    </Reveal>
                    <Reveal delay={100}>
                        <h2 className="text-3xl font-bold text-[#0b1535] mb-4">Need the Vehicle for More Than One Trip?</h2>
                        <dl className="grid grid-cols-3 gap-2 mb-6 text-sm">
                            {[
                                ['Point-to-point', 'Pickup → destination'],
                                ['Hourly', 'Car stays for several stops'],
                                ['Full day', 'Meetings, shopping or an itinerary'],
                            ].map(([t, d]) => (
                                <div key={t} className="rounded-xl bg-[#eef2fb] p-3">
                                    <dt className="font-bold text-[#0b1535]">{t}</dt>
                                    <dd className="text-slate-600 text-xs mt-1">{d}</dd>
                                </div>
                            ))}
                        </dl>
                        <KhobarHourly />
                        <p className="text-sm text-slate-600 mt-4">More on our <Link href="/services/private-driver/" className={link}>hourly chauffeur service</Link>.</p>
                    </Reveal>
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section aria-labelledby="vehicles" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className="text-3xl md:text-4xl font-bold text-[#0b1535] mb-3">Which Vehicle?</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl">Move the sliders and choose the journey and comfort level. We suggest the smallest listed vehicle that fits - you can always ask for more room.</p>
                    <KhobarVehiclePicker />
                </div>
            </section>

            {/* ================= CHOOSE YOUR JOURNEY ================= */}
            <section aria-labelledby="choose" className="bg-[#0b1535] py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="choose" className="text-3xl md:text-4xl font-bold text-white mb-8">Choose Your Journey</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                            { a: 'Flying?', b: 'DMM Airport transfer', h: q({ from: 'Al Khobar', to: 'King Fahd International Airport (DMM)' }) },
                            { a: 'Going to Bahrain?', b: 'Causeway transfer', h: q({ from: 'Al Khobar', to: 'Bahrain' }) },
                            { a: 'Business meetings?', b: 'Hourly chauffeur', h: q({ trip: 'hourly', from: 'Al Khobar' }) },
                            { a: 'Staying locally?', b: 'Al Khobar city transfer', h: q({ from: 'Al Khobar' }) },
                            { a: 'Going north?', b: 'Jubail transfer', h: q({ from: 'Al Khobar', to: 'Jubail' }) },
                            { a: 'Travelling internationally?', b: 'Kuwait or Qatar', h: '/routes/khobar-to-kuwait-taxi/' },
                        ].map((r) => (
                            <li key={r.a}>
                                <Link href={r.h} className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 hover:border-sky-300/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
                                    <span>
                                        <span className="block text-slate-400 text-sm">{r.a}</span>
                                        <span className="block text-white font-bold text-lg">{r.b}</span>
                                    </span>
                                    <ArrowRight className="w-5 h-5 text-sky-300 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= PRICING + PICKUP AREAS + PROCESS ================= */}
            <section aria-labelledby="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <Reveal>
                        <h2 id="pricing" className="text-3xl md:text-4xl font-bold text-[#0b1535] mb-4">Request a Current Quote</h2>
                        <p className="text-slate-700 leading-relaxed mb-6">A 15-minute Dhahran run and a Bahrain crossing with waiting time are not priced the same way, so we quote each trip. You see the price before you confirm. It depends on:</p>
                        <div className="flex flex-wrap gap-2">
                            {['Pickup location', 'Destination', 'Vehicle', 'Passengers', 'Luggage', 'One way / return', 'Waiting time', 'Border requirements'].map((f) => (
                                <span key={f} className="rounded-full bg-white border border-slate-200 px-4 py-2 text-sm text-[#0b1535]">{f}</span>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1535] mb-4">Pickup Around Al Khobar</h2>
                        <p className="text-slate-600 mb-5">Choose a starting point - the booking form opens with it filled in.</p>
                        <ul className="grid grid-cols-2 gap-2">
                            {['Al Khobar Corniche', 'Al Ulaya', 'Al Aqrabiyah', 'Al Hamra', 'Al Khobar hotel', 'Business district'].map((a) => (
                                <li key={a}>
                                    <Link href={q({ from: a === 'Business district' ? 'Al Khobar business district' : a.includes('Khobar') ? a : `${a}, Al Khobar` })} className="group flex items-center justify-between gap-2 rounded-xl bg-white border border-slate-200 px-4 py-3.5 text-sm font-semibold text-[#0b1535] hover:border-[#2f6bff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6bff]">
                                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#2f6bff] shrink-0" aria-hidden="true" />{a}</span>
                                        <ArrowRight className="w-4 h-4 text-[#2f6bff] shrink-0" aria-hidden="true" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>

                <div className="max-w-6xl mx-auto mt-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0b1535] mb-8">How Booking Works</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            ['Send the trip', 'Pickup, destination, date, passengers and bags - by form or WhatsApp.'],
                            ['Add the details', 'Flight number for DMM, nationalities for border trips, gate for controlled sites.'],
                            ['Get your price', 'Confirmed trip price and details before you commit.'],
                            ['Travel', 'Driver and vehicle details come with your confirmed booking.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-white border border-slate-200 p-6">
                                <span className="text-3xl font-black text-[#2f6bff]/30" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                <h3 className="mt-2 mb-2 text-[#0b1535]">{t}</h3>
                                <p className="text-sm text-slate-600">{d}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <AlUlaReviews place="khobar" title="What travellers said about their Al Khobar trips" />

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-[#0b1535] mb-8">Al Khobar Transfer Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-slate-200 px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0b1535] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-bold text-[#0b1535] mb-6">Related Routes &amp; Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
                        {[
                            { g: 'Across the border', items: [['Private Bahrain transfer', '/routes/khobar-bahrain/'], ['King Fahd Causeway crossing', '/locations/al-khobar/bahrain-causeway/'], ['Khobar to Kuwait route', '/routes/khobar-to-kuwait-taxi/'], ['Khobar to Qatar route', '/routes/khobar-to-qatar-taxi/']] },
                            { g: 'Around the province', items: [['DMM airport transfer', '/routes/khobar-to-dammam-airport/'], ['Dammam', '/locations/dammam/'], ['Dhahran', '/locations/dhahran/'], ['Jubail', '/locations/jubail/']] },
                            { g: 'Services', items: [['Al Khobar Corniche transportation', '/locations/al-khobar/corniche/'], ['Hourly chauffeur service', '/services/private-driver/'], ['Airport transfers', '/services/airport-transfers/'], ['All Saudi routes', '/routes/']] },
                        ].map((col) => (
                            <div key={col.g} className="mb-6">
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">{col.g}</p>
                                <ul className="space-y-2">
                                    {col.items.map(([l, h]) => (
                                        <li key={h}><Link href={h} className="group inline-flex items-center gap-2 font-semibold text-[#0b1535] hover:text-[#2f6bff]">{l} <Arrow /></Link></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#0b1535]">
                <svg className="absolute inset-0 -z-10 w-full h-full" viewBox="0 0 1440 500" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 380 L 1440 300" stroke="#7dd3fc" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="4 12" />
                    <path d="M1000 0 C 980 200, 1020 320, 1000 500 L 1440 500 L 1440 0 Z" fill="#123a7a" fillOpacity="0.5" />
                </svg>
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Need a Private Transfer From Al Khobar?</h2>
                    <p className="text-lg text-slate-300 mb-10">
                        Tell us where you&apos;re being picked up, where you&apos;re going, when you&apos;re travelling, and how many passengers and bags you have. We&apos;ll help arrange the appropriate private vehicle.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-[#2f6bff] text-white hover:bg-[#1f55e0]">
                            <a href={QUOTE_HREF}>Get Al Khobar Quote</a>
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
