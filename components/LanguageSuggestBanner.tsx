'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { pageLang, samePageIn } from '@/lib/localized-pages';

// For visitors whose phone or browser is set to Arabic or Urdu: when the page
// they landed on has a translated version, offer it. Never redirects on its
// own, so Google and English-speaking visitors always get the page they asked for.
const COPY = {
    ar: { text: 'هذه الصفحة متوفرة باللغة العربية', cta: 'عرض بالعربية', close: 'إغلاق' },
    ur: { text: 'یہ صفحہ اردو میں بھی دستیاب ہے', cta: 'اردو میں دیکھیں', close: 'بند کریں' },
} as const;

const DISMISS_KEY = 'lang-suggest-dismissed';

function preferredLang(): 'ar' | 'ur' | null {
    const langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language]) || [];
    for (const l of langs) {
        const code = (l || '').toLowerCase().slice(0, 2);
        if (code === 'ar' || code === 'ur') return code;
        if (code === 'en') return null; // English comes first: leave them alone
    }
    return null;
}

export default function LanguageSuggestBanner() {
    const pathname = usePathname() || '/';
    const [offer, setOffer] = useState<{ lang: 'ar' | 'ur'; href: string } | null>(null);

    useEffect(() => {
        setOffer(null);
        if (pageLang(pathname) !== 'en') return;
        try { if (localStorage.getItem(DISMISS_KEY)) return; } catch { /* storage blocked */ }
        const lang = preferredLang();
        if (!lang) return;
        const href = samePageIn(pathname, lang);
        if (href) setOffer({ lang, href });
    }, [pathname]);

    if (!offer) return null;
    const c = COPY[offer.lang];
    const dismiss = () => {
        try { localStorage.setItem(DISMISS_KEY, '1'); } catch { /* storage blocked */ }
        setOffer(null);
    };

    return (
        <div className="fixed inset-x-0 top-16 lg:top-24 z-40 flex justify-center px-4 pointer-events-none">
            <div dir="rtl" lang={offer.lang} className="pointer-events-auto flex items-center gap-3 rounded-full bg-gray-900 text-white shadow-xl pl-2 pr-4 py-2 text-sm">
                <span className="font-medium">{c.text}</span>
                <Link href={offer.href} onClick={dismiss} className="rounded-full bg-primary px-3 py-1.5 font-bold text-black hover:opacity-90 whitespace-nowrap">
                    {c.cta}
                </Link>
                <button type="button" onClick={dismiss} aria-label={c.close} className="rounded-full p-1 text-gray-300 hover:bg-white/10 hover:text-white">
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
