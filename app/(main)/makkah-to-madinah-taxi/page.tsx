import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Info, TrainFront, Car, Moon, MapPin, Landmark, Droplets, CalendarDays } from 'lucide-react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';

const PAGE_URL = 'https://taxiserviceksa.com/makkah-to-madinah-taxi/';
const BOOKING_PAGE = '/routes/makkah-madinah/';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I am planning Makkah to Madinah. Makkah hotel, Madinah hotel, date, passengers and bags: ')}`;

const TITLE = 'Makkah to Madinah Taxi vs Train: Travel Guide (Miqat, Timing & Comfort)';
const DESCRIPTION = 'Planning Makkah to Madinah? Compare the Haramain train with a private car over the whole day, plus Miqat rules, the Badr detour, night travel and hotel drop-off near the Prophet’s Mosque.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'article',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Makkah to Madinah: taxi or train' }],
    },
};

const faqs = [
    { q: 'Do I need to stop at a Miqat going from Makkah to Madinah?', a: 'No. Ihram is for entering Makkah for Umrah or Hajj. Leaving Makkah for Madinah needs no Miqat stop; stops on the way are for rest, food and prayer.' },
    { q: 'And coming back from Madinah for another Umrah?', a: 'Then you enter Ihram at Dhul Hulaifah (Abyar Ali), on the edge of Madinah. A car can stop there; on the train you need to be in Ihram before boarding.' },
    { q: 'How long is the train?', a: 'Direct Haramain services take around 2 hours 15–20 minutes between Makkah and Madinah stations. Services that stop on the way take longer. Check the live timetable.' },
    { q: 'How long is the drive?', a: 'About 450 km, around 4.5–5 hours of driving plus a rest stop. It is an estimate; traffic leaving Makkah and the season can add time.' },
    { q: 'Is the train always quicker door to door?', a: 'Usually, but by less than the rail time suggests. Both stations are away from the Haram, so you add a ride to the station, time to board, and a ride from the Madinah station to your hotel.' },
    { q: 'Can I visit Badr on the way?', a: 'Yes, by car. Badr is off the expressway, so it is a detour that adds time. Ask for it when you book; it is quoted on top of the normal fare.' },
    { q: 'Is it fine to travel at night?', a: 'Night travel on this road is common and it is cooler. A long drive at night needs a rested driver, so book ahead and avoid last-minute late pickups.' },
    { q: 'Can a car drop me at my hotel near the Prophet’s Mosque?', a: 'As close as the traffic rules allow. Some roads in the central area close at prayer times and in busy seasons, so the last part may be a short walk.' },
    { q: 'Can I carry Zamzam?', a: 'In a car, yes; tell us how many containers so the car has room. On the train, check the operator’s current baggage rules.' },
    { q: 'Where are the prices?', a: 'On the Makkah to Madinah booking page: one way per car, from 400 SAR for a sedan up to 800 SAR for a Hiace.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Article',
            '@id': `${PAGE_URL}#article`,
            headline: 'Makkah to Madinah: Taxi vs Train Travel Guide',
            description: DESCRIPTION,
            url: PAGE_URL,
            publisher: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Makkah to Madinah: Taxi vs Train', item: PAGE_URL },
            ],
        },
        {
            '@type': 'FAQPage',
            '@id': `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        },
    ],
};

const link = 'font-semibold text-[#1d4ed8] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#172554]';
const h3 = 'text-xl font-bold text-[#172554]';
const prose = 'space-y-4 text-slate-700 leading-relaxed text-[1.05rem]';

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#1d4ed8] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function MakkahToMadinahGuidePage() {
    return (
        <div className="m2m-guide bg-[#fbf9f4]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HEADER ================= */}
            <header className="bg-[#172554] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#fcd34d] mb-4">Travel guide · Makkah → Madinah</p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight mb-5">Makkah to Madinah: Taxi vs Train Travel Guide</h1>
                    <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                        The train is faster on the rails; a car goes hotel to hotel. Which one wins depends on your group, your bags and where you are staying. This guide covers the comparison and the things people ask before the trip: Miqat, Badr, night travel and the drop-off in Madinah.
                    </p>
                    <p className="text-sm text-white/60 mt-6">Looking for prices? See the <Link href={BOOKING_PAGE} className="font-semibold text-[#fcd34d] underline-offset-2 hover:underline">Makkah to Madinah booking page</Link>.</p>
                </div>
            </header>

            {/* ================= SHORT ANSWER ================= */}
            <section aria-labelledby="short" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="rounded-3xl bg-white border border-[#172554]/10 shadow-sm p-7">
                    <h2 id="short" className="text-lg font-bold text-[#172554] mb-3">The short answer</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
                        <div className="flex gap-3"><TrainFront className="w-6 h-6 text-[#1d4ed8] shrink-0" aria-hidden="true" /><p><strong>Train:</strong> around 2 h 15–20 min on direct services, station to station. Best for one or two people with light bags.</p></div>
                        <div className="flex gap-3"><Car className="w-6 h-6 text-[#1d4ed8] shrink-0" aria-hidden="true" /><p><strong>Car:</strong> about 450 km, around 4.5–5 hours of driving plus a stop, hotel to hotel. Best for families, elderly relatives and heavy luggage.</p></div>
                    </div>
                </div>
            </section>

            {/* ================= WHOLE DAY ================= */}
            <section aria-labelledby="day" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className={prose}>
                    <h2 id="day" className={`${h2} mb-2`}>Compare the Whole Day, Not Just the Ride</h2>
                    <p>
                        The train&apos;s advertised time covers the rail journey only. Neither Makkah station nor Madinah station is at the Haram, so the real trip has more legs. Fill in your own times for each one:
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                    <div className="rounded-3xl bg-white border border-[#172554]/10 p-7">
                        <h3 className={`${h3} mb-4`}>By train</h3>
                        <ol className="space-y-2 text-sm text-slate-700 list-decimal pl-5">
                            <li>Hotel checkout, then a taxi to Makkah station</li>
                            <li>Arrive early, security and boarding</li>
                            <li>The train, around 2 h 15–20 min direct</li>
                            <li>Collect bags and find a ride at Madinah station</li>
                            <li>Drive into the central area and to your hotel</li>
                        </ol>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#172554]/10 p-7">
                        <h3 className={`${h3} mb-4`}>By private car</h3>
                        <ol className="space-y-2 text-sm text-slate-700 list-decimal pl-5">
                            <li>Hotel checkout, the car waits at the agreed point</li>
                            <li>Out of Makkah traffic</li>
                            <li>The expressway north, with a rest stop</li>
                            <li>Into Madinah and to your hotel, as close as allowed</li>
                        </ol>
                    </div>
                </div>
                <div className={`${prose} mt-8`}>
                    <p>
                        For a solo traveller with a backpack, the extra legs are small and the train usually wins. For a family of six with suitcases and Zamzam, every leg means lifting bags and finding a second vehicle, and the car&apos;s longer road time often matters less. Price works the same way: train tickets are per person, a car is one fare for everyone in it.
                    </p>
                    <p className="text-sm">Train times, fares and baggage rules change. Check the operator&apos;s current information before you decide.</p>
                </div>
            </section>

            {/* ================= MIQAT ================= */}
            <section aria-labelledby="miqat" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6">
                    <Landmark className="w-9 h-9 text-[#1d4ed8]" aria-hidden="true" />
                    <div className={prose}>
                        <h2 id="miqat" className={`${h2} mb-2`}>Miqat: Only on the Way Back</h2>
                        <p>
                            Going from Makkah to Madinah, there is no Miqat to stop at and no Ihram to wear. You are leaving the Haram, not entering it.
                        </p>
                        <p>
                            It matters on the return. If you travel from Madinah to Makkah for another Umrah, the Miqat is Dhul Hulaifah (Abyar Ali), on the edge of Madinah. In a car you can stop there to change and pray. On the train you need to be in Ihram before you board. More on the return: <Link href="/routes/madinah-makkah/" className={link}>Madinah to Makkah private car</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= BADR / NIGHT / SEASON ================= */}
            <section aria-labelledby="road" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <h2 id="road" className={`${h2} mb-8 text-center`}>On the Road</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="rounded-3xl bg-white border border-[#172554]/10 p-7">
                        <MapPin className="w-6 h-6 text-[#1d4ed8] mb-3" aria-hidden="true" />
                        <h3 className={`${h3} mb-2`}>The Badr detour</h3>
                        <p className="text-sm text-slate-700 leading-relaxed">Some pilgrims visit Badr, the site of the first battle in Islam, on the way. It is off the main expressway, so it adds time and is quoted on top of the normal fare. Ask for it when you book, not on the road.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#172554]/10 p-7">
                        <Moon className="w-6 h-6 text-[#1d4ed8] mb-3" aria-hidden="true" />
                        <h3 className={`${h3} mb-2`}>Travelling at night</h3>
                        <p className="text-sm text-slate-700 leading-relaxed">Many families drive after Isha, when it is cooler and the roads out of Makkah are quieter. A long night drive needs a rested driver, so book ahead rather than at the last minute, and plan one proper break.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#172554]/10 p-7">
                        <CalendarDays className="w-6 h-6 text-[#1d4ed8] mb-3" aria-hidden="true" />
                        <h3 className={`${h3} mb-2`}>Busy seasons</h3>
                        <p className="text-sm text-slate-700 leading-relaxed">In Ramadan, especially the last ten nights, and around Hajj, trains sell out early and roads near both Harams close more often. Book either option well ahead and leave extra time at both ends.</p>
                    </div>
                </div>
            </section>

            {/* ================= MADINAH ARRIVAL ================= */}
            <section aria-labelledby="arrive" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={prose}>
                        <h2 id="arrive" className="text-2xl md:text-3xl font-extrabold text-[#172554] mb-2">Arriving Near the Prophet&apos;s Mosque</h2>
                        <p>
                            Many hotels are in the Markaziyah, the central area around Al-Masjid an-Nabawi. Some roads there close at prayer times and in busy seasons, so a car may stop at the nearest allowed point and you walk the last stretch. Arriving between prayers helps.
                        </p>
                        <p>
                            By train, you still need a ride from the station into the central area, with your bags.
                        </p>
                    </div>
                    <div className={prose}>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#172554] mb-2 flex items-center gap-2"><Droplets className="w-6 h-6 text-[#1d4ed8]" aria-hidden="true" />Zamzam and Luggage</h2>
                        <p>
                            Pilgrims often leave Makkah with Zamzam containers on top of their suitcases. In a car, tell us how many so there is room. On the train, check the current baggage rules before you pack. More: <Link href="/blog/zamzam-water-transport-makkah-madinah/" className={link}>carrying Zamzam between Makkah and Madinah</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= CHECKLIST + CTA ================= */}
            <section aria-labelledby="choose" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className="rounded-3xl bg-[#172554] text-white p-8">
                    <h2 id="choose" className="text-2xl md:text-3xl font-extrabold mb-5">If You Decide on a Car</h2>
                    <ul className="space-y-2 text-sm text-white/85 mb-6">
                        {['One fare for the whole car, one way: from 400 SAR (sedan) to 800 SAR (Hiace)', 'Fuel, hotel pickup and drop-off and a rest stop included', 'Badr, extra hotels or long waits quoted on top'].map((x) => (
                            <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#fcd34d] shrink-0" aria-hidden="true" />{x}</li>
                        ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link href={BOOKING_PAGE} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#fcd34d] px-6 py-3.5 font-bold text-[#172554] hover:bg-[#fde68a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">See prices and book <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></Link>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 font-bold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><WhatsAppIcon className="w-4 h-4 fill-current" /> Ask on WhatsApp</a>
                    </div>
                </div>
                <ul className="mt-8 space-y-2 text-sm text-slate-700">
                    <Tick>Arriving by train in Madinah? <Link href="/routes/madinah-train-station-taxi/" className={link}>Taxi from Madinah train station</Link></Tick>
                    <Tick>Visiting sites in Madinah after you arrive? <Link href="/ziyarat-in-madinah/" className={link}>Ziyarat in Madinah</Link></Tick>
                </ul>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Common Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#172554]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#172554] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <p className="text-xs text-slate-500 mt-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Distances and times are estimates. Train details are general; check the operator for current times, fares and rules.</p>
                </div>
            </section>

            {/* ================= UGC ================= */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-12">
                        <ReviewsDisplay location="MakkahToMadinah" />
                        <QuestionsDisplay location="MakkahToMadinah" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="MakkahToMadinah" />
                        <QuestionForm locationName="MakkahToMadinah" />
                    </div>
                </div>
            </section>
        </div>
    );
}
