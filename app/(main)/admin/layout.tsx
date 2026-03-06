'use client';

import { usePathname } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isLoginPage = pathname?.startsWith('/admin/login');

    if (isLoginPage) {
        return (
            <div className="min-h-screen bg-gray-50">
                {children}
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            <AdminSidebar />
            <main className="flex-1 md:ml-64 transition-all duration-300">
                <div className="p-4 md:p-8 pt-20 md:pt-8 min-h-screen">
                    {children}
                </div>
            </main>
        </div>
    );
}
