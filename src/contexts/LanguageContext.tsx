import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Language, type TranslationKeys } from '../i18n/translations';

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationKeys;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    // Initialize language based on device preferences immediately
    const [language, setLanguage] = useState<Language>(() => {
        // Safety check for SSR/Node environments
        if (typeof window === 'undefined') return 'en';

        // Check navigator.languages (array of preferred languages) first
        const languages = navigator.languages || [navigator.language];

        // Loop through all preferred languages to find the first supported one.
        // This ensures closest match (e.g. if User has ['fr', 'es'] and we support 'es', they get 'es').
        for (const lang of languages) {
            const code = lang.split('-')[0].toLowerCase() as Language;
            if (translations[code]) {
                return code;
            }
        }

        // Global Fallback
        return 'en';
    });

    const value = {
        language,
        setLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
