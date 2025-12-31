"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, X } from 'lucide-react';
import BookingForm from './BookingForm';

export default function StickyContactButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Sticky Button - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block fixed right-0 top-1/3 -translate-y-1/2 z-[50]">
                <Button
                    onClick={() => setIsOpen(true)}
                    className="h-auto py-4 px-1 rounded-l-lg rounded-r-none bg-gradient-to-b from-primary via-amber-500 to-primary text-black hover:from-amber-500 hover:via-primary hover:to-amber-500 shadow-lg shadow-primary/40 flex flex-col items-center gap-2 transition-all hover:-translate-x-1 min-h-[120px]"
                    aria-label="Book Now"
                >
                    <Calendar className="w-5 h-5" />
                    <span className="writing-mode-vertical text-xs font-bold tracking-wider uppercase" style={{ writingMode: 'vertical-rl' }}>
                        Book Now
                    </span>
                </Button>
            </div>

            {/* Mobile Floating Button - Bottom right */}
            <div className="md:hidden fixed bottom-20 right-4 z-[50]">
                <Button
                    onClick={() => setIsOpen(true)}
                    className="h-14 w-14 rounded-full bg-gradient-to-br from-primary via-amber-500 to-primary text-black hover:from-amber-500 hover:via-primary hover:to-amber-500 shadow-xl shadow-primary/40 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                    aria-label="Book Now"
                >
                    <Calendar className="w-6 h-6" />
                </Button>
            </div>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div
                        className="absolute inset-0"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close modal"
                    ></div>

                    <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl animate-in zoom-in-95 duration-200">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 text-gray-600 hover:bg-gray-100 rounded-full z-10"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close booking form"
                        >
                            <X className="w-6 h-6" />
                        </Button>

                        <div className="p-4 md:p-6">
                            <BookingForm />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
