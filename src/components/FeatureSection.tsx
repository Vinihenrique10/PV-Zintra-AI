import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface FeatureSectionProps {
    title: string;
    description: string;
    image: React.ReactNode;
    align?: 'left' | 'right';
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
    title,
    description,
    image,
    align = 'left'
}) => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className={clsx(
                    "flex flex-col md:flex-row items-center gap-12 md:gap-24",
                    align === 'right' ? "md:flex-row-reverse" : ""
                )}>
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            {description}
                        </p>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative w-full aspect-[4/5] md:aspect-square max-w-[500px] mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl -z-10" />
                            <div className="w-full h-full bg-[#0B0F19] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative group">
                                {/* Inner Content (passed as prop) */}
                                {image}

                                {/* Glass Reflection */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
