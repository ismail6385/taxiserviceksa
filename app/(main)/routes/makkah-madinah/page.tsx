import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, X, Info, Users, Luggage, MapPin, TrainFront, Car, Clock, HeartHandshake, Baby } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';

const PAGE_URL = 'https://taxiserviceksa.com/routes/makkah-madinah/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need a private car from Makkah to Madinah. Makkah hotel, Madinah hotel, date and pickup time, passengers, suitcases and preferred vehicle: ')}`;

// Owner-confirmed one-way fares per vehicle (2026-10-23). Booking-system names from lib/supabase.ts.
const FARES = [
    { vehicle: 'Toyota Camry', name: 'Toyota Camry sedan', price: 400, seats: 'Up to 3 adults', bags: 'About 2 large suitcases', image: '/toyota-camry.webp', alt: 'Toyota Camry sedan for a Makkah to Madinah transfer' },
    { vehicle: 'Hyundai Staria VIP', name: 'Hyundai Staria VIP', price: 550, seats: 'Up to 7 passengers', bags: 'About 4 large suitcases', image: '/hyundai-staria.webp', alt: 'Hyundai Staria VIP van for a family travelling from Makkah to Madinah' },
    { vehicle: 'GMC Yukon XL / Denali', name: 'GMC Yukon XL', price: 600, seats: 'Up to 7 passengers', bags: 'About 5 large suitcases', image: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', alt: 'GMC Yukon XL SUV for the Makkah to Madinah road' },
    { vehicle: 'Toyota Hiace', name: 'Toyota Hiace', price: 800, seats: 'Up to 11 passengers', bags: 'Group luggage; send your bag count', image: '/toyota-hiace.webp', alt: 'Toyota Hiace van for an Umrah group from Makkah to Madinah' },
];
const sar = (n: number) => `${n.toLocaleString('en-US')} SAR`;

const KM = 'About 450 km';
const DRIVE = 'Around 4.5–5 hours';

const TITLE = 'Makkah to Madinah Private Car | Route, Prices & Travel Guide';
const DESCRIPTION = `Private car from your Makkah hotel to your Madinah hotel. One way per vehicle: sedan from ${sar(400)}, Staria ${sar(550)}, GMC ${sar(600)}, Hiace ${sar(800)}. Fuel and a rest stop included. Book on WhatsApp.`;

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car from Makkah to Madinah' }],
    },
};

const faqs = [
    { q: 'How much is a private car from Makkah to Madinah?', a: `One way, per vehicle, Makkah hotel to Madinah hotel: Toyota Camry from ${sar(400)}, Hyundai Staria VIP ${sar(550)}, GMC Yukon XL ${sar(600)}, Toyota Hiace ${sar(800)}. Extra pickups, long waits or a return are quoted on top and agreed before you book.` },
    { q: 'Is the price per person or per car?', a: 'Per car. Everyone in the vehicle is covered by the one fare.' },
    { q: 'What is included?', a: 'The car and driver, fuel, pickup at your Makkah hotel and drop-off at your Madinah hotel (as close as the traffic rules allow), a short wait while you check out, and a rest stop on the way for prayer and food.' },
    { q: 'How far is it and how long does it take?', a: `${KM} by road, depending on your two hotels. Allow ${DRIVE.toLowerCase()} of driving, plus the rest stop. That is an estimate, not a guaranteed arrival time.` },
    { q: 'Is the Haramain train faster?', a: 'On the rails, yes: direct services take around 2 hours 15–20 minutes. But both stations are away from the Haram, so you also need a ride to the Makkah station, time to board, and a ride from the Madinah station to your hotel. Compare the whole day, not only the train time.' },
    { q: 'Can the car stop right at my hotel near the Haram?', a: 'Not always. Roads around Masjid al-Haram and Al-Masjid an-Nabawi have closures and checkpoints, especially at prayer times and in busy seasons. The driver goes as close as is allowed and you get the meeting point in advance.' },
    { q: 'Do I need Ihram for this trip?', a: 'No. Ihram is for travelling to Makkah, not away from it. If you return to Makkah from Madinah for another Umrah, you enter Ihram at Dhul Hulaifah; see the Madinah to Makkah page.' },
    { q: 'Can you pick up from several hotels?', a: 'Yes. List each hotel and the order. Extra pickups change the route and time, so they are added to the quote.' },
    { q: 'Which car is right for a family?', a: 'Count the large suitcases as well as the people. Seven people with seven big cases will not fit in a 7-seater; the Hiace or two cars may be better. Send the numbers and we suggest one.' },
    { q: 'Can I book a Mercedes S-Class or Cadillac Escalade?', a: 'Yes, on request. They are quoted separately and the exact car is confirmed for your date.' },
    { q: 'Are child seats provided?', a: 'On request, not free. Tell us the age of each child and we confirm what is available.' },
    { q: 'Can I travel at night?', a: 'Yes, pickups run 24 hours. For very late or very early times, book ahead so we can confirm a driver.' },
    { q: 'Can I book the return from Madinah?', a: 'Yes. Madinah to Makkah is a separate one-way trip you can book at the same time; give the date and hotel.' },
    { q: 'Does a WhatsApp message confirm the booking?', a: 'No. The booking is confirmed once we have agreed the vehicle, fare and pickup time with you.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Makkah to Madinah private car with driver',
            url: PAGE_URL,
            serviceType: 'Private intercity transfer',
            description: 'Pre-booked private car from a Makkah hotel to a Madinah hotel, with sedan, van, SUV and group-van options.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: [{ '@type': 'City', name: 'Makkah' }, { '@type': 'City', name: 'Madinah' }],
            offers: FARES.map((f) => ({ '@type': 'Offer', name: `${f.name} - Makkah to Madinah, one way`, price: f.price, priceCurrency: 'SAR', url: PAGE_URL })),
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Routes', item: 'https://taxiserviceksa.com/routes/' },
                { '@type': 'ListItem', position: 3, name: 'Makkah to Madinah', item: PAGE_URL },
            ],
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const eyebrow = 'text-xs font-bold uppercase tracking-[0.22em]';
const link = 'font-semibold text-[#a16207] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#0f3b3a]';
const h3 = 'text-xl font-bold text-[#0f3b3a]';
const prose = 'space-y-4 text-slate-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#a16207] px-6 py-3.5 font-bold text-white hover:bg-[#854d0e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a16207] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#0f3b3a]/20 px-6 py-3.5 font-bold text-[#0f3b3a] hover:border-[#a16207] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a16207]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#a16207] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

const compare = [
    ['Where it starts and ends', 'Makkah station to Madinah station', 'Your Makkah hotel to your Madinah hotel'],
    ['Time on the move', 'Around 2 h 15–20 min on direct services; check the live timetable', `${DRIVE} of driving, plus a rest stop; an estimate`],
    ['Getting to and from it', 'A ride to the station and from the station at the other end', 'None; the car comes to the hotel'],
    ['When you leave', 'When a train with seats leaves', 'The time you choose, once confirmed'],
    ['Luggage', 'The operator’s current baggage rules', 'Whatever fits the car you book'],
    ['Price', 'Per ticket, per person; depends on class and date', 'One fare for the whole car'],
    ['Usually suits', 'One or two people, light bags, hotels near a ride', 'Families, elderly relatives, lots of luggage'],
];

export default function MakkahMadinahRoutePage() {
    return (
        <div className="makkah-madinah bg-[#f6f8f7]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0f3b3a]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_#1f5f5b_0%,_#0f3b3a_60%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#fde68a] mb-4`}>Makkah → Madinah · {KM}</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Makkah to Madinah Private Car, Hotel to Hotel</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6 max-w-xl">
                            After Umrah, one car for your family and your suitcases, from the hotel in Makkah to the hotel in Madinah. One fare for the whole car, agreed before you travel.
                        </p>
                        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-7 max-w-xl">
                            {FARES.map((f) => (
                                <div key={f.vehicle} className="rounded-xl bg-white/10 border border-white/15 px-3 py-2.5">
                                    <dt className="text-xs text-white/70">{f.name.replace(' sedan', '')}</dt>
                                    <dd className="font-extrabold">{f.price === 400 ? 'from ' : ''}{sar(f.price)}</dd>
                                </div>
                            ))}
                        </dl>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#0f3b3a] hover:bg-[#f6f8f7]">
                                <a href={QUOTE_HREF}>Check availability <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <p className="text-sm text-white/70">One way, per vehicle. Fuel, hotel pickup and drop-off, and a rest stop included.</p>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Makkah to Madinah car"
                            cta="Send my request"
                            fromPlaceholder="Your hotel or address in Makkah"
                            toPlaceholder="Your hotel or address in Madinah"
                            fromChips={['Makkah hotel', 'Haram area', 'Aziziyah', 'Kudai']}
                            toChips={['Madinah hotel', 'Near Al-Masjid an-Nabawi', 'Madinah Airport (MED)']}
                            returnNote="Return Madinah to Makkah also needed - date to confirm."
                            vehicleOptions={[{ value: '', label: 'Not sure - recommend one' }, ...FARES.map((f) => ({ value: f.vehicle, label: `${f.name} - ${sar(f.price)}` }))]}
                            buttonClass="bg-[#a16207] hover:bg-[#854d0e] focus-visible:ring-[#a16207]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= DECISION GUIDE ================= */}
            <section aria-labelledby="decide" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="decide" className={`${h2} mb-3`}>Car or Train? Start with Your Group</h2>
                    <p className="text-slate-700 leading-relaxed max-w-3xl mb-8">
                        The Haramain High-Speed Railway is quicker on the rails, and for some travellers it is the better choice. Here is an honest way to decide.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-3xl bg-[#f6f8f7] p-7">
                            <TrainFront className="w-7 h-7 text-[#0f3b3a] mb-3" aria-hidden="true" />
                            <h3 className={`${h3} mb-3`}>The train probably suits you if…</h3>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <Tick>You are one or two people with light bags</Tick>
                                <Tick>A train time with seats fits your plans</Tick>
                                <Tick>You are happy to arrange rides to and from both stations</Tick>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-[#0f3b3a] text-white p-7">
                            <Car className="w-7 h-7 text-[#fde68a] mb-3" aria-hidden="true" />
                            <h3 className="text-xl font-bold mb-3">A private car probably suits you if…</h3>
                            <ul className="space-y-2 text-sm text-white/85">
                                {['You are a family, or travelling with elderly relatives', 'You have several large suitcases or Zamzam', 'You want to leave at checkout time, not a train time', 'Several tickets would cost more than one car'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#fde68a] shrink-0" aria-hidden="true" />{x}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 rounded-3xl border border-[#0f3b3a]/10 overflow-x-auto">
                        <table className="w-full text-sm min-w-[640px]">
                            <caption className="sr-only">Haramain train compared with a private car from Makkah to Madinah</caption>
                            <thead className="bg-[#0f3b3a] text-white text-left">
                                <tr><th scope="col" className="px-5 py-3 font-semibold"> </th><th scope="col" className="px-5 py-3 font-semibold">Haramain train</th><th scope="col" className="px-5 py-3 font-semibold">Private car</th></tr>
                            </thead>
                            <tbody>
                                {compare.map(([k, t, c]) => (
                                    <tr key={k} className="border-t border-[#0f3b3a]/10 align-top">
                                        <th scope="row" className="px-5 py-3 text-left font-semibold text-[#0f3b3a]">{k}</th>
                                        <td className="px-5 py-3 text-slate-700">{t}</td>
                                        <td className="px-5 py-3 text-slate-700">{c}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-slate-600 mt-4">Train times, fares and baggage rules change; check the operator&apos;s current information. For more on choosing, Ihram rules and timing, see our <Link href="/makkah-to-madinah-taxi/" className={link}>Makkah to Madinah taxi vs train guide</Link>.</p>
                </div>
            </section>

            {/* ================= PRICES ================= */}
            <section aria-labelledby="prices" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="prices" className={`${h2} mb-3`}>Makkah to Madinah Prices</h2>
                    <p className="text-slate-700 leading-relaxed max-w-3xl mb-8">One way, per vehicle, from a Makkah hotel to a Madinah hotel. Choose by the number of large suitcases as much as by seats.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {FARES.map((f) => (
                            <div key={f.vehicle} className="rounded-3xl bg-white border border-[#0f3b3a]/10 overflow-hidden flex flex-col">
                                <div className="relative aspect-[4/3] bg-[#f6f8f7]">
                                    <Image src={f.image} alt={f.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-contain p-4" />
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="font-bold text-[#0f3b3a]">{f.name}</h3>
                                    <p className="text-2xl font-extrabold text-[#a16207] my-2">{f.price === 400 ? 'From ' : ''}{sar(f.price)}</p>
                                    <ul className="space-y-1.5 text-sm text-slate-600 mt-auto">
                                        <li className="flex gap-2"><Users className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />{f.seats}</li>
                                        <li className="flex gap-2"><Luggage className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />{f.bags}</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
                        <div className="rounded-3xl bg-white border border-[#0f3b3a]/10 p-7">
                            <h3 className={`${h3} mb-4`}>Included in the fare</h3>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <Tick>Car and driver for the whole trip, and fuel</Tick>
                                <Tick>Pickup at your Makkah hotel and drop-off at your Madinah hotel, as close as the traffic rules allow</Tick>
                                <Tick>A short wait while you check out; tell us your checkout time</Tick>
                                <Tick>A rest stop on the way for prayer and food</Tick>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-white border border-[#0f3b3a]/10 p-7">
                            <h3 className={`${h3} mb-4`}>Quoted separately</h3>
                            <ul className="space-y-2 text-sm text-slate-700">
                                {['Extra hotel pickups or drop-offs', 'Long waits beyond checkout', 'Detours, such as a stop at Badr', 'The return trip from Madinah', 'Child seats (on request, not free)', 'Mercedes S-Class or Cadillac Escalade (on request)'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-slate-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 mt-5">The fare is confirmed for your date when you book and does not change unless the trip does. <Link href="/fleet/" className={link}>View all available vehicles</Link> · <Link href="/makkah-taxi/makkah-to-madinah-staria-7-seater/" className={link}>Staria 7-seater for this route</Link>.</p>
                </div>
            </section>

            {/* ================= PICKUP & DROP-OFF ================= */}
            <section aria-labelledby="hotels" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="hotels" className={`${h2} mb-3`}>Getting Out of Makkah, Getting Into Madinah</h2>
                    <p className="text-slate-700 leading-relaxed max-w-3xl mb-8">The hardest part of this trip is often the first and last kilometre. Send the hotel name, not just the area.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { icon: MapPin, t: 'Hotels by the Haram', d: 'Roads around Masjid al-Haram close at prayer times and in busy seasons, and some hotels can only be reached at a set point. We tell you where the car will wait; avoid booking a pickup right after a prayer if you can.' },
                            { icon: MapPin, t: 'Aziziyah, Kudai, Misfalah', d: 'Usually easier for the car. Send a location pin and the hotel’s vehicle entrance if it has one. If your group is in more than one hotel, list them in order.' },
                            { icon: MapPin, t: 'Arriving near the Prophet’s Mosque', d: 'The central area around Al-Masjid an-Nabawi also has restricted roads. The driver gets you as close to your hotel as allowed and helps with the bags at the stop.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f6f8f7] p-6">
                                <Icon className="w-6 h-6 text-[#a16207] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#0f3b3a] mb-2">{t}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-slate-600 mt-6">Going straight to a flight instead? Madinah Airport (MED) can be the drop-off; tell us the flight time. <Link href="/locations/madinah/" className={link}>Madinah transfer and travel guide</Link>.</p>
                </div>
            </section>

            {/* ================= THE ROAD ================= */}
            <section aria-labelledby="road" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-start">
                    <div className={prose}>
                        <h2 id="road" className={`${h2} mb-2`}>The Road, Hour by Hour</h2>
                        <p>
                            Most drivers take the Hijrah expressway north, a long, wide highway through open desert with rest areas along the way. It is {KM.toLowerCase()} between the two cities, depending on your hotels, and {DRIVE.toLowerCase()} of driving in normal conditions.
                        </p>
                        <p>
                            The fare includes a stop for prayer and food. If you need more breaks, for children or elderly passengers, say so when you book; the driver plans around them. Bring water and anything you need for the journey; refreshments are not supplied.
                        </p>
                        <p className="text-sm">
                            Traffic leaving Makkah, roadworks and the season can all add time. If you must reach Madinah by a set hour, tell us and leave a margin.
                        </p>
                    </div>
                    <RouteJourney
                        vehicle
                        palette="platinum"
                        stops={[
                            { title: 'Makkah hotel', text: 'Pickup at your hotel or the agreed meeting point, after checkout.' },
                            { title: 'Out of the city', text: 'The slowest part, especially near the Haram and after prayers.' },
                            { title: 'Rest stop', text: 'Prayer, food and fuel at a highway rest area.', accent: true },
                            { title: 'North through the desert', text: 'Long, steady driving on the expressway.' },
                            { title: 'Madinah hotel', text: 'As close to your hotel as the traffic rules allow.' },
                        ]}
                    />
                </div>
            </section>

            {/* ================= PILGRIM PLANNING ================= */}
            <section aria-labelledby="pilgrims" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="pilgrims" className={`${h2} mb-8`}>Planning It Around Your Umrah</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Clock, t: 'After Umrah', d: 'Book the pickup for after checkout and after a prayer, not just before one, when roads close. Have everyone and every bag in the lobby a few minutes early.' },
                            { icon: HeartHandshake, t: 'Elderly relatives', d: 'Tell us about wheelchairs, walkers or difficulty with high steps. A Staria’s sliding door is often easier than an SUV.' },
                            { icon: Baby, t: 'Children', d: 'Give the number and ages. Child seats are on request and not free, so ask early.' },
                            { icon: Users, t: 'Groups', d: 'Give the total head count and bags, and every hotel. A Hiace or two cars, confirmed for your date.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f6f8f7] p-6">
                                <Icon className="w-6 h-6 text-[#a16207] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#0f3b3a] mb-2">{t}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-slate-600 mt-6">No Ihram is needed for this direction. Coming back for another Umrah? The <Link href="/routes/madinah-makkah/" className={link}>Madinah to Makkah</Link> page covers the stop at Dhul Hulaifah.</p>
                </div>
            </section>

            {/* ================= BOOKING ================= */}
            <section aria-labelledby="book" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className={prose}>
                        <h2 id="book" className={`${h2} mb-2`}>How to Book</h2>
                        <ol className="space-y-3">
                            {[
                                ['Both hotels', 'The hotel name in Makkah and in Madinah, or a pin for any other address.'],
                                ['Date and time', 'Your preferred pickup time, or your checkout time and we suggest one.'],
                                ['People and bags', 'Adults, children, large and small suitcases, Zamzam, and anything special.'],
                                ['Vehicle', 'Choose one, or let us suggest one from your numbers.'],
                                ['Confirm', 'We confirm the car and fare for your date. The booking is final once you accept.'],
                            ].map(([t, d], i) => (
                                <li key={t} className="flex gap-4">
                                    <span className="inline-flex w-8 h-8 shrink-0 items-center justify-center rounded-full bg-[#a16207] text-white font-black text-sm" aria-hidden="true">{i + 1}</span>
                                    <span><strong className="text-[#0f3b3a]">{t}.</strong> {d}</span>
                                </li>
                            ))}
                        </ol>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a href={QUOTE_HREF} className={primary}>Check availability <Arrow /></a>
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                        </div>
                        <p className="text-sm">On the day, keep your phone on; the driver&apos;s name and number come before pickup. If your plans, group size or bags change, message us early.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#0f3b3a]/10 p-7">
                        <h3 className={`${h3} mb-4`}>Message you can copy</h3>
                        <pre className="whitespace-pre-wrap text-sm text-slate-700 font-sans leading-relaxed">{`Hello Taxi Service KSA,
Makkah to Madinah private car, please:
Makkah hotel: [name or address]
Madinah hotel: [name or address]
Date: [ ]   Pickup / checkout time: [ ]
Passengers: [adults / children]
Bags: [large / small, Zamzam]
Vehicle: [Camry / Staria / GMC / Hiace / not sure]
Extra pickups or needs: [ ]`}</pre>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Makkah to Madinah: Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#0f3b3a]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0f3b3a] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-wrap gap-2">
                    {[
                        ['Madinah to Makkah private car', '/routes/madinah-makkah/'],
                        ['Makkah to Jeddah private transfer', '/routes/makkah-jeddah/'],
                        ['Makkah to Taif transfer', '/routes/makkah-taif/'],
                        ['Makkah to Dammam private car', '/routes/makkah-dammam/'],
                        ['Jeddah Airport to Makkah transfer', '/routes/jeddah-makkah/'],
                        ['Private chauffeur service in Saudi Arabia', '/services/private-driver/'],
                        ['View all available vehicles', '/fleet/'],
                    ].map(([l, h]) => (
                        <Link key={h} href={h} className="rounded-full border border-[#0f3b3a]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#0f3b3a] hover:border-[#a16207] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a16207]">{l}</Link>
                    ))}
                </div>
                <p className="text-xs text-slate-500 mt-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Distances and driving times are estimates. Train information is general; check the operator for current times and fares.</p>
            </div>
        </div>
    );
}
