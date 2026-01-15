"use client";

import { X, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [isCardOpen, setIsCardOpen] = useState(false);

    const phoneNumber = "13073464572"; // +1 (307) 346-4572
    const displayMessage = "Hello, I need some information.";

    // Determine typical reply time for display
    const currentTime = new Date();
    const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    useEffect(() => {
        // Fade in button after 1 second
        const timer1 = setTimeout(() => setIsVisible(true), 1000);
        // Auto open card after 4 seconds to grab attention
        const timer2 = setTimeout(() => setIsCardOpen(true), 4000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(displayMessage)}`;

    // Official WhatsApp Icon SVG
    const WhatsAppIcon = ({ className }: { className?: string }) => (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start gap-4 font-sans mb-16 sm:mb-0">
            {/* Chat Card */}
            {isCardOpen && (
                <div className="w-[300px] sm:w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 border border-gray-100 flex flex-col">
                    {/* Header */}
                    <div className="bg-[#075E54] p-4 flex justify-between items-center relative">
                        <div className="flex items-center gap-3 relative z-10">
                            <div className="relative w-12 h-12 bg-white rounded-full p-1 shrink-0 overflow-hidden">
                                <Image
                                    src="/logo.png"
                                    alt="Taxi Service KSA"
                                    width={48}
                                    height={48}
                                    className="rounded-full object-cover w-full h-full"
                                />
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full shadow-sm"></span>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-base leading-tight">Taxi Service KSA</h3>
                                <p className="text-green-100 text-xs font-medium">Online • Replies instantly</p>
                            </div>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsCardOpen(false);
                            }}
                            className="bg-black/10 hover:bg-black/20 text-white rounded-full p-1 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="bg-[#E5DDD5] p-5 relative min-h-[140px]">
                        {/* Background Pattern Overlay (CSS only) */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                            backgroundImage: "radial-gradient(#4a4a4a 1px, transparent 1px)",
                            backgroundSize: "20px 20px"
                        }}></div>

                        {/* Automatic Message Bubble */}
                        <div className="bg-white p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-sm self-start max-w-[90%] relative z-10 animate-in zoom-in-95 duration-300 origin-top-left">
                            <h4 className="font-bold text-xs text-[#075E54] mb-1">Support Team</h4>
                            <p className="text-sm text-gray-800 leading-relaxed">
                                Hello! 👋 <br />
                                How can we help you today?
                            </p>
                            <span className="text-[10px] text-gray-400 block text-right mt-1.5 flex items-center justify-end gap-1">
                                {timeString}
                            </span>
                        </div>
                    </div>

                    {/* Footer / CTA */}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white p-3.5 border-t border-gray-100 hover:bg-gray-50 transition-colors group"
                    >
                        <div className="bg-[#25D366] group-hover:bg-[#20bd5a] text-white rounded-full py-3 px-4 flex items-center justify-center gap-2.5 font-bold transition-all shadow-md shadow-green-500/20">
                            <WhatsAppIcon className="w-5 h-5 fill-white text-white" />
                            <span>Start Chat</span>
                            <Send className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </a>
                </div>
            )}

            {/* Floating Action Button (FAB) */}
            <button
                onClick={() => setIsCardOpen(!isCardOpen)}
                className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20bd5a] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 group relative z-50 ring-4 ring-white"
                aria-label={isCardOpen ? "Close Chat" : "Open WhatsApp Chat"}
            >
                {isCardOpen ? (
                    <X className="w-7 h-7 sm:w-8 sm:h-8 transition-transform rotate-90" />
                ) : (
                    <>
                        {/* Notification Badge */}
                        <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full z-10 animate-pulse"></span>
                        <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 fill-white text-white transition-transform group-hover:scale-110" />
                    </>
                )}
            </button>
        </div>
    );
}
