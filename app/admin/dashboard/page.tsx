'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import {
    LogOut,
    Calendar,
    Users,
    Car,
    Clock,
    MapPin,
    CheckCircle2,
    XCircle,
    AlertCircle,
    Search,
    Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface Booking {
    id: string;
    created_at: string;
    pickup_location: string;
    dropoff_location: string;
    pickup_date: string;
    pickup_time: string;
    vehicle_type: string;
    passenger_count: number;
    contact_name: string;
    contact_phone: string;
    contact_email: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    total_price?: number;
}

export default function AdminDashboard() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const router = useRouter();


    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/admin/login');
            } else {
                fetchBookings();
            }
        };
        checkSession();
    }, [router, supabase]);

    const fetchBookings = async () => {
        try {
            const { data, error } = await supabase
                .from('bookings')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setBookings(data || []);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: string, newStatus: string) => {
        try {
            const { error } = await supabase
                .from('bookings')
                .update({ status: newStatus })
                .eq('id', id);

            if (error) throw error;

            // Update local state
            setBookings(bookings.map(b =>
                b.id === id ? { ...b, status: newStatus as any } : b
            ));
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    // Filter Logic
    const filteredBookings = bookings.filter(booking => {
        const matchesSearch =
            booking.contact_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.contact_email?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'confirmed': return 'bg-green-500/10 text-green-500 border-green-500/20';
            case 'pending': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
            case 'cancelled': return 'bg-red-500/10 text-red-500 border-red-500/20';
            case 'completed': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
            default: return 'bg-gray-500/10 text-gray-500';
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Dashboard Overview
                    </h1>
                    <div className="text-sm text-neutral-400">
                        Welcome back, Admin
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
                        <div className="flex items-center justify-between pb-2">
                            <h3 className="text-sm font-medium text-neutral-400">Total Bookings</h3>
                            <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-white">{bookings.length}</div>
                    </div>
                    <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
                        <div className="flex items-center justify-between pb-2">
                            <h3 className="text-sm font-medium text-neutral-400">Pending</h3>
                            <Clock className="h-4 w-4 text-yellow-500" />
                        </div>
                        <div className="text-2xl font-bold text-yellow-500">
                            {bookings.filter(b => b.status === 'pending').length}
                        </div>
                    </div>
                    <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
                        <div className="flex items-center justify-between pb-2">
                            <h3 className="text-sm font-medium text-neutral-400">Confirmed</h3>
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="text-2xl font-bold text-green-500">
                            {bookings.filter(b => b.status === 'confirmed').length}
                        </div>
                    </div>
                    <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
                        <div className="flex items-center justify-between pb-2">
                            <h3 className="text-sm font-medium text-neutral-400">Top Destination</h3>
                            <MapPin className="h-4 w-4 text-blue-500" />
                        </div>
                        <div className="text-2xl font-bold text-blue-500 truncate">
                            Makkah
                        </div>
                    </div>
                </div>

                {/* Dashboard Actions */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 h-5 w-5 text-neutral-500" />
                        <Input
                            placeholder="Search by name, email, or ID..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-primary"
                        />
                    </div>
                    <div className="w-full md:w-[200px]">
                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                            <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white">
                                <div className="flex items-center gap-2">
                                    <Filter className="w-4 h-4" />
                                    <SelectValue placeholder="All Status" />
                                </div>
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="confirmed">Confirmed</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Bookings Table */}
                <div className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden">
                    <Table>
                        <TableHeader className="bg-neutral-900/50">
                            <TableRow className="border-neutral-700 hover:bg-transparent">
                                <TableHead className="text-neutral-400">Booking ID</TableHead>
                                <TableHead className="text-neutral-400">Customer</TableHead>
                                <TableHead className="text-neutral-400">Trip Details</TableHead>
                                <TableHead className="text-neutral-400">Vehicle</TableHead>
                                <TableHead className="text-neutral-400">Date & Time</TableHead>
                                <TableHead className="text-neutral-400">Status</TableHead>
                                <TableHead className="text-neutral-400 text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredBookings.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="text-center py-12 text-neutral-500">
                                        No bookings found matching your filters.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredBookings.map((booking) => (
                                    <TableRow key={booking.id} className="border-neutral-700 hover:bg-neutral-700/50 transition-colors">
                                        <TableCell className="font-mono text-xs text-neutral-400">
                                            {booking.id.slice(0, 8)}...
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span className="font-medium text-white">{booking.contact_name}</span>
                                                <span className="text-xs text-neutral-400">{booking.contact_email}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col gap-1 text-sm">
                                                <div className="flex items-center gap-1 text-neutral-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                    {booking.pickup_location}
                                                </div>
                                                <div className="flex items-center gap-1 text-neutral-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                                    {booking.dropoff_location}
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className="bg-neutral-900 border-neutral-600 text-neutral-300">
                                                {booking.vehicle_type}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-sm text-neutral-300">
                                            <div>{booking.pickup_date}</div>
                                            <div className="text-xs text-neutral-500">{booking.pickup_time}</div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className={`${getStatusColor(booking.status)} uppercase text-[10px] tracking-wider`}>
                                                {booking.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Select
                                                defaultValue={booking.status}
                                                onValueChange={(val) => updateStatus(booking.id, val)}
                                            >
                                                <SelectTrigger className="h-8 w-[130px] ml-auto bg-neutral-900/50 border-neutral-600 text-xs">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent className="bg-neutral-800 border-neutral-700">
                                                    <SelectItem value="pending">Pending</SelectItem>
                                                    <SelectItem value="confirmed">Confirmed</SelectItem>
                                                    <SelectItem value="completed">Completed</SelectItem>
                                                    <SelectItem value="cancelled">Cancelled</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
