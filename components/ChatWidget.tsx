"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, X, Send, Bot, User, Calendar } from "lucide-react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import BookingForm from "./BookingForm";
import { Button } from "@/components/ui/button";

// Use localhost for now. In production this should be your backend URL
const API_URL = "http://localhost:8000";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: string, text: string }[]>([
        { role: "bot", text: "Hello! Welcome to Taxi Service KSA. How can I help you?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const toggleChat = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = input;
        setInput("");
        setMessages(prev => [...prev, { role: "user", text: userMsg }]);
        setIsLoading(true);

        try {
            const response = await fetch(`${API_URL}/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question: userMsg }),
            });
            const data = await response.json();
            const answer = data.answer;

            // PARSE TOKENS
            if (answer && answer.includes("||BOOKING_START||")) {
                const parts = answer.split("||BOOKING_START||");
                const textPart = parts[0];
                const jsonPart = parts[1].split("||BOOKING_END||")[0];

                if (textPart.trim()) {
                    setMessages(prev => [...prev, { role: "bot", text: textPart }]);
                }

                try {
                    const bookingData = JSON.parse(jsonPart);
                    // Generate booking URL params
                    const params = new URLSearchParams();
                    if (bookingData.pickup) params.set('from', bookingData.pickup);
                    if (bookingData.dropoff) params.set('to', bookingData.dropoff);
                    if (bookingData.phone) params.set('phone', bookingData.phone);

                    // Navigate to booking
                    // We assume /booking exists, if not we fallback to /contact or similar
                    router.push(`/booking?${params.toString()}`);
                    setMessages(prev => [...prev, { role: "bot", text: "Redirecting you to complete your booking..." }]);
                } catch (e) {
                    setMessages(prev => [...prev, { role: "bot", text: "Sorry, I couldn't process the booking details." }]);
                }
            } else if (answer && answer.includes("||NAVIGATE||")) {
                const target = answer.split("||NAVIGATE||")[1].split("||")[0];
                router.push(target);
                setMessages(prev => [...prev, { role: "bot", text: `Opening ${target}...` }]);
            } else {
                setMessages(prev => [...prev, { role: "bot", text: answer || "Sorry, I didn't get that." }]);
            }

        } catch (error) {
            setMessages(prev => [...prev, { role: "bot", text: "Sorry, there is a connection issue right now. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
            <div className={clsx(
                "transition-all duration-300 transform origin-bottom-right shadow-2xl rounded-2xl overflow-hidden mb-4",
                isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10 pointer-events-none hidden"
            )}>
                <div className="w-[350px] h-[500px] bg-white flex flex-col">
                    {/* Header */}
                    <div className="p-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="bg-white/20 p-1 rounded-full overflow-hidden w-10 h-10 flex items-center justify-center relative">
                                <Image
                                    src="/images/authors/ismail.jpg"
                                    alt="Muhammad Ismail"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">Muhammad Ismail</h3>
                                <p className="text-xs text-yellow-100">Click to chat</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1 transition-colors mr-1"
                            >
                                <Calendar className="w-3 h-3" />
                                Book
                            </button>
                            <button onClick={toggleChat} className="hover:bg-white/20 p-1 rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Chat Body */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((msg, i) => (
                            <div key={i} className={clsx("flex gap-2", msg.role === "user" ? "flex-row-reverse" : "")}>
                                <div className={clsx(
                                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 overflow-hidden relative",
                                    msg.role === "user" ? "bg-gray-200" : "bg-yellow-100"
                                )}>
                                    {msg.role === "user" ? (
                                        <User className="w-4 h-4 text-gray-600" />
                                    ) : (
                                        <Image
                                            src="/images/authors/ismail.jpg"
                                            alt="Bot"
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                                <div className={clsx(
                                    "p-3 text-sm rounded-2xl max-w-[80%]",
                                    msg.role === "user"
                                        ? "bg-gray-800 text-white rounded-tr-sm"
                                        : "bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm"
                                )}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center shrink-0 overflow-hidden relative">
                                    <Image
                                        src="/images/authors/ismail.jpg"
                                        alt="Bot"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-sm flex gap-1">
                                    <span className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-75"></span>
                                    <span className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-150"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 bg-white border-t border-gray-200 flex gap-2">
                        <input
                            className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
                            placeholder="Ask about rates or booking..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === "Enter" && handleSend()}
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading || !input.trim()}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg transition-colors"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Trigger Button */}
            <button
                onClick={toggleChat}
                className={clsx(
                    "w-14 h-14 bg-gradient-to-tr from-yellow-500 to-orange-500 rounded-full shadow-lg shadow-yellow-500/30 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer",
                    isOpen ? "hidden" : "flex"
                )}
            >
                <MessageCircle className="w-7 h-7 text-white" />
            </button>

            {/* Floating Book Button (Visible when chat is closed) */}
            <button
                onClick={() => setIsBookingOpen(true)}
                className={clsx(
                    "fixed bottom-24 right-6 w-14 h-14 bg-white text-black border-2 border-primary rounded-full shadow-xl flex flex-col items-center justify-center hover:scale-110 transition-transform cursor-pointer z-50 gap-0.5",
                    isOpen ? "hidden" : "flex"
                )}
                title="Book Now"
            >
                <Calendar className="w-6 h-6 text-primary" />
                <span className="text-[10px] font-bold leading-none">Book</span>
            </button>

            {/* Booking Modal Overlay */}
            {
                isBookingOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                        <div
                            className="absolute inset-0"
                            onClick={() => setIsBookingOpen(false)}
                            aria-label="Close modal"
                        ></div>

                        <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl animate-in zoom-in-95 duration-200">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-4 right-4 text-gray-600 hover:bg-gray-100 rounded-full z-10"
                                onClick={() => setIsBookingOpen(false)}
                            >
                                <X className="w-6 h-6" />
                            </Button>

                            <div className="p-4 md:p-6">
                                <BookingForm />
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}
