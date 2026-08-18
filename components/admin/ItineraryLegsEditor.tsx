'use client';

import { Plus, X, Route } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export interface ItineraryLeg {
    date: string;
    time: string;
    pickup: string;
    dropoff: string;
}

interface ItineraryLegsEditorProps {
    legs: ItineraryLeg[];
    onChange: (legs: ItineraryLeg[]) => void;
    minDate?: string;
}

/**
 * Repeatable editor for extra pickup/drop-off legs beyond the primary
 * pickup_location/destination and the single return leg — for multi-day or
 * multi-stop bookings (e.g. a retreat with several trips over several dates).
 * Used by both the admin create and edit booking forms.
 */
export default function ItineraryLegsEditor({ legs, onChange, minDate }: ItineraryLegsEditorProps) {
    const addLeg = () => {
        onChange([...legs, { date: minDate || '', time: '', pickup: '', dropoff: '' }]);
    };

    const updateLeg = (index: number, field: keyof ItineraryLeg, value: string) => {
        onChange(legs.map((leg, i) => (i === index ? { ...leg, [field]: value } : leg)));
    };

    const removeLeg = (index: number) => {
        onChange(legs.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
                    <Route className="w-3.5 h-3.5" /> Additional Itinerary Legs (optional)
                </label>
                <Button type="button" variant="outline" size="sm" onClick={addLeg} className="h-7 text-xs">
                    <Plus className="w-3.5 h-3.5 mr-1" /> Add Leg
                </Button>
            </div>
            <p className="text-[11px] text-gray-400 -mt-2">
                For multi-day trips with several pickups — the main Pickup/Destination fields above stay as the first leg.
            </p>

            {legs.length > 0 && (
                <div className="space-y-2">
                    {legs.map((leg, i) => (
                        <div key={i} className="grid grid-cols-1 sm:grid-cols-[110px_90px_1fr_1fr_auto] gap-2 items-center bg-gray-50 border border-gray-200 rounded-lg p-2">
                            <Input
                                type="date"
                                value={leg.date}
                                min={minDate}
                                onChange={(e) => updateLeg(i, 'date', e.target.value)}
                                className="h-8 text-xs bg-white"
                            />
                            <Input
                                type="time"
                                value={leg.time}
                                onChange={(e) => updateLeg(i, 'time', e.target.value)}
                                className="h-8 text-xs bg-white"
                            />
                            <Input
                                placeholder="Pickup location"
                                value={leg.pickup}
                                onChange={(e) => updateLeg(i, 'pickup', e.target.value)}
                                className="h-8 text-xs bg-white"
                            />
                            <Input
                                placeholder="Drop-off location"
                                value={leg.dropoff}
                                onChange={(e) => updateLeg(i, 'dropoff', e.target.value)}
                                className="h-8 text-xs bg-white"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeLeg(i)}
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
