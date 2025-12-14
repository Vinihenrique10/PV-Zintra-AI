"use client";

import { Pricing } from "@/components/ui/pricing";
import { useLanguage } from '../contexts/LanguageContext';

export function PricingBasic() {
    const { t } = useLanguage();

    const zintraPlans = [
        {
            name: t.pricing.basic.name,
            price: "19.90",
            yearlyPrice: "16.58",
            period: "month",
            features: t.pricing.basic.features,
            description: t.pricing.basic.description,
            buttonText: t.pricing.basic.button,
            monthlyHref: "https://buy.stripe.com/fZu28q8habYBdYgcXhbMQ00",
            yearlyHref: "https://buy.stripe.com/fZu14m6929QtdYg2iDbMQ01",
            isPopular: false,
        },
        {
            name: t.pricing.pro.name,
            price: "29.90",
            yearlyPrice: "24.92",
            period: "month",
            features: t.pricing.pro.features,
            description: t.pricing.pro.description,
            buttonText: t.pricing.pro.button,
            monthlyHref: "https://buy.stripe.com/fZu00ibtme6J3jC9L5bMQ02",
            yearlyHref: "https://buy.stripe.com/8x228q8ha4w9g6o9L5bMQ03",
            isPopular: true,
        },
    ];

    return (
        <div id="pricing" className="py-10">
            <Pricing
                plans={zintraPlans}
                title={t.pricing.title}
                description={t.pricing.description}
            />
        </div>
    );
}
