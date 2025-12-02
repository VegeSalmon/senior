"use client";

import { motion } from "framer-motion";
import { User, Code, Wrench, Heart } from "lucide-react";

const team = [
    {
        name: "Piotr",
        role: "Founder & Lead",
        icon: <User className="w-8 h-8" />,
        color: "from-tech-primary to-tech-secondary",
    },
    {
        name: "Team Member",
        role: "Engineering",
        icon: <Code className="w-8 h-8" />,
        color: "from-tech-secondary to-tech-accent",
    },
    {
        name: "Team Member",
        role: "Hardware",
        icon: <Wrench className="w-8 h-8" />,
        color: "from-tech-accent to-blue-400",
    },
    {
        name: "Team Member",
        role: "Care Specialist",
        icon: <Heart className="w-8 h-8" />,
        color: "from-blue-400 to-cyan-300",
    },
];

export default function Team() {
    return (
        <section className="relative py-32 px-6 md:px-12 bg-tech-bg">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-display font-bold text-white mb-16 text-right"
                >
                    THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-secondary to-tech-primary">TEAM</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl blur-xl"
                                style={{ background: `linear-gradient(to bottom right, var(--color-tech-primary), var(--color-tech-secondary))` }} />

                            <div className="glass-panel p-8 h-full relative z-10 border-tech-primary/10 hover:border-tech-primary/50 transition-all duration-300 hover:-translate-y-2">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-6 text-tech-bg shadow-[0_0_20px_rgba(100,255,218,0.3)] group-hover:scale-110 transition-transform duration-300`}>
                                    {member.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                <p className="text-tech-muted text-sm uppercase tracking-wider">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
