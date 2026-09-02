
"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Loader2, CheckCircle, Clock, ShieldCheck, Star, ArrowRight, Copy, Check, Car, Globe, AlertTriangle } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import JsonLdBreadcrumb from '@/components/seo/JsonLdBreadcrumb';

const formSchema = z.object({
    name: z.string().min(2, { message: "Name is required." }),
    email: z.string().email({ message: "Valid email required." }),
    phone: z.string().min(8, { message: "Valid phone number required." }),
    subject: z.string().min(1, { message: "Please select a topic." }),
    message: z.string().min(10, { message: "Please add a few more details." }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/send-contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    subject: data.subject,
                    message: data.message,
                }),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setIsSuccess(true);
            reset();
            setTimeout(() => setIsSuccess(false), 8000);
        } catch (err) {
            setError('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCopy = (text: string, type: 'phone' | 'email') => {
        navigator.clipboard.writeText(text);
        if (type === 'phone') {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        } else {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        }
    };

    const faqs = [
        {
            q: "Do I need to pay anything in advance?",
            a: "Absolutely not. You pay the driver directly at the end of your trip. No credit card required to book."
        },
        {
            q: "Are the prices fixed or meter-based?",
            a: "All our prices are 100% fixed with no hidden fees, surges, or tolls added. What we quote is what you pay."
        },
        {
            q: "What happens if my flight is delayed?",
            a: "We track your flight in real-time. Your VIP driver will wait for you at no extra charge if your flight lands late."
        },
        {
            q: "Can I cancel my booking if plans change?",
            a: "Yes, we offer free and flexible cancellations. Just message us on WhatsApp to let us know."
        }
    ];

    const faqSchemaCode = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    });

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <JsonLdBreadcrumb 
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Contact', item: '/contact' }
                ]}
            />
            {/* Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchemaCode }} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "mainEntity": {
                            "@type": "LocalBusiness",
                            "name": "Taxi Service KSA",
                            "image": "https://taxiserviceksa.com/logo.png",
                            "telephone": "+966569487569",
                            "email": "taxiserviceksa9988@gmail.com",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Jeddah",
                                "addressCountry": "SA"
                            },
                        }
                    })
                }}
            />

            {/* Hero Section */}
            <div className="bg-[#0b1b36] text-white pt-20 pb-20 px-4 relative">
                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-yellow-400 text-sm font-bold mb-6 border border-white/20">
                        <ShieldCheck className="w-4 h-4" />
                        Licensed Ministry of Transport Partner
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
                        Get in Touch
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
                        Questions, feedback, or a booking request — our team replies fast, 24/7.
                    </p>

                    {/* Clear CTA Hierarchy */}
                    <div className="flex flex-col items-center justify-center gap-4">
                        <a
                            href="https://wa.me/966569487569?text=Hello%2C%20I%20have%20a%20question."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-5 px-10 rounded-2xl transition-all shadow-2xl shadow-[#25D366]/20 hover:-translate-y-1 text-lg"
                        >
                            <WhatsAppIcon className="w-7 h-7 fill-current" />
                            Message Us on WhatsApp
                        </a>
                        <p className="text-gray-400 text-sm flex items-center gap-1 mt-2">
                            Reply time: <strong className="text-white">&lt; 2 minutes</strong>
                            <span className="mx-2">•</span>
                            <a href="tel:+966569487569" className="hover:text-white underline underline-offset-4 transition-colors">Or call +966 56 948 7569</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full -mt-8 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Contact Info & Trust Signals (Left Sidebar) */}
                    <div className="lg:col-span-4 space-y-6">
                        
                        {/* Response Time Trust Card */}
                        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 shadow-sm">
                            <div className="flex gap-3">
                                <Clock className="w-6 h-6 text-emerald-600 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-emerald-900 text-sm">We Reply Fast</h3>
                                    <p className="text-emerald-800 text-xs mt-1">Our support team is online 24/7 and typically responds to WhatsApp messages and emails within the hour.</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Details Blocks with Copy Function */}
                        <div className="bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100/50">
                            <h2 className="text-xl font-black mb-5 text-[#0b1b36]">Quick Contact</h2>
                            
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl group cursor-pointer" onClick={() => handleCopy('+966 56 948 7569', 'phone')}>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-black/5 p-2 rounded-lg"><Phone className="w-5 h-5 text-gray-700" /></div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium">Direct Call / WhatsApp</p>
                                            <p className="text-sm font-bold text-gray-900">+966 56 948 7569</p>
                                        </div>
                                    </div>
                                    {copiedPhone ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />}
                                </div>

                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl group cursor-pointer" onClick={() => handleCopy('taxiserviceksa9988@gmail.com', 'email')}>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-black/5 p-2 rounded-lg"><Mail className="w-5 h-5 text-gray-700" /></div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium">Email Dispatch</p>
                                            <p className="text-sm font-bold text-gray-900">taxiserviceksa9988@gmail.com</p>
                                        </div>
                                    </div>
                                    {copiedEmail ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />}
                                </div>
                            </div>

                            <div className="mt-6 pt-5 border-t border-gray-100">
                                <p className="text-xs text-gray-500 flex items-center gap-2 mb-1">
                                    <Globe className="w-4 h-4 text-[#d4af37]" />
                                    Multilingual Support Available
                                </p>
                                <p className="text-sm font-semibold text-gray-700">We speak English, Urdu, &amp; Arabic <span className="text-xs text-gray-400 font-normal">(نتحدث العربية)</span></p>
                            </div>
                        </div>

                        {/* Testimonial Block */}
                        <div className="bg-[#0b1b36] rounded-[2rem] p-6 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute -right-4 -bottom-4 opacity-10">
                                <Car className="w-32 h-32" />
                            </div>
                            <div className="flex items-center gap-1 mb-3 relative z-10">
                                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />)}
                            </div>
                            <p className="text-sm text-gray-300 italic mb-4 relative z-10">&quot;The driver was waiting at Jeddah terminal with my name. Perfectly clean GMC. Will only use them for my next Umrah trip.&quot;</p>
                            <p className="text-sm font-bold text-white relative z-10">— Rashid M., UK</p>
                        </div>
                    </div>

                    {/* Shortened Conversion Form (Right Area) */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl border border-gray-100 relative">
                            <h2 className="text-2xl font-black text-[#0b1b36] mb-2">Send Us a Message</h2>
                            <p className="text-gray-500 mb-6 text-sm">For quotes and route bookings, WhatsApp is fastest. Use this form for general inquiries, feedback, or corporate requests.</p>

                            {isSuccess ? (
                                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600 text-sm mb-6">
                                        Thanks for reaching out. Our team will review your message and reply by email or WhatsApp shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label htmlFor="name" className="text-xs font-bold text-gray-700 uppercase ml-1">Full Name</label>
                                            <Input
                                                id="name"
                                                autoComplete="name"
                                                placeholder="e.g. John Doe"
                                                {...register("name")}
                                                className={`bg-gray-50 border-gray-200 h-14 rounded-xl focus:ring-[#0b1b36] ${errors.name ? 'border-red-500' : ''}`}
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label htmlFor="phone" className="text-xs font-bold text-gray-700 uppercase ml-1">Phone / WhatsApp Number</label>
                                            <Input
                                                id="phone"
                                                autoComplete="tel"
                                                placeholder="+966 5X XXX XXXX"
                                                {...register("phone")}
                                                className={`bg-gray-50 border-gray-200 h-14 rounded-xl focus:ring-[#0b1b36] ${errors.phone ? 'border-red-500' : ''}`}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase ml-1">Email Address</label>
                                            <Input
                                                id="email"
                                                type="email"
                                                autoComplete="email"
                                                placeholder="e.g. john@example.com"
                                                {...register("email")}
                                                className={`bg-gray-50 border-gray-200 h-14 rounded-xl focus:ring-[#0b1b36] ${errors.email ? 'border-red-500' : ''}`}
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-700 uppercase ml-1">Subject</label>
                                            <Select onValueChange={(val) => setValue("subject", val, { shouldValidate: true })}>
                                                <SelectTrigger className={`bg-gray-50 border-gray-200 h-14 rounded-xl focus:ring-[#0b1b36] ${errors.subject ? 'border-red-500' : ''}`}>
                                                    <SelectValue placeholder="What's this about?" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                                                    <SelectItem value="Booking Request">Booking Request</SelectItem>
                                                    <SelectItem value="Existing Booking / Support">Existing Booking / Support</SelectItem>
                                                    <SelectItem value="Feedback or Complaint">Feedback or Complaint</SelectItem>
                                                    <SelectItem value="Corporate / Partnership">Corporate / Partnership</SelectItem>
                                                    <SelectItem value="Other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <input type="hidden" {...register("subject")} />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="message" className="text-xs font-bold text-gray-700 uppercase ml-1">Message</label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us how we can help..."
                                            {...register("message")}
                                            className={`bg-gray-50 border-gray-200 min-h-[100px] rounded-xl focus:ring-[#0b1b36] resize-none text-sm ${errors.message ? 'border-red-500' : ''}`}
                                        />
                                    </div>

                                    {error && (
                                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium flex items-center gap-2">
                                            <AlertTriangle className="w-4 h-4" />{error}
                                        </div>
                                    )}

                                    <div className="pt-2">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full h-14 bg-[#d4af37] hover:bg-[#b49020] text-[#0b1b36] font-black text-lg rounded-xl shadow-lg transition-transform hover:-translate-y-1 uppercase tracking-wide"
                                        >
                                            {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : 'Send Message'}
                                        </Button>
                                        <p className="text-center text-xs text-gray-400 mt-3 font-medium flex items-center justify-center gap-1">
                                            <ShieldCheck className="w-3.5 h-3.5" /> We typically reply within the hour.
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Actionable Map Hubs Section */}
            <div className="w-full bg-[#0b1b36] relative mt-16 pb-20 pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mb-10 relative z-10">
                    <h2 className="text-3xl font-black mb-2">Our Operating Coverage</h2>
                    <p className="text-gray-400 text-sm max-w-lg mx-auto">Tracked fleet active in Jeddah, Makkah, and Madinah ensuring sub-10 minute ETA at King Abdulaziz Airport.</p>
                </div>
                
                <div className="absolute inset-0 top-32 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 relative">
                        {/* Interactive overlay card */}
                        <div className="absolute top-4 left-4 right-4 md:right-auto md:w-80 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl z-10 border border-gray-200">
                            <h3 className="font-bold text-[#0b1b36] text-lg mb-1">JED Airport Standby</h3>
                            <p className="text-sm text-gray-600 mb-4">Our drivers are permanently stationed at terminals T1, North, and South.</p>
                            <a href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full gap-2 bg-[#0b1b36] text-white py-2 rounded-xl text-sm font-bold hover:bg-[#d4af37] hover:text-[#0b1b36] transition-colors">
                                Book JED Pickup Now <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                        {/* Map iframe */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1872149.3789025405!2d38.28189574384113!3d23.682618952870404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118ab!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, filter: 'grayscale(0.4) contrast(1.2)' }} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Coverage Map"
                        ></iframe>
                    </div>
                </div>
                <div className="h-[200px] md:h-[300px]"></div> {/* Spacer for absolute map */}
            </div>

            {/* Conversion-Focused FAQs */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 w-full mt-24 md:mt-12 rounded-[3rem] shadow-inner mb-16">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0b1b36] mb-3">Booking FAQ</h2>
                    <p className="text-gray-500 text-sm">Everything you need to know before securing your ride.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/60 hover:border-[#d4af37] transition-colors group">
                            <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-[#d4af37] transition-colors">{faq.q}</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
