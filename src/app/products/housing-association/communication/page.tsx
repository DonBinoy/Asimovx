"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    MessageSquare,
    ArrowLeft,
    Mail,
    Smartphone,
    CheckCircle2,
    Bell,
    Users
} from "lucide-react";

function FloatingElement({ children, delay = 0, x = 0, y = 0, rotate = 0, scale = 1, className = "" }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotate: rotate - 10 }}
            whileInView={{ opacity: 1, y: 0, rotate: rotate }}
            transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className={`absolute ${className}`}
            style={{ left: x, top: y, scale }}
        >
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

export default function CommunicationPage() {

    return (
        <div className="bg-[#F9F8F6] text-[#111] font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">

            {/* Grain Texture */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            <div className="fixed top-8 left-8 z-50">
                <Link
                    href="/products/housing-association"
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-slate-200 text-sm font-bold tracking-widest uppercase hover:text-blue-600 transition-colors shadow-sm"
                >
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>
            </div>

            {/* HERO */}
            <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-6 pt-20">
                {/* Background Blobs - Softer/More Premium */}
                <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-b from-blue-100/50 to-transparent rounded-full blur-[120px] mix-blend-multiply animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-t from-cyan-100/50 to-transparent rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDelay: "2s" }} />

                <div className="max-w-[1600px] mx-auto w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="w-24 h-24 rounded-[2.5rem] bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-10 shadow-2xl shadow-blue-500/30">
                                <MessageSquare className="w-10 h-10" />
                            </div>

                            <h1 className="text-5xl md:text-[8rem] font-serif font-medium tracking-tight leading-[0.9] mb-10 text-[#111]">
                                Unified <br />
                                <span className="italic text-blue-500">Voice.</span>
                            </h1>
                            <p className="text-2xl text-slate-500 max-w-lg leading-relaxed mb-12 font-light">
                                Speak once, reach everyone. A unified channel for announcements, updates, and urgent alerts.
                            </p>
                            <div className="flex gap-4">
                                <div className="px-6 py-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-blue-500" />
                                    <span className="font-bold text-slate-700">Email Digested</span>
                                </div>
                                <div className="px-6 py-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                                    <Smartphone className="w-5 h-5 text-blue-500" />
                                    <span className="font-bold text-slate-700">Mobile Push</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* 3D Phone Scene */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative h-[800px] w-full flex items-center justify-center perspective-[2000px]"
                    >
                        {/* Main Phone */}
                        <div className="w-[300px] md:w-[380px] h-[600px] md:h-[750px] bg-[#111] rounded-[2.5rem] md:rounded-[3rem] border-8 border-[#222] shadow-[0_50px_100px_-20px_rgba(30,58,138,0.3)] overflow-hidden relative transform rotate-y-[-12deg] rotate-x-[5deg] z-10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#222] rounded-b-xl z-20" />
                            <div className="h-full w-full bg-white flex flex-col pt-12">
                                <div className="px-6 pb-4 border-b border-slate-100 flex justify-between items-center bg-white z-10">
                                    <span className="font-bold text-lg font-serif">Messages</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-100" />
                                </div>
                                <div className="p-4 space-y-4 bg-slate-50 h-full relative">
                                    <div className="absolute inset-0 bg-blue-50/50 pointer-events-none" />
                                    <div className="p-5 bg-white rounded-2xl shadow-lg border border-slate-100 relative z-10">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-xs font-bold text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded">Urgent</span>
                                            <span className="text-xs text-slate-400">Just now</span>
                                        </div>
                                        <h4 className="font-bold text-slate-900">Elevator Maintenance</h4>
                                        <p className="text-sm text-slate-500 mt-2">Elevator B will be down for service...</p>
                                    </div>
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="p-4 bg-white/60 rounded-2xl shadow-sm border border-slate-100 blur-[1px]">
                                            <div className="h-2 w-1/3 bg-slate-200 rounded-full mb-2" />
                                            <div className="h-2 w-3/4 bg-slate-100 rounded-full" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating Notifications 3D */}
                        <FloatingElement x="10%" y="20%" rotate={-5} delay={0.3} className="z-20">
                            <div className="p-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 flex items-center gap-4 max-w-xs">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Read by 45 Tenants</div>
                                    <div className="text-xs text-slate-500">2 mins ago</div>
                                </div>
                            </div>
                        </FloatingElement>

                        <FloatingElement x="70%" y="60%" rotate={5} delay={0.5} className="z-20">
                            <div className="p-4 bg-[#111] text-white rounded-2xl shadow-2xl flex items-center gap-4 max-w-xs">
                                <Bell className="w-6 h-6 text-yellow-400" />
                                <div>
                                    <div className="font-bold">Push Sent</div>
                                    <div className="text-xs text-slate-400">98% Delivery Rate</div>
                                </div>
                            </div>
                        </FloatingElement>
                    </motion.div>
                </div >
            </section >

            {/* FEATURES GRID */}
            < section className="py-24 bg-white relative z-20" >
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-serif text-[#111] mb-6">Board to Resident Flow</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            A dedicated channel for official, one-way communication from the board to the residents.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Board Announcements",
                                desc: "Board can post official news and updates in one central place.",
                                benefit: "Residents know where to find reliable information"
                            },
                            {
                                title: "Targeted Messages",
                                desc: "Send messages to all residents or selected buildings/sections.",
                                benefit: "Avoids unnecessary messages"
                            },
                            {
                                title: "Email Notifications",
                                desc: "Automatic emails for new announcements.",
                                benefit: "Ensures high visibility"
                            },
                            {
                                title: "Message Read Status",
                                desc: "Track whether residents have read important notices.",
                                benefit: "Confirms information has been received"
                            },
                            {
                                title: "Push Notifications",
                                desc: "Alerts for urgent or time-sensitive updates.",
                                benefit: "Faster communication when needed"
                            },
                            {
                                title: "Vendor Communication",
                                desc: "Communicate with external vendors directly through the system.",
                                benefit: "Keeps all communication documented in one place"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#F9F8F6] p-8 rounded-[2rem] hover:shadow-lg transition-shadow border border-slate-100">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 text-blue-500">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-[#111] mb-3">{item.title}</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed min-h-[3rem]">
                                    {item.desc}
                                </p>
                                <div className="flex items-start gap-2 text-sm text-blue-600 font-medium bg-blue-50/50 p-3 rounded-xl">
                                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                    <span>{item.benefit}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* LIFESTYLE / CONTEXT */}
            < section className="py-20 lg:py-32" >
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 px-6 h-[600px]">
                    <div className="md:col-span-8 h-full rounded-[3rem] overflow-hidden relative group shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="People talking" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white">
                            <h3 className="text-4xl font-serif mb-2">Community, Connected.</h3>
                            <p className="opacity-80">When everyone knows what’s happening, neighbors become friends.</p>
                        </div>
                    </div>
                    <div className="md:col-span-4 h-full rounded-[3rem] bg-[#111] p-10 text-white flex flex-col justify-between shadow-2xl">
                        <Users className="w-12 h-12 text-blue-400" />
                        <div>
                            <div className="text-6xl font-bold font-serif mb-2 text-white">100%</div>
                            <div className="text-xl opacity-60">Board Transparency</div>
                        </div>
                        <p className="text-sm opacity-40">Based on user surveys 2024.</p>
                    </div>
                </div>
            </section >

        </div >
    );
}
