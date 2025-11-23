import { motion } from 'framer-motion';
import { Scan, Zap } from 'lucide-react';

export const ScannerVisual = () => {
    return (
        <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-20" />

            {/* Screen Content */}
            <div className="w-full h-full bg-gray-900 flex flex-col relative overflow-hidden">
                {/* Camera Feed Simulation (Gradient/Abstract) */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                    {/* Abstract shapes to simulate food/plate */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-32 h-32 bg-green-500/10 rounded-full blur-2xl" />
                </div>

                {/* UI Overlay */}
                <div className="relative z-10 w-full h-full flex flex-col">
                    {/* Header */}
                    <div className="pt-12 px-4 flex justify-center items-center">
                        <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/10">
                            <Scan className="w-4 h-4 text-blue-400 animate-pulse" />
                            <span className="text-xs font-medium text-white">Analisando Refeição...</span>
                        </div>
                    </div>

                    {/* Bounding Boxes & Tags */}
                    <div className="flex-1 relative">
                        {/* Salmon Tag */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute top-1/4 left-8"
                        >
                            <div className="w-32 h-24 border-2 border-blue-500/50 rounded-lg relative shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                <div className="absolute -top-3 -left-3 w-2 h-2 bg-blue-500 rounded-full" />
                                <div className="absolute -top-3 -right-3 w-2 h-2 bg-blue-500 rounded-full" />
                                <div className="absolute -bottom-3 -left-3 w-2 h-2 bg-blue-500 rounded-full" />
                                <div className="absolute -bottom-3 -right-3 w-2 h-2 bg-blue-500 rounded-full" />

                                {/* Label */}
                                <div className="absolute -right-24 top-0 bg-black/60 backdrop-blur-md border border-blue-500/30 p-2 rounded-lg">
                                    <div className="text-[10px] font-bold text-blue-400">Salmão Grelhado</div>
                                    <div className="text-[10px] text-white">150g • 310 kcal</div>
                                </div>
                                <div className="absolute right-0 top-4 w-8 h-px bg-blue-500/50" />
                            </div>
                        </motion.div>

                        {/* Salad Tag */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-1/3 right-8"
                        >
                            <div className="w-28 h-20 border-2 border-blue-500/50 rounded-lg relative shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                <div className="absolute -top-3 -left-3 w-2 h-2 bg-blue-500 rounded-full" />
                                <div className="absolute -top-3 -right-3 w-2 h-2 bg-blue-500 rounded-full" />
                                <div className="absolute -bottom-3 -left-3 w-2 h-2 bg-blue-500 rounded-full" />
                                <div className="absolute -bottom-3 -right-3 w-2 h-2 bg-blue-500 rounded-full" />

                                {/* Label */}
                                <div className="absolute -left-24 bottom-0 bg-black/60 backdrop-blur-md border border-blue-500/30 p-2 rounded-lg text-right">
                                    <div className="text-[10px] font-bold text-blue-400">Salada Quinoa</div>
                                    <div className="text-[10px] text-white">120g • 180 kcal</div>
                                </div>
                                <div className="absolute left-0 bottom-4 w-8 h-px bg-blue-500/50" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Shutter */}
                    <div className="pb-8 pt-4 px-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                            <Zap className="w-5 h-5 text-white" />
                        </div>

                        <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            <div className="w-14 h-14 rounded-full bg-white transition-transform active:scale-90" />
                        </div>

                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                            <div className="w-8 h-8 rounded-md bg-gray-500/50 border border-white/20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
