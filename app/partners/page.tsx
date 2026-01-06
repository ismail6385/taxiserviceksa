import Link from 'next/link';
import {
    Users,
    Handshake,
    Car,
    ShieldCheck,
    TrendingUp,
    Globe,
    ArrowRight,
    CheckCircle2,
    Building2,
    Users2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';

export const metadata = {
    title: 'Partner with Us | VIP Transfer KSA B2B & Driver Registration',
    description: 'Join Saudi Arabia\'s fastest-growing premium transport network. We offer lucrative opportunities for professional taxi drivers and B2B solutions for travel agencies.',
};

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero
                title="Grow Your Business with VIP Transfer KSA"
                subtitle="Join our elite network of professional drivers and business partners across Saudi Arabia. We bridge the gap between world-class transport and premium clientele."
                images={["/partners-hero.png"]}
            />

            {/* Partnership Options */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-gray-900 mb-4">Choose Your Path</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Whether you are an individual professional driver or a business looking for reliable transport solutions, we have a partnership model for you.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Driver Partnership */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200 border border-gray-100 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500">
                            <div>
                                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                    <Car className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4">For Professional Drivers</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Are you a licensed driver in Saudi Arabia? Register your vehicle with us and gain access to high-value bookings from pilgrims, tourists, and corporate executives.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {[
                                        'High-value executive bookings',
                                        'Flexible working hours in Makkah & Madinah',
                                        'Professional driver training & support',
                                        'Prompt weekly payment processing'
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link href="/partners/driver-registration/">
                                <Button className="w-full bg-primary hover:bg-black text-white font-black py-8 rounded-2xl text-lg shadow-xl shadow-primary/20 transition-all group">
                                    Register as Driver
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                                </Button>
                            </Link>
                        </div>

                        {/* B2B Partnership */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200 border border-gray-100 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500">
                            <div>
                                <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                                    <Building2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4">B2B & Agencies</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Partner with us to provide seamless transportation for your clients. We work with Umrah agencies, hotels, and corporate travel desks globally.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {[
                                        'Preferential B2B net rates',
                                        'Priority support for group bookings',
                                        'Co-branded transport solutions',
                                        'API integration for booking portals'
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link href="/services/b2b-solutions/">
                                <Button className="w-full bg-indigo-600 hover:bg-black text-white font-black py-8 rounded-2xl text-lg shadow-xl shadow-indigo-600/20 transition-all group">
                                    Explore B2B Solutions
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-black uppercase tracking-widest text-sm mb-4 block">Our Advantage</span>
                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                Built for Growth, <br />Designed for Excellence.
                            </h2>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                                We aren't just a taxi service; we are a technology-driven ecosystem that connects the best drivers in Saudi Arabia with local and international demand.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <div className="bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center">
                                        <ShieldCheck className="w-6 h-6 text-primary" />
                                    </div>
                                    <h4 className="font-bold text-gray-900">Trusted Network</h4>
                                    <p className="text-sm text-gray-500">Government licensed and insured operations.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <h4 className="font-bold text-gray-900">Scalable Earnings</h4>
                                    <p className="text-sm text-gray-500">Access to 50,000+ monthly potential travelers.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center">
                                        <Globe className="w-6 h-6 text-primary" />
                                    </div>
                                    <h4 className="font-bold text-gray-900">Global Reach</h4>
                                    <p className="text-sm text-gray-500">Connecting drivers to international pilgrim groups.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center">
                                        <Handshake className="w-6 h-6 text-primary" />
                                    </div>
                                    <h4 className="font-bold text-gray-900">Direct Support</h4>
                                    <p className="text-sm text-gray-500">Dedicated local partner management team.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-3 transform translate-x-4 translate-y-4"></div>
                            <img
                                src="/partnership-advantage.png" // We will need to generate this
                                alt="Saudi Taxi Partners"
                                className="relative z-10 w-full rounded-[3rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                    <h2 className="text-3xl lg:text-4xl font-black text-white mb-8 relative z-10">Ready to start your journey with us?</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                        Join hundreds of successful partners across the Kingdom. Let's redefine luxury transport together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Link href="/partners/driver-registration/">
                            <Button className="bg-primary hover:bg-white hover:text-gray-900 text-white font-black px-10 py-8 rounded-2xl text-lg transition-all w-full sm:w-auto">
                                Driver Signup
                            </Button>
                        </Link>
                        <Link href="/contact/">
                            <Button className="bg-white/10 hover:bg-white/20 text-white font-black px-10 py-8 rounded-2xl text-lg backdrop-blur-sm transition-all w-full sm:w-auto">
                                Contact Business Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
