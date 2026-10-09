'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  ShieldCheck,
  DollarSign,
  Layers,
  ArrowUpRight,
  Activity,
  AlertCircle,
  Percent,
} from 'lucide-react';

export const AsymmetricLeverageDiagram: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<'asymmetric' | 'traditional'>('asymmetric');

  return (
    <div className="w-full my-6 space-y-4">
      {/* ── Top Metric Highlights ─────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium">
            <DollarSign className="w-3.5 h-3.5 text-[#D4F84C]" />
            <span>Capital at Risk</span>
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-white mt-1">
            $0 – $150
          </div>
          <div className="text-[11px] text-[#D4F84C] font-semibold mt-0.5">
            Capped Minimal Downside
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium">
            <Percent className="w-3.5 h-3.5 text-[#D4F84C]" />
            <span>Gross Margins</span>
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-white mt-1">
            90% – 96%
          </div>
          <div className="text-[11px] text-[#D4F84C] font-semibold mt-0.5">
            Zero Marginal Cost
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium">
            <Activity className="w-3.5 h-3.5 text-[#D4F84C]" />
            <span>Time to 1st Dollar</span>
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-white mt-1">
            3 – 14 Days
          </div>
          <div className="text-[11px] text-[#D4F84C] font-semibold mt-0.5">
            Ultra-Rapid Feedback
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium">
            <Layers className="w-3.5 h-3.5 text-[#D4F84C]" />
            <span>Scale Potential</span>
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-white mt-1">
            Infinite
          </div>
          <div className="text-[11px] text-[#D4F84C] font-semibold mt-0.5">
            Global Internet Reach
          </div>
        </div>
      </div>

      {/* ── Visual Payoff Matrix Card ─────────────────────── */}
      <div className="rounded-2xl border border-white/[0.12] bg-[#10131E] p-5 sm:p-6 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="text-[11px] font-mono text-[#D4F84C] font-bold uppercase tracking-wider">
              Mathematical Asymmetry
            </div>
            <h4 className="text-base font-bold text-white mt-0.5">
              Risk vs. Reward Asymmetry Spectrum
            </h4>
          </div>

          {/* Model Toggle */}
          <div className="flex items-center gap-1 p-1 bg-black/40 rounded-xl border border-white/10 shrink-0">
            <button
              onClick={() => setSelectedModel('asymmetric')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedModel === 'asymmetric'
                  ? 'bg-[#D4F84C] text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              TFP Asymmetric Bets
            </button>
            <button
              onClick={() => setSelectedModel('traditional')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedModel === 'traditional'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Traditional Business
            </button>
          </div>
        </div>

        {/* Custom SVG Chart / Matrix */}
        <div className="my-6 relative bg-[#090B12] rounded-xl border border-white/[0.08] p-4 sm:p-6 overflow-hidden">
          <div className="h-64 sm:h-72 w-full">
            <svg
              viewBox="0 0 600 240"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="tfpGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4F84C" stopOpacity="0.05" />
                  <stop offset="60%" stopColor="#D4F84C" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#D4F84C" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="tradGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EF4444" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#EF4444" stopOpacity="0.05" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Grid Lines */}
              <line x1="50" y1="20" x2="570" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="50" y1="75" x2="570" y2="75" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="50" y1="130" x2="570" y2="130" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="50" y1="185" x2="570" y2="185" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

              {/* Zero Line / Break-even Horizon */}
              <line x1="50" y1="160" x2="570" y2="160" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
              <text x="15" y="164" fill="#a1a1aa" fontSize="10" fontFamily="monospace" fontWeight="bold">
                $0 BE
              </text>

              {/* Y Axis Labels */}
              <text x="10" y="25" fill="#D4F84C" fontSize="10" fontFamily="monospace" fontWeight="bold">
                +$30k
              </text>
              <text x="10" y="80" fill="#a1a1aa" fontSize="10" fontFamily="monospace">
                +$15k
              </text>
              <text x="5" y="220" fill="#f87171" fontSize="10" fontFamily="monospace">
                -$50k
              </text>

              {/* Traditional Curve (Downside heavy) */}
              <path
                d="M 60 160 C 120 220, 220 230, 320 200 C 400 170, 480 150, 560 110"
                fill="none"
                stroke={selectedModel === 'traditional' ? '#EF4444' : '#ef444455'}
                strokeWidth={selectedModel === 'traditional' ? '3' : '1.5'}
                strokeDasharray={selectedModel === 'traditional' ? 'none' : '4 4'}
              />

              {/* TFP Asymmetric Curve (Floor at -$50, hockey stick exponential) */}
              <path
                d="M 60 160 C 90 168, 140 168, 180 155 C 240 135, 340 70, 560 25"
                fill="none"
                stroke={selectedModel === 'asymmetric' ? '#D4F84C' : '#d4f84c55'}
                strokeWidth={selectedModel === 'asymmetric' ? '3.5' : '1.5'}
                filter={selectedModel === 'asymmetric' ? 'url(#glow)' : undefined}
              />

              {/* Shaded Area under TFP Curve */}
              {selectedModel === 'asymmetric' && (
                <path
                  d="M 60 160 C 90 168, 140 168, 180 155 C 240 135, 340 70, 560 25 L 560 160 Z"
                  fill="url(#tfpGradient)"
                />
              )}

              {/* Points on TFP Curve */}
              <circle cx="120" cy="166" r="4" fill="#D4F84C" />
              <circle cx="340" cy="70" r="5" fill="#D4F84C" />
              <circle cx="560" cy="25" r="6" fill="#D4F84C" stroke="#000" strokeWidth="2" />

              {/* Highlight callout text on chart */}
              <g transform="translate(190, 105)">
                <rect width="180" height="26" rx="6" fill="#141724" stroke="rgba(212,248,76,0.4)" />
                <text x="10" y="17" fill="#D4F84C" fontSize="10" fontWeight="bold" fontFamily="monospace">
                  CAPPED LOSS: -$50 MAX
                </text>
              </g>

              <g transform="translate(390, 30)">
                <rect width="170" height="26" rx="6" fill="#141724" stroke="rgba(212,248,76,0.4)" />
                <text x="10" y="17" fill="#D4F84C" fontSize="10" fontWeight="bold" fontFamily="monospace">
                  90%+ MARGIN RUN-RATE
                </text>
              </g>
            </svg>
          </div>

          {/* X Axis Labels */}
          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 pt-2 border-t border-white/[0.08]">
            <span>Day 0 (Launch)</span>
            <span>Week 2 (Validation)</span>
            <span>Month 1 (First Dollar)</span>
            <span>Month 3 (System Scale)</span>
          </div>
        </div>

        {/* ── Comparison Details ────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className={`p-4 rounded-xl border transition-all ${
              selectedModel === 'asymmetric'
                ? 'bg-[#D4F84C]/[0.06] border-[#D4F84C]/40 text-white'
                : 'bg-white/[0.02] border-white/[0.08] text-zinc-400'
            }`}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4F84C]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  The TFP Asymmetric Bet
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#D4F84C] bg-[#D4F84C]/10 px-2 py-0.5 rounded">
                Positive Convexity
              </span>
            </div>
            <ul className="text-xs space-y-1.5 text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-[#D4F84C] font-bold">✓</span>
                <span><strong>Worst Case Scenario:</strong> Lose $20–$50 on domain/tools and learn 10 new market lessons.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4F84C] font-bold">✓</span>
                <span><strong>Best Case Scenario:</strong> Build an evergreen digital asset printing $10,000–$35,000/mo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4F84C] font-bold">✓</span>
                <span><strong>Marginal Cost:</strong> Selling 1 copy vs 1,000 copies costs the exact same $0.</span>
              </li>
            </ul>
          </div>

          <div
            className={`p-4 rounded-xl border transition-all ${
              selectedModel === 'traditional'
                ? 'bg-red-500/[0.06] border-red-500/40 text-white'
                : 'bg-white/[0.02] border-white/[0.08] text-zinc-400'
            }`}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Traditional Business Trap
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                Negative Convexity
              </span>
            </div>
            <ul className="text-xs space-y-1.5 text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span><strong>Worst Case Scenario:</strong> Lose $30,000–$100,000 in leases, unsold stock, and debt.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span><strong>Best Case Scenario:</strong> Grind 70 hours a week for a modest 10–15% net profit margin.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span><strong>Linear Overhead:</strong> More clients require hiring more headcount and bigger warehouses.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
