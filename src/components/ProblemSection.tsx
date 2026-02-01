import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { AlertTriangle, XCircle } from 'lucide-react';
import { Button } from './ui/MagneticButton';

export const ProblemSection = () => {
    const { t } = useLanguage();

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[80vh] flex items-center bg-[#050505] overflow-hidden py-24">
            <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 w-full items-center">

                {/* Left: THe Pain (Text) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center"
                >
                    <div className="flex items-center gap-2 mb-6 text-red-500 font-mono text-sm tracking-widest uppercase">
                        <AlertTriangle size={16} />
                        <span>System Failure</span>
                    </div>

                    <h2 className="text-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        {t.problem.title.start}<span className="text-red-500">{t.problem.title.highlight}</span>{t.problem.title.end}
                    </h2>

                    <div className="space-y-8 mb-10">
                        <p className="text-xl text-gray-400 leading-relaxed border-l-2 border-red-500/20 pl-6">
                            {t.problem.description1}
                        </p>
                        <p className="text-xl text-gray-400 leading-relaxed border-l-2 border-primary/20 pl-6">
                            <span className="text-white font-semibold block mb-2">{t.problem.solutionBadge}</span>
                            {t.problem.description2}
                        </p>
                    </div>

                    <div>
                        <Button size="lg" onClick={scrollToPricing} className="shadow-[0_0_30px_rgba(212,255,0,0.2)]">
                            FIX THE SYSTEM
                        </Button>
                    </div>

                </motion.div>

                {/* Right: The Chaos (Abstract Visual) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-full min-h-[400px] flex items-center justify-center"
                >
                    {/* Abstract "Chaos" blob */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-transparent to-transparent rounded-full blur-[100px]" />

                    <div className="relative w-full aspect-square border-2 border-red-500/10 rounded-full flex items-center justify-center p-12">
                        <div className="absolute inset-0 border border-red-500/10 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 border border-dashed border-red-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                        <div className="text-center space-y-4">
                            <div className="bg-red-500/10 p-4 rounded-full inline-flex mb-4">
                                <XCircle className="w-12 h-12 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-red-500">Ineficiência Crônica</h3>
                            <p className="text-gray-500 text-sm max-w-[200px] mx-auto">Dietas genéricas falham em 92% dos casos.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
