'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { PRICING_RULES } from '@/lib/pricing';
import { Save, RefreshCw, DollarSign, Info, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type PriceMap = Record<string, Record<string, number>>;

function buildDefaultPrices(): PriceMap {
    const out: PriceMap = {};
    for (const [route, vehicles] of Object.entries(PRICING_RULES)) {
        out[route] = {};
        for (const [vehicle, data] of Object.entries(vehicles)) {
            out[route][vehicle] = data.price;
        }
    }
    return out;
}

function routeLabel(key: string) {
    return key
        .split('-')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join(' ↔ ');
}

const SETUP_SQL = `-- Run this once in your Supabase SQL editor:
CREATE TABLE IF NOT EXISTS pricing_rules (
    route    text NOT NULL,
    vehicle  text NOT NULL,
    price    integer NOT NULL DEFAULT 0,
    updated_at timestamptz DEFAULT now(),
    PRIMARY KEY (route, vehicle)
);`;

const HOURLY_VEHICLES: string[] = [
    'Toyota Camry',
    'Hyundai Starex',
    'Toyota Hiace',
    'Toyota Coaster',
    'Genesis G80 VIP',
    'Ford Taurus 2025',
    'Hyundai Staria VIP',
    'Mercedes Vito',
    'GMC Yukon XL / Denali',
    'Cadillac Escalade',
    'Mercedes S-Class',
    'BMW 7 Series',
    'Mercedes Sprinter',
    'Luxurious Bus',
];

const HOURLY_SETUP_SQL = `-- Run this once in your Supabase SQL editor:
CREATE TABLE IF NOT EXISTS hourly_rates (
    vehicle    text PRIMARY KEY,
    rate       integer NOT NULL DEFAULT 0,
    currency   text DEFAULT 'SAR',
    updated_at timestamptz DEFAULT now()
);
ALTER TABLE hourly_rates ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Admin full access" ON hourly_rates;
CREATE POLICY "Admin full access" ON hourly_rates FOR ALL USING (auth.role() = 'authenticated');`;

export default function PricingPage() {
    const router = useRouter();
    const [prices, setPrices] = useState<PriceMap>(buildDefaultPrices);
    const [defaults] = useState<PriceMap>(buildDefaultPrices);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(true);
    const [dbReady, setDbReady] = useState(true);
    const [showSql, setShowSql] = useState(false);

    const [hourlyRates, setHourlyRates] = useState<Record<string, number>>(() => Object.fromEntries(HOURLY_VEHICLES.map(v => [v, 0])));
    const [hourlySaving, setHourlySaving] = useState(false);
    const [hourlySaved, setHourlySaved] = useState(false);
    const [hourlyDbReady, setHourlyDbReady] = useState(true);
    const [showHourlySql, setShowHourlySql] = useState(false);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) { router.push('/admin/login'); return; }
            loadPrices();
            loadHourlyRates();
        });
    }, [router]);

    const loadHourlyRates = async () => {
        const { data, error } = await supabase.from('hourly_rates').select('vehicle,rate');
        if (error) {
            setHourlyDbReady(false);
            return;
        }
        setHourlyDbReady(true);
        if (data && data.length > 0) {
            setHourlyRates(prev => {
                const next = { ...prev };
                for (const row of data) next[row.vehicle] = row.rate;
                return next;
            });
        }
    };

    const handleSaveHourly = async () => {
        setHourlySaving(true);
        try {
            const rows = Object.entries(hourlyRates).map(([vehicle, rate]) => ({ vehicle, rate }));
            const { error } = await supabase.from('hourly_rates').upsert(rows, { onConflict: 'vehicle' });
            if (error) throw error;
            setHourlySaved(true);
            setTimeout(() => setHourlySaved(false), 3000);
        } catch {
            alert('Failed to save. Make sure the hourly_rates table exists in Supabase.');
        } finally {
            setHourlySaving(false);
        }
    };

    const loadPrices = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('pricing_rules').select('route,vehicle,price');

        if (error) {
            setDbReady(false);
            setLoading(false);
            return;
        }

        if (data && data.length > 0) {
            const loaded = buildDefaultPrices();
            for (const row of data) {
                if (loaded[row.route]) {
                    loaded[row.route][row.vehicle] = row.price;
                }
            }
            setPrices(loaded);
        }
        setLoading(false);
    };

    const updatePrice = (route: string, vehicle: string, val: string) => {
        const num = parseInt(val, 10);
        setPrices(prev => ({
            ...prev,
            [route]: { ...prev[route], [vehicle]: isNaN(num) ? 0 : num },
        }));
    };

    const resetToDefault = (route: string, vehicle: string) => {
        setPrices(prev => ({
            ...prev,
            [route]: { ...prev[route], [vehicle]: defaults[route][vehicle] },
        }));
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const rows: { route: string; vehicle: string; price: number }[] = [];
            for (const [route, vehicles] of Object.entries(prices)) {
                for (const [vehicle, price] of Object.entries(vehicles)) {
                    rows.push({ route, vehicle, price });
                }
            }
            const { error } = await supabase
                .from('pricing_rules')
                .upsert(rows, { onConflict: 'route,vehicle' });

            if (error) throw error;
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch {
            alert('Failed to save. Make sure the pricing_rules table exists in Supabase.');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="text-white">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Pricing Manager
                    </h1>
                    <p className="text-neutral-400 mt-1">Edit base prices per route and vehicle</p>
                </div>
                <Button
                    onClick={handleSave}
                    disabled={saving || loading || !dbReady}
                    className={`font-bold min-w-[140px] ${saved ? 'bg-green-500 hover:bg-green-500 text-white' : 'bg-primary text-black hover:bg-primary/90'}`}
                >
                    {saving
                        ? <><RefreshCw className="w-4 h-4 mr-2 animate-spin" />Saving...</>
                        : saved
                        ? '✓ Saved!'
                        : <><Save className="w-4 h-4 mr-2" />Save All Prices</>
                    }
                </Button>
            </div>

            {/* Info */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-5 flex items-start gap-3 text-sm text-blue-300">
                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                <p>
                    These are the <strong>base prices</strong> used for auto-filling quotes when you create bookings.
                    Return trip = 2× base price. You can always override the price per individual booking.
                </p>
            </div>

            {/* DB not ready warning */}
            {!dbReady && (
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 mb-6">
                    <p className="font-bold text-amber-400 mb-2">⚠️ Database Table Missing</p>
                    <p className="text-sm text-amber-300 mb-3">
                        The <code className="bg-amber-500/20 px-1.5 py-0.5 rounded text-xs">pricing_rules</code> table does not exist yet.
                        Run this SQL in your Supabase dashboard to enable saving:
                    </p>
                    <button
                        onClick={() => setShowSql(!showSql)}
                        className="text-xs text-amber-400 underline mb-2"
                    >
                        {showSql ? 'Hide SQL' : 'Show Setup SQL'}
                    </button>
                    {showSql && (
                        <pre className="bg-neutral-900 text-green-400 text-xs p-4 rounded-lg overflow-x-auto">
                            {SETUP_SQL}
                        </pre>
                    )}
                    <p className="text-xs text-amber-400 mt-2">
                        Until then, prices below are shown from code defaults (read-only).
                    </p>
                </div>
            )}

            {/* Price Cards */}
            <div className="space-y-5">
                {Object.entries(prices).map(([route, vehicles]) => (
                    <div key={route} className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden">
                        {/* Route Header */}
                        <div className="bg-neutral-900/60 px-5 py-3 border-b border-neutral-700 flex items-center gap-3">
                            <DollarSign className="w-4 h-4 text-primary" />
                            <span className="font-bold text-white">{routeLabel(route)}</span>
                            <span className="ml-auto text-xs text-neutral-500 font-mono">{route}</span>
                        </div>

                        {/* Vehicle Grid */}
                        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {Object.entries(vehicles).map(([vehicle, price]) => {
                                const isChanged = price !== defaults[route]?.[vehicle];
                                return (
                                    <div key={vehicle} className="space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <label className="text-xs text-neutral-400 font-bold truncate pr-2">{vehicle}</label>
                                            {isChanged && (
                                                <button
                                                    onClick={() => resetToDefault(route, vehicle)}
                                                    className="text-[10px] text-amber-400 hover:text-amber-300 flex items-center gap-0.5 shrink-0"
                                                    title="Reset to default"
                                                >
                                                    <RotateCcw className="w-3 h-3" />
                                                    Reset
                                                </button>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-neutral-400 pointer-events-none">
                                                SAR
                                            </span>
                                            <Input
                                                type="number"
                                                min={0}
                                                value={price}
                                                onChange={e => updatePrice(route, vehicle, e.target.value)}
                                                disabled={!dbReady}
                                                className={`pl-12 bg-neutral-900 border-neutral-700 text-white font-bold disabled:opacity-50 ${isChanged ? 'border-amber-500/50 bg-amber-500/5' : ''}`}
                                            />
                                        </div>
                                        {isChanged && (
                                            <p className="text-[10px] text-amber-400">
                                                Default: SAR {defaults[route]?.[vehicle]}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Hourly Hire Rates */}
            <div className="mt-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                    <div>
                        <h2 className="text-2xl font-bold text-white">Hourly Hire Rates</h2>
                        <p className="text-neutral-400 mt-1 text-sm">Rate per hour, per vehicle — used to suggest a price on Hourly Hire bookings</p>
                    </div>
                    <Button
                        onClick={handleSaveHourly}
                        disabled={hourlySaving || !hourlyDbReady}
                        className={`font-bold min-w-[140px] ${hourlySaved ? 'bg-green-500 hover:bg-green-500 text-white' : 'bg-primary text-black hover:bg-primary/90'}`}
                    >
                        {hourlySaving
                            ? <><RefreshCw className="w-4 h-4 mr-2 animate-spin" />Saving...</>
                            : hourlySaved
                            ? '✓ Saved!'
                            : <><Save className="w-4 h-4 mr-2" />Save Hourly Rates</>
                        }
                    </Button>
                </div>

                {!hourlyDbReady && (
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 mb-6">
                        <p className="font-bold text-amber-400 mb-2">⚠️ Database Table Missing</p>
                        <p className="text-sm text-amber-300 mb-3">
                            The <code className="bg-amber-500/20 px-1.5 py-0.5 rounded text-xs">hourly_rates</code> table does not exist yet.
                            Run this SQL in your Supabase dashboard to enable saving:
                        </p>
                        <button onClick={() => setShowHourlySql(!showHourlySql)} className="text-xs text-amber-400 underline mb-2">
                            {showHourlySql ? 'Hide SQL' : 'Show Setup SQL'}
                        </button>
                        {showHourlySql && (
                            <pre className="bg-neutral-900 text-green-400 text-xs p-4 rounded-lg overflow-x-auto">{HOURLY_SETUP_SQL}</pre>
                        )}
                    </div>
                )}

                <div className="bg-neutral-800 rounded-xl border border-neutral-700 p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {HOURLY_VEHICLES.map(vehicle => (
                        <div key={vehicle} className="space-y-1.5">
                            <label className="text-xs text-neutral-400 font-bold truncate block">{vehicle}</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-neutral-400 pointer-events-none">SAR/hr</span>
                                <Input
                                    type="number"
                                    min={0}
                                    value={hourlyRates[vehicle] || 0}
                                    onChange={e => {
                                        const num = parseInt(e.target.value, 10);
                                        setHourlyRates(prev => ({ ...prev, [vehicle]: isNaN(num) ? 0 : num }));
                                    }}
                                    disabled={!hourlyDbReady}
                                    className="pl-16 bg-neutral-900 border-neutral-700 text-white font-bold disabled:opacity-50"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Save */}
            {dbReady && (
                <div className="mt-8 flex justify-end">
                    <Button
                        onClick={handleSave}
                        disabled={saving}
                        className={`font-bold px-10 ${saved ? 'bg-green-500 hover:bg-green-500 text-white' : 'bg-primary text-black hover:bg-primary/90'}`}
                    >
                        {saving ? <><RefreshCw className="w-4 h-4 mr-2 animate-spin" />Saving...</> : saved ? '✓ Saved!' : <><Save className="w-4 h-4 mr-2" />Save All Prices</>}
                    </Button>
                </div>
            )}
        </div>
    );
}
