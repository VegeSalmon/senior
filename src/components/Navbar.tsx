'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { locale, setLocale, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLocale = () => {
        setLocale(locale === 'pl' ? 'en' : 'pl');
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // height of navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    const sectionIds = ['about', 'features', 'team'];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`glass-panel transition-all duration-300 ${scrolled ? 'px-6 py-2' : 'px-8 py-3'
                    } flex justify-between items-center shadow-lg relative z-10 overflow-hidden`}>

                    {/* Background decoration in navbar */}
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-purple/5 to-transparent pointer-events-none" />

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 cursor-pointer group"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple to-coral flex items-center justify-center p-2 shadow-soft group-hover:scale-110 transition-transform">
                            <Heart className="text-white w-full h-full" />
                        </div>
                        <span className="text-2xl font-display font-bold text-graphite tracking-tight">
                            SSS
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {t.navbar.links.map((label, i) => (
                            <button
                                key={label}
                                onClick={() => scrollToSection(sectionIds[i])}
                                className="px-5 py-2 text-sm font-display font-semibold text-graphite/70 hover:text-purple rounded-full hover:bg-purple/5 transition-all"
                            >
                                {label}
                            </button>
                        ))}

                        <div className="w-px h-6 bg-purple/10 mx-4" />

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLocale}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream-dark/50 border border-purple/20 text-sm font-display font-bold text-purple hover:bg-purple hover:text-white transition-all duration-300 shadow-soft"
                        >
                            <span className="text-lg">{locale === 'pl' ? '🇬🇧' : '🇵🇱'}</span>
                            <span>{t.navbar.toggleLabel}</span>
                            <Globe className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Mobile menu and Language toggle buttons */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={toggleLocale}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-cream-dark/50 border border-purple/20 text-lg shadow-soft active:scale-95 transition-transform"
                            aria-label="Toggle language"
                        >
                            {locale === 'pl' ? '🇬🇧' : '🇵🇱'}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl bg-purple/10 text-purple hover:bg-purple/20 transition-colors"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 right-0 px-4 pt-2 pb-6 z-40"
                    >
                        <div className="glass-panel p-4 flex flex-col space-y-2 shadow-xl border-t-0 rounded-t-none">
                            {t.navbar.links.map((label, i) => (
                                <button
                                    key={label}
                                    onClick={() => scrollToSection(sectionIds[i])}
                                    className="w-full text-left px-5 py-4 text-lg font-display font-bold text-graphite hover:text-purple hover:bg-purple/5 rounded-xl transition-all border-b border-purple/5 last:border-0"
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
