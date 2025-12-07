
import { useEffect } from "react";
import { Layout } from "../components/Layout";
import { CheckCircle } from "lucide-react";

import confetti from "canvas-confetti";
import { Button } from "../components/ui/button";

interface ThankYouProps {
    planName: string;
}

export function ThankYou({ planName }: ThankYouProps) {
    useEffect(() => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        };

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <Layout>
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
                <div className="max-w-md w-full bg-[#0B0F19]/60 border border-white/10 rounded-3xl p-10 backdrop-blur-xl relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 rounded-full blur-[50px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-500">
                            <CheckCircle className="w-10 h-10" />
                        </div>

                        <h1 className="text-3xl font-bold mb-2 text-white">Thank You!</h1>
                        <p className="text-lg text-gray-300 mb-6">
                            You have successfully subscribed to the <br />
                            <span className="text-primary font-bold">{planName}</span>
                        </p>

                        <div className="bg-white/5 rounded-xl p-4 w-full mb-8 border border-white/5">
                            <p className="text-sm text-gray-300">
                                Your access will be sent to the email used at the time of purchase.
                            </p>
                        </div>


                        <a href="https://app.zintraai.com/">
                            <Button className="w-full font-bold bg-white text-black hover:bg-gray-200 py-6 rounded-xl">
                                Login to Access
                            </Button>
                        </a>

                    </div>
                </div>
            </div>
        </Layout>
    );
}
