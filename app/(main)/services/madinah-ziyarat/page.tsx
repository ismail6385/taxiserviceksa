import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Clock, MapPin, CheckCircle2, Car, Users, Star, Compass, ArrowRight, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedServices from '@/components/seo/RelatedServices';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import TravelConsensus from '@/components/seo/TravelConsensus';
import JsonLdLocation from '@/components/JsonLdLocation';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import PricingTable from '@/components/PricingTable';
import BookingProcess from '@/components/BookingProcess';
import ZiyaratSites from '@/components/ZiyaratSites';


export const metadata: Metadata = {
    title: 'Madinah Ziyarat Taxi Service 2026 | Holy Sites Tours (Ziyarah) | Taxi Service KSA',
    description: 'Book comprehensive Ziyarat tours in Madinah 2026. Visit Masjid Quba, Mount Uhud, Seven Mosques, and Qiblatain with knowledgeable local drivers. Fixed price packages.',
    keywords: ['Madinah Ziyarat 2026', 'Ziyarat taxi Madinah', 'Quba mosque taxi', 'Uhud mountain tour', 'Seven mosques visit', 'Madinah holy sites transport'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/madinah-ziyarat/',
    },
};

export default function MadinahZiyaratPage() {
    const packages = [
        {
            name: 'Standard Ziyarat',
            duration: '2-3 Hours',
            price: 'WhatsApp Booking',
            sites: ['Masjid Quba', 'Mount Uhud', 'Masjid Qiblatain', 'Seven Mosques (Khandaq)'],
            desc: 'The essential Sunnah sites visited by millions of pilgrims.'
        },
        {
            name: 'Extended Ziyarat',
            duration: '4-5 Hours',
            price: 'WhatsApp Booking',
            sites: ['Standard Sites +', 'Bir Uthman', 'Dates Market', 'Printing Press', 'Uhud Martyrs Cemetery'],
            desc: 'A deeper dive into the history of Madinah with extra stops.'
        },
        {
            name: 'Badar Ziyarat',
            duration: '5-6 Hours',
            price: 'WhatsApp Booking',
            sites: ['Badar Battlefield', 'Martyrs of Badar', 'Al-Arish Mosque'],
            desc: 'A trip outside Madinah to the site of the first battle of Islam (150km away).'
        }
    ];


    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Madinah Ziyarat"
                description="Comprehensive private taxi tours to holy Islamic sites in Madinah. Visit Masjid Quba, Mount Uhud, and the Seven Mosques with experienced local drivers."
                services={[
                    { name: 'Standard Ziyarat Tour', description: '2-3 hour guided visit to essential Sunnah sites in Madinah.' },
                    { name: 'Extended History Tour', description: 'In-depth 5-hour exploration of the Prophet\'s city and historical landmarks.' },
                    { name: 'Badar Battlefield Trip', description: 'Full-day excursion to the historic site of the Battle of Badar.' },
                    { name: 'Family Group Transport', description: 'Comfortable SUVs and vans suitable for large groups of pilgrims.' }
                ]}
                
                image="https://taxiserviceksa.com/madinah-prophets-mosque.webp"
            />

            <Hero
                images={['/madinah-prophets-mosque.webp', '/hero-slide-2.webp']}
                h1Text="2026 Madinah Ziyarat Taxi Packages"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        2026 Spiritual Journey
                    </span>
                }
                subtitle="Walk in the Footsteps of History"
                location="Madinah Al Munawwarah"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20book%20a%20Madinah%20Ziyarat%20tour.">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-7 px-10 rounded-2xl text-xl shadow-2xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 animate-pulse-slow">
                            <WhatsAppIcon className="w-6 h-6 mr-2 fill-current" />
                            Book Ziyarat Now
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* TL;DR Quick Facts Section */}
            <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20 mb-20">
                <div className="bg-emerald-50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-emerald-100 flex flex-col md:flex-row gap-10 items-center justify-between">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                             Quick Guide
                        </div>
                        <h2 className="text-3xl font-black text-gray-900 italic">2026 Ziyarat Essentials</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                            {[
                                "Licensed Local Driver-Guides",
                                "Fixed Rates (No Hidden Fees)",
                                "Free Dates & Water Included",
                                "Family-Size SUV Fleet (Yukon/Hiace)",
                                "Hotel Pickup & Drop-off Included",
                                "Flexible Timing & Custom Stops"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-700 font-bold text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-emerald-100 min-w-[280px]">
                        <div className="text-emerald-600 font-black text-xs uppercase tracking-tighter mb-2">Package Start Price</div>
                        <div className="text-4xl font-black text-gray-900 flex items-baseline gap-1">
                            150 <span className="text-sm font-bold text-gray-400 uppercase">SAR</span>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-2 font-bold leading-tight">Price covers entire group (up to 4 pax in Sedan). Larger vans available.</p>
                    </div>
                </div>
            </div>


            {/* Packages */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our 2026 Ziyarat Packages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all relative">
                                <div className="absolute top-0 right-0 bg-emerald-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl font-bold">{pkg.price}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                <div className="flex items-center gap-2 text-gray-500 mb-4">
                                    <Clock className="w-4 h-4" /> {pkg.duration}
                                </div>
                                <p className="text-gray-600 mb-6 text-sm">{pkg.desc}</p>
                                <ul className="space-y-3 mb-8">
                                    {pkg.sites.map((site, s) => (
                                        <li key={s} className="flex items-center gap-2 text-gray-800 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {site}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/booking?service=ziyarat">
                                    <Button className="w-full bg-black text-white hover:bg-gray-800"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing & Process */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Transparent 2026 Pricing</h2>
                        <p className="text-gray-600 mt-2">Verified rates for all vehicle types for your Madinah Ziyarat.</p>
                    </div>
                    <PricingTable />
                    <div className="mt-20">
                        <BookingProcess 
                            title="How to Book Your Ziyarat"
                            subtitle="Secure your spiritual tour in three simple steps via WhatsApp."
                        />
                    </div>
                </div>
            </section>

            {/* Detailed Site Info Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <ZiyaratSites 
                        title="Holy Sites & Landmarks"
                        subtitle="Explore the sacred history of Madinah"
                        locationSlug="madinah"
                        sites={[
                            {
                                name: "Masjid Quba",
                                description: "The very first mosque in Islam, located 3.5km from the Prophet's Mosque.",
                                significance: "Praying 2 rakat here rewards an Umrah. The Prophet (PBUH) visited every Saturday.",
                                location: "Quba District",
                                image: "/madinah-quba.webp",
                                recommendedTime: "1 Hour"
                            },
                            {
                                name: "Mount Uhud",
                                description: "A massive mountain north of Madinah, site of the famous Battle of Uhud.",
                                significance: "Contains the Archers' Hill and the graves of the 70 martyrs, including Hamza (RA).",
                                location: "5km North",
                                image: "/madinah-uhud.webp",
                                recommendedTime: "1.5 Hours"
                            }
                        ]}
                    />
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        contextName="Madinah Ziyarat"
                        points={[
                            {
                                topic: "Morning vs Evening Ziyarat",
                                commonBelief: "Any time is fine.",
                                reality: (
                                    <>
                                        Early morning (7 AM - 10 AM) is best to avoid heat and crowds. Many pilgrims who arrive via the{' '}
                                        <Link href='/routes/makkah-madinah/' className='text-emerald-700 hover:underline'>
                                            Makkah to Madinah taxi booking
                                        </Link>{' '}
                                        prefer to start their Ziyarat the next morning for the best lighting.
                                    </>
                                ),
                                truthRange: "Morning Recommended",
                                factors: ["Lighting", "Heat", "Crowds"]
                            },
                            {
                                topic: "Time at Quba Mosque",
                                commonBelief: "Just a quick stop.",
                                reality: "It is Sunnah to perform wudu at home/hotel and pray 2 rakats in Quba. Our drivers patiently wait while you fulfill this rewarded act properly.",
                                truthRange: "30-45 Mins Needed",
                                factors: ["Wudu", "Prayer", "Crowds"]
                            }
                        ]}
                    />

                    <div className="mt-12">
                        <MicroSemanticFAQ
                            faqs={[
                                {
                                    question: "Can we customize the Ziyarat list?",
                                    shortAnswer: "Yes, fully flexible.",
                                    detailedAnswer: "The packages listed are standard suggestions. You can add or remove sites. Simply tell the driver where you want to go. Charges are based on time usage.",
                                    perspectives: [
                                        {
                                            role: "Driver",
                                            icon: "Car",
                                            insight: "We know many hidden gems like the well of Ghars or the date farms if you have extra time."
                                        }
                                    ]
                                },
                                {
                                    question: "Are ladies allowed in the graveyard visits?",
                                    shortAnswer: "From outside only.",
                                    detailedAnswer: "For Baqi and Uhud martyrs, ladies can stand at the outer fence boundaries to offer Salam. Access inside the graveyard enclosure is generally restricted to men.",
                                    perspectives: [
                                        {
                                            role: "Guide",
                                            icon: "Shield",
                                            insight: "Our drivers respect these etiquettes and will park in appropriate spots for the sisters to see comfortably."
                                        }
                                    ]
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* UGC Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8">Pilgrim Reviews</h2>
                    <div className="space-y-12">
                        <ReviewsDisplay location="MadinahZiyarat" />
                        <QuestionsDisplay location="MadinahZiyarat" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="MadinahZiyarat" />
                        <QuestionForm locationName="MadinahZiyarat" />
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Madinah Airport Taxi',
                        description: 'Arrival and departure transfers from Prince Mohammad Airport.',
                        href: '/locations/madinah',
                        icon: Car
                    },
                    {
                        name: 'Makkah Transport',
                        description: 'Travel back to the Holy City of Makkah after your stay in Madinah.',
                        href: '/routes/makkah-madinah/',
                        icon: Navigation
                    },
                ]}
                title="Complete Your Journey"
                description=""
            />
        </div>
    );
}
