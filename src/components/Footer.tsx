"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="relative bg-graphite text-cream py-16 px-6 md:px-12 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple via-coral to-mint" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Heart className="w-8 h-8 text-coral" />
                            <h3 className="text-2xl font-display font-bold">SSS</h3>
                        </div>
                        <p className="text-cream/70 leading-relaxed">
                            {t.footer.brandDescription}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-4">{t.footer.quickLinksTitle}</h4>
                        <ul className="space-y-2">
                            {t.footer.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-cream/70 hover:text-coral transition-colors inline-block hover:translate-x-1 duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>

                {/* Bottom Bar */}
                <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-cream/60 text-sm">
                        © {new Date().getFullYear()} SSS - Senior Support System. {t.footer.copyright}
                    </p>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-display flex items-center gap-2"
                    >
                        <Heart className="w-4 h-4 text-coral" />
                        <span className="text-cream/70">
                            {t.footer.campBadgePre} <span className="text-coral font-semibold">{t.footer.campBadgeHighlight}</span>
                        </span>
                    </motion.p>
                </div>
            </div>
        </footer>
    );
}
