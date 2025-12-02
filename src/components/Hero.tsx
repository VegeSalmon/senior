"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
            className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-tech-bg"
        >
            {/* Dynamic Background Blobs */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="blob-shape bg-tech-primary w-[500px] h-[500px] top-[-100px] left-[-100px]" />
                <div className="blob-shape bg-tech-secondary w-[400px] h-[400px] top-[20%] right-[-100px] animation-delay-2000" />
                <div className="blob-shape bg-tech-accent w-[600px] h-[600px] bottom-[-200px] left-[20%] animation-delay-4000" />
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            {/* Main Content */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 flex flex-col items-center text-center px-4"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative"
                >
                    <h1 className="text-[20vw] leading-none font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-tech-primary to-tech-secondary select-none drop-shadow-2xl">
                        SSS
                    </h1>

                    {/* Glitch/Ghost Effect */}
                    <motion.h1
                        className="absolute inset-0 text-[20vw] leading-none font-display font-bold tracking-tighter text-tech-primary opacity-30 select-none pointer-events-none"
                        animate={{
                            x: [-2, 2, -2],
                            y: [1, -1, 1],
                            opacity: [0.3, 0.1, 0.3]
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 3
                        }}
                    >
                        SSS
                    </motion.h1>
                </motion.div>

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-8 space-y-6 backdrop-blur-sm p-6 rounded-2xl border border-white/5 bg-white/5"
                >
                    <div className="flex flex-col md:flex-row items-center gap-4 text-2xl md:text-4xl font-light tracking-widest text-tech-text uppercase">
                        <span className="text-tech-primary font-bold drop-shadow-[0_0_10px_rgba(100,255,218,0.5)]">Senior</span>
                        <span className="hidden md:inline text-tech-muted">•</span>
                        <span className="text-tech-secondary font-bold drop-shadow-[0_0_10px_rgba(0,180,216,0.5)]">Support</span>
                        <span className="hidden md:inline text-tech-muted">•</span>
                        <span className="text-tech-accent font-bold drop-shadow-[0_0_10px_rgba(0,119,182,0.5)]">System</span>
                    </div>

                    <p className="text-tech-muted text-sm md:text-base tracking-[0.3em] uppercase">
                        Next Gen Medicine Intelligence
                    </p>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-tech-muted">Scroll to Explore</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-tech-primary to-transparent" />
            </motion.div>
        </section>
    );
}
