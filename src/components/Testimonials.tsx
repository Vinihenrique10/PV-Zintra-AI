import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Star, Quote } from 'lucide-react';
import { Button } from './ui/MagneticButton';

// Infinite Scroll Helper
const Marquee = ({ children, direction = "left", speed = 20 }: { children: React.ReactNode, direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex overflow-hidden relative w-full group">
            <motion.div
                className="flex gap-8 whitespace-nowrap"
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {children}
                {children} {/* Duplicate for seamless loop */}
            </motion.div>
            {/* Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        </div>
    );
};

export const Testimonials = () => {
    const { t } = useLanguage();

    const testimonials = [
        {
            quote: t.testimonials.items[0].quote,
            name: t.testimonials.items[0].name,
            designation: t.testimonials.items[0].designation,
            src: "/depoimentos/dep01.jpg"
        },
        {
            quote: t.testimonials.items[1].quote,
            name: t.testimonials.items[1].name,
            designation: t.testimonials.items[1].designation,
            src: "/depoimentos/dep02.jpg"
        },
        {
            quote: t.testimonials.items[2].quote,
            name: t.testimonials.items[2].name,
            designation: t.testimonials.items[2].designation,
            src: "/depoimentos/dep03.jpg"
        },
        {
            quote: t.testimonials.items[3].quote,
            name: t.testimonials.items[3].name,
            designation: t.testimonials.items[3].designation,
            src: "/depoimentos/dep04.jpg"
        },
        {
            quote: t.testimonials.items[4].quote,
            name: t.testimonials.items[4].name,
            designation: t.testimonials.items[4].designation,
            src: "/depoimentos/dep05.png"
        }
    ];

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-32 px-0 relative overflow-hidden bg-black border-y border-white/5">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-40" />

            <div className="container mx-auto max-w-7xl relative z-10 mb-20 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase mb-4 opacity-70">
                        <Star size={12} className="fill-primary" />
                        <span>Validated Results</span>
                        <Star size={12} className="fill-primary" />
                    </div>

                    <h2 className="text-display text-4xl md:text-7xl font-bold mb-6">
                        <span className="text-white">BIO-DATA</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white font-light italic">CONFIRMED</span>
                    </h2>
                </motion.div>
            </div>

            {/* Marquee Row 1 */}
            <div className="mb-8">
                <Marquee speed={40}>
                    {testimonials.map((item, i) => (
                        <div key={i} className="w-[400px] h-[220px] bg-[#050505] border border-white/10 p-8 rounded-sm relative flex flex-col justify-between group hover:border-primary/50 transition-colors mx-4">
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 group-hover:border-primary transition-colors" />

                            <Quote className="text-primary/20 w-8 h-8 mb-4 group-hover:text-primary transition-colors" />

                            <p className="text-gray-300 text-lg leading-snug font-light mb-4 line-clamp-3">
                                "{item.quote}"
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 grayscale group-hover:grayscale-0 transition-all">
                                    <img src={item.src} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm tracking-wide uppercase">{item.name}</div>
                                    <div className="text-primary/60 text-xs font-mono">{item.designation}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* Marquee Row 2 (Reverse) */}
            <div>
                <Marquee direction="right" speed={50}>
                    {testimonials.map((item, i) => (
                        <div key={`${i}-rev`} className="w-[400px] h-[220px] bg-[#050505] border border-white/10 p-8 rounded-sm relative flex flex-col justify-between group hover:border-primary/50 transition-colors mx-4 opacity-70 hover:opacity-100">
                            {/* Decorative Corner */}
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 group-hover:border-primary transition-colors" />

                            <Quote className="text-primary/20 w-8 h-8 mb-4 group-hover:text-primary transition-colors" />

                            <p className="text-gray-300 text-lg leading-snug font-light mb-4 line-clamp-3">
                                "{item.quote}"
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 grayscale group-hover:grayscale-0 transition-all">
                                    <img src={item.src} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm tracking-wide uppercase">{item.name}</div>
                                    <div className="text-primary/60 text-xs font-mono">{item.designation}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>

            <div className="mt-16 text-center relative z-20">
                <Button size="lg" onClick={scrollToPricing} className="shadow-[0_0_30px_rgba(212,255,0,0.2)] text-black">
                    UNLOCK MEMBER ACCESS
                </Button>
            </div>

            {/* Visual Footer for Section */}
            <div className="mt-12 flex justify-center gap-1 opacity-20">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-1 h-4 bg-primary rounded-full" />
                ))}
            </div>

        </section>
    );
};
