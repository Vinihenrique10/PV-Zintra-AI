import { useLanguage } from '../contexts/LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-12 px-6 border-t border-white/10 bg-black relative z-10">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-2xl font-bold tracking-tighter">
                    Zintra<span className="text-primary">.AI</span>
                </div>

                <div className="text-sm text-gray-500">
                    {t.footer.rights}
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.terms}</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.privacy}</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.support}</a>
                </div>
            </div>
        </footer>
    );
};
