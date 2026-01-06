"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
    Menu, X, Mail, Car, ChevronDown, Home, Briefcase,
    Info, Contact, MapPin, ShieldCheck,
    Star, Navigation, Globe, Clock, Sparkles, Building2,
    Camera, Users2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/', icon: Home },
        {
            name: 'Services',
            href: '/services/',
            icon: Briefcase,
            children: [
                { name: 'Umrah Transport', href: '/services/umrah-transport/', desc: 'Premium spiritual journey transfers' },
                { name: 'Airport Transfers', href: '/services/airport-transfers/', desc: '24/7 MED & JED pickups' },
                { name: 'Business & Executive', href: '/services/business/', desc: 'Luxury chauffeur service' },
                { name: 'Intercity Transfers', href: '/services/intercity/', desc: 'Across all KSA cities' },
            ]
        },
        {
            name: 'Locations',
            href: '#',
            icon: MapPin,
            mega: true,
            children: [
                {
                    category: 'Major Cities',
                    items: [
                        { name: 'Jeddah City', href: '/locations/jeddah/' },
                        { name: 'Riyadh City', href: '/locations/riyadh/' },
                        { name: 'Makkah Region', href: '/locations/makkah/' },
                        { name: 'Madinah Region', href: '/locations/madinah/' },
                        { name: 'Dammam City', href: '/locations/dammam/' },
                    ]
                },
                {
                    category: 'Tourism & Resorts',
                    items: [
                        { name: 'AlUla (Hegra)', href: '/locations/alula/' },
                        { name: 'NEOM / The Line', href: '/locations/neom/' },
                        { name: 'Yanbu / Red Sea', href: '/locations/yanbu/' },
                        { name: 'Taif (Al Hada)', href: '/locations/taif/' },
                        { name: 'Abha / Al Soudah', href: '/locations/abha/' },
                    ]
                },
                {
                    category: 'Eastern & Industrial',
                    items: [
                        { name: 'Al-Khobar', href: '/locations/al-khobar/' },
                        { name: 'Jubail Industrial', href: '/locations/jubail/' },
                        { name: 'Dhahran (Ithra)', href: '/locations/dhahran/ithra/' },
                        { name: 'Bahrain Causeway', href: '/routes/dammam-bahrain/' },
                    ]
                }
            ]
        },
        {
            name: 'Routes',
            href: '/routes/',
            icon: Navigation,
            mega: true,
            children: [
                {
                    category: 'From Jeddah',
                    items: [
                        { name: 'Jeddah to Makkah Transfer', href: '/routes/jeddah-makkah/' },
                        { name: 'Jeddah to Madinah Transfer', href: '/routes/jeddah-madinah/' },
                        { name: 'Jeddah to Yanbu Transfer', href: '/routes/jeddah-yanbu/' },
                        { name: 'Jeddah to Taif Transfer', href: '/routes/jeddah-taif/' },
                    ]
                },
                {
                    category: 'From Riyadh',
                    items: [
                        { name: 'Riyadh to Dammam Transfer', href: '/routes/riyadh-dammam/' },
                        { name: 'Riyadh Airport to KAFD', href: '/locations/riyadh/kafd/' },
                    ]
                },
                {
                    category: 'Pilgrimage Transfers',
                    items: [
                        { name: 'Makkah to Madinah VIP', href: '/routes/makkah-madinah/' },
                        { name: 'VIP Umrah Transfers', href: '/services/umrah-transport/' },
                        { name: 'Madinah Airport VIP Transfer', href: '/locations/madinah/madinah-airport/' },
                    ]
                }
            ]
        },
        {
            name: 'Partners',
            href: '/partners/',
            icon: Users2,
            children: [
                { name: 'Partner with Us', href: '/partners/', desc: 'Overview of partnerships' },
                { name: 'Driver Registration', href: '/partners/driver-registration/', desc: 'Join our elite driver network' },
                // { name: 'Agency Login', href: '/admin/', desc: 'Manage your B2B bookings' },
            ]
        },
        {
            name: 'Company',
            href: '#',
            icon: Info,
            children: [
                { name: 'Gallery', href: '/gallery/', icon: Camera },
                { name: 'About Us', href: '/about/', icon: Info },
                { name: 'Contact', href: '/contact/', icon: Contact },
            ]
        },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-[100]">
            {/* Top Info Bar - Refined */}
            <div className={`bg-gray-900 text-white overflow-hidden transition-all duration-300 ${scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between text-[10px] font-black tracking-widest uppercase">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                            <Mail className="w-3 h-3 text-primary" />
                            <span>info@taxiserviceksa.com</span>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 cursor-default">
                            <Clock className="w-3 h-3 text-primary" />
                            <span>Available 24/7 for Bookings</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-2 text-gray-400">
                            <ShieldCheck className="w-3 h-3 text-emerald-500" />
                            <span>Official Travel Partner</span>
                        </div>
                        <div className="flex items-center gap-2 text-primary">
                            <Globe className="w-3 h-3" />
                            <span>EN / UR / AR</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header - Always White Background for Consistency */}
            <header className={`py-4 transition-all duration-300 ${scrolled ? 'bg-white shadow-xl shadow-gray-900/5' : 'bg-white border-b border-gray-100'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between h-16 items-center gap-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group shrink-0">
                            <div className="relative">
                                <div className="bg-gradient-to-br from-primary via-blue-600 to-indigo-700 p-2 rounded-xl group-hover:rotate-[360deg] transition-all duration-700 shadow-lg shadow-primary/20">
                                    <Car className="w-6 h-6 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 bg-amber-400 p-0.5 rounded-full border-2 border-white">
                                    <Sparkles className="w-2 h-2 text-white" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tight leading-none text-gray-900">
                                    VIPTransfer<span className="text-primary">KSA</span>
                                </span>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Premium Chauffeur Service</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden xl:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative group py-2"
                                    onMouseEnter={() => setActiveDropdown(link.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${pathname.startsWith(link.href) && link.href !== '#'
                                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                                            }`}
                                    >
                                        {link.name}
                                        {link.children && <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                                    </Link>

                                    {/* Dropdown Logic */}
                                    {link.children && (
                                        <div className={`absolute top-full left-0 mt-2 origin-top-left transition-all duration-300 ${activeDropdown === link.name ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
                                            {/* @ts-ignore */}
                                            {link.mega ? (
                                                <div className="p-8 bg-white rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 w-[700px] grid grid-cols-3 gap-8">
                                                    {link.children.map((section: any) => (
                                                        <div key={section.category}>
                                                            <div className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] mb-6 flex items-center gap-2">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                                                {section.category}
                                                            </div>
                                                            <div className="space-y-3">
                                                                {section.items.map((item: any) => (
                                                                    <Link
                                                                        key={item.name}
                                                                        href={item.href}
                                                                        className="block text-sm font-bold text-gray-600 hover:text-primary hover:translate-x-1 transition-all"
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="p-3 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 w-64 space-y-1">
                                                    {link.children.map((child: any) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            className="flex flex-col p-3 rounded-2xl hover:bg-gray-50 transition-all group/item border border-transparent hover:border-gray-100"
                                                        >
                                                            <div className="text-sm font-bold text-gray-900 group-hover/item:text-primary transition-colors">{child.name}</div>
                                                            {child.desc && <div className="text-[11px] text-gray-400 mt-0.5 font-medium">{child.desc}</div>}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div className="ml-6 flex items-center gap-3">
                                <Link
                                    href="/booking/"
                                    className="bg-primary hover:bg-black text-white font-black px-8 py-4 rounded-2xl text-base shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 group flex items-center justify-center"
                                >
                                    Book Private Transfer
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                                </Link>
                            </div>
                        </nav>

                        {/* Mobile Toggle */}
                        <div className="xl:hidden flex items-center gap-3">
                            <Link
                                href="/booking/"
                                className="bg-primary text-white font-black rounded-xl px-4 py-2 text-sm shadow-lg shadow-primary/20 hover:bg-black transition-colors"
                            >
                                Book Now
                            </Link>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-3 bg-gray-50 rounded-xl text-gray-900 focus:ring-2 ring-primary/20"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Side Drawer */}
            <div className={`xl:hidden fixed inset-0 bg-gray-950/20 backdrop-blur-sm transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsOpen(false)} />

            <aside className={`xl:hidden fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white z-[110] shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="p-8 border-b flex justify-between items-center bg-gray-50/50">
                        <span className="text-xl font-black tracking-tight">VIPTransfer<span className="text-primary">KSA</span></span>
                        <button onClick={() => setIsOpen(false)} className="p-2 bg-white rounded-lg shadow-sm"><X className="w-5 h-5" /></button>
                    </div>

                    <div className="flex-1 overflow-y-auto py-8 px-6">
                        <div className="space-y-6">
                            {navLinks.map((link) => (
                                <div key={link.name} className="space-y-4">
                                    <div className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">{link.name}</div>
                                    <div className="grid grid-cols-1 gap-2">
                                        {link.children ? (
                                            <>
                                                {/* @ts-ignore */}
                                                {link.mega ? (
                                                    // Flat list for mega menu on mobile
                                                    link.children.map((section: any) => (
                                                        <div key={section.category} className="space-y-2 mt-2">
                                                            <div className="text-[10px] font-bold text-primary px-3 uppercase">{section.category}</div>
                                                            {section.items.map((item: any) => (
                                                                <Link
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className="flex items-center gap-3 p-3 text-sm font-bold text-gray-600 rounded-xl hover:bg-gray-50"
                                                                >
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                                                                    {item.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    ))
                                                ) : (
                                                    link.children.map((child: any) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            onClick={() => setIsOpen(false)}
                                                            className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 font-bold text-gray-900"
                                                        >
                                                            <div className="w-2 h-2 rounded-full bg-primary" />
                                                            {child.name}
                                                        </Link>
                                                    ))
                                                )}
                                            </>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 font-bold text-gray-900"
                                            >
                                                {/* @ts-ignore */}
                                                <link.icon className="w-5 h-5 text-primary" />
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 bg-gray-50 border-t space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-xl"><Mail className="w-5 h-5 text-primary" /></div>
                            <div>
                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">VIP Reservations</div>
                                <div className="text-sm font-bold text-gray-900">info@taxiserviceksa.com</div>
                            </div>
                        </div>
                        <Link href="/booking/" onClick={() => setIsOpen(false)} className="block w-full">
                            <div className="w-full bg-primary hover:bg-black text-white font-black h-16 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center transition-colors">
                                Book Online Now
                            </div>
                        </Link>
                    </div>
                </div>
            </aside>
        </div>
    );
}

function ArrowRight({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}
