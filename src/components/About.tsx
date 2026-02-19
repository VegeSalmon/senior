"use client";

import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Lightbulb, Shield, Users, Heart];
const colors = ["coral", "purple", "mint", "purple"];

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="relative py-24 md:py-32 px-6 md:px-12 bg-cream overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-coral/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    {/* Left Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="glass-panel p-8 lg:p-12 border-purple/30 relative overflow-hidden group">
                            {/* Team photo */}
                            <div className="aspect-[4/3] rounded-xl overflow-hidden relative group-hover:shadow-lg transition-shadow duration-500">
                                <img
                                    src="/senior/team.jpg"
                                    alt={t.about.teamPhotoAlt}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, type: "spring" }}
                            className="absolute -bottom-4 -right-4 bg-gradient-to-br from-coral to-coral-light text-white px-6 py-3 rounded-2xl shadow-medium max-w-[200px]"
                        >
                            <div className="text-sm font-display font-semibold">{t.about.badgeLine1}</div>
                            <div className="text-xs opacity-90">{t.about.badgeLine2}</div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Story & Values */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-graphite mb-6">
                                {t.about.title} <span className="text-gradient-purple">{t.about.titleHighlight}</span>
                            </h2>
                            <div className="space-y-4 text-graphite/80 text-lg leading-relaxed">
                                <p>
                                    <strong className="text-purple font-display">Senior Support System</strong> {t.about.paragraph1}
                                </p>
                                <p>
                                    {t.about.paragraph2}
                                </p>
                                <p className="text-coral font-semibold">
                                    {t.about.paragraph3}
                                </p>
                            </div>
                        </motion.div>

                        {/* Values Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {t.about.values.map((value, index) => {
                                const Icon = icons[index];
                                const color = colors[index];
                                const colorClasses = {
                                    coral: "from-coral to-coral-light",
                                    purple: "from-purple to-purple-light",
                                    mint: "from-mint to-mint-light"
                                };

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        className="glass-panel p-6 border-purple/20 hover:border-purple/40 transition-all duration-300 hover:-translate-y-1 group"
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="font-display font-bold text-graphite mb-1">{value.title}</h3>
                                        <p className="text-sm text-graphite/70">{value.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
