"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Car, DollarSign, MapPin, Calculator, CalendarCheck, Info, Users } from 'lucide-react';
import Link from 'next/link';

export default function TaxiFareCalculator() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [result, setResult] = useState<null | { sedan: number; suv: number; van: number }>(null);

    const rates: Record<string, { sedan: number; suv: number; van: number }> = {
        "jeddah-makkah": { sedan: 250, suv: 400, van: 350 },
        "makkah-jeddah": { sedan: 200, suv: 350, van: 300 },
        "jeddah-madinah": { sedan: 450, suv: 850, van: 650 },
        "madinah-jeddah": { sedan: 450, suv: 850, van: 650 },
        "makkah-madinah": { sedan: 400, suv: 800, van: 600 },
        "madinah-makkah": { sedan: 400, suv: 800, van: 600 },
        "jeddah-taif": { sedan: 350, suv: 500, van: 450 },
        "taif-jeddah": { sedan: 350, suv: 500, van: 450 },
    };

    const handleCalculate = () => {
        if (from && to) {
            const key = `${from}-${to}`.toLowerCase();
            const reverseKey = `${to}-${from}`.toLowerCase();
            setResult(rates[key] || rates[reverseKey] || null);
        }
    };

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gray-900 p-6 text-white text-center">
                <Calculator className="w-12 h-12 mx-auto mb-3 text-emerald-400" />
                <h3 className="text-2xl font-bold">Taxi Fare Estimator</h3>
                <p className="text-gray-400 text-sm">Official Fixed Rates (No Hidden Fees)</p>
            </div>

            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Pickup City</label>
                        <select
                            className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                        >
                            <option value="">Select Pickup...</option>
                            <option value="jeddah">Jeddah (Airport/City)</option>
                            <option value="makkah">Makkah (Haram/Hotels)</option>
                            <option value="madinah">Madinah (Markaziyah)</option>
                            <option value="taif">Taif</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Drop-off City</label>
                        <select
                            className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                        >
                            <option value="">Select Destination...</option>
                            <option value="jeddah">Jeddah (Airport/City)</option>
                            <option value="makkah">Makkah (Haram/Hotels)</option>
                            <option value="madinah">Madinah (Markaziyah)</option>
                            <option value="taif">Taif</option>
                        </select>
                    </div>
                </div>

                <Button
                    onClick={handleCalculate}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-6 text-lg rounded-xl mb-8 shadow-lg shadow-emerald-200"
                    disabled={!from || !to}
                >
                    Calculate Fare
                </Button>

                {result ? (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-2 mb-4 justify-center text-gray-500 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>Rates include Fuel, Driver & Taxes</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* Sedan */}
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center hover:border-emerald-500 transition-colors cursor-pointer group">
                                <Car className="w-8 h-8 mx-auto mb-2 text-gray-400 group-hover:text-emerald-600" />
                                <div className="font-bold text-gray-900">Sedan</div>
                                <div className="text-xs text-gray-500 mb-2">Camry / Sonata</div>
                                <div className="text-2xl font-black text-emerald-600">
                                    <span className="text-sm align-top text-gray-400 font-medium">SAR</span>
                                    {result.sedan}
                                </div>
                            </div>

                            {/* SUV */}
                            <div className="bg-emerald-50 p-4 rounded-xl border-2 border-emerald-500 text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded-bl-lg font-bold">VIP</div>
                                <Car className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                                <div className="font-bold text-gray-900">GMC Yukon</div>
                                <div className="text-xs text-gray-500 mb-2">Luxury SUV</div>
                                <div className="text-2xl font-black text-emerald-600">
                                    <span className="text-sm align-top text-gray-400 font-medium">SAR</span>
                                    {result.suv}
                                </div>
                            </div>

                            {/* Van */}
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center hover:border-emerald-500 transition-colors cursor-pointer group">
                                <Users className="w-8 h-8 mx-auto mb-2 text-gray-400 group-hover:text-emerald-600" />
                                <div className="font-bold text-gray-900">HiAce Bus</div>
                                <div className="text-xs text-gray-500 mb-2">Groups (10 pax)</div>
                                <div className="text-2xl font-black text-emerald-600">
                                    <span className="text-sm align-top text-gray-400 font-medium">SAR</span>
                                    {result.van}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <Link href="/booking">
                                <Button className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 font-bold px-8 py-4 rounded-xl">
                                    Book This Rate Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-8 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                        <Info className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-gray-500 text-sm">Select locations to see official rates</p>
                    </div>
                )}
            </div>
        </div>
    );
}

// Icon helper
function CheckCircle2(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
