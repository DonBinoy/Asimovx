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

const STICKY_CONTENT = [
    {
        title: "Unified Command.",
        desc: "Bring your board, residents, and vendors into one shared reality. No more lost emails or WhatsApp threads.",
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
        title: "Visual Clarity.",
        desc: "See exactly what's happening in your building. From broken lights to budget usage, visualize it all.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", // Data/Graph
        overlayComponent: (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm p-8 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-[2rem] text-white shadow-2xl">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <div className="text-5xl font-serif font-medium">98.5%</div>
                        <div className="text-sm text-slate-400 uppercase tracking-widest mt-2">System Uptime</div>
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
        title: "Future Proof.",
        desc: "Built on modern infrastructure that grows with you. Secure, fast, and always online.",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // Cyber/Tech
        overlayComponent: (
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    <div className="w-[300px] h-[300px] rounded-full border border-white/10 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                        <div className="w-[250px] h-[250px] rounded-full border border-dashed border-white/20" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111] px-8 py-4 rounded-full border border-white/10 flex items-center gap-4 shadow-2xl">
                        <ShieldCheck className="text-emerald-500 w-8 h-8" />
                        <span className="text-white font-bold tracking-widest text-lg">SECURE</span>
                    </div>
                </div>
            </div>
        )
    }
];

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
                                <div className="absolute bottom-0 w-full">
                                    {item.overlayComponent}
                                </div>
                            </div>
                        </ScrollTrigger>
                    ))}
                </div>
            </div>
        </section>
    );
}

const SUITE_FEATURES = [
    {
        title: "Communication",
        desc: "Reach everyone instantly.",
        href: "/products/housing-association/communication",
        img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
        icon: MessageSquare
    },
    {
        title: "Issues",
        desc: "Fix things faster.",
        href: "/products/housing-association/issues",
        img: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=2070&auto=format&fit=crop",
        icon: ClipboardCheck
    },
    {
        title: "Archives",
        desc: "Safe storage.",
        href: "/products/housing-association/documents",
        img: "https://images.unsplash.com/photo-1568028476727-0742d82299db?q=80&w=2070&auto=format&fit=crop",
        icon: FileText
    },
    {
        title: "Booking",
        desc: "Resource management.",
        href: "/products/housing-association/booking",
        img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
        icon: CalendarDays
    },
    {
        title: "Board",
        desc: "Operational command.",
        href: "/products/housing-association/board",
        img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
        icon: LayoutDashboard
    },
    {
        title: "Residents",
        desc: "Self-service portal.",
        href: "/products/housing-association/resident-portal",
        img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2531&auto=format&fit=crop",
        icon: ShieldCheck
    }
];

function CoreObjective() {
    return (
        <section className="py-24 bg-white relative z-10">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-[#111] mb-8">Core Objective</h2>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        This platform is built to make life easier for Swedish housing associations (BRF) by reducing the
                        everyday workload of board members. Many board members are volunteers, and today they
                        spend far too much time on emails, follow-ups, spreadsheets, and manual coordination.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="bg-[#F9F8F6] p-10 rounded-[2rem]">
                        <h3 className="text-2xl font-bold mb-6">The platform replaces chaos with one simple, digital workspace that:</h3>
                        <ul className="space-y-4">
                            {[
                                "Reduces manual work",
                                "Removes repetitive tasks",
                                "Keeps everything in one place",
                                "Prevents information from being lost when boards change"
                            ].map((item, i) => (
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
                                "The goal is to let board members spend less time on administration and more time on what really matters, improving the living experience for residents."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function KeyCapabilities() {
    const capabilities = [
        {
            title: "Centralized & Professional Communication",
            points: [
                "One digital place for all communication — no more messy inboxes",
                "No need to use personal email accounts — all communication stays in one place",
                "Announcements can be published easily without manual notices"
            ],
            icon: MessageSquare
        },
        {
            title: "Resident Self-Service & Convenience",
            points: [
                "Residents can send requests directly in the system",
                "Residents can register complaints and set their priority for faster handling",
                "Easy booking of shared services like the laundry room and common party areas",
                "Clear view of available time slots"
            ],
            icon: Users
        },
        {
            title: "Efficient Board Management",
            points: [
                "Board members manage everything from one platform",
                "Clear overview of maintenance work and open issues",
                "Requests and tasks are organized automatically"
            ],
            icon: LayoutDashboard
        },
        {
            title: "Transparency & Continuity",
            points: [
                "Shared history that future board members can easily access",
                "No lost information or undocumented decisions"
            ],
            icon: Layers
        },
        {
            title: "Smart Decision-Making",
            points: [
                "Quick polls to help the board make decisions faster"
            ],
            icon: Zap
        },
        {
            title: "Reliability & Accessibility",
            points: [
                "No conflicts or double bookings",
                "Simple and easy to use for everyone",
                "Multiple language support"
            ],
            icon: Globe
        }
    ];

    return (
        <section className="py-24 bg-[#111] text-white">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6">Key Capabilities</h2>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                        Powerful tools designed to create a calmer, more professional association.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-green-400">
                                <cap.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif mb-6">{cap.title}</h3>
                            <ul className="space-y-3">
                                {cap.points.map((pt, j) => (
                                    <li key={j} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 shrink-0" />
                                        {pt}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 max-w-4xl mx-auto text-center">
                    <p className="text-2xl font-light text-slate-300 leading-relaxed">
                        "By moving these tasks into one system, the workload for board members is greatly reduced.
                        What once took hours now takes minutes. The board works more efficiently, residents get faster
                        responses, and the association feels calmer and more professional."
                    </p>
                </div>
            </div>
        </section>
    );
}

function SystemFoundations() {
    const foundations = [
        {
            title: "Clear Communication with Residents",
            desc: "The board has one clear place to share information.",
            howItHelps: [
                "Share news, updates, and urgent messages",
                "Send information to all residents or selected groups",
                "Everyone knows where to find official information"
            ],
            simpleTerms: [
                "No missed messages",
                "Clear and transparent communication"
            ]
        },
        {
            title: "Issue & Maintenance Handling",
            desc: "Residents can report problems easily through the system.",
            howItHelps: [
                "Residents report issues online",
                "Board or caretaker can prioritize and track progress",
                "No information lost in emails or notes"
            ],
            simpleTerms: [
                "Problems are handled faster",
                "Everyone knows the status of an issue"
            ]
        },
        {
            title: "Keeping Knowledge When Boards Change",
            desc: "Important information is safely stored in one place.",
            howItHelps: [
                "Documents, decisions, and history are saved securely",
                "New board members can easily see past work"
            ],
            simpleTerms: [
                "No lost knowledge",
                "Smooth transition when the board changes"
            ]
        },
        {
            title: "Urgent Announcements & Instant Alerts",
            desc: "For important or urgent situations.",
            howItHelps: [
                "Messages are not lost in email spam or inbox clutter",
                "Push notifications can alert residents instantly"
            ],
            simpleTerms: [
                "Important messages reach people quickly"
            ]
        },
        {
            title: "Resource Booking & Shared Assets",
            desc: "Shared spaces can be booked digitally.",
            howItHelps: [
                "Laundry room (Tvättstuga) booking without paper lists",
                "Booking of guest apartments and common rooms",
                "No double bookings or confusion"
            ],
            subSection: {
                title: "Smart Notifications & Rebooking",
                points: [
                    "Booking confirmation messages",
                    "Reminders before the booking",
                    "Notifications for cancellations",
                    "Immediate availability when a slot becomes free",
                    "Optional alerts when a free slot opens",
                    "Easy rebooking"
                ]
            },
            simpleTerms: [
                "Easy and fair booking",
                "No scheduling conflicts"
            ]
        },
        {
            title: "Digital Document Archive & Resident Portal",
            desc: "Residents can easily access important documents.",
            howItHelps: [
                "Renovation rules and technical information",
                "Statutes & Annual Reports"
            ],
            subSection: {
                title: "Digital “Bopärm” & Processes",
                points: [
                    "Rules and guidelines in digital form",
                    "Easy access to Statutes (stadgar) & Latest annual report",
                    "Residents submit renovation plans digitally",
                    "Board reviews and approves clearly"
                ]
            },
            simpleTerms: [
                "Documents are easy to find",
                "No paper folders or old emails",
                "Clear renovation process"
            ]
        },
        {
            title: "Financial Overview & Transparency",
            desc: "The system shows financial information in a clear way.",
            howItHelps: [
                "View monthly fee (avgift)",
                "See past fee history",
                "Check if payments are up to date",
                "Financial information is easy to access",
                "Fewer questions to the board"
            ],
            simpleTerms: [
                "Residents understand their fees",
                "Board saves time",
                "Builds trust"
            ]
        },
        {
            title: "Building Cooperation & Community",
            desc: "The system helps residents and the board work better together.",
            howItHelps: [
                "Residents feel involved",
                "Trust between residents and board improves"
            ],
            subSection: {
                title: "Digital Surveys & Better Decisions",
                points: [
                    "Simple questions like: “Should we install EV chargers?”",
                    "Residents answer with one click",
                    "Board sees interest and concerns early",
                    "No paper forms or long email chains"
                ]
            },
            simpleTerms: [
                "Residents have a voice",
                "Board gets quick feedback",
                "Stronger community"
            ]
        }
    ];

    return (
        <section className="py-24 bg-white relative z-10 border-t border-slate-100">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-[#111] mb-6">Core Foundations</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            The essential pillars that make the system a powerful tool for your association.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-12">
                    {foundations.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-50px", once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-[#F9F8F6] rounded-[2.5rem] p-8 md:p-12 border border-slate-100"
                        >
                            <div className="flex flex-col md:flex-row gap-10">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-10 h-10 rounded-full bg-[#111] text-white flex items-center justify-center font-bold text-lg">
                                            {index + 1}
                                        </span>
                                        <h3 className="text-3xl font-serif text-[#111]">{item.title}</h3>
                                    </div>
                                    <p className="text-xl text-slate-600 mb-8 pl-14">
                                        {item.desc}
                                    </p>

                                    <div className="pl-14 space-y-6">
                                        <div>
                                            <h4 className="font-bold text-[#111] mb-3 uppercase tracking-wider text-xs">How It Helps</h4>
                                            <ul className="grid grid-cols-1 gap-3">
                                                {item.howItHelps.map((point, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {item.subSection && (
                                            <div className="bg-white p-6 rounded-2xl border border-slate-100">
                                                <h4 className="font-bold text-[#111] mb-3 text-sm">{item.subSection.title}</h4>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    {item.subSection.points.map((point, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="w-full md:w-[350px] bg-white rounded-3xl p-8 border border-green-100/50 shadow-sm flex flex-col justify-center h-fit shrink-0">
                                    <h4 className="text-green-600 font-bold mb-6 text-sm uppercase tracking-widest">In Simple Terms</h4>
                                    <ul className="space-y-4">
                                        {item.simpleTerms.map((term, i) => (
                                            <li key={i} className="flex items-center gap-3 text-lg font-medium text-[#111]">
                                                <span className="w-8 h-[2px] bg-green-400" />
                                                {term}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function MVPScope() {
    const modules = [
        {
            title: "Association Setup and Roles",
            subtitle: "The Foundation",
            desc: "This module forms the basic structure of the housing association in the system.",
            rows: [
                { area: "Association Profile", covers: "Store association name, address, and organization number", useful: "Keeps all core details in one place" },
                { area: "Residents & Apartments", covers: "Add residents and link them to their apartments", useful: "Clear overview of who lives where" },
                { area: "User Roles & Permissions", covers: "Define roles like Chairperson, Treasurer, Board Member, Resident", useful: "Ensures correct access and data security" },
                { area: "Data Setup", covers: "Import residents and apartments via CSV or add manually", useful: "Quick and easy initial setup" },
                { area: "Language & Localization", covers: "Swedish as the default system language, possibility to support other languages too. Eg English.", useful: "Matches local BRF requirements" }
            ]
        },
        {
            title: "Communication and Announcements",
            subtitle: "Board to Resident Flow",
            desc: "A dedicated channel for official, one-way communication from the board to the residents.",
            rows: [
                { area: "Board Announcements", covers: "Board can post official news and updates in one central place", useful: "Residents know where to find reliable information" },
                { area: "Targeted Messages", covers: "Send messages to all residents or selected buildings/sections", useful: "Avoids unnecessary messages" },
                { area: "Email Notifications", covers: "Automatic emails for new announcements", useful: "Ensures high visibility" },
                { area: "Message Read Status", covers: "Track whether residents have read important notices", useful: "Confirms information has been received" },
                { area: "Push Notifications (optional)", covers: "Alerts for urgent or time-sensitive updates", useful: "Faster communication when needed" },
                { area: "Board Communication with Vendors", covers: "Board members can also communicate with external vendors directly through the system.", useful: "Avoids using personal email accounts and keeps all communication documented in one place." }
            ]
        },
        {
            title: "Issue and Maintenance Management",
            subtitle: "Structured Reporting",
            desc: "A dedicated system for managing facility-related problems and maintenance requests.",
            rows: [
                { area: "Issue Submission", covers: "Residents can report problems through the portal", useful: "Easy and quick reporting" },
                { area: "Photo Upload", covers: "Attach photos to explain the issue", useful: "Reduces misunderstandings" },
                { area: "Issue Category", covers: "Select type (e.g. Plumbing, Electrical, Common Area)", useful: "Faster handling" },
                { area: "Priority Level", covers: "Mark urgency (High, Medium, Low)", useful: "Helps board focus on critical issues" },
                { area: "Status Tracking", covers: "Clear progress: New → In Progress → Completed", useful: "Residents know what’s happening" },
                { area: "Comments & Updates", covers: "Shared message thread for updates and responses", useful: "Transparent communication" }
            ]
        },
        {
            title: "Document Storage and Archive",
            subtitle: "Knowledge Preservation",
            desc: "A centralized, secure repository for all association documents and historical records.",
            rows: [
                { area: "Document Upload", covers: "Upload and manage documents (PDF, Word, etc.)", useful: "Keeps everything in one place" },
                { area: "Folder Structure", covers: "Organize documents using simple folders", useful: "Easy to understand and navigate" },
                { area: "Access Control", covers: "Control who can see which documents (Board or Residents)", useful: "Protects sensitive information" },
                { area: "Document Search", covers: "Search by title and basic details", useful: "Saves time finding documents" },
                { area: "Document Categories", covers: "Bylaws, meeting minutes, contracts, general rules", useful: "Clear and structured archive" }
            ]
        },
        {
            title: "Board Meetings and Decisions",
            subtitle: "Operational Efficiency",
            desc: "A tool to streamline the process of planning meetings and formalizing outcomes.",
            rows: [
                { area: "Meeting Creation", covers: "Schedule board meetings with date, time, and participants", useful: "Keeps meetings organized" },
                { area: "Agenda Setup", covers: "Create and structure agenda items", useful: "Ensures focused discussions" },
                { area: "Decision Recording", covers: "Record decisions and notes per agenda item", useful: "Clear documentation" },
                { area: "Action Assignments", covers: "Assign follow-up tasks to board members", useful: "Ensures accountability" }
            ]
        },
        {
            title: "Resident Self-Service Portal",
            subtitle: "User Empowerment",
            desc: "The dedicated view and interface for general residents to engage with the system.",
            rows: [
                { area: "Announcements", covers: "View official updates from the board", useful: "Stay informed" },
                { area: "Issue Reporting", covers: "Submit issues and track their progress", useful: "Clear visibility on resolutions" },
                { area: "Document Access", covers: "View shared documents and rules", useful: "Easy access to information" },
                { area: "Personal Details", covers: "Update phone number and email", useful: "Keeps records accurate" }
            ]
        },
        {
            title: "Audit Log and History",
            subtitle: "Transparency and Accountability",
            desc: "A mechanism to record and maintain a comprehensive history of critical activities.",
            rows: [
                { area: "User Activity", covers: "Who did what (e.g. uploaded a document, changed a status)", useful: "Transparency and accountability" },
                { area: "Decision History", covers: "When decisions were made and updated", useful: "Clear audit trail" },
                { area: "Issue History", covers: "Status changes with timestamps", useful: "Track progress over time" },
                { area: "Document Versions", covers: "Previous versions of important documents", useful: "Prevents data loss" }
            ]
        }
    ];

    const outOfScope = [
        { title: "Accounting & Bookkeeping", desc: "The system will not replace accounting software or manage financial records." },
        { title: "Payments & Fees", desc: "No handling of payments, invoices, or monthly fees in the first version." },
        { title: "BankID Login", desc: "Secure login via BankID is not part of the initial release." }
    ];

    return (
        <section className="py-32 bg-[#111] text-white overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center max-w-4xl mx-auto"
                >
                    <span className="text-green-400 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Initial Release</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
                        Minimum Viable Product <span className="italic text-slate-500">(MVP)</span>
                    </h2>
                    <p className="text-xl text-slate-400 leading-relaxed font-light">
                        The initial version focuses on delivering core value through seven essential modules,
                        ensuring a fast, high-quality, and reliable foundation for your association.
                    </p>
                </motion.div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
                    {modules.map((module, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-100px", once: true }}
                            transition={{ delay: i * 0.05 }}
                            className={`bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 hover:bg-white/10 transition-colors ${i === modules.length - 1 ? 'lg:col-span-2' : ''}`}
                        >
                            <div className="flex items-start justify-between mb-8 gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-green-400 font-mono text-sm font-bold">0{i + 1}</span>
                                        <h3 className="text-2xl font-serif text-white">{module.title}</h3>
                                    </div>
                                    <p className="text-slate-500 font-medium uppercase tracking-wider text-xs mb-4">{module.subtitle}</p>
                                    <p className="text-slate-400 text-sm leading-relaxed max-w-xl">{module.desc}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {module.rows.map((row, j) => (
                                    <div key={j} className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-4 border-t border-white/5 text-sm group">
                                        <div className="md:col-span-3 font-bold text-slate-300 group-hover:text-white transition-colors">{row.area}</div>
                                        <div className="md:col-span-5 text-slate-400">{row.covers}</div>
                                        <div className="md:col-span-4 text-green-400/80 italic">{row.useful}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Out of Scope */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#1A1A1A] border border-dashed border-slate-700 rounded-3xl p-10 md:p-14 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-red-500/5 blur-[100px] rounded-full" />

                        <h3 className="text-3xl font-serif text-white mb-2 relative z-10">Explicitly Out of MVP Scope</h3>
                        <p className="text-slate-500 mb-10 relative z-10">Future considerations to keep the initial version focused and fast.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                            {outOfScope.map((item, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="w-2 h-2 rounded-full bg-slate-600" />
                                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

function LivingIndex() {
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
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-900">The Suite</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#111] mb-6 max-w-2xl">Everything in its right place.</h2>
                    <p className="text-slate-500 font-light text-lg max-w-2xl text-balance">
                        A complete operating system for your housing association. Designed for clarity, speed, and control.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {SUITE_FEATURES.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="group relative h-[280px] bg-white rounded-2xl p-8 flex flex-col justify-between overflow-hidden border border-slate-200 transition-all duration-300 hover:border-slate-900 hover:shadow-xl"
                        >
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-bold font-mono text-slate-400 group-hover:text-slate-900 transition-colors duration-300">
                                    0{index + 1}
                                </span>
                                <div className="w-10 h-10 rounded-lg border border-slate-100 bg-slate-50 flex items-center justify-center group-hover:bg-[#111] group-hover:border-[#111] transition-all duration-300">
                                    <item.icon className="w-5 h-5 text-slate-700 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                                    {item.title}
                                </h3>
                                <div className="flex items-end justify-between">
                                    <p className="text-slate-500 font-light text-sm max-w-[80%] leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                                        {item.desc}
                                    </p>
                                    <ArrowRight className="w-4 h-4 text-slate-900 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
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

    return (
        <div className="bg-[#F9F8F6] text-[#111] font-sans selection:bg-[#EBE5D5] selection:text-[#111]">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[120vh] pt-32 pb-20 overflow-hidden flex flex-col items-center">

                {/* Subtle Grain Texture */}
                <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

                {/* Marquee Background Top */}
                <div className="absolute top-32 w-full opacity-5 pointer-events-none rotate-[-2deg] scale-110">
                    <Marquee speed={40}>
                        <span className="text-[8rem] font-bold uppercase tracking-tighter">System Online</span>
                        <span className="text-[8rem] font-bold uppercase tracking-tighter text-transparent stroke-2 stroke-black" style={{ WebkitTextStroke: "2px black" }}>Secure</span>
                        <span className="text-[8rem] font-bold uppercase tracking-tighter">Connected</span>
                        <span className="text-[8rem] font-bold uppercase tracking-tighter text-transparent stroke-2 stroke-black" style={{ WebkitTextStroke: "2px black" }}>Live</span>
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
                                <span className="text-xs font-bold uppercase tracking-[0.2em]">AsimovX Ecosystem</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="text-5xl md:text-[10rem] leading-[0.9] md:leading-[0.8] font-serif font-medium text-[#111] tracking-tight mb-8 md:mb-12"
                        >
                            Board work, <br />
                            <span className="italic opacity-40">perfected.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-3xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed"
                        >
                            A premium digital layer for your building. <br />
                            <span className="text-[#111]">Beautiful. Automated. Effortless.</span>
                        </motion.p>
                    </div>

                    {/* 3D Main Scene - DENSE */}
                    <div className="relative w-full h-[800px] perspective-[2000px] flex items-center justify-center">

                        {/* Floating Widget Clouds */}
                        <FloatingElement x="15%" y="10%" delay={0.2} rotate={-10}>
                            <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"><Wifi className="w-5 h-5" /></div>
                                <div>
                                    <div className="font-bold text-sm">Network Status</div>
                                    <div className="text-xs text-green-500 font-bold uppercase">Optimal</div>
                                </div>
                            </div>
                        </FloatingElement>

                        <FloatingElement x="10%" y="40%" delay={0.4} rotate={5}>
                            <div className="bg-[#111] text-white p-6 rounded-[2rem] shadow-xl w-48">
                                <Activity className="w-8 h-8 mb-4 text-green-400" />
                                <div className="text-3xl font-bold font-serif">42ms</div>
                                <div className="text-xs opacity-50 uppercase tracking-widest">Latency</div>
                            </div>
                        </FloatingElement>

                        <FloatingElement x="80%" y="15%" delay={0.3} rotate={10}>
                            <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />)}
                                </div>
                                <div className="text-xs font-bold uppercase text-slate-400">3 Users Live</div>
                            </div>
                        </FloatingElement>

                        <FloatingElement x="75%" y="60%" delay={0.5} rotate={-5}>
                            <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 max-w-xs">
                                <div className="flex items-center gap-3 mb-3 border-b border-slate-50 pb-3">
                                    <Bell className="w-5 h-5 text-red-500" />
                                    <span className="font-bold text-sm">New Alert</span>
                                </div>
                                <p className="text-sm text-slate-500">Water pressure warning detected in Building A.</p>
                            </div>
                        </FloatingElement>

                        {/* Main Dashboard UI - Tilted */}
                        <motion.div
                            initial={{ rotateX: 25, rotateY: 0, scale: 0.9, opacity: 0 }}
                            animate={{ rotateX: 20, rotateY: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-full max-w-[1000px] h-[500px] md:h-[700px] bg-[#FDFDFD] rounded-[2rem] md:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-[#E5E5E5] relative z-10 overflow-hidden"
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
                                    <div className="col-span-2 h-64 bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-8">
                                            <div>
                                                <div className="text-4xl font-serif font-medium text-[#111]">$24,500</div>
                                                <div className="text-sm text-slate-400 uppercase tracking-widest mt-1">Monthly Revenue</div>
                                            </div>
                                            <div className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-bold">+12%</div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full h-32 flex items-end px-8 gap-4">
                                            {[40, 65, 45, 80, 55, 70, 90, 60, 75].map((h, i) => (
                                                <div key={i} className="flex-1 bg-[#111] opacity-10 rounded-t-lg hover:opacity-100 transition-opacity" style={{ height: `${h}%` }} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-48 bg-white rounded-[2rem] border border-slate-100 shadow-sm p-6 flex flex-col justify-center items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><Users className="w-8 h-8" /></div>
                                        <div className="font-bold text-xl">Residents</div>
                                    </div>
                                    <div className="h-48 bg-white rounded-[2rem] border border-slate-100 shadow-sm p-6 flex flex-col justify-center items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center"><ClipboardCheck className="w-8 h-8" /></div>
                                        <div className="font-bold text-xl">Open Tasks</div>
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

            {/* --- KEY CAPABILITIES --- */}
            <KeyCapabilities />

            {/* --- CORE FOUNDATIONS --- */}
            <SystemFoundations />

            {/* --- MVP SCOPE --- */}
            <MVPScope />

            {/* --- LIVING INDEX --- */}
            <LivingIndex />

            {/* --- BIG CTA --- */}
            <section className="py-40 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-7xl md:text-9xl font-serif text-[#111] mb-12 tracking-tight">
                        Ready to <br /> <span className="italic">Elevate?</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <button className="px-12 py-6 bg-[#111] text-white rounded-full text-xl font-bold tracking-wide hover:scale-105 transition-transform">
                            Book a Demo
                        </button>
                        <button className="px-12 py-6 bg-white border border-slate-200 text-[#111] rounded-full text-xl font-bold tracking-wide hover:bg-slate-50 transition-colors">
                            View Pricing
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}
