import { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowRight, Plane, Building2, Briefcase, Factory, Globe2, Route, Landmark, FileText, Clock, Repeat, CalendarDays, CalendarClock,
    Car, Users, Waves, Info, Check, MapPin,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import AlUlaReviews from '@/components/alula/AlUlaReviews';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import EasternNetwork from '@/components/dammam/EasternNetwork';
import TripTypeFinder from '@/components/dammam/TripTypeFinder';
import DammamVehicleSelector from '@/components/dammam/DammamVehicleSelector';

const PAGE_URL = 'https://taxiserviceksa.com/locations/dammam/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for a transfer in the Eastern Province. Pickup, destination, date and passengers: ')}`;

export const metadata: Metadata = {
    title: 'Dammam Taxi & Private Transfers | DMM Airport, Bahrain & Jubail',
    description:
        'Book private transportation in Dammam for DMM Airport, Al Khobar, Dhahran, Jubail, Bahrain and intercity journeys. Request a vehicle quote for your trip.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Dammam Taxi & Private Transfers',
        description: 'Private airport, city and intercity transportation across Dammam and the Eastern Province.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private transfers in Dammam and the Eastern Province' }],
    },
};

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

// Approximate figures from central Dammam; see the note under the table.
const TIMES = [
    { route: 'Dammam → Al Khobar', km: 'About 20–25 km', time: 'About 20–30 min' },
    { route: 'Dammam → DMM Airport', km: 'About 35–40 km', time: 'About 30–40 min' },
    { route: 'Dammam → Jubail', km: 'About 95–110 km', time: 'About 1 h – 1 h 15' },
    { route: 'Dammam → King Fahd Causeway', km: 'About 40 km to the causeway', time: 'Varies with border processing' },
    { route: 'Dammam → Hofuf (Al Ahsa)', km: 'About 150 km', time: 'About 1.5–2 h' },
    { route: 'Dammam → Riyadh', km: 'About 400 km', time: 'About 4–4.5 h' },
];

const faqs = [
    { q: 'Can I book a private transfer from DMM Airport?', a: 'Yes. Send your flight number, arrival time and destination - a Dammam hotel, Al Khobar, Dhahran, Jubail or further - and we quote for the vehicle that suits your group.' },
    { q: 'Can you take me from Dammam to Al Khobar?', a: 'Yes, door to door between any address in Dammam and Al Khobar, one way or with a return later in the day.' },
    { q: 'Do you provide Dhahran transfers?', a: 'Yes, to hotels, offices and meeting places in Dhahran. For sites with controlled entry, we drive to the public entrance or reception point you give us; we cannot arrange access to restricted areas.' },
    { q: 'Can I book Dammam to Jubail?', a: 'Yes - to Jubail Industrial City or Jubail town, from Dammam, Al Khobar or straight from DMM Airport. Return trips at the end of a shift or meeting can be booked together.' },
    { q: 'Can I travel from Dammam to Bahrain?', a: 'Yes, across the King Fahd Causeway to your address in Bahrain, using a vehicle and driver permitted to make the crossing. Time at the border varies, so we do not promise an arrival time.' },
    { q: 'What documents do I need for Bahrain?', a: 'Each passenger needs a valid passport or ID and any visa or entry permission that applies to their nationality. Requirements can change, so check them with the official authorities before you travel. We provide the transport; we cannot arrange or guarantee entry.' },
    { q: 'Can you provide corporate transportation?', a: 'Yes: single transfers, a driver for the day, or a repeating schedule for visiting staff or project teams. Send the dates, addresses and head count and we confirm what we can cover.' },
    { q: 'Can I book a vehicle for a full day?', a: 'Yes, through our private driver service - useful for several meetings, site visits or an airport run at the end of the day. Tell us the start time and roughly how many hours.' },
    { q: 'Which vehicle should I choose for a family?', a: 'A Toyota Veloz or Hyundai Staria suits most families of up to 7. If you carry several large suitcases, a GMC Yukon gives more room. The vehicle guide on this page helps you compare.' },
    { q: 'Can you accommodate large luggage?', a: 'Yes, if we know in advance. Tell us how many suitcases, boxes or equipment cases you have so the vehicle we send has room for them.' },
    { q: 'Can you pick me up from my Dammam hotel?', a: 'Yes. Give us the hotel name and your pickup time; the driver meets you at the hotel entrance or wherever you agree with us.' },
    { q: 'Can I book Dammam to Riyadh?', a: 'Yes, as a private long-distance transfer to a Riyadh hotel, office or the airport. Ask for stops on the way when you book.' },
    { q: 'How do I get a current quote?', a: 'Use the quote form at the top of this page or message us on WhatsApp with the pickup, destination, date, time, passengers and luggage. You receive the trip price before you confirm.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private transfers in Dammam and the Eastern Province',
            url: PAGE_URL,
            serviceType: 'Pre-booked private transfer',
            description:
                'Pre-booked private transportation from Dammam and King Fahd International Airport (DMM) to Al Khobar, Dhahran, Jubail, Al Ahsa, Riyadh and across the King Fahd Causeway to Bahrain.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: [
                { '@type': 'City', name: 'Dammam' },
                { '@type': 'City', name: 'Al Khobar' },
                { '@type': 'City', name: 'Dhahran' },
                { '@type': 'City', name: 'Jubail' },
                { '@type': 'AdministrativeArea', name: 'Eastern Province, Saudi Arabia' },
            ],
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const btnPrimary = 'group h-auto py-4 px-7 rounded-xl font-bold text-base bg-teal-300 text-[#07141f] hover:bg-teal-200';
const btnGhost = 'h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white';
const inlineLink = 'text-teal-800 font-semibold hover:underline';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function DammamPage() {
    return (
        <div className="dammam-page bg-[#f4f6f7]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#07141f]">
                {/* Gulf coast + road network artwork */}
                <svg className="absolute inset-0 -z-10 w-full h-full" viewBox="0 0 1440 860" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <defs>
                        <linearGradient id="dh-sea" x1="0" y1="0" x2="1" y2="0.3">
                            <stop offset="0" stopColor="#0e3a4f" stopOpacity="0" />
                            <stop offset="1" stopColor="#0f4c5c" stopOpacity="0.85" />
                        </linearGradient>
                        <radialGradient id="dh-glow" cx="0.15" cy="0.1" r="0.6">
                            <stop offset="0" stopColor="#134e4a" stopOpacity="0.7" />
                            <stop offset="1" stopColor="#07141f" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <rect width="1440" height="860" fill="url(#dh-glow)" />
                    <path d="M1010 0 C 960 160, 1010 300, 980 420 S 1080 620, 1060 860 L 1440 860 L 1440 0 Z" fill="url(#dh-sea)" />
                    <g stroke="#ffffff" strokeOpacity="0.045">
                        {Array.from({ length: 12 }, (_, i) => <path key={`r${i}`} d={`M0 ${80 + i * 70} C 300 ${60 + i * 70}, 700 ${100 + i * 70}, 1000 ${70 + i * 70}`} fill="none" />)}
                    </g>
                    {/* Airport approach */}
                    <path d="M120 60 C 380 140, 560 180, 760 250" fill="none" stroke="#f5d08a" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 10" />
                    {/* Coastal corridor: Jubail - Dammam - Khobar - Causeway */}
                    <path d="M840 40 C 880 200, 900 300, 930 420 S 960 560, 1000 640 L 1180 680" fill="none" stroke="#5eead4" strokeOpacity="0.18" strokeWidth="10" strokeLinecap="round" />
                    <path d="M840 40 C 880 200, 900 300, 930 420 S 960 560, 1000 640 L 1180 680" fill="none" stroke="#5eead4" strokeWidth="2.5" strokeLinecap="round" pathLength={1} className="route-draw" />
                    {[[840, 40], [930, 420], [1000, 640], [1180, 680]].map(([x, y]) => (
                        <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill="#07141f" stroke="#5eead4" strokeWidth="2.5" />
                    ))}
                </svg>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07141f] via-[#07141f]/85 to-[#07141f]/30" aria-hidden="true" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-6 text-xs sm:text-sm font-semibold" aria-label="Eastern Province routes">
                            {['DMM Airport', 'Dammam', 'Al Khobar · Dhahran', 'Jubail · Bahrain'].map((s, i, a) => (
                                <li key={s} className="flex items-center gap-2">
                                    <span className={`rounded-full px-3 py-1 ${i === 1 ? 'bg-[#f5d08a] text-[#07141f]' : 'bg-white/10 text-teal-100'}`}>{s}</span>
                                    {i < a.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-teal-300/70" aria-hidden="true" />}
                                </li>
                            ))}
                        </ol>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-tight mb-5">Dammam Taxi &amp; Private Transfer Service</h1>
                        <p className="text-lg text-slate-200/90 leading-relaxed mb-8 max-w-xl">
                            Private airport, city and intercity transportation across Dammam and the Eastern Province. Choose your route, vehicle and pickup - from DMM Airport to Dammam, Al Khobar, Dhahran, Jubail or Bahrain - and request your transfer.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mb-8">
                            <Button asChild size="lg" className={btnPrimary}>
                                <a href={QUOTE_HREF}>Get a Transfer Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className={btnGhost}>
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Us</a>
                            </Button>
                        </div>
                        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-300" aria-hidden="true" /> Pre-booked, private vehicle</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-300" aria-hidden="true" /> Price confirmed before you book</li>
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-40">
                        <RouteQuoteCard
                            title="Plan your Eastern Province transfer"
                            cta="Get My Dammam Transfer Quote"
                            fromPlaceholder="Airport, hotel or address"
                            toPlaceholder="Hotel, office, city or airport"
                            fromChips={['King Fahd International Airport (DMM)', 'Dammam hotel', 'Al Khobar']}
                            toChips={['Al Khobar', 'Dhahran', 'Jubail Industrial City', 'Bahrain', 'Riyadh']}
                        />
                    </div>
                </div>
            </section>

            {/* ================= WHERE ARE YOU TRAVELLING (signature network) ================= */}
            <section aria-labelledby="where" className="bg-[#0b1d2b] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-10">
                        <h2 id="where" className="text-3xl md:text-5xl font-bold mb-4">Where Are You Travelling?</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Dammam sits in the middle of a tight network: the airport to the north-west, Dhahran and Al Khobar to the south, Jubail up the coast, Bahrain across the causeway and Riyadh inland. Pick a destination to see the route and the service that fits.
                        </p>
                    </div>
                    <EasternNetwork />
                </div>
            </section>

            {/* ================= DMM AIRPORT ================= */}
            <section aria-labelledby="dmm" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
                    <Reveal>
                        <p className="text-sm font-bold uppercase tracking-wider text-teal-700 mb-3 flex items-center gap-2"><Plane className="w-4 h-4" aria-hidden="true" /> King Fahd International Airport</p>
                        <h2 id="dmm" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dammam Airport Transfers</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            DMM is the Eastern Province&apos;s main airport and lies well outside the city - roughly 35–40 km from central Dammam - so most arrivals need a car for the last leg. We pick up for any address in the region and take departing passengers from their hotel to the airport.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            {[
                                ['DMM → Dammam hotel', 'Arrivals to hotels, homes and serviced apartments.'],
                                ['DMM → Al Khobar / Dhahran', 'Straight to your hotel or the address of your meeting.'],
                                ['DMM → Jubail', 'For crews and visitors heading directly to Jubail.'],
                                ['Hotel → DMM', 'Departure pickups, booked with the rest of your trip.'],
                            ].map(([t, d]) => (
                                <div key={t} className="rounded-2xl bg-white border border-slate-200 p-5">
                                    <p className="font-bold text-slate-900 mb-1">{t}</p>
                                    <p className="text-sm text-slate-600">{d}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/dammam-airport-taxi/" className="group inline-flex items-center gap-2 font-bold text-teal-800">
                            Full Dammam Airport transfer details <Arrow />
                        </Link>
                    </Reveal>
                    <Reveal delay={100}>
                        <aside className="rounded-3xl bg-[#07141f] text-white p-7 md:p-8">
                            <h3 className="mb-4">Arriving at DMM?</h3>
                            <p className="text-sm text-slate-300 mb-5">Send these with your booking so the driver is ready for you:</p>
                            <ul className="space-y-3 text-sm">
                                {['Flight number', 'Arrival date and time', 'Passengers', 'Number of suitcases', 'Destination address', 'A phone number that works on arrival'].map((i) => (
                                    <li key={i} className="flex gap-3"><Check className="w-4 h-4 text-teal-300 mt-0.5 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                            <p className="text-xs text-slate-400 mt-6">Pickup instructions for the terminal are sent with your confirmation.</p>
                        </aside>
                    </Reveal>
                </div>
            </section>

            {/* ================= KHOBAR + DHAHRAN ================= */}
            <section aria-labelledby="tri-city" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="tri-city" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 max-w-2xl">Dammam, Al Khobar and Dhahran</h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-10 max-w-3xl">
                        Three cities that function as one metropolitan area. People sleep in one, work in another and meet in the third - which is why so many of our Eastern Province bookings are short cross-town transfers rather than long drives.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Reveal className="h-full">
                            <article className="h-full rounded-3xl border border-slate-200 bg-[#f4f6f7] p-7 md:p-8 flex flex-col">
                                <Building2 className="w-7 h-7 text-teal-700 mb-4" aria-hidden="true" />
                                <h3 className="mb-3">Dammam to Al Khobar</h3>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    Hotel moves, dinners on the Khobar Corniche, shopping, meetings and airport connections. Al Khobar is also where the road to the King Fahd Causeway begins, so it is often the first leg of a Bahrain trip.
                                </p>
                                <p className="text-sm text-slate-600 mb-6">About 20–25 km from central Dammam, usually 20–30 minutes. Approximate travel time varies by pickup location and traffic.</p>
                                <Link href="/locations/al-khobar/" className="group mt-auto inline-flex items-center gap-2 font-bold text-teal-800">Transport in Al Khobar <Arrow /></Link>
                            </article>
                        </Reveal>
                        <Reveal className="h-full" delay={100}>
                            <article className="h-full rounded-3xl border border-slate-200 bg-[#f4f6f7] p-7 md:p-8 flex flex-col">
                                <Briefcase className="w-7 h-7 text-teal-700 mb-4" aria-hidden="true" />
                                <h3 className="mb-3">Dammam to Dhahran</h3>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    Many business visitors to the Eastern Province spend their days in Dhahran: corporate offices, business hotels, meetings and training. We take visitors from DMM, from a Dammam or Khobar hotel, and back again.
                                </p>
                                <p className="text-sm text-slate-600 mb-6">For sites with controlled entry, we drive to the public gate or reception you give us - we cannot arrange access to restricted compounds.</p>
                                <Link href="/locations/dhahran/" className="group mt-auto inline-flex items-center gap-2 font-bold text-teal-800">Transport in Dhahran <Arrow /></Link>
                            </article>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ================= JUBAIL ================= */}
            <section aria-labelledby="jubail" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <Reveal>
                        <p className="text-sm font-bold uppercase tracking-wider text-teal-700 mb-3 flex items-center gap-2"><Factory className="w-4 h-4" aria-hidden="true" /> Up the coast</p>
                        <h2 id="jubail" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dammam to Jubail Industrial City</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-5">
                            Jubail is roughly an hour north of Dammam, and for many business visitors the real destination of their trip. Contractors, engineers, inspectors and project teams travel between their hotel, DMM Airport and the industrial city - often out in the morning and back in the evening.
                        </p>
                        <ul className="space-y-3 text-slate-700 mb-8">
                            {[
                                'Dammam or Al Khobar hotel to Jubail, with a return booked for the end of the day',
                                'DMM Airport straight to Jubail for arriving crews',
                                'Hiace or Sprinter vans for teams, sedans for individual visitors',
                                'Tool bags and equipment cases - tell us what you carry',
                            ].map((i) => (
                                <li key={i} className="flex gap-3"><Check className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" aria-hidden="true" />{i}</li>
                            ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold bg-[#07141f] text-white hover:bg-black">
                                <Link href={`/booking/?${new URLSearchParams({ from: 'Dammam', to: 'Jubail Industrial City' }).toString()}`}>Jubail Transfer Quote <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></Link>
                            </Button>
                            <Link href="/locations/jubail/industrial-city/" className="group inline-flex items-center justify-center gap-2 px-4 py-3 font-bold text-teal-800">Jubail Industrial City <Arrow /></Link>
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <div className="rounded-3xl bg-[#07141f] p-8 text-white">
                            <svg viewBox="0 0 400 300" className="w-full h-auto" role="img" aria-label="Dammam to Jubail Industrial City, about 95 to 110 kilometres along the coast">
                                <path d="M300 0 C 280 80, 320 160, 300 300 L 400 300 L 400 0 Z" fill="#0f4c5c" opacity="0.6" />
                                <path d="M110 250 C 140 190, 170 130, 230 50" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="12" strokeLinecap="round" />
                                <path d="M110 250 C 140 190, 170 130, 230 50" fill="none" stroke="#5eead4" strokeWidth="3" strokeLinecap="round" pathLength={1} className="route-draw" />
                                <circle cx="110" cy="250" r="12" fill="#f5d08a" />
                                <circle cx="230" cy="50" r="10" fill="#5eead4" />
                                <text x="130" y="276" fontSize="17" fontWeight="700" fill="#f5d08a">Dammam</text>
                                <text x="210" y="30" fontSize="17" fontWeight="700" fill="#ffffff" textAnchor="end">Jubail Industrial City</text>
                                <text x="70" y="150" fontSize="14" fill="#94a3b8">≈ 95–110 km</text>
                                <text x="70" y="170" fontSize="14" fill="#94a3b8">≈ 1 h – 1 h 15</text>
                            </svg>
                            <p className="text-xs text-slate-400 mt-4">Approximate, depending on your exact pickup and site address.</p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ================= CORPORATE ================= */}
            <section aria-labelledby="corporate" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl mb-10">
                        <h2 id="corporate" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Corporate Transportation Across the Eastern Province</h2>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Business travel here follows a pattern: land at DMM, stay in Al Khobar or Dammam, meet in Dhahran, visit a site in Jubail, fly out again. We arrange the car for each part, or one driver for the whole day.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        {[
                            { icon: Car, t: 'Single transfer', d: 'Airport, hotel or meeting - one journey, booked in advance.' },
                            { icon: Clock, t: 'Full day', d: 'A driver who stays with you between meetings and site visits.' },
                            { icon: CalendarDays, t: 'Multi-day', d: 'For visiting teams and projects. Send the dates and daily plan.' },
                            { icon: Repeat, t: 'Recurring', d: 'A regular route on a fixed schedule. Tell us the pattern and we confirm what we can cover.' },
                        ].map((m, i) => (
                            <Reveal key={m.t} delay={i * 80} className="h-full">
                                <div className="h-full rounded-2xl border border-slate-200 p-6">
                                    <m.icon className="w-6 h-6 text-teal-700 mb-4" aria-hidden="true" />
                                    <h3 className="mb-2">{m.t}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{m.d}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="rounded-3xl bg-[#f4f6f7] p-7 md:p-8">
                            <h3 className="mb-5">Matching the vehicle to the team</h3>
                            <dl className="space-y-4">
                                {[
                                    ['1 passenger', 'Toyota Camry sedan'],
                                    ['2–6 colleagues', 'GMC Yukon or Hyundai Staria'],
                                    ['Larger teams', 'Toyota Hiace or Mercedes Sprinter'],
                                ].map(([k, v]) => (
                                    <div key={k} className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                                        <dt className="font-semibold text-slate-900">{k}</dt>
                                        <dd className="text-slate-600 text-right">{v}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        <div className="rounded-3xl bg-[#07141f] text-white p-7 md:p-8">
                            <h3 className="mb-2 flex items-center gap-2"><CalendarClock className="w-5 h-5 text-teal-300" aria-hidden="true" /> An Eastern Province day</h3>
                            <p className="text-sm text-slate-300 mb-6">One booking can cover several stops. How many fit into a day depends on distances, traffic and time at each stop.</p>
                            <ol className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-sm font-semibold">
                                {['DMM Airport', 'Dammam', 'Dhahran', 'Al Khobar', 'Jubail or Bahrain'].map((s, i, a) => (
                                    <li key={s} className="flex items-center gap-2">
                                        <span className="rounded-lg bg-white/10 px-3 py-2">{s}</span>
                                        {i < a.length - 1 && <ArrowRight className="w-4 h-4 text-teal-300 rotate-90 sm:rotate-0" aria-hidden="true" />}
                                    </li>
                                ))}
                            </ol>
                            <Link href="/services/private-driver/" className="group mt-7 inline-flex items-center gap-2 font-bold text-teal-300">Need a driver for the day? <Arrow /></Link>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 mt-8">
                        More on company bookings on our <Link href="/services/corporate-travel/" className={inlineLink}>corporate travel</Link> page.
                    </p>
                </div>
            </section>

            {/* ================= BAHRAIN ================= */}
            <section aria-labelledby="bahrain" className="relative isolate overflow-hidden bg-[#0b2a33] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                        <Reveal>
                            <p className="text-sm font-bold uppercase tracking-wider text-teal-300 mb-3 flex items-center gap-2"><Globe2 className="w-4 h-4" aria-hidden="true" /> Cross-border</p>
                            <h2 id="bahrain" className="text-3xl md:text-5xl font-bold mb-5">Dammam to Bahrain Private Transfer</h2>
                            <p className="text-lg text-teal-50/85 leading-relaxed mb-8">
                                The King Fahd Causeway links the Saudi coast just south of Al Khobar with Bahrain - about 25 km of bridges and embankments, with border processing for both countries on the way. A private car takes you from your door in Dammam or Al Khobar across to your address in Bahrain.
                            </p>
                            {/* Route strip */}
                            <ol className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-8 text-sm font-semibold" aria-label="Route to Bahrain">
                                {['Dammam / Al Khobar', 'King Fahd Causeway', 'Bahrain'].map((s, i) => (
                                    <li key={s} className={`rounded-xl px-4 py-4 text-center ${i === 1 ? 'bg-teal-300 text-[#07141f]' : 'bg-white/10'}`}>{s}</li>
                                ))}
                            </ol>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-teal-50/85 mb-8">
                                {[
                                    'Pickup from your hotel, home or office',
                                    'Drop-off at your Bahrain address',
                                    'One way or return',
                                    'Your luggage travels in the same car',
                                    'A vehicle and driver permitted to cross',
                                    'Border time varies - allow for it',
                                ].map((i) => (
                                    <li key={i} className="flex gap-3"><Check className="w-4 h-4 text-teal-300 mt-0.5 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button asChild size="lg" className={btnPrimary}>
                                    <Link href={`/booking/?${new URLSearchParams({ from: 'Dammam', to: 'Bahrain' }).toString()}`}>Bahrain Transfer Quote <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></Link>
                                </Button>
                                <Link href="/routes/dammam-bahrain/" className="group inline-flex items-center justify-center gap-2 px-4 py-3 font-bold text-teal-300">Dammam to Bahrain in detail <Arrow /></Link>
                            </div>
                        </Reveal>
                        <div className="space-y-5">
                            <Reveal delay={100}>
                                <aside className="rounded-3xl border-2 border-[#f5d08a]/60 bg-[#f5d08a]/10 p-7">
                                    <h3 className="mb-3 flex items-center gap-2 text-[#f5d08a]"><FileText className="w-5 h-5" aria-hidden="true" /> Travel documents</h3>
                                    <p className="text-sm text-teal-50/90 leading-relaxed">
                                        Cross-border travel requires passengers to carry the valid travel documents and entry permissions applicable to their nationality and destination. Requirements can change, so passengers should verify current requirements before travel. Passengers remain responsible for having valid passports, visas and entry documents; the driver cannot override border requirements.
                                    </p>
                                </aside>
                            </Reveal>
                            <Reveal delay={180}>
                                <div className="rounded-3xl bg-white text-slate-900 p-7">
                                    <h3 className="mb-3">Returning from Bahrain?</h3>
                                    <ol className="flex flex-col gap-2 text-sm font-semibold mb-5">
                                        {['Your Bahrain hotel', 'King Fahd Causeway', 'Al Khobar, Dammam or DMM'].map((s, i, a) => (
                                            <li key={s} className="flex items-center gap-3">
                                                <span className="w-7 h-7 rounded-full bg-teal-700 text-white text-xs flex items-center justify-center shrink-0" aria-hidden="true">{i + 1}</span>
                                                {s}
                                                {i < a.length - 1 && <span className="sr-only">, then</span>}
                                            </li>
                                        ))}
                                    </ol>
                                    <p className="text-sm text-slate-600 mb-5">Book the return with your outbound trip, or on its own for a pickup in Bahrain.</p>
                                    <div className="flex flex-col gap-2">
                                        <Link href="/routes/bahrain-dammam/" className="group inline-flex items-center gap-2 font-bold text-teal-800">Bahrain to Dammam <Arrow /></Link>
                                        <Link href="/routes/khobar-bahrain/" className="group inline-flex items-center gap-2 font-bold text-teal-800">Al Khobar to Bahrain <Arrow /></Link>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= LONGER JOURNEYS ================= */}
            <section aria-labelledby="longer" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="longer" className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Beyond the Coast</h2>
                    <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6">
                        <Reveal className="h-full">
                            <article className="h-full rounded-3xl bg-white border border-slate-200 p-7 md:p-8 flex flex-col">
                                <Route className="w-7 h-7 text-teal-700 mb-4" aria-hidden="true" />
                                <h3 className="mb-3">Dammam to Riyadh</h3>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    About 400 km inland - typically 4 to 4.5 hours of driving - to a Riyadh hotel, office or King Khalid International Airport. Families travel with all their luggage in one car; business travellers can work or rest instead of driving. Stops are made when you ask.
                                </p>
                                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                                    <Link href={`/booking/?${new URLSearchParams({ from: 'Dammam', to: 'Riyadh' }).toString()}`} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#07141f] px-5 py-3.5 font-bold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2">
                                        Dammam → Riyadh Quote <Arrow />
                                    </Link>
                                    <Link href="/routes/dammam-riyadh/" className="group inline-flex items-center justify-center gap-2 px-4 py-3 font-bold text-teal-800">Route details <Arrow /></Link>
                                </div>
                            </article>
                        </Reveal>
                        <Reveal className="h-full" delay={100}>
                            <article className="h-full rounded-3xl bg-white border border-slate-200 p-7 md:p-8 flex flex-col">
                                <Landmark className="w-7 h-7 text-teal-700 mb-4" aria-hidden="true" />
                                <h3 className="mb-3">Dammam to Al Ahsa / Hofuf</h3>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    About 150 km south-west to the Al Ahsa oasis - hotel pickup, family visits, business trips and connections from DMM.
                                </p>
                                <Link href="/locations/hofuf/" className="group mt-auto inline-flex items-center gap-2 font-bold text-teal-800">Transport in Hofuf <Arrow /></Link>
                            </article>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ================= CITY + CORNICHE ================= */}
            <section aria-labelledby="city" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    <Reveal>
                        <h2 id="city" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Getting Around Dammam</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-4">
                            Our Dammam service is designed around pre-booked private transportation rather than on-demand street hailing. That suits the trips people plan ahead: a hotel to an office for a 9 am meeting, a family afternoon at the Corniche, a shopping run, a visit to relatives across town, or the ride to the airport at the end of a stay.
                        </p>
                        <p className="text-slate-700 leading-relaxed mb-6">
                            Book one journey, a return, or a driver by the hour when the day has several stops. Every booking is a private vehicle for your group only.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['Hotels', 'Offices & meetings', 'Residential areas', 'Malls', 'Hospitals & clinics', 'DMM Airport'].map((t) => (
                                <span key={t} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-teal-700" aria-hidden="true" />{t}</span>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <Link href="/locations/dammam/corniche/" className="group block rounded-3xl bg-gradient-to-br from-[#0f4c5c] to-[#07141f] text-white p-7 md:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600">
                            <Waves className="w-8 h-8 text-teal-300 mb-5" aria-hidden="true" />
                            <p className="text-2xl font-bold mb-3">Dammam Corniche</p>
                            <p className="text-sm text-teal-50/80 leading-relaxed mb-6">
                                The waterfront is where families head in the evening. A car from your hotel - or straight from DMM via your hotel - drops you off and collects you when you are ready.
                            </p>
                            <span className="inline-flex items-center gap-2 font-bold text-teal-300">Visiting the Corniche <Arrow /></span>
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* ================= WHAT ARE YOU BOOKING ================= */}
            <section aria-labelledby="booking-type" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-10">
                        <h2 id="booking-type" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Are You Booking?</h2>
                        <p className="text-slate-700 leading-relaxed">Choose the reason for your trip. We show you what to send, which vehicle usually fits, and where to start.</p>
                    </div>
                    <TripTypeFinder />
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section aria-labelledby="vehicles" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-10">
                        <h2 id="vehicles" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Which Vehicle Do You Need?</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Tell us how many are travelling and how much you carry. We suggest the vehicle that fits - not automatically the biggest one.
                        </p>
                    </div>
                    <DammamVehicleSelector />
                    <p className="text-sm text-slate-600 mt-8">
                        See every vehicle on the <Link href="/fleet/" className={inlineLink}>fleet page</Link>.
                    </p>
                </div>
            </section>

            {/* ================= PRICING + PROCESS ================= */}
            <section aria-labelledby="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <Reveal>
                        <h2 id="pricing" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get Your Dammam Transfer Quote</h2>
                        <p className="text-slate-700 leading-relaxed mb-6">
                            We don&apos;t publish &ldquo;from&rdquo; prices, because in the Eastern Province they would mislead: a Khobar hotel run and a Jubail site visit with waiting time are very different trips. You receive your confirmed trip price before booking.
                        </p>
                        <p className="text-sm font-bold text-slate-900 mb-3">What the price depends on</p>
                        <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                            {['Route', 'Pickup point', 'Destination', 'Vehicle', 'Passengers', 'Luggage', 'Date and time', 'Waiting time', 'Cross-border requirements'].map((f) => (
                                <li key={f} className="flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-3 py-2.5"><Check className="w-4 h-4 text-teal-700 shrink-0" aria-hidden="true" />{f}</li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal delay={100}>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How Dammam Booking Works</h2>
                        <ol className="space-y-4">
                            {[
                                ['Send your journey', 'Pickup, destination, date and passengers - by the form or WhatsApp.'],
                                ['Choose your vehicle', 'Based on your group and luggage; we suggest one if you are unsure.'],
                                ['Receive confirmation', 'Your trip details and price, before you commit.'],
                                ['Meet your driver', 'Follow the confirmed pickup instructions. Driver details are provided with the confirmed booking.'],
                            ].map(([t, d], i) => (
                                <li key={t} className="flex gap-5 rounded-2xl bg-white border border-slate-200 p-5">
                                    <span className="text-2xl font-black text-teal-700 leading-none" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                    <div>
                                        <h3 className="mb-1">{t}</h3>
                                        <p className="text-sm text-slate-600">{d}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </Reveal>
                </div>
            </section>

            {/* ================= TRAVEL TIMES ================= */}
            <section aria-labelledby="times" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 id="times" className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Typical Distances From Dammam</h2>
                    <div className="overflow-hidden rounded-2xl border border-slate-200">
                        <table className="w-full text-left text-sm">
                            <caption className="sr-only">Approximate road distances and driving times from central Dammam</caption>
                            <thead className="bg-[#07141f] text-white">
                                <tr>
                                    <th scope="col" className="px-4 py-3 font-semibold">Route</th>
                                    <th scope="col" className="px-4 py-3 font-semibold">Approx. distance</th>
                                    <th scope="col" className="px-4 py-3 font-semibold">Typical drive</th>
                                </tr>
                            </thead>
                            <tbody>
                                {TIMES.map((r) => (
                                    <tr key={r.route} className="border-t border-slate-200 even:bg-slate-50">
                                        <th scope="row" className="px-4 py-3 font-semibold text-slate-900">{r.route}</th>
                                        <td className="px-4 py-3 text-slate-700">{r.km}</td>
                                        <td className="px-4 py-3 text-slate-700">{r.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-slate-500 mt-4 flex gap-2">
                        <Info className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                        Actual travel time depends on exact pickup/drop-off location, traffic, road conditions and border processing where applicable.
                    </p>
                </div>
            </section>

            <AlUlaReviews place="dammam" title="What travellers said about their Dammam trips" />

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Dammam Transfer Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-slate-200 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-slate-900 hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Around the Eastern Province</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {[
                            { l: 'Al Khobar', h: '/locations/al-khobar/', i: Building2 },
                            { l: 'Dhahran', h: '/locations/dhahran/', i: Briefcase },
                            { l: 'Jubail', h: '/locations/jubail/', i: Factory },
                            { l: 'Al Ahsa', h: '/locations/al-ahsa/', i: Landmark },
                            { l: 'Dammam → Bahrain', h: '/routes/dammam-bahrain/', i: Globe2 },
                            { l: 'Dammam → Riyadh', h: '/routes/dammam-riyadh/', i: Route },
                            { l: 'Airport transfers', h: '/services/airport-transfers/', i: Plane },
                            { l: 'Taxi in Dammam - service details', h: '/services/taxi-in-dammam/', i: Users },
                        ].map((r) => (
                            <Link key={r.h} href={r.h} className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 px-5 py-4 font-semibold text-slate-900 hover:border-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600">
                                <span className="flex items-center gap-3"><r.i className="w-4 h-4 text-teal-700 shrink-0" aria-hidden="true" />{r.l}</span>
                                <ArrowRight className="w-4 h-4 text-teal-700 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#07141f]">
                <svg className="absolute inset-0 -z-10 w-full h-full opacity-40" viewBox="0 0 1440 500" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M120 420 C 400 380, 620 300, 760 240 S 1100 120, 1320 80" fill="none" stroke="#5eead4" strokeWidth="2" strokeDasharray="6 10" />
                </svg>
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Where in the Eastern Province Are You Heading?</h2>
                    <p className="text-lg text-slate-300 mb-10">
                        From DMM Airport to Dammam, Al Khobar, Dhahran, Jubail or Bahrain - send your route, vehicle and pickup, and we confirm your private transfer and its price.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className={btnPrimary}>
                            <a href={QUOTE_HREF}>Get My Dammam Transfer Quote</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className={btnGhost}>
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Us</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
