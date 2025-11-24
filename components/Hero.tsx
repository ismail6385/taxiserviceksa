import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, CheckCircle } from 'lucide-react';
import BookingForm from './BookingForm';

export default function Hero() {
    return (
        <div className="relative bg-black text-white overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Image with Parallax-like effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop')] bg-cover bg-center opacity-50 scale-105 animate-slow-zoom"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in-up">
                            <div className="flex text-yellow-400">
                                <Star className="w-3 h-3 fill-yellow-400" />
                                <Star className="w-3 h-3 fill-yellow-400" />
                                <Star className="w-3 h-3 fill-yellow-400" />
                                <Star className="w-3 h-3 fill-yellow-400" />
                                <Star className="w-3 h-3 fill-yellow-400" />
                            </div>
                            <span className="text-gray-300 text-xs font-medium tracking-wide uppercase">#1 Luxury Chauffeur in KSA</span>
                        </div>

                        <div className="space-y-4 animate-fade-in-up delay-100">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                                <span className="text-white">Experience</span> <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary bg-300% animate-gradient">Royal Comfort</span>
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl border-l-4 border-primary pl-6">
                                Premium chauffeur services for Airport Transfers, Umrah Pilgrimage, and Intercity Travel.
                                Reliable, safe, and luxurious transportation across Saudi Arabia.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
                            <Link href="/booking" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto bg-primary text-black hover:bg-yellow-400 font-bold text-lg px-8 py-7 rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all hover:scale-105 active:scale-95"
                                >
                                    Book Your Ride
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <a href="https://wa.me/03176243861" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 font-bold text-lg px-8 py-7 rounded-xl backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
                                >
                                    WhatsApp Us
                                </Button>
                            </a>
                        </div>

                        <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/10 pt-8 animate-fade-in-up delay-300">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-primary mb-1">
                                    <Shield className="w-5 h-5" />
                                    <span className="font-bold text-2xl text-white">100%</span>
                                </div>
                                <p className="text-gray-400 text-sm">Safe & Secure</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-primary mb-1">
                                    <CheckCircle className="w-5 h-5" />
                                    <span className="font-bold text-2xl text-white">24/7</span>
                                </div>
                                <p className="text-gray-400 text-sm">Customer Support</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-primary mb-1">
                                    <Star className="w-5 h-5" />
                                    <span className="font-bold text-2xl text-white">500+</span>
                                </div>
                                <p className="text-gray-400 text-sm">Happy Clients</p>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="lg:col-span-5 w-full mt-8 lg:mt-0 animate-fade-in-left delay-300">
                        <BookingForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
