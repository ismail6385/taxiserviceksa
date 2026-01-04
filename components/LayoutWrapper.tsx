'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import StickyContactButton from '@/components/StickyContactButton';
import SocialSidebar from '@/components/SocialSidebar';
import JsonLdBreadcrumb from '@/components/JsonLdBreadcrumb';

import JsonLdService from '@/components/JsonLdService';

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
        </>
      )}

      {children}

      {!isAdminRoute && (
        <>
          <Footer />
          <StickyContactButton />
          <ScrollToTop />
        </>
      )}
    </>
  );
}
