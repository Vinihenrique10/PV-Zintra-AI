
export const WorkoutVisual = () => {
    return (
        <div className="w-full h-full bg-[#0B0F19] p-6 flex flex-col relative overflow-hidden">
            {/* Header */}
            <div className="mb-6">
                <div className="text-xs text-primary uppercase tracking-wider mb-1">Treino em Casa</div>
                <div className="text-2xl font-bold text-white">Corpo Todo (Iniciante)</div>
                <div className="text-sm text-gray-400 mt-1">25 min • Sem Equipamento</div>
            </div>

            {/* Exercises */}
            <div className="space-y-4">
                {[
                    { name: "Agachamento Livre", sets: "3x 12", weight: "Peso do Corpo" },
                    { name: "Flexão de Braço (Joelho)", sets: "3x 10", weight: "Peso do Corpo" },
                    { name: "Polichinelo", sets: "3x 30s", weight: "Cardio" },
                    { name: "Abdominal Supra", sets: "3x 15", weight: "Peso do Corpo" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-lg font-bold text-gray-600">
                            {i + 1}
                        </div>
                        <div className="flex-1">
                            <div className="font-medium text-sm">{item.name}</div>
                            <div className="text-xs text-primary">{item.sets}</div>
                        </div>
                        <div className="text-xs font-semibold text-gray-300 bg-white/10 px-2 py-1 rounded">
                            {item.weight}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
