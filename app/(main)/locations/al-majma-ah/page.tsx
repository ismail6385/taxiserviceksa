import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, Info, Plane, Users, Clock, Route, TrainFront, Car, RotateCcw } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RelatedLocations from '@/components/seo/RelatedLocations';
import ApprovedDriversForLocation from '@/components/ApprovedDriversForLocation';

const PAGE_URL = 'https://taxiserviceksa.com/locations/al-majma-ah/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const RUH = 'King Khalid International Airport (RUH)';
const ELQ = 'Qassim Airport (ELQ)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent("Hello, I need a private car from Al Majma'ah. Pickup address, destination, date and time, passengers, luggage, one way or return: ")}`;

// Checked against a route calculator: about 206 km to Riyadh, around 1 hour 55 minutes.
const RIYADH_KM = 'About 200 km';
const RIYADH_TIME = 'Around 2 hours';

const TITLE = "Al Majma'ah Private Transfers | Airport & Intercity Cars";
const DESCRIPTION = "Pre-booked private cars from Al Majma'ah to Riyadh (about 200 km), Riyadh Airport, Al-Qassim and other cities, with same-day returns. Fare agreed before you travel. Book on WhatsApp.";

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: "Private car transfers from Al Majma'ah" }],
    },
};

const faqs = [
    { q: "How do I book a car from Al Majma'ah?", a: 'Send your pickup address, destination, date, time, passengers and luggage on WhatsApp (+966 57 580 6733). We confirm the vehicle and fare; the booking is final once you accept.' },
    { q: "How far is Al Majma'ah from Riyadh?", a: `${RIYADH_KM} by road, ${RIYADH_TIME.toLowerCase()} of driving to the northern edge of the city. Central and southern Riyadh take longer in traffic.` },
    { q: 'Can I go to Riyadh and come back the same day?', a: 'Yes. Tell us your appointment time and when you want to leave Riyadh. The return pickup, or the driver waiting for you, is quoted with the trip.' },
    { q: 'Which airport should I use?', a: `Most travellers use ${RUH}, on the north side of Riyadh and so on your way in, around two hours. ${ELQ} near Buraidah is another option for some flights. We drive to both.` },
    { q: 'Can you pick me up from Riyadh Airport and bring me home?', a: 'Yes. Send your flight number. We track the flight; the driver waits 60 minutes after a domestic landing or 90 after an international one, and delays of up to 3 hours cost nothing extra.' },
    { q: 'Is the train better than a car to Riyadh?', a: 'For one person with a small bag going near a station, the train can be quicker and cheaper. A car makes sense for families, heavy luggage, early or late times, or when you are going to an address far from the station.' },
    { q: 'Do you do short rides inside Al Majma\'ah?', a: 'No. We run pre-booked trips out of town and back. For a quick ride across town, a local taxi or app is better.' },
    { q: 'How much does a transfer cost?', a: 'It depends on the destination, vehicle and whether you return the same day. We quote the whole vehicle before you book; the fare stays the same unless the trip changes.' },
    { q: 'Do you go north to Al-Qassim?', a: 'Yes, Buraidah, Unaizah and Qassim Airport are a straightforward drive north. Send the address for a quote.' },
    { q: 'Which vehicles are available?', a: 'A Toyota Camry, Hyundai Staria or GMC Yukon XL, and a Toyota Hiace for groups on request.' },
    { q: 'Are pickups available early in the morning?', a: 'Yes, 24 hours a day if booked in advance. Early starts for Riyadh appointments and flights are common.' },
    { q: 'Is my booking confirmed when I send a message?', a: 'No. It is confirmed once we have agreed the vehicle, fare and pickup with you.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: "Pre-booked private transfers from Al Majma'ah",
            url: PAGE_URL,
            serviceType: 'Private intercity and airport transfer',
            description: "Pre-booked private cars from Al Majma'ah to Riyadh, Riyadh Airport, Al-Qassim and other cities.",
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: { '@type': 'City', name: "Al Majma'ah" },
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://taxiserviceksa.com/locations/' },
                { '@type': 'ListItem', position: 3, name: "Al Majma'ah", item: PAGE_URL },
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
const link = 'font-semibold text-[#4d7c0f] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#1f2a12]';
const h3 = 'text-xl font-bold text-[#1f2a12]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#4d7c0f] px-6 py-3.5 font-bold text-white hover:bg-[#3f6212] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7c0f] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#1f2a12]/20 px-6 py-3.5 font-bold text-[#1f2a12] hover:border-[#4d7c0f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7c0f]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#4d7c0f] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function AlMajmaahLocationPage() {
    return (
        <div className="al-majmaah bg-[#f5f6f0]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#1f2a12]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#4d6b1f_0%,_#1f2a12_62%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#d9f99d] mb-4`}>Al Majma&apos;ah · Sudair · Riyadh–Qassim road</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Private Car Travel from Al Majma&apos;ah for City Connections and Longer Journeys</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            Two hours south to Riyadh and its airport, or north to Al-Qassim: a pre-booked private car from your door in Al Majma&apos;ah, there and back the same day if you like, with the fare agreed first.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#1f2a12] hover:bg-[#f5f6f0]">
                                <a href={QUOTE_HREF}>Get a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {['Same-day Riyadh returns', 'Riyadh Airport runs', '24/7, booked ahead', 'English & Arabic drivers'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#d9f99d] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Al Majma'ah transfer"
                            cta="Send my request"
                            fromPlaceholder="Your address in Al Majma'ah"
                            toPlaceholder="Riyadh address, airport or city"
                            fromChips={["Al Majma'ah", 'Majmaah University', RUH]}
                            toChips={['Riyadh', RUH, 'Buraidah', ELQ]}
                            showFlight="auto"
                            returnNote="Return to Al Majma'ah the same day - pickup time to confirm."
                            buttonClass="bg-[#4d7c0f] hover:bg-[#3f6212] focus-visible:ring-[#4d7c0f]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section aria-labelledby="intro" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    <div className={prose}>
                        <h2 id="intro" className={`${h2} mb-2`}>Halfway Between Riyadh and Qassim</h2>
                        <p>
                            Al Majma&apos;ah, the main town of the Sudair area, sits on the highway that links Riyadh with Al-Qassim. That position shapes almost every trip people book with us here. Riyadh is about two hours south, for hospital appointments, government offices, shopping, family and the airport. Buraidah and Unaizah are a similar distance north. Neighbouring Zulfi and Al-Ghat are close by.
                        </p>
                        <p>
                            Because Riyadh is close enough for a day trip but far enough that driving yourself there and back is tiring, many of our Majma&apos;ah bookings are <strong className="text-[#1f2a12]">same-day returns</strong>: a morning pickup, the appointment, and the drive home in the afternoon or evening.
                        </p>
                        <p>
                            We run pre-booked private cars only. You send the details; we confirm the car, the fare and the times; a driver comes to your door. Single short rides around town are not something we offer.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-[#1f2a12] text-white p-7">
                        <h3 className="text-xl font-bold mb-4">Typical trips</h3>
                        <dl className="space-y-3 text-sm">
                            {[
                                ['To Riyadh', `${RIYADH_KM} · ${RIYADH_TIME}`],
                                ['To Riyadh Airport (RUH)', 'North of the city, on your way in'],
                                ['To Buraidah / Qassim', 'North on the same highway'],
                                ['To Zulfi or Al-Ghat', 'Short trips nearby'],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-white/70">{k}</dt>
                                    <dd className="font-semibold text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-xs text-white/50 mt-4">Estimates; traffic inside Riyadh changes them most.</p>
                    </aside>
                </div>
            </section>

            {/* ================= RIYADH SAME DAY ================= */}
            <section aria-labelledby="riyadh" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className={prose}>
                        <RotateCcw className="w-7 h-7 text-[#4d7c0f]" aria-hidden="true" />
                        <h2 id="riyadh" className={`${h2} mb-2`}>A Day in Riyadh, There and Back</h2>
                        <p>
                            Tell us the address in Riyadh and the time you need to be there. The drive to the north of the city is around two hours; reaching central or southern Riyadh in the morning rush adds more, so we set the pickup with a margin.
                        </p>
                        <p>
                            For the return you have two options. Either the driver collects you again at a time you give us, or the driver waits nearby while you are inside. Waiting suits short appointments; a later pickup suits a long day. Both are quoted with the trip, so there are no surprises.
                        </p>
                        <p>
                            If your day has several stops in Riyadh, for example a hospital, an office and some shopping, book a <Link href="/services/private-driver/" className={link}>driver by the hour</Link> instead, from 3 hours to a full 10-hour day. <Link href="/locations/riyadh/" className={link}>Riyadh transfers</Link>.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#1f2a12]/10 p-7">
                        <h3 className={`${h3} mb-4`}>Plan a same-day return</h3>
                        <ol className="space-y-3 text-sm text-stone-700">
                            {[
                                'Send your Riyadh address and appointment time.',
                                'Say whether the driver should wait or come back later.',
                                'Give the time you would like to leave Riyadh.',
                                'We quote both legs together before you book.',
                            ].map((x, i) => (
                                <li key={x} className="flex gap-3"><span className="inline-flex w-6 h-6 shrink-0 items-center justify-center rounded-full bg-[#4d7c0f] text-white text-xs font-bold">{i + 1}</span>{x}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* ================= AIRPORT ================= */}
            <section aria-labelledby="airport" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div className={prose}>
                        <Plane className="w-7 h-7 text-[#4d7c0f]" aria-hidden="true" />
                        <h2 id="airport" className={`${h2} mb-2`}>Airports from Al Majma&apos;ah</h2>
                        <p>
                            {RUH} is on the north side of Riyadh, which works well for Majma&apos;ah: you reach it before the city traffic, in around two hours. {ELQ} near Buraidah is the other option, useful for some domestic flights. Al Majma&apos;ah itself has no passenger airport.
                        </p>
                        <p>
                            For departures, send the flight time and we suggest a pickup that leaves room for check-in. For arrivals, send your flight number: we track the flight, the driver waits 60 minutes after a domestic landing or 90 after an international one, and delays of up to 3 hours cost nothing extra. <Link href="/riyadh-airport-taxi/" className={link}>Riyadh Airport transfers</Link>.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-[#f5f6f0] p-7 space-y-3 text-sm text-stone-700">
                        <h3 className={h3}>Airport pickups include</h3>
                        <ul className="space-y-2">
                            <Tick>Flight tracking</Tick>
                            <Tick>60 min free waiting (domestic), 90 min (international)</Tick>
                            <Tick>Delays up to 3 hours at no extra charge</Tick>
                            <Tick>Meeting point and driver&apos;s number in advance</Tick>
                        </ul>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={`${primary} w-full mt-3`}><WhatsAppIcon className="w-4 h-4 fill-current" /> Book an airport transfer</a>
                    </aside>
                </div>
            </section>

            {/* ================= CAR VS TRAIN ================= */}
            <section aria-labelledby="train" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="train" className={`${h2} mb-3`}>Car or Train to Riyadh?</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">Al Majma&apos;ah is on the railway between Riyadh and Al-Qassim, so the train is a real option. Pick the one that fits your day.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-3xl bg-white border border-[#1f2a12]/10 p-7">
                            <TrainFront className="w-7 h-7 text-[#4d7c0f] mb-3" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>The train suits you if</h3>
                            <ul className="space-y-2 text-sm text-stone-700">
                                <Tick>you are travelling alone or as a couple</Tick>
                                <Tick>you have light luggage</Tick>
                                <Tick>a departure time fits your plan</Tick>
                                <Tick>your destination is easy to reach from the station</Tick>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-[#1f2a12] text-white p-7">
                            <Car className="w-7 h-7 text-[#d9f99d] mb-3" aria-hidden="true" />
                            <h3 className="text-xl font-bold mb-2">A private car suits you if</h3>
                            <ul className="space-y-2 text-sm text-white/85">
                                {['you are a family or group sharing one fare', 'you carry heavy bags or need door-to-door', 'you need very early or late times', 'you are going straight to the airport or a hospital'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#d9f99d] shrink-0" aria-hidden="true" />{x}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= NORTH + OTHER ================= */}
            <section aria-labelledby="north" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="north" className={`${h2} mb-8`}>North, Nearby and Further Afield</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <article className="rounded-3xl bg-[#f5f6f0] p-7">
                            <Route className="w-6 h-6 text-[#4d7c0f] mb-2" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>Al-Qassim</h3>
                            <p className="text-sm text-stone-700 leading-relaxed">North on the same highway to Buraidah, Unaizah or Qassim Airport. <Link href="/locations/al-qassim/" className={link}>Al-Qassim transfers</Link>.</p>
                        </article>
                        <article className="rounded-3xl bg-[#f5f6f0] p-7">
                            <Route className="w-6 h-6 text-[#4d7c0f] mb-2" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>Sudair neighbours</h3>
                            <p className="text-sm text-stone-700 leading-relaxed">Zulfi and Al-Ghat are short trips; quoted on the address. <Link href="/locations/zulfi/" className={link}>Zulfi</Link> · <Link href="/locations/al-ghat/" className={link}>Al-Ghat</Link>.</p>
                        </article>
                        <article className="rounded-3xl bg-[#f5f6f0] p-7">
                            <Route className="w-6 h-6 text-[#4d7c0f] mb-2" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>Long-distance</h3>
                            <p className="text-sm text-stone-700 leading-relaxed">Madinah, Makkah, Jeddah or the Eastern Province by road are long trips, usually via Riyadh or Qassim. <Link href="/services/intercity/" className={link}>Private intercity transfers</Link>.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES + FARE ================= */}
            <section aria-labelledby="vehicles" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="rounded-3xl bg-white border border-[#1f2a12]/10 p-7">
                        <Users className="w-7 h-7 text-[#4d7c0f] mb-3" aria-hidden="true" />
                        <h2 id="vehicles" className="text-2xl md:text-3xl font-extrabold text-[#1f2a12] mb-5">Vehicles</h2>
                        <ul className="space-y-3 text-sm text-stone-700">
                            {[
                                ['Toyota Camry', 'Up to 3 people, about 2 large suitcases'],
                                ['Hyundai Staria VIP', 'Up to 7 people, about 4 large suitcases'],
                                ['GMC Yukon XL', 'Up to 7 people, about 5 large suitcases'],
                                ['Toyota Hiace', 'Groups up to 11, on request'],
                            ].map(([k, v]) => (
                                <li key={k} className="flex justify-between gap-4 border-b border-[#1f2a12]/10 pb-3 last:border-0"><span className="font-semibold text-[#1f2a12]">{k}</span><span className="text-right">{v}</span></li>
                            ))}
                        </ul>
                        <p className="text-sm text-stone-600 mt-5">Count people and bags together. Child seats and mobility needs: ask when booking. <Link href="/fleet/" className={link}>See the fleet</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#1f2a12]/10 p-7">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1f2a12] mb-5">How the Fare Works</h2>
                        <p className="text-sm text-stone-700 leading-relaxed mb-4">Every trip is quoted for the whole vehicle before you book, from your Al Majma&apos;ah address to your destination, and for both legs if you return the same day. Once accepted, the price stays the same unless the trip changes.</p>
                        <ul className="space-y-2 text-sm text-stone-700 mb-4">
                            <Tick>Included: vehicle and driver, fuel and the drive to your quoted address</Tick>
                            <Tick>Airport pickups: flight tracking, free waiting and delays up to 3 hours</Tick>
                        </ul>
                        <ul className="space-y-2 text-sm text-stone-700">
                            {['Extra stops or a changed destination', 'Waiting longer than agreed', 'Paid parking, if any'].map((x) => (
                                <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x} (agreed in advance)</span></li>
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
                                ['Send the trip', 'Your address (a map pin helps), destination, date and the time you need to be there.'],
                                ['Return or one way', 'For a same-day return, say whether the driver waits or comes back later.'],
                                ['People and bags', 'Adults, children and suitcases.'],
                                ['Confirm', 'We send the fare; once you accept, the booking is final and the driver’s details follow.'],
                            ].map(([t, d], i) => (
                                <li key={t} className="flex gap-4">
                                    <span className="inline-flex w-8 h-8 shrink-0 items-center justify-center rounded-full bg-[#4d7c0f] text-white font-black text-sm" aria-hidden="true">{i + 1}</span>
                                    <span><strong className="text-[#1f2a12]">{t}.</strong> {d}</span>
                                </li>
                            ))}
                        </ol>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a href={QUOTE_HREF} className={primary}>Get a quote <Arrow /></a>
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                        </div>
                        <p className="text-sm flex gap-2"><Clock className="w-4 h-4 mt-0.5 text-[#4d7c0f] shrink-0" aria-hidden="true" />Pickups run 24 hours a day; book the day before for early starts.</p>
                    </div>
                    <div className="rounded-3xl bg-[#f5f6f0] p-7">
                        <h3 className={`${h3} mb-4`}>Message you can copy</h3>
                        <pre className="whitespace-pre-wrap text-sm text-stone-700 font-sans leading-relaxed">{`Hello Taxi Service KSA,
Private car from Al Majma'ah, please:
Pickup: [address]
Destination: [Riyadh address / airport / city]
Date: [ ]  Be there by: [time]
Return: [same day at ... / driver waits / one way]
Passengers: [ ]  Bags: [ ]
Flight number: [if airport]`}</pre>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#1f2a12]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#1f2a12] hover:no-underline">{f.q}</AccordionTrigger>
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
                        ['Airport pickup and drop-off arrangements', '/services/airport-transfers/'],
                        ['Private chauffeur arrangements', '/services/private-driver/'],
                        ['Taxi service in Riyadh', '/locations/riyadh/'],
                        ['Al-Qassim transfers', '/locations/al-qassim/'],
                        ['Dariya private car transfer', '/locations/dariya/'],
                        ['Al-Kharj private transfer', '/locations/al-kharj/'],
                    ].map(([l, h]) => (
                        <Link key={h} href={h} className="rounded-full border border-[#1f2a12]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#1f2a12] hover:border-[#4d7c0f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7c0f]">{l}</Link>
                    ))}
                </div>
                <p className="text-xs text-stone-500 mb-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Distances and times are estimates; the quote for your trip is what counts.</p>
                <ApprovedDriversForLocation location="al-majma-ah" />
                <RelatedLocations currentCity="Al Majma'ah" />
            </div>
        </div>
    );
}
