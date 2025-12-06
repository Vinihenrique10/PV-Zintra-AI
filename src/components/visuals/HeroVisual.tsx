import { TrendingDown, CheckCircle2, Activity, Flame, Droplets, Dumbbell } from 'lucide-react';

export const HeroVisual = () => {
    return (
        <div className="relative mx-auto w-full max-w-[320px] md:max-w-[350px] aspect-[9/19] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden ring-1 ring-white/10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-20" />

            {/* Screen Content */}
            <div className="w-full h-full bg-[#0B0F19] flex flex-col relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-500/10 blur-[80px] pointer-events-none" />

                {/* Header & Graph */}
                <div className="pt-12 px-5 pb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-white font-bold text-lg">Progress</h3>
                        <div className="flex items-center gap-1 text-blue-400 text-xs font-medium bg-blue-500/10 px-2 py-1 rounded-full">
                            <TrendingDown className="w-3 h-3" />
                            -4.2kg
                        </div>
                    </div>

                    {/* Graph Area */}
                    <div className="h-24 w-full bg-gradient-to-b from-blue-500/10 to-transparent rounded-xl border border-blue-500/20 relative overflow-hidden mb-6">
                        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                            <path d="M0 30 Q 20 25, 40 15 T 100 5" fill="none" stroke="#3b82f6" strokeWidth="2" />
                            <path d="M0 30 Q 20 25, 40 15 T 100 5 V 40 H 0 Z" fill="url(#gradient)" opacity="0.3" />
                            <defs>
                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3b82f6" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                        {/* Data Points */}
                        <div className="absolute top-[12%] right-[0%] w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                            <div className="flex items-center gap-2 mb-2 text-gray-400 text-xs">
                                <Dumbbell className="w-3 h-3" />
                                Protein
                            </div>
                            <div className="text-xl font-bold text-white mb-1">140g</div>
                            <div className="text-[10px] text-gray-500 mb-2">Goal: 160g</div>
                            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full w-[87%] bg-blue-500 rounded-full" />
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                            <div className="flex items-center gap-2 mb-2 text-gray-400 text-xs">
                                <Flame className="w-3 h-3" />
                                Calories
                            </div>
                            <div className="text-xl font-bold text-white mb-1">2100</div>
                            <div className="text-[10px] text-gray-500 mb-2">kcal</div>
                            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full w-[70%] bg-orange-500 rounded-full" />
                            </div>
                        </div>
                    </div>

                    {/* Checklist */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm text-white font-medium">Workout B: Done</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm text-white font-medium">Water 3L: Done</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Nav */}
                <div className="mt-auto h-16 bg-[#0B0F19]/80 backdrop-blur-lg border-t border-white/5 flex justify-around items-center px-6">
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
