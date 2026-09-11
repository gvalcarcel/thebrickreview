import { CheckCircle2, AlertCircle } from "lucide-react";

interface ProsConsCardProps {
  pros: string[];
  cons: string[];
}

export function ProsConsCard({ pros, cons }: ProsConsCardProps) {
  return (
    <div className="border border-zinc-200 bg-white rounded-lg p-6 my-10 shadow-sm">
      <h3 className="text-lg font-bold font-serif text-zinc-900 mb-6 pb-2 border-b border-zinc-100">
        Balance de Construcción: Pros y Contras
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pros */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Aspectos Destacables</span>
          </div>
          <ul className="space-y-2 text-sm text-zinc-600">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contras */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-rose-800">
            <AlertCircle className="w-4 h-4 text-rose-600" />
            <span>Puntos Mejorables</span>
          </div>
          <ul className="space-y-2 text-sm text-zinc-600">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}