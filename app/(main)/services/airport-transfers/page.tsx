import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, X, Info, Plane, Clock, Luggage, Languages, Moon, Baby, Globe2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import AuthorCard from '@/components/AuthorCard';

const PAGE_URL = 'https://taxiserviceksa.com/services/airport-transfers/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I want to book an airport transfer. Airport, flight number, date, destination, passengers and luggage: ')}`;

// Operating policy confirmed by the owner (2026-10-22).
const WAIT_DOMESTIC = 60;
const WAIT_INTERNATIONAL = 90;
const DELAY_HOURS = 3;

const AIRPORTS = [
    { code: 'JED', city: 'Jeddah', name: 'King Abdulaziz International Airport', href: '/jeddah-airport-transfer/', text: 'The main arrival point for Umrah pilgrims and international visitors. Most bookings go straight on to Makkah (from 300 SAR) or Madinah (from 450 SAR), or to a Jeddah hotel.', links: [['JED to Makkah', '/routes/jeddah-makkah/'], ['JED to Madinah', '/routes/jeddah-madinah/'], ['JED to Taif', '/routes/jeddah-taif/'], ['Jeddah hotels', '/locations/jeddah/']] },
    { code: 'RUH', city: 'Riyadh', name: 'King Khalid International Airport', href: '/riyadh-airport-taxi/', text: 'The capital’s airport, busy with business travel. Common drop-offs are hotels in Olaya, offices in KAFD and the Diplomatic Quarter, and homes across the city.', links: [['Riyadh Airport taxi', '/riyadh-airport-taxi/'], ['Riyadh transfers', '/locations/riyadh/'], ['Flights disrupted? Other airports', '/riyadh-alternative-airports/']] },
    { code: 'DMM', city: 'Dammam', name: 'King Fahd International Airport', href: '/dammam-airport-taxi/', text: 'Serves Dammam, Al Khobar and Dhahran. The same car can also take you over the King Fahd Causeway to Bahrain.', links: [['Dammam Airport taxi', '/dammam-airport-taxi/'], ['DMM to Bahrain Airport', '/routes/dammam-airport-to-bahrain-airport-taxi/'], ['Dammam transfers', '/locations/dammam/']] },
    { code: 'MED', city: 'Madinah', name: 'Prince Mohammad bin Abdulaziz International Airport', href: '/madinah-airport-taxi/', text: 'For hotels around the Prophet’s Mosque and the rest of Madinah, and onward trips to Makkah.', links: [['Madinah Airport taxi', '/madinah-airport-taxi/'], ['Madinah to Makkah', '/routes/madinah-makkah/'], ['Madinah transfers', '/locations/madinah/']] },
    { code: 'TIF', city: 'Taif', name: 'Taif International Airport', href: '/locations/taif/', text: 'For Taif hotels, Al Hada and Al Shafa, and trips down to Jeddah or Makkah.', links: [['Taif transfers', '/locations/taif/'], ['Taif and Jeddah', '/routes/jeddah-taif/']] },
    { code: 'YNB', city: 'Yanbu', name: 'Prince Abdul Mohsin bin Abdulaziz Airport', href: '/locations/yanbu/', text: 'For Yanbu’s hotels, industrial city and coast, and onward trips to Madinah.', links: [['Yanbu transfers', '/locations/yanbu/']] },
    { code: 'TUU', city: 'Tabuk', name: 'Tabuk Regional Airport', href: '/tabuk-airport-taxi/', text: 'For Tabuk city and the wider northwest. Tell us if your destination is outside the city.', links: [['Tabuk Airport taxi', '/tabuk-airport-taxi/'], ['Tabuk transfers', '/locations/tabuk/']] },
    { code: 'ULH', city: 'AlUla', name: 'AlUla International Airport', href: '/locations/alula/', text: 'For AlUla’s resorts and hotels. A sightseeing day with several stops is booked differently from a transfer; send your plan.', links: [['AlUla transfers', '/locations/alula/']] },
];

const VEHICLES = [
    { name: 'Toyota Camry', seats: '1–3 passengers', bags: 'About 2 large suitcases', img: '/toyota-camry.webp', href: '/fleet/toyota-camry/' },
    { name: 'Hyundai Staria VIP', seats: 'Up to 7 passengers', bags: 'About 4 large suitcases', img: '/hyundai-staria.webp', href: '/fleet/hyundai-staria-vip/' },
    { name: 'GMC Yukon XL', seats: 'Up to 7 passengers', bags: 'About 5 large suitcases', img: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', href: '/fleet/gmc-yukon-xl/' },
    { name: 'Toyota Hiace', seats: '8–11 passengers', bags: 'Room for a group’s luggage', img: '/toyota-hiace.webp', href: '/fleet/toyota-hiace/' },
];

const TITLE = 'Private Airport Transfers Saudi Arabia | Taxi Service KSA';
const DESCRIPTION = `Pre-booked private airport transfers at 8 Saudi airports. Flight tracking, ${WAIT_DOMESTIC}–${WAIT_INTERNATIONAL} min free waiting, English and Arabic speaking drivers, sedans, SUVs and group vans.`;

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: PAGE_URL,
        languages: {
            'en': PAGE_URL,
            'ar': 'https://taxiserviceksa.com/ar/services/airport-transfers/',
            'ur': 'https://taxiserviceksa.com/ur/services/airport-transfers/',
            'x-default': PAGE_URL,
        },
    },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private airport transfer in Saudi Arabia' }],
    },
};

const faqs = [
    { q: 'Which airports do you cover?', a: 'Jeddah (JED), Riyadh (RUH), Dammam (DMM), Madinah (MED), Taif (TIF), Yanbu (YNB), Tabuk (TUU) and AlUla (ULH).' },
    { q: 'How much free waiting time is included?', a: `${WAIT_DOMESTIC} minutes after landing for domestic flights and ${WAIT_INTERNATIONAL} minutes for international flights, counted from the actual landing time. If you think you will need longer, tell us and we confirm any extra waiting charge in advance.` },
    { q: 'What if my flight is delayed?', a: `We track your flight using the flight number, so the waiting time starts when you actually land. A delay of up to ${DELAY_HOURS} hours costs nothing extra. For longer delays, cancellations or a change of flight, message us on WhatsApp and we rearrange the pickup.` },
    { q: 'Where will I meet the driver?', a: 'It depends on the airport and terminal. Your confirmation gives the exact meeting point and the driver’s phone number. At Jeddah Terminal 1, for example, the usual point is near the Aquarium in the arrivals hall.' },
    { q: 'Do the drivers speak English?', a: 'Yes. Our drivers speak English and Arabic. If you would prefer an Urdu-speaking driver, ask when booking and we will try to arrange one.' },
    { q: 'Can I book a pickup in the middle of the night?', a: 'Yes, pickups run 24 hours a day. For flights landing between midnight and 5 am, please book at least 24–48 hours ahead.' },
    { q: 'How much does an airport transfer cost?', a: 'It depends on the airport, the destination and the vehicle. For example, Jeddah Airport to Makkah starts from 300 SAR. Send your destination for a quote; the fare is per vehicle and agreed before you book.' },
    { q: 'Are child seats available?', a: 'You can request one when booking. Tell us the child’s age and we confirm availability and any charge before your trip.' },
    { q: 'Can you carry extra or oversized luggage?', a: 'Yes, if it fits the vehicle. Tell us the number of bags and describe anything unusual such as golf bags or a wheelchair; we may suggest an SUV or van instead of a sedan.' },
    { q: 'Is a pre-booked transfer better than Uber or Careem?', a: 'It depends. App rides suit people who are happy to request a car after landing. A pre-booked transfer suits families and groups who want the vehicle size, price and meeting point agreed in advance, and travellers going on to another city.' },
    { q: 'Can I go straight from the airport to another city?', a: 'Yes. Jeddah Airport to Makkah or Madinah and Madinah Airport to Makkah are the most common. Each route has its own page with fares.' },
    { q: 'Can you take me from Dammam Airport to Bahrain?', a: 'Yes. The same car drives you across the King Fahd Causeway. Every passenger needs the documents to leave Saudi Arabia and enter Bahrain, so check those before booking.' },
    { q: 'Can I book my departure transfer too?', a: 'Yes. Send your flight time and pickup address; we suggest a pickup time that leaves room for traffic and check-in. The return fare is quoted for its own route.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Service',
            '@id': `${PAGE_URL}#service`,
            name: 'Private airport transfers in Saudi Arabia',
            serviceType: 'Airport transfer',
            url: PAGE_URL,
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
            availableChannel: { '@type': 'ServiceChannel', serviceUrl: PAGE_URL, servicePhone: PHONE },
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://taxiserviceksa.com/services/' },
                { '@type': 'ListItem', position: 3, name: 'Airport Transfers', item: PAGE_URL },
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
const link = 'font-semibold text-[#4338ca] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#151a3d]';
const h3 = 'text-xl font-bold text-[#151a3d]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#4338ca] px-6 py-3.5 font-bold text-white hover:bg-[#3730a3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4338ca] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#151a3d]/20 px-6 py-3.5 font-bold text-[#151a3d] hover:border-[#4338ca] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4338ca]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#4338ca] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function AirportTransfersPage() {
    return (
        <div className="airport-hub bg-[#f5f5fa]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#151a3d]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#3b3f8f_0%,_#151a3d_60%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#fcd34d] mb-4`}>8 Saudi airports · Pre-booked</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Private Airport Transfer Service in Saudi Arabia</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            Book before you fly and a driver will be waiting when you land, at Jeddah, Riyadh, Dammam, Madinah, Taif, Yanbu, Tabuk or AlUla. To your hotel, your home, or straight on to another city.
                        </p>
                        <ul className="grid grid-cols-2 gap-2 mb-7 max-w-lg text-sm">
                            {[
                                [Plane, 'Flight tracked'],
                                [Clock, `${WAIT_DOMESTIC}–${WAIT_INTERNATIONAL} min free waiting`],
                                [Languages, 'English & Arabic drivers'],
                                [Moon, '24/7 pickups'],
                            ].map(([Icon, t]) => {
                                const I = Icon as typeof Plane;
                                return <li key={t as string} className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-3 py-2.5"><I className="w-4 h-4 text-[#fcd34d] shrink-0" aria-hidden="true" />{t as string}</li>;
                            })}
                        </ul>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#151a3d] hover:bg-[#f5f5fa]">
                                <a href={QUOTE_HREF}>Get a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Book your airport pickup"
                            cta="Send my request"
                            fromPlaceholder="Airport (e.g. Jeddah Airport JED)"
                            toPlaceholder="Hotel, home or city"
                            fromChips={['Jeddah Airport (JED)', 'Riyadh Airport (RUH)', 'Dammam Airport (DMM)', 'Madinah Airport (MED)']}
                            toChips={['Makkah hotel', 'Madinah hotel', 'City hotel', 'Home address']}
                            showFlight={true}
                            returnNote="Departure transfer back to the airport also needed - date to confirm."
                            buttonClass="bg-[#4338ca] hover:bg-[#3730a3] focus-visible:ring-[#4338ca]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= HOW IT WORKS ================= */}
            <section aria-labelledby="how" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="how" className={`${h2} mb-8`}>How an Airport Pickup Works</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            ['You book before you fly', 'Send the airport, flight number, date, destination, passengers and bags. We confirm the vehicle and the fare.'],
                            ['We watch your flight', `Using your flight number we follow the arrival, so the driver is there for the real landing time. Delays of up to ${DELAY_HOURS} hours cost nothing extra.`],
                            ['You meet the driver', 'Your confirmation gives the meeting point for your airport and terminal, and the driver’s phone number.'],
                            ['Straight to your door', 'The car is yours alone: to a hotel, a home, an office, or on to another city.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-[#f5f5fa] p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#4338ca] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#151a3d] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ================= WAITING + DELAYS ================= */}
            <section aria-labelledby="waiting" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div className={prose}>
                        <Clock className="w-7 h-7 text-[#4338ca]" aria-hidden="true" />
                        <h2 id="waiting" className={`${h2} mb-2`}>Waiting Time and Flight Delays</h2>
                        <p>
                            Two separate things protect you on arrival day, and it helps to know which is which.
                        </p>
                        <p>
                            <strong className="text-[#151a3d]">Flight delays.</strong> We follow your flight by its number. If it lands late, the pickup simply moves with it; delays of up to {DELAY_HOURS} hours cost nothing extra. If the delay is longer, or the flight is cancelled or changed, message us on WhatsApp and we rearrange the pickup.
                        </p>
                        <p>
                            <strong className="text-[#151a3d]">Waiting after landing.</strong> From the moment your plane actually lands, the driver waits {WAIT_DOMESTIC} minutes for a domestic flight and {WAIT_INTERNATIONAL} minutes for an international one at no charge. That is normally enough for immigration and baggage. If you expect to be slower, for example with a large group or special assistance, tell us and we agree any extra waiting in advance.
                        </p>
                        <p>
                            Pickups run around the clock. For flights landing between midnight and 5 am, please book at least 24–48 hours ahead so a driver is lined up.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-[#151a3d] text-white p-8 space-y-4">
                        <h3 className="text-xl font-bold">At a glance</h3>
                        <dl className="space-y-3 text-sm">
                            {[
                                ['Free waiting, domestic', `${WAIT_DOMESTIC} min after landing`],
                                ['Free waiting, international', `${WAIT_INTERNATIONAL} min after landing`],
                                ['Flight delays', `Up to ${DELAY_HOURS} hours, no extra charge`],
                                ['Pickup hours', '24/7; book ahead for 12–5 am'],
                                ['Driver languages', 'English and Arabic'],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-white/60">{k}</dt>
                                    <dd className="font-semibold text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>

            {/* ================= AIRPORTS ================= */}
            <section id="airports" aria-labelledby="airports-h" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
                <div className="max-w-6xl mx-auto">
                    <h2 id="airports-h" className={`${h2} mb-3`}>Airports We Serve</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">Each airport has its own page with local destinations, fares and meeting details.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {AIRPORTS.map((a) => (
                            <article key={a.code} className="rounded-3xl bg-[#f5f5fa] p-7 flex flex-col">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="inline-flex h-12 w-14 items-center justify-center rounded-xl bg-[#151a3d] text-white font-black">{a.code}</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#151a3d] leading-tight">{a.city}</h3>
                                        <p className="text-xs text-stone-500">{a.name}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-stone-700 leading-relaxed mb-4">{a.text}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {a.links.map(([l, h]) => (
                                        <Link key={h + l} href={h} className="rounded-full border border-[#151a3d]/15 bg-white px-3 py-1.5 text-xs font-semibold text-[#151a3d] hover:border-[#4338ca]">{l}</Link>
                                    ))}
                                </div>
                                <Link href={a.href} className="group mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-[#4338ca]">{a.city} airport transfers <Arrow /></Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section id="vehicles" aria-labelledby="vehicles-h" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles-h" className={`${h2} mb-3`}>Choosing a Vehicle</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Count people and suitcases together: a seven-seat vehicle with every seat used has less room behind. The figures below are a planning guide for large checked suitcases; tell us your real numbers and we confirm the fit.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {VEHICLES.map((v) => (
                            <Link key={v.name} href={v.href} className="rounded-3xl border border-[#151a3d]/10 bg-white overflow-hidden hover:border-[#4338ca] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4338ca]">
                                <div className="relative aspect-[16/10] bg-stone-100">
                                    <Image src={v.img} alt={`${v.name} for airport transfers in Saudi Arabia`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-[#151a3d]">{v.name}</h3>
                                    <p className="text-sm text-stone-600">{v.seats}</p>
                                    <p className="text-sm text-stone-600 flex gap-1.5"><Luggage className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />{v.bags}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <p className="text-sm text-stone-600 mt-6">Bigger groups: a Mercedes Sprinter (seats depend on the configuration) or two vehicles together, quoted on request. Premium cars such as a Mercedes S-Class or Cadillac Escalade are also available on request. <Link href="/fleet/" className={link}>Compare all vehicles</Link>.</p>
                </div>
            </section>

            {/* ================= FARES + INCLUDED ================= */}
            <section aria-labelledby="fare" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="fare" className={`${h2} mb-3`}>Fares: What Is and Isn&apos;t Included</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Fares depend on the airport, your destination and the vehicle, so we quote each booking for the whole vehicle before you confirm. Once agreed, the fare stays the same unless the trip changes. For example, Jeddah Airport to a Makkah hotel starts from 300 SAR; each airport and route page shows its own fares.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-3xl bg-[#f5f5fa] p-7">
                            <h3 className={`${h3} mb-4`}>Included</h3>
                            <ul className="space-y-2 text-stone-700">
                                <Tick>A private vehicle for your group</Tick>
                                <Tick>Flight tracking, and delays of up to {DELAY_HOURS} hours</Tick>
                                <Tick>{WAIT_DOMESTIC} or {WAIT_INTERNATIONAL} minutes free waiting after landing</Tick>
                                <Tick>Fuel, and the drive to the address in your quote</Tick>
                                <Tick>Driver’s phone number and meeting instructions in advance</Tick>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-[#f5f5fa] p-7">
                            <h3 className={`${h3} mb-4`}>Quoted separately, only if needed</h3>
                            <ul className="space-y-2 text-stone-700">
                                {['Waiting beyond the free allowance', 'Extra stops or a change of destination', 'Child seats, on request', 'Trips to another city or across the Bahrain causeway', 'Departure transfers back to the airport'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SPECIAL CASES ================= */}
            <section aria-label="Special requests" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="rounded-3xl bg-white border border-[#151a3d]/10 p-7">
                        <Plane className="w-7 h-7 text-[#4338ca] mb-3" aria-hidden="true" />
                        <h2 className="text-xl font-bold text-[#151a3d] mb-2">Airport to another city</h2>
                        <p className="text-sm text-stone-600 leading-relaxed">Many travellers go straight from the arrivals hall to another city: Jeddah Airport to Makkah or Madinah, Madinah Airport to Makkah. Those trips are priced as intercity routes. <Link href="/services/intercity/" className={link}>Intercity transfers</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#151a3d]/10 p-7">
                        <Globe2 className="w-7 h-7 text-[#4338ca] mb-3" aria-hidden="true" />
                        <h2 className="text-xl font-bold text-[#151a3d] mb-2">Dammam Airport to Bahrain</h2>
                        <p className="text-sm text-stone-600 leading-relaxed">The same car drives you from DMM over the King Fahd Causeway into Bahrain. It is an international border: every passenger needs the documents to leave Saudi Arabia and enter Bahrain. <Link href="/routes/dammam-airport-to-bahrain-airport-taxi/" className={link}>DMM to Bahrain</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#151a3d]/10 p-7">
                        <Baby className="w-7 h-7 text-[#4338ca] mb-3" aria-hidden="true" />
                        <h2 className="text-xl font-bold text-[#151a3d] mb-2">Children and extra luggage</h2>
                        <p className="text-sm text-stone-600 leading-relaxed">Child seats can be requested; tell us the child&apos;s age and we confirm availability and any charge. For oversized items such as golf bags, prams or a wheelchair, describe them so we send a vehicle they fit in.</p>
                    </div>
                </div>
            </section>

            {/* ================= WHAT TO SEND ================= */}
            <section aria-labelledby="send" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className={prose}>
                        <h2 id="send" className={`${h2} mb-2`}>What to Send When You Book</h2>
                        <p>One message with everything below gets the fastest quote. For a departure, also tell us your flight time and pickup address, and we suggest when to leave.</p>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a href={QUOTE_HREF} className={primary}>Get a quote <Arrow /></a>
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> Book via WhatsApp</a>
                        </div>
                        <p className="text-sm">Taxi Service KSA · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a> · <a href="mailto:info@taxiserviceksa.com" className={link}>info@taxiserviceksa.com</a> for group or custom requests</p>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {['Airport and flight number', 'Arrival date and time', 'Terminal, if you know it', 'Destination address or hotel', 'Number of passengers', 'Number and size of bags', 'Preferred vehicle', 'Child seat or special needs'].map((x) => (
                            <li key={x} className="flex gap-3 rounded-xl bg-[#f5f5fa] p-4"><Check className="w-5 h-5 mt-0.5 text-[#4338ca] shrink-0" aria-hidden="true" /><span className="font-semibold text-[#151a3d]">{x}</span></li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#151a3d]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#151a3d] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= GUIDES + RELATED + AUTHOR ================= */}
            <section aria-labelledby="guides" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    <div>
                        <h2 id="guides" className="text-2xl md:text-3xl font-extrabold text-[#151a3d] mb-5">Airport Guides and Related Services</h2>
                        <div className="flex flex-wrap gap-2">
                            {[
                                ['Jeddah Airport guide (JED)', '/guides/jeddah-airport-guide/'],
                                ['Jeddah Airport to Makkah fare guide', '/blog/jeddah-airport-makkah-taxi-fare-2026/'],
                                ['Riyadh Airport to the city', '/blog/how-to-get-from-riyadh-airport-to-city/'],
                                ['Taxi fare from Riyadh Airport', '/blog/how-much-is-taxi-from-riyadh-airport/'],
                                ['Madinah Airport transfer guide', '/blog/madinah-airport-taxi-transfer-guide/'],
                                ['Dammam Airport to the city', '/blog/how-to-get-from-dammam-airport-to-city/'],
                                ['Tabuk Airport to the city', '/blog/how-to-get-from-tabuk-airport-to-city/'],
                                ['VIP airport lounges in Saudi Arabia', '/blog/vip-airport-lounges-saudi-arabia-guide-2026/'],
                                ['Riyadh hotel transfers', '/services/riyadh-hotel-transfer/'],
                                ['VIP chauffeur', '/services/vip-chauffeur/'],
                                ['Bilingual chauffeur', '/services/bilingual-chauffeur/'],
                                ['Women’s private transport', '/services/women-transport/'],
                                ['Toyota Hiace group hire', '/services/group-hiace-hire/'],
                                ['Private intercity taxi', '/services/intercity/'],
                            ].map(([l, h]) => (
                                <Link key={h} href={h} className="rounded-full border border-[#151a3d]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#151a3d] hover:border-[#4338ca] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4338ca]">{l}</Link>
                            ))}
                        </div>
                        <p className="text-xs text-stone-500 mt-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Airport procedures and meeting points can change. Always follow the instructions in your booking confirmation.</p>
                    </div>
                    <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-indigo-50" />
                </div>
            </section>
        </div>
    );
}
