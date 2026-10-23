import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, X, Info, MapPin, FileText, Moon, BedDouble, Users, Landmark } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';

const PAGE_URL = 'https://taxiserviceksa.com/routes/doha-makkah/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const SUV = 'GMC Yukon XL / Denali'; // booking-system vehicle name (lib/supabase.ts)
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Assalamu alaikum, I want a private car from Doha to Makkah for Umrah. Doha pickup, Makkah hotel, date, passengers, luggage, and one long drive or a night in Riyadh: ')}`;

const TITLE = 'Doha to Makkah Private Car | Umrah Transfer Guide';
const DESCRIPTION = 'Private car from Doha to Makkah for Umrah: one SUV from your door in Qatar to your Makkah hotel via Salwa, Riyadh and Taif, with a stop at the Meeqat. Request your quote on WhatsApp.';

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car from Doha to Makkah for Umrah' }],
    },
};

const faqs = [
    { q: 'Can I go from Doha to Makkah by private car for Umrah?', a: 'Yes. One SUV and driver collect you in Doha, cross the Abu Samra / Salwa border with you, and drive on through Riyadh and Taif to your hotel in Makkah, with a stop at the Meeqat on the way.' },
    { q: 'How far is it and how long does it take?', a: 'Roughly 1,450–1,550 km, depending on your exact pickup and hotel. Around 14–16 hours of driving, plus the border and stops. Many families split it with a night in Riyadh.' },
    { q: 'Where is the Meeqat on this route?', a: 'Coming from the east through Riyadh and Taif, pilgrims normally pass the Meeqat of Qarn al-Manazil at As-Sail Al-Kabir, or Wadi Muharram if the car takes the Al Hada road. Dhul Hulaifah is the Meeqat for the Madinah road, not this one. Ask a scholar if your situation is different.' },
    { q: 'Will the driver stop at the Meeqat?', a: 'Yes. Tell us when booking and the stop is planned in. Allow time there to change into Ihram and pray if you wish.' },
    { q: 'Can the car drop us at the Haram gate?', a: 'Not usually. Cars cannot reach the area right around the Haram; you are dropped at your hotel, or at the nearest point where cars are allowed, which can mean a short walk. Send your hotel name so we can plan it.' },
    { q: 'How much does it cost?', a: 'We quote each trip for the whole vehicle, based on your pickup, hotel, date and whether you split the journey. The fare is agreed before you book.' },
    { q: 'What is included?', a: 'The SUV and driver for the trip, fuel, road tolls and the vehicle’s cross-border insurance, and normal stops including the Meeqat. Visas, hotels and meals are not included.' },
    { q: 'What documents do we need?', a: 'Every passenger needs what their own nationality and residency require to leave Qatar and enter Saudi Arabia, and to perform Umrah. Check current official Saudi guidance before booking; a car booking does not confirm entry.' },
    { q: 'Can non-Muslims travel in the car to Makkah?', a: 'No. Only Muslims may enter Makkah. Please make sure everyone in the vehicle can enter.' },
    { q: 'Can we split the trip with a night in Riyadh?', a: 'Yes, and it is often the most comfortable way. The second day and the driver’s accommodation are quoted with the trip.' },
    { q: 'We are a big group. Can you send more than one car?', a: 'Yes, if available for your date. Send the total number of people and bags; we quote the vehicles together and coordinate the departure.' },
    { q: 'Can we go on to Madinah or come back to Doha?', a: 'Yes. Makkah to Madinah and the return to Doha can be quoted together with this trip.' },
    { q: 'Is my booking confirmed when I send a message?', a: 'No. It is confirmed once we have agreed the vehicle, fare and plan with you.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Doha to Makkah private Umrah transfer',
            url: PAGE_URL,
            serviceType: 'Private cross-border Umrah transfer',
            description: 'Private SUV with driver from Doha to Makkah via the Abu Samra / Salwa border, Riyadh and Taif, with a Meeqat stop.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: [{ '@type': 'City', name: 'Doha' }, { '@type': 'City', name: 'Makkah' }],
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Routes', item: 'https://taxiserviceksa.com/routes/' },
                { '@type': 'ListItem', position: 3, name: 'Doha to Makkah', item: PAGE_URL },
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
const link = 'font-semibold text-[#047857] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#0b2a20]';
const h3 = 'text-xl font-bold text-[#0b2a20]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#047857] px-6 py-3.5 font-bold text-white hover:bg-[#065f46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#0b2a20]/20 px-6 py-3.5 font-bold text-[#0b2a20] hover:border-[#047857] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#047857] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function DohaMakkahRoutePage() {
    return (
        <div className="doha-makkah-page bg-[#f3f6f3]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0b2a20]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#1f6b4e_0%,_#0b2a20_62%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#fcd34d] mb-4`}>Qatar → Makkah · Umrah by road</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Doha to Makkah by Private Car: Umrah Transfer Guide</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            One car for your family from your door in Doha to your hotel in Makkah: across the Salwa border, through Riyadh and Taif, with a stop at the Meeqat to enter Ihram. In one long drive, or with a night in Riyadh.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#0b2a20] hover:bg-[#f3f6f3]">
                                <a href={QUOTE_HREF}>Request a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Plan on WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {['Meeqat stop planned', 'One car the whole way', 'Night in Riyadh optional', 'Fare per vehicle'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#fcd34d] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Plan your Doha to Makkah Umrah trip"
                            cta="Send my request"
                            fromPlaceholder="Your address in Doha"
                            toPlaceholder="Your hotel in Makkah"
                            fromChips={['Doha', 'West Bay', 'Al Wakrah', 'Al Rayyan']}
                            toChips={['Makkah hotel', 'Ajyad', 'Aziziyah']}
                            stop={{ label: 'Night in Riyadh on the way', note: 'Split the trip with a night in Riyadh - please quote both days.' }}
                            returnNote="Return trip to Doha (or on to Madinah) also needed - dates to confirm."
                            vehicleOptions={[{ value: SUV, label: 'Private SUV (GMC Yukon or similar)' }, { value: '', label: 'More than one car / not sure' }]}
                            buttonClass="bg-[#047857] hover:bg-[#065f46] focus-visible:ring-[#047857]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= OVERVIEW ================= */}
            <section aria-labelledby="overview" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10">
                    <div className={prose}>
                        <h2 id="overview" className={`${h2} mb-2`}>Umrah from Qatar by Road</h2>
                        <p>
                            Driving from Doha to Makkah is a long journey: out of Qatar at Abu Samra, into Saudi Arabia at Salwa, across to Riyadh, and then the whole width of the Najd plateau to Taif and down to Makkah. It is roughly 1,450–1,550 km, the best part of a day and a night on the road.
                        </p>
                        <p>
                            Families choose it because everyone travels together, with the luggage and the Zamzam for the way home in the back, and the car stops at the Meeqat so everyone can enter Ihram properly. It also avoids two airports and the transfers at each end. For a single traveller in a hurry, flying to Jeddah is far quicker, and we would say so.
                        </p>
                        <p>
                            Below: how the trip is planned, the Meeqat on this route, where you are dropped in Makkah, documents, the vehicle, and how to book.
                        </p>
                    </div>
                    <aside className="lg:pt-16">
                        <dl className="rounded-3xl bg-[#0b2a20] text-white p-7 space-y-4 text-sm">
                            {[
                                ['Road distance', 'About 1,450–1,550 km'],
                                ['Driving time', 'Around 14–16 hours'],
                                ['Border', 'Abu Samra (Qatar) / Salwa (Saudi)'],
                                ['Meeqat', 'Qarn al-Manazil (As-Sail) or Wadi Muharram'],
                                ['Vehicle', 'Private SUV (GMC Yukon or similar)'],
                                ['Fare', 'Quoted per vehicle'],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-white/60">{k}</dt>
                                    <dd className="font-semibold text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-xs text-stone-500 mt-3 px-1">Estimates; the border and stops add time. <Link href="/distance/doha-to-makkah/" className={link}>Distance details</Link>.</p>
                    </aside>
                </div>
            </section>

            {/* ================= ONE DAY OR TWO ================= */}
            <section aria-labelledby="split" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="split" className={`${h2} mb-3`}>One Long Drive or a Night in Riyadh?</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">Decide this first; it shapes the whole trip and the fare.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-3xl bg-white border border-[#0b2a20]/10 p-7">
                            <Moon className="w-7 h-7 text-[#047857] mb-3" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>Straight through</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">Leave Doha in the evening or early morning and arrive in Makkah the next day. It is the quickest option, but a very long time in the car, and you arrive tired before performing Umrah. We confirm how the driver&apos;s rest is planned before you book.</p>
                        </div>
                        <div className="rounded-3xl bg-[#0b2a20] text-white p-7">
                            <BedDouble className="w-7 h-7 text-[#fcd34d] mb-3" aria-hidden="true" />
                            <h3 className="text-xl font-bold mb-2">Two days, with a night in Riyadh</h3>
                            <p className="text-sm text-white/85 leading-relaxed">Doha to Riyadh is around six to seven hours of driving plus the border. Sleep in Riyadh, then make the long run to Makkah the next day, entering Ihram at the Meeqat before you arrive. Easier for families, children and older pilgrims. The extra day and the driver&apos;s accommodation are quoted up front.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= THE ROUTE ================= */}
            <section aria-labelledby="route" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className={prose}>
                        <h2 id="route" className={`${h2} mb-2`}>The Route</h2>
                        <p>
                            From Doha the road runs south-west to the Abu Samra post, where you leave Qatar, and the Salwa post, where you enter Saudi Arabia. The driver handles the car&apos;s papers and insurance; each passenger goes through passport control. How long the crossing takes varies with the day; around holidays and the busy Umrah months it can be slow.
                        </p>
                        <p>
                            From Salwa the road crosses Al Ahsa to Riyadh, then follows Highway 40 west for hours across the plateau to the Taif area. Near the end of the climb into the mountains is the Meeqat, and from there the road descends to Makkah.
                        </p>
                        <p>
                            Stops for fuel, meals and prayer are part of a journey this long; ask for a break whenever you need one.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-[#071c15] text-white p-7 md:p-10 lg:sticky lg:top-28">
                        <RouteJourney
                            vehicle
                            palette="platinum"
                            stops={[
                                { title: 'Doha pickup', text: 'Your home or hotel, at the time agreed.' },
                                { title: 'Abu Samra / Salwa', text: 'Qatar exit and Saudi entry. The driver handles the car’s papers.', accent: true },
                                { title: 'Riyadh', text: 'A long break, or a night if you split the trip.' },
                                { title: 'Highway 40 to Taif', text: 'The longest stretch, across the Najd plateau.' },
                                { title: 'Meeqat', text: 'Qarn al-Manazil at As-Sail Al-Kabir, or Wadi Muharram on the Al Hada road. Enter Ihram here.', accent: true },
                                { title: 'Makkah', text: 'Your hotel, or the nearest point cars may reach.' },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ================= MEEQAT ================= */}
            <section aria-labelledby="meeqat" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div className={prose}>
                        <Landmark className="w-7 h-7 text-[#047857]" aria-hidden="true" />
                        <h2 id="meeqat" className={`${h2} mb-2`}>The Meeqat on the Doha–Makkah Road</h2>
                        <p>
                            Pilgrims coming from the east through Riyadh and Taif approach Makkah from the Najd side. The Meeqat for that direction is <strong className="text-[#0b2a20]">Qarn al-Manazil</strong>, at the town of As-Sail Al-Kabir. If the car takes the Al Hada road down from Taif instead, the equivalent point is <strong className="text-[#0b2a20]">Wadi Muharram</strong>. Both have mosques and facilities for changing into Ihram.
                        </p>
                        <p>
                            <strong className="text-[#0b2a20]">Dhul Hulaifah</strong>, near Madinah, is the Meeqat for pilgrims coming from Madinah. It applies only if you travel to Makkah via Madinah, which is a different route.
                        </p>
                        <p>
                            Tell us when booking that you are going for Umrah, and the Meeqat stop is planned into the trip. If you are unsure about your own circumstances, for example if you are not starting Umrah straight away, ask a qualified scholar before you travel. Your driver knows where the Meeqat is, but questions of rulings are for you and your scholar.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-white border border-[#0b2a20]/10 p-7">
                        <h3 className={`${h3} mb-4`}>Packing for the Meeqat</h3>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <Tick>Ihram clothing in a bag inside the car, not in the boot</Tick>
                            <Tick>Toiletries for the ghusl if you wish to bathe there</Tick>
                            <Tick>Slippers and a small bag for the walk at the Haram</Tick>
                            <Tick>Time in the plan: allow 30–60 minutes for the stop</Tick>
                        </ul>
                    </aside>
                </div>
            </section>

            {/* ================= MAKKAH DROP-OFF ================= */}
            <section aria-labelledby="dropoff" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className={prose}>
                        <MapPin className="w-7 h-7 text-[#047857]" aria-hidden="true" />
                        <h2 id="dropoff" className={`${h2} mb-2`}>Arriving in Makkah</h2>
                        <p>
                            The streets right around Masjid al-Haram are closed to most private cars, and access changes with crowds and the time of year. We drop you at your hotel where cars are allowed to reach it, or at the nearest permitted point, which can mean a short walk with your bags. Send us the hotel name in advance; some hotels have their own drop-off arrangements.
                        </p>
                        <p>
                            Travelling with elderly pilgrims or someone in a wheelchair? Tell us when booking so we can plan the drop-off as close as the rules allow.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-[#f3f6f3] p-7">
                        <FileText className="w-7 h-7 text-[#047857] mb-3" aria-hidden="true" />
                        <h3 className={`${h3} mb-3`}>Documents</h3>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <Tick>A valid passport for every passenger, or a GCC national ID where accepted</Tick>
                            <Tick>The Saudi visa or entry permission that applies to each traveller, and anything required for Umrah</Tick>
                            <Tick>Qatar residents: whatever you need to return to Qatar</Tick>
                            <Tick>Children: their own documents</Tick>
                        </ul>
                        <p className="text-xs text-stone-500 mt-3">Requirements depend on nationality and residency and change. Check official Saudi guidance for everyone before booking. Only Muslims may enter Makkah.</p>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLE + FARE ================= */}
            <section aria-labelledby="vehicle" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-5">
                    <article className="rounded-3xl bg-[#0b2a20] text-white overflow-hidden flex flex-col">
                        <div className="relative aspect-[16/9]">
                            <Image src="/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp" alt="GMC Yukon XL used for Doha to Makkah Umrah trips" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                        </div>
                        <div className="p-7">
                            <h2 id="vehicle" className="text-2xl font-bold mb-2">The vehicle</h2>
                            <p className="text-sm text-white/85 leading-relaxed">A full-size SUV such as a GMC Yukon: up to 7 passengers and about 5 large suitcases with most seats in use. For an Umrah family, remember the return: Zamzam containers and shopping take space too. Bigger groups travel in two cars, quoted together.</p>
                        </div>
                    </article>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="rounded-3xl bg-white border border-[#0b2a20]/10 p-7">
                            <h3 className={`${h3} mb-4`}>Included</h3>
                            <ul className="space-y-2 text-sm text-stone-700">
                                <Tick>The SUV and driver</Tick>
                                <Tick>Fuel and road tolls</Tick>
                                <Tick>The vehicle&apos;s cross-border insurance</Tick>
                                <Tick>Normal stops and the Meeqat stop</Tick>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-white border border-[#0b2a20]/10 p-7">
                            <h3 className={`${h3} mb-4`}>Quoted separately</h3>
                            <ul className="space-y-2 text-sm text-stone-700">
                                {['A night in Riyadh and the driver’s stay', 'Return to Doha or on to Madinah', 'Visas, hotels and meals (not included)'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                                ))}
                            </ul>
                            <p className="text-xs text-stone-500 mt-4">Every trip is quoted for the whole vehicle before you book.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= GROUPS + BOOK ================= */}
            <section aria-labelledby="book" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start rounded-3xl bg-[#f3f6f3] p-8 mb-12">
                        <Users className="w-8 h-8 text-[#047857]" aria-hidden="true" />
                        <div className="space-y-2 text-stone-700 leading-relaxed">
                            <h2 className="text-2xl font-extrabold text-[#0b2a20]">Group Umrah from Doha</h2>
                            <p>For extended families or a group from the mosque, we can send more than one car on the same day, subject to availability. Send the total number of people and bags and the hotels; we quote the cars together and agree one departure plan. Cars may not reach the border or Makkah at exactly the same moment.</p>
                        </div>
                    </div>
                    <h2 id="book" className={`${h2} mb-6`}>How to Book</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            ['Send the trip', 'Doha address, Makkah hotel and your travel date.'],
                            ['Choose the plan', 'One long drive, or a night in Riyadh. Mention the Meeqat stop.'],
                            ['People and bags', 'Adults, children, elderly pilgrims and suitcases.'],
                            ['Confirm', 'We send the fare for the vehicle; once you accept, the booking is final.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-[#f3f6f3] p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#047857] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#0b2a20] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={primary}>Request a quote <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Book well ahead for Ramadan and school holidays, when both the border and Makkah are busiest.</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#0b2a20]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#0b2a20] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#0b2a20] mb-5">Related Routes</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Doha to Madinah private transfer', '/routes/doha-madinah/'],
                            ['Doha to Jeddah private transfer', '/routes/doha-jeddah/'],
                            ['Doha to Riyadh private transfer', '/routes/doha-riyadh/'],
                            ['Doha to Dammam private transfer', '/routes/doha-dammam/'],
                            ['Makkah to Doha', '/routes/makkah-doha/'],
                            ['Makkah to Madinah', '/routes/makkah-madinah/'],
                            ['Ziyarat in Makkah', '/ziyarat-in-makkah/'],
                            ['Umrah transport', '/services/umrah-transport/'],
                            ['Private intercity transfers in Saudi Arabia', '/services/intercity/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#0b2a20]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#0b2a20] hover:border-[#047857] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857]">{l}</Link>
                        ))}
                    </div>
                    <p className="text-xs text-stone-500 mt-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Distances and times are estimates. Entry, Umrah and access rules can change; check official guidance before you travel.</p>
                </div>
            </section>
        </div>
    );
}
