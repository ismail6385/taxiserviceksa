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
    MapPin,
    FileText,
    Star,
    HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils'; // Assuming you have a utils file for class merging

const menuItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Bookings', href: '/admin/bookings', icon: CalendarDays },
    { name: 'Reviews', href: '/admin/reviews', icon: Star },
    { name: 'Questions', href: '/admin/questions', icon: HelpCircle },
    { name: 'Blogs', href: '/admin/blogs', icon: FileText },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setIsAuthenticated(!!session);

            // Listen for auth changes
            const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
                setIsAuthenticated(!!session);
            });

            return () => subscription.unsubscribe();
        };
        checkAuth();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setIsAuthenticated(false);
        router.push('/admin/login');
    };

    // Do not show the sidebar at all if not authenticated, except during initial load check
    if (isAuthenticated === false && pathname !== '/admin/login') {
        return null;
    }

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-white border-gray-200 text-gray-900"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </Button>
            </div>

            {/* Sidebar */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out md:translate-x-0",
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex flex-col h-full">
                    {/* Logo Section */}
                    <div className="h-20 flex items-center px-6 border-b border-gray-200">
                        <Link href="/admin/dashboard" className="flex items-center gap-2">
                            <div className="bg-primary/20 p-2 rounded-lg">
                                <Car className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">Admin<span className="text-primary">Panel</span></span>
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
                                            ? "bg-primary text-black font-semibold shadow-md"
                                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Icon className={cn("w-5 h-5", isActive ? "text-black" : "text-gray-400 group-hover:text-gray-900")} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Logout Section */}
                    <div className="p-4 border-t border-gray-200">
                        <Button
                            onClick={handleLogout}
                            className="w-full justify-start bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 border border-red-100 transition-all"
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
