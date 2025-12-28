import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, CheckCircle2, Star, Shield, Clock, Car } from 'lucide-react';
import FleetPricing from '@/components/FleetPricing';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'Toyota Camry Taxi Service in Saudi Arabia | 4-Seater Sedan',
    description: 'Toyota Camry taxi service in Saudi Arabia accommodates 4 passengers and 2 large bags. Suitable for city travel, airport transfers, and business trips. Automatic transmission.',
    keywords: ['Toyota Camry rental Saudi Arabia', 'economic taxi KSA', 'city transport', 'airport transfer'],
};

export default function ToyotaCamryPage() {
    const features = [
        'Comfortable seating',
        'Air conditioning',
        'Fuel efficient',
        'Smooth ride',
        'Clean interior',
        'Professional driver',
        'GPS navigation',
        'Phone charging',
    ];

    const specifications = [
        { label: 'Passengers', value: '4' },
        { label: 'Luggage', value: '2 Large Bags' },
        { label: 'Type', value: 'Sedan' },
        { label: 'Transmission', value: 'Automatic' },
    ];

    const idealFor = [
        'City Travel',
        'Airport Transfers',
        'Business Meetings',
        'Solo/Couple Travel',
        'Economic Choice',
        'Daily Commute',
    ];

    const faqs = [
        {
            question: "Does the Toyota Camry come with a professional driver?",
            answer: "Toyota Camry taxi service includes a professional driver. Service does not offer self-drive options. Drivers speak English and Arabic."
        },
        {
            question: "How many passengers can the Toyota Camry accommodate comfortably?",
            answer: "Toyota Camry accommodates 4 passengers with 2 large luggage pieces. Vehicle features automatic transmission and air conditioning."
        },
        {
            question: "Is fuel and toll charges included in the booking?",
            answer: "Taxi booking includes fuel, road tolls, and airport parking fees for point-to-point transfers. Pricing is all-inclusive."
        },
        {
            question: "Can I book the Toyota Camry for a trip from Jeddah to Makkah?",
            answer: "Toyota Camry booking is available for Jeddah to Makkah route (95 km, approximately 75 minutes). Suitable for Umrah pilgrims and business travelers."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="relative h-96 lg:h-auto">
                            <Image
                                src="/toyota-camry.webp"
                                alt="Toyota Camry"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block w-fit mb-4">
                                Economic Choice
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Toyota Camry Taxi Service in Saudi Arabia
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                Toyota Camry taxi service accommodates 4 passengers with 2 large bags. Vehicle features automatic transmission and air conditioning. Suitable for city travel and airport transfers.
                            </p>


                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {specifications.map((spec, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-sm text-gray-500">{spec.label}</div>
                                        <div className="text-lg font-bold text-gray-900">{spec.value}</div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/booking?vehicle=Toyota-Camry">
                                <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white font-bold">
                                    Book Toyota Camry Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto mb-12">
                    <FleetPricing
                        vehicleName="Toyota Camry"
                        colorTheme="emerald"
                        prices={[
                            { route: 'Jeddah Airport → Makkah', price: '250' },
                            { route: 'Makkah → Madinah Hotel', price: '450' },
                            { route: 'Makkah → Madinah via Baddar Ziyarat', price: '600' },
                            { route: 'Makkah Ziyarat Tour', price: '250' },
                            { route: 'Madinah Hotel → Madinah Airport', price: '150' },
                            { route: 'Madinah Ziyarat Tour', price: '200' },
                            { route: 'Madinah Hotel → Train Station', price: '120' },
                            { route: 'Madinah Hotel → Jeddah Airport', price: '450' },
                            { route: 'Makkah Hotel → Train Station', price: '120' },
                            { route: 'Makkah Hotel → Jeddah Airport', price: '200' },
                            { route: 'Full Day (Fuel + Driver)', price: '800', highlight: true },
                            { route: 'Per Hour (No Fuel)', price: '120', highlight: true },
                        ]}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal For</h2>
                        <ul className="space-y-3">
                            {idealFor.map((use, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <Car className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                                    {use}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                        <Star className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">4.8</div>
                        <div className="text-sm text-gray-600">Rating</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                        <Users className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">4</div>
                        <div className="text-sm text-gray-600">Passengers</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                        <Briefcase className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">2</div>
                        <div className="text-sm text-gray-600">Large Bags</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                        <Shield className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                        <div className="text-sm text-gray-600">Safe</div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* CTA */}
                <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready for Comfortable City Travel?
                    </h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Book our Toyota Camry now for your next journey
                    </p>
                    <Link href="/booking?vehicle=Toyota-Camry">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div >
    );
}
