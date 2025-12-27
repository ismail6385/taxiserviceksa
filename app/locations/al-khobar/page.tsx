import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Building2, ShoppingBag } from 'lucide-react';
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
    title: 'Taxi Service in Al Khobar | Corniche & Causeway Transfers',
    description: 'Best taxi service in Al Khobar for local travel & Causeway trips to Bahrain. Reliable, comfortable rides to Dammam Airport and Corniche.',
    keywords: ['taxi service in Al Khobar', 'Al Khobar taxi', 'Bahrain Causeway taxi', 'Khobar Corniche transport', 'Dammam Airport transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/al-khobar/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/al-khobar/',
            'ar': 'https://taxiserviceksa.com/ar/locations/al-khobar/',
            'ur': 'https://taxiserviceksa.com/ur/locations/al-khobar/',
            'x-default': 'https://taxiserviceksa.com/locations/al-khobar/',
        }
    },
    openGraph: {
        title: 'Taxi Service in Al Khobar | Corniche & Causeway Transfers',
        description: 'Best taxi service in Al Khobar for local travel & Causeway trips to Bahrain. Reliable, comfortable rides to Dammam Airport and Corniche.',
        url: 'https://taxiserviceksa.com/locations/al-khobar/',
        type: 'website',
    },
};

export default function AlKhobarPage() {
    const services = [
        { name: 'Bahrain Causeway Trips', description: 'Specialized transfers across King Fahd Causeway to Bahrain', icon: Car },
        { name: 'Khobar Corniche Rides', description: 'Relaxing rides to the beautiful Al Khobar Corniche and waterfront', icon: MapPin },
        { name: 'Shopping Mall Transports', description: 'Drop-offs at Al Rashid Mall and Mall of Dhahran', icon: ShoppingBag },
        { name: 'Airport Transfers', description: 'Reliable taxi to King Fahd International Airport (DMM)', icon: Plane },
    ];

    const features = [
        'Experienced Causeway drivers',
        'Luxury sedans for business travel',
        '24/7 Service for mall & dinners',
        'Fixed rates to Dammam Airport',
        'Clean & Smoke-free vehicles',
        'Easy online booking',
    ];

    const khobarImages = [
        '/hero-slide-1.webp',
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
    ];

    const faqs = [
        {
            question: "Do you go to Bahrain from Al Khobar?",
            answer: "Yes, we specialize in transfers across the King Fahd Causeway to Bahrain. Please ensure you have the necessary travel documents (passport, visa) ready for border control."
        },
        {
            question: "Can I book a taxi for shopping at Al Rashid Mall?",
            answer: "Absolutely. We can drop you off at Al Rashid Mall or Mall of Dhahran and pick you up when you're done via a scheduled booking."
        },
        {
            question: "How far is Dammam Airport from Al Khobar?",
            answer: "It takes about 45-60 minutes to reach King Fahd International Airport (DMM) from Al Khobar. We recommend booking in advance to ensure timely arrival."
        },
        {
            question: "Is there a taxi service to the Corniche?",
            answer: "Yes, enjoy a ride to the beautiful Al Khobar Corniche for a family outing. We provide safe and clean vehicles suitable for families."
        },
        {
            question: "Do you offer executive cars in Khobar?",
            answer: "Yes, we have a fleet of luxury sedans and SUVs (like GMC Yukon) for business executives attending meetings in the Eastern Province."
        },
        {
            question: "Can I pay by card?",
            answer: "We accept online payments during booking for your convenience. Cash is also accepted."
        }
    ];

    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Taxi Service Al Khobar",
        "image": "https://taxiserviceksa.com/hero-slide-3.webp",
        "email": "taxiserviceksa9988@gmail.com",
        "url": "https://taxiserviceksa.com/locations/al-khobar/",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Al Khobar",
            "addressCountry": "SA"
        },
        "priceRange": "$$",
        "areaServed": "Al Khobar",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "350"
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
                images={khobarImages}
                h1Text="Taxi Service in Al Khobar: Corniche and Causeway Transfers"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Al Khobar Taxi Service
                    </span>
                }
                subtitle="Business & Leisure Transport"
                location="Corniche • Bahrain • Malls"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                        <Link href="/booking">
                            Book Khobar Taxi
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Al Khobar Transport Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Connecting you to Bahrain, Dammam Airport, and the best shopping spots in the Eastern Province.
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Khobar Taxi Service</h2>
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
                            Share Your Khobar Experience
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Help fellow travelers by sharing your experience or asking questions about Al Khobar transport.
                        </p>
                    </div>

                    <div className="space-y-12 mb-12">
                        <ReviewsDisplay location="Al Khobar" />
                        <QuestionsDisplay location="Al Khobar" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ReviewForm locationName="Al Khobar" />
                        <QuestionForm locationName="Al Khobar" />
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
                        <Link href="/locations/dhahran/" className="text-gray-600 hover:text-primary capitalize transition-colors">
                            Taxi Service in Dhahran
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
                        description: 'Reliable transport for business meetings and corporate events in Al Khobar.',
                        href: '/services/corporate-travel',
                        icon: Building2
                    },
                ]}
                title="Services Available in Al Khobar"
                description="Professional taxi services with licensed drivers for local and cross-border travel."
            />

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Al Khobar Taxi Now
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Professional transport for Causeway trips, Corniche visits, and Airport transfers.
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
