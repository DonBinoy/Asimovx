"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    FileText,
    ArrowLeft,
    Search,
    Download,
    FolderOpen,
    PieChart,
    Shield
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

export default function DocumentsPage() {
    return (
        <div className="bg-[#F9F8F6] text-[#111] font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">

            {/* Grain Texture */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            <div className="fixed top-8 left-8 z-50">
                <Link
                    href="/products/housing-association"
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-slate-200 text-sm font-bold tracking-widest uppercase hover:text-emerald-600 transition-colors shadow-sm"
                >
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>
            </div>

            {/* HERO */}
            <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-6 pt-20">
                <div className="absolute top-[-20%] left-[20%] w-[1000px] h-[1000px] bg-gradient-to-br from-emerald-200/50 to-transparent rounded-full blur-[150px] mix-blend-multiply animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-l from-teal-200/50 to-transparent rounded-full blur-[150px] mix-blend-multiply animate-pulse" style={{ animationDelay: "2s" }} />

                <div className="max-w-[1600px] mx-auto w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="w-24 h-24 rounded-[2.5rem] bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white mb-10 shadow-2xl shadow-emerald-500/30">
                                <FolderOpen className="w-10 h-10" />
                            </div>
                            <h1 className="text-5xl md:text-[8rem] font-serif font-medium tracking-tight leading-none mb-10 text-[#111]">
                                Digital <br /> <span className="italic text-emerald-600">Memory.</span>
                            </h1>
                            <p className="text-2xl text-slate-500 leading-relaxed font-light max-w-lg mb-12">
                                The institutional brain of your association. <br /> Secure, searchable, and safe forever.
                            </p>

                            {/* Search Bar Visual */}
                            <div className="bg-white rounded-2xl shadow-xl flex items-center p-4 gap-4 border border-emerald-100 max-w-md">
                                <Search className="text-slate-400 w-6 h-6" />
                                <div className="flex-1 text-slate-400 font-serif text-lg">Search documents...</div>
                                <div className="px-3 py-1 bg-slate-100 rounded text-xs font-bold text-slate-500">⌘K</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* 3D Archive Scene */}
                    <div className="relative h-[800px] flex items-center justify-center order-1 lg:order-2 perspective-[2000px]">
                        {/* Main Stack */}
                        <motion.div
                            initial={{ rotateX: 20, rotateY: -20, scale: 0.8, opacity: 0 }}
                            animate={{ rotateX: 10, rotateY: -10, scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className="relative z-10 grid gap-4"
                        >
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={`w-full max-w-[500px] h-[150px] bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center p-8 gap-6 transform translate-x-${i * 5} md:translate-x-${i * 10} hover:-translate-x-10 transition-transform duration-500`}>
                                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
                                        <FileText className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <div className="h-4 w-48 bg-slate-900 rounded-full mb-3" />
                                        <div className="flex gap-2">
                                            <div className="h-2 w-12 bg-slate-200 rounded-full" />
                                            <div className="h-2 w-12 bg-slate-200 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="ml-auto opacity-20"><Download /></div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Floating Elements */}
                        <FloatingElement x="10%" y="20%" rotate={5} delay={0.2} className="z-20">
                            <div className="p-4 bg-emerald-600 text-white rounded-2xl shadow-2xl flex items-center gap-3">
                                <Shield className="w-6 h-6" />
                                <div className="font-bold">Encrypted Storage</div>
                            </div>
                        </FloatingElement>

                        <FloatingElement x="70%" y="60%" rotate={-5} delay={0.4} className="z-20">
                            <div className="p-6 bg-white rounded-[2rem] shadow-2xl border border-emerald-100 flex flex-col items-center">
                                <PieChart className="w-12 h-12 text-teal-400 mb-2" />
                                <div className="font-bold text-2xl text-[#111]">2.4 GB</div>
                                <div className="text-xs uppercase tracking-widest text-slate-400">Archived Data</div>
                            </div>
                        </FloatingElement>
                    </div>
                </div>
            </section>

            {/* LIFESTYLE */}
            <section className="py-20 px-6">
                <div className="max-w-[1400px] mx-auto h-[600px] rounded-[3rem] overflow-hidden relative group shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Documents" />
                    <div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply" />
                    <div className="absolute bottom-10 right-10 text-white text-right max-w-lg">
                        <h3 className="text-4xl font-serif mb-4">Paperless Future.</h3>
                        <p className="text-xl opacity-90">Stop drowning in binders. Access any contract, protocol, or invoice in seconds.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}
