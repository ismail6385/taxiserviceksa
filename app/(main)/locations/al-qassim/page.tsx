import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, Info, MapPin, Plane, Briefcase, Users, Clock, Route } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RelatedLocations from '@/components/seo/RelatedLocations';
import ApprovedDriversForLocation from '@/components/ApprovedDriversForLocation';

const PAGE_URL = 'https://taxiserviceksa.com/locations/al-qassim/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const ELQ = 'Prince Naif bin Abdulaziz International Airport (ELQ)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need a private car in Al-Qassim. Pickup (Buraidah / Unaizah / Ar-Rass / other, or flight number), destination, date and time, passengers and luggage: ')}`;

// Buraidah–Riyadh checked against route calculators (about 365–380 km, around 3.5–3.75 hours).
const RIYADH_KM = 'About 365–380 km';
const RIYADH_TIME = 'Around 3.5–4 hours';

const CITIES = [
    { name: 'Buraidah', href: '/locations/buraidah/', text: 'The regional capital and the usual starting point. Hotels, offices and homes, and the closest city to the airport.' },
    { name: 'Unaizah', href: '/locations/unaizah/', text: 'The second city, south of Buraidah. Send the full address; many districts sit well outside the centre.' },
    { name: 'Ar-Rass', href: '/locations/al-rass/', text: 'Further south-west, and a little closer to Madinah. A common pickup for long trips west.' },
    { name: 'Al-Bukayriyah', href: '/locations/al-bukayriyah/', text: 'West of Buraidah. For farms and homes outside town, a map pin saves time.' },
];

const TITLE = 'Al-Qassim Taxi Service | Private Transfers & Chauffeur';
const DESCRIPTION = 'Pre-booked private cars from Buraidah, Unaizah, Ar-Rass and all of Al-Qassim: Qassim Airport (ELQ) pickups, Riyadh, Madinah and other cities, and drivers by the hour. Book on WhatsApp.';

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private taxi and car transfers in Al-Qassim' }],
    },
};

const faqs = [
    { q: 'How do I book a car in Al-Qassim?', a: 'Send your pickup address (or flight number), destination, date, time, passengers and luggage on WhatsApp (+966 57 580 6733). We confirm the vehicle and the fare; the booking is final once you accept.' },
    { q: 'Which towns do you cover?', a: 'Buraidah, Unaizah, Ar-Rass, Al-Bukayriyah and the rest of the Al-Qassim region. Send the exact address, especially for farms or homes outside town.' },
    { q: 'How far is Buraidah from Riyadh?', a: `${RIYADH_KM} by road, ${RIYADH_TIME.toLowerCase()} of driving depending on your addresses and stops.` },
    { q: 'How far is Al-Qassim from Madinah?', a: 'Roughly 450 km or more from Buraidah, a long half-day on the road. Ar-Rass is a little closer. Send your addresses and we give you an estimate with the quote.' },
    { q: 'Do you pick up at Qassim Airport?', a: `Yes, at ${ELQ}. We track your flight, wait 60 minutes after a domestic landing or 90 after an international one, and delays of up to 3 hours cost nothing extra.` },
    { q: 'How much is a taxi from Al-Qassim to Riyadh or Madinah?', a: 'It depends on the exact pickup and drop-off and the vehicle. We quote the whole vehicle before you book, and the fare stays the same unless the trip changes.' },
    { q: 'Do you do short local rides?', a: 'No. We run pre-booked trips: airport transfers, intercity journeys and drivers by the hour or day. For a quick ride across town, a local taxi or ride-hailing app is better.' },
    { q: 'Which vehicles are available?', a: 'A Toyota Camry, Toyota RAV4 Hybrid, Hyundai Staria or GMC Yukon XL, and a Toyota Hiace for groups on request. Tell us your passengers and bags and we suggest one.' },
    { q: 'Can I hire a driver for a whole day?', a: 'Yes. From 3 hours up to a full 10-hour day, or weekly and monthly with the same driver. See private driver hire for details.' },
    { q: 'Are pickups available at night?', a: 'Yes, 24 hours a day. For very early or late trips, book ahead.' },
    { q: 'Can I book a return trip?', a: 'Yes. Send both dates. A return days later is a separate trip; if you want the driver to wait, the waiting is quoted in advance.' },
    { q: 'Is my booking confirmed when I send a message?', a: 'No. It is confirmed once we have agreed the vehicle, fare and pickup with you.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Pre-booked private transfers in Al-Qassim',
            url: PAGE_URL,
            serviceType: 'Private airport and intercity transfer',
            description: 'Pre-booked private cars from Buraidah, Unaizah, Ar-Rass and the Al-Qassim region to Qassim Airport, Riyadh, Madinah and other cities.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: [{ '@type': 'AdministrativeArea', name: 'Al-Qassim' }, ...CITIES.map((c) => ({ '@type': 'City', name: c.name }))],
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://taxiserviceksa.com/locations/' },
                { '@type': 'ListItem', position: 3, name: 'Al-Qassim', item: PAGE_URL },
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
const link = 'font-semibold text-[#15803d] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#1a2e1f]';
const h3 = 'text-xl font-bold text-[#1a2e1f]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#15803d] px-6 py-3.5 font-bold text-white hover:bg-[#166534] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15803d] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#1a2e1f]/20 px-6 py-3.5 font-bold text-[#1a2e1f] hover:border-[#15803d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15803d]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#15803d] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function AlQassimLocationPage() {
    return (
        <div className="al-qassim bg-[#f4f6f2]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#1a2e1f]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#4d6b2f_0%,_#1a2e1f_62%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#bef264] mb-4`}>Buraidah · Unaizah · Ar-Rass · Al-Bukayriyah</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Private Taxi, Car Transfer and Chauffeur Service in Al-Qassim</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            Pre-booked private cars across the Qassim region: pickups at Qassim Airport, the drive to Riyadh or Madinah, and drivers by the hour for a busy day in Buraidah. Fare agreed before you travel.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#1a2e1f] hover:bg-[#f4f6f2]">
                                <a href={QUOTE_HREF}>Get a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {['Qassim Airport pickups', '24/7', 'English & Arabic drivers', 'Fare per vehicle'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#bef264] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Al-Qassim transfer"
                            cta="Send my request"
                            fromPlaceholder="Address in Buraidah, Unaizah, Ar-Rass... or the airport"
                            toPlaceholder="Destination: city, hotel or airport"
                            fromChips={['Buraidah', 'Unaizah', 'Ar-Rass', ELQ]}
                            toChips={['Riyadh', 'Madinah', 'Buraidah hotel', ELQ]}
                            showFlight="auto"
                            returnNote="Return trip also needed - date to confirm."
                            buttonClass="bg-[#15803d] hover:bg-[#166534] focus-visible:ring-[#15803d]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section aria-labelledby="intro" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    <div className={prose}>
                        <h2 id="intro" className={`${h2} mb-2`}>Getting Around Qassim, and Out of It</h2>
                        <p>
                            Al-Qassim sits in the middle of the Kingdom, in farming country between Riyadh and Madinah. Its towns are spread out: Buraidah, the regional capital, then Unaizah to the south, Ar-Rass to the south-west and Al-Bukayriyah to the west, with farms and villages in between. Riyadh is well over three hours away by road, Madinah further still.
                        </p>
                        <p>
                            That shapes what people book. Many of our Qassim trips start at the airport, carry on to a family home in one of the towns, or head down the highway to Riyadh. Others are families driving to Madinah, students and workers travelling between cities, or a visitor who needs a car for a full day of appointments.
                        </p>
                        <p>
                            All of it is pre-booked. You send the details, we confirm the car and the price, and a driver comes to your door. We do not run shared taxis or quick rides around town.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-[#1a2e1f] text-white p-7">
                        <h3 className="text-xl font-bold mb-4">Typical trips from Buraidah</h3>
                        <dl className="space-y-3 text-sm">
                            {[
                                ['To Riyadh', `${RIYADH_KM} · ${RIYADH_TIME}`],
                                ['To Madinah', 'Roughly 450 km or more'],
                                ['To Qassim Airport (ELQ)', 'Just outside Buraidah'],
                                ['Within the region', 'Driver by the hour or day'],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-white/70">{k}</dt>
                                    <dd className="font-semibold text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-xs text-white/50 mt-4">Estimates; your exact addresses, stops and traffic change them.</p>
                    </aside>
                </div>
            </section>

            {/* ================= CITIES ================= */}
            <section aria-labelledby="cities" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="cities" className={`${h2} mb-3`}>Towns We Pick Up From</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">Each town has its own page with local details. Anywhere else in the region, send a location pin.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {CITIES.map((c) => (
                            <Link key={c.name} href={c.href} className="group rounded-2xl bg-white border border-[#1a2e1f]/10 p-6 hover:border-[#15803d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15803d]">
                                <MapPin className="w-5 h-5 text-[#15803d] mb-2" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#1a2e1f] mb-1">{c.name}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed mb-3">{c.text}</p>
                                <span className="inline-flex items-center gap-1 text-sm font-bold text-[#15803d]">{c.name} transfers <Arrow /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= ROUTES ================= */}
            <section aria-labelledby="routes" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="routes" className={`${h2} mb-8`}>Long-Distance Trips from Al-Qassim</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <article className="rounded-3xl bg-[#1a2e1f] text-white p-7">
                            <Route className="w-6 h-6 text-[#bef264] mb-2" aria-hidden="true" />
                            <h3 className="text-xl font-bold mb-1">Al-Qassim to Riyadh</h3>
                            <p className="text-sm text-white/70 mb-3">{RIYADH_KM} from Buraidah · {RIYADH_TIME}</p>
                            <p className="text-sm text-white/85 leading-relaxed">The busiest trip out of the region, south-east on the main highway to the capital. Common for meetings, family, hospital appointments and flights from Riyadh. Give us your Riyadh address and any arrival time, and we set the pickup with a margin for traffic entering the city.</p>
                        </article>
                        <article className="rounded-3xl bg-[#f4f6f2] p-7">
                            <Route className="w-6 h-6 text-[#15803d] mb-2" aria-hidden="true" />
                            <h3 className={`${h3} mb-1`}>Al-Qassim to Madinah</h3>
                            <p className="text-sm text-stone-500 mb-3">Roughly 450 km or more · a long half-day</p>
                            <p className="text-sm text-stone-700 leading-relaxed">West across the desert to Madinah, often for a visit to the Prophet&apos;s Mosque or to start Umrah travel. Send your Madinah hotel name and plan a stop on the way. If you are going on to Makkah, ask us to quote both legs together.</p>
                        </article>
                        <article className="rounded-3xl bg-[#f4f6f2] p-7">
                            <Route className="w-6 h-6 text-[#15803d] mb-2" aria-hidden="true" />
                            <h3 className={`${h3} mb-1`}>Eastern Province and Jeddah</h3>
                            <p className="text-sm text-stone-700 leading-relaxed">Dammam, Al Khobar and Jeddah are long journeys from Qassim, usually most of a day. We quote them on request; for trips that long, compare with flying from Qassim Airport, especially if you are travelling alone.</p>
                        </article>
                        <article className="rounded-3xl bg-[#f4f6f2] p-7">
                            <Users className="w-6 h-6 text-[#15803d] mb-2" aria-hidden="true" />
                            <h3 className={`${h3} mb-1`}>One way or return</h3>
                            <p className="text-sm text-stone-700 leading-relaxed">A return days later is a separate trip, booked with the first if you like. If you want the driver to wait in Riyadh or Madinah for a few hours, the waiting is quoted up front and never assumed to be in a one-way fare. <Link href="/services/intercity/" className={link}>Private intercity transfers in Saudi Arabia</Link>.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* ================= AIRPORT ================= */}
            <section aria-labelledby="airport" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div className={prose}>
                        <Plane className="w-7 h-7 text-[#15803d]" aria-hidden="true" />
                        <h2 id="airport" className={`${h2} mb-2`}>Qassim Airport Transfers</h2>
                        <p>
                            {ELQ} serves the whole region and sits just outside Buraidah. We collect arriving passengers and take them anywhere in Qassim, or straight on to another city, and we drive departing passengers to their flight.
                        </p>
                        <p>
                            For arrivals, send your flight number. We track it, so the driver is there for the real landing time; the driver waits 60 minutes after a domestic landing or 90 after an international one, and delays of up to 3 hours cost nothing extra. The meeting point and the driver&apos;s phone number come with your confirmation.
                        </p>
                        <p>
                            For departures, send the flight time and your pickup address; we suggest a time that leaves room for check-in. Flying from Riyadh instead? We drive that too. <Link href="/services/airport-transfers/" className={link}>Pre-booked airport transfers</Link>.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-white border border-[#1a2e1f]/10 p-7 space-y-3 text-sm text-stone-700">
                        <h3 className={h3}>Airport pickup includes</h3>
                        <ul className="space-y-2">
                            <Tick>Flight tracking</Tick>
                            <Tick>60 min free waiting (domestic), 90 min (international)</Tick>
                            <Tick>Delays up to 3 hours at no extra charge</Tick>
                            <Tick>Meeting point and driver&apos;s number in advance</Tick>
                        </ul>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={`${primary} w-full mt-3`}><WhatsAppIcon className="w-4 h-4 fill-current" /> Book an airport pickup</a>
                    </aside>
                </div>
            </section>

            {/* ================= VEHICLES + DRIVER ================= */}
            <section aria-labelledby="vehicles" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="rounded-3xl bg-[#f4f6f2] p-7">
                        <h2 id="vehicles" className="text-2xl md:text-3xl font-extrabold text-[#1a2e1f] mb-5">Vehicles</h2>
                        <ul className="space-y-3 text-sm text-stone-700">
                            {[
                                ['Toyota Camry', 'Up to 3 people, about 2 large suitcases'],
                                ['Toyota RAV4 Hybrid 2025', 'Up to 4 people, about 3 suitcases'],
                                ['Hyundai Staria VIP', 'Up to 7 people, about 4 large suitcases'],
                                ['GMC Yukon XL', 'Up to 7 people, about 5 large suitcases'],
                                ['Toyota Hiace', 'Groups up to 11, on request'],
                            ].map(([k, v]) => (
                                <li key={k} className="flex justify-between gap-4 border-b border-[#1a2e1f]/10 pb-3 last:border-0"><span className="font-semibold text-[#1a2e1f]">{k}</span><span className="text-right">{v}</span></li>
                            ))}
                        </ul>
                        <p className="text-sm text-stone-600 mt-5">On a three-hour-plus drive, a car that is full to the roof gets tiring; count people and bags together. Child seats on request, confirmed for your date. <Link href="/fleet/" className={link}>See the fleet</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-[#f4f6f2] p-7 space-y-4">
                        <Briefcase className="w-7 h-7 text-[#15803d]" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2e1f]">A Driver for the Day</h2>
                        <p className="text-sm text-stone-700 leading-relaxed">Meetings in Buraidah and Unaizah on the same day, a round of hospital appointments, or relatives to visit across the region. Book a car and driver by the hour (from 3 hours), a full 10-hour day, or weekly and monthly with the same driver; fuel in town and unlimited stops are included.</p>
                        <Link href="/services/private-driver/" className={link}>Private driver and chauffeur service</Link>
                        <div className="pt-4 border-t border-[#1a2e1f]/10">
                            <h3 className="font-bold text-[#1a2e1f] mb-2">How the fare works</h3>
                            <ul className="space-y-2 text-sm text-stone-700">
                                <Tick>Quoted for the whole vehicle before you book</Tick>
                                <Tick>Includes the driver, fuel and the drive to your quoted address</Tick>
                                {['Extra stops, waiting or a return leg are agreed in advance'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= BOOKING ================= */}
            <section aria-labelledby="book" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-6`}>How to Book</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            ['Send the trip', 'Town and address (a map pin helps), destination, date and time; flight number for airport trips.'],
                            ['Add people and bags', 'Adults, children and suitcases, and any arrival deadline.'],
                            ['Get the fare', 'We confirm the vehicle and the price for the whole trip.'],
                            ['Confirm', 'Once you accept, the booking is final and the driver’s details follow.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-white border border-[#1a2e1f]/10 p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#15803d] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#1a2e1f] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={primary}>Get a quote <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5 flex gap-2"><Clock className="w-4 h-4 mt-0.5 text-[#15803d] shrink-0" aria-hidden="true" />Pickups run 24 hours a day. We do not offer shared taxis or short rides around town.</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#1a2e1f]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#1a2e1f] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="flex flex-wrap gap-2 py-8">
                    {[
                        ['Private intercity transfers in Saudi Arabia', '/services/intercity/'],
                        ['Pre-booked airport transfers', '/services/airport-transfers/'],
                        ['Private driver and chauffeur service', '/services/private-driver/'],
                        ['Buraidah taxi', '/locations/buraidah/'],
                        ['Unaizah taxi transfer', '/locations/unaizah/'],
                        ['Ar-Rass taxi', '/locations/al-rass/'],
                        ['Taxi in Riyadh', '/locations/riyadh/'],
                        ['Taxi in Madinah', '/locations/madinah/'],
                    ].map(([l, h]) => (
                        <Link key={h} href={h} className="rounded-full border border-[#1a2e1f]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#1a2e1f] hover:border-[#15803d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15803d]">{l}</Link>
                    ))}
                </div>
                <p className="text-xs text-stone-500 mb-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Distances and times are planning estimates; the quote for your trip is what counts.</p>
                <ApprovedDriversForLocation location="al-qassim" />
                <RelatedLocations currentCity="Al-Qassim" />
            </div>
        </div>
    );
}
