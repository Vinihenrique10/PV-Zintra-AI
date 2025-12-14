import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Check, X, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
        if (type === true) return <Check className="w-5 h-5 text-green-500 inline-block mr-2" />;
        if (type === "warning") return <AlertTriangle className="w-5 h-5 text-yellow-500 inline-block mr-2" />;
        return <X className="w-5 h-5 text-red-500 inline-block mr-2" />;
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        {t.comparison.title.start}<span className="text-primary">{t.comparison.title.highlight}</span>
                    </h2>
                    <p className="text-lg text-gray-400 mb-8">
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
                    <table className="w-full border-collapse min-w-[800px]">
                        <thead>
                            <tr>
                                <th className="p-4 md:p-6 text-left text-gray-400 font-medium w-1/4"></th>
                                <th className="p-4 md:p-6 text-center bg-primary/10 rounded-t-2xl border-t border-x border-primary/20 w-1/4 relative shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-primary/50">
                                        {t.comparison.headers.recommended}
                                    </div>
                                    <span className="text-xl font-bold text-white">{t.comparison.headers.zintra}</span>
                                </th>
                                <th className="p-4 md:p-6 text-center text-gray-400 font-medium w-1/4">{t.comparison.headers.personal}</th>
                                <th className="p-4 md:p-6 text-center text-gray-400 font-medium w-1/4">{t.comparison.headers.generic}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, i) => (
                                <tr key={i} className="border-b border-white/5 last:border-0">
                                    <td className="p-4 md:p-6 text-gray-300 font-medium">{row.feature}</td>

                                    {/* Zintra Column */}
                                    <td className={clsx(
                                        "p-4 md:p-6 text-center font-bold text-white bg-primary/5 border-x border-primary/10 relative",
                                        i === comparisonData.length - 1 ? "rounded-b-2xl border-b" : ""
                                    )}>
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex items-center">
                                                {renderIcon(row.zintra.icon)}
                                                <span>{row.zintra.text}</span>
                                            </div>
                                            {row.zintra.sub && (
                                                <span className="text-xs text-primary/80 font-normal mt-1">{row.zintra.sub}</span>
                                            )}
                                        </div>
                                    </td>

                                    {/* Personal Column */}
                                    <td className="p-4 md:p-6 text-center text-gray-400">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex items-center">
                                                {renderIcon(row.personal.icon)}
                                                <span>{row.personal.text}</span>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Generic Column */}
                                    <td className="p-4 md:p-6 text-center text-gray-500">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex items-center">
                                                {renderIcon(row.generic.icon)}
                                                <span>{row.generic.text}</span>
                                            </div>
                                            {row.generic.sub && (
                                                <span className="text-xs text-gray-600 mt-1">{row.generic.sub}</span>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
};
