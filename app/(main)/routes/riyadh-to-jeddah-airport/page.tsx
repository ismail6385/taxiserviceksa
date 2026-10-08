import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Info, CalendarClock, Moon, Coffee, Luggage } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';

const PAGE_URL = 'https://taxiserviceksa.com/routes/riyadh-to-jeddah-airport/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const JED = 'King Abdulaziz International Airport (JED)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need a car from Riyadh to Jeddah Airport (JED). Pickup address, date, flight time, passengers and luggage: ')}`;

// Owner-confirmed Riyadh <-> Jeddah fares (per vehicle, one way); the airport is in Jeddah, so the same fares apply.
const FARES = [
    { name: 'Sedan (Toyota Camry)', booking: 'Toyota Camry', price: 1000, seats: 'Up to 3–4 passengers · about 2 suitcases', image: '/toyota-camry.webp', alt: 'Toyota Camry for a Riyadh to Jeddah Airport transfer' },
    { name: 'Hyundai Staria VIP', booking: 'Hyundai Staria VIP', price: 1600, seats: 'Up to 7 passengers · about 4 suitcases', image: '/hyundai-staria.webp', alt: 'Hyundai Staria VIP van driving a family to Jeddah Airport' },
    { name: 'GMC Yukon XL', booking: 'GMC Yukon XL / Denali', price: 2000, seats: 'Up to 6–7 passengers · about 4–5 suitcases', image: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', alt: 'GMC Yukon XL private car from Riyadh to King Abdulaziz International Airport' },
    { name: 'Mercedes S-Class', booking: 'Mercedes S-Class', price: 3500, seats: 'Up to 3 passengers · 2 suitcases', image: '/fleet/mercedes-s-class-vip-chauffeur-service-saudi.webp', alt: 'Mercedes S-Class executive transfer to Jeddah Airport' },
    { name: 'Mercedes Sprinter', booking: 'Mercedes Sprinter', price: 4000, seats: 'Up to 14 passengers', image: '/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp', alt: 'Mercedes Sprinter group van from Riyadh to Jeddah Airport' },
] as const;
const sar = (n: number) => `${n.toLocaleString('en-US')} SAR`;
const book = (vehicle: string) => `/booking/?${new URLSearchParams({ from: 'Riyadh', to: JED, vehicle }).toString()}`;

const TITLE = 'Riyadh to Jeddah Airport Taxi | JED Transfer from 1,000 SAR';
const DESCRIPTION = 'Private car from Riyadh to King Abdulaziz International Airport (JED). Sedan 1,000 SAR, Staria VIP 1,600 SAR, GMC 2,000 SAR. Pickup timed around your flight.';

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car from Riyadh to Jeddah Airport' }],
    },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['https://taxiserviceksa.com/og-image.jpg'] },
};

const faqs = [
    { q: 'How much is a taxi from Riyadh to Jeddah Airport?', a: 'Sedan 1,000 SAR, Hyundai Staria VIP 1,600 SAR, GMC Yukon XL 2,000 SAR, Mercedes S-Class 3,500 SAR and Mercedes Sprinter 4,000 SAR, one way per vehicle.' },
    { q: 'How long does Riyadh to Jeddah Airport take by car?', a: 'Roughly 9–11 hours of driving, plus stops. It is a full day on the road, so for most flights the car leaves Riyadh very early or the night before.' },
    { q: 'How far is Jeddah Airport from Riyadh?', a: 'About 950–1,000 km by road, depending on where in Riyadh you start.' },
    { q: 'Do I need a visa to drive from Riyadh to Jeddah Airport?', a: 'No. It is a domestic trip inside Saudi Arabia, with no border crossing.' },
    { q: 'Can we drive overnight?', a: 'Yes. Many passengers leave Riyadh in the evening or at night to reach Jeddah for a morning flight. Tell us your flight time and we will suggest when to leave.' },
    { q: 'Can we stop on the way?', a: 'Yes. On a drive this long, plan for stops for food, fuel and prayer. They are included in the pickup time we suggest.' },
    { q: 'Is the price per person?', a: 'No. Every fare is for the whole vehicle.' },
    { q: 'My flight from Riyadh was cancelled. Is Jeddah my best option?', a: 'It depends where the airline can rebook you. Dammam is much closer; Jeddah has a wide choice of flights. Compare all the options on our page about airports you can reach from Riyadh.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Riyadh to Jeddah Airport private transfer',
            url: PAGE_URL,
            serviceType: 'Private airport transfer',
            description: `Private car with driver from Riyadh to ${JED}.`,
            provider: { '@id': 'https://taxiserviceksa.com/#organization' },
            areaServed: [{ '@type': 'City', name: 'Riyadh' }, { '@type': 'City', name: 'Jeddah' }],
            offers: FARES.map((f) => ({ '@type': 'Offer', name: `${f.name} - Riyadh to Jeddah Airport, one way`, price: f.price, priceCurrency: 'SAR', url: PAGE_URL })),
        },
        {
            '@type': 'Organization',
            '@id': 'https://taxiserviceksa.com/#organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
            telephone: PHONE,
            areaServed: 'Saudi Arabia',
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const h2 = 'text-3xl md:text-4xl font-extrabold text-[#1c2b22]';
const link = 'font-semibold text-[#2e6b4f] underline-offset-2 hover:underline';
const card = 'rounded-2xl bg-white border border-[#1c2b22]/10';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

export default function RiyadhToJeddahAirportPage() {
    return (
        <div className="riyadh-jed-page bg-[#f4f5f1]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="bg-gradient-to-br from-[#1c2b22] via-[#24392d] to-[#3d5a47] text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="min-w-0 lg:pt-6">
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e6c77a] mb-4">Riyadh → King Abdulaziz International Airport</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5">Riyadh to Jeddah Airport Taxi</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            A private car across the Kingdom, from your door in Riyadh to the departures area at Jeddah&apos;s King Abdulaziz International Airport (JED). No border, no visa, and a departure time worked out from your flight.
                        </p>
                        <ul className="grid grid-cols-3 gap-2 mb-7 max-w-md">
                            {FARES.slice(0, 3).map((f, i) => (
                                <li key={f.name} className={`rounded-xl px-3 py-3 ${i === 2 ? 'bg-[#e6c77a] text-[#1c2b22]' : 'bg-white/10 border border-white/20'}`}>
                                    <span className="block text-[11px] font-semibold opacity-80 leading-tight">{f.name.split(' (')[0]}</span>
                                    <span className="block text-lg font-black">{sar(f.price)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-5">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#e6c77a] text-[#1c2b22] hover:bg-[#efd79b]">
                                <a href={QUOTE_HREF}>Book Riyadh → JED <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Your Flight Time</a>
                            </Button>
                        </div>
                        <p className="text-sm text-white/60">Per vehicle • One way • About 950–1,000 km</p>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Book your ride to Jeddah Airport"
                            cta="Book Riyadh → Jeddah Airport"
                            fromPlaceholder="Home, hotel or office in Riyadh"
                            toPlaceholder="King Abdulaziz International Airport (JED)"
                            fromChips={['Riyadh city', 'Riyadh hotel', 'King Khalid International Airport (RUH)']}
                            toChips={[JED]}
                            showFlight
                            returnNote="Return trip Jeddah Airport to Riyadh also needed - arrival flight to follow."
                            vehicleOptions={[{ value: '', label: 'Not sure - recommend one' }, ...FARES.map((f) => ({ value: f.booking, label: `${f.name} - ${sar(f.price)}` }))]}
                            buttonClass="bg-[#2e6b4f] hover:bg-[#24573f] focus-visible:ring-[#2e6b4f]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section aria-labelledby="intro" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10">
                    <div className="space-y-5 text-stone-700 leading-relaxed text-[1.05rem]">
                        <h2 id="intro" className={`${h2} mb-2`}>Driving from Riyadh to King Abdulaziz International Airport</h2>
                        <p>
                            Jeddah&apos;s airport is the other side of the country from Riyadh: about 950–1,000 km west along the main highway. That makes it a long drive, but a straightforward one. There is no border to cross and no visa to arrange, and Jeddah has one of the widest choices of domestic and international flights in Saudi Arabia.
                        </p>
                        <p>
                            Expect roughly 9–11 hours of driving, plus stops. For a morning or midday flight, most people leave Riyadh the evening before and travel through the night; for a late flight, an early-morning start usually works. We suggest a departure time once we know your flight.
                        </p>
                        <p>
                            The car is yours alone for the whole trip. A sedan is enough for one or two people; families usually take the Staria VIP or the GMC so everyone can rest properly on a drive this long. If your flight from Riyadh was cancelled and you are weighing up where to fly from instead, <Link href="/riyadh-alternative-airports/" className={link}>compare all the airports you can reach from Riyadh</Link>. For a trip to Jeddah city rather than the airport, see <Link href="/routes/riyadh-jeddah/" className={link}>Riyadh to Jeddah</Link>.
                        </p>
                    </div>
                    <aside className="lg:pt-16">
                        <dl className="rounded-3xl bg-[#1c2b22] text-white p-7 space-y-4 text-sm">
                            {[['Distance', 'About 950–1,000 km'], ['Driving', 'Around 9–11 hours'], ['Border', 'None'], ['Visa', 'Not needed'], ['From', sar(1000)]].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-white/60">{k}</dt>
                                    <dd className="font-semibold text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                    </aside>
                </div>
            </section>

            {/* ================= PRICES ================= */}
            <section aria-labelledby="prices" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="prices" className={`${h2} mb-3`}>Riyadh to Jeddah Airport Taxi Prices</h2>
                    <p className="text-stone-600 mb-8">Private vehicle • One way • Riyadh address to JED departures. The price is for the car, not per person.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {FARES.map((f) => (
                            <article key={f.name} className={`${card} overflow-hidden flex flex-col`}>
                                <div className="relative aspect-[16/10] bg-[#e7ebe3]">
                                    <Image src={f.image} alt={f.alt} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-[#1c2b22]">{f.name}</h3>
                                    <p className="text-2xl font-black text-[#2e6b4f] mt-1">{sar(f.price)}</p>
                                    <p className="text-sm text-stone-600 mt-2 flex-1">{f.seats}</p>
                                    <Link href={book(f.booking)} className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#1c2b22] hover:text-[#2e6b4f]">Book this vehicle <Arrow /></Link>
                                </div>
                            </article>
                        ))}
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Pickups outside Riyadh, detours or long waits that were not agreed are quoted separately. Vehicle availability is confirmed for your date.</p>
                </div>
            </section>

            {/* ================= TIMING ================= */}
            <section aria-labelledby="timing" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <CalendarClock className="w-7 h-7 text-[#2e6b4f] mb-4" aria-hidden="true" />
                    <h2 id="timing" className={`${h2} mb-8`}>Planning the Drive Around Your Flight</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {[
                            { icon: Moon, t: 'Morning flight', d: 'Leave Riyadh the evening before and drive overnight, arriving with time for check-in.' },
                            { icon: Coffee, t: 'Afternoon or evening flight', d: 'An early-morning start from Riyadh, with stops for breakfast and prayer on the way.' },
                            { icon: Luggage, t: 'Before you leave', d: 'Check in online if your airline allows it, and keep passports and boarding passes in the cabin, not the boot.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f4f5f1] p-6">
                                <Icon className="w-6 h-6 text-[#2e6b4f] mb-3" aria-hidden="true" />
                                <h3 className="text-[#1c2b22] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="flex gap-3 rounded-xl bg-[#f4f5f1] p-4 text-sm text-stone-700"><Info className="w-4 h-4 mt-0.5 text-[#2e6b4f] shrink-0" aria-hidden="true" />Driving times are estimates and we cannot guarantee an arrival time. Use your airline&apos;s own check-in times and leave a margin.</p>
                </div>
            </section>

            {/* ================= INCLUDED + BOOK ================= */}
            <section aria-labelledby="book" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className={`${card} p-7`}>
                        <h2 className="text-2xl font-extrabold text-[#1c2b22] mb-4">What You Get</h2>
                        <ul className="space-y-2.5 text-sm text-stone-700">
                            {['Private car and driver for your group only', 'Pickup at your Riyadh address', 'Drop-off at JED departures', 'Stops for food, fuel and prayer on the way', 'Help with luggage at both ends'].map((x) => (
                                <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#2e6b4f] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl bg-[#1c2b22] text-white p-7">
                        <h2 id="book" className="text-2xl font-extrabold mb-4">How to Book</h2>
                        <ol className="space-y-3 text-sm text-white/85 mb-6">
                            {['Send your Riyadh address, flight number and departure time, passengers and bags.', 'We suggest a departure time and the vehicle that fits.', 'Confirm, and receive the driver details before the trip.'].map((x, i) => (
                                <li key={x} className="flex gap-3"><span className="inline-flex w-6 h-6 shrink-0 items-center justify-center rounded-full bg-[#e6c77a] text-[#1c2b22] text-xs font-black" aria-hidden="true">{i + 1}</span>{x}</li>
                            ))}
                        </ol>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href={QUOTE_HREF} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#e6c77a] px-5 py-3 font-bold text-[#1c2b22] hover:bg-[#efd79b]">Book Riyadh → Jeddah Airport <Arrow /></a>
                            <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 font-bold hover:bg-white/10">+966 57 580 6733</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#1c2b22]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#1c2b22] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#1c2b22] mb-5">Related Transfers</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Airports you can reach from Riyadh', '/riyadh-alternative-airports/'],
                            ['Riyadh to Dammam Airport', '/routes/riyadh-to-dammam-airport/'],
                            ['Riyadh to Jeddah city', '/routes/riyadh-jeddah/'],
                            ['Jeddah Airport transfers', '/jeddah-airport-transfer/'],
                            ['Riyadh Airport taxi', '/riyadh-airport-taxi/'],
                            ['Intercity transfers', '/services/intercity/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#1c2b22]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#1c2b22] hover:border-[#2e6b4f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e6b4f]">{l}</Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
