import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Building2, GraduationCap } from 'lucide-react';
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
    title: 'Taxi Service in Dhahran | Aramco & Ithra Transfers',
    description: 'Reliable taxi service in Dhahran. Transfers to Saudi Aramco, KFUPM, and Ithra Center. Professional drivers for business & city travel.',
    keywords: ['taxi service in Dhahran', 'Dhahran taxi', 'Aramco taxi', 'Ithra Center transport', 'KFUPM taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/dhahran/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/dhahran/',
            'ar': 'https://taxiserviceksa.com/ar/locations/dhahran/',
            'ur': 'https://taxiserviceksa.com/ur/locations/dhahran/',
            'x-default': 'https://taxiserviceksa.com/locations/dhahran/',
        }
    },
    openGraph: {
        title: 'Taxi Service in Dhahran | Aramco & Ithra Transfers',
        description: 'Reliable taxi service in Dhahran. Transfers to Saudi Aramco, KFUPM, and Ithra Center. Professional drivers for business & city travel.',
        url: 'https://taxiserviceksa.com/locations/dhahran/',
        type: 'website',
    },
};

export default function DhahranPage() {
    const services = [
        { name: 'Saudi Aramco Transfers', description: 'Secure transport to Saudi Aramco residential camp and office zones (permit required areas subject to clearance)', icon: Building2 },
        { name: 'Ithra Center Visits', description: 'Comfortable rides to King Abdulaziz Center for World Culture for events and exhibitions', icon: Star },
        { name: 'University Transport', description: 'Reliable taxi service to KFUPM (King Fahd University of Petroleum and Minerals)', icon: GraduationCap },
        { name: 'Airport Transfers', description: 'Transfers to King Fahd International Airport (DMM) - 45 mins away', icon: Plane },
    ];

    const features = [
        'Drivers familiar with Aramco & KFUPM gates',
        'Business-class vehicles (Sedan & SUV)',
        '24/7 availability for shift work',
        'Airport meet & greet service',
        'Fixed rates, no metering surprises',
        'English speaking drivers',
    ];

    const dhahranImages = [
        '/hero-slide-1.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];

    const faqs = [
        {
            question: "Do you offer rides to the Ithra Center?",
            answer: "Yes, we provide comfortable rides to the King Abdulaziz Center for World Culture (Ithra) for visitors and events. Depending on event traffic, we can drop you at the main gate."
        },
        {
            question: "Can I book a taxi to KFUPM?",
            answer: "Yes, we offer reliable transport to King Fahd University of Petroleum and Minerals (KFUPM) for students, faculty, and visitors. Please have your university ID or visitor pass ready for gate security."
        },
        {
            question: "How far is Dhahran from Dammam Airport?",
            answer: "It is approximately a 45-minute drive (50 km) from King Fahd International Airport (DMM) to Dhahran. We recommend booking your ride in advance to track your flight."
        },
        {
            question: "Do you serve the Saudi Aramco camp area?",
            answer: "We provide drop-offs and pickups for authorized areas near Saudi Aramco facilities. For entry inside the residential camp, a specific pass is required for the vehicle, so we typically drop off at the visitor gates."
        },
        {
            question: "Is there a taxi service to the Mall of Dhahran?",
            answer: "Yes, we offer convenient rides to and from the Mall of Dhahran. We can schedule a pickup for when you finish your shopping."
        },
        {
            question: "Can I book a corporate taxi account?",
            answer: "Yes, we offer corporate accounts for businesses in Dhahran requiring frequent travel for employees, with monthly billing options available."
        }
    ];



    return (
        <div className="bg-gray-50 min-h-screen">

            <JsonLdFAQ faqs={faqs} />

            {/* Hero Section */}
            <Hero
                images={dhahranImages}
                h1Text="Taxi Service in Dhahran: Aramco and Ithra Center Transfers"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Dhahran Taxi Service
                    </span>
                }
                subtitle="Corporate & Cultural Hub"
                location="Aramco • KFUPM • Ithra"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                        <Link href="/booking">
                            Book Dhahran Taxi
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            Email Us
                        </a>
                    </Button>
                </div>
            </Hero>

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Dhahran Transport Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional transport for the energy sector, academic institutions, and cultural centers.
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Dhahran Taxi Service</h2>
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

            {/* User-Generated Content Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                            Community Insights
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Share Your Dhahran Experience
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Help fellow travelers by sharing your experience or asking questions about Dhahran transport.
                        </p>
                    </div>

                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="Dhahran" />
                        <QuestionsDisplay location="Dhahran" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReviewForm locationName="Dhahran" />
                        <QuestionForm locationName="Dhahran" />
                    </div>
                </div>
            </section>

            {/* Internal Linking Silo */}
            <section className="py-12 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Explore Nearby Locations</h3>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/locations/dammam/" className="text-gray-600 hover:text-primary capitalize transition-colors">
                            Taxi Service in Dammam
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/locations/al-khobar/" className="text-gray-600 hover:text-primary capitalize transition-colors">
                            Taxi Service in Al Khobar
                        </Link>
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Airport Transfers',
                        description: 'Professional airport transfer service from King Fahd International Airport (DMM).',
                        href: '/services/airport-transfers',
                        icon: Plane
                    },
                    {
                        name: 'Corporate Travel',
                        description: 'Reliable transport for business meetings and corporate events in Dhahran.',
                        href: '/services/corporate-travel',
                        icon: Building2
                    },
                ]}
                title="Services Available in Dhahran"
                description="Professional taxi services with licensed drivers for corporate and academic transport."
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Dhahran Taxi Now
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Professional transport for Saudi Aramco, KFUPM, and Ithra Center visits.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Book Your Ride
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email Us
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
