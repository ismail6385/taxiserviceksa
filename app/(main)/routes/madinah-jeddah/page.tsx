import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, X, Info, Users, Luggage, Plane, Hotel, Building2, Route, TrainFront, Car, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';

const PAGE_URL = 'https://taxiserviceksa.com/routes/madinah-jeddah/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const JED = 'King Abdulaziz International Airport (JED)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need a private car from Madinah to Jeddah. Madinah hotel, Jeddah destination (hotel, address or airport + flight time), date, passengers, suitcases and preferred vehicle: ')}`;

// Owner-confirmed one-way fares per vehicle (2026-10-23); price null = quoted on request.
const FARES: { vehicle: string; name: string; price: number | null; seats: string; bags: string; image: string; alt: string }[] = [
    { vehicle: 'Toyota Camry', name: 'Toyota Camry sedan', price: 450, seats: 'Up to 3 adults', bags: 'About 2 large suitcases', image: '/toyota-camry.webp', alt: 'Toyota Camry sedan for a Madinah to Jeddah transfer' },
    { vehicle: 'GMC Yukon XL / Denali', name: 'GMC Yukon XL', price: 1000, seats: 'Up to 7 passengers', bags: 'About 5 large suitcases', image: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', alt: 'GMC Yukon XL SUV for the Madinah to Jeddah road' },
    { vehicle: 'Hyundai Staria VIP', name: 'Hyundai Staria VIP', price: null, seats: 'Up to 7 passengers', bags: 'About 4 large suitcases', image: '/hyundai-staria.webp', alt: 'Hyundai Staria VIP van for a family travelling from Madinah to Jeddah' },
    { vehicle: 'Toyota Hiace', name: 'Toyota Hiace', price: null, seats: 'Up to 11 passengers', bags: 'Group luggage; send your bag count', image: '/toyota-hiace.webp', alt: 'Toyota Hiace van for a group from Madinah to Jeddah' },
];
const sar = (n: number) => `${n.toLocaleString('en-US')} SAR`;
const fareText = (p: number | null, from = false) => (p === null ? 'On request' : `${from ? 'From ' : ''}${sar(p)}`);

const KM = 'About 410–450 km';
const DRIVE = 'Around 4–5 hours';

const TITLE = 'Madinah to Jeddah Private Car | Taxi & Airport Transfers';
const DESCRIPTION = 'Book a private car from Madinah to Jeddah for airport connections, hotel drop-offs and intercity travel. Sedan from 450 SAR, GMC 1,000 SAR per vehicle. Request your quote on WhatsApp.';

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car from Madinah to Jeddah' }],
    },
};

const faqs = [
    { q: 'How much is a taxi from Madinah to Jeddah?', a: `One way, per vehicle: Toyota Camry from ${sar(450)}, GMC Yukon XL ${sar(1000)}. The Staria, Hiace and premium cars are quoted on request. Jeddah Airport is the same fare as a Jeddah hotel.` },
    { q: 'Is it per person or per car?', a: 'Per car. Everyone in the vehicle is covered by the one fare.' },
    { q: 'What does the fare include?', a: 'The car and driver, fuel, pickup at your Madinah hotel, drop-off at your Jeddah hotel, address or the airport, and a rest stop on the way for prayer and food.' },
    { q: 'How far is it and how long does it take?', a: `${KM} by road, depending on your two addresses, and ${DRIVE.toLowerCase()} of driving plus the stop. It is an estimate, not a guaranteed arrival time.` },
    { q: 'When should I leave Madinah for a flight from Jeddah?', a: 'Work back from the time the airline wants you at the airport (often around 3 hours before an international flight), then add the drive and a margin for traffic near Jeddah. Send your flight time and we suggest a pickup.' },
    { q: 'Which terminal should I tell you?', a: 'The one on your ticket or the airline’s website. King Abdulaziz International Airport has more than one terminal, and the drop-off goes to the right one.' },
    { q: 'Can I be picked up near the Prophet’s Mosque?', a: 'Yes, at the nearest point allowed. Some roads in the central area close at prayer times, so we agree the meeting point in advance. A pickup between prayers is easiest.' },
    { q: 'Can I stop in Makkah on the way?', a: 'Makkah is a different trip, quoted separately. For Umrah from Madinah you enter Ihram at Dhul Hulaifah; see the Madinah to Makkah page.' },
    { q: 'Is the train an option?', a: 'Yes. The Haramain railway runs from Madinah to Jeddah, including a station at the airport. It suits light travellers near the stations; a car suits families with lots of luggage. Check the operator for current times.' },
    { q: 'Which car fits seven people?', a: 'The GMC or Staria take up to seven, but seven large suitcases will not fit with every seat used. Send people and bags; the Hiace or two cars may be better.' },
    { q: 'Can I book a Mercedes S-Class, Escalade or Sprinter?', a: 'Yes, on request. They are quoted separately and the exact vehicle is confirmed for your date.' },
    { q: 'Can I book the return from Jeddah?', a: 'Yes. Jeddah to Madinah is a separate one-way trip; send both dates and we confirm both.' },
    { q: 'Does a WhatsApp message confirm my booking?', a: 'No. The booking is confirmed once we have agreed the vehicle, fare and pickup time with you.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Madinah to Jeddah private car with driver',
            url: PAGE_URL,
            serviceType: 'Private intercity and airport transfer',
            description: 'Pre-booked private car from a Madinah hotel to a Jeddah hotel, address or King Abdulaziz International Airport.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: [{ '@type': 'City', name: 'Madinah' }, { '@type': 'City', name: 'Jeddah' }],
            offers: FARES.filter((f) => f.price !== null).map((f) => ({ '@type': 'Offer', name: `${f.name} - Madinah to Jeddah, one way`, price: f.price, priceCurrency: 'SAR', url: PAGE_URL })),
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Routes', item: 'https://taxiserviceksa.com/routes/' },
                { '@type': 'ListItem', position: 3, name: 'Madinah to Jeddah', item: PAGE_URL },
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
const link = 'font-semibold text-[#0e7490] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#0b2534]';
const h3 = 'text-xl font-bold text-[#0b2534]';
const prose = 'space-y-4 text-slate-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0e7490] px-6 py-3.5 font-bold text-white hover:bg-[#155e75] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e7490] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#0b2534]/20 px-6 py-3.5 font-bold text-[#0b2534] hover:border-[#0e7490] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e7490]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#0e7490] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

// Destination-first: the Jeddah end decides how this trip is planned.
const destinations = [
    { icon: Plane, t: 'Jeddah Airport', d: 'A flight home or onward. The pickup time is worked back from your flight, not from the road.', href: '#airport' },
    { icon: Hotel, t: 'A Jeddah hotel', d: 'Corniche, Al Hamra, Obhur or the city centre. Send the hotel name.', href: '#jeddah' },
    { icon: Building2, t: 'Home or office', d: 'A family address or a meeting. Share a pin and, for a meeting, the time.', href: '#jeddah' },
    { icon: Route, t: 'On to somewhere else', d: 'Makkah, Taif or the port, booked as a separate trip.', href: '#onward' },
];

export default function MadinahJeddahRoutePage() {
    return (
        <div className="madinah-jeddah bg-[#f5f9fa]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0b2534]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,_#155e75_0%,_#0b2534_62%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#a5f3fc] mb-4`}>Madinah → Jeddah · {KM}</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Madinah to Jeddah by Private Car: Plan Your Journey</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6 max-w-xl">
                            From your hotel in Madinah to a Jeddah hotel, a family home or the airport for your flight. One car for your group and bags, one fare agreed before you travel.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-7">
                            <span className="rounded-xl bg-white/10 border border-white/15 px-4 py-2.5"><span className="block text-xs text-white/70">Toyota Camry</span><span className="font-extrabold">from {sar(450)}</span></span>
                            <span className="rounded-xl bg-white/10 border border-white/15 px-4 py-2.5"><span className="block text-xs text-white/70">GMC Yukon XL</span><span className="font-extrabold">{sar(1000)}</span></span>
                            <span className="rounded-xl bg-white/10 border border-white/15 px-4 py-2.5"><span className="block text-xs text-white/70">Staria · Hiace</span><span className="font-extrabold">on request</span></span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-5">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#0b2534] hover:bg-[#f5f9fa]">
                                <a href={QUOTE_HREF}>Request a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <p className="text-sm text-white/70">One way, per vehicle. Fuel, hotel pickup, a rest stop and an airport drop-off at the same fare.</p>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Madinah to Jeddah car"
                            cta="Send my request"
                            fromPlaceholder="Your hotel or address in Madinah"
                            toPlaceholder="Jeddah hotel, address or airport"
                            fromChips={['Madinah hotel', 'Near Al-Masjid an-Nabawi', 'Madinah address']}
                            toChips={[JED, 'Jeddah hotel', 'Corniche', 'Al Hamra', 'Obhur']}
                            showFlight="auto"
                            returnNote="Return Jeddah to Madinah also needed - date to confirm."
                            vehicleOptions={[{ value: '', label: 'Not sure - recommend one' }, ...FARES.map((f) => ({ value: f.vehicle, label: `${f.name} - ${f.price === null ? 'quote' : sar(f.price)}` }))]}
                            buttonClass="bg-[#0e7490] hover:bg-[#155e75] focus-visible:ring-[#0e7490]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= WHERE IN JEDDAH ================= */}
            <section aria-labelledby="where" className="bg-white py-14 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="where" className={`${h2} mb-3`}>Where in Jeddah Are You Going?</h2>
                    <p className="text-slate-700 leading-relaxed max-w-3xl mb-8">&quot;Madinah to Jeddah&quot; covers very different trips. The end point decides the pickup time, and sometimes the car.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {destinations.map(({ icon: Icon, t, d, href }) => (
                            <a key={t} href={href} className="rounded-2xl border border-[#0b2534]/10 bg-[#f5f9fa] p-5 hover:border-[#0e7490] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e7490]">
                                <Icon className="w-6 h-6 text-[#0e7490] mb-3" aria-hidden="true" />
                                <h3 className="font-bold text-[#0b2534] mb-1">{t}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{d}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= AIRPORT ================= */}
            <section aria-labelledby="airport" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div className={prose}>
                        <h2 id="airport" className={`${h2} mb-2`}>Catching a Flight from Jeddah</h2>
                        <p>
                            Most people on this road are heading for {JED}. Plan it backwards from the flight, not forwards from breakfast: the time the airline wants you there, then the drive, then a margin for traffic around Jeddah and the airport roads.
                        </p>
                        <p>
                            Tell us the airline, the flight time and the terminal on your ticket; the airport has more than one, and going to the wrong one costs time you will not have. The airport drop-off is the same fare as a Jeddah hotel.
                        </p>
                        <p className="text-sm">More detail on departures, check-in times and terminals: <Link href="/routes/madinah-to-jeddah-airport-departures/" className={link}>Madinah to Jeddah Airport departures</Link>.</p>
                    </div>
                    <aside className="rounded-3xl bg-[#0b2534] text-white p-7">
                        <h3 className="text-xl font-bold mb-4">Example: working back from a flight</h3>
                        <ol className="space-y-3 text-sm text-white/85">
                            {[
                                ['Flight departs', '14:00, international'],
                                ['At the airport by', 'around 11:00 (check your airline)'],
                                ['Drive plus stop', `${DRIVE.toLowerCase()}`],
                                ['Margin for traffic', 'at least an hour'],
                                ['Leave Madinah around', '05:00–06:00'],
                            ].map(([k, v]) => (
                                <li key={k} className="flex justify-between gap-4 border-b border-white/10 pb-2 last:border-0"><span className="text-white/70">{k}</span><span className="font-semibold text-right">{v}</span></li>
                            ))}
                        </ol>
                        <p className="text-xs text-white/50 mt-4">An illustration only. We confirm your actual pickup time with the booking.</p>
                    </aside>
                </div>
            </section>

            {/* ================= LEAVING MADINAH + JEDDAH END ================= */}
            <section id="jeddah" aria-labelledby="jeddah-end" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="rounded-3xl bg-[#f5f9fa] p-7">
                        <MapPin className="w-6 h-6 text-[#0e7490] mb-3" aria-hidden="true" />
                        <h2 className="text-2xl font-extrabold text-[#0b2534] mb-3">Leaving Madinah</h2>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <Tick>Hotels around Al-Masjid an-Nabawi: some roads close at prayer times, so we agree a meeting point. Book the pickup between prayers.</Tick>
                            <Tick>Hotels outside the central area: send a location pin and the vehicle entrance.</Tick>
                            <Tick>Have everyone and every bag in the lobby a few minutes early; a family of seven takes longer to load than you think.</Tick>
                        </ul>
                    </div>
                    <div className="rounded-3xl bg-[#f5f9fa] p-7">
                        <Building2 className="w-6 h-6 text-[#0e7490] mb-3" aria-hidden="true" />
                        <h2 id="jeddah-end" className="text-2xl font-extrabold text-[#0b2534] mb-3">Arriving in Jeddah</h2>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <Tick>Hotels: Jeddah has several hotels with similar names, so send the exact name or a pin.</Tick>
                            <Tick>Homes: share the address and any gate or compound instructions.</Tick>
                            <Tick>Meetings: give the building and your appointment time; we plan the pickup around it.</Tick>
                            <Tick>Two drop-offs in Jeddah? List them; the extra stop is added to the quote.</Tick>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES & PRICES ================= */}
            <section aria-labelledby="prices" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="prices" className={`${h2} mb-3`}>Vehicles and Fares</h2>
                    <p className="text-slate-700 leading-relaxed max-w-3xl mb-8">One way, per vehicle, Madinah hotel to a Jeddah hotel, address or the airport. Pick by suitcases as much as by seats. <Link href="/fleet/" className={link}>See the full fleet</Link>.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {FARES.map((f) => (
                            <div key={f.vehicle} className="rounded-3xl bg-white border border-[#0b2534]/10 overflow-hidden flex flex-col">
                                <div className="relative aspect-[4/3] bg-[#f5f9fa]">
                                    <Image src={f.image} alt={f.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-contain p-4" />
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="font-bold text-[#0b2534]">{f.name}</h3>
                                    <p className="text-2xl font-extrabold text-[#0e7490] my-2">{fareText(f.price, f.price === 450)}</p>
                                    <ul className="space-y-1.5 text-sm text-slate-600 mt-auto">
                                        <li className="flex gap-2"><Users className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />{f.seats}</li>
                                        <li className="flex gap-2"><Luggage className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />{f.bags}</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
                        <div className="rounded-3xl bg-white border border-[#0b2534]/10 p-7">
                            <h3 className={`${h3} mb-4`}>Included</h3>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <Tick>Car and driver, and fuel</Tick>
                                <Tick>Pickup at your Madinah hotel, as close as the traffic rules allow</Tick>
                                <Tick>Drop-off at a Jeddah hotel, address or the airport, at the same fare</Tick>
                                <Tick>A rest stop on the way for prayer and food</Tick>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-white border border-[#0b2534]/10 p-7">
                            <h3 className={`${h3} mb-4`}>Quoted separately</h3>
                            <ul className="space-y-2 text-sm text-slate-700">
                                {['Extra pickups or drop-offs', 'Long waits or detours', 'A stop in Makkah or anywhere off the route', 'The return from Jeddah', 'Child seats (on request, not free)', 'Mercedes S-Class, Cadillac Escalade or Mercedes Sprinter (on request)'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-slate-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= TRAIN ================= */}
            <section aria-labelledby="train" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className={prose}>
                        <h2 id="train" className={`${h2} mb-2`}>Car or the Haramain Train?</h2>
                        <p>
                            The Haramain High-Speed Railway runs from Madinah to Jeddah, with a station in the city and one at the airport. It is quicker on the rails than the road, and for one or two people with light bags, close to the stations, it is often the better choice.
                        </p>
                        <p>
                            A car makes more sense when there are several of you, lots of luggage or Zamzam, elderly passengers, or an address in Jeddah far from a station. Tickets are per person; the car is one fare. Compare the whole trip, including getting to and from the stations.
                        </p>
                        <p className="text-sm">Train times, fares and baggage rules change; check the operator before you decide.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-[#f5f9fa] p-6">
                            <TrainFront className="w-6 h-6 text-[#0b2534] mb-3" aria-hidden="true" />
                            <h3 className="font-bold text-[#0b2534] mb-2">Train fits when…</h3>
                            <ul className="space-y-1.5 text-sm text-slate-600"><li>1–2 travellers</li><li>Light bags</li><li>A departure that suits you</li><li>Near a station at both ends</li></ul>
                        </div>
                        <div className="rounded-2xl bg-[#0b2534] text-white p-6">
                            <Car className="w-6 h-6 text-[#a5f3fc] mb-3" aria-hidden="true" />
                            <h3 className="font-bold mb-2">Car fits when…</h3>
                            <ul className="space-y-1.5 text-sm text-white/80"><li>A family or group</li><li>Suitcases and Zamzam</li><li>Elderly passengers</li><li>Hotel to hotel or airport</li></ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ONWARD ================= */}
            <section aria-labelledby="onward" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
                <div className="max-w-6xl mx-auto">
                    <h2 id="onward" className={`${h2} mb-3`}>Going On from Jeddah, or Elsewhere from Madinah</h2>
                    <p className="text-slate-700 leading-relaxed max-w-3xl mb-6">Each of these is its own trip with its own page and fares.</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
                        <Tick><Link href="/routes/madinah-makkah/" className={link}>Madinah to Makkah</Link>: for another Umrah, with Ihram at Dhul Hulaifah.</Tick>
                        <Tick><Link href="/routes/jeddah-makkah/" className={link}>Jeddah to Makkah</Link>: if you stop in Jeddah first.</Tick>
                        <Tick><Link href="/routes/madinah-alula/" className={link}>Madinah to AlUla</Link>: north, for Hegra and the old town.</Tick>
                        <Tick><Link href="/routes/madinah-dammam/" className={link}>Madinah to Dammam</Link>: across the country to the Eastern Province.</Tick>
                    </ul>
                </div>
            </section>

            {/* ================= BOOKING ================= */}
            <section aria-labelledby="book" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className={prose}>
                        <h2 id="book" className={`${h2} mb-2`}>Request Your Transfer</h2>
                        <ol className="space-y-3">
                            {[
                                ['Madinah pickup', 'Hotel name, or a pin for any other address.'],
                                ['Jeddah destination', 'Hotel, address, or the airport with your flight time and terminal.'],
                                ['Date and time', 'Your preferred pickup, or the flight and we suggest one.'],
                                ['People and bags', 'Adults, children, large and small suitcases, Zamzam.'],
                                ['Confirm', 'We confirm the car and fare for your date. The booking is final once you accept.'],
                            ].map(([t, d], i) => (
                                <li key={t} className="flex gap-4">
                                    <span className="inline-flex w-8 h-8 shrink-0 items-center justify-center rounded-full bg-[#0e7490] text-white font-black text-sm" aria-hidden="true">{i + 1}</span>
                                    <span><strong className="text-[#0b2534]">{t}.</strong> {d}</span>
                                </li>
                            ))}
                        </ol>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a href={QUOTE_HREF} className={primary}>Request a quote <Arrow /></a>
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                        </div>
                        <p className="text-sm">Payment method and change or cancellation terms are explained when you confirm. Pickups run 24 hours a day; book ahead for very early starts.</p>
                    </div>
                    <div className="rounded-3xl bg-[#f5f9fa] p-7">
                        <h3 className={`${h3} mb-4`}>Message you can copy</h3>
                        <pre className="whitespace-pre-wrap text-sm text-slate-700 font-sans leading-relaxed">{`Hello Taxi Service KSA,
Madinah to Jeddah private car, please:
Madinah pickup: [hotel or address]
Jeddah drop-off: [hotel / address / airport]
Flight (if airport): [airline, time, terminal]
Date: [ ]   Pickup time: [ ]
Passengers: [adults / children]
Bags: [large / small, Zamzam]
Vehicle: [Camry / GMC / Staria / Hiace / not sure]`}</pre>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Madinah to Jeddah: Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#0b2534]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0b2534] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <div className="flex flex-wrap gap-2 mt-10">
                        {[
                            ['Jeddah to Madinah private car', '/routes/jeddah-madinah/'],
                            ['Makkah to Madinah private car', '/routes/makkah-madinah/'],
                            ['Pre-booked airport transfers', '/services/airport-transfers/'],
                            ['View all vehicles', '/fleet/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#0b2534]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#0b2534] hover:border-[#0e7490] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e7490]">{l}</Link>
                        ))}
                    </div>
                    <p className="text-xs text-slate-500 mt-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Distances, driving times and the flight example are estimates. Check train details with the operator.</p>
                </div>
            </section>
        </div>
    );
}
