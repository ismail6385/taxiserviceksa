import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, ShieldCheck, ArrowRight, Info, Car, Navigation, Star, User, Users, Plane, Briefcase, Building2, Calendar, FileCheck } from 'lucide-react';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLdBreadcrumb from '@/components/JsonLdBreadcrumb';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'LEAP Riyadh Transportation, Taxi & Chauffeur Service | Taxi Service KSA',
    description: 'Private transportation for LEAP Riyadh — airport transfers, hotel transfers, corporate and VIP chauffeur service for attendees, exhibitors and speakers. Fixed rates, professional drivers.',
    keywords: ['LEAP Riyadh transportation', 'LEAP Riyadh taxi', 'LEAP Riyadh chauffeur', 'LEAP conference transportation', 'LEAP event transfer Riyadh', 'LEAP Riyadh airport transfer', 'corporate transportation LEAP'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/events/leap-riyadh-transportation/',
    },
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'LEAP Riyadh Transportation and Chauffeur Service',
    description: 'Private airport, hotel, corporate, and VIP chauffeur transportation for LEAP Riyadh attendees, exhibitors, speakers, and companies.',
    provider: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        url: 'https://taxiserviceksa.com',
    },
    areaServed: { '@type': 'City', name: 'Riyadh' },
    serviceType: 'Event Transportation / Chauffeur Service',
    url: 'https://taxiserviceksa.com/events/leap-riyadh-transportation/',
};

const routeMatrix = [
    { route: 'King Khalid Airport (RUH) → LEAP Venue', service: 'Airport Transfer', href: '/riyadh-airport-taxi/', label: 'Riyadh Airport Taxi' },
    { route: 'King Khalid Airport (RUH) → Riyadh Hotel', service: 'Private Transfer', href: '/riyadh-airport-taxi/', label: 'Riyadh Airport Taxi' },
    { route: 'Hotel → LEAP Venue', service: 'Event Transfer', href: '/services/vip-chauffeur/', label: 'VIP Chauffeur Service' },
    { route: 'LEAP Venue → Hotel', service: 'Event Transfer', href: '/services/vip-chauffeur/', label: 'VIP Chauffeur Service' },
    { route: 'Hotel → King Khalid Airport (RUH)', service: 'Departure Transfer', href: '/riyadh-airport-taxi/', label: 'Riyadh Airport Taxi' },
    { route: 'Riyadh City → LEAP Venue', service: 'Private Car', href: '/locations/riyadh/', label: 'Riyadh Private Transfer' },
    { route: 'LEAP Venue → Riyadh City', service: 'Chauffeur Service', href: '/locations/riyadh/', label: 'Riyadh Private Transfer' },
];

const fleetCards = [
    { name: 'GMC Yukon', use: 'GMC Yukon for executive event transportation', image: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', href: '/fleet/gmc-yukon/', pax: '6-7 passengers' },
    { name: 'Toyota Camry', use: 'Sedan for individual attendees and speakers', image: '/toyota-camry.webp', href: '/fleet/toyota-camry/', pax: '3 passengers' },
    { name: 'Hyundai Staria', use: 'Staria for small corporate teams', image: '/hyundai-staria.webp', href: '/fleet/hyundai-staria/', pax: '6-7 passengers' },
    { name: 'Toyota HiAce', use: 'Toyota HiAce for small corporate groups', image: '/toyota-hiace.webp', href: '/fleet/toyota-hiace/', pax: '10-12 passengers' },
    { name: 'Mercedes Sprinter', use: 'Mercedes Sprinter for larger LEAP teams', image: '/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp', href: '/fleet/mercedes-sprinter/', pax: '14+ passengers' },
];

const faqs = [
    {
        question: "How can I book transportation for LEAP Riyadh?",
        answer: "Send us your arrival date, passenger count, and hotel via WhatsApp or our quote form below, and we'll confirm a fixed-rate booking with a dedicated driver and vehicle."
    },
    {
        question: "Do you provide airport transfers for LEAP attendees?",
        answer: "Yes. We meet you at King Khalid International Airport (RUH) and transfer you directly to your hotel or the LEAP venue at the Riyadh Exhibition & Convention Centre, Malham — around 28km, roughly 15 minutes by road."
    },
    {
        question: "Can you provide transportation between Riyadh hotels and LEAP?",
        answer: "Yes, we run private hotel-to-venue and venue-to-hotel transfers for the full duration of LEAP, scheduled around your daily agenda."
    },
    {
        question: "Do you provide corporate transportation for LEAP exhibitors?",
        answer: "Yes. We arrange multiple vehicles and dedicated drivers for companies exhibiting at LEAP, with scheduled transfers covering your whole team for the event."
    },
    {
        question: "Can I book a private chauffeur for the entire LEAP event?",
        answer: "Yes, we offer daily or full-event chauffeur hire — one driver and vehicle on call for airport pickup, daily venue transfers, and any other stops you need."
    },
    {
        question: "Do you provide VIP transportation for speakers and executives?",
        answer: "Yes, our VIP chauffeur service is built for speakers, CEOs, and investors attending LEAP — premium vehicles, experienced drivers, and flexible scheduling around your commitments."
    },
    {
        question: "Which vehicles are available for LEAP transportation?",
        answer: "Sedans for individual travel, GMC Yukon and Hyundai Staria for small groups, Toyota HiAce for corporate teams, and Mercedes Sprinter for larger delegations."
    },
    {
        question: "Can you provide transportation for groups?",
        answer: "Yes, from a 4-person exhibitor team to a 15+ delegation, we assign the right vehicle mix and can run multiple vehicles on a coordinated schedule."
    },
    {
        question: "Can I arrange multiple vehicles for my company?",
        answer: "Yes, this is a common request for LEAP — tell us your total headcount and arrival pattern, and we'll propose a vehicle and driver plan for your whole company."
    },
    {
        question: "How do I get a custom LEAP transportation quote?",
        answer: "Use the quote form below or WhatsApp us your dates, passenger count, and vehicle preference — we typically respond with a fixed-rate quote within minutes."
    }
];

export default function LeapRiyadhTransportationPage() {
    const images = ['/hero-slide-1.webp', '/hero-slide-2.webp', '/hero-slide-3.webp'];

    const quoteMessage = encodeURIComponent(
        "Hello, I need LEAP Riyadh transportation. Company: ___ | Passengers: ___ | Vehicles needed: ___ | Arrival date: ___ | Departure date: ___ | Hotel: ___ | Vehicle preference: ___"
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdBreadcrumb />
            <script
                id="leap-riyadh-transportation-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <Hero
                images={images}
                h1Text="LEAP Riyadh Transportation, Taxi & Chauffeur Service"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        LEAP Riyadh 2026
                    </span>
                }
                subtitle="Airport, Hotel, Corporate & VIP Transfers for LEAP Attendees"
                location="Riyadh Exhibition & Convention Centre, Malham"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href={`https://wa.me/966569487569?text=${quoteMessage}`}>
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Get My LEAP Transportation Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Email Us
                        </Button>
                    </a>
                </div>
            </Hero>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <Breadcrumbs />
            </div>

            {/* Freshness block */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-emerald-600 shrink-0" />
                        <p className="text-sm text-gray-700">
                            <strong>Updated for LEAP Riyadh 2026</strong> — currently scheduled for <strong>31 August – 3 September 2026</strong> at the <strong>Riyadh Exhibition & Convention Centre, Malham</strong>. We update this page each year — always confirm exact dates on the official LEAP website before finalizing travel.
                        </p>
                    </div>
                </div>
            </div>

            {/* H2 #1 — Intro */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-display italic">LEAP Riyadh Transportation & Chauffeur Service</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            LEAP brings tens of thousands of attendees, exhibitors, speakers, and investors to Riyadh every year, and getting between King Khalid International Airport, your hotel, and the Riyadh Exhibition & Convention Centre at Malham is the first logistics problem most visitors face.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We provide private, fixed-rate transportation for LEAP Riyadh — airport pickups, hotel-to-venue transfers, corporate team transportation, and VIP chauffeur service for speakers and executives. One driver, one vehicle, booked in advance, so your schedule during LEAP isn't left to street-side taxi queues.
                        </p>
                        <EntityTrustSignal
                            brandName="TaxiServiceKSA Riyadh"
                            description="Corporate and executive transportation experience across Riyadh's major conferences and business events."
                            metrics={[
                                { label: 'Vehicles Available', value: '5 Classes', icon: Car },
                                { label: 'Driver Rating', value: '4.9/5', icon: Star }
                            ]}
                        />
                    </div>
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-black text-gray-900 mb-6">LEAP Riyadh at a Glance</h3>
                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">Venue</p>
                                    <p className="text-sm text-gray-500">Riyadh Exhibition & Convention Centre, Malham</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Plane className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">From RUH Airport</p>
                                    <p className="text-sm text-gray-500">~28 km, approximately 15 minutes via Airport Road</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <ShieldCheck className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">Booking Model</p>
                                    <p className="text-sm text-gray-500">Fixed-rate, pre-booked, professional chauffeurs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cluster A — Airport */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-display italic">LEAP Riyadh Airport Transportation</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-3xl">
                        Flying into King Khalid International Airport (RUH) for LEAP? We track your flight and meet you in the arrivals hall for a direct transfer to your hotel or the venue.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                            <h3 className="font-black text-gray-900 mb-2">RUH Airport Pickup</h3>
                            <p className="text-gray-500 text-sm">Meet-and-greet inside the arrivals hall with a name board, then a direct private transfer — no shared shuttles, no queueing for a street taxi.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                            <h3 className="font-black text-gray-900 mb-2">Flight Tracking</h3>
                            <p className="text-gray-500 text-sm">We monitor your flight status and adjust your driver's arrival automatically, so a delay doesn't leave you waiting or your driver waiting on you.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        <Link href="/riyadh-airport-taxi/" className="text-primary font-bold underline decoration-primary/30 hover:decoration-primary">Riyadh Airport Taxi</Link>
                        <Link href="/locations/riyadh/" className="text-primary font-bold underline decoration-primary/30 hover:decoration-primary">Riyadh Airport Transfer</Link>
                        <Link href="/services/vip-chauffeur/" className="text-primary font-bold underline decoration-primary/30 hover:decoration-primary">Riyadh Chauffeur Service</Link>
                    </div>
                </div>
            </section>

            {/* Cluster B — Hotel */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-display italic">LEAP Riyadh Hotel Transfers</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-3xl">
                        Staying anywhere in Riyadh for LEAP, we can arrange a direct transfer between your hotel and the venue each day — no re-booking a taxi every morning and evening.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-3xl">
                        Tell us your hotel name and we'll confirm exact pickup timing around LEAP's daily schedule. See more on our{' '}
                        <Link href="/locations/riyadh/" className="text-primary font-bold underline decoration-primary/30 hover:decoration-primary">
                            Riyadh transfer page
                        </Link>.
                    </p>
                </div>
            </section>

            {/* Cluster C — Event */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-display italic">Transportation to LEAP Riyadh</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-3xl">
                        Whichever badge you're wearing at LEAP, we run the transportation you actually need for it.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: User, title: 'Attendee Transportation', desc: 'Individual airport pickup and daily venue transfers.' },
                            { icon: Briefcase, title: 'Exhibitor Transportation', desc: 'Team transfers coordinated around booth setup and teardown.' },
                            { icon: Star, title: 'Speaker Transportation', desc: 'Punctual, scheduled pickups timed to your session.' },
                            { icon: Users, title: 'Group Transportation', desc: 'Multiple vehicles on one coordinated schedule for larger delegations.' },
                        ].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                <item.icon className="w-6 h-6 text-emerald-600 mb-3" />
                                <h3 className="font-black text-gray-900 mb-1 text-sm">{item.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed mt-8 max-w-3xl">
                        All bookings include venue transfers, scheduled pickups, and the option of a private car for the whole event rather than one-off trips.
                    </p>
                </div>
            </section>

            {/* Cluster D — Corporate */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-emerald-400 font-black uppercase tracking-widest text-xs mb-3 inline-block">Corporate LEAP Transportation</span>
                        <h2 className="text-3xl md:text-4xl font-black mb-6">Corporate Transportation for LEAP Riyadh</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Companies attending LEAP as exhibitors, sponsors, or delegations need more than a single airport pickup — we arrange multiple vehicles and dedicated drivers scheduled around your entire team's LEAP agenda.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span>Multiple vehicles under one coordinated booking</span></li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span>Dedicated drivers on call for the full event</span></li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span>Scheduled transfers matched to your team's daily plan</span></li>
                        </ul>
                        <Link href="/services/corporate-travel/" className="text-emerald-400 font-bold text-sm hover:text-emerald-300 inline-flex items-center gap-2">
                            Corporate Transportation Services <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <Building2 className="w-8 h-8 text-emerald-400 mb-4" />
                        <h3 className="text-xl font-bold mb-3">Built for Company Delegations</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            From a 4-person exhibitor team to a 15+ delegation, tell us your headcount and arrival pattern and we'll propose the right vehicle mix.
                        </p>
                        <Link href="/services/business/" className="text-emerald-400 font-bold text-sm hover:text-emerald-300 inline-flex items-center gap-2">
                            Business Chauffeur Service <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Cluster E — VIP */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 bg-gray-50 rounded-3xl p-8 border border-gray-100">
                        <h3 className="text-xl font-black text-gray-900 mb-4">Vehicles for VIP LEAP Transfers</h3>
                        <div className="space-y-3">
                            <Link href="/fleet/gmc-yukon/" className="flex items-center justify-between p-3 rounded-xl hover:bg-white transition-colors group">
                                <span className="text-sm font-semibold text-gray-800">GMC Yukon for executive event transportation</span>
                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-600" />
                            </Link>
                            <Link href="/fleet/mercedes-sprinter/" className="flex items-center justify-between p-3 rounded-xl hover:bg-white transition-colors group">
                                <span className="text-sm font-semibold text-gray-800">Mercedes Sprinter for larger LEAP teams</span>
                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-600" />
                            </Link>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <span className="text-emerald-700 font-black uppercase tracking-widest text-xs mb-3 inline-block">Executive Travel</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">VIP Chauffeur Service for LEAP Riyadh</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            For CEOs, investors, and speakers, we run a dedicated VIP chauffeur service — premium vehicles, experienced drivers, and a schedule built around your commitments rather than a fixed shuttle timetable.
                        </p>
                        <Link href="/services/vip-chauffeur/">
                            <Button className="bg-gray-900 text-white hover:bg-gray-800 font-bold px-8 py-6 rounded-2xl">
                                VIP Chauffeur Service <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA #2 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">Bringing a Team to LEAP?</h3>
                        <p className="text-gray-600">Tell us your company, headcount, and dates — we'll propose a coordinated vehicle plan.</p>
                    </div>
                    <a href={`https://wa.me/966569487569?text=${quoteMessage}`} className="shrink-0">
                        <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 font-bold px-8 py-6 rounded-2xl w-full md:w-auto">
                            Get My LEAP Transportation Quote <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </a>
                </div>
            </div>

            {/* Route Matrix */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-display italic text-center">LEAP Riyadh Transfer Routes</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto text-center">
                        Every leg of your LEAP trip, matched to the right service.
                    </p>
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-100 bg-gray-50">
                                        <th className="py-4 px-6 text-xs font-black text-gray-400 uppercase tracking-wider">Route</th>
                                        <th className="py-4 px-6 text-xs font-black text-gray-400 uppercase tracking-wider">Service</th>
                                        <th className="py-4 px-6 text-xs font-black text-gray-400 uppercase tracking-wider">Book</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {routeMatrix.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-5 px-6 font-bold text-gray-900 text-sm">{row.route}</td>
                                            <td className="py-5 px-6 text-gray-500 text-sm">{row.service}</td>
                                            <td className="py-5 px-6">
                                                <Link href={row.href} className="text-primary font-bold text-sm underline decoration-primary/30 hover:decoration-primary">
                                                    {row.label}
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-display italic text-center">Vehicles for LEAP Riyadh Transportation</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto text-center">
                        From a single sedan to a full delegation of vans, every vehicle is available for LEAP bookings.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {fleetCards.map((v) => (
                            <Link key={v.name} href={v.href} className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all">
                                <div className="relative w-full h-32">
                                    <Image src={v.image} alt={`${v.name} — ${v.use}`} fill className="object-cover" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-black text-gray-900 text-sm mb-1">{v.name}</h3>
                                    <p className="text-xs text-gray-500 mb-2">{v.pax}</p>
                                    <p className="text-xs text-primary font-bold">{v.use}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA #3 — Quote form */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="quote">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-display italic">Get Your LEAP Transportation Quote</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Send us these details on WhatsApp and we'll reply with a fixed-rate quote — typically within minutes.
                        </p>
                    </div>
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {[
                                'Name', 'Company', 'WhatsApp Number', 'Email',
                                'Number of Passengers', 'Number of Vehicles',
                                'Arrival Date', 'Departure Date',
                                'Hotel', 'Airport / Event / Daily Chauffeur',
                                'Vehicle Preference', 'Special Requirements',
                            ].map((field) => (
                                <div key={field} className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100">
                                    <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span className="text-xs font-bold text-gray-700">{field}</span>
                                </div>
                            ))}
                        </div>
                        <a href={`https://wa.me/966569487569?text=${quoteMessage}`}>
                            <Button size="lg" className="w-full bg-gray-900 text-white hover:bg-gray-800 font-bold py-7 rounded-2xl text-lg">
                                Get My LEAP Transportation Quote <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </a>
                        <p className="text-xs text-gray-400 text-center mt-4">Opens WhatsApp with these fields pre-filled — just replace the blanks and send.</p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            LEAP Riyadh Transportation FAQs
                        </h2>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm mb-4">
                                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline text-lg py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA #4 — bottom */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-gray-900 rounded-[40px] p-10 md:p-16 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Ready for LEAP Riyadh?</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Book your airport, hotel, corporate or VIP transfer today.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={`https://wa.me/966569487569?text=${quoteMessage}`}>
                            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                                WhatsApp Booking
                            </Button>
                        </a>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                                Request a Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Related pages cluster */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm">
                <Link href="/events/riyadh-event-transportation/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Riyadh Event Transportation</Link>
                <Link href="/locations/riyadh/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Riyadh Transfer Hub</Link>
                <Link href="/riyadh-airport-taxi/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Riyadh Airport Taxi</Link>
                <Link href="/services/vip-chauffeur/" className="text-gray-500 hover:text-primary underline decoration-gray-300">VIP Chauffeur Service</Link>
                <Link href="/services/corporate-travel/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Corporate Transportation</Link>
                <Link href="/services/business/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Business Chauffeur</Link>
                <Link href="/fleet/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Our Fleet</Link>
            </div>
        </div>
    );
}
