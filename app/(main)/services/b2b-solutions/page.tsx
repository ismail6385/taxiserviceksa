import Link from 'next/link';
import {
    Building2,
    Handshake,
    Rocket,
    ShieldCheck,
    Users2,
    BarChart3,
    ArrowRight,
    CheckCircle2,
    Calendar,
    Car,
    FileText,
    Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata = {
    title: 'Private Car, Taxi and Chauffeur Service for B2B Corporate Solutions | Taxi Service KSA',
    description: 'Premier B2B transportation services in Saudi Arabia. We partner with travel agencies, Umrah operators, and corporate clients for reliable, luxury transfers.',
    keywords: ['B2B Transport Solutions Saudi Arabia'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/b2b-solutions/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/b2b-solutions/',
            'ar': 'https://taxiserviceksa.com/ar/services/b2b-solutions/',
            'ur': 'https://taxiserviceksa.com/ur/services/b2b-solutions/',
            'x-default': 'https://taxiserviceksa.com/services/b2b-solutions/',
        },
    },
};

export default function B2BSolutions() {
    const faqs = [
        {
            question: 'How do I become a B2B partner?',
            answer: 'Message our B2B desk on WhatsApp or email with your company details — travel agency, Umrah operator, hotel, or corporate account. We\'ll discuss your typical booking volume and set up fixed net rates.',
        },
        {
            question: 'Is there a minimum booking volume to qualify?',
            answer: 'No fixed minimum. We work with agencies of all sizes, from occasional group bookings to regular monthly volume — rates and terms scale with your typical usage.',
        },
        {
            question: 'How does invoicing work for partners?',
            answer: 'Partners receive consolidated invoicing for their bookings rather than paying per trip. Payment terms are agreed individually based on your booking volume.',
        },
        {
            question: 'Can you handle last-minute bulk bookings for Umrah groups?',
            answer: 'For existing partners with an established booking history, we prioritize urgent fleet allocation for pilgrim groups. New partners should reach out as early as possible for large or time-sensitive bookings.',
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <JsonLdFAQ faqs={faqs} />
            <Hero
                h1Text="Private Car, Taxi and Chauffeur Service for B2B Corporate Solutions"
                subtitle="We provide reliable, high-capacity, and luxury transport solutions for corporate clients and global Umrah agencies."
                images={["/chauffeur-service.png"]}
            />

            {/* B2B Services Grid */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black uppercase tracking-widest text-sm mb-4 block">B2B Specializations</span>
                        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Designed for Service Excellence</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Our B2B model is built on reliability, transparency, and premium service delivery for your clients.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Globe,
                                title: 'Umrah Agencies | Taxi Service KSA',
                                desc: 'Reliable fleet management for pilgrim groups of all sizes. Makkah, Madinah, and Jeddah coverage.',
                                color: 'bg-emerald-50 text-emerald-600'
                            },
                            {
                                icon: Building2,
                                title: 'Corporate Chauffeur | Taxi Service KSA',
                                desc: 'Luxury executive transfers for business travelers, delegations, and guests with high-end SUVs.',
                                color: 'bg-blue-50 text-blue-600'
                            },
                            {
                                icon: Users2,
                                title: 'Group Logistics | Taxi Service KSA',
                                desc: 'Coordination for large events, conferences, and tour groups using Staria, HiAce, and Coaster buses.',
                                color: 'bg-indigo-50 text-indigo-600'
                            }
                        ].map((service) => (
                            <div key={service.title} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 group">
                                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8`}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-sm font-bold text-gray-700">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                        Fixed Net Rates
                                    </li>
                                    <li className="flex items-center gap-2 text-sm font-bold text-gray-700">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                        Priority Allotment
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-4 bg-gray-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">Why Corporate Leaders <br />Choose Us?</h2>
                            <div className="space-y-8">
                                {[
                                    { icon: BarChart3, title: 'Centralized Billing | Taxi Service KSA', desc: 'Unified invoicing and reporting for all corporate travel activity.' },
                                    { icon: ShieldCheck, title: 'Duty of Care | Taxi Service KSA', desc: 'Vetted drivers, GPS tracking, and safety protocols for peace of mind.' },
                                    { icon: Rocket, title: 'API Integration | Taxi Service KSA', desc: 'Directly connect your booking engine to our fleet management system.' },
                                    { icon: FileText, title: 'Monthly Statements | Taxi Service KSA', desc: 'Detailed usage reports and simplified expense management.' }
                                ].map((feature) => (
                                    <div key={feature.title} className="flex gap-6">
                                        <div className="bg-white/10 p-4 rounded-2xl h-fit border border-white/5">
                                            <feature.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                    <div className="text-4xl font-black text-primary mb-2">99%</div>
                                    <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">Arrival On-Time</div>
                                </div>
                                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                    <div className="text-4xl font-black text-white mb-2">0</div>
                                    <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">Hidden Fees</div>
                                </div>
                            </div>
                            <div className="space-y-6 mt-12">
                                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                    <div className="text-4xl font-black text-white mb-2">24/7</div>
                                    <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">B2B Desk Support</div>
                                </div>
                                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                    <div className="text-4xl font-black text-primary mb-2">2016</div>
                                    <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">Operating Since</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        contextName="B2B Solutions"
                        faqs={faqs.map((f) => ({
                            question: f.question,
                            shortAnswer: f.answer.split('.')[0] + '.',
                            detailedAnswer: f.answer,
                            perspectives: [],
                        }))}
                    />
                </div>
            </section>

            {/* Related B2B Pages */}
            <section className="py-16 px-4 bg-gray-50 border-t border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">Related B2B &amp; Corporate Pages</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { href: '/services/corporate-travel/', label: 'Corporate Travel' },
                            { href: '/services/gcc-chauffeur-service/', label: 'GCC Chauffeur Service' },
                            { href: '/partners/', label: 'Partner With Us' },
                            { href: '/vip-transfer-dammam/', label: 'Dammam VIP Transfer' },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors shadow-sm border border-gray-100"
                            >
                                <ArrowRight className="w-4 h-4 flex-shrink-0" />
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">Become a Corporate Partner Today</h2>
                    <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                        Join our network of elite travel partners and provide your clients with the most reliable transport service in the Kingdom.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <a href="https://wa.me/966563573531?text=Hello%2C%20I%20represent%20a%20travel%20agency%2Ftour%20operator%20and%20want%20to%20discuss%20a%20B2B%20partnership" target="_blank" rel="noopener noreferrer">
                            <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-8 rounded-2xl text-lg shadow-xl shadow-green-500/20 transition-all group">
                                WhatsApp B2B Desk
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                        <Link href="/contact/">
                            <Button className="w-full bg-primary hover:bg-black text-white font-black py-8 rounded-2xl text-lg shadow-xl shadow-primary/20 transition-all group">
                                Inquire B2B Pricing
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-black py-8 rounded-2xl text-lg transition-all">
                                Email Business Team
                            </Button>
                        </a>
                    </div>
                    <p className="mt-8 text-sm text-gray-400 italic">Usually responded to within 4 business hours.</p>
                </div>
            </section>
        </main>
    );
}

