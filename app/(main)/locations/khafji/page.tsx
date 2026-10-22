import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, Info, MapPin, Plane, Briefcase, Users, Globe2, Clock, Car } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RelatedLocations from '@/components/seo/RelatedLocations';
import ApprovedDriversForLocation from '@/components/ApprovedDriversForLocation';

const PAGE_URL = 'https://taxiserviceksa.com/locations/khafji/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const DMM = 'King Fahd International Airport (DMM)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need a private car from Khafji. Pickup address, destination, date and time, passengers and luggage: ')}`;

// Distance checked against route calculators (about 298 km, a little over 3 hours' driving).
const DAMMAM_KM = 'About 300 km';
const DAMMAM_TIME = 'Around 3–3.5 hours';

const TITLE = 'Khafji Taxi Service | Private Transfers & Chauffeur';
const DESCRIPTION = 'Pre-booked private car from Khafji to Dammam, Al Khobar, Dhahran, Jubail, Dammam Airport and onward to Kuwait. Sedan, SUV or van, fare agreed before you travel. Book on WhatsApp.';

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private taxi and car transfer from Khafji' }],
    },
};

const faqs = [
    { q: 'How do I book a car from Khafji?', a: 'Send your pickup address in Khafji, destination, date, time, passengers and luggage on WhatsApp (+966 57 580 6733). We confirm the vehicle and the fare; the booking is final once you accept.' },
    { q: 'Do you do short local rides inside Khafji?', a: 'No. We run pre-booked private trips out of Khafji: to other cities, to airports and across the border, plus drivers by the hour. For a quick ride across town, a local taxi or a ride-hailing app is the better choice.' },
    { q: 'How far is Khafji from Dammam?', a: `${DAMMAM_KM} by road, ${DAMMAM_TIME.toLowerCase()} of driving, depending on where you start and finish.` },
    { q: 'How much is a taxi from Khafji to Dammam or Al Khobar?', a: 'Fares depend on the exact pickup and drop-off and the vehicle. Send your addresses and we quote the whole vehicle before you book; the fare does not change unless the trip does.' },
    { q: 'Is there an airport in Khafji?', a: `There is no commercial passenger airport in Khafji. Most travellers fly from ${DMM} in Dammam, or from Kuwait International Airport across the border. We drive to and from both.` },
    { q: 'Can you take me from Khafji to Kuwait?', a: 'Yes. The Khafji–Nuwaiseeb border crossing is just outside the town. Every passenger needs the documents to leave Saudi Arabia and enter Kuwait; check those before booking, and send us your destination in Kuwait for a quote.' },
    { q: 'Do you pick up at night?', a: 'Yes, pickups run 24 hours a day. For very early or late trips, book ahead so a driver is lined up.' },
    { q: 'Which vehicles are available?', a: 'A Toyota Camry, a Toyota RAV4 Hybrid, a Hyundai Staria or a GMC Yukon XL, depending on your group and luggage. Tell us your numbers and we suggest one.' },
    { q: 'Can I book a return trip?', a: 'Yes. Send both dates. A return days later is a separate trip; if you want the driver to wait, the waiting is quoted in advance.' },
    { q: 'What if my flight is delayed?', a: 'For airport pickups we track your flight number, so the driver times the pickup to your real landing. Delays of up to 3 hours cost nothing extra.' },
    { q: 'Can I add stops on the way?', a: 'Yes, if you tell us when booking. A stop that adds distance or time may change the fare.' },
    { q: 'Is my booking confirmed when I send a message?', a: 'No. A message is an enquiry. The trip is confirmed when we have agreed the vehicle, the fare and the pickup time with you.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Pre-booked private transfers from Khafji',
            url: PAGE_URL,
            serviceType: 'Private intercity and airport transfer',
            description: 'Pre-booked private cars with driver from Khafji to Dammam, Al Khobar, Dhahran, Jubail, Dammam Airport and Kuwait.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: { '@type': 'City', name: 'Khafji' },
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://taxiserviceksa.com/locations/' },
                { '@type': 'ListItem', position: 3, name: 'Khafji', item: PAGE_URL },
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
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#102a3a]';
const h3 = 'text-xl font-bold text-[#102a3a]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0369a1] px-6 py-3.5 font-bold text-white hover:bg-[#075985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369a1] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#102a3a]/20 px-6 py-3.5 font-bold text-[#102a3a] hover:border-[#0369a1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369a1]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#0369a1] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function KhafjiLocationPage() {
    return (
        <div className="khafji bg-[#f3f6f8]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#102a3a]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#2a5c74_0%,_#102a3a_62%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#7dd3fc] mb-4`}>Khafji · Saudi–Kuwait border town</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Private Taxi, Car Transfer and Chauffeur Service in Khafji</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            Pre-booked private cars out of Khafji: down the coast to Jubail, Dammam, Al Khobar and Dhahran, to Dammam Airport for your flight, or across the border into Kuwait. Your car, your schedule, and the fare agreed before you go.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#102a3a] hover:bg-[#f3f6f8]">
                                <a href={QUOTE_HREF}>Get a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {['Private, not shared', '24/7 pickups', 'Fare per vehicle', 'English & Arabic drivers'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#7dd3fc] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Khafji transfer"
                            cta="Send my request"
                            fromPlaceholder="Your address in Khafji"
                            toPlaceholder="Destination: city, address or airport"
                            fromChips={['Khafji']}
                            toChips={['Dammam', 'Al Khobar', 'Jubail', DMM, 'Kuwait City']}
                            showFlight="auto"
                            returnNote="Return trip to Khafji also needed - date to confirm."
                            buttonClass="bg-[#0369a1] hover:bg-[#075985] focus-visible:ring-[#0369a1]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= WHAT WE DO ================= */}
            <section aria-labelledby="what" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    <div className={prose}>
                        <h2 id="what" className={`${h2} mb-2`}>Getting Out of Khafji, Planned in Advance</h2>
                        <p>
                            Khafji sits at the northern tip of the Eastern Province, right on the Kuwaiti border, a long way from the region&apos;s big cities and airports. Most journeys from here are long ones: three hours or more south to Dammam, or across the border into Kuwait. That is exactly the kind of trip that is easier to plan in advance than to improvise.
                        </p>
                        <p>
                            We run private, pre-booked cars. You tell us where you are going, when, and how many people and bags are travelling; we confirm a suitable vehicle and the fare; a driver collects you from your door in Khafji. No other passengers are picked up on the way.
                        </p>
                        <p>
                            We do not offer quick rides across town or shared taxis. If you just need to get to a shop or a nearby street now, a local taxi or ride-hailing app is the better choice. For anything longer, planned or time-sensitive, send us the details.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-[#102a3a] text-white p-7 space-y-3">
                        <h3 className="text-xl font-bold">What we do from Khafji</h3>
                        <ul className="space-y-2 text-sm text-white/85">
                            {['Intercity trips down the Eastern Province', 'Dammam Airport drop-offs and pickups', 'Cross-border trips into Kuwait', 'Drivers by the hour or day', 'One way or return'].map((x) => (
                                <li key={x} className="flex gap-2"><Check className="w-4 h-4 mt-0.5 text-[#7dd3fc] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-white/60 flex gap-2 pt-2 border-t border-white/10"><X className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />No short local hailing or shared taxis.</p>
                    </aside>
                </div>
            </section>

            {/* ================= ROUTES ================= */}
            <section aria-labelledby="routes" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="routes" className={`${h2} mb-3`}>Where People Go from Khafji</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">Every trip is quoted on your exact pickup and drop-off. Give us the address, not just the city; Dammam alone is a big place.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <article className="rounded-3xl bg-white border border-[#102a3a]/10 p-7">
                            <h3 className={`${h3} mb-1`}>Khafji to Dammam, Al Khobar and Dhahran</h3>
                            <p className="text-sm text-stone-500 mb-3">{DAMMAM_KM} to Dammam · {DAMMAM_TIME}</p>
                            <p className="text-sm text-stone-700 leading-relaxed mb-4">The most common trip: south along the coastal highway to the Dammam–Khobar–Dhahran area for work, family, hotels or shopping. Al Khobar and Dhahran are a little further than central Dammam. If you have a meeting or a check-in time, tell us and we set the pickup from it.</p>
                            <div className="flex flex-wrap gap-2 text-sm">
                                <Link href="/locations/dammam/" className={link}>Dammam</Link><span className="text-stone-300">·</span>
                                <Link href="/locations/al-khobar/" className={link}>Al Khobar</Link><span className="text-stone-300">·</span>
                                <Link href="/locations/dhahran/" className={link}>Dhahran</Link>
                            </div>
                        </article>
                        <article className="rounded-3xl bg-white border border-[#102a3a]/10 p-7">
                            <h3 className={`${h3} mb-1`}>Khafji to Jubail</h3>
                            <p className="text-sm text-stone-500 mb-3">On the way to Dammam, shorter than the full trip</p>
                            <p className="text-sm text-stone-700 leading-relaxed mb-4">Popular with people working in Jubail Industrial City. Send the site or compound name and any gate procedure; for regular trips between Khafji and Jubail, ask about a weekly or monthly driver.</p>
                            <Link href="/locations/jubail/" className={link}>Jubail transfers</Link>
                        </article>
                        <article className="rounded-3xl bg-white border border-[#102a3a]/10 p-7">
                            <Plane className="w-6 h-6 text-[#0369a1] mb-2" aria-hidden="true" />
                            <h3 className={`${h3} mb-1`}>Airports</h3>
                            <p className="text-sm text-stone-700 leading-relaxed mb-4">Khafji has no commercial passenger airport. Most travellers use {DMM}, a little further than Dammam city, or Kuwait International Airport across the border. For a departure, send your flight time and we plan the pickup with room for the drive and check-in. For an arrival, we track your flight; delays of up to 3 hours cost nothing extra.</p>
                            <Link href="/dammam-airport-taxi/" className={link}>Dammam Airport transfers</Link>
                        </article>
                        <article className="rounded-3xl bg-[#102a3a] text-white p-7">
                            <Globe2 className="w-6 h-6 text-[#7dd3fc] mb-2" aria-hidden="true" />
                            <h3 className="text-xl font-bold mb-1">Across the border to Kuwait</h3>
                            <p className="text-sm text-white/85 leading-relaxed mb-4">The Khafji–Nuwaiseeb crossing is just outside town, and Kuwait City is closer to Khafji than Dammam is. Every passenger needs the documents to leave Saudi Arabia and enter Kuwait, and must check them before booking. Send your Kuwait address and we quote the trip.</p>
                            <Link href="/border-crossings/taxi-khafji-border-crossing/" className="font-semibold text-[#7dd3fc] hover:underline">Khafji border crossing guide</Link>
                        </article>
                    </div>
                    <p className="text-sm text-stone-600 mt-6 flex gap-2"><Info className="w-4 h-4 mt-0.5 text-[#0369a1] shrink-0" aria-hidden="true" />Going further, for example to Riyadh? Send the destination and we quote it. <Link href="/services/intercity/" className={link}>Private intercity transfers in Saudi Arabia</Link>.</p>
                </div>
            </section>

            {/* ================= VEHICLES + FARE ================= */}
            <section aria-labelledby="vehicles" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="rounded-3xl bg-[#f3f6f8] p-7">
                        <Car className="w-7 h-7 text-[#0369a1] mb-3" aria-hidden="true" />
                        <h2 id="vehicles" className="text-2xl md:text-3xl font-extrabold text-[#102a3a] mb-5">Vehicles</h2>
                        <ul className="space-y-3 text-sm text-stone-700">
                            {[
                                ['Toyota Camry', 'Up to 3 people, about 2 large suitcases'],
                                ['Toyota RAV4 Hybrid 2025', 'Up to 4 people, about 3 suitcases'],
                                ['Hyundai Staria VIP', 'Up to 7 people, about 4 large suitcases'],
                                ['GMC Yukon XL', 'Up to 7 people, about 5 large suitcases'],
                            ].map(([k, v]) => (
                                <li key={k} className="flex justify-between gap-4 border-b border-[#102a3a]/10 pb-3 last:border-0"><span className="font-semibold text-[#102a3a]">{k}</span><span className="text-right">{v}</span></li>
                            ))}
                        </ul>
                        <p className="text-sm text-stone-600 mt-5">Count people and bags together; a full car leaves less room behind. Child seats on request, confirmed for your date. <Link href="/fleet/" className={link}>See the fleet</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-[#f3f6f8] p-7">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#102a3a] mb-5">How the Fare Works</h2>
                        <p className="text-sm text-stone-700 leading-relaxed mb-4">We quote each trip for the whole vehicle, from your Khafji address to your destination, before you book. Once you accept, that is the price; it changes only if the trip changes.</p>
                        <ul className="space-y-2 text-sm text-stone-700 mb-4">
                            <Tick>Included: the vehicle and driver, fuel, and the drive to the address in your quote</Tick>
                            <Tick>Included for airport pickups: flight tracking and delays up to 3 hours</Tick>
                        </ul>
                        <ul className="space-y-2 text-sm text-stone-700">
                            {['Extra stops or a change of destination', 'The driver waiting for you before a return', 'Return trips, quoted as their own leg'].map((x) => (
                                <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x} (agreed in advance)</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= WHO ================= */}
            <section aria-labelledby="who" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="who" className={`${h2} mb-8`}>Who Books With Us in Khafji</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Briefcase, t: 'Oil and industry staff', d: 'Shift changes, site visits and trips to Jubail or Dhahran. Give us the site name and gate procedure. For regular runs, ask about a weekly or monthly driver.' },
                            { icon: Users, t: 'Families', d: 'Visiting relatives down the coast or across the border. Send the number of adults, children and bags so the car fits everyone.' },
                            { icon: Plane, t: 'Flyers', d: 'Getting to Dammam or Kuwait airport for a flight, or home again after one. Send the flight time and we plan the pickup.' },
                            { icon: Clock, t: 'Driver by the hour', d: <>Several stops in one day, with the driver waiting between them. <Link href="/services/private-driver/" className={link}>Private driver and chauffeur service</Link>.</> },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-white border border-[#102a3a]/10 p-6">
                                <Icon className="w-6 h-6 text-[#0369a1] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#102a3a] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= BOOKING ================= */}
            <section aria-labelledby="book" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className={prose}>
                        <h2 id="book" className={`${h2} mb-2`}>How to Book</h2>
                        <ol className="space-y-3">
                            {[
                                ['Send the trip', 'Your pickup address in Khafji (a map pin helps), the destination address, date and time.'],
                                ['Add people and bags', 'Adults, children and suitcases; flight number for airport trips; border details for Kuwait.'],
                                ['Get the fare', 'We confirm the vehicle and price for the whole trip.'],
                                ['Confirm', 'Once you accept, the booking is final and the driver’s details follow before the trip.'],
                            ].map(([t, d], i) => (
                                <li key={t} className="flex gap-4">
                                    <span className="inline-flex w-8 h-8 shrink-0 items-center justify-center rounded-full bg-[#0369a1] text-white font-black text-sm" aria-hidden="true">{i + 1}</span>
                                    <span><strong className="text-[#102a3a]">{t}.</strong> {d}</span>
                                </li>
                            ))}
                        </ol>
                        <p className="text-sm">Pickups run 24 hours a day; for very early or late departures, book ahead. If your plans change, tell us as early as possible.</p>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a href={QUOTE_HREF} className={primary}>Get a quote <Arrow /></a>
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                        </div>
                    </div>
                    <div className="rounded-3xl bg-[#f3f6f8] p-7">
                        <h3 className={`${h3} mb-4 flex items-center gap-2`}><MapPin className="w-5 h-5 text-[#0369a1]" aria-hidden="true" />Tips for a smooth pickup</h3>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <Tick>Send a location pin; some Khafji addresses are hard to find by name.</Tick>
                            <Tick>Give a phone number that will answer on the day.</Tick>
                            <Tick>Booking for someone else? Tell us the passenger’s name and number.</Tick>
                            <Tick>For Kuwait, keep passports and visas in the car, not in a suitcase.</Tick>
                            <Tick>Leave a margin for flights and meetings; the drive south is long.</Tick>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#102a3a]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#102a3a] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="flex flex-wrap gap-2 py-8">
                    {[
                        ['Private intercity transfers in Saudi Arabia', '/services/intercity/'],
                        ['Pre-booked airport transfer service', '/services/airport-transfers/'],
                        ['Private driver and chauffeur service', '/services/private-driver/'],
                        ['Dammam taxi transfer', '/locations/dammam/'],
                        ['Al Khobar private transfer', '/locations/al-khobar/'],
                        ['Khobar to Kuwait taxi', '/routes/khobar-to-kuwait-taxi/'],
                        ['Riyadh to Kuwait taxi', '/routes/riyadh-kuwait/'],
                    ].map(([l, h]) => (
                        <Link key={h} href={h} className="rounded-full border border-[#102a3a]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#102a3a] hover:border-[#0369a1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0369a1]">{l}</Link>
                    ))}
                </div>
                <ApprovedDriversForLocation location="khafji" />
                <RelatedLocations currentCity="Khafji" />
            </div>
        </div>
    );
}
