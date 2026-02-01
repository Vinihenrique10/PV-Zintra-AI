import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-20 px-6 bg-black relative z-10 overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_100%)]" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    <div className="max-w-md">
                        <div className="text-3xl font-bold tracking-tighter mb-6 font-display">
                            Zintra<span className="text-primary text-4xl leading-none">.</span>AI
                        </div>
                        <p className="text-gray-400 leading-relaxed text-lg font-light">
                            {t.hero.subtitle}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-8 md:gap-16">
                        <div>
                            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Product</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                                <li><a href="#testimonials" className="hover:text-primary transition-colors">Success Stories</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Company</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-sm text-gray-500">
                        {t.footer.rights}
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-black hover:bg-primary transition-all duration-300">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-black hover:bg-primary transition-all duration-300">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-black hover:bg-primary transition-all duration-300">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
