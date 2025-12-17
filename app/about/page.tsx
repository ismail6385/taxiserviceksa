import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Users, Clock, Star, Award, Target, Heart, TrendingUp, CheckCircle, Car, MapPin, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'About Us | Taxi Service KSA - Premium Chauffeur Services',
    description: 'Learn about Taxi Service KSA, Saudi Arabia\'s premier chauffeur service. Discover our mission, values, and commitment to luxury transportation excellence.',
    keywords: ['about taxi service', 'Saudi Arabia chauffeur', 'premium transport', 'company mission', 'our values'],
};

export default function AboutPage() {
    const values = [
        {
            icon: Shield,
            title: 'Safety First',
            description: 'Your safety is paramount. Our vehicles are rigorously maintained and our drivers are vetted professionals with extensive training.'
        },
        {
            icon: Clock,
            title: 'Punctuality',
            description: 'We respect your time. Count on us for timely pickups and efficient routes to ensure you reach your destination on schedule.'
        },
        {
            icon: Star,
            title: 'Luxury Experience',
            description: 'Experience the finest fleet of vehicles, offering premium comfort and amenities for a relaxing and memorable ride.'
        },
        {
            icon: Users,
            title: 'Customer Focus',
            description: 'We are dedicated to your satisfaction, offering personalized services tailored to meet your unique travel needs.'
        }
    ];

    const achievements = [
        { number: '10,000+', label: 'Happy Customers' },
        { number: '50+', label: 'Professional Drivers' },
        { number: '15+', label: 'Premium Vehicles' },
        { number: '24/7', label: 'Service Available' }
    ];

    const whyChooseUs = [
        {
            icon: Award,
            title: 'Industry Experience',
            description: 'Years of expertise in providing premium transportation services across Saudi Arabia.'
        },
        {
            icon: Car,
            title: 'Modern Fleet',
            description: 'Well-maintained luxury vehicles equipped with the latest safety features and amenities.'
        },
        {
            icon: MapPin,
            title: 'Wide Coverage',
            description: 'Serving major cities including Makkah, Madinah, Jeddah, Riyadh, Taif, and tourist destinations.'
        },
        {
            icon: Headphones,
            title: '24/7 Support',
            description: 'Round-the-clock customer support to assist you with bookings and inquiries anytime.'
        }
    ];

    const faqs = [
        {
            question: "Is Taxi Service KSA a licensed provider?",
            answer: "Yes, we are a fully licensed and insured transportation service provider operating in compliance with Saudi Public Transport Authority regulations."
        },
        {
            question: "Do you offer corporate accounts?",
            answer: "Yes, we offer tailored corporate accounts with monthly billing and priority booking for businesses and organizations."
        },
        {
            question: "How do you ensure passenger safety?",
            answer: "We prioritize safety through rigorous driver vetting, regular vehicle maintenance checks, and 24/7 trip monitoring."
        },
        {
            question: "Can I book a ride for someone else?",
            answer: "Absolutely. You can easily book a ride for guests, family members, or colleagues. Just provide their contact details during booking."
        },
        {
            question: "What areas do you serve?",
            answer: "We primarily serve Jeddah, Makkah, Madinah, Taif, Yanbu, and AlUla, covering all major airports and intercity routes."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                        About Us
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Saudi Arabia's Premier Chauffeur Service
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We are dedicated to providing luxury, safety, and reliability for every journey across the Kingdom of Saudi Arabia.
                    </p>
                </div>

                {/* Mission & Vision Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Mission */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <div className="flex items-center mb-6">
                            <div className="bg-gray-100 p-3 rounded-lg mr-4">
                                <Target className="w-8 h-8 text-black" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            At Taxi Service KSA, our mission is to redefine transportation in Saudi Arabia by offering a service that goes beyond just getting from point A to point B.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We strive to provide an experience of unmatched comfort, professionalism, and luxury. Whether you are performing Umrah, traveling for business, or exploring the kingdom, we ensure your journey is smooth, safe, and memorable.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <div className="flex items-center mb-6">
                            <div className="bg-gray-100 p-3 rounded-lg mr-4">
                                <TrendingUp className="w-8 h-8 text-black" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            To become the most trusted and preferred transportation service provider in Saudi Arabia, recognized for excellence in customer service and innovation.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We envision a future where every traveler in the Kingdom experiences world-class transportation with the highest standards of safety, comfort, and reliability.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-black/10 transition-all hover:shadow-lg group"
                            >
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors">
                                    <value.icon className="w-8 h-8 text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements Stats */}
                <div className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
                            Our Achievements
                        </h2>
                        <p className="text-lg text-gray-600">
                            Numbers that speak for our excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                                    {achievement.number}
                                </div>
                                <div className="text-gray-600 font-semibold">
                                    {achievement.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Us
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            What sets us apart from other transportation services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex items-start hover:border-black/10 transition-all"
                            >
                                <div className="bg-gray-100 p-4 rounded-lg mr-6 flex-shrink-0">
                                    <item.icon className="w-8 h-8 text-black" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Commitment */}
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 mb-20">
                    <div className="flex items-center mb-8">
                        <div className="bg-gray-100 p-3 rounded-lg mr-4">
                            <Heart className="w-8 h-8 text-black" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Our Commitment to You</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start">
                            <CheckCircle className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Professional Drivers</h3>
                                <p className="text-gray-600">Licensed, experienced, and courteous chauffeurs dedicated to your comfort and safety.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Premium Vehicles</h3>
                                <p className="text-gray-600">Well-maintained luxury fleet with modern amenities and safety features.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                                <p className="text-gray-600">No hidden fees. Clear, upfront pricing for all our services.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle className="w-6 h-6 text-black mr-3 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">24/7 Availability</h3>
                                <p className="text-gray-600">Round-the-clock service to meet your transportation needs anytime.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Learn more about our company and services</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* CTA Section */}
                <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Experience Premium Transportation
                    </h2>
                    <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who trust us for their travel needs across Saudi Arabia
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6">
                                Book Your Ride
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10 font-bold text-lg px-10 py-6 border-2 border-white">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-12">
                    <Link href="/" className="text-gray-900 hover:text-gray-700 font-semibold">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
