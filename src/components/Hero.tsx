"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacityBackground = useTransform(scrollYProgress, [0, 0.5], [0.05, 0]);
    const scaleMachine = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[110vh] w-full flex flex-col items-center justify-center overflow-hidden bg-navy-deep pt-20"
        >
            {/* Massive Background Text */}
            <motion.div
                style={{ y: yBackground, opacity: opacityBackground }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none select-none flex justify-center"
            >
                <h1 className="text-[25vw] font-display font-extrabold text-white leading-none tracking-tighter uppercase whitespace-nowrap">
                    LEKOMAT
                </h1>
            </motion.div>

            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-[1400px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Side */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                    className="flex flex-col items-start text-left"
                >
                    {/* Premium Badge */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <Sparkles className="w-4 h-4 text-electric-cyan" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                            {t.hero.badge}
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-hero text-6xl md:text-8xl lg:text-9xl text-white mb-8">
                        {t.hero.headlinePart1}<br />
                        <span className="text-gradient-cyan">{t.hero.headlinePart2}</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-white/60 max-w-lg mb-12 font-sans leading-relaxed">
                        {t.hero.description}
                    </p>

                </motion.div>

                {/* Machine / Visual Side */}
                <motion.div
                    style={{ scale: scaleMachine }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    {/* Visual Accent without the card */}
                    <div className="relative w-full max-w-md aspect-[3/4] flex items-center justify-center">
                        <div className="absolute -inset-20 bg-electric-cyan/10 blur-[120px] rounded-full animate-pulse" />
                        <div className="absolute -inset-10 bg-vibrant-purple/10 blur-[100px] rounded-full delay-700 animate-pulse" />

                        {/* Just a floating icon/mark instead of a heavy panel */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="w-32 h-32 rounded-3xl bg-gradient-to-br from-electric-cyan to-vibrant-purple flex items-center justify-center shadow-glow"
                        >
                            <Sparkles className="w-16 h-16 text-navy-deep" />
                        </motion.div>
                    </div>

                    {/* Accent Glows */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-vibrant-purple/20 blur-[120px] rounded-full" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-electric-cyan/20 blur-[120px] rounded-full" />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>
        </section>
    );
}
