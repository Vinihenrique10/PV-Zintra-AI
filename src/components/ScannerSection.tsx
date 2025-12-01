import { motion } from 'framer-motion';
import scannerMockup from '../assets/scanner-mockup.png';

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
                        Scanner IA: A <span className="text-primary">Liberdade</span> de Comer Fora
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Não fique refém da marmita. Aponte a câmera para qualquer prato e nossa IA diz se ele cabe no seu plano. Personalização é ter liberdade com controle.
                    </p>
                </motion.div>

                {/* Scanner Visual */}
                <div className="relative w-full max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                    <img
                        src={scannerMockup}
                        alt="Scanner de Alimentos Zintra AI"
                        className="w-full h-auto"
                    />

                    {/* Glow behind */}
                    <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full opacity-50" />
                </div>
            </div>
        </section>
    );
};
