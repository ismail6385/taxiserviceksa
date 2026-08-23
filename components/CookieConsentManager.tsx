'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { X } from 'lucide-react';
import {
    CookieConsentPrefs,
    getStoredConsent,
    setStoredConsent,
} from '@/lib/cookie-consent';

const ACCEPT_ALL: CookieConsentPrefs = { analytics: true, marketing: true };
const REJECT_ALL: CookieConsentPrefs = { analytics: false, marketing: false };

export default function CookieConsentManager() {
    const [consent, setConsent] = useState<CookieConsentPrefs | null>(null);
    const [ready, setReady] = useState(false);
    const [showBanner, setShowBanner] = useState(false);
    const [showPanel, setShowPanel] = useState(false);
    const [draft, setDraft] = useState<CookieConsentPrefs>(REJECT_ALL);

    useEffect(() => {
        const stored = getStoredConsent();
        if (stored) {
            setConsent({ analytics: stored.analytics, marketing: stored.marketing });
        } else {
            setShowBanner(true);
        }
        setReady(true);
    }, []);

    const applyConsent = (prefs: CookieConsentPrefs) => {
        setStoredConsent(prefs);
        setConsent(prefs);
        setShowBanner(false);
        setShowPanel(false);
    };

    const openPanel = () => {
        setDraft(consent ?? REJECT_ALL);
        setShowPanel(true);
    };

    return (
        <>
            {/* Analytics — Google Analytics + Microsoft Clarity */}
            {ready && consent?.analytics && (
                <>
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-14M4JL9R6T"
                        strategy="lazyOnload"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-14M4JL9R6T');
                        `}
                    </Script>
                    <Script id="microsoft-clarity" strategy="lazyOnload">
                        {`
                            (function(c,l,a,r,i,t,y){
                                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                            })(window, document, "clarity", "script", "qp7iv7z299");
                        `}
                    </Script>
                </>
            )}

            {/* Marketing / social — Trustpilot review widget */}
            {ready && consent?.marketing && (
                <Script
                    src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                    strategy="lazyOnload"
                    async
                />
            )}

            {showBanner && !showPanel && (
                <div className="fixed bottom-0 left-0 right-0 z-[200] bg-[#0a1442] border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col lg:flex-row items-start lg:items-center gap-4">
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-1">
                            We and our partners process information about you, your devices and your online behaviour using technologies such as cookies to provide, analyse and improve our services; to personalise content or advertising on this and other sites, apps or platforms and to provide social media features. Are you happy to accept cookies?{' '}
                            <Link href="/privacy-policy/" className="text-primary font-semibold hover:underline whitespace-nowrap">
                                More info here.
                            </Link>
                        </p>
                        <div className="flex gap-3 shrink-0 w-full lg:w-auto">
                            <Button
                                onClick={openPanel}
                                variant="outline"
                                className="flex-1 lg:flex-none bg-white/5 text-white border-white/20 hover:bg-white/10 font-bold text-sm"
                            >
                                Customise Cookies
                            </Button>
                            <Button
                                onClick={() => applyConsent(ACCEPT_ALL)}
                                className="flex-1 lg:flex-none bg-primary text-white hover:bg-blue-600 font-bold text-sm"
                            >
                                Accept Cookies
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {showPanel && (
                <div className="fixed inset-0 z-[210] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
                    <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl">
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="text-lg font-black text-gray-900">Cookie Preferences</h2>
                            <button
                                onClick={() => setShowPanel(false)}
                                aria-label="Close"
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">Essential</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">Required for the website to function. Always on.</p>
                                </div>
                                <Switch checked disabled className="shrink-0 mt-1" />
                            </div>

                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">Analytics</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">Helps us understand how visitors use the site (Google Analytics, Microsoft Clarity).</p>
                                </div>
                                <Switch
                                    checked={draft.analytics}
                                    onCheckedChange={(v) => setDraft((d) => ({ ...d, analytics: v }))}
                                    className="shrink-0 mt-1"
                                />
                            </div>

                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">Marketing &amp; Social</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">Powers embedded social/review features on this site (Trustpilot).</p>
                                </div>
                                <Switch
                                    checked={draft.marketing}
                                    onCheckedChange={(v) => setDraft((d) => ({ ...d, marketing: v }))}
                                    className="shrink-0 mt-1"
                                />
                            </div>

                            <p className="text-gray-400 text-xs leading-relaxed border-t border-gray-100 pt-4">
                                See our <Link href="/privacy-policy/" className="text-primary font-semibold hover:underline">Privacy Policy</Link> for more information.
                            </p>
                        </div>

                        <div className="p-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                            <Button
                                onClick={() => applyConsent(REJECT_ALL)}
                                variant="outline"
                                className="flex-1 font-bold text-sm"
                            >
                                Reject Non-Essential
                            </Button>
                            <Button
                                onClick={() => applyConsent(draft)}
                                className="flex-1 bg-primary text-white hover:bg-blue-600 font-bold text-sm"
                            >
                                Save Preferences
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
