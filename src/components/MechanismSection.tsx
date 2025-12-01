import { motion } from 'framer-motion';
import { User, Target, Zap } from 'lucide-react';

const steps = [
    {
        icon: User,
        title: "Entendemos quem você é",
        description: "Não pedimos apenas peso e altura. Analisamos sua rotina, nível de estresse, experiência de treino e preferências alimentares."
    },
    {
        icon: Target,
        title: "Definimos seu Objetivo",
        description: "Quer secar 10kg? Quer ganhar massa muscular nas pernas? Quer apenas saúde? O algoritmo ajusta as calorias e a intensidade do treino para a sua meta específica."
    },
    {
        icon: Zap,
        title: "O Plano Ganha Vida",
        description: "Geramos um protocolo único. Se você mudar de ideia ou de rotina, o plano muda com você."
    }
];

export const MechanismSection = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-black/30">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Como Criamos o <span className="text-primary">Plano Perfeito</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        O Zintra se adapta a QUALQUER objetivo.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                        >
                            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <step.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
