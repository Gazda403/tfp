'use client';

import React from 'react';
import {
  XCircle,
  CheckCircle2,
  AlertTriangle,
  Flame,
  ArrowRight,
  RefreshCw,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';

export const OperatorShiftDiagram: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 my-6">
      {/* ── Consumer Loop Card ────────────────────────────── */}
      <div className="rounded-2xl border border-red-500/20 bg-[#120F16]/90 p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between group hover:border-red-500/40 transition-all duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />

        <div>
          {/* Card Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                <XCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-red-400/90 font-bold block">
                  The Trap (99% Of People)
                </span>
                <h4 className="text-sm font-bold text-white">The Consumer Dopamine Loop</h4>
              </div>
            </div>
            <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 flex items-center gap-1">
              <TrendingDown className="w-3 h-3" /> Net Negative
            </span>
          </div>

          {/* Flow Steps */}
          <div className="mt-5 space-y-3">
            {[
              {
                step: '01',
                label: 'Distraction',
                desc: 'Doomscrolling algorithms, consuming hype reels & podcasts',
                badge: 'Passive Attention',
              },
              {
                step: '02',
                label: 'Purchase Courses',
                desc: 'Spending $997 on courses to simulate fake momentum',
                badge: '-$1,000 Outflow',
              },
              {
                step: '03',
                label: 'Dopamine Hit',
                desc: 'Feeling accomplished without shipping a single live asset',
                badge: 'False Progress',
              },
              {
                step: '04',
                label: 'Zero Assets Created',
                desc: 'Zero scripts written, zero distribution systems deployed',
                badge: '0 Leverage',
              },
              {
                step: '05',
                label: '$0 Cash Flow',
                desc: 'Bank account unchanged. Loop resets back to step 01 in 30 days',
                badge: '$0.00 Net',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-red-500/20 transition-colors"
              >
                <div className="w-6 h-6 rounded-md bg-red-500/10 text-red-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                  {item.step}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-zinc-200">{item.label}</span>
                    <span className="text-[10px] font-mono font-medium text-red-400/80 bg-red-500/5 px-1.5 py-0.5 rounded border border-red-500/10">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 truncate mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Callout Box */}
        <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center gap-2.5 text-xs text-red-300/80 bg-red-500/[0.04] p-3 rounded-xl border border-red-500/15">
          <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
          <span>
            <strong>Result:</strong> Trading 40h/week funding other businesses while holding zero equity.
          </span>
        </div>
      </div>

      {/* ── Operator Loop Card ────────────────────────────── */}
      <div className="rounded-2xl border border-[#D4F84C]/30 bg-[#0F1418]/90 p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between group hover:border-[#D4F84C]/60 transition-all duration-300 shadow-lg shadow-[#D4F84C]/5">
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#D4F84C]/10 rounded-full blur-2xl pointer-events-none" />

        <div>
          {/* Card Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#D4F84C]/20 border border-[#D4F84C]/40 flex items-center justify-center text-[#D4F84C]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-[#D4F84C] font-bold block">
                  The Protocol (Top 1%)
                </span>
                <h4 className="text-sm font-bold text-white">The Operator Leverage Flywheel</h4>
              </div>
            </div>
            <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#D4F84C]/15 text-[#D4F84C] border border-[#D4F84C]/30 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> Infinite Compounding
            </span>
          </div>

          {/* Flow Steps */}
          <div className="mt-5 space-y-3">
            {[
              {
                step: '01',
                label: 'Problem Spotted',
                desc: 'Identify expensive bottleneck in a lucrative market',
                badge: 'Market Reality',
              },
              {
                step: '02',
                label: 'Build Asset / Script',
                desc: 'Package solution into Notion vault, code script, or B2B offer',
                badge: '48-Hour Sprint',
              },
              {
                step: '03',
                label: 'Automate Distribution',
                desc: 'Deploy cold outbound engine, social lead magnet & evergreen funnels',
                badge: '100% Scalable',
              },
              {
                step: '04',
                label: 'Collect Cash Flow',
                desc: 'Stripe notifications trigger 24/7 with 90%+ gross margins',
                badge: '$10k-$35k/mo',
              },
              {
                step: '05',
                label: 'Reinvest in Scale',
                desc: 'Reinvest cash flow into higher asymmetric bets & software leverage',
                badge: 'Autonomous',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#D4F84C]/30 transition-colors"
              >
                <div className="w-6 h-6 rounded-md bg-[#D4F84C]/20 text-[#D4F84C] font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                  {item.step}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-white">{item.label}</span>
                    <span className="text-[10px] font-mono font-bold text-[#D4F84C] bg-[#D4F84C]/10 px-1.5 py-0.5 rounded border border-[#D4F84C]/20">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-300 truncate mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Callout Box */}
        <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center gap-2.5 text-xs text-[#D4F84C] bg-[#D4F84C]/[0.08] p-3 rounded-xl border border-[#D4F84C]/25">
          <Flame className="w-4 h-4 text-[#D4F84C] shrink-0" />
          <span>
            <strong>Result:</strong> Own automated digital properties generating sovereign cash flow.
          </span>
        </div>
      </div>
    </div>
  );
};
