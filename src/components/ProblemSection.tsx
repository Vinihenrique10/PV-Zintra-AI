import { motion } from 'framer-motion';

export const ProblemSection = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        Why do internet diets <span className="text-red-500">fail</span> you?
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed mb-6">
                        Because they don't know you. Generic apps and internet PDFs treat everyone as a statistic. They ignore that you have knee pain, hate broccoli, or that your metabolism is different.
                    </p>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        <span className="text-white font-semibold">The Zintra Solution:</span> We don't "guess" numbers. Our Artificial Intelligence analyzes dozens of variables from your profile to create the shortest and most efficient path between you and your goal.
                    </p>
                </motion.div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
            </div>
        </section>
    );
};
