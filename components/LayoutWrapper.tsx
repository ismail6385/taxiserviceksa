'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LanguageSuggestBanner from '@/components/LanguageSuggestBanner';
import MobileStickyWhatsApp from '@/components/MobileStickyWhatsApp';
import JsonLdBreadcrumb from '@/components/JsonLdBreadcrumb';
import JsonLdService from '@/components/JsonLdService';
import JsonLdLocalBusiness from '@/components/JsonLdLocalBusiness';
import JsonLdOrganization from '@/components/JsonLdOrganization';
import JsonLdWebSite from '@/components/JsonLdWebSite';
import { BookingFlowHeader, BookingFlowFooter } from '@/components/BookingFlowChrome';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Private driver trip sheets (/my-trips/...) get the same bare layout as admin.
  const isAdminRoute = pathname?.startsWith('/admin') || pathname?.startsWith('/my-trips');
  // Booking flow: slim header/footer only, so nothing distracts from the form.
  const isBookingFlow = !!pathname?.startsWith('/booking');

  if (isBookingFlow) {
    return (
      <>
        <JsonLdOrganization />
        <JsonLdWebSite />
        <BookingFlowHeader />
        <main>{children}</main>
        <BookingFlowFooter />
      </>
    );
  }

  return (
    <>
      {/* Only show Navbar, Footer, and other components on non-admin routes */}
      {!isAdminRoute && (
        <>
          <Navbar />
          <LanguageSuggestBanner />
          <JsonLdBreadcrumb />
          <JsonLdService />
          <JsonLdLocalBusiness />
          <JsonLdOrganization />
          <JsonLdWebSite />
          <FloatingWhatsApp />
          <MobileStickyWhatsApp />
        </>
      )}

      <main className={!isAdminRoute ? 'pt-14 sm:pt-16 lg:pt-24' : ''}>
        {!isAdminRoute && pathname !== '/' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
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
