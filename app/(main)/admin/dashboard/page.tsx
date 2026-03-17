'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import {
    Calendar,
    Users,
    Car,
    Clock,
    MapPin,
    CheckCircle2,
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
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}

interface Driver {
    id: string;
    created_at: string;
    full_name: string;
    phone_number: string;
    email: string;
    city: string;
    vehicle_model: string;
    status: 'pending' | 'approved' | 'rejected';
}

export default function AdminDashboard() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [drivers, setDrivers] = useState<Driver[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const router = useRouter();


    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/admin/login');
                return;
            }
            fetchData();
        };

        const fetchData = async () => {
            setLoading(true);
            try {
                // Fetch Bookings solely for high-level stats (just grabbing id and status wrapper)
                const { data: bookingsData } = await supabase
                    .from('bookings')
                    .select('id, status');
                setBookings(bookingsData || []);

                // Fetch Drivers
                const { data: driversData } = await supabase
                    .from('drivers')
                    .select('*')
                    .order('created_at', { ascending: false });
                setDrivers(driversData || []);

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        checkSession();
    }, [router]);

    const updateDriverStatus = async (id: string, newStatus: string) => {
        try {
            const { error } = await supabase
                .from('drivers')
                .update({ status: newStatus })
                .eq('id', id);

            if (error) throw error;

            setDrivers(drivers.map(d =>
                d.id === id ? { ...d, status: newStatus as any } : d
            ));
        } catch (error) {
            console.error('Error updating driver status:', error);
        }
    };

    const filteredDrivers = drivers.filter(driver => {
        const matchesSearch =
            driver.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            driver.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            driver.phone_number?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || driver.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'approved': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
            case 'pending': return 'bg-amber-100 text-amber-800 border-amber-200';
            case 'rejected': return 'bg-rose-100 text-rose-800 border-rose-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-transparent flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="text-gray-900 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
                        Admin Dashboard
                    </h1>
                    <div className="text-sm text-gray-500">
                        Platform usage overview and driver applications processing
                    </div>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white shadow-sm p-6 rounded-2xl border border-gray-200">
                    <div className="flex items-center justify-between pb-2">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Total Bookings</h3>
                        <Calendar className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{bookings.length}</div>
                </div>
                <div className="bg-white shadow-sm p-6 rounded-2xl border border-gray-200">
                    <div className="flex items-center justify-between pb-2">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Pending Bookings</h3>
                        <Clock className="h-4 w-4 text-amber-500" />
                    </div>
                    <div className="text-3xl font-bold text-amber-500">{bookings.filter(b => b.status === 'pending').length}</div>
                </div>
                <div className="bg-white shadow-sm p-6 rounded-2xl border border-gray-200">
                    <div className="flex items-center justify-between pb-2">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Driver Apps</h3>
                        <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{drivers.length}</div>
                </div>
                <div className="bg-white shadow-sm p-6 rounded-2xl border border-gray-200">
                    <div className="flex items-center justify-between pb-2">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Active Fleet</h3>
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div className="text-3xl font-bold text-emerald-500">{drivers.filter(d => d.status === 'approved').length}</div>
                </div>
            </div>

            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Driver Applications</h2>
                <p className="text-gray-500 text-sm">Review and manage driver registration requests.</p>
            </div>

            {/* Application Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                        placeholder="Search drivers by name, email, or phone..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-primary"
                    />
                </div>
                <div className="w-full md:w-[200px]">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="bg-white border-gray-200 text-gray-900 shadow-sm">
                            <div className="flex items-center gap-2">
                                <Filter className="w-4 h-4" />
                                <SelectValue placeholder="All Status" />
                            </div>
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-200 text-gray-900 shadow-sm">
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="approved">Approved</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Drivers Table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <Table>
                    <TableHeader className="bg-gray-50">
                        <TableRow className="border-gray-200 hover:bg-transparent">
                            <TableHead className="text-gray-500 font-semibold">Driver Name</TableHead>
                            <TableHead className="text-gray-500 font-semibold">Contact</TableHead>
                            <TableHead className="text-gray-500 font-semibold">Vehicle</TableHead>
                            <TableHead className="text-gray-500 font-semibold">City</TableHead>
                            <TableHead className="text-gray-500 font-semibold">Applied Date</TableHead>
                            <TableHead className="text-gray-500 font-semibold">Status</TableHead>
                            <TableHead className="text-gray-500 font-semibold text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredDrivers.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="text-center py-12 text-gray-500">
                                    No driver applications found matching your criteria.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredDrivers.map((driver) => (
                                <TableRow key={driver.id} className="border-gray-200 hover:bg-gray-50 transition-colors">
                                    <TableCell className="font-medium text-gray-900">
                                        {driver.full_name}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-700">{driver.phone_number}</span>
                                            <span className="text-xs text-gray-500">{driver.email}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Car className="w-4 h-4 text-gray-400" />
                                            <span className="text-sm text-gray-700">{driver.vehicle_model}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <span className="text-sm text-gray-700">{driver.city}</span>
                                    </TableCell>
                                    <TableCell className="text-sm text-gray-500">
                                        {new Date(driver.created_at).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={`${getStatusColor(driver.status)} uppercase text-[10px] tracking-wider`}>
                                            {driver.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Select
                                            defaultValue={driver.status}
                                            onValueChange={(val) => updateDriverStatus(driver.id, val)}
                                        >
                                            <SelectTrigger className="h-8 w-[130px] ml-auto bg-white border-gray-200 text-xs shadow-sm focus:ring-1 focus:ring-primary">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white border-gray-200 text-gray-900">
                                                <SelectItem value="pending">Pending</SelectItem>
                                                <SelectItem value="approved">Approved</SelectItem>
                                                <SelectItem value="rejected">Rejected</SelectItem>
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
    );
}

