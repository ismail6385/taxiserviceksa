import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Ticket, Car, Camera, Users, Mountain, Info, Hotel, PlaneLanding, RotateCcw, MapPin, ExternalLink } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import HegraQuoteCard from '@/components/alula/HegraQuoteCard';
import AlUlaReviews from '@/components/alula/AlUlaReviews';
import AlUlaLinkStrip from '@/components/alula/AlUlaLinkStrip';
import Reveal from '@/components/alula/Reveal';

const PAGE_URL = 'https://taxiserviceksa.com/locations/alula/hegra/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for transport to Hegra. My visit date and time are: ')}`;
const OFFICIAL_CENTRES = 'https://www.experiencealula.com/en/plan-your-trip/alula-visitor-centres';

export const metadata: Metadata = {
    title: 'Hegra Taxi & Private Transfers from AlUla | Madain Saleh',
    description:
        'Private transport to Hegra (Mada\'in Salih) from your AlUla hotel, the airport or Old Town, timed around your Hegra visit. Drop-off, return transfer or a driver who waits. Admission is booked separately.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Hegra Taxi & Private Transfers from AlUla',
        description: 'Transport to your Hegra visit starting point from hotels, the airport and Old Town, planned around your tour time.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp', width: 1024, height: 1024, alt: 'Nabataean tomb facades at Hegra' }],
    },
};

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const visitSteps = [
    { title: 'Book your Hegra experience', text: 'Choose your Hegra tour and time through the official AlUla booking channels.' },
    { title: 'Book your private transport', text: 'Send us your pickup point, date, visit time, passengers and bags.' },
    { title: 'Driver takes you to the starting point', text: 'We drop you where your Hegra booking says the visit begins.' },
    { title: 'Join the official Hegra experience', text: 'From here, the official tour process takes over, including travel within the site.' },
    { title: 'Return transport', text: 'A return pickup or a waiting driver - only if you booked one.' },
];

const bookingTypes = [
    {
        icon: MapPin,
        name: 'Drop-off only',
        best: 'You already have a way back, or plan to stay near the visitor area.',
        how: 'The driver drops you at the starting point and leaves.',
    },
    {
        icon: RotateCcw,
        name: 'Return transfer',
        best: 'Hotel → Hegra → hotel, with nothing else planned.',
        how: 'A second journey is booked for the end of your visit. Confirm the pickup point and your expected finish time with us beforehand.',
        featured: true,
    },
    {
        icon: Car,
        name: 'Chauffeur / waiting',
        best: 'Same car all day, several stops, or you want flexibility on timing.',
        how: 'The vehicle stays available for the hours you book, so you can go on to other places afterwards.',
    },
];

const vehicles = [
    { name: 'Toyota Camry', img: '/toyota-camry.webp', href: '/fleet/toyota-camry/', pax: 4, bags: 2, best: 'Couples and solo visitors' },
    { name: 'Hyundai Staria', img: '/hyundai-staria.webp', href: '/fleet/hyundai-staria/', pax: 7, bags: 4, best: 'Families' },
    { name: 'GMC Yukon', img: '/gmc-yukon.webp', href: '/fleet/gmc-yukon/', pax: 7, bags: 5, best: 'Extra space and comfort' },
    { name: 'Toyota Hiace', img: '/toyota-hiace.webp', href: '/fleet/toyota-hiace/', pax: 11, bags: 16, best: 'Small groups' },
    { name: 'Toyota Coaster', img: '/toyota-coaster.webp', href: '/fleet/toyota-coaster/', pax: 17, bags: 20, best: 'Tour groups' },
];

const transferOptions = [
    { from: 'AlUla hotel', to: 'Hegra', href: QUOTE_HREF },
    { from: 'AlUla Airport', to: 'Hegra', href: '/locations/alula/airport/' },
    { from: 'Hegra', to: 'AlUla hotel', href: QUOTE_HREF },
    { from: 'Hegra', to: 'Old Town', href: '/locations/alula/' },
    { from: 'Hegra', to: 'Elephant Rock', href: '/locations/alula/elephant-rock/' },
    { from: 'Hegra', to: 'AlUla Airport', href: '/locations/alula/airport/' },
];

const faqs = [
    { q: 'Can a taxi drive directly to the Hegra tombs?', a: 'No. Access inside the heritage area follows the official visitor arrangements. Your driver takes you to the starting point for your visit.' },
    { q: 'Where should my driver drop me for Hegra?', a: 'At the starting point shown in your Hegra booking - Winter Park or the Hegra Visitor Centre, depending on the experience. Share your confirmation with us.' },
    { q: 'Can I book a private transfer from my AlUla hotel to Hegra?', a: 'Yes. Tell us your hotel, visit date and visit time, and we plan the pickup so you arrive with time to spare.' },
    { q: 'Can I go from AlUla Airport straight to my Hegra visit?', a: 'It can work if your visit time leaves room for landing, collecting bags and the drive. We will check the timing with you before confirming.' },
    { q: 'Do I need to book Hegra tickets separately?', a: 'Yes. Transportation and Hegra admission are separate. Book your visit through the official AlUla channels.' },
    { q: 'Can the driver wait while I visit Hegra?', a: 'Yes, if you book a chauffeur/waiting option. Otherwise the booking is a drop-off, with or without a return transfer.' },
    { q: 'Can I book a return transfer from Hegra?', a: 'Yes. Confirm the pickup point and your expected finish time with us before the visit.' },
    { q: 'Do I need a 4x4 for Hegra?', a: 'Not for a normal road transfer to the starting point. If you are adding off-road or desert activities, tell us and we will advise.' },
    { q: 'Can I bring camera equipment?', a: 'Yes, in the vehicle. Tell us about tripods and camera bags so there is space. Rules for equipment on the tour are set by the official experience.' },
    { q: 'Can I combine Hegra with Elephant Rock on the same day?', a: 'Often yes, with a chauffeur booking. Tell us your plan and we will confirm the timing and routing.' },
    { q: 'What vehicle should I book for a family?', a: 'A Hyundai Staria or GMC Yukon usually suits a family. Tell us the number of adults, children and bags.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private Transportation to Hegra',
            url: PAGE_URL,
            serviceType: 'Private transfer',
            description:
                'Pre-booked private transportation from AlUla hotels, AlUla International Airport and Old Town to the starting point of a Hegra visit, with optional return transfer or chauffeur waiting. Hegra admission is not included.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: [
                { '@type': 'TouristAttraction', name: 'Hegra (Mada\'in Salih)', alternateName: 'Al-Hijr' },
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

function Ctas({ dark = false, label = 'Get a Hegra Transfer Quote' }: { dark?: boolean; label?: string }) {
    return (
        <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={QUOTE_HREF}>
                    {label}
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

export default function HegraPage() {
    return (
        <div className="alula-page bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ---------------- Hero ---------------- */}
            <section className="relative isolate overflow-hidden bg-stone-950">
                <Image
                    src="/alula-hegra-tombs.webp"
                    alt="Rock-cut Nabataean tomb facades at Hegra, AlUla, in evening light"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[center_35%] alula-drift -z-10"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/95 via-stone-950/70 to-stone-950/30" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className="text-sm font-semibold text-amber-200 mb-4">Hegra · Mada&apos;in Salih · AlUla</p>
                        <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight mb-5">Hegra Taxi &amp; Private Transportation from AlUla</h1>
                        <p className="text-lg text-stone-200 leading-relaxed mb-8 max-w-xl">
                            Pre-book a private vehicle from your AlUla hotel, the airport or another location for your Hegra visit, with the pickup arranged around your planned visit time.
                        </p>
                        <Ctas dark />
                        <p className="mt-5 text-sm text-stone-300">Private pre-booked transportation · Vehicle options for couples, families and groups</p>
                    </div>
                    <div id="quote" className="scroll-mt-40">
                        <HegraQuoteCard />
                    </div>
                </div>
            </section>

            {/* ---------------- Intro + key distinction ---------------- */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visiting Hegra From AlUla?</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Hegra, also known as Mada&apos;in Salih or Al-Hijr, is the Nabataean city of rock-cut tombs outside AlUla town and a UNESCO World Heritage Site. Nearly every visitor has the same practical question: how do I get from my hotel, or the airport, to the place where my Hegra visit begins - and back again afterwards?
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            That is the part we handle. Because Hegra is outside the main town area, arranging the car in advance makes it easier to arrive on time for a fixed visit slot and to have a ride waiting when you finish.
                        </p>
                    </div>
                    <aside className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6">
                        <h2 className="text-xl font-bold text-amber-950 mb-3 flex items-center gap-2">
                            <Info className="w-5 h-5" aria-hidden="true" /> Can a private taxi drive inside Hegra?
                        </h2>
                        <p className="text-amber-950/85 leading-relaxed mb-3">
                            Standard private transportation should not be seen as a way to drive freely through the archaeological site. Access within the heritage area follows the official visitor arrangements.
                        </p>
                        <p className="text-amber-950/85 leading-relaxed font-semibold">
                            Your private driver handles the transportation. The official Hegra experience handles site access.
                        </p>
                    </aside>
                </div>
            </section>

            {/* ---------------- How the visit works ---------------- */}
            <section aria-labelledby="how" className="bg-stone-950 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="how" className="text-3xl md:text-4xl font-bold mb-3">How a Hegra Visit Works With a Private Transfer</h2>
                    <p className="text-stone-400 mb-12 max-w-2xl">Two separate bookings that fit together: your Hegra experience, and the car that gets you there.</p>
                    <ol className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {visitSteps.map((s, i) => (
                            <li key={s.title}>
                                <Reveal delay={i * 80} className="h-full">
                                    <div className={`h-full border-t-2 pt-5 ${i === 0 || i === 3 ? 'border-stone-600' : 'border-amber-200/70'}`}>
                                        <span className="block text-3xl font-black text-amber-200/80 mb-2" aria-hidden="true">0{i + 1}</span>
                                        <h3 className="mb-2">{s.title}</h3>
                                        <p className="text-sm text-stone-400 leading-relaxed">{s.text}</p>
                                        <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-stone-500">{i === 0 || i === 3 ? 'Official AlUla' : 'Taxi Service KSA'}</p>
                                    </div>
                                </Reveal>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ---------------- Where does it drop you ---------------- */}
            <section aria-labelledby="where" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 id="where" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Where Does the Hegra Transfer Drop You?</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            It depends on the experience you booked. AlUla runs separate visitor centres, and Hegra visits have started from either Winter Park or the Hegra Visitor Centre. They are different places, so the right drop-off comes from your booking - not from a general rule.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Share your confirmed Hegra booking when you request transport. Your driver takes you to the starting point it specifies, and the return pickup is arranged at the same place unless your booking says otherwise.
                        </p>
                        <a href={OFFICIAL_CENTRES} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline">
                            Check current visitor centre details on Experience AlUla <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        </a>
                    </div>
                    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                        <h3 className="mb-4">AlUla visitor centres</h3>
                        <ul className="grid grid-cols-2 gap-3 text-sm">
                            {['Winter Park', 'Hegra', 'Old Town', 'Dadan', 'AlUla International Airport'].map((c) => (
                                <li key={c} className="flex items-center gap-2 rounded-lg bg-white border border-stone-200 px-3 py-2.5 font-medium text-gray-800">
                                    <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" /> {c}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-xs text-stone-500">Opening hours change by season. Check the official Experience AlUla website before your visit.</p>
                    </div>
                </div>
            </section>

            {/* ---------------- Three journeys ---------------- */}
            <section className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Hotel → Hegra */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 rounded-3xl bg-white border border-stone-200 p-7 md:p-10">
                        <div>
                            <Hotel className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Hotel to Hegra Private Transfer</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">The most common booking. Here is how a typical Hegra morning runs when you stay in AlUla.</p>
                            <Button asChild className="group h-auto py-3 px-6 rounded-xl font-bold bg-gray-900 text-white hover:bg-gray-800">
                                <a href={QUOTE_HREF}>
                                    Book Hotel → Hegra Transfer <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                </a>
                            </Button>
                        </div>
                        <ol className="space-y-4">
                            {[
                                'Your driver collects you at your hotel or resort at the agreed time.',
                                'You drive out to the starting point named in your Hegra booking.',
                                'You join the official Hegra experience.',
                                'If you booked a return, your driver brings you back to your hotel - or on to lunch in Old Town.',
                            ].map((t, i) => (
                                <li key={t} className="flex gap-4">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0" aria-hidden="true">{i + 1}</span>
                                    <p className="text-gray-700 pt-1">{t}</p>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Airport → Hegra */}
                        <div className="rounded-3xl bg-white border border-stone-200 p-7 md:p-8">
                            <PlaneLanding className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">AlUla Airport to Hegra</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Landing and heading straight to Hegra? A private transfer can take you to your hotel first or directly to the visit starting point, depending on your plans. Before booking it that way, check:
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700 mb-5">
                                {['Is there enough time between landing and your visit slot?', 'Where will your suitcases stay during the visit?', 'Do you need to check in first?', 'Which starting point does your booking use?'].map((t) => (
                                    <li key={t} className="flex gap-2"><span className="text-primary font-bold" aria-hidden="true">?</span>{t}</li>
                                ))}
                            </ul>
                            <Link href="/locations/alula/airport/" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                                AlUla airport transfer details <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </Link>
                        </div>

                        {/* Returning */}
                        <div className="rounded-3xl bg-white border border-stone-200 p-7 md:p-8">
                            <RotateCcw className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Returning From Hegra</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                The return is easy to forget when you book. If you have a return transfer, confirm the pickup point and your approximate finish time with us before your visit, and message us if the visit runs long.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Need the same vehicle available during your visit? Ask for a chauffeur/waiting option when requesting your quote. A driver does not wait automatically on a drop-off booking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- Booking types ---------------- */}
            <section aria-labelledby="types" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="types" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Transfer or Chauffeur?</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mb-10">Pick the booking that matches your day. None of these is a guided Hegra tour - guiding comes with your official experience.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {bookingTypes.map((b, i) => (
                            <Reveal key={b.name} delay={i * 80} className="h-full">
                                <div className={`h-full rounded-2xl p-7 transition hover:-translate-y-0.5 motion-reduce:transform-none ${b.featured ? 'bg-gray-900 text-white' : 'bg-white border border-stone-200'}`}>
                                    <b.icon className={`w-7 h-7 mb-4 ${b.featured ? 'text-amber-200' : 'text-primary'}`} aria-hidden="true" />
                                    <h3 className="mb-3">{b.name}</h3>
                                    <p className={`text-sm mb-3 ${b.featured ? 'text-stone-300' : 'text-gray-700'}`}><strong>Best for:</strong> {b.best}</p>
                                    <p className={`text-sm ${b.featured ? 'text-stone-400' : 'text-gray-500'}`}>{b.how}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- Combining stops ---------------- */}
            <section className="bg-stone-950 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Combining Hegra With Other AlUla Stops?</h2>
                        <p className="text-stone-300 leading-relaxed mb-4">
                            Many visitors want one or two more stops around their Hegra visit - Old Town, Dadan, Jabal Ikmah, Maraya, or <Link href="/locations/alula/elephant-rock/" className="text-amber-200 hover:underline">sunset at Elephant Rock</Link>. Not every combination fits comfortably in one day, especially with fixed ticket times.
                        </p>
                        <p className="text-stone-300 leading-relaxed">
                            If you want several stops, ask for a private chauffeur itinerary. We confirm vehicle availability and a practical order for the day.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <Link href="/locations/alula/private-driver/" className="group flex items-center justify-between rounded-xl border border-white/15 px-5 py-4 hover:border-amber-200">
                            <span className="font-semibold">AlUla chauffeur service</span>
                            <ArrowRight className="w-4 h-4 text-amber-200 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                        </Link>
                        <Link href="/locations/alula/elephant-rock/" className="group flex items-center justify-between rounded-xl border border-white/15 px-5 py-4 hover:border-amber-200">
                            <span className="font-semibold">Private transportation to Elephant Rock</span>
                            <ArrowRight className="w-4 h-4 text-amber-200 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                        </Link>
                        <Link href="/locations/alula/" className="group flex items-center justify-between rounded-xl border border-white/15 px-5 py-4 hover:border-amber-200">
                            <span className="font-semibold">Getting around AlUla</span>
                            <ArrowRight className="w-4 h-4 text-amber-200 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ---------------- Planning around your visit ---------------- */}
            <section aria-labelledby="planning" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 mb-12">
                        <div>
                            <h2 id="planning" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Booking Your Driver Around Your Hegra Visit</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">Sharing your confirmed visit time helps us plan the pickup and the return more accurately. When you request a quote, include:</p>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 self-center">
                            {['Hegra booking date', 'Visit or tour start time', 'Starting point on your booking', 'Hotel or pickup location', 'Adults, children and bags', 'Return: none, transfer or waiting'].map((t) => (
                                <li key={t} className="rounded-xl border border-stone-200 px-4 py-3 text-gray-800 font-medium">{t}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            {
                                icon: Ticket,
                                title: 'Do I need a Hegra ticket?',
                                text: 'Yes. Transportation and admission are separate arrangements. Confirm your Hegra experience and its availability first, then book the car around that time.',
                            },
                            {
                                icon: Mountain,
                                title: 'Do I need a 4x4?',
                                text: 'For a standard road transfer to the starting point, choose by group size and bags. If you are adding desert or off-road activities, tell us so we can recommend a suitable vehicle.',
                            },
                            {
                                icon: Camera,
                                title: 'Carrying camera gear?',
                                text: 'Hegra draws a lot of photographers. Tell us about camera bags and tripods so the car has room. What you may bring on the tour is set by the official experience.',
                            },
                            {
                                icon: Users,
                                title: 'Families & groups',
                                text: 'Passenger count alone is not enough. Tell us adults, children, bags and any equipment. Child seats can be requested in the booking form, subject to availability.',
                            },
                        ].map((c, i) => (
                            <Reveal key={c.title} delay={i * 60} className="h-full">
                                <div className="h-full rounded-2xl bg-stone-50 border border-stone-200 p-6">
                                    <c.icon className="w-6 h-6 text-primary mb-3" aria-hidden="true" />
                                    <h3 className="mb-2">{c.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{c.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- Vehicles ---------------- */}
            <section aria-labelledby="vehicles" className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Vehicles for a Hegra Day</h2>
                    <p className="text-gray-600 mb-10">Capacities are the figures our booking system uses; bag sizes make a difference.</p>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                        {vehicles.map((v) => (
                            <Link key={v.name} href={v.href} className="group flex flex-col rounded-2xl border border-stone-200 overflow-hidden bg-white transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                                    <Image src={v.img} alt={`${v.name} for Hegra transfers`} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                                </div>
                                <div className="p-4">
                                    <h3 className="mb-1">{v.name}</h3>
                                    <p className="text-sm text-gray-700">Up to {v.pax} passengers · about {v.bags} large bags</p>
                                    <p className="text-xs text-stone-500 mt-1">{v.best}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- A little about Hegra ---------------- */}
            <section aria-labelledby="about" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image src="/alula-hegra.webp" alt="Decorated tomb facades carved into sandstone at Hegra" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <div>
                        <h2 id="about" className="text-3xl font-bold text-gray-900 mb-4">A Little About Hegra</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Hegra is the largest conserved Nabataean site south of Petra. Its 111 monumental tombs, 94 of them with decorated facades, were carved into sandstone outcrops between the 1st century BC and the 1st century AD. The best known, Qasr al-Farid, stands alone on its own rock.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-5">
                            In 2008 it became Saudi Arabia&apos;s first UNESCO World Heritage Site, listed as the Hegra Archaeological Site (al-Hijr / Mada&apos;in Salih).
                        </p>
                        <Link href="/blog/hegra-madain-salih-visitor-guide/" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                            Read our Hegra visitor guide <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ---------------- Transfer options ---------------- */}
            <section aria-labelledby="options" className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="options" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Popular Hegra Transfer Options</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {transferOptions.map((r) => {
                            const cls = 'group flex items-center justify-between rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary';
                            const inner = (
                                <>
                                    <span className="font-semibold text-gray-900">
                                        {r.from} <span className="text-stone-400" aria-hidden="true">→</span><span className="sr-only">to</span> {r.to}
                                    </span>
                                    <ArrowRight className="w-5 h-5 text-primary transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                </>
                            );
                            return r.href.startsWith('#') ? (
                                <a key={r.from + r.to} href={r.href} className={cls}>{inner}</a>
                            ) : (
                                <Link key={r.from + r.to} href={r.href} className={cls}>{inner}</Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <AlUlaReviews />

            {/* ---------------- FAQ ---------------- */}
            <section aria-labelledby="faq" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Hegra Transport Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-stone-200 px-5">
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
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">Planning Your Hegra Visit?</h2>
                    <p className="text-lg text-stone-300 mb-10 leading-relaxed">
                        Send us your pickup location, visit date, preferred time, passenger count and luggage details. We&apos;ll help you arrange the transportation around your Hegra plans.
                    </p>
                    <div className="flex justify-center">
                        <Ctas dark />
                    </div>
                    <p className="mt-8 text-sm text-stone-400 max-w-xl mx-auto">
                        Transportation and Hegra admission/tour arrangements are separate. Please confirm your official Hegra booking before finalising transportation times.
                    </p>
                </div>
            </section>

            <AlUlaLinkStrip current="/locations/alula/hegra/" title="More transportation in AlUla" />
        </div>
    );
}
