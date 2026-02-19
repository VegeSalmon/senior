'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Globe, Menu } from 'lucide-react';

export default function Navbar() {
    const { locale, setLocale, t } = useLanguage();

    const toggleLocale = () => {
        setLocale(locale === 'pl' ? 'en' : 'pl');
    };

    return (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="glass-card flex items-center gap-6 px-6 py-3 border border-white/10"
            >
                {/* Logo Area */}
                <div className="flex items-center gap-3 pr-4 border-r border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-cyan to-vibrant-purple flex items-center justify-center font-display font-bold text-navy-deep">
                        L
                    </div>
                    <span className="font-display font-bold text-white tracking-tight text-lg uppercase">Lekomat</span>
                </div>

                {/* Main Nav Items */}
                <div className="hidden md:flex items-center gap-8">
                    {t.navbar.links.map((item, i) => (
                        <a
                            key={i}
                            href={`#${['about', 'team'][i]}`}
                            className="text-sm font-medium text-white/60 hover:text-electric-cyan transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="w-px h-6 bg-white/10 hidden md:block" />

                {/* Language Toggle */}
                <motion.button
                    onClick={toggleLocale}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                >
                    <span className="text-lg leading-none">
                        {locale === 'pl' ? '🇬🇧' : '🇵🇱'}
                    </span>
                    <span className="font-display font-bold text-xs uppercase tracking-widest text-white/80 group-hover:text-electric-cyan">
                        {locale.toUpperCase()}
                    </span>
                    <Globe className="w-3.5 h-3.5 text-white/40 group-hover:text-electric-cyan transition-colors" />
                </motion.button>

                {/* Mobile Menu Trigger */}
                <button className="md:hidden text-white/60 hover:text-white">
                    <Menu className="w-6 h-6" />
                </button>
            </motion.nav>
        </div>
    );
}
