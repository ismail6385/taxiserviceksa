'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Check, AlertCircle, ArrowLeft, ArrowRight, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PhotoUploadSlot from './PhotoUploadSlot';
import {
    VEHICLE_CATEGORIES, LANGUAGE_OPTIONS, DRIVER_TYPES, AVAILABILITY_OPTIONS,
    VEHICLE_PHOTO_SLOTS, DOCUMENT_TYPES, DRIVER_LOCATIONS, DRIVER_SERVICES,
} from '@/lib/driver-constants';

const STEP_LABELS = ['Driver', 'Vehicle', 'Photos', 'Areas', 'Services', 'Documents', 'Review'];

interface DriverInfoState {
    full_name: string;
    display_name: string;
    phone_number: string;
    whatsapp_number: string;
    email: string;
    languages: string[];
    years_experience: string;
    driver_type: string;
    availability: string;
    bio: string;
    additional_notes: string;
    profile_photo_url: string;
}

interface VehicleState {
    make: string;
    model: string;
    year: string;
    category: string;
    color: string;
    passenger_capacity: string;
    luggage_capacity: string;
    registration_info: string;
    notes: string;
    photos: Record<string, { url: string; uploaded_at: string } | undefined>;
}

const EMPTY_DRIVER_INFO: DriverInfoState = {
    full_name: '', display_name: '', phone_number: '', whatsapp_number: '', email: '',
    languages: [], years_experience: '', driver_type: '', availability: '', bio: '',
    additional_notes: '', profile_photo_url: '',
};

const EMPTY_VEHICLE: VehicleState = {
    make: '', model: '', year: '', category: '', color: '',
    passenger_capacity: '', luggage_capacity: '', registration_info: '', notes: '', photos: {},
};

export default function OnboardingWizard({ token }: { token: string }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState('');
    const [locked, setLocked] = useState<{ status: string } | null>(null);

    const [step, setStep] = useState(1);
    const [driverInfo, setDriverInfo] = useState<DriverInfoState>(EMPTY_DRIVER_INFO);
    const [vehicle, setVehicle] = useState<VehicleState>(EMPTY_VEHICLE);
    const [locations, setLocations] = useState<string[]>([]);
    const [services, setServices] = useState<string[]>([]);
    const [documentsUploaded, setDocumentsUploaded] = useState<Record<string, boolean>>({});
    const [changesFeedback, setChangesFeedback] = useState('');

    const [saving, setSaving] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const [submitError, setSubmitError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`/api/driver-onboarding/${token}`);
                if (res.status === 404) { setLoadError('This onboarding link is invalid.'); return; }
                if (res.status === 410) { setLoadError('This onboarding link has expired. Please contact us for a new link.'); return; }
                if (!res.ok) { setLoadError('Something went wrong loading your profile.'); return; }

                const data = await res.json();
                if (data.locked) {
                    setLocked({ status: data.driver?.onboarding_status || 'PENDING_REVIEW' });
                    return;
                }

                const d = data.driver || {};
                setDriverInfo({
                    full_name: d.full_name || '', display_name: d.display_name || '',
                    phone_number: d.phone_number || '', whatsapp_number: d.whatsapp_number || '',
                    email: d.email || '', languages: d.languages || [],
                    years_experience: d.years_experience != null ? String(d.years_experience) : '',
                    driver_type: d.driver_type || '', availability: d.availability || '',
                    bio: d.bio || '', additional_notes: d.additional_notes || '',
                    profile_photo_url: d.profile_photo_url || '',
                });
                setChangesFeedback(d.changes_requested_feedback || '');
                if (data.vehicle) {
                    const v = data.vehicle;
                    setVehicle({
                        make: v.make || '', model: v.model || '', year: v.year != null ? String(v.year) : '',
                        category: v.category || '', color: v.color || '',
                        passenger_capacity: v.passenger_capacity != null ? String(v.passenger_capacity) : '',
                        luggage_capacity: v.luggage_capacity != null ? String(v.luggage_capacity) : '',
                        registration_info: v.registration_info || '', notes: v.notes || '',
                        photos: v.photos || {},
                    });
                }
                setLocations(data.locations || []);
                setServices(data.services || []);
            } catch {
                setLoadError('Could not connect. Please check your internet connection and try again.');
            } finally {
                setLoading(false);
            }
        })();
    }, [token]);

    const saveDraft = async (patch: Record<string, unknown>) => {
        setSaving(true);
        try {
            await fetch(`/api/driver-onboarding/${token}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(patch),
            });
        } finally {
            setSaving(false);
        }
    };

    const goNext = async () => {
        setFieldErrors({});
        if (step === 1) {
            if (!driverInfo.full_name.trim() || !driverInfo.display_name.trim() || !driverInfo.phone_number.trim() || driverInfo.languages.length === 0) {
                setFieldErrors({ form: 'Please fill in your name, display name, phone number and at least one language.' });
                return;
            }
            await saveDraft({
                driverInfo: {
                    ...driverInfo,
                    years_experience: driverInfo.years_experience ? Number(driverInfo.years_experience) : null,
                },
            });
        } else if (step === 2) {
            if (!vehicle.make.trim() || !vehicle.model.trim() || !vehicle.year || !vehicle.category || !vehicle.color.trim() || !vehicle.passenger_capacity || !vehicle.luggage_capacity) {
                setFieldErrors({ form: 'Please complete all required vehicle fields.' });
                return;
            }
            await saveDraft({
                vehicle: {
                    make: vehicle.make, model: vehicle.model, year: Number(vehicle.year),
                    category: vehicle.category, color: vehicle.color,
                    passenger_capacity: Number(vehicle.passenger_capacity),
                    luggage_capacity: Number(vehicle.luggage_capacity),
                    registration_info: vehicle.registration_info, notes: vehicle.notes,
                },
            });
        } else if (step === 3) {
            const missing = VEHICLE_PHOTO_SLOTS.filter(s => s.required && !vehicle.photos[s.key]?.url);
            if (missing.length) {
                setFieldErrors({ form: `Please upload all required photos: ${missing.map(m => m.label).join(', ')}` });
                return;
            }
        } else if (step === 4) {
            if (locations.length === 0) {
                setFieldErrors({ form: 'Select at least one service area.' });
                return;
            }
            await saveDraft({ locations });
        } else if (step === 5) {
            if (services.length === 0) {
                setFieldErrors({ form: 'Select at least one service.' });
                return;
            }
            await saveDraft({ services });
        }
        setStep(s => Math.min(s + 1, 7));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goBack = () => {
        setStep(s => Math.max(s - 1, 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const uploadVehiclePhoto = async (slot: string, file: File) => {
        const form = new FormData();
        form.append('slot', slot);
        form.append('file', file);
        const res = await fetch(`/api/driver-onboarding/${token}/photo`, { method: 'POST', body: form });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Upload failed');
        setVehicle(prev => ({ ...prev, photos: { ...prev.photos, [slot]: { url: data.url, uploaded_at: new Date().toISOString() } } }));
    };

    const uploadProfilePhoto = async (file: File) => {
        const form = new FormData();
        form.append('file', file);
        const res = await fetch(`/api/driver-onboarding/${token}/profile-photo`, { method: 'POST', body: form });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Upload failed');
        setDriverInfo(prev => ({ ...prev, profile_photo_url: data.url }));
    };

    const uploadDocument = async (docType: string, file: File) => {
        const form = new FormData();
        form.append('docType', docType);
        form.append('file', file);
        const res = await fetch(`/api/driver-onboarding/${token}/document`, { method: 'POST', body: form });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Upload failed');
        setDocumentsUploaded(prev => ({ ...prev, [docType]: true }));
    };

    const handleSubmit = async () => {
        setSaving(true);
        setSubmitError('');
        try {
            const res = await fetch(`/api/driver-onboarding/${token}`, { method: 'POST' });
            const data = await res.json();
            if (!res.ok) {
                setSubmitError(data.error || 'Submission failed.');
                if (data.fieldErrors) setFieldErrors(data.fieldErrors);
                return;
            }
            setSubmitted(true);
        } catch {
            setSubmitError('Could not connect. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <div className="flex justify-center py-32"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;
    }

    if (loadError) {
        return (
            <div className="max-w-md mx-auto text-center py-24 px-4">
                <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">{loadError}</p>
            </div>
        );
    }

    if (locked) {
        const messages: Record<string, string> = {
            PENDING_REVIEW: 'Your profile has been submitted and is currently under review. We\'ll email you once it\'s been reviewed.',
            APPROVED: 'Your profile has already been approved and is live.',
            REJECTED: 'This application was not approved. Please contact us if you have questions.',
            SUSPENDED: 'This profile is currently suspended. Please contact us for details.',
        };
        return (
            <div className="max-w-md mx-auto text-center py-24 px-4">
                <PartyPopper className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">{messages[locked.status] || 'This profile can no longer be edited here.'}</p>
            </div>
        );
    }

    if (submitted) {
        return (
            <div className="max-w-md mx-auto text-center py-24 px-4">
                <PartyPopper className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Submitted!</h2>
                <p className="text-gray-600">Thank you. Our team will review your profile and get back to you soon.</p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-10 sm:py-16">
            {changesFeedback && (
                <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-6 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                        <p className="font-bold text-amber-800">Changes Requested</p>
                        <p className="text-sm text-amber-700 whitespace-pre-wrap">{changesFeedback}</p>
                    </div>
                </div>
            )}

            {/* Step indicator */}
            <div className="mb-10 overflow-x-auto">
                <div className="flex items-center gap-1 min-w-max px-1">
                    {STEP_LABELS.map((label, idx) => {
                        const s = idx + 1;
                        return (
                            <div key={s} className="flex items-center">
                                <div className={`flex flex-col items-center gap-1.5 ${step >= s ? 'text-primary' : 'text-gray-300'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 text-xs transition-all ${step > s ? 'bg-primary text-black border-primary' : step === s ? 'bg-white text-primary border-primary ring-4 ring-primary/10' : 'bg-white text-gray-300 border-gray-200'}`}>
                                        {step > s ? <Check className="w-4 h-4" /> : s}
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wide hidden sm:block">{label}</span>
                                </div>
                                {s < STEP_LABELS.length && <div className={`w-6 sm:w-10 h-0.5 mx-1 ${step > s ? 'bg-primary' : 'bg-gray-200'}`} />}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-5 sm:p-8">
                {fieldErrors.form && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-6">{fieldErrors.form}</div>
                )}

                {step === 1 && (
                    <DriverInfoStep value={driverInfo} onChange={setDriverInfo} onUploadPhoto={uploadProfilePhoto} />
                )}
                {step === 2 && (
                    <VehicleInfoStep value={vehicle} onChange={setVehicle} />
                )}
                {step === 3 && (
                    <VehiclePhotosStep photos={vehicle.photos} onUpload={uploadVehiclePhoto} />
                )}
                {step === 4 && (
                    <ServiceAreasStep selected={locations} onChange={setLocations} />
                )}
                {step === 5 && (
                    <ServicesStep selected={services} onChange={setServices} />
                )}
                {step === 6 && (
                    <DocumentsStep uploaded={documentsUploaded} onUpload={uploadDocument} />
                )}
                {step === 7 && (
                    <ReviewStep driverInfo={driverInfo} vehicle={vehicle} locations={locations} services={services} documentsUploaded={documentsUploaded} />
                )}

                {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mt-6">{submitError}</div>
                )}

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                    <Button variant="ghost" onClick={goBack} disabled={step === 1 || saving} className="text-gray-500">
                        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back
                    </Button>
                    {step < 7 ? (
                        <Button onClick={goNext} disabled={saving} className="bg-primary text-black hover:bg-primary/90 font-bold">
                            {saving ? <Loader2 className="w-4 h-4 animate-spin mr-1.5" /> : null} Continue <ArrowRight className="w-4 h-4 ml-1.5" />
                        </Button>
                    ) : (
                        <Button onClick={handleSubmit} disabled={saving} className="bg-primary text-black hover:bg-primary/90 font-bold">
                            {saving ? <Loader2 className="w-4 h-4 animate-spin mr-1.5" /> : null} Submit for Review
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Step 1 — Driver Information
// ---------------------------------------------------------------------------
function DriverInfoStep({ value, onChange, onUploadPhoto }: {
    value: DriverInfoState;
    onChange: (v: DriverInfoState) => void;
    onUploadPhoto: (file: File) => Promise<void>;
}) {
    const set = (patch: Partial<DriverInfoState>) => onChange({ ...value, ...patch });
    const toggleLanguage = (lang: string) => {
        set({ languages: value.languages.includes(lang) ? value.languages.filter(l => l !== lang) : [...value.languages, lang] });
    };

    return (
        <div className="space-y-5">
            <h2 className="text-xl font-bold text-gray-900">Driver Information</h2>

            <PhotoUploadSlot label="Profile Photo" required={false} currentUrl={value.profile_photo_url} onUpload={onUploadPhoto} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Full Name" required>
                    <Input value={value.full_name} onChange={e => set({ full_name: e.target.value })} placeholder="As on your ID" />
                </Field>
                <Field label="Display Name" required>
                    <Input value={value.display_name} onChange={e => set({ display_name: e.target.value })} placeholder="Shown to customers" />
                </Field>
                <Field label="Phone Number" required>
                    <Input value={value.phone_number} onChange={e => set({ phone_number: e.target.value })} placeholder="+966 5X XXX XXXX" />
                </Field>
                <Field label="WhatsApp Number">
                    <Input value={value.whatsapp_number} onChange={e => set({ whatsapp_number: e.target.value })} placeholder="+966 5X XXX XXXX" />
                </Field>
                <Field label="Email">
                    <Input type="email" value={value.email} onChange={e => set({ email: e.target.value })} placeholder="you@example.com" />
                </Field>
                <Field label="Years of Driving Experience">
                    <Input type="number" min={0} value={value.years_experience} onChange={e => set({ years_experience: e.target.value })} />
                </Field>
                <Field label="Driver Type">
                    <Select value={value.driver_type} onValueChange={v => set({ driver_type: v })}>
                        <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                        <SelectContent>{DRIVER_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                    </Select>
                </Field>
                <Field label="Availability">
                    <Select value={value.availability} onValueChange={v => set({ availability: v })}>
                        <SelectTrigger><SelectValue placeholder="Select availability" /></SelectTrigger>
                        <SelectContent>{AVAILABILITY_OPTIONS.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}</SelectContent>
                    </Select>
                </Field>
            </div>

            <Field label="Languages Spoken" required>
                <div className="flex flex-wrap gap-2">
                    {LANGUAGE_OPTIONS.map(lang => (
                        <button
                            key={lang}
                            type="button"
                            onClick={() => toggleLanguage(lang)}
                            className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition-colors ${value.languages.includes(lang) ? 'bg-primary text-black border-primary' : 'bg-white text-gray-600 border-gray-300 hover:border-primary/60'}`}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            </Field>

            <Field label="Short Biography">
                <Textarea value={value.bio} onChange={e => set({ bio: e.target.value })} placeholder="Tell customers a bit about yourself..." rows={4} />
            </Field>

            <Field label="Additional Notes">
                <Textarea value={value.additional_notes} onChange={e => set({ additional_notes: e.target.value })} placeholder="Anything else we should know?" rows={3} />
            </Field>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Step 2 — Vehicle Information
// ---------------------------------------------------------------------------
function VehicleInfoStep({ value, onChange }: { value: VehicleState; onChange: (v: VehicleState) => void }) {
    const set = (patch: Partial<VehicleState>) => onChange({ ...value, ...patch });
    return (
        <div className="space-y-5">
            <h2 className="text-xl font-bold text-gray-900">Vehicle Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Make" required><Input value={value.make} onChange={e => set({ make: e.target.value })} placeholder="e.g. Toyota" /></Field>
                <Field label="Model" required><Input value={value.model} onChange={e => set({ model: e.target.value })} placeholder="e.g. Camry" /></Field>
                <Field label="Year" required><Input type="number" value={value.year} onChange={e => set({ year: e.target.value })} placeholder="e.g. 2023" /></Field>
                <Field label="Category" required>
                    <Select value={value.category} onValueChange={v => set({ category: v })}>
                        <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                        <SelectContent>{VEHICLE_CATEGORIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                    </Select>
                </Field>
                <Field label="Color" required><Input value={value.color} onChange={e => set({ color: e.target.value })} placeholder="e.g. White" /></Field>
                <Field label="Passenger Capacity" required><Input type="number" min={1} value={value.passenger_capacity} onChange={e => set({ passenger_capacity: e.target.value })} /></Field>
                <Field label="Luggage Capacity" required><Input type="number" min={0} value={value.luggage_capacity} onChange={e => set({ luggage_capacity: e.target.value })} /></Field>
                <Field label="Registration / Verification Info"><Input value={value.registration_info} onChange={e => set({ registration_info: e.target.value })} placeholder="Plate number, etc." /></Field>
            </div>
            <Field label="Additional Vehicle Notes">
                <Textarea value={value.notes} onChange={e => set({ notes: e.target.value })} rows={3} />
            </Field>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Step 3 — Vehicle Photos
// ---------------------------------------------------------------------------
function VehiclePhotosStep({ photos, onUpload }: {
    photos: VehicleState['photos'];
    onUpload: (slot: string, file: File) => Promise<void>;
}) {
    return (
        <div className="space-y-5">
            <h2 className="text-xl font-bold text-gray-900">Vehicle Photos</h2>
            <p className="text-sm text-gray-500 -mt-3">Clear, well-lit photos help customers trust your listing. Required photos are marked with *.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {VEHICLE_PHOTO_SLOTS.map(slot => (
                    <PhotoUploadSlot
                        key={slot.key}
                        label={slot.label}
                        required={slot.required}
                        currentUrl={photos[slot.key]?.url}
                        onUpload={file => onUpload(slot.key, file)}
                    />
                ))}
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Step 4 — Service Areas
// ---------------------------------------------------------------------------
function ServiceAreasStep({ selected, onChange }: { selected: string[]; onChange: (v: string[]) => void }) {
    const toggle = (slug: string) => onChange(selected.includes(slug) ? selected.filter(s => s !== slug) : [...selected, slug]);
    return (
        <div className="space-y-5">
            <h2 className="text-xl font-bold text-gray-900">Service Areas</h2>
            <p className="text-sm text-gray-500 -mt-3">Select every city or area you&apos;re able to serve.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-96 overflow-y-auto pr-1">
                {DRIVER_LOCATIONS.map(loc => (
                    <label key={loc.slug} className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border cursor-pointer text-sm transition-colors ${selected.includes(loc.slug) ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                        <Checkbox checked={selected.includes(loc.slug)} onCheckedChange={() => toggle(loc.slug)} />
                        <span className="truncate">{loc.name}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Step 5 — Services
// ---------------------------------------------------------------------------
function ServicesStep({ selected, onChange }: { selected: string[]; onChange: (v: string[]) => void }) {
    const toggle = (slug: string) => onChange(selected.includes(slug) ? selected.filter(s => s !== slug) : [...selected, slug]);
    return (
        <div className="space-y-5">
            <h2 className="text-xl font-bold text-gray-900">Services Offered</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {DRIVER_SERVICES.map(svc => (
                    <label key={svc.slug} className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border cursor-pointer text-sm transition-colors ${selected.includes(svc.slug) ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                        <Checkbox checked={selected.includes(svc.slug)} onCheckedChange={() => toggle(svc.slug)} />
                        <span>{svc.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Step 6 — Documents
// ---------------------------------------------------------------------------
function DocumentsStep({ uploaded, onUpload }: {
    uploaded: Record<string, boolean>;
    onUpload: (docType: string, file: File) => Promise<void>;
}) {
    return (
        <div className="space-y-5">
            <h2 className="text-xl font-bold text-gray-900">Verification Documents</h2>
            <p className="text-sm text-gray-500 -mt-3">These are private and only visible to our admin team for verification — they are never shown publicly. Optional at this stage but may be requested before approval.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {DOCUMENT_TYPES.map(doc => (
                    <div key={doc.key} className="border border-gray-200 rounded-xl p-4 flex items-center justify-between gap-3">
                        <div>
                            <p className="font-semibold text-sm text-gray-800">{doc.label}</p>
                            {uploaded[doc.key] && <p className="text-xs text-primary font-semibold flex items-center gap-1 mt-1"><Check className="w-3.5 h-3.5" /> Uploaded</p>}
                        </div>
                        <DocumentUploadButton uploaded={!!uploaded[doc.key]} onUpload={file => onUpload(doc.key, file)} />
                    </div>
                ))}
            </div>
        </div>
    );
}

function DocumentUploadButton({ uploaded, onUpload }: { uploaded: boolean; onUpload: (file: File) => Promise<void> }) {
    const [busy, setBusy] = useState(false);
    return (
        <label className="shrink-0">
            <input
                type="file"
                accept="image/jpeg,image/png,image/webp,application/pdf"
                className="hidden"
                disabled={busy}
                onChange={async e => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    setBusy(true);
                    try { await onUpload(file); } finally { setBusy(false); e.target.value = ''; }
                }}
            />
            <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${uploaded ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-primary text-black hover:bg-primary/90'}`}>
                {busy ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : uploaded ? 'Replace' : 'Upload'}
            </span>
        </label>
    );
}

// ---------------------------------------------------------------------------
// Step 7 — Review
// ---------------------------------------------------------------------------
function ReviewStep({ driverInfo, vehicle, locations, services, documentsUploaded }: {
    driverInfo: DriverInfoState;
    vehicle: VehicleState;
    locations: string[];
    services: string[];
    documentsUploaded: Record<string, boolean>;
}) {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Review & Submit</h2>
            <ReviewSection title="Driver">
                <ReviewRow label="Name" value={driverInfo.display_name || driverInfo.full_name} />
                <ReviewRow label="Phone" value={driverInfo.phone_number} />
                <ReviewRow label="Languages" value={driverInfo.languages.join(', ')} />
            </ReviewSection>
            <ReviewSection title="Vehicle">
                <ReviewRow label="Vehicle" value={[vehicle.year, vehicle.make, vehicle.model].filter(Boolean).join(' ')} />
                <ReviewRow label="Category" value={vehicle.category} />
                <ReviewRow label="Capacity" value={`${vehicle.passenger_capacity || 0} passengers, ${vehicle.luggage_capacity || 0} luggage`} />
                <ReviewRow label="Photos Uploaded" value={`${Object.values(vehicle.photos).filter(Boolean).length} / ${VEHICLE_PHOTO_SLOTS.length}`} />
            </ReviewSection>
            <ReviewSection title="Service Areas">
                <p className="text-sm text-gray-700">{locations.length ? locations.map(l => DRIVER_LOCATIONS.find(d => d.slug === l)?.name || l).join(', ') : '—'}</p>
            </ReviewSection>
            <ReviewSection title="Services">
                <p className="text-sm text-gray-700">{services.length ? services.map(s => DRIVER_SERVICES.find(d => d.slug === s)?.label || s).join(', ') : '—'}</p>
            </ReviewSection>
            <ReviewSection title="Documents">
                <p className="text-sm text-gray-700">{DOCUMENT_TYPES.filter(d => documentsUploaded[d.key]).map(d => d.label).join(', ') || 'None uploaded'}</p>
            </ReviewSection>
            <p className="text-xs text-gray-500">By submitting, your profile will be sent for admin review. You&apos;ll be notified by email once it&apos;s approved or if changes are needed.</p>
        </div>
    );
}

function ReviewSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="border border-gray-100 rounded-xl p-4 bg-gray-50">
            <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">{title}</p>
            {children}
        </div>
    );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between text-sm py-0.5">
            <span className="text-gray-500">{label}</span>
            <span className="text-gray-900 font-medium text-right">{value || '—'}</span>
        </div>
    );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
    return (
        <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {children}
        </div>
    );
}
