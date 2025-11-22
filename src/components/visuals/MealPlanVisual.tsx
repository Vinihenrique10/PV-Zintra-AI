
export const MealPlanVisual = () => {
    return (
        <div className="w-full h-full bg-[#0B0F19] p-6 flex flex-col relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Almoço</div>
                    <div className="text-xl font-bold text-white">12:30</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20" /><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" /><path d="m4 8 16-4" /><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.55a2 2 0 0 1 2.43 1.46l.45 1.8" /></svg>
                </div>
            </div>

            {/* Food List */}
            <div className="space-y-4">
                {[
                    { name: "Arroz Branco", amount: "4 col. sopa", cal: "128 kcal" },
                    { name: "Feijão Carioca", amount: "1 concha", cal: "76 kcal" },
                    { name: "Filé de Frango", amount: "1 bife médio", cal: "159 kcal" },
                    { name: "Salada Variada", amount: "À vontade", cal: "15 kcal" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gray-800" />
                            <div>
                                <div className="font-medium text-sm">{item.name}</div>
                                <div className="text-xs text-gray-400">{item.amount}</div>
                            </div>
                        </div>
                        <div className="text-xs font-semibold text-gray-300">{item.cal}</div>
                    </div>
                ))}
            </div>

            {/* Macros */}
            <div className="mt-auto pt-6 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                <div>
                    <div className="text-xs text-gray-400">Prot</div>
                    <div className="font-bold text-primary">45g</div>
                </div>
                <div>
                    <div className="text-xs text-gray-400">Carb</div>
                    <div className="font-bold text-white">32g</div>
                </div>
                <div>
                    <div className="text-xs text-gray-400">Meta</div>
                    <div className="font-bold text-white">Perder 5kg</div>
                </div>
            </div>
        </div>
    );
};
