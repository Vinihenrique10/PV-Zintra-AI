import { motion } from 'framer-motion';
import { Button } from './ui/MagneticButton';
import { useLanguage } from '../contexts/LanguageContext';

import { HeroVisual } from './visuals/HeroVisual';

export const Hero = () => {
    const { t } = useLanguage();
    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
                {/* Text Content - Left on Desktop */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-4"
                    >
                        <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide border border-primary/20">
                            {t.hero.badge}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
                    >
                        {t.hero.title.start}<span className="text-primary">{t.hero.title.highlight}</span>{t.hero.title.end}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg"
                    >
                        {t.hero.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <Button size="lg" className="mb-12 md:mb-0" onClick={scrollToPricing}>
                            {t.hero.cta}
                        </Button>
                    </motion.div>
                </div>

                {/* Floating Visual - Right on Desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[500px]"
                >
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative z-10"
                    >
                        <HeroVisual />

                        {/* Glow behind phone */}
                        <motion.div
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [0.8, 1.1, 0.8]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -inset-4 bg-primary/30 blur-3xl -z-10 rounded-full"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
