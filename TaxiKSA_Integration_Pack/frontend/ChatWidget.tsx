"use client";

import { useState, useRef, useEffect } from "react";
// Make sure to install: npm install lucide-react axios framer-motion clsx
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

// ⬇️ UPDATE THIS URL TO YOUR BACKEND
const API_URL = "http://localhost:8000";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: string, text: string }[]>([
        { role: "bot", text: "Salam! KSA Taxi Service mein khushamdeed. Main aapki kya madad kar sakta hoon?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const toggleChat = () => setIsOpen(!isOpen);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = input;
        setInput("");
        setMessages(prev => [...prev, { role: "user", text: userMsg }]);
        setIsLoading(true);

        try {
            const res = await axios.post(`${API_URL}/chat`, { question: userMsg });
            setMessages(prev => [...prev, { role: "bot", text: res.data.answer }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: "bot", text: "Maazrat, abhi connection issue hai." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none font-sans">

            <div className="pointer-events-auto">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            className="mb-4 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
                        >
                            {/* Header */}
                            <div className="p-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="bg-white/20 p-1 rounded-full">
                                        <Bot className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm">Taxi AI Assistant</h3>
                                        <p className="text-xs text-yellow-100">Always Online</p>
                                    </div>
                                </div>
                                <button onClick={toggleChat} className="hover:bg-white/20 p-1 rounded-lg">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Chat Body */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                                {messages.map((msg, i) => (
                                    <div key={i} className={clsx("flex gap-2", msg.role === "user" ? "flex-row-reverse" : "")}>
                                        <div className={clsx(
                                            "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                                            msg.role === "user" ? "bg-gray-200" : "bg-yellow-100"
                                        )}>
                                            {msg.role === "user" ? <User className="w-4 h-4 text-gray-600" /> : <Bot className="w-4 h-4 text-yellow-600" />}
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
                                        <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                                            <Bot className="w-4 h-4 text-yellow-600" />
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Trigger Button */}
            <button
                onClick={toggleChat}
                className="pointer-events-auto w-14 h-14 bg-gradient-to-tr from-yellow-500 to-orange-500 rounded-full shadow-lg shadow-yellow-500/30 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
            >
                <MessageCircle className="w-7 h-7 text-white" />
            </button>

        </div>
    );
}
