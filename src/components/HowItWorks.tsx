"use client";

import { motion } from "framer-motion";
import { Smartphone, UserPlus, MessageCircle, CheckCircle } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Smartphone,
        title: "Pobierz aplikację",
        description: "Prosta instalacja na smartfonie lub tablecie. Duże przyciski i czytelny interfejs dostosowany do potrzeb seniorów.",
        color: "from-purple to-purple-light"
    },
    {
        number: "02",
        icon: UserPlus,
        title: "Utwórz profil",
        description: "Wprowadź podstawowe informacje i preferencje. Możesz to zrobić sam lub z pomocą rodziny.",
        color: "from-coral to-coral-light"
    },
    {
        number: "03",
        icon: MessageCircle,
        title: "Połącz się z wolontariuszem",
        description: "System dopasuje Cię do odpowiedniego wolontariusza. Rozpocznij regularne rozmowy i otrzymuj wsparcie.",
        color: "from-mint to-mint-light"
    },
    {
        number: "04",
        icon: CheckCircle,
        title: "Korzystaj z systemu",
        description: "Otrzymuj przypomnienia o lekach, rozmawiaj z wolontariuszami i ciesz się większą samodzielnością.",
        color: "from-purple to-coral"
    },
];

export default function HowItWorks() {
    return null;
}
