'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


import SocialSidebar from '@/components/SocialSidebar';
import JsonLdBreadcrumb from '@/components/JsonLdBreadcrumb';
import JsonLdService from '@/components/JsonLdService';
import JsonLdLocalBusiness from '@/components/JsonLdLocalBusiness';
import WhatsAppButton from '@/components/WhatsAppButton';

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
          <WhatsAppButton />
          <JsonLdBreadcrumb />

          <JsonLdService />
          <JsonLdLocalBusiness />
        </>
      )}

      <main className={!isAdminRoute ? 'pt-[120px]' : ''}>
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
