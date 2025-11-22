import { motion } from 'framer-motion';


export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-40 py-6 px-6 md:px-12 flex justify-between items-center backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold tracking-tighter"
            >
                Zintra<span className="text-primary">.AI</span>
            </motion.div>

            <motion.button
                // @ts-ignore
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:block px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium"
            >
                Login
            </motion.button>
        </nav>
    );
};
