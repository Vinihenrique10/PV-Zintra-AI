import { motion } from 'framer-motion';
import { Check, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/MagneticButton';

export const QualificationSection = () => {
    const { t } = useLanguage();

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden bg-background">
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-3xl p-[1px] overflow-hidden group"
                >
                    {/* Border Beam Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ backgroundSize: '200% 200%' }} />
                    <div className="absolute inset-0 border border-white/10 rounded-3xl" />

                    <div className="bg-[#080808]/90 backdrop-blur-3xl rounded-3xl p-8 md:p-16 relative overflow-hidden h-full">
                        {/* Inner Glow */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

                        <div className="text-center mb-16 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 mb-6 uppercase tracking-widest">
                                <ShieldCheck size={14} className="text-primary" />
                                Exclusive Access
                            </div>
                            <h2 className="text-display text-3xl md:text-5xl font-bold mb-6">
                                {t.qualification.title.start}<span className="text-primary">{t.qualification.title.highlight}</span>{t.qualification.title.end}
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                                {t.qualification.subtitle}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
                            {t.qualification.items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 group/item"
                                >
                                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary group-hover/item:text-black transition-colors duration-300">
                                        <Check className="w-3.5 h-3.5 text-primary group-hover/item:text-black" />
                                    </div>
                                    <p className="text-lg text-gray-300 font-medium text-left leading-relaxed group-hover/item:text-white transition-colors">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16 text-center relative z-20">
                            <Button size="lg" onClick={scrollToPricing} className="shadow-[0_0_30px_rgba(212,255,0,0.2)]">
                                JOIN THE ELITE - START NOW
                            </Button>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};
