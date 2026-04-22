import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, Car, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Service Locations | VIP Private Transfer KSA | Taxi Service KSA',
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
    },
    {
        name: 'Tabuk',
        description: 'Giga-project transfers and intercity services to NEOM and AlUla.',
        image: '/hero-slide-1.webp',
        href: '/locations/tabuk/'
    },
    {
        name: 'Abha',
        description: 'Explore the highest peaks and coolest climates of the Aseer region.',
        image: '/hero-slide-4.webp',
        href: '/locations/abha/'
    },
    {
        name: 'Jubail',
        description: 'Executive transport to the largest industrial city in the Middle East.',
        image: '/hero-slide-5.webp',
        href: '/locations/jubail/'
    },
    {
        name: 'NEOM',
        description: 'Professional transfers to the future of urban living and development.',
        image: '/hero-slide-1.webp',
        href: '/locations/neom/'
    },
    {
        name: 'Makkah Ziyarat',
        description: 'Respectful and comprehensive spiritual tours of Makkah\'s holy sites.',
        image: '/makkah-grand-mosque.webp',
        href: '/locations/makkah-ziyarat/'
    },
    {
        name: 'Jeddah to Makkah',
        description: 'Seamless transfers from the airport directly to your hotel in Makkah.',
        image: '/jeddah_makkah_route_map.png',
        href: '/locations/jeddah-makkah/'
    },
    {
        name: 'Khamis Mushait',
        description: 'VIP transfers and corporate transport in the Aseer region commercial hub.',
        image: '/hero-slide-2.webp',
        href: '/locations/khamis-mushait/'
    },
    {
        name: 'Hail',
        description: 'Explore the north with our premium executive transport and tours.',
        image: '/hero-slide-3.webp',
        href: '/locations/hail/'
    },
    {
        name: 'Buraidah',
        description: 'Reliable private transfers in the heart of the Qassim agricultural region.',
        image: '/hero-slide-1.webp',
        href: '/locations/buraidah/'
    },
    {
        name: 'Najran',
        description: 'Secure and comfortable rides to the southern historical border city.',
        image: '/hero-slide-4.webp',
        href: '/locations/najran/'
    },
    {
        name: 'Al Qassim',
        description: 'Professional chauffeur services connecting the towns of Al Qassim.',
        image: '/hero-slide-5.webp',
        href: '/locations/al-qassim/'
    },
    {
        name: 'Al Ahsa',
        description: 'Premium transport to the largest UNESCO world heritage oasis.',
        image: '/hero-slide-2.webp',
        href: '/locations/al-ahsa/'
    },
    {
        name: 'Jizan',
        description: 'Professional intercity transfer and taxi services for Jizan.',
        image: '/hero-slide-1.webp',
        href: '/locations/jizan/'
    },
    {
        name: 'Sakaka',
        description: 'Professional intercity transfer and taxi services for Sakaka.',
        image: '/hero-slide-2.webp',
        href: '/locations/sakaka/'
    },
    {
        name: 'Arar',
        description: 'Professional intercity transfer and taxi services for Arar.',
        image: '/hero-slide-3.webp',
        href: '/locations/arar/'
    },
    {
        name: 'Al Bahah',
        description: 'Professional intercity transfer and taxi services for Al Bahah.',
        image: '/hero-slide-4.webp',
        href: '/locations/al-bahah/'
    },
    {
        name: 'Al Majma\'ah',
        description: 'Professional intercity transfer and taxi services for Al Majma\'ah.',
        image: '/hero-slide-5.webp',
        href: '/locations/al-majmaah/'
    },
    {
        name: 'Hofuf',
        description: 'Professional intercity transfer and taxi services for Hofuf.',
        image: '/hero-slide-1.webp',
        href: '/locations/hofuf/'
    },
    {
        name: 'Khafji',
        description: 'Professional intercity transfer and taxi services for Khafji.',
        image: '/hero-slide-2.webp',
        href: '/locations/khafji/'
    },
    {
        name: 'Qurayyat',
        description: 'Professional intercity transfer and taxi services for Qurayyat.',
        image: '/hero-slide-3.webp',
        href: '/locations/qurayyat/'
    },
    {
        name: 'Turaif',
        description: 'Professional intercity transfer and taxi services for Turaif.',
        image: '/hero-slide-4.webp',
        href: '/locations/turaif/'
    },
    {
        name: 'Duba',
        description: 'Professional intercity transfer and taxi services for Duba.',
        image: '/hero-slide-5.webp',
        href: '/locations/duba/'
    },
    {
        name: 'Umluj',
        description: 'Professional intercity transfer and taxi services for Umluj.',
        image: '/hero-slide-1.webp',
        href: '/locations/umluj/'
    },
    {
        name: 'Hafar Al Batin',
        description: 'Professional intercity transfer and taxi services for Hafar Al Batin.',
        image: '/hero-slide-2.webp',
        href: '/locations/hafar-al-batin/'
    },
    {
        name: 'Rabigh',
        description: 'Professional intercity transfer and taxi services for Rabigh.',
        image: '/hero-slide-3.webp',
        href: '/locations/rabigh/'
    },
    {
        name: 'Al Lith',
        description: 'Professional intercity transfer and taxi services for Al Lith.',
        image: '/hero-slide-4.webp',
        href: '/locations/al-lith/'
    },
    {
        name: 'Al Wajh',
        description: 'Professional intercity transfer and taxi services for Al Wajh.',
        image: '/hero-slide-5.webp',
        href: '/locations/al-wajh/'
    },
    {
        name: 'Khulais',
        description: 'Professional intercity transfer and taxi services for Khulais.',
        image: '/hero-slide-1.webp',
        href: '/locations/khulais/'
    },
    {
        name: 'Thadiq',
        description: 'Professional intercity transfer and taxi services for Thadiq.',
        image: '/hero-slide-2.webp',
        href: '/locations/thadiq/'
    },
    {
        name: 'Zulfi',
        description: 'Professional intercity transfer and taxi services for Zulfi.',
        image: '/hero-slide-3.webp',
        href: '/locations/zulfi/'
    },
    {
        name: 'Dariya',
        description: 'Professional intercity transfer and taxi services for Dariya.',
        image: '/hero-slide-4.webp',
        href: '/locations/dariya/'
    },
    {
        name: 'Al-Qunfudhah',
        description: 'Professional intercity transfer and taxi services for Al-Qunfudhah.',
        image: '/hero-slide-5.webp',
        href: '/locations/al-qunfudhah/'
    },
    {
        name: 'Bishah',
        description: 'Professional intercity transfer and taxi services for Bishah.',
        image: '/hero-slide-1.webp',
        href: '/locations/bishah/'
    },
    {
        name: 'Mahad al-Dhahab',
        description: 'Professional intercity transfer and taxi services for Mahad al-Dhahab.',
        image: '/hero-slide-2.webp',
        href: '/locations/mahad-al-dhahab/'
    },
    {
        name: 'Afif',
        description: 'Professional intercity transfer and taxi services for Afif.',
        image: '/hero-slide-3.webp',
        href: '/locations/afif/'
    },
    {
        name: 'Dawadmi',
        description: 'Professional intercity transfer and taxi services for Dawadmi.',
        image: '/hero-slide-4.webp',
        href: '/locations/dawadmi/'
    },
    {
        name: 'Wadi ad-Dawasir',
        description: 'Professional intercity transfer and taxi services for Wadi ad-Dawasir.',
        image: '/hero-slide-5.webp',
        href: '/locations/wadi-ad-dawasir/'
    },
    {
        name: 'Sharurah',
        description: 'Professional intercity transfer and taxi services for Sharurah.',
        image: '/hero-slide-1.webp',
        href: '/locations/sharurah/'
    },
    {
        name: 'Baljurashi',
        description: 'Professional intercity transfer and taxi services for Baljurashi.',
        image: '/hero-slide-2.webp',
        href: '/locations/baljurashi/'
    },
    {
        name: 'Sabya',
        description: 'Professional intercity transfer and taxi services for Sabya.',
        image: '/hero-slide-3.webp',
        href: '/locations/sabya/'
    },
    {
        name: 'Abu Arish',
        description: 'Professional intercity transfer and taxi services for Abu Arish.',
        image: '/hero-slide-4.webp',
        href: '/locations/abu-arish/'
    },
    {
        name: 'Samtah',
        description: 'Professional intercity transfer and taxi services for Samtah.',
        image: '/hero-slide-5.webp',
        href: '/locations/samtah/'
    },
    {
        name: 'Unaizah',
        description: 'Professional intercity transfer and taxi services for Unaizah.',
        image: '/hero-slide-1.webp',
        href: '/locations/unaizah/'
    },
    {
        name: 'Al-Rass',
        description: 'Professional intercity transfer and taxi services for Al-Rass.',
        image: '/hero-slide-2.webp',
        href: '/locations/al-rass/'
    },
    {
        name: 'Al-Kharj',
        description: 'Professional intercity transfer and taxi services for Al-Kharj.',
        image: '/hero-slide-3.webp',
        href: '/locations/al-kharj/'
    },
    {
        name: 'Al-Muzahmiyya',
        description: 'Professional intercity transfer and taxi services for Al-Muzahmiyya.',
        image: '/hero-slide-4.webp',
        href: '/locations/al-muzahmiyya/'
    },
    {
        name: 'Al-Quway\'iyah',
        description: 'Professional intercity transfer and taxi services for Al-Quway\'iyah.',
        image: '/hero-slide-5.webp',
        href: '/locations/al-quwayiyah/'
    },
    {
        name: 'Huraymila',
        description: 'Professional intercity transfer and taxi services for Huraymila.',
        image: '/hero-slide-1.webp',
        href: '/locations/huraymila/'
    },
    {
        name: 'Rumah',
        description: 'Professional intercity transfer and taxi services for Rumah.',
        image: '/hero-slide-2.webp',
        href: '/locations/rumah/'
    },
    {
        name: 'Al-Ghat',
        description: 'Professional intercity transfer and taxi services for Al-Ghat.',
        image: '/hero-slide-3.webp',
        href: '/locations/al-ghat/'
    },
    {
        name: 'Al-Bukayriyah',
        description: 'Professional intercity transfer and taxi services for Al-Bukayriyah.',
        image: '/hero-slide-4.webp',
        href: '/locations/al-bukayriyah/'
    },
    {
        name: 'Al-Badai',
        description: 'Professional intercity transfer and taxi services for Al-Badai.',
        image: '/hero-slide-5.webp',
        href: '/locations/al-badai/'
    },
    {
        name: 'Al-Midhnab',
        description: 'Professional intercity transfer and taxi services for Al-Midhnab.',
        image: '/hero-slide-1.webp',
        href: '/locations/al-midhnab/'
    },
    {
        name: 'Al-Uyun',
        description: 'Professional intercity transfer and taxi services for Al-Uyun.',
        image: '/hero-slide-2.webp',
        href: '/locations/al-uyun/'
    },
    {
        name: 'Al-Jafr',
        description: 'Professional intercity transfer and taxi services for Al-Jafr.',
        image: '/hero-slide-3.webp',
        href: '/locations/al-jafr/'
    },
    {
        name: 'Al-Mubarraz',
        description: 'Professional intercity transfer and taxi services for Al-Mubarraz.',
        image: '/hero-slide-4.webp',
        href: '/locations/al-mubarraz/'
    },
    {
        name: 'Buqayq',
        description: 'Professional intercity transfer and taxi services for Buqayq.',
        image: '/hero-slide-5.webp',
        href: '/locations/buqayq/'
    },
    {
        name: 'Al-Nairyah',
        description: 'Professional intercity transfer and taxi services for Al-Nairyah.',
        image: '/hero-slide-1.webp',
        href: '/locations/al-nairyah/'
    },
    {
        name: 'Tayma',
        description: 'Professional intercity transfer and taxi services for Tayma.',
        image: '/hero-slide-2.webp',
        href: '/locations/tayma/'
    },
    {
        name: 'Al-Bad',
        description: 'Professional intercity transfer and taxi services for Al-Bad.',
        image: '/hero-slide-3.webp',
        href: '/locations/al-bad/'
    },
    {
        name: 'Haql',
        description: 'Professional intercity transfer and taxi services for Haql.',
        image: '/hero-slide-4.webp',
        href: '/locations/haql/'
    },
    {
        name: 'Sharma',
        description: 'Professional intercity transfer and taxi services for Sharma.',
        image: '/hero-slide-5.webp',
        href: '/locations/sharma/'
    },
    {
        name: 'Magna',
        description: 'Professional intercity transfer and taxi services for Magna.',
        image: '/hero-slide-1.webp',
        href: '/locations/magna/'
    },
    {
        name: 'Al Rais',
        description: 'Professional intercity transfer and taxi services for Al Rais.',
        image: '/hero-slide-2.webp',
        href: '/locations/al-rais/'
    },
    {
        name: 'Thuwal',
        description: 'Professional intercity transfer and taxi services for Thuwal.',
        image: '/hero-slide-3.webp',
        href: '/locations/thuwal/'
    },
    {
        name: 'KAEC',
        description: 'Professional intercity transfer and taxi services for KAEC.',
        image: '/hero-slide-4.webp',
        href: '/locations/kaec/'
    },
    {
        name: 'Masturah',
        description: 'Professional intercity transfer and taxi services for Masturah.',
        image: '/hero-slide-5.webp',
        href: '/locations/masturah/'
    },
    {
        name: 'Dhahban',
        description: 'Professional intercity transfer and taxi services for Dhahban.',
        image: '/hero-slide-1.webp',
        href: '/locations/dhahban/'
    },
    {
        name: 'Qilwah',
        description: 'Professional intercity transfer and taxi services for Qilwah.',
        image: '/hero-slide-2.webp',
        href: '/locations/qilwah/'
    },
    {
        name: 'Al Makhwah',
        description: 'Professional intercity transfer and taxi services for Al Makhwah.',
        image: '/hero-slide-3.webp',
        href: '/locations/al-makhwah/'
    },
    {
        name: 'Al Namas',
        description: 'Professional intercity transfer and taxi services for Al Namas.',
        image: '/hero-slide-4.webp',
        href: '/locations/al-namas/'
    },
    {
        name: 'Tanuma',
        description: 'Professional intercity transfer and taxi services for Tanuma.',
        image: '/hero-slide-5.webp',
        href: '/locations/tanuma/'
    },
    {
        name: 'Bareq',
        description: 'Professional intercity transfer and taxi services for Bareq.',
        image: '/hero-slide-1.webp',
        href: '/locations/bareq/'
    },
    {
        name: 'Al Majardah',
        description: 'Professional intercity transfer and taxi services for Al Majardah.',
        image: '/hero-slide-2.webp',
        href: '/locations/al-majardah/'
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
                        Choose your destination and Get a quote for your <Link href="/routes/" className="text-gray-900 font-bold hover:underline underline-offset-4 decoration-primary">intercity route</Link> today.
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
                                WhatsApp Booking Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

