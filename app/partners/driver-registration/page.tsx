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
    Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DriverRegistration() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        full_name: '',
        phone_number: '',
        email: '',
        city: '',
        vehicle_model: '',
        license_valid: false,
        vehicle_condition: false,
        languages: false,
        code_conduct: false
    });

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
            const { error } = await supabase.from('drivers').insert([{
                full_name: formData.full_name,
                phone_number: formData.phone_number,
                email: formData.email,
                city: formData.city,
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
                body: JSON.stringify({ driver: formData })
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
                        Thank you for your interest in joining **VIP Transfer KSA**. Our compliance team will review your application and contact you via phone or email within 48 hours.
                    </p>
                    <div className="space-y-4">
                        <Link href="/">
                            <Button className="w-full bg-primary hover:bg-black text-white font-black py-4 rounded-xl">
                                Return to Homepage
                            </Button>
                        </Link>
                        <p className="text-xs text-gray-400">Need immediate help? Email us at partners@taxiksa.com</p>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-gray-950 pt-40 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                        <Sparkles className="w-4 h-4" /> Join the Elite Network
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
                        Drive with <span className="text-primary">TaxiServiceKSA</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium">
                        Apply now to become a premium partner. We are looking for professional drivers with high-quality vehicles in Makkah, Madinah, Jeddah, and Riyadh.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-24 px-4 -mt-10">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16">
                    {/* Benefits Card */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                            <h2 className="text-2xl font-black text-gray-900 mb-8">Partner Benefits</h2>
                            <div className="space-y-6">
                                {[
                                    { icon: Briefcase, title: 'B2B/B2C Bookings', desc: 'Get access to corporate and private customer bookings.' },
                                    { icon: ShieldCheck, title: 'Weekly Payments', desc: 'Secure and punctual payment processing every week.' },
                                    { icon: MapPin, title: 'Smart Dispatch', desc: 'Receive bookings near your current location.' },
                                    { icon: FileCheck, title: 'Free Registration', desc: 'Zero upfront fees to join our driver network.' },
                                ].map((benefit) => (
                                    <div key={benefit.title} className="flex gap-4">
                                        <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                                            <benefit.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                                            <p className="text-sm text-gray-500">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-primary p-10 rounded-[2.5rem] text-white">
                            <h3 className="text-xl font-black mb-4">Support & Coordination</h3>
                            <p className="text-primary-foreground/80 text-sm mb-6 font-medium leading-relaxed">
                                Our dedicated partner coordinator is available 24/7 to assist you with onboarding and booking management. We'll contact you via email after reviewing your application.
                            </p>
                        </div>
                    </div>

                    {/* Registration Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-50">
                            <h2 className="text-3xl font-black text-gray-900 mb-8">Driver Registration Form</h2>
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

                                <div className="space-y-4 pt-4">
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
                                            <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">My vehicle is in excellent condition (2018 or newer)</span>
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
                                            <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">I can communicate in English/Arabic/Urdu</span>
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
                                            <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">I agree to the background check and code of conduct</span>
                                        </label>
                                    </div>
                                </div>

                                <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-black text-white font-black py-10 rounded-3xl text-xl shadow-2xl shadow-primary/20 transition-all group mt-8">
                                    {loading ? (
                                        <span className="flex items-center gap-2"><Loader2 className="animate-spin" /> Submitting...</span>
                                    ) : (
                                        <span className="flex items-center gap-2">Submit Application <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={3} /></span>
                                    )}
                                </Button>
                                <p className="text-center text-gray-400 text-xs mt-4">By submitting, you agree to our Partner Terms of Service.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
