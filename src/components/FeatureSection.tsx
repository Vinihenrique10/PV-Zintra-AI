import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/MagneticButton';
import { clsx } from 'clsx';

interface FeatureSectionProps {
    title: string;
    description: string;
    image: React.ReactNode;
    align?: 'left' | 'right';
}

export const FeatureSection = ({ title, description, image, align = 'left' }: FeatureSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={containerRef} className="py-32 px-6 relative overflow-visible">
            {/* Dynamic Background */}
            <div className={clsx(
                "absolute top-0 w-1/2 h-1/2 bg-gradient-to-b from-primary/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10",
                align === 'right' ? 'right-0' : 'left-0'
            )} />

            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Image / Visual Container */}
                    <motion.div
                        style={{ y, opacity }}
                        className={clsx(
                            "relative z-10",
                            align === 'right' ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
                        )}
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />

                            {/* Render passed visual component */}
                            {image}

                            {/* Overlay UI Elements (Optional decorative) */}
                            <div className="absolute bottom-8 left-8 right-8 z-20 pointer-events-none">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-mono text-white">
                                        SYSTEM STATUS: OPTIMAL
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--color-primary)]" />
                                </div>
                                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[85%] shadow-[0_0_10px_var(--color-primary)]" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className={clsx(
                        align === 'right' ? 'order-1 lg:order-1' : 'order-1 lg:order-2'
                    )}>
                        <motion.div
                            initial={{ opacity: 0, x: align === 'right' ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-display text-5xl md:text-7xl font-bold mb-8 leading-[0.9]">
                                <span className="block text-white">
                                    {title}
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed font-light">
                                {description}
                            </p>

                            <div className="mt-8">
                                <Button size="lg" onClick={scrollToPricing} className="shadow-[0_0_30px_rgba(212,255,0,0.2)]">
                                    ACCESS COMPONENT
                                </Button>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
