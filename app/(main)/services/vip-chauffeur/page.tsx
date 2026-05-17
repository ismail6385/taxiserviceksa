import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    CheckCircle2, ArrowRight, Star, Shield, Crown, Globe,
    Car, Users, Clock, MapPin, Phone
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'VIP Chauffeur Service Saudi Arabia | Royal & Diplomatic Transport | Taxi Service KSA',
    description: 'Premium VIP chauffeur service for royal guests, diplomats, and elite visitors in Saudi Arabia. Discreet, licensed drivers in Riyadh and Jeddah. Luxury SUVs and sedans available 24/7.',
    keywords: [
        'VIP chauffeur Saudi Arabia',
        'chauffeur for royal guests Riyadh',
        'private transport for diplomats Riyadh',
        'chauffeur for embassy guests',
        'Saudi elite transport services',
        'VIP family chauffeur Saudi Arabia',
        'luxury chauffeur Riyadh',
        'chauffeur for luxury hotels Riyadh',
        'Saudi Arabia luxury road trips',
        'executive chauffeur Saudi',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/vip-chauffeur/',
    },
    openGraph: {
        title: 'VIP Chauffeur Service Saudi Arabia | Royal & Diplomatic Transport | Taxi Service KSA',
        description: 'Premium VIP chauffeur for royal guests, diplomats, hotel guests, and elite visitors across Riyadh and Jeddah. Discreet, licensed, 24/7.',
        url: 'https://taxiserviceksa.com/services/vip-chauffeur/',
        type: 'website',
    },
};

export default function VIPChauffeurPage() {
    const clientTypes = [
        {
            title: 'Royal & Government Guests',
            description: 'Discreet, protocol-aware transport for royal family guests, government officials, and state visitors. Fully licensed, backgroundchecked drivers trained in formal etiquette.',
            icon: Crown,
            examples: ['Royal residence transfers', 'Palace to ministry routes', 'State function arrivals'],
        },
        {
            title: 'Diplomats & Embassy Personnel',
            description: 'Reliable chauffeur service for ambassadors, consulate staff, and foreign ministry delegations visiting Riyadh\'s Diplomatic Quarter and beyond.',
            icon: Shield,
            examples: ['Embassy to MOFA transfers', 'Diplomatic Quarter transport', 'Conference & summit arrivals'],
        },
        {
            title: 'CEOs & Senior Executives',
            description: 'Executive airport pickup and city transport for C-suite travelers, board members, and business delegations arriving in Riyadh or Jeddah.',
            icon: Star,
            examples: ['KAFD executive transfers', 'King Fahd Road business corridor', 'Hotel to boardroom transport'],
        },
        {
            title: 'Luxury Hotel Concierge',
            description: 'Preferred transport partner for guests of five-star hotels in Riyadh and Jeddah. Seamless hotel-to-destination service on demand.',
            icon: MapPin,
            examples: ['Four Seasons Riyadh transfers', 'Ritz-Carlton pickups', 'Mandarin Oriental Jeddah'],
        },
        {
            title: 'International VIP Visitors',
            description: 'Curated chauffeur experience for international visitors attending Saudi events, sporting fixtures, and cultural tours including Riyadh Season and Formula E.',
            icon: Globe,
            examples: ['Riyadh Season event transport', 'Formula E & Diriyah transfers', 'AlUla luxury road trips'],
        },
        {
            title: 'VIP Family Transport',
            description: 'Private, spacious chauffeur-driven vehicles for high-profile families requiring comfort, privacy, and flexibility across multi-stop city itineraries.',
            icon: Users,
            examples: ['Shopping tour with driver', 'Multi-city family travel', 'Airport to villa transfers'],
        },
    ];

    const features = [
        'Ministry of Transport licensed drivers',
        'Background-checked and vetted chauffeurs',
        'Business & formal attire as standard',
        'Strict discretion and confidentiality',
        'English, Arabic, and Urdu speaking drivers',
        'GMC Yukon, Mercedes S-Class, Cadillac Escalade fleet',
        'Pre-trip route planning included',
        '24/7 availability including holidays',
        'Door-to-door service across KSA',
        'Female-friendly drivers available',
    ];

    const vehicles = [
        { name: 'GMC Yukon XL', class: 'Luxury SUV', seats: '6–7', ideal: 'Groups, families, diplomats' },
        { name: 'Cadillac Escalade', class: 'Ultra-Luxury SUV', seats: '6–7', ideal: 'Royal guests, CEOs' },
        { name: 'Mercedes-Benz S-Class', class: 'Executive Sedan', seats: '3', ideal: 'Solo executives, VIP arrivals' },
        { name: 'Genesis G80', class: 'Luxury Sedan', seats: '3', ideal: 'Business executives, hotel guests' },
        { name: 'Hyundai Staria VIP', class: 'Luxury MPV', seats: '7', ideal: 'VIP families, delegations' },
    ];

    const faqs = [
        {
            question: 'Do you provide chauffeur service for royal and government guests in Riyadh?',
            answer: 'Yes. We provide discreet, protocol-aware chauffeur service for royal family guests and government officials in Riyadh. All drivers are Ministry of Transport licensed, background checked, and trained in formal etiquette. Vehicle options include GMC Yukon XL and Cadillac Escalade for multi-passenger delegations.',
        },
        {
            question: 'Can you arrange private transport for diplomats and embassy staff in Riyadh?',
            answer: 'Yes. We regularly serve embassy personnel and diplomatic missions in Riyadh\'s Diplomatic Quarter. Our drivers understand protocol requirements and operate with full discretion. Advance booking is recommended for recurring embassy transport needs. Monthly account billing is available for embassies and consulates.',
        },
        {
            question: 'What vehicles are used for VIP chauffeur service in Saudi Arabia?',
            answer: 'VIP clients are assigned Cadillac Escalade, GMC Yukon XL, Mercedes-Benz S-Class, or Hyundai Staria VIP depending on group size and preference. All vehicles are late-model, regularly maintained, and kept to the highest cleanliness standards. Vehicle choice can be specified at the time of booking.',
        },
        {
            question: 'Is a female-friendly chauffeur available in Riyadh or Jeddah?',
            answer: 'Yes. Female-friendly chauffeur service is available. Female passengers traveling alone or in family groups can request a dedicated driver. All our drivers are professionally trained and respectful. This service is available across Riyadh, Jeddah, Makkah, and Madinah.',
        },
        {
            question: 'Do your drivers speak English for international VIP guests?',
            answer: 'Yes. All VIP chauffeurs speak English and Arabic fluently. Many also speak Urdu for South Asian delegations. Drivers assigned to VIP clients are specifically selected for communication skills, local knowledge, and professional presentation.',
        },
        {
            question: 'Can I book a VIP chauffeur for a full-day or multi-day itinerary in Saudi Arabia?',
            answer: 'Yes. Full-day (8–10 hours) and multi-day VIP chauffeur packages are available. The driver remains exclusively assigned to you throughout the booking period. Common itineraries include AlUla luxury road trips, Riyadh city tours, and Jeddah to Makkah private transfers with waiting.',
        },
        {
            question: 'How do I book VIP chauffeur service for a Saudi luxury hotel?',
            answer: 'VIP hotel chauffeur bookings can be made via WhatsApp or email with 24–48 hours notice for standard requests. For large delegations or multi-day bookings, 72 hours advance notice is recommended. We coordinate directly with hotel concierge teams at Four Seasons Riyadh, Ritz-Carlton, and Mandarin Oriental Jeddah.',
        },
        {
            question: 'Is VIP chauffeur service available for Riyadh Season and major events?',
            answer: 'Yes. We provide dedicated event chauffeur packages for Riyadh Season, Formula E, Diriyah Biennale, and major conferences. Advance booking during peak event periods (October–February) is strongly recommended. Multi-night packages with a dedicated assigned driver are available for event delegations.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'VIP Chauffeur Service Saudi Arabia',
        serviceType: 'VIP Chauffeur & Luxury Transport',
        provider: {
            '@type': 'Organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
        },
        areaServed: [
            { '@type': 'City', name: 'Riyadh' },
            { '@type': 'City', name: 'Jeddah' },
            { '@type': 'City', name: 'Makkah' },
            { '@type': 'City', name: 'Madinah' },
            { '@type': 'AdministrativeArea', name: 'Saudi Arabia' },
        ],
        description: 'Premium VIP chauffeur service for royal guests, diplomats, CEOs, and elite visitors across Saudi Arabia. Discreet, licensed drivers with luxury vehicles.',
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            availabilityStarts: '00:00',
            availabilityEnds: '23:59',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'VIP Chauffeur Services',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Royal & Government Guest Transport' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diplomatic Chauffeur Service' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Executive Airport Pickup' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Luxury Hotel Transfer' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VIP Full-Day Chauffeur' } },
            ],
        },
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vip-chauffeur-schema"
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
                        VIP & Luxury Chauffeur
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Private VIP Chauffeur Service<br />
                        <span className="text-white/80">Saudi Arabia</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Discreet, licensed chauffeurs for royal guests, diplomats, executives, and elite visitors across Riyadh, Jeddah, Makkah, and beyond. Luxury fleet. 24/7 availability.
                    </p>

                    {/* TL;DR block for AEO */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-left mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Crown className="w-4 h-4 text-yellow-400" /> VIP Chauffeur — Quick Facts
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">Fleet:</strong> GMC Yukon, Cadillac Escalade, Mercedes S-Class</li>
                            <li><strong className="text-white">Languages:</strong> English, Arabic, Urdu</li>
                            <li><strong className="text-white">Availability:</strong> 24/7 including weekends & holidays</li>
                            <li><strong className="text-white">Coverage:</strong> Riyadh, Jeddah, Makkah, Madinah, AlUla</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20VIP%20Chauffeur%20Service" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                Book VIP Chauffeur
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
                                Email for Custom Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Client Types */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From royal protocol transport to luxury tourism — our VIP chauffeur service covers every high-profile travel need in the Kingdom.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clientTypes.map((type, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                    <type.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                                <p className="text-gray-600 mb-5 leading-relaxed">{type.description}</p>
                                <ul className="space-y-2">
                                    {type.examples.map((ex, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                                            {ex}
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">VIP Fleet Selection</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Choose from Saudi Arabia's most trusted luxury vehicles. All chauffeur-driven, all available 24/7.
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold">Vehicle</th>
                                    <th className="px-6 py-4 font-bold">Class</th>
                                    <th className="px-6 py-4 font-bold">Seats</th>
                                    <th className="px-6 py-4 font-bold">Ideal For</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {vehicles.map((v, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">{v.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{v.class}</td>
                                        <td className="px-6 py-4 text-gray-600">{v.seats}</td>
                                        <td className="px-6 py-4 text-gray-600">{v.ideal}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center mt-6 text-gray-500 text-sm">
                        View full fleet specifications →{' '}
                        <Link href="/fleet/" className="text-black font-bold hover:underline">Explore All Vehicles</Link>
                    </p>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our VIP Chauffeur Service</h2>
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
                                <Car className="w-4 h-4" /> VIP Fleet
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/cadillac-escalade/" className="text-gray-600 hover:text-black transition-colors">Cadillac Escalade</Link></li>
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black transition-colors">GMC Yukon XL</Link></li>
                                <li><Link href="/fleet/mercedes-s-class/" className="text-gray-600 hover:text-black transition-colors">Mercedes-Benz S-Class</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">All Vehicles →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> Key Locations
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black transition-colors">VIP Chauffeur Riyadh</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black transition-colors">VIP Chauffeur Jeddah</Link></li>
                                <li><Link href="/locations/makkah/" className="text-gray-600 hover:text-black transition-colors">VIP Transport Makkah</Link></li>
                                <li><Link href="/locations/" className="text-black font-bold hover:underline">All Locations →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Shield className="w-4 h-4" /> Related Services
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/corporate-travel/" className="text-gray-600 hover:text-black transition-colors">Corporate Travel</Link></li>
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black transition-colors">Airport Transfers</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black transition-colors">Private Driver (Hourly)</Link></li>
                                <li><Link href="/services/tourism-transport/" className="text-gray-600 hover:text-black transition-colors">Tourism Transport</Link></li>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">VIP Chauffeur Questions</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">Everything you need to know about booking private VIP transport in Saudi Arabia.</p>
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
                        Book Your Private VIP Chauffeur in Saudi Arabia
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Discreet, punctual, and professional. Reserve your luxury chauffeur for royal guests, diplomats, executives, or elite family travel across the Kingdom.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20VIP%20Chauffeur%20Service" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                WhatsApp Booking
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Quote
                            </Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        Also available:{' '}
                        <Link href="/services/corporate-travel/" className="text-gray-400 hover:text-white underline">Corporate Travel</Link>
                        {' · '}
                        <Link href="/services/airport-transfers/" className="text-gray-400 hover:text-white underline">Airport Transfers</Link>
                        {' · '}
                        <Link href="/services/tourism-transport/" className="text-gray-400 hover:text-white underline">Tourism Transport</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
