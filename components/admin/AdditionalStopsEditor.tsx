'use client';

import { useState } from 'react';
import { Plus, X, MapPinned } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ZIYARAT_SITE_PRESETS } from '@/data/ziyaratSites';

export interface AdditionalStop {
    time?: string | null;
    location: string;
}

interface AdditionalStopsEditorProps {
    stops: AdditionalStop[];
    onChange: (stops: AdditionalStop[]) => void;
}

/**
 * Repeatable editor for named waypoints within a single trip — e.g.
 * Ziyarat sites (Masjid Quba, Al-Hada Cable Car) or any other
 * intermediate stop. Distinct from ItineraryLegsEditor, which is for
 * separate date+time+pickup+dropoff transport legs on multi-day trips.
 * Used by both the admin create and edit booking forms.
 */
export default function AdditionalStopsEditor({ stops, onChange }: AdditionalStopsEditorProps) {
    const [presetCity, setPresetCity] = useState(ZIYARAT_SITE_PRESETS[0].city);

    const addStop = (location = '') => {
        onChange([...stops, { time: '', location }]);
    };

    const updateStop = (index: number, field: keyof AdditionalStop, value: string) => {
        onChange(stops.map((stop, i) => (i === index ? { ...stop, [field]: value } : stop)));
    };

    const removeStop = (index: number) => {
        onChange(stops.filter((_, i) => i !== index));
    };

    const activePreset = ZIYARAT_SITE_PRESETS.find(p => p.city === presetCity) || ZIYARAT_SITE_PRESETS[0];

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
                    <MapPinned className="w-3.5 h-3.5" /> Additional Stops / Ziyarat Sites (optional)
                </label>
                <Button type="button" variant="outline" size="sm" onClick={() => addStop()} className="h-7 text-xs">
                    <Plus className="w-3.5 h-3.5 mr-1" /> Add Stop
                </Button>
            </div>
            <p className="text-[11px] text-gray-400 -mt-2">
                Named waypoints within this trip (e.g. Ziyarat sites) — shown on the quote and invoice.
            </p>

            <div className="flex items-center gap-2 flex-wrap bg-gray-50 border border-dashed border-gray-200 rounded-lg p-2">
                <span className="text-[11px] font-bold text-gray-500 shrink-0">Quick add:</span>
                <Select value={presetCity} onValueChange={setPresetCity}>
                    <SelectTrigger className="h-7 text-xs w-28 bg-white"><SelectValue /></SelectTrigger>
                    <SelectContent>
                        {ZIYARAT_SITE_PRESETS.map(p => <SelectItem key={p.city} value={p.city}>{p.city}</SelectItem>)}
                    </SelectContent>
                </Select>
                <div className="flex flex-wrap gap-1.5">
                    {activePreset.sites.map(site => (
                        <button
                            key={site}
                            type="button"
                            onClick={() => addStop(site)}
                            className="text-[11px] bg-white border border-gray-200 hover:border-primary hover:text-primary rounded-full px-2.5 py-1 transition-colors"
                        >
                            + {site}
                        </button>
                    ))}
                </div>
            </div>

            {stops.length > 0 && (
                <div className="space-y-2">
                    {stops.map((stop, i) => (
                        <div key={i} className="grid grid-cols-1 sm:grid-cols-[90px_1fr_auto] gap-2 items-center bg-gray-50 border border-gray-200 rounded-lg p-2">
                            <Input
                                type="time"
                                value={stop.time || ''}
                                onChange={(e) => updateStop(i, 'time', e.target.value)}
                                className="h-8 text-xs bg-white"
                            />
                            <Input
                                placeholder="Site / stop name"
                                value={stop.location}
                                onChange={(e) => updateStop(i, 'location', e.target.value)}
                                className="h-8 text-xs bg-white"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeStop(i)}
                                className="h-8 w-8 text-red-500 hover:bg-red-50 hover:text-red-600 justify-self-end"
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
