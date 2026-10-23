import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, Info, ShieldCheck, Route, MapPin, Clock, FileText, Plane } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';

const PAGE_URL = 'https://taxiserviceksa.com/border-crossings/taxi-salwa-border-crossing/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need a car for the Salwa border. Direction (Qatar to Saudi or Saudi to Qatar), through-trip from Doha or pickup at Salwa, expected time at the border, destination, passengers and luggage: ')}`;

// Through-trip fares from the route pages (owner confirmed): Doha–Riyadh GMC 3,000; Doha–Dammam SUV 2,500.
const sar = (n: number) => `${n.toLocaleString('en-US')} SAR`;

const TITLE = 'Salwa Border Taxi | Private Transfers to Saudi Arabia';
const DESCRIPTION = `Private car across the Salwa / Abu Samra border: Doha to Riyadh (GMC ${sar(3000)}) or Dammam (SUV ${sar(2500)}) in one car, pickups on the Saudi side at Salwa, and Saudi to Doha.`;

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car at the Salwa border between Qatar and Saudi Arabia' }],
    },
};

const faqs = [
    { q: 'Can one car take me from Doha across Salwa to Riyadh or Dammam?', a: `Yes. The same car and driver collect you in Doha and drive you through Abu Samra and Salwa to your door: Doha to Riyadh in a GMC Yukon for ${sar(3000)}, Doha to Dammam in a private SUV for ${sar(2500)}, one way. The driver handles the vehicle side of the crossing.` },
    { q: 'Can you pick me up at Salwa on the Saudi side?', a: 'Yes. If you are crossing into Saudi Arabia by other transport, the driver meets you at an agreed point on the Saudi side once you are through immigration and customs. The meeting point is confirmed in advance; drivers do not enter restricted checkpoint areas.' },
    { q: 'Do you drive from Saudi Arabia to Doha?', a: 'Yes, through the same crossing: Riyadh to Doha and Dammam to Doha, in one car.' },
    { q: 'How far is Salwa from Riyadh and Dammam?', a: 'Roughly 450–500 km to Riyadh and roughly 300 km to Dammam, depending on your destination. Driving time is extra to whatever the border takes.' },
    { q: 'How long does the border take?', a: 'It varies with queues, the time of day and the season, and nobody can promise a fixed time. Weekends, holidays and Eid are usually busier.' },
    { q: 'How much is a pickup at Salwa?', a: 'Pickups on the Saudi side are quoted on your destination and vehicle. Send the details and we confirm the fare before you book.' },
    { q: 'What documents do I need?', a: 'That depends on each passenger’s nationality, residency and visa. Everyone needs what their own situation requires to leave one country and enter the other; check with the official authorities before you travel. A booking does not confirm entry.' },
    { q: 'Do you help with customs?', a: 'On a through-trip, the driver handles the vehicle’s paperwork and insurance at the border. Passenger immigration and customs are done by each passenger with the officials; we cannot speed them up or arrange approval.' },
    { q: 'What if the border takes longer than planned?', a: 'Message us on WhatsApp as soon as you can. On a through-trip the driver is with you anyway. For a Salwa pickup, we adjust the meeting time where the driver’s schedule allows.' },
    { q: 'Can I go straight to an airport?', a: 'Yes, for example King Khalid International in Riyadh or King Fahd International in Dammam. Leave a very generous margin for the border, or plan the flight for the next day.' },
    { q: 'Do your drivers speak English?', a: 'Yes, our drivers speak English and Arabic.' },
    { q: 'Are you available at night?', a: 'Yes, 24 hours a day if booked in advance.' },
    { q: 'Is the booking confirmed when I send a message?', a: 'No. It is confirmed once we have agreed the trip, the fare and the pickup or meeting point with you.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private transfers across the Salwa border',
            url: PAGE_URL,
            serviceType: 'Cross-border private transfer',
            description: 'Private cars through the Salwa / Abu Samra crossing between Qatar and Saudi Arabia, and pickups on the Saudi side at Salwa.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: [{ '@type': 'Country', name: 'Saudi Arabia' }, { '@type': 'Country', name: 'Qatar' }],
            offers: [
                { '@type': 'Offer', name: 'GMC Yukon - Doha to Riyadh via Salwa, one way', price: 3000, priceCurrency: 'SAR', url: 'https://taxiserviceksa.com/routes/doha-riyadh/' },
                { '@type': 'Offer', name: 'Private SUV - Doha to Dammam via Salwa, one way', price: 2500, priceCurrency: 'SAR', url: 'https://taxiserviceksa.com/routes/doha-dammam/' },
            ],
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Border Crossings', item: 'https://taxiserviceksa.com/border-crossings/' },
                { '@type': 'ListItem', position: 3, name: 'Salwa', item: PAGE_URL },
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
const link = 'font-semibold text-[#7a2541] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#2a1019]';
const h3 = 'text-xl font-bold text-[#2a1019]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#7a2541] px-6 py-3.5 font-bold text-white hover:bg-[#5f1c32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a2541] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#2a1019]/20 px-6 py-3.5 font-bold text-[#2a1019] hover:border-[#7a2541] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a2541]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#7a2541] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function SalwaBorderPage() {
    return (
        <div className="salwa bg-[#f7f2ea]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#2a1019]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#6b2a3e_0%,_#2a1019_62%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#f0cf9c] mb-4`}>Qatar ↔ Saudi Arabia · Abu Samra / Salwa</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Private Taxi and Car Transfers at Salwa Border Crossing</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            Two ways to get across: one car all the way from Doha to Riyadh or Dammam, or a driver waiting for you on the Saudi side at Salwa. Planned in advance, with the fare agreed before you travel.
                        </p>
                        <ul className="grid grid-cols-2 gap-2 mb-7 max-w-lg">
                            <li className="rounded-2xl bg-white/10 border border-white/15 px-4 py-3"><span className="block text-xs text-white/70">Doha → Riyadh (GMC)</span><span className="block text-xl font-black text-[#f0cf9c]">{sar(3000)}</span></li>
                            <li className="rounded-2xl bg-white/10 border border-white/15 px-4 py-3"><span className="block text-xs text-white/70">Doha → Dammam (SUV)</span><span className="block text-xl font-black text-[#f0cf9c]">{sar(2500)}</span></li>
                        </ul>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#2a1019] hover:bg-[#f7f2ea]">
                                <a href={QUOTE_HREF}>Get a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {['Both directions', 'Driver handles vehicle paperwork', 'English & Arabic drivers', '24/7, booked ahead'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#f0cf9c] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Plan your Salwa crossing"
                            cta="Send my request"
                            fromPlaceholder="Doha address, or 'Salwa border (Saudi side)'"
                            toPlaceholder="Destination: Riyadh, Dammam, Al Khobar, Doha..."
                            fromChips={['Doha', 'Salwa border (Saudi side)', 'Riyadh', 'Dammam']}
                            toChips={['Riyadh', 'Dammam', 'Al Khobar', 'Doha']}
                            showFlight="auto"
                            extraFields={[{ id: 'border', label: 'Expected time at the border', placeholder: 'e.g. around 10 am' }]}
                            returnNote="Return crossing also needed - date to confirm."
                            buttonClass="bg-[#7a2541] hover:bg-[#5f1c32] focus-visible:ring-[#7a2541]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= TWO WAYS ================= */}
            <section aria-labelledby="options" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="options" className={`${h2} mb-3`}>Two Ways to Cross with Us</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Salwa is the Saudi post on the only land crossing between Saudi Arabia and Qatar; Abu Samra is the Qatari post on the other side. Choose the arrangement that matches your trip, and tell us which one when you book.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <article className="rounded-3xl bg-[#2a1019] text-white p-7 flex flex-col">
                            <Route className="w-7 h-7 text-[#f0cf9c] mb-3" aria-hidden="true" />
                            <h3 className="text-xl font-bold mb-2">1. One car, door to door</h3>
                            <p className="text-sm text-white/85 leading-relaxed mb-4">
                                The same car and driver collect you in Doha, cross Abu Samra and Salwa with you, and drop you at your address in Saudi Arabia, or the other way round. The driver deals with the vehicle&apos;s side of the border: its papers and its insurance. You go through passport control as normal.
                            </p>
                            <ul className="space-y-1.5 text-sm text-white/85 mb-5">
                                <li className="flex justify-between gap-4"><span>Doha → Riyadh, GMC Yukon</span><b className="text-[#f0cf9c]">{sar(3000)}</b></li>
                                <li className="flex justify-between gap-4"><span>Doha → Dammam, private SUV</span><b className="text-[#f0cf9c]">{sar(2500)}</b></li>
                            </ul>
                            <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 text-sm">
                                <Link href="/routes/doha-riyadh/" className="font-semibold text-[#f0cf9c] hover:underline">Doha to Riyadh</Link>
                                <Link href="/routes/doha-dammam/" className="font-semibold text-[#f0cf9c] hover:underline">Doha to Dammam</Link>
                                <Link href="/routes/riyadh-doha/" className="font-semibold text-[#f0cf9c] hover:underline">Riyadh to Doha</Link>
                                <Link href="/routes/dammam-doha/" className="font-semibold text-[#f0cf9c] hover:underline">Dammam to Doha</Link>
                            </div>
                        </article>
                        <article className="rounded-3xl bg-[#f7f2ea] p-7 flex flex-col">
                            <MapPin className="w-7 h-7 text-[#7a2541] mb-3" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>2. Pickup on the Saudi side at Salwa</h3>
                            <p className="text-sm text-stone-700 leading-relaxed mb-4">
                                If you are crossing by other transport, for example a bus or a car that cannot continue into Saudi Arabia, our driver meets you on the Saudi side once you are through immigration and customs, and takes you on to Riyadh, Dammam, Al Khobar or anywhere else. The meeting point is agreed in advance; drivers do not enter restricted checkpoint areas.
                            </p>
                            <p className="text-sm font-bold text-stone-600 mb-5">Quoted on your destination and vehicle</p>
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={`${primary} mt-auto self-start !px-4 !py-2.5 text-sm`}>Arrange a Salwa pickup <Arrow /></a>
                        </article>
                    </div>
                </div>
            </section>

            {/* ================= TIMING ================= */}
            <section aria-labelledby="timing" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div className={prose}>
                        <Clock className="w-7 h-7 text-[#7a2541]" aria-hidden="true" />
                        <h2 id="timing" className={`${h2} mb-2`}>Planning Around the Border</h2>
                        <p>
                            The crossing itself is the part nobody controls. Passport checks, customs and queues take different amounts of time on different days; weekends, school holidays and Eid are usually the busiest. Plan the rest of the day with that in mind.
                        </p>
                        <p>
                            <strong className="text-[#2a1019]">On a through-trip</strong> the driver is with you the whole way, so a long queue just means a later arrival. Tell us about anything with a fixed time at the other end, such as a flight or a meeting, and we set the pickup in Doha with a wide margin.
                        </p>
                        <p>
                            <strong className="text-[#2a1019]">For a Salwa pickup</strong>, send your expected time at the border and say how sure you are of it. Once you are through, message the driver. If you are held up, let us know on WhatsApp as soon as you can and we adjust where the driver&apos;s schedule allows.
                        </p>
                        <p>
                            If you need to catch a flight in Riyadh or Dammam, leave a very generous gap, or fly the next day. A border crossing and a long drive in front of a tight connection is a risk we would rather tell you about now.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-white border border-[#2a1019]/10 p-7">
                        <h3 className={`${h3} mb-4`}>From Salwa, roughly</h3>
                        <dl className="space-y-3 text-sm">
                            {[
                                ['To Dammam / Al Khobar', 'About 300 km'],
                                ['To Riyadh', 'About 450–500 km'],
                                ['To Doha (other side)', 'About an hour after Abu Samra'],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-[#2a1019]/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-stone-500">{k}</dt>
                                    <dd className="font-semibold text-[#2a1019] text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-xs text-stone-500 mt-4">Driving distances only; the border time is on top. Exact figures depend on your destination.</p>
                    </aside>
                </div>
            </section>

            {/* ================= DOCUMENTS ================= */}
            <section aria-labelledby="documents" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className={prose}>
                        <FileText className="w-7 h-7 text-[#7a2541]" aria-hidden="true" />
                        <h2 id="documents" className={`${h2} mb-2`}>Documents and Customs</h2>
                        <p>
                            Every passenger must have the passport, visa, residency or other permission that applies to them for leaving one country and entering the other. The rules depend on nationality, residency and visa type, and they change, so check them with the official authorities for each traveller, children included, before you book.
                        </p>
                        <p>
                            A transport booking does not establish that anyone may enter Saudi Arabia or Qatar, and our drivers have no influence over immigration or customs decisions. If a passenger is refused, the trip cannot continue for them.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="rounded-2xl bg-[#f7f2ea] p-6">
                            <h3 className={`${h3} mb-3`}>What the driver does</h3>
                            <ul className="space-y-2 text-sm text-stone-700">
                                <Tick>On a through-trip, handles the vehicle&apos;s papers and insurance at both posts</Tick>
                                <Tick>Shows you where to go and in what order</Tick>
                                <Tick>Waits for you and continues the journey</Tick>
                            </ul>
                        </div>
                        <div className="rounded-2xl bg-[#f7f2ea] p-6">
                            <h3 className={`${h3} mb-3`}>What only you can do</h3>
                            <ul className="space-y-2 text-sm text-stone-700">
                                {['Your own passport control and customs', 'Visas or entry permissions for each passenger', 'Declaring anything customs requires'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                                ))}
                            </ul>
                            <p className="text-xs text-stone-500 mt-3">Keep passports and visas in the cabin with you, not in a suitcase.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES + FARE ================= */}
            <section aria-labelledby="vehicles" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="rounded-3xl bg-white border border-[#2a1019]/10 p-7">
                        <h2 id="vehicles" className="text-2xl md:text-3xl font-extrabold text-[#2a1019] mb-5">Vehicles</h2>
                        <p className="text-sm text-stone-700 leading-relaxed mb-4">Through-trips across the border run with a full-size SUV such as a GMC Yukon: room for up to 7 people and about 5 large suitcases with most seats in use. For Salwa pickups, a sedan, van or SUV can be quoted to suit your group.</p>
                        <p className="text-sm text-stone-600">Count people and bags together on a long drive; tell us about prams or oversized luggage. <Link href="/fleet/gmc-yukon/" className={link}>About the GMC Yukon</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#2a1019]/10 p-7">
                        <ShieldCheck className="w-7 h-7 text-[#7a2541] mb-3" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2a1019] mb-4">What the Fare Covers</h2>
                        <ul className="space-y-2 text-sm text-stone-700 mb-4">
                            <Tick>Through-trips: the vehicle and driver, fuel, road tolls and the vehicle&apos;s cross-border insurance</Tick>
                            <Tick>Pickups: the vehicle and driver from the agreed meeting point to your destination</Tick>
                        </ul>
                        <ul className="space-y-2 text-sm text-stone-700">
                            {['Passenger visas or entry fees', 'Detours, extra stops or long waits not agreed at booking', 'Return crossings, quoted on their own'].map((x) => (
                                <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= BOOKING ================= */}
            <section aria-labelledby="book" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-6`}>How to Book</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            ['Tell us the direction', 'Qatar to Saudi, or Saudi to Qatar; a through-trip or a Salwa pickup.'],
                            ['Give the times', 'Travel date, and your expected time at the border for a pickup.'],
                            ['Give the addresses', 'Pickup in Doha or the agreed meeting point, and your full destination.'],
                            ['Confirm', 'We send the fare and meeting details; once you accept, the booking is final.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-[#f7f2ea] p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#7a2541] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#2a1019] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={primary}>Get a quote <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5 flex gap-2"><Plane className="w-4 h-4 mt-0.5 text-[#7a2541] shrink-0" aria-hidden="true" />Going on to a flight? Send the departure time and we will be honest about whether the timing works.</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#2a1019]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#2a1019] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#2a1019] mb-5">Related Routes and Services</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Doha to Riyadh private transfer', '/routes/doha-riyadh/'],
                            ['Doha to Dammam transfer', '/routes/doha-dammam/'],
                            ['Riyadh to Doha taxi', '/routes/riyadh-doha/'],
                            ['Dammam to Doha taxi', '/routes/dammam-doha/'],
                            ['Abu Samra border crossing', '/border-crossings/taxi-abu-samra-border-crossing/'],
                            ['Private intercity transfers in Saudi Arabia', '/services/intercity/'],
                            ['Pre-booked airport transfers', '/services/airport-transfers/'],
                            ['Private driver and chauffeur service', '/services/private-driver/'],
                            ['All border crossings', '/border-crossings/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#2a1019]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#2a1019] hover:border-[#7a2541] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a2541]">{l}</Link>
                        ))}
                    </div>
                    <p className="text-xs text-stone-500 mt-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Border procedures and requirements can change. Check official guidance before you travel.</p>
                </div>
            </section>
        </div>
    );
}
