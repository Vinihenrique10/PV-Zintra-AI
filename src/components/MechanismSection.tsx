import { motion } from 'framer-motion';
import { User, Target, Zap } from 'lucide-react';

const steps = [
    {
        icon: User,
        title: "We Understand Who You Are",
        description: "We don't just ask for weight and height. We analyze your routine, stress level, training experience, and food preferences."
    },
    {
        icon: Target,
        title: "We Define Your Goal",
        description: "Want to lose 20lbs? Want to build leg muscle? Just want better health? The algorithm adjusts calories and training intensity for your specific goal."
    },
    {
        icon: Zap,
        title: "The Plan Comes to Life",
        description: "We generate a unique protocol. If you change your mind or routine, the plan changes with you."
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
                        How We Create the <span className="text-primary">Perfect Plan</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Zintra adapts to ANY goal.
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
