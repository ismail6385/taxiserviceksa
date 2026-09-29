import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowRight,
    PlaneLanding,
    PlaneTakeoff,
    Luggage,
    Users,
    Moon,
    Hotel,
    Tent,
    Landmark,
    MapPin,
    Info,
    CheckCircle2,
    Car,
    Clock,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import AirportQuoteCard from '@/components/alula/AirportQuoteCard';
import AlUlaReviews from '@/components/alula/AlUlaReviews';
import Reveal from '@/components/alula/Reveal';

const PAGE_URL = 'https://taxiserviceksa.com/locations/alula/airport/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for an AlUla Airport (ULH) transfer. My flight number is: ')}`;

export const metadata: Metadata = {
    title: 'AlUla Airport Taxi & Private Transfers | ULH Airport',
    description:
        'Flying into AlUla? Pre-book a private car from AlUla International Airport (ULH) to your hotel, resort or Hegra tour - or a pickup from your hotel for your flight out. Send your flight number for a quote.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'AlUla Airport Taxi & Private Transfers | ULH',
        description: 'Private pre-booked transfers between AlUla International Airport (ULH) and hotels, resorts and attractions across AlUla.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp', width: 1024, height: 1024, alt: 'Sandstone tombs at Hegra, AlUla' }],
    },
};

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const arrivalSteps = [
    { n: '01', title: 'Share your flight details', text: 'Flight number, arrival date and where you are staying. A resort name is enough - we find the right entrance.' },
    { n: '02', title: 'Pickup is confirmed', text: 'Before you fly, we confirm the vehicle, the driver and how you will meet at the airport.' },
    { n: '03', title: 'Collect your luggage', text: 'Collect your bags as usual, then follow the meeting instructions in your confirmation.' },
    { n: '04', title: 'Meet your driver', text: 'The driver meets you at the agreed airport pickup location and helps load the bags.' },
    { n: '05', title: 'Straight to your stay', text: 'Directly to your hotel, resort gate, desert camp or onward city - no other passengers, no stops you did not ask for.' },
];

const stays = [
    {
        icon: Hotel,
        title: 'AlUla town & Old Town',
        text: 'Town hotels and heritage stays near the Old Town. The simplest drop-offs - door to door.',
    },
    {
        icon: Landmark,
        title: 'Ashar Valley resorts',
        text: 'Resorts such as Habitas AlUla and Banyan Tree AlUla sit in the Ashar Valley. Some control access at a gate; we follow each resort\'s drop-off arrangement.',
    },
    {
        icon: Tent,
        title: 'Desert camps & glamping',
        text: 'Camps can be off the main road. Send the location pin with your booking so the driver knows exactly where you are going.',
    },
    {
        icon: MapPin,
        title: 'Other hotels around AlUla',
        text: 'Accommodation is spread across the wider area, not only in town. Share the property name and we plan the route.',
    },
];

const vehicles = [
    { name: 'Toyota Camry', img: '/toyota-camry.webp', href: '/fleet/toyota-camry/', pax: 4, bags: 2, best: 'Couples and solo travellers with light bags' },
    { name: 'Hyundai Staria', img: '/hyundai-staria.webp', href: '/fleet/hyundai-staria/', pax: 7, bags: 4, best: 'Families arriving with suitcases' },
    { name: 'GMC Yukon', img: '/gmc-yukon.webp', href: '/fleet/gmc-yukon/', pax: 7, bags: 5, best: 'Resort guests wanting extra space and comfort' },
    { name: 'Toyota Hiace', img: '/toyota-hiace.webp', href: '/fleet/toyota-hiace/', pax: 11, bags: 16, best: 'Small groups travelling together' },
    { name: 'Toyota Coaster', img: '/toyota-coaster.webp', href: '/fleet/toyota-coaster/', pax: 17, bags: 20, best: 'Tour groups and delegations' },
];

const routes = [
    { from: 'ULH', to: 'Hotels & resorts in AlUla', href: '#hotels', note: 'The most common airport run' },
    { from: 'ULH', to: 'Old Town', href: '/locations/alula/', note: 'Straight to the heritage quarter' },
    { from: 'ULH', to: 'Hegra tour start', href: '/locations/alula/hegra/', note: 'Timed to your tour ticket' },
    { from: 'ULH', to: 'Elephant Rock', href: '/locations/alula/elephant-rock/', note: 'For late-afternoon arrivals' },
    { from: 'AlUla', to: 'Madinah', href: '/routes/alula-madinah/', note: 'Land in AlUla, continue by road' },
    { from: 'AlUla', to: 'Tabuk', href: '/routes/tabuk-alula/', note: 'Road connection to the north' },
];

const priceFactors = ['Destination in AlUla', 'Vehicle type', 'Passengers', 'Luggage', 'One way or return', 'Waiting time', 'Extra stops', 'Special requests'];

const faqs = [
    { q: 'What airport does AlUla use?', a: 'AlUla International Airport, which serves the AlUla area directly. Its IATA code is ULH.' },
    { q: 'How do I book a taxi from AlUla Airport?', a: 'Fill in the quote card on this page or message us on WhatsApp with your flight number, date, passengers, luggage and destination. We reply with a price and pickup details.' },
    { q: 'Can you pick me up from AlUla International Airport?', a: 'Yes. Pickups are pre-booked, and the meeting arrangement is confirmed before you travel.' },
    { q: 'Can I book a transfer to my AlUla hotel or resort?', a: 'Yes - town hotels, Ashar Valley resorts and desert camps. For gated resorts we follow the resort\'s drop-off arrangement.' },
    { q: 'Can I go straight from the airport to Hegra?', a: 'Yes. We take you to the starting point for your Hegra tour ticket. Private cars do not drive through the archaeological site itself.' },
    { q: 'What information do you need for my airport transfer?', a: 'Flight number, date, arrival or departure time, number of passengers, number of large suitcases, and the hotel or destination.' },
    { q: 'Can I book a pickup from my hotel to AlUla Airport?', a: 'Yes. Tell us your flight time and hotel, and we suggest a pickup time that suits your flight and where you are staying.' },
    { q: 'Can you handle a lot of luggage?', a: 'Yes, if we know in advance. Tell us how many large suitcases you have and about any special items so we send a vehicle with enough space.' },
    { q: 'Can I book for a family or group?', a: 'Yes. Vans such as the Staria, Hiace and Coaster suit families and groups. Child seats can be requested in the booking form, subject to availability.' },
    { q: 'Can I request a specific vehicle?', a: 'Yes. Choose it in the quote card or booking form and we confirm availability with your quote.' },
    { q: 'Can I book an early-morning or late-night transfer?', a: 'Yes. Transfers are arranged around your flight time, subject to vehicle and driver availability, so book as early as you can.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'AlUla Airport Private Transfer',
            url: PAGE_URL,
            serviceType: 'Airport transfer',
            description:
                'Pre-booked private transfers between AlUla International Airport (ULH) and hotels, resorts, attractions and onward destinations in and around AlUla.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: [
                { '@type': 'Airport', name: 'AlUla International Airport', iataCode: 'ULH' },
                { '@type': 'Place', name: 'AlUla, Saudi Arabia' },
            ],
            image: 'https://taxiserviceksa.com/alula-hegra-tombs.webp',
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

function Ctas({ dark = false }: { dark?: boolean }) {
    return (
        <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={QUOTE_HREF}>
                    Get a Transfer Quote
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                </a>
            </Button>
            <Button
                asChild
                size="lg"
                variant="outline"
                className={`h-auto py-4 px-7 rounded-xl font-bold text-base ${dark ? 'bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white' : 'bg-white text-gray-900 border-stone-300 hover:bg-stone-50'}`}
            >
                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer">
                    <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" />
                    WhatsApp Booking
                </a>
            </Button>
        </div>
    );
}

export default function AlUlaAirportPage() {
    return (
        <div className="alula-page bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ---------------- Hero + quote card ---------------- */}
            <section className="relative isolate overflow-hidden bg-stone-950">
                <Image
                    src="/alula-hegra-tombs.webp"
                    alt="Sandstone outcrops and Nabataean tombs in AlUla at sunset"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[center_45%] alula-drift -z-10"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/95 via-stone-950/75 to-stone-950/40" aria-hidden="true" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 mb-4">
                            <PlaneLanding className="w-4 h-4" aria-hidden="true" />
                            ULH Airport <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" /> Your AlUla hotel or resort
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight mb-5">AlUla Airport Taxi &amp; Private Transfer Service</h1>
                        <p className="text-lg text-stone-200 leading-relaxed mb-8 max-w-xl">
                            Pre-book a private transfer from AlUla International Airport (ULH) to your hotel, resort or onward destination - or arrange a pickup from your hotel for your flight home.
                        </p>
                        <Ctas dark />
                        <p className="mt-5 text-sm text-stone-300">Private pre-booked transfers · Door-to-door service · Vehicle matched to your group</p>
                    </div>
                    <div id="quote" className="scroll-mt-40">
                        <AirportQuoteCard />
                    </div>
                </div>
            </section>

            {/* ---------------- Flight details + airport facts ---------------- */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Your Flight Number Matters</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            ULH is a small airport serving a spread-out destination. When a flight lands, most of its passengers are heading off at the same moment to different hotels, resorts and camps across the valley - so a car that is already expecting you makes the first hour of your trip much simpler.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Send us your flight number when booking. It helps us coordinate the pickup around your scheduled arrival and any changes shown in the flight status. If your flight is rescheduled, message us on WhatsApp so the pickup can be moved.
                        </p>
                    </div>
                    <aside aria-labelledby="airport-facts" className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                        <h2 id="airport-facts" className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-4">The airport</h2>
                        <dl className="space-y-3 text-sm">
                            {[
                                ['Name', 'AlUla International Airport'],
                                ['IATA code', 'ULH'],
                                ['Previously', 'Prince Abdul Majeed bin Abdulaziz Airport'],
                                ['Location', 'AlUla, Madinah Province, Saudi Arabia'],
                                ['Role', 'The air gateway for visitors to AlUla and its heritage sites'],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-stone-200 pb-2 last:border-0">
                                    <dt className="text-stone-500">{k}</dt>
                                    <dd className="font-semibold text-gray-900 text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                    </aside>
                </div>
            </section>

            {/* ---------------- Arrival timeline ---------------- */}
            <section aria-labelledby="arriving" className="bg-stone-950 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="arriving" className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3">
                        <PlaneLanding className="w-8 h-8 text-amber-200" aria-hidden="true" /> Arriving at AlUla Airport?
                    </h2>
                    <p className="text-stone-400 mb-12 max-w-2xl">Here is how an arrival pickup works, from booking to your hotel door.</p>
                    <ol className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {arrivalSteps.map((s, i) => (
                            <li key={s.n}>
                                <Reveal delay={i * 80} className="h-full">
                                    <div className="h-full border-t-2 border-amber-200/70 pt-5">
                                        <span className="block text-3xl font-black text-amber-200/80 mb-2" aria-hidden="true">{s.n}</span>
                                        <h3 className="mb-2">{s.title}</h3>
                                        <p className="text-sm text-stone-400 leading-relaxed">{s.text}</p>
                                    </div>
                                </Reveal>
                            </li>
                        ))}
                    </ol>
                    <p className="mt-10 text-sm text-stone-400 flex gap-2 items-start">
                        <Info className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                        The exact meeting arrangement is given in your booking confirmation rather than fixed on this page, because pickup arrangements at the terminal can change.
                    </p>
                    <div className="mt-10">
                        <Ctas dark />
                    </div>
                </div>
            </section>

            {/* ---------------- Departures ---------------- */}
            <section aria-labelledby="departures" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 id="departures" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <PlaneTakeoff className="w-8 h-8 text-primary" aria-hidden="true" /> Hotel or Resort to AlUla Airport
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            The question we hear most on departure day is: <em>what time should the driver collect me?</em> There is no single answer in AlUla, because a room in town and a tent at a desert camp are very different distances from the terminal.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Your recommended pickup time is planned around your flight, where you are staying and your airline&apos;s check-in requirements. We suggest a time when you book, and you can adjust it.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-stone-200 p-7 bg-white shadow-sm">
                        <h3 className="mb-4">What we ask for a departure pickup</h3>
                        <ul className="space-y-3 text-gray-700">
                            {[
                                'Flight number and departure time',
                                'Hotel, resort or camp name (and room check-out time if it matters to you)',
                                'Number of passengers and large suitcases',
                                'Whether your resort needs time for a buggy ride to its gate',
                                'Any stop on the way, such as a last visit or a meal',
                            ].map((t) => (
                                <li key={t} className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" /> <span>{t}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm text-stone-500 mt-5">The driver collects you at the agreed time and drives directly to ULH.</p>
                    </div>
                </div>
            </section>

            {/* ---------------- Hotels & resorts ---------------- */}
            <section id="hotels" aria-labelledby="hotels-title" className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8 scroll-mt-40">
                <div className="max-w-6xl mx-auto">
                    <h2 id="hotels-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">From AlUla Airport to Your Hotel or Resort</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mb-10 leading-relaxed">
                        AlUla does not have one hotel district. Places to stay are scattered through the valley and the desert around it, so travel time from ULH depends on where you are booked. Transfers are available to selected hotels, resorts and camps across the area.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {stays.map((s, i) => (
                            <Reveal key={s.title} delay={(i % 2) * 80} className="h-full">
                                <div className="h-full rounded-2xl bg-white border border-stone-200 p-6 transition hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none">
                                    <s.icon className="w-7 h-7 text-primary mb-3" aria-hidden="true" />
                                    <h3 className="mb-2">{s.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Schematic, not a map */}
                    <figure className="mt-12 rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
                        <figcaption className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-6">How an airport transfer fits into AlUla (schematic, not to scale)</figcaption>
                        <ol className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0 text-sm">
                            {['ULH Airport', 'AlUla town & Old Town', 'Hotels, resorts & camps across the valley', 'Hegra, Elephant Rock & other sites further out'].map((step, i, arr) => (
                                <li key={step} className="flex md:flex-1 items-center gap-3">
                                    <span className={`rounded-xl px-4 py-3 font-semibold flex-1 text-center ${i === 0 ? 'bg-primary text-primary-foreground' : 'bg-stone-100 text-gray-800'}`}>{step}</span>
                                    {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-stone-400 shrink-0 rotate-90 md:rotate-0 md:mx-2" aria-hidden="true" />}
                                </li>
                            ))}
                        </ol>
                        <p className="mt-6 text-sm text-stone-500">Travel time depends on your hotel or destination within the AlUla area; we confirm it with your quote.</p>
                    </figure>
                </div>
            </section>

            {/* ---------------- Hegra + other attractions ---------------- */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="rounded-2xl overflow-hidden border border-stone-200 group">
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src="/alula-hegra.webp"
                                alt="Rock-cut tomb facades at Hegra"
                                fill
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                            />
                        </div>
                        <div className="p-7">
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">From AlUla Airport to Hegra</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Some visitors land and go straight to a Hegra tour. Hegra is visited on official tours, so the car takes you to the appropriate visitor or tour starting point for your ticket - it does not drive into the archaeological area. Share your tour time and we plan the pickup so you are not rushing.
                            </p>
                            <Link href="/locations/alula/hegra/" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                                Private transportation to Hegra <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-stone-200 p-7">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Going Straight to an Attraction?</h2>
                        <p className="text-gray-600 leading-relaxed mb-5">
                            Yes, the drop-off does not have to be your hotel. With bags in the car, you can go directly to:
                        </p>
                        <ul className="space-y-3 text-gray-700 mb-5">
                            <li className="flex gap-3"><MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" /><span><Link href="/locations/alula/elephant-rock/" className="font-semibold hover:text-primary">Elephant Rock</Link> - popular for late-afternoon arrivals who want the sunset</span></li>
                            <li className="flex gap-3"><MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" /><span>Old Town - for lunch or a walk before check-in</span></li>
                            <li className="flex gap-3"><MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" /><span>Winter Park or Dadan and Jabal Ikmah - if your ticket starts there</span></li>
                        </ul>
                        <p className="text-sm text-stone-500">
                            If the driver needs to wait while you visit, that is a chauffeur booking rather than a one-way transfer - see our <Link href="/locations/alula/private-driver/" className="text-primary font-semibold hover:underline">AlUla private driver options</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------------- Why pre-book ---------------- */}
            <section aria-labelledby="prebook" className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="prebook" className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Why Pre-Book Your Airport Transfer?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                        {[
                            ['Arranged before you land', 'The driver and vehicle are organised before your flight, not at the kerb.'],
                            ['Destination already known', 'The driver knows your resort, camp or tour point before you meet.'],
                            ['Vehicle fits your luggage', 'You pick the car by passengers and suitcases, not by what is available.'],
                            ['Timed to your flight', 'Pickup is coordinated with the flight number you give us.'],
                            ['Made for out-of-town stays', 'Useful when your accommodation is outside the main town area.'],
                            ['Easier with family or a group', 'One vehicle for everyone and all the bags.'],
                        ].map(([t, d]) => (
                            <div key={t} className="border-l-2 border-primary pl-5">
                                <h3 className="mb-1">{t}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- Vehicles + luggage ---------------- */}
            <section aria-labelledby="vehicles" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Choose a Vehicle for Your Arrival</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mb-10">Capacities are the figures our booking system uses. Actual space depends on bag sizes.</p>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                        {vehicles.map((v, i) => (
                            <Reveal key={v.name} delay={i * 60} className="h-full">
                                <Link href={v.href} className="group h-full flex flex-col rounded-2xl border border-stone-200 overflow-hidden bg-white transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                                    <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                                        <Image src={v.img} alt={`${v.name} for AlUla airport transfers`} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                                    </div>
                                    <div className="p-4 flex-1">
                                        <h3 className="mb-2">{v.name}</h3>
                                        <p className="text-sm text-gray-700 flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" aria-hidden="true" /> Up to {v.pax} passengers</p>
                                        <p className="text-sm text-gray-700 flex items-center gap-1.5"><Luggage className="w-4 h-4 text-primary" aria-hidden="true" /> About {v.bags} large bags</p>
                                        <p className="text-xs text-stone-500 mt-2">{v.best}</p>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
                            <h3 className="mb-2 flex items-center gap-2"><Luggage className="w-5 h-5 text-amber-800" aria-hidden="true" /> Travelling with luggage?</h3>
                            <p className="text-sm text-amber-950/80 leading-relaxed">
                                Vehicle choice depends on luggage as much as passengers. Four adults fit a Camry; four adults with four large suitcases do not. When you request a quote, tell us the number of large suitcases, cabin bags and any special items - camera gear, golf bags, strollers or camping equipment for a desert stay.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-stone-50 border border-stone-200 p-6">
                            <h3 className="mb-2 flex items-center gap-2"><Users className="w-5 h-5 text-primary" aria-hidden="true" /> Families &amp; groups</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Couples usually take a sedan; families a Staria or Yukon; groups a Hiace or Coaster. For larger groups, send the exact passenger and suitcase count so we can confirm one vehicle or suggest two. Child seats can be requested in the booking form, subject to availability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- Early / late + distinctions ---------------- */}
            <section className="bg-stone-950 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3"><Moon className="w-7 h-7 text-amber-200" aria-hidden="true" /> Arriving Early or Late?</h2>
                        <p className="text-stone-300 leading-relaxed mb-4">
                            Flight times change with airline schedules, and some fall late in the evening or early in the morning - when you least want to be arranging a ride to a resort outside town. Pre-booked airport transfers can be arranged around your flight schedule, subject to vehicle and driver availability.
                        </p>
                        <p className="text-stone-300 leading-relaxed">For flights at unusual hours, book as early as you can so a driver can be assigned.</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3"><Car className="w-7 h-7 text-amber-200" aria-hidden="true" /> Transfer, Chauffeur or Sightseeing?</h2>
                        <dl className="space-y-4 text-sm">
                            <div>
                                <dt className="font-bold text-white">Airport transfer</dt>
                                <dd className="text-stone-400">One journey between ULH and a single destination. This page.</dd>
                            </div>
                            <div>
                                <dt className="font-bold text-white">Chauffeur service</dt>
                                <dd className="text-stone-400">A car and driver for a set number of hours - for example landing, then several stops.</dd>
                            </div>
                            <div>
                                <dt className="font-bold text-white">Sightseeing day</dt>
                                <dd className="text-stone-400">
                                    Transport between attractions on your own plan. Site tickets and guides are separate. See the <Link href="/locations/alula/" className="text-amber-200 hover:underline">AlUla transport overview</Link>.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>

            {/* ---------------- Booking process ---------------- */}
            <section aria-labelledby="process" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="process" className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">How Booking Works</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            ['Send your trip details', 'Flight number, date, passengers, luggage and destination.'],
                            ['Choose your vehicle', 'We match the vehicle to your group and bags.'],
                            ['Receive your quote', 'Confirm the price and the booking details.'],
                            ['Meet your driver', 'Follow the meeting instructions in your confirmation.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="relative rounded-2xl border border-stone-200 p-6 bg-white">
                                <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center" aria-hidden="true">{i + 1}</span>
                                <h3 className="mt-2 mb-1">{t}</h3>
                                <p className="text-sm text-gray-600">{d}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ---------------- Pricing ---------------- */}
            <section aria-labelledby="pricing" className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 id="pricing" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How AlUla Airport Transfer Pricing Is Calculated</h2>
                    <p className="text-lg text-gray-600 mb-8">Because hotels and camps are spread across AlUla, there is no single airport fare. Your fixed quote depends on:</p>
                    <ul className="flex flex-wrap justify-center gap-2 mb-10">
                        {priceFactors.map((f) => (
                            <li key={f} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-gray-700">{f}</li>
                        ))}
                    </ul>
                    <Button asChild size="lg" className="group h-auto py-4 px-8 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90">
                        <a href={QUOTE_HREF}>
                            Request Your Exact Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                        </a>
                    </Button>
                </div>
            </section>

            {/* ---------------- Routes ---------------- */}
            <section aria-labelledby="routes" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="routes" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Popular Airport Routes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {routes.map((r) => (
                            <Link
                                key={r.to}
                                href={r.href}
                                className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                <span>
                                    <span className="block text-xs text-stone-500">{r.from}</span>
                                    <span className="block font-bold text-gray-900">{r.to}</span>
                                    <span className="block text-xs text-stone-500 mt-1">{r.note}</span>
                                </span>
                                <ArrowRight className="w-5 h-5 text-primary transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                            </Link>
                        ))}
                    </div>
                    <p className="mt-6 text-sm text-gray-600">
                        Transferring through another Saudi airport as well? Our <Link href="/services/airport-transfers/" className="text-primary font-semibold hover:underline">airport transfer service</Link> covers the other major airports in the Kingdom, and there is a{' '}
                        <Link href="/routes/alula-jeddah/" className="text-primary font-semibold hover:underline">transfer from AlUla to Jeddah</Link> for those continuing by road.
                    </p>
                </div>
            </section>

            <AlUlaReviews />

            {/* ---------------- FAQ ---------------- */}
            <section aria-labelledby="faq" className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">AlUla Airport Transfer Questions</h2>
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

            {/* ---------------- Final CTA ---------------- */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-stone-900">
                <Image src="/alula-hegra-tombs.webp" alt="" fill sizes="100vw" className="object-cover opacity-25 -z-10" aria-hidden="true" />
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">Ready to Arrange Your AlUla Airport Transfer?</h2>
                    <p className="text-lg text-stone-300 mb-10 leading-relaxed">
                        Send us your flight number, travel date, destination, passenger count and luggage details. We&apos;ll help you arrange the appropriate private vehicle for your journey.
                    </p>
                    <div className="flex justify-center">
                        <Ctas dark />
                    </div>
                    <p className="mt-6 text-sm text-stone-400 flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4" aria-hidden="true" /> Or email <a href="mailto:info@taxiserviceksa.com" className="underline hover:text-white">info@taxiserviceksa.com</a>
                    </p>
                </div>
            </section>
        </div>
    );
}
