"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function JoinUs() {
    const { t } = useLanguage();

    return (
        <section id="join-us" className="relative py-32 px-6 lg:px-12 bg-navy-dark overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Future Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 md:p-20 border-white/5 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-12">
                        <Sparkles className="w-16 h-16 text-electric-cyan opacity-20 group-hover:scale-125 transition-transform duration-1000" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h3 className="text-hero text-5xl md:text-7xl text-white mb-10">
                            {t.joinUs.visionTitle} <br />
                            <span className="text-gradient-cyan">{t.joinUs.visionTitleHighlight}</span>
                        </h3>

                        <p className="text-2xl text-white/60 leading-relaxed mb-16 font-sans">
                            {t.joinUs.visionDescription}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            {t.joinUs.visionItems.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-electric-cyan flex-shrink-0 mt-1" />
                                    <p className="text-lg text-white/80">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Final CTA? (Optional, user didn't specify but fits the vibe) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 flex flex-col items-center"
                >
                    <p className="mt-8 text-white/20 font-display font-bold uppercase tracking-[0.4em] text-sm">
                        Lekomat // 2026
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
