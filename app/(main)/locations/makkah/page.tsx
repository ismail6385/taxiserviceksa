import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Plane, Train, Route, Hotel, Landmark, Clock, Users, Info, TrafficCone, MoonStar, CalendarRange, Signpost } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ApprovedDriversForLocation from '@/components/ApprovedDriversForLocation';
import AlUlaReviews from '@/components/alula/AlUlaReviews';
import Reveal from '@/components/alula/Reveal';
import MadinahQuoteCard from '@/components/madinah/MadinahQuoteCard';
import VehicleSelector from '@/components/madinah/VehicleSelector';
import BookingChecklist from '@/components/madinah/BookingChecklist';
import MakkahJourney from '@/components/makkah/MakkahJourney';
import NeighborhoodExplorer from '@/components/makkah/NeighborhoodExplorer';
import { PRICING_RULES } from '@/lib/pricing';

const PAGE_URL = 'https://taxiserviceksa.com/locations/makkah/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for transport in Makkah. Pickup, destination and date: ')}`;

export const metadata: Metadata = {
    title: 'Makkah Taxi & Private Transfer Service | Taxi Service KSA',
    description:
        'Private transport in Makkah: Jeddah airport and Haramain station arrivals, hotel transfers around the Haram area, Ziyarat, and journeys on to Madinah, Jeddah and Taif.',
    alternates: {
        canonical: PAGE_URL,
        languages: {
            en: PAGE_URL,
            ar: 'https://taxiserviceksa.com/ar/locations/makkah/',
            ur: 'https://taxiserviceksa.com/ur/locations/makkah/',
            'x-default': PAGE_URL,
        },
    },
    openGraph: {
        title: 'Makkah Taxi & Private Transfer Service',
        description: 'Arrivals, hotel transfers, Ziyarat and intercity journeys from Makkah.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/makkah-clock-tower.webp', width: 1024, height: 1024, alt: 'Makkah skyline at dusk' }],
    },
};

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

// Sedan fares from the site's fare table (lib/pricing.ts) - the same source the
// public fare calculator and admin bookings use.
const sedanFrom = (key: string) => PRICING_RULES[key]?.['Toyota Camry']?.price;

const needs = [
    { icon: Plane, q: 'Arriving at Jeddah Airport', a: 'Airport to Makkah transfer', href: '/routes/jeddah-makkah/' },
    { icon: Train, q: 'Arriving on the Haramain train', a: 'Station to hotel transfer', href: '/locations/makkah/train-station/' },
    { icon: Route, q: 'Coming from Madinah', a: 'Madinah to Makkah', href: '/routes/madinah-makkah/' },
    { icon: Hotel, q: 'Going to or from the Haram area', a: 'Hotel transfers', href: '#hotels' },
    { icon: Landmark, q: 'Visiting historical sites', a: 'Makkah Ziyarat', href: '/locations/makkah-ziyarat/' },
    { icon: Clock, q: 'A car for several hours', a: 'Private driver', href: '/services/private-driver/' },
    { icon: Users, q: 'Travelling with family', a: 'Family and group vehicles', href: '#vehicles' },
];

const departures = [
    { to: 'Madinah', href: '/routes/makkah-madinah/', fare: sedanFrom('makkah-madinah'), note: 'Hotel to hotel' },
    { to: 'Jeddah', href: '/routes/makkah-jeddah/', fare: sedanFrom('jeddah-makkah'), note: 'City hotels and Jeddah airport' },
    { to: 'Taif', href: '/routes/makkah-taif/', fare: sedanFrom('makkah-taif'), note: 'Up to the mountain city' },
];

const ziyaratStops = ['Your hotel', 'Jabal al-Nour', 'Jabal Thawr', 'Arafat', 'Mina', 'Back to your hotel'];

const faqs = [
    { q: 'Can you pick me up from my Makkah hotel?', a: 'Yes. Give us the hotel name and we confirm the pickup point, which near the Haram may be the closest place a car can stop.' },
    { q: 'Can you take us to the Haram?', a: 'We take you as close as vehicles are allowed under the traffic controls in place at the time, then you continue on foot.' },
    { q: 'Can you pick up from Jabal Omar?', a: 'Yes. Pickups from Jabal Omar hotels use the access point confirmed for your hotel.' },
    { q: 'Do you cover Aziziyah?', a: 'Yes - transfers from Aziziyah into the centre, to the station or airport, and for Ziyarat.' },
    { q: 'Can you pick us up from Makkah train station?', a: 'Yes. Share your train arrival time and we meet you at the Haramain station.' },
    { q: 'Can you arrange Jeddah Airport to Makkah?', a: 'Yes. Send your flight number and hotel; the driver takes you from arrivals to your hotel.' },
    { q: 'Can you arrange Makkah to Madinah?', a: 'Yes, hotel to hotel in a private car.' },
    { q: 'Do you offer Makkah Ziyarat transport?', a: 'Yes - a private car to the places you choose, waiting while you visit. Religious guidance is not included.' },
    { q: 'Can families book an SUV or van?', a: 'Yes - a Staria or Yukon for most families, a Hiace or Coaster for groups.' },
    { q: 'Can I book a private driver for several hours?', a: 'Yes, you can request hourly hire for several stops in one day.' },
    { q: 'How much does a Makkah transfer cost?', a: 'It depends on the route, vehicle, date and stops. You receive your trip price before confirming the booking.' },
    { q: 'Can I request a return trip?', a: 'Yes. Tick "Round trip" in the quote form and tell us when you want to come back.' },
    { q: 'What happens if road access changes?', a: 'Access around the Haram can change at short notice. The driver will use the nearest permitted point and keep you updated by WhatsApp.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Makkah Taxi & Private Transfer Service',
            url: PAGE_URL,
            description:
                'Pre-booked private transport in Makkah: Jeddah airport and Haramain station arrivals, hotel transfers around the Haram area, Ziyarat, hourly drivers and journeys to Madinah, Jeddah and Taif.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: { '@type': 'City', name: 'Makkah', alternateName: 'Makkah Al-Mukarramah' },
            image: 'https://taxiserviceksa.com/makkah-clock-tower.webp',
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Makkah transport',
                itemListElement: ['Jeddah Airport to Makkah', 'Haramain Station Transfer', 'Hotel Transfers', 'Makkah Ziyarat Transport', 'Private Driver by the Hour', 'Makkah to Madinah', 'Makkah to Jeddah', 'Makkah to Taif'].map((n) => ({
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name: n },
                })),
            },
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

export default function MakkahPage() {
    return (
        <div className="madinah-page bg-[#faf7f0]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#1a1208]">
                <Image
                    src="/makkah-clock-tower.webp"
                    alt="Makkah skyline at dusk with the Clock Tower above the hotels around Masjid al-Haram"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[center_30%] opacity-55 alula-drift -z-10"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1a1208] via-[#1a1208]/85 to-[#1a1208]/30" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <div className="flex flex-wrap items-center gap-2 mb-6 text-xs sm:text-sm font-semibold" aria-hidden="true">
                            <span className="rounded-md bg-white/10 px-2.5 py-1">Hotel</span>
                            <svg viewBox="0 0 48 12" className="w-10 h-3"><path d="M2 6 H 46" stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" fill="none" pathLength={1} className="route-draw" /></svg>
                            <span className="rounded-md bg-amber-300 text-[#1a1208] px-2.5 py-1">Private car</span>
                            <svg viewBox="0 0 48 12" className="w-10 h-3"><path d="M2 6 H 46" stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" fill="none" pathLength={1} className="route-draw" /></svg>
                            <span className="rounded-md bg-white/10 px-2.5 py-1">Haram · Station · Airport · Madinah</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-tight mb-5">Makkah Taxi &amp; Private Transfer Service</h1>
                        <p className="text-lg text-stone-200 leading-relaxed mb-8 max-w-xl">
                            Private transport for airport arrivals, hotel transfers, Ziyarat, Haramain station journeys and intercity travel from Makkah.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-amber-300 text-[#1a1208] hover:bg-amber-200">
                                <a href={QUOTE_HREF}>Get My Makkah Transfer Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Us</a>
                            </Button>
                        </div>
                    </div>
                    <div id="quote" className="scroll-mt-40">
                        <MadinahQuoteCard city="makkah" roundTrip />
                    </div>
                </div>
            </section>

            {/* ================= WHAT DO YOU NEED ================= */}
            <section aria-labelledby="needs" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="needs" className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">What Do You Need in Makkah?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mb-10">Pick the situation that sounds like yours.</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {needs.map((n, i) => {
                            const cls = `group h-full flex flex-col justify-between gap-6 rounded-2xl p-6 transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 ${i === 0 ? 'bg-[#1a1208] text-white sm:col-span-2 lg:col-span-1 lg:row-span-2' : 'bg-white border border-stone-200'}`;
                            const inner = (
                                <>
                                    <n.icon className={`w-7 h-7 ${i === 0 ? 'text-amber-300' : 'text-amber-700'}`} aria-hidden="true" />
                                    <span>
                                        <span className={`block text-sm mb-1 ${i === 0 ? 'text-stone-300' : 'text-gray-500'}`}>{n.q}</span>
                                        <span className="flex items-center gap-2 text-lg font-bold">
                                            {n.a} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                        </span>
                                    </span>
                                </>
                            );
                            return (
                                <li key={n.q} className={i === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''}>
                                    <Reveal delay={(i % 4) * 60} className="h-full">
                                        {n.href.startsWith('#') ? <a href={n.href} className={cls}>{inner}</a> : <Link href={n.href} className={cls}>{inner}</Link>}
                                    </Reveal>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            {/* ================= YOUR MAKKAH JOURNEY (signature) ================= */}
            <section aria-labelledby="journey" className="bg-[#1a1208] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="journey" className="text-3xl md:text-5xl font-bold mb-3">Your Makkah Journey</h2>
                    <p className="text-stone-300 max-w-2xl mb-10">Most trips have four stages. Choose one to see how a private car fits in.</p>
                    <MakkahJourney />
                </div>
            </section>

            {/* ================= ARRIVALS ================= */}
            <section aria-label="Arriving in Makkah" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <article className="relative isolate overflow-hidden rounded-3xl text-white p-8 md:p-10 min-h-[420px] flex flex-col justify-end">
                        <Image src="/umrah-journey-makkah.png" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="-z-10 object-cover" aria-hidden="true" />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1a1208] via-[#1a1208]/80 to-[#1a1208]/20" aria-hidden="true" />
                        <Plane className="w-8 h-8 text-amber-300 mb-3" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">Jeddah Airport to Makkah</h2>
                        <p className="text-stone-200 leading-relaxed mb-4">
                            Most visitors fly into King Abdulaziz International Airport in Jeddah. Send your flight number and hotel, and a private car takes you from arrivals to Makkah with your luggage - Staria, Yukon or Hiace for families and groups.
                        </p>
                        {sedanFrom('jeddah-makkah') && <p className="text-sm text-amber-200 mb-4">Sedan fare from SAR {sedanFrom('jeddah-makkah')} one way (fare table)</p>}
                        <Link href="/routes/jeddah-makkah/" className="group inline-flex items-center gap-2 font-bold text-amber-300">Jeddah to Makkah transfer <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></Link>
                    </article>
                    <article className="rounded-3xl bg-white border border-stone-200 p-8 md:p-10 flex flex-col">
                        <Train className="w-8 h-8 text-amber-700 mb-3" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Makkah Train Station to Your Hotel</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The Haramain train stops at Makkah station in Al-Rusaifah, outside the central hotel area. A private car covers the last part: from the station to your hotel with the bags, and back again when you leave.
                        </p>
                        <ol className="flex items-center gap-2 text-sm font-semibold mb-8" aria-label="Station, private car, hotel">
                            <li className="rounded-lg bg-[#faf7f0] border border-stone-200 px-3 py-2">Makkah station</li>
                            <li aria-hidden="true"><ArrowRight className="w-4 h-4 text-amber-600" /></li>
                            <li className="rounded-lg bg-amber-100 border border-amber-200 px-3 py-2">Private car</li>
                            <li aria-hidden="true"><ArrowRight className="w-4 h-4 text-amber-600" /></li>
                            <li className="rounded-lg bg-[#faf7f0] border border-stone-200 px-3 py-2">Hotel</li>
                        </ol>
                        <div className="mt-auto flex flex-wrap gap-4 items-center">
                            <Button asChild className="h-auto py-3 px-6 rounded-xl font-bold bg-[#1a1208] text-white hover:bg-black">
                                <a href={QUOTE_HREF}>Book Station Transfer</a>
                            </Button>
                            <Link href="/locations/makkah/train-station/" className="text-sm font-semibold text-amber-800 hover:underline">Station transfer details</Link>
                        </div>
                    </article>
                </div>
            </section>

            {/* ================= HOTEL TRANSFERS + ACCESS REALITY ================= */}
            <section id="hotels" aria-labelledby="hotels-title" className="bg-white py-20 px-4 sm:px-6 lg:px-8 scroll-mt-40">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
                    <div>
                        <h2 id="hotels-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hotel Transfers Around Makkah</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Moving between hotels, getting to the Haram area from a hotel further out, or heading to the station - the car is booked for your exact pickup and destination.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Pickup and drop-off points depend on where your hotel is and on the traffic and access arrangements in place at the time. Roads close to Masjid al-Haram are often controlled, so your confirmed point may be the nearest place a car is allowed to stop, and it can be adjusted on the day.
                        </p>
                        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-sm text-amber-950 flex gap-3">
                            <Info className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                            <p>We do not have special access to restricted areas around the Haram. Cars stop where the current rules allow, and you continue on foot from there.</p>
                        </div>
                        <p className="text-sm text-gray-600 mt-6">
                            Just need a local ride inside the city? See <Link href="/services/taxi-in-makkah/" className="text-amber-800 font-semibold hover:underline">taxi in Makkah</Link> and <Link href="/services/makkah-city-transport/" className="text-amber-800 font-semibold hover:underline">Makkah city transport</Link>.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-[#1a1208] text-white p-8">
                        <h2 className="text-2xl font-bold mb-6">Getting Around Makkah</h2>
                        <p className="text-stone-300 text-sm mb-6">Why the confirmed pickup point matters here more than in most cities:</p>
                        <ul className="space-y-4">
                            {[
                                { icon: TrafficCone, t: 'Access controls', d: 'Temporary closures around the Haram can change where cars may stop.' },
                                { icon: MoonStar, t: 'Prayer times', d: 'Travel times and access can change around the five daily prayers.' },
                                { icon: CalendarRange, t: 'Peak seasons', d: 'Ramadan, Hajj and busy Umrah periods bring heavier traffic and more restrictions.' },
                                { icon: Signpost, t: 'Hotel location', d: 'A hotel beside the Haram and one in Aziziyah need very different routes.' },
                            ].map((x) => (
                                <li key={x.t} className="flex gap-4">
                                    <x.icon className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" aria-hidden="true" />
                                    <div>
                                        <p className="font-semibold">{x.t}</p>
                                        <p className="text-sm text-stone-400">{x.d}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= NEIGHBORHOOD EXPLORER ================= */}
            <section aria-labelledby="areas" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="areas" className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">Staying in Which Part of Makkah?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mb-10">Transport questions depend a lot on the district. Choose yours.</p>
                    <NeighborhoodExplorer />
                </div>
            </section>

            {/* ================= ZIYARAT ================= */}
            <section aria-labelledby="ziyarat" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
                    <div>
                        <h2 id="ziyarat" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Private Makkah Ziyarat Transportation</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Many visitors want to see places outside the central area, such as Jabal al-Nour, Jabal Thawr, Arafat and Mina. A private car collects you at your hotel, waits at each stop and brings you back.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Access to some sites - particularly Arafat, Mina and Muzdalifah around the Hajj season - depends on current restrictions. We confirm what is possible for your date.
                        </p>
                        <p className="text-sm text-stone-500 mb-6">We provide transportation only. Religious guidance is not included.</p>
                        <Button asChild className="group h-auto py-3 px-6 rounded-xl font-bold bg-amber-300 text-[#1a1208] hover:bg-amber-200">
                            <Link href="/locations/makkah-ziyarat/">Plan Makkah Ziyarat <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></Link>
                        </Button>
                    </div>
                    <figure className="rounded-3xl bg-[#faf7f0] border border-stone-200 p-7 md:p-9">
                        <figcaption className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-6">Example itinerary only - stops follow your request and current access conditions</figcaption>
                        <ol className="relative border-l-2 border-dashed border-amber-600/40 ml-3 space-y-5">
                            {ziyaratStops.map((s, i) => (
                                <li key={s} className="ml-7">
                                    <span className={`absolute -left-[9px] mt-1 w-4 h-4 rounded-full ${i === 0 || i === ziyaratStops.length - 1 ? 'bg-[#1a1208]' : 'bg-amber-500'}`} aria-hidden="true" />
                                    <span className="font-semibold text-gray-900">{s}</span>
                                </li>
                            ))}
                        </ol>
                    </figure>
                </div>
            </section>

            {/* ================= PRIVATE DRIVER + FAMILY + VEHICLES ================= */}
            <section id="vehicles" aria-labelledby="vehicles-title" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-40">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
                        <div className="rounded-3xl bg-[#1a1208] text-white p-8">
                            <Clock className="w-8 h-8 text-amber-300 mb-3" aria-hidden="true" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-3">Need a Private Driver in Makkah?</h2>
                            <p className="text-stone-300 leading-relaxed mb-6">
                                Keep one car and driver for a set number of hours - for several hotel or destination moves, Ziyarat with extra stops, coordinating an airport run, or business visits.
                            </p>
                            <Link href="/services/private-driver/" className="group inline-flex items-center gap-2 font-bold text-amber-300">Private driver service <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></Link>
                        </div>
                        <div className="relative isolate overflow-hidden rounded-3xl p-8 text-white flex flex-col justify-end min-h-[260px]">
                            <Image src="/makkah-family-service.png" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="-z-10 object-cover" aria-hidden="true" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1a1208] via-[#1a1208]/75 to-transparent" aria-hidden="true" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-3">Travelling With Family?</h2>
                            <p className="text-stone-200 leading-relaxed">
                                Tell us about children, older family members, suitcases and any extra help needed getting in and out. Ask before booking if you need a wheelchair-accessible vehicle. Child seats can be requested in the booking form, subject to availability.
                            </p>
                        </div>
                    </div>
                    <h2 id="vehicles-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Choose Your Vehicle</h2>
                    <p className="text-gray-600 max-w-3xl mb-10">Pick by passengers and suitcases - Umrah trips often come with Zamzam and extra bags on the way home.</p>
                    <VehicleSelector />
                </div>
            </section>

            {/* ================= HEADING OUT ================= */}
            <section aria-labelledby="out" className="bg-[#1a1208] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="out" className="text-3xl md:text-5xl font-bold mb-3">Heading Out of Makkah?</h2>
                    <p className="text-stone-300 max-w-2xl mb-10">From your hotel door, one private car to where you are going next.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                        {departures.map((d, i) => (
                            <Reveal key={d.to} delay={i * 90} className="h-full">
                                <Link href={d.href} className="group h-full flex flex-col rounded-2xl border border-white/15 bg-white/[0.04] p-7 transition hover:border-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">
                                    <span className="text-sm text-stone-400 mb-1">Makkah →</span>
                                    <span className="text-3xl font-bold mb-2">{d.to}</span>
                                    <span className="text-sm text-stone-300 mb-6">{d.note}</span>
                                    {d.fare && <span className="text-sm text-amber-200 mb-4">Sedan from SAR {d.fare} one way</span>}
                                    <span className="mt-auto inline-flex items-center gap-2 font-bold text-amber-300">View route <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></span>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                    <p className="text-xs text-stone-500">Fares from our fare table, the same one used by our online fare calculator. Your price is confirmed before you book.</p>
                </div>
            </section>

            {/* ================= COMPARISON ================= */}
            <section aria-labelledby="compare" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 id="compare" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Private Transfer, Street Taxi or Haramain Train?</h2>
                    <p className="text-lg text-gray-600 mb-8">All three are used in Makkah. The differences:</p>
                    <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
                        <table className="w-full text-sm">
                            <thead className="bg-[#faf7f0] text-left">
                                <tr>
                                    <th scope="col" className="px-4 py-3"></th>
                                    <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Pre-booked private transfer</th>
                                    <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Street taxi</th>
                                    <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Haramain train</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {[
                                    ['Pickup', 'Arranged in advance', 'Usually on demand', 'Station'],
                                    ['Drop-off', 'Confirmed destination', 'Tell the driver', 'Station'],
                                    ['Vehicle', 'Category you choose', 'Whatever is available', 'Train'],
                                    ['Group travel', 'One private vehicle', 'Depends on the car', 'A ticket each'],
                                    ['Luggage', 'Carried in the vehicle', 'Carried in the vehicle', 'You manage it'],
                                ].map(([k, ...v]) => (
                                    <tr key={k}>
                                        <th scope="row" className="px-4 py-3 text-left font-medium text-gray-800">{k}</th>
                                        {v.map((x, i) => <td key={i} className="px-4 py-3 text-gray-700">{x}</td>)}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ================= PROCESS + CHECKLIST ================= */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How Booking Works</h2>
                        <ol className="space-y-6">
                            {[
                                ['Tell us your journey', 'Pickup and destination - a hotel name is fine.'],
                                ['Choose your vehicle', 'Based on passengers and luggage.'],
                                ['Confirm your quote', 'You receive the trip details and price before confirming.'],
                                ['Meet your driver', 'Follow the pickup instructions in your confirmation.'],
                            ].map(([t, d], i) => (
                                <li key={t}>
                                    <Reveal delay={i * 90}>
                                        <div className="flex gap-5">
                                            <span className="w-12 h-12 rounded-2xl bg-[#1a1208] text-amber-300 font-black text-lg flex items-center justify-center shrink-0" aria-hidden="true">0{i + 1}</span>
                                            <div>
                                                <h3 className="mb-0.5">{t}</h3>
                                                <p className="text-sm text-gray-600">{d}</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                </li>
                            ))}
                        </ol>
                        <div className="mt-10">
                            <h3 className="mb-3">What decides the price</h3>
                            <ul className="flex flex-wrap gap-2">
                                {['Pickup', 'Destination', 'Date', 'Vehicle', 'Passengers', 'Luggage', 'Waiting', 'Extra stops'].map((f) => (
                                    <li key={f} className="rounded-full border border-stone-200 bg-[#faf7f0] px-3.5 py-1.5 text-sm text-gray-700">{f}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Before Booking Your Makkah Transfer</h2>
                        <BookingChecklist
                            items={['Hotel or pickup location', 'Destination', 'Date', 'Time', 'Passenger count', 'Luggage', 'Vehicle preference', 'Special requirements']}
                            cta="Request My Quote"
                        />
                    </div>
                </div>
            </section>

            <AlUlaReviews place="makkah" title="What travellers said about their Makkah trips" />

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Makkah Transport Questions</h2>
                    <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border border-stone-200 px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <p className="mt-6 text-sm text-gray-600">
                        Travelling on? See <Link href="/locations/madinah/" className="text-amber-800 font-semibold hover:underline">transport in Madinah</Link> and <Link href="/locations/jeddah/" className="text-amber-800 font-semibold hover:underline">transport in Jeddah</Link>.
                    </p>
                </div>
            </section>

            <ApprovedDriversForLocation location="makkah" />

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1208]">
                <Image src="/makkah-clock-tower.webp" alt="" fill sizes="100vw" className="object-cover opacity-20 -z-10" aria-hidden="true" />
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Travelling to Makkah Soon?</h2>
                    <p className="text-lg text-stone-300 mb-10">Tell us how you are arriving, where you are staying and where you go next. We&apos;ll arrange a private vehicle for each part of the trip.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-amber-300 text-[#1a1208] hover:bg-amber-200">
                            <a href={QUOTE_HREF}>Get My Makkah Transfer Quote</a>
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
