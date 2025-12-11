import { motion } from 'framer-motion';
import { ScannerVisual } from './visuals/ScannerVisual';

export const ScannerSection = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-black/50">
            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        AI Scanner: The <span className="text-primary">Freedom</span> to Eat Out
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Don't be a prisoner to meal prep. Point your camera at any dish and our AI tells you if it fits your plan. Personalization means having freedom with control.
                    </p>
                </motion.div>

                {/* Scanner Visual */}
                <div className="relative w-full max-w-md mx-auto">
                    <ScannerVisual />

                    {/* Glow behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-3xl -z-10 rounded-full opacity-50 pointer-events-none" />
                </div>
            </div>
        </section>
    );
};
