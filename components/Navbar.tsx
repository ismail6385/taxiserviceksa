"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Phone, Mail, Car, ChevronDown, Home, Briefcase, Info, Contact, MapPin, HelpCircle, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isFleetOpen, setIsFleetOpen] = useState(false);
    const [isLocationsOpen, setIsLocationsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/', icon: Home },

        {
            name: 'Fleet',
            href: '/fleet',
            icon: Car,
            children: [
                { name: 'GMC Yukon', href: '/fleet/gmc-yukon' },
                { name: 'Toyota Camry', href: '/fleet/toyota-camry' },
                { name: 'Hyundai Staria', href: '/fleet/hyundai-staria' },
                { name: 'Toyota Hiace', href: '/fleet/toyota-hiace' },
                { name: 'Toyota Coaster', href: '/fleet/toyota-coaster' },
                { name: 'Hyundai Starex', href: '/fleet/hyundai-starex' },
            ]
        },
        {
            name: 'Locations',
            href: '/locations',
            icon: MapPin,
            children: [
                { name: 'Makkah', href: '/locations/makkah' },
                { name: 'Madinah', href: '/locations/madinah' },
                { name: 'Jeddah', href: '/locations/jeddah' },
                { name: 'Taif', href: '/locations/taif' },
                { name: 'Khayber Fort', href: '/locations/khayber-fort' },
                { name: 'AlUla', href: '/locations/alula' },
            ]
        },
        { name: 'Gallery', href: '/gallery', icon: Camera },
        { name: 'FAQ', href: '/faq', icon: HelpCircle },
        { name: 'About', href: '/about', icon: Info },
        { name: 'Contact', href: '/contact', icon: Contact },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 shadow-sm">
            {/* Main Navbar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900 group">
                            <div className="bg-gradient-to-br from-primary to-yellow-600 p-2 rounded-lg group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                                <Car className="w-6 h-6 text-black" />
                            </div>
                            <span>TaxiService<span className="font-black">KSA</span></span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.children ? (
                                    <button
                                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all ${pathname.startsWith(link.href) ? 'bg-primary text-black' : 'text-gray-700 hover:bg-primary/10 hover:text-black'}
                                            }`}
                                    >
                                        <link.icon className="w-4 h-4 mr-2" />
                                        {link.name}
                                        <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" />
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all ${isActive(link.href) ? 'bg-primary text-black' : 'text-gray-700 hover:bg-primary/10 hover:text-black'}
                                            }`}
                                    >
                                        <link.icon className="w-4 h-4 mr-2" />
                                        {link.name}
                                    </Link>
                                )}

                                {/* Dropdown */}
                                {link.children && (
                                    <div className="absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                                        <div className="py-2" role="menu">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-black transition-colors"
                                                    role="menuitem"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link href="/booking">
                            <Button className="bg-primary text-black hover:bg-primary/90 font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/30">
                                Book Now
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-black focus:outline-none transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
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
                                                }
                                            }}
                                            className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium transition-all ${pathname.startsWith(link.href) ? 'bg-primary text-black' : 'text-gray-700 hover:bg-primary/10 hover:text-black'}
                                                }`}
                                        >
                                            <span className="flex items-center">
                                                <link.icon className="w-4 h-4 mr-2" />
                                                {link.name}
                                            </span>
                                            <ChevronDown className={`w-4 h-4 transition-transform ${(link.name === 'Services' && isServicesOpen) ||
                                                (link.name === 'Fleet' && isFleetOpen) ||
                                                (link.name === 'Locations' && isLocationsOpen)
                                                ? 'rotate-180' : ''
                                                }`} />
                                        </button>
                                        {((link.name === 'Services' && isServicesOpen) ||
                                            (link.name === 'Fleet' && isFleetOpen) ||
                                            (link.name === 'Locations' && isLocationsOpen)) && (
                                                <div className="pl-4 space-y-1 bg-primary/5 rounded-md mt-1 mb-1 py-2 border border-primary/10">
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-primary hover:text-black transition-colors"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-all ${isActive(link.href) ? 'bg-primary text-black' : 'text-gray-700 hover:bg-primary/10 hover:text-black'}
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <link.icon className="w-4 h-4 mr-2" />
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link href="/booking" onClick={() => setIsOpen(false)}>
                            <Button className="w-full mt-4 bg-primary text-black hover:bg-primary/90 font-bold shadow-lg shadow-primary/30">
                                Book Now
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
