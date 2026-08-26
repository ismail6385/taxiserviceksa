'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { adminFetch } from '@/lib/admin-fetch';
import { Loader2, Plus, Copy, CheckCircle2, Search, UserCog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ONBOARDING_STATUS_LABELS, firstVehicle, type OnboardingStatus } from '@/lib/driver-constants';

interface DriverRow {
    id: string;
    full_name: string | null;
    display_name: string | null;
    phone_number: string | null;
    onboarding_status: OnboardingStatus;
    created_at: string;
    driver_vehicles?: any;
    driver_locations?: { location_slug: string }[];
}

const STATUS_STYLES: Record<OnboardingStatus, string> = {
    DRAFT: 'bg-gray-100 text-gray-600 border-gray-300',
    PENDING_REVIEW: 'bg-amber-50 text-amber-700 border-amber-300',
    CHANGES_REQUESTED: 'bg-orange-50 text-orange-700 border-orange-300',
    APPROVED: 'bg-green-50 text-green-700 border-green-300',
    REJECTED: 'bg-red-50 text-red-700 border-red-300',
    SUSPENDED: 'bg-neutral-800 text-white border-neutral-700',
};

const TABS: (OnboardingStatus | 'ALL')[] = ['ALL', 'PENDING_REVIEW', 'CHANGES_REQUESTED', 'APPROVED', 'REJECTED', 'SUSPENDED', 'DRAFT'];

export default function DriverManagementPage() {
    const router = useRouter();
    const [rows, setRows] = useState<DriverRow[]>([]);
    const [loading, setLoading] = useState(true);
    const [dbReady, setDbReady] = useState(true);
    const [tab, setTab] = useState<OnboardingStatus | 'ALL'>('ALL');
    const [search, setSearch] = useState('');
    const [creating, setCreating] = useState(false);
    const [newLink, setNewLink] = useState<{ url: string } | null>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) { router.push('/admin/login'); return; }
            fetchDrivers();
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router]);

    const fetchDrivers = async () => {
        setLoading(true);
        const res = await adminFetch('/api/admin/driver-management');
        if (res.ok) {
            setRows(await res.json());
            setDbReady(true);
        } else {
            setDbReady(false);
        }
        setLoading(false);
    };

    const handleCreateLink = async () => {
        setCreating(true);
        setNewLink(null);
        const res = await adminFetch('/api/admin/driver-management', { method: 'POST' });
        if (res.ok) {
            const data = await res.json();
            setNewLink({ url: data.url });
            fetchDrivers();
        }
        setCreating(false);
    };

    const copyLink = () => {
        if (!newLink) return;
        navigator.clipboard.writeText(newLink.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const filtered = rows.filter(r => {
        if (tab !== 'ALL' && r.onboarding_status !== tab) return false;
        if (search) {
            const term = search.toLowerCase();
            const name = (r.display_name || r.full_name || '').toLowerCase();
            const phone = (r.phone_number || '').toLowerCase();
            if (!name.includes(term) && !phone.includes(term)) return false;
        }
        return true;
    });

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2"><UserCog className="w-6 h-6 text-primary" /> Driver Onboarding</h1>
                    <p className="text-gray-500 text-sm mt-1">Review and approve driver + vehicle profiles for public listing.</p>
                </div>
                <Button onClick={handleCreateLink} disabled={creating || !dbReady} className="bg-primary text-black hover:bg-primary/90 font-bold">
                    {creating ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
                    New Onboarding Link
                </Button>
            </div>

            {!dbReady && (
                <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-6">
                    <p className="font-bold text-amber-800 mb-1">⚠️ Database Setup Required</p>
                    <p className="text-sm text-amber-700">
                        Run <code className="bg-amber-100 px-1.5 py-0.5 rounded">add_driver_onboarding_system.sql</code> (in the project root) in the Supabase SQL Editor, then reload this page.
                    </p>
                </div>
            )}

            {newLink && (
                <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 mb-6 flex items-center justify-between gap-4 flex-wrap">
                    <div>
                        <p className="text-sm font-bold text-gray-900">Onboarding link created — send this to the driver:</p>
                        <p className="text-sm text-gray-600 break-all">{newLink.url}</p>
                    </div>
                    <Button size="sm" variant="outline" onClick={copyLink}>
                        {copied ? <CheckCircle2 className="w-4 h-4 mr-1.5 text-green-600" /> : <Copy className="w-4 h-4 mr-1.5" />}
                        {copied ? 'Copied' : 'Copy Link'}
                    </Button>
                </div>
            )}

            <div className="flex gap-2 border-b border-gray-200 pb-px mb-6 overflow-x-auto whitespace-nowrap bg-white p-2 rounded-xl shadow-sm border">
                {TABS.map(t => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`pb-2.5 pt-1 px-4 text-xs font-bold transition-all border-b-2 rounded-t-lg ${tab === t ? 'border-primary text-black bg-primary/5' : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
                    >
                        {t === 'ALL' ? 'All' : ONBOARDING_STATUS_LABELS[t]}
                        <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] ${tab === t ? 'bg-primary text-black font-extrabold' : 'bg-gray-100 text-gray-600'}`}>
                            {t === 'ALL' ? rows.length : rows.filter(r => r.onboarding_status === t).length}
                        </span>
                    </button>
                ))}
            </div>

            <div className="relative mb-4 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search name or phone..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9" />
            </div>

            {loading ? (
                <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-gray-400" /></div>
            ) : filtered.length === 0 ? (
                <div className="text-center py-20 text-gray-500">No drivers in this view.</div>
            ) : (
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase font-bold">
                            <tr>
                                <th className="text-left px-4 py-3">Driver</th>
                                <th className="text-left px-4 py-3">Vehicle</th>
                                <th className="text-left px-4 py-3">Areas</th>
                                <th className="text-left px-4 py-3">Status</th>
                                <th className="text-left px-4 py-3">Submitted</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filtered.map(r => {
                                const vehicle = firstVehicle(r);
                                return (
                                    <tr key={r.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => router.push(`/admin/driver-management/${r.id}`)}>
                                        <td className="px-4 py-3">
                                            <p className="font-semibold text-gray-900">{r.display_name || r.full_name || 'Untitled Driver'}</p>
                                            <p className="text-xs text-gray-500">{r.phone_number || '—'}</p>
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">
                                            {vehicle ? `${vehicle.make || ''} ${vehicle.model || ''}`.trim() || vehicle.category : '—'}
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">
                                            {(r.driver_locations || []).length || '—'}
                                        </td>
                                        <td className="px-4 py-3">
                                            <Badge className={`border text-[11px] ${STATUS_STYLES[r.onboarding_status]}`}>{ONBOARDING_STATUS_LABELS[r.onboarding_status]}</Badge>
                                        </td>
                                        <td className="px-4 py-3 text-gray-500 text-xs">{new Date(r.created_at).toLocaleDateString()}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
