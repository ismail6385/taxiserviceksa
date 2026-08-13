"use client";

import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CounterControlProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    /** Only enforced when `enforceMax` is true. Otherwise purely informational. */
    max?: number;
    enforceMax?: boolean;
    size?: 'sm' | 'md';
    className?: string;
    'aria-label': string;
}

/**
 * A standalone +/- counter, no label/card chrome — deliberately reusable in
 * very different surrounding markup (popovers, cards, plain admin rows).
 * Buttons are always a minimum 44x44px touch target regardless of `size`
 * (that's an accessibility floor, not a visual density choice).
 */
export function CounterControl({
    value,
    onChange,
    min = 0,
    max,
    enforceMax = false,
    size = 'md',
    className,
    ...rest
}: CounterControlProps) {
    const atMin = value <= min;
    const atMax = enforceMax && max != null && value >= max;

    const decrement = () => {
        if (!atMin) onChange(value - 1);
    };
    const increment = () => {
        if (!atMax) onChange(value + 1);
    };

    return (
        <div
            className={cn(
                'flex items-center bg-white rounded-xl border border-gray-200 shadow-sm',
                size === 'sm' ? 'gap-1 p-1' : 'gap-2 p-1',
                className
            )}
        >
            <button
                type="button"
                onClick={(e) => { e.stopPropagation(); decrement(); }}
                disabled={atMin}
                aria-label={`Decrease ${rest['aria-label']}`}
                className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-lg bg-gray-50 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all active:scale-95 shrink-0"
            >
                <Minus className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
            </button>
            <span
                className="font-black text-primary text-center tabular-nums shrink-0"
                style={{ minWidth: '2ch' }}
                aria-live="polite"
                aria-label={`${rest['aria-label']}: ${value}`}
            >
                {value}
            </span>
            <button
                type="button"
                onClick={(e) => { e.stopPropagation(); increment(); }}
                disabled={atMax}
                aria-label={`Increase ${rest['aria-label']}`}
                className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-lg bg-gray-50 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all active:scale-95 shrink-0"
            >
                <Plus className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
            </button>
        </div>
    );
}

export interface PassengerLuggageSelectorProps {
    passengers: number;
    onPassengersChange: (value: number) => void;
    luggage: number;
    onLuggageChange: (value: number) => void;
    minPassengers?: number;
    /** Informational vehicle seat count. Only enforced as a hard cap when `enforceMaxPassengers` is true. */
    maxPassengers?: number;
    enforceMaxPassengers?: boolean;
    minLuggage?: number;
    /** Generic anti-typo sanity ceiling — NEVER the selected vehicle's luggage capacity. */
    luggageCeiling?: number;
    /** Purely informational caption ("Vehicle capacity: 4 bags") — never enforced. */
    luggageCapacityHint?: number;
    size?: 'sm' | 'md';
    className?: string;
}

/**
 * Combined Passengers + Luggage counter for the compact contexts (hero
 * search popover, admin form, hero booking widget) that want both together
 * in one block. Forms with their own separate passenger/luggage cards (e.g.
 * BookingFormContent's step 2) should use <CounterControl> directly instead
 * and keep their existing card/label markup.
 *
 * Luggage is intentionally NEVER capped to vehicle capacity here — there is
 * no `maxLuggage` prop, only the generic `luggageCeiling` sanity bound, so a
 * future edit can't quietly reintroduce that clamp.
 */
export default function PassengerLuggageSelector({
    passengers,
    onPassengersChange,
    luggage,
    onLuggageChange,
    minPassengers = 1,
    maxPassengers,
    enforceMaxPassengers = false,
    minLuggage = 0,
    luggageCeiling = 50,
    luggageCapacityHint,
    size = 'md',
    className,
}: PassengerLuggageSelectorProps) {
    return (
        <div className={cn('space-y-4', className)}>
            <div className="flex items-center justify-between gap-4">
                <div>
                    <span className="font-bold text-gray-900 text-sm">Passengers</span>
                    {enforceMaxPassengers && maxPassengers ? (
                        <p className="text-[10px] text-gray-400 font-medium mt-0.5">Max {maxPassengers} for this vehicle</p>
                    ) : null}
                </div>
                <CounterControl
                    value={passengers}
                    onChange={onPassengersChange}
                    min={minPassengers}
                    max={maxPassengers}
                    enforceMax={enforceMaxPassengers}
                    size={size}
                    aria-label="passengers"
                />
            </div>
            <div className="flex items-center justify-between gap-4">
                <div>
                    <span className="font-bold text-gray-900 text-sm">Luggage</span>
                    {luggageCapacityHint ? (
                        <p className="text-[10px] text-gray-400 font-medium mt-0.5">
                            Vehicle capacity: {luggageCapacityHint} bags — need more? No problem.
                        </p>
                    ) : null}
                </div>
                <CounterControl
                    value={luggage}
                    onChange={onLuggageChange}
                    min={minLuggage}
                    max={luggageCeiling}
                    enforceMax
                    size={size}
                    aria-label="luggage"
                />
            </div>
        </div>
    );
}
