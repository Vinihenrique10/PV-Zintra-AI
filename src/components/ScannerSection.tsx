import { motion } from 'framer-motion';
import { ScannerVisual } from './visuals/ScannerVisual';
import { useLanguage } from '../contexts/LanguageContext';
import { ScanFace } from 'lucide-react';
import { Button } from './ui/MagneticButton';

export const ScannerSection = () => {
    const { t } = useLanguage();

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-28 px-6 relative overflow-hidden bg-black/80">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

            <div className="container mx-auto max-w-5xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 flex flex-col items-center"
                >
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-widest mb-6">
                        <ScanFace size={14} />
                        AI Vision Technology
                    </div>

                    <h2 className="text-display text-4xl md:text-6xl font-black mb-6">
                        {t.scanner.title.start}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">{t.scanner.title.highlight}</span>{t.scanner.title.end}
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        {t.scanner.subtitle}
                    </p>
                </motion.div>

                {/* Scanner Visual Container */}
                <div className="relative w-full max-w-md mx-auto group mb-12">
                    {/* Laser Scanner Line */}
                    <div className="absolute top-0 left-[-20%] w-[140%] h-[2px] bg-primary/80 blur-[2px] shadow-[0_0_20px_var(--color-primary)] z-30 animate-scan pointer-events-none" />

                    <ScannerVisual />

                    {/* Ambient Glows */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] -z-10 rounded-full opacity-60 pointer-events-none" />
                </div>

                <div className="text-center">
                    <Button size="lg" onClick={scrollToPricing} className="shadow-[0_0_30px_rgba(212,255,0,0.2)]">
                        ACTIVATE SCANNER
                    </Button>
                </div>

            </div>

            <style>{`
                @keyframes scan {
                    0% { top: 10%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 90%; opacity: 0; }
                }
                .animate-scan {
                    animation: scan 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};
