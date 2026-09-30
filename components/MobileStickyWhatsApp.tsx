'use client';

import { usePathname } from 'next/navigation';
import { Phone, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { useHideNearFooter } from '@/hooks/useHideNearFooter';

// Pages whose mobile bar leads with their own quote form instead of WhatsApp.
// WhatsApp stays available as the secondary action.
const PAGE_QUOTE: Record<string, { label: string; href: string; whatsapp: string }> = {
    '/locations/khayber-fort/': { label: 'Get Khaybar Quote', href: '#quote', whatsapp: 'Hello, I would like a quote for a Khaybar trip.' },
    '/locations/madinah/uhud/': { label: 'Get Uhud Quote', href: '#quote', whatsapp: 'Hello, I would like a quote for a Mount Uhud visit.' },
    '/locations/duba/': { label: 'Get a Duba Quote', href: '#quote', whatsapp: 'Hello, I would like a quote for a journey from Duba.' },
};

export default function MobileStickyWhatsApp() {
    const nearFooter = useHideNearFooter();
    const pathname = usePathname() || '';
    const page = PAGE_QUOTE[pathname.endsWith('/') ? pathname : `${pathname}/`];
    const wrap = `fixed bottom-0 left-0 right-0 z-[90] bg-white/90 backdrop-blur-md border-t border-gray-100 p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] transition-opacity duration-300 ${nearFooter ? 'hidden opacity-0 pointer-events-none' : 'lg:hidden opacity-100'}`;

    if (page) {
        return (
            <div className={wrap}>
                <div className="flex gap-3">
                    <a href={page.href} className="flex-1 bg-gray-900 hover:bg-black text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all">
                        {page.label}
                        <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </a>
                    <a
                        href={`https://wa.me/966575806733?text=${encodeURIComponent(page.whatsapp)}`}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-lg active:scale-95"
                        aria-label="WhatsApp booking"
                    >
                        <WhatsAppIcon className="w-6 h-6 fill-current" />
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className={wrap}>
            <div className="flex gap-3">
                <a
                    href="https://wa.me/966575806733?text=Hello%2C%20I%20would%20like%20to%20get%20a%20transfer%20quote."
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
                >
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                    WhatsApp Booking
                </a>
                <a
                    href="tel:+966575806733"
                    className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center hover:bg-black transition-colors shadow-lg active:scale-95"
                    aria-label="Call us"
                >
                    <Phone className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
}
