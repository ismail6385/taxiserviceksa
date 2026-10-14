'use client';

import { useState } from 'react';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { buildManualEmail, copyRichEmail, gmailComposeUrl, type ManualEmailBooking, type ManualEmailKind } from '@/lib/manual-email';

const KINDS: { kind: ManualEmailKind; label: string; doc: string }[] = [
    { kind: 'quote', label: 'Quotation', doc: 'View/Print Quotation' },
    { kind: 'invoice', label: 'Invoice', doc: 'View/Print Invoice' },
    { kind: 'receipt', label: 'Receipt', doc: 'View/Send Receipt' },
];

// Manual email helper for the booking detail panel: copies a ready, formatted
// quote/invoice/receipt email so the owner can paste it into Gmail and send.
export default function ManualEmailBox({ booking }: { booking: ManualEmailBooking }) {
    const [active, setActive] = useState<ManualEmailKind | null>(null);
    const [copied, setCopied] = useState<string | null>(null);

    const flash = (key: string) => { setCopied(key); setTimeout(() => setCopied(c => (c === key ? null : c)), 2000); };
    const email = active ? buildManualEmail(active, booking) : null;
    const to = booking.customer_email || '';

    const pick = async (kind: ManualEmailKind) => {
        setActive(kind);
        const e = buildManualEmail(kind, booking);
        if (await copyRichEmail(e.html, e.text)) flash('body');
        else alert('Could not copy. Please allow clipboard access and try again.');
    };
    const copyText = async (key: string, value: string) => {
        try { await navigator.clipboard.writeText(value); flash(key); } catch { alert('Could not copy.'); }
    };

    return (
        <div className="rounded-lg border border-blue-200 bg-blue-50/60 p-3 space-y-3">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-blue-800">
                <Mail className="w-4 h-4" /> Send email yourself (copy &amp; paste)
            </p>
            <div className="grid grid-cols-3 gap-2">
                {KINDS.map(k => (
                    <button
                        key={k.kind}
                        type="button"
                        onClick={() => pick(k.kind)}
                        className={`rounded-md border px-2 py-2 text-xs font-bold transition-colors ${active === k.kind ? 'border-blue-600 bg-blue-600 text-white' : 'border-blue-200 bg-white text-blue-800 hover:border-blue-400'}`}
                    >
                        {k.label}
                    </button>
                ))}
            </div>

            {email && active && (
                <div className="space-y-2 text-xs text-gray-700">
                    <p className={`font-semibold ${copied === 'body' ? 'text-emerald-700' : 'text-gray-700'}`}>
                        {copied === 'body' ? '✓ Email copied.' : 'Email ready.'} Now:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                        <li>
                            <a href={gmailComposeUrl(to, email.subject)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:underline">
                                Open Gmail <ExternalLink className="w-3 h-3" />
                            </a>{' '}
                            (customer email and subject are filled in)
                        </li>
                        <li>Click in the message box and press <b>Ctrl + V</b></li>
                        <li>Attach the PDF from <b>{KINDS.find(k => k.kind === active)!.doc}</b> below, then Send</li>
                    </ol>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                        <button type="button" onClick={() => pick(active)} className="inline-flex items-center gap-1 rounded border border-gray-300 bg-white px-2 py-1 font-semibold hover:border-gray-500">
                            {copied === 'body' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />} Copy email again
                        </button>
                        <button type="button" onClick={() => copyText('subject', email.subject)} className="inline-flex items-center gap-1 rounded border border-gray-300 bg-white px-2 py-1 font-semibold hover:border-gray-500">
                            {copied === 'subject' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />} Copy subject
                        </button>
                        {to && (
                            <button type="button" onClick={() => copyText('to', to)} className="inline-flex items-center gap-1 rounded border border-gray-300 bg-white px-2 py-1 font-semibold hover:border-gray-500">
                                {copied === 'to' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />} Copy {to}
                            </button>
                        )}
                    </div>
                    {!to && <p className="text-amber-700">This booking has no customer email. Add it with Edit Details, or send the copied text on WhatsApp.</p>}
                    <p className="text-gray-500">Subject: {email.subject}</p>
                </div>
            )}
        </div>
    );
}
