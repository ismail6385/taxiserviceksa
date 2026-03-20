import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Navigation, DollarSign } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import { blogService } from '@/lib/blogService';
import RelatedGuides from '@/components/RelatedGuides';
import AuthorCard from '@/components/AuthorCard';
import JsonLdLocation from '@/components/JsonLdLocation';

export const metadata: Metadata = {
    keywords: ['VIP Umrah Private Transfers', 'Best Umrah Chauffeur', 'Jeddah to Makkah VIP Transfer', 'Madinah Madinah Private Transfer', 'Saudi Arabia Pilgrim Transport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/umrah-transport/',
    },
    openGraph: {
        title: 'Umrah VIP Transfer Service | Private Chauffeur for Makkah & Madinah',
        description: 'Complete VIP Umrah transport service with professional chauffeurs. Jeddah Airport to Makkah, Makkah to Madinah best transfer. Fixed rates, 24/7 service.',
        url: 'https://taxiserviceksa.com/services/umrah-transport/',
        type: 'website',
    },
};

export default async function UmrahTransportPage() {
    // Fetch related blogs
    const blogs = await blogService.getBlogsByCategory('Umrah Guide');
    const displayBlogs = blogs.slice(0, 3);

    const umrahRoutes = [
        {
            name: 'Jeddah Airport → Makkah',
            distance: '80 km',
            duration: '60-90 minutes',
            price: 'WhatsApp Booking',
            description: (
                <>
                    Direct transfer from King Abdulaziz International Airport. Check our{' '}
                    <Link href="/blog/jeddah-airport-makkah-taxi-fare-2025/" className="text-emerald-700 hover:underline">
                        2025 Fare Guide
                    </Link>{' '}
                    for official vs private price comparisons.
                </>
            ),
            link: '/routes/jeddah-makkah/',
            icon: Plane
        },
        {
            name: 'Makkah → Madinah',
            distance: '450 km',
            duration: '4-5 hours',
            price: 'WhatsApp Booking',
            description: 'Complete your Umrah journey with comfortable transfer between the two holy cities. Rest stops included.',
            link: '/routes/makkah-madinah/',
            icon: Navigation
        },
        {
            name: 'Makkah City Transport',
            distance: 'Within city',
            duration: '15-30 minutes',
            price: 'WhatsApp Booking',
            description: 'Hotel to Haram private transfer service. Available 24/7 for prayers and Ziyarat tours.',
            link: '/locations/makkah/',
            icon: MapPin
        },
        {
            name: 'Madinah City Transport',
            distance: 'Within city',
            duration: '15-30 minutes',
            price: 'WhatsApp Booking',
            description: 'Hotel to Prophet\'s Mosque and Ziyarat sites. Professional drivers with local knowledge.',
            link: '/locations/madinah/',
            icon: MapPin
        },
    ];

    const vehicles = [
        {
            name: 'Toyota Camry',
            capacity: '4 passengers',
            luggage: '2 large bags',
            ideal: 'Solo travelers or couples',
            features: ['Air conditioning', 'Comfortable seats', 'Zamzam water holder']
        },
        {
            name: 'GMC Yukon',
            capacity: '7 passengers',
            luggage: '5 large bags',
            ideal: 'Families with luggage',
            features: ['Spacious interior', 'Roof carrier (for larger bags)', 'Child seat available']
        },
        {
            name: 'Toyota Hiace',
            capacity: '11 passengers',
            luggage: '16 large bags',
            ideal: 'Large Umrah groups',
            features: ['Group transport', 'Ample luggage space', 'Multiple Zamzam containers']
        },
    ];

    const features = [
        'Ministry of Transport Licensed Captains',
        'Meeqat Stopovers (As Sayl Al Kabir / Dhul Hulaifah)',
        'Ziyarat Knowledge (Quba Mosque, Jabal Al-Nour)',
        'Flight tracking for airport pickups',
        'Meet-and-greet service at arrivals',
        'Prayer time awareness and flexibility',
        'Zamzam water container accommodation',
        'Fixed rates with no surge pricing',
        'English, Arabic & Urdu speaking drivers',
    ];

    const faqs = [
        {
            question: "Do you provide self-drive car rental for Umrah?",
            answer: "No. All our vehicles come with professional licensed drivers. We do not offer self-drive car rental. This ensures safety, local route knowledge, and compliance with Saudi traffic regulations. Drivers are experienced with Umrah routes and prayer schedules."
        },
        {
            question: "What is included in the Umrah transport service?",
            answer: "Umrah transport service includes: professional driver, vehicle fuel, airport meet-and-greet (for airport pickups), flight tracking, prayer breaks, rest stops (for long journeys), and Zamzam water container accommodation. All vehicles are air-conditioned and regularly maintained."
        },
        {
            question: "How much is a Toyota Hiace or Coaster for Makkah to Madinah?",
            answer: "We offer Toyota Hiace (11-12 seater) and Toyota Coaster (20+ seater) for large groups. Contact us for the latest group transport rates. This includes fuel and driver."
        },
        {
            question: "Do you have Hyundai Staria or Starex for rent with driver?",
            answer: "Yes, our fleet includes Hyundai Staria and H1 (Starex) vans, ideal for families of 5-7 people. These provide a comfortable ride with ample luggage space for Umrah trips."
        },
        {
            question: "Can the driver wait during Umrah or prayers?",
            answer: (
                <>
                    Yes. Drivers can wait during Umrah rituals or prayers. For those{' '}
                    <Link href='/guides/umrah-tawaf-guide/' className='text-primary hover:underline'>
                        performing your Tawaf and Sa'i
                    </Link>
                    , drivers typically drop off at the nearest Haram entrance and pick up after completion. Flexible scheduling is available for Ziyarat tours.
                </>
            )
        },
        {
            question: "Do drivers speak English for international pilgrims?",
            answer: "Yes. All drivers speak English and Arabic. Many drivers also speak Urdu for Pakistani and Indian pilgrims. Drivers are trained to assist international pilgrims with basic Umrah guidance and local directions."
        },
        {
            question: "Is VIP transfer service available 24/7 during Ramadan and Hajj season?",
            answer: "Yes. Our best transfer service operates 24/7 throughout the year, including Ramadan and Hajj season. During peak periods, advance booking (48-72 hours) is strongly recommended due to high demand. Priority is given to pre-booked customers."
        },
        {
            question: "Can I Request a quote for a driver for multiple days during Umrah?",
            answer: "Yes. Multi-day driver service is available. Rates are quoted per day or per trip depending on itinerary. Common packages include: 3-day Makkah service, 5-day Makkah + Madinah service, or custom duration. Contact us for multi-day pricing."
        },
        {
            question: "What happens if my flight is delayed?",
            answer: "Flight tracking is included for all airport pickups. Driver monitors flight status and adjusts pickup time automatically. No extra charges for flight delays up to 3 hours. For delays over 3 hours, please notify us via email for driver rescheduling."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Umrah VIP Transport"
                description="Premium private transport service for Umrah pilgrims in KSA. Specialized in Makkah and Madinah hotel transfers, Meeqat stops, and intercity pilgrimage routes."
                services={[
                    { name: 'Jeddah to Makkah Transfer', description: 'Direct VIP pickup from KAIA terminal to your Makkah hotel.' },
                    { name: 'Makkah to Madinah VIP', description: 'Comfortable 450km private transfer with flexible rest stops.' },
                    { name: 'Umrah Meeqat Service', description: 'Drivers familiar with all Meeqat locations for احرام (Ihram) rituals.' },
                    { name: 'Family Group Vans', description: 'Spacious Toyota Hiace and GMC Yukon for large pilgrim groups.' }
                ]}
                
                image="https://taxiserviceksa.com/makkah-kaaba-night.webp"
            />
            <JsonLdFAQ faqs={faqs.map(f => ({
                question: f.question,
                answer: typeof f.answer === 'string'
                    ? f.answer
                    : "Yes. Drivers can wait during Umrah rituals or prayers. For those performing your Tawaf and Sa'i, drivers typically drop off at the nearest Haram entrance and pick up after completion. Flexible scheduling is available for Ziyarat tours."
            }))} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/makkah-kaaba-night.webp')] bg-cover bg-center"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                        Elite Pilgrimage Logistics
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4">
                        VIP Umrah Transport Service
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                        Perform your Umrah with peace of mind. We provide <strong>premium private transfers</strong> between Jeddah Airport, Makkah, and Madinah with professional, licensed drivers.
                    </p>
                </div>

                {/* AI SEO: TL;DR Summary Block */}
                <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-sm mb-12 max-w-7xl mx-auto mx-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                        TL;DR: Umrah Transport Quick Facts
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm">
                        <li><strong>Standard Route:</strong> JED Airport to Makkah (80km) is usually 60-90 mins.</li>
                        <li><strong>Pilgrim Pickups:</strong> Drivers wait at the <strong>Arrivals Hall</strong> with name signs.</li>
                        <li><strong>Holy Route:</strong> Makkah to Madinah (450km) private transfers allow unlimited stops.</li>
                        <li><strong>Pricing:</strong> Guaranteed <strong>WhatsApp Booking</strong> covering all highway tolls and Zamzam carriers.</li>
                    </ul>
                </div>
                </div>
            </section>

            {/* Umrah Routes Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Best VIP Umrah Transfers</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive and reliable transport packages for every stage of your pilgrimage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {umrahRoutes.map((route, index) => (
                            <Link key={index} href={route.link} className="group">
                                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border-2 border-gray-200 hover:border-primary h-full">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                                            <route.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                                                {route.name}
                                            </h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Navigation className="w-4 h-4" />
                                                    {route.distance}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {route.duration}
                                                </span>
                                                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                                                    <DollarSign className="w-4 h-4" />
                                                    {route.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{route.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

                {/* Umrah Routes Comparison Table for AI Extraction */}
                <div className="mb-16 overflow-x-auto bg-white rounded-2xl border-2 border-gray-100 p-6 max-w-7xl mx-auto">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Navigation className="w-5 h-5 text-emerald-600" /> Pilgrimage Routes
                    </h3>
                    <table className="min-w-full text-left text-sm">
                        <thead className="border-b border-gray-200">
                            <tr>
                                <th className="py-3 font-bold">Route Name</th>
                                <th className="py-3 font-bold">Trip Duration</th>
                                <th className="py-3 font-bold">Wait Policy</th>
                                <th className="py-3 font-bold">Route Type</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="py-4 font-bold">JED → Makkah</td>
                                <td className="py-4">1 hr 15 min</td>
                                <td className="py-4 font-medium text-emerald-700">90 mins Free</td>
                                <td className="py-4 font-bold text-emerald-600">JED Airport Gateway</td>
                            </tr>
                            <tr>
                                <td className="py-4 font-bold">Makkah ↔ Madinah</td>
                                <td className="py-4">4 hr 30 min</td>
                                <td className="py-4 font-medium text-emerald-700">Unlimited Stops</td>
                                <td className="py-4 font-bold text-emerald-600">Holy Cities Connector</td>
                            </tr>
                            <tr>
                                <td className="py-4 font-bold">Ziyarat Tours</td>
                                <td className="py-4">Custom (4-6h)</td>
                                <td className="py-4 font-medium text-emerald-700">Flexible</td>
                                <td className="py-4 font-bold text-emerald-600">Madinah/Makkah Sightseeing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Popular Routes - Grid */}

            {/* Vehicles Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">VIP Executive Fleet</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Modern, air-conditioned vehicles dedicated to private transfers. We do not provide local street hail services—only pre-booked executive transportation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {vehicles.map((vehicle, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                                <Car className="w-12 h-12 text-black mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Users className="w-5 h-5 text-gray-400" />
                                        <span>{vehicle.capacity}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <CheckCircle2 className="w-5 h-5 text-gray-400" />
                                        <span>{vehicle.luggage}</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200 mb-4">
                                    <p className="text-sm text-gray-500 mb-3">
                                        <strong className="text-gray-900">Ideal for:</strong> {vehicle.ideal}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    {vehicle.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Trusted Umrah Transport</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Internal Links Hub */}
            <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Car className="w-5 h-5 text-primary" /> Specialist Umrah Fleet
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                    <span>GMC Yukon (Luxury Family)</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                    <span>Toyota Hiace (Group Van)</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/fleet/" className="text-primary font-bold hover:underline">Compare All Vehicles →</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-primary" /> Pilgrimage Locations
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/locations/makkah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                    <span>Makkah (Haram Area)</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/madinah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                    <span>Madinah (Prophet's City)</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/jeddah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                    <span>Jeddah (Airport Gateway)</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Related Guides Section */}
            <RelatedGuides blogs={displayBlogs} title="Essential Umrah Guides" subtitle="Tips, checklists, and spiritual insights for your pilgrimage." />

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left hover:no-underline py-4">
                                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white mb-16 mx-4 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 px-4">
                    Ready for Your Umrah Journey?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
                    Get a quote for your professional Umrah transport today. Expert drivers, clean vehicles, and guaranteed fixed prices for your peace of mind.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                    <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto">
                        <Link href="/booking/">
                            Book Umrah Taxi
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto">
                        <Link href="/services/madinah-ziyarat/">
                            Madinah Ziyarat
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Author Section */}
            <div className="max-w-4xl mx-auto pb-20 px-4 sm:px-6 lg:px-8">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-emerald-50" />
            </div>
        </div>
    );
}

