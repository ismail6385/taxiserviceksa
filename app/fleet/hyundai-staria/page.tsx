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
    title: 'Hyundai Staria VIP Private Transfer Saudi Arabia | Premium Van',
    description: 'Premium Hyundai Staria VIP private transfer and executive chauffeur service in Saudi Arabia. 7-seater "Business Class" van for families and VIP groups.',
    keywords: ['Hyundai Staria VIP transfer', 'premium van chauffeur KSA', 'Hyundai Staria Riyadh transfer', 'executive group transport Saudi Arabia'],
};

export default function HyundaiStariaPage() {
    const features = [
        'Modern spacious design',
        'Comfortable 7 seats',
        'USB charging ports',
        'Climate control',
        'Large windows',
        'Smooth suspension',
        'Entertainment system',
        'Family friendly',
    ];

    const specifications = [
        { label: 'Passengers', value: '7' },
        { label: 'Luggage', value: '4 Large Bags' },
        { label: 'Type', value: 'Modern Van' },
        { label: 'Transmission', value: 'Automatic' },
    ];

    const idealFor = [
        'Family Travel',
        'Umrah Groups',
        'Airport Transfers',
        'City Tours',
        'Group Outings',
        'Long Distance',
    ];

    const faqs = [
        {
            question: "Does the Hyundai Staria VIP transfer include a chauffeur?",
            answer: "Our Hyundai Staria VIP transfer includes a professional, uniformed chauffeur. We specialize in dedicated chauffeur-driven experiences for families and corporate groups."
        },
        {
            question: "How many passengers can the Hyundai Staria accommodate comfortably?",
            answer: "The Hyundai Staria comfortably accommodates 7 passengers with 4 large suitcases. It features specialized multi-link suspension and reclining business-class middle-row seats."
        },
        {
            question: "Is fuel and airport parking included in the VIP booking?",
            answer: "Yes, our VIP transfer rates are flat and all-inclusive of fuel, road tolls, and airport parking fees for scheduled point-to-point transfers."
        },
        {
            question: "Can I book a VIP Staria transfer from Jeddah to Makkah?",
            answer: "Yes, the Hyundai Staria is extremely popular for the Jeddah to Makkah route, offering panoramic views and superior comfort for Umrah pilgrims and families."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="relative h-96 lg:h-auto">
                            <Image
                                src="/hyundai-staria.webp"
                                alt="Hyundai Staria"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block w-fit mb-4">
                                Premium Executive Van
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Hyundai Staria VIP Private Transfer
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 font-medium">
                                Step into the future of group travel with our <strong>Hyundai Staria VIP transfer service</strong>. Known as the "Business Class of Vans," it offers panoramic views, superior suspension, and a premium chauffeur-driven experience for discerning families and corporate groups.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {specifications.map((spec, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                        <div className="text-sm text-gray-500">{spec.label}</div>
                                        <div className="text-lg font-bold text-gray-900">{spec.value}</div>
                                    </div>
                                ))}
                            </div>


                            <Link href="/booking?vehicle=Hyundai-Staria">
                                <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white font-bold h-14 text-lg">
                                    Book VIP Staria Transfer
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
                        vehicleName="Hyundai Staria"
                        colorTheme="indigo"
                        prices={[
                            { route: 'Jeddah Airport → Makkah', price: '300' },
                            { route: 'Makkah → Madinah Hotel', price: '550' },
                            { route: 'Makkah → Madinah via Baddar Ziyarat', price: '700' },
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

                {/* Experience Layer: Captain's Perspective */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-indigo-500">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                <Users className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Captain Yasser</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">VIP Family Specialist • 6 Years Exp.</p>
                            </div>
                        </div>
                        <blockquote className="text-gray-600 italic mb-4">
                            "We call this 'The Spaceship' for a reason. The windows are double the size of a normal van. Children love it because they can actually see the mountains and city lights on the Jeddah-Makkah highway instead of staring at a door panel. It keeps them engaged and calm."
                        </blockquote>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-indigo-50 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">Feature: Panoramic Windows</span>
                            <span className="bg-indigo-50 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">Vibe: Open & Airy</span>
                        </div>
                    </div>

                    <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-indigo-500" />
                                The "No-Nausea" Guarantee
                            </h3>
                            <p className="text-gray-300 text-sm mb-4">
                                Many families avoid vans because the "bouncy" rear axle causes motion sickness. The Staria is different.
                            </p>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                                    <span><strong>Car-Like Suspension:</strong> It uses 'Multi-Link' rear suspension (like a sedan), not leaf springs (like a truck). Far smoother.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                                    <span><strong>Business Class Seats:</strong> Pilot seats in the middle row recline fully for naps.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                                    <span><strong>USB at Every Seat:</strong> Every passenger has their own charging port. No fighting over cables.</span>
                                </li>
                            </ul>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -bottom-10 -right-10 opacity-10">
                            <Car className="w-48 h-48" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Standard Features</h2>
                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Suited For</h2>
                        <ul className="space-y-3">
                            {idealFor.map((use, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <Car className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
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
                        <div className="text-3xl font-bold text-gray-900 mb-1">7</div>
                        <div className="text-sm text-gray-600">Passengers</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                        <Briefcase className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">4</div>
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
                        Secure Your Premium Group Journey
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Experience the gold standard of group transport with our Hyundai Staria VIP private transfer.
                    </p>
                    <Link href="/booking?vehicle=Hyundai-Staria">
                        <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto">
                            Book Your VIP Van
                        </Button>
                    </Link>
                </div>
            </div>
        </div >
    );
}
