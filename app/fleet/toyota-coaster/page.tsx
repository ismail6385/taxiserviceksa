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
    title: 'Toyota Coaster VIP Private Transfer Saudi Arabia | 17-Seater Bus',
    description: 'Premium Toyota Coaster VIP private transfer and group chauffeur service in Saudi Arabia. 17-seater executive bus for corporate events, tour groups, and large families.',
    keywords: ['Toyota Coaster VIP transfer', 'group bus KSA', 'corporate transport Saudi Arabia', '17 seater executive bus'],
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
            question: "Does the Toyota Coaster VIP transfer include a chauffeur?",
            answer: "Every Toyota Coaster VIP transfer includes a professional, licensed bus chauffeur. This is a chauffeur-driven experience for large groups; we do not offer self-drive bus rentals."
        },
        {
            question: "What is the total capacity for passengers and luggage?",
            answer: "The Toyota Coaster comfortably accommodates up to 17 passengers with 20 large suitcases, making it ideal for event logistics and pilgrimage tours."
        },
        {
            question: "Are fuel and driver expenses included in the price?",
            answer: "Yes, our VIP transfer rates are all-inclusive of fuel, road tolls, and professional driver fees for point-to-point or full-day bookings."
        },
        {
            question: "Can I book the Coaster for executive intercity travel?",
            answer: "Absolutely. The Toyota Coaster is high in demand for corporate delegations and large families traveling between Riyadh, Jeddah, and the Holy Cities."
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
                                Premium Group Logistics
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Toyota Coaster VIP Private Transfer
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 font-medium">
                                Experience the pinnacle of group travel with our <strong>Toyota Coaster VIP private transfer</strong>. Tailored for corporate delegates and large pilgrimage groups, this 17-seater executive bus offers an unmatched chauffeur-driven journey with dedicated luggage capacity and premium climate control.
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
                                <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white font-bold h-14 text-lg">
                                    Book VIP Coaster Transfer
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Premium Service Disclaimer */}
                <div className="bg-amber-50 border border-amber-200 py-3 rounded-xl mb-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                            <Shield className="w-4 h-4" />
                            OFFICIAL NOTE: We specialize in pre-booked VIP Intercity, Airport, and Full-Day transfers. We do NOT provide local short-distance hailing.
                        </p>
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
                        Secure Your Executive Group Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        The ultimate choice for corporate delegation and large group VIP travel in Saudi Arabia.
                    </p>
                    <Link href="/booking?vehicle=Toyota-Coaster">
                        <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto">
                            Book Your VIP Coaster
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
