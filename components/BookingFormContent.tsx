"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { MapPin, Phone, User, Clock, Car, Mail, ArrowRight, ArrowLeft, Check, Users, Briefcase, Wallet, ChevronsUpDown, Search, Calendar as CalendarIcon } from 'lucide-react';
import { supabase, vehicles, type BookingData } from '@/lib/supabase';
import { getPrice } from '@/lib/pricing';
import { countryCodes } from '@/data/countryCodes';
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

const POPULAR_ROUTES = [
    { id: 'custom', label: 'Custom Location (Enter below)' },
    // Core intercity routes
    { id: 'jeddah-makkah', from: 'Jeddah Airport', to: 'Makkah Hotel', label: 'Jeddah Airport → Makkah' },
    { id: 'makkah-madinah-hotel', from: 'Makkah Hotel', to: 'Madinah Hotel', label: 'Makkah → Madinah Hotel' },
    { id: 'makkah-madinah-badr-ziyarat', from: 'Makkah', to: 'Madinah (via Badr Ziyarat)', label: 'Makkah → Madinah (via Baddar Ziyarat)' },
    { id: 'makkah-ziyarat-tour', from: 'Makkah Hotel', to: 'Makkah Ziyarat Tour', label: 'Makkah Ziyarat Tour' },
    { id: 'madinah-hotel-airport', from: 'Madinah Hotel', to: 'Madinah Airport', label: 'Madinah Hotel → Jeddah Airport' },
    { id: 'madinah-ziyarat-tour', from: 'Madinah Hotel', to: 'Madinah Ziyarat Tour', label: 'Madinah Ziyarat Tour' },
    { id: 'jeddah-train-station-transfer', from: 'Jeddah City', to: 'Jeddah Train Station (Haramain)', label: 'City → Jeddah Train Station' },
    { id: 'madinah-train-station-transfer', from: 'Madinah City', to: 'Madinah Train Station (Haramain)', label: 'City → Madinah Train Station' },
    // Riyadh Routes
    { id: 'ruh-olaya', from: 'King Khalid Airport (RUH)', to: 'Olaya District', label: 'RUH Airport → Olaya' },
    { id: 'ruh-kafd', from: 'King Khalid Airport (RUH)', to: 'KAFD Financial District', label: 'RUH Airport → KAFD' },
    { id: 'ruh-dq', from: 'King Khalid Airport (RUH)', to: 'Diplomatic Quarter', label: 'RUH Airport → DQ' },
    { id: 'ruh-diriyah', from: 'King Khalid Airport (RUH)', to: 'Diriyah / Bujairi Terrace', label: 'RUH Airport → Diriyah' },
];

interface BookingFormProps {
    prefilledData?: Partial<BookingData>;
    className?: string; // Allow custom styling wrapper
}

export default function BookingFormContent({ prefilledData, className }: BookingFormProps) {
    // Steps: 1=Locations, 2=Vehicle Selection, 3=Contact Details, 4=Success
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
    const [countryCode, setCountryCode] = useState('+966');
    const [open, setOpen] = useState(false);

    const [formData, setFormData] = useState<BookingData>({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        pickup_location: '',
        destination: '',
        pickup_date: '',
        pickup_time: '',
        vehicle_type: '',
        vehicle_image: '',
        passengers: 1,
        luggage: 0,
        special_requests: '',
        status: 'pending'
    });

    const searchParams = useSearchParams();

    // Initialize data and determine starting step
    useEffect(() => {
        let updates: Partial<BookingData> = {};

        // 1. Merge Props
        if (prefilledData) {
            updates = { ...updates, ...prefilledData };
        }

        // 2. Merge URL Params
        if (searchParams) {
            const from = searchParams.get('from');
            const to = searchParams.get('to');
            const date = searchParams.get('date');
            const time = searchParams.get('time');
            const vehicle = searchParams.get('vehicle');
            const phone = searchParams.get('phone');

            if (from) updates.pickup_location = from;
            if (to) updates.destination = to;
            if (date) updates.pickup_date = date;
            if (time) updates.pickup_time = time;
            if (phone) updates.customer_phone = phone;

            if (vehicle) {
                const vName = vehicle.replace(/-/g, ' ');
                const vObj = vehicles.find(v => v.name === vName);
                if (vObj) {
                    updates.vehicle_type = vObj.name;
                    updates.vehicle_image = vObj.image;
                    updates.passengers = vObj.passengers;
                    updates.luggage = vObj.luggage;
                }
            }
        }

        if (Object.keys(updates).length > 0) {
            setFormData(prev => {
                const newData = { ...prev, ...updates };
                // Auto-advance logic:
                // If we have From, To, Date, and Time -> Go to Step 2 (Vehicles) directly
                if (newData.pickup_location && newData.destination && newData.pickup_date && newData.pickup_time) {
                    // Use a timeout to avoid conflicts with render cycle if needed, or simply set state
                    // We'll setStep(2) here.
                    setStep(2);
                }
                return newData;
            });
        }
    }, [searchParams, prefilledData]);

    // Calculate price effect
    useEffect(() => {
        if (formData.pickup_location && formData.destination && formData.vehicle_type) {
            setCalculatedPrice(getPrice(formData.pickup_location, formData.destination, formData.vehicle_type));
        } else {
            setCalculatedPrice(null);
        }
    }, [formData.pickup_location, formData.destination, formData.vehicle_type]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: ['passengers', 'luggage'].includes(name) ? Number(value) || 0 : value
        }));
    };

    const selectVehicle = (vehicle: typeof vehicles[0]) => {
        setFormData(prev => ({
            ...prev,
            vehicle_type: vehicle.name,
            vehicle_image: vehicle.image,
            passengers: vehicle.passengers,
            luggage: vehicle.luggage
        }));
        // Auto advance to next step after picking vehicle? 
        // Better to let user click "Continue" or do it automatically. 
        // Let's keep it manual for explicit confirmation, or auto if they click the card.
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // ... (Submit logic same as before, see next chunk) ...
        try {
            const fullPhoneNumber = `${countryCode}${formData.customer_phone}`;
            const finalFormData = {
                ...formData,
                customer_phone: fullPhoneNumber,
                special_requests: calculatedPrice
                    ? `${formData.special_requests ? formData.special_requests + '. ' : ''}Quoted Price: SAR ${calculatedPrice}`
                    : formData.special_requests
            };

            const { data, error } = await supabase.from('bookings').insert([finalFormData]).select();
            if (error) throw error;

            // Email API call
            fetch('/api/send-booking-emails', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ booking: data[0], price: calculatedPrice })
            }).catch(console.error);

            setSuccess(true);
            setStep(4);
        } catch (error) {
            console.error(error);
            alert('Booking failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const isStep1Valid = !!(formData.pickup_location && formData.destination && formData.pickup_date && formData.pickup_time);
    const isStep2Valid = !!(formData.vehicle_type);
    const isStep3Valid = !!(formData.customer_name && formData.customer_email && formData.customer_phone);

    const nextStep = () => {
        if (step === 1 && !isStep1Valid) return alert('Please fill in all trip details.');
        if (step === 2 && !isStep2Valid) return alert('Please select a vehicle.');
        if (step === 3 && !isStep3Valid) return alert('Please fill in your contact details.');
        if (step === 3) {
            // Wait this should be submit button on step 3? usually Step 3 is "Review & Details" then Submit
            // Let's make Step 3 the final form step with Submit button.
            return;
        }
        setStep(val => val + 1);
    };

    const prevStep = () => setStep(val => val - 1);

    return (
        <div className={`bg-white border border-gray-200 p-4 sm:p-8 rounded-3xl shadow-xl w-full mx-auto relative overflow-hidden ${className}`}>
            {/* Progress Steps Header */}
            <div className="mb-8">
                <div className="flex justify-between items-center relative">
                    {/* Progress Bar Background */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 -z-10 rounded-full"></div>
                    {/* Active Progress Bar */}
                    <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary transition-all duration-300 rounded-full"
                        style={{ width: `${((step - 1) / 2) * 100}%` }}
                    ></div>

                    {[1, 2, 3].map((s) => (
                        <div key={s} className={`flex flex-col items-center gap-2 bg-white px-2 cursor-pointer transition-colors ${step >= s ? 'text-primary' : 'text-gray-400'}`} onClick={() => s < step && setStep(s)}>
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all ${step > s ? 'bg-primary text-black border-primary' :
                                step === s ? 'bg-white text-primary border-primary ring-4 ring-primary/10' :
                                    'bg-white text-gray-300 border-gray-200'
                                }`}>
                                {step > s ? <Check className="w-5 h-5" /> : s}
                            </div>
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:block">
                                {s === 1 && "Trip"}
                                {s === 2 && "Vehicle"}
                                {s === 3 && "Details"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* STEP 1: TRIP DETAILS */}
                {step === 1 && (
                    <div className="space-y-5 animate-fade-in-up">
                        <div className="text-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">Plan Your VIP Journey</h2>
                        </div>

                        {/* Quick Select */}
                        <div className="bg-gray-50/50 p-3 rounded-xl border border-dashed border-gray-200">
                            <label className="text-xs font-semibold text-gray-500 ml-2 mb-1 block">Quick Select Route</label>
                            <Select onValueChange={(val) => {
                                if (val === 'custom') setFormData(prev => ({ ...prev, pickup_location: '', destination: '' }));
                                else {
                                    const r = POPULAR_ROUTES.find(pr => pr.id === val);
                                    if (r) setFormData(prev => ({ ...prev, pickup_location: r.from || '', destination: r.to || '' }));
                                }
                            }}>
                                <SelectTrigger className="bg-white border-gray-200"><SelectValue placeholder="Select a popular route..." /></SelectTrigger>
                                <SelectContent className="z-[200]">{POPULAR_ROUTES.map((r) => <SelectItem key={r.id} value={r.id}>{r.label}</SelectItem>)}</SelectContent>
                            </Select>
                        </div>

                        {/* Locations */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-gray-700 ml-1">From</label>
                                <div className="relative group/input">
                                    <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                                    <Input name="pickup_location" placeholder="Jeddah Airport, Hotel..." required value={formData.pickup_location} className="pl-10 h-12 bg-gray-50 border-gray-300 rounded-xl" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-gray-700 ml-1">To</label>
                                <div className="relative group/input">
                                    <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                                    <Input name="destination" placeholder="Makkah Hotel, Kaaba..." required value={formData.destination} className="pl-10 h-12 bg-gray-50 border-gray-300 rounded-xl" onChange={handleChange} />
                                </div>
                            </div>
                        </div>

                        {/* Date & Time */}
                        {/* Date & Time */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative group/input flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Pickup Date</label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full h-12 justify-start text-left font-normal bg-gray-50 border-gray-300 rounded-xl hover:bg-gray-100",
                                                !formData.pickup_date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                                            {formData.pickup_date ? (
                                                format(new Date(formData.pickup_date), "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 z-[200]" align="start">
                                        <CalendarComponent
                                            mode="single"
                                            selected={formData.pickup_date ? new Date(formData.pickup_date) : undefined}
                                            onSelect={(date) => {
                                                if (date) {
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        pickup_date: format(date, "yyyy-MM-dd")
                                                    }));
                                                }
                                            }}
                                            disabled={(date) =>
                                                date < new Date(new Date().setHours(0, 0, 0, 0))
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div className="relative group/input flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Pickup Time</label>
                                <Select
                                    value={formData.pickup_time}
                                    onValueChange={(value) =>
                                        setFormData(prev => ({ ...prev, pickup_time: value }))
                                    }
                                >
                                    <SelectTrigger className="w-full h-12 bg-gray-50 border-gray-300 rounded-xl">
                                        <div className="flex items-center">
                                            <Clock className="mr-2 h-4 w-4 text-gray-500" />
                                            <SelectValue placeholder="Select time" />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent className="max-h-[300px] z-[200]">
                                        {Array.from({ length: 48 }).map((_, i) => {
                                            const hour = Math.floor(i / 2);
                                            const minute = i % 2 === 0 ? '00' : '30';
                                            const timeString = `${hour.toString().padStart(2, '0')}:${minute}`;
                                            const date = new Date();
                                            date.setHours(hour);
                                            date.setMinutes(parseInt(minute));
                                            const displayTime = format(date, "h:mm a");

                                            return (
                                                <SelectItem key={timeString} value={timeString}>
                                                    {displayTime}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <Button type="button" onClick={nextStep} className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-4 text-lg rounded-xl mt-4">
                            Select Vehicle <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                )}

                {/* STEP 2: VEHICLE SELECTION */}
                {step === 2 && (
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900">Select Your Premium Vehicle</h2>
                            <p className="text-gray-500 text-sm mt-1">{formData.pickup_location} <ArrowRight className="w-3 h-3 inline mx-1" /> {formData.destination}</p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {vehicles.map((v) => (
                                <div
                                    key={v.name}
                                    onClick={() => { selectVehicle(v); setStep(3); }}
                                    className={`relative group cursor-pointer border-2 rounded-2xl p-4 transition-all hover:shadow-md ${formData.vehicle_type === v.name ? 'border-primary bg-primary/5' : 'border-gray-100 bg-white hover:border-primary/50'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg text-gray-900">{v.name}</h3>
                                            <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                                                <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {v.passengers}</span>
                                                <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {v.luggage}</span>
                                            </div>
                                        </div>
                                        {/* Price hint if available */}
                                        {formData.pickup_location && formData.destination && (
                                            <div className="text-right">
                                                <span className="block font-bold text-lg text-primary">
                                                    SAR {getPrice(formData.pickup_location, formData.destination, v.name) || 'Quote'}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.vehicle_type === v.name ? 'border-primary bg-primary text-white' : 'border-gray-300'}`}>
                                        {formData.vehicle_type === v.name && <Check className="w-3 h-3" />}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-3 mt-4">
                            <Button type="button" onClick={prevStep} variant="outline" className="flex-1 py-4 text-lg rounded-xl">Back</Button>
                        </div>
                    </div>
                )}

                {/* STEP 3: CUSTOMER DETAILS (FINAL) */}
                {step === 3 && (
                    <div className="space-y-5 animate-fade-in-up">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900">Contact Details</h2>
                            <p className="text-gray-500 text-sm">Where should we send the booking confirmation?</p>
                        </div>

                        {/* Booking Summary Card */}
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-sm space-y-2">
                            <div className="flex justify-between font-medium">
                                <span className="text-gray-500">Vehicle:</span>
                                <span className="text-gray-900">{formData.vehicle_type}</span>
                            </div>
                            <div className="flex justify-between font-medium">
                                <span className="text-gray-500">Date:</span>
                                <span className="text-gray-900">{formData.pickup_date} at {formData.pickup_time}</span>
                            </div>
                            {calculatedPrice && (
                                <div className="flex justify-between font-bold text-primary pt-2 border-t border-gray-200 mt-2">
                                    <span>Total Estimate:</span>
                                    <span>SAR {calculatedPrice}</span>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4">
                            <div className="relative group/input">
                                <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                                <Input name="customer_name" placeholder="Full Name *" required value={formData.customer_name} className="pl-10 h-12 bg-gray-50 border-gray-300 rounded-xl" onChange={handleChange} />
                            </div>
                            <div className="relative group/input">
                                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                                <Input name="customer_email" type="email" placeholder="Email Address *" required value={formData.customer_email} className="pl-10 h-12 bg-gray-50 border-gray-300 rounded-xl" onChange={handleChange} />
                            </div>
                            <div className="relative group/input">
                                <div className="flex gap-2">
                                    <Popover open={open} onOpenChange={setOpen} modal={false}>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" role="combobox" aria-expanded={open} className="w-[110px] h-12 justify-between bg-gray-50 border-gray-300"><span className="truncate">{countryCode}</span><ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /></Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[250px] p-0 max-h-[300px] z-[200]">
                                            <Command>
                                                <CommandInput placeholder="Search country..." />
                                                <CommandList>
                                                    <CommandEmpty>No country found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {countryCodes.map((c) => (
                                                            <CommandItem key={c.country} onSelect={() => { setCountryCode(c.code); setOpen(false); }}>
                                                                <Check className={cn("mr-2 h-4 w-4", countryCode === c.code ? "opacity-100" : "opacity-0")} />
                                                                <span className="mr-2">{c.flag}</span>
                                                                {c.country} ({c.code})
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <Input name="customer_phone" type="tel" placeholder="Mobile Number *" required value={formData.customer_phone} className="flex-1 h-12 bg-gray-50 border-gray-300 rounded-xl" onChange={handleChange} />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <Button type="button" onClick={prevStep} variant="outline" className="flex-1 py-4 text-lg rounded-xl">Back</Button>
                            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-black font-bold py-4 text-lg rounded-xl" disabled={loading}>
                                {loading ? 'Booking...' : 'Secure VIP Reservation'}
                            </Button>
                        </div>
                    </div>
                )}

                {/* STEP 4: SUCCESS */}
                {step === 4 && success && (
                    <div className="text-center space-y-6 animate-fade-in-up py-8">
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto"><Check className="w-10 h-10 text-black" /></div>
                        <h3 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h3>
                        <p className="text-gray-600">We've sent a confirmation to <strong>{formData.customer_email}</strong>. Our team will contact you shortly.</p>
                        <Button type="button" onClick={() => { setStep(1); setSuccess(false); setCalculatedPrice(null); setFormData(prev => ({ ...prev, pickup_location: '', destination: '', status: 'pending' })); }} className="bg-primary hover:bg-primary/90 text-black font-bold py-4 px-8 rounded-xl">Book Another</Button>
                    </div>
                )}
            </form>
        </div>
    );
}
