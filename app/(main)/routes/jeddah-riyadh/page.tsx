import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Info, Users, Briefcase, Luggage, Home, Plane, ShieldCheck, Clock, Building2, Coffee, Route } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';

const PAGE_URL = 'https://taxiserviceksa.com/routes/jeddah-riyadh/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const JED = 'King Abdulaziz International Airport (JED)';
const RUH = 'King Khalid International Airport (RUH)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I want a private car from Jeddah to Riyadh. Pickup in Jeddah, Riyadh drop-off, date and time, passengers, luggage and preferred vehicle: ')}`;

// Booking-system vehicle names (lib/supabase.ts) and one-way fares for this route.
const FARES = [
    { vehicle: 'Toyota Camry', name: 'Sedan (Toyota Camry or similar)', price: 1500, seats: 'Up to 3 adults', bags: 'About 2 large suitcases', image: '/toyota-camry.webp', alt: 'Toyota Camry sedan for a Jeddah to Riyadh transfer', fit: 'One to three travellers with normal luggage.' },
    { vehicle: 'Hyundai Staria VIP', name: 'Hyundai Staria VIP van', price: 1700, seats: 'Up to 7 passengers', bags: 'About 4 large suitcases', image: '/hyundai-staria.webp', alt: 'Hyundai Staria VIP van for families travelling Jeddah to Riyadh', fit: 'Families who want easy access and room to move.' },
    { vehicle: 'GMC Yukon XL / Denali', name: 'GMC Yukon XL (full-size SUV)', price: 2500, seats: 'Up to 7 passengers', bags: 'About 5 large suitcases', image: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', alt: 'GMC Yukon XL SUV for a private Jeddah to Riyadh trip', fit: 'Groups, business travellers and heavier luggage.' },
];
const sar = (n: number) => `${n.toLocaleString('en-US')} SAR`;
const FROM = sar(FARES[0].price);

const TITLE = 'Jeddah to Riyadh Taxi | Private Car & Chauffeur';
const DESCRIPTION = `Private Jeddah to Riyadh taxi with door-to-door pickup. Sedan ${sar(1500)}, Staria ${sar(1700)}, GMC Yukon ${sar(2500)} one way. Fare agreed before you travel.`;

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car from Jeddah to Riyadh' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

const faqs = [
    { q: 'How much is a taxi from Jeddah to Riyadh?', a: `One way, per vehicle: sedan ${sar(1500)}, Hyundai Staria VIP ${sar(1700)} and GMC Yukon XL ${sar(2500)}, for a pickup in Jeddah and a drop-off in Riyadh. Extra stops, long waits or addresses outside the two cities are quoted on top, and the final fare is agreed before you confirm.` },
    { q: 'Is the fare per person?', a: 'No. The fare is for the whole vehicle. A family of six in the GMC pays the same as one person in the GMC.' },
    { q: 'How far is Jeddah from Riyadh by road?', a: 'About 950–970 km, depending on where you start in Jeddah and where you are going in Riyadh.' },
    { q: 'How long does the drive take?', a: 'Plan on around 9–10 hours of driving, plus rest stops. City traffic at either end can add more. Treat it as a full day and do not plan around the shortest estimate.' },
    { q: 'Which vehicle should I choose?', a: 'Choose by people and bags together. The sedan suits up to three adults with about two large suitcases. The Staria and the GMC seat up to seven, with room for roughly four and five large suitcases. If you are unsure, send your numbers and we will suggest one.' },
    { q: 'Can I bring a lot of luggage?', a: 'Luggage space is limited by the vehicle, so please send the number and size of your bags. If it does not fit one vehicle, we will tell you before you book rather than at the pickup.' },
    { q: 'Can you pick me up at Jeddah Airport?', a: `Yes. Choose ${JED} as the pickup and add your flight number. The meeting point is agreed before the trip and sent with the driver’s name and number.` },
    { q: 'Can you take me to Riyadh Airport?', a: `Yes, ${RUH} can be the drop-off. Because the drive is long, leave a generous gap before your flight; for a tight connection, flying the whole way is usually safer.` },
    { q: 'Can we stop on the way?', a: 'Yes. Short stops for food, fuel, prayer and rest are part of a journey this long. Tell us about any longer stop or detour when booking, as it may change the fare.' },
    { q: 'Does the route go through Makkah?', a: 'The main road east from Jeddah passes close to the Makkah area, which only Muslims may enter. If anyone in your group is not Muslim, tell us when booking so the driver uses a suitable route.' },
    { q: 'Can I book a return from Riyadh to Jeddah?', a: 'Yes, at the same fares. Tick the return option in the form or send the dates on WhatsApp. Say whether the driver should wait for you or whether the return is a separate trip.' },
    { q: 'Can I request a child seat?', a: 'You can ask. Tell us the children’s ages when booking and we will confirm what is available for your date before you travel.' },
    { q: 'When is my booking confirmed?', a: 'Sending the form or a WhatsApp message is a request. The booking is confirmed when we have checked a vehicle for your date and agreed the fare and pickup details with you.' },
    { q: 'What if my plans change?', a: 'Message us as early as possible. We will tell you whether the change is possible and whether it affects the fare, based on the terms agreed for your booking.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Jeddah to Riyadh private car with driver',
            url: PAGE_URL,
            serviceType: 'Private intercity transfer',
            description: 'Private door-to-door car with driver from Jeddah to Riyadh, with sedan, van and full-size SUV options.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: [{ '@type': 'City', name: 'Jeddah' }, { '@type': 'City', name: 'Riyadh' }],
            offers: FARES.map((f) => ({ '@type': 'Offer', name: `${f.name} - Jeddah to Riyadh, one way`, price: f.price, priceCurrency: 'SAR', url: PAGE_URL })),
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Routes', item: 'https://taxiserviceksa.com/routes/' },
                { '@type': 'ListItem', position: 3, name: 'Jeddah to Riyadh', item: PAGE_URL },
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
const link = 'font-semibold text-[#1d4ed8] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#101d3a]';
const h3 = 'text-xl font-bold text-[#101d3a]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#1d4ed8] px-6 py-3.5 font-bold text-white hover:bg-[#1e40af] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#101d3a]/20 px-6 py-3.5 font-bold text-[#101d3a] hover:border-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#1d4ed8] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

// Illustration (not a photo): Red Sea coast and Jeddah on the left, the Hejaz escarpment, the Najd plateau and Riyadh on the right.
function CoastToCapital({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="jr-sky" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#101d3a" />
                    <stop offset="0.6" stopColor="#24366a" />
                    <stop offset="1" stopColor="#c99257" />
                </linearGradient>
            </defs>
            <rect width="1440" height="640" fill="url(#jr-sky)" />
            <circle cx="980" cy="410" r="58" fill="#f3c77a" fillOpacity="0.3" />
            <path d="M0 522 C 100 518, 200 516, 300 520 V 640 H 0 Z" fill="#3b7fa0" fillOpacity="0.6" />
            <g fill="#101d3a" fillOpacity="0.55">
                <rect x="60" y="450" width="14" height="70" />
                <path d="M84 520 V 380 L 92 340 L 100 380 V 520 Z" />
                <rect x="112" y="460" width="20" height="60" />
                <rect x="142" y="440" width="12" height="80" />
            </g>
            {/* Escarpment */}
            <path d="M280 540 L 360 470 L 420 500 L 480 440 L 560 495 L 640 520 V 640 H 280 Z" fill="#5b4636" fillOpacity="0.55" />
            {/* Plateau */}
            <path d="M600 525 C 800 512, 1000 522, 1200 512 C 1300 508, 1380 514, 1440 512 V 640 H 600 Z" fill="#9c6a3c" fillOpacity="0.55" />
            <g fill="#101d3a" fillOpacity="0.6">
                <path d="M1240 512 V 380 Q 1262 330 1284 380 V 512 Z" />
                <rect x="1298" y="440" width="18" height="72" />
                <path d="M1324 512 V 360 L 1336 330 L 1348 360 V 512 Z" />
                <rect x="1360" y="456" width="24" height="56" />
            </g>
            <path d="M170 600 C 420 590, 720 576, 980 562 C 1080 556, 1160 548, 1250 540" fill="none" stroke="#f3c77a" strokeWidth="3" strokeDasharray="14 10" strokeLinecap="round" />
        </svg>
    );
}

export default function JeddahRiyadhRoutePage() {
    return (
        <div className="jeddah-riyadh-page bg-[#f6f3ed]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#101d3a]">
                <CoastToCapital className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101d3a] via-[#101d3a]/65 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#f3c77a] mb-4`}>Private Intercity Transfer</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-3">Jeddah to Riyadh Taxi – Private Intercity Transfer</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            A private car with a driver from your address in Jeddah to your address in Riyadh. Choose a sedan, a family van or a full-size SUV, send your details, and get the fare agreed before you travel.
                        </p>
                        <ul className="grid grid-cols-3 gap-2 mb-7 max-w-lg">
                            {FARES.map((f) => (
                                <li key={f.vehicle} className="rounded-2xl bg-white/10 border border-white/15 px-3 py-3">
                                    <span className="block text-xs text-white/70">{f.vehicle === 'GMC Yukon XL / Denali' ? 'GMC Yukon XL' : f.vehicle === 'Hyundai Staria VIP' ? 'Staria VIP' : 'Sedan'}</span>
                                    <span className="block text-lg sm:text-xl font-black text-[#f3c77a]">{sar(f.price)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#101d3a] hover:bg-[#f6f3ed]">
                                <a href={QUOTE_HREF}>Request a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                            {['Private, not shared', 'Door-to-door', 'Fare per vehicle', 'One way or return'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#f3c77a] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Jeddah to Riyadh car"
                            cta="Request a quote"
                            fromPlaceholder="Hotel, home, office or airport in Jeddah"
                            toPlaceholder="Hotel, residence, office or airport in Riyadh"
                            fromChips={['Jeddah city', JED, 'Jeddah hotel', 'Al Hamra', 'Obhur']}
                            toChips={['Riyadh city', 'Riyadh hotel', 'Office address', RUH]}
                            showFlight="auto"
                            returnNote="Return trip Riyadh to Jeddah also needed - dates to confirm."
                            vehicleOptions={[{ value: '', label: 'Not sure - recommend one' }, ...FARES.map((f) => ({ value: f.vehicle, label: `${f.name} - ${sar(f.price)}` }))]}
                            buttonClass="bg-[#1d4ed8] hover:bg-[#1e40af] focus-visible:ring-[#1d4ed8]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= AT A GLANCE ================= */}
            <section aria-labelledby="glance" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10">
                    <div className={prose}>
                        <h2 id="glance" className={`${h2} mb-2`}>Jeddah to Riyadh by Private Car</h2>
                        <p>
                            Jeddah and Riyadh sit on opposite sides of the Kingdom: one on the Red Sea, the other on the central Najd plateau. By road that is a long day, roughly 950–970 km and around nine to ten hours of driving before stops. A private car does not make the distance shorter. What it does is turn the trip into one arrangement: the same vehicle and driver from your door in Jeddah to your door in Riyadh, with your luggage in the back and no other passengers.
                        </p>
                        <p>
                            That suits some trips better than others. A family relocating with suitcases, a group of colleagues heading to the same office, visitors who would rather not deal with two airports, or anyone carrying more than an airline allows will often find the road easier. Someone travelling alone with a small bag and a meeting the same afternoon is usually better off on a flight, and we will say so.
                        </p>
                        <p>
                            This page sets out the fares for each vehicle, what decides which one you need, how the day on the road actually goes, and exactly what happens between sending a request and getting into the car.
                        </p>
                    </div>
                    <aside className="lg:pt-16">
                        <dl className="rounded-3xl bg-[#101d3a] text-white p-7 space-y-4 text-sm">
                            {[
                                ['Distance', 'About 950–970 km'],
                                ['Driving time', 'Around 9–10 hours'],
                                ['Stops', 'Food, fuel and prayer breaks'],
                                ['Pickup', 'Any Jeddah address or JED airport'],
                                ['Drop-off', 'Any Riyadh address or RUH airport'],
                                ['Fare', `From ${FROM}, per vehicle`],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-white/60">{k}</dt>
                                    <dd className="font-semibold text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-xs text-stone-500 mt-3 px-1">Distance and time are estimates; they vary with your exact addresses, traffic and stops.</p>
                    </aside>
                </div>
            </section>

            {/* ================= FARES + VEHICLES ================= */}
            <section aria-labelledby="fares" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="fares" className={`${h2} mb-3`}>Jeddah to Riyadh Taxi Fare</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Fares are one way, for the whole vehicle, from a pickup in Jeddah to a drop-off in Riyadh. They cover the car, the driver for the whole journey, fuel and normal rest stops. The fare you confirm is the fare you pay; anything that would change it is agreed with you first.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                        {FARES.map((f) => (
                            <article key={f.vehicle} className="rounded-3xl bg-white border border-[#101d3a]/10 overflow-hidden flex flex-col">
                                <div className="relative aspect-[16/10] bg-stone-100">
                                    <Image src={f.image} alt={f.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className={h3}>{f.name}</h3>
                                    <p className="text-3xl font-black text-[#1d4ed8] mt-1">{sar(f.price)}</p>
                                    <p className="text-xs text-stone-500 mb-4">One way · per vehicle</p>
                                    <ul className="space-y-1.5 text-sm text-stone-700 mb-4">
                                        <li className="flex gap-2"><Users className="w-4 h-4 mt-0.5 text-[#1d4ed8] shrink-0" aria-hidden="true" />{f.seats}</li>
                                        <li className="flex gap-2"><Luggage className="w-4 h-4 mt-0.5 text-[#1d4ed8] shrink-0" aria-hidden="true" />{f.bags}</li>
                                    </ul>
                                    <p className="text-sm text-stone-600 mb-5">{f.fit}</p>
                                    <Link href={`/booking/?${new URLSearchParams({ from: 'Jeddah', to: 'Riyadh', vehicle: f.vehicle }).toString()}`} className={`${primary} mt-auto`}>Book this vehicle <Arrow /></Link>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className={`rounded-3xl bg-white border border-[#101d3a]/10 p-7 ${prose}`}>
                            <h3 className={h3}>What can change the fare</h3>
                            <ul className="space-y-2">
                                <Tick>A pickup or drop-off outside Jeddah or Riyadh, such as Rabigh, Taif or Al Kharj.</Tick>
                                <Tick>A planned detour, an extra pickup on the way or a long stop.</Tick>
                                <Tick>The driver waiting for you for hours or overnight before a return.</Tick>
                                <Tick>A premium vehicle such as a Mercedes S-Class, or a larger group vehicle, which we quote on request.</Tick>
                            </ul>
                            <p className="text-sm">If none of these apply, the fare is the one shown for your vehicle.</p>
                        </div>
                        <div className={`rounded-3xl bg-[#101d3a] text-white p-7 space-y-4 leading-relaxed`}>
                            <h3 className="text-xl font-bold">What to send for a quote</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/85">
                                {['Pickup address in Jeddah', 'Destination address in Riyadh', 'Date and pickup time', 'Number of passengers', 'Number and size of bags', 'Preferred vehicle', 'One way or return', 'Stops or special needs'].map((x) => (
                                    <li key={x} className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#f3c77a] shrink-0" aria-hidden="true" />{x}</li>
                                ))}
                            </ul>
                            <a href={QUOTE_HREF} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#f3c77a] px-6 py-3.5 font-bold text-[#101d3a] hover:bg-[#f7d79a]">Request your quote <Arrow /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CHOOSING A VEHICLE ================= */}
            <section aria-labelledby="choose" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div className={prose}>
                        <h2 id="choose" className={`${h2} mb-2`}>Choosing the Right Vehicle</h2>
                        <p>
                            On a ten-hour drive the wrong vehicle is felt for the whole day, so choose by passengers and luggage together. Seats and boot space compete: a vehicle with seven seats will not take seven adults and seven large suitcases. When every seat is used, the space behind the last row is what is left for bags.
                        </p>
                        <h3 className={`${h3} pt-2`}>Sedan</h3>
                        <p>
                            A Toyota Camry or a similar sedan is the practical choice for one to three adults with around two large suitcases plus hand luggage. It is comfortable over long distances and the lowest fare on the route. A fourth passenger is possible on paper, but on a trip this long three is more comfortable.
                        </p>
                        <h3 className={`${h3} pt-2`}>Hyundai Staria VIP</h3>
                        <p>
                            The Staria is a modern van with sliding doors and seats that are easy to get in and out of, which helps with children and older passengers. It takes up to seven passengers with about four large suitcases. For a family of five or six with normal luggage it is often the most comfortable option.
                        </p>
                        <h3 className={`${h3} pt-2`}>GMC Yukon XL</h3>
                        <p>
                            The full-size GMC has the most luggage space of the three, about five large suitcases with most seats in use, and a quieter, heavier ride on the highway. Business travellers often choose it, as do groups who want space for both people and bags.
                        </p>
                        <p>
                            If you need a specific model, such as a Mercedes S-Class for a guest or a larger van for a delegation, ask in your request. We confirm the actual vehicle for your date before the booking is final.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-[#f6f3ed] p-7 lg:sticky lg:top-28">
                        <h3 className={`${h3} mb-4`}>Quick guide</h3>
                        <ul className="space-y-3 text-sm text-stone-700">
                            {[
                                ['1–3 adults, normal bags', 'Sedan'],
                                ['Family with children', 'Staria VIP'],
                                ['5–7 adults with suitcases', 'GMC Yukon XL'],
                                ['Relocating, many large bags', 'GMC, or ask about two vehicles'],
                                ['VIP guest', 'Ask for a premium vehicle'],
                            ].map(([k, v]) => (
                                <li key={k} className="flex justify-between gap-4 border-b border-[#101d3a]/10 pb-3 last:border-0">
                                    <span>{k}</span><span className="font-bold text-[#101d3a] text-right">{v}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs text-stone-500 mt-4">Luggage figures assume large checked suitcases. Tell us about prams, golf bags or boxes.</p>
                    </aside>
                </div>
            </section>

            {/* ================= THE ROAD ================= */}
            <section aria-labelledby="road" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className={prose}>
                        <h2 id="road" className={`${h2} mb-2`}>The Road Journey: What to Expect</h2>
                        <h3 className={h3}>Leaving Jeddah</h3>
                        <p>
                            How quickly you reach the open highway depends on where in Jeddah you start and when. Mornings and evenings around the city centre and the airport roads can be slow, so a pickup in the north of the city at a quiet hour gets away faster than one in a busy district at rush hour. Give us the exact address or a location pin rather than just the district.
                        </p>
                        <h3 className={h3}>Heading inland</h3>
                        <p>
                            The road climbs east from the coast towards the Taif area and then runs for hours across the Najd plateau to Riyadh. Most of the day is long, straight highway. The main road passes close to the Makkah area, which only Muslims may enter; if anyone in your car is not Muslim, tell us when booking so the driver takes a suitable route.
                        </p>
                        <h3 className={h3}>Stops along the way</h3>
                        <p>
                            On a journey this long, stops are not optional extras: the driver needs breaks and so do you. Expect to stop for fuel, food and prayer, typically two or three times. You decide when you would like to stop within reason, and if you need to arrive by a fixed time, tell us so the stops can be planned around it.
                        </p>
                        <h3 className={h3}>Arriving in Riyadh</h3>
                        <p>
                            Riyadh is a very large city, and reaching its edge is not the same as reaching your hotel. Depending on the district and the time of day, the last part can take a good while longer. For a large hotel, compound or office park, include the gate or building name so the drop-off goes smoothly. More detail on the road itself: <Link href="/distance/jeddah-to-riyadh/" className={link}>Jeddah to Riyadh distance</Link>.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-[#0b1530] text-white p-7 md:p-10 lg:sticky lg:top-28">
                        <RouteJourney
                            vehicle
                            palette="platinum"
                            stops={[
                                { title: 'Jeddah pickup', text: 'Your home, hotel, office or King Abdulaziz International Airport.' },
                                { title: 'East from the coast', text: 'City traffic first, then the climb inland towards the Taif area.' },
                                { title: 'Across the Najd plateau', text: 'Hours of highway driving, with stops for fuel, food and prayer.', accent: true },
                                { title: 'Into Riyadh', text: 'City roads to your district; allow for traffic at busy hours.' },
                                { title: 'Riyadh drop-off', text: 'Your hotel, residence, office or King Khalid International Airport.' },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ================= ROAD VS FLIGHT ================= */}
            <section aria-labelledby="vs" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vs" className={`${h2} mb-4`}>Private Car or Flight?</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className={prose}>
                            <p>
                                There is no single right answer. The flight itself is far shorter than the drive, but a fair comparison counts the whole trip: getting to the airport, check-in and security, any delay, collecting bags, and getting from the Riyadh airport to where you are actually going. How long all that takes depends on your addresses, your airline and the day.
                            </p>
                            <p>
                                The cost comparison depends on how many of you there are. One person on a flight usually pays less than a private car. For four, five or six people the fare per vehicle can come close to, or below, the combined cost of tickets, airport transfers and extra baggage, but check the actual prices for your date rather than assuming either way.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="rounded-2xl bg-[#f6f3ed] p-6">
                                <h3 className={`${h3} mb-3 flex items-center gap-2`}><Plane className="w-5 h-5 text-[#1d4ed8]" aria-hidden="true" />Flying suits you if</h3>
                                <ul className="space-y-2 text-sm text-stone-700">
                                    <Tick>you are travelling alone or as a couple</Tick>
                                    <Tick>you have light luggage</Tick>
                                    <Tick>you need to arrive within a few hours</Tick>
                                    <Tick>both airports are convenient for you</Tick>
                                </ul>
                            </div>
                            <div className="rounded-2xl bg-[#f6f3ed] p-6">
                                <h3 className={`${h3} mb-3 flex items-center gap-2`}><Route className="w-5 h-5 text-[#1d4ed8]" aria-hidden="true" />The road suits you if</h3>
                                <ul className="space-y-2 text-sm text-stone-700">
                                    <Tick>several people are travelling together</Tick>
                                    <Tick>you carry a lot of luggage</Tick>
                                    <Tick>you want to leave from your own door</Tick>
                                    <Tick>a full travel day is acceptable</Tick>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHO ================= */}
            <section aria-labelledby="who" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="who" className={`${h2} mb-8`}>Who Books a Jeddah to Riyadh Car?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Briefcase, t: 'Business travellers', d: <>Meetings, site visits and conferences. Give us the time you must arrive, not only the address, and we work back from it. Company accounts: <Link href="/services/business/" className={link}>business travel</Link>.</> },
                            { icon: Users, t: 'Families', d: 'Parents and children in one vehicle with the bags. Tell us the children’s ages and any seat needs, and expect to stop more often.' },
                            { icon: Luggage, t: 'People relocating', d: 'Moving between the two cities with suitcases and boxes. Send an honest luggage list; if one vehicle is not enough, we will say so.' },
                            { icon: Home, t: 'Groups and visitors', d: 'Friends, relatives or a team sharing one car. One fare for the vehicle, one pickup, one drop-off.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-white border border-[#101d3a]/10 p-6">
                                <Icon className="w-6 h-6 text-[#1d4ed8] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#101d3a] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= AIRPORTS ================= */}
            <section aria-labelledby="airports" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className={`rounded-3xl bg-[#f6f3ed] p-8 ${prose}`}>
                        <Plane className="w-7 h-7 text-[#1d4ed8]" aria-hidden="true" />
                        <h2 id="airports" className="text-2xl md:text-3xl font-extrabold text-[#101d3a]">From Jeddah Airport</h2>
                        <p>
                            Landing at {JED} and continuing to Riyadh by road? Choose the airport as the pickup and add your flight number. We agree the meeting point with you before the trip and send it with the driver&apos;s name and phone number. Allow time for immigration and baggage if you are arriving internationally.
                        </p>
                        <p>
                            If your flight is delayed or changed, message us on WhatsApp as soon as you know. We adjust the pickup where the driver&apos;s schedule allows and tell you if the change affects the booking. After a long flight, a ten-hour drive is a lot; a night in Jeddah and a morning start is worth considering. <Link href="/jeddah-airport-transfer/" className={link}>Jeddah Airport transfers</Link>.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-[#101d3a] text-white p-8 space-y-4 leading-relaxed">
                        <Building2 className="w-7 h-7 text-[#f3c77a]" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-extrabold">To Riyadh Airport</h2>
                        <p className="text-white/80">
                            You can be dropped at {RUH} for a flight. Send the departure time and the airline&apos;s check-in cut-off, and we set the pickup in Jeddah with a generous margin for traffic and stops. For a tight connection, we may suggest flying the whole way instead.
                        </p>
                        <p className="text-white/80">Coming the other way? See <Link href="/routes/riyadh-to-jeddah-airport/" className="font-semibold text-[#f3c77a] hover:underline">Riyadh to Jeddah Airport</Link>.</p>
                    </div>
                </div>
            </section>

            {/* ================= HOW TO BOOK ================= */}
            <section aria-labelledby="book" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-4`}>How Booking Works</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Use the form at the top of the page or send the same details on WhatsApp. An enquiry is not yet a booking: the car is reserved for you only once we have confirmed it for your date and agreed the fare and pickup.
                    </p>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {[
                            ['Send your trip details', 'Pickup address, Riyadh destination, date and preferred time.'],
                            ['Tell us who and what is travelling', 'Passengers, children’s ages, and the number and size of bags.'],
                            ['Choose or ask about a vehicle', 'Sedan, Staria or GMC, or ask us to recommend one.'],
                            ['Review the quote', 'Check the fare, what it covers, payment method and any stops or waiting.'],
                            ['Confirm', 'We confirm the booking and the vehicle for your date.'],
                            ['Receive the driver’s details', 'The driver’s name and phone and the pickup instructions are shared before the trip.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-white border border-[#101d3a]/10 p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#1d4ed8] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#101d3a] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                        <div className="rounded-2xl bg-white border border-[#101d3a]/10 p-6 text-sm text-stone-700 leading-relaxed">
                            <h3 className={`${h3} mb-2 flex items-center gap-2`}><Clock className="w-5 h-5 text-[#1d4ed8]" aria-hidden="true" />When to book</h3>
                            <p>As early as you can, especially for weekends, holidays or a specific vehicle. Messages are answered on WhatsApp, but a late-night enquiry is not the same as a car being free at that hour, so please do not leave a long trip to the last minute.</p>
                        </div>
                        <div className="rounded-2xl bg-white border border-[#101d3a]/10 p-6 text-sm text-stone-700 leading-relaxed">
                            <h3 className={`${h3} mb-2 flex items-center gap-2`}><ShieldCheck className="w-5 h-5 text-[#1d4ed8]" aria-hidden="true" />If plans change</h3>
                            <p>Tell us as early as possible. Whether a change or cancellation affects the fare depends on the terms agreed with your booking, which we explain when you confirm.</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={primary}>Request a Jeddah to Riyadh quote <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> Book via WhatsApp</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Taxi Service KSA · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a> (call or WhatsApp)</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#101d3a]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#101d3a] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#101d3a] mb-3">Related Routes and Services</h2>
                    <p className="text-stone-700 mb-5 flex flex-wrap items-center gap-x-2 gap-y-1">
                        <Coffee className="w-4 h-4 text-[#1d4ed8]" aria-hidden="true" />
                        Going back later? <Link href="/routes/riyadh-jeddah/" className={link}>Riyadh to Jeddah</Link> runs at the same fares. Travelling elsewhere from Jeddah? Try <Link href="/routes/jeddah-makkah/" className={link}>Jeddah to Makkah</Link> or <Link href="/routes/jeddah-madinah/" className={link}>Jeddah to Madinah</Link>.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Riyadh to Jeddah taxi', '/routes/riyadh-jeddah/'],
                            ['Jeddah to Makkah transfer', '/routes/jeddah-makkah/'],
                            ['Jeddah to Madinah taxi', '/routes/jeddah-madinah/'],
                            ['Jeddah to Taif taxi', '/routes/jeddah-taif/'],
                            ['Jeddah to Dammam taxi', '/routes/jeddah-dammam/'],
                            ['Jeddah Airport transfers', '/jeddah-airport-transfer/'],
                            ['Riyadh Airport transfers', '/riyadh-airport-taxi/'],
                            ['Taxi in Riyadh', '/locations/riyadh/'],
                            ['Private chauffeur services', '/services/'],
                            ['View all intercity routes', '/routes/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#101d3a]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#101d3a] hover:border-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8]">{l}</Link>
                        ))}
                    </div>
                    <p className="text-xs text-stone-500 mt-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Fares shown are for pickups in Jeddah and drop-offs in Riyadh. Other areas are quoted on request.</p>
                </div>
            </section>
        </div>
    );
}
