import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, PlaneLanding, PlaneTakeoff, Luggage, Hotel, Landmark, Train, Route, Mountain, MapPin, Moon, Info, FileText, Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import AirportQuoteCard from '@/components/alula/AirportQuoteCard';
import AlUlaReviews from '@/components/alula/AlUlaReviews';
import Reveal from '@/components/alula/Reveal';
import VehicleSelector from '@/components/madinah/VehicleSelector';
import BookingChecklist from '@/components/madinah/BookingChecklist';

const PAGE_URL = 'https://taxiserviceksa.com/locations/madinah/madinah-airport/';
const MED = 'Prince Mohammad bin Abdulaziz International Airport (MED)';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for a Madinah Airport (MED) transfer. Flight number and hotel: ')}`;

export const metadata: Metadata = {
    title: 'Madinah Airport Taxi & Private Transfer | MED Airport',
    description:
        'Book a private transfer from Madinah Airport (MED) to your hotel, the Central Area, Haramain Station or onward to Makkah and AlUla - or a hotel pickup for your flight out. Request your quote.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Madinah Airport Taxi & Private Transfer | MED',
        description: 'Private pre-booked transfers between Madinah Airport (MED), your hotel and onward destinations.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/madinah-airport-taxi.png', width: 1024, height: 1024, alt: 'Private car at Madinah Airport' }],
    },
};

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const destinations = [
    { icon: Hotel, title: 'Madinah hotels', text: 'Straight from arrivals to your hotel, wherever it is in the city.', href: '#hotels' },
    { icon: MapPin, title: 'Central Area', text: 'Markaziyah hotels around Al-Masjid an-Nabawi.', href: '/locations/madinah/central-area/' },
    { icon: Landmark, title: 'Near Masjid an-Nabawi', text: 'Drop-off at the most practical point for your hotel.', href: '#central' },
    { icon: Train, title: 'Haramain Station', text: 'Airport to the Madinah train station for your onward train.', href: '/locations/madinah/train-station/' },
    { icon: Route, title: 'Makkah', text: 'Land in Madinah, continue by road to your Makkah hotel.', href: '/routes/madinah-makkah/' },
    { icon: Mountain, title: 'AlUla', text: 'An onward private transfer north to AlUla.', href: '/routes/madinah-alula/' },
];

const arrivalSteps = [
    { title: 'Land at MED', text: 'Your flight arrives at Prince Mohammad bin Abdulaziz International Airport.' },
    { title: 'Collect your luggage', text: 'Allow time for immigration on international flights, baggage and any Zamzam or extra bags.' },
    { title: 'Meet your driver', text: 'Follow the meeting instructions sent with your confirmed booking.' },
    { title: 'On to your destination', text: 'Directly to your hotel or onward destination - no shared stops.' },
];

const faqs = [
    { q: 'Where is Madinah Airport?', a: 'Prince Mohammad bin Abdulaziz International Airport (MED) is outside central Madinah. Travel time to your hotel depends on its location and traffic.' },
    { q: 'How do I book a private transfer from MED?', a: 'Use the quote card at the top of this page or WhatsApp us with your flight number, arrival time, hotel, passengers and bags.' },
    { q: 'Can you pick me up at night?', a: 'Late and early pickups can be arranged around your flight, subject to driver availability - so book as early as you can.' },
    { q: 'Can I give you my flight number?', a: 'Yes, and please do. It helps us identify your arrival details and plan the pickup.' },
    { q: 'What happens if my flight is delayed?', a: 'Message us on WhatsApp with the new arrival time and we rearrange the pickup. Any waiting terms are confirmed with your booking.' },
    { q: 'Can you take me to a hotel near Masjid an-Nabawi?', a: 'Yes. We confirm the most practical drop-off point for your hotel, as access in the central area depends on current traffic controls.' },
    { q: 'Can you take my family and all our luggage?', a: 'Yes, if you tell us the number of passengers and suitcases. A Staria, Yukon or Hiace suits most families.' },
    { q: 'Can I book a transfer back to the airport?', a: 'Yes. Choose "To the airport" in the quote card and give us your flight time and hotel.' },
    { q: 'Can I go from Madinah Airport straight to Makkah?', a: 'Yes, by private car from arrivals to your Makkah hotel.' },
    { q: 'Can I go from Madinah Airport to AlUla?', a: 'Yes, as an onward private transfer. See our AlUla pages for transport once you arrive.' },
    { q: 'How far ahead should I book?', a: 'As soon as your flight is confirmed, especially in Ramadan and peak Umrah season.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Madinah Airport Private Transfer',
            url: PAGE_URL,
            serviceType: 'Airport transfer',
            description:
                'Pre-booked private transfers between Prince Mohammad bin Abdulaziz International Airport (MED) and Madinah hotels, the Central Area, Haramain station, Makkah and AlUla.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: [
                { '@type': 'Airport', name: 'Prince Mohammad bin Abdulaziz International Airport', iataCode: 'MED' },
                { '@type': 'City', name: 'Madinah' },
            ],
            image: 'https://taxiserviceksa.com/madinah-airport-taxi.png',
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function MadinahAirportPage() {
    return (
        <div className="madinah-page bg-[#f7f6f2]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0b1f1a]">
                <Image
                    src="/madinah-airport-taxi.png"
                    alt="Private car waiting at the arrivals area of Madinah Airport"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center opacity-45 alula-drift -z-10"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1f1a] via-[#0b1f1a]/85 to-[#0b1f1a]/30" aria-hidden="true" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        {/* MED -> city route line */}
                        <div className="flex items-center gap-3 mb-6 text-sm font-semibold" aria-hidden="true">
                            <span className="rounded-md bg-amber-400 text-[#0b1f1a] px-2.5 py-1 font-black tracking-wider">MED</span>
                            <svg viewBox="0 0 160 12" className="w-28 sm:w-40 h-3">
                                <path d="M2 6 H 158" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" fill="none" pathLength={1} className="route-draw" />
                            </svg>
                            <span className="text-emerald-50/80">Your Madinah hotel</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight mb-5">Madinah Airport Taxi &amp; Private Transfer</h1>
                        <p className="text-lg text-emerald-50/85 leading-relaxed mb-8 max-w-xl">
                            Pre-book a private transfer from Prince Mohammad bin Abdulaziz International Airport (MED) to your Madinah hotel, the Central Area or an onward destination - and back again for your flight home.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-amber-400 text-[#0b1f1a] hover:bg-amber-300">
                                <a href={QUOTE_HREF}>
                                    Get a Transfer Quote
                                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                </a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer">
                                    <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Booking
                                </a>
                            </Button>
                        </div>
                        <p className="mt-5 text-sm text-emerald-50/70">Private pre-booked transfers · Arrivals and departures · Vehicle matched to your group</p>
                    </div>
                    <div id="quote" className="scroll-mt-40">
                        <AirportQuoteCard
                            airport={MED}
                            suggestions={['Hotel near Masjid an-Nabawi', 'Central Area hotel', 'Madinah Haramain Station', 'Makkah hotel', 'AlUla']}
                            buttonClass="bg-emerald-800 text-white hover:bg-emerald-900 focus-visible:ring-emerald-700"
                            flightHelp="Adding your flight number helps us identify your arrival details."
                        />
                    </div>
                </div>
            </section>

            {/* ================= WHERE AFTER MED ================= */}
            <section aria-labelledby="where" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="where" className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">Where Are You Going After MED?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mb-10">Most arrivals head to a hotel in the city. Some go straight on to the train, to Makkah or north to AlUla.</p>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {destinations.map((d, i) => {
                            const cls = 'group h-full flex flex-col rounded-2xl bg-white border border-stone-200 p-5 sm:p-6 transition hover:-translate-y-0.5 hover:border-emerald-700 hover:shadow-md motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700';
                            const inner = (
                                <>
                                    <div className="flex items-center gap-2 text-xs font-bold text-stone-500 mb-3">
                                        <span className="rounded bg-stone-100 px-1.5 py-0.5 text-gray-800">MED</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-amber-600 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                        <d.icon className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                                    </div>
                                    <h3 className="mb-1">{d.title}</h3>
                                    <p className="text-sm text-gray-600">{d.text}</p>
                                </>
                            );
                            return (
                                <Reveal key={d.title} delay={(i % 3) * 70} className="h-full">
                                    {d.href.startsWith('#') ? <a href={d.href} className={cls}>{inner}</a> : <Link href={d.href} className={cls}>{inner}</Link>}
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= ARRIVAL + HOW PICKUP WORKS ================= */}
            <section aria-labelledby="arrival" className="bg-[#0b1f1a] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="arrival" className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
                        <PlaneLanding className="w-9 h-9 text-amber-400" aria-hidden="true" /> Your Arrival in Madinah
                    </h2>
                    <ol className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                        {arrivalSteps.map((s, i) => (
                            <li key={s.title}>
                                <Reveal delay={i * 110} className="h-full">
                                    <div className="h-full border-t-2 border-amber-400/70 pt-5">
                                        <span className="block text-4xl font-black text-amber-400/80 mb-2" aria-hidden="true">0{i + 1}</span>
                                        <h3 className="mb-2">{s.title}</h3>
                                        <p className="text-sm text-emerald-50/65 leading-relaxed">{s.text}</p>
                                    </div>
                                </Reveal>
                            </li>
                        ))}
                    </ol>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">How Your Airport Pickup Works</h2>
                        <ol className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0 text-sm">
                            {['Booking confirmed', 'Flight details recorded', 'Meeting instructions sent', 'Driver meets you', 'Private transfer'].map((t, i, arr) => (
                                <li key={t} className="flex md:flex-1 items-center gap-3">
                                    <span className={`flex-1 rounded-xl px-4 py-3 text-center font-semibold ${i === arr.length - 1 ? 'bg-amber-400 text-[#0b1f1a]' : 'bg-white/10'}`}>{t}</span>
                                    {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 rotate-90 md:rotate-0 md:mx-2" aria-hidden="true" />}
                                </li>
                            ))}
                        </ol>
                        <p className="mt-8 text-sm text-emerald-50/65 flex gap-2 items-start max-w-3xl">
                            <Info className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                            Where you meet your driver is given in your booking confirmation rather than fixed on this page, because arrangements at the terminal can change. If your flight time changes, message us on WhatsApp so the pickup can be moved.
                        </p>
                        <div className="mt-8">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold bg-amber-400 text-[#0b1f1a] hover:bg-amber-300 whitespace-normal text-center">
                                <a href={QUOTE_HREF}>Book Madinah Airport Transfer <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= HOTEL + CENTRAL AREA ================= */}
            <section id="hotels" aria-labelledby="hotels-title" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-40">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="rounded-3xl bg-white border border-stone-200 p-8 md:p-10">
                        <Hotel className="w-8 h-8 text-emerald-700 mb-4" aria-hidden="true" />
                        <h2 id="hotels-title" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">From Madinah Airport to Your Hotel</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            After a long flight, the only thing most people want is to get to the hotel with everyone and everything. A private car takes you from arrivals to your hotel door, with the luggage loaded once.
                        </p>
                        <ul className="space-y-3 text-gray-700">
                            {['Room for family luggage and Zamzam', 'Late-night arrivals and early check-outs', 'Hotels in the Central Area and across the city', 'One vehicle for the whole group'].map((t) => (
                                <li key={t} className="flex gap-3"><Check className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />{t}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-gray-500 mt-6">Journey time depends on your hotel and traffic; we confirm it with your quote.</p>
                    </div>
                    <div id="central" className="relative isolate overflow-hidden rounded-3xl p-8 md:p-10 text-white scroll-mt-40">
                        <Image src="/madinah-central-area-taxi.png" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="-z-10 object-cover" aria-hidden="true" />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b1f1a] via-[#0b1f1a]/85 to-[#0b1f1a]/50" aria-hidden="true" />
                        <Landmark className="w-8 h-8 text-amber-400 mb-4" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Going to a Hotel Near Masjid an-Nabawi?</h2>
                        <p className="text-emerald-50/85 leading-relaxed mb-4">
                            Many visitors stay in the Central Area (Markaziyah) around the Prophet&apos;s Mosque. Vehicle access close to the mosque depends on the traffic controls in place at the time, and these can change, especially at busy times.
                        </p>
                        <p className="text-emerald-50/85 leading-relaxed mb-6">
                            Give us your hotel name and we confirm the most practical drop-off point, so you know where you will get out with your bags. The same applies to your pickup for the flight home.
                        </p>
                        <Link href="/locations/madinah/central-area/" className="group inline-flex items-center gap-2 font-bold text-amber-300">
                            Central Area transfers <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ================= ONWARD ================= */}
            <section aria-labelledby="onward" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="onward" className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Not Staying in Madinah First?</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
                        <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-white border border-amber-200 p-8">
                            <Route className="w-8 h-8 text-amber-700 mb-4" aria-hidden="true" />
                            <h3 className="mb-3">From Madinah Airport to Makkah</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Some visitors land at MED and go straight on to Makkah. A private car takes you from arrivals to your Makkah hotel with the luggage in the boot the whole way, and stops when your family needs them. If you plan to stop on the way - for example at the Miqat - tell us when booking so it is included in the plan.
                            </p>
                            <div className="flex flex-wrap gap-4 items-center">
                                <Button asChild className="h-auto py-3 px-6 rounded-xl font-bold bg-gray-900 text-white hover:bg-gray-800 whitespace-normal text-center">
                                    <a href={QUOTE_HREF}>Request Airport → Makkah Quote</a>
                                </Button>
                                <Link href="/routes/madinah-makkah/" className="text-sm font-semibold text-amber-800 hover:underline">Madinah to Makkah route</Link>
                            </div>
                        </div>
                        <div className="grid grid-rows-2 gap-6">
                            <div className="rounded-3xl border border-stone-200 p-7">
                                <h3 className="mb-2 flex items-center gap-2"><Mountain className="w-5 h-5 text-emerald-700" aria-hidden="true" /> From Madinah Airport to AlUla</h3>
                                <p className="text-sm text-gray-600 mb-3">An onward private transfer north for travellers continuing their Saudi trip.</p>
                                <div className="flex flex-wrap gap-4 text-sm font-semibold">
                                    <Link href="/routes/madinah-alula/" className="text-emerald-800 hover:underline">Madinah to AlUla</Link>
                                    <Link href="/locations/alula/" className="text-emerald-800 hover:underline">Getting around AlUla</Link>
                                </div>
                            </div>
                            <div className="rounded-3xl border border-stone-200 p-7">
                                <h3 className="mb-2 flex items-center gap-2"><Train className="w-5 h-5 text-emerald-700" aria-hidden="true" /> From Madinah Airport to Haramain Station</h3>
                                <p className="text-sm text-gray-600 mb-3">Catching the Haramain train on to Makkah or Jeddah? We take you from arrivals to the Madinah station.</p>
                                <Link href="/locations/madinah/train-station/" className="text-sm font-semibold text-emerald-800 hover:underline">Station transfers</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FAMILY & VEHICLE SELECTOR ================= */}
            <section aria-labelledby="family" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="family" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Travelling With Family or Extra Luggage?</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mb-10">
                        Umrah trips often come home heavier than they arrived. Choose the vehicle by suitcases as well as people - four adults fit a sedan, but four adults with four large cases usually do not.
                    </p>
                    <VehicleSelector />
                    <p className="mt-6 text-sm text-gray-600">
                        See every vehicle in <Link href="/fleet/" className="text-emerald-800 font-semibold hover:underline">our fleet</Link>. Child seats can be requested in the booking form, subject to availability.
                    </p>
                </div>
            </section>

            {/* ================= DEPARTURE + CHECKLIST ================= */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div>
                        <PlaneTakeoff className="w-9 h-9 text-emerald-700 mb-4" aria-hidden="true" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Need a Ride Back to Madinah Airport?</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Leaving is often harder to arrange than arriving: check-out time, a full car of luggage and an early flight. Choose <strong>To the airport</strong> in the quote card and we collect you from your hotel.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Your pickup time is planned around your flight, where your hotel is and your airline&apos;s check-in requirements. International departures usually need more time than domestic ones.
                        </p>
                        <ul className="space-y-2 text-gray-700 mb-8">
                            {['Early-morning flights', 'Families and large luggage', 'International departures', 'Check-outs from Central Area hotels'].map((t) => (
                                <li key={t} className="flex gap-3"><Check className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />{t}</li>
                            ))}
                        </ul>
                        <div className="rounded-2xl bg-[#0b1f1a] text-white p-6">
                            <h3 className="mb-2 flex items-center gap-2"><Moon className="w-5 h-5 text-amber-400" aria-hidden="true" /> Flying In or Out Outside Normal Hours?</h3>
                            <p className="text-sm text-emerald-50/75 leading-relaxed">
                                Flight times at MED vary, and some land late at night or leave very early. Transfers can be arranged around your flight schedule, subject to vehicle and driver availability, so book as soon as your flight is confirmed.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Before You Book</h2>
                        <BookingChecklist />
                    </div>
                </div>
            </section>

            {/* ================= ROUTE MAP + COMPARISON ================= */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <figure className="rounded-3xl bg-[#0b1f1a] text-white p-7 md:p-9">
                        <figcaption className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-6">How MED connects (schematic, not to scale)</figcaption>
                        <svg viewBox="0 0 420 340" className="w-full h-auto" role="img" aria-label="MED airport connects to the Central Area and your hotel, then onward to Makkah, AlUla or the Haramain station">
                            <g fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
                                <path d="M210 48 V 128" pathLength={1} className="route-draw" />
                                <path d="M210 168 V 208" pathLength={1} className="route-draw" />
                                <path d="M210 248 C 210 280, 80 270, 70 300" pathLength={1} className="route-draw" strokeOpacity="0.7" />
                                <path d="M210 248 V 300" pathLength={1} className="route-draw" strokeOpacity="0.7" />
                                <path d="M210 248 C 210 280, 340 270, 350 300" pathLength={1} className="route-draw" strokeOpacity="0.7" />
                            </g>
                            <g fontFamily="inherit" textAnchor="middle">
                                <rect x="165" y="12" width="90" height="36" rx="8" fill="#fbbf24" />
                                <text x="210" y="36" fontSize="16" fontWeight="800" fill="#0b1f1a">MED</text>
                                <rect x="120" y="128" width="180" height="40" rx="8" fill="#ffffff" fillOpacity="0.1" stroke="#ffffff" strokeOpacity="0.2" />
                                <text x="210" y="153" fontSize="14" fill="#fff">Madinah Central Area</text>
                                <rect x="100" y="208" width="220" height="40" rx="8" fill="#ffffff" fillOpacity="0.1" stroke="#ffffff" strokeOpacity="0.2" />
                                <text x="210" y="233" fontSize="14" fill="#fff">Hotel / Masjid an-Nabawi area</text>
                                <text x="70" y="322" fontSize="13" fill="#d1fae5">Makkah</text>
                                <text x="210" y="322" fontSize="13" fill="#d1fae5">Haramain Station</text>
                                <text x="350" y="322" fontSize="13" fill="#d1fae5">AlUla</text>
                            </g>
                        </svg>
                    </figure>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pre-Booked Transfer or Airport Taxi?</h2>
                        <p className="text-gray-600 mb-6">Both work. The difference is when things get decided.</p>
                        <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
                            <table className="w-full text-sm">
                                <thead className="bg-stone-50 text-left">
                                    <tr>
                                        <th scope="col" className="px-4 py-3 font-semibold text-gray-900"></th>
                                        <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Pre-booked transfer</th>
                                        <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Standard taxi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    {[
                                        ['Booking', 'Before you arrive', 'Usually on arrival'],
                                        ['Vehicle', 'Category you choose', 'Whatever is available'],
                                        ['Destination', 'Confirmed in advance', 'Told to the driver at pickup'],
                                        ['Flight details', 'Shared with the booking', 'Depends on the service'],
                                        ['Price', 'Quote confirmed before the trip', 'Depends on the provider'],
                                    ].map(([k, a, b]) => (
                                        <tr key={k}>
                                            <th scope="row" className="px-4 py-3 text-left font-medium text-gray-800">{k}</th>
                                            <td className="px-4 py-3 text-gray-700">{a}</td>
                                            <td className="px-4 py-3 text-gray-500">{b}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PRICING + AIRPORT FACTS ================= */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get a Quote for Your Airport Transfer</h2>
                        <p className="text-gray-600 mb-6">Send your flight and destination details for a current quote. The price depends on:</p>
                        <ul className="flex flex-wrap gap-2 mb-8">
                            {['Destination', 'Date', 'Passengers', 'Luggage', 'Vehicle', 'One way or return', 'Special requests'].map((f) => (
                                <li key={f} className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-medium text-gray-700">{f}</li>
                            ))}
                        </ul>
                        <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold bg-emerald-800 text-white hover:bg-emerald-900">
                            <a href={QUOTE_HREF}>Get My Transfer Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                        </Button>
                    </div>
                    <aside aria-labelledby="facts" className="rounded-2xl border border-stone-200 bg-[#f7f6f2] p-6">
                        <h2 id="facts" className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-4 flex items-center gap-2"><FileText className="w-4 h-4" aria-hidden="true" /> The airport</h2>
                        <dl className="space-y-3 text-sm">
                            {[
                                ['Name', 'Prince Mohammad bin Abdulaziz International Airport'],
                                ['IATA code', 'MED'],
                                ['Operator', 'Tibah Airports'],
                                ['Serves', 'Madinah and the surrounding region'],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-stone-200 pb-2 last:border-0">
                                    <dt className="text-stone-500">{k}</dt>
                                    <dd className="font-semibold text-gray-900 text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-sm text-gray-600 mt-5">
                            More on arriving at MED: <Link href="/blog/madinah-airport-taxi-transfer-guide/" className="text-emerald-800 font-semibold hover:underline">Madinah airport transport guide</Link>.
                        </p>
                    </aside>
                </div>
            </section>

            <AlUlaReviews place="madinah" title="What travellers said about their Madinah transfers" />

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Madinah Airport Transfer Questions</h2>
                    <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border border-stone-200 px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <p className="mt-6 text-sm text-gray-600">
                        While you are in Madinah: <Link href="/locations/madinah/" className="text-emerald-800 font-semibold hover:underline">Madinah transport</Link>,{' '}
                        <Link href="/services/madinah-ziyarat/" className="text-emerald-800 font-semibold hover:underline">Ziyarat by private car</Link> and a{' '}
                        <Link href="/services/private-driver/" className="text-emerald-800 font-semibold hover:underline">private driver by the hour</Link>. Flying through another city? See our{' '}
                        <Link href="/services/airport-transfers/" className="text-emerald-800 font-semibold hover:underline">airport transfer service</Link>.
                    </p>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#0b1f1a]">
                <Image src="/madinah-airport-taxi.png" alt="" fill sizes="100vw" className="object-cover opacity-20 -z-10" aria-hidden="true" />
                <div className="max-w-3xl mx-auto text-center text-white">
                    <Luggage className="w-10 h-10 text-amber-400 mx-auto mb-5" aria-hidden="true" />
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Landing at MED Soon?</h2>
                    <p className="text-lg text-emerald-50/80 mb-10">Send your flight number, arrival date and time, hotel, passengers and luggage. We&apos;ll confirm the vehicle and your pickup details.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-amber-400 text-[#0b1f1a] hover:bg-amber-300">
                            <a href={QUOTE_HREF}>Get a Transfer Quote</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Us</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
