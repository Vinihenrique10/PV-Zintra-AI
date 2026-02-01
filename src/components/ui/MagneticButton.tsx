import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const variants = {
        primary: "text-black font-bold shadow-[0_0_20px_rgba(212,255,0,0.4)] hover:shadow-[0_0_40px_rgba(212,255,0,0.6)] border border-primary/50 backdrop-blur-md",
        secondary: "bg-white text-black hover:bg-gray-200",
        outline: "border border-white/20 hover:bg-white/10 text-white"
    };

    const sizes = {
        sm: "px-3 py-2 text-xs md:px-4 md:py-2 md:text-sm",
        md: "px-5 py-3 text-sm md:px-8 md:py-4 md:text-base",
        lg: "px-6 py-4 text-sm md:px-10 md:py-5 md:text-lg"
    };

    return (
        // @ts-ignore
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x * 0.2, y: position.y * 0.2 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={cn(
                "relative rounded-full transition-all duration-300 overflow-hidden font-display tracking-wide whitespace-nowrap flex items-center justify-center",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {variant === 'primary' && (
                <>
                    {/* Liquid Gradient Background */}
                    <div className="absolute inset-0 bg-primary" />

                    {/* Noise Texture */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

                    {/* Moving Shine (Liquid Effect) */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
                    />

                    {/* Glass Top Highlight */}
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-80" />

                    {/* Bottom Reflection */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent opacity-50" />
                </>
            )}

            {variant === 'outline' && (
                <>
                    {/* Glass Background */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

                    {/* Moving Shine (Subtle) */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                    />

                    {/* Glass Top Highlight */}
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-50" />
                </>
            )}
            <span className="relative z-10 flex items-center justify-center gap-2 w-full">{children}</span>
        </motion.button>
    );
};
