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
    title: 'Toyota Coaster Taxi Service in Saudi Arabia | 17-Seater Tour Bus',
    description: 'Toyota Coaster accommodates 17 passengers and 20 bags. Suitable for tour groups, corporate events, and large families. Air conditioning and entertainment system included.',
    keywords: ['Toyota Coaster rental Saudi Arabia', 'tour bus KSA', 'large group transport', '17 seater bus'],
};

export default function ToyotaCoasterPage() {
    const features = [
        'Large capacity',
        '17 comfortable seats',
        'Spacious luggage area',
        'Air conditioning',
        'Entertainment system',
        'Professional driver',
        'Long distance ready',
        'Corporate events',
    ];

    const specifications = [
        { label: 'Passengers', value: '17' },
        { label: 'Luggage', value: '20 Bags' },
        { label: 'Type', value: 'Tour Bus' },
        { label: 'Transmission', value: 'Automatic' },
    ];

    const idealFor = [
        'Tour Groups',
        'Corporate Events',
        'Large Families',
        'School Trips',
        'Conference Transport',
        'Long Distance Travel',
    ];

    const faqs = [
        {
            question: "Does the Toyota Coaster come with a professional driver?",
            answer: "Toyota Coaster taxi service includes a professional bus driver. Service does not offer self-drive options. Drivers speak English and Arabic."
        },
        {
            question: "How many passengers can the Toyota Coaster accommodate comfortably?",
            answer: "Toyota Coaster accommodates 17 passengers. Vehicle is suitable for large groups, corporate transport, and tour groups."
        },
        {
            question: "Is fuel and toll charges included in the booking?",
            answer: "Taxi booking includes fuel, road tolls, and airport parking fees for point-to-point transfers. Pricing is all-inclusive."
        },
        {
            question: "Can I book the Toyota Coaster for intercity travel?",
            answer: "Toyota Coaster booking is available for intercity travel between Jeddah, Makkah, and Madinah. Suitable for long-distance group transport."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="relative h-96 lg:h-auto">
                            <Image
                                src="/toyota-coaster.webp"
                                alt="Toyota Coaster"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block w-fit mb-4">
                                Large Groups
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Toyota Coaster Taxi Service in Saudi Arabia
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                Toyota Coaster accommodates 17 passengers with 20 bags. Vehicle features air conditioning and entertainment system. Suitable for tour groups and corporate events.
                            </p>

                            {/* Specifications */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {specifications.map((spec, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-sm text-gray-500">{spec.label}</div>
                                        <div className="text-lg font-bold text-gray-900">{spec.value}</div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/booking?vehicle=Toyota-Coaster">
                                <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white font-bold">
                                    Book Toyota Coaster Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto mb-12">
                    <FleetPricing
                        vehicleName="Toyota Coaster"
                        colorTheme="blue"
                        prices={[
                            { route: 'Jeddah Airport → Makkah', price: '500' },
                            { route: 'Makkah → Madinah Hotel', price: '1100' },
                            { route: 'Makkah → Madinah via Badr Ziyarat', price: '1300' },
                            { route: 'Makkah Ziyarat Tour', price: '500' },
                            { route: 'Madinah Hotel → Madinah Airport', price: '350' },
                            { route: 'Madinah Ziyarat Tour', price: '400' },
                            { route: 'Madinah Hotel → Train Station', price: '300' },
                            { route: 'Madinah Hotel → Jeddah Airport', price: '1200' },
                            { route: 'Makkah Hotel → Train Station', price: '300' },
                            { route: 'Makkah Hotel → Jeddah Airport', price: '450' },
                            { route: 'Full Day (Fuel + Driver)', price: '1500', highlight: true },
                            { route: 'Per Hour', price: '200', highlight: true },
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
                        <div className="text-3xl font-bold text-gray-900 mb-1">4.9</div>
                        <div className="text-sm text-gray-600">Rating</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                        <Users className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">17</div>
                        <div className="text-sm text-gray-600">Passengers</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                        <Briefcase className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">20</div>
                        <div className="text-sm text-gray-600">Bags</div>
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
                        Need a Tour Bus?
                    </h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Book our Toyota Coaster now for large group travel
                    </p>
                    <Link href="/booking?vehicle=Toyota-Coaster">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
