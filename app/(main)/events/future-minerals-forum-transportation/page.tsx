import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, ShieldCheck, ArrowRight, Car, Star, Calendar, Users, Briefcase, Building2, Plane } from 'lucide-react';
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
    title: 'Future Minerals Forum Riyadh Transportation, Taxi & Chauffeur Service | Taxi Service KSA',
    description: 'Private transportation for the Future Minerals Forum Riyadh — airport transfers, hotel transfers, corporate and VIP chauffeur service for mining industry attendees and delegations.',
    keywords: ['Future Minerals Forum transportation', 'Future Minerals Forum Riyadh taxi', 'Future Minerals Forum chauffeur', 'mining forum transportation Riyadh'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/events/future-minerals-forum-transportation/',
    },
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Future Minerals Forum Riyadh Transportation and Chauffeur Service',
    description: 'Private airport, hotel, corporate, and VIP chauffeur transportation for Future Minerals Forum attendees and delegations in Riyadh.',
    provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
    areaServed: { '@type': 'City', name: 'Riyadh' },
    serviceType: 'Event Transportation / Chauffeur Service',
    url: 'https://taxiserviceksa.com/events/future-minerals-forum-transportation/',
};

const routeMatrix = [
    { route: 'King Khalid Airport (RUH) → KAICC', service: 'Airport Transfer', href: '/riyadh-airport-taxi/', label: 'Riyadh Airport Taxi' },
    { route: 'Hotel → KAICC', service: 'Event Transfer', href: '/services/vip-chauffeur/', label: 'VIP Chauffeur Service' },
    { route: 'KAICC → Hotel', service: 'Event Transfer', href: '/services/vip-chauffeur/', label: 'VIP Chauffeur Service' },
    { route: 'Hotel → King Khalid Airport (RUH)', service: 'Departure Transfer', href: '/riyadh-airport-taxi/', label: 'Riyadh Airport Taxi' },
    { route: 'Riyadh City → KAICC', service: 'Private Car', href: '/locations/riyadh/', label: 'Riyadh Private Transfer' },
];

const fleetCards = [
    { name: 'GMC Yukon', use: 'GMC Yukon for mining executive delegations', image: '/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp', href: '/fleet/gmc-yukon/', pax: '6-7 passengers' },
    { name: 'Toyota Camry', use: 'Sedan for individual delegates', image: '/toyota-camry.webp', href: '/fleet/toyota-camry/', pax: '3 passengers' },
    { name: 'Hyundai Staria', use: 'Staria for small investor teams', image: '/hyundai-staria.webp', href: '/fleet/hyundai-staria/', pax: '6-7 passengers' },
    { name: 'Toyota HiAce', use: 'HiAce for mining company delegations', image: '/toyota-hiace.webp', href: '/fleet/toyota-hiace/', pax: '10-12 passengers' },
    { name: 'Mercedes Sprinter', use: 'Sprinter for government and industry delegations', image: '/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp', href: '/fleet/mercedes-sprinter/', pax: '14+ passengers' },
];

const faqs = [
    {
        question: "How can I book transportation for the Future Minerals Forum?",
        answer: "Send us your arrival date, passenger count, and hotel via WhatsApp, and we'll confirm a fixed-rate booking with a dedicated driver and vehicle."
    },
    {
        question: "Do you provide airport transfers for Future Minerals Forum attendees?",
        answer: "Yes. We meet you at King Khalid International Airport (RUH) and transfer you directly to your hotel or the King Abdulaziz International Conference Center (KAICC) — around 25km, roughly 30 minutes by road."
    },
    {
        question: "When is the Future Minerals Forum held?",
        answer: "The Forum is typically held in mid-January each year at KAICC in Riyadh. The 2026 edition took place 13-15 January 2026 — check the official Future Minerals Forum website for the confirmed dates of the next edition."
    },
    {
        question: "Do you provide corporate transportation for mining companies and investors?",
        answer: "Yes, we arrange multiple vehicles and dedicated drivers for mining companies, investors, and government delegations attending the Forum."
    },
    {
        question: "Can I book a private chauffeur for the entire Forum?",
        answer: "Yes, daily or full-event chauffeur hire is available — one driver and vehicle on call for airport pickup, daily transfers, and any meetings you need to attend."
    },
    {
        question: "Do you provide VIP transportation for executives and government delegates?",
        answer: "Yes, our VIP chauffeur service covers mining executives, investors, and government delegates attending the Forum — premium vehicles and flexible scheduling."
    },
    {
        question: "How do I get a custom Future Minerals Forum transportation quote?",
        answer: "Use the quote button below or WhatsApp us your dates, passenger count, and vehicle preference — we typically respond within minutes."
    }
];

export default function FutureMineralsForumTransportationPage() {
    const images = ['/hero-slide-1.webp', '/hero-slide-2.webp', '/hero-slide-3.webp'];
    const quoteMessage = encodeURIComponent(
        "Hello, I need Future Minerals Forum transportation. Company: ___ | Passengers: ___ | Vehicles needed: ___ | Arrival date: ___ | Departure date: ___ | Hotel: ___ | Vehicle preference: ___"
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdBreadcrumb />
            <script
                id="future-minerals-forum-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <Hero
                images={images}
                h1Text="Future Minerals Forum Riyadh Transportation & Chauffeur Service"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Future Minerals Forum
                    </span>
                }
                subtitle="Airport, Hotel, Corporate & VIP Transfers for Mining Industry Delegations"
                location="King Abdulaziz International Conference Center"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href={`https://wa.me/966590209905?text=${quoteMessage}`}>
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Get My Future Minerals Forum Quote
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center gap-3 shadow-sm">
                    <Calendar className="w-5 h-5 text-emerald-600 shrink-0" />
                    <p className="text-sm text-gray-700">
                        <strong>Note:</strong> The Future Minerals Forum 2026 edition took place <strong>13 – 15 January 2026</strong> at the <strong>King Abdulaziz International Conference Center (KAICC)</strong>. The Forum is held annually in mid-January — this page will be updated with confirmed dates as soon as the next edition is announced. Always check the official Future Minerals Forum website for current dates.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-display italic">Transportation for the Future Minerals Forum</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            The Future Minerals Forum brings mining companies, investors, and government delegations from around the world to Riyadh's King Abdulaziz International Conference Center each January. With international delegations and a packed schedule of meetings, private pre-booked transport is the reliable way to move between the airport, your hotel, and the venue.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We provide fixed-rate airport pickups, hotel-to-venue transfers, coordinated transportation for company and investor delegations, and VIP chauffeur service for executives and government representatives.
                        </p>
                        <EntityTrustSignal
                            brandName="TaxiServiceKSA Riyadh"
                            description="Corporate and executive transportation experience across Riyadh's major investment forums and conferences."
                            metrics={[
                                { label: 'Vehicles Available', value: '5 Classes', icon: Car },
                                { label: 'Driver Rating', value: '4.9/5', icon: Star }
                            ]}
                        />
                    </div>
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-black text-gray-900 mb-6">Future Minerals Forum at a Glance</h3>
                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                                <div><p className="font-bold text-gray-900 text-sm">Venue</p><p className="text-sm text-gray-500">King Abdulaziz International Conference Center (KAICC)</p></div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Plane className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                                <div><p className="font-bold text-gray-900 text-sm">From RUH Airport</p><p className="text-sm text-gray-500">~25 km, approximately 30 minutes by road</p></div>
                            </div>
                            <div className="flex items-start gap-4">
                                <ShieldCheck className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                                <div><p className="font-bold text-gray-900 text-sm">Booking Model</p><p className="text-sm text-gray-500">Fixed-rate, pre-booked, professional chauffeurs</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                        <Plane className="w-6 h-6 text-emerald-600 mb-3" />
                        <h3 className="font-black text-gray-900 mb-2">Airport Transportation</h3>
                        <p className="text-gray-500 text-sm mb-4">Meet-and-greet at RUH with flight tracking and a direct transfer to your hotel or KAICC.</p>
                        <Link href="/riyadh-airport-taxi/" className="text-primary font-bold text-xs underline decoration-primary/30 hover:decoration-primary">Riyadh Airport Taxi</Link>
                    </div>
                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                        <Briefcase className="w-6 h-6 text-emerald-600 mb-3" />
                        <h3 className="font-black text-gray-900 mb-2">Corporate & Delegation Transportation</h3>
                        <p className="text-gray-500 text-sm mb-4">Coordinated vehicles for mining companies, investors, and government delegations.</p>
                        <Link href="/services/corporate-travel/" className="text-primary font-bold text-xs underline decoration-primary/30 hover:decoration-primary">Corporate Transportation</Link>
                    </div>
                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                        <Star className="w-6 h-6 text-emerald-600 mb-3" />
                        <h3 className="font-black text-gray-900 mb-2">VIP Executive Transportation</h3>
                        <p className="text-gray-500 text-sm mb-4">Executive chauffeur service for mining executives and government representatives.</p>
                        <Link href="/services/vip-chauffeur/" className="text-primary font-bold text-xs underline decoration-primary/30 hover:decoration-primary">VIP Chauffeur Service</Link>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 font-display italic text-center">Future Minerals Forum Transfer Routes</h2>
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
                                            <td className="py-5 px-6"><Link href={row.href} className="text-primary font-bold text-sm underline decoration-primary/30 hover:decoration-primary">{row.label}</Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 font-display italic text-center">Vehicles for Future Minerals Forum Transportation</h2>
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">Bringing a Delegation to the Forum?</h3>
                        <p className="text-gray-600">Tell us your company, headcount, and dates — we'll propose a coordinated vehicle plan.</p>
                    </div>
                    <a href={`https://wa.me/966590209905?text=${quoteMessage}`} className="shrink-0">
                        <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 font-bold px-8 py-6 rounded-2xl w-full md:w-auto">
                            Get My Future Minerals Forum Quote <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </a>
                </div>
            </div>

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-gray-900 mb-6">Future Minerals Forum Transportation FAQs</h2>
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
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Ready for the Future Minerals Forum?</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Book your airport, hotel, corporate or VIP transfer today.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={`https://wa.me/966590209905?text=${quoteMessage}`}>
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
                <Link href="/locations/riyadh/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Riyadh Transfer Hub</Link>
                <Link href="/riyadh-airport-taxi/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Riyadh Airport Taxi</Link>
                <Link href="/services/vip-chauffeur/" className="text-gray-500 hover:text-primary underline decoration-gray-300">VIP Chauffeur Service</Link>
                <Link href="/services/corporate-travel/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Corporate Transportation</Link>
                <Link href="/fleet/" className="text-gray-500 hover:text-primary underline decoration-gray-300">Our Fleet</Link>
            </div>
        </div>
    );
}
