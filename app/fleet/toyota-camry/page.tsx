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
    title: 'Toyota Camry VIP Private Transfer Saudi Arabia | Premium Sedan',
    description: 'Premium Toyota Camry VIP private transfer and executive chauffeur service in Saudi Arabia. Efficient, professional 4-seater for city business and airport transfers.',
    keywords: ['Toyota Camry VIP transfer', 'premium sedan chauffeur KSA', 'Toyota Camry Riyadh transfer', 'executive car service Saudi Arabia'],
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
            question: "Does the Toyota Camry VIP transfer include a chauffeur?",
            answer: "Our Toyota Camry VIP transfer service includes a professional, uniformed chauffeur. We provide a dedicated chauffeur-driven experience for all city and airport trips."
        },
        {
            question: "How many passengers can the Toyota Camry accommodate comfortably?",
            answer: "The Toyota Camry comfortably accommodates up to 4 passengers with space for 2 large suitcases. It is the ideal choice for solo executives or couples."
        },
        {
            question: "Are fuel and airport fees included in the VIP booking?",
            answer: "Yes, our VIP transfer rates are all-inclusive. This includes fuel, professional chauffeur service, road tolls (Mawaqif), and airport parking fees."
        },
        {
            question: "Can I book a VIP Camry transfer from Jeddah to Makkah?",
            answer: "Certainly. The Toyota Camry is a highly efficient choice for the Jeddah to Makkah route, providing a smooth and professional journey for pilgrims and business travelers."
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
                                Premium Executive Sedan
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Toyota Camry VIP Private Transfer
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 font-medium">
                                Elite chauffeur-driven performance for the modern professional. Our Toyota Camry VIP transfer service offers the perfect balance of efficiency, comfort, and premium service for city travel and airport transfers across Saudi Arabia.
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
                                <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white font-bold h-14 text-lg">
                                    Book VIP Camry Transfer
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
                        Experience Seamless Executive Travel
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Book your premium Toyota Camry VIP transfer today for a professional, stress-free journey.
                    </p>
                    <Link href="/booking?vehicle=Toyota-Camry">
                        <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto">
                            Secure Your VIP Transfer
                        </Button>
                    </Link>
                </div>
            </div>
        </div >
    );
}
