
export const DashboardVisual = () => {
    return (
        <div className="w-full h-full bg-[#0B0F19] p-6 flex flex-col relative overflow-hidden">
            {/* Header */}
            <div className="mb-8">
                <div className="text-xl font-bold text-white">Bom dia, Lucas</div>
                <div className="text-sm text-gray-400">Você tem 3 metas para hoje</div>
            </div>

            {/* Daily Tasks */}
            <div className="space-y-3">
                {[
                    { title: "Beber 3L de água", status: "checked", sub: "2.1L / 3.0L" },
                    { title: "Treino de Pernas", status: "unchecked", sub: "Agendado 18:00" },
                    { title: "Bater Proteína", status: "checked", sub: "140g / 160g" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${item.status === 'checked' ? 'bg-primary border-primary' : 'border-gray-600'}`}>
                            {item.status === 'checked' && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            )}
                        </div>
                        <div>
                            <div className={`font-medium text-sm ${item.status === 'checked' ? 'text-gray-500 line-through' : 'text-white'}`}>{item.title}</div>
                            <div className="text-xs text-gray-500">{item.sub}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Progress */}
            <div className="mt-auto">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Progresso Diário</span>
                    <span>66%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-2/3" />
                </div>
            </div>
        </div>
    );
};
