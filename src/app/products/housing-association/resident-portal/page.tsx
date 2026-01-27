"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ShieldCheck,
    ArrowLeft,
    User,
    Wallet,
    Heart,
    Car,
    CreditCard,
    Vote
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";

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

export default function ResidentPage() {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#F9F8F6] text-[#111] font-sans selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden">

            {/* Grain Texture */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            <div className="fixed top-8 left-8 z-50">
                <Link
                    href="/products/housing-association"
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-slate-200 text-sm font-bold tracking-widest uppercase hover:text-cyan-600 transition-colors shadow-sm"
                >
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>
            </div>

            {/* HERO */}
            <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-6 pt-20">
                <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-br from-cyan-200/50 to-transparent rounded-full blur-[150px] mix-blend-multiply animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-t from-sky-200/50 to-transparent rounded-full blur-[150px] mix-blend-multiply animate-pulse" style={{ animationDelay: "2s" }} />

                <div className="max-w-[1600px] mx-auto w-full z-10 grid lg:grid-cols-2 gap-20 items-center relative">
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="w-24 h-24 rounded-[2.5rem] bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center text-white mb-10 shadow-2xl shadow-cyan-400/30">
                                <User className="w-10 h-10" />
                            </div>
                            <h1 className="text-5xl md:text-[9rem] font-serif font-medium tracking-tight leading-none mb-10 text-[#111]">
                                {t('housing_association.residents.hero.title_1')} <br /> <span className="italic text-cyan-600">{t('housing_association.residents.hero.title_2')}</span>
                            </h1>
                            <p className="text-2xl text-slate-500 leading-relaxed font-light max-w-2xl mb-12">
                                {t('housing_association.residents.hero.description')}
                            </p>

                            <div className="flex gap-4 flex-wrap">
                                {[
                                    t('housing_association.residents.hero.tags.payment_history'),
                                    t('housing_association.residents.hero.tags.car_registry'),
                                    t('housing_association.residents.hero.tags.documents'),
                                    t('housing_association.residents.hero.tags.polls')
                                ].map((tag, i) => (
                                    <div key={i} className="px-4 py-2 bg-white rounded-xl border border-slate-100 shadow-sm text-sm font-bold text-slate-600">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* 3D Dashboard Scene */}
                    <div className="relative h-[800px] flex items-center justify-center order-1 lg:order-2 perspective-[2000px]">
                        {/* Main Card */}
                        <motion.div
                            initial={{ rotateY: -20, rotateX: 10, scale: 0.8, opacity: 0 }}
                            animate={{ rotateY: -10, rotateX: 5, scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className="w-full max-w-[600px] h-[600px] md:h-[700px] bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-slate-100 p-6 md:p-10 relative z-10 overflow-hidden"
                        >
                            <div className="flex items-center gap-6 mb-10 border-b border-slate-100 pb-8">
                                <div className="w-20 h-20 rounded-full bg-slate-200" />
                                <div>
                                    <div className="text-3xl font-serif font-medium text-[#111]">Alice Freeman</div>
                                    <div className="text-slate-500">Apt 1204 • Floor 4</div>
                                </div>
                            </div>

                            <div className="grid gap-6">
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                                    <Wallet className="w-8 h-8 text-cyan-500" />
                                    <div className="flex-1">
                                        <div className="font-bold text-lg text-[#111]">{t('housing_association.residents.dashboard.monthly_fee')}</div>
                                        <div className="text-xs text-slate-400">{t('housing_association.residents.dashboard.due_in')}</div>
                                    </div>
                                    <div className="font-bold text-xl text-[#111]">$4,200</div>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                                    <Car className="w-8 h-8 text-sky-500" />
                                    <div className="flex-1">
                                        <div className="font-bold text-lg text-[#111]">{t('housing_association.residents.dashboard.parking')}</div>
                                        <div className="text-xs text-slate-400">{t('housing_association.residents.dashboard.slot')}</div>
                                    </div>
                                    <div className="font-bold text-xl text-green-500">{t('housing_association.residents.dashboard.active')}</div>
                                </div>
                                <div className="p-6 bg-gradient-to-r from-cyan-500 to-sky-600 rounded-2xl shadow-lg shadow-cyan-500/20 text-white mt-4">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Vote className="w-6 h-6" />
                                        <span className="font-bold">{t('housing_association.residents.dashboard.poll')}</span>
                                    </div>
                                    <p className="mb-4 text-sm opacity-90">{t('housing_association.residents.dashboard.poll_question')}</p>
                                    <div className="flex gap-2">
                                        <div className="flex-1 py-2 bg-white/20 rounded-lg text-center font-bold text-sm cursor-pointer hover:bg-white/30">{t('housing_association.residents.dashboard.yes')}</div>
                                        <div className="flex-1 py-2 bg-white/20 rounded-lg text-center font-bold text-sm cursor-pointer hover:bg-white/30">{t('housing_association.residents.dashboard.no')}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <FloatingElement x="0%" y="20%" rotate={5} delay={0.2} className="z-20">
                            <div className="p-4 bg-[#111] text-white rounded-2xl shadow-2xl flex items-center gap-4">
                                <CreditCard className="w-8 h-8 text-cyan-400" />
                                <div>
                                    <div className="font-bold">{t('housing_association.residents.dashboard.auto_pay')}</div>
                                    <div className="text-xs text-slate-400">{t('housing_association.residents.dashboard.enabled')}</div>
                                </div>
                            </div>
                        </FloatingElement>

                        <FloatingElement x="80%" y="60%" rotate={-5} delay={0.4} className="z-20">
                            <div className="w-40 h-40 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border border-slate-100">
                                <div className="text-4xl font-serif font-bold text-cyan-500">2</div>
                                <div className="text-xs uppercase font-bold text-slate-400">{t('housing_association.residents.dashboard.guests')}</div>
                            </div>
                        </FloatingElement>
                    </div>
                </div>
            </section>

            {/* LIFESTYLE */}
            <section className="py-20 px-6">
                <div className="max-w-[1400px] mx-auto h-[600px] rounded-[3rem] overflow-hidden relative group shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Community" />
                    <div className="absolute inset-0 bg-sky-900/30 mix-blend-multiply" />
                    <div className="absolute bottom-10 center text-white text-center w-full">
                        <h3 className="text-4xl font-serif mb-4">{t('housing_association.residents.lifestyle.title')}</h3>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">{t('housing_association.residents.lifestyle.desc')}</p>
                    </div>
                </div>
            </section>

        </div>
    );
}
