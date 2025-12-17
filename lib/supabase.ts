import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type BookingData = {
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    pickup_location: string;
    destination: string;
    pickup_date: string;
    pickup_time: string;
    vehicle_type: string;
    vehicle_image?: string;
    passengers: number;
    luggage: number;
    special_requests?: string;
    status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
};

export const vehicles = [
    {
        name: 'GMC Yukon',
        image: '/gmc-yukon.jpg',
        passengers: 7,
        luggage: 5,
        priceRange: 'SAR 250 - 400'
    },
    {
        name: 'Toyota Camry',
        image: '/toyota-camry.jpg',
        passengers: 4,
        luggage: 3,
        priceRange: 'SAR 100 - 150'
    },
    {
        name: 'Hyundai Staria',
        image: '/hyundai-staria.jpg',
        passengers: 7,
        luggage: 6,
        priceRange: 'SAR 180 - 250'
    },
    {
        name: 'Toyota Hiace',
        image: '/toyota-hiace.jpg',
        passengers: 12,
        luggage: 10,
        priceRange: 'SAR 300 - 450'
    },
    {
        name: 'Toyota Coaster',
        image: '/toyota-coaster.jpg',
        passengers: 23,
        luggage: 15,
        priceRange: 'SAR 400 - 600'
    },
    {
        name: 'Hyundai Starex',
        image: '/hyundai-starex.jpg',
        passengers: 7,
        luggage: 5,
        priceRange: 'SAR 150 - 220'
    }
];
