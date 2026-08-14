"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { vehicles } from '@/lib/supabase';
import { BRAND } from '@/lib/brand-config';
import { validateBookingForm } from '@/lib/booking-validation';

export function useBookingFlow() {
    const pathname = usePathname();

    const [step, setStep] = useState(1); // 1: Search, 2: Vehicles, 3: Details, 4: Success
    const [loading, setLoading] = useState(false);

    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState('');
    const [isRoundTrip, setIsRoundTrip] = useState(false);
    const [returnDate, setReturnDate] = useState('');
    const [returnTime, setReturnTime] = useState('');
    const [returnPickupLocation, setReturnPickupLocation] = useState('');
    const [returnDropoffLocation, setReturnDropoffLocation] = useState('');
    const [viaCity, setViaCity] = useState('');
    const [tripType, setTripType] = useState('');
    const [preferredTimeNote, setPreferredTimeNote] = useState('');

    const [selectedVehicle, setSelectedVehicle] = useState<typeof vehicles[0] | null>(null);
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+966');
    const [openCountry, setOpenCountry] = useState(false);

    const [passengers, setPassengers] = useState(1);
    const [luggage, setLuggage] = useState(2);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const buildRequestNotes = () => {
        const notes = [isRoundTrip ? 'Request: Round Trip' : 'Request: One Way'];
        if (tripType) notes.push(`Trip Type: ${tripType}`);
        if (viaCity) notes.push(`Via: ${viaCity}`);
        if (preferredTimeNote.trim()) notes.push(`Preferred Time: ${preferredTimeNote.trim()}`);
        notes.push('Please Provide Quote');
        return notes.join('. ');
    };

    const resetForm = () => {
        setStep(1);
        setPickup('');
        setDropoff('');
        setDate('');
        setTime('');
        setIsRoundTrip(false);
        setReturnDate('');
        setReturnTime('');
        setReturnPickupLocation('');
        setReturnDropoffLocation('');
        setViaCity('');
        setTripType('');
        setPreferredTimeNote('');
        setCustomerName('');
        setCustomerEmail('');
        setCustomerPhone('');
        setLuggage(2);
        setFieldErrors({});
    };

    const buildWhatsAppMessage = (fullPhoneNumber: string) => `*New Booking Request - ${BRAND.name}*
*Name:* ${customerName}
*Email:* ${customerEmail}
*Phone:* ${fullPhoneNumber}
*Pickup:* ${pickup}
*Destination:* ${dropoff}
*Date:* ${date}
*Time:* ${time}
*Vehicle:* ${selectedVehicle?.name}
*Passengers:* ${passengers}
*Luggage:* ${luggage} bags
*Return Trip:* ${isRoundTrip ? 'Yes' : 'No'}${returnDate ? `\n*Return Date:* ${returnDate}` : ''}${returnTime ? `\n*Return Time:* ${returnTime}` : ''}${isRoundTrip && (returnPickupLocation || returnDropoffLocation) ? `\n*Return Route:* ${returnPickupLocation || dropoff} → ${returnDropoffLocation || pickup}` : ''}${viaCity ? `\n*Via:* ${viaCity}` : ''}${tripType ? `\n*Trip Type:* ${tripType}` : ''}
---
Please provide a quote for this journey.`;

    const handleSubmitBooking = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedVehicle) return;

        const fullPhoneNumber = `${countryCode}${customerPhone}`;
        const bookingInput = {
            customer_name: customerName,
            customer_email: customerEmail,
            customer_phone: fullPhoneNumber,
            pickup_location: pickup,
            destination: dropoff,
            pickup_date: date,
            pickup_time: time,
            vehicle_type: selectedVehicle.name,
            vehicle_image: selectedVehicle.image,
            passengers,
            luggage,
            has_return_trip: isRoundTrip,
            return_date: isRoundTrip ? (returnDate || null) : null,
            return_time: isRoundTrip ? (returnTime || null) : null,
            return_pickup_location: isRoundTrip ? (returnPickupLocation || null) : null,
            return_destination: isRoundTrip ? (returnDropoffLocation || null) : null,
        };

        const { valid, fieldErrors: errors } = validateBookingForm(bookingInput);
        if (!valid) {
            setFieldErrors(errors);
            return;
        }
        setFieldErrors({});
        setLoading(true);

        try {
            const res = await fetch('/api/booking/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...bookingInput,
                    special_requests: `${buildRequestNotes()} | Source: ${pathname}`,
                    status: 'pending',
                }),
            });

            if (!res.ok) {
                const result = await res.json().catch(() => ({} as { error?: string; fieldErrors?: Record<string, string> }));
                if (result.fieldErrors) {
                    setFieldErrors(result.fieldErrors);
                    setLoading(false);
                    return;
                }
                throw new Error(result.error || 'Booking failed');
            }

            const whatsappMsg = buildWhatsAppMessage(fullPhoneNumber);
            const encodedMsg = encodeURIComponent(whatsappMsg);
            const whatsappUrl = `https://wa.me/${BRAND.contact.whatsapp.replace('+', '')}?text=${encodedMsg}`;

            setStep(4); // Success

            // Redirect to WhatsApp after a short delay
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
            }, 1500);
        } catch (error) {
            console.error(error);
            alert('Booking failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const sendWhatsAppAgain = () => {
        const fullPhoneNumber = `${countryCode}${customerPhone}`;
        const whatsappMsg = buildWhatsAppMessage(fullPhoneNumber);
        const encodedMsg = encodeURIComponent(whatsappMsg);
        window.open(`https://wa.me/${BRAND.contact.whatsapp.replace('+', '')}?text=${encodedMsg}`, '_blank');
    };

    return {
        step, setStep,
        loading,
        pickup, setPickup,
        dropoff, setDropoff,
        date, setDate,
        time, setTime,
        isRoundTrip, setIsRoundTrip,
        returnDate, setReturnDate,
        returnTime, setReturnTime,
        returnPickupLocation, setReturnPickupLocation,
        returnDropoffLocation, setReturnDropoffLocation,
        viaCity, setViaCity,
        tripType, setTripType,
        preferredTimeNote, setPreferredTimeNote,
        selectedVehicle, setSelectedVehicle,
        customerName, setCustomerName,
        customerEmail, setCustomerEmail,
        customerPhone, setCustomerPhone,
        countryCode, setCountryCode,
        openCountry, setOpenCountry,
        passengers, setPassengers,
        luggage, setLuggage,
        fieldErrors, setFieldErrors,
        handleBack,
        handleSubmitBooking,
        resetForm,
        sendWhatsAppAgain,
    };
}
