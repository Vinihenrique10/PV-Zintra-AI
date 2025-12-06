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
        monthlyHref: "https://lastlink.com/p/CE11D6DC9/checkout-payment",
        yearlyHref: "https://lastlink.com/p/C8B567061/checkout-payment",
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
        monthlyHref: "https://lastlink.com/p/C83636150/checkout-payment",
        yearlyHref: "https://lastlink.com/p/CBCB6AF44/checkout-payment",
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
