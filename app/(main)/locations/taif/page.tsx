import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Plane, Mountain, CableCar, Flower2, CloudFog, Users, Briefcase, Check, Info, Route, Building2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/alula/Reveal';
import AlUlaReviews from '@/components/alula/AlUlaReviews';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import TaifTripPicker from '@/components/taif/TaifTripPicker';
import TaifLevels from '@/components/taif/TaifLevels';
import TaifServiceChooser from '@/components/taif/TaifServiceChooser';
import TaifFleet from '@/components/taif/TaifFleet';
import { PRICING_RULES } from '@/lib/pricing';
import { getDistanceRoute } from '@/data/distanceRoutes';

const PAGE_URL = 'https://taxiserviceksa.com/locations/taif/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for a transfer in Taif. Pickup, destination, date and passengers: ')}`;

export const metadata: Metadata = {
    title: 'Taif Taxi & Private Transfers | TIF Airport, Al Hada, Makkah & Jeddah',
    description:
        'Private transfers in Taif: TIF Airport pickups, Al Hada and Al Shafa mountain trips, cable-car and rose-season transport, hourly drivers and journeys to Makkah and Jeddah. Request a quote.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Taif Taxi & Private Transfer Service',
        description: 'Airport transfers, mountain transportation, chauffeur service and intercity journeys from Taif to Makkah, Jeddah and the highlands.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private transfers in Taif' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Taif Taxi & Private Transfer Service',
        description: 'Airport transfers, mountain transportation, chauffeur service and intercity journeys from Taif to Makkah, Jeddah and the highlands.',
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

const q = (p: Record<string, string>) => `/booking/?${new URLSearchParams(p).toString()}`;

// Distance/time ranges come from the site's distance data so pages agree.
const toMakkah = getDistanceRoute('taif-to-makkah');
const toJeddah = getDistanceRoute('jeddah-to-taif');
const tidy = (s?: string) => (s ?? '').replace(/^approximately\s*/i, '').replace(/ of continuous driving$/, '');

// One-way Taif <-> Makkah fares from the site's fare table (lib/pricing.ts).
const FARE_ROWS = [
    { key: 'Toyota Camry', label: 'Toyota Camry' },
    { key: 'Hyundai Staria VIP', label: 'Hyundai Staria' },
    { key: 'GMC Yukon XL / Denali', label: 'GMC Yukon' },
    { key: 'Toyota Hiace', label: 'Toyota Hiace' },
    { key: 'Toyota Coaster', label: 'Toyota Coaster' },
];
const rules = PRICING_RULES['makkah-taif'] ?? {};
const fares = FARE_ROWS.filter((r) => rules[r.key]).map((r) => ({ label: r.label, price: rules[r.key].price }));

const faqs = [
    { q: 'Do you provide transfers from Taif Airport?', a: 'Yes - from TIF to hotels in Taif, Al Hada, Al Shafa, Makkah or Jeddah. Share your flight number so the pickup can be coordinated around your arrival.' },
    { q: 'Can I book a private car from Taif to Makkah?', a: `Yes, one way or return. It is roughly ${tidy(toMakkah?.distanceRange) || '85–100 km'}, often ${tidy(toMakkah?.drivingTimeRange) || '1.5–2 hours'} depending on route and traffic.` },
    { q: 'Can I book a private car from Taif to Jeddah or Jeddah Airport?', a: 'Yes. The route used may depend on current road conditions and access, so allow extra time before a flight.' },
    { q: 'Can I go up to Al Hada and come back?', a: 'Yes - book a return with waiting time, or a driver by the hour if you plan several stops.' },
    { q: 'Does the transfer include the cable car?', a: 'No. We drive you to and from the cable-car area; tickets and operation are separate unless they are explicitly included in your booking.' },
    { q: 'Can you take us to rose farms?', a: 'Yes, during the season. Rose-farm visits are seasonal, so confirm current availability with the farm; an hourly driver works best for several stops.' },
    { q: 'Can I hire a driver for a day in Taif?', a: 'Yes. Choose hourly hire on the booking form and say how many hours you need.' },
    { q: 'Which vehicle is best for mountain trips?', a: 'Choose by people and luggage. A sedan suits couples; a Staria or Yukon gives families more room on longer, winding drives.' },
    { q: 'Does weather affect mountain journeys?', a: 'It can. Fog and rain are more common on the ridges than in the city, so allow flexibility - especially before a flight.' },
    { q: 'Can you pick us up from our hotel in Taif?', a: 'Yes. Give us the hotel name and pickup time; the driver meets you at the entrance.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private transfers in Taif',
            url: PAGE_URL,
            serviceType: 'Pre-booked private transfer',
            description:
                'Pre-booked private transfers in Taif: Taif International Airport (TIF) pickups, trips to Al Hada and Al Shafa, cable-car and rose-season transport, hourly drivers, and journeys to Makkah and Jeddah.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: { '@type': 'City', name: 'Taif' },
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
const link = 'font-semibold text-[#be185d] hover:underline';

// Five-petal rose mark used as a subtle botanical accent.
function Rose({ className = '' }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
            {[0, 72, 144, 216, 288].map((a) => (
                <ellipse key={a} cx="50" cy="30" rx="16" ry="24" transform={`rotate(${a} 50 50)`} fill="currentColor" fillOpacity="0.5" />
            ))}
            <circle cx="50" cy="50" r="10" fill="currentColor" />
        </svg>
    );
}

export default function TaifPage() {
    return (
        <div className="taif-page bg-[#faf6f2]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#2a1a22]">
                <svg className="absolute bottom-0 left-0 -z-10 w-full h-[70%]" viewBox="0 0 1440 500" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 500 L0 300 C 140 250, 260 160, 380 190 S 560 90, 700 130 S 900 60, 1060 120 S 1300 80, 1440 150 L1440 500 Z" fill="#3a2530" />
                    <path d="M0 500 L0 380 C 200 340, 380 300, 560 330 S 900 270, 1100 310 S 1320 290, 1440 320 L1440 500 Z" fill="#46303a" />
                    {/* winding Al Hada road */}
                    <path d="M60 470 C 160 420, 120 380, 230 360 S 300 300, 400 300 S 480 240, 580 230 S 700 180, 820 190" fill="none" stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round" pathLength={1} className="route-draw" />
                </svg>
                <div className="absolute inset-x-0 top-[35%] -z-10 h-24 fog-drift bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" aria-hidden="true" />
                <Rose className="absolute -right-10 -top-10 -z-10 w-72 h-72 text-pink-400/10" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2a1a22] via-[#2a1a22]/85 to-[#2a1a22]/20" aria-hidden="true" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-6 lg:gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className="hidden sm:block text-sm font-semibold text-pink-200/90 mb-6">Taif • Al Hada • Al Shafa • TIF Airport • Makkah • Jeddah</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-tight mb-5">Taif Taxi &amp; Private Transfer Service</h1>
                        <p className="text-base sm:text-lg text-white/85 leading-relaxed sm:mb-8 max-w-xl">
                            Private airport transfers, mountain transportation, chauffeur service and intercity journeys from Taif to Makkah, Jeddah and the surrounding highlands.
                        </p>
                        <div className="hidden sm:flex gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#f472b6] text-[#2a1a22] hover:bg-pink-300">
                                <a href={QUOTE_HREF}>Get Taif Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                    </div>
                    <div id="quote" className="scroll-mt-40">
                        <RouteQuoteCard
                            title="Your Taif journey"
                            cta="Get Taif Quote"
                            fromPlaceholder="Airport, hotel or exact address"
                            toPlaceholder="Hotel, mountain area or city"
                            fromChips={['Taif International Airport (TIF)', 'Taif city', 'Taif hotel', 'Al Hada', 'Al Shafa']}
                            toChips={['Makkah', 'Jeddah', 'Al Hada', 'Al Shafa', 'Al Hada cable car area', 'Taif International Airport (TIF)']}
                            showFlight
                            buttonClass="bg-[#be185d] hover:bg-[#9d174d] focus-visible:ring-pink-400"
                        />
                    </div>
                </div>
            </section>

            {/* ================= TRIP PICKER ================= */}
            <section aria-labelledby="trip" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="trip" className="text-3xl md:text-5xl font-bold text-[#2a1a22] mb-3">What Kind of Taif Trip?</h2>
                    <p className="text-slate-600 max-w-2xl mb-8">Staying in the city, going up to the mountains, heading down to Makkah or Jeddah, or visiting several places - each is booked a little differently.</p>
                    <TaifTripPicker />
                </div>
            </section>

            {/* ================= CITY TO MOUNTAIN (signature) ================= */}
            <section aria-labelledby="levels" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl mb-10">
                        <h2 id="levels" className="text-3xl md:text-5xl font-bold text-[#2a1a22] mb-4">Taif Has Two Travel Levels</h2>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            The city and the airport sit on a high plateau; Al Hada and Al Shafa rise above it on the ridges; Makkah and Jeddah lie far below the escarpment. Trips up to the ridges or down the mountain road involve different conditions, weather and journey times from a run across town.
                        </p>
                    </div>
                    <TaifLevels />
                </div>
            </section>

            {/* ================= AIRPORT ================= */}
            <section aria-labelledby="airport" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <Reveal>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#be185d] mb-3 flex items-center gap-2"><Plane className="w-4 h-4" aria-hidden="true" /> TIF</p>
                        <h2 id="airport" className="text-3xl md:text-4xl font-bold text-[#2a1a22] mb-4">Taif Airport Private Transfers</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">Taif International Airport is about 27 km north-east of the city centre. From the terminal the same car can take you into Taif, up to the mountains, or on down to Makkah or Jeddah.</p>
                        <div className="flex flex-wrap gap-2">
                            {['TIF → Taif hotel', 'TIF → Al Hada', 'TIF → Al Shafa', 'TIF → Makkah', 'TIF → Jeddah', 'Hotel → TIF'].map((r) => (
                                <span key={r} className="rounded-full bg-white border border-[#2a1a22]/10 px-4 py-2 text-sm font-semibold text-[#2a1a22]">{r}</span>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <aside className="rounded-3xl bg-[#2a1a22] text-white p-7">
                            <h3 className="mb-3">Landing at TIF?</h3>
                            <p className="text-sm text-white/70 mb-5">Share your flight number when booking so the pickup can be coordinated around your arrival. Also send:</p>
                            <ul className="grid grid-cols-2 gap-2 text-sm mb-7">
                                {['Arrival time', 'Passengers', 'Luggage', 'Destination'].map((i) => (
                                    <li key={i} className="flex gap-2"><Check className="w-4 h-4 text-pink-300 mt-0.5 shrink-0" aria-hidden="true" />{i}</li>
                                ))}
                            </ul>
                            <Link href={q({ from: 'Taif International Airport (TIF)' })} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f472b6] px-5 py-3.5 font-bold text-[#2a1a22] hover:bg-pink-300">Book a TIF pickup <Arrow /></Link>
                        </aside>
                    </Reveal>
                </div>
            </section>

            {/* ================= MAKKAH + JEDDAH ================= */}
            <section aria-label="Taif to Makkah and Jeddah" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Reveal className="h-full">
                        <article className="h-full rounded-3xl bg-[#faf6f2] p-7 md:p-9 flex flex-col">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#be185d] mb-2">Down the mountain</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#2a1a22] mb-3">Taif to Makkah Private Transfer</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                About {tidy(toMakkah?.distanceRange) || '85–100 km'}, often {tidy(toMakkah?.drivingTimeRange) || '1.5–2 hours'} depending on the route and traffic. Hotel or airport pickup, family transfers and returns for pilgrims travelling to and from Makkah.
                            </p>
                            <p className="text-sm text-slate-600 mb-5">Travelling for Umrah? The Miqat on this side is Qarn al-Manazil - see <Link href="/locations/taif/miqat-qarn-al-manazil/" className={link}>Miqat transport</Link>. For religious guidance, follow a qualified scholar.</p>
                            {fares.length > 0 && (
                                <div className="rounded-2xl bg-white border border-[#2a1a22]/10 p-5 mb-6">
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">One-way fares, Taif ↔ Makkah</p>
                                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
                                        {fares.map((f) => (
                                            <div key={f.label} className="flex justify-between gap-3"><dt className="text-slate-700">{f.label}</dt><dd className="font-bold text-[#2a1a22]">SAR {f.price}</dd></div>
                                        ))}
                                    </dl>
                                    <p className="text-xs text-slate-500 mt-3">From our fare table for standard pickups and drop-offs. Your confirmed price is shown before you book.</p>
                                </div>
                            )}
                            <Link href="/routes/makkah-taif/" className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#2a1a22] px-5 py-3.5 font-bold text-white hover:bg-black">View Taif → Makkah Transfer <Arrow /></Link>
                        </article>
                    </Reveal>
                    <Reveal className="h-full" delay={100}>
                        <article className="h-full rounded-3xl bg-[#faf6f2] p-7 md:p-9 flex flex-col">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#be185d] mb-2">To the coast</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#2a1a22] mb-3">Taif to Jeddah Private Transfer</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                About {tidy(toJeddah?.distanceRange) || '167–200 km'}, often {tidy(toJeddah?.drivingTimeRange) || '2–2.5 hours'}. To Jeddah hotels, offices or King Abdulaziz International Airport - for family trips, business travel and return journeys.
                            </p>
                            <p className="text-sm text-slate-600 flex gap-2 mb-6"><Info className="w-4 h-4 mt-0.5 shrink-0 text-[#be185d]" aria-hidden="true" />The route used may depend on current road conditions and access. Allow extra time before a flight.</p>
                            <div className="mt-auto flex flex-col gap-2">
                                <Link href="/routes/taif-jeddah/" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#2a1a22] px-5 py-3.5 font-bold text-white hover:bg-black">View Taif → Jeddah Transfer <Arrow /></Link>
                                <Link href="/routes/jeddah-taif/" className="text-center text-sm font-bold text-[#be185d] hover:underline py-2">Coming from Jeddah? Private Jeddah transfer to Taif</Link>
                            </div>
                        </article>
                    </Reveal>
                </div>
            </section>

            {/* ================= MOUNTAINS: HADA, SHAFA, CABLE CAR ================= */}
            <section aria-labelledby="mountains" className="relative isolate overflow-hidden bg-[#2a1a22] text-white py-20 px-4 sm:px-6 lg:px-8">
                <svg className="absolute inset-0 -z-10 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <g fill="none" stroke="#f472b6" strokeOpacity="0.07">
                        {Array.from({ length: 8 }, (_, i) => <path key={i} d={`M-50 ${500 - i * 50} C 200 ${420 - i * 55}, 400 ${520 - i * 40}, 850 ${380 - i * 45}`} />)}
                    </g>
                </svg>
                <div className="max-w-6xl mx-auto">
                    <h2 id="mountains" className="text-3xl md:text-5xl font-bold mb-4 max-w-3xl">Private Transportation Through Taif&apos;s Mountain Roads</h2>
                    <p className="text-white/70 max-w-2xl mb-10">Point-to-point from your hotel to a mountain destination, a return with the car waiting, or a private driver for several stops.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <Reveal className="h-full">
                            <article className="h-full rounded-3xl bg-white/[0.06] border border-white/10 p-7 flex flex-col">
                                <Mountain className="w-7 h-7 text-pink-300 mb-4" aria-hidden="true" />
                                <h3 className="mb-3">Al Hada Mountain Transfers</h3>
                                <p className="text-sm text-white/70 mb-4">About 20 km west of the city on the escarpment edge - resorts, viewpoints and the cable-car area.</p>
                                <ul className="text-sm text-white/80 space-y-1.5 mb-6">
                                    <li>Taif → Al Hada</li><li>Jeddah or Makkah → Al Hada</li><li>Hotel → cable car → hotel</li>
                                </ul>
                                <Link href="/locations/taif/al-hada/" className="group mt-auto inline-flex items-center gap-2 font-bold text-pink-300">Al Hada transfer <Arrow /></Link>
                            </article>
                        </Reveal>
                        <Reveal className="h-full" delay={80}>
                            <article className="h-full rounded-3xl bg-white/[0.06] border border-white/10 p-7 flex flex-col">
                                <Mountain className="w-7 h-7 text-pink-300 mb-4" aria-hidden="true" />
                                <h3 className="mb-3">Al Shafa Private Transportation</h3>
                                <p className="text-sm text-white/70 mb-4">Around 25 km south-west, higher up. Hotel pickups, mountain stays and family days - and the ride back down.</p>
                                <ul className="text-sm text-white/80 space-y-1.5 mb-6">
                                    <li>Hotel → Al Shafa → hotel</li><li>Resort drop-off</li><li>Several viewpoints with a driver</li>
                                </ul>
                                <Link href="/locations/taif/al-shafa/" className="group mt-auto inline-flex items-center gap-2 font-bold text-pink-300">Al Shafa transport <Arrow /></Link>
                            </article>
                        </Reveal>
                        <Reveal className="h-full" delay={160}>
                            <article className="h-full rounded-3xl bg-[#fdf2f6] text-[#2a1a22] p-7 flex flex-col">
                                <CableCar className="w-7 h-7 text-[#be185d] mb-4" aria-hidden="true" />
                                <h3 className="mb-3">Taif Cable Car Transfers</h3>
                                <p className="text-sm text-slate-700 mb-4">We provide transportation to the relevant cable-car departure area; cable-car tickets and operation are separate unless explicitly included in the booking. Check the cable car is running before you travel.</p>
                                <Link href="/services/cable-car/" className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#be185d] px-5 py-3.5 font-bold text-white hover:bg-[#9d174d]">Plan Your Cable Car Transfer <Arrow /></Link>
                            </article>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ================= ROSE SEASON ================= */}
            <section aria-labelledby="roses" className="relative isolate overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
                <Rose className="absolute -left-16 top-10 -z-10 w-80 h-80 text-pink-300/20" />
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                    <Reveal>
                        <Flower2 className="w-8 h-8 text-[#be185d] mb-4" aria-hidden="true" />
                        <h2 id="roses" className="text-3xl md:text-4xl font-bold text-[#2a1a22] mb-4">Taif Rose Season Transportation</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-5">
                            Harvest usually falls in spring, around late March and April - but the exact weeks change from year to year. Rose-farm visits are seasonal, so confirm current availability when planning your trip.
                        </p>
                        <ul className="space-y-2.5 text-slate-700">
                            <li className="flex gap-3"><Check className="w-5 h-5 text-[#be185d] shrink-0 mt-0.5" aria-hidden="true" />Picking happens early, so many visitors book a morning pickup.</li>
                            <li className="flex gap-3"><Check className="w-5 h-5 text-[#be185d] shrink-0 mt-0.5" aria-hidden="true" />Several farms or a distillery in one morning suit an hourly driver.</li>
                            <li className="flex gap-3"><Check className="w-5 h-5 text-[#be185d] shrink-0 mt-0.5" aria-hidden="true" />We provide the transport; entry to any farm is up to the farm.</li>
                        </ul>
                    </Reveal>
                    <Reveal delay={100}>
                        <div className="rounded-3xl bg-white border border-pink-200 p-7">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#be185d] mb-4">A rose-season morning</p>
                            <ol className="space-y-3 mb-7">
                                {['Early pickup at your hotel', 'Rose farm', 'Distillery or second farm', 'Back to the hotel'].map((s, i) => (
                                    <li key={s} className="flex items-center gap-3 font-semibold text-[#2a1a22]">
                                        <span className="w-7 h-7 rounded-full bg-pink-100 text-[#be185d] text-xs font-black flex items-center justify-center" aria-hidden="true">{i + 1}</span>{s}
                                    </li>
                                ))}
                            </ol>
                            <Link href={q({ trip: 'hourly', hours: '4', from: 'Taif hotel', notes: 'Rose season visit - farms / times: ' })} className="group inline-flex items-center gap-2 rounded-xl bg-[#2a1a22] px-5 py-3.5 font-bold text-white hover:bg-black">Book a rose-season driver <Arrow /></Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ================= SERVICE CHOOSER ================= */}
            <section aria-labelledby="driver" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
                    <div>
                        <h2 id="driver" className="text-3xl md:text-4xl font-bold text-[#2a1a22] mb-4">Private Driver for a Taif Day</h2>
                        <p className="text-slate-700 leading-relaxed mb-5">
                            Taif&apos;s attractions are spread between the city, the ridges and the farms, so a car that stays with you often makes more sense than a string of transfers. Choose the option that fits your plan.
                        </p>
                        <p className="text-sm text-slate-600">More on the <Link href="/services/private-driver/" className={link}>private driver for Taif</Link> and elsewhere.</p>
                    </div>
                    <TaifServiceChooser />
                </div>
            </section>

            {/* ================= FLEET + WEATHER ================= */}
            <section aria-labelledby="fleet" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="fleet" className="text-3xl md:text-4xl font-bold text-[#2a1a22] mb-3">Choose Your Vehicle</h2>
                    <p className="text-slate-600 max-w-2xl mb-8">Winding mountain roads and intercity drives reward a bit of extra space. Set your group and bags.</p>
                    <TaifFleet />

                    <details className="group mt-10 rounded-3xl bg-white border border-[#2a1a22]/10 p-6 md:p-8 open:shadow-sm">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#2a1a22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded-lg">
                            <span className="flex items-center gap-3 text-xl"><CloudFog className="w-6 h-6 text-[#be185d]" aria-hidden="true" /> Planning a Taif Mountain Journey?</span>
                            <span className="text-2xl text-[#be185d] transition-transform group-open:rotate-45 motion-reduce:transition-none" aria-hidden="true">+</span>
                        </summary>
                        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700">
                            <li>Mountain weather can differ from the city and from Makkah or Jeddah below.</li>
                            <li>Fog and rain can reduce visibility on the ridges.</li>
                            <li>Road conditions can affect which route is used.</li>
                            <li>Journey times change - allow extra time for flights and intercity connections.</li>
                        </ul>
                        <p className="text-xs text-slate-500 mt-4">General planning guidance, not a live forecast.</p>
                    </details>
                </div>
            </section>

            {/* ================= DECISION + FAMILY + BUSINESS ================= */}
            <section aria-labelledby="decide" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="decide" className="text-3xl md:text-4xl font-bold text-[#2a1a22] mb-8">Airport, City or Mountain?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                        {[
                            { i: Plane, a: 'Landing at TIF', b: 'Airport transfer', h: q({ from: 'Taif International Airport (TIF)' }) },
                            { i: Building2, a: 'Staying in Taif', b: 'City / hotel transfer', h: q({ from: 'Taif' }) },
                            { i: Mountain, a: 'Going into the mountains', b: 'SUV, return or private driver', h: q({ from: 'Taif', to: 'Al Hada', notes: 'Return / waiting time: ' }) },
                        ].map((c) => (
                            <Link key={c.a} href={c.h} className="group rounded-3xl border border-[#2a1a22]/10 bg-[#faf6f2] p-7 hover:border-[#be185d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400">
                                <c.i className="w-7 h-7 text-[#be185d] mb-5" aria-hidden="true" />
                                <p className="text-slate-500 text-sm">{c.a}</p>
                                <p className="text-xl font-bold text-[#2a1a22] flex items-center gap-2">{c.b} <Arrow /></p>
                            </Link>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <article className="rounded-3xl bg-[#fdf2f6] p-7 md:p-9">
                            <Users className="w-7 h-7 text-[#be185d] mb-4" aria-hidden="true" />
                            <h2 className="text-2xl font-bold text-[#2a1a22] mb-4">Travelling With Family?</h2>
                            <ul className="space-y-2.5 text-slate-700">
                                <li>Tell us every suitcase - airport and intercity trips carry the most luggage.</li>
                                <li>A Staria, Yukon or Hiace gives room on mountain and intercity drives.</li>
                                <li>Book the return from Al Hada or Al Shafa together with the outbound trip.</li>
                                <li>Need child seats? Mention it and we confirm what we can provide.</li>
                            </ul>
                        </article>
                        <article className="rounded-3xl bg-[#2a1a22] text-white p-7 md:p-9">
                            <Briefcase className="w-7 h-7 text-pink-300 mb-4" aria-hidden="true" />
                            <h2 className="text-2xl font-bold mb-4">Business Transportation in Taif</h2>
                            <ul className="space-y-2.5 text-white/80">
                                <li>TIF → hotel on arrival, hotel → TIF for departure.</li>
                                <li>Hotel → meetings, or a chauffeur for the full day.</li>
                                <li>Taif ↔ Jeddah and Taif ↔ Makkah for meetings further afield.</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            {/* ================= ROUTE NETWORK ================= */}
            <section aria-labelledby="network" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="network" className="text-3xl md:text-4xl font-bold text-[#2a1a22] mb-3">From Taif to…</h2>
                    <p className="text-slate-600 max-w-2xl mb-8">Routes with their own pages. Figures are approximate.</p>
                    <ul className="flex gap-3 overflow-x-auto snap-x pb-3 -mx-4 px-4 md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible md:mx-0 md:px-0">
                        {[
                            { n: 'Makkah', d: tidy(toMakkah?.distanceRange) || '85–100 km', h: '/routes/makkah-taif/' },
                            { n: 'Jeddah', d: tidy(toJeddah?.distanceRange) || '167–200 km', h: '/routes/taif-jeddah/' },
                            { n: 'Al Hada', d: 'About 20 km', h: '/locations/taif/al-hada/' },
                            { n: 'Al Shafa', d: 'About 25 km', h: '/locations/taif/al-shafa/' },
                            { n: 'Madinah', d: 'About 470–525 km', h: '/distance/taif-to-madinah/' },
                            { n: 'Riyadh', d: 'About 785–800 km', h: '/distance/riyadh-to-taif/' },
                        ].map((r) => (
                            <li key={r.n} className="snap-start shrink-0 w-44 md:w-auto">
                                <Link href={r.h} className="group block h-full rounded-2xl bg-white border border-[#2a1a22]/10 p-5 hover:border-[#be185d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400">
                                    <Route className="w-5 h-5 text-[#be185d] mb-3" aria-hidden="true" />
                                    <p className="font-bold text-[#2a1a22]">Taif → {r.n}</p>
                                    <p className="text-xs text-slate-500 mt-1">{r.d}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= PRICING + PROCESS ================= */}
            <section aria-labelledby="pricing" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <Reveal>
                        <h2 id="pricing" className="text-3xl md:text-4xl font-bold text-[#2a1a22] mb-4">Request a Current Taif Transfer Quote</h2>
                        <p className="text-slate-700 leading-relaxed mb-5">Apart from the Taif ↔ Makkah fares above, trips are quoted individually - a hotel run and a day in the mountains are priced differently. You see the price before you confirm. It depends on:</p>
                        <div className="flex flex-wrap gap-2">
                            {['Route', 'Vehicle', 'Passengers', 'Luggage', 'Waiting', 'Return', 'Duration', 'Mountain destination'].map((f) => (
                                <span key={f} className="rounded-full bg-[#faf6f2] px-4 py-2 text-sm text-[#2a1a22]">{f}</span>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2a1a22] mb-6">How Booking Works</h2>
                        <ol className="space-y-4">
                            {[
                                ['Tell us the trip', 'Pickup, destination, date and time.'],
                                ['Add your group', 'Passengers, luggage and vehicle - plus flight number or waiting time.'],
                                ['Confirm', 'Price and trip details before you commit.'],
                                ['Travel', 'Driver and vehicle details come with your confirmed booking.'],
                            ].map(([t, d], i) => (
                                <li key={t} className="flex gap-4">
                                    <Rose className="w-8 h-8 shrink-0 text-pink-400" />
                                    <div>
                                        <p className="font-bold text-[#2a1a22]"><span className="sr-only">Step {i + 1}: </span>{t}</p>
                                        <p className="text-sm text-slate-600">{d}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </Reveal>
                </div>
            </section>

            <AlUlaReviews place="taif" title="What travellers said about their Taif trips" />

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-[#2a1a22] mb-8">Taif Transfer Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#2a1a22]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#2a1a22] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-bold text-[#2a1a22] mb-6">Related Routes &amp; Services</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Private Jeddah transfer to Taif', '/routes/jeddah-taif/'],
                            ['Taif to Jeddah', '/routes/taif-jeddah/'],
                            ['Makkah to Taif route', '/routes/makkah-taif/'],
                            ['Taif cable-car transportation', '/services/cable-car/'],
                            ['Al Hada transfer', '/locations/taif/al-hada/'],
                            ['Al Shafa', '/locations/taif/al-shafa/'],
                            ['Miqat Qarn al-Manazil', '/locations/taif/miqat-qarn-al-manazil/'],
                            ['Transport in Makkah', '/locations/makkah/'],
                            ['Rabigh', '/locations/rabigh/'],
                            ['Al-Qunfudhah', '/locations/al-qunfudhah/'],
                            ['Private driver service', '/services/private-driver/'],
                            ['Airport transfers', '/services/airport-transfers/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#2a1a22]/15 px-4 py-2.5 text-sm font-semibold text-[#2a1a22] hover:border-[#be185d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400">{l}</Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#2a1a22]">
                <svg className="absolute bottom-0 left-0 -z-10 w-full h-1/2" viewBox="0 0 1440 300" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 300 L0 190 C 200 130, 380 180, 560 140 S 900 80, 1100 140 S 1300 110, 1440 150 L1440 300 Z" fill="#3a2530" />
                </svg>
                <Rose className="absolute right-6 top-6 -z-10 w-40 h-40 text-pink-400/10" />
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Planning a Taif Journey?</h2>
                    <p className="text-lg text-white/75 mb-10">
                        Tell us your pickup location, destination, travel date, passengers and luggage. Whether you&apos;re heading to the airport, Makkah, Jeddah, Al Hada or the mountains, we&apos;ll help arrange the appropriate private vehicle.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-[#f472b6] text-[#2a1a22] hover:bg-pink-300">
                            <a href={QUOTE_HREF}>Get Taif Quote</a>
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
