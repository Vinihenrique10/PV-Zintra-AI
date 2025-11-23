import { motion } from 'framer-motion';
import { Button } from './ui/MagneticButton';
import { cn } from '../lib/utils';

interface SecondaryCTAProps {
    text: string;
    className?: string;
    variant?: 'primary' | 'outline';
}

export const SecondaryCTA = ({ text, className, variant = 'outline' }: SecondaryCTAProps) => {
    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn("w-full flex justify-center py-12", className)}
        >
            <Button
                onClick={scrollToPricing}
                variant={variant}
                className={cn(
                    "group text-sm md:text-base px-6 py-4 md:px-8 md:py-6 h-auto transition-all duration-300",
                    variant === 'outline' && "border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.1)]",
                    variant === 'primary' && "bg-primary text-white hover:bg-primary/90 hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                )}
            >
                {text}
            </Button>
        </motion.div>
    );
};
