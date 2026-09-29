import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Plane, Mountain, CloudFog, Landmark, Users, Briefcase, Check, Info, MapPin, Route } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import AlUlaReviews from '@/components/alula/AlUlaReviews';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import AbhaJourneyPicker from '@/components/abha/AbhaJourneyPicker';
import AbhaCrossSection from '@/components/abha/AbhaCrossSection';
import AbhaTripMode from '@/components/abha/AbhaTripMode';
import AbhaLuggage from '@/components/abha/AbhaLuggage';

const PAGE_URL = 'https://taxiserviceksa.com/locations/abha/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for a transfer in Abha. Pickup, destination, date and passengers: ')}`;

export const metadata: Metadata = {
    title: 'Abha Taxi & Private Transfers | AHB Airport, Soudah & Khamis Mushait',
    description:
        'Private transfers in Abha and the Aseer highlands: AHB Airport pickups, Soudah and Rijal Almaa trips, Khamis Mushait, hourly drivers and intercity journeys. Request a quote.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Abha Taxi & Private Transfer Service',
        description: 'Airport transfers, mountain journeys, chauffeur service and intercity transportation across Abha and the Aseer highlands.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private transfers in Abha and Aseer' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Abha Taxi & Private Transfer Service',
        description: 'Airport transfers, mountain journeys, chauffeur service and intercity transportation across Abha and the Aseer highlands.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

const q = (p: Record<string, string>) => `/booking/?${new URLSearchParams(p).toString()}`;

const faqs = [
    { q: 'Do you provide transfers from Abha Airport?', a: 'Yes - from AHB to hotels and homes in Abha, Khamis Mushait, Soudah and further. Share your flight number when booking so your pickup can be coordinated around your arrival.' },
    { q: 'Can I book a private car from Abha to Soudah?', a: 'Yes, one way or return. Send the exact hotel, chalet or viewpoint - places up there are spread across the ridges.' },
    { q: 'Can you take us from Abha to Rijal Almaa?', a: 'Yes. It is a long, winding descent of roughly 50–60 km, so most people book a return with waiting time. We provide the transport only; we do not sell entry or guide visits.' },
    { q: 'Do you provide transfers between Abha and Khamis Mushait?', a: 'Yes - hotel, family, business and airport trips between the two cities, in either direction.' },
    { q: 'Can I book a return trip to Soudah?', a: 'Yes. Tell us roughly how long you want to stay, or book a driver by the hour if you plan several stops.' },
    { q: 'Can I hire a private driver for several hours?', a: 'Yes. Choose hourly hire on the booking form and say how many hours; the car stays with you between stops.' },
    { q: 'What vehicle is suitable for mountain travel?', a: 'Choose by people and luggage. A sedan suits couples with light bags; a Staria or Yukon gives families more room on longer, winding drives.' },
    { q: 'Do you provide Abha to Jeddah transfers?', a: 'Yes, as a long-distance private transfer. See the Jeddah–Abha route for the journey in more detail.' },
    { q: 'Can you pick us up from our hotel in Abha?', a: 'Yes. Give us the hotel name and pickup time; the driver meets you at the entrance.' },
    { q: 'Does mountain weather affect travel times?', a: 'It can. Fog, rain and reduced visibility are more common up in the mountains than in the city, so allow some flexibility for mountain trips.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private transfers in Abha and Aseer',
            url: PAGE_URL,
            serviceType: 'Pre-booked private transfer',
            description:
                'Pre-booked private transfers in Abha and the Aseer region: Abha International Airport (AHB) pickups, trips to Khamis Mushait, Al Soudah and Rijal Almaa, hourly drivers and intercity journeys.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: [
                { '@type': 'City', name: 'Abha' },
                { '@type': 'City', name: 'Khamis Mushait' },
                { '@type': 'AdministrativeArea', name: 'Asir Province, Saudi Arabia' },
            ],
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}
const link = 'font-semibold text-[#2f5d46] hover:underline';

// Topographic contour lines used as a background pattern.
function Contours({ className = '', stroke = '#a9c8b4', opacity = 0.12 }: { className?: string; stroke?: string; opacity?: number }) {
    return (
        <svg className={className} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g fill="none" stroke={stroke} strokeOpacity={opacity} strokeWidth="1.2">
                {Array.from({ length: 9 }, (_, i) => (
                    <path key={i} d={`M${-50 + i * 6} ${520 - i * 48} C ${150 + i * 10} ${440 - i * 50}, ${260 - i * 8} ${300 - i * 30}, ${420} ${330 - i * 40} S ${700 + i * 5} ${250 - i * 30}, ${860} ${300 - i * 42}`} />
                ))}
            </g>
        </svg>
    );
}

export default function AbhaPage() {
    return (
        <div className="abha-page bg-[#f3f1ea]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#16231f]">
                <Contours className="absolute inset-0 -z-10 w-full h-full" opacity={0.16} />
                {/* Mountain silhouettes + drifting fog */}
                <svg className="absolute bottom-0 left-0 -z-10 w-full h-[55%]" viewBox="0 0 1440 400" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 400 L0 250 C 120 200, 200 140, 320 170 S 520 80, 640 120 S 860 40, 1000 110 S 1260 60, 1440 140 L1440 400 Z" fill="#1d3a2e" />
                    <path d="M0 400 L0 310 C 160 270, 300 230, 460 260 S 760 200, 920 240 S 1220 210, 1440 250 L1440 400 Z" fill="#244a38" />
                    <path d="M100 330 C 260 300, 330 260, 470 280 S 700 250, 820 270" fill="none" stroke="#e0a526" strokeWidth="2.5" strokeLinecap="round" pathLength={1} className="route-draw" />
                </svg>
                <div className="absolute inset-x-0 bottom-[22%] -z-10 h-24 fog-drift bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" aria-hidden="true" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#16231f] via-[#16231f]/80 to-[#16231f]/20" aria-hidden="true" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-6 lg:gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className="hidden sm:block text-sm font-semibold text-[#a9c8b4] mb-6">Abha • AHB Airport • Khamis Mushait • Soudah • Rijal Almaa</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-tight mb-5">Abha Taxi &amp; Private Transfer Service</h1>
                        <p className="text-base sm:text-lg text-white/85 leading-relaxed sm:mb-8 max-w-xl">
                            Private airport transfers, mountain journeys, chauffeur service and intercity transportation across Abha and the Aseer highlands.
                        </p>
                        <div className="hidden sm:flex gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#e0a526] text-[#16231f] hover:bg-[#eab43a]">
                                <a href={QUOTE_HREF}>Get Abha Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                    </div>
                    <div id="quote" className="scroll-mt-40">
                        <RouteQuoteCard
                            title="Your Abha journey"
                            cta="Get Abha Quote"
                            fromPlaceholder="Airport, hotel or exact address"
                            toPlaceholder="Hotel, mountain spot or city"
                            fromChips={['Abha International Airport (AHB)', 'Abha hotel', 'Khamis Mushait', 'Al Soudah']}
                            toChips={['Abha hotel', 'Khamis Mushait', 'Al Soudah', 'Rijal Almaa', 'Jizan', 'Jeddah']}
                            showFlight
                            buttonClass="bg-[#2f5d46] hover:bg-[#244a38] focus-visible:ring-[#2f5d46]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= YOUR ABHA JOURNEY ================= */}
            <section aria-labelledby="journey" className="relative isolate overflow-hidden bg-[#1d3a2e] py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <Contours className="absolute inset-0 -z-10 w-full h-full" opacity={0.1} />
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-8 text-white">
                        <h2 id="journey" className="text-3xl md:text-5xl font-bold mb-3">Your Abha Journey</h2>
                        <p className="text-white/70">Where are you starting, where are you going, and do you need a simple transfer or a driver for the day?</p>
                    </div>
                    <AbhaJourneyPicker />
                </div>
            </section>

            {/* ================= AIRPORT TO HIGHLANDS (signature) ================= */}
            <section aria-labelledby="highlands" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl mb-8">
                        <h2 id="highlands" className="text-3xl md:text-5xl font-bold text-[#16231f] mb-4">From Abha Into the Asir Mountains</h2>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Abha, the airport and Khamis Mushait share a high plateau, so journeys between them are ordinary city drives. Head west and it changes: up to the ridges around Soudah, then down the escarpment towards Rijal Almaa. That shape decides how long a trip takes and whether a transfer or a driver for the day makes more sense.
                        </p>
                    </div>
                    <AbhaCrossSection />
                </div>
            </section>

            {/* ================= AHB AIRPORT ================= */}
            <section aria-labelledby="airport" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <Reveal>
                        <p className="text-sm font-bold uppercase tracking-wider text-[#8a6a10] mb-3 flex items-center gap-2"><Plane className="w-4 h-4" aria-hidden="true" /> AHB</p>
                        <h2 id="airport" className="text-3xl md:text-4xl font-bold text-[#16231f] mb-4">Abha Airport Transfers</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            Abha International Airport sits between the two cities - about 18 km from central Abha and roughly 20 km by road from Khamis Mushait. From the terminal a car can take you to either, or straight up into the mountains.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-[#16231f]">
                            {['AHB → Abha hotel', 'AHB → Khamis Mushait', 'AHB → Soudah', 'AHB → business destination', 'AHB → family accommodation', 'AHB → onward intercity journey'].map((r) => (
                                <li key={r} className="flex items-center gap-3 border-b border-[#16231f]/10 pb-3 font-semibold"><Route className="w-4 h-4 text-[#2f5d46] shrink-0" aria-hidden="true" />{r}</li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal delay={100}>
                        <aside className="rounded-3xl bg-[#16231f] text-white p-7 md:p-8">
                            <h3 className="mb-3">Landing at AHB?</h3>
                            <p className="text-sm text-white/70 mb-5">Share your flight number when booking so your pickup can be coordinated around your arrival. Also send:</p>
                            <ul className="grid grid-cols-2 gap-2 text-sm mb-7">
                                {['Arrival date', 'Arrival time', 'Passengers', 'Luggage', 'Destination', 'Vehicle preference'].map((i) => (
                                    <li key={i} className="flex gap-2"><Check className="w-4 h-4 text-[#e0a526] mt-0.5 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                            <Link href={q({ from: 'Abha International Airport (AHB)' })} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e0a526] px-5 py-3.5 font-bold text-[#16231f] hover:bg-[#eab43a]">Book an AHB pickup <Arrow /></Link>
                        </aside>
                    </Reveal>
                </div>
            </section>

            {/* ================= KHAMIS ================= */}
            <section aria-labelledby="khamis" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto rounded-3xl bg-[#e3ebe5] p-7 md:p-10 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 items-center">
                    <div>
                        <h2 id="khamis" className="text-3xl md:text-4xl font-bold text-[#16231f] mb-4">Abha ↔ Khamis Mushait</h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Two cities on one plateau, with the airport between them. People live in one and work, shop or visit family in the other, so this is one of the most frequent journeys in the region - hotel moves, airport runs, business meetings and the start of longer trips.
                        </p>
                        <p className="text-sm text-slate-600">Journey time depends on where in each city you start and finish, and on traffic.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <ol className="flex items-center justify-between gap-2 text-sm font-bold text-[#16231f] mb-2" aria-label="Abha, the airport, Khamis Mushait">
                            <li className="rounded-full bg-white px-3 py-1.5">Abha</li>
                            <li className="flex-1 h-px bg-[#2f5d46]" aria-hidden="true" />
                            <li className="rounded-full bg-white px-3 py-1.5">AHB</li>
                            <li className="flex-1 h-px bg-[#2f5d46]" aria-hidden="true" />
                            <li className="rounded-full bg-[#2f5d46] text-white px-3 py-1.5">Khamis</li>
                        </ol>
                        <Link href={q({ from: 'Abha', to: 'Khamis Mushait' })} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#16231f] px-5 py-3.5 font-bold text-white hover:bg-black">Abha ↔ Khamis quote <Arrow /></Link>
                        <Link href="/locations/khamis-mushait/" className="text-center text-sm font-bold text-[#2f5d46] hover:underline">Transport in Khamis Mushait</Link>
                    </div>
                </div>
            </section>

            {/* ================= MOUNTAIN TRANSPORTATION ================= */}
            <section aria-labelledby="mountain" className="relative isolate overflow-hidden bg-[#16231f] text-white py-20 px-4 sm:px-6 lg:px-8">
                <Contours className="absolute inset-0 -z-10 w-full h-full" opacity={0.12} />
                <div className="max-w-6xl mx-auto">
                    <h2 id="mountain" className="text-3xl md:text-5xl font-bold mb-4 max-w-3xl">Private Transportation Through the Aseer Highlands</h2>
                    <p className="text-white/70 max-w-2xl mb-10">Three kinds of trip, and they are not booked the same way.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                        {[
                            { t: 'City transfer', d: 'Paved city and airport roads on the plateau - Abha, AHB, Khamis Mushait.', i: Route },
                            { t: 'Mountain transfer', d: 'Longer, winding roads with climbs, descents and weather that can change. Give the exact destination and allow extra time.', i: Mountain },
                            { t: 'Private driver', d: 'The car stays with you for several stops - Soudah, a viewpoint, lunch, Rijal Almaa - within the hours you book.', i: Users },
                        ].map((c, idx) => (
                            <Reveal key={c.t} delay={idx * 80} className="h-full">
                                <div className={`h-full rounded-2xl p-6 ${idx === 1 ? 'bg-[#e0a526] text-[#16231f]' : 'bg-white/[0.06] border border-white/10'}`}>
                                    <c.i className={`w-6 h-6 mb-4 ${idx === 1 ? 'text-[#16231f]' : 'text-[#a9c8b4]'}`} aria-hidden="true" />
                                    <h3 className="mb-2">{c.t}</h3>
                                    <p className={`text-sm leading-relaxed ${idx === 1 ? 'text-[#16231f]/80' : 'text-white/70'}`}>{c.d}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="rounded-3xl bg-white/[0.06] border border-white/10 p-7">
                            <h3 className="mb-4">For a mountain trip, tell us</h3>
                            <ul className="grid grid-cols-2 gap-2 text-sm text-white/85">
                                {['Exact mountain destination', 'Planned stops', 'Passenger count', 'Luggage', 'Whether you need a return', 'Preferred vehicle'].map((i) => (
                                    <li key={i} className="flex gap-2"><Check className="w-4 h-4 text-[#e0a526] mt-0.5 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                        </div>
                        <aside aria-labelledby="weather" className="rounded-3xl bg-[#dfe8e3] text-[#16231f] p-7">
                            <h3 id="weather" className="mb-3 flex items-center gap-2"><CloudFog className="w-5 h-5 text-[#2f5d46]" aria-hidden="true" /> Planning a mountain transfer?</h3>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li>Weather in the mountains can differ from Abha city on the same day.</li>
                                <li>Fog and rain can reduce visibility and slow the drive.</li>
                                <li>Journey times vary - allow flexibility, especially before a flight.</li>
                            </ul>
                            <p className="text-xs text-slate-500 mt-4">General planning guidance, not a live forecast.</p>
                        </aside>
                    </div>
                </div>
            </section>

            {/* ================= SOUDAH + RIJAL ALMAA ================= */}
            <section aria-label="Soudah and Rijal Almaa" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6">
                    <Reveal className="h-full">
                        <article className="relative isolate overflow-hidden h-full rounded-3xl bg-gradient-to-b from-[#dfe8e3] to-white border border-[#16231f]/10 p-7 md:p-10 flex flex-col">
                            <div className="absolute -top-10 inset-x-0 -z-10 h-32 fog-drift bg-gradient-to-r from-transparent via-white to-transparent blur-2xl" aria-hidden="true" />
                            <Mountain className="w-8 h-8 text-[#2f5d46] mb-4" aria-hidden="true" />
                            <h2 className="text-3xl font-bold text-[#16231f] mb-4">Abha to Al Soudah</h2>
                            <p className="text-slate-700 leading-relaxed mb-5">Up to the highest ridges near Abha, for a stay, a viewpoint or an afternoon in the cool air.</p>
                            <ul className="grid grid-cols-2 gap-2 text-sm text-[#16231f] mb-8">
                                {['Abha → Soudah', 'AHB → Soudah', 'Return to Abha', 'Driver by the hour'].map((i) => (
                                    <li key={i} className="flex gap-2"><Check className="w-4 h-4 text-[#2f5d46] mt-0.5 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                            <Link href="/locations/abha/al-soudah/" className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#2f5d46] px-5 py-3.5 font-bold text-white hover:bg-[#244a38]">Explore Abha → Soudah Transfers <Arrow /></Link>
                        </article>
                    </Reveal>
                    <Reveal className="h-full" delay={100}>
                        <article className="h-full rounded-3xl bg-white border border-[#16231f]/10 p-7 md:p-10 flex flex-col">
                            {/* Asiri-style colour band */}
                            <div className="flex h-2 rounded-full overflow-hidden mb-6" aria-hidden="true">
                                <span className="flex-1 bg-[#c2410c]" /><span className="flex-1 bg-[#e0a526]" /><span className="flex-1 bg-[#2f5d46]" /><span className="flex-1 bg-[#1e3a8a]" />
                            </div>
                            <Landmark className="w-8 h-8 text-[#c2410c] mb-4" aria-hidden="true" />
                            <h2 className="text-3xl font-bold text-[#16231f] mb-4">Abha to Rijal Almaa</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                The heritage village lies west of Abha, down the escarpment - roughly 50–60 km and often 60–90 minutes each way. Book a return with waiting time, or pair it with Soudah as a day with a driver.
                            </p>
                            <p className="text-xs text-slate-500 flex gap-2 mb-6">
                                <Info className="w-4 h-4 shrink-0" aria-hidden="true" />
                                We provide transport only. We are not the site operator, and a transfer does not include entry. The car drops off and collects at the point where vehicles are allowed.
                            </p>
                            <Link href={q({ from: 'Abha', to: 'Rijal Almaa', notes: 'Return with waiting time: ' })} className="group mt-auto inline-flex items-center gap-2 font-bold text-[#c2410c]">Rijal Almaa return quote <Arrow /></Link>
                        </article>
                    </Reveal>
                </div>
            </section>

            {/* ================= DRIVER / TRIP MODE ================= */}
            <section aria-labelledby="driver" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
                    <div>
                        <h2 id="driver" className="text-3xl md:text-4xl font-bold text-[#16231f] mb-4">Explore More of Aseer With a Private Driver</h2>
                        <p className="text-slate-700 leading-relaxed mb-5">
                            Point-to-point for one destination, a return when you go somewhere and come back, or a driver for several stops. Example days - not fixed packages:
                        </p>
                        <ul className="space-y-2 text-sm font-semibold text-[#16231f] mb-5">
                            <li>Abha → Soudah → Abha</li>
                            <li>Abha → Rijal Almaa → Soudah → Abha</li>
                            <li>Abha → Khamis Mushait → Abha</li>
                        </ul>
                        <p className="text-sm text-slate-600">Drivers provide transport, not guided tours. Visiting the cable car? See <Link href="/services/cable-car/" className={link}>cable car transfers</Link>, or read about our <Link href="/services/private-driver/" className={link}>private driver service</Link>.</p>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-[#16231f] mb-3">Transfer or private driver?</p>
                        <AbhaTripMode />
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section aria-labelledby="vehicles" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className="text-3xl md:text-4xl font-bold text-[#16231f] mb-3">Pick the Vehicle for the Road</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl">On winding mountain roads, space for people and bags matters more than on a city run. Start with what you carry.</p>
                    <AbhaLuggage />
                </div>
            </section>

            {/* ================= FAMILY + BUSINESS ================= */}
            <section aria-label="Family and business travel" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Reveal className="h-full">
                        <article className="h-full rounded-3xl bg-[#f3f1ea] p-7 md:p-9">
                            <Users className="w-7 h-7 text-[#2f5d46] mb-4" aria-hidden="true" />
                            <h2 className="text-2xl md:text-3xl font-bold text-[#16231f] mb-4">Travelling With Family?</h2>
                            <ul className="space-y-3 text-slate-700">
                                <li>Summer brings many families up to the cooler highlands - tell us every suitcase so they all fit.</li>
                                <li>Staria, Yukon or Hiace for larger groups and airport luggage.</li>
                                <li>Need child seats? Mention it in your booking and we confirm what we can provide.</li>
                                <li>Book the return from Soudah or Rijal Almaa at the same time.</li>
                            </ul>
                        </article>
                    </Reveal>
                    <Reveal className="h-full" delay={100}>
                        <article className="h-full rounded-3xl bg-[#16231f] text-white p-7 md:p-9">
                            <Briefcase className="w-7 h-7 text-[#e0a526] mb-4" aria-hidden="true" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Business Transportation in Abha &amp; Khamis Mushait</h2>
                            <ul className="space-y-3 text-white/80">
                                <li>AHB → hotel on arrival, hotel → AHB on the way out.</li>
                                <li>Hotel → meetings across both cities, or a driver for the day.</li>
                                <li>Regular runs for visiting staff or consultants - send the schedule.</li>
                                <li>For sites with controlled entry, give us the exact gate or reception; access is set by the site.</li>
                            </ul>
                        </article>
                    </Reveal>
                </div>
            </section>

            {/* ================= INTERCITY ================= */}
            <section aria-labelledby="intercity" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="intercity" className="text-3xl md:text-4xl font-bold text-[#16231f] mb-3">From Abha to Other Saudi Cities</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl">Leaving the highlands means a long drive in almost every direction. These are the routes with their own pages.</p>
                    <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:grid md:grid-cols-4 md:overflow-visible md:mx-0 md:px-0">
                        {[
                            { c: 'Jeddah', d: 'Long-distance private transfer to the Red Sea coast.', h: '/routes/jeddah-abha/', l: 'Jeddah–Abha route' },
                            { c: 'Jizan', d: 'Down to the coast - roughly 200 km, often 2.5–3 hours.', h: '/locations/jizan/', l: 'Transport in Jizan' },
                            { c: 'Bishah', d: 'North through the Asir region.', h: '/locations/bishah/', l: 'Transport in Bishah' },
                            { c: 'Al Namas', d: 'North along the highlands.', h: '/locations/al-namas/', l: 'Transport in Al Namas' },
                        ].map((r) => (
                            <li key={r.c} className="snap-start shrink-0 w-64 md:w-auto rounded-2xl bg-white border border-[#16231f]/10 p-6 flex flex-col">
                                <p className="text-xs font-bold uppercase tracking-wider text-[#8a6a10] mb-1">Intercity</p>
                                <h3 className="mb-2 text-[#16231f]">Abha → {r.c}</h3>
                                <p className="text-sm text-slate-600 mb-5">{r.d}</p>
                                <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1">
                                    <Link href={q({ from: 'Abha', to: r.c })} className="group inline-flex items-center gap-1.5 font-bold text-[#2f5d46]">Quote <Arrow /></Link>
                                    <Link href={r.h} className="text-sm font-semibold text-slate-700 hover:underline self-center">{r.l}</Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= PRICING + PICKUP + PROCESS ================= */}
            <section aria-labelledby="pricing" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                    <Reveal>
                        <h2 id="pricing" className="text-3xl md:text-4xl font-bold text-[#16231f] mb-4">Request Your Abha Transfer Quote</h2>
                        <p className="text-slate-700 leading-relaxed mb-5">An airport run on the plateau and a return trip down to Rijal Almaa with waiting time are very different jobs, so we quote each one. You see the price before you confirm. It depends on:</p>
                        <div className="flex flex-wrap gap-2">
                            {['Route', 'Vehicle', 'Passengers', 'Luggage', 'One way / return', 'Waiting', 'Duration', 'Mountain destination', 'Intercity distance'].map((f) => (
                                <span key={f} className="rounded-full bg-[#f3f1ea] px-4 py-2 text-sm text-[#16231f]">{f}</span>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#16231f] mb-4">Where Should We Pick You Up?</h2>
                        <p className="text-slate-600 mb-5">Choose a starting point; you can type the exact address, hotel or chalet on the booking form.</p>
                        <ul className="grid grid-cols-2 gap-2">
                            {[
                                ['Abha city', 'Abha'],
                                ['Abha hotel', 'Abha hotel'],
                                ['AHB Airport', 'Abha International Airport (AHB)'],
                                ['Khamis Mushait', 'Khamis Mushait'],
                                ['Soudah', 'Al Soudah'],
                                ['Home address', 'Abha residential address'],
                            ].map(([l, v]) => (
                                <li key={l}>
                                    <Link href={q({ from: v })} className="flex items-center justify-between gap-2 rounded-xl border border-[#16231f]/15 px-4 py-3.5 text-sm font-semibold text-[#16231f] hover:border-[#2f5d46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0a526]">
                                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#2f5d46] shrink-0" aria-hidden="true" />{l}</span>
                                        <ArrowRight className="w-4 h-4 text-[#2f5d46] shrink-0" aria-hidden="true" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#16231f] mb-8">How Booking Works</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-4 border-l-2 sm:border-l-0 border-[#e0a526] ml-3 sm:ml-0">
                        {[
                            ['Tell us your route', 'Pickup and destination.'],
                            ['Tell us about your group', 'Passengers, luggage and vehicle.'],
                            ['Confirm the journey', 'Date, time and any flight details - and the price.'],
                            ['Travel', 'Driver and vehicle details come with your confirmed booking.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="relative pl-6 sm:pl-0 pb-6 sm:pb-0 sm:border-t-2 sm:border-[#e0a526] sm:pt-5">
                                <span className="absolute -left-[9px] top-0 sm:static w-4 h-4 sm:w-auto sm:h-auto rounded-full bg-[#e0a526] sm:bg-transparent text-xs sm:text-sm font-black text-[#8a6a10]" aria-hidden="true"><span className="hidden sm:inline">0{i + 1}</span></span>
                                <h3 className="mb-1 text-[#16231f] sm:mt-2">{t}</h3>
                                <p className="text-sm text-slate-600">{d}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <AlUlaReviews place="abha" title="What travellers said about their Abha trips" />

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-[#16231f] mb-8">Abha Transfer Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#16231f]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#16231f] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-bold text-[#16231f] mb-6">Related Routes &amp; Services</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Abha → Soudah transfers', '/locations/abha/al-soudah/'],
                            ['Transport in Khamis Mushait', '/locations/khamis-mushait/'],
                            ['Jeddah–Abha route', '/routes/jeddah-abha/'],
                            ['Jizan', '/locations/jizan/'],
                            ['Bishah', '/locations/bishah/'],
                            ['Al Namas', '/locations/al-namas/'],
                            ['Private driver service', '/services/private-driver/'],
                            ['Cable car transfers', '/services/cable-car/'],
                            ['All Saudi routes', '/routes/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#16231f]/15 px-4 py-2.5 text-sm font-semibold text-[#16231f] hover:border-[#2f5d46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0a526]">{l}</Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#16231f]">
                <Contours className="absolute inset-0 -z-10 w-full h-full" opacity={0.14} />
                <svg className="absolute bottom-0 left-0 -z-10 w-full h-1/2" viewBox="0 0 1440 300" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 300 L0 200 C 200 140, 380 190, 560 150 S 900 90, 1100 150 S 1300 120, 1440 160 L1440 300 Z" fill="#1d3a2e" />
                </svg>
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Planning a Journey From Abha?</h2>
                    <p className="text-lg text-white/75 mb-10">
                        Tell us your pickup location, destination, travel date, passengers and luggage. We&apos;ll help arrange the appropriate private vehicle for your journey across Abha and the Aseer region.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-[#e0a526] text-[#16231f] hover:bg-[#eab43a]">
                            <a href={QUOTE_HREF}>Get Abha Quote</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
