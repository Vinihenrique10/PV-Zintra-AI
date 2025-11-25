"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
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
                    "hsl(var(--primary))",
                    "hsl(var(--accent))",
                    "hsl(var(--secondary))",
                    "hsl(var(--muted))",
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
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
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
                            className="relative data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-700"
                        />
                    </Label>
                </label>
                <span className="ml-4 font-medium text-gray-300">
                    Cobrança Anual <span className="text-primary font-bold ml-1">(Economize 20%)</span>
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
                            "relative rounded-3xl p-8 flex flex-col w-full md:w-[350px] transition-all duration-300",
                            "bg-[#0B0F19]/60 backdrop-blur-xl border border-white/5",
                            plan.isPopular ? "shadow-[0_0_40px_rgba(59,130,246,0.15)] border-primary/50" : "hover:border-white/10"
                        )}
                    >
                        {plan.isPopular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                                <Star className="w-3 h-3 fill-white" />
                                Popular
                            </div>
                        )}

                        <div className="flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-white mb-2">
                                {plan.name}
                            </h3>
                            <p className="text-sm text-gray-400 mb-6 min-h-[40px]">
                                {plan.description}
                            </p>

                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold text-white">
                                    <NumberFlow
                                        value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
                                        format={{ style: "currency", currency: "BRL" }}
                                    />
                                </span>
                                <span className="text-gray-500">/{plan.period}</span>
                            </div>

                            <div className="w-full h-px bg-white/10 mb-6" />

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                        <div className="mt-1 min-w-[16px]">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={isMonthly ? plan.monthlyHref : plan.yearlyHref}
                                className={cn(
                                    "relative w-full py-4 rounded-full font-bold text-center transition-all duration-300 overflow-hidden group",
                                    plan.isPopular
                                        ? "text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] border border-white/20"
                                        : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                                )}
                            >
                                {plan.isPopular && (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700" />
                                        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                                        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-80" />
                                    </>
                                )}
                                <span className="relative z-10">{plan.buttonText}</span>
                            </a>

                            <p className="mt-4 text-xs text-center text-gray-500">
                                {isMonthly ? "Cobrado mensalmente" : "Cobrado anualmente"}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
