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
    title: 'Hyundai Starex VIP Private Transfer Saudi Arabia | Family Van',
    description: 'Premium Hyundai Starex VIP private transfer and family chauffeur service in Saudi Arabia. 7-seater van with extra luggage space for families and airport transfers.',
    keywords: ['Hyundai Starex VIP transfer', 'family van chauffeur KSA', 'Hyundai Starex Riyadh', 'airport transfer Saudi Arabia'],
};

export default function HyundaiStarexPage() {
    const features = [
        'Family friendly',
        'Comfortable seating',
        'Spacious interior',
        'Air conditioning',
        'Reliable performance',
        'Large luggage space',
        'Professional driver',
        'Airport transfer ready',
    ];

    const specifications = [
        { label: 'Passengers', value: '7' },
        { label: 'Luggage', value: '10 Bags' },
        { label: 'Type', value: 'Van' },
        { label: 'Transmission', value: 'Automatic' },
    ];

    const idealFor = [
        'Family Travel',
        'Airport Transfers',
        'Group Outings',
        'City Tours',
        'Umrah Transport',
        'Long Distance',
    ];

    const faqs = [
        {
            question: "Does the Hyundai Starex VIP transfer include a chauffeur?",
            answer: "Every Hyundai Starex VIP transfer includes a professional, uniformed chauffeur. This is a chauffeur-driven service only; we do not offer self-drive rentals."
        },
        {
            question: "How many passengers and bags can the Hyundai Starex accommodate?",
            answer: "The Hyundai Starex comfortably accommodates 7 passengers with up to 10 bags, making it the choice vehicle for families with significant luggage."
        },
        {
            question: "Is the pricing all-inclusive (Fuel & Tolls)?",
            answer: "Yes, our VIP transfer rates are all-inclusive of fuel, road toll charges (Mawaqeet), and airport parking fees for your scheduled journey."
        },
        {
            question: "Can I book a VIP Starex transfer for Umrah?",
            answer: "Certainly. The Starex is widely used for Umrah pilgrim transfers between Jeddah Airport, Makkah, and Madinah, offering the necessary space for Zamzam water and luggage."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="relative h-96 lg:h-auto">
                            <Image
                                src="/hyundai-starex.webp"
                                alt="Hyundai Starex"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block w-fit mb-4">
                                Reliable Executive Van
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Hyundai Starex VIP Private Transfer
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 font-medium">
                                The <strong>Hyundai Starex VIP transfer</strong> is the workhorse of premium family travel in Saudi Arabia. With an expansive cabin and massive 10-bag luggage capacity, it provides the perfect balance of utility and chauffeur-driven comfort for groups and pilgrims.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {specifications.map((spec, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-sm text-gray-500">{spec.label}</div>
                                        <div className="text-lg font-bold text-gray-900">{spec.value}</div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/booking?vehicle=Hyundai-Starex">
                                <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white font-bold h-14 text-lg">
                                    Book VIP Starex Transfer
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
                        vehicleName="Hyundai Starex"
                        colorTheme="indigo"
                        prices={[
                            { route: 'Jeddah Airport → Makkah', price: '300' },
                            { route: 'Makkah → Madinah Hotel', price: '550' },
                            { route: 'Makkah → Madinah via Badr Ziyarat', price: '700' },
                            { route: 'Makkah Ziyarat', price: '300' },
                            { route: 'Madinah Hotel → Madinah Airport', price: '200' },
                            { route: 'Madinah Ziyarat', price: '250' },
                            { route: 'Madinah Hotel → Train Station', price: '150' },
                            { route: 'Madinah Hotel → Jeddah Airport', price: '600' },
                            { route: 'Makkah Hotel → Train Station', price: '150' },
                            { route: 'Makkah Hotel → Jeddah Airport', price: '250' },
                            { route: 'Per Day (Fuel + Driver)', price: '1000', highlight: true },
                            { route: 'Per Hour', price: '150', highlight: true },
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
                        <div className="text-3xl font-bold text-gray-900 mb-1">7</div>
                        <div className="text-sm text-gray-600">Passengers</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                        <Briefcase className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">10</div>
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
                        Secure Your Family VIP Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Experience the reliability of our professional chauffeur-driven Hyundai Starex.
                    </p>
                    <Link href="/booking?vehicle=Hyundai-Starex">
                        <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto">
                            Book Your VIP Van
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
