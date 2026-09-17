import { Award, Compass, ShieldCheck, Sparkles } from "lucide-react";
import type { ReviewMetric } from "@/types";

interface BuildVerdictCardProps {
  finalScore: number; // e.g. 9.6
  verdictSummary: string;
  structuralRigidity?: number;
  buildingTechniques?: number;
  assemblyFlow?: number;
  partQuality?: number;
  valuePerPrice?: number; // legacy fallback
  metrics?: ReviewMetric[];
}

export function BuildVerdictCard({
  finalScore,
  verdictSummary,
  structuralRigidity = 9.5,
  buildingTechniques = 9.8,
  assemblyFlow = 9.4,
  partQuality,
  valuePerPrice,
  metrics: customMetrics,
}: BuildVerdictCardProps) {
  const finalPartQuality = partQuality ?? valuePerPrice ?? 9.7;

  const defaultMetrics = [
    {
      label: "Assembly Techniques (SNOT / Compound Angles)",
      score: buildingTechniques,
      icon: <Compass className="w-4 h-4 text-primary" />,
    },
    {
      label: "Structural Rigidity & Swooshability",
      score: structuralRigidity,
      icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
    },
    {
      label: "Instruction Flow & Pacing",
      score: assemblyFlow,
      icon: <Award className="w-4 h-4 text-accent-blue" />,
    },
    {
      label: "Part Quality & Clutch Tolerances",
      score: finalPartQuality,
      icon: <Sparkles className="w-4 h-4 text-accent-yellow" />,
    },
  ];

  const displayMetrics = customMetrics && customMetrics.length > 0
    ? customMetrics.map((m) => ({
        label: m.label,
        score: m.score,
        icon: m.iconType === "techniques" ? <Compass className="w-4 h-4 text-primary" />
          : m.iconType === "rigidity" ? <ShieldCheck className="w-4 h-4 text-emerald-600" />
          : m.iconType === "flow" ? <Award className="w-4 h-4 text-accent-blue" />
          : <Sparkles className="w-4 h-4 text-accent-yellow" />,
      }))
    : defaultMetrics;

  return (
    <div className="radar-card p-6 sm:p-8 my-10 space-y-6 bg-white border border-light relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-light">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" /> Author&apos;s Technical Verdict
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-main mt-1">
            Build Verdict &amp; Architecture Audit
          </h3>
        </div>

        <div className="radar-score-badge flex items-baseline gap-1.5 bg-surface-subtle px-4 py-2.5 rounded-xl border border-light shadow-sm">
          <span className="text-3xl sm:text-4xl font-black font-display text-primary">{finalScore}</span>
          <span className="text-xs text-muted font-bold">/ 10</span>
        </div>
      </div>

      <blockquote className="text-base sm:text-lg font-serif italic text-secondary border-l-4 border-primary pl-4 py-1.5 leading-relaxed bg-surface-subtle/50 rounded-r-lg">
        &ldquo;{verdictSummary}&rdquo;
      </blockquote>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {displayMetrics.map((m, idx) => (
          <div key={idx} className="radar-stat-tile p-4 rounded-xl border border-light bg-surface-subtle space-y-2.5">
            <div className="flex items-center justify-between text-xs text-main">
              <span className="flex items-center gap-2 font-semibold">{m.icon} {m.label}</span>
              <span className="font-mono font-bold text-main text-sm">{m.score} / 10</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${(m.score / 10) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}