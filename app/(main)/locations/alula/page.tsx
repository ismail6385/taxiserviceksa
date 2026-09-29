import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowRight,
    Plane,
    Hotel,
    Landmark,
    Route,
    Sunset,
    Building2,
    Car,
    Crown,
    DoorOpen,
    CalendarCheck,
    UserRound,
    Shuffle,
    MessageCircle,
    Users,
    Info,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import HeroBookingWidget from '@/components/HeroBookingWidget';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ApprovedDriversForLocation from '@/components/ApprovedDriversForLocation';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import Reveal from '@/components/alula/Reveal';
import AlUlaReviews from '@/components/alula/AlUlaReviews';

const PAGE_URL = 'https://taxiserviceksa.com/locations/alula/';
const QUOTE_HREF = '/booking/?to=AlUla';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for private transport in AlUla.')}`;

export const metadata: Metadata = {
    title: 'AlUla Taxi & Private Transfer Service | Taxi Service KSA',
    description:
        'Pre-book a private car in AlUla: airport pickups, hotel and resort transfers, a driver for sightseeing, trips to Hegra and Elephant Rock, and long-distance journeys to Madinah, Tabuk and beyond.',
    alternates: {
        canonical: PAGE_URL,
        languages: {
            en: PAGE_URL,
            ar: 'https://taxiserviceksa.com/ar/locations/alula/',
            ur: 'https://taxiserviceksa.com/ur/locations/alula/',
            'x-default': PAGE_URL,
        },
    },
    openGraph: {
        title: 'AlUla Taxi & Private Transfer Service',
        description: 'Private airport transfers, hotel pickups, sightseeing with a driver and long-distance journeys from AlUla.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp', width: 1024, height: 1024, alt: 'Nabataean tombs at Hegra, AlUla, at sunset' }],
    },
};

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const services = [
    {
        icon: Plane,
        title: 'AlUla Airport Transfers',
        who: 'Travellers flying into or out of AlUla International Airport',
        text: 'The airport sits outside town, and most hotels, resorts and camps are a drive away. Your car is arranged before you land, so there is nothing to sort out at the kerb.',
        note: 'Send your flight number and the name of your stay.',
        href: '/locations/alula/airport/',
        linkText: 'Airport transfer details',
    },
    {
        icon: Hotel,
        title: 'Hotel & Resort Transfers',
        who: 'Guests moving between hotels, resorts, camps and the airport',
        text: 'AlUla stays are scattered across valleys and desert rather than grouped in one centre, and some resorts manage vehicle access at a gate.',
        note: 'Tell us the property name - we follow its drop-off arrangement.',
    },
    {
        icon: Landmark,
        title: 'Hegra Transportation',
        who: 'Visitors holding a Hegra tour ticket',
        text: 'Hegra is visited on official tours, so the car takes you to the departure point shown on your ticket and collects you afterwards - it does not drive you around the tombs.',
        note: 'Book your Hegra ticket first, then match the pickup to the tour time.',
        href: '/locations/alula/hegra/',
        linkText: 'Getting to Hegra',
    },
    {
        icon: Route,
        title: 'Sightseeing With a Driver',
        who: 'Anyone seeing several sites in one day',
        text: 'Old Town, Dadan, Jabal Ikmah, Elephant Rock and Hegra are in different parts of the valley. One car that waits for you is simpler than arranging a new ride at every stop.',
        note: 'This is transport only - site tickets and licensed guides are separate.',
        href: '/locations/alula/private-driver/',
        linkText: 'Hourly and full-day options',
    },
    {
        icon: Sunset,
        title: 'Elephant Rock Transfers',
        who: 'Sunset visitors and evening diners',
        text: 'Most people arrive in the late afternoon and leave after dark. Having the return journey already arranged means you can stay as long as you like.',
        note: 'Pick a collection time, or keep the driver waiting.',
        href: '/locations/alula/elephant-rock/',
        linkText: 'Elephant Rock trips',
    },
    {
        icon: Building2,
        title: 'Old Town & Heritage Area',
        who: 'Guests heading out for an evening walk or dinner',
        text: 'Old Town and the nearby AlJadidah arts district are busiest in the evening. A pickup from your hotel and a set time to come back keep the night simple.',
        note: 'Share your restaurant booking time if you have one.',
    },
    {
        icon: Car,
        title: 'Intercity Transfers',
        who: 'Travellers arriving from, or continuing to, another city',
        text: 'AlUla has no passenger rail link, and many visitors come by road from Madinah or continue north towards Tabuk afterwards.',
        note: 'Long journeys include stops for prayer, food and rest on request.',
        href: '#routes',
        linkText: 'See routes',
    },
    {
        icon: Crown,
        title: 'Chauffeur Service',
        who: 'Families, business guests and VIP visitors',
        text: 'For resort stays, events at Maraya or business visits, some guests prefer a premium SUV and a driver who stays on call for the day.',
        note: 'Request the vehicle type when you book.',
    },
];

const areas = [
    { name: 'AlUla International Airport', need: 'Outside town. Arrivals are easiest with a car booked in advance.' },
    { name: 'Old Town & AlJadidah', need: 'Walkable once you are there; most people need a ride to and from their hotel.' },
    { name: 'Dadan & Jabal Ikmah', need: 'Close to each other, so they combine well in one trip.' },
    { name: 'Ashar Valley (Maraya & resorts)', need: 'Access is managed. Drop-off depends on your booking or reservation.' },
    { name: 'Hegra', need: 'Further out. Your car meets the tour at the point named on your ticket.' },
    { name: 'Elephant Rock', need: 'A short drive from town, usually visited at sunset with a return after dark.' },
];

const routes = [
    { from: 'AlUla Airport', to: 'AlUla hotels & resorts', href: '/locations/alula/airport/', note: 'Meet on arrival, straight to your stay' },
    { from: 'AlUla Airport', to: 'Hegra', href: '/locations/alula/hegra/', note: 'Go directly to your tour departure' },
    { from: 'Madinah', to: 'AlUla', href: '/routes/madinah-alula/', note: 'The most common road into AlUla' },
    { from: 'AlUla', to: 'Madinah', href: '/routes/alula-madinah/', note: 'Hotel, airport or Haramain station' },
    { from: 'Tabuk', to: 'AlUla', href: '/routes/tabuk-alula/', note: 'From Tabuk city or Tabuk airport' },
    { from: 'AlUla', to: 'Jeddah', href: '/routes/alula-jeddah/', note: 'Long-distance, door to door' },
    { from: 'Yanbu', to: 'AlUla', href: '/routes/yanbu-alula/', note: 'From the Red Sea coast' },
    { from: 'AlUla', to: 'Khaybar', href: '/routes/alula-khaybar/', note: 'Day trip or on the way to Madinah' },
];

// Capacities follow the vehicle pages under /fleet/ (the site's source of truth).
const vehicles = [
    { name: 'Toyota Camry', img: '/toyota-camry.webp', href: '/fleet/toyota-camry/', seats: 'Up to 4 passengers', bags: 'Suits light luggage', best: 'Couples and solo travellers' },
    { name: 'Hyundai Staria', img: '/hyundai-staria.webp', href: '/fleet/hyundai-staria/', seats: 'Up to 7 passengers', bags: 'Room for family luggage', best: 'Families on airport and hotel runs' },
    { name: 'GMC Yukon', img: '/gmc-yukon.webp', href: '/fleet/gmc-yukon/', seats: 'Up to 7 passengers', bags: 'Large boot for suitcases', best: 'Resort guests and long drives' },
    { name: 'Toyota Hiace', img: '/toyota-hiace.webp', href: '/fleet/toyota-hiace/', seats: 'Up to 11 passengers', bags: 'Group luggage', best: 'Small groups and tour parties' },
    { name: 'Toyota Coaster', img: '/toyota-coaster.webp', href: '/fleet/toyota-coaster/', seats: 'Up to 17 passengers', bags: 'Large group luggage', best: 'Larger groups and delegations' },
];

const benefits = [
    { icon: DoorOpen, title: 'Door-to-door', text: 'Pickup and drop-off at the places confirmed in your booking.' },
    { icon: CalendarCheck, title: 'Arranged before you arrive', text: 'Book from home and land knowing your car is sorted.' },
    { icon: UserRound, title: 'Private vehicle', text: 'The car is yours for the trip - no shared rides.' },
    { icon: Shuffle, title: 'One team for every trip type', text: 'Airport, hotel, sightseeing and intercity in one booking.' },
    { icon: MessageCircle, title: 'Easy to reach', text: 'Coordinate changes by WhatsApp or email.' },
    { icon: Users, title: 'Vehicle matched to your group', text: 'From a sedan for two to a Coaster for a group.' },
];

const priceFactors = ['Pickup point', 'Destination', 'Vehicle type', 'Number of passengers', 'Luggage', 'Waiting time', 'Return journey', 'Extra stops'];

const tips = [
    {
        title: 'Book ahead in the cooler months',
        text: 'AlUla is busiest from autumn to spring, when festivals and events run. Cars and drivers are in higher demand then, so reserve early.',
    },
    {
        title: 'Match the car to your luggage',
        text: 'Four people with four large cases will not fit a sedan comfortably. Choose a Staria or Yukon, and mention golf bags, strollers or camping gear.',
    },
    {
        title: 'Early starts and late finishes',
        text: 'Sunrise at Hegra, sunset at Elephant Rock, a late flight - these are normal AlUla hours. Early-morning and late-night pickups can be booked.',
    },
    {
        title: 'Transfer or driver for the day?',
        text: 'One or two trips a day: book transfers. Three or more stops: an hourly or full-day driver usually works out simpler.',
    },
    {
        title: 'Coming by road',
        text: 'If AlUla is part of a longer road trip, you can book the intercity leg and the local driver together with one request.',
    },
    {
        title: 'Tickets are separate',
        text: 'Hegra, Dadan and other sites need tickets booked through the official AlUla channels. We arrange the transport around them.',
    },
];

const faqs = [
    {
        q: 'How do I book a taxi in AlUla?',
        a: 'Use the quote form on this page or message us on WhatsApp with your pickup point, destination, date, time and number of passengers. We confirm the vehicle and price before the trip.',
    },
    {
        q: 'Can I book a transfer from AlUla airport to my hotel?',
        a: 'Yes. Give us your flight number and hotel or resort name, and the driver meets you at the pickup point agreed in your confirmation.',
    },
    {
        q: 'Can I hire a car with a driver for sightseeing?',
        a: 'Yes - by the hour, for a full day or over several days. The same car stays with you between sites. Site entry and guiding are not included.',
    },
    {
        q: 'Can you take us to Hegra?',
        a: 'We take you to the tour departure point shown on your Hegra ticket and pick you up when the tour ends. Private cars do not drive through the site itself.',
    },
    {
        q: 'Can I book transport to Elephant Rock for sunset?',
        a: 'Yes. Most guests book a return trip so the ride back after dark is already arranged.',
    },
    {
        q: 'Can I arrange a transfer from AlUla to Madinah?',
        a: 'Yes, to your Madinah hotel, the airport or the Haramain train station. Khaybar can be added as a stop on the way.',
    },
    {
        q: 'Do you have vehicles for families and groups?',
        a: 'Yes. Staria and Yukon suit families; Hiace and Coaster suit larger groups.',
    },
    {
        q: 'Can I request a specific vehicle?',
        a: 'Yes. Choose it in the booking form or mention it in your message, and we confirm availability.',
    },
    {
        q: 'How far in advance should I book?',
        a: 'As early as you can, especially between October and April. Short-notice requests are possible when a car is free.',
    },
    {
        q: 'Can I book an early-morning or late-night transfer?',
        a: 'Yes. Pickup times follow your flight or plans, including sunrise tours and late arrivals.',
    },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'AlUla Taxi & Private Transfer Service',
            url: PAGE_URL,
            description:
                'Pre-booked private transport in AlUla: airport transfers, hotel and resort transfers, sightseeing with a driver, Hegra and Elephant Rock trips, and intercity journeys.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: { '@type': 'Place', name: 'AlUla, Saudi Arabia' },
            image: 'https://taxiserviceksa.com/alula-hegra-tombs.webp',
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Private transport in AlUla',
                itemListElement: services.map((s) => ({
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name: s.title, description: s.text },
                })),
            },
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
        },
    ],
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function QuoteButtons({ dark = false, quoteLabel = 'Get a Quote' }: { dark?: boolean; quoteLabel?: string }) {
    return (
        <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="group h-auto py-4 px-8 rounded-xl font-bold text-base bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-offset-2">
                <Link href={QUOTE_HREF}>
                    {quoteLabel}
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
            </Button>
            <Button
                asChild
                size="lg"
                variant="outline"
                className={`h-auto py-4 px-8 rounded-xl font-bold text-base ${dark ? 'bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white' : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'}`}
            >
                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer">
                    <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" />
                    WhatsApp Us
                </a>
            </Button>
        </div>
    );
}

export default function AlUlaPage() {
    return (
        <div className="alula-page bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ---------------- Hero ---------------- */}
            <section className="relative isolate overflow-hidden bg-stone-900 min-h-[560px] md:min-h-[620px] flex items-end">
                <Image
                    src="/alula-hegra-tombs.webp"
                    alt="Nabataean rock-cut tombs at Hegra in AlUla, lit by the evening sun"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[center_40%] alula-drift -z-10"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/20" aria-hidden="true" />

                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-36 md:pb-40">
                    <div className="max-w-2xl animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className="text-amber-200/90 font-semibold tracking-wide text-sm mb-3">Private transport in AlUla</p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-5">
                            AlUla Taxi &amp; Private Transfer Service
                        </h1>
                        <p className="text-lg sm:text-xl text-stone-200 leading-relaxed mb-8">
                            Private airport transfers, hotel pickups, sightseeing journeys and long-distance transfers across AlUla and beyond - with a professional driver and a car booked just for you.
                        </p>
                        <QuoteButtons dark />
                        <p className="mt-5 text-sm text-stone-300">Private bookings · Door-to-door service · Advance reservations</p>
                    </div>
                </div>
            </section>

            {/* ---------------- Quote card (existing booking flow) ---------------- */}
            <div id="quote" className="relative z-20 -mt-24 md:-mt-28 px-4 sm:px-6 lg:px-8 scroll-mt-40">
                <HeroBookingWidget title="Request an AlUla Quote" />
            </div>

            {/* ---------------- Services ---------------- */}
            <section aria-labelledby="services" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-12">
                        <h2 id="services" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Private Transportation in AlUla</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Book a car for your airport arrival, rides between your hotel and the heritage sites, a day of sightseeing, or the long drive in or out of AlUla. Every booking is a private vehicle with its own driver.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {services.map((s, i) => (
                            <Reveal key={s.title} delay={(i % 4) * 80} className="h-full">
                                <article className="h-full flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:border-gray-300 motion-reduce:transform-none">
                                    <s.icon className="w-7 h-7 text-primary mb-4" aria-hidden="true" />
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{s.title}</h3>
                                    <p className="text-xs font-semibold text-gray-500 mb-3">{s.who}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.text}</p>
                                    <p className="text-xs text-gray-500 border-t border-gray-100 pt-3 mt-auto">{s.note}</p>
                                    {s.href && (
                                        <Link href={s.href} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline focus-visible:underline">
                                            {s.linkText} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                                        </Link>
                                    )}
                                </article>
                            </Reveal>
                        ))}
                    </div>
                    <div className="mt-10">
                        <QuoteButtons quoteLabel="Get a Quote for Your Trip" />
                    </div>
                </div>
            </section>

            {/* ---------------- Airport ---------------- */}
            <section aria-labelledby="airport" className="bg-stone-950 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-2">
                        <h2 id="airport" className="text-3xl md:text-4xl font-bold mb-4">AlUla Airport Transfers</h2>
                        <p className="text-stone-300 leading-relaxed mb-4">
                            AlUla International Airport (ULH), formerly Prince Abdul Majeed bin Abdulaziz Airport, is a small terminal outside town. Flights tend to arrive in waves, and the hotels and resorts they serve are spread across the valley.
                        </p>
                        <p className="text-stone-300 leading-relaxed mb-8">
                            Give us your flight number and arrival time so the pickup is planned around it. If your flight changes, message us on WhatsApp.
                        </p>
                        <Button asChild size="lg" className="group h-auto py-4 px-8 rounded-xl font-bold bg-white text-gray-900 hover:bg-stone-200">
                            <Link href="/booking/?from=AlUla%20International%20Airport%20(ULH)&to=AlUla">
                                Book Airport Transfer
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                            </Link>
                        </Button>
                        <p className="mt-4 text-sm text-stone-400">
                            More on drop-off times and resort gates: <Link href="/locations/alula/airport/" className="underline hover:text-white">AlUla airport transfer guide</Link>.
                        </p>
                    </div>
                    <ol className="lg:col-span-3 space-y-4">
                        {[
                            ['Your flight lands', 'You collect your bags as normal.'],
                            ['You meet your driver', 'At the pickup point agreed in your booking confirmation.'],
                            ['Luggage goes in the car', 'The driver helps load your bags.'],
                            ['Straight to your stay', 'Directly to your hotel, resort, camp or onward city - no shared stops.'],
                            ['Nothing else to arrange', 'No searching for a taxi or waiting for an app to find a car.'],
                        ].map(([title, text], i) => (
                            <li key={title}>
                                <Reveal delay={i * 70}>
                                    <div className="flex gap-5 items-start rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                        <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center" aria-hidden="true">{i + 1}</span>
                                        <div>
                                            <h3 className="font-bold">{title}</h3>
                                            <p className="text-sm text-stone-400">{text}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ---------------- Local travel reality ---------------- */}
            <section aria-labelledby="valley" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl mb-12">
                        <h2 id="valley" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AlUla Is a Valley, Not a City Centre</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Visitors often expect a compact town with the sights nearby. In reality, AlUla&apos;s airport, hotels, desert camps and heritage sites are spread along a long valley and the desert around it. A typical day can involve three or four separate drives.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Transport availability can vary by location and time, particularly when travelling between attractions outside the main visitor areas. For multi-stop itineraries, many visitors prefer arranging a private vehicle in advance.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {areas.map((a, i) => (
                            <Reveal key={a.name} delay={(i % 3) * 80}>
                                <div className="h-full rounded-2xl bg-white border border-stone-200 p-6">
                                    <h3 className="font-bold text-gray-900 mb-2">{a.name}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{a.need}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <p className="mt-6 text-sm text-gray-500 flex gap-2 items-start">
                        <Info className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                        If your event or tour ticket names Winter Park or another visitor point as the meeting place, tell us - we drop you there and collect you from the same spot.
                    </p>
                </div>
            </section>

            {/* ---------------- Sightseeing with a driver ---------------- */}
            <section aria-labelledby="sightseeing" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="sightseeing" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-2xl">Explore AlUla With a Private Driver</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mb-10 leading-relaxed">
                        There are two ways to book local transport. Which one suits you depends on how many places you want to see in a day.
                    </p>
                    <div className="alula-h3-lg grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="rounded-3xl border border-gray-200 p-8">
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Point-to-point transfer</p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">One journey, A to B</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Suitable when you simply need to get somewhere - hotel to Old Town for dinner, or your resort to the Hegra tour departure. You book each trip separately, and the driver leaves after drop-off unless a return is booked.
                            </p>
                        </div>
                        <div className="rounded-3xl border-2 border-primary bg-primary/5 p-8">
                            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Private sightseeing</p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">One car for the whole day</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Useful when you want the same car and driver across several stops - for example Dadan and Jabal Ikmah in the morning, Old Town at midday, and{' '}
                                <Link href="/locations/alula/elephant-rock/" className="font-semibold text-primary underline-offset-2 hover:underline">sunset at Elephant Rock</Link>. The driver waits at each stop and moves on when you are ready.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-sm text-amber-900 leading-relaxed mb-8">
                        <strong>Transport and admission are separate.</strong> Our drivers provide transport; they are not licensed site guides and cannot arrange entry. Tickets for Hegra, Dadan, Maraya and other sites are booked through the official AlUla channels, and some sites are visited only on official tours.
                    </div>
                    <Link href="/locations/alula/private-driver/" className="inline-flex items-center gap-2 font-bold text-gray-900 hover:text-primary">
                        See hourly, full-day and multi-day driver options <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </div>
            </section>

            {/* ---------------- Routes ---------------- */}
            <section id="routes" aria-labelledby="routes-title" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50 scroll-mt-40">
                <div className="max-w-6xl mx-auto">
                    <h2 id="routes-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular AlUla Routes</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mb-10 leading-relaxed">
                        Most AlUla trips start at the airport or on the road from Madinah. These are the journeys we are asked for most, each with its own page covering timing and pickup options.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {routes.map((r, i) => (
                            <Reveal key={r.href + r.to} delay={(i % 4) * 60} className="h-full">
                                <Link
                                    href={r.href}
                                    className="group h-full flex flex-col rounded-2xl bg-white border border-stone-200 p-5 transition hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                >
                                    <span className="text-sm text-gray-500">{r.from}</span>
                                    <span className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                        <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                        {r.to}
                                    </span>
                                    <span className="text-xs text-gray-500 mt-2">{r.note}</span>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                    <p className="mt-6 text-sm text-gray-600">
                        Travelling further? We also cover <Link href="/routes/hail-alula/" className="text-primary font-semibold hover:underline">Hail to AlUla</Link>,{' '}
                        <Link href="/routes/jeddah-alula/" className="text-primary font-semibold hover:underline">Jeddah to AlUla</Link> and{' '}
                        <Link href="/routes/alula-amman/" className="text-primary font-semibold hover:underline">AlUla to Petra and Amman in Jordan</Link>.
                    </p>
                    <div className="mt-10">
                        <QuoteButtons quoteLabel="Get a Route Quote" />
                    </div>
                </div>
            </section>

            {/* ---------------- Vehicles ---------------- */}
            <section aria-labelledby="vehicles" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                        <div className="max-w-2xl">
                            <h2 id="vehicles" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Vehicles for AlUla Trips</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">Choose by group size and luggage. Capacities are approximate and depend on how much you carry.</p>
                        </div>
                        <Button asChild className="h-auto py-3 px-6 rounded-xl font-bold bg-gray-900 text-white hover:bg-gray-800 self-start md:self-auto">
                            <Link href={QUOTE_HREF}>Choose Your Vehicle</Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                        {vehicles.map((v, i) => (
                            <Reveal key={v.name} delay={i * 60} className="h-full">
                                <Link href={v.href} className="group h-full flex flex-col rounded-2xl border border-gray-200 overflow-hidden bg-white transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                                    <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                                        <Image
                                            src={v.img}
                                            alt={`${v.name} used for private transfers`}
                                            fill
                                            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                                        />
                                    </div>
                                    <div className="p-5 flex-1">
                                        <h3 className="font-bold text-gray-900 mb-2">{v.name}</h3>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            <li>{v.seats}</li>
                                            <li>{v.bags}</li>
                                            <li className="text-gray-500">Best for: {v.best}</li>
                                        </ul>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- Benefits ---------------- */}
            <section aria-labelledby="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-950 text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 id="benefits" className="text-3xl md:text-4xl font-bold mb-10 max-w-2xl">Why Book a Private Transfer</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                        {benefits.map((b) => (
                            <div key={b.title} className="flex gap-4">
                                <b.icon className="w-6 h-6 text-amber-200 shrink-0 mt-1" aria-hidden="true" />
                                <div>
                                    <h3 className="font-bold mb-1">{b.title}</h3>
                                    <p className="text-sm text-stone-400 leading-relaxed">{b.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- Pricing ---------------- */}
            <section aria-labelledby="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 id="pricing" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How AlUla Transfer Pricing Works</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Every trip is quoted individually, and you get a fixed price before you confirm. The quote depends on:
                    </p>
                    <ul className="flex flex-wrap justify-center gap-2 mb-10">
                        {priceFactors.map((f) => (
                            <li key={f} className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">{f}</li>
                        ))}
                    </ul>
                    <Button asChild size="lg" className="group h-auto py-4 px-8 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href={QUOTE_HREF}>
                            Request Your AlUla Transfer Quote
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                    </Button>
                </div>
            </section>

            {/* ---------------- Travel information ---------------- */}
            <section aria-labelledby="before-you-book" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
                <div className="max-w-6xl mx-auto">
                    <h2 id="before-you-book" className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Before You Book: Practical Notes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                        {tips.map((t) => (
                            <div key={t.title} className="border-l-2 border-primary pl-5">
                                <h3 className="font-bold text-gray-900 mb-1">{t.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{t.text}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-10 text-sm text-gray-600">
                        Still planning the trip itself? Our guides cover{' '}
                        <Link href="/blog/how-many-days-alula/" className="text-primary font-semibold hover:underline">how many days to spend in AlUla</Link>,{' '}
                        <Link href="/blog/best-time-to-visit-alula-weather/" className="text-primary font-semibold hover:underline">the best time to visit</Link>,{' '}
                        <Link href="/blog/where-to-stay-alula-hotels-resorts/" className="text-primary font-semibold hover:underline">where to stay</Link> and{' '}
                        <Link href="/blog/how-to-get-from-madinah-to-alula/" className="text-primary font-semibold hover:underline">getting from Madinah to AlUla</Link>.
                    </p>
                </div>
            </section>

            <AlUlaReviews />

            {/* ---------------- FAQ ---------------- */}
            <section aria-labelledby="faq" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`}>
                                <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <ApprovedDriversForLocation location="alula" />

            {/* ---------------- Final CTA ---------------- */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-stone-900">
                <Image src="/alula-hegra-tombs.webp" alt="" fill sizes="100vw" className="object-cover opacity-25 -z-10" aria-hidden="true" />
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">Planning Your AlUla Journey?</h2>
                    <p className="text-lg text-stone-300 mb-10 leading-relaxed">
                        Tell us your pickup location, destination, travel date and passenger count, and we&apos;ll help you arrange the right private vehicle.
                    </p>
                    <div className="flex justify-center">
                        <QuoteButtons dark />
                    </div>
                    <p className="mt-6 text-sm text-stone-400">
                        Or email <a href="mailto:info@taxiserviceksa.com" className="underline hover:text-white">info@taxiserviceksa.com</a>
                    </p>
                </div>
            </section>

            {/* ---------------- Feedback (existing UGC forms) ---------------- */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <details className="max-w-6xl mx-auto group rounded-2xl border border-gray-200 p-6">
                    <summary className="cursor-pointer font-semibold text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                        Travelled with us in AlUla, or have a question? Leave a review or ask here
                    </summary>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
                        <ReviewForm locationName="AlUla" />
                        <QuestionForm locationName="AlUla" />
                    </div>
                </details>
            </section>
        </div>
    );
}
