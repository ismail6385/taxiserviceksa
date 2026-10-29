'use client';

import { useEffect, useState } from 'react';
import { Copy, Check, X, Car } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import {
    buildDriverMessage, defaultDriverOptions, copyText, waNumber,
    type DriverMessageBooking, type DriverMessageOptions,
} from '@/lib/driver-message';

// Preview of the driver message for one booking: tick what to include, edit
// the text if needed, then copy it or open WhatsApp to the assigned driver.
export default function DriverMessageDialog({ booking, onClose }: { booking: DriverMessageBooking | null; onClose: () => void }) {
    const [opts, setOpts] = useState<DriverMessageOptions | null>(null);
    const [text, setText] = useState('');
    const [copied, setCopied] = useState(false);
    const [driverPhone, setDriverPhone] = useState('');

    useEffect(() => {
        if (!booking) return;
        const o = defaultDriverOptions(booking);
        setOpts(o);
        setText(buildDriverMessage(booking, o));
        setDriverPhone(booking.driver_phone || '');
        setCopied(false);
    }, [booking]);

    useEffect(() => {
        if (!booking) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [booking, onClose]);

    if (!booking || !opts) return null;

    const toggle = (key: keyof DriverMessageOptions) => {
        const next = { ...opts, [key]: !opts[key] };
        setOpts(next);
        setText(buildDriverMessage(booking, next));
    };

    const doCopy = async () => {
        const ok = await copyText(text);
        if (ok) { setCopied(true); setTimeout(() => setCopied(false), 2000); }
        else alert('Could not copy. Select the text and copy it by hand.');
    };

    const openWhatsApp = () => {
        const n = waNumber(driverPhone);
        const url = n ? `https://wa.me/${n}?text=${encodeURIComponent(text)}` : `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const checks: [keyof DriverMessageOptions, string][] = [
        ['customerPhone', 'Customer phone'],
        ['collect', 'Cash to collect'],
        ['driverPay', 'Driver payment'],
        ['mapLinks', 'Map links'],
    ];

    return (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4" onClick={onClose} role="presentation">
            <div role="dialog" aria-modal="true" aria-labelledby="driver-msg-title" onClick={(e) => e.stopPropagation()}
                className="w-full sm:max-w-lg max-h-[92vh] flex flex-col rounded-t-2xl sm:rounded-2xl bg-white text-gray-900 shadow-2xl">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <h2 id="driver-msg-title" className="flex items-center gap-2 font-bold"><Car className="w-5 h-5 text-amber-600" />Send to driver</h2>
                    <button type="button" onClick={onClose} className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100" aria-label="Close"><X className="w-5 h-5" /></button>
                </div>

                <div className="px-5 py-3 space-y-3 overflow-y-auto">
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {checks.map(([key, label]) => (
                            <label key={key} className="inline-flex items-center gap-1.5 text-sm text-gray-700">
                                <input type="checkbox" checked={opts[key]} onChange={() => toggle(key)} className="h-4 w-4 rounded border-gray-300" />
                                {label}
                            </label>
                        ))}
                    </div>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} rows={16}
                        className="w-full rounded-lg border border-gray-300 p-3 font-mono text-[13px] leading-relaxed text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        aria-label="Driver message" />
                    <p className="text-xs text-gray-500">You can edit the text before sending. The customer&apos;s fare is never included.</p>
                    <label className="block text-xs text-gray-500">Driver WhatsApp number
                        <input value={driverPhone} onChange={(e) => setDriverPhone(e.target.value)} placeholder="05xxxxxxxx or +9665xxxxxxxx" inputMode="tel"
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900" />
                    </label>
                </div>

                <div className="grid grid-cols-2 gap-2 px-5 py-4 border-t border-gray-100">
                    <button type="button" onClick={doCopy}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800">
                        {copied ? <><Check className="w-4 h-4" />Copied</> : <><Copy className="w-4 h-4" />Copy</>}
                    </button>
                    <button type="button" onClick={openWhatsApp}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white hover:bg-[#1ebe5b]">
                        <WhatsAppIcon className="w-4 h-4 fill-current" />{waNumber(driverPhone) ? 'WhatsApp driver' : 'Open WhatsApp'}
                    </button>
                </div>
            </div>
        </div>
    );
}
