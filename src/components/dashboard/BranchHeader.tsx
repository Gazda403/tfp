'use client';

import React from 'react';
import {
  Clock,
  Coins,
  ShieldCheck,
  Zap,
  Target,
} from 'lucide-react';
import { PlaybookBranch } from '@/types/playbook';

interface BranchHeaderProps {
  branch: PlaybookBranch;
}

export const BranchHeader: React.FC<BranchHeaderProps> = ({ branch }) => {
  const themeCardStyles = {
    lime: 'bg-[#D6EAD7] text-[#0A120D] border-[#BEDEBF]',
    coral: 'bg-[#FF5733] text-white border-[#E04B28]',
    yellow: 'bg-[#ECE859] text-[#141403] border-[#DDD847]',
    lavender: 'bg-[#B4B0DB] text-[#100E26] border-[#A39ED1]',
    mint: 'bg-[#D6EAD7] text-[#0A120D] border-[#BEDEBF]',
  }[branch.themeColor];

  return (
    <section className="space-y-4" aria-label="Branch Overview">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Large Highlight Hero Card */}
        <div
          className={`lg:col-span-8 rounded-3xl p-6 sm:p-8 border shadow-lg flex flex-col justify-between relative overflow-hidden transition-all ${themeCardStyles}`}
        >
          <div className="relative z-10 flex items-start justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/15 border border-black/20 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-current" />
              {branch.badge}
            </div>

            <div className="flex items-center gap-2 bg-black/15 px-3 py-1 rounded-full text-xs font-bold">
              <Clock className="w-3.5 h-3.5" />
              <span>Time to $1st: {branch.timeToFirstDollar}</span>
            </div>
          </div>

          <div className="relative z-10 my-6">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-current">
              Monthly Cashflow Run-Rate
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mt-1 flex items-baseline gap-2">
              <span>{branch.monthlyRunRateBenchmark}</span>
              <span className="text-xs sm:text-sm font-bold">
                (Scale Target)
              </span>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-current/20 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-1.5">
              <Coins className="w-4 h-4" />
              <span>Capital Needed: <strong>{branch.capitalNeeded}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Success Rate: <strong>{branch.successRate}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Target className="w-4 h-4" />
              <span>Difficulty: <strong>{branch.difficulty}</strong></span>
            </div>
          </div>
        </div>

        {/* Right Metric Summary Card */}
        <div className="lg:col-span-4 rounded-3xl p-6 bg-[#121522] border border-white/[0.12] shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                Earning Potential
              </span>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#D4F84C]/15 border border-[#D4F84C]/35 text-[#D4F84C]">
                TIER 1 BLUEPRINT
              </span>
            </div>

            <div className="mt-3">
              <h2 className="text-2xl font-black text-white tracking-tight">
                {branch.earningPotential}
              </h2>
              <p className="text-xs text-zinc-300 mt-2 leading-relaxed font-normal">
                {branch.subheader}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.10] space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-300 font-medium">Execution Speed:</span>
              <span className="font-bold text-white">Aggressive (14-30 Days)</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-300 font-medium">Leverage Index:</span>
              <span className="font-bold text-[#D4F84C]">9.4 / 10 High Leverage</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-300 font-medium">Inventory Burden:</span>
              <span className="font-bold text-white">
                {branch.id === 'ecom-dropship' ? 'Micro-Inventory / On-Demand' : '0% Pure Digital'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
