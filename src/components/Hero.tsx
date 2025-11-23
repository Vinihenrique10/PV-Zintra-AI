import { motion } from 'framer-motion';
import { Button } from './ui/MagneticButton';

import { HeroVisual } from './visuals/HeroVisual';

export const Hero = () => {
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

            <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-[1.1]"
                >
                    A precisão de um <span className="text-primary">Nutricionista</span> e a estratégia de um <span className="text-primary">Personal Trainer</span>. No seu bolso, 24h por dia.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl"
                >
                    Pare de tentar adivinhar o que comer ou como treinar. O Zintra AI usa protocolos baseados em fisiologia real para criar o plano perfeito para o seu corpo, suas lesões e sua rotina.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Button size="lg" className="mb-20" onClick={scrollToPricing}>
                        Quero Emagrecer com Saúde
                    </Button>
                </motion.div>

                {/* Floating Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="relative w-full max-w-[320px] md:max-w-[500px] mx-auto"
                >
                    <div className="animate-float relative z-10">
                        <HeroVisual />

                        {/* Glow behind phone */}
                        <div className="absolute -inset-4 bg-primary/30 blur-3xl -z-10 rounded-full opacity-50" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
