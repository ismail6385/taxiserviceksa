'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Car, Lock } from 'lucide-react';

// Distraction-free header and footer for the booking flow (/booking/...):
// the brand for trust and a way back, but no menu or link-heavy footer
// pulling people away from the form.
export function BookingFlowHeader() {
    const router = useRouter();
    const goBack = () => {
        if (window.history.length > 1) router.back();
        else router.push('/');
    };
    return (
        <header className="sticky top-0 z-[90] bg-gray-950 border-b border-white/10">
            <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
                <button type="button" onClick={goBack} className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-300 hover:text-white">
                    <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <Link href="/" className="flex items-center gap-2" aria-label="Taxi Service KSA home">
                    <span className="bg-primary p-1.5 rounded-lg"><Car className="w-4 h-4 text-white" /></span>
                    <span className="text-sm sm:text-base font-black tracking-normal text-white uppercase whitespace-nowrap">
                        Taxi Service <span className="text-primary">KSA</span>
                    </span>
                </Link>
                <span className="hidden sm:inline-flex items-center gap-1 text-xs text-gray-400"><Lock className="w-3.5 h-3.5" /> Secure booking</span>
                <span className="sm:hidden w-12" aria-hidden="true" />
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
