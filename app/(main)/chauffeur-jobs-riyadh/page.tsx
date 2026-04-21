import { Metadata } from 'next';
import Link from 'next/link';
import { 
    Car, 
    ShieldCheck, 
    Star, 
    TrendingUp, 
    Clock, 
    Award, 
    CheckCircle2, 
    MapPin, 
    Smartphone, 
    UserCheck,
    MessageCircle,
    UserPlus
} from 'lucide-react';
import EarningsTransparency from '@/components/EarningsTransparency';
import BookingProcess from '@/components/BookingProcess';
import JsonLdJobPosting from '@/components/seo/JsonLdJobPosting';
import JsonLdBreadcrumb from '@/components/seo/JsonLdBreadcrumb';

export const metadata: Metadata = {
    title: 'High-Income Chauffeur Jobs Riyadh 2026 | VIP Driver Roles',
    description: 'Elite chauffeur jobs in Riyadh 2026. Earn SAR 15,000 - 25,000 monthly. Requirements: Own car (2020+), professional attitude, and VIP service focus. Apply today.',
    keywords: ['chauffeur jobs Riyadh 2026', 'VIP driver recruitment Riyadh', 'high paying driving jobs Saudi Arabia', 'Riyadh private chauffeur vacancies'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/chauffeur-jobs-riyadh/',
    }
};

export default function ChauffeurJobsRiyadhPage() {
    const driverSteps = [
        {
            title: 'WhatsApp Profile',
            description: 'Send your vehicle photos (interior/exterior) and driver license via WhatsApp.',
            icon: MessageCircle,
            color: 'bg-emerald-500',
            textColor: 'text-emerald-500'
        },
        {
            title: 'Quality Check',
            description: 'Our team reviews your profile and schedules a brief vehicle inspection in Riyadh.',
            icon: ShieldCheck,
            color: 'bg-blue-600',
            textColor: 'text-blue-600'
        },
        {
            title: 'Start Earning',
            description: 'Get access to high-value dispatches, airport runs, and long-distance bookings.',
            icon: UserPlus,
            color: 'bg-gray-900',
            textColor: 'text-gray-900'
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <JsonLdBreadcrumb 
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Riyadh Jobs', item: '/chauffeur-jobs-riyadh' }
                ]}
            />
            <JsonLdJobPosting 
                title="High-Income Chauffeur Jobs Riyadh 2026"
                description="Elite chauffeur jobs in Riyadh 2026. Earn SAR 15,000 - 25,000 monthly. Requirements: Own car (2020+), professional attitude, and VIP service focus."
                datePosted="2026-04-20"
                validThrough="2026-12-31"
                employmentType="FULL_TIME"
                hiringOrganization="Taxi Service KSA"
                jobLocation={{
                    addressLocality: "Riyadh",
                    addressRegion: "Riyadh Province",
                    addressCountry: "SA"
                }}
                baseSalary={{
                    currency: "SAR",
                    value: 15000,
                    unitText: "MONTH"
                }}
            />
            {/* Hero Section */}
            <div className="bg-gray-950 text-white pt-32 pb-24 px-4 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-l from-emerald-500/20 to-transparent"></div>
                </div>
                
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-8">
                        <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Now Recruiting for 2026</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
                        Premium Chauffeur <br />
                        <span className="text-emerald-500">Opportunities in Riyadh</span>
                    </h1>
                    
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
                        Stop chasing low-value app pings. Join Riyadh's most exclusive network of private chauffeurs and capture the city's highest-paying VIP transfers.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="https://wa.me/966555555555" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-emerald-900/20 flex items-center gap-3">
                            <MessageCircle className="w-6 h-6" /> Apply via WhatsApp
                        </Link>
                        <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                            <TrendingUp className="w-5 h-5 text-emerald-400" />
                            <span className="font-bold">SAR 15k - 25k / Month</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Earnings Transparency */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 italic font-display">Earnings Transparency</h2>
                        <p className="text-gray-500 text-lg">We believe in radical honesty. Here is what you can realistically earn in Riyadh.</p>
                    </div>
                    <EarningsTransparency />
                </div>
            </section>

            {/* Requirements Grid */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                                <Car className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-black mb-4">Elite Vehicle</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Must own a personal vehicle, model year <strong>2020 or newer</strong>. Sedans (Camry/Sonata) or SUVs (Tahoe/Prado) preferred.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                                <UserCheck className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-black mb-4">Professionalism</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Clean uniform, polite communication, and punctuality are non-negotiable. We serve high-net-worth clients.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                                <Smartphone className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-black mb-4">Digital Literacy</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Proficiency in using Google Maps and WhatsApp for dispatch coordination and client communication.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                                <ShieldCheck className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-black mb-4">Reliable History</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                A valid Saudi driving license and a clean traffic record are essential for passenger safety.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="px-4">
                <BookingProcess 
                    title="Simple Onboarding Process"
                    subtitle="Become a certified Riyadh chauffeur in less than 48 hours."
                    steps={driverSteps}
                />
            </section>

            {/* CTA */}
            <section className="py-24 px-4 bg-emerald-600">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight italic font-display">Ready to Elevate Your Income?</h2>
                    <p className="text-emerald-100 text-xl mb-12 font-medium">
                        Limited slots available for Riyadh's premium 2026 fleet. Apply now and start receiving VIP bookings this week.
                    </p>
                    <Link href="https://wa.me/966555555555" className="inline-flex items-center gap-3 bg-white text-emerald-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-emerald-50 transition-all shadow-2xl">
                        <MessageCircle className="w-6 h-6" /> Message Recruiter
                    </Link>
                </div>
            </section>
        </main>
    );
}
