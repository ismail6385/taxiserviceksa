import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Sitemap | Taxi Service KSA',
    description: 'Browse every Taxi Service KSA page: services, cities across Saudi Arabia, and GCC border routes.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/sitemap/',
    },
};

const SERVICES = [
    { name: 'Private Transfers', href: '/services/intercity/' },
    { name: 'Day Trips', href: '/services/tours/' },
    { name: 'Hourly Driver', href: '/services/private-driver/' },
    { name: 'Airport Transfers', href: '/services/airport-transfers/' },
    { name: 'VIP Chauffeur', href: '/services/vip-chauffeur/' },
    { name: 'Umrah Transport', href: '/services/umrah-transport/' },
    { name: 'Heritage Tours', href: '/services/heritage-tours/' },
    { name: 'GCC Chauffeur Service', href: '/services/gcc-chauffeur-service/' },
    { name: 'Corporate Travel', href: '/services/corporate-travel/' },
    { name: 'Travel Agents & B2B', href: '/services/b2b-solutions/' },
];

const GCC = [
    { name: 'UAE (Dubai & Abu Dhabi)', href: '/routes/riyadh-dubai/' },
    { name: 'Bahrain', href: '/routes/dammam-bahrain/' },
    { name: 'Qatar', href: '/routes/riyadh-doha/' },
    { name: 'Kuwait', href: '/routes/riyadh-kuwait/' },
    { name: 'Oman', href: '/routes/riyadh-muscat/' },
    { name: 'Jordan', href: '/routes/riyadh-amman/' },
    { name: 'Border Crossings', href: '/border-crossings/' },
];

const CITIES: { name: string; href: string }[] = [
    { name: 'Abha', href: '/locations/abha/' },
    { name: 'Abu Arish', href: '/locations/abu-arish/' },
    { name: 'Afif', href: '/locations/afif/' },
    { name: 'Al Ahsa', href: '/locations/al-ahsa/' },
    { name: 'Al Bad', href: '/locations/al-bad/' },
    { name: 'Al Badai', href: '/locations/al-badai/' },
    { name: 'Al Bahah', href: '/locations/al-bahah/' },
    { name: 'Al Bukayriyah', href: '/locations/al-bukayriyah/' },
    { name: 'Al Ghat', href: '/locations/al-ghat/' },
    { name: 'Al Jafr', href: '/locations/al-jafr/' },
    { name: 'Al Kharj', href: '/locations/al-kharj/' },
    { name: 'Al Khobar', href: '/locations/al-khobar/' },
    { name: 'Al Lith', href: '/locations/al-lith/' },
    { name: 'Al Majardah', href: '/locations/al-majardah/' },
    { name: "Al Majma'ah", href: '/locations/al-majma-ah/' },
    { name: 'Al Makhwah', href: '/locations/al-makhwah/' },
    { name: 'Al Midhnab', href: '/locations/al-midhnab/' },
    { name: 'Al Mubarraz', href: '/locations/al-mubarraz/' },
    { name: 'Al Muzahmiyya', href: '/locations/al-muzahmiyya/' },
    { name: 'Al Nairyah', href: '/locations/al-nairyah/' },
    { name: 'Al Namas', href: '/locations/al-namas/' },
    { name: 'Al Qassim', href: '/locations/al-qassim/' },
    { name: 'Al Qunfudhah', href: '/locations/al-qunfudhah/' },
    { name: "Al Quway'iyah", href: '/locations/al-quway-iyah/' },
    { name: 'Al Rais', href: '/locations/al-rais/' },
    { name: 'Al Rass', href: '/locations/al-rass/' },
    { name: 'Al Uyun', href: '/locations/al-uyun/' },
    { name: 'Al Wajh', href: '/locations/al-wajh/' },
    { name: 'AlUla', href: '/locations/alula/' },
    { name: 'Arar', href: '/locations/arar/' },
    { name: 'Baljurashi', href: '/locations/baljurashi/' },
    { name: 'Bareq', href: '/locations/bareq/' },
    { name: 'Bishah', href: '/locations/bishah/' },
    { name: 'Buqayq', href: '/locations/buqayq/' },
    { name: 'Buraidah', href: '/locations/buraidah/' },
    { name: 'Dammam', href: '/locations/dammam/' },
    { name: 'Dariya', href: '/locations/dariya/' },
    { name: 'Dawadmi', href: '/locations/dawadmi/' },
    { name: 'Dhahban', href: '/locations/dhahban/' },
    { name: 'Dhahran', href: '/locations/dhahran/' },
    { name: 'Duba', href: '/locations/duba/' },
    { name: 'Hafar Al Batin', href: '/locations/hafar-al-batin/' },
    { name: 'Hail', href: '/locations/hail/' },
    { name: 'Haql', href: '/locations/haql/' },
    { name: 'Hofuf', href: '/locations/hofuf/' },
    { name: 'Huraymila', href: '/locations/huraymila/' },
    { name: 'Jeddah', href: '/locations/jeddah/' },
    { name: 'Jizan', href: '/locations/jizan/' },
    { name: 'Jubail', href: '/locations/jubail/' },
    { name: 'KAEC', href: '/locations/kaec/' },
    { name: 'Khafji', href: '/locations/khafji/' },
    { name: 'Khamis Mushait', href: '/locations/khamis-mushait/' },
    { name: 'Khaybar Fort', href: '/locations/khayber-fort/' },
    { name: 'Khulais', href: '/locations/khulais/' },
    { name: 'Madinah', href: '/locations/madinah/' },
    { name: 'Madinah Ziyarat', href: '/locations/makkah-ziyarat/' },
    { name: 'Magna', href: '/locations/magna/' },
    { name: 'Mahad Al Dhahab', href: '/locations/mahad-al-dhahab/' },
    { name: 'Makkah', href: '/locations/makkah/' },
    { name: 'Masturah', href: '/locations/masturah/' },
    { name: 'Najran', href: '/locations/najran/' },
    { name: 'NEOM', href: '/locations/neom/' },
    { name: 'Qilwah', href: '/locations/qilwah/' },
    { name: 'Qurayyat', href: '/locations/qurayyat/' },
    { name: 'Rabigh', href: '/locations/rabigh/' },
    { name: 'Riyadh', href: '/locations/riyadh/' },
    { name: 'Rumah', href: '/locations/rumah/' },
    { name: 'Sabya', href: '/locations/sabya/' },
    { name: 'Sakaka', href: '/locations/sakaka/' },
    { name: 'Samtah', href: '/locations/samtah/' },
    { name: 'Sharma', href: '/locations/sharma/' },
    { name: 'Sharurah', href: '/locations/sharurah/' },
    { name: 'Taif', href: '/locations/taif/' },
    { name: 'Tanuma', href: '/locations/tanuma/' },
    { name: 'Tayma', href: '/locations/tayma/' },
    { name: 'Thadiq', href: '/locations/thadiq/' },
    { name: 'Thuwal', href: '/locations/thuwal/' },
    { name: 'Turaif', href: '/locations/turaif/' },
    { name: 'Umluj', href: '/locations/umluj/' },
    { name: 'Unaizah', href: '/locations/unaizah/' },
    { name: 'Wadi Ad Dawasir', href: '/locations/wadi-ad-dawasir/' },
    { name: 'Yanbu', href: '/locations/yanbu/' },
    { name: 'Zulfi', href: '/locations/zulfi/' },
];

function LinkGrid({ items }: { items: { name: string; href: string }[] }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-3">
            {items.map((item) => (
                <Link key={item.href} href={item.href} className="text-primary hover:underline font-medium text-sm sm:text-base">
                    {item.name}
                </Link>
            ))}
        </div>
    );
}

export default function SitemapPage() {
    return (
        <div className="bg-white min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                    Taxi Service KSA Sitemap
                </h1>

                <section className="mb-16">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Services</h2>
                    <p className="text-gray-600 mb-6">Explore all available services.</p>
                    <LinkGrid items={SERVICES} />
                </section>

                <section className="mb-16">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">GCC &amp; cross-border routes</h2>
                    <p className="text-gray-600 mb-6">Licensed executive transfers between Saudi Arabia and neighbouring GCC countries.</p>
                    <LinkGrid items={GCC} />
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">By city</h2>
                    <p className="text-gray-600 mb-6">
                        Travel safely and comfortably with licensed local drivers, optional sightseeing stops, and flexible door-to-door private transfers across every city we serve in Saudi Arabia.
                    </p>
                    <LinkGrid items={CITIES} />
                </section>
            </div>
        </div>
    );
}
