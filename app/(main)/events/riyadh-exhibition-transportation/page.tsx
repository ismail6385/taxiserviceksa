import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, ShieldCheck, ArrowRight, Car, Star, Users, Briefcase, Building2, Plane, Package } from 'lucide-react';
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
    title: 'Riyadh Exhibition Transportation | Taxi Service KSA',
    description: 'Private transportation for exhibitors and trade show teams in Riyadh — booth setup transfers, multi-day shuttle scheduling, and group vehicles for exhibition staff.',
    keywords: ['Riyadh exhibition transportation', 'exhibitor transportation Riyadh', 'trade show transportation Riyadh', 'exhibition shuttle Riyadh'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/events/riyadh-exhibition-transportation/',
    },
};

const faqs = [
    {
        question: "Do you provide transportation for exhibitor teams during setup and teardown?",
        answer: "Yes, we schedule transfers around your actual build-up and breakdown days, not just the public show days — tell us your access dates and we'll plan around them."
    },
    {
        question: "Can you run a shuttle for our staff across multiple show days?",
        answer: "Yes, we can run scheduled hotel-to-venue shuttles for your full exhibition team for the duration of the show, rather than booking each transfer separately."
    },
    {
        question: "Do you provide vehicles large enough for a full exhibitor team?",
        answer: "Yes, the Toyota HiAce and Mercedes Sprinter comfortably move a 10-15 person exhibition team in one vehicle."
    },
    {
        question: "Can you handle airport pickup for staff arriving on different flights?",
        answer: "Yes, we coordinate multiple pickups across different arrival times and consolidate your team at the hotel or venue as needed."
    },
    {
        question: "Do you provide transportation for exhibitions outside Riyadh's major venues?",
        answer: "Yes, we cover the Riyadh Exhibition & Convention Centre at Malham, the King Abdulaziz International Conference Center, and other Riyadh exhibition venues."
    },
    {
        question: "How do I get a quote for our exhibition team's transportation?",
        answer: "WhatsApp us your show dates, team size, and hotel — we'll respond with a fixed-rate quote covering the full exhibition period."
    }
];

export default function RiyadhExhibitionTransportationPage() {
    const images = ['/hero-slide-1.webp', '/hero-slide-2.webp', '/hero-slide-3.webp'];
    const quoteMessage = encodeURIComponent(
        "Hello, I need Riyadh exhibition transportation. Exhibition: ___ | Company: ___ | Team size: ___ | Setup date: ___ | Show dates: ___ | Hotel: ___"
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdBreadcrumb />

            <Hero
                images={images}
                h1Text="Riyadh Exhibition Transportation"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Exhibitor Logistics
                    </span>
                }
                subtitle="Booth Setup, Show Days & Teardown Transfers"
                location="Riyadh Exhibition & Convention Centre • KAICC"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href={`https://wa.me/966563573531?text=${quoteMessage}`}>
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Get an Exhibition Transportation Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                </div>
            </Hero>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <Breadcrumbs />
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-display italic">Built Around Your Exhibition Schedule, Not the Public Show Dates</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Exhibiting at a Riyadh trade show means being on-site well before doors open to the public — booth build-up, staff arriving on staggered flights, and teardown days that don't match the official event dates. We schedule transportation around your actual access days, not a generic conference timetable.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Package, title: 'Setup & Teardown Transfers', desc: 'Scheduled around your booth access days, before and after the public show dates.' },
                        { icon: Users, title: 'Multi-Day Team Shuttle', desc: 'One coordinated hotel-to-venue schedule for your whole exhibition team.' },
                        { icon: Plane, title: 'Staggered Arrival Coordination', desc: 'Multiple staff, multiple flights — we consolidate pickups without extra bookings.' },
                        { icon: Building2, title: 'Every Major Venue', desc: 'Riyadh Exhibition & Convention Centre, KAICC, and other Riyadh exhibition venues.' },
                    ].map((item) => (
                        <div key={item.title} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                            <item.icon className="w-6 h-6 text-emerald-600 mb-3" />
                            <h3 className="font-black text-gray-900 mb-1 text-sm">{item.title}</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-3xl p-8 border border-gray-100">
                        <h3 className="text-xl font-black text-gray-900 mb-3">Vehicles for Exhibition Teams</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">Toyota HiAce and Mercedes Sprinter for full teams; sedans and GMC Yukon for smaller groups or individual staff.</p>
                        <Link href="/fleet/" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-2">View Our Fleet <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                    <div className="bg-gray-900 rounded-3xl p-8 text-white">
                        <h3 className="text-xl font-black mb-3">Flying in Booth Staff?</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">Airport pickups at King Khalid International Airport, coordinated across arrival times.</p>
                        <Link href="/riyadh-airport-taxi/" className="text-emerald-400 font-bold text-sm hover:text-emerald-300 inline-flex items-center gap-2">Riyadh Airport Taxi <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-gray-900 mb-6">Riyadh Exhibition Transportation FAQs</h2>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm mb-4">
                                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline text-lg py-6">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-gray-900 rounded-[40px] p-10 md:p-16 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Exhibiting in Riyadh?</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Tell us your show, team size, and dates for a fixed-rate transportation quote.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={`https://wa.me/966563573531?text=${quoteMessage}`}>
                            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">WhatsApp Booking</Button>
                        </a>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">Request a Quote</Button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm">
                <Link href="/events/riyadh-event-transportation/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Riyadh Event Transportation</Link>
                <Link href="/events/riyadh-conference-transportation/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Riyadh Conference Transportation</Link>
                <Link href="/services/corporate-travel/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Corporate Transportation</Link>
                <Link href="/riyadh-airport-taxi/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Riyadh Airport Taxi</Link>
                <Link href="/fleet/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Our Fleet</Link>
            </div>
        </div>
    );
}
