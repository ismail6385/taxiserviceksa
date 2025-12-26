'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import StickyContactButton from '@/components/StickyContactButton';
import JsonLdBreadcrumb from '@/components/JsonLdBreadcrumb';
import JsonLdOrganization from '@/components/JsonLdOrganization';
import JsonLdLocalBusiness from '@/components/JsonLdLocalBusiness';
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
          <JsonLdBreadcrumb />
          <JsonLdOrganization />
          <JsonLdLocalBusiness />
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

