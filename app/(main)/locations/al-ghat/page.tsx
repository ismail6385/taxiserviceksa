import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, Info, Plane, Landmark, Route, Clock, Users, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RelatedLocations from '@/components/seo/RelatedLocations';
import ApprovedDriversForLocation from '@/components/ApprovedDriversForLocation';

const PAGE_URL = 'https://taxiserviceksa.com/locations/al-ghat/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const RUH = 'King Khalid International Airport (RUH)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need a private car for Al-Ghat. From (address or Riyadh hotel), to (address), date and time, passengers, one way / return / day trip with waiting: ')}`;

// Sources differ (about 200–260 km); 230–240 km by road is the common figure.
const RIYADH_KM = 'Roughly 230–240 km';
const RIYADH_TIME = 'Around 2.5 hours';

const TITLE = 'Al-Ghat Private Car Transfers | Airport & Long-Distance Travel';
const DESCRIPTION = 'Pre-booked private cars to and from Al-Ghat: Riyadh and Riyadh Airport, Al Majma’ah and Qassim, and day trips from Riyadh to the Al-Ghat heritage village with the driver waiting. Book on WhatsApp.';

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car transfers to and from Al-Ghat' }],
    },
};

const faqs = [
    { q: 'How do I book a car to or from Al-Ghat?', a: 'Send the pickup, destination, date, time, passengers and whether it is one way, a return or a day trip with waiting, on WhatsApp (+966 57 580 6733). We confirm the vehicle and fare; the booking is final once you accept.' },
    { q: 'How far is Al-Ghat from Riyadh?', a: `${RIYADH_KM} by road, north-west of the capital; ${RIYADH_TIME.toLowerCase()} of driving depending on where in Riyadh you start.` },
    { q: 'Can I visit the Al-Ghat heritage village as a day trip from Riyadh?', a: 'Yes. The driver collects you in Riyadh, waits while you explore the old village and the Emara Palace museum, and drives you back. The waiting time is part of the quote. Check the museum’s opening hours before you go.' },
    { q: 'How long should I allow at Al-Ghat?', a: 'Most visitors spend two to three hours walking the old town and the museum. With about five hours of driving in total, it makes a full day from Riyadh.' },
    { q: 'Do you take Al-Ghat residents to Riyadh Airport?', a: `Yes, to ${RUH}, north of Riyadh, around two and a half hours away. For arrivals we track your flight and delays of up to 3 hours cost nothing extra.` },
    { q: 'Can I combine Al-Ghat with Al Majma’ah or Zulfi?', a: 'Yes. They are close together in the Sudair area; tell us the stops and we quote the whole route.' },
    { q: 'Do you do short rides inside Al-Ghat?', a: 'No. We run pre-booked trips in and out of Al-Ghat. For short local trips, a local taxi is easier.' },
    { q: 'How much does it cost?', a: 'It depends on the route, the vehicle and how long the driver waits on a day trip. We quote the whole vehicle before you book.' },
    { q: 'Which vehicles are available?', a: 'A Toyota Camry, Hyundai Staria or GMC Yukon XL, and a Toyota Hiace for groups on request.' },
    { q: 'Do the drivers speak English?', a: 'Yes, English and Arabic. The driver is not a tour guide; for history and explanations, the museum and a licensed guide are the right sources.' },
    { q: 'Is my booking confirmed when I send a message?', a: 'No. It is confirmed once we have agreed the vehicle, fare and times with you.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Pre-booked private transfers to and from Al-Ghat',
            url: PAGE_URL,
            serviceType: 'Private intercity transfer and day trip',
            description: 'Pre-booked private cars between Al-Ghat and Riyadh, Riyadh Airport and the Sudair and Qassim areas, and day trips to the Al-Ghat heritage village.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: { '@type': 'City', name: 'Al-Ghat' },
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://taxiserviceksa.com/locations/' },
                { '@type': 'ListItem', position: 3, name: 'Al-Ghat', item: PAGE_URL },
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
const link = 'font-semibold text-[#b45309] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#3b2a17]';
const h3 = 'text-xl font-bold text-[#3b2a17]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#b45309] px-6 py-3.5 font-bold text-white hover:bg-[#92400e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b45309] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#3b2a17]/20 px-6 py-3.5 font-bold text-[#3b2a17] hover:border-[#b45309] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b45309]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#b45309] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function AlGhatLocationPage() {
    return (
        <div className="al-ghat bg-[#f8f5ef]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#3b2a17]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#8a5a2b_0%,_#3b2a17_62%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#fcd9a8] mb-4`}>Al-Ghat · Sudair · North-west of Riyadh</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Private Transport from Al-Ghat for Planned Road Journeys</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            For Al-Ghat residents heading to Riyadh or the airport, and for visitors coming from Riyadh to see the old mud-brick village: a pre-booked private car, with the driver waiting for you on day trips.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#3b2a17] hover:bg-[#f8f5ef]">
                                <a href={QUOTE_HREF}>Get a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {['Heritage day trips', 'Riyadh Airport runs', 'Driver waits on day trips', 'English & Arabic drivers'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#fcd9a8] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Al-Ghat trip"
                            cta="Send my request"
                            fromPlaceholder="Al-Ghat address, or your Riyadh hotel"
                            toPlaceholder="Riyadh, airport, or Al-Ghat heritage village"
                            fromChips={['Al-Ghat', 'Riyadh hotel', RUH]}
                            toChips={['Al-Ghat heritage village', 'Riyadh', RUH, "Al Majma'ah"]}
                            showFlight="auto"
                            returnNote="Day trip / return needed - driver to wait, return time to confirm."
                            buttonClass="bg-[#b45309] hover:bg-[#92400e] focus-visible:ring-[#b45309]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section aria-labelledby="intro" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    <div className={prose}>
                        <h2 id="intro" className={`${h2} mb-2`}>A Small Town with Two Kinds of Traveller</h2>
                        <p>
                            Al-Ghat is a quiet town in the Sudair area, set below a ridge in a green wadi a little west of the main Riyadh–Qassim highway. It is best known for its old town: a long stretch of mud-brick houses, mosques and the restored Emara Palace, now a museum, on the north bank of Wadi Al-Ghat.
                        </p>
                        <p>
                            That gives us two very different kinds of booking. <strong className="text-[#3b2a17]">People who live in Al-Ghat</strong> need to get to Riyadh for appointments, family and the airport, which is a long drive each way. <strong className="text-[#3b2a17]">Visitors staying in Riyadh</strong> want to see the heritage village and come back the same day, without driving themselves or finding a taxi home from a small town.
                        </p>
                        <p>
                            Both are pre-booked trips with a private car. We do not run short local rides inside Al-Ghat.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-[#3b2a17] text-white p-7">
                        <h3 className="text-xl font-bold mb-4">Typical trips</h3>
                        <dl className="space-y-3 text-sm">
                            {[
                                ['Al-Ghat ↔ Riyadh', `${RIYADH_KM} · ${RIYADH_TIME}`],
                                ['To Riyadh Airport (RUH)', 'North of Riyadh, a little shorter'],
                                ["Al Majma'ah / Zulfi", 'Short trips nearby'],
                                ['Riyadh day trip to the old town', 'A full day with waiting'],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-white/70">{k}</dt>
                                    <dd className="font-semibold text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-xs text-white/50 mt-4">Sources differ on the distance; your exact addresses decide it.</p>
                    </aside>
                </div>
            </section>

            {/* ================= HERITAGE DAY TRIP ================= */}
            <section aria-labelledby="heritage" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div className={prose}>
                        <Landmark className="w-7 h-7 text-[#b45309]" aria-hidden="true" />
                        <h2 id="heritage" className={`${h2} mb-2`}>Day Trip from Riyadh to the Al-Ghat Heritage Village</h2>
                        <p>
                            The old town stretches along the wadi for well over a kilometre: narrow lanes, mud-brick houses climbing towards the cliffs, old mosques, and the Emara Palace, which now houses a museum including finds from the surrounding area. It is one of the better-preserved traditional villages in the Riyadh region and a calm contrast to the city.
                        </p>
                        <p>
                            A typical plan: pickup at your Riyadh hotel in the morning, two and a half hours north-west, two to three hours on foot in the old town and museum, lunch, and the drive back in the afternoon. The driver waits for you the whole time, and the waiting is part of the quote. You can add Al Majma&apos;ah or a stop on the way.
                        </p>
                        <p className="text-sm">
                            Check the museum&apos;s opening hours before you go, and wear good shoes; the lanes are uneven. The driver is not a tour guide; for the history, the museum is the place. More ideas: <Link href="/services/tours/" className={link}>private tours in Saudi Arabia</Link>.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-white border border-[#3b2a17]/10 p-7">
                        <h3 className={`${h3} mb-4`}>What to send for a day trip</h3>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <Tick>Your Riyadh hotel or address</Tick>
                            <Tick>The date and pickup time</Tick>
                            <Tick>How long you want at Al-Ghat</Tick>
                            <Tick>Any extra stop, for example Al Majma&apos;ah</Tick>
                            <Tick>Number of people</Tick>
                        </ul>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={`${primary} w-full mt-6`}><WhatsAppIcon className="w-4 h-4 fill-current" /> Plan the day trip</a>
                    </aside>
                </div>
            </section>

            {/* ================= RESIDENTS ================= */}
            <section aria-labelledby="residents" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="residents" className={`${h2} mb-3`}>From Al-Ghat to Riyadh and Beyond</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">For residents and families in Al-Ghat. Send a location pin with your address; some homes and farms outside the centre are hard to find by name.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Route, t: 'Riyadh', d: 'Hospitals, offices, shopping and family. Give us the time you must be there; a same-day return can be quoted with it.' },
                            { icon: Plane, t: 'Riyadh Airport', d: 'RUH is on the north side of the city, a little closer than the centre. We set the pickup with room for check-in.' },
                            { icon: MapPin, t: "Al Majma'ah, Zulfi", d: 'Short trips nearby, or a stop on the way somewhere else.' },
                            { icon: Users, t: 'Qassim and further', d: 'Buraidah and Unaizah to the north; Makkah, Madinah or the Eastern Province by road, quoted on request.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f8f5ef] p-6">
                                <Icon className="w-6 h-6 text-[#b45309] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#3b2a17] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-stone-600 mt-6">Airport arrivals: we track your flight, the driver waits 60 minutes after a domestic landing or 90 after an international one, and delays of up to 3 hours cost nothing extra. <Link href="/riyadh-airport-taxi/" className={link}>Riyadh Airport transfers</Link> · <Link href="/locations/al-majma-ah/" className={link}>Al Majma&apos;ah transfers</Link> · <Link href="/locations/al-qassim/" className={link}>Al-Qassim</Link>.</p>
                </div>
            </section>

            {/* ================= VEHICLES + FARE ================= */}
            <section aria-labelledby="vehicles" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="rounded-3xl bg-white border border-[#3b2a17]/10 p-7">
                        <h2 id="vehicles" className="text-2xl md:text-3xl font-extrabold text-[#3b2a17] mb-5">Vehicles</h2>
                        <ul className="space-y-3 text-sm text-stone-700">
                            {[
                                ['Toyota Camry', 'Up to 3 people, about 2 large suitcases'],
                                ['Hyundai Staria VIP', 'Up to 7 people, about 4 large suitcases'],
                                ['GMC Yukon XL', 'Up to 7 people, about 5 large suitcases'],
                                ['Toyota Hiace', 'Groups up to 11, on request'],
                            ].map(([k, v]) => (
                                <li key={k} className="flex justify-between gap-4 border-b border-[#3b2a17]/10 pb-3 last:border-0"><span className="font-semibold text-[#3b2a17]">{k}</span><span className="text-right">{v}</span></li>
                            ))}
                        </ul>
                        <p className="text-sm text-stone-600 mt-5">For a day trip, comfort over five hours of driving matters more than luggage space. <Link href="/fleet/" className={link}>See the fleet</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#3b2a17]/10 p-7">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#3b2a17] mb-5">How the Fare Works</h2>
                        <p className="text-sm text-stone-700 leading-relaxed mb-4">Every trip is quoted for the whole vehicle before you book: one way, a return later, or a day trip with the driver waiting. Once you accept, the price stays the same unless the trip changes.</p>
                        <ul className="space-y-2 text-sm text-stone-700 mb-4">
                            <Tick>Included: vehicle and driver, fuel and the route in your quote</Tick>
                            <Tick>Day trips: the agreed waiting time at Al-Ghat</Tick>
                        </ul>
                        <ul className="space-y-2 text-sm text-stone-700">
                            {['Museum or attraction tickets', 'Waiting longer than agreed', 'Extra stops not in the plan'].map((x) => (
                                <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= BOOKING ================= */}
            <section aria-labelledby="book" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className={prose}>
                        <h2 id="book" className={`${h2} mb-2`}>How to Book</h2>
                        <ol className="space-y-3">
                            {[
                                ['Say which trip', 'From Al-Ghat (one way or return), or a day trip to Al-Ghat from Riyadh.'],
                                ['Send the details', 'Addresses (a map pin helps), date, time, passengers, and how long you want to stay.'],
                                ['Get the fare', 'We confirm the vehicle and the price, including any waiting.'],
                                ['Confirm', 'Once you accept, the booking is final and the driver’s details follow.'],
                            ].map(([t, d], i) => (
                                <li key={t} className="flex gap-4">
                                    <span className="inline-flex w-8 h-8 shrink-0 items-center justify-center rounded-full bg-[#b45309] text-white font-black text-sm" aria-hidden="true">{i + 1}</span>
                                    <span><strong className="text-[#3b2a17]">{t}.</strong> {d}</span>
                                </li>
                            ))}
                        </ol>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a href={QUOTE_HREF} className={primary}>Get a quote <Arrow /></a>
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                        </div>
                        <p className="text-sm flex gap-2"><Clock className="w-4 h-4 mt-0.5 text-[#b45309] shrink-0" aria-hidden="true" />Pickups run 24 hours a day if booked ahead; for day trips, an early start gives you the most time at the village.</p>
                    </div>
                    <div className="rounded-3xl bg-[#f8f5ef] p-7">
                        <h3 className={`${h3} mb-4`}>Message you can copy</h3>
                        <pre className="whitespace-pre-wrap text-sm text-stone-700 font-sans leading-relaxed">{`Hello Taxi Service KSA,
Private car, please:
Trip: [Al-Ghat to Riyadh / Riyadh day trip to Al-Ghat]
From: [address or hotel]
To: [address]
Date and time: [ ]
Passengers: [ ]
Return / waiting: [one way / return at ... / wait ... hours]`}</pre>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#3b2a17]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#3b2a17] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="flex flex-wrap gap-2 py-8">
                    {[
                        ['Private intercity transfers across Saudi Arabia', '/services/intercity/'],
                        ['Pre-booked airport transfer service', '/services/airport-transfers/'],
                        ['Chauffeur service for planned journeys', '/services/private-driver/'],
                        ['Private tours and day trips', '/services/tours/'],
                        ["Private transfers from Al Majma'ah", '/locations/al-majma-ah/'],
                        ['Dariya private car transfers', '/locations/dariya/'],
                        ['Al-Kharj transfer service', '/locations/al-kharj/'],
                    ].map(([l, h]) => (
                        <Link key={h} href={h} className="rounded-full border border-[#3b2a17]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#3b2a17] hover:border-[#b45309] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b45309]">{l}</Link>
                    ))}
                </div>
                <p className="text-xs text-stone-500 mb-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Distances, times and opening hours are estimates; check before you travel.</p>
                <ApprovedDriversForLocation location="al-ghat" />
                <RelatedLocations currentCity="Al-Ghat" />
            </div>
        </div>
    );
}
