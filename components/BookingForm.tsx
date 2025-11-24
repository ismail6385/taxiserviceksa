"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, MapPin, Phone, User, Clock, Car, Mail, ArrowRight, Briefcase } from 'lucide-react';

export default function BookingForm() {
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        pickup: '',
        dropoff: '',
        date: '',
        time: '',
        vehicle: 'Toyota Camry',
        passengers: '1',
        serviceType: ''
    });

    useEffect(() => {
        const service = searchParams.get('service');
        if (service) {
            setFormData(prev => ({ ...prev, serviceType: service }));
        }
    }, [searchParams]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Construct WhatsApp message
        const message = `New Booking Request:%0A
Service: ${formData.serviceType || 'General Booking'}%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Pickup: ${formData.pickup}%0A
Dropoff: ${formData.dropoff}%0A
Date: ${formData.date}%0A
Time: ${formData.time}%0A
Vehicle: ${formData.vehicle}%0A
Passengers: ${formData.passengers}`;

        // Open WhatsApp
        window.open(`https://wa.me/03176243861?text=${message}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-md mx-auto relative overflow-hidden group">
            {/* Decorative gradient blob */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-gradient-to-br from-primary to-yellow-500 p-3 rounded-xl shadow-lg shadow-primary/20">
                        <Car className="w-6 h-6 text-black" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">Quick Booking</h3>
                        <p className="text-gray-400 text-xs uppercase tracking-wider">Best Rates Guaranteed</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Service Type (Auto-filled) */}
                    <div className="relative group/input">
                        <Briefcase className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                        <Input
                            name="serviceType"
                            placeholder="Service Type (e.g., Umrah Taxi)"
                            value={formData.serviceType}
                            className="pl-10 h-12 bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:bg-black/40 transition-all rounded-xl"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative group/input">
                            <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                            <Input
                                name="name"
                                placeholder="Name"
                                required
                                className="pl-10 h-12 bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:bg-black/40 transition-all rounded-xl"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative group/input">
                            <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                            <Input
                                name="email"
                                type="email"
                                placeholder="Email"
                                required
                                className="pl-10 h-12 bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:bg-black/40 transition-all rounded-xl"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="relative group/input">
                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                        <Input
                            name="phone"
                            type="tel"
                            placeholder="Phone Number (WhatsApp)"
                            required
                            className="pl-10 h-12 bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:bg-black/40 transition-all rounded-xl"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative group/input">
                            <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                            <Input
                                name="pickup"
                                placeholder="Pickup Location"
                                required
                                className="pl-10 h-12 bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:bg-black/40 transition-all rounded-xl"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative group/input">
                            <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                            <Input
                                name="dropoff"
                                placeholder="Dropoff Location"
                                required
                                className="pl-10 h-12 bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:bg-black/40 transition-all rounded-xl"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative group/input">
                            <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                            <Input
                                name="date"
                                type="date"
                                required
                                className="pl-10 h-12 bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:bg-black/40 transition-all rounded-xl [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative group/input">
                            <Clock className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                            <Input
                                name="time"
                                type="time"
                                required
                                className="pl-10 h-12 bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:bg-black/40 transition-all rounded-xl [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative group/input">
                            <Car className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                            <select
                                name="vehicle"
                                className="w-full h-12 pl-10 pr-3 rounded-xl bg-black/20 border border-white/10 text-white focus:border-primary/50 focus:bg-black/40 appearance-none transition-all cursor-pointer"
                                onChange={handleChange}
                                value={formData.vehicle}
                            >
                                <option value="Toyota Camry" className="bg-zinc-900">Toyota Camry</option>
                                <option value="Hyundai Staria" className="bg-zinc-900">Hyundai Staria</option>
                                <option value="Hyundai Starex" className="bg-zinc-900">Hyundai Starex</option>
                                <option value="GMC Yukon" className="bg-zinc-900">GMC Yukon</option>
                                <option value="Toyota Hiace" className="bg-zinc-900">Toyota Hiace</option>
                                <option value="Toyota Coaster" className="bg-zinc-900">Toyota Coaster</option>
                            </select>
                        </div>
                        <div className="relative group/input">
                            <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 group-focus-within/input:text-primary transition-colors" />
                            <Input
                                name="passengers"
                                type="number"
                                min="1"
                                placeholder="Pax"
                                required
                                className="pl-10 h-12 bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:bg-black/40 transition-all rounded-xl"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-yellow-500 text-black hover:from-yellow-400 hover:to-yellow-600 font-bold py-6 text-lg rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] group/btn">
                        <span className="mr-2">Book via WhatsApp</span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                </form>
            </div>
        </div>
    );
}
