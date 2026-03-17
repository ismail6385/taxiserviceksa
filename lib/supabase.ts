import { createClient } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Singleton pattern to prevent multiple instances
let supabaseInstance: SupabaseClient | null = null

export const supabase = (() => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storageKey: 'sb-fdojxnluwuzsqeejslzo-auth-token',
      },
    })
  }
  return supabaseInstance
})()

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
        name: "Mercedes S-Class",
        image: "/fleet/mercedes-s-class-vip-chauffeur-service-saudi.webp",
        passengers: 3,
        luggage: 2,
    },
    {
        name: "BMW 7 Series",
        image: "/fleet/bmw-7-series-luxury-chauffeur-saudi.webp",
        passengers: 3,
        luggage: 2,
    },
    {
        name: "Cadillac Escalade",
        image: "/fleet/cadillac-escalade-chauffeur-service-ksa.webp",
        passengers: 7,
        luggage: 4,
    },
    {
        name: "GMC Yukon XL / Denali",
        image: "/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp",
        passengers: 7,
        luggage: 5,
    },
    {
        name: "Genesis G80 VIP",
        image: "/fleet/genesis-g80-luxury-transport-ksa.webp",
        passengers: 3,
        luggage: 2,
    },
    {
        name: "Mercedes Vito",
        image: "/fleet/mercedes-vito-vip-shuttle-service-ksa.webp",
        passengers: 7,
        luggage: 4,
    },
    {
        name: "Ford Taurus 2025",
        image: "/fleet/ford-taurus-executive-sedan-saudi-arabia.webp",
        passengers: 3,
        luggage: 2,
    },
    {
        name: "Mercedes Sprinter",
        image: "/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp",
        passengers: 14,
        luggage: 4,
    },
    {
        name: "Hyundai Staria VIP",
        image: "/hyundai-staria.webp",
        passengers: 7,
        luggage: 4,
    },
    {
        name: "Toyota Hiace",
        image: "/toyota-hiace.webp",
        passengers: 11,
        luggage: 16,
    },
    {
        name: "Toyota Coaster",
        image: "/toyota-coaster.webp",
        passengers: 17,
        luggage: 20,
    },
    {
        name: "Toyota Camry",
        image: "/toyota-camry.webp",
        passengers: 4,
        luggage: 2,
    },
    {
        name: "Hyundai Starex",
        image: "/hyundai-starex.webp",
        passengers: 7,
        luggage: 10,
    },
    {
        name: "Luxurious Bus",
        image: "/fleet/luxurious-bus.webp",
        passengers: 25,
        luggage: 30,
    }
];
