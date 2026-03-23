"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import {
    Car,
    User,
    Phone,
    Mail,
    MapPin,
    ShieldCheck,
    Briefcase,
    FileCheck,
    ArrowRight,
    CheckCircle2,
    Calendar,
    Sparkles,
    CheckCircle,
    Loader2,
    AlertCircle,
    Banknote,
    Clock,
    Globe,
    Star,
    ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface DriverJoinClientProps {
    cityObj: {
        id: string;
        name: string;
        opps: string[];
    };
    allCities: { id: string; name: string }[];
}

export default function DriverJoinClient({ cityObj, allCities }: DriverJoinClientProps) {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    
    // Check if the city is in the predefined list for the default `<select>`
    const predefinedCities = ['Makkah', 'Madinah', 'Jeddah', 'Riyadh'];
    const defaultCityValue = predefinedCities.includes(cityObj.name) ? cityObj.name : 'Other';

    const [formData, setFormData] = useState({
        full_name: '',
        phone_number: '',
        email: '',
        city: defaultCityValue,
        vehicle_model: '',
        license_valid: false,
        vehicle_condition: false,
        languages: false,
        code_conduct: false,
        owns_car: null as boolean | null
    });

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        // @ts-ignore
        const checked = e.target.checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const finalCity = formData.city === 'Other' ? cityObj.name : formData.city;

            const { error } = await supabase.from('drivers').insert([{
                full_name: formData.full_name,
                phone_number: formData.phone_number,
                email: formData.email,
                city: finalCity,
                vehicle_model: formData.vehicle_model,
                status: 'pending'
            }]);

            if (error) {
                console.error("Supabase DB Insert Failed (ignoring to send email):", error);
            }

            // Send Email Notification
            await fetch('/api/send-driver-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ driver: { ...formData, city: finalCity } })
            });

            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            console.error('Submission error:', error);
            alert('There was an error submitting your application. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4 py-32">
                <div className="max-w-xl w-full bg-white rounded-[3rem] p-12 text-center shadow-2xl shadow-gray-200 border border-gray-100">
                    <div className="bg-emerald-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle className="w-12 h-12 text-emerald-600" />
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 mb-4">Registration Submitted!</h1>
                    <p className="text-gray-600 mb-10 leading-relaxed">
                        Thank you for your interest in joining **Taxi Service KSA** in {cityObj.name}. Our compliance team will review your application and contact you via email within 48 hours.
                    </p>
                    <div className="space-y-4">
                        <Link href="/">
                            <Button className="w-full bg-primary hover:bg-black text-white font-black py-4 rounded-xl">
                                Return to Homepage
                            </Button>
                        </Link>
                        <p className="text-xs text-gray-400">Need immediate help? Email us at info@taxiserviceksa.com</p>
                    </div>
                </div>
            </main>
        );
    }

    const faqs = [
        {
            q: "Can I join with my own car?",
            a: "Yes! We only hire professional drivers who own their vehicles (model 2020 or newer). We do not accept rental drivers."
        },
        {
            q: "Do I need English?",
            a: "Yes, English or Arabic communication skills are required."
        },
        {
            q: "How do I receive bookings?",
            a: "Once approved, you will receive bookings directly from our platform. There is no open marketplace competition like Uber or Careem."
        },
        {
            q: "Is this Uber or private service?",
            a: "This is a private VIP service, NOT a ride-hailing app. There are no random passengers and no app competition. We provide direct bookings from premium clients."
        },
        {
            q: "How quickly can I start?",
            a: "You can start receiving trips within 24 hours of approval."
        }
    ];

    const getCityFlavorText = (cityName: string) => {
        const lower = cityName.toLowerCase();
        if (lower.includes('makkah')) return "Makkah experiences incredibly high demand during Umrah and Hajj seasons. As a VIP driver, you will handle continuous Haram routes, premium hotel transfers, and enjoy a 24/7 passenger flow from international pilgrims.";
        if (lower.includes('riyadh')) return "Riyadh is the business heartbeat of the Kingdom. Driver jobs here are focused on corporate clients, high-frequency business travel demand, and premium VIP airport transfers between major financial districts.";
        if (lower.includes('dammam') || lower.includes('khobar') || lower.includes('dhahran') || lower.includes('jubail') || lower.includes('ahsa')) return "The Eastern Region requires dedicated chauffeurs for lucrative Bahrain border trips, steady corporate oil company clients, and high-paying long-distance business routes across the coast.";
        if (lower.includes('jeddah')) return "Jeddah is the primary gateway for international arrivals. Chauffeur jobs in Jeddah involve a heavy volume of airport-to-hotel transfers, coastal tourism routes, and high-end corporate transportation.";
        if (lower.includes('taif') || lower.includes('abha') || lower.includes('hail') || lower.includes('tabuk') || lower.includes('buraidah') || lower.includes('qassim')) return "Tourist and regional cities like this see massive weekend and seasonal demand. Private driver jobs here focus on premium tourism rides, luxury family trips, and consistent vacationer transport.";
        if (lower.includes('madinah')) return "Madinah offers incredibly steady work with spiritual tourists. Taxi driver jobs here handle constant VIP hotel-to-mosque transport and lucrative intercity routes to Makkah.";
        return `As a private VIP driver in ${cityName}, you will tap into a growing local market with consistent daily trip requests. We connect you with local businesses and premium daily commuters.`;
    };

    return (
        <main className="min-h-screen bg-white">
            {/* 1. Hero Section */}
            <section className="bg-gray-950 pt-40 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-primary/20">
                        <Star className="w-4 h-4 fill-primary text-primary" /> VIP Chauffeur Recruitment
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
                        Join as a VIP Driver in <span className="text-primary">{cityObj.name}</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium mb-4">
                        Apply for premium <strong className="text-white font-semibold">taxi driver jobs in {cityObj.name}</strong>. Earn with your own car (2020+) – VIP clients only.
                    </p>
                    <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-4 max-w-3xl mx-auto text-yellow-300 font-semibold flex items-start sm:items-center gap-3 text-left sm:text-center text-sm">
                        <AlertCircle className="w-6 h-6 shrink-0 text-yellow-500" />
                        <p>We are only hiring professional drivers with their own vehicles (2020+), not rental drivers. We prefer drivers who can handle long-distance and border trips.</p>
                    </div>
                    <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-400 font-bold tracking-wide">
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Active drivers already working</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Daily trip requests available</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> High demand in this city</span>
                    </div>
                    {/* TASK 1: ADD STRONG HERO MESSAGE */}
                    <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-emerald-400 font-bold text-lg md:text-xl">
                        <div className="flex items-center justify-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20 w-full md:w-auto text-center">
                           <Banknote className="w-6 h-6 shrink-0" /> <span className="text-white">Earn up to 12,000+ SAR/month with your own car</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20 w-full md:w-auto text-center">
                           <ShieldCheck className="w-6 h-6 shrink-0" /> <span className="text-white">VIP clients only – No Uber/Careem competition</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20 w-full md:w-auto text-center">
                           <CheckCircle className="w-6 h-6 shrink-0" /> <span className="text-white">Start receiving trips within 24 hours</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Overview / Why us & Earnings */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900">Why Join Our VIP Taxi Service?</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg hover:text-gray-900 transition-colors">Start a rewarding career handling premium private driver jobs in {cityObj.name}.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            { icon: Banknote, title: "How Much Can You Earn?", desc: "No Uber/Careem competition. Earn 7000–15000 SAR/month depending on your trips." },
                            { icon: Calendar, title: "Direct Bookings", desc: "Get high-value clients and corporate trips directly assigned to you." },
                            { icon: Clock, title: "Flexible Schedule", desc: "Work on your terms. High flexibility for premium chauffeur jobs in Saudi Arabia." },
                            { icon: ShieldCheck, title: "Premium Network", desc: "Serve elite international visitors, executives, and luxury travelers." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group">
                                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 line-clamp-3">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Requirements & Opportunities */}
                    <div className="grid lg:grid-cols-2 gap-10">
                        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                                <FileCheck className="w-8 h-8 text-primary" /> Driver Requirements
                            </h3>
                            <ul className="space-y-5">
                                {[
                                    "Own car (2020 or newer)",
                                    "Valid driving license",
                                    "English or Arabic communication",
                                    "Professional and courteous behavior",
                                    "Willing for long trips & border crossing"
                                ].map((req, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium text-lg">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-10 rounded-[2.5rem] border border-gray-800 shadow-xl text-white">
                            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                                <MapPin className="w-8 h-8 text-primary" /> Opportunities in {cityObj.name}
                            </h3>
                            <p className="text-gray-400 mb-6 flex flex-col gap-4">
                                <span className="text-gray-300 italic">"{getCityFlavorText(cityObj.name)}"</span>
                                <span>Looking for <strong className="text-white font-semibold">chauffeur jobs in {cityObj.name}</strong>? You’ll have access to exclusive, highly profitable channels tailored for this area:</span>
                            </p>
                            <ul className="space-y-4">
                                {cityObj.opps.map((opp, i) => (
                                    <li key={i} className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                                        <Sparkles className="w-5 h-5 text-primary shrink-0" />
                                        <span className="font-semibold">{opp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW ADDED SECTIONS FROM TASK 2, 3, 4, 5 */}
            <section className="py-24 px-4 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto space-y-24">
                    {/* TASK 2: WHO CAN APPLY? */}
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8">Who Can Apply?</h2>
                        <div className="bg-gray-50 border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-sm text-left">
                            <ul className="grid md:grid-cols-2 gap-6">
                                {[
                                    "Own car (Model 2020 or newer)",
                                    "Valid license",
                                    "English or Arabic communication",
                                    "Professional attitude",
                                    "Available for long trips, airport transfers, and border routes"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                        <span className="text-lg font-bold text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* TASK 3, 4, 5 */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* TASK 3 */}
                        <div className="bg-emerald-50 border border-emerald-100 rounded-[2rem] p-8 shadow-sm">
                            <h3 className="text-2xl font-black text-emerald-900 mb-6 flex items-center gap-2">
                                <Banknote className="w-8 h-8 text-emerald-600 shrink-0" /> How Much Can You Earn?
                            </h3>
                            <p className="text-emerald-800 font-bold mb-5 pb-5 border-b border-emerald-200/50">Top drivers earn up to 12,000+ SAR/month depending on demand.</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">7000–12000+ SAR/month</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">High-value VIP trips</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">Tips from premium clients</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">Flexible working schedule</span></li>
                            </ul>
                        </div>

                        {/* TASK 4 */}
                        <div className="bg-red-50 border border-red-100 rounded-[2rem] p-8 shadow-sm">
                            <h3 className="text-2xl font-black text-red-900 mb-6 flex items-center gap-2">
                                <AlertCircle className="w-8 h-8 text-red-600 shrink-0" /> This is NOT a Ride-Hailing App
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">No random passengers</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">No app competition</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">Direct bookings only</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">Premium clients</span></li>
                            </ul>
                        </div>

                        {/* TASK 5 */}
                        <div className="bg-primary/5 border border-primary/20 rounded-[2rem] p-8 shadow-sm">
                            <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                                <ShieldCheck className="w-8 h-8 text-primary shrink-0" /> Why Join Our VIP Taxi Service?
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">Active drivers across Saudi Arabia</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">Daily trip availability</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">Weekly or fast payouts</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">Verified transport service</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Form Section (Exact Lead Form) */}
            <section className="py-24 px-4 bg-white" id="apply">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900">Apply Now</h2>
                        <p className="text-gray-500 mt-4 text-lg">Use the form below to apply for driver jobs in {cityObj.name}.</p>
                    </div>

                    <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-50">
                        <div className="mb-8 hidden sm:block">
                            <h2 className="text-3xl font-black text-gray-900 mb-2">Driver Registration Form</h2>
                            <p className="text-red-500 font-black text-lg">Limited driver slots available in {cityObj.name} – only professional drivers will be selected.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            name="full_name"
                                            value={formData.full_name}
                                            onChange={handleChange}
                                            required
                                            type="text"
                                            placeholder="e.g. Abdullah Ahmed"
                                            className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 ring-primary/20 text-gray-900 font-bold placeholder:text-gray-300 transition-all font-sans"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            name="phone_number"
                                            value={formData.phone_number}
                                            onChange={handleChange}
                                            required
                                            type="tel"
                                            placeholder="e.g. +966 5X XXX XXXX"
                                            className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 ring-primary/20 text-gray-900 font-bold placeholder:text-gray-300 transition-all font-sans"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        type="email"
                                        placeholder="e.g. abdullah@example.com"
                                        className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 ring-primary/20 text-gray-900 font-bold placeholder:text-gray-300 transition-all font-sans"
                                    />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">Vehicle City</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <select
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 ring-primary/20 text-gray-900 font-bold appearance-none transition-all font-sans"
                                        >
                                            <option value="">Select City</option>
                                            <option value="Makkah">Makkah</option>
                                            <option value="Madinah">Madinah</option>
                                            <option value="Jeddah">Jeddah</option>
                                            <option value="Riyadh">Riyadh</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    {formData.city === 'Other' && (
                                        <p className="text-xs text-primary font-bold pl-2 pt-1 pb-0 mb-0">Will be set to: {cityObj.name}</p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-gray-400 uppercase tracking-widest pl-1">Vehicle Model</label>
                                    <div className="relative">
                                        <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            name="vehicle_model"
                                            value={formData.vehicle_model}
                                            onChange={handleChange}
                                            required
                                            type="text"
                                            placeholder="e.g. Toyota Camry 2024"
                                            className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 ring-primary/20 text-gray-900 font-bold placeholder:text-gray-300 transition-all font-sans"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-6 border-t border-gray-100 mt-6">
                                <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">Vehicle Ownership</h4>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <label className={`\${formData.owns_car === true ? 'bg-primary/10 border-primary ring-2 ring-primary/20' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} border-2 p-4 rounded-2xl cursor-pointer transition-all flex items-center gap-3`}>
                                        <input
                                            type="radio"
                                            name="owns_car"
                                            required
                                            checked={formData.owns_car === true}
                                            onChange={() => setFormData({ ...formData, owns_car: true })}
                                            className="w-5 h-5 text-primary focus:ring-primary/20"
                                        />
                                        <span className="text-sm font-bold text-gray-900">Yes, I own my own car</span>
                                    </label>
                                    <label className={`\${formData.owns_car === false ? 'bg-red-50 border-red-500 ring-2 ring-red-500/20' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} border-2 p-4 rounded-2xl cursor-pointer transition-all flex items-center gap-3`}>
                                        <input
                                            type="radio"
                                            name="owns_car"
                                            required
                                            checked={formData.owns_car === false}
                                            onChange={() => setFormData({ ...formData, owns_car: false })}
                                            className="w-5 h-5 text-red-500 focus:ring-red-500/20"
                                        />
                                        <span className="text-sm font-bold text-gray-900">No, I do not</span>
                                    </label>
                                </div>

                                {formData.owns_car === false && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm font-bold flex gap-3 items-start">
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                        <p>We only accept driver partners who own their own vehicle. Unfortunately, you cannot proceed with the application at this time.</p>
                                    </div>
                                )}
                            </div>

                            <div className={`space-y-4 pt-6 border-t border-gray-100 \${formData.owns_car === false ? 'opacity-50 pointer-events-none' : ''}`}>
                                <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">Requirements Check</h4>
                                <div className="grid gap-3">
                                    <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-primary/5 transition-colors group">
                                        <input
                                            name="license_valid"
                                            checked={formData.license_valid}
                                            onChange={handleChange}
                                            type="checkbox"
                                            required
                                            className="w-5 h-5 rounded-lg border-2 border-gray-200 text-primary focus:ring-primary/20 cursor-pointer"
                                        />
                                        <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">I have a valid Saudi Driving License</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-primary/5 transition-colors group">
                                        <input
                                            name="vehicle_condition"
                                            checked={formData.vehicle_condition}
                                            onChange={handleChange}
                                            type="checkbox"
                                            required
                                            className="w-5 h-5 rounded-lg border-2 border-gray-200 text-primary focus:ring-primary/20 cursor-pointer"
                                        />
                                        <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">My vehicle is in excellent condition (2020 or newer)</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-primary/5 transition-colors group">
                                        <input
                                            name="languages"
                                            checked={formData.languages}
                                            onChange={handleChange}
                                            type="checkbox"
                                            required
                                            className="w-5 h-5 rounded-lg border-2 border-gray-200 text-primary focus:ring-primary/20 cursor-pointer"
                                        />
                                        <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">I can communicate in English/Arabic</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-primary/5 transition-colors group">
                                        <input
                                            name="code_conduct"
                                            checked={formData.code_conduct}
                                            onChange={handleChange}
                                            type="checkbox"
                                            required
                                            className="w-5 h-5 rounded-lg border-2 border-gray-200 text-primary focus:ring-primary/20 cursor-pointer"
                                        />
                                        <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">I agree to handle long-distance & border trips if requested</span>
                                    </label>
                                </div>
                            </div>

                            <div className="flex flex-col xl:flex-row gap-4 mt-8">
                                <Button type="submit" disabled={loading || formData.owns_car === false} className="w-full h-auto flex items-center justify-center gap-2 bg-primary hover:bg-black text-white font-black py-5 sm:py-7 px-4 rounded-2xl text-base sm:text-lg shadow-2xl shadow-primary/20 transition-all group disabled:opacity-50 disabled:cursor-not-allowed">
                                    {loading ? (
                                        <><Loader2 className="animate-spin shrink-0" /> <span>Submitting...</span></>
                                    ) : (
                                        <><span>Submit Application</span> <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" strokeWidth={3} /></>
                                    )}
                                </Button>
                                <a 
                                    href={`https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20apply%20as%20a%20VIP%20driver%20in%20${cityObj.name}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-full h-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-black py-5 sm:py-7 px-4 rounded-2xl text-[15px] sm:text-lg shadow-2xl shadow-[#25D366]/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-center leading-tight sm:leading-snug"
                                >
                                    <WhatsAppIcon className="w-7 h-7 fill-white shrink-0 mb-1 sm:mb-0" />
                                    <span>Get Approved on WhatsApp<br className="hidden sm:block xl:hidden text-center" /> in 5 Minutes</span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900">FAQ</h2>
                        <p className="text-gray-500 mt-4 text-lg">Common questions about joining as a chauffeur in {cityObj.name}</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                                >
                                    <span className="font-bold text-gray-900 text-lg">{faq.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 \${openFaq === i ? 'rotate-180 text-primary' : ''}`} />
                                </button>
                                <div className={`px-6 pb-5 text-gray-600 leading-relaxed transition-all \${openFaq === i ? 'block' : 'hidden'}`}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal Linking Section */}
            <section className="py-24 px-4 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-black text-gray-900 mb-4">We are also hiring in Riyadh, Jeddah, Makkah, and Madinah</h2>
                    <p className="text-gray-500 text-lg mb-8">Click below to view local opportunities</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {allCities.filter(c => c.id !== cityObj.id).map(city => (
                            <Link 
                                key={city.id} 
                                href={`/join-as-driver/${city.id}`}
                                className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 font-bold hover:bg-primary hover:text-white hover:border-primary transition-colors inline-block"
                            >
                                Looking for driver jobs in {city.name}? Apply here
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
