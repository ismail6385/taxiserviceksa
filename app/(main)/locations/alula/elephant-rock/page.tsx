import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MoveRight, Repeat, Hourglass, Car, Camera, Users, Mountain, Ticket, Coffee, Backpack, Hotel, PlaneLanding, Moon, Check, Minus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ElephantRockArt from '@/components/alula/ElephantRockArt';
import ElephantQuoteCard from '@/components/alula/ElephantQuoteCard';
import AlUlaReviews from '@/components/alula/AlUlaReviews';
import AlUlaLinkStrip from '@/components/alula/AlUlaLinkStrip';
import Reveal from '@/components/alula/Reveal';

const PAGE_URL = 'https://taxiserviceksa.com/locations/alula/elephant-rock/';
const QUOTE_HREF = '#quote';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I would like a quote for a transfer to Elephant Rock. Date, pickup and return plan: ')}`;
const OFFICIAL_URL = 'https://www.experiencealula.com/en/places-to-go/elephant-rock';

export const metadata: Metadata = {
    title: 'Elephant Rock Taxi & Private Transfer | AlUla',
    description:
        'Private transfers to Elephant Rock (Jabal AlFil) in AlUla for sunset or an evening visit - one-way, return, or a driver who waits and brings you back after dark.',
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: 'Elephant Rock Taxi & Private Transfer | AlUla',
        description: 'Go for the sunset, with your ride back already arranged.',
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Taxi Service KSA' }],
    },
};

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const tripTypes = [
    { icon: MoveRight, name: 'One-Way', chain: 'Pickup → Elephant Rock', text: 'You already have a way back, or you are continuing elsewhere with friends.' },
    { icon: Repeat, name: 'Return', chain: 'Pickup → Elephant Rock → Pickup', text: 'A second car collects you at a time agreed before the visit.' },
    { icon: Hourglass, name: 'Wait & Return', chain: 'Driver waits during your visit', text: 'The same driver stays for an agreed period and takes you back when you are ready.' },
    { icon: Car, name: 'Private Chauffeur', chain: 'Elephant Rock + other stops', text: 'The vehicle stays with you for a wider AlUla itinerary, booked by the hour.' },
];

const comparison = [
    { option: 'One-way', best: 'You already have return transport', back: 'No' },
    { option: 'Return transfer', best: 'You know roughly when you will leave', back: 'Yes, at the scheduled time' },
    { option: 'Wait & return', best: 'You want to leave whenever you are ready, within the agreed period', back: 'Yes, same driver' },
    { option: 'Hourly chauffeur', best: 'Elephant Rock is one of several stops', back: 'Yes, throughout the booking' },
];

const vehicles = [
    { name: 'Toyota Camry', img: '/toyota-camry.webp', href: '/fleet/toyota-camry/', pax: 4, bags: 2, best: 'Couples and small groups' },
    { name: 'Hyundai Staria', img: '/hyundai-staria.webp', href: '/fleet/hyundai-staria/', pax: 7, bags: 4, best: 'Families' },
    { name: 'GMC Yukon', img: '/gmc-yukon.webp', href: '/fleet/gmc-yukon/', pax: 7, bags: 5, best: 'Premium group travel' },
    { name: 'Toyota Hiace', img: '/toyota-hiace.webp', href: '/fleet/toyota-hiace/', pax: 11, bags: 16, best: 'Small groups' },
];

const options = [
    { label: 'AlUla hotel → Elephant Rock', href: QUOTE_HREF },
    { label: 'AlUla Airport → Elephant Rock', href: '/locations/alula/airport/' },
    { label: 'Elephant Rock → AlUla hotel', href: QUOTE_HREF },
    { label: 'Old Town → Elephant Rock', href: QUOTE_HREF },
    { label: 'Hegra → Elephant Rock', href: '/locations/alula/private-driver/' },
    { label: 'Elephant Rock → AlUla Airport', href: '/locations/alula/airport/' },
];

const priceFactors = ['Pickup location', 'One-way or return', 'Vehicle', 'Passengers', 'Bags', 'Waiting time', 'Extra stops', 'Chauffeur hours'];

const faqs = [
    { q: 'How do I get to Elephant Rock from AlUla?', a: 'By car - it is a short drive from central AlUla. Book a private transfer from your hotel, Old Town or another pickup point.' },
    { q: 'Can I book a private taxi to Elephant Rock?', a: 'Yes. Use the form on this page or WhatsApp us with your pickup, date and preferred arrival time.' },
    { q: 'Can the driver wait while we watch the sunset?', a: 'Yes, if you book "wait & return". The waiting period is agreed before the trip.' },
    { q: 'Can I book a return transfer?', a: 'Yes. Tell us roughly when you want to leave and a car collects you then.' },
    { q: 'When is the best time to visit?', a: 'Late afternoon into sunset and the evening is the most popular time. Check current opening hours before you go.' },
    { q: 'Can I go straight from AlUla Airport to Elephant Rock?', a: 'Often yes, if your landing time and the opening hours fit. Share your flight details and we will plan around them.' },
    { q: 'Can I combine Elephant Rock with Hegra?', a: 'Yes, with a private driver. Hegra has its own visit times, so we plan the day around your Hegra booking.' },
    { q: 'Do I need a 4x4?', a: 'Not for a normal road transfer. If you plan off-road or desert driving, tell us in advance.' },
    { q: 'Is Elephant Rock free to visit?', a: 'General access has been listed as free, but arrangements can change by season or event. Check current official information.' },
    { q: 'Are there cafés at Elephant Rock?', a: 'There are usually food and seating options on site, but what is open varies. We cannot reserve seating for you.' },
    { q: 'Can I bring photography equipment?', a: 'Yes. Tell us about tripods and camera bags so the vehicle has room.' },
    { q: 'What vehicle should I book for a family?', a: 'A Hyundai Staria or GMC Yukon usually suits a family. Tell us adults, children and bags.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Private Transfers to Elephant Rock',
            url: PAGE_URL,
            serviceType: 'Private transfer',
            description:
                'Pre-booked private transport to Elephant Rock (Jabal AlFil) in AlUla: one-way, return, wait-and-return or as part of an hourly chauffeur booking. Attraction access is not included.',
            provider: { '@type': 'Organization', '@id': 'https://taxiserviceksa.com/#organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
            areaServed: [
                { '@type': 'TouristAttraction', name: 'Elephant Rock', alternateName: 'Jabal AlFil' },
                { '@type': 'Place', name: 'AlUla, Saudi Arabia' },
            ],
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

function Ctas({ dark = false, label = 'Book Elephant Rock Transfer' }: { dark?: boolean; label?: string }) {
    return (
        <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={QUOTE_HREF}>
                    {label}
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                </a>
            </Button>
            <Button
                asChild
                size="lg"
                variant="outline"
                className={`h-auto py-4 px-7 rounded-xl font-bold text-base ${dark ? 'bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white' : 'bg-white text-gray-900 border-stone-300 hover:bg-stone-50'}`}
            >
                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer">
                    <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" />
                    WhatsApp Us
                </a>
            </Button>
        </div>
    );
}

export default function ElephantRockPage() {
    return (
        <div className="alula-page bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ---------------- Hero ---------------- */}
            <section className="relative isolate overflow-hidden bg-[#1c1530]">
                <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
                    <ElephantRockArt className="w-full h-full alula-drift" idPrefix="hero" />
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#140f22]/80 via-[#140f22]/35 to-[#140f22]/55" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                    <div className="text-white animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
                        <p className="text-sm font-semibold text-amber-200 mb-4">Jabal AlFil · AlUla</p>
                        <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight mb-5">Elephant Rock Taxi &amp; Private Transfer in AlUla</h1>
                        <p className="text-lg text-stone-200 leading-relaxed mb-8 max-w-xl">
                            Arrange a private transfer to Elephant Rock for sunset, photography or an evening visit - with your return journey booked in advance.
                        </p>
                        <Ctas dark />
                        <p className="mt-5 text-sm text-stone-300">Private vehicle · Pre-booked pickup · Return options available</p>
                    </div>
                    <div id="quote" className="scroll-mt-40">
                        <ElephantQuoteCard />
                    </div>
                </div>
            </section>

            {/* ---------------- Trip types ---------------- */}
            <section aria-labelledby="trip-types" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="trip-types" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Getting There Is Easy. Getting Back After Sunset Needs Planning.</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mb-10">
                        Because most people stay until sunset or later, arranging the return in advance makes the evening easier to coordinate. Pick the trip that fits your plan.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {tripTypes.map((t, i) => (
                            <Reveal key={t.name} delay={i * 70} className="h-full">
                                <a href={QUOTE_HREF} className="group h-full flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:border-primary motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                                    <t.icon className="w-7 h-7 text-primary mb-4" aria-hidden="true" />
                                    <h3 className="mb-1">{t.name}</h3>
                                    <p className="text-xs font-semibold text-stone-500 mb-3">{t.chain}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed flex-1">{t.text}</p>
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                                        Choose <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                    </span>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- About + sunset planning ---------------- */}
            <section className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Elephant Rock (Jabal AlFil)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Elephant Rock is AlUla&apos;s best-known natural landmark: a sandstone outcrop, worn by wind and erosion into the shape of an elephant with its trunk touching the ground. Experience AlUla describes it as rising 52 metres from the sand.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            It is mainly an afternoon-and-evening visit. People come for golden hour, watch the rock change colour at sunset and stay on into the evening, when the area around it is set up for sitting out.
                        </p>
                        <p className="text-sm text-gray-500">
                            Opening hours and seasonal arrangements change - check the <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">current visitor information on Experience AlUla</a> before you travel.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-white border border-stone-200 p-7 md:p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Planning an Elephant Rock Sunset Visit?</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" /><span><strong>Arrive before sunset.</strong> It gives you time to find a viewing or seating spot and settle in before the light changes. Tell us your date and we set the pickup accordingly.</span></li>
                            <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" /><span><strong>Book the way back now.</strong> Decide on a return time or a waiting driver before you go, not at the end of the evening.</span></li>
                            <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" /><span><strong>Expect it to cool down.</strong> Desert evenings can turn cool quickly after the sun goes, especially in winter.</span></li>
                            <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" /><span><strong>Seating varies.</strong> Food and seating on site depend on current operations, and some evenings are busier than others.</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------------- Golden hour visual ---------------- */}
            <section className="relative isolate overflow-hidden min-h-[420px] flex items-center bg-[#1c1530]">
                <div className="absolute inset-0 -z-10" aria-hidden="true">
                    <ElephantRockArt className="w-full h-full" idPrefix="band" />
                </div>
                <div className="absolute inset-0 -z-10 bg-[#140f22]/45" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                    <div className="max-w-xl text-white">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Your Ride to Golden Hour</h2>
                        <p className="text-lg text-stone-200 mb-8">Arrive with time to enjoy the landscape. Leave with your return journey already arranged.</p>
                        <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold bg-white text-gray-900 hover:bg-amber-100">
                            <a href={QUOTE_HREF}>
                                Book Sunset Transfer <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* ---------------- Wait & return ---------------- */}
            <section aria-labelledby="wait" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
                    <div>
                        <h2 id="wait" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Want the Driver to Wait for Your Sunset?</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            If you don&apos;t want to arrange a separate ride back after dark, ask for a wait-and-return booking. Waiting is a booking option, not automatic on a one-way trip.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            The waiting period - and any charge for it - is agreed before the trip. If you think you will stay late, say so when you book.
                        </p>
                    </div>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            'The driver collects you from your hotel or resort.',
                            'You are dropped at Elephant Rock before sunset.',
                            'The driver waits for the agreed period.',
                            'You are taken back to your hotel or next stop.',
                        ].map((t, i) => (
                            <li key={t} className="rounded-2xl border border-stone-200 p-5">
                                <span className="block text-2xl font-black text-primary/70 mb-2" aria-hidden="true">{i + 1}</span>
                                <p className="text-gray-700">{t}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ---------------- Comparison ---------------- */}
            <section aria-labelledby="compare" className="bg-stone-950 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 id="compare" className="text-3xl md:text-4xl font-bold mb-8">One-Way, Return or Waiting?</h2>
                    <Reveal>
                        <div className="overflow-x-auto rounded-2xl border border-white/10">
                            <table className="w-full text-sm">
                                <thead className="bg-white/5 text-left">
                                    <tr>
                                        <th scope="col" className="px-5 py-4 font-semibold">Option</th>
                                        <th scope="col" className="px-5 py-4 font-semibold">Best for</th>
                                        <th scope="col" className="px-5 py-4 font-semibold">Driver takes you back?</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    {comparison.map((r) => (
                                        <tr key={r.option}>
                                            <th scope="row" className="px-5 py-4 text-left font-semibold text-amber-200">{r.option}</th>
                                            <td className="px-5 py-4 text-stone-300">{r.best}</td>
                                            <td className="px-5 py-4 text-stone-300">
                                                <span className="inline-flex items-center gap-2">
                                                    {r.back === 'No' ? <Minus className="w-4 h-4 text-stone-500" aria-hidden="true" /> : <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" />}
                                                    {r.back}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ---------------- Hotel / airport / return ---------------- */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-2xl border border-stone-200 p-7">
                        <Hotel className="w-7 h-7 text-primary mb-3" aria-hidden="true" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Hotel to Elephant Rock</h2>
                        <p className="text-gray-600 leading-relaxed mb-3">Staying in town, in Ashar Valley or at a desert camp? We collect you at your door. Send us:</p>
                        <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                            <li>Hotel or camp name</li>
                            <li>Preferred arrival time</li>
                            <li>Passengers and bags</li>
                            <li>Your return plan</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-stone-200 p-7">
                        <PlaneLanding className="w-7 h-7 text-primary mb-3" aria-hidden="true" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">AlUla Airport to Elephant Rock</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Landing in the afternoon and want the sunset the same day? It can work, but consider baggage collection, the opening hours, where your suitcases go, and how you get to the hotel afterwards. Share your flight details and preferred visit time so the journey is planned around your arrival.
                        </p>
                        <Link href="/locations/alula/airport/" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                            AlUla Airport transfer <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                    </div>
                    <div className="rounded-2xl border-2 border-primary bg-primary/5 p-7">
                        <Moon className="w-7 h-7 text-primary mb-3" aria-hidden="true" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Return From Elephant Rock</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            After sunset, many visitors prefer having the car back already arranged rather than sorting it out at the end of the evening. Tell us when you expect to leave, and whether you want a scheduled return or a waiting driver.
                        </p>
                        <Button asChild className="group h-auto py-3 px-5 rounded-xl font-bold bg-gray-900 text-white hover:bg-gray-800">
                            <a href={QUOTE_HREF}>
                                Arrange Return Transfer <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* ---------------- Combining ---------------- */}
            <section aria-labelledby="combine" className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="combine" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Combining Elephant Rock With Other AlUla Stops?</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mb-10">
                        Because Elephant Rock is an evening stop, it fits naturally at the end of a day. Multi-stop plans are subject to timing, attraction arrangements and vehicle availability.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                        {[
                            { title: 'Old Town evening', stops: ['Hotel', 'Old Town', 'Elephant Rock', 'Dinner', 'Hotel'] },
                            { title: 'Hegra + Elephant Rock', stops: ['Hotel', 'Hegra', 'Elephant Rock', 'Hotel'] },
                            { title: 'Arrival day', stops: ['ULH airport', 'Hotel', 'Elephant Rock', 'Hotel'] },
                        ].map((it) => (
                            <div key={it.title} className="rounded-2xl bg-white border border-stone-200 p-6">
                                <h3 className="mb-4">{it.title}</h3>
                                <ol className="space-y-2">
                                    {it.stops.map((s, i) => (
                                        <li key={s + i} className="flex items-center gap-3 text-sm text-gray-700">
                                            <span className={`w-2.5 h-2.5 rounded-full ${s === 'Elephant Rock' ? 'bg-amber-500' : 'bg-stone-300'}`} aria-hidden="true" />
                                            <span className={s === 'Elephant Rock' ? 'font-semibold text-gray-900' : ''}>{s}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-2xl bg-white border border-stone-200 p-7">
                            <h3 className="mb-2">Hegra + Elephant Rock in One Day</h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                A popular pairing: Hegra earlier in the day, Elephant Rock for sunset. Hegra runs on its own official visit times and starting points, and Elephant Rock is a separate evening visit, so the day is planned around your Hegra slot. We handle the transport between them - not the Hegra tour itself.
                            </p>
                            <Link href="/locations/alula/hegra/" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                                Hegra transportation <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                            </Link>
                        </div>
                        <div className="rounded-2xl bg-white border border-stone-200 p-7">
                            <h3 className="mb-2">Want More Than One Stop?</h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                A transfer goes from A to B. A private driver keeps the vehicle with you for the agreed hours - useful if you want Old Town, Dadan or Jabal Ikmah before the sunset.
                            </p>
                            <Link href="/locations/alula/private-driver/" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                                Private driver in AlUla <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- Photographers / families / practical ---------------- */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: Camera,
                            title: 'Elephant Rock for Photographers',
                            text: 'Golden hour and the minutes after sunset are when the rock photographs best. Mention tripods and camera bags so the car has space, and book a waiting driver if you want to shoot until the light has gone. No special access or permits are included.',
                        },
                        {
                            icon: Users,
                            title: 'Transfers for Families & Groups',
                            text: 'Choose the vehicle by passengers, children, bags and your return plan. Child seats can be requested in the booking form, subject to availability.',
                        },
                        {
                            icon: Mountain,
                            title: 'Do I Need a 4x4?',
                            text: 'For a standard road transfer, the vehicle depends on your group and the current access and parking arrangements, not on off-road ability. If your plan includes off-road or desert driving, tell us in advance.',
                        },
                        {
                            icon: Ticket,
                            title: 'Do I Need a Ticket?',
                            text: 'General access to Elephant Rock has been listed as free, but arrangements can vary by season, event and venue set-up. Check current official visitor information before your trip.',
                        },
                        {
                            icon: Coffee,
                            title: 'Cafés & Seating',
                            text: 'Some visitors combine the sunset with food and drinks from the outlets on site. What is open, and seating availability, can change - we cannot book tables.',
                        },
                        {
                            icon: Backpack,
                            title: 'What Should I Bring?',
                            text: 'Comfortable shoes, water, sun protection for the afternoon, a light jacket for the evening, and your camera.',
                        },
                    ].map((c, i) => (
                        <Reveal key={c.title} delay={(i % 3) * 70} className="h-full">
                            <div className="h-full rounded-2xl bg-stone-50 border border-stone-200 p-6">
                                <c.icon className="w-6 h-6 text-primary mb-3" aria-hidden="true" />
                                <h3 className="mb-2">{c.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{c.text}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ---------------- Vehicles ---------------- */}
            <section aria-labelledby="vehicles" className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Vehicles for an Evening Out</h2>
                    <p className="text-gray-600 mb-8">Capacities are the figures our booking system uses. Larger groups can ask about the Toyota Coaster.</p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {vehicles.map((v) => (
                            <Link key={v.name} href={v.href} className="group flex flex-col rounded-2xl border border-stone-200 overflow-hidden bg-white transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                                    <Image src={v.img} alt={`${v.name} for Elephant Rock transfers`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                                </div>
                                <div className="p-4">
                                    <h3 className="mb-1">{v.name}</h3>
                                    <p className="text-sm text-gray-700">Up to {v.pax} passengers · about {v.bags} large bags</p>
                                    <p className="text-xs text-stone-500 mt-1">{v.best}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- Options + process + pricing ---------------- */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Popular Transfer Options</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                        {options.map((o) => {
                            const cls = 'group flex items-center justify-between rounded-2xl border border-stone-200 bg-white p-5 font-semibold text-gray-900 transition hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary';
                            const inner = (
                                <>
                                    {o.label}
                                    <ArrowRight className="w-5 h-5 text-primary transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                </>
                            );
                            return o.href.startsWith('#') ? <a key={o.label} href={o.href} className={cls}>{inner}</a> : <Link key={o.label} href={o.href} className={cls}>{inner}</Link>;
                        })}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Booking Works</h2>
                            <ol className="space-y-5">
                                {[
                                    ['Tell us your pickup', 'Hotel, airport or another AlUla location.'],
                                    ['Choose your trip type', 'One-way, return, waiting or chauffeur.'],
                                    ['Confirm your vehicle', 'Matched to your passengers and bags.'],
                                    ['Meet your driver', 'Collected at the agreed place and time.'],
                                ].map(([t, d], i) => (
                                    <li key={t} className="flex gap-4">
                                        <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0" aria-hidden="true">0{i + 1}</span>
                                        <div>
                                            <h3 className="mb-0.5">{t}</h3>
                                            <p className="text-sm text-gray-600">{d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <div className="rounded-3xl bg-stone-50 border border-stone-200 p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Elephant Rock Transfer Pricing Works</h2>
                            <p className="text-gray-600 mb-6">Each trip is quoted individually, with a fixed price before you confirm. It depends on:</p>
                            <ul className="flex flex-wrap gap-2 mb-8">
                                {priceFactors.map((f) => (
                                    <li key={f} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-gray-700">{f}</li>
                                ))}
                            </ul>
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90">
                                <a href={QUOTE_HREF}>
                                    Request Elephant Rock Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <AlUlaReviews />

            {/* ---------------- FAQ ---------------- */}
            <section aria-labelledby="faq" className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Elephant Rock Transport Questions</h2>
                    <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border border-stone-200 px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <p className="mt-6 text-sm text-gray-600">
                        Planning the rest of your trip? See <Link href="/locations/alula/" className="text-primary font-semibold hover:underline">AlUla taxi and private transfers</Link>, our <Link href="/services/airport-transfers/" className="text-primary font-semibold hover:underline">airport transfer service</Link> and <Link href="/services/private-driver/" className="text-primary font-semibold hover:underline">private driver service</Link> across Saudi Arabia.
                    </p>
                </div>
            </section>

            {/* ---------------- Final CTA ---------------- */}
            <section className="relative isolate overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-[#1c1530]">
                <div className="absolute inset-0 -z-10 opacity-40" aria-hidden="true">
                    <ElephantRockArt className="w-full h-full" idPrefix="cta" />
                </div>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">Planning an Elephant Rock Sunset?</h2>
                    <p className="text-lg text-stone-200 mb-10 leading-relaxed">
                        Tell us where you&apos;re staying, when you&apos;d like to visit, how many people are travelling and whether you&apos;d like a return or waiting service. We&apos;ll help you arrange the right private vehicle.
                    </p>
                    <div className="flex justify-center">
                        <Ctas dark />
                    </div>
                    <p className="mt-8 text-sm text-stone-300">Attraction access and venue arrangements may change seasonally. Confirm current visitor information before your trip.</p>
                </div>
            </section>

            <AlUlaLinkStrip current="/locations/alula/elephant-rock/" title="More transportation in AlUla" />
        </div>
    );
}
