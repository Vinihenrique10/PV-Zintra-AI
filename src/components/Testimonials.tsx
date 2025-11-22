import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Eu treinava há 2 anos sem sair do lugar. O Zintra ajustou minha dieta e ganhei 4kg de massa em 2 meses.",
        author: "Lucas, 28",
        role: "Programador",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces"
    },
    {
        quote: "Tenho condromalácia e sempre tive medo de agachar. O filtro de lesões adaptou todo o meu treino. Meu joelho agradece.",
        author: "Mariana, 34",
        role: "Médica",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
    },
    {
        quote: "A função de escanear o prato é surreal. Não preciso mais ficar pesando comida em restaurante. Liberdade total.",
        author: "Pedro, 25",
        role: "Estudante",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="glass-card p-8 rounded-3xl flex flex-col h-full hover:border-primary/30 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                                    <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="font-bold text-white">{item.author}</div>
                                    <div className="text-xs text-gray-400">{item.role}</div>
                                </div>
                            </div>
                            <p className="text-gray-300 leading-relaxed italic flex-1">
                                "{item.quote}"
                            </p>

                            <div className="flex gap-1 mt-6">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#3B82F6" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
