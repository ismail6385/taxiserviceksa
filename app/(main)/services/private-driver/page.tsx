import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
    CheckCircle2, ArrowRight, Clock, Car, Users,
    MapPin, Calendar, Shield, Star
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Private Driver by Hour, Day & Month Saudi Arabia | Riyadh & Jeddah | Taxi Service KSA',
    description: 'Hire a private driver in Riyadh or Jeddah by the hour, full day, week, or month. Luxury SUV with driver. English-speaking chauffeur for shopping, meetings, tours, and family use.',
    keywords: [
        'private driver for full day Riyadh',
        'daily chauffeur booking Riyadh',
        'weekly private driver Saudi',
        'monthly chauffeur service Riyadh',
        'private driver Saudi Arabia',
        'driver for shopping Riyadh',
        'luxury GMC with driver Riyadh',
        'private SUV driver Riyadh',
        'Riyadh luxury van with driver',
        'chauffeur for shopping malls Riyadh',
        'driver for shopping tourists Jeddah',
        'private chauffeur for shopping tours',
        'Saudi Arabia private driver hire',
        'hire driver by hour Saudi Arabia',
        'door to door chauffeur Saudi',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/private-driver/',
    },
    openGraph: {
        title: 'Private Driver by Hour, Day & Month Saudi Arabia | Taxi Service KSA',
        description: 'Hire a private driver in Riyadh or Jeddah by the hour, day, week, or month. English-speaking chauffeur with luxury SUV for shopping, meetings, family trips, and tours.',
        url: 'https://taxiserviceksa.com/services/private-driver/',
        type: 'website',
    },
};

export default function PrivateDriverPage() {
    const packages = [
        {
            title: 'Hourly Private Driver',
            duration: '3–8 hours',
            icon: Clock,
            description: 'Book a private driver for a fixed number of hours. Ideal for airport pickups with waiting, multiple errands, or a city outing with flexible stops.',
            useCases: ['Airport pickup + hotel drop', 'Hospital or clinic visit', 'Multiple meeting transfers', 'Evening dining outing'],
        },
        {
            title: 'Full Day Private Driver',
            duration: '8–12 hours',
            icon: Star,
            description: 'A dedicated driver exclusively assigned to you for a full day. Perfect for shopping tours, sightseeing, business meetings across the city, or family outings.',
            useCases: ['Mall hopping in Riyadh', 'City sightseeing tour', 'Multi-meeting business day', 'Family day trip to Taif'],
        },
        {
            title: 'Weekly Private Driver',
            duration: '5–7 days',
            icon: Calendar,
            description: 'Consistent private driver for your week-long visit or business trip. Same driver each day ensures familiarity with your schedule and preferences.',
            useCases: ['Business delegation visits', 'Tourist week itinerary', 'Medical tourism trips', 'Conference week transport'],
        },
        {
            title: 'Monthly Private Driver',
            duration: '30 days',
            icon: Shield,
            description: 'Dedicated monthly driver for residents, long-stay visitors, or companies needing reliable daily transport without managing a vehicle.',
            useCases: ['Expat daily commute', 'Executive monthly account', 'Corporate fleet supplement', 'GCC visitor long stay'],
        },
    ];

    const useCaseDetails = [
        {
            title: 'Shopping Driver — Riyadh & Jeddah',
            description: 'Driver takes you to the mall, waits in the parking, assists with bags, and transfers you between shopping destinations. No parking hassle, no time pressure.',
            locations: ['Mall of Arabia, Riyadh', 'Riyadh Park', 'Al Nakheel Mall', 'Balad Souk, Jeddah'],
            icon: MapPin,
        },
        {
            title: 'Business & Meetings Driver',
            description: 'Professional driver for multi-stop business days in Riyadh or Jeddah. Driver waits during meetings and adjusts schedule in real time.',
            locations: ['KAFD Business District', 'King Fahd Road offices', 'Olaya Street corporate area', 'Jeddah business corridor'],
            icon: Shield,
        },
        {
            title: 'Family Private Driver',
            description: 'Comfortable GMC Yukon or Hyundai Staria with a courteous driver for family use — school runs, hospital visits, outings, and airport trips.',
            locations: ['Hospital & clinic visits', 'School pickup/drop', 'Airport transfers', 'Weekend family outings'],
            icon: Users,
        },
        {
            title: 'Medical Tourism Driver',
            description: 'Reliable daily driver for patients and families visiting Saudi Arabia for medical treatment. Flexible scheduling around appointments and recovery.',
            locations: ['King Faisal Specialist Hospital', 'Saudi German Hospital', 'Dr. Sulaiman Al Habib clinics', 'Medical City Riyadh'],
            icon: Star,
        },
    ];

    const vehicles = [
        { name: 'Toyota Camry', type: 'Executive Sedan', seats: 4, ideal: 'Solo / couple, business use' },
        { name: 'GMC Yukon XL', type: 'Luxury SUV', seats: 7, ideal: 'Families, groups, shopping' },
        { name: 'Hyundai Staria VIP', type: 'Luxury MPV', seats: 7, ideal: 'VIP families, medical trips' },
        { name: 'Toyota Hiace', type: 'Minivan', seats: 11, ideal: 'Large groups, bulk shopping' },
        { name: 'Cadillac Escalade', type: 'Ultra-Luxury SUV', seats: 7, ideal: 'VIP / executive use' },
    ];

    const features = [
        'Same driver assigned for multi-day bookings',
        'English, Arabic, and Urdu speaking',
        'Ministry of Transport licensed',
        'Female-friendly drivers on request',
        'Flexible scheduling — adjust in real time',
        'Door-to-door across Riyadh & Jeddah',
        'No surge pricing — fixed daily rates',
        'Luggage and shopping assistance',
        'Child seats available on request',
        '24/7 availability',
    ];

    const faqs = [
        {
            question: 'Can I hire a private driver in Riyadh for a full day?',
            answer: 'Yes. Full-day private driver hire in Riyadh covers 8–12 hours and includes unlimited stops within the city. A GMC Yukon, Toyota Camry, or Hyundai Staria is assigned based on group size. The driver picks you up from your hotel or home and remains exclusively available to you throughout the day. Advance booking of 24 hours is recommended.',
        },
        {
            question: 'How much does it cost to hire a private driver in Saudi Arabia?',
            answer: 'Private driver rates vary by vehicle type, duration, and number of stops. Pricing is fixed (no surge) and provided via WhatsApp quote. Half-day (4–5 hours), full day (8–12 hours), weekly, and monthly packages are all available. Contact us via WhatsApp or email with your dates and requirements for a custom quote.',
        },
        {
            question: 'Can I book a private driver for shopping in Riyadh?',
            answer: 'Yes. Shopping driver service is available for Riyadh\'s major malls including Mall of Arabia, Riyadh Park, Al Nakheel, and Al Zal Souk. The driver waits at each location, assists with luggage, and transfers you between destinations. Full-day and half-day shopping packages are available. Jeddah shopping driver service is also available.',
        },
        {
            question: 'Is a weekly or monthly private driver available in Saudi Arabia?',
            answer: 'Yes. Weekly (5–7 days) and monthly (30 days) private driver packages are available. The same driver is assigned for consistency. Weekly packages are popular for business delegations and tourists. Monthly packages suit expats, long-stay visitors, and companies requiring regular executive transport. Monthly billing with invoice is available.',
        },
        {
            question: 'What is a luxury GMC with driver in Riyadh?',
            answer: 'A "luxury GMC with driver" refers to a GMC Yukon XL or Denali chauffeur service in Riyadh. The GMC Yukon seats 6–7 passengers with ample luggage space, making it the most popular choice for families, shopping trips, and group transfers. The driver is professionally dressed, licensed, and available for full-day or multi-day hire.',
        },
        {
            question: 'Can women hire a private driver in Saudi Arabia?',
            answer: 'Yes. Female-friendly private driver service is available. Female passengers — whether traveling solo, with family, or for medical appointments — can request a driver specifically. All our drivers are professional, respectful, and trained to assist female clients. This service is available in Riyadh, Jeddah, Makkah, and Madinah.',
        },
        {
            question: 'Is a private driver available for medical tourism in Saudi Arabia?',
            answer: 'Yes. Medical tourism driver packages are available for patients and their families visiting hospitals and clinics in Riyadh or Jeddah. The driver is scheduled around appointment times and adjusts for delays or extended consultations. Common hospitals served include King Faisal Specialist, Saudi German Hospital, and Dr. Sulaiman Al Habib clinics.',
        },
        {
            question: 'Can I hire a private van with driver in Riyadh?',
            answer: 'Yes. Toyota Hiace (11 seats) and Mercedes Sprinter (14 seats) are available with a driver for group private hire in Riyadh. These are ideal for corporate groups, tourist delegations, wedding guests, or large family outings. Half-day, full-day, and multi-day hire are all available. Luggage space is ample for shopping trips.',
        },
        {
            question: 'How do I book a private driver in Saudi Arabia?',
            answer: 'Booking is done via WhatsApp (+966 552 202 642) or email (taxiserviceksa9988@gmail.com). Provide your dates, number of passengers, vehicle preference, and planned destinations. For full-day or multi-day hire, 24–48 hours advance booking is recommended. No Saudi phone number or local account is required — international bookings are accepted.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Private Driver Service Saudi Arabia — Hourly, Daily, Weekly, Monthly',
        serviceType: 'Private Driver Hire',
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
        description: 'Hire a private driver in Riyadh or Jeddah by the hour, full day, week, or month. English-speaking chauffeur with luxury vehicles for shopping, business, family, and medical trips.',
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Private Driver Packages',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hourly Private Driver Riyadh' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Day Private Driver Saudi Arabia' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Weekly Private Driver KSA' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monthly Chauffeur Service Riyadh' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopping Driver Riyadh & Jeddah' } },
            ],
        },
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="private-driver-schema"
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
                        Private Driver Hire
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Hire a Private Driver<br />
                        <span className="text-white/80">by Hour, Day or Month in Saudi Arabia</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Your own dedicated driver in Riyadh or Jeddah — for shopping, business meetings, family outings, or a full tourist itinerary. Fixed rates. English-speaking. Luxury vehicles.
                    </p>

                    {/* AEO Quick Facts */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-left mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2">
                            <Car className="w-4 h-4 text-emerald-400" /> Private Driver — Quick Facts
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">Packages:</strong> Hourly, Half-Day, Full Day, Weekly, Monthly</li>
                            <li><strong className="text-white">Fleet:</strong> Toyota Camry, GMC Yukon, Hiace, Escalade</li>
                            <li><strong className="text-white">Languages:</strong> English, Arabic, Urdu</li>
                            <li><strong className="text-white">Booking:</strong> WhatsApp or Email — 24h advance</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20want%20to%20hire%20a%20Private%20Driver%20in%20Saudi%20Arabia" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                Hire Private Driver
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
                                Email for Custom Rate
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Private Driver Packages</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From a 3-hour booking to a full month — flexible hire packages to match your exact schedule.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {packages.map((pkg, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                    <pkg.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.title}</h3>
                                <p className="text-sm text-emerald-600 font-semibold mb-4">{pkg.duration}</p>
                                <p className="text-gray-600 mb-5 leading-relaxed text-sm">{pkg.description}</p>
                                <ul className="space-y-2">
                                    {pkg.useCases.map((u, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                                            {u}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Private Driver Use Cases</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Whatever your reason for being in Saudi Arabia — we have a private driver package for it.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {useCaseDetails.map((u, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                    <u.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{u.title}</h3>
                                <p className="text-gray-600 mb-5 leading-relaxed">{u.description}</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {u.locations.map((l, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                            <MapPin className="w-3 h-3 flex-shrink-0" />
                                            {l}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicle Table */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Vehicle</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            All private driver packages include a professional driver. Select the right vehicle for your group size and purpose.
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold">Vehicle</th>
                                    <th className="px-6 py-4 font-bold">Type</th>
                                    <th className="px-6 py-4 font-bold">Seats</th>
                                    <th className="px-6 py-4 font-bold">Best For</th>
                                    <th className="px-6 py-4 font-bold">Details</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {vehicles.map((v, i) => (
                                    <tr key={i} className="hover:bg-white transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">{v.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{v.type}</td>
                                        <td className="px-6 py-4 text-gray-600">{v.seats}</td>
                                        <td className="px-6 py-4 text-gray-600">{v.ideal}</td>
                                        <td className="px-6 py-4">
                                            <Link href={`/fleet/${v.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}/`} className="text-black font-bold text-sm hover:underline">
                                                View →
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's Included in Every Booking</h2>
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
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Car className="w-4 h-4" /> Popular Vehicles
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black transition-colors">GMC Yukon with Driver</Link></li>
                                <li><Link href="/fleet/toyota-camry/" className="text-gray-600 hover:text-black transition-colors">Toyota Camry with Driver</Link></li>
                                <li><Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-black transition-colors">Toyota Hiace with Driver</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">All Vehicles →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> Key Cities
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/riyadh/" className="text-gray-600 hover:text-black transition-colors">Private Driver Riyadh</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black transition-colors">Private Driver Jeddah</Link></li>
                                <li><Link href="/locations/makkah/" className="text-gray-600 hover:text-black transition-colors">Private Driver Makkah</Link></li>
                                <li><Link href="/locations/" className="text-black font-bold hover:underline">All Cities →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Shield className="w-4 h-4" /> Related Services
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-black transition-colors">VIP Chauffeur Service</Link></li>
                                <li><Link href="/services/tourism-transport/" className="text-gray-600 hover:text-black transition-colors">Tourism Transport</Link></li>
                                <li><Link href="/services/corporate-travel/" className="text-gray-600 hover:text-black transition-colors">Corporate Travel</Link></li>
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black transition-colors">Airport Transfers</Link></li>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Private Driver Questions</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">Common questions about hiring a private driver in Saudi Arabia.</p>
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
                        Hire Your Private Driver in Saudi Arabia Today
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        By the hour, full day, week, or month — your personal driver awaits in Riyadh and Jeddah. Fixed rates, luxury fleet, English-speaking.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20want%20to%20hire%20a%20Private%20Driver%20in%20Saudi%20Arabia" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                WhatsApp Booking
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Rate Card
                            </Button>
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        Also available:{' '}
                        <Link href="/services/vip-chauffeur/" className="text-gray-400 hover:text-white underline">VIP Chauffeur</Link>
                        {' · '}
                        <Link href="/services/tourism-transport/" className="text-gray-400 hover:text-white underline">Tourism Transport</Link>
                        {' · '}
                        <Link href="/services/corporate-travel/" className="text-gray-400 hover:text-white underline">Corporate Travel</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
