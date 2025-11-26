import { motion } from 'framer-motion';
import { AnimatedTestimonials } from './ui/animated-testimonials';

const testimonials = [
    {
        quote: "Uai, gente, eu achava que comia direitinho, mas a barriga nunca sumia, que trem difícil! Quando baixei o Zintra, vi que eu tava errando feio na distribuição da comida. Eu sou muito visual, então acordar e ver as 'Tarefas de Hoje' ali pra marcar o checkzinho ✅ me ajudou muito a ter disciplina. Foi esse controlezinho diário que fez a mágica acontecer e finalmente defini o abdômen.",
        name: "Mariana, 24",
        designation: "Estudante Universitária",
        src: "/depoimentos/dep01.jpg"
    },
    {
        quote: "Cara, eu olho pra foto da esquerda e nem me reconheço. Eu tava muito cansada, já tinha tentado todas essas dietas malucas e sempre engordava o dobro depois. O Zintra foi diferente porque perguntou tudo da minha vida lá no cadastro. E mermão, o que me segurou foi ver a 'Motivação do Dia' e o foguinho da sequência aumentando. Foi sinistro, perdi muito peso e dessa vez foi de verdade.",
        name: "Carla, 32",
        designation: "Vendedora",
        src: "/depoimentos/dep02.jpg"
    },
    {
        quote: "Gente, sério... eu tava desesperada porque meu vestido de noiva não tava fechando e faltavam poucos meses. A tal da 'Consulta Científica' que ele gera no início é real mesmo, calculou exato. Fiquei obcecada no Resumo Nutricional tentando bater a meta certinho. Ah, e ter que 'encher o copinho' de água no app me ajudou demais a desinchar. Entrei no vestido e me senti maravilhosa.",
        name: "Fernanda, 29",
        designation: "Arquiteta (Noiva)",
        src: "/depoimentos/dep03.jpg"
    },
    {
        quote: "Bah, guria, com a correria do trabalho e cuidando da casa, eu não tinha tempo nenhum pra ficar pesando comida. A virada de chave pra mim foi aquele botão de 'Analisar Refeição'. Eu tô no restaurante, tiro a foto do prato e o app já me dá uma noção se tá dentro do plano. Isso facilitou horrores a minha vida! Recomendo demais pra quem tem vida louca.",
        name: "Patrícia, 35",
        designation: "Gerente de Projetos",
        src: "/depoimentos/dep04.jpg"
    },
    {
        quote: "Cara, sinistro. Eu achava que treinava sério, mas o plano de treino do Zintra me mostrou o que é treinar de verdade, com as cargas e repetições certas pra mim. Além da dieta, ver a linhazinha do Gráfico de Peso descendo toda semana no dashboard é viciante e me manteve focada.",
        name: "Bruna, 27",
        designation: "Designer (RJ)",
        src: "/depoimentos/dep05.png"
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

