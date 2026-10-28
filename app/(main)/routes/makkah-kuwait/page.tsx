import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, X, Info, Users, Luggage, FileText, Clock, Moon, MapPin, ShieldCheck, Route, Coffee } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteQuoteCard from '@/components/routes/RouteQuoteCard';
import RouteJourney from '@/components/routes/RouteJourney';

const PAGE_URL = 'https://taxiserviceksa.com/routes/makkah-kuwait/';
const QUOTE_HREF = '#quote';
const PHONE = '+966575806733';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need a private GMC from Makkah to Kuwait. Makkah hotel, Kuwait destination (area or address), date and start time, passengers, suitcases, nationalities/residency of the passengers: ')}`;

// Route calculators differ (about 1,400 km on the shortest inland roads, more via other routes).
const KM = 'Roughly 1,400–1,600 km';
const DRIVE = 'Around 15–18 hours of driving';

const TITLE = 'Makkah to Kuwait Taxi | Private Cross-Border Transfer';
const DESCRIPTION = 'Private GMC Yukon XL from your Makkah hotel to your address in Kuwait, fuel, border vehicle insurance and border fees included. Request a personalised quote for your date and group.';

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
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private car from Makkah to Kuwait' }],
    },
};

const faqs = [
    { q: 'How long does a Makkah to Kuwait taxi take?', a: `${DRIVE}, done as one long day with regular breaks. Add time for prayer and meal stops and for the border, where waits vary. Treat any arrival time as an estimate.` },
    { q: 'How far is Makkah from Kuwait by road?', a: `${KM}, depending on the route, your Makkah hotel and where you are going in Kuwait.` },
    { q: 'Which vehicle goes on this route?', a: 'A GMC Yukon XL, for up to 7 passengers and about 5 large suitcases. We run this cross-border route with SUVs only.' },
    { q: 'How do I get a price?', a: 'Send your Makkah hotel, your destination in Kuwait, the date, the number of passengers and bags, and the nationality or residency of each traveller. We reply with the fare for the whole vehicle before you book.' },
    { q: 'What does the fare include?', a: 'The GMC and driver, fuel, the vehicle’s insurance for Kuwait, the border fees for the vehicle, and rest stops on the way. Your own visas or entry fees are not included.' },
    { q: 'What documents do I need?', a: 'A valid passport, and the permission to enter Kuwait that applies to your nationality or residency, such as a GCC ID or a visa. Saudi residents also need a valid exit and re-entry visa. Check the official sources before you travel; the driver cannot issue or guarantee any of these.' },
    { q: 'Will the driver handle the border for me?', a: 'The driver knows the crossing and deals with the vehicle’s papers and insurance. Each passenger goes through passport control in person, and the decision to let you in belongs to the border authorities.' },
    { q: 'Which border crossing do you use?', a: 'Saudi Arabia and Kuwait have more than one road crossing, including Al-Khafji/Nuwaiseeb on the coast and Al-Ruqi near Hafar Al-Batin. The driver chooses based on your destination in Kuwait and conditions on the day.' },
    { q: 'Can you drop me at my home or hotel in Kuwait?', a: 'Yes. Kuwait City, Salmiya, Hawalli, Jahra, Ahmadi or anywhere else; send the area and the block or a pin. Kuwait International Airport can also be the drop-off.' },
    { q: 'Can I book the return?', a: 'Yes. Kuwait to Makkah is a separate one-way trip. Send both dates and we quote both; if you plan Umrah on the way back, remember Ihram at the Miqat before Makkah.' },
    { q: 'Does a WhatsApp message confirm the booking?', a: 'No. It starts the enquiry. The booking is confirmed once we have agreed the fare, the date and the start time with you.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'TaxiService',
            '@id': `${PAGE_URL}#service`,
            name: 'Makkah to Kuwait private SUV with driver',
            url: PAGE_URL,
            serviceType: 'Private cross-border road transfer',
            description: 'Pre-booked private GMC Yukon XL with driver from a Makkah hotel to an address in Kuwait, including fuel, vehicle insurance for Kuwait and border vehicle fees.',
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: [{ '@type': 'City', name: 'Makkah' }, { '@type': 'Country', name: 'Kuwait' }],
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Routes', item: 'https://taxiserviceksa.com/routes/' },
                { '@type': 'ListItem', position: 3, name: 'Makkah to Kuwait', item: PAGE_URL },
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
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#1e1b4b]';
const h3 = 'text-xl font-bold text-[#1e1b4b]';
const prose = 'space-y-4 text-slate-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f766e] px-6 py-3.5 font-bold text-white hover:bg-[#115e59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#1e1b4b]/20 px-6 py-3.5 font-bold text-[#1e1b4b] hover:border-[#0f766e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#0f766e] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function MakkahKuwaitRoutePage() {
    return (
        <div className="makkah-kuwait bg-[#f7f7fb]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#1e1b4b]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_#134e4a_0%,_#1e1b4b_62%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="text-white lg:pt-6 min-w-0">
                        <p className={`${eyebrow} text-[#99f6e4] mb-4`}>Makkah → Kuwait · across the Kingdom</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Makkah to Kuwait Taxi – Private Door-to-Door Transfer</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            From the Red Sea side of Saudi Arabia to the Gulf: one private GMC from your Makkah hotel to your home or hotel in Kuwait, with the vehicle&apos;s border insurance and fees already in the fare.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-white text-[#1e1b4b] hover:bg-[#f7f7fb]">
                                <a href={QUOTE_HREF}>Get a Quote <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" /></a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {['GMC Yukon XL, up to 7', 'Fuel included', 'Border insurance & fees included', 'Hotel to door'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#99f6e4] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div id="quote" className="scroll-mt-32 min-w-0">
                        <RouteQuoteCard
                            title="Request your Makkah to Kuwait quote"
                            cta="Send my request"
                            fromPlaceholder="Your hotel or address in Makkah"
                            toPlaceholder="Area and address in Kuwait"
                            fromChips={['Makkah hotel', 'Aziziyah', 'Haram area']}
                            toChips={['Kuwait City', 'Salmiya', 'Hawalli', 'Jahra', 'Kuwait International Airport (KWI)']}
                            returnNote="Return Kuwait to Makkah also needed - date to confirm."
                            vehicleOptions={[{ value: 'GMC Yukon XL / Denali', label: 'GMC Yukon XL (up to 7) - this route' }]}
                            buttonClass="bg-[#0f766e] hover:bg-[#115e59] focus-visible:ring-[#0f766e]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= QUICK ANSWER + FACTS ================= */}
            <section aria-labelledby="facts" className="bg-white py-14 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div className={prose}>
                        <h2 id="facts" className={`${h2} mb-2`}>The Trip in Brief</h2>
                        <p>
                            Taxi Service KSA runs pre-booked private transfers from Makkah to Kuwait in a GMC Yukon XL with a driver. You are picked up at your Makkah hotel and dropped at the address you give in Kuwait. You send the details on WhatsApp or the form, we quote one fare for the whole vehicle, and the booking is confirmed once you accept.
                        </p>
                        <p>
                            It is one of the longest road transfers we run: the full width of the Kingdom, from the Hijaz across Najd to the Gulf, then an international border. It suits families and groups who want to travel together with their luggage, or who would rather not fly.
                        </p>
                    </div>
                    <dl className="rounded-3xl bg-[#1e1b4b] text-white p-7 space-y-3 text-sm">
                        {[
                            ['From', 'Your hotel or address in Makkah'],
                            ['To', 'Your address in Kuwait, or KWI airport'],
                            ['Road distance', `${KM} (estimate)`],
                            ['Driving time', `${DRIVE.replace('Around ', '')} (estimate), plus stops and the border`],
                            ['Vehicle', 'GMC Yukon XL, up to 7 passengers'],
                            ['Fare', 'Per vehicle, quoted for your date'],
                            ['Booking', 'WhatsApp +966 57 580 6733 or the form'],
                        ].map(([k, v]) => (
                            <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                <dt className="text-white/70">{k}</dt>
                                <dd className="font-semibold text-right">{v}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* ================= PLANNING THE LONG DAY ================= */}
            <section aria-labelledby="day" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className={prose}>
                        <h2 id="day" className={`${h2} mb-2`}>Planning One Very Long Day</h2>
                        <p>
                            Route calculators put the road distance at {KM.toLowerCase()} and the driving time at {DRIVE.toLowerCase()}. That is time behind the wheel. The full door-to-door day is longer: add prayer and meal breaks, traffic leaving Makkah, and the border, where the wait depends on the day, the hour and the season.
                        </p>
                        <p>
                            We drive it as one long day with regular breaks, not as a two-day trip. Two patterns work well. An <strong>early-morning start</strong> after Fajr gets the desert stretches done in daylight and reaches Kuwait late at night. An <strong>evening start</strong> after Isha uses the cooler, quieter roads and arrives the next day. Tell us which suits your group, especially with children or older relatives.
                        </p>
                        <p>
                            Do not book anything in Kuwait on arrival day that you cannot move. Weekends and holidays, especially around Eid, can mean longer queues at the crossing.
                        </p>
                    </div>
                    <RouteJourney
                        vehicle
                        palette="platinum"
                        stops={[
                            { title: 'Makkah hotel', text: 'Pickup at your hotel or the agreed meeting point.' },
                            { title: 'Across central Saudi Arabia', text: 'The longest part: open highway through Najd, with breaks every few hours.', accent: true },
                            { title: 'North-east towards the border', text: 'The driver picks the crossing for your destination and the conditions.' },
                            { title: 'Saudi–Kuwait border', text: 'Exit Saudi Arabia, enter Kuwait. Passport control for every passenger.', accent: true },
                            { title: 'Your address in Kuwait', text: 'Home, hotel or Kuwait International Airport.' },
                        ]}
                    />
                </div>
            </section>

            {/* ================= BORDER & DOCUMENTS ================= */}
            <section aria-labelledby="docs" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="docs" className={`${h2} mb-3`}>Documents: Yours, and the Car&apos;s</h2>
                    <p className="text-slate-700 leading-relaxed max-w-3xl mb-8">
                        A cross-border trip has two sets of paperwork. We take care of the vehicle. Each traveller is responsible for their own entry, and rules differ by nationality and residency.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-3xl bg-[#f7f7fb] p-7">
                            <ShieldCheck className="w-7 h-7 text-[#0f766e] mb-3" aria-hidden="true" />
                            <h3 className={`${h3} mb-3`}>What we handle</h3>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <Tick>The vehicle&apos;s papers for crossing</Tick>
                                <Tick>Insurance for the vehicle in Kuwait, included in the fare</Tick>
                                <Tick>The border fees for the vehicle, included in the fare</Tick>
                                <Tick>A driver who knows the crossing and can show you where to go</Tick>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-[#1e1b4b] text-white p-7">
                            <FileText className="w-7 h-7 text-[#99f6e4] mb-3" aria-hidden="true" />
                            <h3 className="text-xl font-bold mb-3">What each passenger needs to check</h3>
                            <ul className="space-y-2 text-sm text-white/85">
                                {[
                                    'A passport valid for the trip (many countries ask for at least six months)',
                                    'Permission to enter Kuwait for your nationality or residency: a GCC ID, a visa or an e-visa',
                                    'Saudi residents (Iqama holders): a valid exit and re-entry visa before you leave',
                                    'Visitors in Saudi Arabia: that your visa allows you to leave by land, and what you need to come back',
                                    'Children: their own passports and any permission letters required',
                                ].map((x) => <li key={x} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-[#99f6e4] shrink-0" aria-hidden="true" />{x}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 rounded-2xl border border-[#1e1b4b]/10 p-5 text-sm text-slate-700 leading-relaxed">
                        <p><strong className="text-[#1e1b4b]">Important:</strong> the driver cannot issue visas, speed up passport control or guarantee that anyone is allowed into Kuwait; that decision belongs to the border authorities. Check the current rules for every traveller with the official sources, Kuwait&apos;s <a href="https://www.moi.gov.kw/" target="_blank" rel="noopener noreferrer" className={link}>Ministry of Interior</a> and Saudi Arabia&apos;s <a href="https://www.absher.sa/" target="_blank" rel="noopener noreferrer" className={link}>Absher</a> for exit and re-entry visas, before you pay. Send us the nationality and residency of each passenger when you ask for a quote, so we can flag anything that looks unclear.</p>
                    </div>
                    <p className="text-sm text-slate-600 mt-5">
                        The two main road crossings are on the coast at <Link href="/border-crossings/taxi-khafji-border-crossing/" className={link}>Al-Khafji / Nuwaiseeb</Link> and inland at Al-Ruqi, near Hafar Al-Batin. Which one we use depends on your destination in Kuwait and conditions on the day.
                    </p>
                </div>
            </section>

            {/* ================= THE VEHICLE ================= */}
            <section aria-labelledby="vehicle" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
                    <div className="relative aspect-[4/3] rounded-3xl bg-white border border-[#1e1b4b]/10 overflow-hidden">
                        <Image src="/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp" alt="GMC Yukon XL used for the Makkah to Kuwait transfer" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-contain p-6" />
                    </div>
                    <div className={prose}>
                        <h2 id="vehicle" className={`${h2} mb-2`}>Why This Route Is SUV Only</h2>
                        <p>
                            We run Makkah to Kuwait with a <strong>GMC Yukon XL</strong> and nothing smaller. Over fifteen hours or more, a full-size SUV gives everyone a proper seat, room to rest and space for the bags, and the vehicle is set up for the crossing.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><Users className="w-4 h-4 mt-0.5 text-[#0f766e] shrink-0" aria-hidden="true" />Up to 7 passengers</li>
                            <li className="flex gap-2"><Luggage className="w-4 h-4 mt-0.5 text-[#0f766e] shrink-0" aria-hidden="true" />About 5 large suitcases with the seats in use; fewer people, more room</li>
                        </ul>
                        <p className="text-sm">
                            Seven seats do not mean seven people and seven big suitcases. If your group has more luggage than that, or more than seven people, tell us; we can quote a second GMC. Child seats are on request and not free. <Link href="/fleet/" className={link}>See the fleet</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= PICKUP + KUWAIT END ================= */}
            <section aria-labelledby="ends" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="ends" className={`${h2} mb-8`}>Both Ends of the Journey</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-3xl bg-[#f7f7fb] p-7">
                            <MapPin className="w-6 h-6 text-[#0f766e] mb-3" aria-hidden="true" />
                            <h3 className={`${h3} mb-3`}>Leaving Makkah</h3>
                            <p className="text-sm text-slate-700 leading-relaxed">Roads near Masjid al-Haram close around prayer times, so the car may wait at the nearest allowed point; we send it with your confirmation. Hotels in Aziziyah and further out are usually easier. Have everyone and every bag ready in the lobby: on a day this long, a late start shows at the other end.</p>
                        </div>
                        <div className="rounded-3xl bg-[#f7f7fb] p-7">
                            <MapPin className="w-6 h-6 text-[#0f766e] mb-3" aria-hidden="true" />
                            <h3 className={`${h3} mb-3`}>Arriving in Kuwait</h3>
                            <p className="text-sm text-slate-700 leading-relaxed">Give the area, block, street and house or building number, or share a location pin; Kuwaiti addresses go by block, so the area name alone is not enough. Keep a Kuwaiti or roaming number on so the driver can reach you or your family at the other end. Kuwait International Airport can also be the drop-off.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= COMFORT ================= */}
            <section aria-labelledby="comfort" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="comfort" className={`${h2} mb-8`}>Staying Comfortable for Fifteen-Plus Hours</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Coffee, t: 'Breaks', d: 'Rest stops for prayer, food and fuel are in the fare. Agree the rhythm with the driver at the start; regular short breaks beat one long one.' },
                            { icon: Luggage, t: 'Pack in two', d: 'One small bag in the cabin with documents, medicine, chargers and a change of clothes; the rest in the back, so nobody digs through suitcases at the border.' },
                            { icon: Moon, t: 'Sleep', d: 'On an evening start, bring a light blanket and neck pillow. Seat the people who want to sleep in the back rows.' },
                            { icon: Clock, t: 'Food and water', d: 'There are long stretches between towns. Carry water and snacks, especially for children.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-white border border-[#1e1b4b]/10 p-6">
                                <Icon className="w-6 h-6 text-[#0f766e] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#1e1b4b] mb-2">{t}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FARE ================= */}
            <section aria-labelledby="fare" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="fare" className={`${h2} mb-3`}>How the Fare Is Quoted</h2>
                    <p className="text-slate-700 leading-relaxed max-w-3xl mb-8">
                        One price for the whole GMC, not per person. We quote it for your date once we know where you start and finish; a central Makkah hotel to Kuwait City is a different job from a pickup outside the city to Ahmadi. Once you accept, the fare stays the same unless the trip changes.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="rounded-3xl bg-[#f7f7fb] p-7">
                            <h3 className={`${h3} mb-4`}>Included</h3>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <Tick>GMC Yukon XL and driver for the whole trip</Tick>
                                <Tick>Fuel</Tick>
                                <Tick>The vehicle&apos;s insurance for Kuwait</Tick>
                                <Tick>Border fees and tolls for the vehicle</Tick>
                                <Tick>Rest stops for prayer and meals</Tick>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-[#f7f7fb] p-7">
                            <h3 className={`${h3} mb-4`}>Not included</h3>
                            <ul className="space-y-2 text-sm text-slate-700">
                                {['Your visas, e-visas or any personal entry fees', 'Meals and hotel stays', 'Extra pickups or drop-offs, or detours', 'The return from Kuwait', 'Child seats (on request, not free)'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-slate-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 mt-5">Ask us to confirm the total, the currency and how to pay before you accept. Change and cancellation terms are explained when you book.</p>
                </div>
            </section>

            {/* ================= WHO + BOOKING ================= */}
            <section aria-labelledby="book" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className={prose}>
                        <h2 id="book" className={`${h2} mb-2`}>How to Book</h2>
                        <ol className="space-y-3">
                            {[
                                ['Pickup and drop-off', 'Your Makkah hotel, and the area and address in Kuwait.'],
                                ['Date and start time', 'Early morning or evening; tell us what suits your group.'],
                                ['Passengers and bags', 'Number of adults and children, large and small suitcases.'],
                                ['Who is travelling', 'Nationality and residency of each passenger, so we can flag document questions.'],
                                ['Quote and confirm', 'We send the fare for the GMC. The booking is final once you accept and we confirm.'],
                            ].map(([t, d], i) => (
                                <li key={t} className="flex gap-4">
                                    <span className="inline-flex w-8 h-8 shrink-0 items-center justify-center rounded-full bg-[#0f766e] text-white font-black text-sm" aria-hidden="true">{i + 1}</span>
                                    <span><strong className="text-[#1e1b4b]">{t}.</strong> {d}</span>
                                </li>
                            ))}
                        </ol>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a href={QUOTE_HREF} className={primary}>Get a quote <Arrow /></a>
                            <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={ghost}><WhatsAppIcon className="w-4 h-4 fill-current" /> WhatsApp +966 57 580 6733</a>
                        </div>
                        <h3 className={`${h3} pt-4`}>Who usually books this</h3>
                        <p className="text-sm">Kuwaiti families and residents driving home after Umrah, GCC residents who want their luggage and Zamzam with them, and groups for whom several air tickets plus airport transfers add up. If you are one or two people with light bags, flying may be quicker and simpler; it is worth comparing.</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-[#1e1b4b]/10 p-7">
                        <h3 className={`${h3} mb-4`}>Message you can copy</h3>
                        <pre className="whitespace-pre-wrap text-sm text-slate-700 font-sans leading-relaxed">{`Hello Taxi Service KSA,
Makkah to Kuwait private GMC, please:
Makkah pickup: [hotel or address]
Kuwait drop-off: [area, block, street, house]
Date: [ ]   Start: [morning / evening / time]
Passengers: [adults / children]
Bags: [large / small, Zamzam]
Nationality / residency: [e.g. Kuwaiti, Saudi Iqama, ...]
Return to Makkah: [date or no]`}</pre>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Makkah to Kuwait: Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#1e1b4b]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#1e1b4b] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-lg font-bold text-[#1e1b4b] mb-4 flex items-center gap-2"><Route className="w-5 h-5 text-[#0f766e]" aria-hidden="true" />Related trips</h2>
                <div className="flex flex-wrap gap-2">
                    {[
                        ['Kuwait to Makkah (return)', '/routes/kuwait-makkah/'],
                        ['Madinah to Kuwait', '/routes/madinah-kuwait/'],
                        ['Jeddah to Kuwait', '/routes/jeddah-kuwait/'],
                        ['Riyadh to Kuwait', '/routes/riyadh-kuwait/'],
                        ['Dammam to Kuwait', '/routes/dammam-kuwait/'],
                        ['Transfers within Makkah', '/locations/makkah/'],
                        ['All routes', '/routes/'],
                    ].map(([l, h]) => (
                        <Link key={h} href={h} className="rounded-full border border-[#1e1b4b]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#1e1b4b] hover:border-[#0f766e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f766e]">{l}</Link>
                    ))}
                </div>
                <p className="text-xs text-slate-500 mt-6 flex gap-2"><Info className="w-4 h-4 shrink-0" aria-hidden="true" />Distances and times are estimates. Entry rules change and depend on nationality and residency; check the official sources before you travel.</p>
            </div>
        </div>
    );
}
