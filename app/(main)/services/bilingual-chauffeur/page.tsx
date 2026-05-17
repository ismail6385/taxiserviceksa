import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    CheckCircle2, ArrowRight, Globe, MessageCircle,
    Users, Shield, Car, MapPin, Star
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'English-Speaking Driver Saudi Arabia | Bilingual Chauffeur Riyadh & Jeddah | Taxi Service KSA',
    description: 'English and Arabic speaking private driver in Saudi Arabia. Bilingual chauffeur for foreign visitors, expats, and female travelers in Riyadh and Jeddah. Licensed, professional, 24/7.',
    keywords: [
        'English speaking driver Saudi Arabia',
        'bilingual chauffeur Saudi Arabia',
        'Arabic and English driver Riyadh',
        'Saudi bilingual chauffeur service',
        'Saudi driver for foreigners',
        'driver for Americans in Saudi Arabia',
        'female friendly chauffeur Saudi',
        'English speaking chauffeur Riyadh',
        'private driver for expats Saudi Arabia',
        'foreign visitor driver Saudi Arabia',
        'English driver Jeddah',
        'bilingual taxi Saudi Arabia',
        'chauffeur for international guests Saudi',
        'driver who speaks English in Riyadh',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/bilingual-chauffeur/',
    },
    openGraph: {
        title: 'English-Speaking Driver Saudi Arabia | Bilingual Chauffeur | Taxi Service KSA',
        description: 'Hire an English and Arabic speaking private driver in Saudi Arabia. Professional bilingual chauffeur for foreign visitors, expats, and female travelers across Riyadh and Jeddah.',
        url: 'https://taxiserviceksa.com/services/bilingual-chauffeur/',
        type: 'website',
    },
};

export default function BilingualChauffeurPage() {
    const languages = [
        {
            lang: 'English',
            flag: '🇬🇧',
            detail: 'All drivers communicate confidently in English. Ideal for American, British, European, and international visitors who need clear communication throughout their journey.',
        },
        {
            lang: 'Arabic',
            flag: '🇸🇦',
            detail: 'Native Arabic speakers across our entire fleet. Local knowledge combined with professional service for Saudi and Arab-speaking clients.',
        },
        {
            lang: 'Urdu',
            flag: '🇵🇰',
            detail: 'Many of our drivers also speak fluent Urdu, serving the large Pakistani and South Asian community in Saudi Arabia as well as Urdu-speaking pilgrims.',
        },
    ];

    const clientGroups = [
        {
            title: 'International Business Visitors',
            description: 'Foreign executives and delegations arriving in Riyadh or Jeddah for meetings and conferences. English communication throughout the journey — from airport to boardroom.',
            icon: Shield,
            scenarios: ['RUH airport pickup to KAFD', 'Hotel to business district', 'Multi-day meeting transport'],
        },
        {
            title: 'Expats & Long-Stay Residents',
            description: 'Expatriates living and working in Saudi Arabia who need a trusted bilingual driver for daily commutes, family outings, shopping, and airport trips.',
            icon: Star,
            scenarios: ['Daily school/work runs', 'Weekend family outings', 'Airport drop for flights'],
        },
        {
            title: 'Female Travelers & Families',
            description: 'Female passengers traveling solo or with family can request a female-friendly driver. All drivers are professionally trained, respectful, and background-checked.',
            icon: Users,
            scenarios: ['Solo female airport transfers', 'Family shopping trips', 'Hospital & clinic visits'],
        },
        {
            title: 'Tourists & Foreign Visitors',
            description: 'International tourists — including Americans, Europeans, and GCC visitors — who need an English-speaking guide-driver for city tours, sightseeing, and shopping.',
            icon: Globe,
            scenarios: ['Riyadh sightseeing tours', 'Jeddah Al-Balad tours', 'Desert day trips'],
        },
        {
            title: 'Medical Tourists',
            description: 'Patients and accompanying family members visiting hospitals in Riyadh or Jeddah who need clear, reliable communication with their driver throughout treatment visits.',
            icon: Car,
            scenarios: ['Hospital pickup & waiting', 'Pharmacy & recovery trips', 'Multi-day treatment transport'],
        },
        {
            title: 'GCC & Arab Tourists',
            description: 'Visitors from UAE, Kuwait, Bahrain, Qatar, and Oman who prefer Arabic-speaking drivers with deep local knowledge of Saudi cities.',
            icon: MapPin,
            scenarios: ['UAE tourist city tours', 'Gulf family trips', 'Shopping & restaurant runs'],
        },
    ];

    const features = [
        'All drivers speak English and Arabic',
        'Many drivers also speak Urdu',
        'Professional communication training',
        'Local area knowledge — streets, landmarks, hospitals',
        'Female-friendly drivers on request',
        'Ministry of Transport licensed',
        'Business & formal attire available',
        'WhatsApp communication before & during trip',
        '24/7 availability in Riyadh and Jeddah',
        'Booking in English — no Arabic required',
    ];

    const faqs = [
        {
            question: 'Are there English-speaking drivers available in Saudi Arabia?',
            answer: 'Yes. All Taxi Service KSA drivers speak English and Arabic. English-speaking drivers are available 24/7 in Riyadh, Jeddah, Makkah, and Madinah. Booking is also done in English via WhatsApp or email — you do not need to speak Arabic or have a Saudi phone number to book.',
        },
        {
            question: 'Is there a bilingual Arabic and English driver service in Riyadh?',
            answer: 'Yes. All our Riyadh drivers are bilingual in Arabic and English. Many also speak Urdu. Bilingual drivers are valuable for international visitors who need local area knowledge combined with clear English communication — especially for navigating business districts, hospitals, and tourist sites.',
        },
        {
            question: 'Can I book a female-friendly chauffeur in Saudi Arabia?',
            answer: 'Yes. Female-friendly driver service is available across Riyadh, Jeddah, Makkah, and Madinah. Female passengers traveling alone or in family groups can request a driver specifically assigned for female clients. All drivers are professional, respectful, and background-checked. This service is available 24/7.',
        },
        {
            question: 'Is there a private driver for foreigners and expats in Saudi Arabia?',
            answer: 'Yes. We regularly serve expatriates, foreign residents, and international visitors across Saudi Arabia. Our bilingual drivers understand the needs of non-Saudi residents — from navigating unfamiliar areas to communicating with local establishments on your behalf. Daily, weekly, and monthly driver packages are available for expats.',
        },
        {
            question: 'Do you have drivers for American or Western tourists in Saudi Arabia?',
            answer: 'Yes. We serve American, British, European, Australian, and other Western tourists frequently. Our English-speaking drivers are familiar with the questions and needs of Western visitors — including common concerns about local customs, attractions, halal dining recommendations, and prayer times. Booking is accepted internationally before your arrival.',
        },
        {
            question: 'Do any drivers speak Urdu in Saudi Arabia?',
            answer: 'Yes. Many of our drivers speak Urdu fluently in addition to English and Arabic. This is particularly useful for Pakistani, Indian, and Bangladeshi visitors — including Umrah pilgrims and business travelers from South Asia. Specify Urdu-speaking driver preference when booking via WhatsApp.',
        },
        {
            question: 'How do I book an English-speaking driver in Saudi Arabia from abroad?',
            answer: 'Booking is done via WhatsApp (+966 552 202 642) or email (info@taxiserviceksa.com) entirely in English. No Saudi SIM card or local number is required. Provide your arrival date, flight number if applicable, pickup location, and destination. We confirm via WhatsApp and send driver details before your trip.',
        },
        {
            question: 'Is there a driver for international tourists who do not speak Arabic?',
            answer: 'Yes. Our bilingual chauffeur service is specifically designed for tourists who do not speak Arabic. Drivers assist with navigation, local tips, landmark identification, and basic translation at hotels and restaurants. For full-day city tours, drivers can serve as informal guides in English throughout the itinerary.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'English-Speaking & Bilingual Chauffeur Saudi Arabia',
        serviceType: 'Bilingual Private Driver Service',
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
        description: 'English and Arabic speaking private driver service in Saudi Arabia. Bilingual chauffeur for foreign visitors, expats, female travelers, and international tourists in Riyadh and Jeddah.',
        availableLanguage: [
            { '@type': 'Language', name: 'English' },
            { '@type': 'Language', name: 'Arabic' },
            { '@type': 'Language', name: 'Urdu' },
        ],
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
        },
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="bilingual-chauffeur-schema"
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
                        Bilingual Chauffeur Service
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        English-Speaking Driver<br />
                        <span className="text-white/80">in Saudi Arabia</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Professional bilingual chauffeur service in English and Arabic across Riyadh, Jeddah, Makkah, and Madinah. Ideal for foreign visitors, expats, female travelers, and international tourists.
                    </p>

                    {/* AEO Quick Facts */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-left mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Globe className="w-4 h-4 text-emerald-400" /> Bilingual Chauffeur — Quick Facts
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">Languages:</strong> English, Arabic, Urdu</li>
                            <li><strong className="text-white">Cities:</strong> Riyadh, Jeddah, Makkah, Madinah</li>
                            <li><strong className="text-white">Female-Friendly:</strong> Available on request, 24/7</li>
                            <li><strong className="text-white">Booking:</strong> English via WhatsApp — no Arabic needed</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20an%20English-speaking%20driver%20in%20Saudi%20Arabia" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                Book Bilingual Driver
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

            {/* Languages */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Languages Spoken by Our Drivers</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            No language barrier between you and your driver — communicate naturally throughout your journey.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {languages.map((l, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 text-center hover:border-black hover:shadow-xl transition-all">
                                <div className="text-5xl mb-4">{l.flag}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{l.lang}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{l.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Uses Our Bilingual Chauffeur Service</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From solo female travelers to international business delegations — our English-speaking drivers serve every type of foreign visitor in Saudi Arabia.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clientGroups.map((group, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                    <group.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{group.title}</h3>
                                <p className="text-gray-600 mb-5 leading-relaxed text-sm">{group.description}</p>
                                <ul className="space-y-2">
                                    {group.scenarios.map((s, i) => (
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
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Sets Our Bilingual Drivers Apart</h2>
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
                                <MapPin className="w-4 h-4" /> Cities Covered
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black transition-colors">English Driver Riyadh</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black transition-colors">English Driver Jeddah</Link></li>
                                <li><Link href="/locations/makkah/" className="text-gray-600 hover:text-black transition-colors">English Driver Makkah</Link></li>
                                <li><Link href="/locations/madinah/" className="text-gray-600 hover:text-black transition-colors">English Driver Madinah</Link></li>
                                <li><Link href="/locations/" className="text-black font-bold hover:underline">All Cities →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MessageCircle className="w-4 h-4" /> Popular Services
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/tourism-transport/" className="text-gray-600 hover:text-black transition-colors">Tourist Transport</Link></li>
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black transition-colors">Airport Transfers</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black transition-colors">Private Driver (Daily/Hourly)</Link></li>
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black transition-colors">VIP Chauffeur</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Car className="w-4 h-4" /> Popular Vehicles
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black transition-colors">GMC Yukon (Families & Groups)</Link></li>
                                <li><Link href="/fleet/toyota-camry/" className="text-gray-600 hover:text-black transition-colors">Toyota Camry (Executive)</Link></li>
                                <li><Link href="/fleet/hyundai-staria/" className="text-gray-600 hover:text-black transition-colors">Hyundai Staria (VIP MPV)</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">All Vehicles →</Link></li>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bilingual Driver Questions</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">Common questions from foreign visitors about English-speaking drivers in Saudi Arabia.</p>
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
                        Book an English-Speaking Driver in Saudi Arabia
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Communicate clearly with your driver from the moment you land. Bilingual chauffeur service available 24/7 across Riyadh, Jeddah, Makkah, and Madinah.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20an%20English-speaking%20driver%20in%20Saudi%20Arabia" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                WhatsApp Booking
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Details
                            </Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        Also available:{' '}
                        <Link href="/services/tourism-transport/" className="text-gray-400 hover:text-white underline">Tourism Transport</Link>
                        {' · '}
                        <Link href="/services/vip-chauffeur/" className="text-gray-400 hover:text-white underline">VIP Chauffeur</Link>
                        {' · '}
                        <Link href="/services/private-driver/" className="text-gray-400 hover:text-white underline">Private Driver</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
