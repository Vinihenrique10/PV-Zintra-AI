import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { useLanguage } from '../contexts/LanguageContext';
import { Plus } from 'lucide-react';
import { Button } from './ui/MagneticButton';

export const FAQ = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: t.faq.items[0].question,
            answer: t.faq.items[0].answer
        },
        {
            question: t.faq.items[1].question,
            answer: t.faq.items[1].answer
        },
        {
            question: t.faq.items[2].question,
            answer: t.faq.items[2].answer
        },
        {
            question: t.faq.items[3].question,
            answer: t.faq.items[3].answer
        }
    ];

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden" id="faq">
            {/* Background Light Spill */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto max-w-3xl relative z-10">
                <h2 className="text-display text-4xl md:text-5xl font-bold mb-16 text-center">
                    {t.faq.title}
                </h2>

                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full p-6 flex items-center justify-between text-left"
                            >
                                <span className="font-medium text-lg text-white group-hover:text-primary transition-colors">{item.question}</span>
                                <span className={clsx(
                                    "w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-primary group-hover:text-primary transition-all duration-300",
                                    openIndex === i ? "rotate-45 bg-primary/10" : ""
                                )}>
                                    <Plus className="w-4 h-4" />
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <Button size="lg" onClick={scrollToPricing} className="shadow-[0_0_30px_rgba(212,255,0,0.2)]">
                        START YOUR TRANSFORMATION
                    </Button>
                </div>
            </div>
        </section>
    );
};
