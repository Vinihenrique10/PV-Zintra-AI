import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Star, Quote, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from './ui/MagneticButton';

export const Testimonials = () => {
    const { t } = useLanguage();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const testimonials = [
        {
            quote: t.testimonials.items[0].quote,
            name: t.testimonials.items[0].name,
            designation: t.testimonials.items[0].designation,
            src: "/depoimentos/dep01.jpg",
            result: "Lost 8kg" // Hardcoded emphasis for design (could be dynamic later)
        },
        {
            quote: t.testimonials.items[1].quote,
            name: t.testimonials.items[1].name,
            designation: t.testimonials.items[1].designation,
            src: "/depoimentos/dep02.jpg",
            result: "Defined Abs"
        },
        {
            quote: t.testimonials.items[2].quote,
            name: t.testimonials.items[2].name,
            designation: t.testimonials.items[2].designation,
            src: "/depoimentos/dep03.jpg",
            result: "Wedding Ready"
        },
        {
            quote: t.testimonials.items[3].quote,
            name: t.testimonials.items[3].name,
            designation: t.testimonials.items[3].designation,
            src: "/depoimentos/dep04.jpg",
            result: "Efficiency"
        },
        {
            quote: t.testimonials.items[4].quote,
            name: t.testimonials.items[4].name,
            designation: t.testimonials.items[4].designation,
            src: "/depoimentos/dep05.png",
            result: "Muscle Gain"
        }
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-32 px-0 relative bg-[#050505] overflow-hidden border-t border-white/5">

            {/* Ambient Background - Subtle Green Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50" />

            <div className="container mx-auto max-w-7xl px-6 mb-16 relative z-10 flex flex-col md:flex-row items-end justify-between gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-widest mb-6">
                        <Star size={12} className="fill-primary" />
                        {t.testimonials.label}
                    </div>
                    <h2 className="text-display text-4xl md:text-6xl font-bold leading-tight text-white mb-2">
                        {t.testimonials.title.highlight} <span className="text-gray-500 italic font-light">{t.testimonials.title.end}</span>
                    </h2>
                </motion.div>

                {/* Navigation Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={() => scroll('left')}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95 group"
                    >
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Scroll Container */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {testimonials.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="min-w-[85vw] md:min-w-[900px] bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden flex flex-col md:flex-row snap-center group relative hover:border-primary/30 transition-colors duration-500"
                    >
                        {/* Image Section (Expanded to 50% for better Before/After visibility) */}
                        <div className="w-full md:w-1/2 h-[300px] md:h-auto min-h-[400px] relative overflow-hidden bg-gray-900 ml-0 shrink-0">
                            <img
                                src={item.src}
                                alt={item.name}
                                className="w-full h-full object-cover object-top grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                            />

                            {/* Overlay Badge */}
                            <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md border border-primary/30 px-4 py-1.5 text-primary text-sm font-bold uppercase tracking-wider">
                                {t.testimonials.badge}
                            </div>

                            {/* Flash Overlay on Hover */}
                            <div className="absolute inset-0 bg-primary/20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay pointer-events-none" />
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between relative">
                            {/* Watermark Quote */}
                            <Quote className="absolute top-6 right-8 text-white/5 w-20 h-20 rotate-180 pointer-events-none" />

                            <div>
                                <div className="flex items-center gap-1 mb-6">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <Star key={starIndex} size={14} className="fill-primary text-primary" />
                                    ))}
                                </div>

                                <blockquote className="text-xl md:text-2xl text-gray-200 font-light leading-snug mb-8 relative z-10">
                                    "{item.quote}"
                                </blockquote>
                            </div>

                            <div className="flex items-end justify-between border-t border-white/5 pt-6 mt-auto">
                                <div>
                                    <h4 className="text-white font-bold text-lg uppercase tracking-wide">{item.name}</h4>
                                    <p className="text-gray-500 text-sm font-mono">{item.designation}</p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-[10px] text-gray-600 uppercase tracking-widest mb-1">Status</span>
                                    <span className="text-primary text-sm font-bold flex items-center gap-1">
                                        {t.testimonials.status} <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Spacer at end */}
                <div className="min-w-[50px] md:min-w-[200px]" />
            </div>

            <div className="mt-8 flex justify-center relative z-20">
                <Button size="lg" onClick={scrollToPricing} className="shadow-[0_0_30px_rgba(212,255,0,0.2)] text-black">
                    {t.testimonials.button}
                </Button>
            </div>

        </section>
    );
};
