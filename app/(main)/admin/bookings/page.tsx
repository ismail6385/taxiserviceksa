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
    CheckCircle,
    Clock,
    Car,
    Copy,
    Share2,
    MessageSquare,
    Edit2,
    Save,
    Plus,
    Printer
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
} from '@/components/ui/sheet';

interface Booking {
    id: string;
    created_at: string;
    pickup_location: string;
    destination: string;
    pickup_date: string;
    pickup_time: string;
    vehicle_type: string;
    passengers: number;
    luggage: number;
    customer_name: string;
    customer_phone: string;
    customer_email: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    special_requests?: string;
    total_price?: number;
}

export default function BookingsPage() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    // Sheet State
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedBooking, setEditedBooking] = useState<Booking | null>(null);
    const [isCreating, setIsCreating] = useState(false);
    const [newBooking, setNewBooking] = useState<Partial<Booking>>({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        pickup_location: '',
        destination: '',
        pickup_date: new Date().toISOString().split('T')[0],
        pickup_time: '12:00',
        vehicle_type: 'Sedan',
        passengers: 1,
        luggage: 0,
        status: 'pending',
        total_price: 0,
        special_requests: ''
    });

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
                setEditedBooking({ ...(editedBooking as Booking), status: newStatus as any });
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
            if (selectedBooking?.id === id) {
                setSelectedBooking(null);
                setIsEditing(false);
            }
        } catch (error) {
            console.error('Error deleting booking:', error);
            alert('Failed to delete booking. Ensure you have the right permissions.');
        }
    };

    const saveDetails = async () => {
        if (!editedBooking) return;
        try {
            const { id, created_at, status, ...updateData } = editedBooking;
            const { error } = await supabase
                .from('bookings')
                .update(updateData)
                .eq('id', id);

            if (error) throw error;

            // Update local state
            setBookings(bookings.map(b => b.id === id ? editedBooking : b));
            setSelectedBooking(editedBooking);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating booking details:', error);
            alert("Failed to update booking details.");
        }
    };

    const saveNewBooking = async () => {
        try {
            const { data, error } = await supabase
                .from('bookings')
                .insert([newBooking])
                .select();

            if (error) throw error;

            if (data && data[0]) {
                setBookings([data[0], ...bookings]);
                setIsCreating(false);
                // Reset new booking state
                setNewBooking({
                    customer_name: '',
                    customer_email: '',
                    customer_phone: '',
                    pickup_location: '',
                    destination: '',
                    pickup_date: new Date().toISOString().split('T')[0],
                    pickup_time: '12:00',
                    vehicle_type: 'Sedan',
                    passengers: 1,
                    luggage: 0,
                    status: 'pending',
                    total_price: 0,
                    special_requests: ''
                });
                alert('Booking created successfully!');
            }
        } catch (error) {
            console.error('Error creating booking:', error);
            alert('Failed to create booking.');
        }
    };

    const openBookingDetails = (booking: Booking) => {
        setSelectedBooking(booking);
        setEditedBooking(booking);
        setIsEditing(false);
    };

    // Filter Logic
    const filteredBookings = bookings.filter(booking => {
        const matchesSearch =
            booking.customer_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.customer_email?.toLowerCase().includes(searchTerm.toLowerCase());

        let matchesStatus = false;
        const today = new Date().toLocaleDateString('en-CA');

        if (statusFilter === 'all') {
            matchesStatus = true;
        } else if (statusFilter === 'today') {
            matchesStatus = booking.pickup_date === today;
        } else if (statusFilter === 'upcoming') {
            matchesStatus = booking.pickup_date > today;
        } else {
            matchesStatus = booking.status === statusFilter;
        }

        return matchesSearch && matchesStatus;
    });

    const handleExport = () => {
        const headers = ["ID", "Date", "Time", "Customer", "Phone", "Email", "Pickup", "Dropoff", "Vehicle", "Status"];
        const rows = filteredBookings.map(b => [
            b.id, b.pickup_date, b.pickup_time, `"${b.customer_name}"`, `"${b.customer_phone}"`,
            `"${b.customer_email}"`, `"${b.pickup_location}"`, `"${b.destination}"`, b.vehicle_type, b.status
        ]);
        const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
        const url = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `bookings_export_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'confirmed': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
            case 'pending': return 'bg-amber-100 text-amber-800 border-amber-200';
            case 'cancelled': return 'bg-rose-100 text-rose-800 border-rose-200';
            case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const shareB2BOptions = (booking: Booking) => {
        const text = `*B2B Booking Request* 🚕\n\n*Ref:* #${booking.id.slice(0, 8).toUpperCase()}\n*From:* ${booking.pickup_location}\n*To:* ${booking.destination}\n*Date:* ${booking.pickup_date} at ${booking.pickup_time}\n*Vehicle:* ${booking.vehicle_type}\n*Pax:* ${booking.passengers} | *Bags:* ${booking.luggage}\n\n*Notes:* ${booking.special_requests || 'N/A'}\n\nPlease confirm if you can cover this.`;

        navigator.clipboard.writeText(text).then(() => {
            alert('B2B details copied to clipboard! You can paste it to your partner.');
        });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="text-gray-900 p-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
                        Booking Management
                    </h1>
                    <p className="text-gray-500 text-sm">Monitor and process your transport reservations easily.</p>
                </div>
                <div className="flex gap-3">
                    <Button onClick={() => setIsCreating(true)} className="bg-primary text-black hover:bg-black hover:text-white font-bold shadow-sm">
                        <Plus className="mr-2 h-4 w-4" /> New Booking
                    </Button>
                    <Button variant="outline" onClick={handleExport} className="bg-white hover:bg-gray-50 border-gray-200 text-gray-700 shadow-sm">
                        <Download className="mr-2 h-4 w-4" /> Export
                    </Button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white border border-gray-200 shadow-sm p-5 rounded-2xl">
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Total</p>
                    <p className="text-3xl font-bold text-gray-900">{bookings.length}</p>
                </div>
                <div className="bg-orange-50/50 border border-orange-200 p-5 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Clock className="w-12 h-12 text-orange-500" /></div>
                    <p className="text-orange-600 text-xs font-semibold uppercase tracking-wider mb-1">Pending</p>
                    <p className="text-3xl font-bold text-orange-600">{bookings.filter(b => b.status === 'pending').length}</p>
                </div>
                <div className="bg-emerald-50/50 border border-emerald-200 p-5 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><CheckCircle className="w-12 h-12 text-emerald-500" /></div>
                    <p className="text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-1">Confirmed</p>
                    <p className="text-3xl font-bold text-emerald-600">{bookings.filter(b => b.status === 'confirmed').length}</p>
                </div>
                <div className="bg-blue-50/50 border border-blue-200 p-5 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Car className="w-12 h-12 text-blue-500" /></div>
                    <p className="text-blue-700 text-xs font-semibold uppercase tracking-wider mb-1">Completed</p>
                    <p className="text-3xl font-bold text-blue-600">{bookings.filter(b => b.status === 'completed').length}</p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                        placeholder="Search by name, email, or ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary shadow-sm"
                    />
                </div>
                <div className="w-full md:w-[250px]">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="bg-white border-gray-200 text-gray-900 shadow-sm">
                            <div className="flex items-center gap-2">
                                <Filter className="w-4 h-4" />
                                <SelectValue placeholder="All Bookings" />
                            </div>
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-200 text-gray-900 shadow-sm">
                            <SelectItem value="all">All Bookings</SelectItem>
                            <SelectItem value="today">Today's Pickups</SelectItem>
                            <SelectItem value="upcoming">Upcoming (Tomorrow+)</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="confirmed">Confirmed</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Bookings Table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <Table>
                    <TableHeader className="bg-gray-50">
                        <TableRow className="border-gray-200 hover:bg-transparent">
                            <TableHead className="text-gray-500 font-semibold">Booking ID</TableHead>
                            <TableHead className="text-gray-500 font-semibold">Customer</TableHead>
                            <TableHead className="text-gray-500 font-semibold">Trip Details</TableHead>
                            <TableHead className="text-gray-500 font-semibold">Vehicle</TableHead>
                            <TableHead className="text-gray-500 font-semibold">Date & Time</TableHead>
                            <TableHead className="text-gray-500 font-semibold">Status</TableHead>
                            <TableHead className="text-gray-500 font-semibold text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredBookings.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="text-center py-12 text-gray-500">
                                    No bookings found matching your filters.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredBookings.map((booking) => {
                                const isToday = booking.pickup_date === new Date().toLocaleDateString('en-CA');
                                const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
                                const isTomorrow = booking.pickup_date === tomorrow.toLocaleDateString('en-CA');
                                const actionNeeded = (isToday || isTomorrow) && booking.status !== 'completed' && booking.status !== 'cancelled';

                                return (
                                    <TableRow key={booking.id} className={`border-gray-200 hover:bg-gray-50 transition-colors \${actionNeeded ? 'bg-red-50/50' : ''}`}>
                                        <TableCell className="font-mono text-xs text-gray-500">
                                            {booking.id.slice(0, 8)}...
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span className="font-medium text-gray-900">{booking.customer_name}</span>
                                                <span className="text-xs text-gray-500">{booking.customer_email}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col gap-1 text-sm">
                                                <div className="flex items-center gap-1 text-gray-700">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                    {booking.pickup_location}
                                                </div>
                                                <div className="flex items-center gap-1 text-gray-700">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                                    {booking.destination}
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className="bg-gray-100 border-gray-200 text-gray-800 font-medium whitespace-nowrap">
                                                {booking.vehicle_type}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-sm text-gray-700">
                                            <div className="flex items-center gap-2">
                                                <span className={actionNeeded ? 'text-red-600 font-bold animate-pulse' : 'text-gray-700'}>{booking.pickup_date}</span>
                                                {isToday && <Badge className="bg-red-500 hover:bg-red-600 animate-pulse text-[10px] uppercase border-none text-white px-1.5 py-0">Today</Badge>}
                                                {isTomorrow && <Badge className="bg-orange-500 hover:bg-orange-600 text-[10px] uppercase border-none text-white px-1.5 py-0">Tomorrow</Badge>}
                                            </div>
                                            <div className="text-xs text-gray-500">{booking.pickup_time}</div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className={`\${getStatusColor(booking.status)} uppercase text-[10px] tracking-wider`}>
                                                {booking.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => openBookingDetails(booking)}
                                                    className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                                >
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                                <Select
                                                    defaultValue={booking.status}
                                                    onValueChange={(val) => updateStatus(booking.id, val)}
                                                >
                                                    <SelectTrigger className="h-8 w-[130px] bg-white border-gray-200 text-xs shadow-sm focus:ring-1 focus:ring-primary">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-white border-gray-200 text-gray-900 shadow-lg">
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
                                                    className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Booking Details Sheet */}
            <Sheet open={!!selectedBooking} onOpenChange={(open) => {
                if (!open) {
                    setSelectedBooking(null);
                    setIsEditing(false);
                }
            }}>
                <SheetContent className="overflow-y-auto bg-white border-l border-gray-200 text-gray-900 w-full sm:max-w-xl">
                    <div className="flex justify-between items-start mb-6">
                        <SheetHeader className="text-left">
                            <SheetTitle className="text-2xl font-bold text-gray-900">Booking Details</SheetTitle>
                            <SheetDescription className="text-gray-500">
                                ID: #{selectedBooking?.id.toUpperCase()}
                            </SheetDescription>
                        </SheetHeader>
                        {!isEditing ? (
                            <Button variant="outline" size="sm" onClick={() => setIsEditing(true)} className="bg-white text-gray-700 hover:bg-gray-50 border-gray-200">
                                <Edit2 className="w-4 h-4 mr-2" /> Edit Details
                            </Button>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm" onClick={() => { setIsEditing(false); setEditedBooking(selectedBooking); }} className="text-gray-500 hover:bg-gray-100">
                                    Cancel
                                </Button>
                                <Button size="sm" onClick={saveDetails} className="bg-primary text-black hover:bg-black hover:text-white transition-all font-bold">
                                    <Save className="w-4 h-4 mr-2" /> Save
                                </Button>
                            </div>
                        )}
                    </div>

                    {selectedBooking && editedBooking && (
                        <div className="space-y-8">
                            {/* Status Section */}
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2 block">Current Status</label>
                                <div className="flex items-center justify-between">
                                    <Badge className={`\${getStatusColor(selectedBooking.status)} text-sm px-3 py-1`}>
                                        {selectedBooking.status.toUpperCase()}
                                    </Badge>
                                    <Select
                                        defaultValue={selectedBooking.status}
                                        onValueChange={(val) => updateStatus(selectedBooking.id, val)}
                                        disabled={isEditing}
                                    >
                                        <SelectTrigger className="h-9 w-[150px] bg-white border-gray-300 text-sm shadow-sm disabled:opacity-50">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white border-gray-200 text-gray-900">
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
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    Customer Information
                                </h3>
                                <div className="space-y-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <span className="block text-xs text-gray-500 mb-1">Full Name</span>
                                            {isEditing ? (
                                                <Input value={editedBooking.customer_name} onChange={(e) => setEditedBooking({ ...editedBooking, customer_name: e.target.value })} className="h-8 text-sm bg-white" />
                                            ) : (
                                                <span className="text-sm font-medium text-gray-900">{selectedBooking.customer_name}</span>
                                            )}
                                        </div>
                                        <div>
                                            <span className="block text-xs text-gray-500 mb-1">Phone Number</span>
                                            {isEditing ? (
                                                <Input value={editedBooking.customer_phone} onChange={(e) => setEditedBooking({ ...editedBooking, customer_phone: e.target.value })} className="h-8 text-sm bg-white" />
                                            ) : (
                                                <a href={`https://wa.me/\${selectedBooking.customer_phone.replace(/\\D/g, '')}`} target="_blank" rel="noreferrer" className="text-sm font-medium text-green-600 hover:text-green-700 flex items-center gap-1">
                                                    {selectedBooking.customer_phone}
                                                    <span className="text-xs bg-green-100 px-1.5 py-0.5 rounded text-green-700">WhatsApp</span>
                                                </a>
                                            )}
                                        </div>
                                        <div className="sm:col-span-2">
                                            <span className="block text-xs text-gray-500 mb-1">Email Address</span>
                                            {isEditing ? (
                                                <Input value={editedBooking.customer_email} onChange={(e) => setEditedBooking({ ...editedBooking, customer_email: e.target.value })} className="h-8 text-sm bg-white" />
                                            ) : (
                                                <a href={`mailto:\${selectedBooking.customer_email}`} className="text-sm font-medium text-blue-600 hover:underline">
                                                    {selectedBooking.customer_email}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Trip Details */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Trip Information</h3>
                                <div className="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-100 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-red-500"></div>

                                    <div className="pl-4 relative">
                                        <span className="block w-3 h-3 bg-green-500 rounded-full absolute left-[-21px] top-1.5 border-2 border-white shadow-[0_0_0_2px_rgba(34,197,94,0.3)]"></span>
                                        <span className="block text-xs text-gray-500 mb-1">Pickup Location</span>
                                        {isEditing ? (
                                            <Input value={editedBooking.pickup_location} onChange={(e) => setEditedBooking({ ...editedBooking, pickup_location: e.target.value })} className="h-8 text-sm bg-white" />
                                        ) : (
                                            <p className="text-base font-medium text-gray-900">{selectedBooking.pickup_location}</p>
                                        )}
                                    </div>

                                    <div className="pl-4 relative">
                                        <span className="block w-3 h-3 bg-red-500 rounded-full absolute left-[-21px] top-1.5 border-2 border-white shadow-[0_0_0_2px_rgba(239,68,68,0.3)]"></span>
                                        <span className="block text-xs text-gray-500 mb-1">Destination</span>
                                        {isEditing ? (
                                            <Input value={editedBooking.destination} onChange={(e) => setEditedBooking({ ...editedBooking, destination: e.target.value })} className="h-8 text-sm bg-white" />
                                        ) : (
                                            <p className="text-base font-medium text-gray-900">{selectedBooking.destination}</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pl-4 pt-4 border-t border-gray-200 mt-4">
                                        <div>
                                            <span className="block text-xs text-gray-500 mb-1">Date</span>
                                            {isEditing ? (
                                                <Input type="date" value={editedBooking.pickup_date} onChange={(e) => setEditedBooking({ ...editedBooking, pickup_date: e.target.value })} className="h-8 text-sm bg-white" />
                                            ) : (
                                                <span className="font-medium bg-white border border-gray-200 px-2 py-1 rounded text-sm block w-fit text-gray-900">{selectedBooking.pickup_date}</span>
                                            )}
                                        </div>
                                        <div>
                                            <span className="block text-xs text-gray-500 mb-1">Time</span>
                                            {isEditing ? (
                                                <Input type="time" value={editedBooking.pickup_time} onChange={(e) => setEditedBooking({ ...editedBooking, pickup_time: e.target.value })} className="h-8 text-sm bg-white" />
                                            ) : (
                                                <span className="font-medium bg-white border border-gray-200 px-2 py-1 rounded text-sm block w-fit text-gray-900">{selectedBooking.pickup_time}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Vehicle & Requirements */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Vehicle & Requirements</h3>
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="block text-xs text-gray-500 mb-1">Vehicle Type</span>
                                            {isEditing ? (
                                                <Select value={editedBooking.vehicle_type} onValueChange={(val) => setEditedBooking({ ...editedBooking, vehicle_type: val })}>
                                                    <SelectTrigger className="h-8 text-sm bg-white">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-white border-gray-200">
                                                        <SelectItem value="Sedan">Sedan</SelectItem>
                                                        <SelectItem value="SUV">SUV</SelectItem>
                                                        <SelectItem value="Van">Van</SelectItem>
                                                        <SelectItem value="Minibus">Minibus</SelectItem>
                                                        <SelectItem value="Bus">Bus</SelectItem>
                                                        <SelectItem value="GMC">GMC</SelectItem>
                                                        <SelectItem value="Starex">Starex</SelectItem>
                                                        <SelectItem value="Hiace">Hiace</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            ) : (
                                                <Badge variant="outline" className="text-sm bg-white border-gray-200 text-gray-900 font-medium">
                                                    {selectedBooking.vehicle_type}
                                                </Badge>
                                            )}
                                        </div>
                                        <div>
                                            <span className="block text-xs text-gray-500 mb-1">Total Quote</span>
                                            {isEditing ? (
                                                <Input type="number" value={editedBooking.total_price || ''} onChange={(e) => setEditedBooking({ ...editedBooking, total_price: parseFloat(e.target.value) })} className="h-8 text-sm bg-white font-bold" />
                                            ) : (
                                                <span className="text-lg font-bold text-green-600">
                                                    {selectedBooking.total_price ? `SAR \${selectedBooking.total_price}` : 'Calculating...'}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="block text-xs text-gray-500 mb-1">Passengers</span>
                                            {isEditing ? (
                                                <Input type="number" value={editedBooking.passengers} onChange={(e) => setEditedBooking({ ...editedBooking, passengers: parseInt(e.target.value) })} className="h-8 text-sm bg-white" />
                                            ) : (
                                                <span className="font-medium text-gray-900">{selectedBooking.passengers} <span className="text-xs text-gray-500">People</span></span>
                                            )}
                                        </div>
                                        <div>
                                            <span className="block text-xs text-gray-500 mb-1">Luggage</span>
                                            {isEditing ? (
                                                <Input type="number" value={editedBooking.luggage} onChange={(e) => setEditedBooking({ ...editedBooking, luggage: parseInt(e.target.value) })} className="h-8 text-sm bg-white" />
                                            ) : (
                                                <span className="font-medium text-gray-900">{selectedBooking.luggage} <span className="text-xs text-gray-500">Bags</span></span>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <span className="block text-xs text-gray-500 mb-1">Special Requests / Notes</span>
                                        {isEditing ? (
                                            <textarea value={editedBooking.special_requests || ''} onChange={(e) => setEditedBooking({ ...editedBooking, special_requests: e.target.value })} className="w-full min-h-[60px] p-2 text-sm border border-gray-200 rounded-md bg-white text-gray-900" />
                                        ) : (
                                            <div className="bg-white border border-gray-200 p-3 rounded text-sm text-gray-700 min-h-[60px] whitespace-pre-wrap">
                                                {selectedBooking.special_requests || "No special requests."}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-200 space-y-3">
                                {!isEditing && selectedBooking.status === 'pending' && (
                                    <Button
                                        className="w-full bg-primary text-black hover:bg-black hover:text-white font-bold h-12 shadow-md transition-all"
                                        onClick={() => updateStatus(selectedBooking.id, 'confirmed')}
                                    >
                                        <CheckCircle className="w-5 h-5 mr-2" /> Confirm Booking & Send Email
                                    </Button>
                                )}

                                {!isEditing && selectedBooking.status === 'confirmed' && (
                                    <Button
                                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold h-12 transition-all"
                                        onClick={() => updateStatus(selectedBooking.id, 'completed')}
                                    >
                                        <CheckCircle className="w-5 h-5 mr-2" /> Complete Journey
                                    </Button>
                                )}

                                {!isEditing && (
                                    <div className="mt-4 border-t border-gray-200 pt-3 flex flex-col gap-2">
                                        <Button 
                                            variant="outline" 
                                            className="w-full bg-blue-50 border-blue-200 hover:bg-blue-100 hover:text-blue-900 text-blue-700 transition-all font-semibold" 
                                            onClick={() => window.open(`/admin/bookings/${selectedBooking.id}/invoice`, '_blank')}
                                        >
                                            <Printer className="w-4 h-4 mr-2" /> View/Print Invoice
                                        </Button>
                                        <Button variant="outline" className="w-full bg-white border-gray-300 hover:bg-gray-50 hover:text-gray-900 text-gray-700 transition-all font-semibold" onClick={() => shareB2BOptions(selectedBooking)}>
                                            <Copy className="w-4 h-4 mr-2 text-gray-500" /> Copy B2B Message
                                        </Button>
                                    </div>
                                )}

                                {!isEditing && (
                                    <Button variant="ghost" className="w-full hover:bg-red-50 text-red-500 hover:text-red-600 mt-2 transition-all" onClick={() => deleteBooking(selectedBooking.id)}>
                                        <Trash2 className="w-4 h-4 mr-2" /> Delete This Booking
                                    </Button>
                                )}
                            </div>
                        </div>
                    )}
                </SheetContent>
            </Sheet>

            {/* Create Booking Sheet */}
            <Sheet open={isCreating} onOpenChange={setIsCreating}>
                <SheetContent className="overflow-y-auto bg-white border-l border-gray-200 text-gray-900 w-full sm:max-w-xl">
                    <SheetHeader className="text-left mb-6">
                        <SheetTitle className="text-2xl font-bold text-gray-900">Create New Booking</SheetTitle>
                        <SheetDescription className="text-gray-500">
                            Manually add a booking from WhatsApp or other sources.
                        </SheetDescription>
                    </SheetHeader>

                    <div className="space-y-6">
                        {/* Customer Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Customer Details</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                                    <Input
                                        placeholder="John Doe"
                                        value={newBooking.customer_name}
                                        onChange={(e) => setNewBooking({ ...newBooking, customer_name: e.target.value })}
                                        className="bg-white border-gray-200"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                    <Input
                                        placeholder="+966..."
                                        value={newBooking.customer_phone}
                                        onChange={(e) => setNewBooking({ ...newBooking, customer_phone: e.target.value })}
                                        className="bg-white border-gray-200"
                                    />
                                </div>
                                <div className="sm:col-span-2 space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                                    <Input
                                        type="email"
                                        placeholder="customer@example.com"
                                        value={newBooking.customer_email}
                                        onChange={(e) => setNewBooking({ ...newBooking, customer_email: e.target.value })}
                                        className="bg-white border-gray-200"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Trip Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Trip Information</h3>
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Pickup Location</label>
                                    <Input
                                        placeholder="Hotel, Airport, etc."
                                        value={newBooking.pickup_location}
                                        onChange={(e) => setNewBooking({ ...newBooking, pickup_location: e.target.value })}
                                        className="bg-white border-gray-200"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Destination</label>
                                    <Input
                                        placeholder="Hotel, Airport, etc."
                                        value={newBooking.destination}
                                        onChange={(e) => setNewBooking({ ...newBooking, destination: e.target.value })}
                                        className="bg-white border-gray-200"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Pickup Date</label>
                                        <Input
                                            type="date"
                                            value={newBooking.pickup_date}
                                            onChange={(e) => setNewBooking({ ...newBooking, pickup_date: e.target.value })}
                                            className="bg-white border-gray-200"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Pickup Time</label>
                                        <Input
                                            type="time"
                                            value={newBooking.pickup_time}
                                            onChange={(e) => setNewBooking({ ...newBooking, pickup_time: e.target.value })}
                                            className="bg-white border-gray-200"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Vehicle Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Vehicle & Pricing</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Vehicle Type</label>
                                    <Select
                                        value={newBooking.vehicle_type}
                                        onValueChange={(val) => setNewBooking({ ...newBooking, vehicle_type: val })}
                                    >
                                        <SelectTrigger className="bg-white border-gray-200">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white border-gray-200">
                                            <SelectItem value="Sedan">Sedan</SelectItem>
                                            <SelectItem value="SUV">SUV</SelectItem>
                                            <SelectItem value="Van">Van</SelectItem>
                                            <SelectItem value="Minibus">Minibus</SelectItem>
                                            <SelectItem value="Bus">Bus</SelectItem>
                                            <SelectItem value="GMC">GMC</SelectItem>
                                            <SelectItem value="Starex">Starex</SelectItem>
                                            <SelectItem value="Hiace">Hiace</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Total Price (SAR)</label>
                                    <Input
                                        type="number"
                                        placeholder="0.00"
                                        value={newBooking.total_price}
                                        onChange={(e) => setNewBooking({ ...newBooking, total_price: parseFloat(e.target.value) })}
                                        className="bg-white border-gray-200 font-bold"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Passengers</label>
                                    <Input
                                        type="number"
                                        value={newBooking.passengers}
                                        onChange={(e) => setNewBooking({ ...newBooking, passengers: parseInt(e.target.value) })}
                                        className="bg-white border-gray-200"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Luggage</label>
                                    <Input
                                        type="number"
                                        value={newBooking.luggage}
                                        onChange={(e) => setNewBooking({ ...newBooking, luggage: parseInt(e.target.value) })}
                                        className="bg-white border-gray-200"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700">Special Requests / Notes</label>
                                <textarea
                                    value={newBooking.special_requests}
                                    onChange={(e) => setNewBooking({ ...newBooking, special_requests: e.target.value })}
                                    className="w-full min-h-[80px] p-2 text-sm border border-gray-200 rounded-md bg-white text-gray-900"
                                    placeholder="Enter any additional details..."
                                />
                            </div>
                        </div>

                        <div className="pt-6 flex gap-3">
                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={() => setIsCreating(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="flex-1 bg-primary text-black hover:bg-black hover:text-white font-bold"
                                onClick={saveNewBooking}
                            >
                                <Plus className="w-4 h-4 mr-2" /> Create Booking
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
