import { motion } from 'framer-motion';
import { Button } from './ui/MagneticButton';
import { cn } from '../lib/utils';
import { ArrowRight } from 'lucide-react';

interface SecondaryCTAProps {
    text: string;
    className?: string;
    variant?: 'primary' | 'outline';
}

export const SecondaryCTA = ({ text, className }: SecondaryCTAProps) => {
    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn("w-full flex justify-center py-16", className)}
        >
            <Button
                onClick={scrollToPricing}
                size="lg"
                className="w-full sm:w-auto"
            >
                <span className="flex items-center gap-3 text-lg font-bold tracking-wide uppercase">
                    {text}
                    <ArrowRight className="w-5 h-5" />
                </span>
            </Button>
        </motion.div>
    );
};
