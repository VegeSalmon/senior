"use client";

import { motion } from "framer-motion";
import { Heart, Github, Twitter, Linkedin, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="relative bg-navy-deep text-white py-24 px-6 lg:px-12 border-t border-white/5 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-electric-cyan/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

                    {/* Brand Meta */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-cyan to-vibrant-purple flex items-center justify-center font-display font-bold text-navy-deep">
                                L
                            </div>
                            <span className="font-display font-bold text-2xl tracking-tight uppercase">Lekomat</span>
                        </div>
                        <p className="text-xl text-white/40 leading-relaxed max-w-sm mb-10 font-sans">
                            {t.footer.brandDescription}
                        </p>

                        {/* Social Micro-links */}
                        <div className="flex gap-4">
                            {[Github, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-electric-cyan transition-all group">
                                    <Icon className="w-5 h-5 text-white/40 group-hover:text-electric-cyan" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Map */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-white/20 mb-8">
                                {t.footer.quickLinksTitle}
                            </h4>
                            <ul className="space-y-4">
                                {t.footer.quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-white/60 hover:text-electric-cyan transition-colors font-sans hover:translate-x-1 inline-block duration-300"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-white/20 mb-8">
                                Legal
                            </h4>
                            <ul className="space-y-4">
                                {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-white/60 hover:text-electric-cyan transition-colors font-sans">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* System Status / Copyright */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse" />
                        <p className="text-white/20 text-xs font-display font-bold uppercase tracking-widest">
                            © {new Date().getFullYear()} LEKOMAT // {t.impact.humanImpact}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                        <Sparkles className="w-4 h-4 text-soft-lavender" />
                        <span className="text-white/40 text-xs font-bold uppercase tracking-widest">
                            {t.footer.campBadgePre} {t.footer.campBadgeHighlight}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
