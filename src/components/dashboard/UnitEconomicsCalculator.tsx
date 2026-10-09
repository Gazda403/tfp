'use client';

import React, { useState } from 'react';
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Percent,
  Sliders,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface UnitEconomicsCalculatorProps {
  initialTraffic?: number;
  initialConversion?: number;
  initialAOV?: number;
  initialFeePercent?: number;
  initialOverhead?: number;
  branchName?: string;
  unitLabel?: string;
}

export const UnitEconomicsCalculator: React.FC<UnitEconomicsCalculatorProps> = ({
  initialTraffic = 3500,
  initialConversion = 2.4,
  initialAOV = 47,
  initialFeePercent = 5.0,
  initialOverhead = 29,
  branchName = 'This Engine',
  unitLabel = 'Sales',
}) => {
  const [traffic, setTraffic] = useState<number>(initialTraffic);
  const [conversionRate, setConversionRate] = useState<number>(initialConversion);
  const [aov, setAov] = useState<number>(initialAOV);
  const [feePercent, setFeePercent] = useState<number>(initialFeePercent);
  const [overhead, setOverhead] = useState<number>(initialOverhead);

  // Calculations
  const unitsSold = Math.max(1, Math.round(traffic * (conversionRate / 100)));
  const grossRevenue = unitsSold * aov;
  const platformFees = Math.round(grossRevenue * (feePercent / 100));
  const netProfit = Math.max(0, grossRevenue - platformFees - overhead);
  const netMargin = grossRevenue > 0 ? Math.round((netProfit / grossRevenue) * 100) : 0;
  const annualRunRate = netProfit * 12;

  return (
    <div className="rounded-2xl border border-[#D4F84C]/30 bg-[#0E111C] p-5 sm:p-6 my-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4F84C]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#D4F84C]/15 border border-[#D4F84C]/30 flex items-center justify-center text-[#D4F84C]">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-wider uppercase text-[#D4F84C] font-bold block">
              Interactive Unit Simulator
            </span>
            <h4 className="text-sm font-bold text-white">
              Dynamic P&amp;L &amp; Cash Flow Simulator for {branchName}
            </h4>
          </div>
        </div>
        <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#D4F84C]/10 text-[#D4F84C] border border-[#D4F84C]/25 w-fit">
          REAL-TIME SIMULATION
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5">
        {/* Sliders Input Area */}
        <div className="lg:col-span-7 space-y-4">
          {/* Traffic / Impressions */}
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-300 font-semibold">Monthly Targeted Traffic / Leads:</span>
              <span className="font-mono font-bold text-white text-sm">
                {traffic.toLocaleString()} visitors
              </span>
            </div>
            <input
              type="range"
              min={200}
              max={25000}
              step={100}
              value={traffic}
              onChange={(e) => setTraffic(Number(e.target.value))}
              className="w-full accent-[#D4F84C] h-1.5 bg-white/10 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-zinc-500">
              <span>200 (Cold outreach)</span>
              <span>10,000 (Viral organic)</span>
              <span>25,000+ (Omnichannel)</span>
            </div>
          </div>

          {/* Conversion Rate */}
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-300 font-semibold">Funnel Conversion Rate (%):</span>
              <span className="font-mono font-bold text-[#D4F84C] text-sm">
                {conversionRate.toFixed(1)}%
              </span>
            </div>
            <input
              type="range"
              min={0.2}
              max={8.0}
              step={0.1}
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full accent-[#D4F84C] h-1.5 bg-white/10 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-zinc-500">
              <span>0.5% (Cold baseline)</span>
              <span>2.5% (Optimized offer)</span>
              <span>5.0%+ (High trust list)</span>
            </div>
          </div>

          {/* Average Order Value / Retainer */}
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-300 font-semibold">Average Order Value (AOV) / Deal Size:</span>
              <span className="font-mono font-bold text-white text-sm">
                ${aov.toLocaleString()} USD
              </span>
            </div>
            <input
              type="range"
              min={19}
              max={3500}
              step={aov > 500 ? 50 : 5}
              value={aov}
              onChange={(e) => setAov(Number(e.target.value))}
              className="w-full accent-[#D4F84C] h-1.5 bg-white/10 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-zinc-500">
              <span>$27 (Low ticket asset)</span>
              <span>$97 (Core bundle)</span>
              <span>$2,500+ (Done-For-You Retainer)</span>
            </div>
          </div>

          {/* Fee & Overhead Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[10px] font-mono text-zinc-400 block mb-1">
                Merchant / Platform Fee %
              </span>
              <input
                type="number"
                min={0}
                max={20}
                step={0.5}
                value={feePercent}
                onChange={(e) => setFeePercent(Number(e.target.value))}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1 text-xs font-mono font-bold text-white"
              />
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[10px] font-mono text-zinc-400 block mb-1">
                Fixed Software Overhead ($/mo)
              </span>
              <input
                type="number"
                min={0}
                max={500}
                step={5}
                value={overhead}
                onChange={(e) => setOverhead(Number(e.target.value))}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1 text-xs font-mono font-bold text-white"
              />
            </div>
          </div>
        </div>

        {/* Real-Time Profit Output Display */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-gradient-to-b from-[#141824] to-[#0A0D15] border border-white/10">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs pb-3 border-b border-white/[0.08]">
              <span className="text-zinc-400 font-mono">Expected Volume:</span>
              <span className="text-white font-mono font-bold">
                {unitsSold} {unitLabel} / mo
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-zinc-400">
                <span>Gross Monthly Inflow:</span>
                <span className="font-mono text-zinc-200">${grossRevenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs text-red-400/90">
                <span>Merchant / Processing Cuts:</span>
                <span className="font-mono">-${platformFees.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs text-zinc-400">
                <span>Fixed Tech Stack:</span>
                <span className="font-mono">-${overhead.toLocaleString()}</span>
              </div>
            </div>

            {/* Net Monthly Profit Callout */}
            <div className="pt-3 border-t border-white/[0.10]">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#D4F84C] font-bold">
                Projected Net Profit
              </div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-white mt-1">
                ${netProfit.toLocaleString()}
                <span className="text-xs text-[#D4F84C] font-mono font-bold ml-1.5">/month</span>
              </div>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-xs font-mono font-bold text-[#D4F84C] bg-[#D4F84C]/10 px-2 py-0.5 rounded border border-[#D4F84C]/25">
                  {netMargin}% Net Margin
                </span>
                <span className="text-[11px] text-zinc-400 font-mono">
                  ${annualRunRate.toLocaleString()}/yr Net Run-Rate
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.08] text-[11px] text-zinc-400 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4F84C] shrink-0" />
            <span>Tested against actual Stripe Connect &amp; Merchant statements.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
