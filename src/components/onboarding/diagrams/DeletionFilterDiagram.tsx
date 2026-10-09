'use client';

import React from 'react';
import {
  Filter,
  CheckCircle2,
  XCircle,
  Skull,
  DollarSign,
  Clock,
  Percent,
  Box,
  Layers,
  ArrowDown,
} from 'lucide-react';

export const DeletionFilterDiagram: React.FC = () => {
  const eliminatedModels = [
    {
      name: 'Amazon FBA',
      fatalFlaw: 'Rising shipping freight, 10–15% thin margins, $5,000 inventory lockup in Chinese ports.',
      metricKilled: '12% Margins',
    },
    {
      name: 'Low-Ticket Affiliate SEO',
      fatalFlaw: 'Killed by AI search overviews (Google HCU) and 12-month SEO lag times for $14 commissions.',
      metricKilled: '360-Day Delay',
    },
    {
      name: 'Generic Content Agency',
      fatalFlaw: 'Killed by endless client revisions, custom pitch decks, and commoditized race-to-bottom pricing.',
      metricKilled: 'High Churn',
    },
    {
      name: 'Print on Demand',
      fatalFlaw: 'Sub-15% profit margins eaten alive by Facebook ad acquisition costs and supplier delays.',
      metricKilled: 'Ad Bleed',
    },
  ];

  const survivedVehicles = [
    { id: '01', name: 'Digital Products & Lead Magnets', margin: '95% Margin', time: '7–14 Days' },
    { id: '02', name: 'B2B Services & Freelancing', margin: '90% Margin', time: '3–10 Days' },
    { id: '03', name: 'E-Commerce / Micro-Dropshipping', margin: '60–70% Margin', time: '7–14 Days' },
    { id: '04', name: 'Trading & Non-Custodial Finance', margin: 'High Convexity', time: 'Instant' },
    { id: '05', name: 'AI & Workflow Automation', margin: '85–95% Margin', time: '5–12 Days' },
  ];

  return (
    <div className="w-full my-6 space-y-6">
      {/* ── Main Filter Architecture ─────────────────────── */}
      <div className="rounded-2xl border border-white/[0.12] bg-[#0E111A] p-5 sm:p-6 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <Filter className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 font-bold block">
                Negative Knowledge Protocol
              </span>
              <h4 className="text-sm font-bold text-white">The 4-Criterion Deletion Funnel</h4>
            </div>
          </div>
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 w-fit">
            ELIMINATE 95% OF NOISE
          </span>
        </div>

        {/* ── 1. Top Section: Eliminated Models ─────────────── */}
        <div className="mt-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">
              Level 1: The Graveyard of Hype Models (Rejected)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {eliminatedModels.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-red-500/[0.03] border border-red-500/20 relative group hover:border-red-500/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-zinc-200 line-through decoration-red-500/60 decoration-2">
                    {m.name}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded">
                    {m.metricKilled}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  {m.fatalFlaw}
                </p>
                <div className="mt-2 text-[10px] font-mono text-red-400/90 flex items-center gap-1 font-semibold">
                  <XCircle className="w-3 h-3 text-red-400" /> Disqualified
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 2. Middle: The 4-Filter Screen Box ────────────── */}
        <div className="my-6 relative">
          <div className="flex justify-center -mb-2">
            <div className="w-7 h-7 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center text-zinc-400 z-10">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#141824] border border-[#D4F84C]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4F84C]/5 rounded-full blur-xl pointer-events-none" />

            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4F84C] mb-3 text-center sm:text-left">
              The TFP Filter Standard (All 4 Must Pass)
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
                <div className="text-[10px] font-mono text-zinc-400">Capital Gate</div>
                <div className="text-sm font-bold text-white mt-0.5">&lt; $200 USD</div>
                <div className="text-[10px] text-[#D4F84C] mt-0.5 font-medium">Zero Debt</div>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
                <div className="text-[10px] font-mono text-zinc-400">Margin Gate</div>
                <div className="text-sm font-bold text-white mt-0.5">&ge; 80% Gross</div>
                <div className="text-[10px] text-[#D4F84C] mt-0.5 font-medium">Software / Assets</div>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
                <div className="text-[10px] font-mono text-zinc-400">Velocity Gate</div>
                <div className="text-sm font-bold text-white mt-0.5">7 – 21 Days</div>
                <div className="text-[10px] text-[#D4F84C] mt-0.5 font-medium">Time to First $</div>
              </div>

              <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
                <div className="text-[10px] font-mono text-zinc-400">Inventory Gate</div>
                <div className="text-sm font-bold text-white mt-0.5">Zero Physical Stock</div>
                <div className="text-[10px] text-[#D4F84C] mt-0.5 font-medium">Zero Lockup</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center -mt-2">
            <div className="w-7 h-7 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center text-[#D4F84C] z-10">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* ── 3. Bottom: The 5 Surviving Profit Engines ──────── */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4F84C]">
              Level 2: The 5 Surviving Profit Engines (Passed All Filters)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {survivedVehicles.map((v) => (
              <div
                key={v.id}
                className="p-3 rounded-xl bg-[#D4F84C]/[0.04] border border-[#D4F84C]/30 flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-6 h-6 rounded-md bg-[#D4F84C] text-black font-mono font-black text-[11px] flex items-center justify-center shrink-0">
                    {v.id}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate">{v.name}</div>
                    <div className="text-[10px] font-mono text-zinc-400">{v.time}</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#D4F84C]/15 text-[#D4F84C] border border-[#D4F84C]/30 shrink-0">
                  {v.margin}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
