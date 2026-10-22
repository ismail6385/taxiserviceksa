import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, Info, MapPin, Mountain, Landmark, Waves, Users, Route, Clock, Ticket, Languages } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';

const PAGE_URL = 'https://taxiserviceksa.com/services/tours/';
const PHONE = '+966575806733';
const wa = (msg: string) => `https://wa.me/966575806733?text=${encodeURIComponent(msg)}`;
const WHATSAPP_HREF = wa('Hello, I want a private tour. City, date, start time, places I want to visit, passengers: ');

const TOURS = [
    {
        id: 'madinah', icon: Landmark, name: 'Madinah Ziyarat', time: 'Often 3–4 hours',
        stops: ['Masjid Quba', 'Mount Uhud', 'The Seven Mosques area', 'Masjid al-Qiblatain'],
        text: 'Hotel to the main Ziyarat sites and back. Tell us which sites matter most and how much time you have; some visitors like to linger at Quba or Uhud, others need to be back before a departure.',
        note: 'The driver provides transport. If you want a religious guide or detailed history, ask when booking.',
        href: '/services/madinah-ziyarat/', label: 'Madinah Ziyarat transportation',
    },
    {
        id: 'makkah', icon: Mountain, name: 'Makkah Ziyarat', time: 'Often 3–4 hours',
        stops: ['Jabal Al-Nour', 'Jabal Thawr', 'Mina and Arafat', 'Other agreed stops'],
        text: 'A loop around Makkah’s historic sites. Some places involve walking or climbing, and the car cannot always reach the point you want to see, so tell us about older passengers or limited mobility.',
        note: 'Access to some sites changes during Hajj and on busy days. Only Muslims may enter Makkah.',
        href: '/ziyarat-in-makkah/', label: 'Makkah Ziyarat transportation',
    },
    {
        id: 'alula', icon: MapPin, name: 'AlUla heritage day', time: 'Usually a full day',
        stops: ['Hegra (Madain Saleh)', 'Elephant Rock', 'AlUla Old Town', 'Dadan'],
        text: 'AlUla’s sights are spread out across the valley, so a private car for the day saves a lot of waiting. Build the day around any ticketed times first.',
        note: 'Hegra has controlled entry: book tickets and check the official visitor arrangements before you plan the transport.',
        href: '/locations/alula/', label: 'AlUla heritage and sightseeing transport',
    },
    {
        id: 'taif', icon: Mountain, name: 'Taif city and Al Hada', time: 'Often 4–6 hours',
        stops: ['Shubra Palace', 'Al Rudaf Park', 'Rose farms (in season)', 'Al Hada viewpoints'],
        text: 'Taif’s city sights and the mountain road at Al Hada, at a cooler altitude than the coast. Many visitors come up from Jeddah or Makkah for the day.',
        note: 'Rose farms and distilleries open seasonally, and the Al Hada cable car depends on weather and its own schedule. Check before you go.',
        href: '/locations/taif/', label: 'Taif city tour and mountain sights',
    },
    {
        id: 'jeddah', icon: Waves, name: 'Jeddah: Al-Balad and the Corniche', time: 'Often around 4 hours',
        stops: ['Al-Balad historic district', 'Jeddah Corniche', 'King Fahd’s Fountain', 'Floating Mosque'],
        text: 'Old Jeddah’s coral-stone houses in the afternoon, then the waterfront at sunset. Al-Balad is best on foot, so allow time to walk rather than treating it as a quick stop.',
        note: 'The fountain does not always run; do not plan the whole evening around it.',
        href: '/locations/jeddah/', label: 'Jeddah historical tour',
    },
];

const TITLE = 'Private Tours in Saudi Arabia | Custom Multi-Stop Trips';
const DESCRIPTION = 'Private tours in Saudi Arabia with your own car and driver: Madinah and Makkah Ziyarat, AlUla, Taif, Jeddah Al-Balad and custom multi-stop or multi-city itineraries.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: PAGE_URL,
        languages: {
            'en': PAGE_URL,
            'ar': 'https://taxiserviceksa.com/ar/services/tours/',
            'ur': 'https://taxiserviceksa.com/ur/services/tours/',
            'x-default': PAGE_URL,
        },
    },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private tours in Saudi Arabia' }],
    },
};

const faqs = [
    { q: 'What exactly do you provide on a tour?', a: 'A private car and driver for your itinerary: pickup, transport between the places you choose, and waiting while you visit. Attraction tickets, licensed guides and special access are separate unless your confirmation says otherwise.' },
    { q: 'Do the drivers speak English?', a: 'Yes, our drivers speak English and Arabic. The driver is not a licensed tour guide, so if you want detailed history or a religious guide, ask when booking.' },
    { q: 'Are attraction tickets included?', a: 'No. Tickets, official guided visits, permits and official visitor shuttles are booked by you with the attraction. Send us your confirmed entry times and we plan the transport around them.' },
    { q: 'Can you build a custom multi-stop itinerary?', a: 'Yes. Send your starting point, date, the places you want to see in order of priority, group size and the time you have. We suggest a realistic route and quote it.' },
    { q: 'Can I combine places from different tours?', a: 'Yes, if the route works. Within one city that is usually simple. Combining cities, for example Madinah and AlUla, is planned as a multi-day trip with the driving time and overnight stops included.' },
    { q: 'How long does a Madinah Ziyarat take?', a: 'Often around 3–4 hours for the main sites, depending on traffic and how long you stay at each.' },
    { q: 'Can you take us to Hegra?', a: 'We can drive you to the site and back as part of an AlUla day. Entry to Hegra depends on its ticketing and visitor arrangements, which you need to book directly before we plan the day.' },
    { q: 'How long does a Taif tour take?', a: 'A selection of city sights often takes 4–6 hours. Adding Al Hada, Al Shafa or a rose farm needs more time. From Jeddah or Makkah, add the drive up the mountain each way.' },
    { q: 'Can we visit Al-Balad and the Corniche in one trip?', a: 'Yes. A common plan is Al-Balad in the late afternoon and the Corniche at sunset, roughly four hours in total.' },
    { q: 'Can a tour start at the airport?', a: 'Yes, if the timing works. Send your flight number, arrival time, the places you want to see and where you are staying.' },
    { q: 'Can we add stops during the day?', a: 'Yes, within the booked time. If a change means extra hours or a longer drive, we agree the cost before it happens.' },
    { q: 'Do you have vehicles for large families or groups?', a: 'Yes: a Hyundai Staria or GMC Yukon XL for up to 7 people, and a Toyota Hiace for up to 11. Tell us the number of people and bags.' },
    { q: 'How do I book?', a: 'Send the city, date, start time, places, passengers and preferred vehicle on WhatsApp or email. We confirm the vehicle and price; the booking is final once you accept.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Service',
            '@id': `${PAGE_URL}#service`,
            name: 'Private tours and multi-stop trips in Saudi Arabia',
            serviceType: 'Private sightseeing transport with driver',
            url: PAGE_URL,
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: ['Madinah', 'Makkah', 'AlUla', 'Taif', 'Jeddah'].map((c) => ({ '@type': 'City', name: c })),
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://taxiserviceksa.com/services/' },
                { '@type': 'ListItem', position: 3, name: 'Private Tours', item: PAGE_URL },
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
const link = 'font-semibold text-[#9a3412] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#2b1a12]';
const h3 = 'text-xl font-bold text-[#2b1a12]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#9a3412] px-6 py-3.5 font-bold text-white hover:bg-[#7c2d12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a3412] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#2b1a12]/20 px-6 py-3.5 font-bold text-[#2b1a12] hover:border-[#9a3412] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a3412]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#9a3412] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function ToursPage() {
    return (
        <div className="tours-hub bg-[#f8f4ef]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#2b1a12]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#7c4a2d_0%,_#2b1a12_62%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
                    <div className="text-white min-w-0">
                        <p className={`${eyebrow} text-[#fdba74] mb-4`}>Your own car and driver for the day</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Private Tours and Multi-Stop Trips in Saudi Arabia</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            Ziyarat in Madinah and Makkah, a day in AlUla, Taif&apos;s mountains, old Jeddah and the Corniche, or your own list of places across several cities. You choose the stops; we provide the car, the driver and the plan to get between them.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#fdba74] text-[#2b1a12] hover:bg-[#fed7aa]">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Plan a tour on WhatsApp</a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href="#tours">See tour ideas</a>
                            </Button>
                        </div>
                    </div>
                    <div className="rounded-3xl bg-white/[0.06] border border-white/10 p-7 text-white space-y-3 text-sm">
                        <h2 className="text-lg font-bold">What you get</h2>
                        {[
                            [Route, 'A private car and driver for your itinerary'],
                            [Clock, 'Waiting at each stop within the booked time'],
                            [Languages, 'Drivers who speak English and Arabic'],
                            [Users, 'Vehicles for 1 to 11 people'],
                        ].map(([Icon, t]) => {
                            const I = Icon as typeof Route;
                            return <p key={t as string} className="flex gap-2.5"><I className="w-4 h-4 mt-0.5 text-[#fdba74] shrink-0" aria-hidden="true" />{t as string}</p>;
                        })}
                        <p className="flex gap-2.5 text-white/60 pt-2 border-t border-white/10"><Ticket className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />Tickets and licensed guides are not included; book them with the attraction.</p>
                    </div>
                </div>
            </section>

            {/* ================= HOW IT WORKS ================= */}
            <section aria-labelledby="how" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className={prose}>
                        <h2 id="how" className={`${h2} mb-2`}>How a Private Tour Works</h2>
                        <p>
                            A tour with us is a car and driver booked for your itinerary, not a group coach and not a guided tour. You tell us the places you want to see; we suggest a sensible order, estimate the time, and quote for the vehicle. On the day, the driver collects you, takes you from stop to stop and waits while you visit.
                        </p>
                        <p>
                            That makes it flexible. You can spend longer where you like, skip what you lose interest in, and stop for food or prayer when you need to, all within the time you booked. Families, couples and small groups use it because nobody has to find a new taxi at every site.
                        </p>
                        <p>
                            What it does not include: attraction tickets, licensed guides, official visitor shuttles or special access. Where a site needs a booking, such as Hegra in AlUla, book it first and send us the time so we plan the day around it.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-[#f8f4ef] p-7">
                        <h3 className={`${h3} mb-4`}>Choosing how long to book</h3>
                        <ul className="space-y-4 text-sm text-stone-700">
                            <li><strong className="text-[#2b1a12]">A few hours</strong> for a handful of nearby sites, like a Ziyarat loop or Al-Balad and the Corniche.</li>
                            <li><strong className="text-[#2b1a12]">A full day</strong> when the sights are spread out or you want time at each, like AlUla or Taif with Al Hada.</li>
                            <li><strong className="text-[#2b1a12]">Several days</strong> for a trip across cities, planned as one route with overnight stops. See <Link href="/services/private-driver/" className={link}>private driver hire</Link> for hourly and daily packages.</li>
                        </ul>
                        <p className="text-xs text-stone-500 mt-5">Times on this page are planning estimates. Traffic, opening hours, prayer times and how long you stay change them.</p>
                    </div>
                </div>
            </section>

            {/* ================= TOURS ================= */}
            <section id="tours" aria-labelledby="tours-h" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
                <div className="max-w-6xl mx-auto">
                    <h2 id="tours-h" className={`${h2} mb-3`}>Popular Tour Ideas</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">Starting points, not fixed packages. Take one as it is, change the stops, or combine two.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {TOURS.map((t) => (
                            <article key={t.id} id={t.id} className="rounded-3xl bg-white border border-[#2b1a12]/10 p-7 flex flex-col scroll-mt-24">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <h3 className={`${h3} flex items-center gap-2`}><t.icon className="w-5 h-5 text-[#9a3412]" aria-hidden="true" />{t.name}</h3>
                                    <span className="shrink-0 rounded-full bg-[#f8f4ef] px-3 py-1 text-xs font-bold text-[#9a3412]">{t.time}</span>
                                </div>
                                <p className="text-sm text-stone-700 leading-relaxed mb-4">{t.text}</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-stone-700 mb-4">
                                    {t.stops.map((s) => <Tick key={s}>{s}</Tick>)}
                                </ul>
                                <p className="text-xs text-stone-500 flex gap-2 mb-5"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />{t.note}</p>
                                <div className="mt-auto flex flex-wrap gap-3">
                                    <a href={wa(`Hello, I want to book: ${t.name}. Date, start time, pickup and passengers: `)} target="_blank" rel="nofollow noopener noreferrer" className={`${primary} !px-4 !py-2.5 text-sm`}>Book this <Arrow /></a>
                                    <Link href={t.href} className="inline-flex items-center gap-1.5 text-sm font-bold text-[#9a3412] hover:underline">{t.label}</Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= COMBINATIONS ================= */}
            <section aria-labelledby="combine" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="combine" className={`${h2} mb-3`}>Combining Places and Cities</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">The main reason to book a private tour rather than separate rides is putting several places into one plan.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="rounded-3xl bg-[#f8f4ef] p-7">
                            <h3 className={`${h3} mb-2`}>In one city</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">Al-Balad then the Corniche in Jeddah; Shubra Palace, Al Rudaf Park and Al Hada in Taif; Quba, Uhud and Qiblatain in Madinah. Usually a half or full day.</p>
                        </div>
                        <div className="rounded-3xl bg-[#f8f4ef] p-7">
                            <h3 className={`${h3} mb-2`}>A day trip out</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">Up to Taif from Jeddah or Makkah for the day, with the mountain drive at each end. Quoted as a full day including the drive. <Link href="/routes/jeddah-taif/" className={link}>Jeddah to Taif</Link>.</p>
                        </div>
                        <div className="rounded-3xl bg-[#2b1a12] text-white p-7">
                            <h3 className="text-xl font-bold mb-2">Across several cities</h3>
                            <p className="text-sm text-white/80 leading-relaxed">For example Madinah to AlUla for two days of sightseeing, then on to your next stop. We plan the whole route, the driving days and the overnight stops, and quote it as one trip. <Link href="/routes/madinah-alula/" className="font-semibold text-[#fdba74] hover:underline">Madinah to AlUla</Link>.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= INCLUDED + PLANNING ================= */}
            <section aria-labelledby="included" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="included" className={`${h2} mb-8`}>What Is and Isn&apos;t Included</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
                        <div className="rounded-3xl bg-white border border-[#2b1a12]/10 p-7">
                            <h3 className={`${h3} mb-4`}>Included in your quote</h3>
                            <ul className="space-y-2 text-stone-700">
                                <Tick>A private vehicle and driver for the booked time</Tick>
                                <Tick>Pickup from your hotel, home or the airport</Tick>
                                <Tick>Driving between the stops in your plan</Tick>
                                <Tick>Waiting while you visit each place</Tick>
                                <Tick>Fuel for the agreed route</Tick>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-white border border-[#2b1a12]/10 p-7">
                            <h3 className={`${h3} mb-4`}>Not included</h3>
                            <ul className="space-y-2 text-stone-700">
                                {['Attraction tickets and entry fees', 'Licensed tour guides or religious guides', 'Official visitor shuttles and permits', 'Extra hours or a longer route than agreed', 'Meals, and hotels on multi-day trips'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <div className={prose}>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2b1a12]">Tips for a Good Day Out</h2>
                            <ul className="space-y-2">
                                <Tick>Check opening hours and any booking rules with the attraction before the day; they change, especially at heritage and seasonal sites.</Tick>
                                <Tick>Around mosques and religious sites, plan around prayer times; parking and access can be restricted.</Tick>
                                <Tick>Dress for the places you will visit and follow staff instructions on site.</Tick>
                                <Tick>Leave some slack between stops. A packed plan with no margin rarely survives traffic.</Tick>
                                <Tick>Tell us about children, older passengers or limited mobility so the plan suits everyone.</Tick>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-[#f8f4ef] p-7">
                            <h3 className={`${h3} mb-4`}>Vehicles</h3>
                            <ul className="space-y-3 text-sm text-stone-700">
                                <li className="flex justify-between gap-4 border-b border-[#2b1a12]/10 pb-3"><span>Toyota Camry</span><span className="font-semibold">Up to 3 people</span></li>
                                <li className="flex justify-between gap-4 border-b border-[#2b1a12]/10 pb-3"><span>Hyundai Staria VIP</span><span className="font-semibold">Up to 7 people</span></li>
                                <li className="flex justify-between gap-4 border-b border-[#2b1a12]/10 pb-3"><span>GMC Yukon XL</span><span className="font-semibold">Up to 7 people</span></li>
                                <li className="flex justify-between gap-4"><span>Toyota Hiace</span><span className="font-semibold">Up to 11 people</span></li>
                            </ul>
                            <p className="text-xs text-stone-500 mt-4"><Link href="/fleet/" className={link}>See the fleet</Link>. Child seats on request; we confirm availability.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= BOOKING ================= */}
            <section aria-labelledby="book" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-6`}>Planning and Booking</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            ['List your places', 'In order of priority, so we know what to keep if time is short.'],
                            ['Give the basics', 'City, date, start time, pickup point, passengers, and any ticketed entry times.'],
                            ['Get a plan and price', 'We suggest the route and duration and quote the vehicle for it.'],
                            ['Confirm', 'Once you accept, the booking is final and the driver’s details follow before the day.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-[#f8f4ef] p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#9a3412] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#2b1a12] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={primary}><WhatsAppIcon className="w-4 h-4 fill-current" /> Plan a tour on WhatsApp <Arrow /></a>
                        <a href="mailto:info@taxiserviceksa.com?subject=Private%20tour%20request" className={ghost}>Email a multi-city plan</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Taxi Service KSA · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a> (call or WhatsApp)</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#2b1a12]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#2b1a12] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= REVIEWS + Q&A ================= */}
            <section aria-labelledby="reviews" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 id="reviews" className="text-2xl md:text-3xl font-extrabold text-[#2b1a12] mb-8">What Customers Say</h2>
                    <ReviewsDisplay location="Tours" limit={6} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">
                        <div>
                            <h3 className={`${h3} mb-4`}>Share Your Experience</h3>
                            <ReviewForm locationName="Tours" />
                        </div>
                        <div>
                            <h3 className={`${h3} mb-4`}>Ask a Question</h3>
                            <QuestionsDisplay location="Tours" />
                            <div className="mt-6"><QuestionForm locationName="Tours" /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#2b1a12] mb-5">Related Services</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Private heritage tours in Saudi Arabia', '/services/heritage-tours/'],
                            ['Private sightseeing transportation', '/services/tourism-transport/'],
                            ['Madinah Ziyarat transportation', '/services/madinah-ziyarat/'],
                            ['Makkah Ziyarat transportation', '/ziyarat-in-makkah/'],
                            ['AlUla transfers', '/locations/alula/'],
                            ['Taif transfers', '/locations/taif/'],
                            ['Hire a private driver by the hour or day', '/services/private-driver/'],
                            ['Private airport pickup', '/services/airport-transfers/'],
                            ['Private intercity transportation', '/services/intercity/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#2b1a12]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#2b1a12] hover:border-[#9a3412] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a3412]">{l}</Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
