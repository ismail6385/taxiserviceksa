import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, Car, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Service Locations | VIP Private Transfer KSA',
    description: 'Premium VIP private transfer service across Saudi Arabia. Professional executive chauffeurs for airport transfers & tours in Jeddah, Makkah, Madinah, Riyadh, AlUla & Taif.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/',
    },
};

const locations = [
    {
        name: 'Jeddah',
        description: 'VIP airport transfers and premium city tours in the Bride of the Red Sea.',
        image: '/jeddah-corniche-sunset.webp',
        href: '/locations/jeddah/'
    },
    {
        name: 'Makkah',
        description: 'Reliable VIP transport for Umrah pilgrims and sacred Ziyarat.',
        image: '/makkah-kaaba-night.webp',
        href: '/locations/makkah/'
    },
    {
        name: 'Madinah',
        description: 'Comfortable VIP journeys to the Prophet\'s City.',
        image: '/madinah-prophets-mosque.webp',
        href: '/locations/madinah/'
    },
    {
        name: 'Riyadh',
        description: 'Executive corporate transport and VIP airport transfers in the capital.',
        image: '/hero-slide-1.webp',
        href: '/locations/riyadh/'
    },
    {
        name: 'AlUla',
        description: 'Explore ancient wonders with premium private transfers.',
        image: '/alula-hegra-tombs.webp',
        href: '/locations/alula/'
    },
    {
        name: 'Taif',
        description: 'Scenic VIP mountain drives to the City of Roses.',
        image: '/taif-mountains-view.webp',
        href: '/locations/taif/'
    },
    {
        name: 'Yanbu',
        description: 'Industrial VIP transport and Red Sea executive services.',
        image: '/hero-slide-2.webp',
        href: '/locations/yanbu/'
    },
    {
        name: 'Khayber Fort',
        description: 'Exclusive heritage tours to the ancient oases of Khaybar.',
        image: '/hero-slide-2.webp',
        href: '/locations/khayber-fort/'
    },
    {
        name: 'Dammam',
        description: 'VIP airport and executive city transfers in the administrative hub.',
        image: '/hero-slide-3.webp',
        href: '/locations/dammam/'
    },
    {
        name: 'Al Khobar',
        description: 'Luxury transport for Corniche, hotels, and Causeway trips.',
        image: '/hero-slide-4.webp',
        href: '/locations/al-khobar/'
    },
    {
        name: 'Dhahran',
        description: 'Professional service for Energy and Industrial hubs (Aramco/Ithra).',
        image: '/hero-slide-5.webp',
        href: '/locations/dhahran/'
    }
];

export default function LocationsPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Destinations</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Service Locations</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We serve all major cities and historical sites in Saudi Arabia. Before you travel, check our <Link href="/guides/makkah-umrah-guide/" className="text-gray-900 font-bold hover:underline underline-offset-4 decoration-primary">Makkah Umrah Guide</Link> for local advice.
                        Choose your destination and book your <Link href="/routes/" className="text-gray-900 font-bold hover:underline underline-offset-4 decoration-primary">intercity route</Link> today.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((loc, index) => (
                        <Link key={index} href={loc.href} className="group block h-full">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={loc.image}
                                        alt={loc.name}
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="flex items-center gap-2 mb-1">
                                            <MapPin className="w-5 h-5 text-primary" />
                                            <h3 className="text-2xl font-bold">{loc.name}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="text-gray-600 mb-6 flex-1">{loc.description}</p>
                                    <div className="flex items-center text-gray-900 font-bold group-hover:translate-x-2 transition-transform">
                                        View Services <ArrowRight className="ml-2 w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 border-y border-amber-200 bg-amber-50 rounded-3xl p-6 text-center shadow-md mb-12">
                    <p className="text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked VIP Private Transfers, Intercity, and Airport services. We do NOT provide local short-distance hailing.
                    </p>
                </div>

                <div className="mt-20 bg-gray-900 text-white rounded-3xl p-12 text-center shadow-xl">
                    <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Journey?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                        Whether you are arriving at JED, RUH, or MED, our executive chauffeurs are ready to welcome you.
                        Experience the most <Link href='/booking/' className='text-white font-bold underline decoration-primary'>reliable VIP transfer service in Saudi Arabia</Link> at fixed rates.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/booking/">
                            <Button className="bg-primary text-white hover:bg-white hover:text-black font-bold px-10 py-6 text-lg rounded-xl flex items-center gap-2">
                                <Car className="w-5 h-5" />
                                Book Your Ride Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
