
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, CheckCircle2, Star, Shield, Clock, Car, MapPin, ArrowRight, Navigation, Zap, Award, User, ShieldCheck, DollarSign } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedLocations from '@/components/seo/RelatedLocations';

export const metadata: Metadata = {
    title: 'Hyundai Starex VIP Private Transfer Saudi Arabia | Family Van',
    description: 'Book the reliable Hyundai Starex VIP private transfer in Saudi Arabia. Premium 7-seater van with extra luggage space for families and airport transfers. Professional chauffeur service.',
    keywords: ['Hyundai Starex VIP transfer', 'family van chauffeur KSA', 'Hyundai Starex Riyadh', 'airport transfer Saudi Arabia', 'VIP van Jeddah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/fleet/hyundai-starex/',
    },
};

export default function HyundaiStarexPage() {
    const specifications = [
        { label: 'Capacity', value: '7 Passengers', icon: Users },
        { label: 'Luggage', value: '10 Bags', icon: Briefcase },
        { label: 'Class', value: 'Family Executive', icon: Award },
        { label: 'Availability', value: '24/7 Service', icon: Clock },
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Hyundai Starex VIP Chauffeur Service",
        "image": "https://taxiserviceksa.com/hyundai-starex.webp",
        "description": "Reliable Hyundai Starex VIP transfer service in Saudi Arabia for families and groups.",
        "brand": {
            "@type": "Brand",
            "name": "Hyundai"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock",
            "url": "https://taxiserviceksa.com/fleet/hyundai-starex"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="vehicle-schema-starex"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />

            <Hero
                images={['/hyundai-starex.webp', '/hero-slide-2.webp']}
                h1Text="Hyundai Starex VIP"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        The Family Favorite
                    </span>
                }
                subtitle="The Reliable Workhorse for Family Travel and Airport Transfers"
                location="7 Passengers | 10 Bags | Spacious Utility"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?vehicle=hyundai-starex">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book VIP Starex
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Check Availability
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Spec Ribbon */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {specifications.map((spec, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 transition-transform hover:scale-110">
                                <spec.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{spec.label}</span>
                            <span className="text-lg font-black text-gray-900">{spec.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight tracking-tighter uppercase">Reliable Comfort for Your Entourage</h2>
                            <p className="text-gray-600 text-xl leading-relaxed mb-6">
                                The <strong>Hyundai Starex VIP transfer</strong> remains one of the most trusted vehicles for premium family travel in Saudi Arabia. Known for its indestructible build and massive luggage capability, it provides a functional and spacious chauffeur-driven experience for pilgrims and groups.
                            </p>
                            
                            <div className="space-y-6 mb-12">
                                {[
                                    { title: 'Expansive Cargo Space', desc: 'Capable of holding 10 large suitcases without compromising passenger room.' },
                                    { title: 'Dual Air Conditioning', desc: 'Powerful front and rear units to maintain a perfect cabin temperature.' },
                                    { title: 'Safe Boarding', desc: 'Low floor height and wide sliding doors ideal for elderly passengers.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="bg-blue-600 rounded-full p-1 h-fit mt-1 shadow-lg shadow-blue-600/20">
                                            <CheckCircle2 className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-gray-900 uppercase text-sm tracking-wide">{item.title}</h4>
                                            <p className="text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <EntityTrustSignal 
                                brandName="Reliable Family Shield"
                                description="Our Starex fleet has a 99.8% mechanical uptime record across the Kingdom."
                                metrics={[
                                    { label: 'Happy Families', value: '20k+', icon: Users },
                                    { label: 'Safety Rating', value: 'High', icon: ShieldCheck }
                                ]}
                            />
                        </div>

                        <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-full h-2 bg-blue-600"></div>
                            <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-widest text-center">Starex Utility Specs</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                {[
                                    '10-Bag Boot Capacity',
                                    'Multi-Row AC Vents',
                                    'Flexible Seat Layout',
                                    'Punctual Airport Pickup',
                                    'Fixed Route Pricing',
                                    '24/7 Direct Support'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="font-bold text-gray-700 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-8 bg-blue-900 rounded-3xl text-white">
                                <h4 className="font-black uppercase tracking-widest mb-2 text-blue-400 text-xs">Recommended Trip</h4>
                                <p className="text-gray-300 text-sm italic">"The Starex is our top recommendation for the Jeddah-Makkah run for families arriving with multiple large suitcases and Zamzam containers."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-24 px-4">
                <center>
                    <h2 className="text-3xl font-black text-gray-900 mb-12 uppercase tracking-tighter">Hyundai Starex FAQ</h2>
                </center>
                <MicroSemanticFAQ 
                    faqs={[
                        {
                            question: "How many bags can the Starex carry?",
                            shortAnswer: "Up to 10 Large Bags.",
                            detailedAnswer: "The Starex is uniquely designed with a deep cargo area, allowing it to fit 10 large suitcases safely—more than most luxury SUVs.",
                            perspectives: [
                                { role: 'Dispatcher', icon: 'Briefcase', insight: 'It is the most cost-effective solution for high-luggage family groups.' }
                            ]
                        },
                        {
                            question: "Is the Starex available for Umrah pilgrimages?",
                            shortAnswer: "Yes, our most popular Umrah van.",
                            detailedAnswer: "We provide thousands of Starex transfers annually for pilgrims traveling between Makkah and Madinah, offering a reliable and spacious journey.",
                            perspectives: [
                                { role: 'Captain Abdullah', icon: 'MapPin', insight: 'I always ensure there is extra space for water and souvenirs.' }
                            ]
                        },
                        {
                            question: "Are child seats available in the Starex?",
                            shortAnswer: "Yes, upon request.",
                            detailedAnswer: "We can provide sanitized child safety seats for your Starex transfer if requested at the time of booking, ensuring your family's safety.",
                            perspectives: [
                                { role: 'Family Safety', icon: 'Shield', insight: 'We follow international safety standards for all passenger ages.' }
                            ]
                        }
                    ]}
                />
            </div>

            <RelatedLocations currentCity="VIP Family Fleet" />

            <div className="bg-black py-40 text-center px-4 relative overflow-hidden rounded-t-[5rem]">
                <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-8xl font-black text-white mb-10 leading-none tracking-tighter uppercase">TRUSTED <br/> <span className="text-blue-500">UTILITY</span></h2>
                    <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-medium">WhatsApp Booking for the most reliable family van in Saudi Arabia. Professional chauffeurs, fixed prices, and massive luggage capacity.</p>
                    <Link href="/booking/?vehicle=hyundai-starex">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-all hover:scale-105">
                            BOOK STAREX VIP
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

