'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { adminFetch } from '@/lib/admin-fetch';
import {
    Loader2, ArrowLeft, CheckCircle2, XCircle, MessageSquareWarning, Ban,
    Users, Briefcase, FileText, ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { driverLocationName, driverServiceLabel, VEHICLE_PHOTO_SLOTS, DOCUMENT_TYPES, ONBOARDING_STATUS_LABELS, type OnboardingStatus } from '@/lib/driver-constants';

const STATUS_STYLES: Record<OnboardingStatus, string> = {
    DRAFT: 'bg-gray-100 text-gray-600 border-gray-300',
    PENDING_REVIEW: 'bg-amber-50 text-amber-700 border-amber-300',
    CHANGES_REQUESTED: 'bg-orange-50 text-orange-700 border-orange-300',
    APPROVED: 'bg-green-50 text-green-700 border-green-300',
    REJECTED: 'bg-red-50 text-red-700 border-red-300',
    SUSPENDED: 'bg-neutral-800 text-white border-neutral-700',
};

export default function DriverDetailPage() {
    const params = useParams<{ id: string }>();
    const router = useRouter();
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [notes, setNotes] = useState('');
    const [savingNotes, setSavingNotes] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [reason, setReason] = useState('');
    const [actionBusy, setActionBusy] = useState('');
    const [showChangesForm, setShowChangesForm] = useState(false);
    const [showRejectForm, setShowRejectForm] = useState(false);
    const [showSuspendForm, setShowSuspendForm] = useState(false);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) { router.push('/admin/login'); return; }
            fetchDetail();
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);

    const fetchDetail = async () => {
        setLoading(true);
        const res = await adminFetch(`/api/admin/driver-management/${params.id}`);
        if (res.ok) {
            const d = await res.json();
            setData(d);
            setNotes(d.driver.admin_notes || '');
        }
        setLoading(false);
    };

    const runAction = async (action: string, body: Record<string, unknown> = {}) => {
        setActionBusy(action);
        const res = await adminFetch(`/api/admin/driver-management/${params.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action, ...body }),
        });
        setActionBusy('');
        if (res.ok) {
            setShowChangesForm(false);
            setShowRejectForm(false);
            setShowSuspendForm(false);
            setFeedback('');
            setReason('');
            fetchDetail();
        } else {
            const d = await res.json();
            alert(d.error || 'Action failed');
        }
    };

    const saveNotes = async () => {
        setSavingNotes(true);
        await adminFetch(`/api/admin/driver-management/${params.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'save_notes', notes }),
        });
        setSavingNotes(false);
    };

    if (loading) return <div className="flex justify-center py-24"><Loader2 className="w-8 h-8 animate-spin text-gray-400" /></div>;
    if (!data) return <div className="text-center py-24 text-gray-500">Driver not found.</div>;

    const { driver, vehicle, locations, services, documents } = data;
    const name = driver.display_name || driver.full_name || 'Untitled Driver';
    const status: OnboardingStatus = driver.onboarding_status;

    return (
        <div className="max-w-5xl">
            <button onClick={() => router.push('/admin/driver-management')} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-4">
                <ArrowLeft className="w-4 h-4" /> Back to Driver Onboarding
            </button>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
                    <div className="flex items-center gap-2 mt-1">
                        <Badge className={`border text-[11px] ${STATUS_STYLES[status]}`}>{ONBOARDING_STATUS_LABELS[status]}</Badge>
                        <span className="text-xs text-gray-400">Submitted {driver.submitted_at ? new Date(driver.submitted_at).toLocaleString() : '—'}</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {status !== 'APPROVED' && (
                        <Button size="sm" onClick={() => runAction('approve')} disabled={!!actionBusy} className="bg-green-600 text-white hover:bg-green-700">
                            {actionBusy === 'approve' ? <Loader2 className="w-4 h-4 animate-spin mr-1.5" /> : <CheckCircle2 className="w-4 h-4 mr-1.5" />} Approve
                        </Button>
                    )}
                    <Button size="sm" variant="outline" onClick={() => setShowChangesForm(v => !v)} disabled={!!actionBusy}>
                        <MessageSquareWarning className="w-4 h-4 mr-1.5" /> Request Changes
                    </Button>
                    {status !== 'REJECTED' && (
                        <Button size="sm" variant="outline" onClick={() => setShowRejectForm(v => !v)} disabled={!!actionBusy} className="text-red-600 border-red-200 hover:bg-red-50">
                            <XCircle className="w-4 h-4 mr-1.5" /> Reject
                        </Button>
                    )}
                    {status === 'APPROVED' && (
                        <Button size="sm" variant="outline" onClick={() => setShowSuspendForm(v => !v)} disabled={!!actionBusy} className="text-neutral-700 border-neutral-300 hover:bg-neutral-100">
                            <Ban className="w-4 h-4 mr-1.5" /> Suspend
                        </Button>
                    )}
                </div>
            </div>

            {showChangesForm && (
                <ActionForm
                    label="What needs to change?"
                    value={feedback}
                    onChange={setFeedback}
                    onSubmit={() => runAction('request_changes', { feedback })}
                    busy={actionBusy === 'request_changes'}
                    submitLabel="Send to Driver"
                />
            )}
            {showRejectForm && (
                <ActionForm
                    label="Rejection reason (optional, sent to driver)"
                    value={reason}
                    onChange={setReason}
                    onSubmit={() => runAction('reject', { reason })}
                    busy={actionBusy === 'reject'}
                    submitLabel="Confirm Reject"
                />
            )}
            {showSuspendForm && (
                <ActionForm
                    label="Suspension reason (optional, sent to driver)"
                    value={reason}
                    onChange={setReason}
                    onSubmit={() => runAction('suspend', { reason })}
                    busy={actionBusy === 'suspend'}
                    submitLabel="Confirm Suspend"
                />
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div className="lg:col-span-2 space-y-6">
                    <Card title="Driver Information">
                        <InfoRow label="Full Name" value={driver.full_name} />
                        <InfoRow label="Phone" value={driver.phone_number} />
                        <InfoRow label="WhatsApp" value={driver.whatsapp_number} />
                        <InfoRow label="Email" value={driver.email} />
                        <InfoRow label="Languages" value={(driver.languages || []).join(', ')} />
                        <InfoRow label="Experience" value={driver.years_experience != null ? `${driver.years_experience} years` : ''} />
                        <InfoRow label="Driver Type" value={driver.driver_type} />
                        <InfoRow label="Availability" value={driver.availability} />
                        {driver.bio && <InfoRow label="Bio" value={driver.bio} block />}
                        {driver.additional_notes && <InfoRow label="Additional Notes (from driver)" value={driver.additional_notes} block />}
                    </Card>

                    {vehicle && (
                        <Card title="Vehicle">
                            <div className="flex gap-6 text-sm mb-4">
                                <span className="flex items-center gap-1.5 text-gray-600"><Users className="w-4 h-4 text-primary" /> {vehicle.passenger_capacity ?? '—'} passengers</span>
                                <span className="flex items-center gap-1.5 text-gray-600"><Briefcase className="w-4 h-4 text-primary" /> {vehicle.luggage_capacity ?? '—'} luggage</span>
                            </div>
                            <InfoRow label="Make / Model" value={[vehicle.make, vehicle.model].filter(Boolean).join(' ')} />
                            <InfoRow label="Year" value={vehicle.year} />
                            <InfoRow label="Category" value={vehicle.category} />
                            <InfoRow label="Color" value={vehicle.color} />
                            <InfoRow label="Registration Info" value={vehicle.registration_info} />
                            {vehicle.notes && <InfoRow label="Vehicle Notes" value={vehicle.notes} block />}

                            <p className="text-xs font-bold uppercase text-gray-400 mt-4 mb-2">Vehicle Photos</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {VEHICLE_PHOTO_SLOTS.map(slot => {
                                    const url = vehicle.photos?.[slot.key]?.url;
                                    return (
                                        <div key={slot.key} className="space-y-1">
                                            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                                                {url ? <img src={url} alt={slot.label} className="w-full h-full object-cover" /> : (
                                                    <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400">Not uploaded</div>
                                                )}
                                            </div>
                                            <p className="text-[10px] text-gray-500 text-center">{slot.label}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </Card>
                    )}

                    <Card title="Service Areas">
                        {locations.length ? (
                            <div className="flex flex-wrap gap-1.5">
                                {locations.map((slug: string) => <Badge key={slug} variant="outline">{driverLocationName(slug)}</Badge>)}
                            </div>
                        ) : <p className="text-sm text-gray-400">None selected</p>}
                    </Card>

                    <Card title="Services">
                        {services.length ? (
                            <div className="flex flex-wrap gap-1.5">
                                {services.map((slug: string) => <Badge key={slug} variant="outline">{driverServiceLabel(slug)}</Badge>)}
                            </div>
                        ) : <p className="text-sm text-gray-400">None selected</p>}
                    </Card>

                    <Card title="Verification Documents (private — admin only)">
                        {documents.length ? (
                            <div className="space-y-2">
                                {documents.map((doc: any) => (
                                    <div key={doc.id} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 text-sm">
                                        <span className="flex items-center gap-2 text-gray-700">
                                            <FileText className="w-4 h-4 text-gray-400" />
                                            {DOCUMENT_TYPES.find(d => d.key === doc.doc_type)?.label || doc.doc_type}
                                        </span>
                                        {doc.signed_url ? (
                                            <a href={doc.signed_url} target="_blank" rel="noopener noreferrer" className="text-primary text-xs font-semibold flex items-center gap-1 hover:underline">
                                                View <ExternalLink className="w-3 h-3" />
                                            </a>
                                        ) : <span className="text-xs text-gray-400">Link unavailable</span>}
                                    </div>
                                ))}
                            </div>
                        ) : <p className="text-sm text-gray-400">No documents uploaded</p>}
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card title="Internal Notes (admin only)">
                        <Textarea value={notes} onChange={e => setNotes(e.target.value)} rows={6} placeholder="Notes visible only to admins..." />
                        <Button size="sm" onClick={saveNotes} disabled={savingNotes} className="mt-2 bg-gray-900 text-white hover:bg-gray-800">
                            {savingNotes ? <Loader2 className="w-4 h-4 animate-spin mr-1.5" /> : null} Save Notes
                        </Button>
                    </Card>

                    {driver.changes_requested_feedback && (
                        <Card title="Last Changes-Requested Feedback">
                            <p className="text-sm text-gray-600 whitespace-pre-wrap">{driver.changes_requested_feedback}</p>
                        </Card>
                    )}

                    {status === 'APPROVED' && driver.slug && (
                        <Card title="Public Profile">
                            <a href={`/drivers/${driver.slug}/`} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold flex items-center gap-1.5 hover:underline">
                                /drivers/{driver.slug}/ <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-sm font-bold text-gray-900 mb-3">{title}</h3>
            {children}
        </div>
    );
}

function InfoRow({ label, value, block }: { label: string; value?: string | number | null; block?: boolean }) {
    if (!value && value !== 0) return null;
    return block ? (
        <div className="py-1.5">
            <p className="text-xs font-bold uppercase text-gray-400">{label}</p>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{value}</p>
        </div>
    ) : (
        <div className="flex justify-between py-1.5 border-b border-gray-50 last:border-0 text-sm">
            <span className="text-gray-500">{label}</span>
            <span className="text-gray-900 font-medium">{value}</span>
        </div>
    );
}

function ActionForm({ label, value, onChange, onSubmit, busy, submitLabel }: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    onSubmit: () => void;
    busy: boolean;
    submitLabel: string;
}) {
    return (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <label className="text-xs font-bold uppercase text-gray-500">{label}</label>
            <Textarea value={value} onChange={e => onChange(e.target.value)} rows={3} className="mt-1.5 bg-white" />
            <Button size="sm" onClick={onSubmit} disabled={busy} className="mt-3 bg-gray-900 text-white hover:bg-gray-800">
                {busy ? <Loader2 className="w-4 h-4 animate-spin mr-1.5" /> : null} {submitLabel}
            </Button>
        </div>
    );
}
