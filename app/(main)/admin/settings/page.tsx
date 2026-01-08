'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { User, Lock, Bell, Shield } from 'lucide-react';

export default function SettingsPage() {
    return (
        <div className="text-white max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    Account Settings
                </h1>
                <p className="text-neutral-400 mt-1">Manage your admin profile and preferences</p>
            </div>

            <div className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden">
                <div className="p-6">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" />
                        Profile Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-neutral-300">Display Name</Label>
                            <Input
                                id="name"
                                defaultValue="Admin User"
                                className="bg-neutral-900 border-neutral-700 text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-neutral-300">Email Address</Label>
                            <Input
                                id="email"
                                defaultValue="admin@example.com"
                                className="bg-neutral-900 border-neutral-700 text-white"
                                disabled
                            />
                        </div>
                    </div>
                </div>

                <Separator className="bg-neutral-700" />

                <div className="p-6">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-primary" />
                        Security
                    </h2>
                    <div className="space-y-4 max-w-md">
                        <div className="space-y-2">
                            <Label htmlFor="current-pass" className="text-neutral-300">Current Password</Label>
                            <Input
                                id="current-pass"
                                type="password"
                                className="bg-neutral-900 border-neutral-700 text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="new-pass" className="text-neutral-300">New Password</Label>
                            <Input
                                id="new-pass"
                                type="password"
                                className="bg-neutral-900 border-neutral-700 text-white"
                            />
                        </div>
                        <Button className="bg-primary text-white hover:text-black hover:bg-primary/90 font-bold mt-2">
                            Update Password
                        </Button>
                    </div>
                </div>

                <Separator className="bg-neutral-700" />

                <div className="p-6 bg-neutral-900/30">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-yellow-500/10 rounded-lg">
                            <Shield className="w-6 h-6 text-yellow-500" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Two-Factor Authentication</h3>
                            <p className="text-sm text-neutral-400 mb-4">Add an extra layer of security to your account.</p>
                            <Button variant="outline" className="border-neutral-600 text-neutral-300 hover:bg-neutral-800">
                                Enable 2FA
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
