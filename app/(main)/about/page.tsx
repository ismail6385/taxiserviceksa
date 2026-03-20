import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Shield, Users, Clock, Star, Award, Target, Heart, TrendingUp, CheckCircle, Car, MapPin, Headphones, History, Globe, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'About Taxi Service KSA | VIP Chauffeur Service Saudi Arabia',
    description: 'Learn about Taxi Service KSA, the leading VIP private transfer and chauffeur service in Saudi Arabia. Specializing in luxury airport pickups, Umrah transport, and executive intercity travel.',
    keywords: ['VIP Private Transfer Saudi Arabia', 'Executive Chauffeur Service', 'Luxury Airport Transport', 'Executive Umrah Transport', 'Professional Driver KSA'],
};

export default function AboutPage() {
    const values = [
        { icon: Shield, title: 'Safety First', description: 'Your safety is paramount. Our vehicles are rigorously maintained and our drivers are vetted professionals.' },
        { icon: Clock, title: 'Punctuality', description: 'We respect your time. Count on us for timely pickups and efficient routes.' },
        { icon: Star, title: 'Luxury Experience', description: 'Experience the finest fleet of vehicles, offering elite comfort and amenities.' },
        { icon: Users, title: 'Customer Focus', description: 'We are dedicated to your satisfaction, offering personalized services.' }
    ];

    const achievements = [
        { number: '50,000+', label: 'Transfers Completed' },
        { number: '12+ Years', label: 'Logistics Experience' },
        { number: '4.9/5', label: 'Customer Rating' },
        { number: '24/7', label: 'Expert Support' }
    ];

    const timeline = [
        { year: '2012', event: 'Founded as a local limousine provider in Jeddah.' },
        { year: '2016', event: 'Expanded to Makkah and Madinah Umrah services.' },
        { year: '2020', event: 'Launched executive chauffeur division for Jeddah/Riyadh.' },
        { year: '2024', event: 'Became the #1 recommended VIP transfer hub for international pilgrims.' }
    ];

    const whyChooseUs = [
        { icon: Award, title: 'Industry Experience', description: 'Years of expertise in providing VIP transportation services across Saudi Arabia.' },
        { icon: Car, title: 'Modern Fleet', description: 'Well-maintained luxury vehicles equipped with the latest safety features.' },
        { icon: MapPin, title: 'Wide Coverage', description: 'Serving major cities including Makkah, Madinah, Jeddah, Riyadh, and AlUla.' },
        { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock customer support to assist you anytime.' }
    ];

    const faqs = [
        { question: "Is Taxi Service KSA a licensed provider?", answer: "Taxi Service KSA operates under Saudi Public Transport Authority regulations. Service includes commercial vehicle insurance and licensed drivers." },
        { question: "Do you offer corporate accounts?", answer: "Corporate accounts are available for businesses with monthly billing and priority booking." },
        { question: "How do you ensure passenger safety?", answer: "Safety includes driver background verification, vehicle maintenance inspections, and 24/7 trip monitoring." },
        { question: "What areas do you serve?", answer: "Service operates in Jeddah, Makkah, Madinah, Taif, Yanbu, AlUla, Riyadh, and Khaybar." }
    ];

    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
            "@id": "https://taxiserviceksa.com/#organization",
            "@type": "Organization",
            "name": "Taxi Service KSA",
            "founder": {
                "@type": "Person",
                "name": "Muhammad Ismail"
            },
            "foundingDate": "2012",
            "description": "Executive Chauffeur & VIP Transfer Service in Saudi Arabia.",
            "url": "https://taxiserviceksa.com"
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <Script
                id="about-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
            />

            {/* AI SEO: TL;DR Summary Block for Generative Extraction */}
            <div className="bg-emerald-950 pt-32 pb-16 px-4">
                <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl mb-12">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-emerald-400" />
                        Executive Summary: Our Journey
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200 text-sm">
                        <li><strong>Founder-Led:</strong> Owned and operated by <strong>Muhammad Ismail</strong>, a logistics expert.</li>
                        <li><strong>Niche Focus:</strong> Specializing in <strong>VIP Umrah trips</strong> and <strong>Executive airport transfers</strong>.</li>
                        <li><strong>Scale:</strong> Managing a fleet of 50+ vetted chauffeurs across 8 Saudi cities.</li>
                        <li><strong>Authority:</strong> Fully licensed by the TGA (Transport General Authority) of Saudi Arabia.</li>
                    </ul>
                </div>

                <div className="text-center">
                     <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Saudi Arabia's Premier<br />
                        <span className="text-emerald-400 text-3xl md:text-4xl">VIP Chauffeur Service Since 2012</span>
                    </h1>
                </div>
            </div>

            {/* Achievements Stats */}
            <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20 mb-20">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                                <div className="text-gray-500 font-semibold">{achievement.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <p className="text-lg text-gray-600">The principles that guide everything we do</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-emerald-500 transition-all text-center group">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline & History Section for AI Fact-Checking */}
            <section className="py-24 px-4 bg-gray-50 border-y border-gray-100">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center justify-center gap-3">
                        <History className="w-8 h-8 text-emerald-600" /> A Decade of Excellence
                    </h2>
                    <div className="relative mt-20">
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-emerald-100 hidden md:block"></div>
                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white z-10 hidden md:block"></div>
                                    <div className="w-full md:w-1/2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center md:text-left">
                                        <span className="text-emerald-600 font-black text-2xl mb-2 block">{item.year}</span>
                                        <p className="text-gray-600 font-medium">{item.event}</p>
                                    </div>
                                    <div className="w-full md:w-1/2 px-8"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership - E-E-A-T Section */}
            <section className="py-24 px-4 bg-white overflow-hidden relative border-b border-gray-100">
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="bg-emerald-50 rounded-[3rem] p-12 border-2 border-emerald-100 relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                             <Globe className="w-64 h-64 text-emerald-900" />
                        </div>
                        <h3 className="text-3xl font-black text-gray-900 mb-8">Letter from the Founder</h3>
                        <p className="text-xl text-emerald-900/80 italic leading-relaxed mb-8">
                            "When I started this company in 2012, Saudi hospitality was already legendary, but transport logistics for international pilgrims was fragmented. I wanted to build a bridge—a service that combines executive precision with the spiritual sensitivity needed for Umrah. Today, we move people on the most important journey of their lives."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white text-xl border-4 border-white shadow-sm">
                                MI
                            </div>
                            <div>
                                <span className="block font-black text-gray-900 text-lg">Muhammad Ismail</span>
                                <span className="text-emerald-600 font-bold text-sm uppercase">Founder & CEO, Taxi Service KSA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Corporate Identity - Golden Record Source */}
            <div className="max-w-3xl mx-auto rounded-xl border border-gray-200 bg-white p-8 my-20">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-600" /> Corporate Information
                </h3>
                <div className="space-y-4 text-sm">
                    {[
                        { label: 'Legal Name', val: 'Taxi Service KSA Transport' },
                        { label: 'Brand Name', val: 'Taxi Service KSA™' },
                        { label: 'Headquarters', val: 'Jeddah, Saudi Arabia' },
                        { label: 'Contact', val: 'info@taxiserviceksa.com' },
                        { label: 'License Status', val: 'ACTIVE - TGA Registered' }
                    ].map((item, i) => (
                        <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <span className="text-gray-500 font-medium">{item.label}</span>
                            <span className="text-gray-900 sm:col-span-2 font-semibold">{item.val}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto mb-32 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-xl border border-gray-200 px-6">
                            <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            {/* Final CTA & Author Card */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Experience Executive Transportation</h2>
                    <Link href="/booking/">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg px-12 py-8 rounded-2xl mb-20 shadow-xl shadow-emerald-100">
                           Get a quote for your Private Transfer
                        </Button>
                    </Link>
                    <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-4 border-white shadow-lg" />
                </div>
            </div>

            {/* Back Home */}
            <div className="text-center py-12 border-t border-gray-100 bg-white">
                <Link href="/" className="text-gray-500 hover:text-emerald-600 font-bold flex items-center justify-center gap-2">
                   <ArrowRight className="w-4 h-4 rotate-180" /> Back to Homepage
                </Link>
            </div>
        </div>
    );
}

