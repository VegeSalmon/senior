"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Heart, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const benefitIcons = [Heart, Shield, Users];

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}</span>;
}

export default function Impact() {
    const { t } = useLanguage();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % t.impact.testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [t.impact.testimonials.length]);

    return (
        <section id="impact" className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-cream-dark to-cream overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-coral/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-graphite mb-4">
                        {t.impact.title} <span className="text-gradient-coral">{t.impact.titleHighlight}</span>
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        {t.impact.subtitle}
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {t.impact.benefits.map((benefit, index) => {
                        const Icon = benefitIcons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-panel p-8 text-center border-purple/30 hover:border-coral/50 transition-all duration-300 group hover:-translate-y-2 h-full"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-coral to-coral-light flex items-center justify-center shadow-soft group-hover:shadow-medium transition-shadow"
                                >
                                    <Icon className="w-10 h-10 text-white" />
                                </motion.div>
                                <h3 className="text-2xl font-display font-bold text-graphite mb-4">
                                    {benefit.title}
                                </h3>
                                <p className="text-graphite/70 font-sans leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="flex justify-center">
                    {/* Testimonials Carousel */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 border-coral/30 relative overflow-hidden max-w-3xl w-full"
                    >
                        <h3 className="text-2xl font-display font-bold text-graphite mb-8 flex items-center gap-3">
                            <Heart className="w-6 h-6 text-coral" />
                            {t.impact.testimonialsTitle}
                        </h3>

                        <div className="relative min-h-[250px]">
                            {t.impact.testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{
                                        opacity: currentTestimonial === index ? 1 : 0,
                                        x: currentTestimonial === index ? 0 : 50,
                                        display: currentTestimonial === index ? 'block' : 'none'
                                    }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <p className="text-lg text-graphite/80 leading-relaxed mb-6">
                                        &quot;{testimonial.text}&quot;
                                    </p>
                                    <div>
                                        <p className="font-display font-bold text-graphite">{testimonial.author}</p>
                                        <p className="text-sm text-graphite/60">{testimonial.age}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Carousel Indicators */}
                        <div className="flex gap-2 mt-6 justify-center">
                            {t.impact.testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'bg-coral w-8' : 'bg-coral/30'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
