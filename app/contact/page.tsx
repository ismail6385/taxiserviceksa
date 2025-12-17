import BookingForm from '@/components/BookingForm';
import { Clock, Send, MapPin } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export default function ContactPage() {
    const faqs = [
        {
            question: "How can I contact customer support regarding my booking?",
            answer: "You can reach our 24/7 customer support team via the contact form on this page, or by calling our hotline. For urgent inquiries, we recommend finding our WhatsApp link in the footer."
        },
        {
            question: "What is your average response time for inquiries?",
            answer: "We strive to respond to all web inquiries within 30-60 minutes. For immediate assistance, please use our phone support."
        },
        {
            question: "I left a personal item in the taxi, what should I do?",
            answer: "Please contact us immediately with your booking reference number and a description of the item. We will coordinate with the driver to locate and return your lost property."
        },
        {
            question: "How do I cancel or modify my confirmed booking?",
            answer: "To cancel or modify a booking, please contact our support team at least 24 hours before your scheduled pickup time to avoid cancellation fees."
        },
        {
            question: "Do you offer corporate or long-term partnership agreements?",
            answer: "Yes, we provide tailored solutions for corporate clients and travel agencies. Please fill out the form with your company details, and our B2B team will contact you."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-12 pb-20">
            {/* Header Section */}
            <div className="bg-white py-16 mb-12 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Get In Touch</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Have questions about our services or need a custom quote? We are available 24/7 to assist you with your travel needs.
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
