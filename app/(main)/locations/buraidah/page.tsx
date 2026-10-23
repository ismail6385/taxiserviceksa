import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, Info, Plane, Route, Clock, Users, MapPin, ShoppingBasket, Briefcase, CalendarDays } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RelatedLocations from '@/components/seo/RelatedLocations';
import ApprovedDriversForLocation from '@/components/ApprovedDriversForLocation';

const PAGE_URL = 'https://taxiserviceksa.com/locations/buraidah/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const ELQ = 'Prince Naif bin Abdulaziz International Airport (ELQ)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need a private car from Buraidah. Pickup (address), destination (address or airport), date and time, passengers, bags, one way / return / driver for hours: ')}`;

// Approximate road figures; sources differ and the exact addresses decide them.
const RIYADH_KM = 'About 365–380 km';
const MADINAH_KM = 'Roughly 450–480 km';

const TITLE = 'Buraidah Private Transport | Al-Qassim City Transfers';
const DESCRIPTION = 'Arrange private transport from Buraidah for Al-Qassim trips, airport journeys and longer drives to Riyadh or Madinah. Share your itinerary and request a quote on WhatsApp.';

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private transport from Buraidah, Al-Qassim' }],
    },
};

const faqs = [
    { q: 'How do I book a private car from Buraidah?', a: 'Send the pickup address, destination, date, time, passengers and bags on WhatsApp (+966 57 580 6733). We confirm the vehicle and the fare; the booking is final only once you accept.' },
    { q: 'How close is Qassim Airport to Buraidah?', a: 'Prince Naif bin Abdulaziz Airport (ELQ) is outside the city, roughly 20–30 km from central Buraidah depending on your address, so usually well under an hour by road. Allow extra time at busy hours.' },
    { q: 'Do you wait if my flight into Qassim is late?', a: 'Yes. Send your flight number and we track it. The driver waits 60 minutes after a domestic landing or 90 after an international one, and delays of up to 3 hours cost nothing extra.' },
    { q: 'Is it worth driving to Riyadh instead of flying from Qassim?', a: `It depends on the trip. Riyadh is ${RIYADH_KM.toLowerCase()} by road, around 3.5–4 hours. A car goes door to door with all your bags and family together; a flight is quicker in the air but adds airport time at both ends. For a Riyadh flight connection, tell us the flight and we set the pickup time.` },
    { q: 'Can you take my family from Buraidah to Madinah?', a: `Yes. Madinah is ${MADINAH_KM.toLowerCase()} away, most of a day with rest stops. Give us your hotel name in Madinah and we drop you as close as traffic rules around the Haram allow.` },
    { q: 'Can I visit the dates market and have the driver wait?', a: 'Yes. Book a driver by the hour (from 3 hours) and the car stays with you while you shop, with room for boxes of dates on the way back. In the harvest season the market roads get busy, so start early.' },
    { q: 'When is the Buraidah dates season?', a: 'The big trading season follows the harvest, usually from around August, and the Buraidah dates festival is held in that period. Dates change each year, so check the current schedule before you plan a trip around it.' },
    { q: 'Do you go to Unaizah, Ar-Rass and Al-Bukayriyah?', a: 'Yes, as pre-booked trips from your Buraidah address. Unaizah and Al-Bukayriyah are short drives; Ar-Rass is further. Send a location pin for farms or homes outside town.' },
    { q: 'Do you do short rides inside Buraidah?', a: 'No. We run pre-booked trips: airport transfers, trips across Qassim, longer journeys and drivers by the hour or day. For a quick ride across town, a local taxi or an app is easier.' },
    { q: 'Which vehicles can I choose?', a: 'A Toyota Camry, Toyota RAV4 Hybrid, Hyundai Staria or GMC Yukon XL, and a Toyota Hiace for groups on request. Tell us your passengers and bags and we suggest one.' },
    { q: 'Are child seats included?', a: 'Not automatically, and they are not free. Ask when you book and we confirm whether one is available for your date and what it costs.' },
    { q: 'What does the fare include?', a: 'The vehicle, the driver and fuel for the route in your quote. Waiting beyond what was agreed, extra stops and parking fees are not included unless the quote says so.' },
    { q: 'Can I change the destination after booking?', a: 'Tell us before the trip. A different drop-off can change the route, the time and the fare, and the change only counts once we confirm it.' },
    { q: 'Does a WhatsApp message confirm my booking?', a: 'No. It starts the enquiry. The booking is confirmed once we have agreed the vehicle, fare and pickup time with you.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Pre-booked private transport from Buraidah',
            url: PAGE_URL,
            serviceType: 'Private transfer, airport transfer and chauffeur hire',
            description: 'Pre-booked private cars from Buraidah to Qassim Airport, towns across Al-Qassim, Riyadh and Madinah, and drivers by the hour.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: { '@type': 'City', name: 'Buraidah' },
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://taxiserviceksa.com/locations/' },
                { '@type': 'ListItem', position: 3, name: 'Buraidah', item: PAGE_URL },
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
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#2a1b3d]';
const h3 = 'text-xl font-bold text-[#2a1b3d]';
const prose = 'space-y-4 text-slate-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#c2410c] px-6 py-3.5 font-bold text-white hover:bg-[#9a3412] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2410c] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#2a1b3d]/20 px-6 py-3.5 font-bold text-[#2a1b3d] hover:border-[#c2410c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2410c]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#c2410c] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

// What people actually book from Buraidah, in the order we hear about it.
const intents = [
    { icon: Plane, t: 'Flight in or out of Qassim', d: 'Home or hotel to ELQ, or a pickup after landing.', href: '#airport' },
    { icon: MapPin, t: 'Another Qassim town', d: 'Unaizah, Al-Bukayriyah, Ar-Rass, a farm or a family home.', href: '#region' },
    { icon: Route, t: 'Riyadh or Madinah', d: 'A long drive, door to door, one way or return.', href: '#long' },
    { icon: ShoppingBasket, t: 'Dates market', d: 'A driver who waits while you shop and loads the boxes.', href: '#dates' },
    { icon: Briefcase, t: 'A day of meetings', d: 'Car and driver by the hour, several stops.', href: '#hourly' },
];

const journeys = [
    { to: 'Qassim Airport (ELQ)', dist: 'Roughly 20–30 km', note: 'Short airport run', href: '/services/airport-transfers/' },
    { to: 'Unaizah', dist: 'Roughly 30 km', note: 'Same-day return is common', href: '/locations/unaizah/' },
    { to: 'Al-Bukayriyah', dist: 'Roughly 35–40 km', note: 'Short regional trip', href: '/locations/al-bukayriyah/' },
    { to: 'Ar-Rass', dist: 'Roughly 80–90 km', note: 'About an hour or more', href: '/locations/al-rass/' },
    { to: 'Riyadh', dist: RIYADH_KM, note: 'Around 3.5–4 hours', href: '/locations/riyadh/' },
    { to: 'Madinah', dist: MADINAH_KM, note: 'Most of a day with stops', href: '/locations/madinah/' },
];

export default function BuraidahLocationPage() {
    return (
        <div className="buraidah bg-[#faf7f4]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#2a1b3d]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_#5b2a3f_0%,_#2a1b3d_60%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#fdba74] mb-4`}>Buraidah · Capital of Al-Qassim</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Private Transport from Buraidah for Al-Qassim and Intercity Journeys</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            A flight from Qassim Airport, a visit to family in Unaizah, a long drive to Riyadh or Madinah, a morning at the dates market. Tell us the trip, and we quote one private car for it before you travel.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#2a1b3d] hover:bg-[#faf7f4]">
                                <a href={QUOTE_HREF}>Get a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {['Fare agreed before travel', 'Flight tracking at ELQ', 'Driver by the hour', 'English & Arabic drivers'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#fdba74] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Buraidah trip"
                            cta="Send my request"
                            fromPlaceholder="Buraidah address, hotel or flight"
                            toPlaceholder="Town, address or airport"
                            fromChips={['Buraidah', ELQ]}
                            toChips={[ELQ, 'Unaizah', 'Ar-Rass', 'Riyadh', 'Madinah']}
                            showFlight="auto"
                            returnNote="Return or waiting needed - times to confirm."
                            buttonClass="bg-[#c2410c] hover:bg-[#9a3412] focus-visible:ring-[#c2410c]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= TRIP PLANNER (intent first) ================= */}
            <section aria-labelledby="planner" className="bg-white py-14 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="planner" className={`${h2} mb-3`}>What Kind of Trip Is It?</h2>
                    <p className="text-slate-700 leading-relaxed max-w-3xl mb-8">
                        A ride to the airport, a family visit two towns away and a day at the dates market are planned differently, even though they all start in Buraidah. Pick the one closest to yours.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                        {intents.map(({ icon: Icon, t, d, href }) => (
                            <a key={t} href={href} className="group rounded-2xl border border-[#2a1b3d]/10 bg-[#faf7f4] p-5 hover:border-[#c2410c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2410c]">
                                <Icon className="w-6 h-6 text-[#c2410c] mb-3" aria-hidden="true" />
                                <h3 className="font-bold text-[#2a1b3d] mb-1">{t}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{d}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= JOURNEY TABLE ================= */}
            <section aria-labelledby="table" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
                    <div className={prose}>
                        <h2 id="table" className={`${h2} mb-2`}>From Buraidah: How Far Is Each Trip?</h2>
                        <p>
                            Buraidah is the capital of the Al-Qassim region and its largest city, in farming country roughly halfway between Riyadh and Madinah. Most of what people book from here falls into two groups: short hops to the airport and neighbouring towns, and long drives out of the region.
                        </p>
                        <p className="text-sm">
                            The figures are approximate. They come from route calculators that do not fully agree, and your real pickup and drop-off decide the distance. Treat a driving time as an estimate, not a promise, and leave a buffer for a flight or appointment.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#2a1b3d]/10 overflow-hidden">
                        <table className="w-full text-sm">
                            <caption className="sr-only">Approximate road distances from Buraidah</caption>
                            <thead className="bg-[#2a1b3d] text-white text-left">
                                <tr><th scope="col" className="px-5 py-3 font-semibold">To</th><th scope="col" className="px-5 py-3 font-semibold">Approx. distance</th><th scope="col" className="px-5 py-3 font-semibold hidden sm:table-cell">Good to know</th></tr>
                            </thead>
                            <tbody>
                                {journeys.map((j) => (
                                    <tr key={j.to} className="border-t border-[#2a1b3d]/10">
                                        <th scope="row" className="px-5 py-3 text-left font-semibold"><Link href={j.href} className={link}>{j.to}</Link></th>
                                        <td className="px-5 py-3 text-slate-700">{j.dist}<span className="block sm:hidden text-xs text-slate-500">{j.note}</span></td>
                                        <td className="px-5 py-3 text-slate-600 hidden sm:table-cell">{j.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ================= AIRPORT ================= */}
            <section aria-labelledby="airport" className="bg-[#2a1b3d] text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className="space-y-4 leading-relaxed text-white/85">
                        <p className={`${eyebrow} text-[#fdba74]`}>Qassim Airport · ELQ</p>
                        <h2 id="airport" className="text-3xl md:text-4xl font-extrabold text-white mb-2">Airport Runs Are Short, but Two Clocks Matter</h2>
                        <p>
                            {ELQ} sits outside the city, roughly 20–30 km from central Buraidah. The drive is short, so the timing usually comes down to your flight, not the road. Send your flight time and the airline, and we set a pickup that leaves room for check-in.
                        </p>
                        <p>
                            For arrivals, send the flight number. We track it, the driver waits 60 minutes after a domestic landing or 90 after an international one, and delays of up to 3 hours cost nothing extra. The meeting point and the driver&apos;s number come with your confirmation, which helps when you book for a guest.
                        </p>
                        <p>
                            Flying from Riyadh instead? The drive is long ({RIYADH_KM.toLowerCase()}), so we work back from your departure time. <Link href="/riyadh-airport-taxi/" className="font-semibold text-[#fdba74] underline-offset-2 hover:underline">Riyadh Airport transfers</Link>.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-white/5 border border-white/10 p-7">
                        <h3 className="text-xl font-bold mb-4">For a group with bags</h3>
                        <p className="text-sm text-white/75 leading-relaxed mb-4">The number of seats does not tell you whether every suitcase fits. Tell us how many large and small bags you have:</p>
                        <ul className="space-y-2 text-sm text-white/85">
                            {[
                                'Camry: up to 3 people, about 2 large suitcases',
                                'RAV4 Hybrid: up to 4 people, about 3 suitcases',
                                'Staria or GMC Yukon XL: up to 7 people, 4–5 suitcases',
                                'Hiace or two cars: bigger families and groups',
                            ].map((x) => <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#fdba74] shrink-0" aria-hidden="true" />{x}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= REGION ================= */}
            <section aria-labelledby="region" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
                <div className="max-w-6xl mx-auto">
                    <h2 id="region" className={`${h2} mb-3`}>Short Trips Across Qassim</h2>
                    <p className="text-slate-700 leading-relaxed max-w-3xl mb-8">
                        Qassim&apos;s towns are spread out, with farms and villages in between, so a &quot;short&quot; trip often ends somewhere a town name does not describe. Send a location pin for a farm, an istiraha or a family home.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { t: 'Unaizah', d: 'The second city of Qassim, to the south. Family visits, appointments and a same-day return are the usual pattern. Tell us when you expect to finish, and whether the driver should wait or come back.', href: '/locations/unaizah/' },
                            { t: 'Al-Bukayriyah', d: 'A short drive to the west. If you want the driver to stay available for a few hours, say so at the start; it is quoted as waiting, not as a one-way trip.', href: '/locations/al-bukayriyah/' },
                            { t: 'Ar-Rass', d: 'Further, to the south-west. Give the exact address; Ar-Rass spreads well beyond its centre. For a return later the same day, send the return time with the request.', href: '/locations/al-rass/' },
                        ].map((c) => (
                            <div key={c.t} className="rounded-2xl bg-white border border-[#2a1b3d]/10 p-6">
                                <h3 className={`${h3} mb-2`}>Buraidah to {c.t}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-3">{c.d}</p>
                                <Link href={c.href} className={`${link} text-sm`}>{c.t} transfers</Link>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-slate-600 mt-6">Going somewhere else in the region? Send the address and we confirm whether we can take it. For the whole region: <Link href="/locations/al-qassim/" className={link}>Al-Qassim transfers</Link>.</p>
                </div>
            </section>

            {/* ================= LONG DISTANCE ================= */}
            <section aria-labelledby="long" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
                <div className="max-w-6xl mx-auto">
                    <h2 id="long" className={`${h2} mb-8`}>The Long Drives: Riyadh and Madinah</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="rounded-3xl bg-[#faf7f4] p-7">
                            <h3 className={`${h3} mb-1`}>Buraidah to Riyadh</h3>
                            <p className="text-sm text-slate-500 mb-4">{RIYADH_KM} · approximately 3.5–4 hours</p>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <Tick><strong>For a meeting:</strong> give the arrival time and the building&apos;s address; we work the pickup back from it.</Tick>
                                <Tick><strong>Same-day return:</strong> tell us roughly when you finish. Waiting in Riyadh is quoted up front.</Tick>
                                <Tick><strong>District matters:</strong> north Riyadh and the south of the city are a long way apart, so a full address changes the quote.</Tick>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-[#faf7f4] p-7">
                            <h3 className={`${h3} mb-1`}>Buraidah to Madinah</h3>
                            <p className="text-sm text-slate-500 mb-4">{MADINAH_KM} · most of a day with rest stops</p>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <Tick><strong>Family visits and Ziyarah:</strong> one car for everyone and the luggage, with stops when you need them.</Tick>
                                <Tick><strong>Hotel drop-off:</strong> give the hotel name; near the Prophet&apos;s Mosque, cars can only go as close as traffic rules allow.</Tick>
                                <Tick><strong>Coming back:</strong> a return days later is a separate trip you can book now; same-day waiting is quoted in advance.</Tick>
                            </ul>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 mt-6">Jeddah, Makkah, Hail or the Eastern Province are also possible by road, quoted on request. <Link href="/services/intercity/" className={link}>Private intercity transfers in Saudi Arabia</Link>.</p>
                </div>
            </section>

            {/* ================= DATES MARKET ================= */}
            <section aria-labelledby="dates" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div className={prose}>
                        <CalendarDays className="w-7 h-7 text-[#c2410c]" aria-hidden="true" />
                        <h2 id="dates" className={`${h2} mb-2`}>A Morning at the Dates Market</h2>
                        <p>
                            Buraidah is one of the country&apos;s biggest dates trading centres. After the harvest, usually from around August, the market fills with farmers&apos; trucks and buyers, and the Buraidah dates festival is held in that season. Sukkari is the variety most people come for. The exact festival dates change every year, so check them before you plan around them.
                        </p>
                        <p>
                            A one-way drop-off does not suit a dates trip. You want the car to wait while you walk and taste, and you want boot space for the cartons afterwards. Book a driver by the hour instead: from 3 hours, with the car staying with you. In season the roads around the market are busy in the morning, so start early.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-white border border-[#2a1b3d]/10 p-7">
                        <h3 className={`${h3} mb-4`}>Plan a market trip</h3>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <Tick>Pickup address and start time</Tick>
                            <Tick>How long you want the driver</Tick>
                            <Tick>Roughly how many cartons you will bring back</Tick>
                            <Tick>Any other stop, a hotel or a farm visit</Tick>
                        </ul>
                        <p className="text-xs text-slate-500 mt-4">Bigger loads: ask for the GMC or Staria, which carry more than a sedan.</p>
                    </aside>
                </div>
            </section>

            {/* ================= HOURLY ================= */}
            <section aria-labelledby="hourly" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="rounded-3xl bg-[#faf7f4] p-7">
                        <Briefcase className="w-6 h-6 text-[#c2410c] mb-3" aria-hidden="true" />
                        <h2 id="hourly" className="text-2xl md:text-3xl font-extrabold text-[#2a1b3d] mb-4">A Driver for Several Stops</h2>
                        <p className="text-sm text-slate-700 leading-relaxed mb-4">Meetings in Buraidah and Unaizah on the same day, a round of hospital visits, or relatives to see across town. List the stops in order with rough times.</p>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <Tick>From 3 hours, or a full 10-hour day</Tick>
                            <Tick>Weekly or monthly with the same driver; monthly invoice for companies</Tick>
                            <Tick>Unlimited stops in the city, fuel included</Tick>
                        </ul>
                        <p className="text-sm text-slate-600 mt-4">Trips outside the city during the booking are agreed in advance. <Link href="/services/private-driver/" className={link}>Private driver hire</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-[#faf7f4] p-7">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2a1b3d] mb-4">How the Fare Is Worked Out</h2>
                        <p className="text-sm text-slate-700 leading-relaxed mb-4">One price for the whole vehicle, based on the route, the vehicle, the date and time, and whether it is one way, a return or hours with a driver. Once you accept, it stays the same unless the trip changes.</p>
                        <ul className="space-y-2 text-sm text-slate-700 mb-4">
                            <Tick>Included: vehicle, driver, fuel for the quoted route</Tick>
                            <Tick>Airport arrivals: flight tracking and the free waiting above</Tick>
                        </ul>
                        <ul className="space-y-2 text-sm text-slate-700">
                            {['Waiting longer than agreed', 'Stops not in the plan', 'Parking fees, unless quoted', 'Child seats (on request, not free)'].map((x) => (
                                <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-slate-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= BOOKING ================= */}
            <section aria-labelledby="book" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className={prose}>
                        <h2 id="book" className={`${h2} mb-2`}>Booking in Four Messages</h2>
                        <ol className="space-y-3">
                            {[
                                ['The route', 'Full pickup and drop-off; a pin for anything outside a town centre.'],
                                ['The timing', 'Date, pickup time, and the time you must arrive if there is a flight or meeting.'],
                                ['People and bags', 'Adults, children, suitcases, cartons, and anything special such as a child seat.'],
                                ['Return or hours', 'One way, a return (with its time), or a driver for a set number of hours.'],
                            ].map(([t, d], i) => (
                                <li key={t} className="flex gap-4">
                                    <span className="inline-flex w-8 h-8 shrink-0 items-center justify-center rounded-full bg-[#c2410c] text-white font-black text-sm" aria-hidden="true">{i + 1}</span>
                                    <span><strong className="text-[#2a1b3d]">{t}.</strong> {d}</span>
                                </li>
                            ))}
                        </ol>
                        <p>We reply with the vehicle and the fare. The booking counts only once you accept it and we confirm.</p>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a href={QUOTE_HREF} className={primary}>Get a quote <Arrow /></a>
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                        </div>
                        <p className="text-sm flex gap-2"><Clock className="w-4 h-4 mt-0.5 text-[#c2410c] shrink-0" aria-hidden="true" />Pickups run 24 hours a day; book ahead for very early or late trips.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#2a1b3d]/10 p-7">
                        <h3 className={`${h3} mb-4`}>Message you can copy</h3>
                        <pre className="whitespace-pre-wrap text-sm text-slate-700 font-sans leading-relaxed">{`Hello Taxi Service KSA,
Private transfer request, Buraidah:
Pickup: Buraidah, [full address]
Destination: [address or airport]
Date: [ ]   Pickup time: [ ]
Must arrive by: [time, if any]
Passengers: [adults / children]
Bags: [number and size]
Vehicle: [if you have a preference]
Trip: [one way / return / driver for ... hours]
Stops or requests: [ ]`}</pre>
                    </div>
                </div>
            </section>

            {/* ================= ON THE DAY ================= */}
            <section aria-labelledby="day" className="bg-white py-14 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="day" className={`${h2} mb-6`}>Before You Travel</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: MapPin, t: 'Check the pickup', d: 'Hotel entrance, gate number or compound access: add anything the driver needs.' },
                            { icon: Users, t: 'Count again', d: 'More people or bags than booked may need a different car. Tell us before the day.' },
                            { icon: Plane, t: 'Flight changed?', d: 'Send the new time as soon as you know. The change counts once we confirm it.' },
                            { icon: Info, t: 'Keep the confirmation', d: 'It has the agreed route, time and fare. Ask for a correction if anything is wrong.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#faf7f4] p-6">
                                <Icon className="w-5 h-5 text-[#c2410c] mb-3" aria-hidden="true" />
                                <h3 className="font-bold text-[#2a1b3d] mb-1">{t}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-slate-600 mt-6">We do not offer shared taxis or short rides around town. For cancellations or changes, message us as early as you can and ask which terms apply to your booking.</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Buraidah Trips: Questions We Get</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#2a1b3d]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#2a1b3d] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="flex flex-wrap gap-2 py-8">
                    {[
                        ['Al-Qassim region transfers', '/locations/al-qassim/'],
                        ['Unaizah private car', '/locations/unaizah/'],
                        ['Ar-Rass transfers', '/locations/al-rass/'],
                        ['Al-Bukayriyah transfers', '/locations/al-bukayriyah/'],
                        ['Pre-booked airport transfer service', '/services/airport-transfers/'],
                        ['Private intercity transfers', '/services/intercity/'],
                        ['Chauffeur hire by the hour', '/services/private-driver/'],
                    ].map(([l, h]) => (
                        <Link key={h} href={h} className="rounded-full border border-[#2a1b3d]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#2a1b3d] hover:border-[#c2410c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2410c]">{l}</Link>
                    ))}
                </div>
                <p className="text-xs text-slate-500 mb-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Distances, driving times and festival dates are estimates; check before you travel.</p>
                <ApprovedDriversForLocation location="buraidah" />
                <RelatedLocations currentCity="Buraidah" />
            </div>
        </div>
    );
}
