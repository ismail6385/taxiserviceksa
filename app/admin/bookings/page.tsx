'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import {
    Calendar,
    Search,
    Filter,
    Download,
    Trash2
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

export default function BookingsPage() {
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
    }, [router]);

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

    const deleteBooking = async (id: string) => {
        if (!confirm('Are you sure you want to delete this booking? This action cannot be undone.')) return;

        try {
            const response = await fetch(`/api/admin/bookings/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to delete');
            }

            setBookings(bookings.filter(b => b.id !== id));
        } catch (error) {
            console.error('Error deleting booking:', error);
            alert('Failed to delete booking. Ensure you have the right permissions.');
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
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        All Bookings
                    </h1>
                    <p className="text-neutral-400 mt-1">Manage all your transport reservations</p>
                </div>
                <Button variant="outline" className="bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-white/5">
                    <Download className="mr-2 h-4 w-4" /> Export CSV
                </Button>
            </div>

            {/* Filters */}
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
                                        <div className="flex items-center justify-end gap-2">
                                            <Select
                                                defaultValue={booking.status}
                                                onValueChange={(val) => updateStatus(booking.id, val)}
                                            >
                                                <SelectTrigger className="h-8 w-[130px] bg-neutral-900/50 border-neutral-600 text-xs">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent className="bg-neutral-800 border-neutral-700">
                                                    <SelectItem value="pending">Pending</SelectItem>
                                                    <SelectItem value="confirmed">Confirmed</SelectItem>
                                                    <SelectItem value="completed">Completed</SelectItem>
                                                    <SelectItem value="cancelled">Cancelled</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => deleteBooking(booking.id)}
                                                className="h-8 w-8 text-red-500 hover:text-red-400 hover:bg-red-500/10"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
