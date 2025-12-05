"use client";

import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, Shield } from "lucide-react";

const values = [
    {
        icon: Heart,
        title: "Empatia",
        description: "Rozumiemy potrzeby seniorów",
        color: "coral"
    },
    {
        icon: Users,
        title: "Wspólnota",
        description: "Łączymy pokolenia",
        color: "purple"
    },
    {
        icon: Lightbulb,
        title: "Innowacja",
        description: "Nowoczesne rozwiązania",
        color: "mint"
    },
    {
        icon: Shield,
        title: "Bezpieczeństwo",
        description: "Dbamy o spokój i komfort",
        color: "purple"
    },
];

export default function About() {
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
                    {/* Left Column - Image Placeholder with Parallax Effect */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="glass-panel p-8 lg:p-12 border-purple/30 relative overflow-hidden group">
                            {/* Placeholder for team photo */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-purple/20 via-coral/20 to-mint/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple/10 to-coral/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="text-center z-10">
                                    <Users className="w-20 h-20 text-purple/40 mx-auto mb-4" />
                                    <p className="text-graphite/60 font-display font-semibold">
                                        Zdjęcie zespołu
                                    </p>
                                    <p className="text-sm text-graphite/40 mt-2">
                                        (do uzupełnienia)
                                    </p>
                                </div>
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
                            <div className="text-sm font-display font-semibold">Made with ❤️</div>
                            <div className="text-xs opacity-90">podczas obozu</div>
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
                                O <span className="text-gradient-purple">Projekcie</span>
                            </h2>
                            <div className="space-y-4 text-graphite/80 text-lg leading-relaxed">
                                <p>
                                    <strong className="text-purple font-display">Senior Support System</strong> to innowacyjny projekt stworzony z pasją podczas obozu naukowego.
                                    Naszym celem jest wsparcie seniorów w codziennym życiu poprzez połączenie nowoczesnej technologii z ludzką empatią.
                                </p>
                                <p>
                                    Zauważyliśmy, że wiele starszych osób boryka się z samotnością, trudnościami w zarządzaniu lekami i barierami technologicznymi.
                                    Postanowiliśmy to zmienić, tworząc system, który jest zarówno inteligentny, jak i przyjazny.
                                </p>
                                <p className="text-coral font-semibold">
                                    Wierzymy, że technologia powinna służyć ludziom, a nie odwrotnie.
                                </p>
                            </div>
                        </motion.div>

                        {/* Values Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {values.map((value, index) => {
                                const Icon = value.icon;
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
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[value.color as keyof typeof colorClasses]} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
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
