import { motion } from 'framer-motion';
import { Egg, Wheat, Drumstick, Utensils, RefreshCw, Flame, Droplets } from 'lucide-react';

export const MealPlanVisual = () => {
    return (
        <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden ring-1 ring-white/10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-20" />

            {/* Screen Content */}
            <div className="w-full h-full bg-[#0B0F19] flex flex-col relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/10 blur-[80px] pointer-events-none" />

                {/* Header */}
                <div className="pt-12 px-5 pb-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-white font-bold text-lg leading-tight">Meal Plan</h3>
                            <p className="text-primary text-sm font-medium">Lean Gain</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <div className="w-4 h-4 rounded-full bg-primary" />
                        </div>
                    </div>

                    {/* Daily Summary Bar */}
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 border border-white/10 flex justify-between items-center text-[10px] text-gray-400">
                        <div className="flex flex-col items-center">
                            <span className="text-white font-bold text-xs">250g</span>
                            <span>Carbs</span>
                        </div>
                        <div className="w-px h-6 bg-white/10" />
                        <div className="flex flex-col items-center">
                            <span className="text-primary font-bold text-xs">180g</span>
                            <span>Prot</span>
                        </div>
                        <div className="w-px h-6 bg-white/10" />
                        <div className="flex flex-col items-center">
                            <span className="text-white font-bold text-xs">70g</span>
                            <span>Fat</span>
                        </div>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-4 space-y-4 pb-20 no-scrollbar">
                    {/* Card 1: Breakfast */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-3 opacity-50 group-hover:opacity-100 transition-opacity">
                            <RefreshCw className="w-4 h-4 text-primary" />
                        </div>

                        <div className="flex items-center gap-2 mb-3 text-xs text-gray-400 font-medium uppercase tracking-wider">
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                            Breakfast
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex -space-x-2">
                                <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-[#0B0F19] flex items-center justify-center text-yellow-500">
                                    <Egg className="w-5 h-5" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-[#0B0F19] flex items-center justify-center text-amber-200">
                                    <Wheat className="w-5 h-5" />
                                </div>
                            </div>
                            <div>
                                <div className="text-white font-medium text-sm">3 Whole Eggs</div>
                                <div className="text-gray-400 text-xs">+ 50g Oatmeal</div>
                            </div>
                        </div>

                        <div className="flex gap-3 text-[10px] font-mono text-gray-500 bg-black/20 p-2 rounded-lg">
                            <span>P: <span className="text-gray-300">24g</span></span>
                            <span>C: <span className="text-gray-300">30g</span></span>
                            <span>G: <span className="text-gray-300">15g</span></span>
                        </div>
                    </motion.div>

                    {/* Card 2: Lunch */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-3 opacity-50 group-hover:opacity-100 transition-opacity">
                            <RefreshCw className="w-4 h-4 text-primary" />
                        </div>

                        <div className="flex items-center gap-2 mb-3 text-xs text-gray-400 font-medium uppercase tracking-wider">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            Lunch
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex -space-x-2">
                                <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-[#0B0F19] flex items-center justify-center text-orange-300">
                                    <Drumstick className="w-5 h-5" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-[#0B0F19] flex items-center justify-center text-white">
                                    <Utensils className="w-5 h-5" />
                                </div>
                            </div>
                            <div>
                                <div className="text-white font-medium text-sm">150g Chicken Breast</div>
                                <div className="text-gray-400 text-xs">+ 200g White Rice</div>
                            </div>
                        </div>

                        <div className="flex gap-3 text-[10px] font-mono text-gray-500 bg-black/20 p-2 rounded-lg">
                            <span>P: <span className="text-gray-300">45g</span></span>
                            <span>C: <span className="text-gray-300">56g</span></span>
                            <span>G: <span className="text-gray-300">5g</span></span>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Nav */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0B0F19]/80 backdrop-blur-lg border-t border-white/5 flex justify-around items-center px-6 z-10">
                    <div className="flex flex-col items-center gap-1 opacity-50">
                        <Flame className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col items-center gap-1 text-primary">
                        <Utensils className="w-5 h-5" />
                        <div className="w-1 h-1 rounded-full bg-primary" />
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-50">
                        <Droplets className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};
