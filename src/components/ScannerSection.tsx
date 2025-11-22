import { motion } from 'framer-motion';

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
                        Vai comer fora? <span className="text-primary">A gente te ajuda.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Tire uma foto do seu prato e saiba se está exagerando. Controle as calorias de forma visual e simples, sem contas complicadas.
                    </p>
                </motion.div>

                {/* Scanner Visual */}
                <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                    {/* Fake Camera View */}
                    <div className="absolute inset-0 bg-gray-900">
                        {/* Placeholder for camera feed - gradient */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black opacity-50" />

                        {/* Scanning Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 border-2 border-primary/50 rounded-lg relative">
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary -mt-1 -ml-1" />
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary -mt-1 -mr-1" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary -mb-1 -ml-1" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary -mb-1 -mr-1" />

                                {/* Scan Line */}
                                <motion.div
                                    animate={{ top: ['0%', '100%', '0%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-0.5 bg-primary shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                                />
                            </div>
                        </div>

                        {/* Detected Tags */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute top-1/3 left-1/2 translate-x-4 bg-black/60 backdrop-blur-md border border-primary/30 px-3 py-1 rounded-full flex items-center gap-2"
                        >
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-xs font-mono text-primary">Frango Grelhado (150g)</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-1/3 right-1/3 bg-black/60 backdrop-blur-md border border-primary/30 px-3 py-1 rounded-full flex items-center gap-2"
                        >
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-xs font-mono text-primary">Salada (80g)</span>
                        </motion.div>
                    </div>

                    {/* Camera UI */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="flex justify-center">
                            <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
                                <div className="w-14 h-14 rounded-full bg-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
