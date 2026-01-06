import { Metadata } from 'next';
import AdminSidebar from '@/components/AdminSidebar';

export const metadata: Metadata = {
    title: 'Admin Dashboard',
    robots: {
        index: false,
        follow: false,
    },
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-neutral-950">
            <AdminSidebar />
            <main className="flex-1 md:ml-64 transition-all duration-300">
                <div className="p-4 md:p-8 pt-20 md:pt-8 min-h-screen">
                    {children}
                </div>
            </main>
        </div>
    );
}
