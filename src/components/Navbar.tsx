"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import NextImage from 'next/image';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';



const Navbar = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 md:py-8 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-white/5"
            >
                <Link href="/" className="flex items-center gap-3 text-xl font-bold tracking-[0.2em] group cursor-pointer z-50">
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                        <NextImage src="/logo.svg" alt="Asimovx Logo" fill className="object-contain" />
                    </div>
                    <div>
                        ASIMOV<span className="text-[#9033FF]">X</span> <span className="text-accent italic">.</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8 xl:gap-12">
                    <div className="flex space-x-8 xl:space-x-12 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
                        <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">{t('navbar.home')}</Link>

                        {/* Products Dropdown */}
                        <div className="relative group">
                            <button className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1">
                                PRODUCTS
                            </button>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                                <div className="bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 p-4 rounded-xl shadow-xl w-max backdrop-blur-xl">
                                    <Link
                                        href="/products/housing-association"
                                        target="_blank"
                                        className="block p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors group/item"
                                    >
                                        <div className="text-sm font-bold text-black dark:text-white mb-1 group-hover/item:text-accent transition-colors">
                                            Housing Association Tool
                                        </div>
                                        <div className="text-[10px] text-slate-500 normal-case tracking-normal max-w-[200px]">
                                            Digital workspace for BRF boards and residents
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">{t('navbar.about')}</Link>
                        <Link href="/services" className="hover:text-black dark:hover:text-white transition-colors">{t('navbar.services')}</Link>
                        <Link href="/portfolio" className="hover:text-black dark:hover:text-white transition-colors">{t('navbar.portfolio')}</Link>
                        <Link href="/careers" className="hover:text-black dark:hover:text-white transition-colors">{t('navbar.careers')}</Link>
                        <Link href="/blog" className="hover:text-black dark:hover:text-white transition-colors">{t('navbar.blog')}</Link>
                    </div>

                    <div className="flex gap-6 items-center border-l-2 border-white/10 dark:border-white/10 border-black/10 pl-6">


                        <div className="relative">
                            <button
                                className="flex items-center gap-2 text-slate-400 dark:text-slate-400 hover:text-black dark:hover:text-white text-xs font-bold tracking-widest uppercase"
                                onClick={() => setIsLangOpen(!isLangOpen)}
                            >
                                <Globe className="w-4 h-4" />
                                <span>{language}</span>
                            </button>

                            {isLangOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    className="absolute right-0 top-full mt-4 w-32 bg-zinc-900 border border-white/10 rounded-xl shadow-xl overflow-hidden backdrop-blur-xl"
                                >
                                    {['EN', 'ES', 'SV', 'DA'].map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => {
                                                setLanguage(lang as any);
                                                setIsLangOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-3 text-xs font-bold tracking-widest hover:bg-white/10 transition-colors ${language === lang ? 'text-accent bg-white/5' : 'text-slate-400'}`}
                                        >
                                            {lang === 'EN' ? 'English' : lang === 'ES' ? 'Español' : lang === 'SV' ? 'Svenska' : 'Dansk'}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        <Link href="/contact">
                            <button className="px-6 py-2.5 border border-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500">
                                {t('navbar.contact')}
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center gap-8"
                    >
                        <div className="flex flex-col items-center gap-8 text-xl font-bold tracking-[0.2em] uppercase">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.home')}</Link>
                            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.about')}</Link>
                            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.services')}</Link>
                            <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.portfolio')}</Link>
                            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.blog')}</Link>
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.contact')}</Link>
                        </div>

                        <div className="w-12 h-[1px] bg-white/10" />

                        <div className="flex items-center gap-8">

                            <div className="flex gap-4 text-xs font-bold tracking-widest">
                                {['EN', 'ES', 'SV', 'DA'].map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => {
                                            setLanguage(lang as any);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`${language === lang ? 'text-accent' : 'text-slate-500'}`}
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
