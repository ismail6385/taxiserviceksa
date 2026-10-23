import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, Info, Users, Luggage, Plane, Car, Mountain, Landmark, Hotel, Clock, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';

const PAGE_URL = 'https://taxiserviceksa.com/routes/jeddah-alula/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const JED = 'King Abdulaziz International Airport (JED)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need a private car from Jeddah to AlUla. Jeddah pickup (hotel, address or flight), AlUla hotel or resort, date and time, passengers, suitcases, preferred vehicle, and whether I need a driver in AlUla: ')}`;

// Approximate; the exact route and addresses decide it.
const KM = 'About 700–750 km';
const DRIVE = 'Around 7–8 hours';

const TITLE = 'Jeddah to AlUla Private Car | Long-Distance Transfer';
const DESCRIPTION = 'Plan a private car transfer from Jeddah to AlUla. Request a quote for hotel drop-offs, family travel, heritage visits and long-distance journeys.';

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car from Jeddah to AlUla' }],
    },
};

const faqs = [
    { q: 'How far is Jeddah from AlUla?', a: `${KM} by road, depending on the route and your two addresses.` },
    { q: 'How long does the drive take?', a: `${DRIVE} of driving, plus breaks. With a proper meal stop, most of a day. It is an estimate; do not plan a timed activity right after the expected arrival.` },
    { q: 'How much is a taxi from Jeddah to AlUla?', a: 'We quote each trip for the whole vehicle, based on the car, the date, your addresses and any stops or waiting. Send your details and we reply with the fare and exactly what it covers before you book.' },
    { q: 'Can you collect me at Jeddah Airport and drive straight to AlUla?', a: `Yes. Choose ${JED} as the pickup and add your flight number. After a long flight, think about whether a night in Jeddah first would be easier; it is a long drive.` },
    { q: 'Can you drop me at a resort outside the town?', a: 'Yes, if the road is open to private cars. Some resorts are in valleys outside AlUla town and some only allow guest vehicles to a set point. Send the property name and we confirm the drop-off.' },
    { q: 'Can I visit Elephant Rock on the day I arrive?', a: 'Possibly, if you leave Jeddah early and the drive goes to plan, but do not count on it. Check the current opening times on the official Experience AlUla site and keep the first evening flexible.' },
    { q: 'Is Hegra included?', a: 'No. Hegra is visited with a ticketed tour that starts from its welcome centre; you cannot drive into the site. Book it through the official channels. We can take you to the welcome centre as part of a separate AlUla driver booking.' },
    { q: 'Can I keep the driver while I am in AlUla?', a: 'Yes, quoted separately: by the hour or by the day, for the Old Town, Elephant Rock, the Hegra welcome centre or your restaurant in the evening. It is not part of the one-way transfer fare.' },
    { q: 'Is it better to fly?', a: 'If time matters most, a flight to AlUla airport (ULH) is much shorter in the air. Add airport time at both ends and a car from ULH. For a family with luggage, or if you want to stop on the way, the road can be simpler. Check current flights before you decide.' },
    { q: 'Which car for a family on a 700 km trip?', a: 'Comfort matters more than on a short trip. A Staria or GMC Yukon XL for up to seven with luggage; a Hiace for bigger groups. A Camry suits two or three people with light bags.' },
    { q: 'Can I book the return to Jeddah?', a: 'Yes. AlUla to Jeddah is a separate one-way trip. Send both dates and we quote both. If the driver should stay in AlUla for your whole visit, that is quoted as a multi-day booking.' },
    { q: 'Does a WhatsApp message confirm the booking?', a: 'No. The booking is confirmed once we have agreed the vehicle, fare and pickup time with you.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Jeddah to AlUla private car with driver',
            url: PAGE_URL,
            serviceType: 'Private long-distance transfer',
            description: 'Pre-booked private car from a Jeddah hotel, address or King Abdulaziz International Airport to a hotel or resort in AlUla, with an optional driver in AlUla.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: [{ '@type': 'City', name: 'Jeddah' }, { '@type': 'City', name: 'AlUla' }],
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Routes', item: 'https://taxiserviceksa.com/routes/' },
                { '@type': 'ListItem', position: 3, name: 'Jeddah to AlUla', item: PAGE_URL },
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
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#431407]';
const h3 = 'text-xl font-bold text-[#431407]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#b45309] px-6 py-3.5 font-bold text-white hover:bg-[#92400e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b45309] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#431407]/20 px-6 py-3.5 font-bold text-[#431407] hover:border-[#b45309] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b45309]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#b45309] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

const vehicles = [
    { name: 'Toyota Camry', seats: 'Up to 3 adults', bags: 'About 2 large suitcases', note: 'Two or three people, light bags.' },
    { name: 'Hyundai Staria VIP', seats: 'Up to 7 passengers', bags: 'About 4 large suitcases', note: 'Families; easy sliding doors, room to stretch.' },
    { name: 'GMC Yukon XL', seats: 'Up to 7 passengers', bags: 'About 5 large suitcases', note: 'The most luggage space for a family.' },
    { name: 'Toyota Hiace', seats: 'Up to 11 passengers', bags: 'Group luggage; send your count', note: 'Larger groups in one vehicle.' },
];

export default function JeddahAlUlaRoutePage() {
    return (
        <div className="jeddah-alula bg-[#fbf7f2]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#431407]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#9a3412_0%,_#431407_62%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#fed7aa] mb-4`}>Red Sea coast → AlUla · {KM}</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Jeddah to AlUla by Private Car: Route and Travel Guide</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            A full day on the road from the coast to the sandstone valleys of AlUla, in one private car from your Jeddah hotel or the airport to your hotel or resort. If you want, the driver can stay with you in AlUla too.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#431407] hover:bg-[#fbf7f2]">
                                <a href={QUOTE_HREF}>Request a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {[DRIVE + ' driving', 'Hotel or resort drop-off', 'Driver in AlUla on request', 'Fare agreed before travel'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#fed7aa] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Jeddah to AlUla car"
                            cta="Send my request"
                            fromPlaceholder="Jeddah hotel, address or airport"
                            toPlaceholder="AlUla hotel, resort or address"
                            fromChips={['Jeddah hotel', JED, 'Jeddah address']}
                            toChips={['AlUla hotel', 'AlUla resort', 'AlUla Old Town']}
                            showFlight="auto"
                            returnNote="Also need: return to Jeddah and/or a driver in AlUla - dates to confirm."
                            buttonClass="bg-[#b45309] hover:bg-[#92400e] focus-visible:ring-[#b45309]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= FIRST DECISION: ROAD OR AIR ================= */}
            <section aria-labelledby="mode" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="mode" className={`${h2} mb-3`}>First Question: Drive or Fly?</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        AlUla has its own airport, and flights from Jeddah are far quicker in the air. We would rather you pick the right option than book a car you did not need.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-3xl bg-[#fbf7f2] p-7">
                            <Plane className="w-7 h-7 text-[#431407] mb-3" aria-hidden="true" />
                            <h3 className={`${h3} mb-3`}>Fly if…</h3>
                            <ul className="space-y-2 text-sm text-stone-700">
                                <Tick>Time is the main thing and a flight time suits you</Tick>
                                <Tick>You travel light enough for the baggage allowance</Tick>
                                <Tick>You have a car arranged from AlUla airport (ULH)</Tick>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-[#431407] text-white p-7">
                            <Car className="w-7 h-7 text-[#fed7aa] mb-3" aria-hidden="true" />
                            <h3 className="text-xl font-bold mb-3">Drive if…</h3>
                            <ul className="space-y-2 text-sm text-white/85">
                                {['You are a family or group and tickets add up', 'You carry a lot of luggage or equipment', 'No flight fits, or flights are full', 'You want to stop on the way, for example in Madinah', 'You want the same car and driver in AlUla afterwards'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#fed7aa] shrink-0" aria-hidden="true" />{x}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Compare the whole day: airport check-in and the ride from ULH on one side, a long drive with breaks on the other. Check current flights and fares with the airline.</p>
                </div>
            </section>

            {/* ================= THE DAY ON THE ROAD ================= */}
            <section aria-labelledby="road" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className={prose}>
                        <h2 id="road" className={`${h2} mb-2`}>A Day on the Road</h2>
                        <p>
                            It is {KM.toLowerCase()}, {DRIVE.toLowerCase()} behind the wheel. The usual way runs north via Madinah, which makes a natural halfway point for lunch and prayer, then on through open desert to AlUla. The driver chooses the route on the day from current road conditions.
                        </p>
                        <p>
                            Plan for one proper break and a couple of short ones. With children or elderly passengers, tell us and we plan more. Bring water and snacks; long stretches between towns have few places to stop.
                        </p>
                        <p>
                            Leaving in the morning usually means arriving in the late afternoon or evening. That is a rough guide, not a timetable: we will not promise you a sunset at Elephant Rock after a 700 km drive.
                        </p>
                    </div>
                    <RouteJourney
                        vehicle
                        palette="platinum"
                        stops={[
                            { title: 'Jeddah pickup', text: 'Your hotel, an address, or the airport after your flight.' },
                            { title: 'North out of Jeddah', text: 'City traffic first, then the highway.' },
                            { title: 'Madinah area', text: 'A natural halfway break for food and prayer.', accent: true },
                            { title: 'Desert stretch', text: 'Long, quiet roads with fewer services; short stops as needed.' },
                            { title: 'AlUla', text: 'Your hotel or resort, at the point the property allows.' },
                        ]}
                    />
                </div>
            </section>

            {/* ================= ARRIVING ================= */}
            <section aria-labelledby="arrive" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="arrive" className={`${h2} mb-3`}>AlUla Is a Valley, Not a Single Address</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">Hotels, resorts, the Old Town and the heritage sites are spread out. Send the exact property name so we drive to the right place.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { icon: Hotel, t: 'Hotels and resorts', d: 'Some resorts sit in valleys outside the town and only let guest vehicles go to a set point, where the resort takes over. Tell us the property; ask it about early check-in if you will arrive before the usual time.' },
                            { icon: Mountain, t: 'Elephant Rock (Jabal AlFil)', d: 'The famous sandstone arch is best in the late afternoon and evening. After the drive from Jeddah, treat a same-day visit as a bonus, and check the current opening times on Experience AlUla.' },
                            { icon: Landmark, t: 'Hegra', d: 'Saudi Arabia’s first UNESCO World Heritage Site is visited on a ticketed tour from its welcome centre; you cannot drive in. Book it through the official channels, ideally for a day after you arrive.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#fbf7f2] p-6">
                                <Icon className="w-6 h-6 text-[#b45309] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#431407] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-stone-600 mt-6">More about getting around once you are there: <Link href="/locations/alula/" className={link}>AlUla transfers and local trips</Link>.</p>
                </div>
            </section>

            {/* ================= DRIVER IN ALULA ================= */}
            <section aria-labelledby="stay" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div className={prose}>
                        <Sun className="w-7 h-7 text-[#b45309]" aria-hidden="true" />
                        <h2 id="stay" className={`${h2} mb-2`}>Keep the Driver for Your Stay</h2>
                        <p>
                            AlUla&apos;s sights are far apart and there is little public transport between them. Instead of a one-way drop, you can keep a car and driver while you are there: to the Old Town, Elephant Rock in the evening, the Hegra welcome centre for your tour, and back to your resort for dinner.
                        </p>
                        <p>
                            This is quoted separately from the transfer, by the hour or by the day; a stay of several days is quoted as one booking. Tell us your dates and a rough plan for each day.
                        </p>
                        <p className="text-sm">Entry tickets, tours and guides are not included; the driver is not a tour guide. <Link href="/services/private-driver/" className={link}>Private driver hire</Link>.</p>
                    </div>
                    <aside className="rounded-3xl bg-white border border-[#431407]/10 p-7">
                        <h3 className={`${h3} mb-4`}>Tell us for an AlUla driver</h3>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <Tick>Your arrival and departure dates</Tick>
                            <Tick>Where you are staying</Tick>
                            <Tick>Any booked tour times (Hegra, for example)</Tick>
                            <Tick>Whether the same car takes you back to Jeddah</Tick>
                        </ul>
                    </aside>
                </div>
            </section>

            {/* ================= VEHICLES + FARE ================= */}
            <section aria-labelledby="vehicles" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className={`${h2} mb-3`}>A Car for Eight Hours, Not Twenty Minutes</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">On a trip this long, legroom and luggage space matter more than usual. Choose by suitcases as well as seats. <Link href="/fleet/" className={link}>See the full fleet</Link>.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {vehicles.map((v) => (
                            <div key={v.name} className="rounded-2xl bg-[#fbf7f2] p-6">
                                <h3 className="font-bold text-[#431407] mb-2">{v.name}</h3>
                                <ul className="space-y-1.5 text-sm text-stone-600 mb-3">
                                    <li className="flex gap-2"><Users className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />{v.seats}</li>
                                    <li className="flex gap-2"><Luggage className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />{v.bags}</li>
                                </ul>
                                <p className="text-sm text-stone-700">{v.note}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-stone-600 mt-4">Mercedes S-Class, Cadillac Escalade or Mercedes Sprinter: on request, confirmed for your date.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
                        <div className="rounded-3xl border border-[#431407]/10 p-7">
                            <h3 className={`${h3} mb-3`}>How the fare works</h3>
                            <p className="text-sm text-stone-700 leading-relaxed">One price for the whole vehicle, quoted for your date, car and addresses. The quote states what it covers. Once you accept, it stays the same unless the trip changes.</p>
                        </div>
                        <div className="rounded-3xl border border-[#431407]/10 p-7">
                            <h3 className={`${h3} mb-3`}>Not part of the transfer fare</h3>
                            <ul className="space-y-2 text-sm text-stone-700">
                                {['A driver in AlUla during your stay', 'Hegra or attraction tickets and tours', 'Long detours or extra pickups', 'The return to Jeddah', 'Child seats (on request, not free)'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= BOOKING ================= */}
            <section aria-labelledby="book" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className={prose}>
                        <h2 id="book" className={`${h2} mb-2`}>Request Your Quote</h2>
                        <ol className="space-y-3">
                            {[
                                ['Jeddah pickup', 'Hotel or address, or the airport with your flight number.'],
                                ['AlUla destination', 'The exact hotel or resort name.'],
                                ['Date and start time', 'An early start gives the most daylight on arrival.'],
                                ['People and bags', 'Adults, children, large and small suitcases, anything bulky.'],
                                ['Extras', 'Return date, a driver in AlUla, or a stop on the way.'],
                            ].map(([t, d], i) => (
                                <li key={t} className="flex gap-4">
                                    <span className="inline-flex w-8 h-8 shrink-0 items-center justify-center rounded-full bg-[#b45309] text-white font-black text-sm" aria-hidden="true">{i + 1}</span>
                                    <span><strong className="text-[#431407]">{t}.</strong> {d}</span>
                                </li>
                            ))}
                        </ol>
                        <p>We reply with the vehicle, the fare and what it covers. The booking is final once you accept and we confirm; payment and change terms are explained then.</p>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a href={QUOTE_HREF} className={primary}>Request a quote <Arrow /></a>
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                        </div>
                        <p className="text-sm flex gap-2"><Clock className="w-4 h-4 mt-0.5 text-[#b45309] shrink-0" aria-hidden="true" />Pickups run 24 hours a day; book long trips well ahead.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#431407]/10 p-7">
                        <h3 className={`${h3} mb-4`}>Message you can copy</h3>
                        <pre className="whitespace-pre-wrap text-sm text-stone-700 font-sans leading-relaxed">{`Hello Taxi Service KSA,
Jeddah to AlUla private car, please:
Jeddah pickup: [hotel / address / flight]
AlUla drop-off: [hotel or resort name]
Date: [ ]   Start time: [ ]
Passengers: [adults / children]
Bags: [large / small]
Vehicle: [Camry / Staria / GMC / Hiace / not sure]
Return to Jeddah: [date or no]
Driver in AlUla: [days or no]`}</pre>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Jeddah to AlUla: Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#431407]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#431407] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <div className="flex flex-wrap gap-2 mt-10">
                        {[
                            ['AlUla to Jeddah', '/routes/alula-jeddah/'],
                            ['Jeddah to Madinah private car', '/routes/jeddah-madinah/'],
                            ['Madinah to AlUla', '/routes/madinah-alula/'],
                            ['Jeddah to Makkah', '/routes/jeddah-makkah/'],
                            ['Jeddah to Abha', '/routes/jeddah-abha/'],
                            ['AlUla transfers', '/locations/alula/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#431407]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#431407] hover:border-[#b45309] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b45309]">{l}</Link>
                        ))}
                    </div>
                    <p className="text-xs text-stone-500 mt-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Distances and driving times are estimates. Attraction hours and access rules change; check Experience AlUla before you go.</p>
                </div>
            </section>
        </div>
    );
}
