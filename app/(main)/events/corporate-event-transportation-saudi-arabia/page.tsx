import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, ArrowRight, Car, Star, Users, Briefcase, Building2, Plane, Globe } from 'lucide-react';
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
    title: 'Corporate Event Transportation in Saudi Arabia | Taxi Service KSA',
    description: 'Private transportation for company events across Saudi Arabia — conferences, product launches, off-sites, and multi-city delegations. Multiple vehicles, dedicated drivers, one coordinated booking.',
    keywords: ['corporate event transportation Saudi Arabia', 'company transportation Riyadh', 'business delegation transportation Saudi Arabia', 'corporate transportation Jeddah Riyadh Dammam'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/events/corporate-event-transportation-saudi-arabia/',
    },
};

const faqs = [
    {
        question: "Do you cover corporate events outside Riyadh?",
        answer: "Yes, we arrange corporate event transportation across Saudi Arabia — Riyadh, Jeddah, Dammam, and other major cities — not only for capital-based events."
    },
    {
        question: "Can you handle a multi-city itinerary for our delegation?",
        answer: "Yes, if your team is moving between cities for a roadshow or multi-stop corporate trip, we coordinate transportation for each leg under one booking."
    },
    {
        question: "How many vehicles can you provide for one company booking?",
        answer: "As many as your delegation needs — from a single sedan to a fleet of vans for a 50+ person company event, all scheduled together."
    },
    {
        question: "Do you provide transportation for product launches and company off-sites?",
        answer: "Yes, beyond conferences, we cover product launches, company off-sites, training events, and any occasion where your team needs coordinated transport."
    },
    {
        question: "Can our company set up a standing account for regular event travel?",
        answer: "Yes, for companies with recurring event travel, we can arrange a standing account with invoicing rather than booking each event separately."
    },
    {
        question: "How do I get a quote for our company's event transportation?",
        answer: "WhatsApp us your event, dates, cities involved, and headcount — we'll respond with a fixed-rate quote covering the full itinerary."
    }
];

export default function CorporateEventTransportationSaudiArabiaPage() {
    const images = ['/hero-slide-1.webp', '/hero-slide-2.webp', '/hero-slide-3.webp'];
    const quoteMessage = encodeURIComponent(
        "Hello, I need corporate event transportation in Saudi Arabia. Company: ___ | Event: ___ | Cities: ___ | Passengers: ___ | Vehicles needed: ___ | Dates: ___"
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdBreadcrumb />

            <Hero
                images={images}
                h1Text="Corporate Event Transportation in Saudi Arabia"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Company Delegations
                    </span>
                }
                subtitle="Coordinated Transportation for Company Events Across the Kingdom"
                location="Riyadh • Jeddah • Dammam • Nationwide"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href={`https://wa.me/966563573531?text=${quoteMessage}`}>
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Get a Corporate Event Quote
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
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-display italic">One Booking, Every City Your Team Needs</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Company events in Saudi Arabia aren't always confined to one city — a conference in Riyadh, a client visit in Jeddah, a plant tour in Dammam. We coordinate transportation for the whole itinerary under one booking, with multiple vehicles and dedicated drivers scheduled to your team's actual agenda, not a fixed shuttle timetable.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Globe, title: 'Multi-City Coordination', desc: 'One booking covering every city on your delegation\'s itinerary.' },
                        { icon: Users, title: 'Any Delegation Size', desc: 'From a single executive to a 50+ person company event.' },
                        { icon: Building2, title: 'Beyond Conferences', desc: 'Product launches, off-sites, training events, and client visits.' },
                        { icon: Briefcase, title: 'Standing Accounts', desc: 'Invoicing available for companies with recurring event travel.' },
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
                        <h3 className="text-xl font-black text-gray-900 mb-3">Day-to-Day Business Transport</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">For ongoing corporate transport beyond a specific event, see our standard business chauffeur and corporate travel services.</p>
                        <Link href="/services/corporate-travel/" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-2">Corporate Travel Service <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                    <div className="bg-gray-900 rounded-3xl p-8 text-white">
                        <h3 className="text-xl font-black mb-3">Attending a Specific Riyadh Event?</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">See our dedicated hub for LEAP, Money20/20, the Global AI Summit and more.</p>
                        <Link href="/events/riyadh-event-transportation/" className="text-emerald-400 font-bold text-sm hover:text-emerald-300 inline-flex items-center gap-2">Riyadh Event Transportation <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-gray-900 mb-6">Corporate Event Transportation FAQs</h2>
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
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Planning a Company Event?</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Tell us your cities, dates, and headcount for a fixed-rate transportation quote.</p>
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
                <Link href="/services/corporate-travel/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Corporate Travel Service</Link>
                <Link href="/services/business/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Business Chauffeur</Link>
                <Link href="/services/vip-chauffeur/" className="text-gray-500 hover:text-primary underline decoration-gray-300">VIP Chauffeur Service</Link>
                <Link href="/fleet/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Our Fleet</Link>
            </div>
        </div>
    );
}
