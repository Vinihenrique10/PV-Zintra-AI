import { motion } from 'framer-motion';
import { Button } from './ui/MagneticButton';
import { useLanguage } from '../contexts/LanguageContext';

export const OfferSection = () => {
    const { t } = useLanguage();
    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        {t.offer.title.start}<span className="text-primary">{t.offer.title.highlight}</span>{t.offer.title.end}
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        {t.offer.subtitle}
                    </p>

                    <Button size="lg" onClick={scrollToPricing}>
                        {t.offer.button}
                    </Button>
                </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};
