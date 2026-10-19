import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Info, Users, Briefcase, Luggage, Globe2, Home, Plane, MapPin, ShieldCheck, FileText, Building2, Factory, Anchor } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';

const PAGE_URL = 'https://taxiserviceksa.com/routes/doha-dammam/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const PRICE = 2500;
const PRICE_TEXT = '2,500 SAR';
const SUV = 'GMC Yukon XL / Denali'; // booking-system vehicle name (lib/supabase.ts)
const DOH = 'Hamad International Airport (DOH)';
const DMM = 'King Fahd International Airport (DMM)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent(`Hello, I want a private SUV from Doha to Dammam (${PRICE_TEXT}). Pickup in Doha (or flight number), drop-off in Dammam / Khobar / Dhahran, date, passengers and luggage: `)}`;
const BOOK_SUV = `/booking/?${new URLSearchParams({ from: 'Doha', to: 'Dammam', vehicle: SUV }).toString()}`;

const TITLE = `Doha to Dammam Taxi | Private SUV Transfer – ${PRICE_TEXT}`;
const DESCRIPTION = `Private SUV from Doha to Dammam, Al Khobar or Dhahran for ${PRICE_TEXT} one way. Pickup at Hamad International Airport or any Doha address, via the Abu Samra / Salwa border.`;

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private SUV transfer from Doha to Dammam' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        images: ['https://taxiserviceksa.com/og-image.jpg'],
    },
};

const faqs = [
    { q: 'How much is a taxi from Doha to Dammam?', a: `A private SUV from Doha to Dammam is ${PRICE_TEXT} one way for the whole vehicle, not per passenger. The fare is confirmed with you before the booking is final.` },
    { q: 'Does the same fare cover Al Khobar and Dhahran?', a: 'Dammam, Al Khobar and Dhahran sit close together, and drop-offs across them are normally quoted at the same fare. Places further out, such as Jubail, are quoted separately, so give us the exact address.' },
    { q: 'Can I be picked up at Hamad International Airport?', a: `Yes. Choose ${DOH} as the pickup and send your flight number and arrival time. The meeting point is agreed before the trip and sent with the driver’s name and number.` },
    { q: 'How far is Doha from Dammam by road?', a: 'Roughly 400 km, depending on your exact pickup in Doha and drop-off in the Eastern Province.' },
    { q: 'How long does the drive take?', a: 'Around 4–4.5 hours of driving. The border, rest stops and traffic add to that, so the door-to-door time is usually longer. We cannot guarantee an arrival time.' },
    { q: 'Which border crossing is used?', a: 'Abu Samra on the Qatar side and Salwa on the Saudi side. It is the land crossing between Qatar and Saudi Arabia, with immigration and customs checks on both sides.' },
    { q: 'What documents do I need?', a: 'That depends on each passenger’s nationality, residency and visa. Everyone, including children, needs what their own situation requires to leave Qatar and enter Saudi Arabia. Check the current rules with the official authorities; a transfer booking does not confirm entry.' },
    { q: 'Can I go to King Fahd International Airport for a flight?', a: `Yes, ${DMM} can be the drop-off. Tell us your departure time so we can plan the pickup with a wide margin for the border.` },
    { q: 'Which vehicle is used?', a: 'A private full-size SUV, normally a GMC Yukon or similar. Tell us how many people and bags are travelling so we can confirm everything fits.' },
    { q: 'Can I continue from Dammam to Bahrain?', a: 'Yes, as a separate leg over the King Fahd Causeway. Mention it when booking and we quote it with the Doha to Dammam trip.' },
    { q: 'Can I book a return from Dammam to Doha?', a: 'Yes. Tick the return option in the form or send the return date on WhatsApp, and we confirm the return leg separately.' },
    { q: 'Is a same-day round trip practical?', a: 'It is possible but long: two drives of four hours or more and four border checks in one day. For most people, staying overnight is far more comfortable.' },
    { q: 'Is my booking confirmed when I send the form?', a: 'No. The form or WhatsApp message is a request. The booking is confirmed only after we check the vehicle for your date and agree the fare and pickup with you.' },
    { q: 'What is included in the fare?', a: 'The SUV and driver for the whole trip, fuel, road tolls and the vehicle’s cross-border insurance. Passenger visas or entry fees, meals and any detours or long waits not agreed at booking are not included.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Doha to Dammam private SUV transfer',
            url: PAGE_URL,
            serviceType: 'Private cross-border transfer',
            description: 'Private door-to-door SUV with driver from Doha or Hamad International Airport to Dammam, Al Khobar and Dhahran, via the Abu Samra / Salwa border.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: [{ '@type': 'City', name: 'Doha' }, { '@type': 'City', name: 'Dammam' }, { '@type': 'City', name: 'Al Khobar' }],
            offers: { '@type': 'Offer', name: 'Private SUV - Doha to Dammam, one way', price: PRICE, priceCurrency: 'SAR', url: PAGE_URL },
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const eyebrow = 'text-xs font-bold uppercase tracking-[0.22em]';
const link = 'font-semibold text-[#1f7a5a] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#12352b]';
const h3 = 'text-xl font-bold text-[#12352b]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#1f7a5a] px-6 py-3.5 font-bold text-white hover:bg-[#186148] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f7a5a] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#12352b]/20 px-6 py-3.5 font-bold text-[#12352b] hover:border-[#1f7a5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f7a5a]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#1f7a5a] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

// Illustration (not a photo): Doha towers on the water, a short stretch of desert, the Eastern Province coast with its water tower.
function TwoCoasts({ className = '' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <defs>
                <linearGradient id="dd-sky" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#12352b" />
                    <stop offset="0.6" stopColor="#1d4f40" />
                    <stop offset="1" stopColor="#c9a061" />
                </linearGradient>
            </defs>
            <rect width="1440" height="640" fill="url(#dd-sky)" />
            <circle cx="760" cy="430" r="54" fill="#e8c27a" fillOpacity="0.3" />
            <path d="M0 522 C 140 518, 260 516, 360 520 V 640 H 0 Z" fill="#3f8a7a" fillOpacity="0.6" />
            <g fill="#12352b" fillOpacity="0.55">
                <rect x="60" y="440" width="16" height="78" />
                <path d="M86 518 V 400 Q 98 362 110 400 V 518 Z" />
                <rect x="122" y="452" width="22" height="66" />
                <path d="M154 518 V 414 L 164 386 L 174 414 V 518 Z" />
            </g>
            <path d="M340 545 C 520 524, 760 538, 1000 522 V 640 H 340 Z" fill="#9c6a3c" fillOpacity="0.55" />
            <path d="M1000 522 C 1160 516, 1300 514, 1440 516 V 640 H 1000 Z" fill="#3f8a7a" fillOpacity="0.6" />
            {/* Eastern Province skyline with a water tower */}
            <g fill="#12352b" fillOpacity="0.6">
                <rect x="1080" y="446" width="18" height="72" />
                <rect x="1112" y="470" width="8" height="48" />
                <ellipse cx="1116" cy="452" rx="26" ry="20" />
                <path d="M1110 432 L 1116 400 L 1122 432 Z" />
                <rect x="1150" y="430" width="16" height="88" />
                <rect x="1176" y="458" width="24" height="60" />
            </g>
            <path d="M190 600 C 420 590, 700 576, 920 562 C 990 558, 1040 552, 1090 546" fill="none" stroke="#e8c27a" strokeWidth="3" strokeDasharray="14 10" strokeLinecap="round" />
        </svg>
    );
}

export default function DohaDammamRoutePage() {
    return (
        <div className="doha-dammam-page bg-[#f3f1ea]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#12352b]">
                <TwoCoasts className="absolute inset-0 -z-10 w-full h-full" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#12352b] via-[#12352b]/65 to-transparent" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#e8c27a] mb-4`}>Qatar to Saudi Eastern Province</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-3">Doha to Dammam Taxi</h1>
                        <p className="text-xl sm:text-2xl font-bold text-white/90 mb-4">Private SUV from Doha or Hamad Airport to Dammam, Al Khobar and Dhahran</p>
                        <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-7 max-w-xl">
                            A private SUV and driver for your group only, from your flight, hotel or home in Doha to your address in the Eastern Province, across the Abu Samra and Salwa border posts.
                        </p>
                        <div className="inline-flex flex-col rounded-2xl bg-[#e8c27a] text-[#12352b] px-6 py-4 mb-7">
                            <span className="text-4xl font-black leading-none">{PRICE_TEXT}</span>
                            <span className="text-sm font-semibold mt-1.5">Private SUV · One Way · Per Vehicle</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#12352b] hover:bg-[#f3f1ea]">
                                <a href={QUOTE_HREF}>Request a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp for Availability</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                            {['Airport or address pickup', 'Private SUV', 'Dammam · Khobar · Dhahran', 'Abu Samra / Salwa border'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#e8c27a] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Doha to Dammam transfer"
                            cta={`Request SUV — ${PRICE_TEXT}`}
                            fromPlaceholder="Hamad Airport, hotel, home or office in Doha"
                            toPlaceholder="Address in Dammam, Al Khobar or Dhahran"
                            fromChips={[DOH, 'Doha hotel', 'West Bay', 'The Pearl', 'Lusail']}
                            toChips={['Dammam', 'Al Khobar', 'Dhahran', DMM]}
                            showFlight="auto"
                            returnNote="Return trip Dammam to Doha also needed - dates to confirm."
                            vehicleOptions={[{ value: SUV, label: `Private SUV (GMC Yukon or similar) - ${PRICE_TEXT}` }]}
                            buttonClass="bg-[#1f7a5a] hover:bg-[#186148] focus-visible:ring-[#1f7a5a]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= INTRODUCTION ================= */}
            <section aria-labelledby="intro" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10">
                    <div className={prose}>
                        <h2 id="intro" className={`${h2} mb-2`}>Doha to Dammam Private Transfer</h2>
                        <p>
                            Doha and Dammam are closer than many visitors expect. Once you leave Qatar at Abu Samra and enter Saudi Arabia at Salwa, the road runs through the Al Ahsa oasis region and up to the Eastern Province coast, where Dammam, Al Khobar and Dhahran merge into one large metropolitan area. Without a stop it is roughly four hours of driving, which makes it one of the shorter cross-border trips in the Gulf.
                        </p>
                        <p>
                            We run it as a private transfer in a full-size SUV. The driver collects your group at Hamad International Airport or at an address in Doha, handles the vehicle side of the border, and drops you at the hotel, home, office or compound you give us in the Eastern Province. No other passengers ride with you, and the fare is for the vehicle rather than per seat.
                        </p>
                        <p>
                            The route has its own rhythm. Many passengers are heading to work in the energy and industrial sector around Dhahran and Dammam. Others are families visiting relatives on the other side of the border, travellers making their way to King Fahd International Airport, or people using Dammam as a stepping stone to Bahrain over the King Fahd Causeway. Each of those trips needs slightly different planning, and this page explains what to tell us so the transfer fits your day.
                        </p>
                        <p>
                            We are straightforward about what is outside our control. The border sets its own pace, and immigration decides who enters Saudi Arabia. Our part is a confirmed vehicle, a fixed fare, a driver who crosses here regularly, and honest advice on timing.
                        </p>
                    </div>
                    <aside className="lg:pt-16">
                        <dl className="rounded-3xl bg-[#12352b] text-white p-7 space-y-4 text-sm">
                            {[
                                ['Distance', 'Approx. 400 km'],
                                ['Driving time', 'Around 4–4.5 hours'],
                                ['Border', 'Abu Samra (Qatar) / Salwa (Saudi)'],
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

            {/* ================= AIRPORT ================= */}
            <section aria-labelledby="airport" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    <div className={prose}>
                        <Plane className="w-7 h-7 text-[#1f7a5a]" aria-hidden="true" />
                        <h2 id="airport" className={`${h2} mb-2`}>Hamad Airport to Dammam and Al Khobar</h2>
                        <p>
                            Plenty of travellers bound for the Eastern Province fly into Doha because of the flight options, then continue by road. That works well, but the order of events matters: you clear Qatar arrival formalities at the airport, collect your bags, meet the driver, and later leave Qatar again at Abu Samra before entering Saudi Arabia at Salwa. It is two international steps, not one.
                        </p>
                        <h3 className={`${h3} pt-2`}>Details we need for an airport pickup</h3>
                        <ul className="space-y-2">
                            <Tick>Flight number and the scheduled arrival date and time in Doha.</Tick>
                            <Tick>Number of adults and children, and the number of checked suitcases.</Tick>
                            <Tick>The exact drop-off: hotel name, compound, office or home address in Dammam, Al Khobar or Dhahran.</Tick>
                            <Tick>A phone number with WhatsApp that will work after you land.</Tick>
                            <Tick>Any deadline at the other end, such as a shift start or a hotel check-in cut-off.</Tick>
                        </ul>
                        <h3 className={`${h3} pt-2`}>Meeting point and delays</h3>
                        <p>
                            The meeting point at Hamad International Airport is agreed before the trip and sent with the driver&apos;s details. Give yourself time for immigration and baggage before looking for the driver; we do not promise access to restricted parts of the terminal. If your flight is delayed, rerouted or rebooked, message us on WhatsApp straight away with the new details. We adjust the pickup where the driver&apos;s schedule allows and tell you if the change affects the booking.
                        </p>
                        <h3 className={`${h3} pt-2`}>Arriving late in the evening</h3>
                        <p>
                            A late landing in Doha means a late border crossing and arrival in the Eastern Province well into the night. That is fine for many passengers, but if you would rather cross in daylight, an overnight stay in Doha and a morning pickup from your hotel is a sensible alternative. We can quote either.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-[#12352b] text-white p-8 lg:sticky lg:top-28">
                        <h3 className="text-xl font-bold mb-4">Landing at DOH?</h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-5">Pick &ldquo;{DOH}&rdquo; in the form and a flight number field appears. Add your Eastern Province address and we take it from there.</p>
                        <a href={QUOTE_HREF} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e8c27a] px-6 py-3.5 font-bold text-[#12352b] hover:bg-[#f0d49c]">Request airport pickup <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-bold text-white hover:bg-white/10"><WhatsAppIcon className="w-4 h-4 fill-current" /> Send flight details</a>
                    </aside>
                </div>
            </section>

            {/* ================= EASTERN PROVINCE DROP-OFFS ================= */}
            <section aria-labelledby="dropoff" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="dropoff" className={`${h2} mb-5`}>Where in the Eastern Province?</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        &ldquo;Dammam&rdquo; on a booking often means somewhere in the wider metropolitan area. Telling us the exact place lets us confirm the fare and plan the last part of the drive. A pinned location on WhatsApp removes any doubt.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Building2, t: 'Dammam', d: 'City hotels, residential districts, the corniche and government offices.' },
                            { icon: Home, t: 'Al Khobar', d: 'Hotels along the corniche, family homes and the main shopping streets.' },
                            { icon: Factory, t: 'Dhahran', d: 'Business and industrial addresses and residential compounds. Some sites have their own gate procedures, so tell us in advance.' },
                            { icon: Plane, t: 'King Fahd International Airport', d: 'For an onward flight from Dammam. Send the departure time so the pickup has enough margin.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f3f1ea] p-6">
                                <Icon className="w-6 h-6 text-[#1f7a5a] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#12352b] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-stone-600 mt-5 flex gap-2"><Info className="w-4 h-4 mt-0.5 text-[#1f7a5a] shrink-0" aria-hidden="true" />Jubail, Ras Tanura, Al Ahsa and other places beyond the Dammam–Khobar–Dhahran area are quoted separately. Pickup in Doha can be the airport, a hotel, a home or an office.</p>
                </div>
            </section>

            {/* ================= DISTANCE + BORDER ================= */}
            <section aria-labelledby="time" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className={prose}>
                        <h2 id="time" className={`${h2} mb-2`}>Distance, Time and the Salwa Crossing</h2>
                        <p>
                            The road distance from Doha to Dammam is about 400 km, and the driving itself takes around 4–4.5 hours. From central Doha it is a little over an hour south-west to Abu Samra. After the two border posts, the road heads inland towards Al Ahsa and then north to the coast, entering the Dammam area from the south.
                        </p>
                        <p>
                            The border is the part nobody can schedule. On a quiet weekday the crossing can be quick; around weekends, school holidays and especially Eid, queues on both sides can grow significantly. Rather than quote a fixed border time, we look at your date and tell you what to expect in broad terms.
                        </p>
                        <h3 className={`${h3} pt-2`}>Things that change the total time</h3>
                        <ul className="space-y-2">
                            <Tick>Passport and visa checks for every passenger on both sides.</Tick>
                            <Tick>Customs checks of the vehicle and luggage when requested.</Tick>
                            <Tick>Day of the week, public holidays and the time you reach the border.</Tick>
                            <Tick>Rest, prayer and fuel stops on the way.</Tick>
                            <Tick>Rush-hour traffic in Dammam and Al Khobar.</Tick>
                        </ul>
                        <p>
                            Because the drive is only about four hours, people sometimes plan a same-day round trip. It is possible, but it means two border crossings in each direction and eight or more hours on the road. For most passengers an overnight stay is the better choice. If you need to be somewhere at a fixed time, tell us the deadline and we will suggest a pickup time with a sensible margin. More on the road itself: <Link href="/distance/doha-to-dammam/" className={link}>Doha to Dammam distance</Link>.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-[#0b241d] text-white p-7 md:p-10 lg:sticky lg:top-28">
                        <RouteJourney
                            vehicle
                            palette="platinum"
                            stops={[
                                { title: 'Doha pickup', text: 'Hamad International Airport, a hotel, home or office.' },
                                { title: 'Abu Samra - Qatar exit', text: 'About an hour from central Doha. Exit checks for passengers and the vehicle.', accent: true },
                                { title: 'Salwa - Saudi entry', text: 'Saudi immigration and customs; vehicle checks when asked.', accent: true },
                                { title: 'Through Al Ahsa', text: 'Inland highway north towards the coast, with stops on request.' },
                                { title: 'Eastern Province drop-off', text: 'Your address in Dammam, Al Khobar, Dhahran, or King Fahd International Airport.' },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ================= DOCUMENTS ================= */}
            <section aria-labelledby="documents" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
                    <div>
                        <FileText className="w-7 h-7 text-[#1f7a5a] mb-4" aria-hidden="true" />
                        <h2 id="documents" className={`${h2} mb-4`}>Documents and Preparation</h2>
                        <p className="text-stone-700 leading-relaxed">
                            Every passenger needs the passport, visa, residency or other permission that applies to them for leaving Qatar and entering Saudi Arabia. Requirements differ by nationality, residency and visa type, and they change.
                        </p>
                    </div>
                    <div className={prose}>
                        <p>
                            A worker joining a project in Dhahran, a Qatari family visiting relatives and a tourist on an e-visa may each need something different. We do not publish one checklist for everyone, because it would be wrong for someone. Please confirm the current requirements for each traveller, children included, with the official authorities or the relevant embassy before booking.
                        </p>
                        <p>
                            A transfer booking does not confirm that anyone can enter Saudi Arabia, and our driver has no say in immigration decisions. If someone in your group is not admitted, the trip cannot continue for that person. A few minutes of checking beforehand avoids that situation.
                        </p>
                        <h3 className={`${h3} pt-2`}>On the day</h3>
                        <ul className="space-y-2">
                            <Tick>Keep passports, visa printouts and residency cards with you in the cabin.</Tick>
                            <Tick>If you are joining an employer, carry any letter or contact details they gave you.</Tick>
                            <Tick>Have the address of your accommodation in the Eastern Province ready.</Tick>
                            <Tick>Keep medicines and essentials in a small bag rather than in the suitcases.</Tick>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLE + PRICE ================= */}
            <section aria-labelledby="vehicle" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicle" className={`${h2} mb-8`}>The Vehicle and the Fare</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-5">
                        <article className="rounded-3xl bg-[#12352b] text-white overflow-hidden flex flex-col">
                            <div className="relative aspect-[16/9]">
                                <Image src="/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp" alt="Full-size SUV used for the Doha to Dammam transfer" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                            </div>
                            <div className="p-7 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-white">Private SUV (GMC Yukon or similar)</h3>
                                <p className="text-5xl font-black text-[#e8c27a] mt-2">{PRICE.toLocaleString('en-US')} <span className="text-lg font-semibold text-white/70">SAR</span></p>
                                <p className="text-sm text-white/70 mt-1 mb-5">One way · Price per vehicle · Dammam, Al Khobar or Dhahran</p>
                                <ul className="space-y-2 text-sm text-white/85 mb-6">
                                    <li>Included: the SUV and driver for the whole trip, fuel, road tolls and the vehicle&apos;s cross-border insurance.</li>
                                    <li>Not included: passenger visas or entry fees, meals and personal costs, and detours or long waits not agreed when booking.</li>
                                </ul>
                                <Link href={BOOK_SUV} className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#e8c27a] px-6 py-3.5 font-bold text-[#12352b] hover:bg-[#f0d49c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Book the SUV <Arrow /></Link>
                            </div>
                        </article>
                        <div className={`rounded-3xl bg-white border border-[#12352b]/10 p-7 md:p-9 ${prose}`}>
                            <p>
                                This route is driven in a full-size, three-row SUV, normally a GMC Yukon or a vehicle of the same class. For a four-hour trip with a border in the middle, the extra room matters: people can sit properly, and suitcases go in the back rather than at your feet.
                            </p>
                            <p>
                                The SUV seats up to seven, but seats and luggage share the same space. With most seats in use there is room for roughly five large suitcases. A full group with a full set of large bags will be tight, so please tell us honestly how many people and how much luggage are travelling.
                            </p>
                            <p>
                                Workers starting a new posting often travel with more than the usual luggage, and families visiting for a long stay do too. If you are carrying tool cases, boxes, a pushchair or sports equipment, mention it when you request the quote. The same goes for child seats or any accessibility needs.
                            </p>
                            <p>
                                You can ask about a different vehicle; it may be possible on some dates, at a fare we confirm with you. The vehicle is reserved only once the booking is confirmed. <Link href="/fleet/gmc-yukon/" className={link}>About the GMC Yukon</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHO ================= */}
            <section aria-labelledby="who" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="who" className={`${h2} mb-8`}>Who Travels from Doha to Dammam?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: Factory, t: 'Energy and industrial staff', d: 'People joining or returning to work around Dhahran and Dammam. Give us the site or compound name and any gate instructions, and the shift time if you are going straight to work.' },
                            { icon: Briefcase, t: 'Business visitors', d: <>Meetings in Al Khobar or Dammam. Tell us the meeting time as well as the address, and we set the pickup from it. Company bookings: <Link href="/services/business/" className={link}>business travel</Link>.</> },
                            { icon: Users, t: 'Families', d: 'Visiting relatives or moving across the border with children and bags. Mention ages and child seats, and plan a proper break in Al Ahsa on the way.' },
                            { icon: Plane, t: 'Airport connections', d: `Landing at Doha, or flying out of ${DMM}. Send flight times on both ends and we plan around the border.` },
                            { icon: Anchor, t: 'Onward to Bahrain', d: 'Dammam is the last stop before the King Fahd Causeway. Ask us to quote the Bahrain leg together with this trip.' },
                            { icon: Globe2, t: 'Visitors and tourists', d: 'International travellers adding the Eastern Province to a Qatar trip. Check your Saudi entry eligibility first, then send your hotel details.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f3f1ea] p-6">
                                <Icon className="w-6 h-6 text-[#1f7a5a] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#12352b] mb-2">{t}</h3>
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
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">Examples of common requests, not real bookings, with the questions that shape each one.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            { t: 'Flight into Doha, starting work in Dhahran', d: 'A new employee lands at Hamad and needs to reach a company compound the same day.', q: ['What time does the flight land?', 'What is the compound name and gate procedure?', 'Is there a reporting time at work?', 'How many bags and tool cases?'] },
                            { t: 'Family weekend in Al Khobar', d: 'Parents and three children travel from their home in Doha to stay with relatives.', q: ['Which day, and is it a holiday weekend?', 'Children’s ages and child seats?', 'Exact address in Al Khobar?', 'Return date to Doha?'] },
                            { t: 'Doha hotel to a Dammam meeting', d: 'A consultant leaves a West Bay hotel for an afternoon meeting in Dammam.', q: ['Meeting time and exact office address?', 'How much margin for the border is acceptable?', 'Same-day return, or a night in Al Khobar?', 'Invoice needed for the company?'] },
                            { t: 'Doha to Dammam, then Bahrain', d: 'A traveller wants to continue from the Eastern Province to Manama the next day.', q: ['Where to stay overnight in Dammam or Al Khobar?', 'Bahrain address for the second leg?', 'Documents for both Saudi Arabia and Bahrain?', 'Luggage for both legs?'] },
                        ].map(({ t, d, q }) => (
                            <div key={t} className="rounded-2xl bg-white border border-[#12352b]/10 p-7">
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
                    <h2 id="book" className={`${h2} mb-4`}>How to Book Doha to Dammam</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Use the form at the top or send the same details on WhatsApp. Your message is a <strong>request</strong>; we then check <strong>availability</strong> for your date; the booking is <strong>confirmed</strong> once the fare and pickup are agreed with you.
                    </p>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            ['Pickup in Doha', 'Hamad Airport or an exact address.'],
                            ['Drop-off', 'Exact address in Dammam, Al Khobar or Dhahran.'],
                            ['Date and time', 'Your preferred local pickup time.'],
                            ['People and bags', 'Adults, children and suitcases.'],
                            ['Vehicle', `Private SUV at ${PRICE_TEXT}, or ask about others.`],
                            ['Flight details', 'For airport pickups or onward flights.'],
                            ['Quote and availability', 'We confirm the vehicle, fare and inclusions.'],
                            ['Confirmation', 'You receive the booking and the pickup instructions.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-[#f3f1ea] p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#1f7a5a] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#12352b] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={primary}>Request a Doha to Dammam quote <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp for Doha → Dammam</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Taxi Service KSA · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a> (call or WhatsApp)</p>
                </div>
            </section>

            {/* ================= CHECKLIST ================= */}
            <section aria-labelledby="checklist" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
                    <div>
                        <ShieldCheck className="w-7 h-7 text-[#1f7a5a] mb-4" aria-hidden="true" />
                        <h2 id="checklist" className={`${h2} mb-4`}>Before You Set Off</h2>
                        <p className="text-stone-700 leading-relaxed">Check these against your confirmation the day before. If anything is unclear, ask us then rather than at the pickup.</p>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            ['Pickup point', 'Exact address or airport meeting point'],
                            ['Drop-off point', 'Exact address in the Eastern Province'],
                            ['Date and time', 'Local pickup time in Doha'],
                            ['Passengers', 'Adults and children, with ages'],
                            ['Luggage', 'Number and size of bags'],
                            ['Vehicle', 'Private SUV or as agreed'],
                            ['Fare', 'The final agreed amount'],
                            ['Payment', 'Method and timing agreed at booking'],
                            ['Border', 'Every passenger’s documents checked'],
                            ['Driver', 'Name, phone and meeting instructions'],
                            ['Special requests', 'Child seats, stops, site access'],
                            ['Return or onward leg', 'Dammam to Doha or Bahrain, if booked'],
                        ].map(([k, v]) => (
                            <li key={k} className="flex gap-3 rounded-xl bg-white border border-[#12352b]/10 p-4">
                                <Check className="w-5 h-5 mt-0.5 text-[#1f7a5a] shrink-0" aria-hidden="true" />
                                <span><span className="font-bold text-[#12352b]">{k}</span><span className="block text-sm text-stone-600">{v}</span></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#12352b]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#12352b] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#12352b] mb-3">Related Routes and Services</h2>
                    <p className="text-stone-700 mb-5 flex items-center gap-2"><MapPin className="w-4 h-4 text-[#1f7a5a]" aria-hidden="true" />Heading back? See <Link href="/routes/dammam-doha/" className={link}>Dammam to Doha</Link>. Going on to the capital? See <Link href="/routes/doha-riyadh/" className={link}>Doha to Riyadh</Link>.</p>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Dammam to Doha taxi', '/routes/dammam-doha/'],
                            ['Doha to Riyadh taxi', '/routes/doha-riyadh/'],
                            ['Dammam to Bahrain taxi', '/routes/dammam-bahrain/'],
                            ['Dammam Airport taxi', '/dammam-airport-taxi/'],
                            ['Taxi in Dammam', '/locations/dammam/'],
                            ['Taxi in Al Khobar', '/locations/al-khobar/'],
                            ['Taxi in Dhahran', '/locations/dhahran/'],
                            ['GMC Yukon', '/fleet/gmc-yukon/'],
                            ['Doha to Dammam distance', '/distance/doha-to-dammam/'],
                            ['Book a transfer', '/booking/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#12352b]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#12352b] hover:border-[#1f7a5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f7a5a]">{l}</Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
