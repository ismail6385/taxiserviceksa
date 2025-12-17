'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import {
    LayoutDashboard,
    CalendarDays,
    Car,
    Settings,
    LogOut,
    Menu,
    X,
    MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils'; // Assuming you have a utils file for class merging

const menuItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Bookings', href: '/admin/bookings', icon: CalendarDays },
    { name: 'Fleet', href: '/admin/fleet', icon: Car },
    { name: 'Locations', href: '/admin/locations', icon: MapPin },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-neutral-900 border-neutral-700 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </Button>
            </div>

            {/* Sidebar */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-40 w-64 bg-neutral-900 border-r border-neutral-800 transition-transform duration-300 ease-in-out md:translate-x-0",
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex flex-col h-full">
                    {/* Logo Section */}
                    <div className="h-20 flex items-center px-6 border-b border-neutral-800">
                        <Link href="/admin/dashboard" className="flex items-center gap-2">
                            <div className="bg-primary/20 p-2 rounded-lg">
                                <Car className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-xl font-bold text-white">Admin<span className="text-primary">Panel</span></span>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            // Check if current path starts with the link href (for active state)
                            // But for dashboard, exact match might be better if sub-routes exist
                            const isActive = pathname === item.href || (item.name !== 'Dashboard' && pathname.startsWith(item.href));

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                        isActive
                                            ? "bg-primary text-black font-semibold shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Icon className={cn("w-5 h-5", isActive ? "text-black" : "text-gray-500 group-hover:text-white")} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Logout Section */}
                    <div className="p-4 border-t border-neutral-800">
                        <Button
                            onClick={handleLogout}
                            className="w-full justify-start bg-red-500/10 hover:bg-red-500/20 text-red-500 hover:text-red-400 border border-red-500/20 transition-all"
                            variant="ghost"
                        >
                            <LogOut className="w-5 h-5 mr-2" />
                            Sign Out
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
}
