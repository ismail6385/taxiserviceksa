import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, Users, Car, MapPin, Clock, Shield, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Toyota Hiace with Driver Saudi Arabia | Group Van Hire Riyadh & Jeddah | Taxi Service KSA',
    description: 'Hire a Toyota Hiace with driver in Saudi Arabia. 11-seat private van for groups, families, pilgrim groups, and tourist parties in Riyadh, Jeddah, Makkah, and Madinah. Book now.',
    keywords: [
        'Toyota Hiace with driver Saudi Arabia',
        'Toyota Hiace hire Riyadh',
        'group van hire Saudi Arabia',
        'private van with driver Riyadh',
        'Hiace rental with driver Jeddah',
        'group transport Saudi Arabia',
        'van hire for pilgrims Saudi',
        '11 seater van with driver Saudi',
        'minivan with driver Riyadh',
        'group chauffeur Saudi Arabia',
        'Hiace for tourist groups Saudi',
        'private group transport Saudi',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/group-hiace-hire/',
    },
    openGraph: {
        title: 'Toyota Hiace with Driver Saudi Arabia | Group Van Hire | Taxi Service KSA',
        description: 'Hire a Toyota Hiace (11-seat) with driver in Riyadh, Jeddah, Makkah, and Madinah. Private group van for families, pilgrim groups, and tourist parties.',
        url: 'https://taxiserviceksa.com/services/group-hiace-hire/',
        type: 'website',
    },
};

export default function GroupHiaceHirePage() {
    const useCases = [
        { title: 'Family Groups', desc: 'Extended family trips, airport transfers for large families, and multi-day family itineraries with ample seating and luggage space.', icon: Users, examples: ['Airport arrivals (11 people)', 'Family Umrah groups', 'Multi-city family road trips'] },
        { title: 'Tourist & Sightseeing Groups', desc: "Groups of up to 11 tourists for city tours in Riyadh, Jeddah, AlUla, and Makkah. Driver waits at each site.", icon: Star, examples: ['Riyadh city tour groups', 'Jeddah Al-Balad tours', 'Desert day trip groups'] },
        { title: 'Pilgrim Groups', desc: 'Comfortable Hiace for Umrah and Hajj groups. Jeddah airport to Makkah, hotel-to-Haram transfers, and Ziyarat tours.', icon: Shield, examples: ['JED → Makkah group transfer', 'Makkah Ziyarat group tours', 'Madinah hotel to Haram'] },
        { title: 'Corporate & Conference Groups', desc: 'Team transfers for conferences, exhibitions, and corporate events. Professional driver, spacious seating for 11 colleagues.', icon: Car, examples: ['Conference centre shuttles', 'Airport to hotel group runs', 'Exhibition delegate transport'] },
        { title: 'School & Educational Groups', desc: 'Educational and school group transport across Riyadh and Jeddah. Available for field trips, museum visits, and campus transfers.', icon: Clock, examples: ['School field trips', 'University group travel', 'Institutional transfers'] },
        { title: 'Shopping & Outing Groups', desc: "Group shopping trips across Riyadh's malls. Driver waits at each location and assists with luggage. No parking hassle for the group.", icon: MapPin, examples: ['Mall of Arabia group trips', 'Souk and market tours', 'Multi-mall shopping day'] },
    ];

    const specs = [
        { label: 'Seats', value: '11 passengers' },
        { label: 'Luggage', value: '16 large bags (approx.)' },
        { label: 'A/C', value: 'Full cabin air conditioning' },
        { label: 'Availability', value: '24/7 across KSA' },
        { label: 'Driver', value: 'Professional, licensed chauffeur' },
        { label: 'Languages', value: 'English, Arabic, Urdu' },
    ];

    const features = [
        'Seats 11 passengers comfortably',
        'Large luggage capacity for groups',
        'Ministry of Transport licensed driver',
        'Full air conditioning throughout',
        'Same driver for multi-day bookings',
        'English & Arabic speaking',
        'Fixed group rates — no surge pricing',
        'Child seats available on request',
        '24/7 availability across KSA',
        'Also available: Toyota Coaster (25 seats)',
    ];

    const faqs = [
        {
            question: 'Can I hire a Toyota Hiace with driver in Saudi Arabia?',
            answer: 'Yes. Toyota Hiace (11-seat minivan) with a professional driver is available in Riyadh, Jeddah, Makkah, and Madinah. The driver is licensed, uniformed, and experienced with group transport. Hire options include airport transfers, full-day tours, multi-day bookings, and intercity routes.',
        },
        {
            question: 'How many people does the Toyota Hiace hold?',
            answer: 'The Toyota Hiace used for private hire seats 11 passengers with luggage. It has approximately 16 large bag capacity in the rear. It is ideal for families of 8–11, tourist groups, pilgrim groups, and corporate teams requiring group transport across Saudi Arabia.',
        },
        {
            question: 'Is a Toyota Hiace available for Umrah and pilgrim groups?',
            answer: 'Yes. Toyota Hiace is one of the most popular vehicles for Umrah pilgrim groups in Saudi Arabia. Common uses include Jeddah Airport (JED) to Makkah group transfer, hotel to Masjid al-Haram, and Makkah Ziyarat tours. The spacious cabin accommodates large families and groups with luggage comfortably.',
        },
        {
            question: 'Can I hire a group van with driver for sightseeing in Riyadh?',
            answer: 'Yes. Toyota Hiace with driver is available for full-day or half-day sightseeing tours in Riyadh for groups of up to 11. Common group tour stops include Diriyah, Edge of the World, National Museum, and Riyadh Season venues. The driver waits at each site.',
        },
        {
            question: 'What is the difference between Toyota Hiace and Toyota Coaster for group hire?',
            answer: 'Toyota Hiace seats 11 passengers and is ideal for small-to-mid groups, families, and pilgrim groups. Toyota Coaster seats 25 passengers and is suited for larger delegations, wedding guest shuttles, and corporate event groups. Both are available with professional drivers in Saudi Arabia.',
        },
        {
            question: 'Is a private van available for group airport transfers in Riyadh?',
            answer: 'Yes. Toyota Hiace is ideal for group airport transfers at King Khalid International Airport (RUH) in Riyadh. For groups of 8–11 arriving together, a single Hiace is more cost-effective and convenient than booking multiple cars. Driver meets the group at arrivals with a name sign.',
        },
        {
            question: 'Can I hire a Hiace with driver for multiple days in Saudi Arabia?',
            answer: 'Yes. Multi-day Toyota Hiace hire is available. The same driver is assigned for the full booking period, ensuring consistency and familiarity with your group\'s schedule. Multi-day rates are available for pilgrim groups, tourist itineraries, and corporate delegations.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Toyota Hiace Group Van Hire with Driver Saudi Arabia',
        serviceType: 'Group Transport — Private Van Hire',
        provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
        areaServed: [
            { '@type': 'City', name: 'Riyadh' },
            { '@type': 'City', name: 'Jeddah' },
            { '@type': 'City', name: 'Makkah' },
            { '@type': 'City', name: 'Madinah' },
            { '@type': 'AdministrativeArea', name: 'Saudi Arabia' },
        ],
        description: 'Hire a Toyota Hiace (11-seat minivan) with driver in Saudi Arabia. Private group transport for families, pilgrim groups, tourists, and corporate teams in Riyadh, Jeddah, Makkah, and Madinah.',
        offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script id="hiace-hire-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-1.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">Group Van Hire</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Toyota Hiace with Driver<br /><span className="text-white/80">Saudi Arabia</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Private 11-seat Toyota Hiace with professional driver for families, pilgrim groups, tourist parties, and corporate teams across Riyadh, Jeddah, Makkah, and Madinah.
                    </p>
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-left mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2"><Users className="w-4 h-4 text-emerald-400" /> Toyota Hiace — Quick Facts</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">Seats:</strong> 11 passengers</li>
                            <li><strong className="text-white">Luggage:</strong> ~16 large bags</li>
                            <li><strong className="text-white">Availability:</strong> 24/7 — Riyadh, Jeddah, Makkah, Madinah</li>
                            <li><strong className="text-white">Driver:</strong> Licensed, English & Arabic speaking</li>
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20want%20to%20hire%20a%20Toyota%20Hiace%20with%20driver%20in%20Saudi%20Arabia" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                Book Hiace Group Hire <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">Email for Group Rate</Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vehicle Specifications</h2></div>
                    <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-5">
                        {specs.map((s, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{s.label}</p>
                                <p className="text-base font-bold text-gray-900">{s.value}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-8 text-sm text-gray-500">
                        Need more seats? <Link href="/fleet/toyota-coaster/" className="text-black font-bold hover:underline">Toyota Coaster (25 seats) →</Link>
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Hires the Hiace</h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {useCases.map((u, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5"><u.icon className="w-7 h-7 text-white" /></div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{u.title}</h3>
                                <p className="text-gray-600 mb-5 text-sm leading-relaxed">{u.desc}</p>
                                <ul className="space-y-2">
                                    {u.examples.map((e, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />{e}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's Included</h2></div>
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

            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Car className="w-4 h-4" /> Fleet Options</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-black">Toyota Hiace (11 seats)</Link></li>
                                <li><Link href="/fleet/toyota-coaster/" className="text-gray-600 hover:text-black">Toyota Coaster (25 seats)</Link></li>
                                <li><Link href="/fleet/mercedes-sprinter/" className="text-gray-600 hover:text-black">Mercedes Sprinter (14 seats)</Link></li>
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black">GMC Yukon (7 seats)</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">All Vehicles →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> Key Cities</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black">Hiace Hire Riyadh</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black">Hiace Hire Jeddah</Link></li>
                                <li><Link href="/locations/makkah/" className="text-gray-600 hover:text-black">Hiace Hire Makkah</Link></li>
                                <li><Link href="/locations/madinah/" className="text-gray-600 hover:text-black">Hiace Hire Madinah</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-4 h-4" /> Related Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/umrah-transport/" className="text-gray-600 hover:text-black">Umrah Transport</Link></li>
                                <li><Link href="/services/tourism-transport/" className="text-gray-600 hover:text-black">Tourism Transport</Link></li>
                                <li><Link href="/services/event-transport/" className="text-gray-600 hover:text-black">Event Transport</Link></li>
                                <li><Link href="/services/private-driver/" className="text-gray-600 hover:text-black">Private Driver (Daily)</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hiace Group Hire Questions</h2>
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

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Book Toyota Hiace with Driver in Saudi Arabia</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Private 11-seat van with professional driver for families, pilgrim groups, tourists, and corporate teams. Available 24/7 across Riyadh, Jeddah, Makkah, and Madinah.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20want%20to%20hire%20a%20Toyota%20Hiace%20with%20driver%20in%20Saudi%20Arabia" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">WhatsApp Booking</Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">Email for Group Rate</Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
