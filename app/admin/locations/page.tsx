'use client';

import { MapPin, Plus, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const locationsData = [
    { id: '1', name: 'Jeddah', type: 'City', status: 'Active', bookings: 1245 },
    { id: '2', name: 'Makkah', type: 'Holy City', status: 'Active', bookings: 3502 },
    { id: '3', name: 'Madinah', type: 'Holy City', status: 'Active', bookings: 2100 },
    { id: '4', name: 'King Abdulaziz Intl Airport', type: 'Airport', status: 'Active', bookings: 5430 },
    { id: '5', name: 'Taif', type: 'City', status: 'Inactive', bookings: 45 },
];

export default function LocationsPage() {
    return (
        <div className="text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Locations
                    </h1>
                    <p className="text-neutral-400 mt-1">Manage service areas and pickup points</p>
                </div>
                <Button className="bg-primary text-black hover:bg-primary/90 font-bold">
                    <Plus className="mr-2 h-4 w-4" /> Add Location
                </Button>
            </div>

            <div className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden">
                <Table>
                    <TableHeader className="bg-neutral-900/50">
                        <TableRow className="border-neutral-700 hover:bg-transparent">
                            <TableHead className="text-neutral-400">Location Name</TableHead>
                            <TableHead className="text-neutral-400">Type</TableHead>
                            <TableHead className="text-neutral-400">Status</TableHead>
                            <TableHead className="text-neutral-400 text-right">Total Bookings</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {locationsData.map((loc) => (
                            <TableRow key={loc.id} className="border-neutral-700 hover:bg-neutral-700/50">
                                <TableCell className="font-medium text-white">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-neutral-900 p-2 rounded-lg">
                                            <MapPin className="w-4 h-4 text-primary" />
                                        </div>
                                        {loc.name}
                                    </div>
                                </TableCell>
                                <TableCell className="text-neutral-300">{loc.type}</TableCell>
                                <TableCell>
                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${loc.status === 'Active'
                                            ? 'bg-green-500/10 text-green-500'
                                            : 'bg-red-500/10 text-red-500'
                                        }`}>
                                        {loc.status}
                                    </span>
                                </TableCell>
                                <TableCell className="text-right text-neutral-300 font-mono">
                                    {loc.bookings.toLocaleString()}
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:text-white">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="bg-neutral-800 border-neutral-700">
                                            <DropdownMenuItem className="text-white hover:bg-neutral-700 focus:bg-neutral-700">Edit Details</DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-500 hover:bg-red-500/10 focus:bg-red-500/10">Deactivate</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
