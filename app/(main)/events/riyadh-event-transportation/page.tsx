import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, ArrowRight, Car, Star, Calendar, Users, Briefcase, Crown, Building2 } from 'lucide-react';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLdBreadcrumb from '@/components/JsonLdBreadcrumb';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'Riyadh Event & Conference Transportation | Taxi Service KSA',
    description: 'Private transportation for Riyadh conferences, exhibitions, and corporate events — LEAP, Black Hat MEA, Money20/20, Global AI Summit, Future Minerals Forum and more. Airport, hotel, corporate and VIP chauffeur service.',
    keywords: ['Riyadh event transportation', 'Riyadh conference transportation', 'Riyadh exhibition transportation', 'corporate event transportation Saudi Arabia', 'VIP event chauffeur Riyadh'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/events/riyadh-event-transportation/',
    },
};

const featuredEvents = [
    { name: 'LEAP', desc: 'Global technology conference', dates: '31 Aug – 3 Sep 2026', href: '/events/leap-riyadh-transportation/' },
    { name: 'Money20/20 Middle East', desc: 'Global fintech and payments event', dates: '14 – 16 Sep 2026', href: '/events/money20-20-riyadh-transportation/' },
    { name: 'Global AI Summit', desc: 'Artificial intelligence policy and industry summit', dates: '15 – 17 Sep 2026', href: '/events/global-ai-summit-riyadh-transportation/' },
    { name: 'Black Hat MEA', desc: 'Cybersecurity conference and exhibition', dates: '1 – 3 Dec 2026', href: '/events/black-hat-mea-transportation/' },
    { name: 'Future Minerals Forum', desc: 'Mining and minerals investment forum', dates: 'Typically mid-January', href: '/events/future-minerals-forum-transportation/' },
];

const serviceClusters = [
    { icon: Building2, name: 'Exhibition Transportation', desc: 'Exhibitor booth logistics, freight-day transfers, and multi-day shuttle scheduling.', href: '/events/riyadh-exhibition-transportation/' },
    { icon: Briefcase, name: 'Conference Transportation', desc: 'Attendee and speaker transfers built around a conference agenda, not a fixed shuttle timetable.', href: '/events/riyadh-conference-transportation/' },
    { icon: Users, name: 'Corporate Event Transportation', desc: 'Multi-vehicle bookings for companies bringing a delegation to any Saudi event.', href: '/events/corporate-event-transportation-saudi-arabia/' },
    { icon: Crown, name: 'VIP Event Chauffeur', desc: 'Executive chauffeur service for speakers, CEOs, and investors.', href: '/events/vip-event-chauffeur-riyadh/' },
];

const faqs = [
    {
        question: "Do you provide transportation for conferences and exhibitions in Riyadh?",
        answer: "Yes, we run private transportation for major Riyadh events including LEAP, Money20/20 Middle East, the Global AI Summit, Black Hat MEA, and the Future Minerals Forum, plus general conference and exhibition transfers year-round."
    },
    {
        question: "Can you arrange transportation for my company's event delegation?",
        answer: "Yes, we coordinate multiple vehicles and dedicated drivers for company teams attending any Riyadh event — tell us your headcount and dates and we'll propose a vehicle plan."
    },
    {
        question: "Do you provide airport transfers for event attendees?",
        answer: "Yes, we meet you at King Khalid International Airport (RUH) and transfer you directly to your hotel or the event venue, with flight tracking included."
    },
    {
        question: "Which vehicles are available for event transportation?",
        answer: "Sedans for individual travel, GMC Yukon and Hyundai Staria for small groups, Toyota HiAce for teams, and Mercedes Sprinter for larger delegations."
    },
    {
        question: "Is a specific event I'm attending not listed here?",
        answer: "We cover transportation for any Riyadh conference, exhibition, or corporate event, not only the ones listed. Send us your event name, venue, and dates and we'll quote accordingly."
    },
    {
        question: "How far in advance should I book event transportation?",
        answer: "For major events like LEAP or Money20/20, we recommend booking at least a week ahead, since vehicle availability tightens as the event approaches."
    }
];

export default function RiyadhEventTransportationHub() {
    const images = ['/hero-slide-1.webp', '/hero-slide-2.webp', '/hero-slide-3.webp'];
    const quoteMessage = encodeURIComponent(
        "Hello, I need Riyadh event transportation. Event: ___ | Company: ___ | Passengers: ___ | Dates: ___ | Hotel: ___"
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdBreadcrumb />

            <Hero
                images={images}
                h1Text="Riyadh Event & Conference Transportation"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Riyadh Events Hub
                    </span>
                }
                subtitle="Private Transfers for Riyadh's Major Conferences & Exhibitions"
                location="Riyadh Exhibition & Convention Centre • KAICC"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href={`https://wa.me/966569487569?text=${quoteMessage}`}>
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Get an Event Transportation Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                </div>
            </Hero>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <Breadcrumbs />
            </div>

            {/* Intro */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-display italic">Riyadh's Event Calendar Keeps Growing</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Riyadh now hosts some of the world's largest conferences and exhibitions — from technology and fintech to cybersecurity and mining investment. Each one brings the same logistics question: how do you get from King Khalid Airport, or your hotel, to the venue, reliably, without relying on street-side taxis. We run private, fixed-rate transportation for Riyadh's major events, and for any conference, exhibition, or corporate gathering in between.
                    </p>
                </div>
            </section>

            {/* Featured Events */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 font-display italic text-center">Transportation for Riyadh's Major Events</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredEvents.map((event) => (
                            <Link
                                key={event.href}
                                href={event.href}
                                className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <Calendar className="w-5 h-5 text-emerald-600" />
                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                                </div>
                                <h3 className="font-black text-gray-900 mb-1">{event.name}</h3>
                                <p className="text-sm text-gray-500 mb-3">{event.desc}</p>
                                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">{event.dates}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service clusters */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 font-display italic text-center">Riyadh Event Transportation Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {serviceClusters.map((s) => (
                            <Link key={s.href} href={s.href} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary/30 transition-all">
                                <s.icon className="w-6 h-6 text-emerald-600 mb-3" />
                                <h3 className="font-black text-gray-900 mb-1 text-sm">{s.name}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Airport + fleet quick links */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-900 rounded-3xl p-8 text-white">
                        <h3 className="text-xl font-black mb-3">Flying in for an Event?</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            We meet you at King Khalid International Airport (RUH) with flight tracking and a direct transfer to your hotel or venue.
                        </p>
                        <Link href="/riyadh-airport-taxi/" className="text-emerald-400 font-bold text-sm hover:text-emerald-300 inline-flex items-center gap-2">
                            Riyadh Airport Taxi <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                        <h3 className="text-xl font-black text-gray-900 mb-3">Every Vehicle Class Available</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Sedan, GMC Yukon, Hyundai Staria, Toyota HiAce, and Mercedes Sprinter — the right vehicle for solo travel or a full delegation.
                        </p>
                        <Link href="/fleet/" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-2">
                            View Our Fleet <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Riyadh Event Transportation FAQs
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

            {/* Bottom CTA */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="bg-gray-900 rounded-[40px] p-10 md:p-16 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Attending a Riyadh Event?</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Tell us your event, dates, and passenger count for a fixed-rate transportation quote.</p>
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
        </div>
    );
}
