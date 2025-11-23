"use client";

import { Pricing } from "@/components/ui/pricing";

const zintraPlans = [
    {
        name: "BÁSICO",
        price: "59.90",
        yearlyPrice: "49.90",
        period: "mês",
        features: [
            "Cardápio com Comida de Verdade (Econômico)",
            "Treinos para Casa ou Academia",
            "Scanner de Alimentos Ilimitado",
            "2 Atualizações de Plano/mês (Quinzenal)",
        ],
        description: "Perfeito para começar sua jornada",
        buttonText: "Começar Agora",
        href: "#",
        isPopular: false,
    },
    {
        name: "PRO",
        price: "99.90",
        yearlyPrice: "83.25",
        period: "mês",
        features: [
            "4 Atualizações de Plano/mês (Ajuste Semanal)",
            "Prioridade na Geração dos Planos",
            "Suporte Prioritário",
            "Tudo do Plano Básico",
        ],
        description: "Para quem quer resultados rápidos",
        buttonText: "Assinar Pro",
        href: "#",
        isPopular: true,
    },
];

export function PricingBasic() {
    return (
        <div id="pricing" className="py-10">
            <Pricing
                plans={zintraPlans}
                title="Invista em você."
                description="Escolha o plano que funciona para sua rotina e seu bolso."
            />
        </div>
    );
}
