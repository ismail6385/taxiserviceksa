import BookingForm from '@/components/BookingForm';
import { Clock, Send, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'Contact Taxi Service KSA | Booking and Support',
    description: 'Contact Taxi Service KSA for taxi booking in Saudi Arabia. Service operates 24/7. Email: taxiserviceksa9988@gmail.com. Online booking form available.',
};

export default function ContactPage() {
    const faqs = [
        {
            question: "How can I contact customer support regarding my booking?",
            answer: "Customer support is available via the contact form on this page or email at taxiserviceksa9988@gmail.com. Response time is typically 30-60 minutes."
        },
        {
            question: "What is your average response time for inquiries?",
            answer: "Email inquiries receive responses within 30-60 minutes during business hours. Urgent booking requests are prioritized."
        },
        {
            question: "I left a personal item in the taxi, what should I do?",
            answer: "Lost items can be reported via email with booking reference number and item description. Driver coordination for item return is arranged within 24 hours."
        },
        {
            question: "How do I cancel or modify my confirmed booking?",
            answer: "Booking cancellation or modification requires 24 hours notice before scheduled pickup time. Contact via email with booking reference number."
        },
        {
            question: "Do you offer corporate or long-term partnership agreements?",
            answer: "Corporate accounts are available for businesses and travel agencies. Contact via email with company details for B2B partnership information."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-12 pb-20">
            {/* Header Section */}
            <div className="bg-white py-16 mb-12 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Get In Touch</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Taxi Service KSA</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Taxi booking is available through the online form or email at taxiserviceksa9988@gmail.com. Service operates 24/7 in Saudi Arabia.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
                    {/* Left Side: context */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4 flex-shrink-0">
                                        <Clock className="w-5 h-5 text-black" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">24/7 Support</h3>
                                        <p className="text-sm text-gray-600">Always available to handle your requests.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4 flex-shrink-0">
                                        <Send className="w-5 h-5 text-black" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Fast Response</h3>
                                        <p className="text-sm text-gray-600">Instant booking confirmation via email.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4 flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-black" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Nationwide Coverage</h3>
                                        <p className="text-sm text-gray-600">Service in Jeddah, Makkah, Madinah, Riyadh.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Helpful Resources */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Resources</h2>
                            <ul className="space-y-3">
                                <li>
                                    <a href="https://www.visitsaudi.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors flex items-center group text-sm">
                                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all"></span>
                                        Visit Saudi - Official Tourism Website
                                    </a>
                                </li>
                                <li>
                                    <a href="https://visa.visitsaudi.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors flex items-center group text-sm">
                                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all"></span>
                                        Saudi eVisa Portal
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.jed-airport.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors flex items-center group text-sm">
                                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all"></span>
                                        King Abdulaziz International Airport
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.haj.gov.sa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors flex items-center group text-sm">
                                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all"></span>
                                        Ministry of Hajj and Umrah
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Booking Form */}
                    <div className="lg:col-span-7">
                        <BookingForm />
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Support Questions</h2>
                        <p className="text-gray-600">Common questions about our support and services</p>
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

            </div>
        </div>
    );
}
