import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/MagneticButton';
import { useLanguage } from '../contexts/LanguageContext';
import { HeroVisual } from './visuals/HeroVisual';
import { useRef } from 'react';

export const Hero = () => {
    const { t } = useLanguage();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 100]); // Reduced parallax movement
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]); // Slower fade out

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden bg-background">
            {/* Ambient Background - Acid Lime Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto relative z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-6"
                >
                    <span className="px-3 py-1 rounded-sm bg-white/5 backdrop-blur-md text-primary text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase border border-white/10 shadow-[0_0_20px_-10px_var(--color-primary)]">
                        {t.hero.badge}
                    </span>
                </motion.div>

                {/* Typography - Refined Sizing */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-0 max-w-5xl mx-auto"
                >
                    <h1 className="text-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-white mix-blend-difference mb-8">
                        {t.hero.title.start} <br className="hidden md:block" />
                        <span className="text-white">
                            {t.hero.title.highlight}
                        </span>
                        <span className="text-primary block md:inline"> {t.hero.title.end}</span>
                    </h1>
                </motion.div>

                {/* Subtitle & CTA - Better Spacing */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col items-center max-w-xl mb-12"
                >
                    <p className="text-base md:text-lg text-gray-400 font-light mb-8 leading-relaxed max-w-md mx-auto">
                        {t.hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button
                            variant="primary"
                            size="lg" // Uses updated size
                            onClick={scrollToPricing}
                            className="w-full sm:w-auto group relative overflow-hidden"
                        >
                            <span className="relative z-10 font-bold uppercase tracking-wide text-sm">{t.hero.cta}</span>
                        </Button>
                    </div>
                </motion.div>

                {/* Floating Visual - Adjusted Position & Transform */}
                <motion.div
                    style={{ y, opacity }}
                    className="relative z-20 w-full max-w-[280px] md:max-w-[340px]"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 100, rotateX: 10 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Ground Reflection */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-primary/20 blur-xl rounded-[100%] opacity-60" />
                        <HeroVisual />
                    </motion.div>
                </motion.div>

            </div>

            {/* Scanlines / Texture */}
            <div className="absolute inset-0 z-[1] bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
        </section>
    );
};
