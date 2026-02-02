import { motion } from 'framer-motion';
import { User, Target, Zap, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/MagneticButton';

export const MechanismSection = () => {
    const { t } = useLanguage();

    const steps = [
        {
            icon: User,
            title: t.mechanism.steps.step1.title,
            description: t.mechanism.steps.step1.description
        },
        {
            icon: Target,
            title: t.mechanism.steps.step2.title,
            description: t.mechanism.steps.step2.description
        },
        {
            icon: Zap,
            title: t.mechanism.steps.step3.title,
            description: t.mechanism.steps.step3.description
        }
    ];

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-32 px-6 relative bg-background overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-gradient" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">{t.mechanism.label}</span>
                    <h2 className="text-display text-4xl md:text-6xl font-bold mb-6">
                        {t.mechanism.header.title.start}<span className="text-primary">{t.mechanism.header.title.highlight}</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        {t.mechanism.header.subtitle}
                    </p>
                </motion.div>

                {/* Pipeline Visualization */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Node */}
                                <div className="w-20 h-20 rounded-full bg-[#050505] border-2 border-primary md:border-primary/20 md:group-hover:border-primary shadow-[0_0_30px_-5px_var(--color-primary)] md:shadow-none md:group-hover:shadow-[0_0_30px_-5px_var(--color-primary)] transition-all duration-500 flex items-center justify-center relative z-10 mb-8">
                                    <step.icon size={32} className="text-primary md:text-white md:group-hover:text-primary transition-colors" />
                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 md:group-hover:animate-ping" />
                                </div>

                                {/* Content */}
                                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 w-full hover:bg-white/10 transition-colors relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#050505] rotate-45 border-l border-t border-white/5" />

                                    <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Mobile Connector */}
                                {index !== steps.length - 1 && (
                                    <div className="md:hidden mt-8 text-primary/50">
                                        <ArrowRight className="rotate-90" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 flex justify-center">
                        <Button size="lg" onClick={scrollToPricing} className="shadow-[0_0_30px_rgba(212,255,0,0.2)]">
                            {t.mechanism.button}
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};
