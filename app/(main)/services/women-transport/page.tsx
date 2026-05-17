import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    CheckCircle2, ArrowRight, Shield, MapPin, Car,
    Clock, Users, Star, Phone
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Private Transport for Women Saudi Arabia | Female-Friendly Chauffeur | Taxi Service KSA',
    description: 'Safe, private transport for women in Saudi Arabia. Female-friendly chauffeur service in Riyadh, Jeddah, Makkah, and Madinah. Licensed drivers, private vehicles, 24/7 availability.',
    keywords: [
        'female friendly chauffeur Saudi',
        'private transportation for women Saudi Arabia',
        'private transport for women Riyadh',
        'women chauffeur service Saudi Arabia',
        'safe taxi for women Saudi',
        'female driver Saudi Arabia',
        'private car for ladies Saudi',
        'women transport Riyadh',
        'family transport Saudi Arabia',
        'private driver for ladies Jeddah',
        'safe transport for female travelers Saudi',
        'chauffeur for women Saudi Arabia',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/women-transport/',
    },
    openGraph: {
        title: 'Private Transport for Women Saudi Arabia | Female-Friendly Chauffeur | Taxi Service KSA',
        description: 'Safe, private, and discreet transport for women across Saudi Arabia. Female-friendly chauffeurs available 24/7 in Riyadh, Jeddah, Makkah, and Madinah.',
        url: 'https://taxiserviceksa.com/services/women-transport/',
        type: 'website',
    },
};

export default function WomenTransportPage() {
    const useCases = [
        {
            title: 'Solo Female Travelers',
            description: 'Safe and private airport pickup, hotel transfers, and city transport for women traveling alone in Saudi Arabia. Driver assigned specifically for female passengers.',
            icon: Star,
            scenarios: ['Airport arrivals & departures', 'Hotel to city destinations', 'Late-night safe returns'],
        },
        {
            title: 'Family Transport',
            description: 'Comfortable GMC Yukon or Hyundai Staria for mothers and children. Multi-stop family itineraries — school runs, hospital visits, shopping, and outings.',
            icon: Users,
            scenarios: ['School pickup and drop-off', 'Hospital and clinic visits', 'Shopping and family outings'],
        },
        {
            title: 'Female Business Travelers',
            description: 'Professional executive transport for businesswomen attending meetings, conferences, and corporate events in Riyadh and Jeddah.',
            icon: Shield,
            scenarios: ['Airport to business district', 'Hotel to conference venues', 'Multi-day corporate trips'],
        },
        {
            title: 'Medical & Hospital Visits',
            description: 'Reliable, private transport for women attending hospitals, clinics, and specialist appointments. Driver waits and provides return journey.',
            icon: MapPin,
            scenarios: ['Hospital pickup and waiting', 'Clinic transfers', 'Pharmacy and recovery trips'],
        },
        {
            title: 'Shopping & Personal Errands',
            description: 'Dedicated driver for shopping trips to Riyadh and Jeddah malls. Driver assists with luggage and transfers between destinations at your pace.',
            icon: Car,
            scenarios: ['Mall of Arabia & Riyadh Park', 'Grocery and supermarket runs', 'Multi-stop personal errands'],
        },
        {
            title: 'Umrah & Religious Travel',
            description: 'Private, comfortable transport for women and families traveling for Umrah. Jeddah airport to Makkah, and Makkah to Madinah with full privacy.',
            icon: Clock,
            scenarios: ['JED airport to Makkah', 'Makkah to Madinah transfer', 'Ziyarat and holy site visits'],
        },
    ];

    const features = [
        'Professional, respectful drivers',
        'Ministry of Transport licensed',
        'Background-checked chauffeurs',
        'Private vehicles — no shared rides',
        'GMC Yukon & Staria for families',
        'Available 24/7 including late night',
        'Booking via WhatsApp — no app needed',
        'English, Arabic, and Urdu speaking',
        'Child seats available on request',
        'Door-to-door service across KSA',
    ];

    const faqs = [
        {
            question: 'Is there a female-friendly chauffeur service in Saudi Arabia?',
            answer: 'Yes. Taxi Service KSA provides female-friendly chauffeur service across Saudi Arabia. Drivers assigned to female passengers are professional, respectful, and background-checked. This service is available 24/7 in Riyadh, Jeddah, Makkah, and Madinah. You can specify female-friendly driver preference when booking via WhatsApp.',
        },
        {
            question: 'Is there private transport for women traveling alone in Saudi Arabia?',
            answer: 'Yes. Solo female travelers can book a private vehicle with a dedicated driver. Unlike ride-hailing apps that may assign any driver, our female-friendly service pre-assigns a trusted, professional driver for your journey. The vehicle is private — no other passengers. Service is available for airport transfers, hotel pickups, and city transport.',
        },
        {
            question: 'Is there safe taxi or transport for women in Riyadh?',
            answer: 'Yes. Private pre-booked transport in Riyadh is the safest option for women compared to street-hail or app-based taxis. Our drivers are licensed, uniformed, and professionally trained. Vehicles are GPS-tracked. All bookings include driver name, photo, and vehicle number shared in advance via WhatsApp for added safety.',
        },
        {
            question: 'Can a family with children book a private driver in Saudi Arabia?',
            answer: 'Yes. Family transport packages are available with GMC Yukon XL (7 seats) or Hyundai Staria VIP (7 seats) for mothers with children. Child seats for infants and toddlers are available on request at no extra charge. Multi-stop itineraries — including school runs, hospital visits, and shopping — are all supported.',
        },
        {
            question: 'Is there private transport for women in Jeddah?',
            answer: 'Yes. Female-friendly private transport is available in Jeddah for airport transfers, city tours, Al-Balad visits, hospital trips, and shopping. Drivers are experienced in Jeddah\'s major routes and landmarks. Booking is done via WhatsApp in English or Arabic.',
        },
        {
            question: 'Is there private transport for women for Umrah in Saudi Arabia?',
            answer: 'Yes. Female Umrah travelers and families can book private transport from Jeddah Airport (JED) to Makkah hotels, Makkah to Madinah, and for Ziyarat visits. Vehicles are spacious, air-conditioned, and driven by professional drivers. This service ensures privacy and comfort throughout the pilgrimage journey.',
        },
        {
            question: 'Can I book transport for women for late-night airport arrivals in Saudi Arabia?',
            answer: 'Yes. Female-friendly transport is available 24/7, including for late-night and early-morning airport arrivals. Driver details are shared in advance and the driver meets you at the arrivals terminal with a name sign. This is strongly recommended over using app-based taxis for late-night female travel.',
        },
        {
            question: 'Do you provide private transport for businesswomen in Riyadh?',
            answer: 'Yes. Executive transport for businesswomen is available in Riyadh. The service includes airport pickup, hotel to business district transfers, and multi-stop corporate itineraries. Vehicles are executive class (Toyota Camry, GMC Yukon) and drivers wear professional attire. Monthly billing is available for corporate accounts.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Private Transport for Women Saudi Arabia',
        serviceType: 'Female-Friendly Private Chauffeur',
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
        description: 'Safe, private, and discreet transport for women in Saudi Arabia. Female-friendly chauffeur service in Riyadh, Jeddah, Makkah, and Madinah for solo travelers, families, and businesswomen.',
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
        },
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="women-transport-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-2.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                        Women's Private Transport
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Safe Private Transport<br />
                        <span className="text-white/80">for Women in Saudi Arabia</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Professional, discreet, and private chauffeur service for women across Riyadh, Jeddah, Makkah, and Madinah. Solo travelers, families, businesswomen, and Umrah pilgrims — all welcome.
                    </p>

                    {/* AEO Quick Facts */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-left mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Shield className="w-4 h-4 text-emerald-400" /> Women's Transport — Quick Facts
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">Availability:</strong> 24/7 including late night</li>
                            <li><strong className="text-white">Cities:</strong> Riyadh, Jeddah, Makkah, Madinah</li>
                            <li><strong className="text-white">Driver Info:</strong> Shared in advance via WhatsApp</li>
                            <li><strong className="text-white">Vehicles:</strong> Private — no shared rides ever</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20private%20transport%20for%20women%20in%20Saudi%20Arabia" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                Book Private Transport
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
                                Email for Enquiry
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Safe and private transport for every journey — whether you're traveling alone, with family, for business, or for Umrah.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {useCases.map((u, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                    <u.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{u.title}</h3>
                                <p className="text-gray-600 mb-5 leading-relaxed text-sm">{u.description}</p>
                                <ul className="space-y-2">
                                    {u.scenarios.map((s, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Our Service Is Trusted</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
                        {features.map((f, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium text-sm leading-relaxed">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> Cities</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black">Women's Transport Riyadh</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black">Women's Transport Jeddah</Link></li>
                                <li><Link href="/locations/makkah/" className="text-gray-600 hover:text-black">Women's Transport Makkah</Link></li>
                                <li><Link href="/locations/madinah/" className="text-gray-600 hover:text-black">Women's Transport Madinah</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Car className="w-4 h-4" /> Fleet</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black">GMC Yukon (Families)</Link></li>
                                <li><Link href="/fleet/hyundai-staria/" className="text-gray-600 hover:text-black">Hyundai Staria VIP</Link></li>
                                <li><Link href="/fleet/toyota-camry/" className="text-gray-600 hover:text-black">Toyota Camry (Solo)</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">All Vehicles →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-4 h-4" /> Related Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/bilingual-chauffeur/" className="text-gray-600 hover:text-black">Bilingual Chauffeur</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black">Private Driver (Hourly/Daily)</Link></li>
                                <li><Link href="/services/umrah-transport/" className="text-gray-600 hover:text-black">Umrah Transport</Link></li>
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black">Airport Transfers</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Women's Transport Questions</h2>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
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
                        Book Safe Private Transport for Women in Saudi Arabia
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Solo travel, family outings, business trips, or Umrah — discreet and professional transport available 24/7 across the Kingdom.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20private%20transport%20for%20women%20in%20Saudi%20Arabia" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">WhatsApp Booking</Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">Email for Details</Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        <Link href="/services/bilingual-chauffeur/" className="text-gray-400 hover:text-white underline">Bilingual Chauffeur</Link>
                        {' · '}
                        <Link href="/services/private-driver/" className="text-gray-400 hover:text-white underline">Private Driver</Link>
                        {' · '}
                        <Link href="/services/umrah-transport/" className="text-gray-400 hover:text-white underline">Umrah Transport</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
