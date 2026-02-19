'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function Navbar() {
    const { locale, setLocale, t } = useLanguage();

    const toggleLocale = () => {
        setLocale(locale === 'pl' ? 'en' : 'pl');
    };

    return (
        <div className="fixed top-6 right-6 z-50">
            <motion.button
                onClick={toggleLocale}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel flex items-center gap-3 px-5 py-3 shadow-xl hover:shadow-purple/20 transition-all duration-300 border border-purple/20 group"
            >
                <div className="flex items-center gap-2">
                    <span className="text-xl leading-none">
                        {locale === 'pl' ? '🇬🇧' : '🇵🇱'}
                    </span>
                    <span className="font-display font-bold text-sm uppercase tracking-wider text-purple group-hover:text-purple-light transition-colors">
                        {t.navbar.toggleLabel}
                    </span>
                </div>
                <div className="w-px h-4 bg-purple/10" />
                <Globe className="w-4 h-4 text-purple group-hover:rotate-180 transition-transform duration-500" />
            </motion.button>
        </div>
    );
}
