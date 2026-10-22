import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, Info, Anchor, Ship, Plane, Hotel, RotateCcw, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';

const PAGE_URL = 'https://taxiserviceksa.com/services/jeddah-port-taxi-transfer/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const PORT = 'Jeddah Islamic Port (cruise terminal)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I am arriving by cruise at Jeddah Islamic Port. Ship name, arrival date and time, destination (Makkah / airport / hotel), one way or return, passengers and luggage: ')}`;

// Jeddah–Makkah one-way fares, the same as /routes/jeddah-makkah/ (owner confirmed 2026-10-22).
const MAKKAH_SEDAN = 300;
const MAKKAH_GMC = 600;
const sar = (n: number) => `${n.toLocaleString('en-US')} SAR`;

const TITLE = 'Jeddah Port Taxi Transfer | Makkah & Airport Transfers';
const DESCRIPTION = `Private taxi from Jeddah Islamic Port cruise terminal to Makkah (from ${sar(MAKKAH_SEDAN)}), Jeddah Airport or your hotel. Driver meets you outside the cruise gate; Umrah return trips with waiting quoted on request.`;

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private taxi from Jeddah cruise port' }],
    },
};

const faqs = [
    { q: 'How do I book a taxi from Jeddah Islamic Port?', a: 'Send your ship name, arrival date, expected disembarkation time, destination, number of passengers and bags on WhatsApp (+966 57 580 6733) or the form on this page. We confirm the vehicle, fare and pickup instructions; the booking is final once you accept.' },
    { q: 'Where does the driver meet me?', a: 'Outside the cruise terminal gate, at the pickup point given in your confirmation, with the driver’s phone number. Follow any directions from port staff; drivers do not enter restricted terminal areas.' },
    { q: 'How much is a taxi from Jeddah Port to Makkah?', a: `One way: Toyota Camry ${sar(MAKKAH_SEDAN)}, GMC Yukon XL ${sar(MAKKAH_GMC)}, to your hotel or drop-off point in Makkah. A return trip with the driver waiting is quoted separately.` },
    { q: 'Can I go to Makkah for Umrah and come back to the ship the same day?', a: 'Yes, as a return trip with waiting, quoted for your day. Send the ship’s all-aboard time. We check that the plan leaves enough time for the drive both ways, your Umrah and a safety margin, and tell you honestly if it is too tight.' },
    { q: 'Can the driver wait while we perform Umrah?', a: 'Yes, in a return package. The waiting time is agreed in the quote. Umrah can take longer than expected on busy days, so build in a margin.' },
    { q: 'Who can go to Makkah?', a: 'Only Muslims may enter Makkah. Each passenger is responsible for meeting the entry and travel requirements that apply to them, including any shore-pass or visa rules for cruise passengers. Our booking does not replace those.' },
    { q: 'How much is a taxi from the port to Jeddah Airport or a hotel?', a: 'It depends on the airport terminal or hotel and the vehicle. Send your destination and we quote before you book.' },
    { q: 'How far is the port from the airport?', a: 'Roughly 25–35 km, often 30–45 minutes, depending on the terminal and traffic.' },
    { q: 'How far is the port from Makkah?', a: 'Roughly 75–90 km, often 1–1.5 hours, longer in heavy traffic or near the Haram at busy times.' },
    { q: 'Are port gate fees included?', a: 'Yes. Any terminal gate fee for the pickup is included in the fare.' },
    { q: 'What if the ship arrives late?', a: 'Message us as soon as you know. We move the pickup to the new disembarkation time where the driver’s schedule allows.' },
    { q: 'Which vehicle should I choose?', a: 'A Toyota Camry for up to 3 people with normal luggage; a GMC Yukon XL or Hyundai Staria for families of up to 7; a Toyota Hiace for larger groups. Send your passenger and bag count.' },
    { q: 'Can I add a stop on the way?', a: 'Yes, if agreed when booking. Extra stops or waiting may change the fare.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private taxi transfers from Jeddah Islamic Port',
            url: PAGE_URL,
            serviceType: 'Cruise port transfer',
            description: 'Pre-booked private transfers from the Jeddah Islamic Port cruise terminal to Makkah, King Abdulaziz International Airport and Jeddah hotels.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: [{ '@type': 'City', name: 'Jeddah' }, { '@type': 'City', name: 'Makkah' }],
            offers: [
                { '@type': 'Offer', name: 'Toyota Camry - Jeddah Port to Makkah, one way', price: MAKKAH_SEDAN, priceCurrency: 'SAR' },
                { '@type': 'Offer', name: 'GMC Yukon XL - Jeddah Port to Makkah, one way', price: MAKKAH_GMC, priceCurrency: 'SAR' },
            ],
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://taxiserviceksa.com/services/' },
                { '@type': 'ListItem', position: 3, name: 'Jeddah Port Transfers', item: PAGE_URL },
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
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#0c2733]';
const h3 = 'text-xl font-bold text-[#0c2733]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0e7490] px-6 py-3.5 font-bold text-white hover:bg-[#155e75] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e7490] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#0c2733]/20 px-6 py-3.5 font-bold text-[#0c2733] hover:border-[#0e7490] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e7490]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#0e7490] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function JeddahPortTaxiTransferPage() {
    return (
        <div className="jeddah-port bg-[#f2f6f7]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0c2733]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#1f6074_0%,_#0c2733_62%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#7dd3fc] mb-4 flex items-center gap-2`}><Ship className="w-4 h-4" aria-hidden="true" />Cruise passengers · Jeddah Islamic Port</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Private Taxi Transfers from Jeddah Islamic Port</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            Off the ship and on your way: to Makkah for Umrah, to Jeddah Airport for your flight, or to a hotel in the city. Your driver waits outside the cruise gate, and the fare is agreed before you sail in.
                        </p>
                        <ul className="grid grid-cols-2 gap-2 mb-7 max-w-lg">
                            <li className="rounded-2xl bg-white/10 border border-white/15 px-4 py-3"><span className="block text-xs text-white/70">Port → Makkah (Camry)</span><span className="block text-xl font-black text-[#7dd3fc]">{sar(MAKKAH_SEDAN)}</span></li>
                            <li className="rounded-2xl bg-white/10 border border-white/15 px-4 py-3"><span className="block text-xs text-white/70">Port → Makkah (GMC)</span><span className="block text-xl font-black text-[#7dd3fc]">{sar(MAKKAH_GMC)}</span></li>
                        </ul>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#0c2733] hover:bg-[#f2f6f7]">
                                <a href={QUOTE_HREF}>Get a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {['Meets you outside the cruise gate', 'Port gate fees included', 'Umrah return trips', 'English & Arabic drivers'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#7dd3fc] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Book your port pickup"
                            cta="Send my request"
                            fromPlaceholder="Jeddah Islamic Port (cruise terminal)"
                            toPlaceholder="Makkah hotel, Jeddah Airport or hotel"
                            fromChips={[PORT]}
                            toChips={['Makkah hotel', 'Jeddah Airport (JED)', 'Jeddah hotel']}
                            extraFields={[{ id: 'ship', label: 'Ship name and all-aboard time', placeholder: 'e.g. MSC Splendida, back by 17:00' }]}
                            returnNote="Return to the port needed (Umrah day trip) - please quote with waiting."
                            vehicleOptions={[
                                { value: '', label: 'Not sure - recommend one' },
                                { value: 'Toyota Camry', label: `Toyota Camry (to Makkah ${sar(MAKKAH_SEDAN)})` },
                                { value: 'GMC Yukon XL / Denali', label: `GMC Yukon XL (to Makkah ${sar(MAKKAH_GMC)})` },
                                { value: 'Hyundai Staria VIP', label: 'Hyundai Staria VIP' },
                                { value: 'Toyota Hiace', label: 'Toyota Hiace (groups)' },
                            ]}
                            buttonClass="bg-[#0e7490] hover:bg-[#155e75] focus-visible:ring-[#0e7490]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= DESTINATIONS ================= */}
            <section aria-labelledby="destinations" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="destinations" className={`${h2} mb-3`}>Where Cruise Passengers Go from the Port</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">Distances and times are planning estimates from the port; your exact destination and the traffic decide the real figures.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <article className="rounded-3xl bg-[#0c2733] text-white p-7 flex flex-col">
                            <Anchor className="w-7 h-7 text-[#7dd3fc] mb-3" aria-hidden="true" />
                            <h3 className="text-xl font-bold mb-1">To Makkah</h3>
                            <p className="text-sm text-white/70 mb-3">Roughly 75–90 km · often 1–1.5 hours</p>
                            <p className="text-sm text-white/85 leading-relaxed mb-4">The reason most cruise passengers book with us: Umrah during the port call. One way to your hotel, or a return trip with the driver waiting.</p>
                            <p className="font-black text-[#7dd3fc] mb-5">Camry {sar(MAKKAH_SEDAN)} · GMC {sar(MAKKAH_GMC)} <span className="font-normal text-white/60 text-xs">one way</span></p>
                            <Link href="/routes/jeddah-makkah/" className="group mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-[#7dd3fc]">Private transfer from Jeddah to Makkah <Arrow /></Link>
                        </article>
                        <article className="rounded-3xl bg-[#f2f6f7] p-7 flex flex-col">
                            <Plane className="w-7 h-7 text-[#0e7490] mb-3" aria-hidden="true" />
                            <h3 className={`${h3} mb-1`}>To Jeddah Airport</h3>
                            <p className="text-sm text-stone-500 mb-3">Roughly 25–35 km · often 30–45 minutes</p>
                            <p className="text-sm text-stone-700 leading-relaxed mb-4">Ending your cruise in Jeddah and flying home. Send your flight time; disembarkation, the drive and check-in all need to fit before departure.</p>
                            <p className="font-bold text-stone-600 mb-5">Quoted on your terminal and vehicle</p>
                            <Link href="/jeddah-airport-transfer/" className="group mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-[#0e7490]">Jeddah Airport transfer service <Arrow /></Link>
                        </article>
                        <article className="rounded-3xl bg-[#f2f6f7] p-7 flex flex-col">
                            <Hotel className="w-7 h-7 text-[#0e7490] mb-3" aria-hidden="true" />
                            <h3 className={`${h3} mb-1`}>To a Jeddah hotel</h3>
                            <p className="text-sm text-stone-500 mb-3">Often 15–30 minutes, depending on the hotel</p>
                            <p className="text-sm text-stone-700 leading-relaxed mb-4">Staying a night or two before or after the cruise. Send the hotel’s full name, as several share similar names.</p>
                            <p className="font-bold text-stone-600 mb-5">Quoted on your hotel and vehicle</p>
                            <Link href="/services/jeddah-corniche-hotel-taxi/" className="group mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-[#0e7490]">Jeddah Corniche hotel transfers <Arrow /></Link>
                        </article>
                    </div>
                </div>
            </section>

            {/* ================= PICKUP ================= */}
            <section aria-labelledby="pickup" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div className={prose}>
                        <h2 id="pickup" className={`${h2} mb-2`}>How the Port Pickup Works</h2>
                        <p>
                            Arriving by sea is not like arriving at an airport. The ship docks, passengers disembark in turn, pass through the terminal and then walk out of the cruise gate. Your driver waits outside that gate, at the pickup point given in your confirmation. Drivers do not go into restricted terminal areas, so follow port staff directions until you are outside.
                        </p>
                        <p>
                            Because disembarkation times vary, we plan the pickup around the time your cruise line gives you to go ashore, not just the docking time. If the ship is late or your disembarkation group changes, message us on WhatsApp and we move the pickup where the driver&apos;s schedule allows. Any port gate fee for the pickup is included in the fare.
                        </p>
                        <ol className="space-y-3 pt-2">
                            {[
                                ['Before the cruise', 'Send ship name, arrival date, expected disembarkation time, destination, passengers and bags.'],
                                ['We confirm', 'Vehicle, fare, meeting point outside the cruise gate, and the driver’s phone number.'],
                                ['On arrival day', 'Keep your phone on once you are ashore. Message the driver when you are through the terminal.'],
                                ['Off you go', 'Straight to Makkah, the airport or your hotel. For return trips, the time and meeting point for the ride back are fixed before you leave.'],
                            ].map(([t, d], i) => (
                                <li key={t} className="flex gap-4">
                                    <span className="inline-flex w-8 h-8 shrink-0 items-center justify-center rounded-full bg-[#0e7490] text-white font-black text-sm" aria-hidden="true">{i + 1}</span>
                                    <span><strong className="text-[#0c2733]">{t}.</strong> {d}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <aside className="rounded-3xl bg-white border border-[#0c2733]/10 p-7 lg:sticky lg:top-28">
                        <h3 className={`${h3} mb-4`}>What to send us</h3>
                        <ul className="space-y-2 text-sm text-stone-700">
                            {['Ship name', 'Arrival date and expected disembarkation time', 'All-aboard time (for return trips)', 'Destination: Makkah hotel, airport or Jeddah hotel', 'One way or return', 'Number of passengers and bags', 'Flight time, if going to the airport'].map((x) => <Tick key={x}>{x}</Tick>)}
                        </ul>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={`${primary} w-full mt-6`}><WhatsAppIcon className="w-4 h-4 fill-current" /> Send on WhatsApp</a>
                    </aside>
                </div>
            </section>

            {/* ================= UMRAH DAY ================= */}
            <section aria-labelledby="umrah" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="umrah" className={`${h2} mb-3`}>Umrah During Your Port Call</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Many passengers use a day in Jeddah to perform Umrah. It is very possible, but the ship will not wait, so the whole day has to be planned, not just the drive.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div className={prose}>
                            <h3 className={h3}>Add up the whole day</h3>
                            <ul className="space-y-2">
                                <Tick>Disembarking and leaving the port.</Tick>
                                <Tick>The drive to Makkah, often 1–1.5 hours, longer near the Haram at busy times.</Tick>
                                <Tick>Performing Umrah, which takes longer when the Haram is crowded.</Tick>
                                <Tick>The drive back to Jeddah and through the port gate.</Tick>
                                <Tick>A safety margin before the ship’s all-aboard time.</Tick>
                            </ul>
                            <p>
                                Send us the all-aboard time and we work backwards from it. If the day is too short to do it calmly, we will tell you rather than take the booking.
                            </p>
                            <p className="text-sm">
                                Only Muslims may enter Makkah. Each passenger is responsible for their own entry requirements, including any shore-pass or visa rules for cruise passengers; our booking does not replace them. Questions about Ihram are best checked with your Umrah operator or a scholar before the cruise. <Link href="/services/umrah-transport/" className={link}>Private transportation for Umrah</Link>.
                            </p>
                        </div>
                        <div className="space-y-5">
                            <div className="rounded-3xl bg-[#f2f6f7] p-7">
                                <h3 className={`${h3} mb-2 flex items-center gap-2`}><ArrowRight className="w-5 h-5 text-[#0e7490]" aria-hidden="true" />One way</h3>
                                <p className="text-sm text-stone-700 leading-relaxed">Port to your Makkah hotel: Camry {sar(MAKKAH_SEDAN)}, GMC {sar(MAKKAH_GMC)}. For passengers leaving the cruise in Jeddah or making their own way back.</p>
                            </div>
                            <div className="rounded-3xl bg-[#0c2733] text-white p-7">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><RotateCcw className="w-5 h-5 text-[#7dd3fc]" aria-hidden="true" />Return with waiting</h3>
                                <p className="text-sm text-white/85 leading-relaxed">Port to Makkah, the driver waits while you perform Umrah, then back to the port. Quoted for your day, with the waiting time agreed up front. This is not covered by the one-way fare.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES + PRICE ================= */}
            <section aria-labelledby="vehicles" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="rounded-3xl bg-white border border-[#0c2733]/10 p-7">
                        <h2 id="vehicles" className="text-2xl md:text-3xl font-extrabold text-[#0c2733] mb-5">Choosing a Vehicle</h2>
                        <ul className="space-y-3 text-sm text-stone-700">
                            {[
                                ['Toyota Camry', 'Up to 3 people, about 2 large suitcases'],
                                ['Hyundai Staria VIP', 'Up to 7 people, about 4 large suitcases'],
                                ['GMC Yukon XL', 'Up to 7 people, about 5 large suitcases'],
                                ['Toyota Hiace', 'Up to 11 people, room for a group’s bags'],
                            ].map(([k, v]) => (
                                <li key={k} className="flex justify-between gap-4 border-b border-[#0c2733]/10 pb-3 last:border-0"><span className="font-semibold text-[#0c2733]">{k}</span><span className="text-right">{v}</span></li>
                            ))}
                        </ul>
                        <p className="text-sm text-stone-600 mt-5 flex gap-2"><Users className="w-4 h-4 mt-0.5 shrink-0 text-[#0e7490]" aria-hidden="true" />End-of-cruise luggage adds up; count the bags, not just the people. <Link href="/fleet/" className={link}>Compare private transfer vehicles</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#0c2733]/10 p-7">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0c2733] mb-5">What the Fare Covers</h2>
                        <ul className="space-y-2 text-stone-700 mb-5">
                            <Tick>Private vehicle and driver</Tick>
                            <Tick>Pickup outside the cruise gate</Tick>
                            <Tick>Port gate fees for the pickup</Tick>
                            <Tick>The drive to the destination in your quote</Tick>
                        </ul>
                        <ul className="space-y-2 text-stone-700">
                            {['Return trip and waiting time (quoted separately)', 'Extra stops or a change of destination', 'Long waits beyond the agreed time'].map((x) => (
                                <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#0c2733]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0c2733] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= CTA + RELATED ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3 mb-10">
                        <a href={QUOTE_HREF} className={primary}>Book your port transfer <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                    </div>
                    <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#0c2733] mb-5">Related Services</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Private transfer from Jeddah to Makkah', '/routes/jeddah-makkah/'],
                            ['Private transportation for Umrah', '/services/umrah-transport/'],
                            ['Private transport in Jeddah', '/locations/jeddah/'],
                            ['Jeddah Airport transfer service', '/jeddah-airport-transfer/'],
                            ['Arriving by ferry? Jeddah Islamic Port passenger terminal', '/locations/jeddah/islamic-port/'],
                            ['Hire a private driver by the hour or day', '/services/private-driver/'],
                            ['Private intercity transfers in Saudi Arabia', '/services/intercity/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#0c2733]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#0c2733] hover:border-[#0e7490] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e7490]">{l}</Link>
                        ))}
                    </div>
                    <p className="text-xs text-stone-500 mt-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Port procedures can change. Always follow the instructions in your booking confirmation and from port staff.</p>
                </div>
            </section>
        </div>
    );
}
