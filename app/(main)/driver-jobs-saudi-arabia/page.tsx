import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Car, Building2, Plane, Navigation2 } from 'lucide-react';
import JsonLdBreadcrumb from '@/components/seo/JsonLdBreadcrumb';

export const metadata: Metadata = {
    title: 'Driver Jobs Saudi Arabia: Earn High Income with Your Car',
    description: 'Looking for driver jobs Saudi Arabia? Join our VIP chauffeur network. Find premium taxi driver jobs KSA in Riyadh, Jeddah, Makkah, and 15+ other cities.',
    keywords: ['driver jobs Saudi Arabia', 'taxi driver jobs KSA', 'chauffeur jobs Saudi', 'VIP driver KSA', 'private driver network'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/driver-jobs-saudi-arabia',
    }
};

const cities = [
    { id: 'riyadh', name: 'Riyadh', icon: Building2, desc: 'Corporate & Executive' },
    { id: 'jeddah', name: 'Jeddah', icon: Plane, desc: 'Airport & Tourism' },
    { id: 'makkah', name: 'Makkah', icon: Navigation2, desc: 'Hajj & Umrah Transit' },
    { id: 'madinah', name: 'Madinah', icon: Navigation2, desc: 'Spiritual Tourism' },
    { id: 'dammam', name: 'Dammam', icon: Building2, desc: 'Business Hub' },
    { id: 'khobar', name: 'Khobar', icon: Navigation2, desc: 'Border Routes' },
    { id: 'dhahran', name: 'Dhahran', icon: Building2, desc: 'Corporate & Aramco' },
    { id: 'taif', name: 'Taif', icon: Car, desc: 'Weekend Tourism' },
    { id: 'tabuk', name: 'Tabuk', icon: Building2, desc: 'NEOM Business' },
    { id: 'abha', name: 'Abha', icon: Car, desc: 'Seasonal Tourism' },
    { id: 'khamis-mushait', name: 'Khamis Mushait', icon: Building2, desc: 'Commercial Center' },
    { id: 'hail', name: 'Hail', icon: Navigation2, desc: 'Heritage Routes' },
    { id: 'buraidah', name: 'Buraidah', icon: Building2, desc: 'Agriculture & Business' },
    { id: 'najran', name: 'Najran', icon: Navigation2, desc: 'Southern Border' },
    { id: 'jubail', name: 'Jubail', icon: Building2, desc: 'Industrial Executives' },
    { id: 'yanbu', name: 'Yanbu', icon: Plane, desc: 'Red Sea Coast' },
    { id: 'al-qassim', name: 'Al Qassim', icon: Building2, desc: 'Intercity Transport' },
    { id: 'al-ahsa', name: 'Al Ahsa', icon: Navigation2, desc: 'GCC Borders & Tourism' },
];

export default function DriverJobsSaudiHub() {
    return (
        <main className="min-h-screen bg-gray-50">
            <JsonLdBreadcrumb 
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Driver Jobs KSA', item: '/driver-jobs-saudi-arabia' }
                ]}
            />
            {/* Header Section */}
            <div className="bg-gray-950 text-white pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 inline-block">
                        National Hiring Hub
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Driver Jobs Saudi Arabia
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        We are actively recruiting professional chauffeurs across the Kingdom. Operate your own 2020+ vehicle and earn premium rates handling VIP corporate and tourism clients.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                
                {/* Intro SEO Text */}
                <div className="max-w-3xl mx-auto text-center mb-16 prose prose-lg prose-gray">
                    <p className="text-xl font-medium text-gray-800 leading-relaxed max-w-none">
                        The demand for high-end transportation is rapidly growing. If you are seeking lucrative <strong>taxi driver jobs KSA</strong>, graduating from standard ride-hailing apps to a private VIP network is the smartest career move. 
                    </p>
                    <p className="text-gray-600 max-w-none">
                        Our network supplies <strong>driver jobs Saudi Arabia</strong> with consistent, high-paying bookings completely insulated from the unpredictable street-hailing market. Whether you focus on long-distance corporate trips in Riyadh or managing Umrah passengers in Makkah, your vehicle is your key to financial independence.
                    </p>
                </div>

                <div className="flex items-center justify-between border-b pb-4 mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <MapPin className="w-8 h-8 text-primary" /> Active Hiring Locations
                    </h2>
                    <span className="text-sm font-bold text-gray-500 bg-gray-200 px-3 py-1 rounded-lg">{cities.length} Cities</span>
                </div>

                {/* Cities Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cities.map((city) => (
                        <Link 
                            key={city.id} 
                            href={`/join-as-driver/${city.id}`}
                            className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all font-bold text-gray-900 group relative overflow-hidden block"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                    <city.icon className="w-6 h-6" />
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </div>
                            
                            <h3 className="text-xl font-black mb-1 group-hover:text-primary transition-colors">{city.name}</h3>
                            <p className="text-sm text-gray-500 font-medium mb-4">{city.desc}</p>
                            
                            <div className="text-sm text-primary font-bold inline-flex items-center gap-1 group-hover:underline">
                                Apply as a driver in {city.name}
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-24 bg-gradient-to-r from-gray-900 to-black rounded-[2.5rem] p-10 md:p-14 text-center text-white border border-gray-800 shadow-2xl">
                    <h2 className="text-3xl font-black mb-4">Ready to upgrade your earning potential?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                        You've seen the opportunities. If you hold a valid license and operate a pristine vehicle (2020+), don't settle for standard taxi driver jobs KSA. Join our highly-rated VIP network today.
                    </p>
                    <Link href="/join-as-driver/riyadh" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-white hover:text-black text-white font-black py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl">
                        Start Operating Now <ArrowRight className="w-5 h-5 ml-1" />
                    </Link>
                </div>
                
            </div>
        </main>
    );
}
