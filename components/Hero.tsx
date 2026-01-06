"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star, Shield, Sparkles, Award } from 'lucide-react';
import HeroBookingWidget from './HeroBookingWidget';
import { useState, useEffect, ReactNode } from 'react';

interface HeroProps {
    images?: string[];
    title?: ReactNode;
    subtitle?: string;
    location?: string;
    h1Text?: string; // Custom H1 text for SEO
    bookingFormTitle?: string; // Custom title for the booking widget
    children?: ReactNode;
}

export default function Hero(props: HeroProps) {
    const { images, title, subtitle, location, h1Text, bookingFormTitle } = props;

    // Use custom images if provided, otherwise use default homepage slides
    const slides = images || [
        '/hero-slide-1.webp', // Kaaba Makkah
        '/hero-slide-2.webp', // Madinah Mosque
        '/hero-slide-3.webp', // Luxury Car
        '/hero-slide-4.webp', // Jeddah
        '/hero-slide-5.webp', // Riyadh
    ];

    // Alt text for each slide (SEO optimized with keywords)
    const slideAltTexts = images
        ? images.map((img, idx) => {
            // Extract meaningful alt text from image path with SEO keywords
            const imgLower = img.toLowerCase();
            if (imgLower.includes('makkah') || imgLower.includes('kaaba')) {
                return 'Makkah Kaaba at night - Premium Umrah taxi service from Jeddah Airport to Makkah, Saudi Arabia';
            }
            if (imgLower.includes('madinah') || imgLower.includes('mosque') || imgLower.includes('prophet')) {
                return 'Prophet\'s Mosque in Madinah - Professional Ziyarat tour service and Umrah taxi from Makkah to Madinah';
            }
            if (imgLower.includes('jeddah') || imgLower.includes('corniche') || imgLower.includes('airport')) {
                return 'Jeddah Corniche sunset view - Airport transfer service from King Abdulaziz International Airport to Makkah and Madinah';
            }
            if (imgLower.includes('taif') || imgLower.includes('mountain') || imgLower.includes('rose')) {
                return 'Taif mountains and rose gardens - Luxury intercity taxi service from Jeddah to Taif, Saudi Arabia';
            }
            if (imgLower.includes('alula') || imgLower.includes('hegra') || imgLower.includes('tomb')) {
                return 'AlUla Hegra tombs UNESCO World Heritage Site - Heritage tour and luxury transportation service in Saudi Arabia';
            }
            return `Premium chauffeur and taxi service in Saudi Arabia - Professional airport transfer and luxury transportation`;
        })
        : [
            'Makkah Kaaba at night - Premium Umrah taxi service from Jeddah Airport to Makkah, Saudi Arabia',
            'Prophet\'s Mosque in Madinah - Professional Ziyarat tour service and Umrah taxi from Makkah to Madinah',
            'Luxury GMC Yukon chauffeur vehicle - VIP transportation and premium taxi service in Saudi Arabia',
            'Jeddah city view - Airport transfer service from King Abdulaziz International Airport to Makkah and Madinah',
            'Riyadh cityscape - Premium intercity taxi and chauffeur service from Jeddah to Riyadh, Saudi Arabia'
        ];





    return (
        <section className="relative bg-white text-gray-900 min-h-[800px] flex flex-col justify-center items-center py-20" aria-label="Hero section">
            {/* Background Image - Static */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src={slides[0]}
                    alt={slideAltTexts[0] || "Premium taxi service in Saudi Arabia"}
                    fill
                    priority
                    quality={75}
                    className="object-cover w-full h-full"
                    sizes="100vw"
                />
                {/* Blue Overlay matching the reference */}
                <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" aria-hidden="true" />
                <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center space-y-8">

                {/* Title & SEO H1 */}
                <div className="space-y-4 animate-fade-in-up">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-md">
                        {h1Text || title || "BEST Online Taxi Service in Saudi Arabia"}
                    </h1>
                    {subtitle && (
                        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow-sm">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Trust Signals (Icons Row) */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 text-white/90 py-6 animate-fade-in-up delay-100">
                    <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                        <span className="text-sm sm:text-base font-semibold">Professional Drivers</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                        <span className="text-sm sm:text-base font-semibold">25k+ Happy Pilgrims</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                        <span className="text-sm sm:text-base font-semibold">Secure Online Payments</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                        <span className="text-sm sm:text-base font-semibold">Fixed Pricing</span>
                    </div>
                </div>

                {/* Booking Widget Container - Lifts up into the hero content */}
                <div className="w-full animate-fade-in-up delay-200 mt-4">
                    <HeroBookingWidget title={bookingFormTitle || (h1Text ? `Book ${h1Text}` : undefined)} />
                </div>
            </div>


        </section>
    );
}
