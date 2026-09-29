import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Plane, Train, Landmark, Route, Hotel, Luggage, Moon, Users, Clock, Mail, MessageCircle, FileCheck, Car, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ApprovedDriversForLocation from '@/components/ApprovedDriversForLocation';
import MadinahQuoteCard from '@/components/madinah/MadinahQuoteCard';
import TripFinder from '@/components/madinah/TripFinder';
import AlUlaReviews from '@/components/alula/AlUlaReviews';
import Reveal from '@/components/alula/Reveal';
import { PRICING_RULES } from '@/lib/pricing';

const PAGE_URL = 'https://taxiserviceksa.com/locations/madinah/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for transport in Madinah. Pickup, destination and date: ')}`;

export const metadata: Metadata = {
    title: 'Madinah Taxi & Private Transfer Service | Taxi Service KSA',
    description:
        'Private transport in Madinah: airport and Haramain station pickups, hotel transfers in the Central Area, Ziyarat by private car, and journeys on to Makkah and AlUla.',
    alternates: {
        canonical: PAGE_URL,
        languages: {
            en: PAGE_URL,
            ar: 'https://taxiserviceksa.com/ar/locations/madinah/',
            ur: 'https://taxiserviceksa.com/ur/locations/madinah/',
            'x-default': PAGE_URL,
        },
    },
    openGraph: {
        title: 'Madinah Taxi & Private Transfer Service',
        description: 'Airport, station, hotel, Ziyarat and intercity transport from Madinah.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/madinah-night-view.webp', width: 1024, height: 1024, alt: 'Central Madinah at night' }],
    },
};

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

// One-way fares from the site's fare table (lib/pricing.ts) - the same source the
// public fare calculator and admin bookings use.
const FARE_VEHICLES = ['Toyota Camry', 'Hyundai Staria VIP', 'GMC Yukon XL / Denali', 'Toyota Hiace'] as const;
const FARE_LABELS: Record<(typeof FARE_VEHICLES)[number], string> = {
    'Toyota Camry': 'Sedan',
    'Hyundai Staria VIP': 'Staria',
    'GMC Yukon XL / Denali': 'Yukon',
    'Toyota Hiace': 'Hiace',
};
function fares(routeKey: string) {
    const rules = PRICING_RULES[routeKey] ?? {};
    return FARE_VEHICLES.filter((v) => rules[v]).map((v) => ({ vehicle: FARE_LABELS[v], price: rules[v].price }));
}
const makkahFares = fares('makkah-madinah');
const jeddahFares = fares('jeddah-madinah');

const journey = [
    { icon: Plane, name: 'MED Airport', note: 'Arrivals & departures', href: '/locations/madinah/madinah-airport/' },
    { icon: Hotel, name: 'Central Area hotels', note: 'Around Al-Masjid an-Nabawi', href: '/locations/madinah/central-area/' },
    { icon: Landmark, name: 'Ziyarat', note: 'Quba, Uhud, Qiblatain', href: '/services/madinah-ziyarat/' },
    { icon: Train, name: 'Haramain Station', note: 'Trains to Makkah & Jeddah', href: '/locations/madinah/train-station/' },
    { icon: Route, name: 'Makkah or AlUla', note: 'By private car', href: '/routes/madinah-makkah/' },
];

const ziyaratStops = [
    { name: 'Your hotel', href: null },
    { name: 'Masjid Quba', href: '/locations/madinah/quba/' },
    { name: 'Mount Uhud', href: '/locations/madinah/uhud/' },
    { name: 'Masjid al-Qiblatain', href: '/locations/madinah/qiblatain/' },
    { name: 'Seven Mosques area', href: null },
    { name: 'Back to your hotel', href: null },
];

const vehicles = [
    { name: 'Toyota Camry', img: '/toyota-camry.webp', href: '/fleet/toyota-camry/', pax: 4, bags: 2, best: 'Couples and small groups with light luggage', vehicle: 'Toyota Camry' },
    { name: 'Hyundai Staria', img: '/hyundai-staria.webp', href: '/fleet/hyundai-staria/', pax: 7, bags: 4, best: 'Families on airport and Makkah runs', vehicle: 'Hyundai Staria VIP' },
    { name: 'GMC Yukon', img: '/gmc-yukon.webp', href: '/fleet/gmc-yukon/', pax: 7, bags: 5, best: 'Families wanting extra space and comfort', vehicle: 'GMC Yukon XL / Denali' },
    { name: 'Toyota Hiace', img: '/toyota-hiace.webp', href: '/fleet/toyota-hiace/', pax: 11, bags: 16, best: 'Umrah groups with plenty of luggage', vehicle: 'Toyota Hiace' },
];

const routes = [
    { from: 'MED Airport', to: 'Central Area', href: '/locations/madinah/madinah-airport/' },
    { from: 'Haramain Station', to: 'Central Area', href: '/routes/madinah-train-station-taxi/' },
    { from: 'Madinah', to: 'Makkah', href: '/routes/madinah-makkah/' },
    { from: 'Madinah', to: 'Jeddah', href: '/routes/madinah-jeddah/' },
    { from: 'Madinah', to: 'Jeddah Airport (departures)', href: '/routes/madinah-to-jeddah-airport-departures/' },
    { from: 'Madinah', to: 'AlUla', href: '/routes/madinah-alula/' },
];

const faqs = [
    { q: 'Can you pick me up from Madinah Airport?', a: 'Yes. Send your flight number and hotel when booking, and the pickup is arranged around your arrival.' },
    { q: 'Can you pick me up from a hotel near Al-Masjid an-Nabawi?', a: 'Yes. Give us the hotel name and we confirm the most practical pickup point, as roads right next to the mosque can be restricted.' },
    { q: 'Do you provide private Ziyarat transportation?', a: 'Yes - a private car from your hotel to the places you want to visit and back. Religious guidance is not included.' },
    { q: 'Can I book a return Ziyarat trip?', a: 'Yes. Most Ziyarat bookings start and end at your hotel, with the driver waiting at each stop.' },
    { q: 'Can you pick me up from the Haramain train station?', a: 'Yes. Share your train arrival time and we meet you at the Madinah station.' },
    { q: 'Can I travel from Madinah to Makkah by private car?', a: 'Yes, hotel to hotel. If you need to stop at the Miqat on the way, mention it when booking.' },
    { q: 'Can I book a GMC or a van for my family?', a: 'Yes. A GMC Yukon or Hyundai Staria suits most families; a Hiace suits larger groups.' },
    { q: 'Can you take large luggage?', a: 'Yes, if we know in advance. Tell us the number of suitcases so we send a vehicle with enough space.' },
    { q: 'Can I book a driver for several hours?', a: 'Yes, you can request hourly hire - useful for several stops in one day.' },
    { q: 'How do I get a quote?', a: 'Use the form at the top of this page or message us on WhatsApp with your pickup, destination, date, passengers and bags.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Madinah Taxi & Private Transfer Service',
            url: PAGE_URL,
            description:
                'Private pre-booked transport in Madinah: airport and Haramain station transfers, hotel pickups in the Central Area, private Ziyarat transportation, hourly drivers and intercity journeys to Makkah, Jeddah and AlUla.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: { '@type': 'City', name: 'Madinah', alternateName: 'Al-Madinah Al-Munawwarah' },
            image: 'https://taxiserviceksa.com/madinah-night-view.webp',
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Madinah transport',
                itemListElement: ['Madinah Airport Transfer', 'Haramain Station Transfer', 'Private Ziyarat Transportation', 'Hotel Transfers', 'Madinah to Makkah', 'Madinah to AlUla', 'Private Driver by the Hour'].map((n) => ({
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

function QuoteLink({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <a href={QUOTE_HREF} className={`group inline-flex items-center gap-2 font-bold ${className}`}>
            {children}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
        </a>
    );
}

export default function MadinahPage() {
    return (
        <div className="madinah-page bg-[#faf8f3]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#06201a]">
                <Image
                    src="/madinah-night-view.webp"
                    alt="Central Madinah at night, with the minarets of Al-Masjid an-Nabawi lit up"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[center_35%] opacity-60 alula-drift -z-10"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#06201a] via-[#06201a]/85 to-[#06201a]/40" aria-hidden="true" />
                {/* faint route lines */}
                <svg className="absolute inset-0 -z-10 w-full h-full opacity-30" viewBox="0 0 1440 800" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M-20 640 C 260 560, 420 700, 700 560 S 1180 420, 1460 470" fill="none" stroke="#d4a64a" strokeWidth="1.5" pathLength={1} className="route-draw" />
                    <path d="M-20 720 C 300 650, 560 760, 860 640 S 1260 560, 1460 600" fill="none" stroke="#d4a64a" strokeWidth="1" strokeOpacity="0.6" pathLength={1} className="route-draw" />
                </svg>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className="text-sm font-semibold tracking-wide text-amber-300 mb-4">Al-Madinah Al-Munawwarah</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-tight mb-5">Madinah Taxi &amp; Private Transfer Service</h1>
                        <p className="text-lg text-emerald-50/85 leading-relaxed mb-8 max-w-xl">
                            Private airport transfers, hotel pickups, Ziyarat transportation and intercity journeys from Madinah.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-amber-400 text-[#06201a] hover:bg-amber-300">
                                <a href={QUOTE_HREF}>
                                    Get a Quote
                                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                </a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer">
                                    <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" />
                                    WhatsApp Us
                                </a>
                            </Button>
                        </div>
                        <p className="mt-5 text-sm text-emerald-50/70">Private vehicles · Pre-booked pickups · Fixed quote before you travel</p>
                    </div>
                    <div id="quote" className="scroll-mt-40">
                        <MadinahQuoteCard />
                    </div>
                </div>
            </section>

            {/* ================= CHOOSE YOUR TRANSFER ================= */}
            <section aria-labelledby="choose" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="choose" className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">Choose Your Madinah Transfer</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mb-12">Four journeys cover most visits to Madinah. Pick the one you need, or book several together.</p>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
                        {/* Airport - dark image card */}
                        <Reveal className="md:col-span-4 h-full">
                            <Link href="/locations/madinah/madinah-airport/" className="group relative isolate flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl p-8 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                                <Image src="/madinah-airport-taxi.png" alt="" fill sizes="(min-width: 768px) 66vw, 100vw" className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none" />
                                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06201a] via-[#06201a]/60 to-transparent" aria-hidden="true" />
                                <Plane className="w-8 h-8 text-amber-300 mb-3" aria-hidden="true" />
                                <h3 className="mb-2">Madinah Airport Transfer</h3>
                                <p className="text-emerald-50/80 mb-4 max-w-md">MED airport to your hotel in the Central Area or anywhere in Madinah - and back for your flight home.</p>
                                <span className="inline-flex items-center gap-2 font-bold text-amber-300">Airport Transfer <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
                            </Link>
                        </Reveal>

                        {/* Ziyarat - emerald card with mini route */}
                        <Reveal delay={80} className="md:col-span-2 h-full">
                            <Link href="/services/madinah-ziyarat/" className="group flex h-full flex-col rounded-3xl bg-emerald-800 p-8 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                                <Landmark className="w-8 h-8 text-amber-300 mb-3" aria-hidden="true" />
                                <h3 className="mb-2">Madinah Ziyarat</h3>
                                <p className="text-emerald-50/80 mb-5">Private transport between the places you want to visit, starting and ending at your hotel.</p>
                                <div className="mt-auto flex items-center gap-1.5 text-xs text-emerald-100/80 mb-5" aria-hidden="true">
                                    <span className="w-2 h-2 rounded-full bg-amber-300" /> Quba <span className="h-px flex-1 bg-emerald-400/50" /> Uhud <span className="h-px flex-1 bg-emerald-400/50" /> Qiblatain
                                </div>
                                <span className="inline-flex items-center gap-2 font-bold text-amber-300">Plan Ziyarat <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
                            </Link>
                        </Reveal>

                        {/* Station - light card with track motif */}
                        <Reveal delay={120} className="md:col-span-3 h-full">
                            <Link href="/locations/madinah/train-station/" className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                                <div className="absolute right-0 top-8 w-40 border-t-4 border-dashed border-stone-200" aria-hidden="true" />
                                <Train className="w-8 h-8 text-emerald-700 mb-3" aria-hidden="true" />
                                <h3 className="mb-2">Haramain Train Station</h3>
                                <p className="text-gray-600 mb-5">Pickup or drop-off between the Madinah Haramain station and your hotel, with room for your luggage.</p>
                                <span className="mt-auto inline-flex items-center gap-2 font-bold text-emerald-800">Station Transfer <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
                            </Link>
                        </Reveal>

                        {/* Makkah - gold card with fare */}
                        <Reveal delay={160} className="md:col-span-3 h-full">
                            <Link href="/routes/madinah-makkah/" className="group flex h-full flex-col rounded-3xl bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200 p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                                <Route className="w-8 h-8 text-amber-700 mb-3" aria-hidden="true" />
                                <h3 className="mb-2">Madinah → Makkah</h3>
                                <p className="text-gray-700 mb-5">Door to door between your Madinah and Makkah hotels in a private car.</p>
                                {makkahFares[0] && (
                                    <p className="text-sm text-amber-900 mb-5">
                                        Sedan fare from <strong>SAR {makkahFares[0].price}</strong> one way
                                    </p>
                                )}
                                <span className="mt-auto inline-flex items-center gap-2 font-bold text-amber-800">Madinah to Makkah <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ================= JOURNEY VISUAL ================= */}
            <section aria-labelledby="journey" className="bg-[#06201a] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <h2 id="journey" className="text-3xl md:text-5xl font-bold mb-3">Getting Around Madinah</h2>
                    <p className="text-emerald-50/70 max-w-2xl mb-14">A typical visit has several moving parts. Here is where a private car fits in.</p>

                    <div className="relative">
                        <svg className="hidden md:block absolute left-0 right-0 top-7 w-full h-4" viewBox="0 0 1000 16" preserveAspectRatio="none" aria-hidden="true">
                            <path d="M40 8 H 960" stroke="#d4a64a" strokeWidth="2" strokeDasharray="1" pathLength={1} className="route-draw" fill="none" />
                        </svg>
                        <ol className="relative grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-4">
                            {journey.map((j, i) => (
                                <li key={j.name} className="md:text-center">
                                    <Reveal delay={i * 120}>
                                        <Link href={j.href} className="group flex md:block items-center gap-4 focus-visible:outline-none">
                                            <span className="shrink-0 md:mx-auto flex w-14 h-14 items-center justify-center rounded-full bg-[#0b3b2e] ring-2 ring-amber-400/70 transition group-hover:ring-amber-300 group-hover:bg-emerald-800 group-focus-visible:ring-4">
                                                <j.icon className="w-6 h-6 text-amber-300" aria-hidden="true" />
                                            </span>
                                            <span className="block">
                                                <span className="block md:mt-4 font-bold">{j.name}</span>
                                                <span className="block text-sm text-emerald-50/60">{j.note}</span>
                                            </span>
                                        </Link>
                                    </Reveal>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* ================= TRIP FINDER ================= */}
            <section aria-labelledby="finder" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="finder" className="text-3xl md:text-5xl font-bold text-gray-900 mb-10">What Are You Travelling to Madinah For?</h2>
                    <TripFinder />
                </div>
            </section>

            {/* ================= ZIYARAT ================= */}
            <section aria-labelledby="ziyarat" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
                    <div>
                        <h2 id="ziyarat" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Private Ziyarat Transportation in Madinah</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Many visitors want to see places beyond the Central Area during their stay. A private car collects you from your hotel, takes you between the places you choose, waits while you visit and brings you back - at your family&apos;s pace, not a group schedule.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Morning trips are popular, especially in the warmer months. Tell us the places on your list and your preferred start time, and we suggest a practical order.
                        </p>
                        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-sm text-amber-950 leading-relaxed mb-6">
                            Our service provides private transportation. Religious guidance or historical interpretation is not included unless specifically arranged.
                        </div>
                        <Link href="/services/madinah-ziyarat/" className="group inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-emerald-950">
                            Madinah Ziyarat by private car <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                        </Link>
                    </div>
                    <div className="rounded-3xl bg-[#faf8f3] border border-stone-200 p-7 md:p-9">
                        <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-6">An example route - yours can be different</p>
                        <ol className="relative border-l-2 border-dashed border-emerald-700/40 ml-3 space-y-6">
                            {ziyaratStops.map((s, i) => (
                                <li key={s.name} className="ml-7">
                                    <span className={`absolute -left-[9px] mt-1.5 w-4 h-4 rounded-full ${i === 0 || i === ziyaratStops.length - 1 ? 'bg-amber-400' : 'bg-emerald-700'}`} aria-hidden="true" />
                                    {s.href ? (
                                        <Link href={s.href} className="font-semibold text-gray-900 hover:text-emerald-800 hover:underline">{s.name}</Link>
                                    ) : (
                                        <span className="font-semibold text-gray-900">{s.name}</span>
                                    )}
                                </li>
                            ))}
                        </ol>
                        <div className="mt-8">
                            <QuoteLink className="text-emerald-800">Request a Ziyarat quote</QuoteLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= HOTELS / CENTRAL AREA ================= */}
            <section aria-labelledby="hotels" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden order-last lg:order-first">
                        <Image src="/madinah-central-area-taxi.png" alt="Private SUV waiting outside hotels in Madinah's Central Area" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <div>
                        <h2 id="hotels" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hotel Pickup &amp; Drop-Off in Madinah</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Most visitors stay in the Central Area (Markaziyah) around Al-Masjid an-Nabawi. The streets there are busy and some are closed to traffic at times, so we confirm a practical pickup point for your hotel in advance.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {[
                                { icon: Luggage, t: 'Help with suitcases and Zamzam' },
                                { icon: Users, t: 'Room for the whole family' },
                                { icon: Moon, t: 'Early departures and late arrivals' },
                                { icon: Train, t: 'Hotel to station or airport' },
                            ].map((x) => (
                                <li key={x.t} className="flex items-center gap-3 rounded-xl bg-white border border-stone-200 px-4 py-3 text-sm font-medium text-gray-800">
                                    <x.icon className="w-5 h-5 text-emerald-700 shrink-0" aria-hidden="true" /> {x.t}
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold bg-emerald-800 text-white hover:bg-emerald-900">
                                <a href={QUOTE_HREF}>Arrange My Hotel Transfer <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Link href="/locations/madinah/central-area/" className="text-sm font-semibold text-emerald-800 hover:underline">More on Central Area transfers</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= AIRPORT + STATION ================= */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-3xl border border-stone-200 p-8 flex flex-col">
                        <Plane className="w-8 h-8 text-emerald-700 mb-4" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Madinah Airport Transfers</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Madinah&apos;s airport is Prince Mohammad bin Abdulaziz International Airport (MED). Send your flight number and arrival time so the pickup is planned around your landing, and tell us about suitcases and Zamzam so the vehicle has room.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">Flying home? We collect you from your hotel with enough time for check-in - early-morning flights included.</p>
                        <div className="mt-auto flex flex-wrap gap-4 items-center">
                            <Button asChild className="h-auto py-3 px-6 rounded-xl font-bold bg-gray-900 text-white hover:bg-gray-800">
                                <a href={QUOTE_HREF}>Book Madinah Airport Transfer</a>
                            </Button>
                            <Link href="/locations/madinah/madinah-airport/" className="text-sm font-semibold text-emerald-800 hover:underline">Airport details</Link>
                        </div>
                    </div>
                    <div className="rounded-3xl border border-stone-200 p-8 flex flex-col">
                        <Train className="w-8 h-8 text-emerald-700 mb-4" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Haramain Train Station Transfers</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            The Haramain high-speed train links Madinah with Makkah and Jeddah, running between stations. A private car covers the part in between: station to hotel door when you arrive, hotel to station when you leave.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">Useful with luggage, children or older family members, and for connecting onward journeys.</p>
                        <div className="mt-auto flex flex-wrap gap-4 items-center">
                            <Button asChild className="h-auto py-3 px-6 rounded-xl font-bold bg-gray-900 text-white hover:bg-gray-800">
                                <a href={QUOTE_HREF}>Book Station Transfer</a>
                            </Button>
                            <Link href="/locations/madinah/train-station/" className="text-sm font-semibold text-emerald-800 hover:underline">Station details</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= MAKKAH + ALULA ================= */}
            <section aria-labelledby="makkah" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
                    <div className="rounded-3xl bg-[#06201a] text-white p-8 md:p-10">
                        <h2 id="makkah" className="text-3xl md:text-4xl font-bold mb-4">From Madinah to Makkah by Private Car</h2>
                        <p className="text-emerald-50/80 leading-relaxed mb-6">
                            Your driver collects you at your Madinah hotel, loads the luggage once, and drops you at your Makkah hotel. The car is yours alone, so you choose when to leave and when to stop - including at the Miqat, if you ask for it when booking.
                        </p>
                        {makkahFares.length > 0 && (
                            <div className="mb-6">
                                <p className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">One-way fares from our fare table</p>
                                <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {makkahFares.map((f) => (
                                        <div key={f.vehicle} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                                            <dt className="text-xs text-emerald-50/60">{f.vehicle}</dt>
                                            <dd className="text-lg font-bold">SAR {f.price}</dd>
                                        </div>
                                    ))}
                                </dl>
                                <p className="text-xs text-emerald-50/50 mt-3">Your price is confirmed with your booking and can depend on date, pickup point and extras.</p>
                            </div>
                        )}
                        <div className="flex flex-wrap gap-4 items-center">
                            <Button asChild className="group h-auto py-3 px-6 rounded-xl font-bold bg-amber-400 text-[#06201a] hover:bg-amber-300">
                                <a href={QUOTE_HREF}>Get a Makkah Quote <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Link href="/routes/madinah-makkah/" className="text-sm font-semibold text-amber-300 hover:underline">Madinah to Makkah route</Link>
                        </div>
                    </div>
                    <div className="grid grid-rows-2 gap-6">
                        <div className="rounded-3xl border border-stone-200 bg-white p-7">
                            <h3 className="mb-2">Madinah to AlUla Private Transfer</h3>
                            <p className="text-sm text-gray-600 mb-4">A separate intercity trip north to AlUla&apos;s heritage sites, hotel to hotel.</p>
                            <div className="flex flex-wrap gap-4 text-sm font-semibold">
                                <Link href="/routes/madinah-alula/" className="text-emerald-800 hover:underline">Madinah to AlUla</Link>
                                <Link href="/locations/alula/" className="text-emerald-800 hover:underline">Transport in AlUla</Link>
                            </div>
                        </div>
                        <div className="rounded-3xl border border-stone-200 bg-white p-7">
                            <h3 className="mb-2">Madinah to Jeddah</h3>
                            <p className="text-sm text-gray-600 mb-2">To a Jeddah hotel or straight to the airport for your flight.</p>
                            {jeddahFares[0] && <p className="text-sm text-gray-500 mb-3">Sedan fare from SAR {jeddahFares[0].price} one way</p>}
                            <Link href="/routes/madinah-jeddah/" className="text-sm font-semibold text-emerald-800 hover:underline">Madinah to Jeddah</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ROUTES ================= */}
            <section aria-labelledby="routes" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="routes" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Common Madinah Routes</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {routes.map((r) => (
                            <li key={r.href + r.to}>
                                <Link href={r.href} className="group flex items-center gap-3 rounded-xl border border-stone-200 px-5 py-4 hover:border-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                                    <MapPin className="w-4 h-4 text-emerald-700 shrink-0" aria-hidden="true" />
                                    <span className="text-sm text-gray-500">{r.from}</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-amber-600 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                    <span className="font-semibold text-gray-900">{r.to}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section id="vehicles" aria-labelledby="vehicles-title" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-40">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Choose the Right Vehicle for Your Journey</h2>
                    <p className="text-gray-600 max-w-3xl mb-10">Capacities are the figures our booking system uses. Pick by passengers and suitcases - there is no need for a bigger car than your group needs.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {vehicles.map((v, i) => (
                            <Reveal key={v.name} delay={i * 70} className="h-full">
                                <div className="group h-full flex flex-col rounded-2xl overflow-hidden bg-white border border-stone-200 transition hover:shadow-lg">
                                    <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                                        <Image src={v.img} alt={`${v.name} for Madinah transfers`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col">
                                        <h3 className="mb-1">{v.name}</h3>
                                        <p className="text-sm text-gray-700">Up to {v.pax} passengers · about {v.bags} large bags</p>
                                        <p className="text-sm text-gray-500 mt-1 mb-4 flex-1">{v.best}</p>
                                        <div className="flex items-center justify-between text-sm">
                                            <a href={QUOTE_HREF} className="font-bold text-emerald-800 hover:underline">Get a quote</a>
                                            <Link href={v.href} className="text-stone-500 hover:text-gray-900">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-6">Larger groups can also ask about the Toyota Coaster.</p>
                </div>
            </section>

            {/* ================= PRIVATE DRIVER ================= */}
            <section className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-6xl mx-auto rounded-3xl bg-emerald-800 text-white p-8 md:p-12 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-3">Need a Driver for Several Hours?</h2>
                        <p className="text-emerald-50/85 leading-relaxed">
                            A one-way transfer goes from A to B. A private driver keeps the car with you for a set number of hours - handy for Ziyarat with extra stops, a family outing, moving between hotels, or a day with a flexible plan.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 md:items-end">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-white text-emerald-900 hover:bg-emerald-50">
                            <a href={QUOTE_HREF}>Request Hourly Driver</a>
                        </Button>
                        <Link href="/services/private-driver/" className="text-sm font-semibold text-amber-300 hover:underline">About our private driver service</Link>
                    </div>
                </div>
            </section>

            {/* ================= PRICING + TRUST + PROCESS ================= */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Madinah Transfer Quote</h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Prices depend on route, date, vehicle, passenger count and luggage. Request a quote for your trip and you get a fixed price before you confirm.
                        </p>
                        <h3 className="mb-4">What you can expect</h3>
                        <ul className="space-y-4">
                            {[
                                { icon: FileCheck, t: 'Booking details in writing', d: 'Pickup point, time, vehicle and price are confirmed before the trip.' },
                                { icon: Car, t: 'Vehicle matched to your group', d: 'From a sedan for two to a van for a group with luggage.' },
                                { icon: MessageCircle, t: 'Easy to reach', d: 'Changes and pickup coordination by WhatsApp.' },
                                { icon: Mail, t: 'Email support', d: 'info@taxiserviceksa.com for anything you want in writing.' },
                            ].map((x) => (
                                <li key={x.t} className="flex gap-4">
                                    <x.icon className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                                    <div>
                                        <p className="font-semibold text-gray-900">{x.t}</p>
                                        <p className="text-sm text-gray-600">{x.d}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">How Booking Works</h2>
                        <ol className="space-y-6">
                            {[
                                ['Tell us your journey', 'Pickup, destination, date and passengers.'],
                                ['Choose your vehicle', 'The one that fits your group and luggage.'],
                                ['Confirm your booking', 'You receive the booking details and confirmation.'],
                                ['Meet your driver', 'Your trip runs as confirmed.'],
                            ].map(([t, d], i) => (
                                <li key={t}>
                                    <Reveal delay={i * 90}>
                                        <div className="flex gap-5">
                                            <span className="w-12 h-12 rounded-2xl bg-emerald-800 text-amber-300 font-black text-lg flex items-center justify-center shrink-0" aria-hidden="true">{i + 1}</span>
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
                            <QuoteLink className="text-emerald-800 text-lg">Start your booking</QuoteLink>
                        </div>
                    </div>
                </div>
            </section>

            <AlUlaReviews place="madinah" title="What travellers said about their Madinah trips" />

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Madinah Transport Questions</h2>
                    <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border border-stone-200 px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <ApprovedDriversForLocation location="madinah" />

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#06201a]">
                <Image src="/madinah-prophets-mosque.webp" alt="" fill sizes="100vw" className="object-cover opacity-20 -z-10" aria-hidden="true" />
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Arriving in Madinah Soon?</h2>
                    <p className="text-lg text-emerald-50/80 mb-10">Tell us where you land, where you are staying and where you want to go next. We&apos;ll arrange the right private vehicle for each part of the trip.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-amber-400 text-[#06201a] hover:bg-amber-300">
                            <a href={QUOTE_HREF}>Get a Quote</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer">
                                <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Us
                            </a>
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-emerald-50/60 flex items-center justify-center gap-2"><Clock className="w-4 h-4" aria-hidden="true" /> Booking ahead is recommended in Ramadan and peak Umrah season.</p>
                </div>
            </section>
        </div>
    );
}
