"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Validation Schema
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(8, { message: "Please enter a valid phone number." }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
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
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setIsSuccess(true);
            reset();
            // Reset success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (err) {
            setError('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <div className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Have a question about your booking, a partnership inquiry, or need a custom quote? We are here to help 24/7.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Contact Information Side */}
                        <div className="bg-gray-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">
                            {/* Abstract decorative circles */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-3 rounded-xl mt-1">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-medium mb-1">Email Us</p>
                                            <a href="mailto:info@taxiserviceksa.com" className="text-xl font-bold hover:text-primary transition-colors">
                                                info@taxiserviceksa.com
                                            </a>
                                            <p className="text-xs text-gray-500 mt-1">We reply within 30 mins</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-3 rounded-xl mt-1">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-medium mb-1">WhatsApp Support</p>
                                            <a href="https://wa.me/13073464572" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-primary transition-colors">
                                                +1 (307) 346-4572
                                            </a>
                                            <p className="text-xs text-gray-500 mt-1">Available 24/7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Side */}
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                            <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you shortly.</p>

                            {isSuccess ? (
                                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600">
                                        Thank you for contacting us. We have received your message and will respond to <span className="font-semibold text-gray-900">info@taxiserviceksa.com</span> shortly.
                                    </p>
                                    <Button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-6 bg-white border-2 border-green-100 text-green-700 hover:bg-green-50 font-bold"
                                    >
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                            <Input
                                                id="name"
                                                placeholder="John Doe"
                                                {...register("name")}
                                                className={`bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                                            />
                                            {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name.message}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                            <Input
                                                id="phone"
                                                placeholder="+966 5X XXX XXXX"
                                                {...register("phone")}
                                                className={`bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
                                            />
                                            {errors.phone && <p className="text-red-500 text-xs ml-1">{errors.phone.message}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            {...register("email")}
                                            className={`bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                                        />
                                        {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                                        <Input
                                            id="subject"
                                            placeholder="Booking Inquiry / Partnership / Other"
                                            {...register("subject")}
                                            className={`bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary ${errors.subject ? 'border-red-500 focus:ring-red-500' : ''}`}
                                        />
                                        {errors.subject && <p className="text-red-500 text-xs ml-1">{errors.subject.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">Message</label>
                                        <Textarea
                                            id="message"
                                            placeholder="How can we help you?"
                                            {...register("message")}
                                            className={`bg-gray-50 border-gray-200 min-h-[150px] rounded-xl focus:ring-primary resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                                        />
                                        {errors.message && <p className="text-red-500 text-xs ml-1">{errors.message.message}</p>}
                                    </div>

                                    {error && (
                                        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium">
                                            {error}
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-14 bg-primary hover:bg-black text-white font-black text-lg rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="ml-2 h-5 w-5" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
