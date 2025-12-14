
import { motion } from 'framer-motion';
import { Dumbbell, ShieldCheck, Timer, Repeat, Play, Flame, Activity, Droplets } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const WorkoutVisual = () => {
    const { t } = useLanguage();

    return (
        <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden ring-1 ring-white/10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-20" />

            {/* Screen Content */}
            <div className="w-full h-full bg-[#0B0F19] flex flex-col relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-500/10 blur-[80px] pointer-events-none" />

                {/* Header */}
                <div className="pt-12 px-5 pb-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-white font-bold text-lg leading-tight">{t.features.workout.visual.title}</h3>
                                <div className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold border border-blue-500/20">
                                    HYPERTROPHY
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm">{t.features.workout.visual.focus}</p>
                        </div>
                    </div>

                    {/* Protection Status */}
                    <div className="bg-green-500/10 backdrop-blur-md rounded-xl p-3 border border-green-500/20 flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                            <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                            <div className="text-green-500 font-bold text-xs">{t.features.workout.visual.protection}</div>
                            <div className="text-green-500/60 text-[10px]">No high impact exercises</div>
                        </div>
                    </div>
                </div>

                {/* Workout List */}
                <div className="flex-1 overflow-y-auto px-4 space-y-3 pb-20 no-scrollbar">
                    {/* Exercise 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-blue-500/30 relative overflow-hidden"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white">
                                    <Dumbbell className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm">{t.features.workout.visual.exercise1}</div>
                                    <div className="text-blue-400 text-xs font-medium">{t.features.workout.visual.reps1}</div>
                                </div>
                            </div>
                            <button className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center hover:scale-105 transition-transform">
                                <Play className="w-3.5 h-3.5 fill-current" />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-black/20 rounded-lg p-2 flex items-center gap-2">
                                <Dumbbell className="w-3 h-3 text-gray-400" />
                                <div className="text-xs">
                                    <span className="text-gray-400">{t.features.workout.visual.weight}:</span> <span className="text-white">60kg</span>
                                </div>
                            </div>
                            <div className="bg-black/20 rounded-lg p-2 flex items-center gap-2">
                                <Timer className="w-3 h-3 text-gray-400" />
                                <div className="text-xs">
                                    <span className="text-gray-400">{t.features.workout.visual.rest}:</span> <span className="text-white">90s</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Exercise 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/5 opacity-60"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-500">
                                <Repeat className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm">{t.features.workout.visual.exercise2}</div>
                                <div className="text-gray-400 text-xs font-medium">{t.features.workout.visual.reps2}</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Exercise 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/5 opacity-60"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-500">
                                <Repeat className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm">{t.features.workout.visual.exercise3}</div>
                                <div className="text-gray-400 text-xs font-medium">{t.features.workout.visual.reps3}</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Nav */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0B0F19]/80 backdrop-blur-lg border-t border-white/5 flex justify-around items-center px-6 z-10">
                    <div className="flex flex-col items-center gap-1 opacity-50">
                        <Flame className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col items-center gap-1 text-blue-500">
                        <Activity className="w-5 h-5" />
                        <div className="w-1 h-1 rounded-full bg-blue-500" />
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-50">
                        <Droplets className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};
