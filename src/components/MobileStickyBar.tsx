import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/MagneticButton';

export const MobileStickyBar = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [0, 1]);
    const y = useTransform(scrollY, [0, 300], [100, 0]);

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            style={{ opacity, y }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
        >
            <div className="bg-black/80 backdrop-blur-xl border-t border-white/10 p-4 flex items-center justify-between gap-4 rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-400">Tailor-made plan</span>
                    <span className="text-sm font-bold text-white">starting at $19.90</span>
                </div>
                <Button
                    onClick={scrollToPricing}
                    size="sm"
                    className="bg-primary text-white hover:bg-primary/90 whitespace-nowrap"
                >
                    View Plans
                </Button>
            </div>
        </motion.div>
    );
};
