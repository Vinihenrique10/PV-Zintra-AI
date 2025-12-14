import { motion } from 'framer-motion';
import { Target, Trophy, Flame, ChevronRight, Activity, Droplets } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const DashboardVisual = () => {
    const { t } = useLanguage();

    return (
        <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden ring-1 ring-white/10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-20" />

            {/* Screen Content */}
            <div className="w-full h-full bg-[#0B0F19] flex flex-col relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-full h-1/2 bg-blue-600/10 blur-[80px] pointer-events-none" />

                {/* Header */}
                <div className="pt-12 px-5 pb-6">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-white font-bold text-lg leading-tight">{t.features.dashboard.visual.title}</h3>
                            <p className="text-blue-500 text-sm font-medium">{t.features.dashboard.visual.focus}</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <div className="w-4 h-4 rounded-full bg-blue-500" />
                        </div>
                    </div>

                    {/* Main Stats Graph */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 mb-4 relative overflow-hidden">
                        <div className="flex justify-between items-end mb-4">
                            <div>
                                <span className="text-gray-400 text-xs">{t.features.dashboard.visual.weightTitle}</span>
                                <div className="text-2xl font-bold text-white">78.4 <span className="text-sm font-normal text-gray-500">kg</span></div>
                            </div>
                            <div className="text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded-full">
                                -1.2kg
                            </div>
                        </div>

                        {/* Graph Representation */}
                        <div className="h-16 flex items-end justify-between gap-1">
                            {[40, 65, 55, 80, 60, 90, 75].map((h, i) => (
                                <div key={i} className="w-full bg-blue-500/20 rounded-t-sm relative group">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`absolute bottom-0 w-full rounded-t-sm ${i === 5 ? 'bg-blue-500' : 'bg-blue-500/40'}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10">
                            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500 mb-2">
                                <Flame className="w-4 h-4" />
                            </div>
                            <div className="text-xl font-bold text-white">12</div>
                            <div className="text-[10px] text-gray-400">{t.features.dashboard.visual.streak}</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10">
                            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500 mb-2">
                                <Target className="w-4 h-4" />
                            </div>
                            <div className="text-xl font-bold text-white">94%</div>
                            <div className="text-[10px] text-gray-400">{t.features.dashboard.visual.adherence}</div>
                        </div>
                    </div>

                    {/* Next Milestone */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2 text-white/80 text-xs font-medium">
                                <Trophy className="w-3 h-3 text-yellow-300" />
                                {t.features.dashboard.visual.milestoneTitle}
                            </div>
                            <div className="text-white font-bold text-lg mb-0.5">{t.features.dashboard.visual.milestoneName}</div>
                            <div className="text-white/60 text-xs">{t.features.dashboard.visual.milestoneSub}</div>
                        </div>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />

                        {/* Decorative Circles */}
                        <div className="absolute -right-4 -top-12 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                        <div className="absolute -left-4 -bottom-12 w-24 h-24 bg-black/20 rounded-full blur-2xl" />
                    </div>
                </div>

                {/* Bottom Nav */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0B0F19]/80 backdrop-blur-lg border-t border-white/5 flex justify-around items-center px-6 z-10">
                    <div className="flex flex-col items-center gap-1 text-blue-500">
                        <Activity className="w-5 h-5" />
                        <div className="w-1 h-1 rounded-full bg-blue-500" />
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-50">
                        <Flame className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-50">
                        <Droplets className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};
