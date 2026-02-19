export interface Translations {
    navbar: {
        links: readonly string[];
        toggleLabel: string;
    };
    hero: {
        badge: string;
        headlinePart1: string;
        headlinePart2: string;
        description: string;
        stats: readonly { number: string; label: string }[];
        scrollDown: string;
        cta: string;
    };
    about: {
        title: string;
        titleHighlight: string;
        paragraph1: string;
        paragraph2: string;
        paragraph3: string;
        badgeLine1: string;
        badgeLine2: string;
        teamPhotoAlt: string;
        values: readonly { title: string; description: string }[];
    };
    bento: {
        title: string;
        titleHighlight: string;
        autonomyTitle: string;
        autonomyDescription: string;
        mobileTitle: string;
        mobileDescription: string;
        sosTitle: string;
        sosDescription: string;
    };
    problemSolution: {
        title: string;
        arrow: string;
        titleHighlight: string;
        subtitle: string;
        challengesHeader: string;
        solutionsHeader: string;
        problems: readonly { title: string; stat: string; description: string }[];
        solutions: readonly { title: string; description: string }[];
    };
    howItWorks: {
        steps: readonly { title: string; description: string }[];
    };
    impact: {
        title: string;
        titleHighlight: string;
        subtitle: string;
        humanImpact: string;
        benefits: readonly { title: string; description: string }[];
        testimonialsTitle: string;
        testimonials: readonly { text: string; author: string; age: string }[];
    };
    team: {
        title: string;
        titleHighlight: string;
        description: string;
        campBadge: string;
        roles: {
            mainTeam: string;
            projectCreator: string;
            projectCreatorCap: string;
            webSupport: string;
            techSupport: string;
        };
        teamPhotoPlaceholder: string;
        bottomParagraph: {
            bold: string;
            rest: string;
        };
    };
    joinUs: {
        visionTitle: string;
        visionTitleHighlight: string;
        visionDescription: string;
        visionItems: readonly string[];
    };
    footer: {
        brandDescription: string;
        quickLinksTitle: string;
        quickLinks: readonly { label: string; href: string }[];
        copyright: string;
        builtForImpact: string;
        campBadgePre: string;
        campBadgeHighlight: string;
    };
}

export const pl: Translations = {
    navbar: {
        links: ["O projekcie", "Zespół"],
        toggleLabel: "English",
    },
    hero: {
        badge: "Lekomat",
        headlinePart1: "Wspieramy Seniorów.",
        headlinePart2: "Łączymy Pokolenia.",
        description:
            "Lekomat to środowisko technologiczne, które w sposób kompleksowy wspiera codzienność osób starszych. Działa cicho, przewidywalnie i niezawodnie — tak, aby senior mógł skupić się na tym, co w życiu najważniejsze.",
        stats: [
            { number: "40+", label: "pozytywnych opinii seniorów" },
            { number: "30h", label: "konsultacji pomysłów na rozwój" },
            { number: "1000+", label: "godzin pracy" },
        ],
        scrollDown: "Przewiń w dół",
        cta: "Zacznij teraz",
    },
    about: {
        title: "O",
        titleHighlight: "Projekcie",
        paragraph1:
            "Lekomat to nie kolejny gadżet, ale kompletne środowisko opieki. Rynek oferuje pojedyncze narzędzia, ale żaden system nie łączy ich w tak spójną całość.",
        paragraph2:
            "Integrujemy zaawansowane zarządzanie farmakoterapią, funkcje ratunkowe i lokalną sieć pomocy. Wszystko to działa cicho i niezawodnie, pozwalając seniorom cieszyć się życiem.",
        paragraph3:
            "To rozwiązanie zbudowane na solidnych fundamentach badań i analiz.",
        badgeLine1: "Made with ❤️",
        badgeLine2: "podczas obozu",
        teamPhotoAlt: "Zespół Lekomat",
        values: [
            {
                title: "Kompleksowość",
                description: "Łączymy zarządzanie lekami, bezpieczeństwo i opiekę.",
            },
            {
                title: "Bezpieczeństwo",
                description: "SOS, wykrywanie upadków i lokalna sieć pomocy.",
            },
            {
                title: "Niezależność",
                description: "Działa bez smartfona, wspierając samodzielność.",
            },
            {
                title: "Empatia",
                description: "Projekt oparty na badaniach i zrozumieniu potrzeb.",
            },
        ],
    },
    bento: {
        title: "Zaprojektowany dla",
        titleHighlight: "Doskonałości.",
        autonomyTitle: "24/7 Autonomia",
        autonomyDescription:
            "System działa cicho w tle, zapewniając stały dostęp do leków i bezpieczeństwo. W pełni autonomiczne sortowanie i wydawanie leków przez 365 dni w roku.",
        mobileTitle: "Mobilny Towarzysz",
        mobileDescription:
            "Zdalne zarządzanie i powiadomienia w czasie rzeczywistym dla rodziny i opiekunów, zintegrowane bezpośrednio z urządzeniem Lekomat.",
        sosTitle: "Integracja SOS",
        sosDescription:
            "System natychmiastowego reagowania, który wysyła powiadomienia do lokalnych wolontariuszy i służb ratunkowych, gdy każda sekunda ma znaczenie.",
    },
    problemSolution: {
        title: "Problem",
        arrow: "→",
        titleHighlight: "Rozwiązanie",
        subtitle:
            "Rozumiemy wyzwania, przed którymi stoją seniorzy i oferujemy konkretne rozwiązania",
        challengesHeader: "Wyzwania",
        solutionsHeader: "Nasze Rozwiązania",
        problems: [
            {
                title: "Samotność",
                stat: "40%",
                description: "seniorów czuje się osamotniona",
            },
            {
                title: "Bariery technologiczne",
                stat: "80%",
                description: "ma trudności z nowymi urządzeniami",
            },
            {
                title: "Zarządzanie lekami",
                stat: "50%",
                description: "zapomina o przyjęciu leków",
            },
        ],
        solutions: [
            {
                title: "Aplikacja mobilna",
                description:
                    "Intuicyjna, z harmonogramem leków i skanerem kodów. Integruje się z bazą leków.",
            },
            {
                title: "Automatyczny dozownik",
                description:
                    "Modułowy mechanizm podający leki o ustalonej porze. Eliminuje błędy dawkowania.",
            },
            {
                title: "Opaska ratunkowa",
                description:
                    "Wykrywanie upadków, SOS i komunikaty głosowe. Działa niezależnie od smartfona.",
            },
        ],
    },
    howItWorks: {
        steps: [
            {
                title: "Pobierz aplikację",
                description:
                    "Prosta instalacja na smartfonie lub tablecie. Duże przyciski i czytelny interfejs dostosowany do potrzeb seniorów.",
            },
            {
                title: "Utwórz profil",
                description:
                    "Wprowadź podstawowe informacje i preferencje. Możesz to zrobić sam lub z pomocą rodziny.",
            },
            {
                title: "Połącz się z wolontariuszem",
                description:
                    "System dopasuje Cię do odpowiedniego wolontariusza. Rozpocznij regularne rozmowy i otrzymuj wsparcie.",
            },
            {
                title: "Korzystaj z systemu",
                description:
                    "Otrzymuj przypomnienia o lekach, rozmawiaj z wolontariuszami i ciesz się większą samodzielnością.",
            },
        ],
    },
    impact: {
        title: "Kluczowe",
        titleHighlight: "Korzyści",
        subtitle: "Jak Lekomat zmienia codzienność",
        humanImpact: "Wsparcie Seniorów",
        benefits: [
            {
                title: "Pewność i spokój",
                description:
                    "Koniec z niepewnością. System pamięta o lekach za Ciebie, eliminując stres związany z pominięciem dawki.",
            },
            {
                title: "Bezpieczeństwo 24/7",
                description:
                    "Zintegrowane czujniki i funkcje alarmowe zapewniają natychmiastową reakcję w razie zagrożenia.",
            },
            {
                title: "Niezależność",
                description:
                    "Projekt wzmacnia samodzielność seniora, dyskretnie czuwając nad jego bezpieczeństwem.",
            },
        ],
        testimonialsTitle: "Opinie użytkowników",
        testimonials: [
            {
                text: "Taki system byłby dla mnie ogromnym wsparciem. Świadomość, że ktoś czuwa i w razie potrzeby zareaguje, dałaby mi poczucie bezpieczeństwa, którego teraz mi brakuje.",
                author: "Maria K.",
                age: "78 lat",
            },
            {
                text: "Pomysł z automatycznym przypominaniem o lekach jest świetny. Często zdarza mi się zastanawiać, czy wziąłem tabletkę, a takie rozwiązanie zdjęłoby mi ten ciężar z głowy.",
                author: "Jan P.",
                age: "82 lata",
            },
            {
                text: "Możliwość łatwego kontaktu z wolontariuszem to coś, czego wielu z nas potrzebuje. Sama myśl, że można z kimś porozmawiać, dodaje otuchy.",
                author: "Anna M.",
                age: "75 lat",
            },
        ],
    },
    team: {
        title: "Nasz",
        titleHighlight: "Zespół",
        description:
            "Projekt tworzy zespół uczestników programu Adamed SmartUP. Łączymy kompetencje z zakresu programowania, elektroniki, inżynierii i badań społecznych, aby realnie zmienić jakość życia seniorów.",
        campBadge: "Made with ❤️ podczas obozu naukowego",
        roles: {
            mainTeam: "Główny Zespół",
            projectCreator: "Twórca projektu",
            projectCreatorCap: "Twórca Projektu",
            webSupport: "Strona i pomoc po projekcie",
            techSupport: "Wsparcie techniczne",
        },
        teamPhotoPlaceholder: "Zdjęcie zespołu",
        bottomParagraph: {
            bold: "Jesteśmy grupą ambitnych innowatorów",
            rest: ", których połączyła chęć niesienia pomocy. Wierzymy, że technologia powinna służyć człowiekowi, a nie stanowić dla niego barierę. Nasz projekt to dowód na to, że empatia i inżynieria mogą iść w parze.",
        },
    },
    joinUs: {
        visionTitle: "Nasza Wizja",
        visionTitleHighlight: "Przyszłości",
        visionDescription:
            "Lekomat to początek znacznie szerszej idei. Naszą długoterminową wizją jest stworzenie otwartego, modułowego ekosystemu teleopieki.",
        visionItems: [
            "Pełna integracja z urządzeniami medycznymi (glukometry, ciśnieniomierze)",
            "Automatyczne monitorowanie parametrów zdrowotnych",
            "Analiza danych wspierająca profilaktykę",
            "Lokalna sieć wolontariuszy reagujących na alerty SOS",
            "Chmurowa architektura dostępna z dowolnego miejsca",
        ],
    },
    footer: {
        brandDescription:
            "Lekomat - łączymy technologię z ludzką empatią, aby wspierać seniorów w codziennym życiu.",
        quickLinksTitle: "Szybkie linki",
        quickLinks: [
            { label: "O projekcie", href: "#about" },
            { label: "Zespół", href: "#team" },
        ],
        copyright: "Wszelkie prawa zastrzeżone.",
        builtForImpact: "Stworzony dla Seniorów",
        campBadgePre: "Projekt stworzony przez pasjonatów podczas",
        campBadgeHighlight: "obozu naukowego",
    },
};
