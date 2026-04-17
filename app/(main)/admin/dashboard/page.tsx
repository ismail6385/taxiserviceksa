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
    Filter,
    ExternalLink,
    ArrowUpRight,
    TrendingUp,
    DollarSign,
    BarChart2
} from 'lucide-react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend
} from 'recharts';
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
    destination: string;
    pickup_date: string;
    pickup_time: string;
    vehicle_type: string;
    customer_name: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    total_price?: number;
    currency?: string;
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
                // Fetch Bookings with more details for the schedule
                const { data: bookingsData } = await supabase
                    .from('bookings')
                    .select('id, created_at, status, pickup_location, destination, pickup_date, pickup_time, vehicle_type, customer_name, total_price, currency')
                    .order('pickup_date', { ascending: true });
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

            {/* Upcoming Journeys Schedule */}
            <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">Today's & Tomorrow's Schedule</h2>
                    <Button variant="outline" size="sm" onClick={() => router.push('/admin/bookings')} className="text-primary hover:text-black border-primary/20 bg-primary/5">
                        View All Bookings <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                            <Table>
                                <TableHeader className="bg-gray-50/50">
                                    <TableRow className="border-gray-200 hover:bg-transparent">
                                        <TableHead className="text-gray-500 font-semibold px-4">Time</TableHead>
                                        <TableHead className="text-gray-500 font-semibold">Client / Journey</TableHead>
                                        <TableHead className="text-gray-500 font-semibold">Vehicle</TableHead>
                                        <TableHead className="text-gray-500 font-semibold text-right px-4">Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {bookings.filter(b => {
                                        const date = b.pickup_date;
                                        const today = new Date().toLocaleDateString('en-CA');
                                        const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
                                        const tomorrowStr = tomorrow.toLocaleDateString('en-CA');
                                        return (date === today || date === tomorrowStr) && (b.status === 'pending' || b.status === 'confirmed');
                                    }).length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={4} className="text-center py-8 text-gray-500 italic">No urgent pickups scheduled for today or tomorrow.</TableCell>
                                        </TableRow>
                                    ) : (
                                        bookings
                                            .filter(b => {
                                                const date = b.pickup_date;
                                                const today = new Date().toLocaleDateString('en-CA');
                                                const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
                                                const tomorrowStr = tomorrow.toLocaleDateString('en-CA');
                                                return (date === today || date === tomorrowStr) && (b.status === 'pending' || b.status === 'confirmed');
                                            })
                                            .slice(0, 5)
                                            .map((booking) => (
                                                <TableRow key={booking.id} className="border-gray-100 hover:bg-gray-50/50">
                                                    <TableCell className="px-4">
                                                        <div className="flex flex-col">
                                                            <span className="text-sm font-bold text-gray-900">{booking.pickup_time}</span>
                                                            <span className="text-[10px] text-gray-400 uppercase tracking-tighter">
                                                                {booking.pickup_date === new Date().toLocaleDateString('en-CA') ? 'Today' : 'Tomorrow'}
                                                            </span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex flex-col">
                                                            <span className="text-sm font-semibold text-gray-800">{booking.customer_name}</span>
                                                            <div className="flex items-center gap-2 text-[11px] text-gray-500">
                                                                <span className="truncate max-w-[100px]">{booking.pickup_location}</span>
                                                                <ExternalLink className="w-2 h-2" />
                                                                <span className="truncate max-w-[100px]">{booking.destination}</span>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge variant="outline" className="text-[10px] bg-gray-50 font-normal">
                                                            {booking.vehicle_type}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="text-right px-4">
                                                        <div className={`w-2 h-2 rounded-full inline-block mr-2 ${booking.status === 'confirmed' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></div>
                                                        <span className="text-[10px] uppercase font-bold tracking-tight text-gray-600">{booking.status}</span>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-4">
                        <div className="bg-slate-900 p-5 rounded-2xl text-white shadow-xl relative overflow-hidden h-full flex flex-col justify-between">
                             <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                             <div>
                                <h3 className="text-primary font-bold text-sm mb-4 tracking-widest uppercase">Quick Schedule Summary</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400 text-xs">Today's Pickups</span>
                                        <span className="text-xl font-bold">{bookings.filter(b => b.pickup_date === new Date().toLocaleDateString('en-CA')).length}</span>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-slate-800 pt-3">
                                        <span className="text-slate-400 text-xs text-amber-400 font-semibold">• Action Required</span>
                                        <span className="text-lg font-bold text-amber-400">{bookings.filter(b => b.pickup_date === new Date().toLocaleDateString('en-CA') && b.status === 'pending').length}</span>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-slate-800 pt-3">
                                        <span className="text-slate-400 text-xs">Tomorrow's Pickups</span>
                                        {(() => {
                                            const tom = new Date(); tom.setDate(tom.getDate()+1);
                                            return <span className="text-xl font-bold">{bookings.filter(b => b.pickup_date === tom.toLocaleDateString('en-CA')).length}</span>
                                        })()}
                                    </div>
                                </div>
                             </div>
                             <Button onClick={() => router.push('/admin/bookings')} className="w-full mt-6 bg-primary text-black font-bold hover:bg-white hover:text-black transition-all">
                                Go to Dispatch Board
                             </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Analytics Section ── */}
            {(() => {
                const totalRevenue = bookings.filter(b => b.status === 'completed').reduce((s, b) => s + (b.total_price || 0), 0);
                const confirmedRevenue = bookings.filter(b => b.status === 'confirmed').reduce((s, b) => s + (b.total_price || 0), 0);

                // Monthly bookings + revenue — last 6 months
                const monthlyMap: Record<string, { bookings: number; revenue: number }> = {};
                const now = new Date();
                for (let i = 5; i >= 0; i--) {
                    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
                    const key = d.toLocaleString('en-US', { month: 'short', year: '2-digit' });
                    monthlyMap[key] = { bookings: 0, revenue: 0 };
                }
                bookings.forEach(b => {
                    const d = new Date(b.created_at);
                    const key = d.toLocaleString('en-US', { month: 'short', year: '2-digit' });
                    if (monthlyMap[key]) {
                        monthlyMap[key].bookings += 1;
                        if (b.status === 'completed') monthlyMap[key].revenue += (b.total_price || 0);
                    }
                });
                const monthlyData = Object.entries(monthlyMap).map(([month, v]) => ({ month, ...v }));

                // Status distribution
                const statusData = [
                    { name: 'Confirmed', value: bookings.filter(b => b.status === 'confirmed').length, color: '#22c55e' },
                    { name: 'Pending',   value: bookings.filter(b => b.status === 'pending').length,   color: '#f59e0b' },
                    { name: 'Completed', value: bookings.filter(b => b.status === 'completed').length, color: '#3b82f6' },
                    { name: 'Cancelled', value: bookings.filter(b => b.status === 'cancelled').length, color: '#ef4444' },
                ].filter(d => d.value > 0);

                // Top vehicles
                const vehicleMap: Record<string, number> = {};
                bookings.forEach(b => { if (b.vehicle_type) vehicleMap[b.vehicle_type] = (vehicleMap[b.vehicle_type] || 0) + 1; });
                const vehicleData = Object.entries(vehicleMap).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([name, count]) => ({ name: name.split(' ').slice(0, 2).join(' '), count }));

                return (
                    <div className="mb-10">
                        <div className="flex items-center gap-2 mb-5">
                            <BarChart2 className="w-5 h-5 text-primary" />
                            <h2 className="text-2xl font-bold text-gray-900">Analytics & Revenue</h2>
                        </div>

                        {/* Revenue Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Revenue</span>
                                    <DollarSign className="w-4 h-4 text-green-500" />
                                </div>
                                <div className="text-2xl font-black text-gray-900">SAR {totalRevenue.toLocaleString()}</div>
                                <div className="text-[10px] text-gray-400 mt-1">From completed trips</div>
                            </div>
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Pipeline</span>
                                    <TrendingUp className="w-4 h-4 text-blue-500" />
                                </div>
                                <div className="text-2xl font-black text-gray-900">SAR {confirmedRevenue.toLocaleString()}</div>
                                <div className="text-[10px] text-gray-400 mt-1">From confirmed trips</div>
                            </div>
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Completion Rate</span>
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                </div>
                                <div className="text-2xl font-black text-gray-900">
                                    {bookings.length ? Math.round((bookings.filter(b => b.status === 'completed').length / bookings.length) * 100) : 0}%
                                </div>
                                <div className="text-[10px] text-gray-400 mt-1">Of all bookings</div>
                            </div>
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Avg Trip Value</span>
                                    <Car className="w-4 h-4 text-purple-500" />
                                </div>
                                <div className="text-2xl font-black text-gray-900">
                                    SAR {bookings.filter(b => b.total_price).length ? Math.round(bookings.filter(b => b.total_price).reduce((s, b) => s + (b.total_price || 0), 0) / bookings.filter(b => b.total_price).length) : 0}
                                </div>
                                <div className="text-[10px] text-gray-400 mt-1">Per booking</div>
                            </div>
                        </div>

                        {/* Charts Row */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Monthly Bookings Bar Chart */}
                            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                                <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wider">Monthly Bookings (Last 6 Months)</h3>
                                <ResponsiveContainer width="100%" height={200}>
                                    <BarChart data={monthlyData} barSize={28}>
                                        <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                                        <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} width={30} />
                                        <Tooltip
                                            contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: 12 }}
                                            formatter={(val: any, name: string) => [val, name === 'bookings' ? 'Bookings' : 'Revenue (SAR)']}
                                        />
                                        <Bar dataKey="bookings" fill="#C6FF00" radius={[4, 4, 0, 0]} name="bookings" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Status Pie Chart */}
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                                <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wider">Booking Status</h3>
                                {statusData.length > 0 ? (
                                    <ResponsiveContainer width="100%" height={200}>
                                        <PieChart>
                                            <Pie data={statusData} cx="50%" cy="45%" innerRadius={50} outerRadius={75} paddingAngle={3} dataKey="value">
                                                {statusData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                                            </Pie>
                                            <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11 }} />
                                            <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: 12 }} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                ) : (
                                    <div className="h-[200px] flex items-center justify-center text-gray-400 text-sm">No data yet</div>
                                )}
                            </div>
                        </div>

                        {/* Top Vehicles */}
                        {vehicleData.length > 0 && (
                            <div className="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                                <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wider">Top Requested Vehicles</h3>
                                <ResponsiveContainer width="100%" height={160}>
                                    <BarChart data={vehicleData} layout="vertical" barSize={16}>
                                        <XAxis type="number" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                                        <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#374151' }} axisLine={false} tickLine={false} width={110} />
                                        <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: 12 }} />
                                        <Bar dataKey="count" fill="#000" radius={[0, 4, 4, 0]} name="Bookings" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                    </div>
                );
            })()}

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

