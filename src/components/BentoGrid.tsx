"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Smartphone, Shield, Heart, Zap, Clock, CreditCard, Thermometer } from "lucide-react";


export default function BentoGrid() {
    const { t } = useLanguage();

    return (
        <section id="features" className="py-32 px-6 lg:px-12 bg-navy-deep relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vibrant-purple/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric-cyan/5 blur-[120px] rounded-full" />

            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center lg:text-left"
                >
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                        {t.bento.title} <br />
                        <span className="text-gradient-cyan">{t.bento.titleHighlight}</span>
                    </h2>
                    <p className="mt-8 text-white/20 font-display font-bold uppercase tracking-[0.4em] text-sm">
                        Lekomat // 2026
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-12 glass-card p-12 flex flex-col md:flex-row items-center gap-12 group overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 p-8">
                            <Clock className="w-16 h-16 text-electric-cyan opacity-10 group-hover:opacity-40 transition-opacity" />
                        </div>
                        <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center flex-shrink-0">
                            <Zap className="w-12 h-12 text-electric-cyan" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tighter">{t.bento.autonomyTitle}</h3>
                            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
                                {t.bento.autonomyDescription}
                            </p>
                        </div>
                    </motion.div>

                    {/* Medium Card: Smart App */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-6 glass-card p-10 group"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                                <Smartphone className="w-7 h-7 text-soft-lavender" />
                            </div>
                            <span className="text-[10px] font-bold tracking-widest text-white/20 uppercase">Core Ecosystem</span>
                        </div>
                        <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase tracking-tighter">{t.bento.mobileTitle}</h3>
                        <p className="text-white/60 text-lg leading-relaxed">
                            {t.bento.mobileDescription}
                        </p>
                    </motion.div>

                    {/* Medium Card: Safety & SOS */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-6 glass-card p-10 group bg-gradient-to-br from-white/[0.02] to-transparent"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                                <Shield className="w-7 h-7 text-electric-cyan" />
                            </div>
                            <span className="text-[10px] font-bold tracking-widest text-white/20 uppercase">Emergency Protocol</span>
                        </div>
                        <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase tracking-tighter">{t.bento.sosTitle}</h3>
                        <p className="text-white/60 text-lg leading-relaxed">
                            {t.bento.sosDescription}
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
