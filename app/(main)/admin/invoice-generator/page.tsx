'use client';

import { useState, useRef, useEffect } from 'react';
import { 
    Printer, 
    Plus, 
    Trash2, 
    Building, 
    User, 
    FileText, 
    Settings, 
    Layout, 
    RotateCcw,
    Share2,
    Copy,
    Phone,
    Mail,
    Globe,
    MapPin,
    Hash,
    Calendar,
    ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface InvoiceItem {
    id: string;
    description: string;
    quantity: number;
    price: number;
}

interface CompanyProfile {
    name: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    logoUrl?: string;
}

const DEFAULT_PROFILES: Record<string, CompanyProfile> = {
    'taxi-ksa': {
        name: 'Taxi Service KSA',
        address: 'Jeddah, Saudi Arabia',
        phone: '+92 308 062 8195',
        email: 'info@taxiserviceksa.com',
        website: 'www.taxiserviceksa.com',
        logoUrl: '/logo.svg'
    },
    'airport-travel': {
        name: 'Airport Travel Taxis',
        address: 'Heathrow Airport, London, UK',
        phone: '+44 20 8123 4567',
        email: 'booking@airporttraveltaxis.com',
        website: 'www.airporttraveltaxis.com'
    },
    'car-ride-arabia': {
        name: 'Car Ride Arabia',
        address: 'Dubai, UAE',
        phone: '+971 4 123 4567',
        email: 'info@carridearabia.com',
        website: 'www.carridearabia.com'
    }
};

export default function UniversalInvoiceGenerator() {
    const [mode, setMode] = useState<'invoice' | 'letterhead'>('invoice');
    const [profile, setProfile] = useState<CompanyProfile>(DEFAULT_PROFILES['taxi-ksa']);
    const [recipient, setRecipient] = useState({
        name: '',
        details: '',
        email: '',
        phone: ''
    });

    const [isMounted, setIsMounted] = useState(false);
    const [meta, setMeta] = useState({
        number: '',
        date: '',
        currency: 'SAR',
        taxRate: 0,
        subject: 'Official Confirmation of Transport Services',
        letterBody: 'Dear Client,\n\nWe are pleased to confirm your upcoming transport arrangements. Our professional chauffeur will be prepared at your designated location. \n\nPlease ensure your booking details are correct. Thank you for choosing our services.',
        notes: 'Terms & Conditions:\n• Price includes fuel and toll fees.\n• Cancellation is free up to 24 hours before pickup.',
    });

    const [items, setItems] = useState<InvoiceItem[]>([
        { id: '1', description: 'VIP Airport Transfer Service', quantity: 1, price: 350 }
    ]);

    useEffect(() => {
        setIsMounted(true);
        setMeta(prev => ({
            ...prev,
            number: 'INV-' + Math.floor(Math.random() * 90000 + 10000),
            date: new Date().toISOString().split('T')[0],
        }));
    }, []);

    if (!isMounted) return null;

    const addItem = () => {
        setItems([...items, { id: Date.now().toString(), description: '', quantity: 1, price: 0 }]);
    };

    const removeItem = (id: string) => {
        if (items.length > 1) {
            setItems(items.filter(item => item.id !== id));
        }
    };

    const updateItem = (id: string, field: keyof InvoiceItem, value: any) => {
        setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
    };

    const subtotal = items.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    const taxAmount = (subtotal * meta.taxRate) / 100;
    const total = subtotal + taxAmount;

    return (
        <div className="max-w-[1400px] mx-auto min-h-screen bg-gray-50 pb-20">
            {/* Simple Top Bar */}
            <div className="sticky top-0 z-30 flex flex-col md:flex-row justify-between items-center gap-4 bg-white border-b px-6 py-4 print:hidden">
                <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-gray-600" />
                    <h1 className="text-xl font-bold text-gray-900 tracking-tight">Generator</h1>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex bg-gray-100 p-1 rounded-lg mr-4">
                        <button 
                            onClick={() => setMode('invoice')}
                            className={cn(
                                "px-4 py-1 rounded text-xs font-semibold transition-all",
                                mode === 'invoice' ? "bg-white shadow text-gray-900" : "text-gray-500"
                            )}
                        >
                            Invoice
                        </button>
                        <button 
                            onClick={() => setMode('letterhead')}
                            className={cn(
                                "px-4 py-1 rounded text-xs font-semibold transition-all",
                                mode === 'letterhead' ? "bg-white shadow text-gray-900" : "text-gray-500"
                            )}
                        >
                            Letterhead
                        </button>
                    </div>

                    <Button variant="outline" size="sm" onClick={() => window.print()} className="font-bold border-gray-300">
                        <Printer className="w-4 h-4 mr-2" /> Print PDF
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => {
                        const text = `*${mode.toUpperCase()}* \nFrom: ${profile.name}\nTo: ${recipient.name}\nTotal: ${meta.currency} ${total.toFixed(2)}`;
                        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                    }} className="font-bold border-gray-300">
                        <Share2 className="w-4 h-4 mr-2" /> WhatsApp
                    </Button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-10">
                
                {/* Editor Panel */}
                <div className="w-full lg:w-[400px] space-y-6 print:hidden">
                    
                    {/* Brand */}
                    <div className="bg-white rounded-xl border p-6 shadow-sm">
                        <Label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">Business Profile</Label>
                        <Select onValueChange={(val) => setProfile(DEFAULT_PROFILES[val])} defaultValue="taxi-ksa">
                            <SelectTrigger className="font-semibold text-gray-900 rounded-lg">
                                <SelectValue placeholder="Select Business" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                {Object.entries(DEFAULT_PROFILES).map(([key, p]) => (
                                    <SelectItem key={key} value={key} className="font-semibold">{p.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Client */}
                    <div className="bg-white rounded-xl border p-6 shadow-sm space-y-4">
                        <Label className="text-xs font-bold text-gray-500 uppercase tracking-widest block font-sans">Client Details</Label>
                        <div className="space-y-3 font-sans">
                            <Input placeholder="Client Name" className="font-semibold" value={recipient.name} onChange={(e) => setRecipient({...recipient, name: e.target.value})} />
                            <Textarea placeholder="Client Address / Info" className="text-sm min-h-[80px]" value={recipient.details} onChange={(e) => setRecipient({...recipient, details: e.target.value})} />
                        </div>
                    </div>

                    {/* Content */}
                    {mode === 'invoice' ? (
                        <div className="bg-white rounded-xl border p-6 shadow-sm space-y-4">
                            <div className="flex justify-between items-center mb-2">
                                <Label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Items</Label>
                                <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-blue-50 text-xs px-2 h-7" onClick={addItem}>
                                    <Plus className="w-3 h-3 mr-1" /> Add Row
                                </Button>
                            </div>
                            <div className="space-y-3">
                                {items.map((item) => (
                                    <div key={item.id} className="space-y-2 border-b pb-3 last:border-0">
                                        <div className="flex gap-2">
                                            <Input placeholder="Description" value={item.description} onChange={(e) => updateItem(item.id, 'description', e.target.value)} className="h-8 text-sm" />
                                            <Button size="icon" variant="ghost" onClick={() => removeItem(item.id)} className="h-8 w-8 text-gray-300 hover:text-red-500">
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="w-1/3">
                                                <Label className="text-[10px] text-gray-400 uppercase ml-1">Qty</Label>
                                                <Input type="number" value={item.quantity} onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value))} className="h-8 text-xs text-center" />
                                            </div>
                                            <div className="flex-1">
                                                <Label className="text-[10px] text-gray-400 uppercase ml-1">Price</Label>
                                                <Input type="number" value={item.price} onChange={(e) => updateItem(item.id, 'price', parseFloat(e.target.value))} className="h-8 text-xs text-right" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t">
                                <Input value={meta.currency} onChange={(e) => setMeta({...meta, currency: e.target.value})} className="h-8 uppercase text-center font-bold text-xs" />
                                <div className="text-right">
                                    <p className="text-[10px] text-gray-400 uppercase">Subtotal</p>
                                    <p className="font-bold text-gray-900">{meta.currency} {subtotal.toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl border p-6 shadow-sm space-y-4 font-sans">
                            <Label className="text-xs font-bold text-gray-500 uppercase tracking-widest block font-sans">Letter Content</Label>
                            <Input placeholder="Subject" value={meta.subject} onChange={(e) => setMeta({...meta, subject: e.target.value})} className="font-semibold text-sm h-10" />
                            <Textarea placeholder="Message..." className="text-sm min-h-[200px]" value={meta.letterBody} onChange={(e) => setMeta({...meta, letterBody: e.target.value})} />
                        </div>
                    )}

                    {/* Meta */}
                    <div className="bg-white rounded-xl border p-6 shadow-sm space-y-4">
                        <Label className="text-xs font-bold text-gray-500 uppercase tracking-widest block font-sans">Document Meta</Label>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <Label className="text-[10px] text-gray-400 uppercase ml-1">Ref ID</Label>
                                <Input value={meta.number} onChange={(e) => setMeta({...meta, number: e.target.value})} className="h-9 text-xs" />
                            </div>
                            <div>
                                <Label className="text-[10px] text-gray-400 uppercase ml-1">Date</Label>
                                <Input type="date" value={meta.date} onChange={(e) => setMeta({...meta, date: e.target.value})} className="h-9 text-xs" />
                            </div>
                        </div>
                        <div>
                            <Label className="text-[10px] text-gray-400 uppercase ml-1 block mt-2">Footer Notes</Label>
                            <Textarea value={meta.notes} onChange={(e) => setMeta({...meta, notes: e.target.value})} className="text-xs italic min-h-[60px]" />
                        </div>
                    </div>
                </div>

                {/* Printable Canvas */}
                <div className="flex-1 flex justify-center">
                    <div id="printable-area" className="w-full max-w-[210mm] bg-white aspect-[1/1.414] shadow-xl border border-gray-100 overflow-hidden print:shadow-none print:border-none print:m-0">
                        <div className="h-full flex flex-col p-12 md:p-16 relative font-sans text-gray-900">
                            
                            {/* Company Header */}
                            <div className="flex justify-between items-start mb-12 border-b-2 border-gray-100 pb-8">
                                <div className="space-y-4">
                                    <div className="h-14 w-auto relative">
                                        {profile.logoUrl && <img src={profile.logoUrl} alt="Logo" className="h-full object-contain" />}
                                    </div>
                                    <div className="space-y-0.5">
                                        <h2 className="text-lg font-bold text-gray-900 uppercase tracking-tight">{profile.name}</h2>
                                        <div className="text-[11px] text-gray-500 space-y-0.5 max-w-[250px] leading-tight font-medium">
                                            <p className="flex items-center gap-1.5"><MapPin className="w-2.5 h-2.5" /> {profile.address}</p>
                                            <p className="flex items-center gap-1.5"><Phone className="w-2.5 h-2.5" /> {profile.phone}</p>
                                            <p className="flex items-center gap-1.5"><Globe className="w-2.5 h-2.5" /> {profile.website}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right space-y-1">
                                    <h1 className="text-3xl font-black text-gray-100 uppercase tracking-[0.2em] leading-none mb-4">{mode}</h1>
                                    <div className="text-xs space-y-0.5 pt-2">
                                        <p className="font-bold text-gray-400 text-[10px] uppercase">Reference ID</p>
                                        <p className="font-bold text-gray-900 text-sm">#{meta.number}</p>
                                        <p className="font-bold text-gray-400 text-[10px] uppercase mt-4 block">Document Date</p>
                                        <p className="font-bold text-gray-900">{new Date(meta.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Recipient */}
                            <div className="mb-12">
                                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2">Recipient Info</p>
                                <div className="bg-gray-50 border-l-2 border-gray-200 p-6 rounded-r-lg">
                                    <p className="font-bold text-lg text-gray-900">{recipient.name || 'CLIENT NAME'}</p>
                                    <pre className="text-xs font-semibold text-gray-500 leading-relaxed font-sans mt-2">
                                        {recipient.details || 'Recipient details not specified.'}
                                    </pre>
                                </div>
                            </div>

                            {/* Main Table or Body */}
                            {mode === 'invoice' ? (
                                <div className="flex-1">
                                    <div className="border rounded-lg overflow-hidden mb-10 shadow-sm border-gray-100">
                                        <table className="w-full text-left">
                                            <thead className="bg-gray-50/50 border-b border-gray-100">
                                                <tr>
                                                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Description</th>
                                                    <th className="px-6 py-4 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest w-24">QTY</th>
                                                    <th className="px-6 py-4 text-right text-[10px] font-bold text-gray-400 uppercase tracking-widest w-40">Amount ({meta.currency})</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50 text-xs">
                                                {items.map((item) => (
                                                    <tr key={item.id}>
                                                        <td className="px-6 py-5 font-bold text-gray-900 uppercase">{item.description || 'SERVICE DESCRIPTION'}</td>
                                                        <td className="px-6 py-5 text-center font-bold text-gray-500">{item.quantity}</td>
                                                        <td className="px-6 py-5 text-right font-bold text-gray-900">{(item.quantity * item.price).toFixed(2)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div className="bg-gray-50/50 border-t border-gray-100 p-6 flex flex-col items-end space-y-2">
                                            <div className="flex justify-between w-48 text-[10px] font-bold text-gray-400 uppercase">
                                                <span>Subtotal</span>
                                                <span className="text-gray-900">{subtotal.toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between w-48 pt-4 items-center">
                                                <span className="text-xs font-bold text-gray-900 uppercase">Total Payable</span>
                                                <span className="text-2xl font-black text-gray-900 underline decoration-blue-500 underline-offset-8">
                                                    {total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex-1 space-y-6">
                                    <h3 className="font-bold text-gray-900 uppercase text-sm border-b pb-2 inline-block">Sub: {meta.subject}</h3>
                                    <p className="text-sm font-semibold text-gray-700 leading-relaxed whitespace-pre-wrap">
                                        {meta.letterBody}
                                    </p>
                                </div>
                            )}

                            {/* Footer */}
                            <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-end gap-12">
                                <div className="max-w-md">
                                    <p className="text-[9px] font-bold text-gray-300 uppercase mb-2 tracking-widest">Important Notes</p>
                                    <p className="text-[10px] font-semibold text-gray-500 italic leading-relaxed whitespace-pre-wrap opacity-80">
                                        {meta.notes}
                                    </p>
                                </div>
                                <div className="text-center min-w-[150px]">
                                    <div className="border-b-2 border-gray-200 h-12 flex items-end justify-center px-4 mb-2">
                                        <span className="text-gray-200 font-serif italic text-xl opacity-30 select-none">{profile.name}</span>
                                    </div>
                                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Official Signature</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <style jsx global>{`
                @media print {
                    @page { margin: 0; size: auto; }
                    body { background: white !important; margin: 0 !important; }
                    main { margin: 0 !important; padding: 0 !important; }
                    .md\\:ml-64, header, nav, aside, .print\\:hidden { display: none !important; }
                    #printable-area {
                        width: 210mm !important;
                        height: 297mm !important;
                        box-shadow: none !important;
                        border: none !important;
                        margin: 0 !important;
                        position: static !important;
                    }
                }
            `}</style>
        </div>
    );
}
