"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="relative py-32 px-6 md:px-12 bg-tech-bg overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tech-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tech-secondary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                >
                    <div className="space-y-8">
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-tech-primary to-tech-secondary">
                            THE PROJECT
                        </h2>
                        <div className="glass-panel p-8 relative overflow-hidden group border-tech-primary/20 hover:border-tech-primary/50 transition-colors duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="text-3xl font-bold text-white mb-4 relative z-10 drop-shadow-[0_0_10px_rgba(100,255,218,0.3)]">
                                Lekomat
                            </h3>
                            <p className="text-tech-muted text-lg leading-relaxed relative z-10">
                                A revolutionary automated system designed to sort and dispense medication for seniors.
                                Our intelligent device ensures the right dosage at the right time, providing peace of mind for families and independence for the elderly.
                            </p>
                        </div>
                    </div>

                    <div className="relative h-[400px] w-full glass-panel flex items-center justify-center border-tech-secondary/30 overflow-hidden">
                        {/* Liquid Abstract Visualization */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="absolute w-64 h-64 bg-tech-primary/20 rounded-full blur-2xl animate-blob" />
                            <div className="absolute w-64 h-64 bg-tech-secondary/20 rounded-full blur-2xl animate-blob animation-delay-2000" />
                            <div className="absolute w-64 h-64 bg-tech-accent/20 rounded-full blur-2xl animate-blob animation-delay-4000" />

                            {/* Central Core */}
                            <div className="relative z-10 w-32 h-32 rounded-full border border-tech-primary/50 flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(100,255,218,0.2)]">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-tech-primary to-tech-secondary opacity-80 animate-pulse-slow" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
