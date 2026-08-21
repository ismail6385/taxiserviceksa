import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, ArrowRight, Car, Star, Crown, Shield, Users, Briefcase } from 'lucide-react';
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
    title: 'VIP Event Chauffeur Service in Riyadh | Taxi Service KSA',
    description: 'Executive chauffeur service for speakers, CEOs, investors and delegates attending Riyadh conferences and events. Premium vehicles, discreet professional drivers, flexible scheduling.',
    keywords: ['VIP event chauffeur Riyadh', 'executive chauffeur Riyadh event', 'CEO transportation Riyadh', 'speaker transportation Riyadh', 'investor transportation Riyadh'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/events/vip-event-chauffeur-riyadh/',
    },
};

const fleetCards = [
    { name: 'GMC Yukon', use: 'GMC Yukon for executive event transportation', image: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', href: '/fleet/gmc-yukon/' },
    { name: 'Mercedes Sprinter', use: 'Mercedes Sprinter for larger executive delegations', image: '/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp', href: '/fleet/mercedes-sprinter/' },
    { name: 'Hyundai Staria', use: 'Staria VIP for small executive teams', image: '/hyundai-staria.webp', href: '/fleet/hyundai-staria/' },
];

const faqs = [
    {
        question: "Who is VIP event chauffeur service for?",
        answer: "Speakers, CEOs, investors, government delegates, and executives attending Riyadh conferences and events who need a premium vehicle and a schedule built around their commitments, not a fixed shuttle."
    },
    {
        question: "How is this different from your standard airport taxi service?",
        answer: "VIP chauffeur service includes a premium vehicle class, an experienced dedicated driver on call for the day (or full event), and flexible, discreet scheduling — you set the pace, not a shared shuttle timetable."
    },
    {
        question: "Can I book a VIP chauffeur for a specific event like LEAP or Money20/20?",
        answer: "Yes, we regularly provide VIP transportation for speakers and executives at LEAP, Money20/20, the Global AI Summit, Black Hat MEA, and other major Riyadh events."
    },
    {
        question: "Can the driver wait between meetings?",
        answer: "Yes, for full-day or full-event bookings, your driver and vehicle stay on call between sessions, meetings, or appointments."
    },
    {
        question: "Which vehicles are used for VIP event chauffeur service?",
        answer: "Primarily the GMC Yukon for individual executives, and the Mercedes Sprinter or Hyundai Staria for small executive delegations travelling together."
    },
    {
        question: "How do I book VIP chauffeur service for an event?",
        answer: "WhatsApp us your event, dates, and hotel — we'll confirm a fixed-rate quote and assign a dedicated driver."
    }
];

export default function VipEventChauffeurRiyadhPage() {
    const images = ['/hero-slide-1.webp', '/hero-slide-2.webp', '/hero-slide-3.webp'];
    const quoteMessage = encodeURIComponent(
        "Hello, I need VIP event chauffeur service in Riyadh. Event: ___ | Name: ___ | Dates: ___ | Hotel: ___ | Vehicle preference: ___"
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdBreadcrumb />

            <Hero
                images={images}
                h1Text="VIP Event Chauffeur Service in Riyadh"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Executive Travel
                    </span>
                }
                subtitle="For Speakers, CEOs, Investors & Delegates"
                location="Riyadh Exhibition & Convention Centre • KAICC"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href={`https://wa.me/966563573531?text=${quoteMessage}`}>
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Chauffeur
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
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-display italic">A Schedule Built Around You, Not a Shuttle Timetable</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Speaking on a panel, closing a deal between sessions, or moving between meetings on a tight window — event days for executives rarely follow a fixed schedule. Our VIP chauffeur service keeps a premium vehicle and an experienced driver on call for the day, so your transportation adapts to your agenda instead of the other way around.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Crown, title: 'Premium Vehicle Class', desc: 'GMC Yukon, Mercedes Sprinter, or Hyundai Staria VIP.' },
                        { icon: Shield, title: 'Discreet, Professional Drivers', desc: 'Experienced with executive and diplomatic-level service.' },
                        { icon: Clock, title: 'Flexible, On-Call Scheduling', desc: 'Your driver waits between meetings, not on a fixed shuttle run.' },
                        { icon: Users, title: 'Individual or Small Delegation', desc: 'From a single executive to a small leadership team.' },
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
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 font-display italic text-center">Vehicles for VIP Event Chauffeur Service</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {fleetCards.map((v) => (
                            <Link key={v.name} href={v.href} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all">
                                <div className="relative w-full h-40">
                                    <Image src={v.image} alt={`${v.name} — ${v.use}`} fill className="object-cover" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-black text-gray-900 text-sm mb-1">{v.name}</h3>
                                    <p className="text-xs text-primary font-bold">{v.use}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                        <h3 className="text-xl font-black text-gray-900 mb-3">Attending a Specific Event?</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">See our dedicated pages for LEAP, Money20/20, the Global AI Summit, Black Hat MEA, and the Future Minerals Forum.</p>
                        <Link href="/events/riyadh-event-transportation/" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-2">Riyadh Event Transportation <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                    <div className="bg-gray-900 rounded-3xl p-8 text-white">
                        <h3 className="text-xl font-black mb-3">Everyday Executive Chauffeur</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">For ongoing VIP transport beyond a specific event, see our standard executive chauffeur service.</p>
                        <Link href="/services/vip-chauffeur/" className="text-emerald-400 font-bold text-sm hover:text-emerald-300 inline-flex items-center gap-2">VIP Chauffeur Service <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-gray-900 mb-6">VIP Event Chauffeur FAQs</h2>
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="bg-gray-900 rounded-[40px] p-10 md:p-16 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Need Executive Transportation in Riyadh?</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Book VIP chauffeur service for your event today.</p>
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
                <Link href="/services/vip-chauffeur/" className="text-gray-500 hover:text-primary underline decoration-gray-300">VIP Chauffeur Service</Link>
                <Link href="/services/corporate-travel/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Corporate Transportation</Link>
                <Link href="/riyadh-airport-taxi/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Riyadh Airport Taxi</Link>
                <Link href="/fleet/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Our Fleet</Link>
            </div>
        </div>
    );
}
