'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import {
    Calendar,
    Search,
    Filter,
    Download,
    Trash2,
    Eye,
    X,
    CheckCircle
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
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter,
    SheetClose
} from '@/components/ui/sheet';

interface Booking {
    id: string;
    created_at: string;
    pickup_location: string;
    destination: string; // Changed from dropoff_location to match form
    pickup_date: string;
    pickup_time: string;
    vehicle_type: string;
    passengers: number; // Changed from passenger_count
    luggage: number;
    customer_name: string; // Changed from contact_name
    customer_phone: string; // Changed from contact_phone
    customer_email: string; // Changed from contact_email
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    special_requests?: string;
    total_price?: number;
}

export default function BookingsPage() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
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

            // Allow updating status from the detail view too
            if (selectedBooking && selectedBooking.id === id) {
                setSelectedBooking({ ...selectedBooking, status: newStatus as any });
            }

            // Send Email Notification
            const booking = bookings.find(b => b.id === id);
            if (booking && ['confirmed', 'cancelled', 'completed'].includes(newStatus)) {
                // Non-blocking fire and forget
                fetch('/api/send-status-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        bookingId: booking.id,
                        status: newStatus,
                        customerEmail: booking.customer_email,
                        customerName: booking.customer_name
                    })
                }).catch(err => console.error('Failed to send status email:', err));
            }

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
            if (selectedBooking?.id === id) setSelectedBooking(null);
        } catch (error) {
            console.error('Error deleting booking:', error);
            alert('Failed to delete booking. Ensure you have the right permissions.');
        }
    };

    // Filter Logic
    const filteredBookings = bookings.filter(booking => {
        const matchesSearch =
            booking.customer_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.customer_email?.toLowerCase().includes(searchTerm.toLowerCase());

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
                                            <span className="font-medium text-white">{booking.customer_name}</span>
                                            <span className="text-xs text-neutral-400">{booking.customer_email}</span>
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
                                                {booking.destination}
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
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => setSelectedBooking(booking)}
                                                className="h-8 w-8 text-blue-500 hover:text-blue-400 hover:bg-blue-500/10"
                                            >
                                                <Eye className="h-4 w-4" />
                                            </Button>
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

            {/* Booking Details Sheet */}
            <Sheet open={!!selectedBooking} onOpenChange={(open) => !open && setSelectedBooking(null)}>
                <SheetContent className="overflow-y-auto bg-neutral-900 border-neutral-800 text-white w-full sm:max-w-xl">
                    <SheetHeader className="text-left mb-6">
                        <SheetTitle className="text-2xl font-bold text-white">Booking Details</SheetTitle>
                        <SheetDescription className="text-neutral-400">
                            ID: #{selectedBooking?.id.toUpperCase()}
                        </SheetDescription>
                    </SheetHeader>

                    {selectedBooking && (
                        <div className="space-y-8">
                            {/* Status Section */}
                            <div className="bg-neutral-800/50 p-4 rounded-lg border border-neutral-700">
                                <label className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-2 block">Current Status</label>
                                <div className="flex items-center justify-between">
                                    <Badge className={`${getStatusColor(selectedBooking.status)} text-sm px-3 py-1`}>
                                        {selectedBooking.status.toUpperCase()}
                                    </Badge>
                                    <Select
                                        defaultValue={selectedBooking.status}
                                        onValueChange={(val) => updateStatus(selectedBooking.id, val)}
                                    >
                                        <SelectTrigger className="h-9 w-[150px] bg-neutral-900 border-neutral-600 text-sm">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="bg-neutral-800 border-neutral-700">
                                            <SelectItem value="pending">Pending</SelectItem>
                                            <SelectItem value="confirmed">Confirmed</SelectItem>
                                            <SelectItem value="completed">Completed</SelectItem>
                                            <SelectItem value="cancelled">Cancelled</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Customer Info */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    Customer Information
                                </h3>
                                <div className="space-y-3 bg-neutral-800/30 p-4 rounded-lg">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <span className="block text-xs text-neutral-500 mb-1">Full Name</span>
                                            <span className="text-sm font-medium">{selectedBooking.customer_name}</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs text-neutral-500 mb-1">Phone Number</span>
                                            <a href={`https://wa.me/${selectedBooking.customer_phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="text-sm font-medium text-green-500 hover:text-green-400 flex items-center gap-1">
                                                {selectedBooking.customer_phone}
                                                <span className="text-xs bg-green-900/40 px-1.5 py-0.5 rounded text-green-400">WhatsApp</span>
                                            </a>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <span className="block text-xs text-neutral-500 mb-1">Email Address</span>
                                            <a href={`mailto:${selectedBooking.customer_email}`} className="text-sm font-medium text-blue-400 hover:underline">
                                                {selectedBooking.customer_email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Trip Details */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">Trip Information</h3>
                                <div className="space-y-4 bg-neutral-800/30 p-4 rounded-lg relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-red-500"></div>

                                    <div className="pl-4 relative">
                                        <span className="block w-3 h-3 bg-green-500 rounded-full absolute left-[-21px] top-1.5 border-2 border-neutral-900 shadow-[0_0_0_2px_rgba(34,197,94,0.3)]"></span>
                                        <span className="block text-xs text-neutral-500 mb-1">Pickup Location</span>
                                        <p className="text-base font-medium">{selectedBooking.pickup_location}</p>
                                    </div>

                                    <div className="pl-4 relative">
                                        <span className="block w-3 h-3 bg-red-500 rounded-full absolute left-[-21px] top-1.5 border-2 border-neutral-900 shadow-[0_0_0_2px_rgba(239,68,68,0.3)]"></span>
                                        <span className="block text-xs text-neutral-500 mb-1">Destination</span>
                                        <p className="text-base font-medium">{selectedBooking.destination}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pl-4 pt-2 border-t border-neutral-700/50 mt-4">
                                        <div>
                                            <span className="block text-xs text-neutral-500 mb-1">Date</span>
                                            <span className="font-medium bg-neutral-800 px-2 py-1 rounded text-sm block w-fit">{selectedBooking.pickup_date}</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs text-neutral-500 mb-1">Time</span>
                                            <span className="font-medium bg-neutral-800 px-2 py-1 rounded text-sm block w-fit">{selectedBooking.pickup_time}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Vehicle & Requirements */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">Vehicle & Requirements</h3>
                                <div className="bg-neutral-800/30 p-4 rounded-lg space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="block text-xs text-neutral-500 mb-1">Vehicle Type</span>
                                            <Badge variant="outline" className="text-sm bg-neutral-900 border-neutral-600">
                                                {selectedBooking.vehicle_type}
                                            </Badge>
                                        </div>
                                        <div>
                                            <span className="block text-xs text-neutral-500 mb-1">Total Quote</span>
                                            <span className="text-lg font-bold text-green-400">
                                                {selectedBooking.total_price ? `SAR ${selectedBooking.total_price}` : 'Calculating...'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="block text-xs text-neutral-500 mb-1">Passengers</span>
                                            <span className="font-medium">{selectedBooking.passengers} <span className="text-xs text-neutral-500">People</span></span>
                                        </div>
                                        <div>
                                            <span className="block text-xs text-neutral-500 mb-1">Luggage</span>
                                            <span className="font-medium">{selectedBooking.luggage} <span className="text-xs text-neutral-500">Bags</span></span>
                                        </div>
                                    </div>

                                    <div>
                                        <span className="block text-xs text-neutral-500 mb-1">Special Requests / Notes</span>
                                        <div className="bg-neutral-900 p-3 rounded text-sm text-neutral-300 min-h-[60px] whitespace-pre-wrap">
                                            {selectedBooking.special_requests || "No special requests."}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-neutral-800 space-y-3">
                                {selectedBooking.status !== 'completed' && selectedBooking.status !== 'cancelled' && (
                                    <Button
                                        className="w-full bg-green-500 hover:bg-green-600 text-black font-bold h-12"
                                        onClick={() => updateStatus(selectedBooking.id, 'completed')}
                                    >
                                        <CheckCircle className="w-5 h-5 mr-2" /> Complete Journey & Request Review
                                    </Button>
                                )}

                                <Button className="w-full bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20" onClick={() => deleteBooking(selectedBooking.id)}>
                                    <Trash2 className="w-4 h-4 mr-2" /> Delete This Booking
                                </Button>
                            </div>
                        </div>
                    )}
                </SheetContent>
            </Sheet>
        </div>
    );
}
