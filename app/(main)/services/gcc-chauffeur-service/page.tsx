import { Metadata } from 'next';
import Link from 'next/link';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, Shield, Globe, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'GCC Chauffeur Service | Saudi Arabia to UAE, Kuwait, Qatar & Bahrain | Taxi Service KSA',
    description: 'Private VIP chauffeur service from Saudi Arabia across the GCC — Dubai, Abu Dhabi, Kuwait, Qatar, and Bahrain. Door-to-door cross-border transfers with fixed rates.',
    keywords: ['GCC chauffeur service', 'Saudi Arabia to UAE taxi', 'Saudi Arabia to Kuwait taxi', 'Saudi Arabia to Qatar taxi', 'Saudi Arabia to Bahrain taxi', 'cross border chauffeur Gulf'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/gcc-chauffeur-service/',
    },
    openGraph: {
        title: 'GCC Chauffeur Service | Taxi Service KSA',
        description: 'Private cross-border chauffeur transfers connecting Saudi Arabia with the UAE, Kuwait, Qatar, and Bahrain.',
        url: 'https://taxiserviceksa.com/services/gcc-chauffeur-service/',
        type: 'website',
    },
};

const countries = [
    {
        name: 'United Arab Emirates',
        cities: 'Dubai, Abu Dhabi, Sharjah',
        description: 'Executive transfers connecting the Eastern Province and central Saudi Arabia with the UAE\'s business and leisure hubs.',
        routes: [
            { label: 'Dammam to Dubai', href: '/routes/dammam-dubai/' },
            { label: 'Riyadh to Dubai', href: '/routes/riyadh-dubai/' },
            { label: 'Jeddah to Dubai', href: '/routes/jeddah-dubai/' },
        ],
    },
    {
        name: 'Kuwait',
        cities: 'Kuwait City, Salmiya, Fahaheel',
        description: 'Direct private transfers along the northern Gulf corridor, popular with business travelers and families with relatives across the border.',
        routes: [
            { label: 'Dammam to Kuwait', href: '/routes/dammam-kuwait/' },
            { label: 'Riyadh to Kuwait', href: '/routes/riyadh-kuwait/' },
            { label: 'Khobar to Kuwait', href: '/routes/khobar-to-kuwait-taxi/' },
        ],
    },
    {
        name: 'Qatar',
        cities: 'Doha, Lusail, The Pearl',
        description: 'Comfortable long-distance transfers via the Salwa border crossing, connecting the Eastern Province with Doha and its surrounding districts.',
        routes: [
            { label: 'Dammam to Doha', href: '/routes/dammam-doha/' },
            { label: 'Khobar to Qatar', href: '/routes/khobar-to-qatar-taxi/' },
            { label: 'Riyadh to Doha', href: '/routes/riyadh-doha/' },
        ],
    },
    {
        name: 'Bahrain',
        cities: 'Manama, Riffa, Muharraq',
        description: 'The shortest GCC crossing, via the King Fahd Causeway — a favorite weekend and business route from the Eastern Province.',
        routes: [
            { label: 'Dammam to Bahrain', href: '/routes/dammam-bahrain/' },
            { label: 'Khobar to Bahrain', href: '/routes/khobar-bahrain/' },
            { label: 'Riyadh to Bahrain', href: '/routes/riyadh-bahrain/' },
        ],
    },
];

export default function GccChauffeurServicePage() {
    const images = [
        '/hero-slide-2.webp',
        '/hero-slide-1.webp',
        '/hero-slide-3.webp',
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="GCC Chauffeur Service"
                description="Private VIP chauffeur service from Saudi Arabia to the UAE, Kuwait, Qatar, and Bahrain. Cross-border door-to-door transfers with fixed rates and professional drivers."
                services={[
                    { name: 'Saudi Arabia to UAE Transfer', description: 'Private chauffeur service to Dubai, Abu Dhabi, and Sharjah.' },
                    { name: 'Saudi Arabia to Kuwait Transfer', description: 'Direct cross-border transfers to Kuwait City and surrounding areas.' },
                    { name: 'Saudi Arabia to Qatar Transfer', description: 'Private transfers to Doha via the Salwa border crossing.' },
                    { name: 'Saudi Arabia to Bahrain Transfer', description: 'Transfers to Manama via the King Fahd Causeway.' },
                ]}
                image="https://taxiserviceksa.com/hero-slide-2.webp"
            />

            <Hero
                images={images}
                h1Text="GCC Chauffeur Service"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Saudi Arabia to the Gulf, Door to Door
                    </span>
                }
                subtitle="Private Cross-Border Transfers to UAE, Kuwait, Qatar & Bahrain"
                location="100% Private VIP — No Shared Rides"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Get a Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/966569487569?text=Hello%2C%20I%20need%20a%20cross-border%20GCC%20chauffeur%20quote." target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" />
                            WhatsApp Us
                        </Button>
                    </a>
                </div>
            </Hero>

            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        A valid passport and any required visa/entry permit for your destination country are the passenger&apos;s responsibility. Please confirm entry requirements before booking.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-blue-900 font-bold uppercase tracking-wider text-sm">Cross-Border Chauffeur</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                            One Chauffeur, the Whole Gulf
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            From Riyadh, Jeddah, Dammam, and Khobar, our private chauffeurs run regular cross-border journeys into the UAE, Kuwait, Qatar, and Bahrain. Every trip is a single private vehicle for your group — no transfers, no shared seats, and a fixed price agreed before you travel.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            { label: '4 GCC Countries', icon: Globe },
                            { label: 'Fixed Rates', icon: CheckCircle2 },
                            { label: 'Private SUV / Sedan', icon: Car },
                            { label: '24/7 Departures', icon: Clock },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center gap-2 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <item.icon className="w-7 h-7 text-primary" />
                                <span className="font-bold text-gray-900">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {countries.map((country) => (
                            <div key={country.name} className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-primary/10 p-2.5 rounded-xl">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{country.name}</h3>
                                </div>
                                <p className="text-sm text-gray-500 font-semibold mb-3">{country.cities}</p>
                                <p className="text-gray-600 leading-relaxed mb-6">{country.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {country.routes.map((route) => (
                                        <Link
                                            key={route.href}
                                            href={route.href}
                                            className="text-sm font-bold text-primary bg-white border border-gray-200 hover:border-primary hover:bg-primary/5 px-4 py-2 rounded-xl transition-colors"
                                        >
                                            {route.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RouteFleetSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-16">
                <RelatedLocations currentCity="Dammam" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "Which GCC countries do you cover?",
                        shortAnswer: "UAE, Kuwait, Qatar & Bahrain",
                        detailedAnswer: "We run private chauffeur transfers from Saudi Arabia to the United Arab Emirates (Dubai, Abu Dhabi, Sharjah), Kuwait, Qatar, and Bahrain.",
                        perspectives: []
                    },
                    {
                        question: "Do I need a visa to cross the border?",
                        shortAnswer: "Depends on your nationality",
                        detailedAnswer: "Entry requirements vary by nationality and destination country. GCC nationals typically cross freely with a national ID; other travelers should check visa requirements for their destination before booking.",
                        perspectives: []
                    },
                    {
                        question: "Is the vehicle private for my group only?",
                        shortAnswer: "Yes, always",
                        detailedAnswer: "All GCC transfers are 100% private — a single vehicle reserved for your party only, with no other passengers.",
                        perspectives: []
                    },
                    {
                        question: "Can I book a one-way cross-border transfer?",
                        shortAnswer: "Yes",
                        detailedAnswer: "You can book one-way or round-trip. Many clients travel one-way and return by flight, or vice versa.",
                        perspectives: []
                    }
                ]}
            />

            <div className="bg-black py-24 text-center px-4 relative overflow-hidden rounded-3xl mx-4 mb-12">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8 animate-pulse">
                        100% Private VIP Transfers Only • No Shared Taxis
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">Get a Quote for Your GCC Chauffeur Transfer</h2>
                    <p className="text-gray-400 text-lg mb-10 italic">&quot;The trusted choice for business travelers and families crossing the Gulf in total privacy.&quot;</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking/">
                            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-12 py-8 text-xl rounded-2xl h-auto transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                                Reserve Private Car
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-black px-12 py-8 text-xl rounded-2xl h-auto">
                                Email Inquiry
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
