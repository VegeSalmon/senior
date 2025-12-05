"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Heart, Clock, MapPin, Quote } from "lucide-react";

const stats = [
    { icon: Users, number: 150, label: "Seniorów wspieranych", suffix: "+" },
    { icon: Heart, number: 75, label: "Aktywnych wolontariuszy", suffix: "+" },
    { icon: Clock, number: 2500, label: "Godzin wsparcia", suffix: "+" },
    { icon: MapPin, number: 12, label: "Miast w Polsce", suffix: "" },
];

const testimonials = [
    {
        text: "Dzięki SSS nie czuję się już samotna. Moja wolontariuszka dzwoni do mnie codziennie i zawsze mogę na nią liczyć.",
        author: "Maria K.",
        age: "78 lat",
        location: "Warszawa"
    },
    {
        text: "System przypominający o lekach to prawdziwe błogosławieństwo. Nie muszę się już martwić, że zapomnę o tabletkach.",
        author: "Jan P.",
        age: "82 lata",
        location: "Kraków"
    },
    {
        text: "Wspaniałe uczucie pomagać starszym osobom. To daje mi ogromną satysfakcję i wiele się uczę od seniorów.",
        author: "Anna M.",
        age: "Wolontariuszka",
        location: "Gdańsk"
    },
];

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
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

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
                        Nasz <span className="text-gradient-coral">Wpływ</span>
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        Liczby, które pokazują realną zmianę w życiu seniorów
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-panel p-6 md:p-8 text-center border-purple/30 hover:border-coral/50 transition-all duration-300 group hover:-translate-y-2"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-coral to-coral-light flex items-center justify-center shadow-soft group-hover:shadow-medium transition-shadow"
                                >
                                    <Icon className="w-8 h-8 text-white" />
                                </motion.div>
                                <div className="text-4xl md:text-5xl font-display font-bold text-gradient-purple mb-2">
                                    <Counter end={stat.number} />{stat.suffix}
                                </div>
                                <div className="text-sm md:text-base text-graphite/70 font-sans">{stat.label}</div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 border-mint/30"
                    >
                        <h3 className="text-2xl font-display font-bold text-graphite mb-6 flex items-center gap-3">
                            <MapPin className="w-6 h-6 text-mint" />
                            Zasięg projektu
                        </h3>
                        <div className="aspect-[4/3] bg-gradient-to-br from-mint/20 via-purple/10 to-coral/20 rounded-xl flex items-center justify-center border border-mint/30">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 text-mint/40 mx-auto mb-4" />
                                <p className="text-graphite/60 font-display font-semibold">Mapa Polski</p>
                                <p className="text-sm text-graphite/40 mt-2">(wizualizacja zasięgu)</p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {["Warszawa", "Kraków", "Gdańsk", "Wrocław", "Poznań", "Łódź", "Szczecin", "Lublin", "Katowice", "Bydgoszcz", "Białystok", "Rzeszów"].map((city, i) => (
                                <span key={i} className="px-3 py-1 bg-mint/10 text-mint-dark rounded-full text-sm font-display">
                                    {city}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Testimonials Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 border-coral/30 relative overflow-hidden"
                    >
                        <h3 className="text-2xl font-display font-bold text-graphite mb-8 flex items-center gap-3">
                            <Heart className="w-6 h-6 text-coral" />
                            Opinie użytkowników
                        </h3>

                        <div className="relative min-h-[250px]">
                            {testimonials.map((testimonial, index) => (
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
                                        "{testimonial.text}"
                                    </p>
                                    <div>
                                        <p className="font-display font-bold text-graphite">{testimonial.author}</p>
                                        <p className="text-sm text-graphite/60">{testimonial.age} • {testimonial.location}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Carousel Indicators */}
                        <div className="flex gap-2 mt-6 justify-center">
                            {testimonials.map((_, index) => (
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
