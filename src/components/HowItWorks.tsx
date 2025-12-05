"use client";

import { motion } from "framer-motion";
import { Smartphone, UserPlus, MessageCircle, CheckCircle } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Smartphone,
        title: "Pobierz aplikację",
        description: "Prosta instalacja na smartfonie lub tablecie. Duże przyciski i czytelny interfejs dostosowany do potrzeb seniorów.",
        color: "from-purple to-purple-light"
    },
    {
        number: "02",
        icon: UserPlus,
        title: "Utwórz profil",
        description: "Wprowadź podstawowe informacje i preferencje. Możesz to zrobić sam lub z pomocą rodziny.",
        color: "from-coral to-coral-light"
    },
    {
        number: "03",
        icon: MessageCircle,
        title: "Połącz się z wolontariuszem",
        description: "System dopasuje Cię do odpowiedniego wolontariusza. Rozpocznij regularne rozmowy i otrzymuj wsparcie.",
        color: "from-mint to-mint-light"
    },
    {
        number: "04",
        icon: CheckCircle,
        title: "Korzystaj z systemu",
        description: "Otrzymuj przypomnienia o lekach, rozmawiaj z wolontariuszami i ciesz się większą samodzielnością.",
        color: "from-purple to-coral"
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-24 md:py-32 px-6 md:px-12 bg-cream overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-mint/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-graphite mb-4">
                        Jak to <span className="text-gradient-purple">działa?</span>
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        Cztery proste kroki do lepszego wsparcia i większej samodzielności
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple via-coral to-mint opacity-30 hidden md:block" />

                    <div className="space-y-12">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                                >
                                    {/* Number Circle - Center on desktop */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-purple to-coral flex items-center justify-center text-white font-display font-bold text-2xl shadow-medium z-10">
                                        {step.number}
                                    </div>

                                    {/* Content Card */}
                                    <div className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <motion.div
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            className="glass-panel p-8 border-purple/30 hover:border-purple/50 transition-all duration-300 group"
                                        >
                                            <div className="flex items-start gap-4">
                                                {/* Mobile Number */}
                                                <div className="md:hidden flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple to-coral flex items-center justify-center text-white font-display font-bold text-xl shadow-soft">
                                                    {step.number}
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <motion.div
                                                            whileHover={{ rotate: 360 }}
                                                            transition={{ duration: 0.6 }}
                                                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-soft group-hover:shadow-medium transition-shadow`}
                                                        >
                                                            <Icon className="w-6 h-6 text-white" />
                                                        </motion.div>
                                                        <h3 className="text-2xl font-display font-bold text-graphite">{step.title}</h3>
                                                    </div>
                                                    <p className="text-graphite/70 leading-relaxed">{step.description}</p>
                                                </div>
                                            </div>

                                            {/* Screenshot Placeholder */}
                                            <div className="mt-6 aspect-video bg-gradient-to-br from-purple/10 via-coral/10 to-mint/10 rounded-lg flex items-center justify-center border border-purple/20">
                                                <p className="text-graphite/40 font-display text-sm">Screenshot aplikacji</p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block flex-1" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <button className="btn-primary">
                        Rozpocznij teraz
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
