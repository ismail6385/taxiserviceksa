import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, X, Info, Sun, MapPin, FileText, Luggage, Plane, Coffee, Building2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';

const PAGE_URL = 'https://taxiserviceksa.com/routes/dammam-dubai/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const PRICE = 4500;
const PRICE_TEXT = '4,500 SAR';
const SUV = 'GMC Yukon XL / Denali'; // booking-system vehicle name (lib/supabase.ts)
const DMM = 'King Fahd International Airport (DMM)';
const DXB = 'Dubai International Airport (DXB)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent(`Hello, I want a private SUV from Dammam to Dubai (${PRICE_TEXT}). Pickup (Dammam / Khobar / Dhahran / airport), Dubai address, date, passengers and luggage: `)}`;

const TITLE = 'Dammam to Dubai Private Car | Door-to-Door Transfer';
const DESCRIPTION = `Private SUV from Dammam, Al Khobar or Dhahran to Dubai for ${PRICE_TEXT} one way, per vehicle, via the Al Batha / Al Ghuwaifat border. Fuel, tolls and the car's UAE insurance included.`;

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private SUV from Dammam to Dubai' }],
    },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['https://taxiserviceksa.com/og-image.jpg'] },
};

const faqs = [
    { q: 'How much is a private car from Dammam to Dubai?', a: `A private SUV (GMC Yukon or similar) is ${PRICE_TEXT} one way for the whole vehicle, from an address in Dammam, Al Khobar or Dhahran to an address in Dubai. That includes the driver, fuel, road tolls and the vehicle’s UAE insurance.` },
    { q: 'What is not included?', a: 'Passenger visas or entry fees, meals and hotels, and detours, extra pickups or long waits not agreed when booking. A return trip is quoted separately.' },
    { q: 'How far is Dammam from Dubai?', a: 'Roughly 870–890 km by road, depending on your exact pickup and drop-off.' },
    { q: 'How long does the drive take?', a: 'Around 8–9 hours of driving, plus stops and the time at the two border posts, which varies. Treat it as a full day.' },
    { q: 'Which border do we cross?', a: 'Al Batha on the Saudi side and Al Ghuwaifat on the UAE side, in the far west of Abu Dhabi emirate.' },
    { q: 'Does the driver handle the border?', a: 'The driver deals with the vehicle’s side: its papers and its UAE insurance, and shows you where to go. Each passenger does their own passport control and customs.' },
    { q: 'Do I need a UAE visa?', a: 'It depends on your nationality and residency. Check the official UAE immigration guidance for every passenger before booking; a car booking does not confirm entry.' },
    { q: 'Can I travel with my Saudi Iqama?', a: 'Saudi residents need a valid passport, Iqama and exit/re-entry visa to come back, plus whatever the UAE requires for their nationality.' },
    { q: 'Can you collect me from Dammam Airport?', a: `Yes, ${DMM} can be the pickup. Add your flight number; we track the flight and the driver times the pickup to your landing.` },
    { q: 'Can you drop me at Dubai Airport?', a: `Yes, ${DXB} can be the drop-off. Leave a very generous gap before your flight because the border time varies.` },
    { q: 'Can we pick someone up in Abu Dhabi on the way?', a: 'Yes, if agreed when booking. The road passes Abu Dhabi before Dubai; a stop there may change the fare slightly.' },
    { q: 'Can I book the return from Dubai?', a: 'Yes, at the same fare for the SUV. Send the return date and your Dubai pickup address.' },
    { q: 'What if more people or bags are travelling?', a: 'The SUV takes up to 7 people and about 5 large suitcases with most seats used. For more, ask about a larger vehicle or two cars, quoted on request.' },
    { q: 'When is my booking confirmed?', a: 'When we have checked the car for your date and agreed the fare and pickup with you. A form or a message on its own is an enquiry.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Dammam to Dubai private SUV transfer',
            url: PAGE_URL,
            serviceType: 'Private cross-border transfer',
            description: 'Private door-to-door SUV with driver from Dammam, Al Khobar or Dhahran to Dubai via the Al Batha / Al Ghuwaifat border.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: [{ '@type': 'City', name: 'Dammam' }, { '@type': 'City', name: 'Dubai' }],
            offers: { '@type': 'Offer', name: 'Private SUV - Dammam to Dubai, one way', price: PRICE, priceCurrency: 'SAR', url: PAGE_URL },
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Routes', item: 'https://taxiserviceksa.com/routes/' },
                { '@type': 'ListItem', position: 3, name: 'Dammam to Dubai', item: PAGE_URL },
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
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#13232f]';
const h3 = 'text-xl font-bold text-[#13232f]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f766e] px-6 py-3.5 font-bold text-white hover:bg-[#115e59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#13232f]/20 px-6 py-3.5 font-bold text-[#13232f] hover:border-[#0f766e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#0f766e] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function DammamDubaiRoutePage() {
    return (
        <div className="dammam-dubai-page bg-[#f3f5f4]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#13232f]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#1f5f5b_0%,_#13232f_60%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#99f6e4] mb-4`}>Eastern Province → UAE · Private SUV</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Dammam to Dubai by Private Car: Door-to-Door Transfer</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            A private SUV and driver from your door in Dammam, Al Khobar or Dhahran to your address in Dubai, across the Al Batha and Al Ghuwaifat border posts. One car, one fare, agreed before you leave.
                        </p>
                        <div className="inline-flex flex-col rounded-2xl bg-[#99f6e4] text-[#13232f] px-6 py-4 mb-7">
                            <span className="text-4xl font-black leading-none">{PRICE_TEXT}</span>
                            <span className="text-sm font-semibold mt-1.5">Private SUV · One way · Per vehicle</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#13232f] hover:bg-[#f3f5f4]">
                                <a href={QUOTE_HREF}>Request the SUV <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp for availability</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {['Fuel & tolls included', 'UAE car insurance included', 'English & Arabic drivers', 'Return at the same fare'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#99f6e4] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Dammam to Dubai SUV"
                            cta={`Request SUV — ${PRICE_TEXT}`}
                            fromPlaceholder="Address in Dammam, Al Khobar, Dhahran or the airport"
                            toPlaceholder="Hotel, home, office or airport in Dubai"
                            fromChips={['Dammam', 'Al Khobar', 'Dhahran', DMM]}
                            toChips={['Downtown Dubai', 'Dubai Marina', 'Business Bay', DXB]}
                            showFlight="auto"
                            returnNote="Return trip Dubai to Dammam also needed - date to confirm."
                            vehicleOptions={[{ value: SUV, label: `Private SUV (GMC Yukon or similar) - ${PRICE_TEXT}` }]}
                            buttonClass="bg-[#0f766e] hover:bg-[#115e59] focus-visible:ring-[#0f766e]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= OVERVIEW ================= */}
            <section aria-labelledby="overview" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10">
                    <div className={prose}>
                        <h2 id="overview" className={`${h2} mb-2`}>Leaving the Eastern Province for Dubai</h2>
                        <p>
                            Dammam to Dubai is a long, single-day drive: south through Al Ahsa, east along the edge of the Empty Quarter to the Al Batha border, and then the length of Abu Dhabi emirate to Dubai. It is roughly 870–890 km, with around eight to nine hours behind the wheel before anyone stops for lunch.
                        </p>
                        <p>
                            People who book it are usually moving rather than visiting: families relocating with suitcases and boxes, project staff transferring from Dhahran or Jubail to the UAE, and groups who would rather share one car than buy several flights and pay for excess baggage. If you are travelling alone with a cabin bag, a flight from Dammam is far faster, and we would tell you so.
                        </p>
                        <p>
                            The car is a full-size SUV, reserved for your group, at one fare for the vehicle. This page covers what that fare includes, how the day goes, the border, documents and how to book.
                        </p>
                    </div>
                    <aside className="lg:pt-16">
                        <dl className="rounded-3xl bg-[#13232f] text-white p-7 space-y-4 text-sm">
                            {[
                                ['Road distance', 'About 870–890 km'],
                                ['Driving time', 'Around 8–9 hours'],
                                ['Border', 'Al Batha (Saudi) / Al Ghuwaifat (UAE)'],
                                ['Vehicle', 'Private SUV (GMC Yukon or similar)'],
                                ['Fare', `${PRICE_TEXT}, one way`],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-white/60">{k}</dt>
                                    <dd className="font-semibold text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-xs text-stone-500 mt-3 px-1">Planning estimates; the border time is extra and varies.</p>
                    </aside>
                </div>
            </section>

            {/* ================= PRICE ================= */}
            <section aria-labelledby="price" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-5">
                    <article className="rounded-3xl bg-[#13232f] text-white overflow-hidden flex flex-col">
                        <div className="relative aspect-[16/9]">
                            <Image src="/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp" alt="GMC Yukon XL used for Dammam to Dubai transfers" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                        </div>
                        <div className="p-7 flex flex-col flex-1">
                            <h2 id="price" className="text-2xl font-bold">Dammam to Dubai price</h2>
                            <p className="text-5xl font-black text-[#99f6e4] mt-2">{PRICE.toLocaleString('en-US')} <span className="text-lg font-semibold text-white/70">SAR</span></p>
                            <p className="text-sm text-white/70 mt-1 mb-5">Private SUV · one way · up to 7 passengers</p>
                            <Link href={`/booking/?${new URLSearchParams({ from: 'Dammam', to: 'Dubai', vehicle: SUV }).toString()}`} className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#99f6e4] px-6 py-3.5 font-bold text-[#13232f] hover:bg-[#ccfbf1]">Book the SUV <Arrow /></Link>
                        </div>
                    </article>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="rounded-3xl bg-white border border-[#13232f]/10 p-7">
                            <h3 className={`${h3} mb-4`}>Included</h3>
                            <ul className="space-y-2 text-sm text-stone-700">
                                <Tick>The SUV, reserved for your group</Tick>
                                <Tick>The driver for the whole trip</Tick>
                                <Tick>Fuel and road tolls</Tick>
                                <Tick>The vehicle&apos;s UAE insurance</Tick>
                                <Tick>Pickup in Dammam, Al Khobar or Dhahran; drop-off in Dubai</Tick>
                                <Tick>Normal stops for fuel, food and prayer</Tick>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-white border border-[#13232f]/10 p-7">
                            <h3 className={`${h3} mb-4`}>Not included</h3>
                            <ul className="space-y-2 text-sm text-stone-700">
                                {['Passenger visas or entry fees', 'Meals and hotels', 'Detours, extra pickups or long waits not agreed', 'The return trip (same fare, booked separately)'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                                ))}
                            </ul>
                            <p className="text-xs text-stone-500 mt-4">Jubail, Sharjah or the northern emirates? Quoted on the address. <Link href="/routes/dammam-sharjah/" className={link}>Dammam to Sharjah</Link>.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= THE DAY ================= */}
            <section aria-labelledby="day" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className={prose}>
                        <h2 id="day" className={`${h2} mb-2`}>How the Day Goes</h2>
                        <p>
                            <strong className="text-[#13232f]">Leave early.</strong> Most passengers are collected around dawn in Dammam or Al Khobar. That puts the border around midday and Dubai in the evening, rather than arriving after midnight.
                        </p>
                        <p>
                            <strong className="text-[#13232f]">South to Al Ahsa.</strong> The first stretch runs inland past Abqaiq to the Al Ahsa region, a natural place for breakfast and fuel.
                        </p>
                        <p>
                            <strong className="text-[#13232f]">East to Al Batha.</strong> The road then runs a long way along the empty eastern desert to the Saudi exit post at Al Batha. Stops are planned here rather than improvised; service stations are far apart.
                        </p>
                        <p>
                            <strong className="text-[#13232f]">Into the UAE.</strong> After Al Ghuwaifat, it is still several hours through Abu Dhabi emirate, past Abu Dhabi city and on to Dubai. If someone needs collecting in Abu Dhabi, tell us at booking.
                        </p>
                        <p>
                            Expect three or four stops through the day for fuel, meals and prayer, and ask for a break whenever you need one.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-[#0d1820] text-white p-7 md:p-10 lg:sticky lg:top-28">
                        <RouteJourney
                            vehicle
                            palette="platinum"
                            stops={[
                                { title: 'Eastern Province pickup', text: 'Dammam, Al Khobar, Dhahran or King Fahd International Airport, usually early morning.' },
                                { title: 'Al Ahsa', text: 'Breakfast and fuel on the way south.' },
                                { title: 'Al Batha - Saudi exit', text: 'Passport control for passengers; exit checks for the car.', accent: true },
                                { title: 'Al Ghuwaifat - UAE entry', text: 'UAE immigration and customs; the driver handles the car’s papers and insurance.', accent: true },
                                { title: 'Through Abu Dhabi emirate', text: 'Several hours of UAE highway; Abu Dhabi stop on request.' },
                                { title: 'Dubai drop-off', text: 'Your hotel, home, office or Dubai International Airport.' },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ================= BORDER + DOCUMENTS ================= */}
            <section aria-labelledby="border" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="border" className={`${h2} mb-3`}>The Border and Your Documents</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        The crossing has two posts: Al Batha on the Saudi side and Al Ghuwaifat on the UAE side. How long they take depends on queues, the day and the season; weekends, school holidays and Eid are usually busiest. Nobody can promise a fixed time, so plan the rest of the day with a margin. <Link href="/border-crossings/taxi-al-batha-border-crossing/" className={link}>Al Batha border guide</Link>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-3xl bg-white border border-[#13232f]/10 p-7">
                            <h3 className={`${h3} mb-3`}>What the driver handles</h3>
                            <ul className="space-y-2 text-sm text-stone-700">
                                <Tick>The car&apos;s registration and exit paperwork</Tick>
                                <Tick>The car&apos;s UAE insurance</Tick>
                                <Tick>Showing you where to go and in what order</Tick>
                                <Tick>Waiting for you and continuing to Dubai</Tick>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-white border-l-4 border-[#0f766e] p-7">
                            <h3 className={`${h3} mb-3 flex items-center gap-2`}><FileText className="w-5 h-5 text-[#0f766e]" aria-hidden="true" />What each passenger needs</h3>
                            <ul className="space-y-2 text-sm text-stone-700">
                                <Tick>A valid passport (or GCC national ID where accepted)</Tick>
                                <Tick>For Saudi residents: a valid Iqama and an exit/re-entry visa</Tick>
                                <Tick>UAE entry permission or a visa if your nationality needs one</Tick>
                                <Tick>Children: their own documents, and any required consent</Tick>
                            </ul>
                            <p className="text-xs text-stone-500 mt-3">Rules depend on nationality and residency and can change; check official guidance for every traveller. The officers decide who enters, not the driver.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHO + VEHICLE ================= */}
            <section aria-labelledby="who" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="who" className={`${h2} mb-8`}>Who Takes the Road to Dubai</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        {[
                            { icon: Luggage, t: 'Families relocating', d: 'Suitcases, boxes and children in one car. Send an honest luggage list so we can confirm it fits.' },
                            { icon: Building2, t: 'Project staff', d: 'Engineers and crews moving from Dhahran or Jubail to the UAE, sometimes with tool cases.' },
                            { icon: Coffee, t: 'Groups sharing one car', d: 'Friends or colleagues who would rather split one fare than buy several tickets.' },
                            { icon: Plane, t: 'Flights from Dubai', d: `Heading to ${DXB} for an onward flight. Leave a very generous margin, or fly the next day.` },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f3f5f4] p-6">
                                <Icon className="w-6 h-6 text-[#0f766e] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#13232f] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                    <div className={`rounded-3xl bg-[#f3f5f4] p-7 md:p-9 ${prose}`}>
                        <h3 className={h3}>The vehicle</h3>
                        <p>
                            This route runs with a full-size SUV such as a GMC Yukon: up to seven passengers and about five large suitcases with most seats in use. Seats and luggage share the space, so a full load of people with a full load of bags will be tight; tell us the real numbers. For a bigger group, ask about a larger vehicle or two cars travelling together, quoted on request. <Link href="/fleet/gmc-yukon/" className={link}>About the GMC Yukon</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= AIRPORT + RETURN ================= */}
            <section aria-label="Airports and return" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className={`rounded-3xl bg-white border border-[#13232f]/10 p-7 ${prose}`}>
                        <Plane className="w-7 h-7 text-[#0f766e]" aria-hidden="true" />
                        <h2 className="text-2xl font-extrabold text-[#13232f]">From Dammam Airport</h2>
                        <p className="text-base">Landing at {DMM} and driving straight on? Add your flight number. We track the flight and time the pickup to your landing; delays of up to 3 hours cost nothing extra. After a long flight, a night in Al Khobar and an early start is worth considering. <Link href="/dammam-airport-taxi/" className={link}>Dammam Airport transfers</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-[#13232f] text-white p-7 space-y-4 leading-relaxed">
                        <MapPin className="w-7 h-7 text-[#99f6e4]" aria-hidden="true" />
                        <h2 className="text-2xl font-extrabold">Coming back from Dubai</h2>
                        <p className="text-white/80">The return runs at the same SUV fare. Book it with the outward trip or later; send the date and your Dubai pickup address. If you want the driver to wait in Dubai for a few days, that waiting and the driver&apos;s stay are quoted up front. <Link href="/routes/dubai-dammam/" className="font-semibold text-[#99f6e4] hover:underline">Dubai to Dammam</Link>.</p>
                    </div>
                </div>
            </section>

            {/* ================= BOOKING ================= */}
            <section aria-labelledby="book" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-6`}>How to Book</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            ['Send the trip', 'Pickup address, Dubai address, date and the time you want to leave.'],
                            ['People and bags', 'Adults, children and suitcases; any boxes or oversized items.'],
                            ['We confirm', 'The SUV for your date and the fare, with what it includes.'],
                            ['You confirm', 'The booking is final once you accept; driver details follow before the day.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-[#f3f5f4] p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#0f766e] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#13232f] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={primary}>Request the SUV <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5 flex gap-2"><Sun className="w-4 h-4 mt-0.5 text-[#0f766e] shrink-0" aria-hidden="true" />Book a few days ahead where you can, especially before holidays.</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#13232f]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#13232f] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#13232f] mb-5">Related Routes</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Dubai to Dammam taxi', '/routes/dubai-dammam/'],
                            ['Dammam to Abu Dhabi', '/routes/dammam-abu-dhabi/'],
                            ['Dammam to Sharjah', '/routes/dammam-sharjah/'],
                            ['Riyadh to Dubai', '/routes/riyadh-dubai/'],
                            ['Dammam to Bahrain private car', '/blog/dammam-to-bahrain-private-car/'],
                            ['Dammam to Riyadh private transfer', '/routes/dammam-riyadh/'],
                            ['Dammam to Jeddah private transfer', '/routes/dammam-jeddah/'],
                            ['Dammam taxi service', '/locations/dammam/'],
                            ['Private intercity transfers in Saudi Arabia', '/services/intercity/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#13232f]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#13232f] hover:border-[#0f766e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e]">{l}</Link>
                        ))}
                    </div>
                    <p className="text-xs text-stone-500 mt-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Distances and times are estimates. Border procedures and entry rules can change; check official guidance before travel.</p>
                </div>
            </section>
        </div>
    );
}
