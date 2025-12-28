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
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Toyota Hiace Taxi Service in Saudi Arabia | 11-Seater Group Van',
    description: 'Toyota Hiace taxi service accommodates 11 passengers and 16 bags. Suitable for Umrah groups, large families, and airport transfers. Multi-zone air conditioning.',
    keywords: ['Toyota Hiace rental Saudi Arabia', 'group transport KSA', 'Umrah van', '11 seater'],
};

export default function ToyotaHiacePage() {
    const features = [
        'Spacious interior',
        '11 passenger capacity',
        'Large luggage space',
        'Air conditioning',
        'Comfortable seats',
        'Reliable performance',
        'Group travel ready',
        'Professional driver',
    ];

    const specifications = [
        { label: 'Passengers', value: '11' },
        { label: 'Luggage', value: '16 Bags' },
        { label: 'Type', value: 'Van' },
        { label: 'Transmission', value: 'Automatic' },
    ];

    const idealFor = [
        'Umrah Groups',
        'Large Families',
        'Group Tours',
        'Airport Transfers',
        'Corporate Events',
        'School Trips',
    ];

    const faqs = [
        {
            question: "Does the Toyota Hiace come with a professional driver?",
            answer: "Toyota Hiace taxi service includes a professional driver. Service does not offer self-drive options. Drivers speak English and Arabic."
        },
        {
            question: "How many passengers can the Toyota Hiace accommodate comfortably?",
            answer: "Toyota Hiace accommodates 11 passengers with 16 luggage pieces. Vehicle features dedicated ceiling vents for every row and retractable boarding step."
        },
        {
            question: "Is fuel and toll charges included in the booking?",
            answer: "Taxi booking includes fuel, road tolls, and airport parking fees for point-to-point transfers. Pricing is all-inclusive."
        },
        {
            question: "Can I book the Toyota Hiace for an Umrah trip?",
            answer: "Toyota Hiace booking is available for Umrah group transport between Jeddah, Makkah, and Madinah. Suitable for groups of 10-11 passengers."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <JsonLdFAQ faqs={faqs} />

                <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="relative h-96 lg:h-auto">
                            <Image
                                src="/toyota-hiace.webp"
                                alt="Toyota Hiace"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block w-fit mb-4">
                                Group Transport
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Toyota Hiace Taxi Service in Saudi Arabia
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                Toyota Hiace accommodates 11 passengers with 16 bags. Vehicle features multi-zone air conditioning and high roof option. Suitable for Umrah groups and large families.
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

                            <Link href="/booking?vehicle=Toyota-Hiace">
                                <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white font-bold">
                                    Book Toyota Hiace Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto mb-12">
                    <FleetPricing
                        vehicleName="Toyota Hiace"
                        colorTheme="amber"
                        prices={[
                            { route: 'Jeddah Airport → Makkah', price: '350' },
                            { route: 'Makkah → Madinah Hotel', price: '650' },
                            { route: 'Makkah → Madinah via Badr Ziyarat', price: '750' },
                            { route: 'Makkah Ziyarat Tour', price: '350' },
                            { route: 'Madinah Hotel → Madinah Airport', price: '200' },
                            { route: 'Madinah Ziyarat Tour', price: '300' },
                            { route: 'Madinah Hotel → Train Station', price: '200' },
                            { route: 'Madinah Hotel → Jeddah Airport', price: '650' },
                            { route: 'Makkah Hotel → Train Station', price: '200' },
                            { route: 'Makkah Hotel → Jeddah Airport', price: '300' },
                            { route: 'Full Day (Fuel + Driver)', price: '1200', highlight: true },
                            { route: 'Per Hour', price: '170', highlight: true },
                        ]}
                    />
                </div>

                {/* Experience Layer: Captain's Perspective */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-amber-500">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                <Users className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Captain Ibrahim</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Group Transport Specialist • 8 Years Exp.</p>
                            </div>
                        </div>
                        <blockquote className="text-gray-600 italic mb-4">
                            "The #1 complaint in other vans is the heat in the back row. Our 2024 Hiace models have dedicated ceiling vents for every single row, not just the front. I drove a family of 10 from Madinah to Makkah in July (45°C), and the kids in the back were asleep under blankets. That's the Hiace difference."
                        </blockquote>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">Climate: Multi-Zone Roof Vents</span>
                            <span className="bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">Capacity: 10 Pax + 15 Bags</span>
                        </div>
                    </div>

                    <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-amber-500" />
                                The "Luggage Reality" Check
                            </h3>
                            <p className="text-gray-300 text-sm mb-4">
                                Many providers modify vans to squeeze in 14 seats, leaving ZERO space for bags. We keep the standard <strong>11-seat layout</strong> to guarantee cargo room.
                            </p>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                    <span><strong>Standard Config:</strong> Fits 10-11 Adults + 12-15 Large Suitcases easily.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                    <span><strong>High Roof Option:</strong> Available upon request for extra headroom and standing ease for elderly pilgrims.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                    <span><strong>Boarding Step:</strong> Retractable side step makes entering in Ihram/Abaya safe and dignified.</span>
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
                                    <Car className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
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
                        <div className="text-3xl font-bold text-gray-900 mb-1">11</div>
                        <div className="text-sm text-gray-600">Passengers</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                        <Briefcase className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">16</div>
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
                        Ready for Group Travel?
                    </h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Book our Toyota Hiace now for your Umrah or group journey
                    </p>
                    <Link href="/booking?vehicle=Toyota-Hiace">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
