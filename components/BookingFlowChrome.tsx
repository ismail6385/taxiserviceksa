'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Car, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

const HELP_WA = `https://wa.me/966575806733?text=${encodeURIComponent('Hello, I need help with my booking.')}`;

// Distraction-free header and footer for the booking flow (/booking/...):
// brand for trust, a way back and a way to ask for help, but no menu or
// link-heavy footer pulling people away from the form.
export function BookingFlowHeader() {
    const router = useRouter();
    const goBack = () => {
        if (window.history.length > 1) router.back();
        else router.push('/');
    };
    return (
        <header className="sticky top-0 z-[90] bg-white/95 backdrop-blur border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center gap-2 sm:gap-3">
                <button
                    type="button"
                    onClick={goBack}
                    aria-label="Go back"
                    className="-ml-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>

                <Link href="/" className="flex min-w-0 items-center gap-2" aria-label="Taxi Service KSA home">
                    <span className="bg-primary p-1.5 sm:p-2 rounded-lg shrink-0"><Car className="w-4 h-4 sm:w-5 sm:h-5 text-white" /></span>
                    <span className="flex flex-col leading-none min-w-0">
                        <span className="text-[15px] sm:text-lg font-black uppercase text-gray-900 whitespace-nowrap">
                            Taxi Service <span className="text-primary">KSA</span>
                        </span>
                        <span className="hidden sm:flex items-center gap-1 mt-1 text-[11px] font-medium text-gray-500">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Secure booking · Fixed prices
                        </span>
                    </span>
                </Link>

                <a
                    href={HELP_WA}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-2 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span className="hidden min-[380px]:inline">Need help?</span>
                </a>
            </div>
        </header>
    );
}

export function BookingFlowFooter() {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-500">
                <span>© {new Date().getFullYear()} Taxi Service KSA</span>
                <a href="https://wa.me/966575806733" target="_blank" rel="nofollow noopener noreferrer" className="hover:text-gray-900">WhatsApp +966 57 580 6733</a>
                <Link href="/privacy-policy/" className="hover:text-gray-900">Privacy</Link>
                <Link href="/terms-conditions/" className="hover:text-gray-900">Terms</Link>
            </div>
        </footer>
    );
}
