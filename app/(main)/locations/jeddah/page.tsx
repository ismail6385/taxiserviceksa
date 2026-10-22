import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Info, Plane, Car, MapPin, Clock, Briefcase, Moon, Mountain, Hotel } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import RelatedLocations from '@/components/seo/RelatedLocations';
import TopicCluster from '@/components/seo/TopicCluster';
import ApprovedDriversForLocation from '@/components/ApprovedDriversForLocation';
import { jeddahHotels } from '@/data/jeddahHotels';
import { JEDDAH_TAIF } from '@/data/jeddahTaifRoute';

const PAGE_URL = 'https://taxiserviceksa.com/locations/jeddah/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const KAIA = 'King Abdulaziz International Airport (KAIA)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need a private car in Jeddah. Pickup (or flight number), destination, date and time, passengers and luggage: ')}`;

// Fares confirmed by the owner (2026-10-22). Jeddah–Makkah matches /routes/jeddah-makkah/.
const MAKKAH_FARES = [
    { vehicle: 'Toyota Camry', name: 'Sedan (Toyota Camry)', price: 300, seats: 'Up to 3 passengers' },
    { vehicle: 'Hyundai Staria VIP', name: 'Hyundai Staria VIP', price: 350, seats: 'Up to 7 passengers' },
    { vehicle: 'Toyota Hiace', name: 'Toyota Hiace', price: 500, seats: 'Up to 11 passengers' },
    { vehicle: 'GMC Yukon XL / Denali', name: 'GMC Yukon XL', price: 600, seats: 'Up to 7 passengers' },
];
const MADINAH_SEDAN = 450;
const sar = (n: number) => `${n.toLocaleString('en-US')} SAR`;

const TITLE = 'Jeddah Taxi Service | Airport, Makkah & Madinah Transfers';
const DESCRIPTION = `Private Jeddah taxi for KAIA airport pickups, Makkah transfers from ${sar(300)}, Madinah from ${sar(MADINAH_SEDAN)}, Taif trips and chauffeur hire. Request your vehicle and fare online.`;

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: PAGE_URL,
        languages: {
            'en': PAGE_URL,
            'ar': 'https://taxiserviceksa.com/ar/locations/jeddah/',
            'ur': 'https://taxiserviceksa.com/ur/locations/jeddah/',
            'x-default': PAGE_URL,
        },
    },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/jeddah-corniche-sunset.webp', alt: 'Jeddah Corniche at sunset' }],
    },
};

const faqs = [
    { q: 'How much is a taxi from Jeddah Airport to Makkah?', a: `Per vehicle, one way: Toyota Camry ${sar(300)}, Hyundai Staria VIP ${sar(350)}, Toyota Hiace ${sar(500)}, GMC Yukon XL ${sar(600)}, to a hotel or address in Makkah. The fare is agreed before you confirm.` },
    { q: 'How much is a private car from Jeddah to Madinah?', a: `A sedan starts from ${sar(MADINAH_SEDAN)} one way. Vans and SUVs are quoted on your passenger and luggage count. Send your pickup and Madinah hotel for the exact fare.` },
    { q: 'How much is a transfer from the airport to my hotel in Jeddah?', a: 'It depends on the hotel’s location and the vehicle. Send the hotel name and your flight number and we quote it before you book.' },
    { q: 'Where will the driver meet me at the airport?', a: 'At Terminal 1 the usual meeting point is near the Aquarium in the arrivals hall. For the North Terminal, the driver waits at the arrivals pickup point. The exact instructions and the driver’s phone number are sent with your confirmation.' },
    { q: 'What if my flight is delayed?', a: 'We track your flight and adjust the driver’s arrival to the actual landing time. Up to 90 minutes of waiting after landing is included. If your plans change for another reason, message us on WhatsApp.' },
    { q: 'Can I book a car from Jeddah to Makkah for Umrah?', a: 'Yes. Send your arrival details and the name of your Makkah hotel. If you want to stop anywhere on the way, mention it when booking. Questions about where to enter Ihram are best checked with your Umrah operator or a scholar before you travel.' },
    { q: 'How long is the drive to Makkah?', a: 'About 90 km. In normal traffic it often takes around 1 to 1.5 hours, longer in Ramadan and peak Umrah periods.' },
    { q: 'How long is the drive to Madinah?', a: 'About 415 km, roughly 4 to 4.5 hours of driving, plus any stops.' },
    { q: 'Do you go to Taif?', a: `Yes. Jeddah to Taif is about ${JEDDAH_TAIF.distance} and ${JEDDAH_TAIF.roadTime} of driving, depending on the destination and the road used. Al Hada and Al Shafa are common drop-offs.` },
    { q: 'Can I hire a driver for several hours?', a: 'Yes. Send your plan for the day, such as meetings, shopping or sightseeing, and we quote an hourly or full-day hire.' },
    { q: 'Which vehicle should I choose?', a: 'A sedan for up to three people with normal luggage; a Staria or GMC for families of up to seven; a Hiace for larger groups or a lot of luggage. Send your numbers and we suggest one.' },
    { q: 'Is the car private or shared?', a: 'Private. The vehicle is reserved for your group only.' },
    { q: 'When is my booking confirmed?', a: 'When we have checked a vehicle for your date and agreed the fare and pickup with you. A form or message on its own is an enquiry.' },
    { q: 'How far ahead should I book?', a: 'As early as you can, especially for Ramadan, the Hajj season and busy Umrah weekends, or if you need a particular vehicle.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private taxi, airport transfer and chauffeur service in Jeddah',
            url: PAGE_URL,
            serviceType: 'Private pre-booked transfers',
            description: 'Private pre-booked transfers from Jeddah and King Abdulaziz International Airport to hotels, Makkah, Madinah and Taif, plus hourly chauffeur hire.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: { '@type': 'City', name: 'Jeddah' },
            offers: [
                ...MAKKAH_FARES.map((f) => ({ '@type': 'Offer', name: `${f.name} - Jeddah to Makkah, one way`, price: f.price, priceCurrency: 'SAR' })),
                { '@type': 'Offer', name: 'Sedan - Jeddah to Madinah, one way (from)', price: MADINAH_SEDAN, priceCurrency: 'SAR' },
            ],
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://taxiserviceksa.com/locations/' },
                { '@type': 'ListItem', position: 3, name: 'Jeddah', item: PAGE_URL },
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
const link = 'font-semibold text-[#0369a1] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#0b2e4a]';
const h3 = 'text-xl font-bold text-[#0b2e4a]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0369a1] px-6 py-3.5 font-bold text-white hover:bg-[#075985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369a1] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#0b2e4a]/20 px-6 py-3.5 font-bold text-[#0b2e4a] hover:border-[#0369a1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369a1]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#0369a1] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function JeddahPage() {
    return (
        <div className="jeddah-hub bg-[#f4f6f8]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0b2e4a]">
                <Image src="/jeddah-corniche-sunset.webp" alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-40" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b2e4a] via-[#0b2e4a]/80 to-[#0b2e4a]/30" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#fbbf77] mb-4`}>Jeddah · Pre-booked private cars</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Jeddah Private Taxi, Airport Transfer &amp; Chauffeur Service</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            Airport pickups at KAIA, transfers to Makkah and Madinah, trips to Taif, and drivers by the hour. Every car is booked in advance for your group only, with the fare agreed before you travel.
                        </p>
                        <ul className="grid grid-cols-2 gap-2 mb-7 max-w-lg">
                            <li className="rounded-2xl bg-white/10 border border-white/15 px-4 py-3"><span className="block text-xs text-white/70">Jeddah → Makkah</span><span className="block text-xl font-black text-[#fbbf77]">from {sar(300)}</span></li>
                            <li className="rounded-2xl bg-white/10 border border-white/15 px-4 py-3"><span className="block text-xs text-white/70">Jeddah → Madinah</span><span className="block text-xl font-black text-[#fbbf77]">from {sar(MADINAH_SEDAN)}</span></li>
                        </ul>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#0b2e4a] hover:bg-[#f4f6f8]">
                                <a href={QUOTE_HREF}>Get a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {['Flight tracking', '90 min waiting included', 'Private, not shared', 'Fare per vehicle'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#fbbf77] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Jeddah car"
                            cta="Send my request"
                            fromPlaceholder="Airport, hotel or address in Jeddah"
                            toPlaceholder="Hotel or address (Jeddah, Makkah, Madinah, Taif...)"
                            fromChips={[KAIA, 'Jeddah hotel', 'Al Hamra', 'Obhur']}
                            toChips={['Makkah hotel', 'Madinah hotel', 'Jeddah hotel', 'Taif']}
                            showFlight="auto"
                            returnNote="Return trip also needed - dates to confirm."
                            buttonClass="bg-[#0369a1] hover:bg-[#075985] focus-visible:ring-[#0369a1]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= SERVICES OVERVIEW ================= */}
            <section aria-labelledby="services" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="services" className={`${h2} mb-3`}>What You Can Book in Jeddah</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Jeddah is where most visitors to the Holy Cities land, and it is a large city of its own. We do not run street taxis or short hail-and-ride trips. Every service below is a private car, booked ahead, with a driver who knows where you are going.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[
                            { icon: Plane, t: 'Airport pickups', d: 'From KAIA to your hotel or home.', href: '#airport' },
                            { icon: Car, t: 'To Makkah', d: `About 90 km. From ${sar(300)}.`, href: '#makkah' },
                            { icon: MapPin, t: 'To Madinah', d: `About 415 km. From ${sar(MADINAH_SEDAN)}.`, href: '#madinah' },
                            { icon: Mountain, t: 'Taif and beyond', d: 'Taif, Al Hada, other cities.', href: '#taif' },
                            { icon: Clock, t: 'Driver by the hour', d: 'Meetings, shopping, tours.', href: '#chauffeur' },
                        ].map(({ icon: Icon, t, d, href }) => (
                            <a key={t} href={href} className="group rounded-2xl bg-[#f4f6f8] p-5 hover:bg-[#e8eef3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369a1]">
                                <Icon className="w-6 h-6 text-[#0369a1] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#0b2e4a] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600">{d}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= AIRPORT ================= */}
            <section id="airport" aria-labelledby="airport-h" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    <div className={prose}>
                        <Plane className="w-7 h-7 text-[#0369a1]" aria-hidden="true" />
                        <h2 id="airport-h" className={`${h2} mb-2`}>Jeddah Airport Transfers from KAIA</h2>
                        <p>
                            After a long flight, the last thing you want is to negotiate a ride at the kerb. Book the pickup before you fly, and a driver will be waiting for your flight at {KAIA}, whether you land at Terminal 1 or the North Terminal.
                        </p>
                        <h3 className={`${h3} pt-2`}>What to send when you book</h3>
                        <ul className="space-y-2">
                            <Tick>Flight number and arrival date.</Tick>
                            <Tick>Number of passengers, including children, and number of suitcases.</Tick>
                            <Tick>Where you are going: hotel name or address in Jeddah, or your Makkah or Madinah hotel.</Tick>
                            <Tick>A phone number with WhatsApp that works after you land.</Tick>
                        </ul>
                        <h3 className={`${h3} pt-2`}>Meeting your driver</h3>
                        <p>
                            At Terminal 1 the usual meeting point is near the Aquarium in the arrivals hall. At the North Terminal, the driver waits at the arrivals pickup point. Airport arrangements can change, so the exact instructions and the driver&apos;s phone number are sent with your confirmation; follow those on the day.
                        </p>
                        <h3 className={`${h3} pt-2`}>Delayed flights</h3>
                        <p>
                            We track your flight and time the driver to your actual landing, not the scheduled one. Up to 90 minutes of waiting after landing is included, which normally covers immigration and baggage. If you are held up for longer, or your flight is cancelled or rebooked, message us on WhatsApp and we adjust the booking.
                        </p>
                        <p>
                            Airport to Jeddah hotel fares depend on where the hotel is; send the hotel name for a quote. Going on to Makkah or Madinah straight from the airport is the most common booking, covered below. More on airport pickups: <Link href="/jeddah-airport-transfer/" className={link}>Jeddah Airport transfer</Link>.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-[#0b2e4a] text-white p-8 lg:sticky lg:top-28 space-y-4">
                        <h3 className="text-xl font-bold">Included with every airport pickup</h3>
                        <ul className="space-y-2 text-sm text-white/85">
                            {['Flight tracking', 'Up to 90 minutes waiting after landing', 'Meeting point and driver’s number sent in advance', 'Private vehicle for your group'].map((x) => (
                                <li key={x} className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#fbbf77] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                        <a href={QUOTE_HREF} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#fbbf77] px-6 py-3.5 font-bold text-[#0b2e4a] hover:bg-[#fcd09a]">Book an airport pickup <Arrow /></a>
                    </aside>
                </div>
            </section>

            {/* ================= MAKKAH ================= */}
            <section id="makkah" aria-labelledby="makkah-h" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
                <div className="max-w-6xl mx-auto">
                    <h2 id="makkah-h" className={`${h2} mb-3`}>Jeddah to Makkah Private Taxi</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <div className={prose}>
                            <p>
                                Makkah is about 90 km from central Jeddah and slightly less from the airport. In normal traffic the drive often takes around an hour to an hour and a half; in Ramadan and on busy Umrah weekends, the roads into Makkah and around the Haram are much slower, so allow extra time for a hotel check-in.
                            </p>
                            <p>
                                The fare is for the whole vehicle, to your hotel or address in Makkah. Send the hotel name rather than just &ldquo;Makkah&rdquo;, because access around the Haram is controlled and the exact drop-off point depends on the hotel.
                            </p>
                            <p>
                                <strong className="text-[#0b2e4a]">For Umrah pilgrims:</strong> include Ihram bags and Zamzam containers on the way back in your luggage count. If you would like to stop somewhere on the way, tell us when booking. Questions about where to enter Ihram depend on your own circumstances and are best checked with your Umrah operator or a scholar before you fly.
                            </p>
                            <p>
                                Only Muslims may enter Makkah. <Link href="/routes/jeddah-makkah/" className={link}>Full Jeddah to Makkah route details</Link>.
                            </p>
                        </div>
                        <div>
                            <div className="relative overflow-x-auto rounded-2xl border border-[#0b2e4a]/10">
                                <table className="w-full min-w-[420px] text-left text-sm">
                                    <thead>
                                        <tr className="bg-[#0b2e4a] text-white">
                                            <th scope="col" className="px-4 py-3 font-bold">Vehicle</th>
                                            <th scope="col" className="px-4 py-3 font-bold">Seats</th>
                                            <th scope="col" className="px-4 py-3 font-bold text-right">One way</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#0b2e4a]/10 bg-white">
                                        {MAKKAH_FARES.map((f) => (
                                            <tr key={f.vehicle}>
                                                <th scope="row" className="px-4 py-3 font-bold text-[#0b2e4a]">{f.name}</th>
                                                <td className="px-4 py-3 text-stone-700">{f.seats}</td>
                                                <td className="px-4 py-3 text-right font-black text-[#0369a1] whitespace-nowrap">{sar(f.price)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-stone-500 mt-3">Per vehicle, Jeddah or KAIA pickup to a Makkah hotel. Extra stops or long waits are agreed with you first.</p>
                            <Link href={`/booking/?${new URLSearchParams({ from: KAIA, to: 'Makkah' }).toString()}`} className={`${primary} mt-5`}>Book Jeddah to Makkah <Arrow /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= MADINAH + TAIF ================= */}
            <section aria-label="Madinah and Taif" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div id="madinah" className={`rounded-3xl bg-white border border-[#0b2e4a]/10 p-8 scroll-mt-24 ${prose}`}>
                        <MapPin className="w-7 h-7 text-[#0369a1]" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b2e4a]">Jeddah to Madinah Private Car</h2>
                        <p>
                            Madinah is a much longer trip: about 415 km and roughly 4 to 4.5 hours of driving, plus a stop or two. A sedan starts from <strong className="text-[#0b2e4a]">{sar(MADINAH_SEDAN)}</strong> one way; vans and SUVs are quoted on your group and luggage.
                        </p>
                        <p>
                            Give us the name of your hotel near the Prophet&apos;s Mosque so the drop-off is exact, and leave a margin if you have a check-in time. Many pilgrims combine Makkah and Madinah in one trip; ask us to quote both legs together. <Link href="/routes/jeddah-madinah/" className={link}>Jeddah to Madinah route</Link>.
                        </p>
                    </div>
                    <div id="taif" className={`rounded-3xl bg-white border border-[#0b2e4a]/10 p-8 scroll-mt-24 ${prose}`}>
                        <Mountain className="w-7 h-7 text-[#0369a1]" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b2e4a]">Jeddah to Taif and Other Cities</h2>
                        <p>
                            Taif sits in the mountains inland, about {JEDDAH_TAIF.distance} and {JEDDAH_TAIF.roadTime} of driving depending on the road and your destination. {JEDDAH_TAIF.corridorNote} Al Hada and Al Shafa are popular drop-offs; send the exact address. <Link href={JEDDAH_TAIF.href} className={link}>Jeddah to Taif route</Link>.
                        </p>
                        <p>
                            We also drive from Jeddah to Riyadh, Dammam and other cities. See <Link href="/routes/jeddah-riyadh/" className={link}>Jeddah to Riyadh</Link> or <Link href="/routes/" className={link}>all intercity routes</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= FLEET ================= */}
            <section aria-labelledby="fleet" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="fleet" className={`${h2} mb-3`}>Vehicles for Jeddah Transfers</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Choose by people and luggage together; a full car leaves less room for bags. Tell us about prams, wheelchairs or extra-large cases so we can check they fit.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { name: 'Toyota Camry', img: '/toyota-camry.webp', who: 'Up to 3 passengers, about 2 large suitcases. Couples and small families.' },
                            { name: 'Hyundai Staria VIP', img: '/hyundai-staria.webp', who: 'Up to 7 passengers, about 4 large suitcases. Families wanting easy access.' },
                            { name: 'GMC Yukon XL', img: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', who: 'Up to 7 passengers, about 5 large suitcases. Groups and more luggage.' },
                            { name: 'Toyota Hiace', img: '/toyota-hiace.webp', who: 'Up to 11 passengers with a group’s luggage. Larger families and Umrah groups.' },
                        ].map((v) => (
                            <article key={v.name} className="rounded-3xl border border-[#0b2e4a]/10 overflow-hidden">
                                <div className="relative aspect-[16/10] bg-stone-100">
                                    <Image src={v.img} alt={`${v.name} for transfers from Jeddah`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-[#0b2e4a] mb-1">{v.name}</h3>
                                    <p className="text-sm text-stone-600 leading-relaxed">{v.who}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <p className="text-sm text-stone-600 mt-6 flex gap-2"><Info className="w-4 h-4 mt-0.5 text-[#0369a1] shrink-0" aria-hidden="true" />Premium vehicles such as a Cadillac Escalade or Mercedes S-Class, and larger vans for delegations, are available on request and quoted separately. <Link href="/fleet/" className={link}>See the full fleet</Link>.</p>
                </div>
            </section>

            {/* ================= CHAUFFEUR + PEAK ================= */}
            <section aria-label="Chauffeur hire and peak seasons" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div id="chauffeur" className={`rounded-3xl bg-white border border-[#0b2e4a]/10 p-8 scroll-mt-24 ${prose}`}>
                        <Briefcase className="w-7 h-7 text-[#0369a1]" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b2e4a]">Driver by the Hour or Day</h2>
                        <p>
                            Some days are not a single A-to-B trip: three meetings across the city, a round of shopping malls, a visit to Al Balad and the Corniche, or a family day out. Hiring a car and driver for a set number of hours keeps one vehicle with you all day.
                        </p>
                        <p>
                            Send your rough plan, start time and how many hours you expect to need. We quote the hire and confirm what happens if the day runs longer. <Link href="/services/private-driver/" className={link}>Private driver service</Link>.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-[#0b2e4a] text-white p-8 space-y-4 leading-relaxed">
                        <Moon className="w-7 h-7 text-[#fbbf77]" aria-hidden="true" />
                        <h2 className="text-2xl md:text-3xl font-extrabold">Ramadan, Hajj and Busy Umrah Periods</h2>
                        <p className="text-white/80">
                            When airport arrivals, hotel check-ins and Makkah traffic all peak together, cars are booked up and journeys take longer. Book as early as you can, double-check your flight and hotel details in the confirmation, and leave extra time for anything with a fixed time attached.
                        </p>
                        <p className="text-white/80">During the Hajj season, access to Makkah is restricted by permits and checkpoints; the trip is only possible if your group meets the official requirements.</p>
                    </div>
                </div>
            </section>

            {/* ================= HOW TO BOOK ================= */}
            <section aria-labelledby="book" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-4`}>How Booking Works</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            ['Send the trip', 'Pickup (or flight number), destination, date and time.'],
                            ['Add people and bags', 'Adults, children and number of suitcases.'],
                            ['Get the fare', 'We check a vehicle for your date and confirm the price and what it covers.'],
                            ['Confirm and travel', 'The booking is final once you accept. Driver details and pickup instructions follow.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-[#f4f6f8] p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#0369a1] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#0b2e4a] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={primary}>Get a quote <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> Book via WhatsApp</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Taxi Service KSA · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a> (call or WhatsApp)</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#0b2e4a]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0b2e4a] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= REVIEWS (real ones) + SHARE ================= */}
            <section aria-labelledby="reviews" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="reviews" className={`${h2} mb-8`}>What Customers Say</h2>
                    <ReviewsDisplay location="Jeddah" limit={6} />
                    <div className="max-w-2xl mx-auto mt-12">
                        <h3 className={`${h3} mb-4 text-center`}>Share Your Experience</h3>
                        <ReviewForm locationName="Jeddah" />
                    </div>
                </div>
            </section>

            {/* ================= HOTEL DIRECTORY (supporting) ================= */}
            <section aria-labelledby="hotels" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="hotels" className="text-2xl md:text-3xl font-extrabold text-[#0b2e4a] mb-2 flex items-center gap-2"><Hotel className="w-6 h-6 text-[#0369a1]" aria-hidden="true" />Airport Transfers to Jeddah Hotels</h2>
                    <p className="text-stone-600 mb-6">Pickup details, drive time and drop-off notes for popular hotels.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {jeddahHotels.map((hotel) => (
                            <Link key={hotel.slug} href={`/routes/jeddah-to-${hotel.slug}/`} className="rounded-xl bg-white border border-[#0b2e4a]/10 px-4 py-3 hover:border-[#0369a1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369a1]">
                                <span className="block font-semibold text-[#0b2e4a]">{hotel.name}</span>
                                <span className="block text-xs text-stone-500">{hotel.area} · about {hotel.driveTimeMin} min from KAIA</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= QUESTIONS (UGC) ================= */}
            <section aria-labelledby="questions" className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 id="questions" className="text-2xl md:text-3xl font-extrabold text-[#0b2e4a] mb-2 text-center">Questions About Jeddah Transfers?</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto text-center mb-10">Ask a question and our team will answer directly.</p>
                    <QuestionsDisplay location="Jeddah" />
                    <div className="max-w-2xl mx-auto mt-12">
                        <QuestionForm locationName="Jeddah" />
                    </div>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="flex flex-wrap gap-2 py-10">
                    {[
                        ['Jeddah to Makkah taxi', '/routes/jeddah-makkah/'],
                        ['Jeddah to Madinah transfer', '/routes/jeddah-madinah/'],
                        ['Jeddah to Taif', JEDDAH_TAIF.href],
                        ['Jeddah Airport transfer', '/jeddah-airport-transfer/'],
                        ['Umrah transport', '/services/umrah-transport/'],
                        ['Jeddah to Riyadh taxi', '/routes/jeddah-riyadh/'],
                        ['Rabigh', '/locations/rabigh/'],
                        ['Al Qunfudhah', '/locations/al-qunfudhah/'],
                        ['Our fleet', '/fleet/'],
                        ['Explore other routes', '/routes/'],
                    ].map(([l, h]) => (
                        <Link key={h} href={h} className="rounded-full border border-[#0b2e4a]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#0b2e4a] hover:border-[#0369a1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369a1]">{l}</Link>
                    ))}
                </div>
                <ApprovedDriversForLocation location="jeddah" />
                <RelatedLocations currentCity="Jeddah" />
                <TopicCluster
                    mainTopic="Jeddah Travel Guides"
                    clusters={[
                        {
                            category: 'More Jeddah Guides',
                            relevance: 'Tertiary',
                            items: [
                                { label: 'Complete Jeddah Guide', url: '/blog/complete-jeddah-guide' },
                                { label: 'Top 15 Places to Visit', url: '/blog/top-15-places-to-visit-in-jeddah' },
                                { label: 'Best Beaches in Jeddah', url: '/blog/best-beaches-in-jeddah' },
                                { label: 'Jeddah Corniche Guide', url: '/blog/jeddah-corniche-guide' },
                                { label: 'Why Visit Al-Balad', url: '/blog/why-you-should-visit-al-balad-in-jeddah' },
                                { label: 'Floating Mosque (Al Rahma)', url: '/blog/floating-mosque-al-rahma-mosque-travel-guide' },
                                { label: 'Fakieh Aquarium Complete Guide', url: '/blog/fakieh-aquarium-jeddah-complete-guide' },
                            ],
                        },
                    ]}
                />
            </div>
        </div>
    );
}
