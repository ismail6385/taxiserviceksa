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

export const metadata = {
    title: 'B2B & Corporate Transport Solutions | VIP Transfer KSA',
    description: 'Premier B2B transportation services in Saudi Arabia. We partner with travel agencies, Umrah operators, and corporate clients for reliable, luxury transfers.',
};

export default function B2BSolutions() {
    return (
        <main className="min-h-screen bg-white">
            <Hero
                title="Scale Your Travel Business with Top-Tier Logistics"
                subtitle="We provide reliable, high-capacity, and luxury transport solutions for corporate clients and global Umrah agencies."
                images={["/b2b-hero.png"]}
            />

            {/* B2B Services Grid */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black uppercase tracking-widest text-sm mb-4 block">B2B Specializations</span>
                        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Designed for Service Excellence</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Our B2B model is built on reliability, transparency, and premium service delivery for your VIP clients.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Globe,
                                title: 'Umrah Agencies',
                                desc: 'Reliable fleet management for pilgrim groups of all sizes. Makkah, Madinah, and Jeddah coverage.',
                                color: 'bg-emerald-50 text-emerald-600'
                            },
                            {
                                icon: Building2,
                                title: 'Corporate Chauffeur',
                                desc: 'Luxury executive transfers for business travelers, delegations, and VIP guests with high-end SUVs.',
                                color: 'bg-blue-50 text-blue-600'
                            },
                            {
                                icon: Users2,
                                title: 'Group Logistics',
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
                                    { icon: BarChart3, title: 'Centralized Billing', desc: 'Unified invoicing and reporting for all corporate travel activity.' },
                                    { icon: ShieldCheck, title: 'Duty of Care', desc: 'Vetted drivers, GPS tracking, and safety protocols for peace of mind.' },
                                    { icon: Rocket, title: 'API Integration', desc: 'Directly connect your booking engine to our fleet management system.' },
                                    { icon: FileText, title: 'Monthly Statements', desc: 'Detailed usage reports and simplified expense management.' }
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
                                    <div className="text-4xl font-black text-white mb-2">150+</div>
                                    <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">Global Partners</div>
                                </div>
                            </div>
                            <div className="space-y-6 mt-12">
                                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                    <div className="text-4xl font-black text-white mb-2">24/7</div>
                                    <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">B2B Desk Support</div>
                                </div>
                                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                    <div className="text-4xl font-black text-primary mb-2">5/5</div>
                                    <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">Average VIP Rating</div>
                                </div>
                            </div>
                        </div>
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
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Link href="/contact/">
                            <Button className="w-full bg-primary hover:bg-black text-white font-black py-8 rounded-2xl text-lg shadow-xl shadow-primary/20 transition-all group">
                                Inquire B2B Pricing
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:info@transferksa.com">
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
