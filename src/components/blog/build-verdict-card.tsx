import { Award, Compass, ShieldCheck, Banknote } from "lucide-react";

interface Metric {
  label: string;
  score: number; // 1-10
  icon: React.ReactNode;
}

interface BuildVerdictCardProps {
  finalScore: number; // Ej: 9.4
  verdictSummary: string;
  structuralRigidity: number;
  buildingTechniques: number;
  assemblyFlow: number;
  valuePerPrice: number;
}

export function BuildVerdictCard({
  finalScore,
  verdictSummary,
  structuralRigidity,
  buildingTechniques,
  assemblyFlow,
  valuePerPrice,
}: BuildVerdictCardProps) {
  const metrics: Metric[] = [
    { label: "Técnicas de ensamblaje (SNOT/geometría)", score: buildingTechniques, icon: <Compass className="w-4 h-4 text-amber-700" /> },
    { label: "Rigidez estructural y solidez", score: structuralRigidity, icon: <ShieldCheck className="w-4 h-4 text-emerald-700" /> },
    { label: "Ritmo de montaje (cero monotonía)", score: assemblyFlow, icon: <Award className="w-4 h-4 text-blue-700" /> },
    { label: "Relación valor / precio por pieza", score: valuePerPrice, icon: <Banknote className="w-4 h-4 text-zinc-700" /> },
  ];

  return (
    <div className="border border-zinc-200 bg-zinc-50 rounded-xl p-6 sm:p-8 my-10 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Dictamen Técnico del Autor
          </span>
          <h3 className="text-2xl font-bold font-serif text-zinc-950">
            Veredicto de Montaje
          </h3>
        </div>

        <div className="flex items-baseline gap-1.5 bg-white px-4 py-2 rounded-lg border border-zinc-200 shadow-sm">
          <span className="text-3xl font-extrabold font-serif text-amber-700">{finalScore}</span>
          <span className="text-xs text-zinc-400 font-semibold">/ 10</span>
        </div>
      </div>

      <blockquote className="text-base sm:text-lg font-serif italic text-zinc-700 border-l-2 border-amber-600 pl-4 py-1 leading-relaxed">
        "{verdictSummary}"
      </blockquote>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {metrics.map((m, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg border border-zinc-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-600">
              <span className="flex items-center gap-2 font-medium">{m.icon} {m.label}</span>
              <span className="font-bold text-zinc-900">{m.score}/10</span>
            </div>
            <div className="w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-amber-600 h-1.5 rounded-full transition-all"
                style={{ width: `${(m.score / 10) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}