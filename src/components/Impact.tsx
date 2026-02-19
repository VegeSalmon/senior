"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Heart, Shield, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const benefitIcons = [Heart, Shield, Users];
const benefitAccents = ["electric-cyan", "soft-lavender", "white"];

export default function Impact() {
    const { t } = useLanguage();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % t.impact.testimonials.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [t.impact.testimonials.length]);

    return (
        <section id="impact" className="relative py-32 px-6 lg:px-12 bg-navy-dark overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-mesh opacity-10 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-hero text-6xl md:text-7xl text-white mb-6">
                        {t.impact.title} <br />
                        <span className="text-gradient-cyan">{t.impact.titleHighlight}</span>
                    </h2>
                    <p className="text-xl text-white/40 max-w-xl font-sans">
                        {t.impact.subtitle}
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {t.impact.benefits.map((benefit, index) => {
                        const Icon = benefitIcons[index];
                        const accent = benefitAccents[index];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-10 border-white/5 hover:border-white/10 transition-all duration-500 group"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                    <Icon className={`w-8 h-8 text-${accent}`} />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white mb-4">
                                    {benefit.title}
                                </h3>
                                <p className="text-white/60 font-sans leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Testimonials - Editorial Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <Quote className="w-16 h-16 text-electric-cyan opacity-20 mb-8" />
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            {t.impact.testimonialsTitle}
                        </h3>
                        <p className="text-white/40 text-lg max-w-sm">
                            Real stories from seniors who have experienced the future of care.
                        </p>

                        {/* Custom Navigation */}
                        <div className="flex gap-4 mt-12">
                            {t.impact.testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${currentTestimonial === index ? 'bg-electric-cyan w-12' : 'bg-white/10 w-6 hover:bg-white/20'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 relative min-h-[400px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                                className="glass-card p-12 lg:p-16 border-white/10 w-full"
                            >
                                <p className="text-2xl md:text-3xl text-white font-medium italic leading-snug mb-10">
                                    &quot;{t.impact.testimonials[currentTestimonial].text}&quot;
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-px h-12 bg-electric-cyan" />
                                    <div>
                                        <p className="font-display font-bold text-lg text-white">
                                            {t.impact.testimonials[currentTestimonial].author}
                                        </p>
                                        <p className="text-white/40 text-sm uppercase tracking-widest font-bold">
                                            {t.impact.testimonials[currentTestimonial].age}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
