import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Check, X, AlertTriangle } from 'lucide-react';

type ComparisonRow = {
    feature: string;
    zintra: { text: string; sub?: string; icon: boolean | "warning" };
    personal: { text: string; icon: boolean | "warning" };
    generic: { text: string; sub?: string; icon: boolean | "warning" };
};

const comparisonData: ComparisonRow[] = [
    {
        feature: "Investimento Mensal",
        zintra: { text: "R$ 59,90", sub: "(Acessível)", icon: true },
        personal: { text: "R$ 600,00+", icon: false },
        generic: { text: "R$ 29,90", icon: false }
    },
    {
        feature: "Considera suas Dores/Lesões?",
        zintra: { text: "Sim", sub: "(Proteção Automática)", icon: true },
        personal: { text: "Sim", icon: true },
        generic: { text: "Não", sub: "(Perigoso)", icon: "warning" }
    },
    {
        feature: "Flexibilidade na Dieta",
        zintra: { text: "Troca alimentos na hora", icon: true },
        personal: { text: "Depende de resposta", icon: "warning" },
        generic: { text: "PDF Fixo", sub: "(Enjoativo)", icon: false }
    },
    {
        feature: "Ajuste de Rota (Evolução)",
        zintra: { text: "Quinzenal ou Semanal", icon: true },
        personal: { text: "Mensal", icon: "warning" },
        generic: { text: "Nunca", icon: false }
    },
    {
        feature: "Scanner de Prato (Foto)",
        zintra: { text: "Sim (IA Inclusa)", icon: true },
        personal: { text: "Não", icon: false },
        generic: { text: "Não", icon: false }
    }
];

export const ComparisonTable = () => {
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
                        Muito mais que um app. <span className="text-primary">Muito mais barato que um Personal.</span>
                    </h2>
                    <p className="text-lg text-gray-400 mb-8">
                        Você não precisa pagar uma fortuna para emagrecer, nem arriscar sua coluna com treinos genéricos.
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
                                        RECOMENDADO
                                    </div>
                                    <span className="text-xl font-bold text-white">Zintra AI</span>
                                </th>
                                <th className="p-4 md:p-6 text-center text-gray-400 font-medium w-1/4">Personal + Nutri Presencial</th>
                                <th className="p-4 md:p-6 text-center text-gray-400 font-medium w-1/4">Apps Genéricos / YouTube</th>
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
