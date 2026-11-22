'use client';

import { Plus, Trash2, CheckCircle2, Circle } from 'lucide-react';
import {
    VehicleOption, VehicleOptionTrip, TRIP_LABEL, newOptionId, formatOptionPrice,
} from '@/lib/vehicle-options';

const CURRENCIES = ['SAR', 'USD', 'AED', 'KWD', 'OMR', 'BHD', 'QAR'];

/** Edit mode: add / remove / change alternative vehicle quotes for one trip. */
export function VehicleOptionsEditor({ options, onChange, defaultCurrency = 'SAR', defaultTrip = 'one_way', vehicleSuggestions = [] }: {
    options: VehicleOption[];
    onChange: (next: VehicleOption[]) => void;
    defaultCurrency?: string;
    defaultTrip?: VehicleOptionTrip;
    vehicleSuggestions?: string[];
}) {
    const update = (id: string, patch: Partial<VehicleOption>) =>
        onChange(options.map(o => (o.id === id ? { ...o, ...patch } : o)));
    const add = () =>
        onChange([...options, { id: newOptionId(), vehicle: '', price: 0, currency: defaultCurrency || 'SAR', trip: defaultTrip, notes: null, selected: false }]);
    const remove = (id: string) => onChange(options.filter(o => o.id !== id));
    const listId = 'vehicle-option-suggestions';

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
                <div>
                    <p className="text-sm font-semibold text-gray-900">Vehicle Quotation Options</p>
                    <p className="text-[11px] text-gray-500">Alternative vehicles for the same trip. The customer picks one.</p>
                </div>
                <button type="button" onClick={add} className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-2.5 h-8 text-xs font-semibold text-gray-800 hover:border-gray-500 whitespace-nowrap">
                    <Plus className="w-3.5 h-3.5" /> Add Vehicle Option
                </button>
            </div>

            {vehicleSuggestions.length > 0 && (
                <datalist id={listId}>
                    {vehicleSuggestions.map(v => <option key={v} value={v} />)}
                </datalist>
            )}

            {options.map((o, i) => (
                <div key={o.id} className={`rounded-lg border p-3 bg-white space-y-2 ${o.selected ? 'border-emerald-400 ring-1 ring-emerald-200' : 'border-gray-200'}`}>
                    <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500">Option {i + 1}</span>
                        <div className="flex items-center gap-3">
                            <label className="flex items-center gap-1 text-[11px] font-semibold text-gray-700 cursor-pointer">
                                {/* Checkbox, not radio: clicking the selected option again
                                    clears it (customer has not chosen yet). Ticking one
                                    unticks the others, so at most one is selected. */}
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-emerald-600"
                                    checked={!!o.selected}
                                    onChange={() => onChange(options.map(x => ({ ...x, selected: o.selected ? false : x.id === o.id })))}
                                />
                                Selected
                            </label>
                            <button type="button" aria-label={`Remove option ${i + 1}`} onClick={() => remove(o.id)} className="text-gray-400 hover:text-red-600">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <input
                        value={o.vehicle}
                        list={vehicleSuggestions.length ? listId : undefined}
                        onChange={e => update(o.id, { vehicle: e.target.value })}
                        placeholder="Vehicle, e.g. Ford Taurus / Lexus Sedan"
                        className="w-full h-9 rounded-md border border-gray-300 px-2 text-sm"
                    />
                    <div className="grid grid-cols-2 sm:grid-cols-[1fr_90px_130px] gap-2">
                        <input
                            type="number"
                            min={0}
                            inputMode="decimal"
                            value={o.price || ''}
                            onChange={e => update(o.id, { price: e.target.value === '' ? 0 : Number(e.target.value) })}
                            placeholder="Price"
                            className="h-9 rounded-md border border-gray-300 px-2 text-sm font-bold"
                        />
                        <select value={o.currency} onChange={e => update(o.id, { currency: e.target.value })} className="h-9 rounded-md border border-gray-300 px-1 text-sm bg-white">
                            {(CURRENCIES.includes(o.currency) ? CURRENCIES : [o.currency, ...CURRENCIES]).map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <select value={o.trip} onChange={e => update(o.id, { trip: e.target.value as VehicleOptionTrip })} className="col-span-2 sm:col-span-1 h-9 rounded-md border border-gray-300 px-1 text-sm bg-white">
                            <option value="one_way">One Way</option>
                            <option value="round_trip">Round Trip</option>
                        </select>
                    </div>
                    <input
                        value={o.notes || ''}
                        onChange={e => update(o.id, { notes: e.target.value || null })}
                        placeholder="Notes (optional), e.g. 4 pax, 3 bags"
                        className="w-full h-8 rounded-md border border-gray-200 px-2 text-xs"
                    />
                </div>
            ))}

            {options.length === 1 && (
                <p className="text-[11px] text-amber-700">Add a second option to offer the customer a choice.</p>
            )}
            {options.some(o => o.selected) && (
                <p className="text-[11px] text-gray-500">The selected option becomes the booking&apos;s vehicle and price when you save.</p>
            )}
        </div>
    );
}

/** View mode: show the options; admin can mark which one the customer chose. */
export function VehicleOptionsView({ options, onSelect, busy }: {
    options: VehicleOption[];
    onSelect?: (id: string | null) => void;
    busy?: boolean;
}) {
    if (!options.length) return null;
    return (
        <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-900">Vehicle Quotation Options <span className="text-[11px] font-normal text-gray-500">(same trip, customer picks one)</span></p>
            <div className="divide-y divide-gray-100 rounded-lg border border-gray-200 bg-white overflow-hidden">
                {options.map((o, i) => (
                    <div key={o.id} className={`flex flex-wrap items-center gap-x-3 gap-y-1 p-3 ${o.selected ? 'bg-emerald-50' : ''}`}>
                        <span className="text-[11px] font-bold text-gray-400 w-5">{i + 1}.</span>
                        <div className="flex-1 min-w-[150px]">
                            <p className="text-sm font-semibold text-gray-900">{o.vehicle}</p>
                            <p className="text-[11px] text-gray-500">{TRIP_LABEL[o.trip]}{o.notes ? ` · ${o.notes}` : ''}</p>
                        </div>
                        <span className="text-sm font-bold text-gray-900 whitespace-nowrap">{formatOptionPrice(o)}</span>
                        {onSelect && (
                            o.selected ? (
                                <button type="button" disabled={busy} onClick={() => onSelect(null)} title="Click to unselect" className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 h-7 text-[11px] font-bold text-white disabled:opacity-50">
                                    <CheckCircle2 className="w-3.5 h-3.5" /> Selected
                                </button>
                            ) : (
                                <button type="button" disabled={busy} onClick={() => onSelect(o.id)} className="inline-flex items-center gap-1 rounded-full border border-gray-300 px-2.5 h-7 text-[11px] font-semibold text-gray-700 hover:border-emerald-500 hover:text-emerald-700 disabled:opacity-50">
                                    <Circle className="w-3.5 h-3.5" /> Mark Selected
                                </button>
                            )
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
