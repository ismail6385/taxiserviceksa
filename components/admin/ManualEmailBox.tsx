'use client';

import { useState } from 'react';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { buildManualEmail, copyRichEmail, gmailComposeUrl, type ManualEmailBooking, type ManualEmailKind } from '@/lib/manual-email';

const KINDS: { kind: ManualEmailKind; label: string; doc: string }[] = [
    { kind: 'quote', label: 'Quotation', doc: 'View/Print Quotation' },
    { kind: 'invoice', label: 'Invoice', doc: 'View/Print Invoice' },
    { kind: 'receipt', label: 'Receipt', doc: 'View/Send Receipt' },
];

// Manual email helper for the booking detail panel: opens Gmail with the
// quote/invoice/receipt email already written, and keeps the designed (HTML)
// version on the clipboard for anyone who prefers to paste that instead.
export default function ManualEmailBox({ booking }: { booking: ManualEmailBooking }) {
    const [active, setActive] = useState<ManualEmailKind | null>(null);
    const [copied, setCopied] = useState<string | null>(null);

    const flash = (key: string) => { setCopied(key); setTimeout(() => setCopied(c => (c === key ? null : c)), 2000); };
    const email = active ? buildManualEmail(active, booking) : null;
    const to = booking.customer_email || '';

    const copyDesigned = async (kind: ManualEmailKind) => {
        const e = buildManualEmail(kind, booking);
        if (await copyRichEmail(e.html, e.text)) flash('body');
        else alert('Could not copy. Please allow clipboard access and try again.');
    };
    const copyText = async (key: string, value: string) => {
        try { await navigator.clipboard.writeText(value); flash(key); } catch { alert('Could not copy.'); }
    };
    const btn = 'inline-flex items-center gap-1 rounded border border-gray-300 bg-white px-2 py-1 font-semibold hover:border-gray-500';

    return (
        <div className="rounded-lg border border-blue-200 bg-blue-50/60 p-3 space-y-3">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-blue-800">
                <Mail className="w-4 h-4" /> Send email yourself
            </p>
            <div className="grid grid-cols-3 gap-2">
                {KINDS.map(k => (
                    <button
                        key={k.kind}
                        type="button"
                        onClick={() => setActive(k.kind)}
                        className={`rounded-md border px-2 py-2 text-xs font-bold transition-colors ${active === k.kind ? 'border-blue-600 bg-blue-600 text-white' : 'border-blue-200 bg-white text-blue-800 hover:border-blue-400'}`}
                    >
                        {k.label}
                    </button>
                ))}
            </div>

            {email && active && (
                <div className="space-y-2 text-xs text-gray-700">
                    <a
                        href={gmailComposeUrl(to, email.subject, email.text)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => copyDesigned(active)}
                        className="flex items-center justify-center gap-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-bold text-white hover:bg-blue-700"
                    >
                        Open Gmail with the email written <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <p>Customer email, subject and message are filled in. Attach the PDF from <b>{KINDS.find(k => k.kind === active)!.doc}</b> below, check it, and press Send.</p>
                    <p className="text-gray-500">
                        Want the designed version with colours? In Gmail, select the message (Ctrl + A) and press Ctrl + V.
                        {copied === 'body' && <span className="text-emerald-700 font-semibold"> Designed version copied ✓</span>}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                        <button type="button" onClick={() => copyDesigned(active)} className={btn}>
                            {copied === 'body' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />} Copy designed email
                        </button>
                        <button type="button" onClick={() => copyText('text', email.text)} className={btn}>
                            {copied === 'text' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />} Copy plain text
                        </button>
                        <button type="button" onClick={() => copyText('subject', email.subject)} className={btn}>
                            {copied === 'subject' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />} Copy subject
                        </button>
                        {to && (
                            <button type="button" onClick={() => copyText('to', to)} className={btn}>
                                {copied === 'to' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />} Copy {to}
                            </button>
                        )}
                    </div>
                    {!to && <p className="text-amber-700">This booking has no customer email. Add it with Edit Details, or send the plain text on WhatsApp.</p>}
                    <details className="rounded border border-gray-200 bg-white">
                        <summary className="cursor-pointer px-2 py-1.5 font-semibold text-gray-700">Preview: {email.subject}</summary>
                        <pre className="whitespace-pre-wrap px-2 pb-2 font-sans text-[11px] text-gray-700">{email.text}</pre>
                    </details>
                </div>
            )}
        </div>
    );
}
