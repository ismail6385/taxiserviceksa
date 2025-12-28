import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Building2, Clock, CheckCircle2, Car, Users, Shield, MapPin, ArrowRight, Briefcase, DollarSign } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Corporate Travel Service Saudi Arabia | Executive Taxi with Driver',
    description: 'Professional corporate travel service for business executives in Saudi Arabia. Monthly billing, priority booking, and executive vehicles with licensed drivers. Riyadh and Jeddah focus.',
    keywords: ['corporate taxi Saudi Arabia', 'executive transport Riyadh', 'business travel Jeddah', 'corporate car service KSA'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/corporate-travel/',
    },
    openGraph: {
        title: 'Corporate Travel Service Saudi Arabia | Executive Taxi with Driver',
        description: 'Professional corporate travel service for business executives. Monthly billing, priority booking, executive vehicles.',
        url: 'https://taxiserviceksa.com/services/corporate-travel/',
        type: 'website',
    },
};

export default function CorporateTravelPage() {
    const businessHubs = [
        {
            name: 'Riyadh Business Districts',
            description: 'Capital city corporate transport. King Abdullah Financial District, Diplomatic Quarter, and major business centers.',
            routes: ['Airport → KAFD', 'Hotels → Business Districts', 'Conference Centers'],
            link: '/locations/riyadh',
            icon: Building2
        },
        {
            name: 'Jeddah Corporate Areas',
            description: 'Commercial hub transport. Corniche business district, King Road offices, and corporate headquarters.',
            routes: ['Airport → Corporate HQ', 'Hotels → Meeting Venues', 'Port → Business Centers'],
            link: '/locations/jeddah',
            icon: Building2
        },
    ];

    const features = [
        'Executive vehicles (GMC Yukon, Toyota Camry)',
        'Professional drivers in business attire',
        'Monthly billing for corporate accounts',
        'Priority booking for urgent trips',
        'Dedicated account manager',
        'Invoice with trip details for expense reports',
        'Flexible cancellation policy',
        'Conference and event transport',
        'Multi-city business trip coordination',
        'English-speaking drivers',
    ];

    const services = [
        {
            name: 'Airport Transfers',
            description: 'Executive airport pickup and drop-off for business travelers. Meet-and-greet service with name sign.',
            price: 'From SAR 150'
        },
        {
            name: 'Meeting Transport',
            description: 'Point-to-point transport between offices, hotels, and meeting venues. Punctual service guaranteed.',
            price: 'From SAR 80'
        },
        {
            name: 'Conference Transport',
            description: 'Multi-day conference transport with dedicated vehicles. Flexible scheduling for event attendees.',
            price: 'Custom Quote'
        },
        {
            name: 'Intercity Business Travel',
            description: 'Riyadh to Jeddah business corridor (950km). Comfortable long-distance executive transport.',
            price: 'From SAR 1,200'
        },
    ];

    const faqs = [
        {
            question: "Do you offer monthly billing for corporate accounts?",
            answer: "Yes. Monthly billing is available for corporate accounts with minimum 10 trips per month. Invoice includes trip details (date, time, route, passenger name) for expense reporting. Payment terms: Net 30 days. Account setup requires company registration documents and authorized signatory details."
        },
        {
            question: "Can we book executive transport for conferences and events?",
            answer: "Yes. Conference transport service includes dedicated vehicles for multi-day events, flexible scheduling for attendees, and priority booking. Advance booking (2-4 weeks) recommended for large conferences. Custom packages available for 50+ attendees."
        },
        {
            question: "Do drivers wear business attire for corporate transport?",
            answer: "Yes. All drivers for corporate transport wear business attire (white shirt, black trousers). Drivers are trained in professional etiquette, punctuality, and discretion. English-speaking drivers available for international executives."
        },
        {
            question: "What is the cancellation policy for corporate bookings?",
            answer: "Flexible cancellation policy for corporate accounts: Free cancellation up to 2 hours before pickup time. Cancellations within 2 hours incur 50% charge. No-shows incur full charge. Emergency cancellations (flight delays, meeting changes) are handled case-by-case."
        },
        {
            question: "Can we book transport for Riyadh to Jeddah business trips?",
            answer: "Yes. Riyadh to Jeddah business corridor (950km, 9-10 hours) is available with executive vehicles (GMC Yukon). Service includes rest stops, refreshments, and flexible departure times. Overnight stays can be arranged for driver. Price from SAR 1,200."
        },
        {
            question: "Do you provide dedicated account managers for corporate clients?",
            answer: "Yes. Corporate accounts with 20+ trips per month receive dedicated account manager. Account manager handles booking coordination, invoice queries, and service customization. Direct email and phone contact provided."
        },
        {
            question: "Can we get trip reports for expense reimbursement?",
            answer: "Yes. Monthly invoice includes detailed trip reports: date, time, pickup location, drop-off location, passenger name, distance, and fare. Reports are formatted for corporate expense systems. Custom report formats available upon request."
        },
        {
            question: "Is priority booking available for urgent business trips?",
            answer: "Yes. Corporate account holders receive priority booking for urgent trips (same-day or next-day). Priority booking guarantees vehicle availability within 2 hours (subject to fleet capacity). Emergency contact number provided for account holders."
        }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Corporate Travel Service Saudi Arabia",

        "serviceType": "Corporate Transport",
        "areaServed": [
            { "@type": "City", "name": "Riyadh" },
            { "@type": "City", "name": "Jeddah" }
        ],
        "description": "Professional corporate travel service for business executives with monthly billing, priority booking, and executive vehicles.",
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "SAR",
            "lowPrice": "80",
            "highPrice": "1200",
            "priceValidUntil": "2025-12-31"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-1.webp')] bg-cover bg-center"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                            Corporate Travel Service
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Executive Transport<br />
                            <span className="text-white">For Business Professionals</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                            Professional corporate travel service with licensed drivers. Monthly billing, priority booking, and executive vehicles for Riyadh and Jeddah business districts.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/booking?service=corporate-travel">
                                <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                    Request Corporate Account
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <a href="mailto:taxiserviceksa9988@gmail.com">
                                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
                                    Email for Quote
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Hubs Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Business Districts Covered</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Executive transport for Riyadh and Jeddah corporate areas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {businessHubs.map((hub, index) => (
                            <Link key={index} href={hub.link} className="group">
                                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border-2 border-gray-200 hover:border-primary h-full">
                                    <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
                                        <hub.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                                        {hub.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{hub.description}</p>
                                    <div className="space-y-2">
                                        <div className="text-sm font-bold text-gray-900 mb-2">Common Routes:</div>
                                        {hub.routes.map((route, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                                <span>{route}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Corporate Transport Services</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <div className="pt-4 border-t border-gray-200">
                                    <span className="text-emerald-600 font-bold">{service.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Corporate Account Benefits</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium leading-relaxed text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left hover:no-underline py-4">
                                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Setup Your Corporate Account
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Monthly billing, priority booking, and dedicated account management for your business transport needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking?service=corporate-travel">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Request Account
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Details
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
