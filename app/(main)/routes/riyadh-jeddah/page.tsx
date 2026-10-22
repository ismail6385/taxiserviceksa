import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Info, Users, Briefcase, Luggage, Plane, MapPin, Moon, Sun, Building2, Waves, RotateCcw } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';

const PAGE_URL = 'https://taxiserviceksa.com/routes/riyadh-jeddah/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const RUH = 'King Khalid International Airport (RUH)';
const JED = 'King Abdulaziz International Airport (JED)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I want a private car from Riyadh to Jeddah. Riyadh pickup, Jeddah drop-off, date and time, passengers, luggage and preferred vehicle: ')}`;

// Booking-system vehicle names (lib/supabase.ts) and one-way fares for this route.
const FARES = [
    { vehicle: 'Toyota Camry', short: 'Sedan', name: 'Toyota Camry sedan', price: 1500, seats: 'Up to 3 adults', bags: 'About 2 large suitcases', image: '/toyota-camry.webp', alt: 'Toyota Camry sedan used for Riyadh to Jeddah trips' },
    { vehicle: 'Hyundai Staria VIP', short: 'Staria VIP', name: 'Hyundai Staria VIP', price: 1700, seats: 'Up to 7 passengers', bags: 'About 4 large suitcases', image: '/hyundai-staria.webp', alt: 'Hyundai Staria VIP van for a family trip from Riyadh to Jeddah' },
    { vehicle: 'GMC Yukon XL / Denali', short: 'GMC Yukon XL', name: 'GMC Yukon XL', price: 2500, seats: 'Up to 7 passengers', bags: 'About 5 large suitcases', image: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', alt: 'GMC Yukon XL full-size SUV for the Riyadh to Jeddah road' },
];
const sar = (n: number) => `${n.toLocaleString('en-US')} SAR`;

const TITLE = 'Riyadh to Jeddah Taxi | Private Car & Chauffeur';
const DESCRIPTION = `Private Riyadh to Jeddah taxi, door to door. Sedan ${sar(1500)}, Staria VIP ${sar(1700)}, GMC Yukon XL ${sar(2500)} one way per vehicle. Check availability on WhatsApp.`;

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car from Riyadh to Jeddah' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

const faqs = [
    { q: 'How much is a taxi from Riyadh to Jeddah?', a: `Per vehicle, one way, Riyadh pickup to Jeddah drop-off: Toyota Camry ${sar(1500)}, Hyundai Staria VIP ${sar(1700)}, GMC Yukon XL ${sar(2500)}. These are the fares for a normal trip between the two cities; the conditions that would change them are listed on this page and agreed with you before you confirm.` },
    { q: 'Is the fare per person or per vehicle?', a: 'Per vehicle. Everyone travelling in the car is covered by the one fare.' },
    { q: 'What does the fare include?', a: 'The vehicle and driver for the journey, fuel, and normal stops for food, fuel and prayer. It does not include long waits, detours, extra pickups or a return trip unless they are agreed and priced with you.' },
    { q: 'How far is Riyadh from Jeddah by road?', a: 'About 950–970 km, depending on where in Riyadh you start and where in Jeddah you finish.' },
    { q: 'How long does it take?', a: 'Around 9–10 hours of driving, plus stops and city traffic at both ends. It is an estimate, not a guaranteed arrival time.' },
    { q: 'Can I travel overnight?', a: 'Yes. An evening pickup in Riyadh usually means arriving in Jeddah early the next morning. Tell us the pickup time you want and we will confirm whether a driver is available for it.' },
    { q: 'Can you collect me at Riyadh Airport?', a: `Yes. Choose ${RUH} as the pickup and add your flight number. The meeting point is agreed in advance and sent with the driver’s details.` },
    { q: 'Can you drop me at the Corniche, Al Hamra or Obhur?', a: 'Yes, these are all inside Jeddah and covered by the fares above. Send the hotel name or a location pin so the drop-off is exact.' },
    { q: 'Can I go straight to Jeddah Airport for a flight?', a: `Yes. ${JED} is a common drop-off. Leave a generous gap before your flight; we have a separate page for this trip.` },
    { q: 'I am going on to Makkah for Umrah. Can you take me there?', a: 'Makkah is a separate destination and is quoted separately. Only Muslims may enter Makkah. If anyone in your group is not Muslim, tell us when booking so the driver uses a suitable route.' },
    { q: 'How much luggage can I bring?', a: 'The sedan takes about two large suitcases, the Staria about four and the GMC about five, with most seats in use. Send your bag count; if it does not fit, we will tell you before you book.' },
    { q: 'Can I book a Mercedes S-Class or a larger van?', a: 'You can ask. Premium sedans and larger group vehicles are quoted on request, and the specific vehicle is confirmed for your date before the booking is final.' },
    { q: 'Can I book the return journey too?', a: 'Yes. Jeddah to Riyadh runs at the same fares. Send both dates, and say whether the driver should wait in Jeddah or whether the return is a separate trip.' },
    { q: 'When is the booking confirmed?', a: 'When we have checked a vehicle for your date and agreed the fare and pickup with you. A form or a WhatsApp message on its own is an enquiry.' },
    { q: 'What if I need to change or cancel?', a: 'Message us as early as possible. Whether a change affects the fare depends on the terms agreed with your booking, which we explain when you confirm.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Riyadh to Jeddah private car with driver',
            url: PAGE_URL,
            serviceType: 'Private long-distance transfer',
            description: 'Private door-to-door car with driver from Riyadh to Jeddah, with sedan, van and full-size SUV options.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: [{ '@type': 'City', name: 'Riyadh' }, { '@type': 'City', name: 'Jeddah' }],
            offers: FARES.map((f) => ({ '@type': 'Offer', name: `${f.name} - Riyadh to Jeddah, one way`, price: f.price, priceCurrency: 'SAR', url: PAGE_URL })),
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Routes', item: 'https://taxiserviceksa.com/routes/' },
                { '@type': 'ListItem', position: 3, name: 'Riyadh to Jeddah', item: PAGE_URL },
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
const link = 'font-semibold text-[#c2410c] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#1f2329]';
const h3 = 'text-xl font-bold text-[#1f2329]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#c2410c] px-6 py-3.5 font-bold text-white hover:bg-[#9a3412] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2410c] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#1f2329]/20 px-6 py-3.5 font-bold text-[#1f2329] hover:border-[#c2410c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2410c]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#c2410c] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

// Illustration (not a photo): Riyadh towers on the left at dusk, the long plateau road west, the Red Sea and Jeddah's fountain on the right.
function CapitalToCoast({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="rj-sky" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1f2329" />
                    <stop offset="0.55" stopColor="#3a2f2a" />
                    <stop offset="1" stopColor="#d4874e" />
                </linearGradient>
            </defs>
            <rect width="1440" height="640" fill="url(#rj-sky)" />
            <circle cx="520" cy="430" r="56" fill="#f6c27a" fillOpacity="0.3" />
            <g fill="#1f2329" fillOpacity="0.6">
                <path d="M70 516 V 384 Q 92 334 114 384 V 516 Z" />
                <rect x="128" y="444" width="18" height="72" />
                <path d="M154 516 V 364 L 166 334 L 178 364 V 516 Z" />
                <rect x="190" y="458" width="24" height="58" />
            </g>
            <path d="M0 528 C 260 516, 560 530, 860 516 C 980 510, 1060 518, 1120 522 V 640 H 0 Z" fill="#9c6a3c" fillOpacity="0.55" />
            <path d="M1100 524 C 1220 520, 1340 518, 1440 520 V 640 H 1080 Z" fill="#3b7fa0" fillOpacity="0.6" />
            {/* King Fahd's Fountain */}
            <path d="M1300 520 C 1296 470, 1300 420, 1306 360 C 1312 420, 1316 470, 1312 520 Z" fill="#f6c27a" fillOpacity="0.45" />
            <g fill="#1f2329" fillOpacity="0.5">
                <rect x="1180" y="470" width="14" height="50" />
                <rect x="1204" y="452" width="18" height="68" />
                <rect x="1360" y="462" width="16" height="58" />
            </g>
            <path d="M200 600 C 460 590, 760 576, 1000 562 C 1100 556, 1180 548, 1250 540" fill="none" stroke="#f6c27a" strokeWidth="3" strokeDasharray="14 10" strokeLinecap="round" />
        </svg>
    );
}

export default function RiyadhJeddahRoutePage() {
    return (
        <div className="riyadh-jeddah-page bg-[#f7f4ef]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#1f2329]">
                <CapitalToCoast className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1f2329] via-[#1f2329]/65 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#f6c27a] mb-4`}>Riyadh → Jeddah · Private Car</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-3">Riyadh to Jeddah Taxi – Private Long-Distance Transfer</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            From your hotel, home, office or the airport in Riyadh to your door in Jeddah, in a car reserved for your group. Pick the vehicle, tell us when you want to leave, and the fare is agreed before you travel.
                        </p>
                        <ul className="grid grid-cols-3 gap-2 mb-7 max-w-lg">
                            {FARES.map((f) => (
                                <li key={f.vehicle} className="rounded-2xl bg-white/10 border border-white/15 px-3 py-3">
                                    <span className="block text-xs text-white/70">{f.short}</span>
                                    <span className="block text-lg sm:text-xl font-black text-[#f6c27a]">{sar(f.price)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#1f2329] hover:bg-[#f7f4ef]">
                                <a href={QUOTE_HREF}>Get a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Check availability on WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                            {['Your group only', 'Day or overnight', 'One fare per car', 'Return on request'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#f6c27a] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Get your Riyadh to Jeddah quote"
                            cta="Send my request"
                            fromPlaceholder="Hotel, home, office or airport in Riyadh"
                            toPlaceholder="Hotel, home or address in Jeddah"
                            fromChips={['Riyadh city', RUH, 'Olaya', 'KAFD', 'Riyadh hotel']}
                            toChips={['Jeddah city', 'Corniche', 'Al Hamra', 'Obhur', JED]}
                            showFlight="auto"
                            returnNote="Return trip Jeddah to Riyadh also needed - dates to confirm."
                            vehicleOptions={[{ value: '', label: 'Not sure - recommend one' }, ...FARES.map((f) => ({ value: f.vehicle, label: `${f.name} - ${sar(f.price)}` }))]}
                            buttonClass="bg-[#c2410c] hover:bg-[#9a3412] focus-visible:ring-[#c2410c]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= OVERVIEW ================= */}
            <section aria-labelledby="overview" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10">
                    <div className={prose}>
                        <h2 id="overview" className={`${h2} mb-2`}>Riyadh to Jeddah by Car: The Short Version</h2>
                        <p>
                            The drive from the capital to the Red Sea is one of the longest regular road trips inside Saudi Arabia, roughly 950–970 km. With normal stops, it fills most of a day or most of a night. People who book it are rarely in a hurry. They are moving house, travelling as a family, carrying more than an airline will take, heading to a Jeddah address far from the airport, or simply prefer to leave from their own door and arrive at someone else&apos;s.
                        </p>
                        <p>
                            The car is yours for the journey. Nobody else is picked up on the way, the driver stops when you need to, and the fare is for the vehicle rather than per seat. That last point is why the road often makes sense for groups: a family of six pays one fare, not six tickets plus two airport taxis.
                        </p>
                        <p>
                            Below you will find the fares for each vehicle and what they cover, how to choose between them, how a day or night on the road goes, where we pick up in Riyadh and drop off in Jeddah, and what happens between your first message and the moment the driver arrives.
                        </p>
                    </div>
                    <aside className="lg:pt-16">
                        <dl className="rounded-3xl bg-[#1f2329] text-white p-7 space-y-4 text-sm">
                            {[
                                ['Road distance', 'About 950–970 km'],
                                ['Driving time', 'Around 9–10 hours'],
                                ['Main road', 'Highway 40, west via the Taif area'],
                                ['Departures', 'Morning, afternoon or evening'],
                                ['Fares', 'Per vehicle, one way'],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-white/60">{k}</dt>
                                    <dd className="font-semibold text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-xs text-stone-500 mt-3 px-1">Planning estimates only. Your exact addresses, traffic and stops change the total.</p>
                    </aside>
                </div>
            </section>

            {/* ================= FARES ================= */}
            <section aria-labelledby="fares" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="fares" className={`${h2} mb-3`}>Riyadh to Jeddah Taxi Fare</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        These are the fares for a one-way trip from an address in Riyadh to an address in Jeddah. They are for the whole car and include the driver, fuel and normal rest stops. If your trip is outside that, for example a pickup in Al Kharj or a long wait, we tell you the difference before you book, never after.
                    </p>
                    <div className="relative overflow-x-auto rounded-2xl border border-[#1f2329]/10 bg-white mb-8">
                        <table className="w-full min-w-[560px] text-left text-sm">
                            <thead>
                                <tr className="bg-[#1f2329] text-white">
                                    <th scope="col" className="px-4 py-3.5 font-bold">Vehicle</th>
                                    <th scope="col" className="px-4 py-3.5 font-bold">Passengers</th>
                                    <th scope="col" className="px-4 py-3.5 font-bold">Luggage</th>
                                    <th scope="col" className="px-4 py-3.5 font-bold text-right">One way</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#1f2329]/10">
                                {FARES.map((f) => (
                                    <tr key={f.vehicle}>
                                        <th scope="row" className="px-4 py-3.5 font-bold text-[#1f2329]">{f.name}</th>
                                        <td className="px-4 py-3.5 text-stone-700">{f.seats}</td>
                                        <td className="px-4 py-3.5 text-stone-700">{f.bags}</td>
                                        <td className="px-4 py-3.5 text-right font-black text-[#c2410c] whitespace-nowrap">{sar(f.price)}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <th scope="row" className="px-4 py-3.5 font-bold text-[#1f2329]">Mercedes S-Class, larger vans</th>
                                    <td className="px-4 py-3.5 text-stone-700" colSpan={2}>Depends on the vehicle supplied</td>
                                    <td className="px-4 py-3.5 text-right font-semibold text-stone-600 whitespace-nowrap">On request</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-2xl bg-white border border-[#1f2329]/10 p-6 text-stone-700">
                            <h3 className={`${h3} mb-3`}>Included</h3>
                            <ul className="space-y-2 text-sm">
                                <Tick>The vehicle, reserved for your group</Tick>
                                <Tick>The driver for the whole journey</Tick>
                                <Tick>Fuel</Tick>
                                <Tick>Normal stops for food, fuel and prayer</Tick>
                                <Tick>Pickup anywhere in Riyadh and drop-off anywhere in Jeddah</Tick>
                            </ul>
                        </div>
                        <div className="rounded-2xl bg-white border border-[#1f2329]/10 p-6 text-stone-700">
                            <h3 className={`${h3} mb-3`}>Quoted separately, if you need them</h3>
                            <ul className="space-y-2 text-sm">
                                <Tick>Pickups or drop-offs outside the two cities, such as Makkah or Taif</Tick>
                                <Tick>A second pickup or a detour on the way</Tick>
                                <Tick>The driver waiting for hours, or overnight, before a return</Tick>
                                <Tick>The return journey to Riyadh</Tick>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section aria-labelledby="vehicles" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className={`${h2} mb-3`}>Which Vehicle for Your Group?</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Count people and suitcases together. The luggage figures below assume large checked suitcases with most seats in use; the more seats are filled, the less room there is behind them. Tell us about prams, wheelchairs, boxes or sports bags so we can check they fit.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {FARES.map((f, i) => (
                            <article key={f.vehicle} className="rounded-3xl border border-[#1f2329]/10 overflow-hidden flex flex-col">
                                <div className="relative aspect-[16/10] bg-stone-100">
                                    <Image src={f.image} alt={f.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                                </div>
                                <div className="p-6 flex flex-col flex-1 text-sm text-stone-700 leading-relaxed">
                                    <h3 className={`${h3} mb-1`}>{f.name}</h3>
                                    <p className="font-black text-[#c2410c] text-2xl mb-3">{sar(f.price)}</p>
                                    <p className="mb-5">
                                        {[
                                            'For one to three adults with around two large suitcases. A fourth passenger fits on paper, but on a ten-hour drive three is far more comfortable. The most economical way to make the trip privately.',
                                            'Sliding doors and easy access make it the family favourite, especially with small children or older passengers. Up to seven people with about four large suitcases.',
                                            'The most luggage space of the three, about five large suitcases with most seats used, and a steady, quiet ride on the highway. Chosen by business travellers and groups with heavy bags.',
                                        ][i]}
                                    </p>
                                    <Link href={`/booking/?${new URLSearchParams({ from: 'Riyadh', to: 'Jeddah', vehicle: f.vehicle }).toString()}`} className={`${primary} mt-auto`}>Book the {f.short} <Arrow /></Link>
                                </div>
                            </article>
                        ))}
                    </div>
                    <p className="text-sm text-stone-600 mt-6 flex gap-2"><Info className="w-4 h-4 mt-0.5 text-[#c2410c] shrink-0" aria-hidden="true" />Need a Mercedes S-Class for a guest, or a larger van for a delegation? Ask in your request; we quote it and confirm the actual vehicle for your date.</p>
                </div>
            </section>

            {/* ================= WHEN TO LEAVE ================= */}
            <section aria-labelledby="when" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="when" className={`${h2} mb-3`}>Choosing a Departure Time</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        With nine to ten hours of driving plus stops, the time you leave Riyadh decides what kind of day you have. There is no single right answer; it depends on why you are going and what you need to do when you arrive.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { icon: Sun, t: 'Early morning', d: 'Leave Riyadh around dawn and you reach Jeddah in the late afternoon or early evening, in time for a hotel check-in and dinner. This is the most popular choice for families and first-time visitors.' },
                            { icon: Building2, t: 'Midday', d: 'Useful after a morning appointment in Riyadh or an arriving flight at RUH. Expect to reach Jeddah late at night, so warn your hotel or hosts.' },
                            { icon: Moon, t: 'Evening or overnight', d: 'Leave after work and arrive in Jeddah early the next morning. Some travellers like losing no daytime; others find it tiring. Tell us the pickup time you want and we confirm driver availability for it.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-white border border-[#1f2329]/10 p-6">
                                <Icon className="w-6 h-6 text-[#c2410c] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#1f2329] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-stone-600 mt-6">If something in Jeddah cannot move, such as a flight, a wedding or a ship departure, tell us the time and we will suggest a pickup with a sensible margin. We will not promise an exact arrival time on a road this long.</p>
                </div>
            </section>

            {/* ================= THE ROAD ================= */}
            <section aria-labelledby="road" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className={prose}>
                        <h2 id="road" className={`${h2} mb-2`}>On the Road from Riyadh to Jeddah</h2>
                        <p>
                            Getting out of Riyadh can take a while at busy times, particularly from the central and northern business districts. Once on Highway 40, the road heads west across the Najd plateau for hours of long, straight driving with little traffic outside holiday periods.
                        </p>
                        <p>
                            Towards the end, the highway reaches the Taif area and then descends from the escarpment towards the coast. That last stretch passes close to the Makkah area, which only Muslims may enter. If anyone travelling is not Muslim, mention it when you book and the driver will use a suitable route into Jeddah.
                        </p>
                        <p>
                            Expect two or three stops along the way for fuel, a meal and prayer. You can ask for a break whenever you need one. Travelling with small children or older passengers usually means more frequent stops, so let us know and the schedule allows for it.
                        </p>
                        <p>
                            In Jeddah, the final drive depends on where you are going. A hotel on the Corniche, a home in Al Hamra and a resort in Obhur in the north are all in different directions, and evening traffic can add time. For more about the road itself, see the <Link href="/distance/riyadh-to-jeddah/" className={link}>Riyadh to Jeddah distance guide</Link>.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-[#16191e] text-white p-7 md:p-10 lg:sticky lg:top-28">
                        <RouteJourney
                            vehicle
                            palette="platinum"
                            stops={[
                                { title: 'Riyadh pickup', text: 'Hotel, home, office or King Khalid International Airport.' },
                                { title: 'West on Highway 40', text: 'Out of the city, then long straight driving across the plateau.' },
                                { title: 'Rest stops', text: 'Two or three breaks for fuel, a meal and prayer.', accent: true },
                                { title: 'Taif area and the descent', text: 'Down from the escarpment towards the Red Sea coast.' },
                                { title: 'Jeddah drop-off', text: 'Corniche, Al Hamra, Obhur, any address, or King Abdulaziz International Airport.' },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ================= PICKUP + DROP-OFF ================= */}
            <section aria-labelledby="places" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="places" className={`${h2} mb-8`}>Where We Pick Up and Drop Off</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className={`rounded-3xl bg-white border border-[#1f2329]/10 p-7 ${prose}`}>
                            <h3 className={`${h3} flex items-center gap-2`}><MapPin className="w-5 h-5 text-[#c2410c]" aria-hidden="true" />Pickup in Riyadh</h3>
                            <p>
                                Any address in Riyadh: a hotel in Olaya, an office in KAFD or the Diplomatic Quarter, or a home in a residential district. Send a location pin and the name of the person travelling. Compounds and some office towers have gate procedures or a set pickup point, so tell us about those in advance.
                            </p>
                            <p>
                                <strong className="text-[#1f2329]">From {RUH}:</strong> choose the airport in the form and add your flight number. We agree the meeting point with you and send it with the driver&apos;s name and phone number. Allow time for immigration and baggage on international arrivals. If your flight changes, message us straight away and we adjust where the driver&apos;s schedule allows.
                            </p>
                        </div>
                        <div className={`rounded-3xl bg-white border border-[#1f2329]/10 p-7 ${prose}`}>
                            <h3 className={`${h3} flex items-center gap-2`}><Waves className="w-5 h-5 text-[#c2410c]" aria-hidden="true" />Drop-off in Jeddah</h3>
                            <p>
                                Anywhere in the city at the same fare: Corniche hotels, Al Hamra, Al Rawdah, the historic Al Balad district, the north of the city around Obhur, or a private home. Send the hotel&apos;s full name or a pin, and the entrance if it is a large complex.
                            </p>
                            <p>
                                <strong className="text-[#1f2329]">To {JED}:</strong> possible, with a generous gap before your flight. See <Link href="/routes/riyadh-to-jeddah-airport/" className={link}>Riyadh to Jeddah Airport</Link> for planning that trip. <strong className="text-[#1f2329]">On to Makkah or Madinah?</strong> Those are separate destinations, quoted separately.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHO + RETURN ================= */}
            <section aria-labelledby="who" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="who" className={`${h2} mb-8`}>Common Reasons People Book This Trip</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        {[
                            { icon: Luggage, t: 'Moving to Jeddah', d: 'A household’s worth of suitcases is easier in one car than through two airports. Send a full luggage list so we can confirm the vehicle.' },
                            { icon: Users, t: 'Family holidays', d: 'Summer on the Red Sea, visiting relatives, or a break by the Corniche. One fare covers everyone, with stops when the children need them.' },
                            { icon: Briefcase, t: 'Work trips', d: <>Teams travelling to Jeddah offices and the port area. Give us the arrival deadline as well as the address. Company accounts: <Link href="/services/business/" className={link}>business travel</Link>.</> },
                            { icon: Plane, t: 'Flights from Jeddah', d: 'Some international flights suit travellers better from JED. Send the departure time and we plan the pickup with a wide margin.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f7f4ef] p-6">
                                <Icon className="w-6 h-6 text-[#c2410c] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#1f2329] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start rounded-3xl bg-[#1f2329] text-white p-8">
                        <RotateCcw className="w-8 h-8 text-[#f6c27a]" aria-hidden="true" />
                        <div className="space-y-3 leading-relaxed">
                            <h3 className="text-2xl font-bold">One way or return?</h3>
                            <p className="text-white/80">
                                Most people book one way. If you also need to come back, send both dates. A return a few days or weeks later is booked as a separate <Link href="/routes/jeddah-riyadh/" className="font-semibold text-[#f6c27a] hover:underline">Jeddah to Riyadh</Link> trip at the same fares. If you want the same driver to wait in Jeddah and bring you back, that waiting time is quoted with the booking; it is never assumed to be part of a one-way fare.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= BOOKING ================= */}
            <section aria-labelledby="book" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-4`}>From Enquiry to Pickup</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Everything below happens on the form or on WhatsApp. The quickest quotes come from a first message that already has all the details, rather than several messages to work out the basics.
                    </p>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            ['You send the trip', 'Riyadh pickup, Jeddah destination, date and the time you want to leave.'],
                            ['You add the details', 'Adults, children with ages, number and size of bags, and any vehicle preference.'],
                            ['We check and quote', 'We check a vehicle for your date and send the fare and what it covers.'],
                            ['You confirm', 'Once you accept, the vehicle is reserved and the booking is confirmed.'],
                            ['Payment', 'The payment method is agreed when you confirm, for example cash to the driver or a bank transfer.'],
                            ['Driver details', 'The driver’s name and phone number and the pickup instructions are sent before the trip.'],
                            ['Changes', 'Message us early about any change; we tell you if it affects the fare under your booking terms.'],
                            ['On the day', 'Keep your phone on so the driver can reach you at the pickup.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-white border border-[#1f2329]/10 p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#c2410c] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#1f2329] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={primary}>Get a Riyadh to Jeddah quote <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> Check availability on WhatsApp</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Taxi Service KSA · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a> (call or WhatsApp). Book as early as you can for weekends and holidays.</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#1f2329]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#1f2329] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#1f2329] mb-5">More Trips from Riyadh</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Jeddah to Riyadh taxi', '/routes/jeddah-riyadh/'],
                            ['Riyadh to Jeddah Airport', '/routes/riyadh-to-jeddah-airport/'],
                            ['Riyadh to Makkah taxi', '/routes/riyadh-makkah/'],
                            ['Riyadh to Dammam taxi', '/routes/riyadh-dammam/'],
                            ['Riyadh Airport transfers', '/riyadh-airport-taxi/'],
                            ['Taxi in Jeddah', '/locations/jeddah/'],
                            ['Umrah transport', '/services/umrah-transport/'],
                            ['All intercity routes', '/routes/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#1f2329]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#1f2329] hover:border-[#c2410c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2410c]">{l}</Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
