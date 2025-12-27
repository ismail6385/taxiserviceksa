import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Compass } from 'lucide-react';
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
    title: 'Taxi Service in AlUla | Hegra Tours & Airport Transfer Saudi Arabia',
    description: 'Taxi service in AlUla for Hegra UNESCO site tours and airport transfers. AlUla Airport to hotels. 4x4 vehicles for desert terrain. Fixed rates for heritage tours.',
    keywords: ['taxi service in AlUla', 'AlUla taxi', 'Hegra tours', 'AlUla Airport transfer', 'AlUla heritage tours'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ur/locations/alula/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/alula/',
            'ar': 'https://taxiserviceksa.com/ar/locations/alula/',
            'ur': 'https://taxiserviceksa.com/ur/locations/alula/',
            'x-default': 'https://taxiserviceksa.com/locations/alula/',
        }
    },
    openGraph: {
        title: 'Taxi Service in AlUla | Hegra Tours & Airport Transfer',
        description: 'Taxi service in AlUla operates for UNESCO heritage tours and airport transfers. 4x4 vehicles for desert sites. Book online.',
        url: 'https://taxiserviceksa.com/locations/alula/',
        type: 'website',
    },
};

export default function AlUlaPage() {
    const services = [
        { name: 'AlUla Airport Transfer', description: 'Transfers from AlUla International Airport (ULH) to AlUla hotels and resorts', icon: Plane },
        { name: 'Hegra UNESCO Tours', description: 'Transport to Hegra archaeological site (Madain Saleh) with 4x4 desert vehicles', icon: Compass },
        { name: 'AlUla Heritage Circuit', description: 'Tours to Dadan, Jabal Ikmah, and Elephant Rock heritage sites', icon: MapPin },
        { name: 'AlUla to Khaybar Route', description: 'Intercity travel between AlUla and Khaybar Fort (150 km)', icon: Car },
    ];

    const features = [
        'Drivers with AlUla heritage site knowledge',
        '4x4 vehicles for desert terrain access',
        'Airport pickup with flight tracking',
        'Flexible tour schedules for photography',
        'Fixed fares with no hidden charges',
        'English and Arabic speaking guides',
    ];

    const alulaImages = [
        '/alula-hegra-tombs.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];

    const faqs = [
        {
            question: "How far is AlUla Airport from Hegra archaeological site by taxi?",
            answer: "AlUla International Airport (ULH) is located 30 kilometers from Hegra (Madain Saleh) UNESCO site. Taxi travel time is 25-35 minutes. Airport transfers include meet-and-greet service and luggage assistance for photography equipment."
        },
        {
            question: "Do you provide 4x4 vehicles for AlUla desert tours?",
            answer: "Taxi fleet includes 4x4 SUVs (GMC Yukon, Toyota Land Cruiser) suitable for AlUla desert terrain. Vehicles access Elephant Rock, Jabal Ikmah, and remote heritage sites. Drivers know safe desert routes."
        },
        {
            question: "Is taxi service available for multi-day AlUla heritage tours?",
            answer: "Multi-day taxi service is available for AlUla heritage circuit tours. Service includes daily pickups from hotels, flexible schedules for sunrise/sunset photography, and rest stops. Rates are quoted per day or per tour."
        },
        {
            question: "How much does a taxi cost from AlUla Airport to hotels?",
            answer: "Taxi rates from AlUla Airport to AlUla city hotels start from SAR 100. Pricing depends on vehicle type (sedan, 4x4 SUV) and resort location. Fares are fixed with no surge charges."
        },
        {
            question: "Can I book a taxi from AlUla to Khaybar Fort for historical tours?",
            answer: "Intercity taxi service is available from AlUla to Khaybar Fort (150 km). Travel time is 2-3 hours. Rates start from SAR 350. Service includes stops at viewpoints and historical markers along the route."
        },
        {
            question: "Do your drivers speak English for international tourists?",
            answer: "Drivers speak English and Arabic. Many drivers have heritage site knowledge and can provide basic historical context for Hegra, Dadan, and other AlUla attractions. Professional tour guides are available upon request."
        }
    ];

    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Taxi Service AlUla",
        "image": "https://taxiserviceksa.com/alula-hegra-tombs.webp",
        "email": "taxiserviceksa9988@gmail.com",
        "url": "https://taxiserviceksa.com/locations/alula",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "AlUla",
            "addressCountry": "SA"
        },
        "priceRange": "$$",
        "areaServed": "AlUla",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "850"
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
                images={alulaImages}
                h1Text="Taxi Service in AlUla: Hegra Tours and Heritage Site Transport"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        AlUla Taxi Service
                    </span>
                }
                subtitle="UNESCO Heritage Transport"
                location="4x4 Desert Tours Available"
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">AlUla Heritage Transport</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Specialized taxi service for UNESCO heritage tours and desert exploration in AlUla.
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our AlUla Taxi Service</h2>
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
                            Share Your AlUla Experience
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Help fellow travelers by sharing your experience or asking questions about AlUla transport and tours.
                        </p>
                    </div>

                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="AlUla" />
                        <QuestionsDisplay location="AlUla" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReviewForm locationName="AlUla" />
                        <QuestionForm locationName="AlUla" />
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Heritage Tours',
                        description: 'UNESCO heritage site tours with 4x4 desert vehicles and English-speaking guides.',
                        href: '/services/heritage-tours',
                        icon: Compass
                    },
                    {
                        name: 'Airport Transfers',
                        description: 'Professional airport transfer service from AlUla International Airport.',
                        href: '/services/airport-transfers',
                        icon: Plane
                    },
                ]}
                title="Services Available in AlUla"
                description="Professional taxi services with licensed drivers for heritage tourism."
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your AlUla Heritage Tour
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Explore UNESCO heritage sites with professional transport and 4x4 desert vehicles.
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
