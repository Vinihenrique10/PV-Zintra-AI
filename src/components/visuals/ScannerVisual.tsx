import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import scannerFoodBg from '../../assets/scanner-food-bg.jpg';
import { useLanguage } from '../../contexts/LanguageContext';

export const ScannerVisual = () => {
    const { t } = useLanguage();
    return (
        <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/10">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[30%] h-7 bg-black rounded-full z-30 flex justify-end items-center px-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            </div>

            {/* Screen Content */}
            <div className="w-full h-full relative overflow-hidden">
                {/* Camera Feed - Real Food Image */}
                <div className="absolute inset-0">
                    <img
                        src={scannerFoodBg}
                        alt="Camera Feed"
                        className="w-full h-full object-cover"
                    />
                    {/* Subtle dark overlay for UI contrast */}
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.5px]" />
                </div>

                {/* AR Holographic Overlay Layer */}
                <div className="absolute inset-0 z-10">
                    {/* Scanning Grid Effect */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"
                    />
                </div>

                {/* UI Elements */}
                <div className="relative z-20 w-full h-full flex flex-col justify-between pb-8 pt-12">
                    {/* Header */}
                    <div className="px-4 flex justify-center items-center">
                        <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                            <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
                            <span className="text-[10px] font-semibold text-white tracking-wide uppercase">{t.scanner.visual.analyzing}</span>
                        </div>
                    </div>

                    {/* AR Tracking Elements - Middle Section */}
                    <div className="flex-1 relative mt-8">
                        {/* Salmon Tracking Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute top-[20%] left-[10%]"
                        >
                            {/* Bounding Box */}
                            <div className="w-36 h-28 relative">
                                <div className="absolute inset-0 border-2 border-blue-400/80 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] mix-blend-screen" />
                                {/* Corners */}
                                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-300" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-blue-300" />
                                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blue-300" />
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blue-300" />

                                {/* Scanning Line Animation */}
                                <motion.div
                                    animate={{ top: ['0%', '100%', '0%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-0.5 bg-blue-400/80 shadow-[0_0_10px_#60A5FA]"
                                />
                            </div>

                            {/* Data Tag */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -right-[10px] -top-[50px] translate-x-full"
                            >
                                <div className="relative">
                                    <div className="absolute bottom-0 left-0 w-[20px] h-[30px] border-l border-b border-blue-400/50 -translate-x-full translate-y-full" />
                                    <div className="bg-black/70 backdrop-blur-md border border-blue-500/30 p-2.5 rounded-lg shadow-lg min-w-[140px]">
                                        <div className="text-[11px] font-bold text-blue-300 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">{t.scanner.visual.salmon}</div>
                                        <div className="text-[10px] text-gray-200 font-medium">{t.scanner.visual.salmonInfo}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Salad Tracking Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.0, duration: 0.5 }}
                            className="absolute bottom-[35%] right-[15%]"
                        >
                            {/* Bounding Box */}
                            <div className="w-28 h-24 relative">
                                <div className="absolute inset-0 border-2 border-blue-400/60 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] mix-blend-screen" />
                                {/* Corners */}
                                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-300" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-blue-300" />
                                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blue-300" />
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blue-300" />
                            </div>

                            {/* Data Tag */}
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.3 }}
                                className="absolute -left-[10px] bottom-[-50px] -translate-x-full"
                            >
                                <div className="relative">
                                    <div className="absolute top-0 right-0 w-[20px] h-[30px] border-r border-t border-blue-400/50 translate-x-full -translate-y-full" />
                                    <div className="bg-black/70 backdrop-blur-md border border-blue-500/30 p-2.5 rounded-lg shadow-lg text-right min-w-[150px]">
                                        <div className="text-[11px] font-bold text-blue-300 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">{t.scanner.visual.salad}</div>
                                        <div className="text-[10px] text-gray-200 font-medium">{t.scanner.visual.saladInfo}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Bottom Controls */}
                    <div className="px-6 flex flex-col items-center gap-4">
                        {/* Shutter Button */}
                        <div className="relative group cursor-pointer">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-500" />
                            <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)] relative z-10 transition-transform group-active:scale-95">
                                <div className="w-14 h-14 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                            </div>
                        </div>
                        <div className="text-[10px] text-white/50 font-medium uppercase tracking-widest">{t.scanner.visual.tapToScan}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
