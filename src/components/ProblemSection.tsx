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
                        Por que apps genéricos <span className="text-red-500">falham</span> com você?
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        A maioria dos apps te trata como uma estatística. Eles ignoram que você tem dores no joelho, ignoram que você odeia brócolis ou que só tem 30 minutos para treinar. O Zintra não "chuta" números. Ele <span className="text-white font-semibold">calcula</span>.
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
