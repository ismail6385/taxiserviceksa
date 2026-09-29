import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MoveRight, Repeat, Route, Landmark, Hotel, Car, Users, HeartHandshake, Footprints, Info, BookOpen, Plane, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import AlUlaReviews from '@/components/alula/AlUlaReviews';
import Reveal from '@/components/alula/Reveal';
import DestinationQuoteCard from '@/components/madinah/DestinationQuoteCard';
import QubaFinder from '@/components/madinah/QubaFinder';
import VehicleSelector from '@/components/madinah/VehicleSelector';
import BookingChecklist from '@/components/madinah/BookingChecklist';

const PAGE_URL = 'https://taxiserviceksa.com/locations/madinah/quba/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for a ride to Masjid Quba. Hotel, date and whether I need a return: ')}`;

export const metadata: Metadata = {
    title: 'Masjid Quba Taxi & Private Transfer | Madinah',
    description:
        'Arrange a private ride to Masjid Quba from your Madinah hotel - one way, with a return, or as part of a multi-stop Ziyarat. Choose your pickup time and vehicle.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Masjid Quba Taxi & Private Transfer | Madinah',
        description: 'Plan your visit to Quba: choose your pickup, decide whether you need a return, and pick the vehicle that fits.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/madinah-quba-mosque-taxi.png', width: 1024, height: 1024, alt: 'Masjid Quba in Madinah' }],
    },
};

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const quickOptions = [
    { icon: MoveRight, title: 'Hotel → Quba', text: 'A private one-way ride.', tone: 'bg-white border border-stone-200' },
    { icon: Repeat, title: 'Quba → Hotel', text: 'Arrange your ride back before you go.', tone: 'bg-[#f3efe4] border border-amber-200/70' },
    { icon: Hotel, title: 'Hotel → Quba → Hotel', text: 'Both ways in one booking.', tone: 'bg-emerald-800 text-white' },
    { icon: Route, title: 'Quba + Ziyarat', text: 'Add other Madinah places to the trip.', tone: 'bg-[#0b2a22] text-white' },
];

const continueCards = [
    { title: 'Masjid al-Qiblatain', text: 'Often added to the same outing as Quba.', href: '/locations/madinah/qiblatain/', img: '/madinah-discovery-map.png' },
    { title: 'Mount Uhud', text: 'North of the city; a common stop on a private Ziyarat.', href: '/locations/madinah/uhud/', img: '/madinah-uhud-taxi.png' },
    { title: 'Central Area', text: 'Back to hotels around Al-Masjid an-Nabawi.', href: '/locations/madinah/central-area/', img: '/madinah-central-area-taxi.png' },
    { title: 'Madinah Airport', text: 'Heading to MED after your last visit.', href: '/locations/madinah/madinah-airport/', img: '/madinah-airport-taxi.png' },
];

const faqs = [
    { q: 'How do I get from my Madinah hotel to Masjid Quba?', a: 'Book a private transfer on this page: give us your hotel, date and pickup time, and the driver collects you at the hotel.' },
    { q: 'Can I book a return ride from Quba to my hotel?', a: 'Yes. Choose "Return to hotel" in the form and tell us roughly how long you plan to stay.' },
    { q: 'Can I combine Quba with other Ziyarat places?', a: 'Yes. Choose "Add Ziyarat stops" and list the places - for example Qiblatain or Uhud - and we plan a practical order.' },
    { q: 'Can I visit Quba with a private driver?', a: 'Yes. A wait-and-return booking or an hourly private driver keeps the same car with you.' },
    { q: 'Can I book an SUV or van for my family?', a: 'Yes - a Staria or Yukon for most families, or a Hiace for larger groups.' },
    { q: 'Can you help with elderly family members?', a: 'Tell us when booking if anyone needs extra time or help getting in and out, so we can suggest a suitable vehicle and pickup point.' },
    { q: 'Can Quba be part of a full Madinah Ziyarat?', a: 'Yes. Our private Ziyarat transport can include Quba alongside other places you want to visit.' },
    { q: 'Can I go to Quba straight from Madinah Airport?', a: 'Yes. Choose Madinah Airport as the pickup - but think about where your luggage will go during the visit.' },
    { q: 'Can I choose the pickup time?', a: 'Yes. You set the pickup time in the booking; we confirm it with your quote.' },
    { q: 'How do I get a quote?', a: 'Fill in the form at the top of the page or send us a WhatsApp message with your hotel, date, time, passengers and return plan.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private Transport to Masjid Quba',
            url: PAGE_URL,
            serviceType: 'Private transfer',
            description:
                'Pre-booked private transport between Madinah hotels and Masjid Quba: one way, return, wait-and-return or as part of a multi-stop Ziyarat.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: [
                { '@type': 'PlaceOfWorship', name: 'Masjid Quba', alternateName: 'Quba Mosque' },
                { '@type': 'City', name: 'Madinah' },
            ],
            image: 'https://taxiserviceksa.com/madinah-quba-mosque-taxi.png',
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function QubaPage() {
    return (
        <div className="madinah-page bg-[#faf8f3]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#0b2a22]">
                <Image
                    src="/madinah-quba-mosque-taxi.png"
                    alt="The white minarets and domes of Masjid Quba in Madinah"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[center_30%] opacity-55 alula-drift -z-10"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b2a22] via-[#0b2a22]/85 to-[#0b2a22]/25" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        {/* hotel -> Quba -> return */}
                        <div className="flex items-center gap-2 mb-6 text-xs sm:text-sm font-semibold text-emerald-50/85" aria-hidden="true">
                            <span>Your hotel</span>
                            <svg viewBox="0 0 80 12" className="w-12 sm:w-16 h-3"><path d="M2 6 H 78" stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" fill="none" pathLength={1} className="route-draw" /></svg>
                            <span className="rounded-md bg-amber-300 text-[#0b2a22] px-2 py-0.5 font-bold">Masjid Quba</span>
                            <svg viewBox="0 0 80 12" className="w-12 sm:w-16 h-3"><path d="M2 6 H 78" stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" fill="none" /></svg>
                            <span>Return</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight mb-5">Masjid Quba Taxi &amp; Private Transportation in Madinah</h1>
                        <p className="text-lg text-emerald-50/85 leading-relaxed mb-8 max-w-xl">
                            Arrange a private ride from your Madinah hotel to Masjid Quba, with return transfers and multi-stop Ziyarat options available.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-amber-300 text-[#0b2a22] hover:bg-amber-200">
                                <a href={QUOTE_HREF}>Request Quba Transfer <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Us</a>
                            </Button>
                        </div>
                    </div>
                    <div id="quote" className="scroll-mt-40">
                        <DestinationQuoteCard destination="Masjid Quba, Madinah" title="Plan your Quba ride" cta="Request Quba Transfer" />
                    </div>
                </div>
            </section>

            {/* ================= QUICK OPTIONS ================= */}
            <section aria-label="Ways to book" className="px-4 sm:px-6 lg:px-8 -mt-0 pt-10">
                <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {quickOptions.map((o, i) => (
                        <Reveal key={o.title} delay={i * 70} className="h-full">
                            <a href={QUOTE_HREF} className={`group h-full flex flex-col rounded-2xl p-5 sm:p-6 transition hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${o.tone}`}>
                                <o.icon className="w-6 h-6 mb-3 opacity-90" aria-hidden="true" />
                                <span className="font-bold mb-1">{o.title}</span>
                                <span className="text-sm opacity-75">{o.text}</span>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ================= YOUR QUBA VISIT (signature timeline) ================= */}
            <section aria-labelledby="visit" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
                    <div>
                        <h2 id="visit" className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">A Simple Way to Plan Your Quba Visit</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Tell us where you&apos;re staying, when you want to visit Quba and whether you need a ride back. We arrange the vehicle around those details, so the only decision on the day is when to leave.
                        </p>
                    </div>
                    <ol className="relative">
                        {[
                            { n: '01', t: 'Leave your hotel', d: 'Your driver collects you at the agreed time and place.' },
                            { n: '02', t: 'Private transfer to Quba', d: 'Straight to Masjid Quba - no other passengers.' },
                            { n: '03', t: 'Visit Masjid Quba', d: 'Take the time you need.' },
                        ].map((s, i) => (
                            <li key={s.n} className="relative pl-16 pb-10">
                                <span className="absolute left-[23px] top-12 bottom-0 w-px bg-emerald-800/25" aria-hidden="true" />
                                <span className="absolute left-0 top-0 w-12 h-12 rounded-full bg-emerald-800 text-amber-300 font-black flex items-center justify-center" aria-hidden="true">{s.n}</span>
                                <Reveal delay={i * 120}>
                                    <h3 className="mb-1 pt-2">{s.t}</h3>
                                    <p className="text-gray-600">{s.d}</p>
                                </Reveal>
                            </li>
                        ))}
                        <li className="relative pl-16">
                            <span className="absolute left-0 top-0 w-12 h-12 rounded-full bg-amber-300 text-[#0b2a22] font-black flex items-center justify-center" aria-hidden="true">04</span>
                            <Reveal delay={360}>
                                <h3 className="mb-3 pt-2">Then, your choice</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="rounded-xl bg-white border border-stone-200 p-4">
                                        <p className="font-semibold text-gray-900 flex items-center gap-2"><Hotel className="w-4 h-4 text-emerald-700" aria-hidden="true" /> Back to your hotel</p>
                                        <p className="text-sm text-gray-600 mt-1">On a return or wait-and-return booking.</p>
                                    </div>
                                    <div className="rounded-xl bg-white border border-stone-200 p-4">
                                        <p className="font-semibold text-gray-900 flex items-center gap-2"><Route className="w-4 h-4 text-emerald-700" aria-hidden="true" /> On to another place</p>
                                        <p className="text-sm text-gray-600 mt-1">Qiblatain, Uhud or elsewhere on a multi-stop trip.</p>
                                    </div>
                                </div>
                            </Reveal>
                        </li>
                    </ol>
                </div>
            </section>

            {/* ================= WHY QUBA MATTERS ================= */}
            <section aria-labelledby="why" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                        <Image src="/madinah-quba-mosque-taxi.png" alt="Masjid Quba's white facade and minarets" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <div>
                        <h2 id="why" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Quba Matters</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Masjid Quba, south-west of central Madinah, is regarded as the first mosque built in Islam, established in 622 CE. Visit Saudi describes it as a historic landmark in Madinah.
                        </p>
                        <div className="rounded-2xl bg-[#faf8f3] border border-stone-200 p-5 mb-4">
                            <h3 className="mb-2">Planning a Saturday visit?</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Saturday is traditionally associated with visiting Quba: a narration in Sahih al-Bukhari reports that the Prophet ﷺ used to go to Quba every Saturday, sometimes walking and sometimes riding. If you plan to go on a Saturday, booking ahead helps us arrange the pickup time you want.
                            </p>
                        </div>
                        <p className="text-xs text-stone-500">
                            We provide transport only and do not give religious guidance. For more background, see our <Link href="/blog/quba-mosque-history-visit-guide/" className="text-emerald-800 font-semibold hover:underline">Quba visit guide</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= HOTEL -> QUBA + RETURN ================= */}
            <section aria-labelledby="hotel" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
                        <div>
                            <h2 id="hotel" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">From Your Madinah Hotel to Masjid Quba</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The driver collects you at your hotel - including hotels in the Central Area, where we confirm the most practical pickup point - and drives you straight to Quba in a private vehicle.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Travelling as a family or a group? One vehicle carries everyone. Want to see more than Quba? The same booking can include other stops.
                            </p>
                        </div>
                        <div className="rounded-3xl bg-[#0b2a22] text-white p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-3">Want a Ride Back After Your Visit?</h2>
                            <p className="text-emerald-50/80 mb-6">Decide when you book, so the ride home is sorted before you leave the hotel.</p>
                            <ul className="space-y-3">
                                {[
                                    { t: 'One way', d: 'Hotel → Quba' },
                                    { t: 'Return', d: 'Hotel → Quba → hotel, at a time you choose' },
                                    { t: 'Multi-stop', d: 'Hotel → Quba → another place → hotel' },
                                ].map((x) => (
                                    <li key={x.t} className="flex items-baseline gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                                        <span className="font-bold text-amber-300 w-24 shrink-0">{x.t}</span>
                                        <span className="text-sm text-emerald-50/85">{x.d}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-2xl border-2 border-dashed border-emerald-800/30 bg-white p-6 md:p-8 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-5 items-center">
                        <Car className="w-10 h-10 text-emerald-800" aria-hidden="true" />
                        <div>
                            <h3 className="mb-1">Wait &amp; return</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Prefer the same driver to stay while you visit? Request a wait-and-return booking. The driver stays for the period agreed when you book, then takes you back or on to your next stop. The waiting time - and any charge for it - is confirmed with your quote.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= QUBA + ZIYARAT ================= */}
            <section aria-labelledby="combine" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
                    <div>
                        <h2 id="combine" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Combine Quba With Other Madinah Visits</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Many visitors add Quba to a longer outing. A custom multi-stop itinerary can be arranged around your schedule and the places you ask for - there is no fixed or official order.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            If Quba is one of several places on your list, a private Ziyarat booking keeps one car with you for the whole trip.
                        </p>
                        <Button asChild className="group h-auto py-3 px-6 rounded-xl font-bold bg-emerald-800 text-white hover:bg-emerald-900">
                            <Link href="/services/madinah-ziyarat/">Plan Private Ziyarat <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></Link>
                        </Button>
                    </div>
                    <figure className="rounded-3xl bg-[#faf8f3] border border-stone-200 p-7 md:p-9">
                        <figcaption className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-6">One possible route (schematic)</figcaption>
                        <svg viewBox="0 0 420 260" className="w-full h-auto" role="img" aria-label="Example route: hotel to Quba, then optionally to Qiblatain, Uhud or the Seven Mosques area, and back to the hotel">
                            <g fill="none" strokeLinecap="round">
                                <path d="M70 40 V 110" stroke="#065f46" strokeWidth="2.5" pathLength={1} className="route-draw" />
                                <path d="M70 150 C 70 200, 180 170, 200 215" stroke="#b45309" strokeWidth="2" strokeDasharray="5 5" />
                                <path d="M70 150 C 90 190, 300 150, 330 215" stroke="#b45309" strokeWidth="2" strokeDasharray="5 5" />
                                <path d="M110 130 C 200 120, 300 110, 340 60" stroke="#b45309" strokeWidth="2" strokeDasharray="5 5" />
                            </g>
                            <g fontFamily="inherit" fontSize="13">
                                <rect x="20" y="12" width="100" height="30" rx="8" fill="#fff" stroke="#d6d3d1" />
                                <text x="70" y="32" textAnchor="middle" fill="#1f2937">Your hotel</text>
                                <rect x="20" y="110" width="100" height="40" rx="10" fill="#065f46" />
                                <text x="70" y="135" textAnchor="middle" fill="#fcd34d" fontWeight="700">Masjid Quba</text>
                                <text x="200" y="235" textAnchor="middle" fill="#374151">Qiblatain</text>
                                <text x="330" y="235" textAnchor="middle" fill="#374151">Seven Mosques area</text>
                                <text x="350" y="50" textAnchor="middle" fill="#374151">Uhud</text>
                            </g>
                        </svg>
                        <div className="flex flex-wrap gap-3 mt-6 text-sm font-semibold">
                            <Link href="/locations/madinah/qiblatain/" className="text-emerald-800 hover:underline">Masjid al-Qiblatain</Link>
                            <Link href="/locations/madinah/uhud/" className="text-emerald-800 hover:underline">Mount Uhud</Link>
                        </div>
                    </figure>
                </div>
            </section>

            {/* ================= WHICH TRANSFER ================= */}
            <section aria-labelledby="which" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="which" className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Which Quba Transfer Do You Need?</h2>
                    <QubaFinder />
                </div>
            </section>

            {/* ================= FAMILY / ELDERLY / WALKING ================= */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-2xl bg-[#faf8f3] border border-stone-200 p-7">
                        <Users className="w-7 h-7 text-emerald-700 mb-3" aria-hidden="true" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Travelling With Family?</h2>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            A private vehicle can be convenient if you prefer not to walk between places, particularly with children or a group. Tell us the number of adults and children, any bags, and whether you want a ride back.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-[#faf8f3] border border-stone-200 p-7">
                        <HeartHandshake className="w-7 h-7 text-emerald-700 mb-3" aria-hidden="true" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Travelling With Older Family Members?</h2>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Tell us in advance if anyone needs extra help or time getting in and out, and discuss any accessibility requirements before booking. We will suggest a suitable vehicle and confirm a clear pickup and drop-off point. Please ask before booking if you need a wheelchair-accessible vehicle.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-[#faf8f3] border border-stone-200 p-7">
                        <Footprints className="w-7 h-7 text-emerald-700 mb-3" aria-hidden="true" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Walking or Driving?</h2>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            There is a pedestrian route from the Central Area towards Quba, and some visitors prefer to walk. Others choose a car because of the weather, their group or their plans for the rest of the day. Both are fine. Read more in our <Link href="/guides/quba-walking-path/" className="text-emerald-800 font-semibold hover:underline">Quba walking path guide</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section id="vehicles" aria-labelledby="vehicles-title" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-40">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Pick a Vehicle for Your Group</h2>
                    <p className="text-gray-600 max-w-3xl mb-10">Vehicle availability depends on the date you request and your group size.</p>
                    <VehicleSelector />
                </div>
            </section>

            {/* ================= VISITOR INFO + CHECKLIST ================= */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Before You Go</h2>
                        <ul className="space-y-4 text-gray-700 mb-8">
                            <li className="flex gap-3"><Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" /><span>Quba is an active mosque. Arrangements for visitors, prayer areas and access can change, so follow the guidance on site.</span></li>
                            <li className="flex gap-3"><MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" /><span>Where the driver drops you and picks you up depends on the traffic arrangements around the mosque at the time. We confirm the meeting point with you.</span></li>
                            <li className="flex gap-3"><BookOpen className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" /><span>Saturdays and peak Umrah season can be busier - book ahead for the time you want.</span></li>
                        </ul>
                        <h3 className="mb-3">How pricing works</h3>
                        <p className="text-sm text-gray-600 mb-3">You get a fixed quote before you confirm. It depends on:</p>
                        <ul className="flex flex-wrap gap-2">
                            {['Pickup location', 'Return or one way', 'Passengers', 'Vehicle', 'Date and time', 'Extra stops'].map((f) => (
                                <li key={f} className="rounded-full border border-stone-200 bg-[#faf8f3] px-3.5 py-1.5 text-sm text-gray-700">{f}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Before You Book</h2>
                        <BookingChecklist
                            items={['Hotel or pickup location', 'Visit date', 'Preferred pickup time', 'Number of passengers', 'Vehicle preference', 'Return needed?', 'Extra Ziyarat stops?']}
                            cta="Get Quba Transfer Quote"
                        />
                    </div>
                </div>
            </section>

            {/* ================= CONTINUE YOUR JOURNEY ================= */}
            <section aria-labelledby="continue" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="continue" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Continue Your Madinah Journey</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {continueCards.map((c, i) => (
                            <Reveal key={c.title} delay={i * 70} className="h-full">
                                <Link href={c.href} className="group h-full flex flex-col rounded-2xl overflow-hidden bg-white border border-stone-200 transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                                        <Image src={c.img} alt="" fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" aria-hidden="true" />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="mb-1 flex items-center justify-between">{c.title} <ArrowRight className="w-4 h-4 text-emerald-700 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></h3>
                                        <p className="text-sm text-gray-600">{c.text}</p>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-6">
                        Arriving soon? See <Link href="/locations/madinah/" className="text-emerald-800 font-semibold hover:underline">Madinah transport</Link>, <Link href="/locations/madinah/train-station/" className="text-emerald-800 font-semibold hover:underline">Haramain station transfers</Link> and our <Link href="/services/private-driver/" className="text-emerald-800 font-semibold hover:underline">private driver service</Link>.
                    </p>
                </div>
            </section>

            <AlUlaReviews place="quba" title="What travellers said about their Quba trips" />

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Quba Transport Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-stone-200 px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#0b2a22]">
                <Image src="/madinah-quba-mosque-taxi.png" alt="" fill sizes="100vw" className="object-cover opacity-20 -z-10" aria-hidden="true" />
                <div className="max-w-3xl mx-auto text-center text-white">
                    <Landmark className="w-10 h-10 text-amber-300 mx-auto mb-5" aria-hidden="true" />
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Plan Your Visit to Quba</h2>
                    <p className="text-lg text-emerald-50/80 mb-10">Choose your pickup, decide whether you need a return, and arrange the vehicle that fits your journey.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" className="h-auto py-4 px-7 rounded-xl font-bold bg-amber-300 text-[#0b2a22] hover:bg-amber-200">
                            <a href={QUOTE_HREF}>Request Quba Transfer</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> WhatsApp Us</a>
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-emerald-50/60 flex items-center justify-center gap-2"><Plane className="w-4 h-4" aria-hidden="true" /> Landing first? We can collect you at <Link href="/locations/madinah/madinah-airport/" className="underline hover:text-white">Madinah Airport</Link>.</p>
                </div>
            </section>
        </div>
    );
}
