"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Smartphone, Heart, Shield, Users } from "lucide-react";

const problems = [
    {
        icon: AlertCircle,
        title: "Samotność",
        stat: "70%",
        description: "seniorów czuje się osamotniona"
    },
    {
        icon: Smartphone,
        title: "Bariery technologiczne",
        stat: "65%",
        description: "ma trudności z nowymi urządzeniami"
    },
    {
        icon: Heart,
        title: "Zarządzanie lekami",
        stat: "40%",
        description: "zapomina o przyjęciu leków"
    },
];

const solutions = [
    {
        icon: Users,
        title: "Łączymy z wolontariuszami",
        description: "Regularne rozmowy i wsparcie emocjonalne"
    },
    {
        icon: Smartphone,
        title: "Prosty interfejs",
        description: "Intuicyjna aplikacja dostosowana do seniorów"
    },
    {
        icon: Shield,
        title: "Automatyczny system",
        description: "Przypomnienia i dozowanie leków"
    },
];

export default function ProblemSolution() {
    return (
        <section id="problem-solution" className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-cream to-cream-dark overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-coral/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-mint/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-graphite mb-4">
                        Problem <span className="text-coral">→</span> <span className="text-gradient-mint">Rozwiązanie</span>
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        Rozumiemy wyzwania, przed którymi stoją seniorzy i oferujemy konkretne rozwiązania
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8">
                    {/* Problems Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-start-1 lg:row-start-1 flex items-center gap-3 mb-4 lg:mb-8"
                    >
                        <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center">
                            <AlertCircle className="w-6 h-6 text-coral" />
                        </div>
                        <h3 className="text-3xl font-display font-bold text-graphite">Wyzwania</h3>
                    </motion.div>

                    {/* Problems List */}
                    {problems.map((problem, index) => {
                        const Icon = problem.icon;
                        // Tailwind needs static classes to scan them
                        const rowClasses = ["lg:row-start-2", "lg:row-start-3", "lg:row-start-4"];
                        return (
                            <motion.div
                                key={`problem-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`lg:col-start-1 ${rowClasses[index]} glass-panel p-6 border-coral/30 hover:border-coral/50 transition-all duration-300 h-full`}
                            >
                                <div className="flex flex-col items-center text-center gap-4 h-full">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-coral to-coral-light flex items-center justify-center text-white font-display font-bold text-2xl shadow-soft flex-shrink-0">
                                        {problem.stat}
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <div className="flex items-center justify-center gap-2 mb-2">
                                            <Icon className="w-5 h-5 text-coral" />
                                            <h4 className="font-display font-bold text-graphite text-lg">{problem.title}</h4>
                                        </div>
                                        <p className="text-graphite/70">{problem.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Solutions Header */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-start-2 lg:row-start-1 flex items-center gap-3 mb-4 lg:mb-8"
                    >
                        <div className="w-12 h-12 rounded-full bg-mint/20 flex items-center justify-center">
                            <CheckCircle className="w-6 h-6 text-mint" />
                        </div>
                        <h3 className="text-3xl font-display font-bold text-graphite">Nasze Rozwiązania</h3>
                    </motion.div>

                    {/* Solutions List */}
                    {solutions.map((solution, index) => {
                        const Icon = solution.icon;
                        const rowClasses = ["lg:row-start-2", "lg:row-start-3", "lg:row-start-4"];
                        return (
                            <motion.div
                                key={`solution-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className={`lg:col-start-2 ${rowClasses[index]} glass-panel p-6 border-mint/30 hover:border-mint/50 transition-all duration-300 group hover:-translate-y-1 h-full`}
                            >
                                <div className="flex flex-col items-center text-center gap-4 h-full">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-mint to-mint-light flex items-center justify-center shadow-soft group-hover:shadow-medium transition-shadow flex-shrink-0"
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <h4 className="font-display font-bold text-graphite text-lg mb-2">{solution.title}</h4>
                                        <p className="text-graphite/70">{solution.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="lg:col-start-1 lg:col-span-2 lg:row-start-5 pt-6 flex justify-center"
                    >
                        <button className="btn-primary w-full md:w-auto md:px-12">
                            Zobacz jak to działa
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
