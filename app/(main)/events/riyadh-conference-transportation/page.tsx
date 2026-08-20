import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, ArrowRight, Car, Star, Users, Briefcase, Building2, Plane, Mic } from 'lucide-react';
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
    title: 'Riyadh Conference Transportation | Taxi Service KSA',
    description: 'Private transportation for conference attendees and speakers in Riyadh — airport transfers, hotel-to-venue transfers timed to your agenda, and group transportation for delegations.',
    keywords: ['Riyadh conference transportation', 'conference chauffeur Riyadh', 'conference transfer Riyadh', 'Riyadh conference taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/events/riyadh-conference-transportation/',
    },
};

const faqs = [
    {
        question: "Can transfers be timed to my session or panel schedule?",
        answer: "Yes, we schedule pickups around your actual agenda — a specific panel time, meeting slot, or session — rather than a fixed shuttle timetable."
    },
    {
        question: "Do you provide airport transfers for conference speakers?",
        answer: "Yes, we track your flight and transfer you directly from King Khalid International Airport (RUH) to your hotel or the conference venue."
    },
    {
        question: "Can you transport a full delegation attending the same conference?",
        answer: "Yes, we coordinate multiple vehicles under one booking for delegations, with a consistent schedule across the whole group."
    },
    {
        question: "Do you provide chauffeur service for the full conference, not just single transfers?",
        answer: "Yes, daily or full-event chauffeur hire is available — one driver on call for the duration of the conference."
    },
    {
        question: "Which Riyadh venues do you cover for conference transfers?",
        answer: "We cover the Riyadh Exhibition & Convention Centre at Malham, the King Abdulaziz International Conference Center, and other major Riyadh conference venues."
    },
    {
        question: "How do I book conference transportation?",
        answer: "WhatsApp us your conference name, dates, and hotel — we'll respond with a fixed-rate quote."
    }
];

export default function RiyadhConferenceTransportationPage() {
    const images = ['/hero-slide-1.webp', '/hero-slide-2.webp', '/hero-slide-3.webp'];
    const quoteMessage = encodeURIComponent(
        "Hello, I need Riyadh conference transportation. Conference: ___ | Passengers: ___ | Arrival date: ___ | Departure date: ___ | Hotel: ___"
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdBreadcrumb />

            <Hero
                images={images}
                h1Text="Riyadh Conference Transportation"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Conference Transfers
                    </span>
                }
                subtitle="Attendee & Speaker Transfers Timed to Your Agenda"
                location="Riyadh Exhibition & Convention Centre • KAICC"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href={`https://wa.me/966569487569?text=${quoteMessage}`}>
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Get a Conference Transportation Quote
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
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-display italic">Transfers Built Around Your Session Schedule</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        A conference agenda rarely lines up with a fixed shuttle timetable — you might need to leave the hotel early for a breakfast panel, or stay late for networking. We schedule your transfers around the actual sessions you're attending, not a generic pickup window.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Mic, title: 'Speaker Transportation', desc: 'Punctual pickups timed to your panel or keynote slot.' },
                        { icon: Users, title: 'Delegation Transportation', desc: 'Multiple vehicles, one coordinated schedule, for groups attending together.' },
                        { icon: Plane, title: 'Airport-to-Conference Transfers', desc: 'Flight-tracked pickup direct to your hotel or the venue.' },
                        { icon: Building2, title: 'Every Major Venue', desc: 'Riyadh Exhibition & Convention Centre, KAICC, and other Riyadh conference venues.' },
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
                        <h3 className="text-xl font-black text-gray-900 mb-3">VIP Transportation for Speakers</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">For keynote speakers and executives, our VIP chauffeur service adds a premium vehicle and flexible scheduling.</p>
                        <Link href="/services/vip-chauffeur/" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-2">VIP Chauffeur Service <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                    <div className="bg-gray-900 rounded-3xl p-8 text-white">
                        <h3 className="text-xl font-black mb-3">Flying in for the Conference?</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">Airport pickups at King Khalid International Airport, with flight tracking included.</p>
                        <Link href="/riyadh-airport-taxi/" className="text-emerald-400 font-bold text-sm hover:text-emerald-300 inline-flex items-center gap-2">Riyadh Airport Taxi <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-gray-900 mb-6">Riyadh Conference Transportation FAQs</h2>
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
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Attending a Riyadh Conference?</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Tell us your conference, dates, and passenger count for a fixed-rate transportation quote.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={`https://wa.me/966569487569?text=${quoteMessage}`}>
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
                <Link href="/events/riyadh-exhibition-transportation/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Riyadh Exhibition Transportation</Link>
                <Link href="/services/vip-chauffeur/" className="text-gray-500 hover:text-primary underline decoration-gray-300">VIP Chauffeur Service</Link>
                <Link href="/riyadh-airport-taxi/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Riyadh Airport Taxi</Link>
                <Link href="/fleet/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Our Fleet</Link>
            </div>
        </div>
    );
}
