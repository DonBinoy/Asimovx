"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    CalendarDays,
    ArrowLeft,
    Clock,
    RefreshCw,
    CheckCircle2,
    CalendarCheck,
    User
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

export default function BookingPage() {
    return (
        <div className="bg-[#F9F8F6] text-[#111] font-sans selection:bg-violet-100 selection:text-violet-900 overflow-x-hidden">

            {/* Grain Texture */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            <div className="fixed top-8 left-8 z-50">
                <Link
                    href="/products/housing-association"
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-slate-200 text-sm font-bold tracking-widest uppercase hover:text-violet-600 transition-colors shadow-sm"
                >
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>
            </div>

            {/* HERO */}
            <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-6 pt-20">
                <div className="absolute sealed top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-violet-200/50 to-transparent rounded-full blur-[150px] mix-blend-multiply animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-t from-purple-200/50 to-transparent rounded-full blur-[150px] mix-blend-multiply animate-pulse" style={{ animationDelay: "1s" }} />

                <div className="max-w-[1600px] mx-auto w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="w-24 h-24 rounded-[2.5rem] bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white mb-10 shadow-2xl shadow-violet-500/30">
                                <CalendarDays className="w-10 h-10" />
                            </div>
                            <h1 className="text-5xl md:text-[9rem] font-serif font-medium tracking-tight leading-[0.8] mb-10 text-[#111] -ml-1">
                                Book <br />
                                <span className="italic text-violet-600">Smart.</span>
                            </h1>
                            <p className="text-2xl text-slate-500 max-w-lg leading-relaxed mb-12 font-light">
                                Fair, transparent, and conflict-free. <br /> From Laundry Rooms to Guest Apartments.
                            </p>

                            <div className="flex gap-4">
                                <div className="p-4 bg-white/60 rounded-2xl border border-slate-100 backdrop-blur-sm">
                                    <div className="text-xs font-bold uppercase tracking-widest text-violet-500 mb-1">Utilization</div>
                                    <div className="text-3xl font-bold font-serif text-[#111]">85%</div>
                                </div>
                                <div className="p-4 bg-white/60 rounded-2xl border border-slate-100 backdrop-blur-sm">
                                    <div className="text-xs font-bold uppercase tracking-widest text-violet-500 mb-1">Conflicts</div>
                                    <div className="text-3xl font-bold font-serif text-[#111]">0%</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* 3D Calendar Scene */}
                    <div className="relative h-[800px] flex items-center justify-center perspective-[2000px]">
                        {/* Tilted Calendar */}
                        <motion.div
                            initial={{ rotateY: 15, rotateX: 5, scale: 0.9, opacity: 0 }}
                            animate={{ rotateY: -10, rotateX: 5, scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className="w-full max-w-[700px] h-[500px] md:h-[600px] bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(109,40,217,0.2)] p-6 md:p-12 relative z-10 overflow-hidden border border-violet-100"
                        >
                            <div className="flex justify-between items-end mb-12">
                                <div>
                                    <div className="text-5xl font-serif font-medium text-slate-900 mb-2">October</div>
                                    <div className="text-violet-500 font-medium tracking-wide uppercase text-sm">Laundry Room A</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-7 gap-4">
                                {[...Array(31)].map((_, i) => (
                                    <div key={i} className={`aspect-square rounded-2xl flex items-center justify-center text-sm font-bold relative
                                  ${i === 23 ? 'bg-violet-600 text-white shadow-xl shadow-violet-600/30' : 'text-slate-300 bg-slate-50'}
                              `}>
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <FloatingElement x="0%" y="30%" rotate={-5} delay={0.2} className="z-20">
                            <div className="p-5 bg-white rounded-3xl shadow-2xl border border-slate-100 w-64">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500"><User className="w-5 h-5" /></div>
                                    <div>
                                        <div className="font-bold text-sm text-[#111]">John D.</div>
                                        <div className="text-[10px] uppercase tracking-wide text-slate-400">Resident</div>
                                    </div>
                                </div>
                                <div className="p-3 bg-violet-50 rounded-xl mb-2">
                                    <div className="text-violet-600 font-bold text-sm">Laundry A</div>
                                    <div className="text-violet-400 text-xs">18:00 - 20:00</div>
                                </div>
                                <div className="text-xs text-center text-green-500 font-bold uppercase tracking-widest mt-2">Confirmed</div>
                            </div>
                        </FloatingElement>

                        <FloatingElement x="70%" y="10%" rotate={10} delay={0.4} className="z-20">
                            <div className="p-6 bg-[#111] text-white rounded-[2rem] shadow-2xl flex flex-col items-center justify-center w-48 h-48">
                                <Clock className="w-10 h-10 text-violet-400 mb-2" />
                                <div className="text-3xl font-bold">1h</div>
                                <div className="text-xs opacity-50 uppercase tracking-widest">Reminders</div>
                            </div>
                        </FloatingElement>
                    </div>
                </div>
            </section>

            {/* LIFESTYLE */}
            <section className="py-20 px-6">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 h-[500px]">
                    <div className="h-full rounded-[3rem] overflow-hidden relative group shadow-xl max-h-[400px] md:max-h-full">
                        <img src="https://images.unsplash.com/photo-1545124132-ad94236e792f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Laundry Room" />
                        <div className="absolute inset-0 bg-violet-900/30 mix-blend-multiply" />
                        <div className="absolute bottom-10 left-10 text-white max-w-sm">
                            <h3 className="text-3xl font-serif mb-2">Shared Spaces.</h3>
                            <p className="opacity-90">Maximize utilization of common resources without the headache.</p>
                        </div>
                    </div>
                    <div className="h-full rounded-[3rem] overflow-hidden relative group shadow-xl max-h-[400px] md:max-h-full">
                        <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Guest room" />
                        <div className="absolute inset-0 bg-purple-900/30 mix-blend-multiply" />
                        <div className="absolute bottom-10 left-10 text-white max-w-sm">
                            <h3 className="text-3xl font-serif mb-2">Guest Apartments.</h3>
                            <p className="opacity-90">Easy booking flows for overnight guests.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
