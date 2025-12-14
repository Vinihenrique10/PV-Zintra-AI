import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const ProblemSection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        {t.problem.title.start}<span className="text-red-500">{t.problem.title.highlight}</span>{t.problem.title.end}
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed mb-6">
                        {t.problem.description1}
                    </p>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        <span className="text-white font-semibold">{t.problem.solutionBadge}</span>{t.problem.description2}
                    </p>
                </motion.div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
            </div>
        </section>
    );
};
