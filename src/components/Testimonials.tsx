import { motion } from 'framer-motion';
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { useLanguage } from '../contexts/LanguageContext';

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

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center"
                >
                    <span className="text-primary">{t.testimonials.title.highlight}</span>{t.testimonials.title.end}
                </motion.h2>

                <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            </div>
        </section>
    );
};

