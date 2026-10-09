'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Target,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  Zap,
  TrendingUp,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  Flame,
} from 'lucide-react';
import { DeletionFilterDiagram } from './diagrams/DeletionFilterDiagram';

interface VehiclesViewProps {
  onSelectBranch: (branchId: string) => void;
  onBackToMindset: () => void;
}

interface EngineRow {
  id: string;
  name: string;
  tagline: string;
  capital: string;
  timeToDollar: string;
  margin: string;
  skillLevel: string;
  themeColor: string;
  bestFor: string;
  primaryAdvantage: string;
}

const ENGINES_DATA: EngineRow[] = [
  {
    id: 'digital-products',
    name: '01 Digital Products & Lead Magnets',
    tagline: 'High Margin (95%+)',
    capital: '$0 – $50',
    timeToDollar: '7 – 14 Days',
    margin: '95%',
    skillLevel: 'Medium',
    themeColor: '#D4F84C',
    bestFor: 'Solo operators wanting 100% passive software/Notion/PDF assets with zero client calls.',
    primaryAdvantage: 'Build once, sell infinitely with zero inventory and zero delivery overhead.',
  },
  {
    id: 'b2b-services',
    name: '02 B2B Services & Freelancing',
    tagline: 'Fastest Cashflow ($15k+/mo)',
    capital: '$0 – $100',
    timeToDollar: '3 – 10 Days',
    margin: '90%',
    skillLevel: 'High',
    themeColor: '#FF5733',
    bestFor: 'Operators with existing skills who want immediate 4-figure client retainers ($2k-$5k/mo).',
    primaryAdvantage: 'No upfront product build needed. Close 2 clients with cold scripts and hit $5,000/mo.',
  },
  {
    id: 'ecommerce-dropship',
    name: '03 E-Commerce & Micro-Dropshipping',
    tagline: 'High Volume ($20k+/mo)',
    capital: '$50 – $150',
    timeToDollar: '7 – 14 Days',
    margin: '60 – 70%',
    skillLevel: 'Medium',
    themeColor: '#FACC15',
    bestFor: 'Visual marketers skilled at TikTok/Reels creative testing and trend riding.',
    primaryAdvantage: 'Direct manufacturer-to-consumer fulfillment with no physical warehouse leases.',
  },
  {
    id: 'crypto-trading',
    name: '04 Trading & Non-Custodial Finance',
    tagline: 'Asymmetric Yield ($8k+/mo)',
    capital: '$100+',
    timeToDollar: 'Instant',
    margin: 'Variable',
    skillLevel: 'High Risk / High Reward',
    themeColor: '#A8A4CE',
    bestFor: 'Analytical operators with strict risk discipline who understand liquidity & on-chain yield.',
    primaryAdvantage: 'Instant execution and 24/7 global markets with zero customer service or fulfillment.',
  },
  {
    id: 'ai-automation',
    name: '05 AI & Workflow Automation',
    tagline: 'Maximum Retainer Stickiness',
    capital: '$0 – $50',
    timeToDollar: '5 – 12 Days',
    margin: '85 – 95%',
    skillLevel: 'Medium-High',
    themeColor: '#34D399',
    bestFor: 'Tech-savvy builders creating Make/n8n/LLM integrations for non-technical local businesses.',
    primaryAdvantage: 'Highest retention rate. Once an automated agent is embedded into client CRM, they never churn.',
  },
];

export const VehiclesView: React.FC<VehiclesViewProps> = ({
  onSelectBranch,
  onBackToMindset,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedEngineId, setSelectedEngineId] = useState<string>('digital-products');
  const [direction, setDirection] = useState<number>(0);

  const handlePageChange = (newPage: number) => {
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

  const selectedEngine = ENGINES_DATA.find((e) => e.id === selectedEngineId) || ENGINES_DATA[0];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.25, ease: 'easeOut' as const },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -30 : 30,
      opacity: 0,
      transition: { duration: 0.18, ease: 'easeIn' as const },
    }),
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* ── Top Header Hero Banner ──────────────────────────── */}
      <div className="relative rounded-2xl border border-white/[0.12] bg-[#0E111C] p-6 sm:p-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#34D399]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#34D399]/15 border border-[#34D399]/40 text-[#34D399] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                PHASE 0: FOUNDATION &amp; STRATEGY
              </span>
              <span className="text-[11px] font-mono text-zinc-400">
                MODULE 00.5 // 2 PARTS
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              Why These 5 Vehicles?
            </h1>

            <p className="text-sm text-zinc-300 max-w-2xl font-medium">
              We tested dozens of online business models and ruthlessly deleted 95% of them. Here is the architectural rationale and side-by-side comparison of the 5 survivors.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-right">
              <div className="text-[10px] font-mono uppercase text-zinc-400 font-semibold">Stage</div>
              <div className="text-sm font-mono font-bold text-[#34D399]">
                Part {currentPage} of 2
              </div>
            </div>
          </div>
        </div>

        {/* ── Top Horizontal 2-Tab Navigation Control ────────── */}
        <div className="mt-8 pt-5 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => handlePageChange(1)}
              className={`text-left p-3.5 rounded-xl border transition-all relative ${
                currentPage === 1
                  ? 'bg-[#34D399]/15 border-[#34D399]/60 text-white shadow-sm'
                  : 'bg-white/[0.02] border-white/[0.08] text-zinc-300 hover:bg-white/[0.06]'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className={`font-mono font-bold ${currentPage === 1 ? 'text-[#34D399]' : 'text-zinc-400'}`}>
                  Part 01
                </span>
                {currentPage > 1 && <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />}
              </div>
              <div className="text-sm font-bold text-white">
                1. The Deletion Filter (Why 95% of Models Fail)
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Eliminating Amazon FBA, generic agencies &amp; low-ticket blogs
              </div>

              {currentPage === 1 && (
                <motion.div
                  layoutId="activeVehiclesTab"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#34D399] rounded-full"
                />
              )}
            </button>

            <button
              onClick={() => handlePageChange(2)}
              className={`text-left p-3.5 rounded-xl border transition-all relative ${
                currentPage === 2
                  ? 'bg-[#34D399]/15 border-[#34D399]/60 text-white shadow-sm'
                  : 'bg-white/[0.02] border-white/[0.08] text-zinc-300 hover:bg-white/[0.06]'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className={`font-mono font-bold ${currentPage === 2 ? 'text-[#34D399]' : 'text-zinc-400'}`}>
                  Part 02
                </span>
              </div>
              <div className="text-sm font-bold text-white">
                2. The 5-Engine Comparison Matrix
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Capital, margins, timelines &amp; vehicle selection
              </div>

              {currentPage === 2 && (
                <motion.div
                  layoutId="activeVehiclesTab"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#34D399] rounded-full"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Tab Content ────────────────────────────────── */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentPage}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="rounded-2xl border border-white/[0.10] bg-[#0C0F17] p-6 sm:p-8"
        >
          {/* ══════════════════════════════════════════════════════
              PAGE 1: THE DELETION FILTER
          ══════════════════════════════════════════════════════ */}
          {currentPage === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#34D399] uppercase tracking-wider">
                  Strategic Elimination Protocol
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  How We Filtered Out the Noise.
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-4xl font-normal">
                  Most beginner entrepreneurs fail not because of lack of work ethic, but because they picked an economically broken business model. We audited hundreds of internet money methods and systematically eliminated the ones plagued by high startup capital, long feedback loops, and compressed profit margins.
                </p>
              </div>

              {/* Forensic Breakdown of 3 Killed Models */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 sm:p-5 rounded-xl bg-red-500/[0.04] border border-red-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white line-through decoration-red-500/80">
                      Amazon FBA
                    </span>
                    <span className="text-[10px] font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                      Dead for Solo Starters
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Killed by rising shipping freight costs, razor-thin profit margins (10–15%), and $5,000+ upfront inventory lockup. If Amazon suspends your account or a shipment gets delayed, 100% of your operational liquidity is trapped.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-red-500/[0.04] border border-red-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white line-through decoration-red-500/80">
                      Low-Ticket Affiliate Blogs
                    </span>
                    <span className="text-[10px] font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                      Killed by AI Search
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Killed by Google's AI Overviews and 12-month SEO lag times. Writing 200 blog posts hoping for $12 Amazon affiliate payouts is obsolete when AI search delivers direct answers before users ever click a site.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-red-500/[0.04] border border-red-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white line-through decoration-red-500/80">
                      Generic Content Agency
                    </span>
                    <span className="text-[10px] font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                      Killed by Commoditization
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Killed by 60-day enterprise sales cycles, manual pitch decks, and subjective client revisions. Without productized workflows, you become an unpaid project manager dealing with endless scope creep.
                  </p>
                </div>
              </div>

              {/* The Visual Filter Funnel Diagram */}
              <DeletionFilterDiagram />

              {/* Callout Card: TFP Filter Standard */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#34D399]/15 via-[#121622] to-[#121622] border border-[#34D399]/40 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#34D399] text-black font-black flex items-center justify-center shrink-0 text-sm shadow-md">
                  TFP
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#34D399] uppercase tracking-wider">
                    Our Uncompromising Benchmark
                  </div>
                  <h4 className="text-base font-extrabold text-white mt-0.5">
                    TFP Filter Standard
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-200 mt-1 leading-relaxed">
                    Must require <strong>under $200 startup capital</strong>, achieve <strong>80%+ gross margins</strong>, and allow <strong>first revenue within 7 to 21 days</strong>. Every branch in this playbook passed this exact gauntlet.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              PAGE 2: THE 5-ENGINE COMPARISON MATRIX
          ══════════════════════════════════════════════════════ */}
          {currentPage === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#34D399] uppercase tracking-wider">
                  Tactical Evaluation
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  The 5-Engine Comparison Matrix
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-4xl font-normal">
                  Compare the capital requirements, speed to revenue, margins, and skill level for each of the 5 profit vehicles. Click on any row to preview its strategic profile, or click "Launch Engine" to start executing immediately.
                </p>
              </div>

              {/* ── Interactive Comparison Table ──────────────────── */}
              <div className="rounded-2xl border border-white/[0.12] bg-[#0E111C] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/[0.10] bg-white/[0.03] text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                        <th className="py-3.5 px-4 font-bold">Engine Name</th>
                        <th className="py-3.5 px-3 font-bold">Capital Needed</th>
                        <th className="py-3.5 px-3 font-bold">Time to 1st $</th>
                        <th className="py-3.5 px-3 font-bold">Margin %</th>
                        <th className="py-3.5 px-3 font-bold">Skill Level Needed</th>
                        <th className="py-3.5 px-4 text-right font-bold">Launch Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.06] text-xs">
                      {ENGINES_DATA.map((row) => {
                        const isSelected = selectedEngineId === row.id;

                        return (
                          <tr
                            key={row.id}
                            onClick={() => setSelectedEngineId(row.id)}
                            className={`cursor-pointer transition-colors ${
                              isSelected
                                ? 'bg-white/[0.07]'
                                : 'hover:bg-white/[0.03]'
                            }`}
                          >
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-2.5">
                                <div
                                  className="w-2.5 h-2.5 rounded-full shrink-0"
                                  style={{ backgroundColor: row.themeColor }}
                                />
                                <div>
                                  <div className="font-bold text-white">
                                    {row.name}
                                  </div>
                                  <div className="text-[11px] text-zinc-400 font-medium">
                                    {row.tagline}
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className="py-3.5 px-3 font-mono font-semibold text-white">
                              {row.capital}
                            </td>

                            <td className="py-3.5 px-3 font-mono font-semibold text-zinc-200">
                              {row.timeToDollar}
                            </td>

                            <td className="py-3.5 px-3 font-mono font-bold text-[#D4F84C]">
                              {row.margin}
                            </td>

                            <td className="py-3.5 px-3">
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                                  row.skillLevel.includes('High')
                                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                                    : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                }`}
                              >
                                {row.skillLevel}
                              </span>
                            </td>

                            <td className="py-3.5 px-4 text-right">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onSelectBranch(row.id);
                                }}
                                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#D4F84C] hover:text-black text-white text-xs font-bold transition-all inline-flex items-center gap-1.5"
                              >
                                <span>Launch</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── Selected Engine Deep Dive Card ────────────────── */}
              <div className="p-5 rounded-2xl bg-[#141824] border border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: selectedEngine.themeColor }}
                    />
                    <h4 className="text-sm font-bold text-white">
                      Selected Vehicle Profile: {selectedEngine.name}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">
                    Click "Launch" to start execution
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/05">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block mb-1">
                      Ideal Operator Profile (Best For)
                    </span>
                    <p className="text-zinc-200 leading-relaxed">
                      {selectedEngine.bestFor}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/05">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block mb-1">
                      Primary Economic Advantage
                    </span>
                    <p className="text-zinc-200 leading-relaxed">
                      {selectedEngine.primaryAdvantage}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Bottom CTA Button ──────────────────────────────── */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#D4F84C]/10 via-[#101420] to-[#101420] border border-[#D4F84C]/40">
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-[#D4F84C] uppercase tracking-wider">
                    Ready to execute?
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-white">
                    Select Your Profit Engine in the Sidebar
                  </h4>
                  <p className="text-xs text-zinc-300">
                    Choose one engine to begin your 90-day execution protocol.
                  </p>
                </div>

                <button
                  onClick={() => onSelectBranch(selectedEngineId || 'digital-products')}
                  className="px-5 py-3 rounded-xl bg-[#D4F84C] hover:bg-[#c2e43f] text-black font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-[#D4F84C]/10 cursor-pointer shrink-0"
                >
                  <span>Select Your Engine in the Sidebar →</span>
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Bottom Navigation Footer ────────────────────────── */}
      <div className="flex items-center justify-between pt-2">
        {currentPage === 1 ? (
          <button
            onClick={onBackToMindset}
            className="px-4 py-2 rounded-xl bg-[#141824] border border-white/10 text-white hover:border-white/30 text-xs font-bold flex items-center gap-2 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Winner's Mindset
          </button>
        ) : (
          <button
            onClick={() => handlePageChange(1)}
            className="px-4 py-2 rounded-xl bg-[#141824] border border-white/10 text-white hover:border-white/30 text-xs font-bold flex items-center gap-2 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Previous Part
          </button>
        )}

        <div className="text-xs font-mono text-zinc-400">
          Module {currentPage} of 2
        </div>

        {currentPage === 1 ? (
          <button
            onClick={() => handlePageChange(2)}
            className="px-4 py-2 rounded-xl bg-[#34D399] text-black hover:bg-[#2dc48d] text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
          >
            Next: Comparison Matrix <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={() => onSelectBranch(selectedEngineId || 'digital-products')}
            className="px-4 py-2 rounded-xl bg-[#D4F84C] text-black hover:bg-[#c2e43f] text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
          >
            Enter Engine 01 <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
