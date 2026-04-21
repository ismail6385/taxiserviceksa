import Link from 'next/link';
import {
    Facebook, Instagram, Twitter, Linkedin, Car, Youtube, Share2,
    MapPin, Mail, Clock, ShieldCheck, Globe
} from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white pt-32 pb-16 border-t border-gray-900 relative overflow-hidden">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Grid - Strategic Consolidation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

                    {/* Column 1: Brand & Contact */}
                    <div className="space-y-10">
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            <div className="bg-primary p-2.5 rounded-xl shadow-lg shadow-primary/20">
                                <Car className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-white tracking-tight leading-none uppercase">
                                    Taxi <span className="text-primary">KSA</span>
                                </span>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2 block">Premium Chauffeur Service</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm font-medium">
                            The Kingdom's leading platform for premium intercity transfers and Umrah logistics. Reliable, safe, and dignified transport since 2018.
                        </p>

                        <div className="space-y-6">
                            <a href="https://wa.me/966569487569" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-emerald-500/10 group-hover:bg-emerald-500 transition-all">
                                    <WhatsAppIcon className="w-6 h-6 text-emerald-500 fill-emerald-500 group-hover:text-white group-hover:fill-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-black text-gray-500 tracking-widest">WhatsApp 24/7</span>
                                    <span className="text-base font-bold text-gray-200">+966 56 948 7569</span>
                                </div>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[
                                { title: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/people/Taxi-Service-KSA/61573850597962/' },
                                { title: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/taxi-service-ksa/' },
                                { title: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/channel/UCeP44oxBUKUG5X-UhYmPMNw' },
                            ].map((social) => (
                                <a
                                    key={social.title}
                                    href={social.href}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-primary text-gray-400 hover:text-white transition-all"
                                    aria-label={social.title}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Destinations */}
                    <div>
                        <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            Destinations
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Makkah VIP', href: '/locations/makkah/' },
                                { name: 'Madinah VIP', href: '/locations/madinah/' },
                                { name: 'Jeddah Airport', href: '/locations/jeddah/' },
                                { name: 'Riyadh Business', href: '/locations/riyadh/' },
                                { name: 'AlUla Tourism', href: '/locations/alula/' },
                                { name: 'Dammam / Khobar', href: '/locations/dammam/' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm font-bold flex items-center gap-2 group">
                                        <div className="w-1.5 h-1.5 bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></div>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Routes */}
                    <div>
                        <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            Popular Routes
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Jeddah to Makkah', href: '/routes/jeddah-makkah/' },
                                { name: 'Makkah to Madinah', href: '/routes/makkah-madinah/' },
                                { name: 'Riyadh to Dubai', href: '/routes/riyadh-dubai/' },
                                { name: 'Dammam to Bahrain', href: '/routes/dammam-bahrain/' },
                                { name: 'All Intercity Routes', href: '/routes/' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm font-bold flex items-center gap-2 group">
                                        <div className="w-1.5 h-1.5 bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></div>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Services */}
                    <div>
                        <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            Our Services
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Airport Transfers', href: '/services/airport-transfers/' },
                                { name: 'Umrah Packages', href: '/services/ziyarat-tours/' },
                                { name: 'Corporate Travel', href: '/services/business-executive-transport/' },
                                { name: 'Our Vehicle Fleet', href: '/fleet/' },
                                { name: 'Full Service Rates', href: '/pricing/' },
                                { name: 'Travel Guides', href: '/guides/' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm font-bold flex items-center gap-2 group">
                                        <div className="w-1.5 h-1.5 bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></div>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer WhatsApp Banner - High Conversion */}
                <div className="mb-24 bg-gray-900 border border-gray-800 rounded-[2.5rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('/makkah-pattern.png')] opacity-5 pointer-events-none"></div>
                    <div className="relative z-10 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 italic">Ready to Book Your VIP Ride?</h2>
                        <p className="text-gray-400 text-lg max-w-xl">Get an instant quote and booking confirmation via WhatsApp in less than 2 minutes.</p>
                    </div>
                    <a 
                        href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20get%20a%20VIP%20taxi%20quote." 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 w-full lg:w-auto bg-primary text-white font-black px-12 py-7 rounded-2xl text-xl shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-4"
                    >
                        <WhatsAppIcon className="w-8 h-8 fill-current" />
                        Book via WhatsApp
                    </a>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-xs text-gray-600 font-bold uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Taxi KSA. All Rights Reserved.
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        <Link href="/privacy-policy/" className="text-[10px] text-gray-500 hover:text-white transition-colors font-black uppercase tracking-widest">Privacy</Link>
                        <Link href="/terms-conditions/" className="text-[10px] text-gray-500 hover:text-white transition-colors font-black uppercase tracking-widest">Terms</Link>
                        <Link href="/sitemap.xml" className="text-[10px] text-gray-500 hover:text-white transition-colors font-black uppercase tracking-widest">Sitemap</Link>
                        <Link href="/track-booking/" className="text-[10px] text-gray-500 hover:text-white transition-colors font-black uppercase tracking-widest">Track Booking</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
