import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Info, Users, Briefcase, Luggage, Globe2, Home, Plane, MapPin, ShieldCheck, FileText, Building2, Factory, Coffee } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';

const PAGE_URL = 'https://taxiserviceksa.com/routes/dubai-dammam/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const PRICE = 4500;
const PRICE_TEXT = '4,500 SAR';
const SUV = 'GMC Yukon XL / Denali'; // booking-system vehicle name (lib/supabase.ts)
const DXB = 'Dubai International Airport (DXB)';
const DMM = 'King Fahd International Airport (DMM)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent(`Hello, I want a private SUV from Dubai to Dammam (${PRICE_TEXT}). Pickup in Dubai (or flight number), drop-off in Dammam / Khobar / Dhahran, date, passengers and luggage: `)}`;
const BOOK_SUV = `/booking/?${new URLSearchParams({ from: 'Dubai', to: 'Dammam', vehicle: SUV }).toString()}`;

const TITLE = `Dubai to Dammam Taxi | Private SUV Transfer – ${PRICE_TEXT}`;
const DESCRIPTION = `Private SUV from Dubai to Dammam, Al Khobar or Dhahran for ${PRICE_TEXT} one way. Pickup at your Dubai hotel, home or DXB, door-to-door via the Al Ghuwaifat / Al Batha border.`;

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private SUV transfer from Dubai to Dammam' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

const faqs = [
    { q: 'How much is a taxi from Dubai to Dammam?', a: `A private SUV from Dubai to Dammam is ${PRICE_TEXT} one way for the whole vehicle, not per passenger. The fare is confirmed with you before the booking is final.` },
    { q: 'Does the fare cover Al Khobar and Dhahran too?', a: 'Drop-offs in Dammam, Al Khobar and Dhahran are normally quoted at the same fare. Jubail and places further out are quoted separately, so send the exact address.' },
    { q: 'How far is Dubai from Dammam by road?', a: 'Roughly 870–890 km, depending on where you are collected in Dubai and where you are going in the Eastern Province.' },
    { q: 'How long does the journey take?', a: 'Plan on around 8–9 hours of driving. The border, rest stops and traffic all add to that, so the full journey is a long day. We cannot guarantee an arrival time.' },
    { q: 'Which border crossing is used?', a: 'Al Ghuwaifat on the UAE side and Al Batha on the Saudi side, in the far west of Abu Dhabi emirate. Both have immigration and customs checks.' },
    { q: 'Can I be picked up at Dubai Airport?', a: `Yes. Choose ${DXB} as the pickup and send your flight number and arrival time. Because the drive is long, we will talk through whether an overnight stop in Dubai makes more sense for late arrivals.` },
    { q: 'What documents do passengers need?', a: 'That depends on each passenger’s nationality, residency and visa. Everyone, including children, must hold what their own situation requires to leave the UAE and enter Saudi Arabia. Check the current rules with the official authorities; a transfer booking does not confirm entry.' },
    { q: 'Which vehicle is used?', a: 'A private full-size SUV, normally a GMC Yukon or similar, seating up to seven. Tell us the number of people and bags so we can confirm everything fits.' },
    { q: 'Do we pass through Abu Dhabi?', a: 'Yes, the main road west from Dubai runs past Abu Dhabi before continuing to the border. A short stop or a pickup in Abu Dhabi can be arranged if agreed when booking.' },
    { q: 'Can I go straight to King Fahd International Airport?', a: `Yes, ${DMM} can be the drop-off. Because of the distance and the border, we only recommend this with a very generous gap before your flight.` },
    { q: 'Can I book the return from Dammam to Dubai?', a: 'Yes. Tick the return option in the form or send the return date on WhatsApp; the return leg is confirmed separately.' },
    { q: 'Is my booking confirmed when I send the form?', a: 'No. The form or WhatsApp message is a request. The booking is confirmed only after we check the vehicle for your date and agree the fare and pickup with you.' },
    { q: 'What is included in the fare?', a: 'The SUV and driver for the whole trip, fuel, road tolls and the vehicle’s cross-border insurance. Passenger visas or entry fees, meals, hotels and any detours or long waits not agreed at booking are not included.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Dubai to Dammam private SUV transfer',
            url: PAGE_URL,
            serviceType: 'Private cross-border transfer',
            description: 'Private door-to-door SUV with driver from Dubai to Dammam, Al Khobar and Dhahran via the Al Ghuwaifat / Al Batha border.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: [{ '@type': 'City', name: 'Dubai' }, { '@type': 'City', name: 'Dammam' }, { '@type': 'City', name: 'Al Khobar' }],
            offers: { '@type': 'Offer', name: 'Private SUV - Dubai to Dammam, one way', price: PRICE, priceCurrency: 'SAR', url: PAGE_URL },
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const eyebrow = 'text-xs font-bold uppercase tracking-[0.22em]';
const link = 'font-semibold text-[#b5562a] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#1e2140]';
const h3 = 'text-xl font-bold text-[#1e2140]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#b5562a] px-6 py-3.5 font-bold text-white hover:bg-[#954421] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5562a] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#1e2140]/20 px-6 py-3.5 font-bold text-[#1e2140] hover:border-[#b5562a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5562a]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#b5562a] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

// Illustration (not a photo): the Dubai skyline, a long desert road west, the Eastern Province coast at the far end.
function LongRoadWest({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="dm-sky" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#1e2140" />
                    <stop offset="0.55" stopColor="#3b2c4a" />
                    <stop offset="1" stopColor="#d08a52" />
                </linearGradient>
            </defs>
            <rect width="1440" height="640" fill="url(#dm-sky)" />
            <circle cx="620" cy="440" r="58" fill="#f0c48a" fillOpacity="0.3" />
            <path d="M0 540 C 200 520, 460 536, 720 520 C 900 510, 1100 528, 1280 518 V 640 H 0 Z" fill="#9c6a3c" fillOpacity="0.55" />
            <path d="M1260 520 C 1330 516, 1390 514, 1440 514 V 640 H 1240 Z" fill="#3f7f8a" fillOpacity="0.6" />
            {/* Eastern Province skyline (left, destination) */}
            <g fill="#1e2140" fillOpacity="0.55">
                <rect x="70" y="456" width="16" height="64" />
                <rect x="98" y="476" width="8" height="44" />
                <ellipse cx="102" cy="460" rx="22" ry="17" />
                <rect x="124" y="440" width="14" height="80" />
            </g>
            {/* Dubai skyline (right, origin) */}
            <g fill="#1e2140" fillOpacity="0.6">
                <path d="M1300 516 L 1310 300 L 1320 516 Z" />
                <rect x="1330" y="430" width="18" height="86" />
                <path d="M1356 516 V 400 Q 1368 370 1380 400 V 516 Z" />
                <rect x="1388" y="450" width="22" height="66" />
            </g>
            <path d="M1290 548 C 1080 560, 820 572, 560 584 C 380 592, 240 598, 140 604" fill="none" stroke="#f0c48a" strokeWidth="3" strokeDasharray="14 10" strokeLinecap="round" />
        </svg>
    );
}

export default function DubaiDammamRoutePage() {
    return (
        <div className="dubai-dammam-page bg-[#f5f2ec]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#1e2140]">
                <LongRoadWest className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1e2140] via-[#1e2140]/65 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#f0c48a] mb-4`}>UAE to Saudi Eastern Province</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-3">Dubai to Dammam Taxi</h1>
                        <p className="text-xl sm:text-2xl font-bold text-white/90 mb-4">Private SUV from Dubai to Dammam, Al Khobar and Dhahran</p>
                        <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-7 max-w-xl">
                            One private SUV and one driver for the whole day, from your Dubai hotel, home or airport to your door in the Eastern Province, across the Al Ghuwaifat and Al Batha border posts.
                        </p>
                        <div className="inline-flex flex-col rounded-2xl bg-[#f0c48a] text-[#1e2140] px-6 py-4 mb-7">
                            <span className="text-4xl font-black leading-none">{PRICE_TEXT}</span>
                            <span className="text-sm font-semibold mt-1.5">Private SUV · One Way · Per Vehicle</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#1e2140] hover:bg-[#f5f2ec]">
                                <a href={QUOTE_HREF}>Request a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp for Availability</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                            {['Private SUV', 'Door-to-door', 'Dammam · Khobar · Dhahran', 'Al Ghuwaifat / Al Batha'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#f0c48a] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Dubai to Dammam transfer"
                            cta={`Request SUV — ${PRICE_TEXT}`}
                            fromPlaceholder="Hotel, home, office or airport in Dubai"
                            toPlaceholder="Address in Dammam, Al Khobar or Dhahran"
                            fromChips={['Downtown Dubai', 'Dubai Marina', 'Business Bay', 'Deira', DXB]}
                            toChips={['Dammam', 'Al Khobar', 'Dhahran', DMM]}
                            showFlight="auto"
                            returnNote="Return trip Dammam to Dubai also needed - dates to confirm."
                            vehicleOptions={[{ value: SUV, label: `Private SUV (GMC Yukon or similar) - ${PRICE_TEXT}` }]}
                            buttonClass="bg-[#b5562a] hover:bg-[#954421] focus-visible:ring-[#b5562a]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= INTRODUCTION ================= */}
            <section aria-labelledby="intro" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10">
                    <div className={prose}>
                        <h2 id="intro" className={`${h2} mb-2`}>Dubai to Dammam Private Transfer</h2>
                        <p>
                            Dubai to Dammam is a full day&apos;s road journey. You head west out of Dubai, past Abu Dhabi and along the coast road through the western region of the emirate, leave the UAE at Al Ghuwaifat and enter Saudi Arabia at Al Batha. From there the road crosses the eastern desert to the Al Ahsa region and turns north to the Gulf coast, where Dammam, Al Khobar and Dhahran sit side by side.
                        </p>
                        <p>
                            We run this trip as a private transfer in a full-size SUV. The driver collects you at an address in Dubai, stays with you through the border and takes you to the address you give us in the Eastern Province. The fare covers the vehicle, not individual seats, so a family or a small team pays the same as one person.
                        </p>
                        <p>
                            The road is a real alternative to flying for some trips and not for others. If you are travelling alone with a small bag and simply need to be in Dammam, a flight is faster, and we will say so. The road makes sense when several people travel together, when there is a lot of luggage, when you are relocating or carrying equipment, or when you would rather leave from your own door than manage two airports.
                        </p>
                        <p>
                            On a route this long, honest planning matters more than anything. We will tell you what we can confirm, a vehicle, a driver, a fare and a pickup, and what we cannot: how long the border will take on your day, and whether every passenger will be admitted to Saudi Arabia.
                        </p>
                    </div>
                    <aside className="lg:pt-16">
                        <dl className="rounded-3xl bg-[#1e2140] text-white p-7 space-y-4 text-sm">
                            {[
                                ['Distance', 'Approx. 870–890 km'],
                                ['Driving time', 'Around 8–9 hours'],
                                ['Border', 'Al Ghuwaifat (UAE) / Al Batha (Saudi)'],
                                ['Drop-off', 'Dammam, Al Khobar, Dhahran'],
                                ['Vehicle', 'Private SUV (GMC Yukon or similar)'],
                                ['Fare', `${PRICE_TEXT}, one way`],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-white/60">{k}</dt>
                                    <dd className="font-semibold text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-xs text-stone-500 mt-3 px-1">Distance and time depend on your exact pickup and drop-off. Border time is extra.</p>
                    </aside>
                </div>
            </section>

            {/* ================= PICKUP IN DUBAI ================= */}
            <section aria-labelledby="pickup" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    <div className={prose}>
                        <MapPin className="w-7 h-7 text-[#b5562a]" aria-hidden="true" />
                        <h2 id="pickup" className={`${h2} mb-2`}>Pickup in Dubai, Including the Airport</h2>
                        <p>
                            Most Dubai to Dammam trips start at a hotel or a home: Downtown, Dubai Marina, Business Bay, Deira, Jumeirah or a residential community further out. Send the exact address or a pinned location, and tell us about building access, such as a basement car park or a gated community, so the driver knows where to wait.
                        </p>
                        <h3 className={`${h3} pt-2`}>Landing at Dubai International</h3>
                        <p>
                            You can ask for pickup at {DXB}. Send the flight number, the scheduled arrival time and the number of checked bags, and we agree the meeting point with you before the trip. We do not promise access to restricted areas of the terminal. If the flight changes, message us on WhatsApp straight away and we adjust where the driver&apos;s schedule allows.
                        </p>
                        <p>
                            One honest note: after a long flight, a further eight or nine hours on the road plus a border is a lot. If you land in the afternoon or evening, consider a night in Dubai and a morning start. You will reach the border in daylight and arrive in the Eastern Province at a reasonable hour. We can quote either option.
                        </p>
                        <h3 className={`${h3} pt-2`}>Starting time</h3>
                        <p>
                            Most passengers leave Dubai early in the morning. That puts the border crossing around midday and the arrival in Dammam or Al Khobar in the late afternoon or evening, before the end of the day. If you need to arrive by a set time, tell us and we will work back from it.
                        </p>
                        <h3 className={`${h3} pt-2`}>Collecting someone on the way</h3>
                        <p>
                            The road passes Abu Dhabi, so a second passenger or a short stop there can be arranged if agreed at booking. Pickups from Sharjah or the northern emirates add distance and are quoted on request.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-[#1e2140] text-white p-8 lg:sticky lg:top-28">
                        <h3 className="text-xl font-bold mb-4">Ready to plan the trip?</h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-5">Send your Dubai address, the Eastern Province drop-off, the date and the number of people and bags. If you are landing at DXB, add the flight number.</p>
                        <a href={QUOTE_HREF} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f0c48a] px-6 py-3.5 font-bold text-[#1e2140] hover:bg-[#f5d3a6]">Request a quote <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-bold text-white hover:bg-white/10"><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp the details</a>
                    </aside>
                </div>
            </section>

            {/* ================= DROP-OFFS ================= */}
            <section aria-labelledby="dropoff" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="dropoff" className={`${h2} mb-5`}>Drop-off in the Eastern Province</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Dammam, Al Khobar and Dhahran form one connected area, and drop-offs across all three are normally quoted at the same fare. The exact address still matters, because the last part of a long day is not the moment to search for a hotel entrance.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Building2, t: 'Dammam', d: 'Hotels, homes, offices and government addresses across the city.' },
                            { icon: Home, t: 'Al Khobar', d: 'Corniche hotels, residential districts and family homes.' },
                            { icon: Factory, t: 'Dhahran', d: 'Business addresses and residential compounds. Tell us about gate procedures in advance.' },
                            { icon: Plane, t: 'King Fahd International Airport', d: 'Possible, but only with a very generous gap before your flight.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f5f2ec] p-6">
                                <Icon className="w-6 h-6 text-[#b5562a] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#1e2140] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-stone-600 mt-5 flex gap-2"><Info className="w-4 h-4 mt-0.5 text-[#b5562a] shrink-0" aria-hidden="true" />Jubail, Ras Tanura, Al Ahsa and other destinations outside the Dammam–Khobar–Dhahran area are quoted separately.</p>
                </div>
            </section>

            {/* ================= DISTANCE + BORDER ================= */}
            <section aria-labelledby="time" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className={prose}>
                        <h2 id="time" className={`${h2} mb-2`}>Distance, Driving Time and the Border</h2>
                        <p>
                            By road, Dubai to Dammam is roughly 870–890 km. The driving alone takes around 8–9 hours. That is before the border, rest stops and city traffic, so treat the whole journey as a full day rather than an afternoon.
                        </p>
                        <p>
                            The first part of the drive stays inside the UAE for several hours: west past Abu Dhabi and on through the Al Dhafra region to Al Ghuwaifat, the last UAE post. After UAE exit formalities you cross to Al Batha for Saudi entry. The Saudi side then runs across the desert towards Al Ahsa before the final stretch north to the coast.
                        </p>
                        <h3 className={`${h3} pt-2`}>What can lengthen the day</h3>
                        <ul className="space-y-2">
                            <Tick>Immigration and customs checks on both sides, for every passenger.</Tick>
                            <Tick>Queues at Al Ghuwaifat and Al Batha, typically heavier at weekends, holidays and Eid.</Tick>
                            <Tick>Vehicle documentation and inspection when the authorities ask.</Tick>
                            <Tick>Rest, fuel, meal and prayer stops, which you will want on a drive this long.</Tick>
                            <Tick>Evening traffic in Dammam and Al Khobar.</Tick>
                        </ul>
                        <p>
                            We do not give a fixed border time, because there is not an honest one. If you have a deadline in the Eastern Province, tell us what it is and we will advise on the start time, or tell you plainly if the road is the wrong choice for it. For more on the road itself, see <Link href="/distance/dubai-to-dammam/" className={link}>Dubai to Dammam distance</Link>.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-[#14162c] text-white p-7 md:p-10 lg:sticky lg:top-28">
                        <RouteJourney
                            vehicle
                            palette="platinum"
                            stops={[
                                { title: 'Dubai pickup', text: 'Your hotel, home, office or Dubai International Airport.' },
                                { title: 'West past Abu Dhabi', text: 'Several hours on UAE highways through the Al Dhafra region.' },
                                { title: 'Al Ghuwaifat - UAE exit', text: 'UAE exit formalities for passengers and the vehicle.', accent: true },
                                { title: 'Al Batha - Saudi entry', text: 'Saudi immigration and customs; vehicle checks when asked.', accent: true },
                                { title: 'Across to Al Ahsa', text: 'Desert highway with stops on request.' },
                                { title: 'Eastern Province drop-off', text: 'Dammam, Al Khobar, Dhahran or King Fahd International Airport.' },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ================= DOCUMENTS ================= */}
            <section aria-labelledby="documents" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
                    <div>
                        <FileText className="w-7 h-7 text-[#b5562a] mb-4" aria-hidden="true" />
                        <h2 id="documents" className={`${h2} mb-4`}>Border Documents</h2>
                        <p className="text-stone-700 leading-relaxed">
                            Each passenger must hold the passport, visa, residency or other permission their own situation requires to leave the UAE and enter Saudi Arabia. Requirements depend on nationality, residency and visa type, and they change.
                        </p>
                    </div>
                    <div className={prose}>
                        <p>
                            A UAE resident, a GCC citizen and a tourist visiting both countries can face different rules at the same border. We do not publish a single checklist, because it would mislead someone. Please confirm the current requirements for each traveller, including children, with the official authorities or the relevant embassy before booking.
                        </p>
                        <p>
                            Booking a transfer does not establish that anyone can enter Saudi Arabia, and the driver cannot influence immigration decisions. If a passenger is refused, the journey cannot continue for that passenger. On a trip this long, finding that out in advance is worth the effort.
                        </p>
                        <h3 className={`${h3} pt-2`}>Practical tips</h3>
                        <ul className="space-y-2">
                            <Tick>Keep passports, visa copies and residency cards in the cabin with you.</Tick>
                            <Tick>Carry enough water and snacks for stretches between stops.</Tick>
                            <Tick>Have the Eastern Province address saved on your phone.</Tick>
                            <Tick>Pack medicines and essentials in a bag you can reach.</Tick>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLE + PRICE ================= */}
            <section aria-labelledby="vehicle" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicle" className={`${h2} mb-8`}>The Vehicle and the Fare</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-5">
                        <article className="rounded-3xl bg-[#1e2140] text-white overflow-hidden flex flex-col">
                            <div className="relative aspect-[16/9]">
                                <Image src="/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp" alt="Full-size SUV used for the Dubai to Dammam transfer" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                            </div>
                            <div className="p-7 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-white">Private SUV (GMC Yukon or similar)</h3>
                                <p className="text-5xl font-black text-[#f0c48a] mt-2">{PRICE.toLocaleString('en-US')} <span className="text-lg font-semibold text-white/70">SAR</span></p>
                                <p className="text-sm text-white/70 mt-1 mb-5">One way · Price per vehicle · Dammam, Al Khobar or Dhahran</p>
                                <ul className="space-y-2 text-sm text-white/85 mb-6">
                                    <li>Included: the SUV and driver for the whole trip, fuel, road tolls and the vehicle&apos;s cross-border insurance.</li>
                                    <li>Not included: passenger visas or entry fees, meals, hotels and personal costs, and detours or long waits not agreed when booking.</li>
                                </ul>
                                <Link href={BOOK_SUV} className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#f0c48a] px-6 py-3.5 font-bold text-[#1e2140] hover:bg-[#f5d3a6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Book the SUV <Arrow /></Link>
                            </div>
                        </article>
                        <div className={`rounded-3xl bg-white border border-[#1e2140]/10 p-7 md:p-9 ${prose}`}>
                            <p>
                                For nine hours on the road we use a full-size, three-row SUV, normally a GMC Yukon or a vehicle of the same class. Proper seats, room to stretch and a separate luggage area make the difference between arriving tired and arriving exhausted.
                            </p>
                            <p>
                                The SUV seats up to seven, but passengers and luggage share the space. With most seats in use, expect room for roughly five large suitcases. If you are relocating with boxes, carrying sports gear or travelling with a pushchair, tell us when you ask for the quote so we can check it fits.
                            </p>
                            <p>
                                Children travel more comfortably with planned stops and the right seating. Let us know their ages and whether you need child seats. If anyone has mobility needs, mention them early so we can say honestly what is possible.
                            </p>
                            <p>
                                You can ask about another vehicle; it may be possible on some dates at a fare we confirm with you. The vehicle is reserved only once the booking is confirmed. <Link href="/fleet/gmc-yukon/" className={link}>About the GMC Yukon</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHO ================= */}
            <section aria-labelledby="who" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="who" className={`${h2} mb-8`}>Who Books Dubai to Dammam by Road?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: Luggage, t: 'People relocating', d: 'Moving from the UAE to the Eastern Province with more luggage than an airline would allow. Tell us about boxes and large items up front.' },
                            { icon: Factory, t: 'Industrial and project staff', d: 'Engineers and crews starting work around Dhahran and Dammam, sometimes with tools. Send the site address and any gate instructions.' },
                            { icon: Users, t: 'Families', d: 'Visiting relatives or travelling for a holiday with children. Plan an early start and proper breaks on the way.' },
                            { icon: Briefcase, t: 'Business teams', d: <>Several colleagues sharing one vehicle to the same office. Company bookings: <Link href="/services/business/" className={link}>business travel</Link>.</> },
                            { icon: Globe2, t: 'Visitors to both countries', d: 'Tourists combining the UAE and Saudi Arabia. Check your Saudi entry eligibility first, then send your hotel details.' },
                            { icon: Coffee, t: 'People who prefer the road', d: 'Travellers who would rather leave from their own door, stop when they like and avoid two airports.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f5f2ec] p-6">
                                <Icon className="w-6 h-6 text-[#b5562a] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#1e2140] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SCENARIOS ================= */}
            <section aria-labelledby="scenarios" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="scenarios" className={`${h2} mb-4`}>Planning Typical Trips</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">Common kinds of request, not real bookings, with the questions that decide how each is planned.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            { t: 'A family moving from Dubai to Al Khobar', d: 'Two adults, two children and a car full of suitcases leave their Dubai apartment for a new home.', q: ['How many suitcases and boxes?', 'Children’s ages and child seats?', 'Exact new address in Al Khobar?', 'Early start, with a long midday break?'] },
                            { t: 'A project engineer heading to Dhahran', d: 'An engineer leaves a Dubai Marina hotel to start work at a site near Dhahran.', q: ['Site or compound name and gate procedure?', 'Reporting date and time?', 'Tool cases or equipment?', 'Does the employer need an invoice?'] },
                            { t: 'Landing at DXB and continuing to Dammam', d: 'A passenger arrives on a morning flight and wants to reach Dammam the same day.', q: ['Flight number and arrival time?', 'Number of checked bags?', 'Is a same-day arrival really needed?', 'Hotel or home address in Dammam?'] },
                            { t: 'Two colleagues, Dubai to a Dammam office', d: 'A small team travels for a week of meetings and wants one vehicle there and back.', q: ['Office address and first meeting time?', 'Return date to Dubai?', 'Documents checked for both colleagues?', 'One invoice for the company?'] },
                        ].map(({ t, d, q }) => (
                            <div key={t} className="rounded-2xl bg-white border border-[#1e2140]/10 p-7">
                                <h3 className={`${h3} mb-2`}>{t}</h3>
                                <p className="text-stone-600 text-sm leading-relaxed mb-4">{d}</p>
                                <ul className="space-y-1.5 text-sm text-stone-700">
                                    {q.map((x) => <Tick key={x}>{x}</Tick>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= HOW TO BOOK ================= */}
            <section aria-labelledby="book" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-4`}>How to Book Dubai to Dammam</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Fill in the form at the top or send the details on WhatsApp. That is a <strong>request</strong>. We check <strong>availability</strong> for your date, and the booking is <strong>confirmed</strong> once the fare and pickup are agreed with you.
                    </p>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            ['Pickup in Dubai', 'Exact address, or DXB with flight details.'],
                            ['Drop-off', 'Exact address in Dammam, Al Khobar or Dhahran.'],
                            ['Date and time', 'Your preferred local start time.'],
                            ['People and bags', 'Adults, children and suitcases.'],
                            ['Vehicle', `Private SUV at ${PRICE_TEXT}, or ask about others.`],
                            ['Stops and extras', 'Abu Dhabi pickup, child seats, deadlines.'],
                            ['Quote and availability', 'We confirm the vehicle, fare and inclusions.'],
                            ['Confirmation', 'You receive the booking and the pickup instructions.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-[#f5f2ec] p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#b5562a] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#1e2140] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={primary}>Request a Dubai to Dammam quote <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp for Dubai → Dammam</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Taxi Service KSA · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a> (call or WhatsApp)</p>
                </div>
            </section>

            {/* ================= CHECKLIST ================= */}
            <section aria-labelledby="checklist" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
                    <div>
                        <ShieldCheck className="w-7 h-7 text-[#b5562a] mb-4" aria-hidden="true" />
                        <h2 id="checklist" className={`${h2} mb-4`}>Before You Set Off</h2>
                        <p className="text-stone-700 leading-relaxed">Check these against your confirmation the day before. On a nine-hour trip, a small mix-up at the start costs a lot of time later.</p>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            ['Pickup point', 'Exact Dubai address or airport meeting point'],
                            ['Drop-off point', 'Exact address in the Eastern Province'],
                            ['Date and time', 'Local start time in Dubai'],
                            ['Passengers', 'Adults and children, with ages'],
                            ['Luggage', 'Number and size of bags'],
                            ['Vehicle', 'Private SUV or as agreed'],
                            ['Fare', 'The final agreed amount'],
                            ['Payment', 'Method and timing agreed at booking'],
                            ['Border', 'Every passenger’s documents checked'],
                            ['Driver', 'Name, phone and meeting instructions'],
                            ['Special requests', 'Stops, child seats, site access'],
                            ['Return trip', 'Dammam to Dubai, if booked'],
                        ].map(([k, v]) => (
                            <li key={k} className="flex gap-3 rounded-xl bg-white border border-[#1e2140]/10 p-4">
                                <Check className="w-5 h-5 mt-0.5 text-[#b5562a] shrink-0" aria-hidden="true" />
                                <span><span className="font-bold text-[#1e2140]">{k}</span><span className="block text-sm text-stone-600">{v}</span></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#1e2140]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#1e2140] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#1e2140] mb-3">Related Routes and Services</h2>
                    <p className="text-stone-700 mb-5">Heading back later? See <Link href="/routes/dammam-dubai/" className={link}>Dammam to Dubai</Link>. Going to the capital instead? See <Link href="/routes/riyadh-dubai/" className={link}>Riyadh to Dubai</Link>.</p>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Dammam to Dubai taxi', '/routes/dammam-dubai/'],
                            ['Abu Dhabi to Dammam taxi', '/routes/abu-dhabi-dammam/'],
                            ['Riyadh to Dubai taxi', '/routes/riyadh-dubai/'],
                            ['Doha to Dammam taxi', '/routes/doha-dammam/'],
                            ['Dammam Airport taxi', '/dammam-airport-taxi/'],
                            ['Taxi in Dammam', '/locations/dammam/'],
                            ['Taxi in Al Khobar', '/locations/al-khobar/'],
                            ['GMC Yukon', '/fleet/gmc-yukon/'],
                            ['Dubai to Dammam distance', '/distance/dubai-to-dammam/'],
                            ['Book a transfer', '/booking/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#1e2140]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#1e2140] hover:border-[#b5562a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5562a]">{l}</Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
