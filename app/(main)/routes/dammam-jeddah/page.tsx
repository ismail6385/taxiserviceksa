import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Info, Users, Briefcase, Luggage, Plane, MapPin, Moon, Sun, BedDouble, Waves, RotateCcw, Factory } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';

const PAGE_URL = 'https://taxiserviceksa.com/routes/dammam-jeddah/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const DMM = 'King Fahd International Airport (DMM)';
const JED = 'King Abdulaziz International Airport (JED)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I want a quote for a private car from Dammam to Jeddah. Pickup (Dammam / Khobar / Dhahran), Jeddah drop-off, date and time, passengers, luggage and preferred vehicle: ')}`;

// Vehicles run on this route. Booking-system names come from lib/supabase.ts.
// Fares are not published yet: set `price` (one way, SAR, per vehicle) and the
// page shows it in the table, the cards, the quote form and the schema.
const VEHICLES: { vehicle: string; short: string; name: string; price?: number; seats: string; bags: string; image: string; alt: string; text: string }[] = [
    { vehicle: 'Toyota Camry', short: 'Sedan', name: 'Toyota Camry sedan', seats: 'Up to 3 adults', bags: 'About 2 large suitcases', image: '/toyota-camry.webp', alt: 'Toyota Camry sedan for a Dammam to Jeddah transfer', text: 'For one to three adults travelling light. Over thirteen hours, three in a sedan is the comfortable maximum.' },
    { vehicle: 'Toyota Veloz 2024', short: 'Veloz', name: 'Toyota Veloz', seats: 'Up to 7 passengers', bags: 'About 4 suitcases, fewer with every seat used', image: '/fleet/toyota-veloz-2024-dammam-jubail-bahrain-chauffeur.webp', alt: 'Toyota Veloz seven-seat MPV used from Dammam', text: 'A compact seven-seat people carrier. Good value for a family with moderate luggage; with all seven seats in use, bag space is small.' },
    { vehicle: 'Hyundai Staria VIP', short: 'Staria VIP', name: 'Hyundai Staria VIP', seats: 'Up to 7 passengers', bags: 'About 4 large suitcases', image: '/hyundai-staria.webp', alt: 'Hyundai Staria VIP van for a family trip from Dammam to Jeddah', text: 'Sliding doors, captain seats and room to stretch, which matters on a coast-to-coast drive. Popular with families and older passengers.' },
    { vehicle: 'GMC Yukon XL / Denali', short: 'GMC Yukon XL', name: 'GMC Yukon XL', seats: 'Up to 7 passengers', bags: 'About 5 large suitcases', image: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', alt: 'GMC Yukon XL full-size SUV for the Dammam to Jeddah road', text: 'The most luggage space and the quietest highway ride of the four. The usual choice for groups with heavy bags and for business travel.' },
];
const sar = (n: number) => `${n.toLocaleString('en-US')} SAR`;
const fareText = (price?: number) => (price ? sar(price) : 'Quote on request');
const priced = VEHICLES.filter((v) => v.price);

const TITLE = 'Dammam to Jeddah Taxi | Private Long-Distance Transfer';
const DESCRIPTION = 'Private Dammam to Jeddah taxi, door to door from Dammam, Al Khobar or Dhahran. Sedan, Veloz, Staria or GMC for families and groups, with the fare confirmed before travel.';

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car from Dammam to Jeddah' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

const faqs = [
    { q: 'How much is a taxi from Dammam to Jeddah?', a: 'The fare depends on the vehicle, the exact pickup and drop-off, the date, and whether you want a continuous drive or an overnight stop. Send those details on the form or WhatsApp and we quote the full trip for the whole vehicle before you confirm.' },
    { q: 'Is the price per person or per vehicle?', a: 'Per vehicle. One fare covers everyone travelling in the car.' },
    { q: 'How far is Dammam from Jeddah by road?', a: 'Roughly 1,300–1,370 km, depending on your exact addresses and the route.' },
    { q: 'How long does the drive take?', a: 'Around 12–14 hours of driving, before stops. In practice most continuous trips take most of a day or a night. It is an estimate, not a guaranteed arrival time.' },
    { q: 'Can you pick me up in Al Khobar or Dhahran?', a: 'Yes. Pickups across Dammam, Al Khobar and Dhahran are all normal. Jubail and other towns further out are possible and quoted on the address.' },
    { q: 'Which vehicles run on this route?', a: 'A Toyota Camry sedan, a Toyota Veloz, a Hyundai Staria VIP and a GMC Yukon XL. Tell us your passenger and bag count and we suggest the right one.' },
    { q: 'Can we travel overnight?', a: 'Yes. An evening departure from Dammam usually means arriving in Jeddah the next morning or around midday. Tell us the pickup time you want and we confirm availability and how the driver’s rest is planned.' },
    { q: 'Can we split the trip with a night on the way?', a: 'Yes. Many families stop overnight, often in Riyadh, and continue the next day. The stop, the hotel and the extra day are agreed and priced with you in advance.' },
    { q: 'Can you drop me at Jeddah Airport?', a: `Yes, ${JED} can be the drop-off. On a road this long, leave a very generous gap before your flight, or consider arriving the day before.` },
    { q: 'How much luggage can we bring?', a: 'It depends on the vehicle and how many seats are used. As a guide: sedan about two large cases, Veloz and Staria about four, GMC about five. Send the real numbers and we check before you book.' },
    { q: 'Do we stop for food and prayer?', a: 'Yes. Several stops for fuel, meals and prayer are part of a trip this long, and you can ask for a break when you need one.' },
    { q: 'Can I book the return from Jeddah to Dammam?', a: 'Yes. Send the return date and pickup in Jeddah. Say whether it is a separate trip later or whether you want the driver to wait.' },
    { q: 'When is my booking confirmed?', a: 'Once we have checked a vehicle for your date and agreed the fare and pickup with you. The form or a message on its own is an enquiry.' },
    { q: 'What if my plans change?', a: 'Tell us as early as possible. Whether a change or cancellation affects the fare depends on the terms agreed with your booking.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Dammam to Jeddah private car with driver',
            url: PAGE_URL,
            serviceType: 'Private long-distance transfer',
            description: 'Private door-to-door car with driver from Dammam, Al Khobar or Dhahran to Jeddah, with sedan, MPV, van and full-size SUV options.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: [{ '@type': 'City', name: 'Dammam' }, { '@type': 'City', name: 'Al Khobar' }, { '@type': 'City', name: 'Jeddah' }],
            ...(priced.length ? { offers: priced.map((v) => ({ '@type': 'Offer', name: `${v.name} - Dammam to Jeddah, one way`, price: v.price, priceCurrency: 'SAR', url: PAGE_URL })) } : {}),
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Routes', item: 'https://taxiserviceksa.com/routes/' },
                { '@type': 'ListItem', position: 3, name: 'Dammam to Jeddah', item: PAGE_URL },
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
const link = 'font-semibold text-[#0f766e] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#26193a]';
const h3 = 'text-xl font-bold text-[#26193a]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f766e] px-6 py-3.5 font-bold text-white hover:bg-[#115e59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#26193a]/20 px-6 py-3.5 font-bold text-[#26193a] hover:border-[#0f766e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#0f766e] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

// Illustration (not a photo): the Gulf coast on the left, the whole width of the Kingdom, the Red Sea on the right.
function GulfToRedSea({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="dj-sky" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#26193a" />
                    <stop offset="0.55" stopColor="#3d2a4f" />
                    <stop offset="1" stopColor="#c98b52" />
                </linearGradient>
            </defs>
            <rect width="1440" height="640" fill="url(#dj-sky)" />
            <circle cx="720" cy="420" r="60" fill="#f4c97c" fillOpacity="0.3" />
            {/* Gulf + Eastern Province */}
            <path d="M0 520 C 80 517, 160 516, 230 518 V 640 H 0 Z" fill="#3f8a8a" fillOpacity="0.6" />
            <g fill="#26193a" fillOpacity="0.55">
                <rect x="40" y="458" width="14" height="60" />
                <rect x="64" y="478" width="8" height="40" />
                <ellipse cx="68" cy="462" rx="20" ry="16" />
                <rect x="96" y="446" width="14" height="72" />
            </g>
            {/* Desert, Riyadh in the middle distance, escarpment */}
            <path d="M210 540 C 480 522, 760 534, 1020 518 L 1080 480 L 1130 505 L 1180 470 L 1230 520 V 640 H 210 Z" fill="#9c6a3c" fillOpacity="0.55" />
            <g fill="#26193a" fillOpacity="0.35">
                <path d="M640 524 V 450 Q 652 424 664 450 V 524 Z" />
                <path d="M676 524 V 440 L 684 422 L 692 440 V 524 Z" />
            </g>
            {/* Red Sea + Jeddah */}
            <path d="M1220 522 C 1300 518, 1380 516, 1440 518 V 640 H 1200 Z" fill="#3b7fa0" fillOpacity="0.6" />
            <path d="M1330 518 C 1326 474, 1330 430, 1336 380 C 1342 430, 1346 474, 1342 518 Z" fill="#f4c97c" fillOpacity="0.45" />
            <g fill="#26193a" fillOpacity="0.5">
                <rect x="1260" y="468" width="14" height="50" />
                <rect x="1380" y="458" width="16" height="60" />
            </g>
            <path d="M110 604 C 400 594, 720 578, 1000 564 C 1120 558, 1220 550, 1320 544" fill="none" stroke="#f4c97c" strokeWidth="3" strokeDasharray="14 10" strokeLinecap="round" />
        </svg>
    );
}

export default function DammamJeddahRoutePage() {
    return (
        <div className="dammam-jeddah-page bg-[#f5f3f0]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#26193a]">
                <GulfToRedSea className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#26193a] via-[#26193a]/65 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#f4c97c] mb-4`}>Gulf Coast to Red Sea · Private Car</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-3">Dammam to Jeddah Taxi – Private Intercity Car Service</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            Across the whole width of Saudi Arabia in one car reserved for your group: from your door in Dammam, Al Khobar or Dhahran to your door in Jeddah, in one long drive or with a night on the way.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#26193a] hover:bg-[#f5f3f0]">
                                <a href={QUOTE_HREF}>Request a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                            {['Your group only', 'Dammam · Khobar · Dhahran', 'Overnight or split trip', 'Fare per vehicle'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#f4c97c] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Dammam to Jeddah quote"
                            cta="Send my request"
                            fromPlaceholder="Address in Dammam, Al Khobar or Dhahran"
                            toPlaceholder="Hotel, home or address in Jeddah"
                            fromChips={['Dammam', 'Al Khobar', 'Dhahran', DMM]}
                            toChips={['Jeddah city', 'Corniche', 'Al Hamra', 'Obhur', JED]}
                            showFlight="auto"
                            stop={{ label: 'Overnight stop on the way', note: 'Overnight stop on the way (e.g. Riyadh) - please quote both days.' }}
                            returnNote="Return trip Jeddah to Dammam also needed - dates to confirm."
                            vehicleOptions={[{ value: '', label: 'Not sure - recommend one' }, ...VEHICLES.map((v) => ({ value: v.vehicle, label: v.price ? `${v.name} - ${sar(v.price)}` : v.name }))]}
                            buttonClass="bg-[#0f766e] hover:bg-[#115e59] focus-visible:ring-[#0f766e]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= OVERVIEW ================= */}
            <section aria-labelledby="overview" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10">
                    <div className={prose}>
                        <h2 id="overview" className={`${h2} mb-2`}>Coast to Coast by Road</h2>
                        <p>
                            Dammam to Jeddah is about as far as you can drive inside Saudi Arabia without leaving the country: from the Arabian Gulf, across the Eastern Province and the central plateau, past Riyadh, and down to the Red Sea. That is roughly 1,300 km and 12–14 hours of driving before anyone stops for food.
                        </p>
                        <p>
                            Nobody books this trip for speed. People book it because they are moving their household from the Eastern Province to the west coast, because a family with grandparents and young children would rather not manage two airports, because a work team needs its equipment with it, or because the final address in Jeddah is a long way from the airport anyway. In those cases, one car from door to door can be simpler than a flight plus two transfers.
                        </p>
                        <p>
                            The decisions that matter most on this route are different from shorter trips: one long drive or two days, which vehicle you can live in for thirteen hours, and when to leave so that you arrive at a sensible hour. This page goes through each of them, and through exactly how a booking is made and confirmed.
                        </p>
                    </div>
                    <aside className="lg:pt-16">
                        <dl className="rounded-3xl bg-[#26193a] text-white p-7 space-y-4 text-sm">
                            {[
                                ['Road distance', 'About 1,300–1,370 km'],
                                ['Driving time', 'Around 12–14 hours'],
                                ['Main road', 'West via Riyadh on Highway 40'],
                                ['Pickup', 'Dammam, Al Khobar, Dhahran'],
                                ['Options', 'Continuous or split overnight'],
                                ['Fare', 'Per vehicle, quoted per trip'],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-white/60">{k}</dt>
                                    <dd className="font-semibold text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-xs text-stone-500 mt-3 px-1">Planning estimates only. Exact addresses, stops and traffic change the total.</p>
                    </aside>
                </div>
            </section>

            {/* ================= CONTINUOUS OR SPLIT ================= */}
            <section aria-labelledby="split" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="split" className={`${h2} mb-3`}>One Long Drive, or Two Days?</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        This is the first thing to decide, because it changes the schedule, the comfort of the trip and the fare. Neither is right for everyone.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="rounded-3xl bg-white border border-[#26193a]/10 p-7">
                            <Sun className="w-7 h-7 text-[#0f766e] mb-3" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>Continuous, by day</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">Leave very early in the morning and arrive in Jeddah late in the evening. Most of the drive is in daylight and you lose only one day. Best for adults who are happy to spend a full day in the car.</p>
                        </div>
                        <div className="rounded-3xl bg-white border border-[#26193a]/10 p-7">
                            <Moon className="w-7 h-7 text-[#0f766e] mb-3" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>Continuous, overnight</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">Leave in the evening and arrive the next morning or around midday. Some passengers sleep for part of it; many do not sleep well in a moving car, and it can leave you tired on arrival. We confirm how the driver&apos;s rest is planned before you book.</p>
                        </div>
                        <div className="rounded-3xl bg-[#26193a] text-white p-7">
                            <BedDouble className="w-7 h-7 text-[#f4c97c] mb-3" aria-hidden="true" />
                            <h3 className="text-xl font-bold mb-2">Split with a night on the way</h3>
                            <p className="text-sm text-white/80 leading-relaxed">Drive part of the way, stay in a hotel, finish the next day. Riyadh, about a third of the way, is a common choice. Easier with children and older passengers. The extra day, the driver&apos;s accommodation and any waiting are agreed and priced with you first.</p>
                        </div>
                    </div>
                    <p className="text-sm text-stone-600 mt-6">Whatever you choose, tell us any fixed time in Jeddah, such as a flight, a new job or a lease handover, and we plan backwards from it with a margin. We do not promise exact arrival times on a road this long.</p>
                </div>
            </section>

            {/* ================= VEHICLES + FARES ================= */}
            <section aria-labelledby="vehicles" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className={`${h2} mb-3`}>Vehicles and Fares for Dammam to Jeddah</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        These are the four vehicles we run on this route. Choose by people and luggage together: on a thirteen-hour drive, a car that is technically big enough but full to the roof is tiring for everyone. Luggage figures assume large checked suitcases with most seats in use.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                        {VEHICLES.map((v) => (
                            <article key={v.vehicle} className="rounded-3xl border border-[#26193a]/10 overflow-hidden flex flex-col">
                                <div className="relative aspect-[16/10] bg-stone-100">
                                    <Image src={v.image} alt={v.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                                </div>
                                <div className="p-5 flex flex-col flex-1 text-sm text-stone-700 leading-relaxed">
                                    <h3 className="text-lg font-bold text-[#26193a]">{v.name}</h3>
                                    <p className={`font-black mb-3 ${v.price ? 'text-2xl text-[#0f766e]' : 'text-base text-stone-500'}`}>{fareText(v.price)}</p>
                                    <ul className="space-y-1 mb-3">
                                        <li className="flex gap-2"><Users className="w-4 h-4 mt-0.5 text-[#0f766e] shrink-0" aria-hidden="true" />{v.seats}</li>
                                        <li className="flex gap-2"><Luggage className="w-4 h-4 mt-0.5 text-[#0f766e] shrink-0" aria-hidden="true" />{v.bags}</li>
                                    </ul>
                                    <p className="mb-5">{v.text}</p>
                                    <Link href={`/booking/?${new URLSearchParams({ from: 'Dammam', to: 'Jeddah', vehicle: v.vehicle }).toString()}`} className={`${primary} mt-auto !px-4 !py-3 text-sm`}>Request the {v.short} <Arrow /></Link>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className={`rounded-3xl bg-[#f5f3f0] p-7 ${prose}`}>
                            <h3 className={h3}>How the fare is worked out</h3>
                            <p>We quote each trip for the whole vehicle, before you confirm. The quote depends on:</p>
                            <ul className="space-y-2">
                                <Tick>the vehicle you choose and its availability on your date;</Tick>
                                <Tick>where exactly you start and finish, for example Jubail or the far north of Jeddah;</Tick>
                                <Tick>continuous drive or an overnight stop on the way;</Tick>
                                <Tick>one way, or a return with the driver waiting;</Tick>
                                <Tick>any detour or extra pickup you want.</Tick>
                            </ul>
                            <p className="text-sm">The quote states what is included. Once confirmed, the fare does not change unless you change the trip.</p>
                        </div>
                        <div className="rounded-3xl bg-[#26193a] text-white p-7 space-y-4 leading-relaxed">
                            <h3 className="text-xl font-bold">For a quick quote, send</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/85">
                                {['Pickup address in the Eastern Province', 'Destination address in Jeddah', 'Date and departure time', 'Continuous or overnight stop', 'Adults and children (ages)', 'Number and size of bags', 'Preferred vehicle', 'One way or return'].map((x) => (
                                    <li key={x} className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#f4c97c] shrink-0" aria-hidden="true" />{x}</li>
                                ))}
                            </ul>
                            <a href={QUOTE_HREF} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4c97c] px-6 py-3.5 font-bold text-[#26193a] hover:bg-[#f7d79a]">Request a quote <Arrow /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= THE ROAD ================= */}
            <section aria-labelledby="road" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className={prose}>
                        <h2 id="road" className={`${h2} mb-2`}>The Road Across the Kingdom</h2>
                        <p>
                            The usual way runs west from the Eastern Province to Riyadh, then on along Highway 40 across the Najd plateau to the Taif area, and down the escarpment to the coast. The first leg to Riyadh is around four hours; everything after that is the long part.
                        </p>
                        <p>
                            Passing through or around Riyadh can be slow at rush hour, which is one reason departure times matter. West of Riyadh the highway is long and straight, with service stations along the way rather than towns every few minutes, so stops are planned rather than improvised.
                        </p>
                        <p>
                            Near the end, the main road passes close to the Makkah area, which only Muslims may enter. If anyone in your group is not Muslim, say so when booking and the driver uses a suitable route into Jeddah.
                        </p>
                        <p>
                            Expect several stops across the day for fuel, meals and prayer, and ask for a break whenever you need one. Children, older passengers and anyone with a medical need may need more frequent stops; tell us so the plan allows for them. More about the road: <Link href="/distance/dammam-to-jeddah/" className={link}>Dammam to Jeddah distance</Link>.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-[#1b1229] text-white p-7 md:p-10 lg:sticky lg:top-28">
                        <RouteJourney
                            vehicle
                            palette="platinum"
                            stops={[
                                { title: 'Eastern Province pickup', text: 'Dammam, Al Khobar, Dhahran, or King Fahd International Airport.' },
                                { title: 'West to Riyadh', text: 'Around four hours. A natural place for a break, or a night if you split the trip.', accent: true },
                                { title: 'Highway 40 across Najd', text: 'The longest stretch, with planned stops for fuel, meals and prayer.' },
                                { title: 'Taif area and the descent', text: 'Down the escarpment towards the Red Sea.' },
                                { title: 'Jeddah drop-off', text: 'Corniche, Al Hamra, Obhur, any address, or King Abdulaziz International Airport.' },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ================= PICKUP + DROP-OFF ================= */}
            <section aria-labelledby="places" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="places" className={`${h2} mb-8`}>Pickup and Drop-Off</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className={`rounded-3xl bg-[#f5f3f0] p-7 ${prose}`}>
                            <h3 className={`${h3} flex items-center gap-2`}><MapPin className="w-5 h-5 text-[#0f766e]" aria-hidden="true" />In the Eastern Province</h3>
                            <p>
                                We collect from homes, hotels, offices and residential compounds across Dammam, Al Khobar and Dhahran. For compounds and industrial sites, send the gate name and any visitor procedure; some sites only allow pickup at the main gate. Jubail, Ras Tanura and other towns are possible and quoted on the exact address.
                            </p>
                            <p>
                                <strong className="text-[#26193a]">From {DMM}:</strong> add your flight number and we agree a meeting point before the trip. After a flight, a thirteen-hour drive is a lot; a night in Al Khobar and a morning start is worth considering.
                            </p>
                        </div>
                        <div className={`rounded-3xl bg-[#f5f3f0] p-7 ${prose}`}>
                            <h3 className={`${h3} flex items-center gap-2`}><Waves className="w-5 h-5 text-[#0f766e]" aria-hidden="true" />In Jeddah</h3>
                            <p>
                                Any address in the city: Corniche hotels, Al Hamra, Al Rawdah, Al Balad, the north around Obhur, or a private home. Send the hotel&apos;s full name or a location pin, and the entrance for large complexes. If you are arriving late at night, let your hotel or hosts know.
                            </p>
                            <p>
                                <strong className="text-[#26193a]">To {JED}:</strong> possible, but with a long drive behind you, leave a very generous gap or arrive the day before. Makkah and Madinah are separate destinations and quoted separately; see <Link href="/routes/dammam-makkah/" className={link}>Dammam to Makkah</Link> and <Link href="/routes/dammam-madinah/" className={link}>Dammam to Madinah</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ROAD VS FLIGHT ================= */}
            <section aria-labelledby="vs" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className={prose}>
                        <h2 id="vs" className={`${h2} mb-2`}>Should You Fly Instead?</h2>
                        <p>
                            For most single travellers, yes. The flight between Dammam and Jeddah is far shorter than the drive, even after adding the airport transfers, check-in, security and baggage collection. A road trip of 12–14 hours will not beat it on time, whatever the group size.
                        </p>
                        <p>
                            The road makes sense for other reasons: everyone and everything travels together, there are no baggage limits beyond the space in the car, and you leave from one door and arrive at another. For a large family or a household move, compare the fare for one vehicle with the cost of tickets for everyone, excess baggage and taxis at both ends, using real prices for your date.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
                        <div className="rounded-2xl bg-white border border-[#26193a]/10 p-6">
                            <h3 className={`${h3} mb-3 flex items-center gap-2`}><Plane className="w-5 h-5 text-[#0f766e]" aria-hidden="true" />Fly if</h3>
                            <ul className="space-y-2 text-sm text-stone-700">
                                <Tick>you are alone or a couple</Tick>
                                <Tick>your luggage is normal</Tick>
                                <Tick>you need to arrive the same day quickly</Tick>
                            </ul>
                        </div>
                        <div className="rounded-2xl bg-white border border-[#26193a]/10 p-6">
                            <h3 className={`${h3} mb-3 flex items-center gap-2`}><Luggage className="w-5 h-5 text-[#0f766e]" aria-hidden="true" />Drive if</h3>
                            <ul className="space-y-2 text-sm text-stone-700">
                                <Tick>you are a family or group</Tick>
                                <Tick>you are moving with lots of bags</Tick>
                                <Tick>a full day, or two, is acceptable</Tick>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHO + RETURN ================= */}
            <section aria-labelledby="who" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="who" className={`${h2} mb-8`}>Who Makes This Trip</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        {[
                            { icon: Luggage, t: 'Families relocating', d: 'Moving from the Eastern Province to Jeddah with a car full of suitcases. Send a complete luggage list; if it needs two vehicles, we tell you before booking.' },
                            { icon: Users, t: 'Large families', d: 'Grandparents, parents and children travelling together. The Staria or GMC with an overnight stop is often the most comfortable plan.' },
                            { icon: Factory, t: 'Work crews and staff', d: <>Teams transferring between projects on the two coasts, sometimes with tools. Company bookings: <Link href="/services/business/" className={link}>business travel</Link>.</> },
                            { icon: Briefcase, t: 'Door-to-door travellers', d: 'People going to a Jeddah address far from the airport, who would rather not combine a flight with two taxis.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f5f3f0] p-6">
                                <Icon className="w-6 h-6 text-[#0f766e] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#26193a] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start rounded-3xl bg-[#26193a] text-white p-8">
                        <RotateCcw className="w-8 h-8 text-[#f4c97c]" aria-hidden="true" />
                        <div className="space-y-3 leading-relaxed">
                            <h3 className="text-2xl font-bold">Coming back later?</h3>
                            <p className="text-white/80">
                                A return weeks later is simply a separate <Link href="/routes/jeddah-dammam/" className="font-semibold text-[#f4c97c] hover:underline">Jeddah to Dammam</Link> trip. If you want the same car to wait in Jeddah for a few days and bring you back, the waiting time and the driver&apos;s accommodation are quoted with the booking; they are never assumed to be part of a one-way fare.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= BOOKING ================= */}
            <section aria-labelledby="book" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-4`}>How Booking Works</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Use the form at the top or WhatsApp. An enquiry reserves nothing yet; the car is yours once we have confirmed it for your date and agreed the fare and the plan with you.
                    </p>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            ['Send the trip', 'Pickup, Jeddah destination, date, time, and continuous or overnight.'],
                            ['Add people and bags', 'Adults, children with ages, number and size of bags.'],
                            ['Get the quote', 'We check a vehicle for your date and send the fare and what it covers.'],
                            ['Confirm', 'Accept the quote; the vehicle is reserved and the booking confirmed.'],
                            ['Agree payment', 'The payment method is agreed at confirmation.'],
                            ['Receive driver details', 'Driver’s name, phone and pickup instructions before the trip.'],
                            ['Changes', 'Tell us early; we say if it affects the fare under your booking terms.'],
                            ['On the day', 'Keep your phone on so the driver can reach you.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-white border border-[#26193a]/10 p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#0f766e] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#26193a] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={primary}>Request a Dammam to Jeddah quote <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> Book via WhatsApp</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Taxi Service KSA · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a> (call or WhatsApp). For holidays and weekends, ask as early as you can.</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#26193a]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#26193a] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#26193a] mb-5">More Trips from the Eastern Province</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Dammam to Riyadh taxi', '/routes/dammam-riyadh/'],
                            ['Dammam to Makkah taxi', '/routes/dammam-makkah/'],
                            ['Dammam to Madinah transfer', '/routes/dammam-madinah/'],
                            ['Jeddah to Dammam taxi', '/routes/jeddah-dammam/'],
                            ['Riyadh to Jeddah taxi', '/routes/riyadh-jeddah/'],
                            ['Dammam Airport taxi', '/dammam-airport-taxi/'],
                            ['Taxi in Al Khobar', '/locations/al-khobar/'],
                            ['View all intercity taxi routes', '/routes/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#26193a]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#26193a] hover:border-[#0f766e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e]">{l}</Link>
                        ))}
                    </div>
                    <p className="text-xs text-stone-500 mt-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Distances and times on this page are estimates for planning. The fare for your trip is confirmed in your quote.</p>
                </div>
            </section>
        </div>
    );
}
