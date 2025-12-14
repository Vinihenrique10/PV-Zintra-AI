import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { useLanguage } from '../contexts/LanguageContext';

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

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-3xl relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                    {t.faq.title}
                </h2>

                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            className="glass-card rounded-2xl overflow-hidden border border-white/5"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-medium text-lg text-white">{item.question}</span>
                                <span className={clsx("text-primary transition-transform duration-300", openIndex === i ? "rotate-180" : "")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
