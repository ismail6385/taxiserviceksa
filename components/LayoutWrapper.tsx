'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';


import SocialSidebar from '@/components/SocialSidebar';
import JsonLdBreadcrumb from '@/components/JsonLdBreadcrumb';
import JsonLdService from '@/components/JsonLdService';
import JsonLdLocalBusiness from '@/components/JsonLdLocalBusiness';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <>
      {/* Only show Navbar, Footer, and other components on non-admin routes */}
      {!isAdminRoute && (
        <>
          <Navbar />
          <SocialSidebar />
          <JsonLdBreadcrumb />

          <JsonLdService />
          <JsonLdLocalBusiness />
        </>
      )}

      <main className={!isAdminRoute ? 'pt-[120px]' : ''}>
        {!isAdminRoute && pathname !== '/' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs />
          </div>
        )}
        {children}
      </main>

      {!isAdminRoute && (
        <>
          <Footer />
        </>
      )}
    </>
  );
}
