import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: "Funcionalidades", id: "features" },
        { name: "Depoimentos", id: "testimonials" },
        { name: "Planos", id: "pricing" },
        { name: "FAQ", id: "faq" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: isScrolled ? 20 : 0,
                    opacity: 1,
                    width: isScrolled ? "min(90%, 800px)" : "100%",
                    borderRadius: isScrolled ? "9999px" : "0px",
                    backgroundColor: isScrolled || isMobileMenuOpen ? "rgba(5, 5, 5, 0.8)" : "transparent",
                    borderColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "transparent",
                    padding: isScrolled ? "0.75rem 1.5rem" : "1.5rem 3rem",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{
                    backdropFilter: isScrolled || isMobileMenuOpen ? "blur(12px)" : "blur(0px)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                }}
                className="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center"
            >
                <motion.div
                    className="text-2xl font-bold tracking-tighter cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Zintra<span className="text-primary">.AI</span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <motion.a
                        href="https://app-zintraai.vercel.app/auth"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`hidden md:block px-6 py-2 rounded-full transition-colors text-sm font-medium ${isScrolled
                            ? "bg-white text-black hover:bg-gray-200"
                            : "border border-white/10 hover:bg-white/5"
                            }`}
                    >
                        Login
                    </motion.a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 pt-32 px-6 md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-2xl font-medium text-white hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <a
                                href="https://app-zintraai.vercel.app/auth"
                                className="mt-8 px-8 py-3 rounded-full bg-white text-black font-bold text-lg"
                            >
                                Login
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
