import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, X, Clock, Sun, CalendarDays, CalendarRange, ShoppingBag, Briefcase, Users, Stethoscope, Camera, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/WhatsAppIcon';

const PAGE_URL = 'https://taxiserviceksa.com/services/private-driver/';
const PHONE = '+966575806733';
const WHATSAPP_HREF = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I want to hire a private driver. City, dates, start time, hours per day, passengers and preferred vehicle: ')}`;

// Package rules confirmed by the owner (2026-10-22).
const MIN_HOURS = 3;
const FULL_DAY_HOURS = 10;
const CITIES = ['Riyadh', 'Jeddah', 'Makkah', 'Madinah', 'Dammam', 'Al Khobar'];

const PACKAGES = [
    { icon: Clock, name: 'By the hour', length: `From ${MIN_HOURS} hours`, text: 'For a block of errands, an appointment with waiting, or an evening out. You book the hours you need, from a minimum of three.' },
    { icon: Sun, name: 'Full day', length: `${FULL_DAY_HOURS} hours`, text: 'One car and driver for the whole day: meetings across the city, a shopping trip, a family day out. You agree the start time; the day runs ten hours from it.' },
    { icon: CalendarDays, name: 'Weekly', length: 'Several days in a row', text: 'For business trips, conferences, medical treatment or a busy holiday. The same driver stays with you for the whole booking.' },
    { icon: CalendarRange, name: 'Monthly', length: 'A month at a time', text: 'For residents, long stays and companies that need a regular driver. The same driver throughout, and monthly invoicing for companies.' },
];

const VEHICLES = [
    { name: 'Toyota Camry', seats: 'Up to 3 passengers', fit: 'Individuals, couples and business days', img: '/toyota-camry.webp', href: '/fleet/toyota-camry/' },
    { name: 'Hyundai Staria VIP', seats: 'Up to 7 passengers', fit: 'Families and shopping days', img: '/hyundai-staria.webp', href: '/fleet/hyundai-staria-vip/' },
    { name: 'GMC Yukon XL', seats: 'Up to 7 passengers', fit: 'Executives, families, extra space', img: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', href: '/fleet/gmc-yukon-xl/' },
    { name: 'Toyota Hiace', seats: 'Up to 11 passengers', fit: 'Groups and delegations', img: '/toyota-hiace.webp', href: '/fleet/toyota-hiace/' },
];

const TITLE = 'Private Driver Hire Saudi Arabia | Riyadh & Jeddah';
const DESCRIPTION = `Hire a private driver by the hour (from ${MIN_HOURS} hours), full day (${FULL_DAY_HOURS} hours), week or month in Riyadh, Jeddah, Makkah, Madinah and Dammam. Sedan, SUV or van, price agreed before you book.`;

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: PAGE_URL,
        languages: {
            'en': PAGE_URL,
            'ar': 'https://taxiserviceksa.com/ar/services/private-driver/',
            'ur': 'https://taxiserviceksa.com/ur/services/private-driver/',
            'x-default': PAGE_URL,
        },
    },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private driver hire in Saudi Arabia' }],
    },
};

const faqs = [
    { q: 'How does hiring a private driver work?', a: `You book a car and driver for a length of time rather than a single trip: by the hour (minimum ${MIN_HOURS} hours), a full day (${FULL_DAY_HOURS} hours), a week or a month. During that time the driver takes you wherever you need to go in the city, as many stops as you like, and waits for you between them.` },
    { q: 'How much does a private driver cost?', a: 'It depends on the city, the vehicle and how long you need the driver. Send your dates, hours and vehicle on WhatsApp and we send the price before you book.' },
    { q: 'What is included?', a: 'The vehicle, the driver, fuel for driving within the city, and unlimited stops during the booked hours. Trips outside the city, extra hours and paid parking are agreed with you in advance.' },
    { q: 'What happens if my day runs longer?', a: 'Tell the driver as early as you can. If the driver is free to stay, the extra time is charged at the hourly rate agreed in your booking.' },
    { q: 'Which cities do you cover?', a: 'Riyadh, Jeddah, Makkah, Madinah, Dammam and Al Khobar. Day trips from these cities, such as Jeddah to Taif, are quoted with the booking.' },
    { q: 'Will I have the same driver for a weekly or monthly booking?', a: 'Yes. Weekly and monthly bookings keep the same driver for the whole period.' },
    { q: 'Can companies be invoiced monthly?', a: 'Yes. Company bookings for regular or monthly drivers can be invoiced monthly. Ask when you request the quote.' },
    { q: 'Can I hire a driver for shopping?', a: 'Yes. Tell us which malls or markets you plan to visit and roughly how long you will be. If you expect bulky purchases, choose an SUV or van rather than a sedan.' },
    { q: 'Can I book a driver for medical appointments?', a: 'Yes, for a single appointment or a course of treatment over several days. The driver provides transport only, not medical help; if the patient needs mobility support, tell us so we can say what is possible.' },
    { q: 'Do the drivers speak English?', a: 'Yes, our drivers speak English and Arabic.' },
    { q: 'Can I change the plan during the day?', a: 'Yes. Within the city and within your booked hours, add or change stops as you go. A trip out of the city or extra hours are agreed before they happen.' },
    { q: 'Can I book a GMC or a van with a driver?', a: 'Yes. A GMC Yukon XL, Hyundai Staria or Toyota Hiace can be booked with a driver, and a Cadillac Escalade on request, subject to availability for your dates.' },
    { q: 'How do I book?', a: 'Send your city, dates, start time, hours per day, passengers and preferred vehicle on WhatsApp (+966 57 580 6733) or email info@taxiserviceksa.com. We confirm the vehicle and price; the booking is final once you accept.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Service',
            '@id': `${PAGE_URL}#service`,
            name: 'Private driver hire in Saudi Arabia',
            serviceType: 'Private driver hire by the hour, day, week or month',
            url: PAGE_URL,
            provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com', telephone: PHONE },
            areaServed: CITIES.map((c) => ({ '@type': 'City', name: c })),
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxiserviceksa.com/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://taxiserviceksa.com/services/' },
                { '@type': 'ListItem', position: 3, name: 'Private Driver Hire', item: PAGE_URL },
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
const link = 'font-semibold text-[#b45309] underline-offset-2 hover:underline';
const h2 = 'text-3xl md:text-4xl font-extrabold text-[#1c1917]';
const h3 = 'text-xl font-bold text-[#1c1917]';
const prose = 'space-y-4 text-stone-700 leading-relaxed text-[1.05rem]';
const primary = 'group inline-flex items-center justify-center gap-2 rounded-xl bg-[#b45309] px-6 py-3.5 font-bold text-white hover:bg-[#92400e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b45309] focus-visible:ring-offset-2';
const ghost = 'inline-flex items-center justify-center gap-2 rounded-xl border border-[#1c1917]/20 px-6 py-3.5 font-bold text-[#1c1917] hover:border-[#b45309] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b45309]';

function Arrow() {
    return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />;
}

function Tick({ children }: { children: React.ReactNode }) {
    return <li className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-[#b45309] shrink-0" aria-hidden="true" /><span>{children}</span></li>;
}

export default function PrivateDriverPage() {
    return (
        <div className="private-driver bg-[#f7f5f2]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ================= HERO ================= */}
            <section className="relative isolate overflow-hidden bg-[#1c1917]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#57351a_0%,_#1c1917_60%)]" aria-hidden="true" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                    <div className="text-white min-w-0">
                        <p className={`${eyebrow} text-[#fbbf24] mb-4`}>By the hour · day · week · month</p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">Private Driver Hire in Saudi Arabia</h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-7 max-w-xl">
                            A car and driver that stay with you for as long as you need them, instead of a new taxi for every trip. Meetings, shopping, appointments, family days. Book from {MIN_HOURS} hours to a full month, with the price agreed first.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                            <Button asChild size="lg" className="group h-auto py-4 px-7 rounded-xl font-bold text-base bg-[#fbbf24] text-[#1c1917] hover:bg-[#fcd34d]">
                                <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer"><WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Hire a driver on WhatsApp</a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-7 rounded-xl font-bold text-base bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white">
                                <a href="mailto:info@taxiserviceksa.com?subject=Private%20driver%20hire%20quote">Email for a custom quote</a>
                            </Button>
                        </div>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
                            {['Unlimited stops in the city', 'Fuel included in the city', 'English & Arabic drivers', 'Same driver for weekly/monthly'].map((x) => (
                                <li key={x} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#fbbf24] shrink-0" aria-hidden="true" />{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-3xl bg-white/[0.06] border border-white/10 p-7 text-white">
                        <h2 className="text-xl font-bold mb-4">Available in</h2>
                        <ul className="grid grid-cols-2 gap-2 mb-5">
                            {CITIES.map((c) => (
                                <li key={c} className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5 text-sm font-semibold"><MapPin className="w-4 h-4 text-[#fbbf24]" aria-hidden="true" />{c}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-white/70">Day trips out of these cities, for example Jeddah to Taif, are quoted with your booking.</p>
                    </div>
                </div>
            </section>

            {/* ================= PACKAGES ================= */}
            <section aria-labelledby="packages" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="packages" className={`${h2} mb-3`}>Driver Hire Packages</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">
                        Every package works the same way: a car and driver are yours for the booked time, inside the city, with as many stops as you like. The price depends on the city, the vehicle and the length of the booking, and is agreed before you confirm.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {PACKAGES.map(({ icon: Icon, name, length, text }) => (
                            <article key={name} className="rounded-3xl bg-[#f7f5f2] p-7">
                                <Icon className="w-7 h-7 text-[#b45309] mb-3" aria-hidden="true" />
                                <h3 className={h3}>{name}</h3>
                                <p className="text-sm font-bold text-[#b45309] mb-3">{length}</p>
                                <p className="text-sm text-stone-600 leading-relaxed">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= INCLUDED ================= */}
            <section aria-labelledby="included" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="included" className={`${h2} mb-8`}>What Your Booking Includes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-3xl bg-white border border-[#1c1917]/10 p-7">
                            <h3 className={`${h3} mb-4`}>Included</h3>
                            <ul className="space-y-2 text-stone-700">
                                <Tick>A private vehicle and driver for the booked hours</Tick>
                                <Tick>Unlimited stops within the city</Tick>
                                <Tick>Fuel for driving within the city</Tick>
                                <Tick>The driver waiting for you between stops</Tick>
                                <Tick>The same driver for weekly and monthly bookings</Tick>
                                <Tick>Monthly invoicing for company accounts</Tick>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-white border border-[#1c1917]/10 p-7">
                            <h3 className={`${h3} mb-4`}>Agreed with you in advance</h3>
                            <ul className="space-y-2 text-stone-700">
                                {['Hours beyond the booking, at the agreed hourly rate', 'Trips outside the city, such as a day in Taif', 'Paid parking, if any', 'Overnight trips and the driver’s accommodation'].map((x) => (
                                    <li key={x} className="flex gap-2.5"><X className="w-4 h-4 mt-1 text-stone-400 shrink-0" aria-hidden="true" /><span>{x}</span></li>
                                ))}
                            </ul>
                            <p className="text-sm text-stone-600 mt-4">If the day runs long, tell the driver early; extra time depends on the driver being free.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= USES ================= */}
            <section aria-labelledby="uses" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="uses" className={`${h2} mb-8`}>What People Hire a Driver For</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { icon: ShoppingBag, t: 'Shopping days', d: 'Riyadh Park, Al Nakheel Mall and the Olaya shops in Riyadh; Mall of Arabia and the Al Balad souks in Jeddah. Your bags stay in the car between stops. For big purchases, take an SUV or van.' },
                            { icon: Briefcase, t: 'Business days', d: <>Meetings in KAFD, along King Fahd Road and in Olaya, or across Jeddah&apos;s business districts. The driver waits while you are inside. For executive travel, see the <Link href="/services/vip-chauffeur/" className={link}>VIP chauffeur</Link> service.</> },
                            { icon: Users, t: 'Family days', d: 'School runs, visiting relatives, a hospital visit and dinner, all in one booking. Tell us the number of adults and children, and ask about child seats when booking.' },
                            { icon: Stethoscope, t: 'Medical appointments', d: 'One appointment, or a course of treatment over days or weeks with the same driver. The driver provides transport only; tell us about any mobility needs so we can say what is possible.' },
                            { icon: Camera, t: 'Sightseeing', d: <>See the city at your own pace. Send the places you want to visit and we suggest hourly or full-day hire. <Link href="/services/tourism-transport/" className={link}>Tourism transport</Link>.</> },
                            { icon: CalendarRange, t: 'Long stays and companies', d: <>Residents, long-stay visitors and companies that need a regular driver. Weekly and monthly packages, same driver, monthly invoice. <Link href="/services/corporate-travel/" className={link}>Corporate travel</Link>.</> },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className="rounded-2xl bg-[#f7f5f2] p-6">
                                <Icon className="w-6 h-6 text-[#b45309] mb-3" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-[#1c1917] mb-2">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= VEHICLES ================= */}
            <section aria-labelledby="vehicles" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="vehicles" className={`${h2} mb-3`}>Choose the Vehicle</h2>
                    <p className="text-stone-700 leading-relaxed max-w-3xl mb-8">Pick by the number of people and how much you will carry during the day. Seating figures are for passengers; luggage and shopping space shrink as seats fill.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {VEHICLES.map((v) => (
                            <Link key={v.name} href={v.href} className="rounded-3xl border border-[#1c1917]/10 bg-white overflow-hidden hover:border-[#b45309] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b45309]">
                                <div className="relative aspect-[16/10] bg-stone-100">
                                    <Image src={v.img} alt={`${v.name} with driver for hire`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-[#1c1917]">{v.name}</h3>
                                    <p className="text-sm text-stone-600">{v.seats}</p>
                                    <p className="text-sm text-stone-500">{v.fit}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <p className="text-sm text-stone-600 mt-6">Prefer a luxury SUV? A <Link href="/fleet/cadillac-escalade/" className={link}>Cadillac Escalade</Link> with driver is available on request. <Link href="/fleet/" className={link}>Compare all vehicles</Link>.</p>
                </div>
            </section>

            {/* ================= HOW TO BOOK ================= */}
            <section aria-labelledby="book" className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="book" className={`${h2} mb-6`}>How to Book</h2>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            ['Tell us when', 'City, dates, start time and roughly how many hours a day.'],
                            ['Share the plan', 'Pickup point and the main places you will go; say which parts may change.'],
                            ['Choose the vehicle', 'Passengers and what you will carry. We suggest alternatives if your first choice is not free.'],
                            ['Confirm the quote', 'Check the price, hours and what is included. The booking is final once you accept.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="rounded-2xl bg-[#f7f5f2] p-6">
                                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[#b45309] text-white font-black text-sm mb-4" aria-hidden="true">{i + 1}</span>
                                <h3 className="text-lg font-bold text-[#1c1917] mb-1">{t}</h3>
                                <p className="text-sm text-stone-600 leading-relaxed">{d}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={WHATSAPP_HREF} target="_blank" rel="nofollow noopener noreferrer" className={primary}><WhatsAppIcon className="w-4 h-4 fill-current" /> Hire a driver on WhatsApp <Arrow /></a>
                        <a href="mailto:info@taxiserviceksa.com?subject=Private%20driver%20hire%20quote" className={ghost}>Email info@taxiserviceksa.com</a>
                    </div>
                    <p className="text-sm text-stone-600 mt-5">Taxi Service KSA · <a href={`tel:${PHONE}`} className={link}>+966 57 580 6733</a> (call or WhatsApp). Book full days and weekly or monthly drivers as early as you can.</p>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section aria-labelledby="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 id="faq" className={`${h2} mb-8`}>Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#1c1917]/10 bg-white px-5">
                        {faqs.map((f, i) => (
                            <AccordionItem key={f.q} value={`faq-${i}`} className="last:border-0">
                                <AccordionTrigger className="text-left text-base font-semibold text-[#1c1917] hover:no-underline">{f.q}</AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section aria-labelledby="related" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 id="related" className="text-2xl md:text-3xl font-extrabold text-[#1c1917] mb-5">Related Services</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            ['Private driver hire in Riyadh', '/locations/riyadh/'],
                            ['Private driver hire in Jeddah', '/locations/jeddah/'],
                            ['Drivers in Makkah', '/locations/makkah/'],
                            ['Drivers in Madinah', '/locations/madinah/'],
                            ['Drivers in Dammam', '/locations/dammam/'],
                            ['VIP chauffeur service', '/services/vip-chauffeur/'],
                            ['Private driver for sightseeing', '/services/tourism-transport/'],
                            ['Corporate transportation', '/services/corporate-travel/'],
                            ['Private airport pickup', '/services/airport-transfers/'],
                            ['Intercity transfers', '/services/intercity/'],
                            ['Women’s private transport', '/services/women-transport/'],
                            ['Compare vehicles', '/fleet/'],
                        ].map(([l, h]) => (
                            <Link key={h} href={h} className="rounded-full border border-[#1c1917]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#1c1917] hover:border-[#b45309] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b45309]">{l}</Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
