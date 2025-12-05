"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Users } from "lucide-react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-cream transition-colors duration-300"
        >
            {/* Dynamic Background Blobs - keeping user's preference */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="blob-shape bg-purple w-[500px] h-[500px] top-[-100px] left-[-100px]" />
                <div className="blob-shape bg-coral w-[400px] h-[400px] top-[20%] right-[-100px] animation-delay-2000" />
                <div className="blob-shape bg-mint w-[600px] h-[600px] bottom-[-200px] left-[20%] animation-delay-4000" />
            </div>

            {/* Floating Shapes */}
            <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-purple/10 floating-shape" />
            <div className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-coral/10 floating-shape" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-mint/10 floating-shape" style={{ animationDelay: '2s' }} />

            {/* Main Content */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 flex flex-col items-center text-center px-4 max-w-6xl mx-auto"
            >
                {/* Icon Badge */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "backOut" }}
                    className="mb-8 flex items-center gap-3 bg-white px-6 py-3 rounded-full border-2 border-purple/30 shadow-medium"
                >
                    <Heart className="w-6 h-6 text-coral" />
                    <span className="font-display font-semibold text-graphite">Senior Support System</span>
                    <Users className="w-6 h-6 text-mint" />
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-graphite mb-6 leading-tight"
                >
                    Wspieramy Seniorów.{" "}
                    <span className="text-gradient-purple">
                        Łączymy Pokolenia.
                    </span>
                </motion.h1>

                {/* Mission Description */}
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-graphite/80 mb-12 max-w-3xl font-sans leading-relaxed"
                >
                    Innowacyjny system wsparcia dla seniorów, który łączy technologię z ludzką empatią.
                    Pomagamy starszym osobom żyć samodzielnie i bezpiecznie.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 items-center"
                >
                    <button className="btn-primary">
                        Dowiedz się więcej
                    </button>
                    <button className="btn-secondary">
                        Dołącz do nas
                    </button>
                </motion.div>

                {/* Stats Preview */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-16 grid grid-cols-3 gap-8 md:gap-16"
                >
                    {[
                        { number: "100+", label: "Seniorów" },
                        { number: "50+", label: "Wolontariuszy" },
                        { number: "1000+", label: "Godzin wsparcia" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-display font-bold text-gradient-purple mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm md:text-base text-graphite/70 font-sans">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-graphite/60 font-accent">Przewiń w dół</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[2px] h-16 bg-gradient-to-b from-purple to-transparent"
                />
            </motion.div>
        </section>
    );
}
