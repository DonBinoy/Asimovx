"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowLeft,
    CheckSquare,
    Gavel,
    Users,
    CheckCircle2,
    TrendingDown
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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

export default function BoardPage() {
    const { t } = useLanguage();

    return (
        <div className="bg-[#F9F8F6] text-[#111] font-sans selection:bg-rose-100 selection:text-rose-900 overflow-x-hidden">

            {/* Grain Texture */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            <div className="fixed top-8 left-8 z-50">
                <Link
                    href="/products/housing-association"
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-slate-200 text-sm font-bold tracking-widest uppercase hover:text-rose-600 transition-colors shadow-sm"
                >
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>
            </div>

            {/* HERO */}
            <section className="min-h-screen relative flex flex-col justify-center px-6 overflow-hidden pt-20">
                <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-rose-200/50 to-transparent rounded-full blur-[150px] mix-blend-multiply animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-gradient-to-t from-orange-200/50 to-transparent rounded-full blur-[150px] mix-blend-multiply animate-pulse" style={{ animationDelay: "2s" }} />

                <div className="max-w-[1600px] mx-auto w-full z-10 grid lg:grid-cols-2 gap-20 items-center relative">
                    <div className="flex flex-col justify-center order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-24 h-24 rounded-[2.5rem] bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white mb-10 shadow-2xl shadow-rose-500/30">
                                <CheckSquare className="w-10 h-10" />
                            </div>
                            <h1 className="text-5xl md:text-[9rem] font-serif font-medium tracking-tight leading-[0.85] mb-12 text-[#111]">
                                {t('housing_association.board.hero.title_1')} <br /> <span className="italic text-rose-600">{t('housing_association.board.hero.title_2')}</span>
                            </h1>
                            <p className="text-2xl text-slate-500 leading-relaxed font-light max-w-lg mb-12">
                                {t('housing_association.board.hero.description')}
                            </p>

                            <div className="grid grid-cols-2 gap-4 max-w-md">
                                <div className="px-6 py-4 rounded-[2rem] bg-white border border-rose-100 shadow-xl flex gap-3 items-center hover:-translate-y-1 transition-transform cursor-default">
                                    <CheckSquare className="w-6 h-6 text-rose-500" />
                                    <span className="font-bold text-lg">{t('housing_association.board.hero.task_manager')}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* 3D Task Board Visual */}
                    <div className="relative h-[800px] flex items-center justify-center order-1 lg:order-2 perspective-[2000px]">

                        <motion.div
                            initial={{ rotateX: 20, rotateZ: 5, scale: 0.9, opacity: 0 }}
                            animate={{ rotateX: 10, rotateZ: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full max-w-lg bg-[#111] rounded-[3rem] p-8 md:p-12 shadow-[0_50px_100px_-20px_rgba(225,29,72,0.3)] text-white relative z-10 border border-white/10"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <h3 className="text-3xl font-serif font-medium">{t('housing_association.board.board_visual.todo')}</h3>
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-[#1E1E24] bg-gradient-to-br from-slate-600 to-slate-800" />)}
                                </div>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { t: t('housing_association.board.tasks.budget.t'), d: "Due Oct 30", s: t('housing_association.board.tasks.budget.s'), c: "bg-yellow-500" },
                                    { t: t('housing_association.board.tasks.playground.t'), d: "Due Nov 01", s: t('housing_association.board.tasks.playground.s'), c: "bg-blue-500" },
                                    { t: t('housing_association.board.tasks.fire_inspection.t'), d: "Done", s: t('housing_association.board.tasks.fire_inspection.s'), c: "bg-green-500" },
                                ].map((task, i) => (
                                    <div key={i} className="flex items-center p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                                        <div className={`w-3 h-3 rounded-full ${task.c} mr-5 shadow-[0_0_15px_rgba(255,255,255,0.3)]`} />
                                        <div className="flex-1">
                                            <div className="font-bold text-lg mb-1 group-hover:text-rose-400 transition-colors">{task.t}</div>
                                            <div className="text-xs text-slate-400 font-mono opacity-50">{task.d}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-white/5 rounded-2xl">
                                    <div className="text-2xl font-bold">12</div>
                                    <div className="text-[10px] uppercase opacity-50">{t('housing_association.board.board_visual.open_tasks')}</div>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-2xl">
                                    <div className="text-2xl font-bold text-green-400">45</div>
                                    <div className="text-[10px] uppercase opacity-50">{t('housing_association.board.board_visual.completed')}</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <FloatingElement x="0%" y="30%" rotate={-10} delay={0.2} className="z-20">
                            <div className="p-5 bg-white rounded-[2rem] shadow-2xl border border-rose-100 w-56 flex flex-col items-center text-center">
                                <Gavel className="w-10 h-10 text-rose-500 mb-2" />
                                <div className="font-bold text-[#111]">{t('housing_association.board.board_visual.protocol_signed')}</div>
                                <div className="text-xs text-slate-400">By 5/5 Members</div>
                            </div>
                        </FloatingElement>

                        <FloatingElement x="80%" y="15%" rotate={10} delay={0.4} className="z-20">
                            <div className="p-5 bg-white rounded-[2rem] shadow-2xl border border-rose-100 flex items-center gap-3">
                                <TrendingDown className="w-8 h-8 text-green-500" />
                                <div>
                                    <div className="font-bold text-lg text-[#111]">-15%</div>
                                    <div className="text-xs text-slate-500">{t('housing_association.board.board_visual.admin_time')}</div>
                                </div>
                            </div>
                        </FloatingElement>

                    </div>
                </div>
            </section>

            {/* LIFESTYLE */}
            <section className="py-20 px-6">
                <div className="max-w-[1400px] mx-auto h-[600px] rounded-[3rem] overflow-hidden relative group shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Board Meeting" />
                    <div className="absolute inset-0 bg-rose-900/40 mix-blend-multiply" />
                    <div className="absolute bottom-10 left-10 text-white max-w-lg">
                        <h3 className="text-4xl font-serif mb-4">{t('housing_association.board.lifestyle.title')}</h3>
                        <p className="text-xl opacity-90">{t('housing_association.board.lifestyle.desc')}</p>
                    </div>
                </div>
            </section>

        </div>
    );
}
