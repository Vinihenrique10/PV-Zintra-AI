"use client";

import { Pricing } from "@/components/ui/pricing";

const zintraPlans = [
    {
        name: "BASIC",
        price: "19.90",
        yearlyPrice: "16.58",
        period: "month",
        features: [
            "Meal Plan with Real Food (Budget-Friendly)",
            "Home or Gym Workouts",
            "Unlimited Food Scanner",
            "2 Plan Updates/month (Biweekly)",
        ],
        description: "Perfect to start your journey",
        buttonText: "Start Now",
        monthlyHref: "https://buy.stripe.com/fZu28q8habYBdYgcXhbMQ00",
        yearlyHref: "https://buy.stripe.com/fZu14m6929QtdYg2iDbMQ01",
        isPopular: false,
    },
    {
        name: "PRO",
        price: "29.90",
        yearlyPrice: "24.92",
        period: "month",
        features: [
            "4 Plan Updates/month (Weekly Adjustment)",
            "Priority Plan Generation",
            "Priority Support",
            "Everything in Basic Plan",
        ],
        description: "For those who want fast results",
        buttonText: "Subscribe Pro",
        monthlyHref: "https://buy.stripe.com/fZu00ibtme6J3jC9L5bMQ02",
        yearlyHref: "https://buy.stripe.com/8x228q8ha4w9g6o9L5bMQ03",
        isPopular: true,
    },
];

export function PricingBasic() {
    return (
        <div id="pricing" className="py-10">
            <Pricing
                plans={zintraPlans}
                title="Invest in yourself."
                description="Choose the plan that works for your routine and your budget."
            />
        </div>
    );
}
