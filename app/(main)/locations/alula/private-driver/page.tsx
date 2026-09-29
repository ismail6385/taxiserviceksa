import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Minus, Camera, Users, PlaneLanding, Landmark, Sunset, Building2, Info, MessageCircle, CalendarDays, Clock, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import DriverQuoteCard from '@/components/alula/DriverQuoteCard';
import AlUlaReviews from '@/components/alula/AlUlaReviews';
import AlUlaLinkStrip from '@/components/alula/AlUlaLinkStrip';
import Reveal from '@/components/alula/Reveal';

const PAGE_URL = 'https://taxiserviceksa.com/locations/alula/private-driver/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for a private driver in AlUla. Date, hours and places I want to visit: ')}`;

export const metadata: Metadata = {
    title: 'AlUla Private Driver & Chauffeur Service | Taxi Service KSA',
    description:
        'Keep one private car and driver with you in AlUla - by the hour, for a full day or across several days. Hegra, Old Town, Dadan, Elephant Rock and your own stops, planned around your itinerary.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'AlUla Private Driver & Chauffeur Service',
        description: 'One vehicle, one driver, your AlUla itinerary - hourly, full-day or multi-day.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp', width: 1024, height: 1024, alt: 'Sandstone landscape at Hegra, AlUla' }],
    },
};

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const itineraries = [
    {
        icon: Landmark,
        name: 'Hegra Day',
        stops: ['Hotel', 'Hegra visit starting point', 'Official Hegra experience', 'Pickup after your visit', 'Lunch in Old Town', 'Hotel'],
        note: 'The car takes you to and from the starting point on your Hegra booking; it does not drive through the site.',
        length: 'Part-day booking - depends on your visit slot',
    },
    {
        icon: Building2,
        name: 'Heritage Day',
        stops: ['Hotel', 'Old Town', 'Dadan', 'Jabal Ikmah', 'Hotel'],
        note: 'Dadan and Jabal Ikmah are close to each other and pair naturally. Check which sites need a ticket.',
        length: 'Several hours - depends on ticket times',
    },
    {
        icon: Sunset,
        name: 'Sunset Evening',
        stops: ['Hotel', 'Elephant Rock', 'Dinner in Old Town or AlJadidah', 'Hotel'],
        note: 'Sunset time changes through the year - we set the pickup from the date you choose.',
        length: 'Evening booking',
    },
    {
        icon: Sun,
        name: 'Full AlUla Day',
        stops: ['Hotel', 'Hegra', 'Old Town', 'Elephant Rock', 'Hotel'],
        note: 'A full day with a fixed Hegra slot at its centre. Tell us the slot and we build the rest around it.',
        length: 'Full-day booking',
    },
    {
        icon: PlaneLanding,
        name: 'Arrival Day',
        stops: ['ULH airport', 'Hotel check-in', 'Old Town or a first sight', 'Hotel'],
        note: 'Instead of an airport transfer plus a separate ride later, one driver covers both.',
        length: 'Multi-hour booking from your landing time',
    },
    {
        icon: Camera,
        name: 'Photography Day',
        stops: ['Early pickup', 'Locations on your shot list', 'Midday break', 'Sunset location', 'Hotel'],
        note: 'Flexible timing and room for gear. No special access or permits are included.',
        length: 'Full-day or split booking',
    },
];

const comparison = [
    { need: 'Airport → hotel', transfer: 'yes', driver: 'yes' },
    { need: 'Hotel → Hegra starting point', transfer: 'yes', driver: 'yes' },
    { need: 'Several attractions in one day', transfer: 'Separate bookings', driver: 'yes' },
    { need: 'Driver waits between stops', transfer: 'By arrangement', driver: 'Within booked hours' },
    { need: 'Same vehicle all day', transfer: 'no', driver: 'yes' },
    { need: 'Change the order on the day', transfer: 'no', driver: 'Within booked hours' },
];

const vehicles = [
    { name: 'Toyota Camry', img: '/toyota-camry.webp', href: '/fleet/toyota-camry/', pax: 4, bags: 2, best: 'Couples and small groups with light bags' },
    { name: 'Hyundai Staria', img: '/hyundai-staria.webp', href: '/fleet/hyundai-staria/', pax: 7, bags: 4, best: 'Families spending the day together' },
    { name: 'GMC Yukon', img: '/gmc-yukon.webp', href: '/fleet/gmc-yukon/', pax: 7, bags: 5, best: 'Premium family travel and resort guests' },
    { name: 'Toyota Hiace', img: '/toyota-hiace.webp', href: '/fleet/toyota-hiace/', pax: 11, bags: 16, best: 'Small groups and photo tours' },
    { name: 'Toyota Coaster', img: '/toyota-coaster.webp', href: '/fleet/toyota-coaster/', pax: 17, bags: 20, best: 'Larger groups' },
];

const priceFactors = ['Duration', 'Vehicle', 'Passengers', 'Your itinerary', 'Number of stops', 'Waiting time', 'Multi-day schedule', 'Travel outside AlUla'];

const faqs = [
    { q: 'Can I hire a private driver in AlUla for several hours?', a: 'Yes, you can request hourly hire. Tell us the start time and how many hours you need, and we confirm availability with the quote.' },
    { q: 'Can I hire a driver for a full day?', a: 'Yes. Choose "Full day" in the quote card and describe your plan; the hours are agreed with your quote.' },
    { q: 'Can the driver wait while I visit Hegra?', a: 'Yes, within your booked hours. The driver waits at the starting point while the official Hegra experience takes you through the site.' },
    { q: 'Can I use one driver for Elephant Rock and Old Town?', a: 'Yes - that is exactly what a chauffeur booking is for. For just hotel → Elephant Rock → hotel, a return transfer may be enough.' },
    { q: 'Can I create my own itinerary?', a: 'Yes. List your stops when you request a quote. We confirm what fits the booked time and a practical order.' },
    { q: 'Can the booking start at AlUla Airport?', a: 'Yes. The driver can meet you at ULH, take you to check in and continue with your plans.' },
    { q: 'Is the driver also a tour guide?', a: 'Not as part of this booking. The driver provides transportation and helps coordinate the day; guided interpretation comes from licensed guides or official tours.' },
    { q: 'Are attraction tickets included?', a: 'No. Tickets and official tours are booked separately through the official AlUla channels.' },
    { q: 'Can I book a vehicle for my family?', a: 'Yes. A Staria or Yukon usually suits a family. Tell us adults, children and bags; child seats can be requested in the booking form, subject to availability.' },
    { q: 'Can I request a specific vehicle?', a: 'Yes. Choose it in the quote card and we confirm availability.' },
    { q: 'Can I keep the same driver for several days?', a: 'Multi-day bookings can be requested. We try to keep the same driver, but it depends on availability and is confirmed with the booking.' },
    { q: 'What do you need for a private-driver quote?', a: 'Date, start time, duration, pickup place, passengers, bags, preferred vehicle and the places you want to visit.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Service',
            '@id': `${PAGE_URL}#service`,
            name: 'AlUla Private Driver & Chauffeur Service',
            url: PAGE_URL,
            serviceType: 'Chauffeur service',
            description:
                'A private vehicle and driver assigned to your itinerary in AlUla for an agreed period - hourly, full-day or multi-day - for heritage sites, resorts, airport days and custom plans. Attraction admission and guiding are not included.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: { '@type': 'Place', name: 'AlUla, Saudi Arabia' },
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
                    Get a Private Driver Quote
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
                    WhatsApp Us
                </a>
            </Button>
        </div>
    );
}

function Mark({ v }: { v: string }) {
    if (v === 'yes') return <Check className="w-5 h-5 text-emerald-600 mx-auto" aria-label="Yes" />;
    if (v === 'no') return <Minus className="w-5 h-5 text-stone-400 mx-auto" aria-label="No" />;
    return <span className="text-xs text-stone-600">{v}</span>;
}

function Chain({ stops, dark = false }: { stops: string[]; dark?: boolean }) {
    return (
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2 text-sm">
            {stops.map((s, i) => (
                <li key={s + i} className="flex items-center gap-1.5">
                    <span className={`rounded-full px-3 py-1 ${dark ? 'bg-white/10 text-white' : 'bg-stone-100 text-gray-800'}`}>{s}</span>
                    {i < stops.length - 1 && <ArrowRight className={`w-3.5 h-3.5 ${dark ? 'text-amber-200' : 'text-stone-400'}`} aria-hidden="true" />}
                </li>
            ))}
        </ol>
    );
}

export default function AlUlaPrivateDriverPage() {
    return (
        <div className="alula-page bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ---------------- Hero ---------------- */}
            <section className="relative isolate overflow-hidden bg-stone-950">
                <Image
                    src="/alula-hegra-tombs.webp"
                    alt="Sandstone cliffs and carved tombs in AlUla at golden hour"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[center_40%] alula-drift -z-10"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/95 via-stone-950/70 to-stone-950/30" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className="text-sm font-semibold text-amber-200 mb-4">One vehicle · One driver · Your AlUla itinerary</p>
                        <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight mb-5">AlUla Private Driver &amp; Chauffeur Service</h1>
                        <p className="text-lg text-stone-200 leading-relaxed mb-8 max-w-xl">
                            Keep the same private vehicle and driver with you while you explore AlUla, connect between attractions, attend meetings or follow your own itinerary.
                        </p>
                        <Ctas dark />
                        <p className="mt-5 text-sm text-stone-300">Hourly &amp; full-day bookings · Private vehicle · Custom itinerary</p>
                    </div>
                    <div id="quote" className="scroll-mt-40">
                        <DriverQuoteCard />
                    </div>
                </div>
            </section>

            {/* ---------------- Transfer vs driver ---------------- */}
            <section aria-labelledby="vs" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vs" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Private Driver vs One-Way Transfer</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mb-10">
                        Can you hire a car and driver for several hours or a whole day in AlUla? Yes - subject to availability, a vehicle and driver can be assigned to your plan for an agreed period. Whether you need that, or just a transfer, depends on the shape of your day.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-stone-200 p-7">
                            <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">One-way transfer</p>
                            <h3 className="mb-4">From A to B, then the car leaves</h3>
                            <div className="space-y-3 mb-5">
                                <Chain stops={['Hotel', 'Hegra']} />
                                <Chain stops={['ULH airport', 'Hotel']} />
                                <Chain stops={['Hotel', 'Elephant Rock']} />
                            </div>
                            <p className="text-sm text-gray-600">Right when you have one or two journeys in a day. See <Link href="/locations/alula/airport/" className="text-primary font-semibold hover:underline">AlUla airport transfers</Link>.</p>
                        </div>
                        <div className="rounded-2xl border-2 border-primary bg-primary/5 p-7">
                            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Private driver / chauffeur</p>
                            <h3 className="mb-4">The same car stays with you</h3>
                            <div className="mb-5">
                                <Chain stops={['Hotel', 'Hegra', 'Old Town', 'Elephant Rock', 'Hotel']} />
                            </div>
                            <p className="text-sm text-gray-600">Right when you have several stops. Your itinerary can include multiple stops, subject to the booked duration, vehicle availability and practical routing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- Why in AlUla ---------------- */}
            <section aria-labelledby="why" className="bg-stone-950 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12">
                    <div>
                        <h2 id="why" className="text-3xl md:text-4xl font-bold mb-4">Exploring AlUla Is Different From Taking a Single Taxi</h2>
                        <p className="text-stone-300 leading-relaxed mb-4">
                            A typical AlUla day is not one journey. It might be <em>hotel → Old Town → Hegra → Elephant Rock → dinner → hotel</em>, across a wide valley, with a fixed ticket time in the middle.
                        </p>
                        <p className="text-stone-300 leading-relaxed">
                            When your itinerary includes several stops or places outside the main visitor areas, pre-arranging one vehicle makes the day easier to coordinate than booking each leg separately.
                        </p>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            ['Sites are spread out', 'Hegra, Dadan, Old Town and Elephant Rock sit in different parts of the valley.'],
                            ['Resorts are away from the sites', 'Ashar Valley resorts and desert camps are separate from the heritage areas.'],
                            ['Hegra has set access', 'Visits start from an official point at a set time - your car works around it.'],
                            ['Arrival days are busy', 'Landing, check-in and a first sight fit into one booking.'],
                            ['Photographers chase light', 'Early starts and sunset stops need flexible timing.'],
                            ['Families want one car', 'Bags, snacks and car seats stay put all day.'],
                        ].map(([t, d]) => (
                            <li key={t} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                                <h3 className="mb-1">{t}</h3>
                                <p className="text-sm text-stone-400">{d}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ---------------- Itineraries ---------------- */}
            <section aria-labelledby="itineraries" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="itineraries" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Popular Private Driver Itineraries</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mb-10">Starting points for your own plan. Actual itinerary and timing are planned around attraction availability, reservations and driving time.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {itineraries.map((it, i) => (
                            <Reveal key={it.name} delay={(i % 3) * 80} className="h-full">
                                <article className="h-full flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none">
                                    <it.icon className="w-7 h-7 text-primary mb-3" aria-hidden="true" />
                                    <h3 className="mb-1">{it.name}</h3>
                                    <p className="text-xs font-semibold text-stone-500 mb-4">{it.length}</p>
                                    <div className="mb-4">
                                        <Chain stops={it.stops} />
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">{it.note}</p>
                                    <a href={QUOTE_HREF} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                                        Plan this day <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                                    </a>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- Durations ---------------- */}
            <section aria-labelledby="durations" className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="durations" className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">How Long Do You Need the Car?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            {
                                icon: Clock,
                                title: 'Hire a Private Driver by the Hour',
                                text: 'Choose the number of hours. Suits a heritage morning, an evening at Elephant Rock and dinner, shopping in Old Town, a business meeting at a resort, or airport pickup plus a first stop.',
                            },
                            {
                                icon: Sun,
                                title: 'Full-Day Private Driver in AlUla',
                                text: 'One vehicle through a longer plan: Hegra and Old Town, a heritage circuit, a family day, a photography day or several resorts. The hours are agreed with your quote.',
                            },
                            {
                                icon: CalendarDays,
                                title: 'Multi-Day Private Driver',
                                text: 'For two or three days of sightseeing, a family trip or a business visit. The schedule is agreed in advance; we aim for the same driver but that depends on availability.',
                            },
                        ].map((d) => (
                            <div key={d.title} className="rounded-2xl bg-white border border-stone-200 p-7">
                                <d.icon className="w-7 h-7 text-primary mb-3" aria-hidden="true" />
                                <h3 className="mb-2">{d.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{d.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- Destination-specific ---------------- */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-2xl border border-stone-200 p-7">
                        <Landmark className="w-7 h-7 text-primary mb-3" aria-hidden="true" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Private Driver for a Hegra Visit</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            The driver handles transport to and from the starting point on your Hegra booking. The official Hegra experience handles site access - the car does not have permission to drive through the archaeological area.
                        </p>
                        <Link href="/locations/alula/hegra/" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                            Private transportation to Hegra <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                    </div>
                    <div className="rounded-2xl border border-stone-200 p-7">
                        <Sunset className="w-7 h-7 text-primary mb-3" aria-hidden="true" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Private Driver for Elephant Rock</h2>
                        <p className="text-gray-600 leading-relaxed mb-3">
                            Only going <strong>hotel → Elephant Rock → hotel</strong>? A return transfer may be enough.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Going <strong>hotel → Elephant Rock → Old Town → dinner → hotel</strong>? That is where a private driver makes more sense.
                        </p>
                        <Link href="/locations/alula/elephant-rock/" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                            Elephant Rock transfer <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                    </div>
                    <div className="rounded-2xl border border-stone-200 p-7">
                        <Building2 className="w-7 h-7 text-primary mb-3" aria-hidden="true" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Private Driver for AlUla&apos;s Heritage Areas</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Old Town, Dadan and Jabal Ikmah work well as one outing: the driver drops you, waits at each stop within your booked hours and takes you on to the next. Some sites need tickets or have set visiting times, subject to their own booking and access rules.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-stone-200 p-7">
                        <PlaneLanding className="w-7 h-7 text-primary mb-3" aria-hidden="true" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Airport Pickup + Private Driver</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Arrive at ULH, meet your driver, check in at your hotel, then carry on with your first afternoon in AlUla - one booking instead of an airport transfer plus separate rides. Send your flight number so the start time follows your arrival.
                        </p>
                        <Link href="/locations/alula/airport/" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                            AlUla airport transfer <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ---------------- Photographers + families ---------------- */}
            <section className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3"><Camera className="w-7 h-7 text-primary" aria-hidden="true" /> Private Driver for Photography Itineraries</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            AlUla&apos;s sandstone changes colour through the day, so photographers tend to want an early start, a quiet midday and a sunset location - often with gear that is awkward to carry between rides.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            A private driver gives you flexible timing within your booking, one vehicle for camera bags and tripods, and a ride back after the light is gone. Access rules and any permits for specific sites are separate and not included.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3"><Users className="w-7 h-7 text-primary" aria-hidden="true" /> Private Driver for Families &amp; Groups</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            With children, a single vehicle for the day means bags, snacks and car seats stay in one place between stops. For groups, one van keeps everyone together.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Tell us the number of adults, children, bags and any equipment. Vehicle recommendations are based on passenger count, luggage and itinerary. Child seats can be requested in the booking form, subject to availability.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------------- Comparison + guide box ---------------- */}
            <section aria-labelledby="compare" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
                    <div>
                        <h2 id="compare" className="text-3xl font-bold text-gray-900 mb-6">Which Booking Fits Your Day?</h2>
                        <Reveal>
                            <div className="overflow-x-auto rounded-2xl border border-stone-200">
                                <table className="w-full text-sm">
                                    <thead className="bg-stone-50 text-left">
                                        <tr>
                                            <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Need</th>
                                            <th scope="col" className="px-4 py-3 font-semibold text-gray-900 text-center">One-way transfer</th>
                                            <th scope="col" className="px-4 py-3 font-semibold text-gray-900 text-center">Private driver</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-stone-100">
                                        {comparison.map((r) => (
                                            <tr key={r.need}>
                                                <th scope="row" className="px-4 py-3 text-left font-medium text-gray-800">{r.need}</th>
                                                <td className="px-4 py-3 text-center"><Mark v={r.transfer} /></td>
                                                <td className="px-4 py-3 text-center"><Mark v={r.driver} /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Reveal>
                    </div>
                    <aside className="space-y-5">
                        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6">
                            <h2 className="text-xl font-bold text-amber-950 mb-2 flex items-center gap-2"><Info className="w-5 h-5" aria-hidden="true" /> Driver or tour guide?</h2>
                            <p className="text-sm text-amber-950/85 leading-relaxed">
                                A private driver provides transportation and helps with the practical side of your day - routing, timing, waiting. A tour guide provides historical context and guided sightseeing. A private driver booking does not include a licensed guide; guiding at sites like Hegra comes with the official experience.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-stone-200 p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2"><MessageCircle className="w-5 h-5 text-primary" aria-hidden="true" /> Staying in touch</h2>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Pickup details and any changes on the day are coordinated by WhatsApp. If you need a driver who speaks a particular language, ask when you book and we will tell you what we can arrange.
                            </p>
                        </div>
                    </aside>
                </div>
            </section>

            {/* ---------------- Included / not included ---------------- */}
            <section className="bg-stone-950 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">What Your Booking Includes</h2>
                        <ul className="space-y-3 text-stone-300">
                            {['A private vehicle and driver for the agreed period', 'Pickup and drop-off at the agreed places', 'The stops you plan, within the booked time', 'Waiting at agreed stops during the booking', 'Help loading bags'].map((t) => (
                                <li key={t} className="flex gap-3"><Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />{t}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6">What It Does Not Include</h2>
                        <ul className="space-y-3 text-stone-300">
                            {['Attraction admission and official Hegra tour tickets', 'A licensed tour guide', 'Meals and personal expenses', 'Time beyond your booking (quoted separately)', 'Special site access or permits'].map((t) => (
                                <li key={t} className="flex gap-3"><Minus className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" aria-hidden="true" />{t}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-stone-500 mt-5">Anything else you want to check - ask when you get your quote.</p>
                    </div>
                </div>
            </section>

            {/* ---------------- Vehicles ---------------- */}
            <section aria-labelledby="vehicles" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Choose Your Vehicle</h2>
                    <p className="text-gray-600 mb-8 max-w-3xl">Capacities are the figures our booking system uses. For a full day, leave room to spare - comfort matters more over eight hours than over twenty minutes.</p>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
                        {vehicles.map((v, i) => (
                            <Reveal key={v.name} delay={i * 60} className="h-full">
                                <Link href={v.href} className="group h-full flex flex-col rounded-2xl border border-stone-200 overflow-hidden bg-white transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                                    <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                                        <Image src={v.img} alt={`${v.name} for private driver hire in AlUla`} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                                    </div>
                                    <div className="p-4 flex-1">
                                        <h3 className="mb-1">{v.name}</h3>
                                        <p className="text-sm text-gray-700">Up to {v.pax} passengers · about {v.bags} large bags</p>
                                        <p className="text-xs text-stone-500 mt-1">{v.best}</p>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                    <div className="rounded-2xl bg-stone-50 border border-stone-200 p-6">
                        <h3 className="mb-4">Quick guide</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                            {[
                                ['1-2 people', 'Sedan'],
                                ['3-4 people with bags', 'Sedan or SUV, depending on luggage'],
                                ['5-7 people', 'Staria or Yukon'],
                                ['Larger group', 'Hiace or Coaster'],
                            ].map(([who, car]) => (
                                <li key={who} className="rounded-xl bg-white border border-stone-200 p-4">
                                    <span className="block text-stone-500">{who}</span>
                                    <span className="block font-semibold text-gray-900">{car}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs text-stone-500 mt-4">Recommendations are based on passenger count, luggage and itinerary - we confirm with your quote.</p>
                    </div>
                </div>
            </section>

            {/* ---------------- Pricing + process ---------------- */}
            <section className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How AlUla Private Driver Pricing Works</h2>
                        <p className="text-gray-600 mb-6">Every AlUla booking is quoted for the day you describe. The price depends on:</p>
                        <ul className="flex flex-wrap gap-2 mb-8">
                            {priceFactors.map((f) => (
                                <li key={f} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-gray-700">{f}</li>
                            ))}
                        </ul>
                        <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90">
                            <a href={QUOTE_HREF}>
                                Request a Custom Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                            </a>
                        </Button>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Have Your Own AlUla Itinerary?</h2>
                        <p className="text-gray-600 mb-6">Tell us your plan and we confirm what can be accommodated.</p>
                        <ol className="space-y-4">
                            {[
                                ['Tell us your plan', 'Pickup place, date, start time, duration, passengers, bags and the places you want to visit.'],
                                ['Choose your vehicle', 'We recommend one that suits your group, luggage and day.'],
                                ['Confirm your quote', 'You receive the agreed price and booking details.'],
                                ['Meet your driver', 'The driver collects you at the agreed place and follows the confirmed itinerary.'],
                            ].map(([t, d], i) => (
                                <li key={t} className="flex gap-4">
                                    <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0" aria-hidden="true">0{i + 1}</span>
                                    <div>
                                        <h3 className="mb-0.5">{t}</h3>
                                        <p className="text-sm text-gray-600">{d}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            <AlUlaReviews />

            {/* ---------------- FAQ ---------------- */}
            <section aria-labelledby="faq" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Private Driver Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-stone-200 px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <p className="mt-6 text-sm text-gray-600">
                        Need a driver elsewhere in the Kingdom? See our <Link href="/services/private-driver/" className="text-primary font-semibold hover:underline">Saudi Arabia private driver service</Link> and{' '}
                        <Link href="/services/tourism-transport/" className="text-primary font-semibold hover:underline">tourism transport</Link>.
                    </p>
                </div>
            </section>

            {/* ---------------- Final CTA ---------------- */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-stone-900">
                <Image src="/alula-hegra-tombs.webp" alt="" fill sizes="100vw" className="object-cover opacity-25 -z-10" aria-hidden="true" />
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">Have a Full Day Planned in AlUla?</h2>
                    <p className="text-lg text-stone-300 mb-10 leading-relaxed">
                        Tell us where you&apos;re staying, how long you&apos;d like a vehicle, how many people are travelling and which places you&apos;d like to visit. We&apos;ll help you choose the right vehicle and arrange a private driver around your itinerary.
                    </p>
                    <div className="flex justify-center">
                        <Ctas dark />
                    </div>
                </div>
            </section>

            <AlUlaLinkStrip current="/locations/alula/private-driver/" title="More transportation in AlUla" />
        </div>
    );
}
