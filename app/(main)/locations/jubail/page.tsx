import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, X, Info, Factory, Plane, Briefcase, CalendarRange, ShieldCheck, Clock, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RelatedLocations from '@/components/seo/RelatedLocations';
import ApprovedDriversForLocation from '@/components/ApprovedDriversForLocation';

const PAGE_URL = 'https://taxiserviceksa.com/locations/jubail/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const DMM = 'King Fahd International Airport (DMM)';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need a private car in Jubail. Pickup (or flight number), destination / site name and gate, date and time, passengers and luggage: ')}`;

const TITLE = 'Jubail Taxi Service | Corporate & Private Transfers';
const DESCRIPTION = 'Pre-booked private cars in Jubail for Dammam Airport pickups, Industrial City and Royal Commission visits, trips to Dammam and Al Khobar, and monthly company drivers.';

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car and corporate transfers in Jubail' }],
    },
};

const faqs = [
    { q: 'How do I book a car in Jubail?', a: 'Send your pickup, destination (with the site name and gate if it is industrial), date, time, passengers and luggage on WhatsApp (+966 57 580 6733). We confirm the vehicle and price; the booking is final once you accept.' },
    { q: 'How far is Jubail from Dammam Airport?', a: 'About 95 km, usually around an hour, depending on where in Jubail you are going.' },
    { q: 'How much is a transfer from Dammam Airport to Jubail?', a: 'It depends on the vehicle and the exact address in Jubail. Send your flight number and destination and we quote the whole vehicle before you book.' },
    { q: 'Can you take me inside an industrial plant?', a: 'Yes, if your host has given the vehicle and driver permission to enter. Otherwise we drop you, or collect you, at the gate or visitor reception your host tells you to use. Site access is always decided by the facility, not by us.' },
    { q: 'Do you do short rides inside Jubail?', a: 'No. We run pre-booked trips: airport transfers, site visits, intercity journeys and drivers by the hour, day or month. For a quick ride across town, a local taxi or ride-hailing app is better.' },
    { q: 'Do you offer monthly drivers for companies?', a: 'Yes. Weekly and monthly packages keep the same driver throughout, and companies can be invoiced monthly. Send your routes, schedule and number of staff for a quote.' },
    { q: 'Can I book a car for a visiting colleague?', a: 'Yes. Send their flight number, the destination and a phone number that will answer on the day. We send the driver’s details to you and to them.' },
    { q: 'What if the flight is delayed?', a: 'We track the flight number, so the driver times the pickup to the real landing. Delays of up to 3 hours cost nothing extra, and we wait 60 minutes after a domestic landing or 90 minutes after an international one.' },
    { q: 'Do you go to Dammam, Al Khobar and Dhahran?', a: 'Yes. Jubail to Dammam is roughly 95–110 km, about an hour or a little more; Al Khobar and Dhahran are a bit further. Each trip is quoted on the exact address.' },
    { q: 'Are pickups available at night?', a: 'Yes, 24 hours a day. Shift changes and early flights are common; book ahead for very early or late pickups.' },
    { q: 'Do the drivers speak English?', a: 'Yes, our drivers speak English and Arabic.' },
    { q: 'Which vehicles can I book?', a: 'A Toyota Camry, Toyota Veloz, Hyundai Staria or GMC Yukon XL, and a Toyota Hiace or Mercedes Sprinter for groups on request. Premium cars such as a Cadillac Escalade or Mercedes S-Class are also available on request.' },
    { q: 'Is my booking confirmed when I send a message?', a: 'No. It is confirmed once we have agreed the vehicle, fare and pickup with you.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Pre-booked private and corporate transfers in Jubail',
            url: PAGE_URL,
            serviceType: 'Private corporate, airport and intercity transfer',
            description: 'Pre-booked private cars in Jubail for Dammam Airport transfers, industrial site visits, intercity trips and monthly company drivers.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: { '@type': 'City', name: 'Jubail' },
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://taxiserviceksa.com/locations/' },
                { '@type': 'ListItem', position: 3, name: 'Jubail', item: PAGE_URL },
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
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#1f2933]';
const h3 = 'text-xl font-bold text-[#1f2933]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#c2410c] px-6 py-3.5 font-bold text-white hover:bg-[#9a3412] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2410c] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#1f2933]/20 px-6 py-3.5 font-bold text-[#1f2933] hover:border-[#c2410c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2410c]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#c2410c] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function JubailLocationPage() {
    return (
        <div className="jubail bg-[#f5f5f4]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#1f2933]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#5b3a24_0%,_#1f2933_62%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#fdba74] mb-4 flex items-center gap-2`}><Factory className="w-4 h-4" aria-hidden="true" />Jubail · Industrial City & Royal Commission</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Private Taxi, Corporate Transfers and Chauffeur Service in Jubail</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            Pre-booked cars for the way Jubail actually moves: Dammam Airport runs, plant and office visits, trips down to Dammam and Al Khobar, and regular drivers for companies. Booked in advance, priced before you go.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#1f2933] hover:bg-[#f5f5f4]">
                                <a href={QUOTE_HREF}>Get a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {['24/7 pickups', 'Flight tracking', 'English & Arabic drivers', 'Monthly company invoicing'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#fdba74] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Jubail transfer"
                            cta="Send my request"
                            fromPlaceholder="Airport, hotel, site or address"
                            toPlaceholder="Destination (site name and gate, if industrial)"
                            fromChips={[DMM, 'Jubail Industrial City', 'Royal Commission', 'Jubail Balad']}
                            toChips={['Jubail', 'Dammam', 'Al Khobar', 'Dhahran', DMM]}
                            showFlight="auto"
                            extraFields={[{ id: 'site', label: 'Site / company and gate', placeholder: 'e.g. visitor gate, host name' }]}
                            returnNote="Return trip also needed - date and time to confirm."
                            buttonClass="bg-[#c2410c] hover:bg-[#9a3412] focus-visible:ring-[#c2410c]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section aria-labelledby="intro" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    <div className={prose}>
                        <h2 id="intro" className={`${h2} mb-2`}>Transport Built Around Jubail&apos;s Working Day</h2>
                        <p>
                            Jubail is not a typical city to get around. Much of it is the Industrial City run by the Royal Commission, with large plants, contractor camps and offices spread over a wide area and their own gates and security rules. The rest is the older town, Jubail Balad, and the residential districts and beaches along the coast. The nearest major airport is in Dammam, about an hour away.
                        </p>
                        <p>
                            So most of our Jubail bookings are about coordination: an engineer landing at Dammam Airport who needs to reach a site gate before a shift, a consultant visiting three companies in one day, a team of visitors moving between hotel and plant, or a family heading down to Al Khobar for the weekend.
                        </p>
                        <p>
                            We run pre-booked private cars only. You send the details; we confirm a vehicle, a fare and a pickup; the driver comes to you. We do not do shared rides or quick trips across town.
                        </p>
                    </div>
                    <aside className="rounded-3xl bg-[#1f2933] text-white p-7">
                        <h3 className="text-xl font-bold mb-4">Typical trips</h3>
                        <dl className="space-y-3 text-sm">
                            {[
                                ['Dammam Airport ↔ Jubail', 'About 95 km · ~1 hour'],
                                ['Jubail ↔ Dammam', 'About 95–110 km'],
                                ['Jubail ↔ Al Khobar / Dhahran', 'A little further than Dammam'],
                                ['Within Jubail', 'Driver by the hour or day'],
                            ].map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-white/70">{k}</dt>
                                    <dd className="font-semibold text-right">{v}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="text-xs text-white/50 mt-4">Estimates; your exact site, district and the traffic change them.</p>
                    </aside>
                </div>
            </section>

            {/* ================= INDUSTRIAL ================= */}
            <section aria-labelledby="industrial" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div className={prose}>
                        <ShieldCheck className="w-7 h-7 text-[#c2410c]" aria-hidden="true" />
                        <h2 id="industrial" className={`${h2} mb-2`}>Plant and Site Visits</h2>
                        <p>
                            Industrial sites in Jubail control who comes in, and that is decided by the site, not by any taxi company. Here is how it works with us:
                        </p>
                        <ul className="space-y-2">
                            <Tick><strong className="text-[#1f2933]">If your host has cleared the vehicle and driver,</strong> we drive you inside to the building or meeting point you were given.</Tick>
                            <Tick><strong className="text-[#1f2933]">If not,</strong> we drop you, and later collect you, at the gate or visitor reception your host tells you to use.</Tick>
                            <Tick><strong className="text-[#1f2933]">Either way,</strong> send us the company or site name, the gate, the host&apos;s name and any visitor instructions when you book.</Tick>
                        </ul>
                        <p>
                            Allow time for registration and security checks at the gate, especially on a first visit; they are not part of the driving time. If you are going from the airport straight to a site, tell us your reporting time and we plan backwards from it.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#1f2933]/10 p-7">
                        <h3 className={`${h3} mb-4`}>Send with a site booking</h3>
                        <ul className="space-y-2 text-sm text-stone-700">
                            {['Company or site name', 'Gate or visitor entrance', 'Host name and phone', 'Whether the car is cleared to enter', 'Reporting or meeting time', 'Visitor’s name and phone'].map((x) => <Tick key={x}>{x}</Tick>)}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section aria-labelledby="services" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="services" className={`${h2} mb-8`}>What We Arrange in Jubail</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <article className="rounded-3xl bg-[#f5f5f4] p-7">
                            <Plane className="w-6 h-6 text-[#c2410c] mb-2" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>Dammam Airport ↔ Jubail</h3>
                            <p className="text-sm text-stone-700 leading-relaxed mb-3">About 95 km, usually around an hour. We track your flight, wait 60 minutes after a domestic landing or 90 after an international one, and delays of up to 3 hours cost nothing extra. For departures, send your flight time and we set the pickup with room for check-in.</p>
                            <p className="text-sm text-stone-600 mb-3">Fare quoted on your Jubail address and vehicle.</p>
                            <Link href="/dammam-airport-taxi/" className={link}>Dammam Airport transfers</Link>
                        </article>
                        <article className="rounded-3xl bg-[#f5f5f4] p-7">
                            <Briefcase className="w-6 h-6 text-[#c2410c] mb-2" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>Business days and visiting staff</h3>
                            <p className="text-sm text-stone-700 leading-relaxed mb-3">Several meetings across the Industrial City, a visitor collected from the airport, or a team moving between hotel and site. For a day of appointments, book a driver by the hour or day; the car waits between stops.</p>
                            <Link href="/services/private-driver/" className={link}>Private driver and chauffeur service</Link>
                        </article>
                        <article className="rounded-3xl bg-[#1f2933] text-white p-7">
                            <CalendarRange className="w-6 h-6 text-[#fdba74] mb-2" aria-hidden="true" />
                            <h3 className="text-xl font-bold mb-2">Weekly and monthly company drivers</h3>
                            <p className="text-sm text-white/85 leading-relaxed mb-3">For daily commuting, executive transport or a project that runs for weeks. The same driver stays with you throughout, and companies are invoiced monthly. Send your routes, daily schedule, number of staff and the period you need.</p>
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className="font-semibold text-[#fdba74] hover:underline">Ask about a monthly contract</a>
                        </article>
                        <article className="rounded-3xl bg-[#f5f5f4] p-7">
                            <MapPin className="w-6 h-6 text-[#c2410c] mb-2" aria-hidden="true" />
                            <h3 className={`${h3} mb-2`}>Down the coast and further</h3>
                            <p className="text-sm text-stone-700 leading-relaxed mb-3">Jubail to Dammam, Al Khobar or Dhahran for meetings, family or the weekend, about an hour or a little more. Hofuf, Riyadh and other cities on request.</p>
                            <div className="flex flex-wrap gap-2 text-sm">
                                <Link href="/locations/dammam/" className={link}>Dammam</Link><span className="text-stone-300">·</span>
                                <Link href="/locations/al-khobar/" className={link}>Al Khobar</Link><span className="text-stone-300">·</span>
                                <Link href="/locations/dhahran/" className={link}>Dhahran</Link><span className="text-stone-300">·</span>
                                <Link href="/services/intercity/" className={link}>Intercity</Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* ================= AREAS ================= */}
            <section aria-labelledby="areas" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="areas" className={`${h2} mb-3`}>Pickup and Drop-off Areas</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">Always send the exact place, not just the area; Jubail is spread out and several places share similar names.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { t: 'Royal Commission & Industrial City', d: 'Plants, offices, camps and housing. Send the site name and gate.' },
                            { t: 'Jubail Balad', d: 'The older town: hotels, shops, homes and offices.' },
                            { t: 'Hotels and residences', d: 'Send the hotel name or a location pin and the entrance.' },
                            { t: 'Beaches and Dareen area', d: 'For leisure trips, say if you want a return pickup or a driver who waits.' },
                        ].map((a) => (
                            <div key={a.t} className="rounded-2xl bg-white border border-[#1f2933]/10 p-6">
                                <h3 className="text-lg font-bold text-[#1f2933] mb-2">{a.t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{a.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES + FARE ================= */}
            <section aria-labelledby="vehicles" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="rounded-3xl bg-[#f5f5f4] p-7">
                        <h2 id="vehicles" className="text-2xl md:text-3xl font-extrabold text-[#1f2933] mb-5">Vehicles</h2>
                        <ul className="space-y-3 text-sm text-stone-700">
                            {[
                                ['Toyota Camry', 'Up to 3 people, about 2 large suitcases'],
                                ['Toyota Veloz 2024', 'Up to 7 people, fewer bags with every seat used'],
                                ['Hyundai Staria VIP', 'Up to 7 people, about 4 large suitcases'],
                                ['GMC Yukon XL', 'Up to 7 people, about 5 large suitcases'],
                                ['Toyota Hiace / Mercedes Sprinter', 'Groups, on request'],
                            ].map(([k, v]) => (
                                <li key={k} className="flex justify-between gap-4 border-b border-[#1f2933]/10 pb-3 last:border-0"><span className="font-semibold text-[#1f2933]">{k}</span><span className="text-right">{v}</span></li>
                            ))}
                        </ul>
                        <p className="text-sm text-stone-600 mt-5">Executive guests: a Cadillac Escalade or Mercedes S-Class on request. Tool cases or equipment? Tell us so the car fits. <Link href="/fleet/" className={link}>See the fleet</Link>.</p>
                    </div>
                    <div className="rounded-3xl bg-[#f5f5f4] p-7">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1f2933] mb-5">How the Fare Works</h2>
                        <p className="text-sm text-stone-700 leading-relaxed mb-4">Every trip is quoted for the whole vehicle before you book, based on the exact pickup, destination and vehicle. Once you accept, the price stays the same unless the trip changes.</p>
                        <ul className="space-y-2 text-sm text-stone-700 mb-4">
                            <Tick>Included: vehicle and driver, fuel, the drive to the address in your quote</Tick>
                            <Tick>Airport pickups: flight tracking, free waiting and delays up to 3 hours</Tick>
                        </ul>
                        <ul className="space-y-2 text-sm text-stone-700">
                            {['Waiting during a long meeting (book hourly instead)', 'Extra stops or a changed destination', 'Return legs, quoted on their own'].map((x) => (
                                <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= BOOKING ================= */}
            <section aria-labelledby="book" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-6`}>How to Book</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            ['Send the trip', 'Pickup, destination, date and time. For airports, the flight number.'],
                            ['Add site details', 'For industrial visits, the site, gate, host and whether the car is cleared to enter.'],
                            ['Get the fare', 'We confirm the vehicle and price for the whole trip.'],
                            ['Confirm', 'Once you accept, the booking is final; driver details follow before the trip.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-white border border-[#1f2933]/10 p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#c2410c] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#1f2933] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={QUOTE_HREF} className={primary}>Get a quote <Arrow /></a>
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                        <a href="mailto:info@taxiserviceksa.com?subject=Jubail%20corporate%20transport" className={ghost}>Email for a company contract</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5 flex gap-2"><Clock className="w-4 h-4 mt-0.5 text-[#c2410c] shrink-0" aria-hidden="true" />Pickups run 24 hours a day; for shift changes and early flights, book ahead.</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#1f2933]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#1f2933] hover:no-underline">{f.q}</AccordionTrigger>
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
                        ['Pre-booked airport transfer service', '/services/airport-transfers/'],
                        ['Private intercity transfers in Saudi Arabia', '/services/intercity/'],
                        ['Private driver and chauffeur service', '/services/private-driver/'],
                        ['Dammam taxi transfer', '/locations/dammam/'],
                        ['Al Khobar private transfer', '/locations/al-khobar/'],
                        ['Private transfers in Khafji', '/locations/khafji/'],
                    ].map(([l, h]) => (
                        <Link key={h} href={h} className="rounded-full border border-[#1f2933]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#1f2933] hover:border-[#c2410c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2410c]">{l}</Link>
                    ))}
                </div>
                <p className="text-xs text-stone-500 mb-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Site access rules are set by each facility and can change. Follow your host&apos;s instructions.</p>
                <ApprovedDriversForLocation location="jubail" />
                <RelatedLocations currentCity="Jubail" />
            </div>
        </div>
    );
}
