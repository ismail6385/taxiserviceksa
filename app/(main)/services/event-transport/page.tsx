import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    CheckCircle2, ArrowRight, Calendar, Users, Star,
    MapPin, Music, Briefcase, Heart, Building2, Car
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Event & Wedding Transport Saudi Arabia | Conference & Exhibition Chauffeur | Taxi Service KSA',
    description: 'Professional event transport for weddings, conferences, exhibitions, and corporate events in Riyadh and Jeddah. Private chauffeur for guests, VIP arrivals, and group logistics. Book now.',
    keywords: [
        'Saudi event chauffeur booking',
        'private transport for wedding guests',
        'event guest transport Riyadh',
        'wedding guest transportation Saudi',
        'chauffeur for conferences Riyadh',
        'chauffeur for conferences Saudi',
        'Riyadh expo transport service',
        'private driver for exhibitions Riyadh',
        'chauffeur for conferences Saudi Arabia',
        'corporate event transport Riyadh',
        'Saudi wedding transport service',
        'event transport company Riyadh',
        'VIP event chauffeur Saudi Arabia',
        'group transport for events Saudi',
        'conference shuttle Riyadh',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/event-transport/',
    },
    openGraph: {
        title: 'Event & Wedding Transport Saudi Arabia | Chauffeur for Conferences & Weddings | Taxi Service KSA',
        description: 'Private chauffeur and group transport for weddings, conferences, exhibitions, and corporate events in Riyadh and Jeddah. VIP arrivals, guest shuttles, and full event logistics.',
        url: 'https://taxiserviceksa.com/services/event-transport/',
        type: 'website',
    },
};

export default function EventTransportPage() {
    const eventTypes = [
        {
            title: 'Wedding Guest Transport',
            description: 'Coordinated guest transport for wedding ceremonies and receptions in Riyadh and Jeddah. Multiple vehicles assigned for arrival and departure waves. VIP bridal party transfers available.',
            icon: Heart,
            details: ['Hotel to venue guest shuttles', 'Bridal party private chauffeur', 'Multi-pickup coordination', 'Late-night return transfers'],
        },
        {
            title: 'Conference & Summit Transport',
            description: 'Dedicated vehicle fleet for multi-day conferences at Riyadh convention centres, KAFD venues, and five-star hotels. Speaker and delegate airport pickups included.',
            icon: Briefcase,
            details: ['Airport to hotel delegate transfers', 'Speaker VIP airport pickups', 'Conference centre shuttles', 'Multi-day fleet allocation'],
        },
        {
            title: 'Exhibition & Expo Transport',
            description: 'Group transport solutions for exhibitors and attendees at Riyadh International Convention & Exhibition Center (RICEC), Jeddah Centre for Forums & Events, and major trade shows.',
            icon: Building2,
            details: ['RICEC exhibition shuttles', 'Hotel to expo centre daily runs', 'Exhibitor equipment transfer support', 'Multi-day attendee packages'],
        },
        {
            title: 'Riyadh Season & Entertainment',
            description: 'Event-night transport for Riyadh Season shows, Formula E, Diriyah events, and cultural performances. Pre-booked to avoid surge pricing and parking chaos.',
            icon: Music,
            details: ['Show venue arrivals and returns', 'Hotel to Riyadh Boulevard', 'Late-night post-event pickup', 'Group party transport'],
        },
        {
            title: 'Corporate Events & Roadshows',
            description: 'Executive transport for investor roadshows, product launches, and corporate dinners in Riyadh and Jeddah. Branded vehicle options available on request.',
            icon: Star,
            details: ['Investor roadshow logistics', 'Product launch guest transfers', 'Corporate dinner arrivals', 'C-suite delegation transport'],
        },
        {
            title: 'Government & Diplomatic Events',
            description: 'Protocol-compliant transport for government functions, embassy receptions, and state ceremonies in Riyadh\'s Diplomatic Quarter and official venues.',
            icon: MapPin,
            details: ['Embassy reception transfers', 'Ministry event arrivals', 'Diplomatic Quarter logistics', 'State function coordination'],
        },
    ];

    const features = [
        'Advance route planning for each event',
        'Multiple vehicles dispatched simultaneously',
        'Named driver assignment per guest group',
        'Real-time WhatsApp coordination',
        'Ministry of Transport licensed drivers',
        'English, Arabic, and Urdu speaking drivers',
        'GMC Yukon, Hiace, Coaster for groups',
        'Mercedes Sprinter for large VIP groups',
        '24/7 on-event-day support',
        'Flexible schedule changes on the day',
    ];

    const vehicles = [
        { name: 'Toyota Camry', seats: 4, ideal: 'VIP individual guest, speakers' },
        { name: 'GMC Yukon XL', seats: 7, ideal: 'Bridal party, small groups' },
        { name: 'Hyundai Staria VIP', seats: 7, ideal: 'VIP family groups, delegates' },
        { name: 'Toyota Hiace', seats: 11, ideal: 'Guest batches, staff groups' },
        { name: 'Toyota Coaster', seats: 25, ideal: 'Large guest shuttles, delegations' },
        { name: 'Mercedes Sprinter', seats: 14, ideal: 'Corporate groups, wedding parties' },
    ];

    const faqs = [
        {
            question: 'Do you provide transport for wedding guests in Riyadh or Jeddah?',
            answer: 'Yes. We provide coordinated wedding guest transport in Riyadh and Jeddah. Multiple vehicles are dispatched simultaneously to handle guest arrival and departure waves. Services include hotel-to-venue shuttles, bridal party private chauffeur, and late-night return transfers. Advance booking of 1–2 weeks is recommended for weddings.',
        },
        {
            question: 'Can you arrange transport for conference delegates in Riyadh?',
            answer: 'Yes. Conference transport packages include airport-to-hotel delegate transfers, daily hotel-to-venue shuttles, and VIP speaker pickups. We assign a dedicated coordinator for multi-day conferences to manage schedule changes in real time. Vehicles range from executive sedans for individual VIPs to Toyota Coaster buses for large delegate groups.',
        },
        {
            question: 'Is event transport available for Riyadh expo and exhibition centres?',
            answer: 'Yes. We serve major exhibition venues including Riyadh International Convention & Exhibition Center (RICEC) and Jeddah Centre for Forums & Events. Daily exhibitor and attendee shuttles from hotels across Riyadh are available. Multi-day packages with dedicated vehicles are available for exhibitors throughout the event period.',
        },
        {
            question: 'How far in advance should I book event transport in Saudi Arabia?',
            answer: 'For weddings and large events, 2–4 weeks advance booking is recommended to ensure sufficient vehicle availability. For conferences and expos, 1–2 weeks notice is usually sufficient for groups under 50 people. For Riyadh Season events and major public shows, book as early as possible — demand peaks significantly during October to February.',
        },
        {
            question: 'Can I book a private chauffeur for VIP guests at a corporate event?',
            answer: 'Yes. Named private chauffeur assignments for VIP guests and speakers are available. Each VIP receives a dedicated driver for the duration of their visit — including airport pickup, hotel, venue, and return. The driver is briefed on the guest\'s schedule and remains on standby throughout the event day.',
        },
        {
            question: 'What vehicles are available for large group event transport?',
            answer: 'For large groups, we offer Toyota Coaster (25 seats), Toyota Hiace (11 seats), and Mercedes Sprinter (14 seats). Multiple units can be deployed simultaneously for event arrivals and departures. All group vehicles include a professional driver and can be wrapped or branded on request for corporate events.',
        },
        {
            question: 'Do you handle transport logistics for entire events, not just individual trips?',
            answer: 'Yes. For large events, we assign an event transport coordinator who manages vehicle dispatch, timing, and real-time adjustments via WhatsApp. The coordinator works with your event team to ensure all guests, speakers, and VIPs are moved according to the programme. Full-day and multi-day coordination packages are available.',
        },
        {
            question: 'Is there an event transport service for Riyadh Season shows and concerts?',
            answer: 'Yes. During Riyadh Season (October to February), we offer pre-booked show transport packages that include hotel-to-venue, waiting during the show, and post-show return. Pre-booking avoids surge pricing from apps like Uber and Careem, which typically triple during popular show nights.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Event & Wedding Transport Saudi Arabia',
        serviceType: 'Event Chauffeur & Group Transport',
        provider: {
            '@type': 'Organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
        },
        areaServed: [
            { '@type': 'City', name: 'Riyadh' },
            { '@type': 'City', name: 'Jeddah' },
            { '@type': 'AdministrativeArea', name: 'Saudi Arabia' },
        ],
        description: 'Professional event and wedding transport in Saudi Arabia. Private chauffeur for guests, VIP arrivals, conference delegates, and group logistics for events in Riyadh and Jeddah.',
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Event Transport Services',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Guest Transport Saudi Arabia' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conference Delegate Transport Riyadh' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Exhibition & Expo Shuttle Service' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Riyadh Season Event Transport' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Event Chauffeur' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Government & Diplomatic Event Transport' } },
            ],
        },
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="event-transport-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-1.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                        Event & Wedding Transport
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Private Event Transport<br />
                        <span className="text-white/80">Saudi Arabia</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Coordinated chauffeur and group transport for weddings, conferences, exhibitions, Riyadh Season events, and corporate functions across Riyadh and Jeddah.
                    </p>

                    {/* AEO Quick Facts */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-left mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-emerald-400" /> Event Transport — Quick Facts
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">Event Types:</strong> Weddings, Conferences, Expos, Riyadh Season</li>
                            <li><strong className="text-white">Fleet:</strong> Camry, GMC, Hiace, Coaster, Sprinter</li>
                            <li><strong className="text-white">Coordination:</strong> Dedicated event coordinator via WhatsApp</li>
                            <li><strong className="text-white">Booking Lead:</strong> 2–4 weeks for weddings, 1–2 weeks for events</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20Event%20Transport%20in%20Saudi%20Arabia" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                Book Event Transport
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
                                Email for Event Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Event Types */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Events We Cover</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From royal weddings to international conferences — private event transport across Saudi Arabia.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {eventTypes.map((event, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                    <event.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                                <p className="text-gray-600 mb-5 leading-relaxed text-sm">{event.description}</p>
                                <ul className="space-y-2">
                                    {event.details.map((d, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicle Fleet */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Fleet</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Scalable fleet for events of any size — from a single VIP transfer to a 200-guest wedding shuttle operation.
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold">Vehicle</th>
                                    <th className="px-6 py-4 font-bold">Seats</th>
                                    <th className="px-6 py-4 font-bold">Best For</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {vehicles.map((v, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">{v.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{v.seats}</td>
                                        <td className="px-6 py-4 text-gray-600">{v.ideal}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center mt-6 text-sm text-gray-500">
                        Multiple units of each vehicle type available simultaneously.{' '}
                        <Link href="/fleet/" className="text-black font-bold hover:underline">View Full Fleet →</Link>
                    </p>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Handle Event Logistics</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
                        {features.map((f, i) => (
                            <div key={i} className="flex items-start gap-3 bg-gray-50 p-5 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium text-sm leading-relaxed">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Car className="w-4 h-4" /> Event Fleet
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/toyota-coaster/" className="text-gray-600 hover:text-black transition-colors">Toyota Coaster (25 seats)</Link></li>
                                <li><Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-black transition-colors">Toyota Hiace (11 seats)</Link></li>
                                <li><Link href="/fleet/mercedes-sprinter/" className="text-gray-600 hover:text-black transition-colors">Mercedes Sprinter (14 seats)</Link></li>
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black transition-colors">GMC Yukon (VIP groups)</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">All Vehicles →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> Event Venues
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black transition-colors">Riyadh Events Transport</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black transition-colors">Jeddah Events Transport</Link></li>
                                <li><Link href="/locations/riyadh/diplomatic-quarter/" className="text-gray-600 hover:text-black transition-colors">Diplomatic Quarter</Link></li>
                                <li><Link href="/locations/" className="text-black font-bold hover:underline">All Locations →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Users className="w-4 h-4" /> Related Services
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black transition-colors">VIP Chauffeur Service</Link></li>
                                <li><Link href="/services/corporate-travel/" className="text-gray-600 hover:text-black transition-colors">Corporate Travel</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black transition-colors">Private Driver (Daily)</Link></li>
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black transition-colors">Airport Transfers</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Transport Questions</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">Everything you need to know about organising event and wedding transport in Saudi Arabia.</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left hover:no-underline py-4">
                                    <h3 className="text-base font-bold text-gray-900 pr-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Plan Your Event Transport in Saudi Arabia
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Weddings, conferences, exhibitions, or Riyadh Season — let us handle all guest transport logistics so your event runs smoothly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20Event%20Transport%20in%20Saudi%20Arabia" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                WhatsApp Booking
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Event Quote
                            </Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        Also available:{' '}
                        <Link href="/services/vip-chauffeur/" className="text-gray-400 hover:text-white underline">VIP Chauffeur</Link>
                        {' · '}
                        <Link href="/services/private-driver/" className="text-gray-400 hover:text-white underline">Private Driver</Link>
                        {' · '}
                        <Link href="/services/corporate-travel/" className="text-gray-400 hover:text-white underline">Corporate Travel</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
