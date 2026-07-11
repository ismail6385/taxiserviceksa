"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { supabase, vehicles } from '@/lib/supabase';
import { BRAND } from '@/lib/brand-config';

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
    const [viaCity, setViaCity] = useState('');
    const [tripType, setTripType] = useState('');

    const [selectedVehicle, setSelectedVehicle] = useState<typeof vehicles[0] | null>(null);
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+966');
    const [openCountry, setOpenCountry] = useState(false);

    const [passengers, setPassengers] = useState(1);

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const buildRequestNotes = () => {
        const notes = [isRoundTrip ? 'Request: Round Trip' : 'Request: One Way'];
        if (tripType) notes.push(`Trip Type: ${tripType}`);
        if (viaCity) notes.push(`Via: ${viaCity}`);
        if (returnDate) notes.push(`Return Date: ${returnDate}`);
        notes.push('Please Provide Quote');
        return notes.join('. ');
    };

    const resetForm = () => {
        setStep(1);
        setPickup('');
        setDropoff('');
        setDate('');
        setTime('');
        setReturnDate('');
        setViaCity('');
        setTripType('');
        setCustomerName('');
        setCustomerEmail('');
        setCustomerPhone('');
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
                special_requests: `${buildRequestNotes()} | Source: ${pathname}`,
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

            // Construct WhatsApp message
            const whatsappMsg = `*New Booking Request - ${BRAND.name}*
*Name:* ${customerName}
*Email:* ${customerEmail}
*Phone:* ${fullPhoneNumber}
*Pickup:* ${pickup}
*Destination:* ${dropoff}
*Date:* ${date}
*Time:* ${time}
*Vehicle:* ${selectedVehicle.name}
*Passengers:* ${passengers}
*Luggage:* ${selectedVehicle.luggage} bags
*Return Trip:* ${isRoundTrip ? 'Yes' : 'No'}${returnDate ? `\n*Return Date:* ${returnDate}` : ''}${viaCity ? `\n*Via:* ${viaCity}` : ''}${tripType ? `\n*Trip Type:* ${tripType}` : ''}
---
Please provide a quote for this journey.`;

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
        const whatsappMsg = `*New Booking Request - ${BRAND.name}*
*Name:* ${customerName}
*Email:* ${customerEmail}
*Phone:* ${fullPhoneNumber}
*Pickup:* ${pickup}
*Destination:* ${dropoff}
*Date:* ${date}
*Time:* ${time}
*Vehicle:* ${selectedVehicle?.name}
*Passengers:* ${passengers}
*Luggage:* ${selectedVehicle?.luggage} bags
*Return Trip:* ${isRoundTrip ? 'Yes' : 'No'}${returnDate ? `\n*Return Date:* ${returnDate}` : ''}${viaCity ? `\n*Via:* ${viaCity}` : ''}${tripType ? `\n*Trip Type:* ${tripType}` : ''}
---
Please provide a quote for this journey.`;
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
        viaCity, setViaCity,
        tripType, setTripType,
        selectedVehicle, setSelectedVehicle,
        customerName, setCustomerName,
        customerEmail, setCustomerEmail,
        customerPhone, setCustomerPhone,
        countryCode, setCountryCode,
        openCountry, setOpenCountry,
        passengers, setPassengers,
        handleBack,
        handleSubmitBooking,
        resetForm,
        sendWhatsAppAgain,
    };
}
