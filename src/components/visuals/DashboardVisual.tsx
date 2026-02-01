import { motion } from 'framer-motion';
import { Target, Trophy, Flame, ChevronRight, Activity, Droplets } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const DashboardVisual = () => {
    const { t } = useLanguage();

    return (
        <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-[#050505] rounded-[2.5rem] border-[6px] border-[#1a1a1a] shadow-2xl overflow-hidden ring-1 ring-white/5 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 font-sans group">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-20" />

            {/* Screen Content */}
            <div className="w-full h-full bg-[#050505] flex flex-col relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-full h-1/2 bg-primary/5 blur-[80px] pointer-events-none" />

                {/* Header */}
                <div className="pt-12 px-5 pb-6">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-white font-bold text-lg leading-tight tracking-tight">{t.features.dashboard.visual.title}</h3>
                            <p className="text-primary text-sm font-medium tracking-wide">{t.features.dashboard.visual.focus}</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                            <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />
                        </div>
                    </div>

                    {/* Main Stats Graph */}
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/5 mb-4 relative overflow-hidden">
                        <div className="flex justify-between items-end mb-4">
                            <div>
                                <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">{t.features.dashboard.visual.weightTitle}</span>
                                <div className="text-3xl font-bold text-white tracking-tight">78.4 <span className="text-sm font-normal text-gray-500">kg</span></div>
                            </div>
                            <div className="text-black text-xs font-bold bg-primary px-2 py-1 rounded-sm shadow-[0_0_10px_rgba(212,255,0,0.3)]">
                                -1.2kg
                            </div>
                        </div>

                        {/* Graph Representation */}
                        <div className="h-16 flex items-end justify-between gap-1">
                            {[40, 65, 55, 80, 60, 90, 75].map((h, i) => (
                                <div key={i} className="w-full bg-white/5 rounded-t-[2px] relative group overflow-hidden">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`absolute bottom-0 w-full rounded-t-[2px] ${i === 5 ? 'bg-primary shadow-[0_0_10px_var(--color-primary)]' : 'bg-white/20'}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="w-8 h-8 rounded-md bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-orange-500 mb-2">
                                <Flame className="w-4 h-4" />
                            </div>
                            <div className="text-xl font-bold text-white tracking-tight">12</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest">{t.features.dashboard.visual.streak}</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="w-8 h-8 rounded-md bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-primary mb-2">
                                <Target className="w-4 h-4" />
                            </div>
                            <div className="text-xl font-bold text-white tracking-tight">94%</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest">{t.features.dashboard.visual.adherence}</div>
                        </div>
                    </div>

                    {/* Next Milestone */}
                    <div className="bg-gradient-to-r from-[#1a1a1a] to-[#111] border border-white/5 rounded-xl p-4 relative overflow-hidden group hover:border-primary/30 transition-colors">
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2 text-primary text-xs font-bold uppercase tracking-wider">
                                <Trophy className="w-3 h-3 text-primary" />
                                {t.features.dashboard.visual.milestoneTitle}
                            </div>
                            <div className="text-white font-bold text-lg mb-0.5 tracking-tight">{t.features.dashboard.visual.milestoneName}</div>
                            <div className="text-gray-500 text-xs">{t.features.dashboard.visual.milestoneSub}</div>
                        </div>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />

                        {/* Decorative Circles */}
                        <div className="absolute -right-4 -top-12 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                    </div>
                </div>

                {/* Bottom Nav */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#050505]/90 backdrop-blur-lg border-t border-white/5 flex justify-around items-center px-6 z-10">
                    <div className="flex flex-col items-center gap-1 text-primary">
                        <Activity className="w-5 h-5 shadow-[0_0_15px_var(--color-primary)]" />
                        <div className="w-1 h-1 rounded-full bg-primary mt-1" />
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                        <Flame className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                        <Droplets className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};
