'use client';

import React from 'react';
import {
  Clock,
  Zap,
  Target,
  Send,
  Sparkles,
  RotateCcw,
  CheckCircle,
  AlertOctagon,
} from 'lucide-react';

export const SpeedSprintDiagram: React.FC = () => {
  const sprintPhases = [
    {
      hours: '00h – 12h',
      title: 'Define Micro-Pain',
      action: 'Strip all feature bloat. Identify one specific, burning bottleneck.',
      deliverable: '1-sentence value proposition & raw outline',
      badge: 'Hour 12 Milestone',
    },
    {
      hours: '12h – 24h',
      title: 'Assemble MVP Asset',
      action: 'Build 5-page Notion guide, 1-page Framer lander, or Loom breakdown.',
      deliverable: 'Functional deliverable ready to send',
      badge: 'Hour 24 Milestone',
    },
    {
      hours: '24h – 36h',
      title: 'Direct Outreach Blitz',
      action: 'Send 50 targeted cold DMs or publish tactical thread with DM lead magnet.',
      deliverable: 'Real prospect eyeballs on your offer',
      badge: 'Hour 36 Milestone',
    },
    {
      hours: '36h – 48h',
      title: 'Market Truth & Cash',
      action: 'Collect first deposit or get exact objection data. Refine offer in 60 min.',
      deliverable: 'Stripe notification or calibrated messaging',
      badge: 'Hour 48 Victory',
    },
  ];

  return (
    <div className="w-full my-6 space-y-6">
      {/* ── Visual Sprint Timeline Cards ───────────────────── */}
      <div className="rounded-2xl border border-white/[0.12] bg-[#0E111B] p-5 sm:p-6 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#D4F84C]/15 border border-[#D4F84C]/30 flex items-center justify-center text-[#D4F84C]">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#D4F84C] font-bold block">
                Execution Framework
              </span>
              <h4 className="text-sm font-bold text-white">The 48-Hour Velocity Sprint</h4>
            </div>
          </div>
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#D4F84C]/10 text-[#D4F84C] border border-[#D4F84C]/20 w-fit">
            SPEED = INFORMATION
          </span>
        </div>

        {/* 4 Sprint Quadrants / Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-5">
          {sprintPhases.map((phase, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#D4F84C]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-black text-[#D4F84C]">
                    {phase.hours}
                  </span>
                  <span className="text-[10px] font-bold text-zinc-300 font-mono">
                    Phase 0{i + 1}
                  </span>
                </div>
                <h5 className="text-sm font-bold text-white mb-1.5 group-hover:text-[#D4F84C] transition-colors">
                  {phase.title}
                </h5>
                <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                  {phase.action}
                </p>
              </div>

              <div className="pt-2.5 border-t border-white/[0.06] mt-auto">
                <div className="text-[10px] font-mono text-zinc-300 uppercase tracking-wider font-semibold">
                  Deliverable:
                </div>
                <div className="text-xs font-semibold text-zinc-200 mt-0.5">
                  {phase.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom SVG Velocity Arrow Flow */}
        <div className="mt-6 pt-5 border-t border-white/[0.08]">
          <div className="p-4 rounded-xl bg-[#090B12] border border-white/[0.06]">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="text-[#D4F84C] font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-current" /> Fast Iteration Loop
              </span>
              <span>Total Elapsed Time: 48.0 Hours</span>
            </div>

            <div className="w-full h-3 bg-white/[0.08] rounded-full overflow-hidden flex">
              <div className="h-full bg-[#D4F84C]/60 w-1/4 border-r border-black/40" />
              <div className="h-full bg-[#D4F84C]/80 w-1/4 border-r border-black/40" />
              <div className="h-full bg-[#D4F84C] w-1/4 border-r border-black/40" />
              <div className="h-full bg-[#34D399] w-1/4" />
            </div>

            <div className="grid grid-cols-4 text-center mt-2 text-[10px] font-mono text-zinc-300">
              <div>Scope (12h)</div>
              <div>Build (24h)</div>
              <div>Outbound (36h)</div>
              <div className="text-[#34D399] font-bold">First $ (48h)</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Comparison: 48h Sprint vs 90-Day Perfectionist Trap ─ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-red-500/20">
          <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider mb-2">
            <AlertOctagon className="w-4 h-4" /> The Perfectionist's 90-Day Graveyard
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Spends 3 months redesigning a logo, tweaking colors in Figma, rewriting course slides, and agonizing over domain names. Launches into dead silence with zero distribution. Quits due to burnout having learned zero market reality.
          </p>
          <div className="mt-3 text-[11px] font-mono font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-lg border border-red-500/20 w-fit">
            Outcome: 90 Days Lost · $0 Revenue · Zero Data
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#D4F84C]/[0.03] border border-[#D4F84C]/30">
          <div className="flex items-center gap-2 text-[#D4F84C] font-bold text-xs uppercase tracking-wider mb-2">
            <CheckCircle className="w-4 h-4" /> The TFP Operator's 48-Hour Reality
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Drafts an imperfect 3-page guide or 1-offer pitch in 18 hours. Sends 40 cold DMs or runs a raw pilot on day 2. Learns immediately what buyers resist, rewires the hook, and makes the first sale while others are still debating fonts.
          </p>
          <div className="mt-3 text-[11px] font-mono font-bold text-[#D4F84C] bg-[#D4F84C]/10 px-2.5 py-1 rounded-lg border border-[#D4F84C]/25 w-fit">
            Outcome: 48 Hours · Real Market Feedback · Instant Momentum
          </div>
        </div>
      </div>
    </div>
  );
};
