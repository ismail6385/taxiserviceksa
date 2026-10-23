import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, Info, Plane, Briefcase, Users, Clock, Route, Stethoscope, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RelatedLocations from '@/components/seo/RelatedLocations';
import ApprovedDriversForLocation from '@/components/ApprovedDriversForLocation';

const PAGE_URL = 'https://taxiserviceksa.com/locations/al-kharj/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const RUH = 'King Khalid International Airport (RUH)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need a private car from Al-Kharj. Pickup address (or flight number), destination, date and time, passengers and luggage: ')}`;

// Checked against route calculators: about 83–86 km to Riyadh city, around 1 hour 10–15 minutes.
const RIYADH_KM = 'About 85 km';
const RIYADH_TIME = 'Around 1–1.25 hours';

const TITLE = 'Al-Kharj Taxi Service | Private Transfers & Airport Pickups';
const DESCRIPTION = 'Pre-booked private cars from Al-Kharj to Riyadh, Riyadh Airport (RUH), Diriyah and other cities, and airport pickups back to Al-Kharj. Fare agreed before you travel. Book on WhatsApp.';

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car transfers from Al-Kharj' }],
    },
};

const faqs = [
    { q: 'How do I book a car from Al-Kharj?', a: 'Send your pickup address, destination, date, time, passengers and luggage on WhatsApp (+966 57 580 6733). We confirm the vehicle and the fare; the booking is final once you accept.' },
    { q: 'Do you do short rides inside Al-Kharj?', a: 'No. We run pre-booked trips out of Al-Kharj and back: to Riyadh, the airport and other cities. For a quick ride across town, a local taxi or ride-hailing app is better.' },
    { q: 'How far is Al-Kharj from Riyadh?', a: `${RIYADH_KM} to Riyadh city, ${RIYADH_TIME.toLowerCase()} of driving. Northern Riyadh and the airport take longer, especially at rush hour.` },
    { q: 'Is there an airport in Al-Kharj?', a: `No passenger airport. Most travellers use ${RUH}, on the far (north) side of Riyadh. Allow well over an hour to reach it, more in traffic.` },
    { q: 'Can you pick me up at Riyadh Airport and take me to Al-Kharj?', a: 'Yes. Send your flight number. We track the flight; the driver waits 60 minutes after a domestic landing or 90 after an international one, and delays of up to 3 hours cost nothing extra.' },
    { q: 'How much is a taxi from Al-Kharj to Riyadh?', a: 'It depends on where in Riyadh you are going and the vehicle. We quote the whole vehicle before you book; the fare stays the same unless the trip changes.' },
    { q: 'Can I book a return trip the same day?', a: 'Yes. Say when you need collecting in Riyadh. A return later in the day is quoted with the trip, and if you want the driver to wait between, the waiting is quoted up front.' },
    { q: 'Do you go further than Riyadh?', a: 'Yes, for example to Dammam, Al-Ghat or Al Majma’ah. Send the destination and we quote it.' },
    { q: 'Which vehicles are available?', a: 'A Toyota Camry, Hyundai Staria or GMC Yukon XL, and a Toyota Hiace for groups on request. Tell us your passengers and bags and we suggest one.' },
    { q: 'Are pickups available early in the morning or late at night?', a: 'Yes, 24 hours a day if booked in advance. Early-morning airport runs are common.' },
    { q: 'Do the drivers speak English?', a: 'Yes, our drivers speak English and Arabic.' },
    { q: 'Is my booking confirmed when I send a message?', a: 'No. It is confirmed once we have agreed the vehicle, fare and pickup time with you.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Pre-booked private transfers from Al-Kharj',
            url: PAGE_URL,
            serviceType: 'Private intercity and airport transfer',
            description: 'Pre-booked private cars from Al-Kharj to Riyadh, King Khalid International Airport, Diriyah and other cities, and airport pickups to Al-Kharj.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: { '@type': 'City', name: 'Al-Kharj' },
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://taxiserviceksa.com/locations/' },
                { '@type': 'ListItem', position: 3, name: 'Al-Kharj', item: PAGE_URL },
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
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#2b2410]';
const h3 = 'text-xl font-bold text-[#2b2410]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#a16207] px-6 py-3.5 font-bold text-white hover:bg-[#854d0e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a16207] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#2b2410]/20 px-6 py-3.5 font-bold text-[#2b2410] hover:border-[#a16207] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a16207]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#a16207] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function AlKharjLocationPage() {
    return (
        <div className="al-kharj bg-[#f7f5ef]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#2b2410]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#6b5414_0%,_#2b2410_62%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#fde68a] mb-4`}>Al-Kharj · South of Riyadh</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Private Car Transfer, Taxi and Chauffeur Service in Al-Kharj</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            Pre-booked private cars between Al-Kharj and Riyadh, to and from Riyadh Airport, and on to other cities. Your car, at the time you choose, with the fare agreed before you go.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#2b2410] hover:bg-[#f7f5ef]">
                                <a href={QUOTE_HREF}>Get a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {['Riyadh in about an hour', 'Riyadh Airport runs', '24/7, booked ahead', 'English & Arabic drivers'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#fde68a] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Al-Kharj transfer"
                            cta="Send my request"
                            fromPlaceholder="Your address in Al-Kharj, or the airport"
                            toPlaceholder="Destination: Riyadh address, airport or city"
                            fromChips={['Al-Kharj', RUH]}
                            toChips={['Riyadh', RUH, 'Diriyah', 'Al-Kharj']}
                            showFlight="auto"
                            returnNote="Return trip also needed - time to confirm."
                            buttonClass="bg-[#a16207] hover:bg-[#854d0e] focus-visible:ring-[#a16207]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section aria-labelledby="intro" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    <div className={prose}>
                        <h2 id="intro" className={`${h2} mb-2`}>Al-Kharj, Riyadh and Everything in Between</h2>
                        <p>
                            Al-Kharj is the big farming town south-east of Riyadh, close enough to the capital that people move between the two every day, but far enough that a trip into the city takes real time. Most of what people need from us is that link: a ride into Riyadh for a meeting or a hospital appointment, an early run to the airport on the far side of the capital, or a pickup after a flight back home to Al-Kharj.
                        </p>
                        <p>
                            We do this as pre-booked private transport. You send the details; we confirm a car, a fare and a pickup time; a driver comes to your door. We do not run shared taxis or quick rides around town, so for those a local taxi or app is the better choice.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-[#2b2410] text-white p-7">
                        <h3 className="text-xl font-bold mb-4">Typical trips</h3>
                        <dl className="space-y-3 text-sm">
                            {[
                                ['To Riyadh city', `${RIYADH_KM} · ${RIYADH_TIME}`],
                                ['To Riyadh Airport (RUH)', 'Across Riyadh, well over an hour'],
                                ['To Diriyah', 'West side of Riyadh'],
                                ['To Dammam', 'A long half-day'],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-white/70">{k}</dt>
                                    <dd className="font-semibold text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-xs text-white/50 mt-4">Estimates; Riyadh traffic makes a big difference at peak hours.</p>
                    </aside>
                </div>
            </section>

            {/* ================= RIYADH ================= */}
            <section aria-labelledby="riyadh" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="riyadh" className={`${h2} mb-3`}>Al-Kharj to Riyadh</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        The highway into Riyadh is quick; the city is not. Reaching the southern edge takes about an hour, but getting to Olaya, KAFD or the north of the city at rush hour can add a lot. Give us the exact address and the time you need to be there, and we set the pickup from it.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Briefcase, t: 'Meetings and offices', d: 'Offices in Olaya, KAFD, the Diplomatic Quarter or government districts. Send the meeting time, not just the address.' },
                            { icon: Stethoscope, t: 'Hospital appointments', d: 'A drop-off and a pickup after the appointment, or a driver who waits. Tell us how long you expect to be.' },
                            { icon: MapPin, t: 'Diriyah and sightseeing', d: 'Diriyah and At-Turaif on the west side of Riyadh, or a day in the city. Ask about a driver for several hours.' },
                            { icon: Users, t: 'Family visits', d: 'Relatives across Riyadh, with the bags and the children in one car. A return later the same day is easy to add.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-white border border-[#2b2410]/10 p-6">
                                <Icon className="w-6 h-6 text-[#a16207] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#2b2410] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-stone-600 mt-6">Need a car for the whole day in Riyadh? See <Link href="/services/private-driver/" className={link}>private driver hire</Link>, from 3 hours to a full 10-hour day. <Link href="/locations/riyadh/" className={link}>Taxi service in Riyadh</Link>.</p>
                </div>
            </section>

            {/* ================= AIRPORT ================= */}
            <section aria-labelledby="airport" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div className={prose}>
                        <Plane className="w-7 h-7 text-[#a16207]" aria-hidden="true" />
                        <h2 id="airport" className={`${h2} mb-2`}>Riyadh Airport to and from Al-Kharj</h2>
                        <p>
                            Al-Kharj has no passenger airport, so most travellers fly from {RUH}. It sits on the north side of Riyadh, which means the drive crosses the whole city: plan for well over an hour, and more in morning or evening traffic.
                        </p>
                        <p>
                            <strong className="text-[#2b2410]">Going to the airport:</strong> send your flight time and terminal if you know it. We suggest a pickup time that leaves room for Riyadh traffic and check-in; for international flights, we would rather you are early than anxious.
                        </p>
                        <p>
                            <strong className="text-[#2b2410]">Coming home:</strong> send your flight number. We track the flight, the driver waits 60 minutes after a domestic landing or 90 after an international one, and delays of up to 3 hours cost nothing extra. The meeting point and the driver&apos;s phone number come with your confirmation. <Link href="/riyadh-airport-taxi/" className={link}>Riyadh Airport transfers</Link>.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-[#f7f5ef] p-7 space-y-3 text-sm text-stone-700">
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

            {/* ================= FURTHER ================= */}
            <section aria-labelledby="further" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="further" className={`${h2} mb-8`}>Further Afield</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <article className="rounded-3xl bg-white border border-[#2b2410]/10 p-7">
                            <Route className="w-6 h-6 text-[#a16207] mb-2" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>Eastern Province</h3>
                            <p className="text-sm text-stone-700 leading-relaxed">Dammam, Al Khobar and Hofuf are long trips east, most of a morning or afternoon. Quoted on the exact address.</p>
                        </article>
                        <article className="rounded-3xl bg-white border border-[#2b2410]/10 p-7">
                            <Route className="w-6 h-6 text-[#a16207] mb-2" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>North of Riyadh</h3>
                            <p className="text-sm text-stone-700 leading-relaxed">Al-Ghat, Al Majma&apos;ah and Al-Qassim are reached through Riyadh. Send the town and address. <Link href="/locations/al-qassim/" className={link}>Al-Qassim transfers</Link>.</p>
                        </article>
                        <article className="rounded-3xl bg-white border border-[#2b2410]/10 p-7">
                            <Route className="w-6 h-6 text-[#a16207] mb-2" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>Other cities</h3>
                            <p className="text-sm text-stone-700 leading-relaxed">Makkah, Madinah or Jeddah by road are full-day trips; send your plan and we quote it. <Link href="/services/intercity/" className={link}>Private intercity transfers</Link>.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES + FARE ================= */}
            <section aria-labelledby="vehicles" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="rounded-3xl bg-[#f7f5ef] p-7">
                        <h2 id="vehicles" className="text-2xl md:text-3xl font-extrabold text-[#2b2410] mb-5">Vehicles</h2>
                        <ul className="space-y-3 text-sm text-stone-700">
                            {[
                                ['Toyota Camry', 'Up to 3 people, about 2 large suitcases'],
                                ['Hyundai Staria VIP', 'Up to 7 people, about 4 large suitcases'],
                                ['GMC Yukon XL', 'Up to 7 people, about 5 large suitcases'],
                                ['Toyota Hiace', 'Groups up to 11, on request'],
                            ].map(([k, v]) => (
                                <li key={k} className="flex justify-between gap-4 border-b border-[#2b2410]/10 pb-3 last:border-0"><span className="font-semibold text-[#2b2410]">{k}</span><span className="text-right">{v}</span></li>
                            ))}
                        </ul>
                        <p className="text-sm text-stone-600 mt-5">Count people and bags together, especially for airport runs. Child seats on request, confirmed for your date. <Link href="/fleet/" className={link}>See the fleet</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-[#f7f5ef] p-7">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2b2410] mb-5">How the Fare Works</h2>
                        <p className="text-sm text-stone-700 leading-relaxed mb-4">We quote each trip for the whole vehicle, from your Al-Kharj address to your destination, before you book. Once you accept, that is the price; it changes only if the trip changes.</p>
                        <ul className="space-y-2 text-sm text-stone-700 mb-4">
                            <Tick>Included: the vehicle and driver, fuel and the drive to your quoted address</Tick>
                            <Tick>Airport pickups: flight tracking, free waiting and delays up to 3 hours</Tick>
                        </ul>
                        <ul className="space-y-2 text-sm text-stone-700">
                            {['Waiting during an appointment (or book by the hour)', 'Extra stops or a changed destination', 'Return legs, quoted with the trip'].map((x) => (
                                <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= BOOKING ================= */}
            <section aria-labelledby="book" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-6`}>How to Book</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            ['Send the trip', 'Your Al-Kharj address (a map pin helps), destination, date and time; flight number for airport trips.'],
                            ['Add people and bags', 'Adults, children and suitcases, and any arrival deadline.'],
                            ['Get the fare', 'We confirm the vehicle and price for the whole trip.'],
                            ['Confirm', 'Once you accept, the booking is final and the driver’s details follow.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-white border border-[#2b2410]/10 p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#a16207] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#2b2410] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={primary}>Get a quote <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5 flex gap-2"><Clock className="w-4 h-4 mt-0.5 text-[#a16207] shrink-0" aria-hidden="true" />Pickups run 24 hours a day; for very early airport runs, book the day before.</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#2b2410]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#2b2410] hover:no-underline">{f.q}</AccordionTrigger>
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
                        ['Taxi service in Riyadh', '/locations/riyadh/'],
                        ['Riyadh Airport transfers', '/riyadh-airport-taxi/'],
                        ['Private intercity transfers', '/services/intercity/'],
                        ['Airport transfer service', '/services/airport-transfers/'],
                        ['Private chauffeur service', '/services/private-driver/'],
                        ['Taxi service in Al-Qassim', '/locations/al-qassim/'],
                    ].map(([l, h]) => (
                        <Link key={h} href={h} className="rounded-full border border-[#2b2410]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#2b2410] hover:border-[#a16207] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a16207]">{l}</Link>
                    ))}
                </div>
                <p className="text-xs text-stone-500 mb-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Distances and times are estimates; the quote for your trip is what counts.</p>
                <ApprovedDriversForLocation location="al-kharj" />
                <RelatedLocations currentCity="Al-Kharj" />
            </div>
        </div>
    );
}
