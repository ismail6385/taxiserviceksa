import FleetCard from '@/components/FleetCard';

export default function FleetPage() {
    const fleet = [
        {
            name: "Toyota Camry",
            image: "https://images.unsplash.com/photo-1621007947382-bb3c3968e3bb?q=80&w=2070&auto=format&fit=crop",
            passengers: 4,
            luggage: 2,
            features: ["Comfortable Seating", "AC", "Economic Choice", "City Travel"]
        },
        {
            name: "Hyundai Staria",
            image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?q=80&w=1974&auto=format&fit=crop",
            passengers: 7,
            luggage: 4,
            features: ["Modern Design", "Spacious Interior", "USB Charging", "Family Travel"]
        },
        {
            name: "Hyundai Starex",
            image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
            passengers: 7,
            luggage: 4,
            features: ["Reliable", "AC", "Group Travel", "Airport Transfer"]
        },
        {
            name: "GMC Yukon",
            image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1974&auto=format&fit=crop",
            passengers: 7,
            luggage: 5,
            features: ["Luxury Interior", "Extra Legroom", "Premium Sound", "VIP Experience"]
        },
        {
            name: "Toyota Hiace",
            image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop",
            passengers: 11,
            luggage: 6,
            features: ["High Capacity", "Group Transport", "Umrah Groups", "Reliable"]
        },
        {
            name: "Toyota Coaster",
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
            passengers: 20,
            luggage: 10,
            features: ["Large Group Transport", "Comfortable Seats", "AC", "Long Distance"]
        }
    ];

    return (
        <div className="bg-black min-h-screen pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Premium Fleet</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Experience the journey in style with our diverse collection of luxury vehicles, meticulously maintained for your comfort and safety.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fleet.map((vehicle, index) => (
                        <FleetCard key={index} {...vehicle} />
                    ))}
                </div>
            </div>
        </div>
    );
}
