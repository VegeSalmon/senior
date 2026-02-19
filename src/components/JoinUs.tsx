"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function JoinUs() {
    const { t } = useLanguage();

    return (
        <section id="join-us" className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-br from-purple/5 via-cream to-coral/5 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="blob-shape bg-purple w-[400px] h-[400px] top-0 right-0" />
                <div className="blob-shape bg-coral w-[500px] h-[500px] bottom-0 left-0 animation-delay-2000" />
                <div className="blob-shape bg-mint w-[300px] h-[300px] top-1/2 left-1/2 animation-delay-4000" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Future Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 glass-panel p-8 md:p-12 border-purple/20"
                >
                    <h3 className="text-3xl font-display font-bold text-graphite mb-6 text-center">
                        {t.joinUs.visionTitle} <span className="text-gradient-mint">{t.joinUs.visionTitleHighlight}</span>
                    </h3>
                    <p className="text-lg text-graphite/80 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
                        {t.joinUs.visionDescription}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {t.joinUs.visionItems.map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-mint flex-shrink-0" />
                                <p className="text-graphite/70">{item}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
