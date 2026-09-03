import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, ArrowRight, Navigation, DollarSign, Luggage, PhoneCall, UserCheck } from 'lucide-react';
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
    title: 'Private Umrah Taxi & Transport Service in Saudi Arabia | Taxi Service KSA',
    description: 'Private Umrah taxi service: Jeddah Airport to Makkah, Makkah to Madinah, and Ziyarat transfers with licensed drivers. Fixed rates from 300 SAR, flight tracking, 24/7 booking.',
    keywords: ['Umrah taxi service', 'Umrah transport Saudi Arabia', 'Jeddah Airport to Makkah taxi', 'Makkah to Madinah taxi', 'private Umrah transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/umrah-transport/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/umrah-transport/',
            'ar': 'https://taxiserviceksa.com/ar/services/umrah-transport/',
            'ur': 'https://taxiserviceksa.com/ur/services/umrah-transport/',
            'x-default': 'https://taxiserviceksa.com/services/umrah-transport/',
        },
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private Umrah Taxi & Transport Service in Saudi Arabia | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Private Umrah Taxi & Transport Service in Saudi Arabia | Taxi Service KSA',
        description: 'Private Umrah taxi service: Jeddah Airport to Makkah, Makkah to Madinah, and Ziyarat transfers with licensed drivers. Fixed rates, flight tracking, 24/7 booking.',
        url: 'https://taxiserviceksa.com/services/umrah-transport/',
        type: 'website',
    },
};

export default async function UmrahTransportPage() {
    const blogs = await blogService.getBlogsByCategory('Umrah Guide');
    const displayBlogs = blogs.slice(0, 3);

    const umrahRoutes = [
        {
            name: 'Jeddah Airport → Makkah',
            distance: '80 km',
            duration: '60-90 minutes',
            price: 'From 300 SAR',
            description: (
                <>
                    Direct transfer from King Abdulaziz International Airport to your Makkah hotel. See the{' '}
                    <Link href="/routes/jeddah-makkah/" className="text-emerald-700 hover:underline">
                        full Jeddah to Makkah route page
                    </Link>{' '}
                    for vehicle-by-vehicle pricing.
                </>
            ),
            link: '/routes/jeddah-makkah/',
            icon: Plane
        },
        {
            name: 'Makkah → Madinah',
            distance: '450 km',
            duration: '4-5 hours',
            price: 'From 400 SAR',
            description: 'Door-to-door transfer between the two holy cities, with rest and prayer stops arranged along the way.',
            link: '/routes/makkah-madinah/',
            icon: Navigation
        },
        {
            name: 'Makkah City Transport',
            distance: 'Within city',
            duration: '15-30 minutes',
            price: 'WhatsApp for quote',
            description: 'Hotel to Haram private transfer service. Available 24/7 for prayers and Ziyarat tours.',
            link: '/locations/makkah/',
            icon: MapPin
        },
        {
            name: 'Madinah City Transport',
            distance: 'Within city',
            duration: '15-30 minutes',
            price: 'WhatsApp for quote',
            description: "Hotel to Prophet's Mosque and Ziyarat sites, with drivers who know the local drop-off points.",
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
            features: ['Air conditioning', 'Zamzam water holder']
        },
        {
            name: 'Hyundai Staria',
            capacity: '7 passengers',
            luggage: '4+ large bags',
            ideal: 'Families wanting extra comfort',
            features: ['Captain seats', 'Dual-zone AC']
        },
        {
            name: 'GMC Yukon',
            capacity: '7 passengers',
            luggage: '5 large bags',
            ideal: 'Families with heavier luggage',
            features: ['Roof carrier available', 'Child seat on request']
        },
        {
            name: 'Toyota Hiace',
            capacity: '11 passengers',
            luggage: 'Group luggage load',
            ideal: 'Large Umrah groups',
            features: ['Group transport', 'Space for multiple Zamzam containers']
        },
    ];

    const included = [
        { icon: Car, label: 'Private vehicle' },
        { icon: UserCheck, label: 'Licensed professional driver' },
        { icon: DollarSign, label: 'Fuel' },
        { icon: Shield, label: 'Highway tolls where the route has them' },
        { icon: Plane, label: 'Flight monitoring for airport pickups' },
        { icon: Luggage, label: 'Luggage and Zamzam container space' },
        { icon: Clock, label: 'Rest and prayer stops arranged on request' },
        { icon: PhoneCall, label: '24/7 booking support' },
    ];

    const faqs = [
        {
            question: "Do you provide self-drive car rental for Umrah?",
            answer: "No. Every vehicle comes with a professional licensed driver — we don't offer self-drive rental. This keeps you compliant with Saudi traffic regulations and means your driver already knows the Umrah routes, Meeqat points, and Haram-area drop-off rules."
        },
        {
            question: "What is included in the Umrah transport service?",
            answer: "Your fare includes the private vehicle, driver, fuel, highway tolls where the route has them, flight monitoring for airport pickups, and space for your luggage and Zamzam containers. Rest and prayer stops can be arranged when you book — see \"What Is Included\" above for the full list."
        },
        {
            question: "How much does Umrah transport cost in Saudi Arabia?",
            answer: "Price depends on the route, vehicle, and passenger count. Jeddah Airport to Makkah starts from 300 SAR (sedan) up to 600 SAR (GMC Yukon). Makkah to Madinah starts from 400 SAR (sedan) up to 800 SAR (Toyota Hiace). WhatsApp us your route, date, and passenger count for a fixed quote."
        },
        {
            question: "How much is a Toyota Hiace for Makkah to Madinah?",
            answer: "The Toyota Hiace (11 passengers) for Makkah to Madinah starts from 800 SAR, covering the full 450km journey with fuel and driver included. Contact us for current group rates and availability."
        },
        {
            question: "Do you have Hyundai Staria for Umrah transfers?",
            answer: "Yes, the Hyundai Staria seats 7 passengers with captain seats and dual-zone air conditioning — a popular choice for families who want more comfort than a standard SUV, available on both the Jeddah-Makkah and Makkah-Madinah routes."
        },
        {
            question: "Can the driver wait during Umrah rituals or prayers?",
            answer: (
                <>
                    Yes. Drivers can wait during Umrah rituals or prayers. For those{' '}
                    <Link href='/guides/umrah-tawaf-guide/' className='text-primary hover:underline'>
                        performing Tawaf and Sa'i
                    </Link>
                    , the driver typically drops off at the nearest Haram entrance and picks up after you're done. Flexible scheduling is available for Ziyarat tours too.
                </>
            )
        },
        {
            question: "Do drivers speak English for international pilgrims?",
            answer: "Yes, all drivers speak English and Arabic, and many also speak Urdu. Drivers can help with basic Umrah guidance and local directions, especially around Meeqat stops and Haram-area drop-off points."
        },
        {
            question: "Is transfer service available 24/7 during Ramadan and Hajj season?",
            answer: "Yes, service runs 24/7 year-round, including Ramadan and Hajj season. During peak periods we recommend booking 48-72 hours ahead, since demand is much higher and pre-booked customers get priority."
        },
        {
            question: "Can I book a driver for multiple days during Umrah?",
            answer: "Yes, multi-day driver service is available, quoted per day or per trip depending on your itinerary — common packages are a 3-day Makkah stay or a 5-day Makkah plus Madinah trip. WhatsApp us your dates for a custom quote."
        },
        {
            question: "What happens if my flight is delayed?",
            answer: "We track your flight status and adjust your driver's pickup time automatically, at no extra charge for delays up to 3 hours. For longer delays, message us so we can reschedule your driver."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Umrah Transport"
                description="Private transport service for Umrah pilgrims in Saudi Arabia. Jeddah Airport to Makkah, Makkah to Madinah, and Ziyarat transfers with licensed drivers."
                services={[
                    { name: 'Jeddah to Makkah Transfer', description: 'Direct pickup from KAIA terminal to your Makkah hotel.' },
                    { name: 'Makkah to Madinah', description: 'Comfortable 450km private transfer with arranged rest stops.' },
                    { name: 'Umrah Meeqat Service', description: 'Drivers familiar with Meeqat locations for entering Ihram.' },
                    { name: 'Family Group Vans', description: 'Toyota Hiace and GMC Yukon for larger pilgrim groups.' }
                ]}

                image="https://taxiserviceksa.com/makkah-kaaba-night.webp"
            />
            <JsonLdFAQ faqs={faqs.map(f => ({
                question: f.question,
                answer: typeof f.answer === 'string'
                    ? f.answer
                    : "Yes. Drivers can wait during Umrah rituals or prayers. For those performing Tawaf and Sa'i, the driver typically drops off at the nearest Haram entrance and picks up after you're done. Flexible scheduling is available for Ziyarat tours too."
            }))} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/makkah-kaaba-night.webp')] bg-cover bg-center"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-primary/20 text-primary font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-sm border border-primary/20">
                        Umrah Transport
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 px-4 leading-tight">Private Umrah Taxi &amp; Transport Service in Saudi Arabia</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 mb-10">
                        Private transfers between Jeddah Airport, Makkah, and Madinah with licensed drivers — one vehicle, door-to-door, at a fixed price agreed before you travel.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-12">
                        <Button asChild size="lg" className="bg-primary hover:bg-emerald-600 text-white font-black text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            <Link href="https://wa.me/966590209905?text=Hello,%20I%20want%20to%20book%20Umrah%20Transport" target="_blank">
                                Book via WhatsApp
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl transition-all w-full sm:w-auto">
                            <Link href="#pricing">
                                See Route Pricing
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-sm mb-12 max-w-7xl mx-auto mx-4 text-left">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                        Umrah Transport Quick Facts
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm">
                        <li><strong className="text-gray-900">Jeddah Airport to Makkah:</strong> 80km, usually 60-90 minutes, from 300 SAR.</li>
                        <li><strong className="text-gray-900">Pickups:</strong> Drivers wait at the Arrivals Hall with a name sign.</li>
                        <li><strong className="text-gray-900">Makkah to Madinah:</strong> 450km, around 4-5 hours, from 400 SAR.</li>
                        <li><strong className="text-gray-900">Stops:</strong> Rest and prayer stops can be arranged when you book.</li>
                    </ul>
                </div>
            </section>

            {/* Umrah Routes Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Umrah Transport Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Every stage of the journey — airport arrival, the road between the holy cities, and getting around once you're there.
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

            {/* How It Works */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Our Umrah Taxi Service Works</h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            { step: '1', title: 'Airport Arrival', desc: 'Your driver monitors your flight and waits at the agreed arrival meeting point at King Abdulaziz International Airport.' },
                            { step: '2', title: 'Meet & Greet', desc: "The driver identifies himself with your booking name and helps with luggage — no waiting in the taxi rank." },
                            { step: '3', title: 'Direct Makkah Transfer', desc: 'One private vehicle takes you directly to your Makkah hotel, with a Meeqat stop arranged if you need to enter Ihram en route.' },
                            { step: '4', title: 'Makkah → Madinah', desc: 'Door-to-door transfer via the main intercity route, with rest and prayer stops arranged along the way.' },
                            { step: '5', title: 'Madinah Transfer', desc: 'Hotel pickup and drop-off for your departure flight, or for Ziyarat trips around Madinah.' },
                        ].map((s) => (
                            <div key={s.step} className="flex gap-6 bg-white p-6 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-lg shrink-0">{s.step}</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jeddah Airport Pickup detail */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Jeddah Airport Pickup for Umrah Pilgrims</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            If you're arriving at King Abdulaziz International Airport, our{' '}
                            <Link href="/routes/jeddah-makkah/" className="text-primary font-bold underline decoration-primary/30 hover:decoration-primary">
                                Jeddah Airport to Makkah taxi service
                            </Link>{' '}
                            provides a direct private transfer to your hotel — no shared shuttle, no queueing for a street taxi after a long flight.
                        </p>
                        <ul className="space-y-3 mt-6">
                            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /><span className="text-gray-700">Driver waits in the arrivals hall with a name board</span></li>
                            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /><span className="text-gray-700">Flight status is monitored, so a delayed flight doesn't leave you waiting</span></li>
                            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /><span className="text-gray-700">Luggage and Zamzam container space accounted for in your vehicle choice</span></li>
                            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /><span className="text-gray-700">Meeqat stop at As Sayl al-Kabir or your relevant boundary point, on request</span></li>
                        </ul>
                    </div>
                    <div className="relative">
                        <Image
                            src="/jeddah-airport-terminal.webp"
                            alt="Umrah pilgrim airport pickup at King Abdulaziz International Airport"
                            width={700}
                            height={550}
                            className="rounded-2xl shadow-2xl w-full h-auto border-4 border-white"
                        />
                    </div>
                </div>
            </section>

            {/* Makkah to Madinah detail */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <Image
                            src="/madinah-prophets-mosque.webp"
                            alt="Private taxi transfer between Makkah and Madinah for Umrah pilgrims"
                            width={700}
                            height={550}
                            className="rounded-2xl shadow-2xl w-full h-auto border-4 border-white"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Makkah to Madinah Private Transport</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            Pilgrims continuing to the second holy city can book our{' '}
                            <Link href="/routes/makkah-madinah/" className="text-primary font-bold underline decoration-primary/30 hover:decoration-primary">
                                Makkah to Madinah private taxi
                            </Link>{' '}
                            — a 450km door-to-door transfer, usually 4-5 hours depending on traffic and how many stops you take.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Additional rest or prayer stops can be requested when arranging your booking — just tell your driver or mention it when you book. For sightseeing and religious visits once you arrive, see our{' '}
                            <Link href="/services/madinah-ziyarat/" className="text-primary font-bold underline decoration-primary/30 hover:decoration-primary">
                                Madinah Ziyarat transport service
                            </Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vehicles Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Umrah Vehicles for Couples, Families &amp; Groups</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Pre-booked private vehicles only — we don't offer local street-hail service.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.map((vehicle, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                                <Car className="w-10 h-10 text-black mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                                <div className="space-y-1 mb-4 text-sm">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Users className="w-4 h-4 text-gray-400" />
                                        <span>{vehicle.capacity}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Luggage className="w-4 h-4 text-gray-400" />
                                        <span>{vehicle.luggage}</span>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mb-3">
                                    <strong className="text-gray-900">Best for:</strong> {vehicle.ideal}
                                </p>
                                <div className="space-y-1.5 pt-3 border-t border-gray-200">
                                    {vehicle.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full shrink-0"></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Is Included in Your Transfer?</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {included.map((item) => (
                            <div key={item.label} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100">
                                <item.icon className="w-5 h-5 text-emerald-600 shrink-0" />
                                <span className="text-sm font-bold text-gray-800">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Group sizes */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Umrah Transport for Every Traveler</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">From solo pilgrims to large groups, the vehicle is matched to who's actually travelling.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Solo Pilgrims & Couples', desc: 'A Toyota Camry sedan is usually the most cost-effective choice for 1-2 travelers with standard luggage.' },
                            { title: 'Families (3-7 people)', desc: 'The Hyundai Staria or GMC Yukon give extra room for children, elderly parents, and family luggage.' },
                            { title: 'Elderly & Wheelchair Pilgrims', desc: 'Tell us in advance if a passenger needs extra time or wheelchair assistance so the driver can plan accordingly.' },
                            { title: 'Large Groups', desc: 'The Toyota Hiace covers up to 11 passengers travelling together, with room for group luggage and Zamzam containers.' },
                        ].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                <h3 className="font-black text-gray-900 mb-2 text-sm">{item.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why choose us - specifics not adjectives */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Pilgrims Choose Taxi Service KSA</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            'Ministry of Transport licensed drivers, not self-drive rental',
                            'Drivers know Meeqat points including As Sayl al-Kabir and Dhul Hulaifah',
                            'Flight status monitored automatically for every airport pickup',
                            'Fixed price agreed on WhatsApp before you travel, no meter',
                            'English, Arabic, and Urdu-speaking drivers available',
                            'Same driver can wait during Tawaf, Sa\'i, or prayers',
                            'Multi-day driver hire available for the full Umrah trip',
                            'Advance booking recommended for Ramadan and Hajj season',
                        ].map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium leading-relaxed text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Internal Links Hub */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Car className="w-5 h-5 text-primary" /> Umrah Fleet
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>GMC Yukon (Family SUV)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/fleet/hyundai-staria/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Hyundai Staria (Family Van)</span>
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
                                <li>
                                    <Link href="/services/madinah-ziyarat/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Madinah Ziyarat Transport</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
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
                    Book Your Umrah Transfer
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
                    Send your route, date, and passenger count on WhatsApp for a fixed-price quote — licensed drivers, clean vehicles, no meter surprises.
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
