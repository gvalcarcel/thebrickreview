import { CheckCircle2, AlertCircle, Scale } from "lucide-react";

interface ProsConsCardProps {
  pros: string[];
  cons: string[];
}

export function ProsConsCard({ pros, cons }: ProsConsCardProps) {
  return (
    <div className="radar-card p-6 sm:p-8 my-10 space-y-6 bg-white border border-light relative overflow-hidden">
      <div className="flex items-center justify-between pb-4 border-b border-light">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-primary" />
          <h3 className="text-xl sm:text-2xl font-bold font-display text-main">
            Build Balance: Architectural Strengths &amp; Limitations
          </h3>
        </div>
        <span className="radar-badge radar-badge--subtle hidden sm:inline-block">
          Technical Audit
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Pros */}
        <div className="space-y-4 p-4 sm:p-5 rounded-xl bg-emerald-50/50 border border-emerald-200/70">
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-900 uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Key Architectural Strengths</span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start gap-2.5 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0 shadow-sm" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div className="space-y-4 p-4 sm:p-5 rounded-xl bg-rose-50/50 border border-rose-200/70">
          <div className="flex items-center gap-2 text-sm font-bold text-rose-900 uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>Areas for Consideration</span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start gap-2.5 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0 shadow-sm" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}