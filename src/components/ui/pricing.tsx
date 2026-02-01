"use client";
import { Button } from './MagneticButton';

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
    name: string;
    price: string;
    yearlyPrice: string;
    period: string;
    features: string[];
    description: string;
    buttonText: string;
    monthlyHref: string;
    yearlyHref: string;
    isPopular: boolean;
}

interface PricingProps {
    plans: PricingPlan[];
    title?: string;
    description?: string;
}

export function Pricing({
    plans,
    title = "Simple, Transparent Pricing",
    description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
    const [isMonthly, setIsMonthly] = useState(true);
    const switchRef = useRef<HTMLButtonElement>(null);

    const handleToggle = (checked: boolean) => {
        setIsMonthly(!checked);
        if (checked && switchRef.current) {
            const rect = switchRef.current.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            confetti({
                particleCount: 50,
                spread: 60,
                origin: {
                    x: x / window.innerWidth,
                    y: y / window.innerHeight,
                },
                colors: [
                    "#D4FF00",
                    "#ffffff",
                ],
                ticks: 200,
                gravity: 1.2,
                decay: 0.94,
                startVelocity: 30,
                shapes: ["circle"],
            });
        }
    };

    return (
        <div className="container py-20 px-6">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-display text-4xl font-bold tracking-tight sm:text-5xl">
                    {title}
                </h2>
                <p className="text-gray-400 text-lg whitespace-pre-line max-w-2xl mx-auto">
                    {description}
                </p>
            </div>

            <div className="flex justify-center mb-10">
                <label className="relative inline-flex items-center cursor-pointer group">
                    <Label>
                        <Switch
                            ref={switchRef as any}
                            checked={!isMonthly}
                            onCheckedChange={handleToggle}
                            className="relative data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-800 border border-white/10"
                        />
                    </Label>
                </label>
                <span className="ml-4 font-medium text-gray-300">
                    Annual Billing <span className="text-primary font-bold ml-1">(Save 20%)</span>
                </span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 100
                        }}
                        className={cn(
                            "relative rounded-sm p-1 flex flex-col w-full md:w-[350px] transition-all duration-300 group perspective-1000",
                            plan.isPopular ? "z-10 scale-105" : "z-0 scale-100 opacity-90 hover:opacity-100 hover:scale-[1.02]"
                        )}
                    >
                        <div className={cn(
                            "h-full w-full bg-[#080808]/90 backdrop-blur-xl border flex flex-col p-8 relative overflow-hidden",
                            plan.isPopular ? "border-primary shadow-[0_0_30px_rgba(212,255,0,0.15)]" : "border-white/10 hover:border-white/20"
                        )}>
                            {/* Scanning Line Animation */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[50%] w-full -translate-y-full group-hover:animate-scan-slow pointer-events-none" />

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-4 h-[1px] bg-white/20" />
                            <div className="absolute top-0 left-0 w-[1px] h-4 bg-white/20" />
                            <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-white/20" />
                            <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-white/20" />

                            {plan.isPopular && (
                                <div className="absolute top-0 inset-x-0 h-1 bg-primary shadow-[0_0_10px_var(--color-primary)]" />
                            )}

                            {plan.isPopular && (
                                <div className="absolute top-4 right-4 bg-primary text-black px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase border border-primary shadow-[0_0_15px_rgba(212,255,0,0.4)]">
                                    Recommended
                                </div>
                            )}

                            <div className="flex-1 flex flex-col mt-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className={cn("w-2 h-2 rounded-full", plan.isPopular ? "bg-primary animate-pulse" : "bg-gray-600")} />
                                    <h3 className="text-xl font-bold text-white font-display uppercase tracking-wider">
                                        {plan.name}
                                    </h3>
                                </div>

                                <p className="text-xs text-gray-500 mb-8 font-mono border-l-2 border-white/5 pl-3">
                                    {plan.description}
                                </p>

                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-5xl font-bold text-white font-display tracking-tighter">
                                        <NumberFlow
                                            value={Number(isMonthly ? Number(plan.price) : Number(plan.yearlyPrice))}
                                            format={{ style: "currency", currency: "USD" }}
                                        />
                                    </span>
                                    <span className="text-gray-500 text-sm font-mono">/{plan.period}</span>
                                </div>

                                {/* Tactical Divider */}
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-sm text-gray-300 group/item">
                                            <div className="mt-1 min-w-[14px]">
                                                <div className={cn(
                                                    "w-3.5 h-3.5 border flex items-center justify-center transition-colors",
                                                    plan.isPopular ? "border-primary text-primary" : "border-gray-600 text-gray-600 group-hover/item:border-white group-hover/item:text-white"
                                                )}>
                                                    <div className="w-1.5 h-1.5 bg-current opacity-0 group-hover/item:opacity-100" />
                                                </div>
                                            </div>
                                            <span className="group-hover/item:text-white transition-colors">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={isMonthly ? plan.monthlyHref : plan.yearlyHref}
                                    className="block w-full"
                                >
                                    <Button
                                        variant={plan.isPopular ? "primary" : "outline"}
                                        className="w-full uppercase text-xs tracking-widest"
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </a>

                                <p className="mt-4 text-[10px] text-center text-gray-600 font-mono uppercase tracking-wider">
                                    {isMonthly ? "Monthly Access Cycle" : "Annual Access Cycle"}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
