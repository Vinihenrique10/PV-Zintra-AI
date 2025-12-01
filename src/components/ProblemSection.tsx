import { motion } from 'framer-motion';

export const ProblemSection = () => {
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
                        Por que dietas de internet <span className="text-red-500">falham</span> com você?
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed mb-6">
                        Porque elas não conhecem você. Apps comuns e PDFs de internet tratam todo mundo como uma estatística. Eles ignoram que você tem dores no joelho, que odeia brócolis ou que seu metabolismo é diferente.
                    </p>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        <span className="text-white font-semibold">A Solução Zintra:</span> Nós não "chutamos" números. Nossa Inteligência Artificial analisa dezenas de variáveis do seu perfil para criar o caminho mais curto e eficiente entre você e seu objetivo.
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
