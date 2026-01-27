"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue, AnimatePresence, useInView, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import {
    MessageSquare,
    ClipboardCheck,
    CalendarDays,
    FileText,
    ShieldCheck,
    ArrowRight,
    LayoutDashboard,
    MoveRight,
    Bell,
    CheckCircle2,
    TrendingUp,
    Users,
    Zap,
    Globe,
    Wifi,
    Activity,
    Layers,
    Search,
    Menu
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// --- Components ---

function Marquee({ children, direction = 1, speed = 50 }: any) {
    return (
        <div className="flex overflow-hidden whitespace-nowrap mask-linear-fade">
            <motion.div
                className="flex gap-12 py-4"
                animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: speed }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}

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
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

// --- DYNAMIC STICKY SCROLL ---

function ScrollTrigger({ onEnter, children }: { onEnter: () => void, children: React.ReactNode }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) onEnter();
    }, [isInView, onEnter]);

    return (
        <div ref={ref} className="min-h-screen flex flex-col justify-center px-6 lg:px-20 py-20">
            {children}
        </div>
    );
}

function StickyScrollSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const { t } = useLanguage();

    const STICKY_CONTENT = [
        {
            title: t('housing_association.sticky_scroll.unified_command.title'),
            desc: t('housing_association.sticky_scroll.unified_command.desc'),
            img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", // Tech/Team
            overlayComponent: (
                <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] text-white shadow-2xl max-w-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-200" />
                            ))}
                        </div>
                        <div className="font-bold text-lg">Board Members Active</div>
                    </div>
                    <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5 }}
                            className="h-full bg-green-400"
                        />
                    </div>
                </div>
            )
        },
        {
            title: t('housing_association.sticky_scroll.visual_clarity.title'),
            desc: t('housing_association.sticky_scroll.visual_clarity.desc'),
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", // Data/Graph
            overlayComponent: (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm p-8 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-[2rem] text-white shadow-2xl">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <div className="text-5xl font-serif font-medium">98.5%</div>
                            <div className="text-sm text-slate-400 uppercase tracking-widest mt-2">{t('housing_association.dashboard.optimal')}</div>
                        </div>
                        <TrendingUp className="w-10 h-10 text-green-400" />
                    </div>
                    <div className="grid grid-cols-4 gap-2 h-24 items-end">
                        {[40, 70, 50, 90].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="bg-blue-500 rounded-t-lg opacity-80"
                            />
                        ))}
                    </div>
                </div>
            )
        },
        {
            title: t('housing_association.sticky_scroll.future_proof.title'),
            desc: t('housing_association.sticky_scroll.future_proof.desc'),
            img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // Cyber/Tech
            overlayComponent: (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        <div className="w-[300px] h-[300px] rounded-full border border-white/10 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                            <div className="w-[250px] h-[250px] rounded-full border border-dashed border-white/20" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111] px-8 py-4 rounded-full border border-white/10 flex items-center gap-4 shadow-2xl">
                            <ShieldCheck className="text-emerald-500 w-8 h-8" />
                            <span className="text-white font-bold tracking-widest text-lg">{t('housing_association.marquee.secure').toUpperCase()}</span>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="bg-[#111] relative">
            <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row">

                {/* VISUAL HALF (Sticky) */}
                <div className="hidden lg:block w-1/2 h-screen sticky top-0 order-2">
                    <div className="w-full h-full relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7 }}
                                className="absolute inset-0"
                            >
                                {/* Background Image */}
                                <img
                                    src={STICKY_CONTENT[activeIndex].img}
                                    className="w-full h-full object-cover opacity-60"
                                    alt=""
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-[#111] via-transparent to-transparent" />

                                {/* Overlay Component */}
                                {STICKY_CONTENT[activeIndex].overlayComponent}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* TEXT HALF (Scrolling) */}
                <div className="w-full lg:w-1/2 order-1 relative z-10">
                    {STICKY_CONTENT.map((item, index) => (
                        <ScrollTrigger key={index} onEnter={() => setActiveIndex(index)}>
                            <div className="flex items-center gap-4 mb-6">
                                <span className={`text-6xl md:text-8xl font-serif font-bold transition-colors duration-500 ${index === activeIndex ? 'text-white opacity-100' : 'text-slate-700 opacity-20'}`}>
                                    0{index + 1}
                                </span>
                                <div className={`h-px flex-1 transition-colors duration-500 ${index === activeIndex ? 'bg-white' : 'bg-slate-800'}`} />
                            </div>
                            <h3 className={`text-5xl md:text-8xl font-serif font-medium mb-8 leading-tight transition-colors duration-500 ${index === activeIndex ? 'text-white' : 'text-slate-600'}`}>
                                {item.title}
                            </h3>
                            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-xl">
                                {item.desc}
                            </p>

                            {/* Mobile Only Image Show */}
                            <div className="lg:hidden mt-10 rounded-3xl overflow-hidden h-[400px] relative">
                                <img src={item.img} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-[#111]/20" />
                                {item.overlayComponent}
                            </div>
                        </ScrollTrigger>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CoreObjective() {
    const { t } = useLanguage();
    return (
        <section className="py-24 bg-white relative z-10">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-[#111] mb-8">{t('housing_association.core_objective.title')}</h2>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        {t('housing_association.core_objective.description')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="bg-[#F9F8F6] p-10 rounded-[2rem]">
                        <h3 className="text-2xl font-bold mb-6">{t('housing_association.core_objective.features.chaos')}</h3>
                        <ul className="space-y-4">
                            {(t('housing_association.core_objective.features.list') as unknown as string[]).map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg text-slate-700">
                                    <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-[#111]" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-full min-h-[300px] rounded-[2rem] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <p className="text-lg font-medium leading-relaxed">
                                "{t('housing_association.core_objective.quote')}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LivingIndex() {
    const { t } = useLanguage();
    const SUITE_FEATURES = [
        {
            title: t('housing_association.living_index.features.communication.title'),
            desc: t('housing_association.living_index.features.communication.desc'),
            href: "/products/housing-association/communication",
            img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
            icon: MessageSquare
        },
        {
            title: t('housing_association.living_index.features.issues.title'),
            desc: t('housing_association.living_index.features.issues.desc'),
            href: "/products/housing-association/issues",
            img: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=2070&auto=format&fit=crop",
            icon: ClipboardCheck
        },
        {
            title: t('housing_association.living_index.features.archives.title'),
            desc: t('housing_association.living_index.features.archives.desc'),
            href: "/products/housing-association/documents",
            img: "https://images.unsplash.com/photo-1568028476727-0742d82299db?q=80&w=2070&auto=format&fit=crop",
            icon: FileText
        },
        {
            title: t('housing_association.living_index.features.booking.title'),
            desc: t('housing_association.living_index.features.booking.desc'),
            href: "/products/housing-association/booking",
            img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
            icon: CalendarDays
        },
        {
            title: t('housing_association.living_index.features.board.title'),
            desc: t('housing_association.living_index.features.board.desc'),
            href: "/products/housing-association/board",
            img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
            icon: LayoutDashboard
        },
        {
            title: t('housing_association.living_index.features.residents.title'),
            desc: t('housing_association.living_index.features.residents.desc'),
            href: "/products/housing-association/resident-portal",
            img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2531&auto=format&fit=crop",
            icon: ShieldCheck
        }
    ];

    return (
        <section className="py-32 bg-[#F9F8F6] relative z-20">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-900">{t('housing_association.living_index.tagline')}</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#111] mb-6 max-w-2xl">{t('housing_association.living_index.title')}</h2>
                    <p className="text-slate-500 font-light text-lg max-w-2xl text-balance">
                        {t('housing_association.living_index.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {SUITE_FEATURES.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="group relative h-[360px] bg-[#111] rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden border border-slate-800 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-800/50 rounded-full blur-3xl group-hover:bg-slate-700/50 transition-colors duration-500" />

                            <div className="flex justify-between items-start relative z-10">
                                <span className="text-xs font-bold font-mono text-slate-500 group-hover:text-white transition-colors duration-300">
                                    0{index + 1}
                                </span>
                                <div className="w-12 h-12 rounded-2xl border border-slate-800 bg-slate-900/50 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-sm">
                                    <item.icon className="w-5 h-5 text-slate-400 group-hover:text-[#111] transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                            </div>

                            <div className="relative z-10 mt-auto">
                                <h3 className="text-3xl font-serif text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 font-light text-base leading-relaxed mb-8 group-hover:text-slate-200 transition-colors duration-300 line-clamp-2">
                                    {item.desc}
                                </p>
                                <div className="flex items-center gap-3 text-sm font-bold text-white transition-all duration-300">
                                    {t('housing_association.actions.learn_more')}
                                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-white group-hover:text-[#111] transition-all duration-300">
                                        <ArrowRight className="w-4 h-4 -ml-0.5 group-hover:ml-0 transition-all" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function HousingAssociationProductPage() {
    const { t } = useLanguage();

    return (
        <div className="bg-[#F9F8F6] text-[#111] font-sans selection:bg-[#EBE5D5] selection:text-[#111]">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[120vh] pt-32 pb-20 overflow-hidden flex flex-col items-center">

                {/* Subtle Grain Texture */}
                <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

                {/* Marquee Background Top */}
                <div className="absolute top-32 w-full opacity-5 pointer-events-none rotate-[-2deg] scale-110">
                    <Marquee speed={40}>
                        <span className="text-[8rem] font-bold uppercase tracking-tighter">{t('housing_association.marquee.system_online')}</span>
                        <span className="text-[8rem] font-bold uppercase tracking-tighter text-transparent stroke-2 stroke-black" style={{ WebkitTextStroke: "2px black" }}>{t('housing_association.marquee.secure')}</span>
                        <span className="text-[8rem] font-bold uppercase tracking-tighter">{t('housing_association.marquee.connected')}</span>
                        <span className="text-[8rem] font-bold uppercase tracking-tighter text-transparent stroke-2 stroke-black" style={{ WebkitTextStroke: "2px black" }}>{t('housing_association.marquee.live')}</span>
                    </Marquee>
                </div>

                <div className="max-w-[1600px] mx-auto px-6 relative z-10 w-full">
                    <div className="text-center max-w-5xl mx-auto mb-32 mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-center mb-8"
                        >
                            <div className="flex items-center gap-6 px-8 py-3 bg-[#111] text-white rounded-full">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em]">{t('housing_association.hero.tagline')}</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="text-4xl md:text-7xl lg:text-[10rem] leading-[0.9] md:leading-[0.8] font-serif font-medium text-[#111] tracking-tight mb-8 md:mb-12 break-words hyphens-auto"
                        >
                            {t('housing_association.hero.title_1')} <br />
                            <span className="italic opacity-40">{t('housing_association.hero.title_2')}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-3xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed"
                        >
                            {t('housing_association.hero.description_1')} <br />
                            <span className="text-[#111]">{t('housing_association.hero.description_2')}</span>
                        </motion.p>
                    </div>

                    {/* 3D Main Scene - DENSE */}
                    <div className="relative w-full h-[800px] perspective-[2000px] flex items-center justify-center">

                        {/* Floating Widget Clouds */}
                        <FloatingElement x="15%" y="10%" delay={0.2} rotate={-10}>
                            <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"><Wifi className="w-5 h-5" /></div>
                                <div>
                                    <div className="font-bold text-sm">{t('housing_association.dashboard.network_status')}</div>
                                    <div className="text-xs text-green-500 font-bold uppercase">{t('housing_association.dashboard.optimal')}</div>
                                </div>
                            </div>
                        </FloatingElement>

                        <FloatingElement x="10%" y="40%" delay={0.4} rotate={5}>
                            <div className="bg-[#111] text-white p-6 rounded-[2rem] shadow-xl w-48">
                                <Activity className="w-8 h-8 mb-4 text-green-400" />
                                <div className="text-3xl font-bold font-serif">42ms</div>
                                <div className="text-xs opacity-50 uppercase tracking-widest">{t('housing_association.dashboard.latency')}</div>
                            </div>
                        </FloatingElement>

                        <FloatingElement x="80%" y="15%" delay={0.3} rotate={10}>
                            <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />)}
                                </div>
                                <div className="text-xs font-bold uppercase text-slate-400">{t('housing_association.dashboard.users_live')}</div>
                            </div>
                        </FloatingElement>

                        <FloatingElement x="75%" y="60%" delay={0.5} rotate={-5}>
                            <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 max-w-xs">
                                <div className="flex items-center gap-3 mb-3 border-b border-slate-50 pb-3">
                                    <Bell className="w-5 h-5 text-red-500" />
                                    <span className="font-bold text-sm">{t('housing_association.dashboard.new_alert')}</span>
                                </div>
                                <p className="text-sm text-slate-500">{t('housing_association.dashboard.alert_msg')}</p>
                            </div>
                        </FloatingElement>

                        {/* Main Dashboard UI - Tilted */}
                        <motion.div
                            initial={{ rotateX: 25, rotateY: 0, scale: 0.9, opacity: 0 }}
                            animate={{ rotateX: 20, rotateY: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-full max-w-[1000px] h-auto min-h-[500px] md:h-[700px] bg-[#FDFDFD] rounded-[2rem] md:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-[#E5E5E5] relative z-10 overflow-hidden pb-10 md:pb-0"
                        >
                            {/* Header */}
                            <div className="h-20 border-b border-[#F0F0F0] flex items-center px-10 justify-between">
                                <div className="flex items-center gap-4">
                                    <Menu className="w-6 h-6 text-slate-300" />
                                    <div className="h-4 w-32 bg-slate-100 rounded-full" />
                                </div>
                                <div className="flex gap-4">
                                    <Search className="w-6 h-6 text-slate-300" />
                                    <div className="w-10 h-10 rounded-full bg-slate-100" />
                                </div>
                            </div>

                            {/* Grid Content */}
                            <div className="p-4 md:p-10 grid grid-cols-12 gap-4 md:gap-8 bg-[#FAFAFA] h-full">
                                <div className="hidden md:block col-span-3 space-y-4 border-r border-[#EEEEEE] pr-8">
                                    <div className="h-10 w-full bg-[#111] rounded-xl" />
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-10 w-full bg-white rounded-xl border border-slate-100" />)}
                                </div>
                                <div className="col-span-12 md:col-span-9 grid grid-cols-2 gap-4 md:gap-8 content-start">
                                    <div className="col-span-2 min-h-[16rem] h-auto bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-8">
                                            <div>
                                                <div className="text-4xl font-serif font-medium text-[#111]">$24,500</div>
                                                <div className="text-sm text-slate-400 uppercase tracking-widest mt-1">{t('housing_association.dashboard.monthly_revenue')}</div>
                                            </div>
                                            <div className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-bold">+12%</div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full h-32 flex items-end px-8 gap-4">
                                            {[40, 65, 45, 80, 55, 70, 90, 60, 75].map((h, i) => (
                                                <div key={i} className="flex-1 bg-[#111] opacity-10 rounded-t-lg hover:opacity-100 transition-opacity" style={{ height: `${h}%` }} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="min-h-[12rem] h-auto bg-white rounded-[2rem] border border-slate-100 shadow-sm p-6 flex flex-col justify-center items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><Users className="w-8 h-8" /></div>
                                        <div className="font-bold text-xl">{t('housing_association.dashboard.residents')}</div>
                                    </div>
                                    <div className="min-h-[12rem] h-auto bg-white rounded-[2rem] border border-slate-100 shadow-sm p-6 flex flex-col justify-center items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center"><ClipboardCheck className="w-8 h-8" /></div>
                                        <div className="font-bold text-xl">{t('housing_association.dashboard.open_tasks')}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- CORE OBJECTIVE --- */}
            <CoreObjective />

            {/* --- STICKY SCROLL SECTION --- */}
            <StickyScrollSection />

            {/* --- LIVING INDEX --- */}
            <LivingIndex />

            {/* --- BIG CTA --- */}
            <section className="py-40 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-7xl md:text-9xl font-serif text-[#111] mb-12 tracking-tight">
                        {t('housing_association.cta.title_1')} <br /> <span className="italic">{t('housing_association.cta.title_2')}</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <button className="px-12 py-6 bg-[#111] text-white rounded-full text-xl font-bold tracking-wide hover:scale-105 transition-transform">
                            {t('housing_association.cta.book_demo')}
                        </button>
                        <button className="px-12 py-6 bg-white border border-slate-200 text-[#111] rounded-full text-xl font-bold tracking-wide hover:bg-slate-50 transition-colors">
                            {t('housing_association.cta.view_pricing')}
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}
