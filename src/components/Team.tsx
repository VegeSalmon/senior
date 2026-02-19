"use client";

import { motion } from "framer-motion";
import { User, Code, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Team() {
    const { t } = useLanguage();

    const team = [
        {
            name: "Emil Pająk",
            role: t.team.roles.projectCreator,
            icon: <User className="w-8 h-8" />,
            accent: "electric-cyan",
            span: "md:col-span-4 md:row-span-2"
        },
        {
            name: "Piotr Śpiechowicz",
            role: t.team.roles.techSupport,
            icon: <Code className="w-8 h-8" />,
            accent: "soft-lavender",
            span: "md:col-span-4"
        },
        {
            name: "Stanisław Trojan",
            role: "Engineering",
            icon: <User className="w-8 h-8" />,
            accent: "white",
            span: "md:col-span-4"
        },
        {
            name: "Kacper Romuk",
            role: "Electronics",
            icon: <User className="w-8 h-8" />,
            accent: "electric-cyan",
            span: "md:col-span-4"
        },
        {
            name: "Ania Olszak",
            role: "Research",
            icon: <Heart className="w-8 h-8" />,
            accent: "soft-lavender",
            span: "md:col-span-4"
        },
        {
            name: "Łukasz Dziki",
            role: t.team.roles.webSupport,
            icon: <Code className="w-8 h-8" />,
            accent: "white",
            span: "md:col-span-4 md:row-span-1"
        },
        {
            name: "Jacek Wiaterek",
            role: t.team.roles.techSupport,
            icon: <Code className="w-8 h-8" />,
            accent: "electric-cyan",
            span: "md:col-span-4"
        }
    ];

    return (
        <section id="team" className="relative py-32 px-6 lg:px-12 bg-navy-deep overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-vibrant-purple/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                        {t.team.title} <span className="text-gradient-cyan">{t.team.titleHighlight}</span>
                    </h2>
                    <p className="text-xl text-white/40 max-w-2xl font-sans leading-relaxed">
                        {t.team.description}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 font-bold uppercase tracking-widest text-xs">
                        <Sparkles className="w-4 h-4 text-electric-cyan" />
                        {t.team.campBadge}
                    </div>
                </motion.div>

                {/* Modular Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`${member.span} glass-card p-10 flex flex-col justify-between group relative overflow-hidden`}
                        >
                            <div className="absolute top-0 right-0 p-8">
                                <span className="text-[10px] font-bold tracking-[0.3em] text-white/10 group-hover:text-white/20 transition-colors uppercase">
                                    {member.role}
                                </span>
                            </div>

                            <div>
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                                    <div className={`text-${member.accent}`}>
                                        {member.icon}
                                    </div>
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white group-hover:text-electric-cyan transition-colors">
                                    {member.name}
                                </h3>
                            </div>

                            {/* Hover effect highlight */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-electric-cyan group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>

                {/* Team Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 relative rounded-3xl overflow-hidden glass-card border-white/10 group"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent z-10" />
                    <img
                        src="/team.jpg"
                        alt={t.about.teamPhotoAlt}
                        className="w-full h-[500px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-0 left-0 p-10 z-20">
                        <h3 className="text-3xl font-display font-bold text-white mb-2">{t.team.roles.mainTeam}</h3>
                        <p className="text-white/60">{t.team.campBadge}</p>
                    </div>
                </motion.div>

                {/* Narrative Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 flex justify-center"
                >
                    <div className="max-w-3xl text-center">
                        <p className="text-2xl text-white leading-relaxed font-sans opacity-80 italic">
                            &quot;{t.team.bottomParagraph.bold} {t.team.bottomParagraph.rest}&quot;
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}