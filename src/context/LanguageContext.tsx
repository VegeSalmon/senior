"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { pl, en, type Locale, type Translations } from "@/i18n";

interface LanguageContextValue {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: Translations;
}

const dictionaries: Record<Locale, Translations> = { pl, en };

const LanguageContext = createContext<LanguageContextValue>({
    locale: "pl",
    setLocale: () => { },
    t: pl,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>("pl");
    const t = dictionaries[locale];

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
