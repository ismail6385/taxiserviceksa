import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Minus, Hotel, Plane, Train, MapPin, Luggage, Users, Repeat, MoveRight, Route, Info, Clock, BusFront } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import AlUlaReviews from '@/components/alula/AlUlaReviews';
import Reveal from '@/components/alula/Reveal';
import VehicleSelector from '@/components/madinah/VehicleSelector';
import BookingChecklist from '@/components/madinah/BookingChecklist';
import MadinahMakkahQuoteCard from '@/components/routes/MadinahMakkahQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';
import { PRICING_RULES } from '@/lib/pricing';
import { getDistanceRoute } from '@/data/distanceRoutes';

const PAGE_URL = 'https://taxiserviceksa.com/routes/madinah-makkah/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote from Madinah to Makkah. Pickup hotel, date and passengers: ')}`;

// Distance/time figures come from the route's distance page data so both pages agree.
const distance = getDistanceRoute('madinah-to-makkah');

export const metadata: Metadata = {
    title: 'Madinah to Makkah Taxi & Private Transfer | Taxi Service KSA',
    description:
        'Private transfer from your Madinah hotel to your destination in Makkah, with a planned Miqat stop on request, luggage-friendly vehicles and options for families and groups. Request a quote.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Madinah to Makkah Private Transfer',
        description: 'Door to door from Madinah to Makkah, with vehicle options for couples, families and groups.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/madinah-night-view.webp', width: 1024, height: 1024, alt: 'Madinah at night' }],
    },
};

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

// One-way fares from the site's fare table (lib/pricing.ts), used by the public
// fare calculator and admin bookings. The route key covers both directions.
const FARE_ROWS: { key: string; label: string }[] = [
    { key: 'Toyota Camry', label: 'Toyota Camry (sedan)' },
    { key: 'Hyundai Staria VIP', label: 'Hyundai Staria' },
    { key: 'GMC Yukon XL / Denali', label: 'GMC Yukon' },
    { key: 'Toyota Hiace', label: 'Toyota Hiace' },
    { key: 'Toyota Coaster', label: 'Toyota Coaster' },
];
const rules = PRICING_RULES['makkah-madinah'] ?? {};
const fares = FARE_ROWS.filter((r) => rules[r.key]).map((r) => ({ label: r.label, price: rules[r.key].price }));

const journey = [
    { title: 'Madinah hotel pickup', text: 'Your driver collects you at the confirmed pickup point - in the Central Area this may be a nearby access point.' },
    { title: 'Leaving Madinah', text: 'Luggage loaded once, and the private car sets off towards Makkah.' },
    { title: 'Miqat - Dhul-Hulayfah (Abyar Ali)', text: 'If you are travelling for Umrah and asked for a stop, the driver stops here on the way out of Madinah.', accent: true },
    { title: 'The highway south', text: 'The long stretch of the journey, with breaks for prayer, food or rest when you ask.' },
    { title: 'Arriving in Makkah', text: 'Into the city towards your destination.' },
    { title: 'Makkah drop-off', text: 'At your hotel or the nearest point vehicles can reach, depending on current access rules.', accent: true },
];

const faqs = [
    { q: 'How far is Madinah from Makkah by road?', a: `${distance ? distance.distanceRange.replace(/^approximately/, 'Approximately') : 'Approximately 435–460 km'}, depending on where you are picked up and dropped off.` },
    { q: 'How long does the private drive take?', a: 'Around 4 to 4.5 hours of driving, and often about 5 hours door to door with a Miqat stop. Traffic, breaks and hotel access can add time.' },
    { q: 'Can you pick me up from my Madinah hotel?', a: 'Yes. Give us the hotel name; in the Central Area we confirm the most practical pickup point.' },
    { q: 'Can you take me directly to my Makkah hotel?', a: 'We drive to your hotel, or to the nearest point vehicles are allowed to reach when access close to the Haram is restricted.' },
    { q: 'Is a Miqat stop included?', a: 'Yes, if you ask for it when booking - tick "Plan a Miqat stop" in the quote form. How long you need there is up to you; tell us if you expect a longer stop.' },
    { q: 'Which Miqat is on this route?', a: 'Dhul-Hulayfah, also known as Abyar Ali, is the Miqat associated with travellers from Madinah. For the religious requirements themselves, please follow a qualified scholar.' },
    { q: 'Can I travel with large luggage?', a: 'Yes. Tell us how many suitcases you have so we send a vehicle with enough room - a Staria, Yukon or Hiace for more bags.' },
    { q: 'Which vehicle is best for a family?', a: 'Most families choose a Hyundai Staria or GMC Yukon. Use the vehicle guide on this page to compare.' },
    { q: 'Can I book for more than 7 passengers?', a: 'Yes - a Hiace, Coaster or larger vehicle, or two vehicles travelling together. Send the exact passenger and bag count.' },
    { q: 'Can I book a return trip?', a: 'Yes. Tick "I also need a return trip" and we arrange the Makkah to Madinah leg as well.' },
    { q: 'Can I go from Madinah Airport straight to Makkah?', a: 'Yes. Choose Madinah Airport as the pickup and share your flight details.' },
    { q: 'Can I change my pickup time?', a: 'Message us on WhatsApp as early as you can and we will do our best to rearrange it.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Madinah to Makkah Private Transfer',
            url: PAGE_URL,
            serviceType: 'Intercity private transfer',
            description:
                'Private door-to-door transfer from Madinah hotels, Madinah Airport or the Haramain station to destinations in Makkah, with an optional stop at the Miqat (Dhul-Hulayfah).',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: [
                { '@type': 'City', name: 'Madinah' },
                { '@type': 'City', name: 'Makkah' },
            ],
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

export default function MadinahMakkahRoutePage() {
    return (
        <div className="madinah-page bg-[#f7f5ef]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#082119]">
                {/* Route-map artwork */}
                <svg className="absolute inset-0 -z-10 w-full h-full" viewBox="0 0 1440 820" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <defs>
                        <radialGradient id="mm-glow" cx="0.8" cy="0.2" r="0.7">
                            <stop offset="0" stopColor="#14532d" stopOpacity="0.9" />
                            <stop offset="1" stopColor="#082119" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <rect width="1440" height="820" fill="url(#mm-glow)" />
                    <g stroke="#ffffff" strokeOpacity="0.05">
                        {Array.from({ length: 16 }, (_, i) => <path key={`v${i}`} d={`M${i * 96} 0 V 820`} />)}
                        {Array.from({ length: 9 }, (_, i) => <path key={`h${i}`} d={`M0 ${i * 96} H 1440`} />)}
                    </g>
                    <path d="M1180 120 C 1120 260, 1010 300, 980 420 S 900 640, 760 740" fill="none" stroke="#fbbf24" strokeOpacity="0.2" strokeWidth="10" strokeLinecap="round" />
                    <path d="M1180 120 C 1120 260, 1010 300, 980 420 S 900 640, 760 740" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" pathLength={1} className="route-draw" />
                </svg>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#082119] via-[#082119]/80 to-transparent" aria-hidden="true" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        {/* Madinah -> Miqat -> Makkah strip */}
                        <div className="mb-6 max-w-md" aria-label="Route: Madinah, then the Miqat at Dhul-Hulayfah, then Makkah">
                            <svg viewBox="0 0 400 24" className="w-full h-6" aria-hidden="true">
                                <path d="M10 12 H 390" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="2" />
                                <path d="M10 12 H 390" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" fill="none" pathLength={1} className="route-draw" />
                                <circle cx="10" cy="12" r="7" fill="#fbbf24" />
                                <circle cx="110" cy="12" r="5.5" fill="#34d399" />
                                <circle cx="390" cy="12" r="7" fill="#fbbf24" />
                            </svg>
                            <div className="relative h-5 text-xs sm:text-sm font-semibold" aria-hidden="true">
                                <span className="absolute left-0 text-amber-300">Madinah</span>
                                <span className="absolute left-[27.5%] -translate-x-1/2 text-emerald-300">Miqat</span>
                                <span className="absolute right-0 text-amber-300">Makkah</span>
                            </div>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-tight mb-5">Madinah to Makkah Private Transfer</h1>
                        <p className="text-lg text-emerald-50/85 leading-relaxed mb-8 max-w-xl">
                            Private door-to-door transportation from your Madinah hotel to your destination in Makkah, with vehicle options for couples, families and groups.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-amber-400 text-[#082119] hover:bg-amber-300">
                                <a href={QUOTE_HREF}>Get a Route Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Us</a>
                            </Button>
                        </div>
                    </div>
                    <div id="quote" className="scroll-mt-40">
                        <MadinahMakkahQuoteCard />
                    </div>
                </div>
            </section>

            {/* ================= ROUTE SUMMARY ================= */}
            <section aria-label="Route summary" className="border-b border-stone-200 bg-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto py-6">
                    <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
                        {[
                            ['Route', 'Madinah → Makkah'],
                            ['Road distance', 'About 435–460 km'],
                            ['Driving time', 'About 4–4.5 hours'],
                            ['With a Miqat stop', 'Often around 5 hours'],
                        ].map(([k, v]) => (
                            <div key={k}>
                                <dt className="text-xs font-bold uppercase tracking-wider text-stone-500">{k}</dt>
                                <dd className="text-lg font-bold text-gray-900">{v}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className="text-xs text-stone-500 mt-3">
                        Actual journey time depends on pickup, destination, traffic and stops. More route detail on the <Link href="/distance/madinah-to-makkah/" className="text-emerald-800 font-semibold hover:underline">Madinah to Makkah distance page</Link>.
                    </p>
                </div>
            </section>

            {/* ================= JOURNEY (signature) ================= */}
            <section aria-labelledby="journey" className="bg-[#082119] text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12">
                    <div className="lg:sticky lg:top-40 self-start">
                        <h2 id="journey" className="text-3xl md:text-5xl font-bold mb-4">Your Journey From Madinah to Makkah</h2>
                        <p className="text-emerald-50/75 leading-relaxed mb-6">
                            One car, one driver, from your hotel door in Madinah to your destination in Makkah. No station changes, no carrying bags between vehicles, and stops made when your family needs them.
                        </p>
                        <p className="text-sm text-emerald-50/55 flex gap-2 items-start">
                            <Info className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                            We provide transport. For Miqat and Ihram requirements, follow a qualified scholar or trusted religious authority.
                        </p>
                    </div>
                    <RouteJourney stops={journey} />
                </div>
            </section>

            {/* ================= MIQAT ================= */}
            <section aria-labelledby="miqat" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
                    <div>
                        <h2 id="miqat" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planning Your Miqat Stop</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Travellers heading to Makkah for Umrah need to observe the Miqat. For those leaving Madinah, the Miqat associated with the city is Dhul-Hulayfah, also known as Abyar Ali, on the way out towards Makkah - a narration in Sahih al-Bukhari from Ibn Abbas reports that it was fixed for the people of Madinah.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            For the journey itself, this means one thing: tell us when you book. The driver then plans the stop into the route.
                        </p>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex gap-3"><Check className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />The stop is added when you ask for it in your booking.</li>
                            <li className="flex gap-3"><Check className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />Take the time you need; if you expect a longer stop, mention it so it is agreed in advance.</li>
                            <li className="flex gap-3"><Check className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />Keep what you need for the Miqat in the car rather than packed deep in a suitcase.</li>
                        </ul>
                    </div>
                    <aside className="rounded-3xl border-2 border-amber-300 bg-amber-50 p-7">
                        <h3 className="mb-3 text-amber-950">A note on religious guidance</h3>
                        <p className="text-sm text-amber-950/85 leading-relaxed">
                            If you are travelling onward to Makkah for Umrah, make sure you understand the applicable Miqat and Ihram requirements before starting your journey. For religious guidance, follow a qualified scholar or trusted religious authority. Our role is the transport.
                        </p>
                    </aside>
                </div>
            </section>

            {/* ================= PICKUP + DROP-OFF ================= */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What Door-to-Door Means on This Route</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mb-10">
                        The booking is built around a confirmed pickup in Madinah and a confirmed destination in Makkah, so you do not change vehicles or transfer between stations. Near both Harams, vehicle access can be restricted - in that case your driver coordinates the nearest practical point.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="rounded-3xl border border-stone-200 p-8">
                            <h3 className="mb-5">Where can we pick you up in Madinah?</h3>
                            <ul className="space-y-3">
                                {[
                                    { icon: Hotel, t: 'Central Area / Markaziyah hotels', href: '/locations/madinah/central-area/' },
                                    { icon: MapPin, t: 'Hotels elsewhere in Madinah', href: '/locations/madinah/' },
                                    { icon: Plane, t: 'Madinah Airport (MED)', href: '/locations/madinah/madinah-airport/' },
                                    { icon: Train, t: 'Madinah Haramain Station', href: '/locations/madinah/train-station/' },
                                ].map((x) => (
                                    <li key={x.t}>
                                        <Link href={x.href} className="group flex items-center justify-between gap-3 rounded-xl bg-[#f7f5ef] px-4 py-3 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                                            <span className="flex items-center gap-3 font-medium text-gray-800"><x.icon className="w-5 h-5 text-emerald-700" aria-hidden="true" />{x.t}</span>
                                            <ArrowRight className="w-4 h-4 text-emerald-700 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-[#082119] text-white p-8">
                            <h3 className="mb-4">Where can you be dropped off in Makkah?</h3>
                            <p className="text-emerald-50/80 leading-relaxed mb-4">
                                Your hotel or accommodation anywhere in Makkah. For hotels close to Masjid al-Haram, where some roads are closed to vehicles, you are dropped at the nearest point the car can reach under the access rules in place on the day.
                            </p>
                            <p className="text-emerald-50/80 leading-relaxed mb-6">Give us the hotel name when booking so the driver can plan the final approach.</p>
                            <div className="flex flex-wrap gap-4 text-sm font-semibold">
                                <Link href="/locations/makkah/" className="text-amber-300 hover:underline">Transport in Makkah</Link>
                                <Link href="/services/makkah-city-transport/" className="text-amber-300 hover:underline">Getting around Makkah</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES + FAMILY ================= */}
            <section aria-labelledby="vehicles" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Travelling With Family or Extra Luggage?</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mb-10">
                        Four or five hours is a long time to sit squeezed in, and the end of an Umrah trip usually means more bags than the start. Choose by passengers and suitcases.
                    </p>
                    <VehicleSelector />
                    <p className="text-sm text-gray-600 mt-6">Child seats can be requested in the booking form, subject to availability.</p>
                </div>
            </section>

            {/* ================= GROUPS + FARES ================= */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div>
                        <BusFront className="w-9 h-9 text-emerald-700 mb-4" aria-hidden="true" />
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Travelling With More Than 7 Passengers?</h2>
                        <p className="text-gray-700 leading-relaxed mb-5">Larger families and Umrah groups can travel together in one vehicle or split across two. Our booking system lists these options:</p>
                        <ul className="space-y-2 text-gray-700 mb-6">
                            <li className="flex gap-3"><Check className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />Toyota Hiace - up to 11 passengers</li>
                            <li className="flex gap-3"><Check className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />Mercedes Sprinter - up to 14 passengers</li>
                            <li className="flex gap-3"><Check className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />Toyota Coaster - up to 17 passengers</li>
                            <li className="flex gap-3"><Check className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />Bus - up to 25 passengers</li>
                            <li className="flex gap-3"><Check className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />Or two vehicles travelling together</li>
                        </ul>
                        <p className="text-sm text-gray-500 mb-6">Availability of larger vehicles for your date is confirmed with the quote.</p>
                        <Button asChild className="h-auto py-3 px-6 rounded-xl font-bold bg-gray-900 text-white hover:bg-gray-800">
                            <a href={QUOTE_HREF}>Request Group Quote</a>
                        </Button>
                    </div>
                    <div className="rounded-3xl border border-stone-200 bg-[#f7f5ef] p-7 md:p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Get a Madinah → Makkah Quote</h2>
                        {fares.length > 0 && (
                            <>
                                <p className="text-sm text-gray-600 mb-4">One-way fares from our fare table:</p>
                                <dl className="divide-y divide-stone-200 rounded-2xl bg-white border border-stone-200 mb-4">
                                    {fares.map((f) => (
                                        <div key={f.label} className="flex justify-between px-5 py-3">
                                            <dt className="text-gray-700">{f.label}</dt>
                                            <dd className="font-bold text-gray-900">SAR {f.price}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </>
                        )}
                        <p className="text-sm text-gray-600 mb-3">Your price is confirmed before you book and can depend on:</p>
                        <ul className="flex flex-wrap gap-2 mb-6">
                            {['Vehicle', 'Passengers', 'Luggage', 'Pickup point', 'Destination', 'Date', 'Return trip', 'Extra stops'].map((f) => (
                                <li key={f} className="rounded-full border border-stone-200 bg-white px-3.5 py-1.5 text-sm text-gray-700">{f}</li>
                            ))}
                        </ul>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="font-bold text-gray-900 mb-2">Included</p>
                                <ul className="space-y-1.5 text-gray-700">
                                    {['Private vehicle and driver', 'Confirmed pickup and drop-off', 'Miqat stop, if requested'].map((t) => (
                                        <li key={t} className="flex gap-2"><Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />{t}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 mb-2">Quoted separately</p>
                                <ul className="space-y-1.5 text-gray-700">
                                    {['Extra waiting', 'Additional stops', 'Additional vehicles'].map((t) => (
                                        <li key={t} className="flex gap-2"><Minus className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" aria-hidden="true" />{t}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ONE WAY / RETURN / MULTI ================= */}
            <section aria-labelledby="trips" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="trips" className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">One Way, Return or Extra Stops?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { icon: MoveRight, t: 'One way', chain: 'Madinah → Makkah', d: 'For travellers continuing their trip from Makkah.' },
                            { icon: Repeat, t: 'Return', chain: 'Madinah → Makkah → Madinah', d: 'For those coming back to Madinah on a later date.' },
                            { icon: Route, t: 'Extra stops', chain: 'Madinah → Miqat → Makkah → agreed stop', d: 'When your destination is not the last place of the day.' },
                        ].map((c, i) => (
                            <Reveal key={c.t} delay={i * 80} className="h-full">
                                <div className="h-full rounded-2xl bg-white border border-stone-200 p-7">
                                    <c.icon className="w-7 h-7 text-emerald-700 mb-3" aria-hidden="true" />
                                    <h3 className="mb-1">{c.t}</h3>
                                    <p className="text-xs font-semibold text-amber-700 mb-3">{c.chain}</p>
                                    <p className="text-sm text-gray-600">{c.d}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CAR VS TRAIN ================= */}
            <section aria-labelledby="train" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 id="train" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Private Car or Haramain Train?</h2>
                    <p className="text-lg text-gray-600 mb-8">Both connect Madinah and Makkah. Which suits you depends on your group, your bags and where you are staying.</p>
                    <div className="overflow-x-auto rounded-2xl border border-stone-200">
                        <table className="w-full text-sm">
                            <thead className="bg-[#f7f5ef] text-left">
                                <tr>
                                    <th scope="col" className="px-4 py-3"></th>
                                    <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Private car</th>
                                    <th scope="col" className="px-4 py-3 font-semibold text-gray-900">Haramain train</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {[
                                    ['Pickup', 'Your hotel or location', 'Madinah station'],
                                    ['Drop-off', 'Your destination', 'Makkah station'],
                                    ['Luggage', 'Carried in the vehicle', 'You manage it on board'],
                                    ['Schedule', 'Pickup time you arrange', 'Train timetable'],
                                    ['Group travel', 'One private vehicle', 'A ticket per passenger'],
                                    ['Station transfers', 'Not needed', 'Usually needed at both ends'],
                                ].map(([k, a, b]) => (
                                    <tr key={k}>
                                        <th scope="row" className="px-4 py-3 text-left font-medium text-gray-800">{k}</th>
                                        <td className="px-4 py-3 text-gray-700">{a}</td>
                                        <td className="px-4 py-3 text-gray-700">{b}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                        Taking the train? We can still get you to it: <Link href="/locations/madinah/train-station/" className="text-emerald-800 font-semibold hover:underline">Madinah station transfers</Link>.
                    </p>
                </div>
            </section>

            {/* ================= DEPARTURE TIME + CHECKLIST ================= */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div>
                        <Clock className="w-9 h-9 text-emerald-700 mb-4" aria-hidden="true" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choosing Your Departure Time</h2>
                        <p className="text-gray-700 leading-relaxed mb-5">There is no single best time to leave. Things worth weighing:</p>
                        <ul className="space-y-3 text-gray-700">
                            {[
                                ['Hotel check-out', 'Leaving at check-out avoids waiting around with bags.'],
                                ['Prayer times', 'Some families plan to pray before leaving or at the Miqat.'],
                                ['Makkah check-in', 'Arriving too early can mean waiting for your room.'],
                                ['Season', 'In Ramadan and busy Umrah periods, traffic and hotel access can add time.'],
                            ].map(([t, d]) => (
                                <li key={t} className="rounded-xl bg-white border border-stone-200 px-4 py-3">
                                    <span className="font-semibold text-gray-900">{t}.</span> <span className="text-gray-600">{d}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Before Leaving Madinah</h2>
                        <BookingChecklist
                            items={['Pickup point confirmed', 'Hotel check-out time', 'Passenger count', 'Luggage count', 'Documents to hand', 'Ready for the Miqat stop (if Umrah)', 'Water and phone charger', 'Makkah destination confirmed']}
                            cta="Get My Route Quote"
                        />
                    </div>
                </div>
            </section>

            <AlUlaReviews place="makkah" title="What travellers said about their Madinah–Makkah trips" />

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Madinah to Makkah Questions</h2>
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

            {/* ================= REVERSE + RELATED ================= */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6">
                    <Link href="/routes/makkah-madinah/" className="group rounded-3xl bg-[#082119] text-white p-8 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                        <span className="text-sm font-semibold text-amber-300 mb-2">Travelling the other way?</span>
                        <span className="text-2xl font-bold flex items-center gap-3">Makkah → Madinah private transfer <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></span>
                    </Link>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { l: 'Madinah Airport → Makkah', h: '/locations/madinah/madinah-airport/' },
                            { l: 'Madinah → AlUla', h: '/routes/madinah-alula/' },
                            { l: 'Madinah → Jeddah', h: '/routes/madinah-jeddah/' },
                            { l: 'Madinah → Dammam', h: '/routes/madinah-dammam/' },
                        ].map((r) => (
                            <Link key={r.h} href={r.h} className="group flex items-center justify-between rounded-2xl border border-stone-200 bg-white px-5 py-4 font-semibold text-gray-900 hover:border-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                                {r.l} <ArrowRight className="w-4 h-4 text-emerald-700 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                            </Link>
                        ))}
                    </div>
                </div>
                <p className="max-w-6xl mx-auto text-sm text-gray-600 mt-6">
                    Before you leave Madinah: <Link href="/locations/madinah/" className="text-emerald-800 font-semibold hover:underline">transport around Madinah</Link>,{' '}
                    <Link href="/services/madinah-ziyarat/" className="text-emerald-800 font-semibold hover:underline">Ziyarat by private car</Link> and a{' '}
                    <Link href="/services/private-driver/" className="text-emerald-800 font-semibold hover:underline">private driver by the hour</Link>.
                </p>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#082119]">
                <svg className="absolute inset-0 -z-10 w-full h-full opacity-40" viewBox="0 0 1440 500" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M1300 40 C 1100 180, 900 160, 720 260 S 300 420, 120 470" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6 10" />
                </svg>
                <div className="max-w-3xl mx-auto text-center text-white">
                    <Luggage className="w-10 h-10 text-amber-400 mx-auto mb-5" aria-hidden="true" />
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Leaving Madinah Soon?</h2>
                    <p className="text-lg text-emerald-50/80 mb-10">Tell us your Madinah pickup, your Makkah destination, the date, passengers and bags - and whether you want a Miqat stop. We&apos;ll confirm the vehicle and price.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-amber-400 text-[#082119] hover:bg-amber-300">
                            <a href={QUOTE_HREF}>Get My Route Quote</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Us</a>
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-emerald-50/60 flex items-center justify-center gap-2"><Users className="w-4 h-4" aria-hidden="true" /> Group of 8 or more? Ask for a group quote.</p>
                </div>
            </section>
        </div>
    );
}
