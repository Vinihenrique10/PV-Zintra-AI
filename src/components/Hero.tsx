import { motion } from 'framer-motion';
import { Button } from './ui/MagneticButton';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-[1.1]"
                >
                    A precisão de um <span className="text-primary">Nutricionista</span> e a estratégia de um <span className="text-primary">Personal Trainer</span>. No seu bolso, 24h por dia.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl"
                >
                    Pare de tentar adivinhar o que comer ou como treinar. O Zintra AI usa protocolos baseados em fisiologia real para criar o plano perfeito para o seu corpo, suas lesões e sua rotina.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Button size="lg" className="mb-20">
                        Quero Emagrecer com Saúde
                    </Button>
                </motion.div>

                {/* Floating Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="relative w-full max-w-[300px] md:max-w-[350px] aspect-[9/19] mx-auto"
                >
                    <div className="animate-float relative z-10">
                        {/* iPhone Mockup Frame */}
                        <div className="relative w-full h-full bg-[#0B0F19] rounded-[3rem] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-[#1a1a1a] rounded-b-2xl z-20" />

                            {/* Screen Content */}
                            <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black p-6 pt-12 flex flex-col">
                                {/* Header */}
                                <div className="flex justify-between items-center mb-8">
                                    <div className="w-8 h-8 rounded-full bg-gray-800" />
                                    <div className="text-sm font-medium text-gray-400">Hoje</div>
                                    <div className="w-8 h-8 rounded-full bg-gray-800" />
                                </div>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                                        <div className="text-xs text-gray-400 mb-1">Proteína</div>
                                        <div className="text-xl font-bold text-primary">140g</div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                                        <div className="text-xs text-gray-400 mb-1">Calorias</div>
                                        <div className="text-xl font-bold text-white">2100</div>
                                    </div>
                                </div>

                                {/* Activity Graph */}
                                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex-1 mb-4 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                                    <div className="flex items-end justify-between h-full gap-2 px-2 pb-2">
                                        {[40, 70, 50, 90, 60, 80, 50].map((h, i) => (
                                            <div key={i} className="w-full bg-primary/50 rounded-t-sm" style={{ height: `${h}%` }} />
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Nav */}
                                <div className="h-16 bg-[#1a1a1a]/50 backdrop-blur-md absolute bottom-0 left-0 right-0 flex justify-around items-center px-6">
                                    <div className="w-6 h-6 bg-primary rounded-full" />
                                    <div className="w-6 h-6 bg-gray-700 rounded-full" />
                                    <div className="w-6 h-6 bg-gray-700 rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Glow behind phone */}
                        <div className="absolute -inset-4 bg-primary/30 blur-3xl -z-10 rounded-full opacity-50" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
