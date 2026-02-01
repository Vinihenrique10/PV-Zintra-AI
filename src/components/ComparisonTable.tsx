import { motion } from 'framer-motion';
import { Check, X, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/MagneticButton';

export const ComparisonTable = () => {
    const { t } = useLanguage();

    type ComparisonRow = {
        feature: string;
        zintra: { text: string; sub?: string; icon: boolean | "warning" };
        personal: { text: string; icon: boolean | "warning" };
        generic: { text: string; sub?: string; icon: boolean | "warning" };
    };

    const comparisonData: ComparisonRow[] = [
        {
            feature: t.comparison.rows.investment.feature,
            zintra: { text: t.comparison.rows.investment.zintra.text, sub: t.comparison.rows.investment.zintra.sub, icon: true },
            personal: { text: t.comparison.rows.investment.personal, icon: false },
            generic: { text: t.comparison.rows.investment.generic, icon: false }
        },
        {
            feature: t.comparison.rows.injuries.feature,
            zintra: { text: t.comparison.rows.injuries.zintra.text, sub: t.comparison.rows.injuries.zintra.sub, icon: true },
            personal: { text: t.comparison.rows.injuries.personal, icon: true },
            generic: { text: t.comparison.rows.injuries.generic.text, sub: t.comparison.rows.injuries.generic.sub, icon: "warning" }
        },
        {
            feature: t.comparison.rows.flexibility.feature,
            zintra: { text: t.comparison.rows.flexibility.zintra, icon: true },
            personal: { text: t.comparison.rows.flexibility.personal, icon: "warning" },
            generic: { text: t.comparison.rows.flexibility.generic.text, sub: t.comparison.rows.flexibility.generic.sub, icon: false }
        },
        {
            feature: t.comparison.rows.evolution.feature,
            zintra: { text: t.comparison.rows.evolution.zintra, icon: true },
            personal: { text: t.comparison.rows.evolution.personal, icon: "warning" },
            generic: { text: t.comparison.rows.evolution.generic, icon: false }
        },
        {
            feature: t.comparison.rows.scanner.feature,
            zintra: { text: t.comparison.rows.scanner.zintra, icon: true },
            personal: { text: t.comparison.rows.scanner.personal, icon: false },
            generic: { text: t.comparison.rows.scanner.generic, icon: false }
        }
    ];

    const renderIcon = (type: boolean | "warning") => {
        if (type === true) return <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"><Check className="w-5 h-5 text-primary" /></div>;
        if (type === "warning") return <AlertTriangle className="w-5 h-5 text-yellow-500 inline-block" />;
        return <X className="w-5 h-5 text-gray-600 inline-block" />;
    };

    return (
        <section className="py-32 px-6 relative overflow-visible">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="text-display text-4xl md:text-5xl font-bold mb-6">
                        {t.comparison.title.start}<span className="text-primary">{t.comparison.title.highlight}</span>
                    </h2>
                    <p className="text-lg text-gray-400 mb-8 font-light">
                        {t.comparison.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="overflow-x-auto pb-4 px-2 pt-12"
                >
                    <table className="w-full border-separate border-spacing-0 min-w-[800px]">
                        <thead>
                            <tr>
                                <th className="p-6 text-left text-gray-400 font-medium w-1/4 uppercase tracking-widest text-xs">Features</th>
                                <th className="p-6 text-center w-1/4 relative">
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary shadow-[0_0_15px_var(--color-primary)]" />
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-black text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-[0_0_15px_rgba(212,255,0,0.5)]">
                                        {t.comparison.headers.recommended}
                                    </div>
                                    <span className="text-xl font-bold text-white font-display tracking-tight">{t.comparison.headers.zintra}</span>
                                </th>
                                <th className="p-6 text-center text-gray-500 font-medium w-1/4">{t.comparison.headers.personal}</th>
                                <th className="p-6 text-center text-gray-500 font-medium w-1/4">{t.comparison.headers.generic}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, i) => (
                                <tr key={i} className="group">
                                    <td className="p-6 text-gray-300 font-medium border-b border-white/5 group-hover:bg-white/5 transition-colors">{row.feature}</td>

                                    {/* Zintra Column */}
                                    <td className="p-6 text-center font-bold text-white bg-white/[0.03] border-x border-b border-white/10 relative group-hover:bg-white/[0.06] transition-colors">
                                        {i === comparisonData.length - 1 && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary/30" />}
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex items-center gap-3">
                                                {renderIcon(row.zintra.icon)}
                                                <span className="font-display tracking-tight">{row.zintra.text}</span>
                                            </div>
                                            {row.zintra.sub && (
                                                <span className="text-xs text-primary font-normal mt-2 uppercase tracking-wide opacity-80">{row.zintra.sub}</span>
                                            )}
                                        </div>
                                    </td>

                                    {/* Personal Column */}
                                    <td className="p-6 text-center text-gray-400 border-b border-white/5 group-hover:bg-white/5 transition-colors">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex items-center gap-2">
                                                {renderIcon(row.personal.icon)}
                                                <span>{row.personal.text}</span>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Generic Column */}
                                    <td className="p-6 text-center text-gray-500 border-b border-white/5 group-hover:bg-white/5 transition-colors">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex items-center gap-2">
                                                {renderIcon(row.generic.icon)}
                                                <span>{row.generic.text}</span>
                                            </div>
                                            {row.generic.sub && (
                                                <span className="text-xs text-gray-600 mt-2 block">{row.generic.sub}</span>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                <div className="mt-16 text-center relative z-20">
                    <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                        {t.offer.button}
                    </Button>
                </div>

            </div>
        </section>
    );
};
