"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { MapPin, Calendar, Clock, ArrowLeftRight, Plane, Check, Users, Briefcase, User, Mail, Wallet, ChevronsUpDown, Loader2, Car, ArrowRight } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { supabase, vehicles } from '@/lib/supabase';
import { getPrice } from '@/lib/pricing';
import { countryCodes } from '@/data/countryCodes';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";

interface HeroBookingWidgetProps {
    title?: string;
}

export default function HeroBookingWidget({ title }: HeroBookingWidgetProps) {
    const router = useRouter();
    const pathname = usePathname();
    // Booking State
    const [step, setStep] = useState(1); // 1: Search, 2: Vehicles, 3: Details, 4: Success
    const [loading, setLoading] = useState(false);

    // Form Data
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState('');
    const [isRoundTrip, setIsRoundTrip] = useState(false);

    // Detailed Booking Data (for steps 2+)
    const [selectedVehicle, setSelectedVehicle] = useState<typeof vehicles[0] | null>(null);
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+966');
    const [openCountry, setOpenCountry] = useState(false);

    const [passengers, setPassengers] = useState(1);
    const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

    // Calculate price when route/vehicle changes
    useEffect(() => {
        if (pickup && dropoff && selectedVehicle) {
            setCalculatedPrice(getPrice(pickup, dropoff, selectedVehicle.name));
        }
    }, [pickup, dropoff, selectedVehicle]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!pickup || !dropoff || !date || !time) {
            alert("Please fill in all fields.");
            return;
        }
        setStep(2); // Move to Vehicle Selection inline
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmitBooking = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedVehicle) return;
        setLoading(true);

        try {
            const fullPhoneNumber = `${countryCode}${customerPhone}`;
            const bookingData = {
                customer_name: customerName,
                customer_email: customerEmail,
                customer_phone: fullPhoneNumber,
                pickup_location: pickup,
                destination: dropoff,
                pickup_date: date,
                pickup_time: time,
                vehicle_type: selectedVehicle.name,
                vehicle_image: selectedVehicle.image,
                passengers: passengers,
                luggage: selectedVehicle.luggage,
                special_requests: (isRoundTrip ? `Request: Round Trip. Please Provide Quote` : `Please Provide Quote`) + ` | Source: ${pathname}`,
                status: 'pending'
            };

            const { data, error } = await supabase.from('bookings').insert([bookingData]).select();
            if (error) throw error;

            // Send Email (fire-and-forget, don't block booking success)
            fetch('/api/send-booking-emails', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ booking: data[0], price: 'Need Quote' })
            }).then(async (res) => {
                if (!res.ok) {
                    const errorData = await res.json().catch(() => ({}));
                    console.error('Email API error:', res.status, errorData);
                } else {
                    console.log('Booking emails sent successfully!');
                }
            }).catch((err) => console.error('Email fetch failed:', err));

            setStep(4); // Success
        } catch (error) {
            console.error(error);
            alert('Booking failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-4xl mx-auto relative z-20 transition-all duration-300">
            {/* Header / Title */}
            {step === 1 && (
                <>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 text-center mb-2 animate-fade-in uppercase tracking-tight">
                        {title || "VIP Private Transfer & Chauffeur Service"}
                    </h3>
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                        <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md border border-emerald-100">
                            <Check className="w-3.5 h-3.5" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Airport Pickup</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-2 py-1 rounded-md border border-blue-100">
                            <Check className="w-3.5 h-3.5" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Intercity Travel</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-amber-50 text-amber-700 px-2 py-1 rounded-md border border-amber-100">
                            <Check className="w-3.5 h-3.5" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Premium Fleet</span>
                        </div>
                    </div>
                </>
            )}

            {/* Step 1: Search Form (Horizontal) */}
            {step === 1 && (
                <form onSubmit={handleSearch} className="space-y-4 animate-fade-in-up">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                        {/* Pickup */}
                        <div className="relative group">
                            <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder="Pickup (Airport or City)"
                                value={pickup}
                                onChange={(e) => setPickup(e.target.value)}
                                className="pl-10 h-12 bg-gray-50 border-gray-200 focus:border-primary rounded-xl text-base font-medium"
                                required
                            />
                        </div>

                        {/* Swap Button */}
                        <button
                            type="button"
                            onClick={() => { const temp = pickup; setPickup(dropoff); setDropoff(temp); }}
                            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-sm hover:scale-110 transition-transform text-gray-500 hover:text-primary"
                        >
                            <ArrowLeftRight className="w-4 h-4" />
                        </button>

                        {/* Dropoff */}
                        <div className="relative group">
                            <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder="Destination (Hotel or City)"
                                value={dropoff}
                                onChange={(e) => setDropoff(e.target.value)}
                                className="pl-10 h-12 bg-gray-50 border-gray-200 focus:border-primary rounded-xl text-base font-medium"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Modern Date Picker */}
                        <div className="relative group flex flex-col">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full h-12 justify-start text-left font-normal bg-gray-50 border-gray-200 hover:bg-gray-100 hover:text-gray-900 rounded-xl px-3",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <Calendar className="mr-2 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                                        {date ? format(new Date(date), "PPP") : <span>Pickup Date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 z-[200]" align="start">
                                    <CalendarComponent
                                        mode="single"
                                        selected={date ? new Date(date) : undefined}
                                        onSelect={(d) => d && setDate(format(d, "yyyy-MM-dd"))}
                                        disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* Modern Time Select */}
                        <div className="relative group">
                            <Select value={time} onValueChange={setTime}>
                                <SelectTrigger className="w-full h-12 bg-gray-50 border-gray-200 focus:border-primary rounded-xl text-base px-3">
                                    <div className="flex items-center text-gray-600">
                                        <Clock className="mr-2 h-5 w-5 text-gray-400" />
                                        <SelectValue placeholder="Pickup Time" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent className="max-h-[300px] z-[200]">
                                    {Array.from({ length: 48 }).map((_, i) => {
                                        const hour = Math.floor(i / 2); const minute = i % 2 === 0 ? '00' : '30';
                                        const timeString = `${hour.toString().padStart(2, '0')}:${minute}`;
                                        const d = new Date(); d.setHours(hour); d.setMinutes(parseInt(minute));
                                        return <SelectItem key={timeString} value={timeString}>{format(d, "h:mm a")}</SelectItem>;
                                    })}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Round Trip Toggle */}
                        <div className="flex items-center justify-center sm:justify-start gap-2 bg-gray-50 border border-gray-200 rounded-xl px-2 h-12 sm:col-span-2 lg:col-span-1">
                            <Switch id="round-trip" checked={isRoundTrip} onCheckedChange={setIsRoundTrip} />
                            <Label htmlFor="round-trip" className="text-sm font-medium text-gray-600 cursor-pointer">Round trip</Label>
                        </div>
                    </div>

                    <Button type="submit" className="w-full h-14 bg-black hover:bg-gray-800 text-white font-bold text-lg rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                        Get Instant Quotation
                    </Button>
                    <p className="text-[10px] sm:text-xs text-center text-rose-600 font-extrabold uppercase tracking-[0.2em] mt-2 px-4 shadow-sm bg-rose-50/50 py-2 rounded-lg">
                        100% PRIVATE VIP TRANSFERS ONLY • NO SHARED TAXIS • ALL KSA CITIES
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-center text-gray-400 mt-2 px-4 italic leading-tight">
                        * Authorized intercity transfers, hourly chauffeur service, and airport pickups. We do NOT provide local short-hailing or sharing.
                    </p>
                </form>
            )}

            {/* Step 2: Vehicle Selection */}
            {step === 2 && (
                <div className="animate-fade-in-up space-y-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 border-b border-gray-100 pb-4 gap-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Select Vehicle</h3>
                            <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                                <span className="truncate max-w-[120px] sm:max-w-xs">{pickup}</span>
                                <ArrowLeftRight className="w-3 h-3 text-gray-400" />
                                <span className="truncate max-w-[120px] sm:max-w-xs">{dropoff}</span>
                            </p>
                        </div>
                        <Button variant="outline" size="sm" onClick={handleBack} className="text-gray-600 hover:text-black">
                            Change Trip
                        </Button>
                    </div>

                    <div className="space-y-6">
                        <Select
                            value={selectedVehicle?.name || ""}
                            onValueChange={(val) => {
                                const v = vehicles.find(veh => veh.name === val);
                                if (v) setSelectedVehicle(v);
                            }}
                        >
                            <SelectTrigger className="w-full h-16 bg-white border-2 border-gray-100 focus:border-primary rounded-xl text-lg relative overflow-hidden">
                                <div className="flex items-center gap-3 w-full">
                                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
                                        <Car className="w-5 h-5 text-gray-500" />
                                    </div>
                                    <SelectValue placeholder="Choose your vehicle..." />
                                </div>
                            </SelectTrigger>
                            <SelectContent className="max-h-[400px]">
                                {vehicles.map((v) => {
                                    const price = getPrice(pickup, dropoff, v.name);
                                    return (
                                        <SelectItem key={v.name} value={v.name} className="py-3 cursor-pointer">
                                            <div className="flex items-center justify-between w-full gap-4">
                                                <div className="flex flex-col items-start">
                                                    <span className="font-bold text-gray-900">{v.name}</span>
                                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                                        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {v.passengers}</span>
                                                        <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {v.luggage}</span>
                                                    </div>
                                                </div>
                                                <div className="font-bold text-primary text-base">
                                                    Get Quote
                                                </div>
                                            </div>
                                        </SelectItem>
                                    );
                                })}
                            </SelectContent>
                        </Select>

                        {/* Passenger Selector (Manual Override) */}
                        {selectedVehicle && (
                            <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in shadow-inner">
                                <div className="flex flex-col">
                                    <span className="text-sm font-black text-gray-900 uppercase tracking-tighter">Number of Passengers</span>
                                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none mt-1">
                                        {selectedVehicle.name} Max Capacity: {selectedVehicle.passengers}
                                    </span>
                                </div>
                                <div className="flex items-center bg-white rounded-xl p-1 border shadow-sm">
                                    <button 
                                        type="button"
                                        onClick={() => setPassengers(p => Math.max(1, p - 1))}
                                        className="w-10 h-10 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-all active:scale-90"
                                    >
                                        <span className="text-xl font-bold text-gray-900">-</span>
                                    </button>
                                    <span className="text-2xl font-black text-primary min-w-[50px] text-center">{passengers}</span>
                                    <button 
                                        type="button"
                                        onClick={() => setPassengers(p => Math.min(selectedVehicle.passengers, p + 1))}
                                        className="w-10 h-10 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-all active:scale-90"
                                    >
                                        <span className="text-xl font-bold text-gray-900">+</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 items-start">
                            <div className="bg-blue-100 p-2 rounded-full shrink-0">
                                <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="text-sm text-blue-800">
                                <p className="font-semibold mb-1">Best Price Guarantee</p>
                                <p className="opacity-90">All prices include taxes, fees, and gratuities. No hidden charges.</p>
                            </div>
                        </div>

                        <Button
                            onClick={() => setStep(3)}
                            disabled={!selectedVehicle}
                            className="w-full h-14 bg-primary hover:bg-primary/90 text-black font-bold text-lg rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Continue to Details
                        </Button>
                    </div>
                </div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && selectedVehicle && (
                <form onSubmit={handleSubmitBooking} className="animate-fade-in-up space-y-6">
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Enter Details</h3>
                            <p className="text-sm text-gray-500">{selectedVehicle.name} • {format(new Date(date), "MMM d")} at {format(new Date(`2000-01-01T${time}`), "h:mm a")}</p>
                        </div>
                        <Button type="button" variant="ghost" onClick={handleBack} className="text-gray-500">Back</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="relative group">
                                <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                                <Input name="name" placeholder="Full Name" required value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="pl-10 h-12 bg-gray-50 border-gray-200 rounded-xl" />
                            </div>
                            <div className="relative group">
                                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                                <Input name="email" type="email" placeholder="Email Address" required value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} className="pl-10 h-12 bg-gray-50 border-gray-200 rounded-xl" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-2">
                                <Popover open={openCountry} onOpenChange={setOpenCountry} modal={false}>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" role="combobox" aria-label="Select country code" aria-expanded={openCountry} className="w-[100px] h-12 justify-between bg-gray-50 border-gray-200 rounded-xl"><span className="truncate">{countryCode}</span><ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" /></Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[250px] p-0 max-h-[300px] overflow-y-auto">
                                        <Command>
                                            <CommandInput placeholder="Search..." />
                                            <CommandList>
                                                <CommandEmpty>No country found.</CommandEmpty>
                                                <CommandGroup>
                                                    {countryCodes.map((c) => (
                                                        <CommandItem key={c.country} onSelect={() => { setCountryCode(c.code); setOpenCountry(false); }}>
                                                            <Check className={cn("mr-2 h-4 w-4", countryCode === c.code ? "opacity-100" : "opacity-0")} />
                                                            <span>{c.flag}</span> {c.code}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <Input name="phone" type="tel" placeholder="Mobile Number" required value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} className="flex-1 h-12 bg-gray-50 border-gray-200 rounded-xl" />
                            </div>

                            <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 flex justify-between items-center">
                                <span className="text-sm font-semibold text-gray-700 flex items-center"><Wallet className="w-4 h-4 mr-2" /> Fare Estimate:</span>
                                <span className="text-xl font-bold text-primary">Get Quote</span>
                            </div>
                        </div>
                    </div>

                    <Button type="submit" disabled={loading} className="w-full h-14 bg-primary hover:bg-primary/90 text-black font-bold text-lg rounded-xl shadow-md">
                        {loading ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing...</> : 'Request Quotation'}
                    </Button>

                    <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase font-bold tracking-wider">Need Help?</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    <a href="mailto:info@taxiserviceksa.com" className="block w-full">
                        <Button
                            type="button"
                            className="w-full h-14 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-base rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                        >
                            <Mail className="w-5 h-5" />
                            Email Inquiry
                        </Button>
                    </a>
                </form>
            )}

            {/* Step 4: Success */}
            {step === 4 && (
                <div className="text-center py-8 animate-fade-in-up">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-emerald-600" />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Request Received!</h3>
                        <p className="text-gray-500 font-medium pb-2 text-sm">Your quotation request has been sent for review.</p>
                    </div>
                    <p className="text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed">
                        We've sent a summary to <strong>{customerEmail}</strong>. Our team will contact you with the official quote shortly.
                    </p>
                    <Button onClick={() => { setStep(1); setPickup(''); setDropoff(''); setDate(''); setTime(''); }} className="bg-primary hover:bg-black text-white font-black py-4 px-8 rounded-xl transition-all">
                        Request Another
                    </Button>
                </div>
            )}


        </div>
    );
}
