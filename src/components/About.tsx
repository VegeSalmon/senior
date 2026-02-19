"use client";

import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Lightbulb, Shield, Users, Heart];
const accents = ["electric-cyan", "soft-lavender", "white", "electric-cyan"];

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="relative py-32 px-6 lg:px-12 bg-navy-deep overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-20 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left Column - Heroic Typography & Asset */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-6 space-y-12"
                    >
                        <h2 className="text-hero text-6xl md:text-7xl lg:text-8xl text-white">
                            {t.about.title} <br />
                            <span className="text-gradient-cyan">{t.about.titleHighlight}</span>
                        </h2>

                        <div className="space-y-6 text-xl text-white/60 leading-relaxed font-sans max-w-xl">
                            <p>
                                <strong className="text-electric-cyan font-display text-2xl block mb-2">Senior Support System</strong>
                                {t.about.paragraph1}
                            </p>
                            <p>
                                {t.about.paragraph2}
                            </p>
                            <p className="text-soft-lavender font-bold">
                                {t.about.paragraph3}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column - Modular Values Grid */}
                    <div className="lg:col-span-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {t.about.values.map((value, index) => {
                                const Icon = icons[index];
                                const accent = accents[index];

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        className="glass-card p-8 border-white/5 hover:border-white/20 transition-all duration-500 group"
                                    >
                                        <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                            <Icon className={`w-7 h-7 text-${accent}`} />
                                        </div>
                                        <h3 className="font-display font-bold text-2xl text-white mb-3">{value.title}</h3>
                                        <p className="text-white/40 leading-relaxed">{value.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
