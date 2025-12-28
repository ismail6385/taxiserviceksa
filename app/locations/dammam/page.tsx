import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Building2, Palmtree } from 'lucide-react';
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
    title: 'Taxi Service in Dammam | Airport & City Travel',
    description: 'Book the best taxi service in Dammam. fast airport transfers, corniche rides & intercity travel to Khobar/Jubail. 24/7 availability.',
    keywords: ['taxi service in Dammam', 'Dammam taxi', 'King Fahd Airport taxi', 'Dammam Corniche transport', 'Jubail transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/dammam/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/dammam/',
            'ar': 'https://taxiserviceksa.com/ar/locations/dammam/',
            'ur': 'https://taxiserviceksa.com/ur/locations/dammam/',
            'x-default': 'https://taxiserviceksa.com/locations/dammam/',
        }
    },
    openGraph: {
        title: 'Taxi Service in Dammam | Airport & City Travel',
        description: 'Book the best taxi service in Dammam. fast airport transfers, corniche rides & intercity travel to Khobar/Jubail. 24/7 availability.',
        url: 'https://taxiserviceksa.com/locations/dammam/',
        type: 'website',
    },
};

export default function DammamPage() {
    const services = [
        { name: 'King Fahd Airport (DMM)', description: 'Fast and reliable transfers to/from King Fahd International Airport', icon: Plane },
        { name: 'Dammam Corniche', description: 'Leisure rides to the Dammam Corniche and Dolphin Village', icon: Palmtree },
        { name: 'Intercity to Jubail', description: 'Direct transfers to Jubail Industrial City for business travelers', icon: Building2 },
        { name: 'Half Moon Bay Trips', description: 'Day trips to Half Moon Bay for family recreation', icon: Car },
    ];

    const features = [
        'Drivers with Eastern Province expertise',
        '24/7 Airport pickup service',
        'Vehicles for families & groups',
        'Fixed fares to Jubail & Khobar',
        'Safe & Insured rides',
        'Online booking confirmation',
    ];

    const dammamImages = [
        '/hero-slide-1.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];

    const faqs = [
        {
            question: "Is airport pickup available at King Fahd Airport?",
            answer: "Yes, we offer 24/7 pickups from King Fahd International Airport (DMM). Our drivers track your flight and meet you at the terminal. Pre-book online for peace of mind."
        },
        {
            question: "Do you offer rides from Dammam to Al Khobar?",
            answer: "Yes, we provide frequent and affordable intercity taxi services between Dammam, Al Khobar, and Dhahran, connecting the tri-city area seamlessly."
        },
        {
            question: "What is the fastest way to get to Jubail from Dammam?",
            answer: "Our private taxi service is the fastest and most convenient way to travel from Dammam to Jubail (approx. 1 hour), avoiding the hassle of buses or shared rides."
        },
        {
            question: "Can I book a taxi for a day trip to Half Moon Bay?",
            answer: "Certainly! You can book a taxi for a relaxing day trip to Half Moon Bay. Our drivers can drop you off and pick you up at your specified time."
        },
        {
            question: "Do you offer corporate transport in Dammam?",
            answer: "Yes, we provide tailored corporate transport solutions for companies operating in Dammam's industrial sectors and for employee commuting."
        },
        {
            question: "How do I pay for my taxi in Dammam?",
            answer: "We offer flexible payment options including cash and secure online payments when you book through our website."
        }
    ];



    return (
        <div className="bg-gray-50 min-h-screen">

            <JsonLdFAQ faqs={faqs} />

            {/* Hero Section */}
            <Hero
                images={dammamImages}
                h1Text="Taxi Service in Dammam: Airport & City Transfers"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Dammam Taxi Service
                    </span>
                }
                subtitle="Eastern Province Metro Hub"
                location="Airport • Jubail • Corniche"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                        <Link href="/booking">
                            Book Dammam Taxi
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Dammam Transport Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Connecting Dammam to King Fahd Airport, Jubail, and the rest of the Eastern Province.
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Dammam Taxi Service</h2>
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
                            Share Your Dammam Experience
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Help fellow travelers by sharing your experience or asking questions about Dammam transport.
                        </p>
                    </div>

                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="Dammam" />
                        <QuestionsDisplay location="Dammam" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReviewForm locationName="Dammam" />
                        <QuestionForm locationName="Dammam" />
                    </div>
                </div>
            </section>

            {/* Internal Linking Silo */}
            <section className="py-12 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Explore Nearby Locations</h3>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/locations/dhahran/" className="text-gray-600 hover:text-primary capitalize transition-colors">
                            Taxi Service in Dhahran
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/locations/al-khobar/" className="text-gray-600 hover:text-primary capitalize transition-colors">
                            Taxi Service in Al Khobar
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/locations/riyadh/" className="text-gray-600 hover:text-primary capitalize transition-colors">
                            Taxi Service in Riyadh
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
                        name: 'Intercity Travel',
                        description: 'Fast transfers from Dammam to Jubail, Riyadh, and other cities.',
                        href: '/services/intercity',
                        icon: Car
                    },
                ]}
                title="Services Available in Dammam"
                description="Professional taxi services with experienced drivers for the entire Eastern Province."
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Dammam Taxi Now
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Reliable transport for airport transfers, Jubail trips, and city travel.
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
