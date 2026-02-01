import { motion } from 'framer-motion';
import { Button } from './ui/MagneticButton';
import { useLanguage } from '../contexts/LanguageContext';
import { Fingerprint, Lock, Cpu } from 'lucide-react';

export const OfferSection = () => {
    const { t } = useLanguage();
    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-40 px-6 relative overflow-hidden bg-black flex flex-col items-center justify-center min-h-[80vh]">
            {/* Cyberpunk Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(212,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,255,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

            {/* Animated Data Stream (Vertical) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-50" />
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-50" />
            </div>

            <div className="container mx-auto max-w-5xl text-center relative z-10">

                {/* Holographic Icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-12 relative inline-flex justify-center items-center"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full animate-pulse" />
                    <div className="w-24 h-24 rounded-full border border-primary/30 flex items-center justify-center bg-black/50 backdrop-blur-xl relative overflow-hidden group">
                        <Fingerprint className="w-12 h-12 text-primary relative z-10" />
                        <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-display text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                        TO THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">MOLECULAR</span> LEVEL
                    </h2>

                    <div className="h-px w-32 bg-primary mx-auto mb-10 shadow-[0_0_15px_var(--color-primary)]" />

                    <h3 className="text-2xl md:text-4xl font-bold mb-8 text-white">
                        {t.offer.title.start}<span className="text-primary">{t.offer.title.highlight}</span>{t.offer.title.end}
                    </h3>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
                        {t.offer.subtitle}
                    </p>

                    <div className="relative group inline-block">
                        <Button size="lg" onClick={scrollToPricing} className="w-full sm:w-auto">
                            {t.offer.button}
                        </Button>
                    </div>
                </motion.div>

                {/* Tech Specs Decoration */}
                <div className="absolute bottom-10 left-10 hidden md:block text-left opacity-30">
                    <div className="flex items-center gap-2 text-xs font-mono text-primary mb-1">
                        <Cpu size={12} />
                        <span>SYSTEM_READY</span>
                    </div>
                    <div className="h-1 w-24 bg-primary/20 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-primary animate-progress origin-left" />
                    </div>
                </div>

                <div className="absolute top-10 right-10 hidden md:block text-right opacity-30">
                    <div className="flex items-center gap-2 text-xs font-mono text-primary mb-1 justify-end">
                        <span>ENCRYPTION_ACTIVE</span>
                        <Lock size={12} />
                    </div>
                    <div className="text-[10px] text-primary font-mono">
                        SECURE_CONNECTION_ESTABLISHED
                    </div>
                </div>
            </div>
        </section>
    );
};
