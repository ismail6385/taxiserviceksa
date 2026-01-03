"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Phone, Mail, Car, ChevronDown, Home, Briefcase, Info, Contact, MapPin, HelpCircle, Camera, ShieldCheck, Star, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isFleetOpen, setIsFleetOpen] = useState(false);
    const [isLocationsOpen, setIsLocationsOpen] = useState(false);
    const [isRoutesOpen, setIsRoutesOpen] = useState(false);
    const [isGuidesOpen, setIsGuidesOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false); // Added missing state
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/', icon: Home },

        {
            name: 'Services',
            href: '/services/',
            icon: Briefcase,
            children: [
                { name: 'Umrah Transport', href: '/services/umrah-transport/', isHub: true },
                { name: 'Airport Transfers', href: '/services/airport-transfers/', isHub: true },
                { name: 'Corporate Travel', href: '/services/corporate-travel/', isHub: true },
                { name: 'Heritage Tours', href: '/services/heritage-tours/', isHub: true },
            ]
        },
        {
            name: 'Fleet',
            href: '/fleet/',
            icon: Car,
            children: [
                { name: 'GMC Yukon', href: '/fleet/gmc-yukon/' },
                { name: 'Toyota Camry', href: '/fleet/toyota-camry/' },
                { name: 'Hyundai Staria', href: '/fleet/hyundai-staria/' },
                { name: 'Toyota Hiace', href: '/fleet/toyota-hiace/' },
                { name: 'Toyota Coaster', href: '/fleet/toyota-coaster/' },
                { name: 'Hyundai Starex', href: '/fleet/hyundai-starex/' },
            ]
        },
        {
            name: 'Locations',
            href: '/locations/',
            icon: MapPin,
            children: [
                { name: 'Makkah (Umrah Hub)', href: '/locations/makkah/', isHub: true },
                { name: 'Madinah (Ziyarat Hub)', href: '/locations/madinah/', isHub: true },
                { name: 'Jeddah (Airport)', href: '/locations/jeddah/' },
                { name: 'Riyadh (Capital)', href: '/locations/riyadh/' },
                { name: 'Taif (City Tour)', href: '/locations/taif/' },
                { name: 'AlUla (Heritage)', href: '/locations/alula/' },
                { name: 'Yanbu (Port)', href: '/locations/yanbu/' },
                { name: 'Khayber Fort', href: '/locations/khayber-fort/' },
            ]
        },
        {
            name: 'Routes',
            href: '/routes/',
            icon: Navigation,
            children: [
                { name: 'Jeddah → Makkah (80km)', href: '/routes/jeddah-makkah/', isHub: true },
                { name: 'Makkah → Madinah (450km)', href: '/routes/makkah-madinah/', isHub: true },
                { name: 'Madinah → Jeddah (450km)', href: '/routes/madinah-jeddah/', isHub: true },
                { name: 'Riyadh → Jeddah (950km)', href: '/routes/riyadh-jeddah/', isHub: true },
                { name: 'Jeddah → Taif (170km)', href: '/routes/jeddah-taif/', isHub: true },
                { name: 'Jeddah → Yanbu (330km)', href: '/routes/jeddah-yanbu/', isHub: true },
                { name: 'Jeddah → Al Ula (700km)', href: '/routes/jeddah-alula/', isHub: true },
            ]
        },
        {
            name: 'Guides',
            href: '/guides/',
            icon: Star,
            children: [
                { name: 'Jeddah Airport Guide', href: '/guides/jeddah-airport-guide/', isHub: true },
                { name: 'Makkah Umrah Guide', href: '/guides/makkah-umrah-guide/', isHub: true },
                { name: 'Umrah Tawaf Guide', href: '/guides/umrah-tawaf-guide/' },
                { name: 'Meeqat Locations', href: '/guides/meeqat-locations/' },
                { name: 'Riyadh Business Guide', href: '/guides/riyadh-business-guide/', isHub: true },
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

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 shadow-sm">
            {/* Main Navbar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex justify-between h-20 items-center gap-8">
                    <div className="flex-shrink-0 flex items-center shrink-0">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-gradient-to-br from-primary via-blue-500 to-primary p-2 rounded-lg group-hover:scale-110 transition-transform shadow-lg shadow-primary/30">
                                <Car className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-gray-900 leading-none">TaxiService<span className="font-black text-primary">KSA</span></span>
                                <div className="flex items-center gap-1 mt-0.5">
                                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Verified Official</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.children ? (
                                    <Link
                                        href={link.href}
                                        className={`flex items-center px-2 py-2 rounded-md text-sm font-medium transition-all ${pathname.startsWith(link.href) ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary/10 hover:text-primary'}
                                            }`}
                                    >
                                        <link.icon className="w-4 h-4 mr-2" />
                                        {link.name}
                                        <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" />
                                    </Link>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`flex items-center px-2 py-2 rounded-md text-sm font-medium transition-all ${isActive(link.href) ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary/10 hover:text-primary'}
                                            }`}
                                    >
                                        <link.icon className="w-4 h-4 mr-2" />
                                        {link.name}
                                    </Link>
                                )}

                                {/* Dropdown */}
                                {link.children && (
                                    <div className="absolute left-0 mt-2 w-[550px] rounded-xl shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left p-2 ring-1 ring-black ring-opacity-5">
                                        <div className="grid grid-cols-2 gap-2 p-2" role="menu">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className={`block px-4 py-3 text-sm rounded-lg transition-all group/item relative overflow-hidden ${
                                                        // @ts-ignore
                                                        child.isHub
                                                            ? 'bg-primary/5 text-gray-900 font-bold hover:bg-primary hover:text-white ring-1 ring-primary/10'
                                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent hover:border-gray-100'
                                                        }`}
                                                    role="menuitem"
                                                >
                                                    <div className="flex items-center gap-2 relative z-10">
                                                        {/* @ts-ignore */}
                                                        {child.isHub ? (
                                                            <Star className="w-4 h-4 text-orange-500 fill-orange-500 flex-shrink-0" />
                                                        ) : (
                                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/item:bg-primary transition-colors flex-shrink-0" />
                                                        )}
                                                        <span className="truncate">{child.name}</span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link href="/booking/">
                            <Button className="bg-primary text-white hover:bg-blue-600 font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/30">
                                Book Now
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="xl:hidden flex items-center relative" style={{ zIndex: 60 }}>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setIsOpen(prev => !prev);
                            }}
                            onTouchStart={(e) => {
                                e.stopPropagation();
                            }}
                            type="button"
                            style={{ pointerEvents: 'auto', zIndex: 60, WebkitTapHighlightColor: 'transparent' }}
                            className="text-gray-700 hover:text-black focus:outline-none transition-colors p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer active:scale-95 touch-manipulation select-none"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="h-6 w-6 pointer-events-none" /> : <Menu className="h-6 w-6 pointer-events-none" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="xl:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto shadow-lg relative z-50" style={{ zIndex: 50 }}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.children ? (
                                    <>
                                        <button
                                            onClick={() => {
                                                if (link.name === 'Services') {
                                                    setIsServicesOpen(!isServicesOpen);
                                                } else if (link.name === 'Fleet') {
                                                    setIsFleetOpen(!isFleetOpen);
                                                } else if (link.name === 'Locations') {
                                                    setIsLocationsOpen(!isLocationsOpen);
                                                } else if (link.name === 'Routes') {
                                                    setIsRoutesOpen(!isRoutesOpen);
                                                } else if (link.name === 'Guides') {
                                                    setIsGuidesOpen(!isGuidesOpen);
                                                } else if (link.name === 'Company') {
                                                    setIsCompanyOpen(!isCompanyOpen);
                                                }
                                            }}
                                            className={`w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium transition-all min-h-[44px] ${pathname.startsWith(link.href) ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary/10 hover:text-primary'}
                                                }`}
                                            aria-expanded={(link.name === 'Services' && isServicesOpen) ||
                                                (link.name === 'Fleet' && isFleetOpen) ||
                                                (link.name === 'Locations' && isLocationsOpen) ||
                                                (link.name === 'Routes' && isRoutesOpen) ||
                                                (link.name === 'Guides' && isGuidesOpen) ||
                                                (link.name === 'Company' && isCompanyOpen)}
                                        >
                                            <span className="flex items-center">
                                                <link.icon className="w-5 h-5 mr-3" />
                                                {link.name}
                                            </span>
                                            <ChevronDown className={`w-5 h-5 transition-transform ${(link.name === 'Services' && isServicesOpen) ||
                                                (link.name === 'Fleet' && isFleetOpen) ||
                                                (link.name === 'Locations' && isLocationsOpen) ||
                                                (link.name === 'Routes' && isRoutesOpen) ||
                                                (link.name === 'Guides' && isGuidesOpen) ||
                                                (link.name === 'Company' && isCompanyOpen)
                                                ? 'rotate-180' : ''
                                                }`} />
                                        </button>
                                        {((link.name === 'Services' && isServicesOpen) ||
                                            (link.name === 'Fleet' && isFleetOpen) ||
                                            (link.name === 'Locations' && isLocationsOpen) ||
                                            (link.name === 'Routes' && isRoutesOpen) ||
                                            (link.name === 'Guides' && isGuidesOpen) ||
                                            (link.name === 'Company' && isCompanyOpen)) && (
                                                <div className="pl-4 space-y-1 bg-primary/5 rounded-md mt-1 mb-1 py-2 border border-primary/10">
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            className={`block px-4 py-3 rounded-md text-sm transition-colors min-h-[44px] flex items-center ${
                                                                // @ts-ignore
                                                                child.isHub ? 'font-bold text-gray-900 bg-white/50' : 'text-gray-600 hover:bg-primary hover:text-white'
                                                                }`}
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {/* @ts-ignore */}
                                                            {child.isHub && <span className="mr-2 text-orange-500">★</span>}
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`flex items-center px-3 py-3 rounded-md text-base font-medium transition-all min-h-[44px] ${isActive(link.href) ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary/10 hover:text-primary'}
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <link.icon className="w-5 h-5 mr-3" />
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link href="/booking/" onClick={() => setIsOpen(false)} className="block mt-4">
                            <Button className="w-full bg-primary text-white hover:bg-blue-600 font-bold shadow-lg shadow-primary/30 min-h-[48px]">
                                Book Now
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
