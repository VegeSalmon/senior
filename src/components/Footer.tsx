"use client";

import { motion } from "framer-motion";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-graphite text-cream py-16 px-6 md:px-12 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple via-coral to-mint" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Heart className="w-8 h-8 text-coral" />
                            <h3 className="text-2xl font-display font-bold">SSS</h3>
                        </div>
                        <p className="text-cream/70 leading-relaxed">
                            Senior Support System - łączymy technologię z ludzką empatią, aby wspierać seniorów w codziennym życiu.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-4">Szybkie linki</h4>
                        <ul className="space-y-2">
                            {[
                                { label: "O projekcie", href: "#about" },
                                { label: "Jak to działa", href: "#how-it-works" },
                                { label: "Zespół", href: "#team" },
                                { label: "Dołącz do nas", href: "#join-us" },
                            ].map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-cream/70 hover:text-coral transition-colors inline-block hover:translate-x-1 duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-4">Kontakt</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-cream/70">
                                <Mail className="w-5 h-5 text-mint" />
                                <span>kontakt@sss.pl</span>
                            </li>
                            <li className="flex items-center gap-3 text-cream/70">
                                <Phone className="w-5 h-5 text-mint" />
                                <span>+48 123 456 789</span>
                            </li>
                            <li className="flex items-center gap-3 text-cream/70">
                                <MapPin className="w-5 h-5 text-mint" />
                                <span>Warszawa, Polska</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-cream/60 text-sm">
                        © {new Date().getFullYear()} SSS - Senior Support System. Wszystkie prawa zastrzeżone.
                    </p>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-display flex items-center gap-2"
                    >
                        <Heart className="w-4 h-4 text-coral" />
                        <span className="text-cream/70">
                            Projekt stworzony przez pasjonatów podczas <span className="text-coral font-semibold">obozu naukowego</span>
                        </span>
                    </motion.p>
                </div>
            </div>
        </footer>
    );
}
