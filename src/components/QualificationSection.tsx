import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const qualifications = [
    "Want to lose weight, but won't give up eating delicious food.",
    "Have a busy routine and little time to plan meals.",
    "Are afraid of getting injured with generic internet workouts.",
    "Have tried everything and need organization and consistency."
];

export const QualificationSection = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative gradient inside card */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="text-center mb-12 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Who is <span className="text-primary">Zintra</span> For?
                        </h2>
                        <p className="text-xl text-gray-400">
                            This app was made for you if you:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 relative z-10">
                        {qualifications.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                <div className="mt-1 bg-primary/20 p-1 rounded-full">
                                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                                </div>
                                <p className="text-lg text-gray-200 font-medium text-left">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
