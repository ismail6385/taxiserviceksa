import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, X, Info, Car, Users, Luggage, Briefcase, Plane, RefreshCw, CalendarDays, TrainFront, Bus, Route } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import AuthorCard from '@/components/AuthorCard';
import { JEDDAH_TAIF } from '@/data/jeddahTaifRoute';

const PAGE_URL = 'https://taxiserviceksa.com/services/intercity/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need a private intercity car. From (address), to (address), date and time, passengers, luggage and preferred vehicle: ')}`;
const sar = (n: number) => `${n.toLocaleString('en-US')} SAR`;

// "from" = the sedan fare on that route's own page. Keep in step with the route pages.
const ROUTES: { name: string; href: string; distance: string; time: string; from?: number; note: string }[] = [
    { name: 'Jeddah ↔ Makkah', href: '/routes/jeddah-makkah/', distance: 'About 90 km', time: 'Often 1–1.5 hours', from: 300, note: 'Airport or hotel in Jeddah to your Makkah hotel. The most booked trip for Umrah arrivals.' },
    { name: 'Makkah ↔ Madinah', href: '/routes/makkah-madinah/', distance: 'Roughly 420–450 km', time: 'Around 4–5 hours', from: 400, note: 'Hotel to hotel between the two Holy Cities, with stops on the way.' },
    { name: 'Jeddah ↔ Madinah', href: '/routes/jeddah-madinah/', distance: 'About 415 km', time: 'Around 4–4.5 hours', from: 450, note: 'Straight from Jeddah or the airport to your hotel near the Prophet’s Mosque.' },
    { name: 'Riyadh ↔ Dammam', href: '/routes/riyadh-dammam/', distance: 'About 400 km', time: 'Around 4 hours', from: 1000, note: 'The business corridor between the capital and the Eastern Province.' },
    { name: 'Riyadh ↔ Jeddah', href: '/routes/riyadh-jeddah/', distance: 'About 950–970 km', time: 'Around 9–10 hours', from: 1500, note: 'A full day across the Kingdom, for families, moves and groups.' },
    { name: 'Jeddah ↔ Taif', href: JEDDAH_TAIF.href, distance: `About ${JEDDAH_TAIF.distance}`, time: JEDDAH_TAIF.roadTime, note: 'Up the mountain road to Taif, Al Hada or Al Shafa. Quoted on the address.' },
];

const VEHICLES = [
    { range: '1–3 passengers, normal luggage', name: 'Toyota Camry (sedan)', bags: 'About 2 large suitcases', href: '/fleet/toyota-camry/', img: '/toyota-camry.webp' },
    { range: 'Families up to 7', name: 'Hyundai Staria VIP', bags: 'About 4 large suitcases', href: '/fleet/hyundai-staria-vip/', img: '/hyundai-staria.webp' },
    { range: 'Up to 7 with more luggage', name: 'GMC Yukon XL', bags: 'About 5 large suitcases', href: '/fleet/gmc-yukon-xl/', img: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp' },
    { range: 'Groups of 8–11', name: 'Toyota Hiace', bags: 'Room for a group’s luggage', href: '/fleet/toyota-hiace/', img: '/toyota-hiace.webp' },
];

const TITLE = 'Intercity Taxi Saudi Arabia | Private Car & Chauffeur';
const DESCRIPTION = 'Private intercity taxi in Saudi Arabia: Jeddah–Makkah from 300 SAR, Makkah–Madinah, Riyadh–Jeddah, Riyadh–Dammam and more. Choose your vehicle and request your fare.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: PAGE_URL,
        languages: {
            'en': PAGE_URL,
            'ar': 'https://taxiserviceksa.com/ar/services/intercity/',
            'ur': 'https://taxiserviceksa.com/ur/services/intercity/',
            'x-default': PAGE_URL,
        },
    },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private intercity car with driver in Saudi Arabia' }],
    },
};

const faqs = [
    { q: 'How much does a private intercity taxi cost in Saudi Arabia?', a: 'It depends on the route and the vehicle. As a guide, sedan fares start from 300 SAR for Jeddah to Makkah, 450 SAR for Jeddah to Madinah, 1,000 SAR for Riyadh to Dammam and 1,500 SAR for Riyadh to Jeddah. Each route page lists its fares, and every trip is quoted before you confirm.' },
    { q: 'Is the fare fixed?', a: 'Yes, once agreed. The quote covers the trip you described: the vehicle, the driver, fuel and normal stops between the addresses you gave. It changes only if the trip changes, for example an added stop, a different address or extra waiting, and we tell you before that happens.' },
    { q: 'Is the price per person?', a: 'No. Fares are per vehicle, for everyone travelling in it.' },
    { q: 'How do I book?', a: 'Send your pickup, destination, date, time, passengers and luggage on the form or WhatsApp. We check a vehicle for your date and send the fare. The booking is confirmed when you accept it.' },
    { q: 'Can we stop for food or prayer?', a: 'Yes. Normal stops are part of the trip. Tell us about longer stops or detours when booking, as they may change the fare.' },
    { q: 'Can I travel at night?', a: 'Yes, if a driver is available for the time you want. Ask for your preferred departure time and we confirm it.' },
    { q: 'How much luggage can I bring?', a: 'It depends on the vehicle and the number of passengers. As a guide: sedan about two large suitcases, Staria about four, GMC about five. Send your bag count and we check before you book.' },
    { q: 'Which vehicle is best for a family?', a: 'Usually the Hyundai Staria or the GMC Yukon XL, both for up to seven people. For eight or more, a Toyota Hiace. If you need a child seat, ask when booking and we confirm whether one is available for your date.' },
    { q: 'Do you do return trips?', a: 'Yes. Send both dates. A return days later is booked as a separate trip; if you want the driver to wait for you, the waiting is quoted in advance.' },
    { q: 'Can I hire a driver for several days?', a: 'Yes. For a multi-city itinerary, send the plan and we quote the days, daily hours and the driver’s accommodation where needed.' },
    { q: 'Can the trip start at an airport?', a: 'Yes. Add your flight number when booking. The meeting point and waiting allowance are stated in your confirmation.' },
    { q: 'Is a private car cheaper than the train or bus?', a: 'For one person, usually not. For a family or group sharing one vehicle, or when you would otherwise need taxis to and from stations, it can be comparable. Compare the total for your own trip.' },
    { q: 'What if my plans change?', a: 'Tell us as early as possible. Whether a change or cancellation affects the fare depends on the terms agreed with your booking.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Service',
            '@id': `${PAGE_URL}#service`,
            name: 'Private intercity taxi and chauffeur service in Saudi Arabia',
            serviceType: 'Private intercity transfer',
            url: PAGE_URL,
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
            offers: ROUTES.filter((r) => r.from).map((r) => ({ '@type': 'Offer', name: `Sedan, ${r.name.replace('↔', 'to')}, one way (from)`, price: r.from, priceCurrency: 'SAR', url: `https://taxiserviceksa.com${r.href}` })),
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://taxiserviceksa.com/services/' },
                { '@type': 'ListItem', position: 3, name: 'Intercity', item: PAGE_URL },
            ],
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const eyebrow = 'text-xs font-bold uppercase tracking-[0.22em]';
const link = 'font-semibold text-[#047857] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#0f2a22]';
const h3 = 'text-xl font-bold text-[#0f2a22]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#047857] px-6 py-3.5 font-bold text-white hover:bg-[#065f46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#0f2a22]/20 px-6 py-3.5 font-bold text-[#0f2a22] hover:border-[#047857] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#047857] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function IntercityPage() {
    return (
        <div className="intercity-hub bg-[#f4f6f3]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0f2a22]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#1f5c48_0%,_#0f2a22_60%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#f2c879] mb-4`}>City to City · Private Car with Driver</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Private Intercity Taxi &amp; Chauffeur Service in Saudi Arabia</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            A car and driver reserved for your group, from an address in one city to an address in another. Short hops like Jeddah to Makkah, or a full day from Riyadh to Jeddah. Choose the vehicle; the fare is agreed before you go.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#0f2a22] hover:bg-[#f4f6f3]">
                                <a href={QUOTE_HREF}>Get a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {['Private, not shared', 'Fare per vehicle', 'One way, return or multi-day', 'Stops on request'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#f2c879] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your intercity car"
                            cta="Send my request"
                            fromPlaceholder="Pickup address or airport"
                            toPlaceholder="Destination address"
                            fromChips={['Jeddah', 'Makkah', 'Madinah', 'Riyadh', 'Dammam']}
                            toChips={['Makkah', 'Madinah', 'Jeddah', 'Riyadh', 'Taif']}
                            showFlight="auto"
                            returnNote="Return trip also needed - dates to confirm."
                            buttonClass="bg-[#047857] hover:bg-[#065f46] focus-visible:ring-[#047857]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= ROUTES ================= */}
            <section aria-labelledby="routes" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="routes" className={`${h2} mb-3`}>Popular Intercity Routes</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Each route has its own page with fares for every vehicle, the road, stops and booking details. Distances and times are planning estimates; your exact addresses, traffic and stops change them.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {ROUTES.map((r) => (
                            <Link key={r.href} href={r.href} className="group rounded-2xl bg-[#f4f6f3] p-6 flex flex-col hover:bg-[#e9efe9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857]">
                                <div className="flex items-start justify-between gap-3 mb-2">
                                    <h3 className="text-lg font-bold text-[#0f2a22]">{r.name}</h3>
                                    <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${r.from ? 'bg-[#047857] text-white' : 'bg-white text-stone-600'}`}>{r.from ? `from ${sar(r.from)}` : 'Quote'}</span>
                                </div>
                                <p className="text-xs text-stone-500 mb-3">{r.distance} · {r.time}</p>
                                <p className="text-sm text-stone-600 leading-relaxed mb-4">{r.note}</p>
                                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-[#047857]">Fares and details <Arrow /></span>
                            </Link>
                        ))}
                    </div>
                    <p className="text-sm text-stone-600 mt-6 flex gap-2"><Info className="w-4 h-4 mt-0.5 text-[#047857] shrink-0" aria-hidden="true" />&ldquo;From&rdquo; is the sedan fare, one way, per vehicle. Larger vehicles cost more; see each route. For any other pair of cities, <Link href="/routes/" className={link}>browse all routes</Link> or send us your trip.</p>
                </div>
            </section>

            {/* ================= WHAT THE FARE COVERS ================= */}
            <section aria-labelledby="fare" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="fare" className={`${h2} mb-3`}>What the Fare Covers</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Every trip is quoted before you book, for the whole vehicle. Once you accept, that is the price for the trip you described. It changes only if the trip itself changes, and we tell you before it does.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-3xl bg-white border border-[#0f2a22]/10 p-7">
                            <h3 className={`${h3} mb-4`}>Included</h3>
                            <ul className="space-y-2 text-stone-700">
                                <Tick>The vehicle, reserved for your group</Tick>
                                <Tick>The driver for the whole journey</Tick>
                                <Tick>Fuel, and road tolls where the route has them</Tick>
                                <Tick>Pickup and drop-off at the addresses in your quote</Tick>
                                <Tick>Normal stops for food, fuel and prayer</Tick>
                                <Tick>For airport pickups, timing to your flight</Tick>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-white border border-[#0f2a22]/10 p-7">
                            <h3 className={`${h3} mb-4`}>Quoted separately, only if you need it</h3>
                            <ul className="space-y-2 text-stone-700">
                                {['A detour or extra stop added after booking', 'Waiting beyond the allowance in your confirmation', 'A change of pickup or destination', 'Overnight stays and multi-day hire', 'Meals and hotel costs'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section aria-labelledby="vehicles" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className={`${h2} mb-3`}>Which Vehicle to Book</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Count people and suitcases together. The more seats are used, the less room there is for bags, and on a long trip a crowded car is felt for hours. Luggage figures assume large checked suitcases with most seats in use.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {VEHICLES.map((v) => (
                            <Link key={v.name} href={v.href} className="group rounded-3xl border border-[#0f2a22]/10 overflow-hidden hover:border-[#047857] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857]">
                                <div className="relative aspect-[16/10] bg-stone-100">
                                    <Image src={v.img} alt={`${v.name} for intercity trips in Saudi Arabia`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                                </div>
                                <div className="p-5">
                                    <p className="text-xs font-bold uppercase tracking-wide text-[#047857] mb-1">{v.range}</p>
                                    <h3 className="text-lg font-bold text-[#0f2a22]">{v.name}</h3>
                                    <p className="text-sm text-stone-600 flex gap-1.5 mt-1"><Luggage className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />{v.bags}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <p className="text-sm text-stone-600 mt-6">Bigger group? A Mercedes Sprinter or Toyota Coaster can be quoted on request, or two vehicles travelling together. Premium cars such as a Mercedes S-Class or Cadillac Escalade are also available on request. Child seats: ask when booking and we confirm availability for your date. <Link href="/fleet/" className={link}>See the full fleet</Link>.</p>
                </div>
            </section>

            {/* ================= TRIP TYPES ================= */}
            <section aria-labelledby="types" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="types" className={`${h2} mb-8`}>One Way, Return or Several Days</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { icon: Route, t: 'One way', d: 'The usual booking: from one address to another on one day. Quoted for the trip, including normal stops.' },
                            { icon: RefreshCw, t: 'Return', d: 'Coming back days later? That is a separate trip, booked with the first one if you like. If you want the driver to wait for you instead, the waiting time is quoted up front.' },
                            { icon: CalendarDays, t: 'Several days', d: 'A multi-city itinerary or a business trip with a car on standby. Send your plan; we quote the days, the daily hours and the driver’s accommodation where needed.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-white border border-[#0f2a22]/10 p-6">
                                <Icon className="w-6 h-6 text-[#047857] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#0f2a22] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= WHO ================= */}
            <section aria-labelledby="who" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className={`rounded-3xl bg-[#f4f6f3] p-7 ${prose}`}>
                        <Users className="w-7 h-7 text-[#047857]" aria-hidden="true" />
                        <h2 id="who" className="text-2xl font-extrabold text-[#0f2a22]">Families</h2>
                        <p className="text-base">Children, grandparents, prams and a lot of luggage are easier in one car than through stations and airports. Tell us children&apos;s ages and how often you would like to stop; on long trips, more breaks make for a better day.</p>
                    </div>
                    <div className={`rounded-3xl bg-[#f4f6f3] p-7 ${prose}`}>
                        <Car className="w-7 h-7 text-[#047857]" aria-hidden="true" />
                        <h3 className="text-2xl font-extrabold text-[#0f2a22]">Umrah pilgrims</h3>
                        <p className="text-base">Jeddah to Makkah, Makkah to Madinah and back, hotel to hotel. Include Ihram bags and Zamzam on the return in your luggage count. Questions about where to enter Ihram depend on your situation; check with your Umrah operator or a scholar. <Link href="/services/umrah-transport/" className={link}>Umrah transport</Link>.</p>
                    </div>
                    <div className={`rounded-3xl bg-[#f4f6f3] p-7 ${prose}`}>
                        <Briefcase className="w-7 h-7 text-[#047857]" aria-hidden="true" />
                        <h3 className="text-2xl font-extrabold text-[#0f2a22]">Business travel</h3>
                        <p className="text-base">Office to office between Riyadh, Dammam and Jeddah, or a team of colleagues in one vehicle. Give us the arrival deadline, not just the address, and we plan back from it. <Link href="/services/business/" className={link}>Business chauffeur</Link>.</p>
                    </div>
                </div>
            </section>

            {/* ================= CAR VS TRAIN VS BUS ================= */}
            <section aria-labelledby="compare" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="compare" className={`${h2} mb-3`}>Private Car, Train or Bus?</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Each is the right choice for someone. Compare the whole journey, from your door to your destination, and the total cost for everyone travelling.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="rounded-3xl bg-white border border-[#0f2a22]/10 p-7">
                            <TrainFront className="w-7 h-7 text-[#047857] mb-3" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>Train</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">The Haramain High-Speed Railway links Makkah, Jeddah (including the airport) and Madinah, and there is a rail line between Riyadh and Dammam. Fast and comfortable on those routes; you still need to get to and from the stations, and to check schedules and seats for your date.</p>
                        </div>
                        <div className="rounded-3xl bg-white border border-[#0f2a22]/10 p-7">
                            <Bus className="w-7 h-7 text-[#047857] mb-3" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>Bus</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">Usually the cheapest for one person. You travel on a fixed timetable from a bus station, with the operator&apos;s luggage rules, and arrange your own transport at both ends.</p>
                        </div>
                        <div className="rounded-3xl bg-[#0f2a22] text-white p-7">
                            <Car className="w-7 h-7 text-[#f2c879] mb-3" aria-hidden="true" />
                            <h3 className="text-xl font-bold mb-2">Private car</h3>
                            <p className="text-sm text-white/80 leading-relaxed">Door to door, at the time you choose, with everyone and everything in one vehicle. Usually costs more than a ticket for one person; for families and groups the single vehicle fare can compare well with several tickets plus taxis. It is not faster than the train on the routes the train serves.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= AIRPORTS + BOOKING ================= */}
            <section aria-labelledby="book" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start rounded-3xl bg-[#f4f6f3] p-8 mb-12">
                        <Plane className="w-8 h-8 text-[#047857]" aria-hidden="true" />
                        <div className="space-y-2 text-stone-700 leading-relaxed">
                            <h2 className="text-2xl font-extrabold text-[#0f2a22]">Starting at an airport</h2>
                            <p>Many intercity trips begin at an arrivals hall, most often Jeddah for Makkah and Madinah. Add your flight number when booking. We agree the meeting point with you, and your confirmation states the waiting allowance after landing. <Link href="/services/airport-transfers/" className={link}>Airport transfers</Link>.</p>
                        </div>
                    </div>
                    <h2 id="book" className={`${h2} mb-4`}>How Booking Works</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            ['Send your trip', 'Pickup and destination addresses, date and time.'],
                            ['Add people and bags', 'Adults, children and number of suitcases; vehicle preference if any.'],
                            ['Get the fare', 'We check a vehicle for your date and send the price and what it covers.'],
                            ['Confirm', 'Once you accept, the booking is confirmed and the driver’s details follow before the trip.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-[#f4f6f3] p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#047857] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#0f2a22] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <p className="text-sm text-stone-600 mb-6">An enquiry alone does not reserve a car. Book early for Ramadan, school holidays and long weekends. If your plans change, tell us as soon as you can; any effect on the fare follows the terms agreed with your booking.</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={primary}>Get a quote <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> Book via WhatsApp</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Taxi Service KSA · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a> (call or WhatsApp)</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#0f2a22]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0f2a22] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= REVIEWS + Q&A (lower priority) ================= */}
            <section aria-labelledby="reviews" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 id="reviews" className="text-2xl md:text-3xl font-extrabold text-[#0f2a22] mb-8">What Customers Say</h2>
                    <ReviewsDisplay location="Intercity" limit={6} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">
                        <div>
                            <h3 className={`${h3} mb-4`}>Share Your Experience</h3>
                            <ReviewForm locationName="Intercity" />
                        </div>
                        <div>
                            <h3 className={`${h3} mb-4`}>Ask a Question</h3>
                            <QuestionsDisplay location="Intercity" />
                            <div className="mt-6"><QuestionForm locationName="Intercity" /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= GUIDES + AUTHOR ================= */}
            <section aria-labelledby="guides" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    <div>
                        <h2 id="guides" className="text-2xl md:text-3xl font-extrabold text-[#0f2a22] mb-5">Related Services and Guides</h2>
                        <div className="flex flex-wrap gap-2">
                            {[
                                ['Airport transfers', '/services/airport-transfers/'],
                                ['Umrah transport', '/services/umrah-transport/'],
                                ['Business chauffeur', '/services/business/'],
                                ['Private driver by the hour', '/services/private-driver/'],
                                ['Our fleet', '/fleet/'],
                                ['All routes', '/routes/'],
                                ['Jeddah to Makkah fare guide', '/blog/jeddah-airport-makkah-taxi-fare-2026/'],
                                ['Private taxi fares in Madinah', '/blog/private-taxi-services-fares-madinah/'],
                                ['Riyadh Airport to the city', '/blog/how-to-get-from-riyadh-airport-to-city/'],
                            ].map(([l, h]) => (
                                <Link key={h} href={h} className="rounded-full border border-[#0f2a22]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#0f2a22] hover:border-[#047857] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857]">{l}</Link>
                            ))}
                        </div>
                    </div>
                    <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-emerald-50" />
                </div>
            </section>
        </div>
    );
}
