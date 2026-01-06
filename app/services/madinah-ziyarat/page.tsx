
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
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

export const metadata: Metadata = {
    title: 'Madinah Ziyarat Taxi Service | Holy Sites Tours (Ziyarah)',
    description: 'Book comprehensive Ziyarat tours in Madinah. Visit Masjid Quba, Mount Uhud, Seven Mosques, and Qiblatain with knowledgeable local drivers. Fixed price packages.',
    keywords: ['Madinah Ziyarat', 'Ziyarat taxi Madinah', 'Quba mosque taxi', 'Uhud mountain tour', 'Seven mosques visit', 'Madinah holy sites transport'],
    alternates: {
        canonical: 'https://transferksa.com/services/madinah-ziyarat/',
    },
};

export default function MadinahZiyaratPage() {
    const packages = [
        {
            name: 'Standard Ziyarat',
            duration: '2-3 Hours',
            price: 'SAR 150',
            sites: ['Masjid Quba', 'Mount Uhud', 'Masjid Qiblatain', 'Seven Mosques (Khandaq)'],
            desc: 'The essential Sunnah sites visited by millions of pilgrims.'
        },
        {
            name: 'Extended Ziyarat',
            duration: '4-5 Hours',
            price: 'SAR 250',
            sites: ['Standard Sites +', 'Bir Uthman', 'Dates Market', 'Printing Press', 'Uhud Martyrs Cemetery'],
            desc: 'A deeper dive into the history of Madinah with extra stops.'
        },
        {
            name: 'Badar Ziyarat',
            duration: '5-6 Hours',
            price: 'SAR 450',
            sites: ['Badar Battlefield', 'Martyrs of Badar', 'Al-Arish Mosque'],
            desc: 'A trip outside Madinah to the site of the first battle of Islam (150km away).'
        }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Madinah Ziyarat Service",

        "description": "Guided taxi tours to holy Islamic sites in Madinah.",
        "areaServed": "Madinah",
        "serviceType": "ReligiousTour"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="ziyarat-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Hero
                images={['/madinah-prophets-mosque.webp', '/hero-slide-2.webp']}
                h1Text="Madinah Ziyarat Taxi Packages"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Spiritual Journey
                    </span>
                }
                subtitle="Walk in the Footsteps of History"
                location="Madinah Al Munawwarah"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="TaxiServiceKSA™ Ziyarat"
                        description="Facilitating the Sunnah of visiting Quba and the Shuhada of Uhud in <Link href='/locations/madinah/' className='text-emerald-700 font-bold hover:underline'>Al-Madinah Al-Munawwarah</Link>. We provide not just a car, but a respectful environment for your Ibadah."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Ziyarat Trips', value: '25k+', icon: Moon },
                            { label: 'Sites Covered', value: '15+', icon: MapPin },
                            { label: 'Driver Knowledge', value: 'Expert', icon: Star }
                        ]}
                    />
                </div>
            </Hero>

            {/* Packages */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Ziyarat Packages</h2>
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
                                    <Button className="w-full bg-black text-white hover:bg-gray-800">Book Now</Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        points={[
                            {
                                topic: "Morning vs Evening Ziyarat",
                                commonBelief: "Any time is fine.",
                                reality: "Early morning (7 AM - 10 AM) is best to avoid heat and crowds. Many pilgrims who arrive via the <Link href='/routes/makkah-madinah/' className='text-emerald-700 hover:underline'>Makkah to Madinah taxi booking</Link> prefer to start their Ziyarat the next morning for the best lighting.",
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

