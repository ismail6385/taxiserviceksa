import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Anchor } from 'lucide-react';
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
    title: 'Taxi Service in Yanbu | Airport Transfer & Industrial Port Transport',
    description: 'Taxi service in Yanbu operates 24/7 for airport transfers and industrial transport. Yanbu Airport to port and industrial city. Fixed rates for corporate travel.',
    keywords: ['taxi service in Yanbu', 'Yanbu taxi', 'Yanbu Airport transfer', 'Yanbu industrial transport', 'Yanbu port taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/locations/yanbu/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/yanbu/',
            'ar': 'https://taxiserviceksa.com/ar/locations/yanbu/',
            'ur': 'https://taxiserviceksa.com/ur/locations/yanbu/',
            'x-default': 'https://taxiserviceksa.com/locations/yanbu/',
        }
    },
    openGraph: {
        title: 'Taxi Service in Yanbu | Airport Transfer & Industrial Transport',
        description: 'Taxi service in Yanbu operates 24/7. Airport transfers and industrial city transport. Fixed rates. Book online.',
        url: 'https://taxiserviceksa.com/locations/yanbu/',
        type: 'website',
    },
};

export default function YanbuPage() {
    const services = [
        { name: 'Yanbu Airport Transfer', description: 'Transfers from Prince Abdul Mohsin bin Abdulaziz Airport (YNB) to Yanbu hotels', icon: Plane },
        { name: 'Industrial City Transport', description: 'Transport to Yanbu Industrial City, petrochemical facilities, and port areas', icon: Anchor },
        { name: 'Yanbu to Madinah Taxi', description: 'Intercity travel between Yanbu and Madinah (220 km, 2.5-3 hours)', icon: Car },
        { name: 'Red Sea Waterfront Tours', description: 'Transport to Yanbu Corniche, diving centers, and Red Sea beaches', icon: MapPin },
    ];

    const features = [
        'Licensed drivers with Yanbu route knowledge',
        'Airport pickup with flight tracking',
        'Industrial area access permits',
        '24/7 availability for shift workers',
        'Fixed fares with no surge pricing',
        'English and Arabic speaking staff',
    ];

    const yanbuImages = [
        '/hero-slide-1.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];

    const faqs = [
        {
            question: "How far is Yanbu Airport from Yanbu Industrial City by taxi?",
            answer: "Prince Abdul Mohsin bin Abdulaziz Airport (YNB) is located 10 kilometers from Yanbu Industrial City. Taxi travel time is 15-20 minutes. Airport transfers include meet-and-greet service and industrial area access coordination."
        },
        {
            question: "Is taxi service available 24/7 in Yanbu for industrial workers?",
            answer: "Taxi service in Yanbu operates 24 hours daily. Service includes transport for shift workers, petrochemical facility employees, and port personnel. Advance booking is available for regular shift schedules."
        },
        {
            question: "Do you provide taxis for corporate groups visiting Yanbu facilities?",
            answer: "Taxi fleet includes 7-seater SUVs and larger vans for corporate groups. Vehicles accommodate luggage and safety equipment. Corporate accounts are available for companies with regular Yanbu transport needs."
        },
        {
            question: "How much does a taxi cost from Yanbu Airport to hotels?",
            answer: "Taxi rates from Yanbu Airport to Yanbu city hotels start from SAR 60. Pricing depends on vehicle type (sedan, SUV, or van) and destination (city center, industrial area, or waterfront). Fares are fixed with no hidden charges."
        },
        {
            question: "Can I book a taxi from Yanbu to Madinah for pilgrimage?",
            answer: "Intercity taxi service is available from Yanbu to Madinah (220 km). Travel time is 2.5-3 hours. Rates start from SAR 400. Service includes rest stops and direct routes to Madinah hotels or Prophet's Mosque area."
        },
        {
            question: "Do you serve Yanbu port and petrochemical facilities?",
            answer: "Taxi service covers Yanbu Commercial Port, Yanbu Industrial City, and major petrochemical facilities. Drivers have industrial area access permits and know security checkpoint procedures. Advance notification is required for restricted zones."
        }
    ];

    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Taxi Service Yanbu",
        "image": "https://taxiserviceksa.com/hero-slide-1.webp",
        "email": "taxiserviceksa9988@gmail.com",
        "url": "https://taxiserviceksa.com/locations/yanbu",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Yanbu",
            "addressCountry": "SA"
        },
        "priceRange": "$$",
        "areaServed": "Yanbu",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "650"
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
                images={yanbuImages}
                h1Text="Taxi Service in Yanbu: Airport Transfers and Industrial Transport"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Yanbu Taxi Service
                    </span>
                }
                subtitle="Industrial & Red Sea Gateway"
                location="24/7 Airport & Port Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                        <Link href="/booking">
                            Book Taxi Now
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Yanbu Transport Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional taxi service for industrial workers, port personnel, and Red Sea travelers.
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Yanbu Taxi Service</h2>
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
                            Share Your Yanbu Experience
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Help fellow travelers by sharing your experience or asking questions about Yanbu transport and services.
                        </p>
                    </div>

                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="Yanbu" />
                        <QuestionsDisplay location="Yanbu" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReviewForm locationName="Yanbu" />
                        <QuestionForm locationName="Yanbu" />
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Airport Transfers',
                        description: 'Professional airport transfer service from Yanbu Airport.',
                        href: '/services/airport-transfers',
                        icon: Plane
                    },
                ]}
                title="Services Available in Yanbu"
                description="Professional taxi services with licensed drivers for industrial and port transport."
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Yanbu Taxi Now
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Professional transport for industrial workers, port access, and Red Sea travel.
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
