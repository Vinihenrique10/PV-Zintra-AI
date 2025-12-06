import { motion } from 'framer-motion';
import { Shield, Dumbbell, Play } from 'lucide-react';

export const WorkoutVisual = () => {
    return (
        <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden ring-1 ring-white/10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-20" />

            {/* Screen Content */}
            <div className="w-full h-full bg-[#0B0F19] flex flex-col relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-full h-1/2 bg-blue-500/10 blur-[80px] pointer-events-none" />

                {/* Header */}
                <div className="pt-12 px-5 pb-6">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-white font-bold text-lg leading-tight">Workout A</h3>
                            <p className="text-blue-400 text-sm font-medium">Lower Body (Quad Focus)</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <div className="w-4 h-4 rounded-full bg-blue-500" />
                        </div>
                    </div>

                    {/* Protection Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-medium">
                        <Shield className="w-3 h-3" />
                        Joint Protection: Active
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-4 space-y-4 pb-24 no-scrollbar">
                    {/* Exercise 1: Active */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-blue-500/5 backdrop-blur-md rounded-2xl p-4 border border-blue-500/20 relative overflow-hidden"
                    >
                        {/* Active Indicator */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />

                        <div className="flex justify-between items-start mb-3 pl-2">
                            <div>
                                <h4 className="text-white font-bold text-sm">Barbell Squat</h4>
                                <span className="text-xs text-gray-400">4 Sets x 10-12 Reps</span>
                            </div>
                            <div className="p-1.5 rounded-lg bg-blue-500 text-white">
                                <Play className="w-3 h-3 fill-current" />
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="pl-2 mb-3">
                            <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                                <span>Set 2 of 4</span>
                                <span className="text-blue-400">50%</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full w-1/2 bg-blue-500 rounded-full" />
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="pl-2 flex gap-3">
                            <div className="bg-black/30 px-2 py-1 rounded-md border border-white/5">
                                <span className="text-[10px] text-gray-500 block">Weight</span>
                                <span className="text-xs font-bold text-white">135lbs</span>
                            </div>
                            <div className="bg-black/30 px-2 py-1 rounded-md border border-white/5">
                                <span className="text-[10px] text-gray-500 block">Rest</span>
                                <span className="text-xs font-bold text-white">90s</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Exercise 2: Next */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 relative overflow-hidden opacity-60"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="text-white font-bold text-sm">Leg Press 45º</h4>
                                <span className="text-xs text-gray-400">3 Sets x 12-15 Reps</span>
                            </div>
                            <div className="p-1.5 rounded-lg bg-white/10 text-gray-400">
                                <Dumbbell className="w-3 h-3" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Exercise 3: Next */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 relative overflow-hidden opacity-60"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="text-white font-bold text-sm">Leg Extension</h4>
                                <span className="text-xs text-gray-400">3 Sets x 15 Reps</span>
                            </div>
                            <div className="p-1.5 rounded-lg bg-white/10 text-gray-400">
                                <Dumbbell className="w-3 h-3" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Timer */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#0B0F19]/90 backdrop-blur-xl border-t border-blue-500/20 flex items-center justify-between px-6 z-10">
                    <div>
                        <div className="text-xs text-gray-400 mb-0.5">Rest</div>
                        <div className="text-2xl font-bold text-white font-mono">00:45</div>
                    </div>

                    <div className="relative w-12 h-12 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                            <path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#1e293b"
                                strokeWidth="3"
                            />
                            <path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#3b82f6"
                                strokeWidth="3"
                                strokeDasharray="75, 100"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
