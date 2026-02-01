import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Navbar = () => {
    const { t } = useLanguage();
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: t.nav.howItWorks, id: "how-it-works" },
        { name: t.nav.features, id: "features" },
        { name: t.nav.forWho, id: "for-who" },
        { name: t.nav.testimonials, id: "testimonials" },
        { name: t.nav.plans, id: "pricing" },
        { name: t.nav.faq, id: "faq" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: isScrolled ? 20 : 0,
                    opacity: 1,
                    width: isScrolled ? "min(90%, 800px)" : "100%",
                }}
                transition={{ duration: 0.4, type: "spring", bounce: 0, damping: 20 }}
                className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center transition-all duration-300 ${isScrolled
                        ? "bg-[#050505]/70 backdrop-blur-xl border border-white/5 rounded-full px-6 py-3 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                        : "bg-transparent px-6 md:px-12 py-6"
                    }`}
            >
                <motion.div
                    className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-1 font-display"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Zintra<span className="text-primary text-3xl leading-none">.</span>AI
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-1.5 py-1.5 border border-white/5">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full hover:text-white ${activeSection === link.id ? "text-black bg-primary" : "text-gray-400"
                                }`}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <motion.a
                        href="https://app.zintraai.com/"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`hidden md:flex items-center justify-center px-6 py-2.5 rounded-full transition-all duration-300 text-sm font-bold tracking-wide ${isScrolled
                            ? "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                            : "bg-white/10 border border-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                            }`}
                    >
                        {t.nav.login}
                    </motion.a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white p-2"
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
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        transition={{ duration: 0.5, ease: "circIn" }}
                        className="fixed inset-0 z-40 bg-black/95 pt-32 px-6 md:hidden backdrop-blur-3xl"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-3xl font-bold text-white hover:text-primary transition-colors font-display tracking-tight"
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                href="https://app.zintraai.com/"
                                className="mt-8 px-10 py-4 rounded-full bg-primary text-black font-bold text-lg shadow-[0_0_30px_rgba(212,255,0,0.4)]"
                            >
                                {t.nav.login}
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
