'use client';

import React from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  Quote,
  AlertTriangle,
  Lightbulb,
  BarChart3,
} from 'lucide-react';
import { PlaybookBranch } from '@/types/playbook';

interface SectionBreakdownProps {
  branch: PlaybookBranch;
}

export const SectionBreakdown: React.FC<SectionBreakdownProps> = ({ branch }) => {
  const { founderExperience, caseStudies, mythsToAvoid } = branch.breakdown;

  return (
    <div className="space-y-8">
      {/* 1. Founder Real Experience (Flattened layout - no nested cards) */}
      <section className="rounded-3xl p-6 sm:p-8 bg-[#121522] border border-white/[0.12] shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4F84C]/15 border border-[#D4F84C]/40 text-[#D4F84C] text-xs font-bold uppercase tracking-wider">
              <Quote className="w-3.5 h-3.5" />
              Founder Unfiltered Dossier
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {founderExperience.headline}
            </h2>

            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
              {founderExperience.story}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-300 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
              <span>{founderExperience.verifiedProofNote}</span>
            </div>
          </div>

          {/* Metrics Stack (Flattened with border dividers, no nested card containers) */}
          <div className="lg:w-80 shrink-0 grid grid-cols-2 gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/[0.12] lg:pl-6">
            {founderExperience.metrics.map((metric, i) => (
              <div key={i} className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                  {metric.label}
                </span>
                <div className="text-2xl font-black text-white tracking-tight">
                  {metric.value}
                </div>
                {metric.trend && (
                  <span className="text-xs font-mono text-[#D4F84C] font-bold block">
                    {metric.trend}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Real-World Case Studies */}
      <section className="space-y-4" aria-label="Case Studies">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#FF5733]" />
              Battle-Tested Case Studies
            </h3>
            <p className="text-sm text-zinc-300">
              Real execution breakdowns with revenue, profit margins, and step-by-step funnel anatomy.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-zinc-200 bg-white/[0.08] px-3 py-1 rounded-full border border-white/[0.15]">
            {caseStudies.length} Verified Records
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {caseStudies.map((study, idx) => (
            <article
              key={idx}
              className="rounded-3xl p-6 bg-[#121522] border border-white/[0.12] hover:border-white/25 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FF5733]/15 border border-[#FF5733]/40 text-[#FF5733] uppercase tracking-wider">
                    {study.tag}
                  </span>
                  <span className="text-xs font-mono text-zinc-300 font-semibold">
                    Timeline: {study.timeline}
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#D4F84C] transition-colors">
                  {study.title}
                </h4>

                <div className="flex items-center gap-2 mt-2 text-xs text-zinc-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#D4F84C] text-black font-bold flex items-center justify-center text-xs">
                    {study.student.charAt(0)}
                  </div>
                  <span>Student Operator: <strong className="text-white">{study.student}</strong></span>
                </div>

                {/* Numbers Row */}
                <div className="mt-5 grid grid-cols-2 gap-4 py-3 border-y border-white/[0.10]">
                  <div>
                    <span className="text-xs uppercase font-bold text-zinc-300 block">
                      Gross Revenue
                    </span>
                    <div className="text-2xl font-black text-[#D4F84C] mt-0.5">
                      {study.revenue}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-zinc-300 block">
                      Net Margin
                    </span>
                    <div className="text-2xl font-black text-[#34D399] mt-0.5">
                      {study.margin}
                    </div>
                  </div>
                </div>

                {/* Funnel Breakdown (Flattened - no nested card container) */}
                <div className="mt-4 text-xs">
                  <span className="font-bold text-zinc-200 uppercase tracking-wide block mb-1">
                    Exact Funnel Architecture:
                  </span>
                  <p className="leading-relaxed font-mono text-zinc-200 border-l-2 border-[#D4F84C] pl-3 py-1">
                    {study.funnel}
                  </p>
                </div>
              </div>

              {/* Key Takeaway */}
              <div className="mt-5 pt-3.5 border-t border-white/[0.10] flex items-start gap-2.5 text-xs text-zinc-200">
                <Lightbulb className="w-4 h-4 text-[#ECE859] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Core Insight: </strong>
                  {study.keyTakeaway}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Lethal Myths to Avoid */}
      <section className="space-y-4" aria-label="Myths to Avoid">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#FF5733]" />
            What Myths to Avoid (The 99% Failure Traps)
          </h3>
          <p className="text-sm text-zinc-300">
            Debunking the fatal misconceptions that drain your time and capital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mythsToAvoid.map((myth, idx) => (
            <article
              key={idx}
              className="rounded-3xl p-6 bg-[#14121A] border border-red-500/30 hover:border-red-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  Trap #{idx + 1}
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                  &ldquo;{myth.myth}&rdquo;
                </h4>

                <div className="mt-4 pt-3 border-t border-white/[0.10] space-y-1.5">
                  <span className="text-xs font-bold text-[#34D399] uppercase tracking-wider block">
                    The Hard Reality:
                  </span>
                  <p className="text-sm text-zinc-200 leading-relaxed font-normal">
                    {myth.reality}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/[0.10] text-xs text-zinc-300">
                <strong className="text-[#ECE859] block mb-1 font-bold">Capital Protection Rule:</strong>
                {myth.lossPrevention}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
