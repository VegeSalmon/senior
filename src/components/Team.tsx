"use client";

import { motion } from "framer-motion";
import { User, Code, Wrench, Heart, Sparkles } from "lucide-react";

const team = [
    {
        name: "Emil Pająk",
        role: "Główny Zespół",
        passion: "Twórca projektu",
        icon: <User className="w-8 h-8" />,
        color: "from-purple to-purple-light",
        size: "medium"
    },
    {
        name: "Jagoda Sułek",
        role: "Główny Zespół",
        passion: "Twórca projektu",
        icon: <User className="w-8 h-8" />,
        color: "from-coral to-coral-light",
        size: "medium"
    },
    {
        name: "Magda Jarosz",
        role: "Główny Zespół",
        passion: "Twórca projektu",
        icon: <User className="w-8 h-8" />,
        color: "from-mint to-mint-light",
        size: "medium"
    },
    {
        name: "Piotr Śpiechowicz",
        role: "Główny Zespół",
        passion: "Twórca projektu",
        icon: <User className="w-8 h-8" />,
        color: "from-purple to-coral",
        size: "medium"
    },
    {
        name: "Stanisław Trojan",
        role: "Główny Zespół",
        passion: "Twórca projektu",
        icon: <User className="w-8 h-8" />,
        color: "from-mint to-purple",
        size: "medium"
    },
    {
        name: "Kacper Romuk",
        role: "Główny Zespół",
        passion: "Twórca projektu",
        icon: <User className="w-8 h-8" />,
        color: "from-coral to-mint",
        size: "medium"
    },
    {
        name: "Łukasz Dziki",
        role: "Strona i pomoc po projekcie",
        passion: "Wsparcie techniczne",
        icon: <Code className="w-6 h-6" />,
        color: "from-purple to-purple-light",
        size: "small"
    },
    {
        name: "Jacek Wiaterek",
        role: "Strona i pomoc po projekcie",
        passion: "Wsparcie techniczne",
        icon: <Code className="w-6 h-6" />,
        color: "from-coral to-coral-light",
        size: "small"
    },
    {
        name: "Ania Olszak",
        role: "Główny Zespół",
        passion: "Twórca Projektu",
        icon: <Heart className="w-6 h-6" />,
        color: "from-mint to-mint-light",
        size: "small"
    },
];

export default function Team() {
    return (
        <section id="team" className="relative py-24 md:py-32 px-6 md:px-12 bg-cream overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-coral/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-graphite mb-4">
                        Nasz <span className="text-gradient-purple">Zespół</span>
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-3xl mx-auto mb-6">
                        Projekt tworzy zespół uczestników programu Adamed SmartUP.
                        Łączymy kompetencje z zakresu programowania, elektroniki, inżynierii i badań społecznych, aby realnie zmienić jakość życia seniorów.
                    </p>

                    {/* Camp Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.3 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-coral to-coral-light text-white px-6 py-3 rounded-full shadow-medium font-display font-semibold"
                    >
                        <Heart className="w-5 h-5" />
                        Made with ❤️ podczas obozu naukowego
                    </motion.div>
                </motion.div>

                {/* Asymmetric Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
                    {team.map((member, index) => {
                        // Asymmetric sizing
                        const sizeClasses = {
                            large: "md:col-span-2 md:row-span-2",
                            medium: "md:col-span-1",
                            small: "md:col-span-1"
                        };

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group relative ${sizeClasses[member.size as keyof typeof sizeClasses]}`}
                            >
                                <div className="glass-panel p-8 h-full border-purple/20 hover:border-purple/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                                    {/* Hover Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Icon/Avatar */}
                                        <div className={`${member.size === 'large' ? 'w-24 h-24 mb-6' : 'w-16 h-16 mb-4'} rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white shadow-soft group-hover:shadow-medium group-hover:scale-110 transition-all duration-300`}>
                                            {member.icon}
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1">
                                            <h3 className={`${member.size === 'large' ? 'text-3xl' : 'text-xl'} font-display font-bold text-graphite mb-2`}>
                                                {member.name}
                                            </h3>
                                            <p className={`${member.size === 'large' ? 'text-lg' : 'text-sm'} text-purple font-display font-semibold mb-3`}>
                                                {member.role}
                                            </p>

                                            {/* Passion - revealed on hover */}
                                            <div className="overflow-hidden">
                                                <motion.p
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    className={`${member.size === 'large' ? 'text-base' : 'text-sm'} text-graphite/70 italic opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                                >
                                                    "{member.passion}"
                                                </motion.p>
                                            </div>
                                        </div>

                                        {/* Placeholder for photo */}
                                        {member.size === 'large' && (
                                            <div className="mt-6 aspect-[4/3] bg-gradient-to-br from-purple/10 to-coral/10 rounded-xl flex items-center justify-center border border-purple/20 group-hover:border-purple/40 transition-colors">
                                                <p className="text-graphite/40 text-sm font-display">Zdjęcie zespołu</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-graphite/70 text-lg mb-6 max-w-3xl mx-auto">
                        <strong className="text-purple font-display">Jesteśmy grupą ambitnych innowatorów</strong>, których połączyła chęć niesienia pomocy.
                        Wierzymy, że technologia powinna służyć człowiekowi, a nie stanowić dla niego barierę.
                        Nasz projekt to dowód na to, że empatia i inżynieria mogą iść w parze.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
