import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, Info, Plane, Briefcase, Users, Clock, Route, Landmark, Home } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RelatedLocations from '@/components/seo/RelatedLocations';
import ApprovedDriversForLocation from '@/components/ApprovedDriversForLocation';

const PAGE_URL = 'https://taxiserviceksa.com/locations/dariya/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const RUH = 'King Khalid International Airport (RUH)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need a private car from Diriyah (Dariya). Pickup address or hotel, destination, date and time, passengers and luggage: ')}`;

const TITLE = 'Dariya Private Car Service | Airport & Intercity Transfers';
const DESCRIPTION = 'Pre-booked private cars from Diriyah (Dariya) to Riyadh Airport, anywhere in Riyadh and other Saudi cities, plus drivers by the hour. Fare agreed before you travel. Book on WhatsApp.';

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car transfers from Diriyah' }],
    },
};

const faqs = [
    { q: 'Is Dariya the same as Diriyah?', a: 'Yes. Dariya, Diriyah and Ad-Dir’iyah are different spellings of the same place: the historic town on the north-west edge of Riyadh, home to At-Turaif and Bujairi Terrace.' },
    { q: 'How do I book a car from Diriyah?', a: 'Send your pickup address or hotel name, destination, date, time, passengers and luggage on WhatsApp (+966 57 580 6733). We confirm the vehicle and fare; the booking is final once you accept.' },
    { q: 'How long is the drive from Diriyah to Riyadh Airport?', a: `${RUH} is on the north side of Riyadh. From Diriyah it is usually well under an hour, but evening traffic can add a lot, so we plan departures with a margin.` },
    { q: 'Can you pick me up at Riyadh Airport and bring me to Diriyah?', a: 'Yes. Send your flight number. We track the flight; the driver waits 60 minutes after a domestic landing or 90 after an international one, and delays of up to 3 hours cost nothing extra.' },
    { q: 'Do you do short rides around Diriyah?', a: 'Not single short rides. For a day of trips around Diriyah and Riyadh, book a driver by the hour (from 3 hours) instead; for quick hops, a local taxi or app is easier.' },
    { q: 'Can I visit At-Turaif and Bujairi with your driver?', a: 'Yes, but if you are coming from elsewhere in Riyadh to visit Diriyah, see our Diriyah visitor page. This page is about travelling out of Diriyah.' },
    { q: 'How much is a car from Diriyah?', a: 'It depends on the destination and vehicle. We quote the whole vehicle before you book, and the fare stays the same unless the trip changes.' },
    { q: 'Do you go to other cities from Diriyah?', a: 'Yes, for example Al-Kharj, Al-Qassim, Dammam, Jeddah or Makkah. Send the destination and we quote it.' },
    { q: 'Which vehicles are available?', a: 'A Toyota Camry, Hyundai Staria or GMC Yukon XL, and a Toyota Hiace for groups on request; a Mercedes S-Class or Cadillac Escalade on request for VIP guests.' },
    { q: 'Are pickups available at night?', a: 'Yes, 24 hours a day if booked in advance.' },
    { q: 'Do the drivers speak English?', a: 'Yes, our drivers speak English and Arabic.' },
    { q: 'Is my booking confirmed when I send a message?', a: 'No. It is confirmed once we have agreed the vehicle, fare and pickup with you.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Pre-booked private transfers from Diriyah (Dariya)',
            url: PAGE_URL,
            serviceType: 'Private airport and intercity transfer',
            description: 'Pre-booked private cars from Diriyah to Riyadh Airport, Riyadh and other Saudi cities, and drivers by the hour.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: { '@type': 'City', name: 'Diriyah' },
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://taxiserviceksa.com/locations/' },
                { '@type': 'ListItem', position: 3, name: 'Diriyah (Dariya)', item: PAGE_URL },
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
const link = 'font-semibold text-[#9a3412] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#3a1f12]';
const h3 = 'text-xl font-bold text-[#3a1f12]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#9a3412] px-6 py-3.5 font-bold text-white hover:bg-[#7c2d12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a3412] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#3a1f12]/20 px-6 py-3.5 font-bold text-[#3a1f12] hover:border-[#9a3412] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a3412]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#9a3412] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function DariyaLocationPage() {
    return (
        <div className="dariya bg-[#f8f4ee]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#3a1f12]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#8a4b26_0%,_#3a1f12_62%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#fed7aa] mb-4`}>Diriyah (Dariya) · North-west Riyadh</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Private Car Transfers from Dariya for Airport and Intercity Travel</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            Staying or living in Diriyah and need to get to the airport, across Riyadh or to another city? A pre-booked private car collects you at your hotel or home, with the fare agreed before you go.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#3a1f12] hover:bg-[#f8f4ee]">
                                <a href={QUOTE_HREF}>Get a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {['Riyadh Airport runs', 'Hotel and home pickups', '24/7, booked ahead', 'English & Arabic drivers'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#fed7aa] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your car from Diriyah"
                            cta="Send my request"
                            fromPlaceholder="Hotel or address in Diriyah"
                            toPlaceholder="Airport, Riyadh address or city"
                            fromChips={['Diriyah hotel', 'Bujairi area', 'Diriyah residence', RUH]}
                            toChips={[RUH, 'Olaya', 'KAFD', 'Al-Kharj']}
                            showFlight="auto"
                            returnNote="Return to Diriyah also needed - time to confirm."
                            buttonClass="bg-[#9a3412] hover:bg-[#7c2d12] focus-visible:ring-[#9a3412]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section aria-labelledby="intro" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    <div className={prose}>
                        <h2 id="intro" className={`${h2} mb-2`}>Leaving Diriyah, the Easy Way</h2>
                        <p>
                            Diriyah, often written Dariya, sits in Wadi Hanifah on the north-west edge of Riyadh. Its mud-brick heart, At-Turaif, and the restaurants of Bujairi draw visitors from across the world, and the new district around them is full of hotels, residences and offices. What it does not have is its own airport or an easy way to get across a city as big as Riyadh at rush hour.
                        </p>
                        <p>
                            That is what we do from here: pre-booked private cars from your hotel or home in Diriyah to King Khalid International Airport, to any address in Riyadh, or onward to other cities, and back again. We also provide drivers by the hour for a day of appointments. We do not run single short rides around the district; for those, a local taxi or app is the quicker choice.
                        </p>
                        <p className="text-sm">
                            Coming from elsewhere in Riyadh to visit At-Turaif or Bujairi Terrace? See <Link href="/locations/riyadh/diriyah/" className={link}>transfers to Diriyah and Bujairi Terrace</Link>.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-[#3a1f12] text-white p-7">
                        <h3 className="text-xl font-bold mb-4">Typical trips from Diriyah</h3>
                        <dl className="space-y-3 text-sm">
                            {[
                                ['Riyadh Airport (RUH)', 'Usually well under an hour'],
                                ['Olaya / KAFD', 'Across town; traffic decides'],
                                ['Al-Kharj', 'South-east, through Riyadh'],
                                ['Al-Qassim, Dammam, Jeddah', 'Long-distance, quoted'],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-white/70">{k}</dt>
                                    <dd className="font-semibold text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-xs text-white/50 mt-4">Estimates; Riyadh traffic changes them a lot by the hour.</p>
                    </aside>
                </div>
            </section>

            {/* ================= AIRPORT ================= */}
            <section aria-labelledby="airport" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div className={prose}>
                        <Plane className="w-7 h-7 text-[#9a3412]" aria-hidden="true" />
                        <h2 id="airport" className={`${h2} mb-2`}>Riyadh Airport to and from Diriyah</h2>
                        <p>
                            {RUH} is north of the city. From Diriyah the drive is usually well under an hour, but the ring roads can slow badly in the evening and before weekends, so for departures we set the pickup with a margin. Send your flight time and terminal if you know it.
                        </p>
                        <p>
                            For arrivals, send your flight number. We track the flight, the driver waits 60 minutes after a domestic landing or 90 after an international one, and delays of up to 3 hours cost nothing extra. The meeting point and the driver&apos;s phone number come with your confirmation.
                        </p>
                        <p>
                            Hotels in the Diriyah district often have their own drive-in entrance or security gate. Tell us the hotel name and we will use the right entrance. <Link href="/riyadh-airport-taxi/" className={link}>Riyadh Airport transfers</Link>.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-white border border-[#3a1f12]/10 p-7 space-y-3 text-sm text-stone-700">
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

            {/* ================= RIYADH + HOURLY ================= */}
            <section aria-labelledby="riyadh" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="riyadh" className={`${h2} mb-8`}>Getting Around Riyadh from Diriyah</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Briefcase, t: 'Meetings', d: 'Offices in KAFD, Olaya or the Diplomatic Quarter, which is close by. Send the meeting time and we work back from it.' },
                            { icon: Home, t: 'Hotel guests', d: 'Guests staying in Diriyah heading into the city for shopping, dinner or family visits, with a pickup back at the end.' },
                            { icon: Users, t: 'Families', d: 'Everyone and the bags in one car. Tell us children’s ages and ask about child seats.' },
                            { icon: Clock, t: 'Driver by the hour', d: <>Several stops in one day, the car waiting between them. From 3 hours to a full 10-hour day. <Link href="/services/private-driver/" className={link}>Private driver hire</Link>.</> },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f8f4ee] p-6">
                                <Icon className="w-6 h-6 text-[#9a3412] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#3a1f12] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FURTHER ================= */}
            <section aria-labelledby="further" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="further" className={`${h2} mb-8`}>Out of Riyadh from Diriyah</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <article className="rounded-3xl bg-white border border-[#3a1f12]/10 p-7">
                            <Route className="w-6 h-6 text-[#9a3412] mb-2" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>Nearby towns</h3>
                            <p className="text-sm text-stone-700 leading-relaxed">Al-Kharj to the south-east, Al-Ghat and Al Majma&apos;ah to the north. Send the town and address. <Link href="/locations/al-kharj/" className={link}>Al-Kharj</Link>.</p>
                        </article>
                        <article className="rounded-3xl bg-white border border-[#3a1f12]/10 p-7">
                            <Route className="w-6 h-6 text-[#9a3412] mb-2" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>Other regions</h3>
                            <p className="text-sm text-stone-700 leading-relaxed">Al-Qassim, Dammam and Al Khobar, or Jeddah, Makkah and Madinah, by road. These are long trips, quoted on your plan. <Link href="/locations/al-qassim/" className={link}>Al-Qassim</Link> · <Link href="/routes/riyadh-jeddah/" className={link}>Riyadh to Jeddah</Link>.</p>
                        </article>
                        <article className="rounded-3xl bg-white border border-[#3a1f12]/10 p-7">
                            <Route className="w-6 h-6 text-[#9a3412] mb-2" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>Across the border</h3>
                            <p className="text-sm text-stone-700 leading-relaxed">Bahrain, Qatar, the UAE and Kuwait are reached from Riyadh in one car. <Link href="/services/intercity/" className={link}>Private intercity transfers</Link>.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES + FARE ================= */}
            <section aria-labelledby="vehicles" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="rounded-3xl bg-[#f8f4ee] p-7">
                        <h2 id="vehicles" className="text-2xl md:text-3xl font-extrabold text-[#3a1f12] mb-5">Vehicles</h2>
                        <ul className="space-y-3 text-sm text-stone-700">
                            {[
                                ['Toyota Camry', 'Up to 3 people, about 2 large suitcases'],
                                ['Hyundai Staria VIP', 'Up to 7 people, about 4 large suitcases'],
                                ['GMC Yukon XL', 'Up to 7 people, about 5 large suitcases'],
                                ['Toyota Hiace', 'Groups up to 11, on request'],
                                ['Mercedes S-Class / Cadillac Escalade', 'VIP guests, on request'],
                            ].map(([k, v]) => (
                                <li key={k} className="flex justify-between gap-4 border-b border-[#3a1f12]/10 pb-3 last:border-0"><span className="font-semibold text-[#3a1f12]">{k}</span><span className="text-right">{v}</span></li>
                            ))}
                        </ul>
                        <p className="text-sm text-stone-600 mt-5">Count people and bags together, especially for airport runs. <Link href="/fleet/" className={link}>See the fleet</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-[#f8f4ee] p-7">
                        <Landmark className="w-7 h-7 text-[#9a3412] mb-3" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#3a1f12] mb-4">How the Fare Works</h2>
                        <p className="text-sm text-stone-700 leading-relaxed mb-4">Every trip is quoted for the whole vehicle, from your Diriyah pickup to your destination, before you book. Once you accept, the price stays the same unless the trip changes.</p>
                        <ul className="space-y-2 text-sm text-stone-700 mb-4">
                            <Tick>Included: vehicle and driver, fuel and the drive to your quoted address</Tick>
                            <Tick>Airport pickups: flight tracking, free waiting and delays up to 3 hours</Tick>
                        </ul>
                        <ul className="space-y-2 text-sm text-stone-700">
                            {['Waiting during an appointment (or book hourly)', 'Extra stops or a changed destination', 'Return legs, quoted with the trip'].map((x) => (
                                <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= BOOKING ================= */}
            <section aria-labelledby="book" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className={prose}>
                        <h2 id="book" className={`${h2} mb-2`}>How to Book</h2>
                        <ol className="space-y-3">
                            {[
                                ['Send the trip', 'Hotel name or address in Diriyah, destination, date and time; flight number for airport trips.'],
                                ['Add people and bags', 'Adults, children and suitcases, and any arrival deadline.'],
                                ['Get the fare', 'We confirm the vehicle and price for the whole trip.'],
                                ['Confirm', 'Once you accept, the booking is final and the driver’s details follow.'],
                            ].map(([t, d], i) => (
                                <li key={t} className="flex gap-4">
                                    <span className="inline-flex w-8 h-8 shrink-0 items-center justify-center rounded-full bg-[#9a3412] text-white font-black text-sm" aria-hidden="true">{i + 1}</span>
                                    <span><strong className="text-[#3a1f12]">{t}.</strong> {d}</span>
                                </li>
                            ))}
                        </ol>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a href={QUOTE_HREF} className={primary}>Get a quote <Arrow /></a>
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                        </div>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#3a1f12]/10 p-7">
                        <h3 className={`${h3} mb-4`}>A message you can copy</h3>
                        <pre className="whitespace-pre-wrap text-sm text-stone-700 font-sans leading-relaxed">{`Hello Taxi Service KSA,
Private car from Diriyah, please:
Pickup: [hotel name or address]
Destination: [address or airport]
Date and time: [ ]
Passengers: [ ]  Bags: [ ]
Flight number: [if airport]
One way / return: [ ]`}</pre>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#3a1f12]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#3a1f12] hover:no-underline">{f.q}</AccordionTrigger>
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
                        ['Visiting Diriyah and Bujairi Terrace', '/locations/riyadh/diriyah/'],
                        ['Taxi service in Riyadh', '/locations/riyadh/'],
                        ['Airport pickup and drop-off service', '/services/airport-transfers/'],
                        ['Private intercity transfers across Saudi Arabia', '/services/intercity/'],
                        ['Private chauffeur service', '/services/private-driver/'],
                        ['Al-Kharj transfers', '/locations/al-kharj/'],
                    ].map(([l, h]) => (
                        <Link key={h} href={h} className="rounded-full border border-[#3a1f12]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#3a1f12] hover:border-[#9a3412] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a3412]">{l}</Link>
                    ))}
                </div>
                <p className="text-xs text-stone-500 mb-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Times are estimates; the quote for your trip is what counts.</p>
                <ApprovedDriversForLocation location="dariya" />
                <RelatedLocations currentCity="Dariya" />
            </div>
        </div>
    );
}
