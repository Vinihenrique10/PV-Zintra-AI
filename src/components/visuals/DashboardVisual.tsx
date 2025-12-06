import { motion } from 'framer-motion';
import { TrendingUp, Target, ChevronRight, Trophy, Flame } from 'lucide-react';

export const DashboardVisual = () => {
    return (
        <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden ring-1 ring-white/10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-20" />

            {/* Screen Content */}
            <div className="w-full h-full bg-[#0B0F19] flex flex-col relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-green-500/10 blur-[80px] pointer-events-none" />

                {/* Header */}
                <div className="pt-12 px-5 pb-6">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-white font-bold text-lg leading-tight">My Goals</h3>
                            <p className="text-green-400 text-sm font-medium">Focus: Weight Loss</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <div className="w-4 h-4 rounded-full bg-green-500" />
                        </div>
                    </div>

                    {/* Weight Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 mb-4 relative overflow-hidden"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Current Weight</div>
                                <div className="text-3xl font-bold text-white">159.5 <span className="text-sm text-gray-500 font-normal">lbs</span></div>
                            </div>
                            <div className="flex items-center gap-1 text-green-400 text-xs font-medium bg-green-500/10 px-2 py-1 rounded-full">
                                <TrendingUp className="w-3 h-3" />
                                -1.2kg
                            </div>
                        </div>

                        {/* Fake Graph */}
                        <div className="h-16 flex items-end justify-between gap-1">
                            {[40, 60, 55, 70, 65, 80, 75].map((h, i) => (
                                <div key={i} className="w-full bg-green-500/20 rounded-t-sm relative group">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="absolute bottom-0 left-0 right-0 bg-green-500 rounded-t-sm opacity-50 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-mono">
                            <span>Mon</span>
                            <span>Sun</span>
                        </div>
                    </motion.div>

                    {/* Streak Card */}
                    <div className="grid grid-cols-2 gap-3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10"
                        >
                            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500 mb-3">
                                <Flame className="w-4 h-4 fill-current" />
                            </div>
                            <div className="text-2xl font-bold text-white">12</div>
                            <div className="text-xs text-gray-400">Day Streak</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10"
                        >
                            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 mb-3">
                                <Target className="w-4 h-4" />
                            </div>
                            <div className="text-2xl font-bold text-white">85%</div>
                            <div className="text-xs text-gray-400">Adherence</div>
                        </motion.div>
                    </div>
                </div>

                {/* Next Milestone */}
                <div className="mt-auto px-5 pb-8">
                    <div className="text-xs text-gray-400 mb-3 uppercase tracking-wider">Next Milestone</div>
                    <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-4 border border-white/10 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black shadow-lg shadow-orange-500/20">
                            <Trophy className="w-5 h-5 fill-current" />
                        </div>
                        <div>
                            <div className="text-white font-bold text-sm">Lose 10lbs</div>
                            <div className="text-xs text-gray-400">1.8lbs to go</div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-500 ml-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};
