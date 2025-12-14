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

        // Dynamic detection: Iterate through user's preferred languages
        // and check if we have a translation available for it.
        // This automatically supports any new language added to translations.ts in the future.
        for (const lang of languages) {
            // Get the 2-letter code (e.g., "en-US" -> "en")
            const code = lang.split('-')[0].toLowerCase() as Language;

            // Check if this language exists in our translations (excluding "en" which is default)
            if (translations[code]) {
                return code;
            }
        }

        // Default fallback
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
