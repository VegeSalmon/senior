"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Users, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function JoinUs() {
    const [selectedPath, setSelectedPath] = useState<'senior' | 'volunteer' | null>(null);

    return (
        <section id="join-us" className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-br from-purple/5 via-cream to-coral/5 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="blob-shape bg-purple w-[400px] h-[400px] top-0 right-0" />
                <div className="blob-shape bg-coral w-[500px] h-[500px] bottom-0 left-0 animation-delay-2000" />
                <div className="blob-shape bg-mint w-[300px] h-[300px] top-1/2 left-1/2 animation-delay-4000" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-graphite mb-4">
                        Dołącz do <span className="text-gradient-purple">nas</span>
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        Wybierz swoją ścieżkę i stań się częścią wspólnoty SSS
                    </p>
                </motion.div>

                {/* Path Selection */}
                {!selectedPath && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <motion.button
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            onClick={() => setSelectedPath('senior')}
                            className="glass-panel p-12 border-coral/30 hover:border-coral transition-all duration-300 text-left group"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-coral to-coral-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-soft group-hover:shadow-medium">
                                <Heart className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl font-display font-bold text-graphite mb-4">Jestem seniorem</h3>
                            <p className="text-graphite/70 text-lg leading-relaxed">
                                Szukasz wsparcia, chcesz poznać nowych ludzi lub potrzebujesz pomocy z technologią? Jesteśmy tu dla Ciebie.
                            </p>
                            <div className="mt-6 text-coral font-display font-semibold flex items-center gap-2">
                                Rozpocznij <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </div>
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            onClick={() => setSelectedPath('volunteer')}
                            className="glass-panel p-12 border-mint/30 hover:border-mint transition-all duration-300 text-left group"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-mint to-mint-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-soft group-hover:shadow-medium">
                                <Users className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl font-display font-bold text-graphite mb-4">Chcę pomagać</h3>
                            <p className="text-graphite/70 text-lg leading-relaxed">
                                Masz czas i chęci, aby wspierać seniorów? Dołącz do naszego zespołu wolontariuszy i zmień czyjeś życie.
                            </p>
                            <div className="mt-6 text-mint font-display font-semibold flex items-center gap-2">
                                Dołącz <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </div>
                        </motion.button>
                    </div>
                )}

                {/* Contact Form */}
                {selectedPath && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-panel p-8 md:p-12 border-purple/30 max-w-2xl mx-auto"
                    >
                        <button
                            onClick={() => setSelectedPath(null)}
                            className="text-purple hover:text-coral transition-colors mb-6 flex items-center gap-2"
                        >
                            ← Wróć do wyboru
                        </button>

                        <h3 className="text-3xl font-display font-bold text-graphite mb-6">
                            {selectedPath === 'senior' ? 'Formularz dla seniorów' : 'Formularz wolontariusza'}
                        </h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-graphite font-display font-semibold mb-2">Imię</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-purple/20 focus:border-purple outline-none bg-white/50 backdrop-blur-sm transition-colors"
                                        placeholder="Jan"
                                    />
                                </div>
                                <div>
                                    <label className="block text-graphite font-display font-semibold mb-2">Nazwisko</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-purple/20 focus:border-purple outline-none bg-white/50 backdrop-blur-sm transition-colors"
                                        placeholder="Kowalski"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-graphite font-display font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-purple/20 focus:border-purple outline-none bg-white/50 backdrop-blur-sm transition-colors"
                                    placeholder="jan.kowalski@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-graphite font-display font-semibold mb-2">Telefon</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-purple/20 focus:border-purple outline-none bg-white/50 backdrop-blur-sm transition-colors"
                                    placeholder="+48 123 456 789"
                                />
                            </div>

                            <div>
                                <label className="block text-graphite font-display font-semibold mb-2">Wiadomość</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-purple/20 focus:border-purple outline-none bg-white/50 backdrop-blur-sm transition-colors resize-none"
                                    placeholder={selectedPath === 'senior' ? 'Opowiedz nam o sobie i jak możemy Ci pomóc...' : 'Dlaczego chcesz zostać wolontariuszem?'}
                                />
                            </div>

                            <button type="submit" className="btn-primary w-full">
                                Wyślij zgłoszenie
                            </button>
                        </form>
                    </motion.div>
                )}

                {/* Contact Info & Social Media */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                >
                    <div className="glass-panel p-6 border-purple/20">
                        <Mail className="w-8 h-8 text-purple mx-auto mb-3" />
                        <p className="font-display font-semibold text-graphite mb-1">Email</p>
                        <p className="text-graphite/70">kontakt@sss.pl</p>
                    </div>
                    <div className="glass-panel p-6 border-coral/20">
                        <Phone className="w-8 h-8 text-coral mx-auto mb-3" />
                        <p className="font-display font-semibold text-graphite mb-1">Telefon</p>
                        <p className="text-graphite/70">+48 123 456 789</p>
                    </div>
                    <div className="glass-panel p-6 border-mint/20">
                        <MapPin className="w-8 h-8 text-mint mx-auto mb-3" />
                        <p className="font-display font-semibold text-graphite mb-1">Adres</p>
                        <p className="text-graphite/70">Warszawa, Polska</p>
                    </div>
                </motion.div>

                {/* Social Media */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-graphite/70 mb-4 font-display">Śledź nas w mediach społecznościowych</p>
                    <div className="flex justify-center gap-4">
                        {[
                            { icon: Facebook, color: "from-purple to-purple-light" },
                            { icon: Twitter, color: "from-mint to-mint-light" },
                            { icon: Instagram, color: "from-coral to-coral-light" },
                            { icon: Linkedin, color: "from-purple to-coral" },
                        ].map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-soft hover:shadow-medium transition-shadow`}
                                >
                                    <Icon className="w-6 h-6" />
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
