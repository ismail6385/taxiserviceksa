import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Shield, Users, Clock, Star, Award, Target, Heart, TrendingUp, CheckCircle, Car, MapPin, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'About VIP Transfer KSA | Premium Chauffeur Service Saudi Arabia',
    description: 'Learn about VIP Transfer KSA, the leading VIP private transfer and chauffeur service in Saudi Arabia. Specializing in luxury airport pickups, Umrah transport, and executive intercity travel.',
    keywords: ['VIP Private Transfer Saudi Arabia', 'Premium Chauffeur Service', 'Luxury Airport Transport', 'Executive Umrah Transport', 'Professional Driver KSA'],
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
        { number: '10,000+', label: 'Pilgrims Served' },
        { number: '50+', label: 'Vetted Chauffeurs' },
        { number: '15+', label: 'Luxury Fleet' },
        { number: '24/7', label: 'Operations' }
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
            question: "Is VIP Transfer KSA a licensed provider?",
            answer: "VIP Transfer KSA operates under Saudi Public Transport Authority regulations. Service includes commercial vehicle insurance and licensed drivers."
        },
        {
            question: "Do you offer corporate accounts?",
            answer: "Corporate accounts are available for businesses and organizations. Service includes monthly billing and priority booking. Contact via email for corporate rates."
        },
        {
            question: "How do you ensure passenger safety?",
            answer: "Passenger safety includes driver background verification, vehicle maintenance inspections, and trip monitoring. Vehicles undergo monthly safety checks."
        },
        {
            question: "Can I book a ride for someone else?",
            answer: "Taxi booking for other passengers is available. Booking requires passenger name and contact number. Confirmation is sent to both booker and passenger."
        },
        {
            question: "What areas do you serve?",
            answer: "Service operates in Jeddah, Makkah, Madinah, Taif, Yanbu, AlUla, Riyadh, and Khaybar. Airport transfers cover King Abdulaziz Airport (Jeddah) and Prince Mohammad Airport (Madinah)."
        }
    ];

    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "header": "About VIP Transfer KSA",
        "primaryImageOfPage": "https://taxiserviceksa.com/hero-image.jpg",
        "knowsAbout": ["Umrah Transport", "Airport Transfers", "Haramain High Speed Railway"],
        "areaServed": "Kingdom of Saudi Arabia",
        "memberOf": {
            "@type": "Organization",
            "name": "Ministry of Transport and Logistic Services"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Script
                    id="about-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
                />

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                        About Us
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        VIP Private Transfer &<br />
                        <span className="text-black">Executive Chauffeur Service</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                        <strong>VIP Transfer KSA</strong> is a premium transport provider operating across the Kingdom since 2012. We specialize in **high-end private transfers**, specialized Umrah transport, and executive intercity travel for international guests and business leaders.
                    </p>
                    <div className="bg-gray-900 text-white rounded-2xl p-6 max-w-4xl mx-auto border-l-4 border-amber-400">
                        <p className="text-lg font-bold mb-2">🚗 Note: Premium Chauffeur Service Only</p>
                        <p className="text-gray-300">
                            We provide exclusive, pre-booked private transfers with professional chauffeurs. We **do not** offer local "street hail" taxi services, ride-sharing, or self-drive rentals.
                        </p>
                    </div>
                </div>

                {/* What We Do - Source Context Definition */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What We Do
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Professional taxi transport with licensed drivers across Saudi Arabia
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Car className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Umrah Transport</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Complete transport for Umrah pilgrims from Jeddah Airport to Makkah, Makkah to Madinah, and all Ziyarat sites.
                            </p>
                            <Link href="/services/umrah-transport" className="text-primary font-bold text-sm hover:underline">
                                Learn More →
                            </Link>
                        </div>

                        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                                <MapPin className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Airport Transfers</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Professional airport transfer service across 8 major Saudi airports with meet-and-greet and flight tracking.
                            </p>
                            <Link href="/services/airport-transfers" className="text-primary font-bold text-sm hover:underline">
                                Learn More →
                            </Link>
                        </div>

                        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Corporate Travel</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Executive transport for business professionals with monthly billing, priority booking, and dedicated account management.
                            </p>
                            <Link href="/services/corporate-travel" className="text-primary font-bold text-sm hover:underline">
                                Learn More →
                            </Link>
                        </div>

                        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                                <Award className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Heritage Tours</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Specialized transport for UNESCO heritage sites with 4x4 desert vehicles for AlUla, Khaybar, and historical circuits.
                            </p>
                            <Link href="/services/heritage-tours" className="text-primary font-bold text-sm hover:underline">
                                Learn More →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Mission */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:border-black/5 transition-colors">
                        <div className="flex items-center mb-6">
                            <div className="bg-gray-100 p-3 rounded-lg mr-4">
                                <Target className="w-8 h-8 text-black" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            Since 2012, <strong>VIP Transfer KSA</strong> has been the trusted partner for Umrah pilgrims and business travelers. We don't just drive; we facilitate your spiritual and professional journeys with a deep understanding of Saudi Arabia's roads and customs.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our mission is to provide safe, reliable, and dignified transport, ensuring that every pilgrim focuses on their worship and every executive focuses on their business, while we handle the logistics.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:border-black/5 transition-colors">
                        <div className="flex items-center mb-6">
                            <div className="bg-gray-100 p-3 rounded-lg mr-4">
                                <TrendingUp className="w-8 h-8 text-black" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            To set the standard for ground transportation in the Kingdom, bridging the gap between Jeddah, Makkah, and Madinah with a fleet that prioritizes safety, comfort, and absolute punctuality.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We envision a seamless travel experience where "VIP Transfer KSA" is synonymous with trust, bridging the historical wonders of AlUla with the modern pulse of Riyadh.
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
                                <h3 className="font-bold text-gray-900 mb-2">Licensed Captains</h3>
                                <p className="text-gray-600">Our drivers are officially registered "Captains" with Ministry of Interior clearance and extensive Hajj/Umrah route experience.</p>
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
                        <Link href="/booking/">
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

                {/* Corporate Identity - Golden Record Source */}
                <div className="max-w-3xl mx-auto rounded-xl border border-gray-200 bg-white p-8 mb-20">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Corporate Information</h3>
                    <div className="space-y-4 text-sm">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <span className="text-gray-500 font-medium">Legal Name</span>
                            <span className="text-gray-900 sm:col-span-2 font-mono">VIP Transfer KSA Transport</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <span className="text-gray-500 font-medium">Brand Name</span>
                            <span className="text-gray-900 sm:col-span-2">VIP Transfer KSA™</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <span className="text-gray-500 font-medium">Headquarters</span>
                            <span className="text-gray-900 sm:col-span-2">Jeddah, Saudi Arabia</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <span className="text-gray-500 font-medium">Contact Email</span>
                            <span className="text-gray-900 sm:col-span-2 text-emerald-600">info@taxiserviceksa.com</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <span className="text-gray-500 font-medium">Service Type</span>
                            <span className="text-gray-900 sm:col-span-2">Private Chauffeur & Airport Transfer</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <span className="text-gray-500 font-medium">License Status</span>
                            <span className="text-gray-900 sm:col-span-2 flex items-center gap-2">
                                <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded-full font-bold">ACTIVE</span>
                                <span>Ministry of Transport Regularized</span>
                            </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <span className="text-gray-500 font-medium">Insurance</span>
                            <span className="text-gray-900 sm:col-span-2">Comprehensive Commercial Policy (Passenger Coverage)</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <span className="text-gray-500 font-medium">VAT Registration</span>
                            <span className="text-gray-900 sm:col-span-2">Electronic Invoicing Enabled (ZATCA Compliant)</span>
                        </div>
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
