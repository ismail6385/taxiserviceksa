import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Building2 } from 'lucide-react';
import Hero from '@/components/Hero';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import RelatedServices from '@/components/seo/RelatedServices';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';

export const metadata: Metadata = {
    title: 'Taxi Service in Riyadh | Airport Transfer & Corporate Transport KSA',
    description: 'Taxi service in Riyadh operates 24/7 for airport transfers and corporate travel. King Khalid Airport to Riyadh city center. Fixed rates for business transport.',
    keywords: ['taxi service in Riyadh', 'Riyadh taxi', 'King Khalid Airport transfer', 'Riyadh corporate transport', 'business taxi Riyadh'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/riyadh/',
    },
    openGraph: {
        title: 'Taxi Service in Riyadh | Airport Transfer & Corporate Transport',
        description: 'Taxi service in Riyadh operates 24/7. King Khalid Airport transfers and corporate travel. Fixed rates. Book online.',
        url: 'https://taxiserviceksa.com/locations/riyadh',
        type: 'website',
    },
};

export default function RiyadhPage() {
    const services = [
        { name: 'King Khalid Airport Transfer', description: 'Transfers from King Khalid International Airport (RUH) to Riyadh hotels and business districts', icon: Plane },
        { name: 'Corporate Transport Riyadh', description: 'Executive transport for business meetings, conferences, and corporate events', icon: Building2 },
        { name: 'Riyadh to Jeddah Taxi', description: 'Intercity travel between Riyadh and Jeddah (950 km, 9-10 hours)', icon: Car },
        { name: 'Riyadh City Tours', description: 'Transport to Kingdom Centre, Masmak Fort, and Diriyah UNESCO site', icon: MapPin },
    ];

    const features = [
        'Licensed drivers with Riyadh route knowledge',
        'Airport pickup with flight tracking',
        'Executive vehicles for corporate clients',
        '24/7 availability for business travel',
        'Fixed fares with no surge pricing',
        'English and Arabic speaking staff',
    ];

    const riyadhImages = [
        '/hero-slide-1.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];

    const faqs = [
        {
            question: "How far is King Khalid Airport from Riyadh city center by taxi?",
            answer: "King Khalid International Airport (RUH) is located 35 kilometers north of Riyadh city center. Taxi travel time is 30-45 minutes depending on traffic. Airport transfers include meet-and-greet service and flight tracking."
        },
        {
            question: "Is taxi service available 24/7 in Riyadh for corporate travel?",
            answer: "Taxi service in Riyadh operates 24 hours daily. Corporate transport includes executive vehicles (GMC Yukon, Mercedes) for business meetings and conferences. Advance booking is available via email or online form."
        },
        {
            question: "Do you provide taxis for business groups in Riyadh?",
            answer: "Taxi fleet includes 7-seater SUVs and larger vans for corporate groups. Vehicles accommodate luggage and presentation equipment. Corporate accounts are available for monthly billing."
        },
        {
            question: "How much does a taxi cost from King Khalid Airport to Riyadh hotels?",
            answer: "Taxi rates from King Khalid Airport to Riyadh city center start from SAR 120. Pricing depends on vehicle type (sedan, SUV, or van) and destination district. Fares are fixed with no hidden charges."
        },
        {
            question: "Can I book a taxi from Riyadh to Jeddah for business travel?",
            answer: "Intercity taxi service is available from Riyadh to Jeddah (950 km). Travel time is 9-10 hours. Rates start from SAR 1,200. Service includes rest stops and driver rotation for long-distance safety."
        },
        {
            question: "Do you serve Riyadh business districts like Olaya and King Abdullah Financial District?",
            answer: "Taxi service covers all Riyadh business districts including Olaya, King Abdullah Financial District (KAFD), and Diplomatic Quarter. Drivers know corporate building locations and peak traffic patterns."
        }
    ];

    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Taxi Service Riyadh",
        "image": "https://taxiserviceksa.com/hero-slide-1.webp",
        "email": "taxiserviceksa9988@gmail.com",
        "url": "https://taxiserviceksa.com/locations/riyadh",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Riyadh",
            "addressCountry": "SA"
        },
        "priceRange": "$$",
        "areaServed": "Riyadh",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "1200"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="location-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero Section */}
            <Hero
                images={riyadhImages}
                h1Text="Taxi Service in Riyadh: Airport Transfers and Corporate Transport"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Riyadh Taxi Service
                    </span>
                }
                subtitle="Professional Business Transport"
                location="24/7 Airport & Corporate Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Taxi Now
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Email Us
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Riyadh Transport Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional taxi service for business travelers and airport transfers in Saudi Arabia's capital city.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all border border-gray-200">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                                    <service.icon className="w-8 h-8 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Riyadh Taxi Service</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white p-6 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-xl border border-gray-200 px-6 shadow-sm">
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

            {/* Practical Information - Riyadh Business Focus */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                            Practical Information
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Essential Information for Riyadh Business Travelers
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real-world details to help you navigate Riyadh's business districts and maximize productivity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Business Districts */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Building2 className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Business Districts</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">King Abdullah Financial District (KAFD):</p>
                                    <p className="text-sm">35 km from airport (30-40 min). Major banks, financial institutions. Peak traffic: 7-9 AM, 4-6 PM.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Olaya District:</p>
                                    <p className="text-sm">25 km from airport (25-35 min). Kingdom Centre, Al Faisaliah Tower. Business hub with hotels and restaurants.</p>
                                </div>
                            </div>
                        </div>

                        {/* King Khalid Airport */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Plane className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">King Khalid Airport (RUH)</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Terminals:</p>
                                    <p className="text-sm">Terminal 1: Saudia domestic. Terminal 2: International. Terminal 3: Low-cost carriers. Terminal 5: Saudia international.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Meeting Point:</p>
                                    <p className="text-sm">Terminal 2: Arrivals hall, near Starbucks. Driver holds name sign. Free WiFi available.</p>
                                </div>
                            </div>
                        </div>

                        {/* Corporate Facilities */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Users className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Facilities</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Monthly Billing:</p>
                                    <p className="text-sm">Corporate accounts available. Invoice sent monthly. Payment via bank transfer. Minimum 10 trips/month.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Priority Booking:</p>
                                    <p className="text-sm">Corporate clients get priority during peak hours. Dedicated account manager. 24/7 booking support via email.</p>
                                </div>
                            </div>
                        </div>

                        {/* Meeting Venues */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <MapPin className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Meeting Venues</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Popular Venues:</p>
                                    <p className="text-sm">Riyadh International Convention Center (RICC), Four Seasons Hotel, Ritz-Carlton. Drivers know all major venues.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Timing Advice:</p>
                                    <p className="text-sm">Book taxi 60-90 min before meeting. Riyadh traffic unpredictable. Allow extra time for security checks at towers.</p>
                                </div>
                            </div>
                        </div>

                        {/* Business Accommodation */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Car className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hotels</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Olaya District Hotels:</p>
                                    <p className="text-sm">Ritz-Carlton, Four Seasons, Burj Rafal. Walking distance to Kingdom Centre. Taxi needed for KAFD (15 min).</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Diplomatic Quarter:</p>
                                    <p className="text-sm">Quieter area. 20 km from Olaya (20-30 min). Ideal for government meetings. Limited restaurants.</p>
                                </div>
                            </div>
                        </div>

                        {/* Transport Timing */}
                        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Clock className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Traffic & Timing</h3>
                            <div className="space-y-3 text-gray-600">
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Peak Hours:</p>
                                    <p className="text-sm">Morning: 7-9 AM (worst on King Fahd Road). Evening: 4-6 PM. Thursday evenings: Very busy (weekend starts).</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Best Times:</p>
                                    <p className="text-sm">Early morning (6-7 AM): Minimal traffic. Midday (12-2 PM): Moderate. Friday mornings: Empty roads (prayer time).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pro Tips Section */}
                    <div className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <CheckCircle2 className="w-8 h-8 text-white" />
                            Pro Tips for Business Travelers
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="font-bold text-white mb-2">🏢 KAFD Access:</p>
                                <p className="text-gray-300 text-sm">Security checkpoint at KAFD entrance. Have meeting invitation ready. Driver can't enter without authorization. Drop-off at gate.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">⏰ Meeting Timing:</p>
                                <p className="text-gray-300 text-sm">Riyadh meetings often start 15-30 min late (cultural norm). Don't stress if taxi arrives early. Use time for email/calls.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">📱 WiFi Strategy:</p>
                                <p className="text-gray-300 text-sm">Airport WiFi is free but slow. Buy local SIM (Mobily/STC) at airport. Data plans: SAR 100-200/month. Essential for maps/email.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">🚗 Vehicle Choice:</p>
                                <p className="text-gray-300 text-sm">GMC Yukon for client meetings (premium impression). Toyota Camry for solo travel (efficient). Both have WiFi hotspot on request.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">🌡️ Climate:</p>
                                <p className="text-gray-300 text-sm">Summer (May-Sep): 40-48°C. Wear light suit. Our vehicles maintain 20-22°C AC. Carry water bottle (we provide).</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">🕌 Prayer Times:</p>
                                <p className="text-gray-300 text-sm">Shops/offices close 15-20 min for each prayer (5 times daily). Plan meetings around prayer times. Friday: Jummah prayer 12-2 PM (everything closed).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* User-Generated Content Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                            Community Insights
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Share Your Business Travel Experience
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Help fellow business travelers by sharing your experience or asking questions about corporate transport in Riyadh.
                        </p>
                    </div>

                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="Riyadh" />
                        <QuestionsDisplay location="Riyadh" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReviewForm locationName="Riyadh" />
                        <QuestionForm locationName="Riyadh" />
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Corporate Travel',
                        description: 'Executive transport for business professionals with monthly billing and priority booking.',
                        href: '/services/corporate-travel',
                        icon: Building2
                    },
                    {
                        name: 'Airport Transfers',
                        description: 'Professional airport transfer service from King Khalid Airport with meet-and-greet.',
                        href: '/services/airport-transfers',
                        icon: Plane
                    },
                ]}
                title="Services Available in Riyadh"
                description="Professional taxi services with licensed drivers for business and airport transport."
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Riyadh Taxi Now
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Professional transport for business travelers and airport transfers in Saudi Arabia's capital.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                            <Link href="/booking">
                                Book Your Ride
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                            <a href="mailto:taxiserviceksa9988@gmail.com">
                                Email Us
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
