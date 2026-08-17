
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Accessibility, Heart, Shield, Clock, Phone, UserCheck, Car, Star, Users, Info } from 'lucide-react';
import Hero from '@/components/Hero';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedServices from '@/components/seo/RelatedServices';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Private Car, Taxi and Chauffeur Service for Wheelchair & Senior-Friendly Transport | Taxi Service KSA',
    description: 'Wheelchair-accessible and senior-friendly private transport in Saudi Arabia. Vehicles fit foldable wheelchairs, drivers assist with boarding. For elderly, disabled, and slow-mobility passengers — Umrah, hospital visits, and airport transfers.',
    keywords: ['Wheelchair VIP transfer Saudi Arabia', 'Handicap accessible transport KSA', 'Disabled transfer service', 'Elderly transport Umrah', 'Senior-friendly taxi Saudi Arabia', 'Medical VIP transfer service'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/wheelchair-taxi/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/wheelchair-taxi/',
            'ar': 'https://taxiserviceksa.com/ar/services/wheelchair-taxi/',
            'ur': 'https://taxiserviceksa.com/ur/services/wheelchair-taxi/',
            'x-default': 'https://taxiserviceksa.com/services/wheelchair-taxi/',
        },
    },
};

export default function WheelchairTaxiPage() {
    const features = [
        { icon: Accessibility, title: "Accessible Vehicles | Taxi Service KSA", desc: "Spacious vans (GMC/H-1) with ample room for folded wheelchairs and easy boarding access." },
        { icon: Heart, title: "Driver Assistance | Taxi Service KSA", desc: "Drivers trained to assist passengers with mobility challenges, ensuring safe boarding and alighting." },
        { icon: Clock, title: "Patient Waiting | Taxi Service KSA", desc: "Flexible waiting times for hospital appointments or medical visits." },
        { icon: Shield, title: "Safety First | Taxi Service KSA", desc: "Gentle driving protocols to ensure the comfort of sensitive passengers." }
    ];

    const vehicles = [
        { name: 'GMC Yukon XL', seats: 7, note: 'Higher seat and wide door opening — easiest step-up for passengers with limited mobility. Folded wheelchair stores in the rear.', link: '/fleet/gmc-yukon/' },
        { name: 'Hyundai Staria', seats: 7, note: 'Lower floor and sliding doors make boarding easier for elderly passengers who struggle with a high step.', link: '/fleet/hyundai-staria/' },
        { name: 'Toyota Hiace', seats: 11, note: 'For a wheelchair user traveling with several family members or caregivers in one vehicle.', link: '/fleet/toyota-hiace/' },
    ];

    const faqs = [
        {
            question: 'Do you have ramp-equipped or hydraulic-lift vehicles?',
            answer: 'No — this is important to know before booking. Our fleet (GMC Yukon, Hyundai Staria, Toyota Hiace) accommodates foldable wheelchairs stored in the trunk, and drivers assist with transferring the passenger to a car seat. We do not operate hydraulic lift vans for passengers who cannot transfer out of a wheelchair. This service is best suited for passengers who can move to a car seat with assistance.',
        },
        {
            question: 'Is this service suitable for elderly passengers who don\'t use a wheelchair?',
            answer: 'Yes. Beyond wheelchair users, this service is well suited to senior travelers who simply need a patient driver, a higher seat that\'s easier to step up into, and help with luggage — without needing any specialised equipment.',
        },
        {
            question: 'Can the driver push the wheelchair inside the Haram?',
            answer: 'Our service is point-to-point transport. Inside the Haram in Makkah or Madinah, there are dedicated free wheelchair services and paid pushers available on-site. Our driver drops you at the closest accessible point, and knows the best drop-off spots near elevators and ramps.',
        },
        {
            question: 'What assistance do drivers provide with boarding?',
            answer: 'Drivers assist with folding and loading the wheelchair, help the passenger transfer to the vehicle seat, and assist again at drop-off. Please mention any specific assistance needs when booking so the driver comes prepared.',
        },
        {
            question: 'Can I book this for a hospital visit with waiting time?',
            answer: 'Yes. Flexible waiting is available for hospital and clinic appointments — the same driver waits and returns you home afterward, rather than booking a separate return trip.',
        },
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Wheelchair Accessible & Senior-Friendly Taxi Service",

        "description": "Specialized transportation for passengers with mobility needs, wheelchairs, and senior travelers who need a patient, assistance-ready driver.",
        "areaServed": "Saudi Arabia",
        "serviceType": "MedicalTransport"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="accessible-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />
            <JsonLdFAQ faqs={faqs} />

            <Hero
                images={['/hero-slide-3.webp', '/hero-slide-1.webp']}
                h1Text="Private Car, Taxi and Chauffeur Service for Wheelchair Accessible Transport"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Care & Comfort
                    </span>
                }
                subtitle="Transport for Everyone"
                location="KSA Wide Service"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                    <EntityTrustSignal
                        brandName="Taxi Service KSA™ Care"
                        description="Providing dignified and comfortable mobility solutions for our elders and guests with special needs. Accessible transport for Umrah and daily needs."
                        foundingDate="2012"
                        metrics={[
                            { label: 'Care Trips', value: '5,000+', icon: Heart },
                            { label: 'Assisted Guests', value: '8,000+', icon: UserCheck },
                            { label: 'Safety Rating', value: '100%', icon: Shield }
                        ]}
                    />
                </div>
            </Hero>

            {/* Important scope notice — moved up front, not buried in FAQ */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20 mb-4">
                <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 flex items-start gap-4">
                    <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-900 text-sm leading-relaxed">
                        <strong>Please note before booking:</strong> our vehicles fit a <strong>folded</strong> wheelchair, and drivers assist the passenger transferring to a regular car seat. We do not operate hydraulic-lift vans for passengers who cannot transfer out of a wheelchair. This service is also well suited to senior travelers who don't use a wheelchair but need a patient driver and an easier step-up into the vehicle.
                    </p>
                </div>
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Features for Mobility Needs</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We prioritize the safety and comfort of every passenger.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((f, i) => (
                            <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
                                <f.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                                <p className="text-gray-600 text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicle Guide */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choosing the Right Vehicle</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Boarding ease differs by vehicle — here's what to expect from each.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {vehicles.map((v, i) => (
                            <Link key={i} href={v.link} className="block bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all">
                                <Car className="w-8 h-8 text-emerald-600 mb-4" />
                                <h3 className="font-bold text-gray-900 text-lg mb-1">{v.name}</h3>
                                <div className="flex items-center gap-1 text-xs text-gray-500 mb-3"><Users className="w-3.5 h-3.5" /> {v.seats} passengers</div>
                                <p className="text-gray-600 text-sm">{v.note}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        contextName="Wheelchair Taxi"
                        faqs={[
                            {
                                question: "Do you have ramp-equipped vehicles?",
                                shortAnswer: "Foldable Wheelchairs only.",
                                detailedAnswer: "Currently, our fleet (GMC Yukon, Hyundai Staria) accommodates **foldable wheelchairs** comfortably in the trunk. We do not operate hydraulic lift vans. Drivers assist in transferring passengers to the vehicle seat.",
                                perspectives: [
                                    {
                                        role: "Service Notice",
                                        icon: "Accessibility",
                                        insight: "Best suited for passengers who can transfer to a car seat with assistance."
                                    }
                                ]
                            },
                            {
                                question: "Is this suitable for elderly passengers who don't use a wheelchair?",
                                shortAnswer: "Yes, senior-friendly too.",
                                detailedAnswer: "Yes. This service also suits senior travelers who simply need a patient driver, an easier step-up into the vehicle, and help with luggage — no wheelchair required.",
                                perspectives: [
                                    {
                                        role: "Service Notice",
                                        icon: "Heart",
                                        insight: "Many bookings are for elderly parents on Umrah who just need extra patience, not equipment."
                                    }
                                ]
                            },
                            {
                                question: "Can the driver push the wheelchair inside the Haram?",
                                shortAnswer: "Transport Only.",
                                detailedAnswer: "Our service is point-to-point transport. Inside the Haram (Makkah/Madinah), there are dedicated free wheelchair services and paid pushers available. Our driver drops you at the closest accessible point.",
                                perspectives: [
                                    {
                                        role: "Operations",
                                        icon: "MapPin",
                                        insight: "We know the best drop-off points closer to elevators and ramps at the mosques."
                                    }
                                ]
                            },
                            {
                                question: "What assistance do drivers provide with boarding?",
                                shortAnswer: "Help at both ends of the trip.",
                                detailedAnswer: "Drivers assist with folding and loading the wheelchair, help the passenger transfer to the vehicle seat, and assist again at drop-off. Mention specific assistance needs when booking so the driver comes prepared.",
                                perspectives: []
                            },
                            {
                                question: "Can I book this for a hospital visit with waiting time?",
                                shortAnswer: "Yes, flexible waiting.",
                                detailedAnswer: "Yes. The same driver waits during hospital or clinic appointments and returns you home afterward, rather than booking a separate return trip.",
                                perspectives: []
                            }
                        ]}
                    />
                </div>
            </section>

            {/* UGC Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8">Customer Care Reviews</h2>
                    <div className="space-y-12">
                        <ReviewsDisplay location="WheelchairTaxi" />
                        <QuestionsDisplay location="WheelchairTaxi" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        <ReviewForm locationName="WheelchairTaxi" />
                        <QuestionForm locationName="WheelchairTaxi" />
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Intercity Transfers',
                        description: 'Comfortable long-distance travel in spacious vehicles for families.',
                        href: '/services/intercity',
                        icon: Car
                    },
                    {
                        name: 'Umrah Transport',
                        description: 'Respectful transport for your complete spiritual journey.',
                        href: '/services/umrah-transport',
                        icon: Star
                    }
                ]}
                title="Related Services"
                description=""
            />
        </div>
    );
}

