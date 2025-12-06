import { motion } from 'framer-motion';
import { AnimatedTestimonials } from './ui/animated-testimonials';

const testimonials = [
    {
        quote: "I used to think I was eating right, but my belly never went away, so frustrating! When I downloaded Zintra, I saw I was making big mistakes with my food distribution. I'm very visual, so waking up and seeing 'Today's Tasks' there to check off ✅ helped me a lot with discipline. It was that daily control that made the magic happen and I finally got defined abs.",
        name: "Mariana, 24",
        designation: "University Student",
        src: "/depoimentos/dep01.jpg"
    },
    {
        quote: "Honestly, I look at the before photo and don't even recognize myself. I was so tired, had tried all those crazy diets and always gained double the weight back. Zintra was different because it asked everything about my life during signup. And what kept me going was seeing the 'Daily Motivation' and watching my streak flame grow. It was amazing, I lost a lot of weight and this time it was for real.",
        name: "Carla, 32",
        designation: "Sales Representative",
        src: "/depoimentos/dep02.jpg"
    },
    {
        quote: "Seriously... I was desperate because my wedding dress wasn't closing and I only had a few months left. The 'Scientific Consultation' it generates at the start is actually real, it calculated exactly. I became obsessed with the Nutritional Summary trying to hit my targets perfectly. Oh, and having to 'fill the water glass' in the app helped me so much with bloating. I fit into the dress and felt amazing.",
        name: "Fernanda, 29",
        designation: "Architect (Bride)",
        src: "/depoimentos/dep03.jpg"
    },
    {
        quote: "With my hectic work schedule and taking care of the house, I had no time to weigh food. The game changer for me was that 'Analyze Meal' button. I'm at a restaurant, take a photo of the plate and the app already tells me if it fits my plan. This made my life so much easier! Highly recommend for anyone with a crazy life.",
        name: "Patricia, 35",
        designation: "Project Manager",
        src: "/depoimentos/dep04.jpg"
    },
    {
        quote: "Amazing. I thought I was training seriously, but Zintra's workout plan showed me what real training looks like, with the right weights and reps for me. Besides the diet, seeing the Weight Graph line going down every week on the dashboard is addicting and kept me focused.",
        name: "Bruna, 27",
        designation: "Designer (NY)",
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
                    <span className="text-primary">Real</span> Results.
                </motion.h2>

                <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            </div>
        </section>
    );
};

