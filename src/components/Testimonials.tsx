import { motion } from 'framer-motion';
import { AnimatedTestimonials } from './ui/animated-testimonials';

const testimonials = [
    {
        quote: "Eu treinava há 2 anos sem sair do lugar. O Zintra ajustou minha dieta e ganhei 4kg de massa em 2 meses.",
        name: "Lucas, 28",
        designation: "Programador",
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop&crop=faces"
    },
    {
        quote: "Tenho condromalácia e sempre tive medo de agachar. O filtro de lesões adaptou todo o meu treino. Meu joelho agradece.",
        name: "Mariana, 34",
        designation: "Médica",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop&crop=faces"
    },
    {
        quote: "A função de escanear o prato é surreal. Não preciso mais ficar pesando comida em restaurante. Liberdade total.",
        name: "Pedro, 25",
        designation: "Estudante",
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop&crop=faces"
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center"
                >
                    Resultados <span className="text-primary">Reais</span>.
                </motion.h2>

                <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            </div>
        </section>
    );
};

