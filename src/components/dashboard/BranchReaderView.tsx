'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  TrendingUp,
  ShieldCheck,
  Zap,
  Target,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Award,
  Layers,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  PhoneCall,
  Clock,
  Compass,
} from 'lucide-react';
import { Branch17PageData, PlaybookStepDetailed } from '@/types/branchPlaybook';
import { UnitEconomicsCalculator } from './UnitEconomicsCalculator';
import { CopyableBlock } from './CopyableBlock';

interface BranchReaderViewProps {
  branchData: Branch17PageData;
  completedTasks: Record<string, boolean>;
  onToggleTask: (taskId: string) => void;
  onOpenBooking: () => void;
}

export const BranchReaderView: React.FC<BranchReaderViewProps> = ({
  branchData,
  completedTasks,
  onToggleTask,
  onOpenBooking,
}) => {
  // Page number: 1 to 17
  const [activePage, setActivePage] = useState<number>(1);
  const [direction, setDirection] = useState<number>(0);

  // Helper to determine which part the current page belongs to
  const getPartFromPage = (p: number): 1 | 2 | 3 => {
    if (p <= 5) return 1;
    if (p <= 7) return 2;
    return 3;
  };

  const activePart = getPartFromPage(activePage);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > 17) return;
    setDirection(newPage > activePage ? 1 : -1);
    setActivePage(newPage);
    const mainEl = document.querySelector('main');
    if (mainEl) mainEl.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 25 : -25,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.22, ease: 'easeOut' as const },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -25 : 25,
      opacity: 0,
      transition: { duration: 0.16, ease: 'easeIn' as const },
    }),
  };

  // Find step data if in Part 3 (pages 8-17)
  const currentStepData: PlaybookStepDetailed | undefined =
    activePage >= 8 && activePage <= 17
      ? branchData.part3Steps.find((s) => s.pageNumber === activePage) || branchData.part3Steps[activePage - 8]
      : undefined;

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12 select-text">
      {/* ── Top Reader Navigation Bar ────────────────────────── */}
      <div className="rounded-2xl border border-white/[0.12] bg-[#0D101A] p-4 sm:p-6 shadow-xl">
        {/* Top Branch Header Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#D4F84C]/15 border border-[#D4F84C]/40 text-[#D4F84C] uppercase tracking-wider">
                {branchData.badge}
              </span>
              <span className="text-xs font-mono font-bold text-zinc-300">
                {branchData.targetBenchmark}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {branchData.branchName}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-1.5 rounded-xl bg-black/40 border border-white/10 text-right">
              <span className="text-[10px] font-mono uppercase text-zinc-400 block font-semibold">Reader</span>
              <span className="text-xs font-mono font-bold text-[#D4F84C]">
                Page {activePage} of 17
              </span>
            </div>
          </div>
        </div>

        {/* ── 3-Part Sub-Navigation Selector ──────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mt-4">
          <button
            onClick={() => handlePageChange(1)}
            className={`p-3 rounded-xl border text-left transition-all ${
              activePart === 1
                ? 'bg-[#D4F84C]/15 border-[#D4F84C]/60 text-white shadow-sm'
                : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200'
            }`}
          >
            <div className="flex items-center justify-between text-[11px] font-mono font-bold mb-0.5">
              <span className={activePart === 1 ? 'text-[#D4F84C]' : 'text-zinc-400'}>PART 1</span>
              <span>P. 1–5</span>
            </div>
            <div className="text-xs font-bold text-white truncate">
              Market Reality &amp; Mechanics
            </div>
          </button>

          <button
            onClick={() => handlePageChange(6)}
            className={`p-3 rounded-xl border text-left transition-all ${
              activePart === 2
                ? 'bg-[#D4F84C]/15 border-[#D4F84C]/60 text-white shadow-sm'
                : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200'
            }`}
          >
            <div className="flex items-center justify-between text-[11px] font-mono font-bold mb-0.5">
              <span className={activePart === 2 ? 'text-[#D4F84C]' : 'text-zinc-400'}>PART 2</span>
              <span>P. 6–7</span>
            </div>
            <div className="text-xs font-bold text-white truncate">
              Case Studies &amp; Benchmarks
            </div>
          </button>

          <button
            onClick={() => handlePageChange(8)}
            className={`p-3 rounded-xl border text-left transition-all ${
              activePart === 3
                ? 'bg-[#D4F84C]/15 border-[#D4F84C]/60 text-white shadow-sm'
                : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200'
            }`}
          >
            <div className="flex items-center justify-between text-[11px] font-mono font-bold mb-0.5">
              <span className={activePart === 3 ? 'text-[#D4F84C]' : 'text-zinc-400'}>PART 3</span>
              <span>P. 8–17</span>
            </div>
            <div className="text-xs font-bold text-white truncate">
              10-Step Execution Playbook
            </div>
          </button>
        </div>

        {/* ── Sub-Page Stepper Pills ─────────────────────────── */}
        <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center gap-1.5 overflow-x-auto pb-1">
          {Array.from({ length: 17 }, (_, i) => i + 1).map((pNum) => {
            const isCurrent = activePage === pNum;
            const partOfP = getPartFromPage(pNum);

            let label = `P.${pNum}`;
            if (pNum === 1) label = '1. Macro';
            if (pNum === 2) label = '2. Economics';
            if (pNum === 3) label = '3. Architecture';
            if (pNum === 4) label = '4. Leverage';
            if (pNum === 5) label = '5. Failures';
            if (pNum === 6) label = '6. Case Studies';
            if (pNum === 7) label = '7. Swipe File';
            if (pNum >= 8) label = `Step ${pNum - 7}`;

            return (
              <button
                key={pNum}
                onClick={() => handlePageChange(pNum)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold whitespace-nowrap transition-all shrink-0 ${
                  isCurrent
                    ? 'bg-[#D4F84C] text-black shadow-sm font-black'
                    : activePart === partOfP
                    ? 'bg-white/[0.08] text-zinc-200 hover:bg-white/15'
                    : 'bg-white/[0.03] text-zinc-500 hover:text-zinc-300'
                }`}
                title={`Jump to Page ${pNum}`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Main 17-Page Content Workspace ──────────────────── */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={activePage}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="rounded-2xl border border-white/[0.10] bg-[#0A0D16] p-6 sm:p-8 space-y-6"
        >
          {/* ════════════════════════════════════════════════════
              PART 1: MARKET REALITY & MECHANICS (Pages 1 to 5)
          ════════════════════════════════════════════════════ */}

          {/* PAGE 1: MACRO MARKET REALITY */}
          {activePage === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#D4F84C] uppercase tracking-wider">
                  Page 01 // Macro Market Reality &amp; Buyer Psychology
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {branchData.part1.page1MacroReality.headline}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-2">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#D4F84C]" />
                    Current 2026 Industry Landscape
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {branchData.part1.page1MacroReality.currentLandscape}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-red-500/[0.03] border border-red-500/20 space-y-2">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    Why Old Models Fail
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {branchData.part1.page1MacroReality.whyOldMethodsFail}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#121624] border border-white/10 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#D4F84C]" />
                  Modern Buyer Expectations in 2026
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {branchData.part1.page1MacroReality.modernBuyerExpectations}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#D4F84C]/15 via-[#121624] to-[#121624] border border-[#D4F84C]/40">
                <div className="text-[10px] font-mono font-bold text-[#D4F84C] uppercase tracking-wider">
                  The Core Thesis
                </div>
                <p className="text-sm sm:text-base font-bold text-white mt-1">
                  {branchData.part1.page1MacroReality.marketThesis}
                </p>
              </div>

              {/* Tech Stack Bar */}
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  Essential Tech Stack for {branchData.shortName}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {branchData.techStackList.map((tool, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-2"
                    >
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white truncate">{tool.name}</div>
                        <div className="text-[10px] text-zinc-400 truncate">{tool.role}</div>
                      </div>
                      <span className="text-[10px] font-mono text-[#D4F84C] font-semibold shrink-0">
                        {tool.cost}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PAGE 2: CORE ECONOMICS & UNIT PROFITABILITY */}
          {activePage === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#D4F84C] uppercase tracking-wider">
                  Page 02 // Core Economics &amp; Unit Profitability
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {branchData.part1.page2UnitEconomics.headline}
                </h3>
              </div>

              {/* Embedded Interactive Unit Economics Calculator */}
              <UnitEconomicsCalculator
                initialTraffic={branchData.part1.page2UnitEconomics.calculatorDefaults.traffic}
                initialConversion={branchData.part1.page2UnitEconomics.calculatorDefaults.conversionRate}
                initialAOV={branchData.part1.page2UnitEconomics.calculatorDefaults.aov}
                initialFeePercent={branchData.part1.page2UnitEconomics.calculatorDefaults.feePercent}
                initialOverhead={branchData.part1.page2UnitEconomics.calculatorDefaults.overhead}
                unitLabel={branchData.part1.page2UnitEconomics.calculatorDefaults.unitLabel}
                branchName={branchData.shortName}
              />

              {/* P&L Breakdown Table */}
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
                <div className="p-4 border-b border-white/[0.08] flex items-center justify-between">
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Institutional P&amp;L Financial Model
                  </h4>
                  <span className="text-[10px] font-mono text-[#D4F84C]">VERIFIED TARGETS</span>
                </div>
                <div className="divide-y divide-white/[0.06] text-xs">
                  {branchData.part1.page2UnitEconomics.pAndLBreakdown.map((row, idx) => (
                    <div key={idx} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="font-semibold text-white">{row.item}</div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-[#D4F84C]">{row.benchmark}</span>
                        <span className="text-[11px] text-zinc-400">({row.note})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CAC & LTV Benchmarks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {branchData.part1.page2UnitEconomics.cacLtvBenchmarks.map((b, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-[10px] font-mono uppercase text-zinc-400 font-bold">{b.metric}</div>
                    <div className="text-lg font-mono font-black text-white mt-1">{b.target}</div>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{b.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PAGE 3: SYSTEMIC ARCHITECTURE & PIPELINE FLOW */}
          {activePage === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#D4F84C] uppercase tracking-wider">
                  Page 03 // Systemic Architecture &amp; Pipeline Flow
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {branchData.part1.page3Architecture.headline}
                </h3>
              </div>

              {/* Visual Multi-Stage Flow Diagram */}
              <div className="space-y-3.5 my-6">
                {branchData.part1.page3Architecture.systemFlowStages.map((stage, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#121622] border border-white/[0.08] hover:border-[#D4F84C]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-[#D4F84C]/20 text-[#D4F84C] font-mono font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4F84C]">
                          {stage.stage}
                        </div>
                        <h4 className="text-sm font-bold text-white mt-0.5 group-hover:text-[#D4F84C] transition-colors">
                          {stage.name}
                        </h4>
                        <p className="text-xs text-zinc-300 mt-1 leading-relaxed max-w-2xl">
                          {stage.mechanism}
                        </p>
                      </div>
                    </div>

                    <div className="sm:text-right shrink-0">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-black/40 text-[#D4F84C] border border-white/10 block w-fit sm:w-auto">
                        Output: {stage.output}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs text-zinc-400 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#D4F84C] shrink-0" />
                <span>{branchData.part1.page3Architecture.architectureDiagramNote}</span>
              </div>
            </div>
          )}

          {/* PAGE 4: ASYMMETRIC LEVERAGE VECTORS */}
          {activePage === 4 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#D4F84C] uppercase tracking-wider">
                  Page 04 // Asymmetric Leverage Vectors
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {branchData.part1.page4AsymmetricLeverage.headline}
                </h3>
              </div>

              <div className="space-y-4 my-6">
                {branchData.part1.page4AsymmetricLeverage.leverageVectors.map((vec, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#121622] border border-white/[0.08] space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#D4F84C]" />
                        {vec.vector}
                      </h4>
                      <span className="text-[10px] font-mono font-bold text-[#D4F84C] bg-[#D4F84C]/10 px-2 py-0.5 rounded">
                        Vector 0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {vec.description}
                    </p>
                    <div className="pt-2 border-t border-white/[0.06] text-xs font-mono font-bold text-[#D4F84C]">
                      Mathematical Superiority: {vec.mathAdvantage}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PAGE 5: THE 99% FAILURE ANALYSIS */}
          {activePage === 5 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                  Page 05 // Forensic Failure Analysis
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {branchData.part1.page5FailureAnalysis.headline}
                </h3>
              </div>

              {/* Capital Preservation Rule */}
              <div className="p-5 rounded-2xl bg-red-500/[0.06] border border-red-500/30 flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                    Non-Negotiable Capital Preservation Directive
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-200 mt-1 leading-relaxed">
                    {branchData.part1.page5FailureAnalysis.capitalPreservationRule}
                  </p>
                </div>
              </div>

              {/* Top 5 Failure Traps */}
              <div className="space-y-3.5 my-6">
                {branchData.part1.page5FailureAnalysis.traps.map((trap, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-red-500/30 transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-red-500/15 text-red-400 font-mono font-bold text-xs flex items-center justify-center">
                          {trap.trapNumber}
                        </span>
                        <h4 className="text-sm font-bold text-white">{trap.title}</h4>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-red-400">FATAL ERROR</span>
                    </div>

                    <div className="text-xs text-zinc-400 pl-8 leading-relaxed">
                      <strong className="text-red-300">The Fatal Mistake:</strong> {trap.fatalMistake}
                    </div>

                    <div className="text-xs text-zinc-200 pl-8 pt-1.5 border-t border-white/[0.04] leading-relaxed">
                      <strong className="text-[#D4F84C]">Mitigation Protocol:</strong> {trap.mitigationProtocol}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════
              PART 2: TOP BENCHMARKS & CASE STUDIES (Pages 6 to 7)
          ════════════════════════════════════════════════════ */}

          {/* PAGE 6: REAL-WORLD CASE STUDIES */}
          {activePage === 6 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#D4F84C] uppercase tracking-wider">
                  Page 06 // Documented Proof &amp; Verified Case Studies
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Real-World Execution Case Studies for {branchData.shortName}
                </h3>
              </div>

              <div className="space-y-6 my-6">
                {branchData.part2.page6CaseStudies.map((cs, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/[0.12] bg-[#121622] p-6 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#D4F84C] uppercase tracking-wider block">
                          Verified Case Study 0{idx + 1}
                        </span>
                        <h4 className="text-base sm:text-lg font-black text-white mt-0.5">
                          {cs.title}
                        </h4>
                      </div>

                      <div className="text-right">
                        <span className="text-base sm:text-lg font-mono font-black text-[#D4F84C] block">
                          {cs.revenue}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400">
                          {cs.margin} ({cs.timeline})
                        </span>
                      </div>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-black/40 border border-white/05">
                        <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold block mb-1">
                          Traffic Inflow Source
                        </span>
                        <p className="text-zinc-200">{cs.trafficSource}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-black/40 border border-white/05">
                        <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold block mb-1">
                          Pricing Structure &amp; AOV
                        </span>
                        <p className="text-zinc-200">{cs.pricingStructure}</p>
                      </div>
                    </div>

                    {/* Funnel Architecture */}
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs">
                      <span className="text-[10px] font-mono text-[#D4F84C] uppercase font-bold block mb-1">
                        Exact Funnel Sequence:
                      </span>
                      <p className="text-zinc-300 font-mono text-[11px]">{cs.exactFunnel}</p>
                    </div>

                    {/* Breakdown Narrative */}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {cs.breakdownStory}
                    </p>

                    <div className="pt-3 border-t border-white/[0.08] flex items-center gap-2 text-xs text-[#D4F84C]">
                      <Award className="w-4 h-4 shrink-0" />
                      <span><strong>Key Takeaway:</strong> {cs.keyTakeaway}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PAGE 7: OFFER TEARDOWN & SWIPE FILE */}
          {activePage === 7 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#D4F84C] uppercase tracking-wider">
                  Page 07 // Offer Teardown &amp; Copyable Swipe Files
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  High-Converting Headlines, Value Stacks &amp; Ready-to-Send Scripts
                </h3>
              </div>

              {/* Headline Formulas */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Proven Headline Formulas (Fill in the Blanks)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {branchData.part2.page7SwipeFile.headlineFormulas.map((h, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                      <div className="text-[11px] font-mono font-bold text-[#D4F84C]">{h.formula}</div>
                      <p className="text-xs text-zinc-200 font-medium">{h.example}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value Stack Framework */}
              <div className="space-y-3 pt-3">
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Value-Stack Architecture &amp; Pricing Anchor
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {branchData.part2.page7SwipeFile.valueStackFramework.map((tier, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#121622] border border-white/[0.08] space-y-2">
                      <div className="text-xs font-bold text-white">{tier.tier}</div>
                      <div className="text-lg font-mono font-black text-[#D4F84C]">{tier.price}</div>
                      <p className="text-xs text-zinc-300 leading-relaxed">{tier.offer}</p>
                      <div className="text-[10px] font-mono text-zinc-400 pt-2 border-t border-white/[0.06]">
                        {tier.anchor}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ready-to-Copy Swipe Files with 1-Click Copy Buttons */}
              <div className="space-y-4 pt-3">
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Copyable Production Swipe File
                </h4>
                {branchData.part2.page7SwipeFile.swipeItems.map((swipe, idx) => (
                  <CopyableBlock
                    key={idx}
                    title={swipe.title}
                    badge={swipe.type}
                    type="script"
                    description={swipe.purpose}
                    content={swipe.content}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════
              PART 3: THE 10-STEP EXECUTION PLAYBOOK (Pages 8 to 17)
          ════════════════════════════════════════════════════ */}
          {activePage >= 8 && activePage <= 17 && currentStepData && (
            <div className="space-y-6">
              {/* Step Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#D4F84C] text-black uppercase">
                    Step {currentStepData.stepNumber} of 10
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    Page {activePage} // Execution Sprint
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {currentStepData.title}
                </h3>
                <p className="text-sm text-zinc-300 font-medium">
                  {currentStepData.subtitle}
                </p>
              </div>

              {/* Sprint Meta Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">Objective</div>
                  <div className="text-xs font-bold text-white mt-1 leading-snug">
                    {currentStepData.objective}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">Target Speed</div>
                  <div className="text-xs font-bold text-[#D4F84C] font-mono mt-1">
                    {currentStepData.timeToExecute}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">Deliverable</div>
                  <div className="text-xs font-bold text-white mt-1 leading-snug">
                    {currentStepData.deliverable}
                  </div>
                </div>
              </div>

              {/* Detailed Walkthrough Instructions */}
              <div className="p-5 rounded-2xl bg-[#121622] border border-white/[0.08] space-y-3">
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#D4F84C]" />
                  Tactical Execution Protocol
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                  {currentStepData.detailedWalkthrough.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-[#D4F84C] font-mono font-bold shrink-0">
                        {idx + 1}.
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code Snippet / AI Prompt Chain / Script with 1-Click Copy */}
              {currentStepData.codeOrScriptSnippet && (
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Copyable Asset &amp; Starter Code
                  </div>
                  <CopyableBlock
                    title={currentStepData.codeOrScriptSnippet.title}
                    badge={currentStepData.codeOrScriptSnippet.badge}
                    type={currentStepData.codeOrScriptSnippet.type}
                    description={currentStepData.codeOrScriptSnippet.description}
                    content={currentStepData.codeOrScriptSnippet.content}
                  />
                </div>
              )}

              {/* Interactive Step Task Checkboxes */}
              <div className="p-5 rounded-2xl bg-[#0F121C] border border-white/[0.08] space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Action Checklist for Step {currentStepData.stepNumber}
                  </h4>
                  <span className="text-[10px] font-mono text-[#D4F84C]">
                    Check off as you complete
                  </span>
                </div>

                <div className="space-y-2">
                  {currentStepData.tasks.map((task) => {
                    const isDone = completedTasks[task.id] || false;

                    return (
                      <label
                        key={task.id}
                        onClick={() => onToggleTask(task.id)}
                        className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                          isDone
                            ? 'bg-[#D4F84C]/[0.08] border-[#D4F84C]/40 text-white'
                            : 'bg-white/[0.02] border-white/[0.06] text-zinc-300 hover:border-white/20'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                            isDone
                              ? 'bg-[#D4F84C] border-[#D4F84C] text-black shadow-sm'
                              : 'bg-black/40 border-white/30 text-transparent'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>

                        <div className="flex-1 text-xs font-medium">
                          <span className={isDone ? 'line-through text-zinc-400' : 'text-zinc-200'}>
                            {task.text}
                          </span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Golden Rule Callout */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#D4F84C]/10 to-transparent border-l-4 border-[#D4F84C] text-xs sm:text-sm text-zinc-200 leading-relaxed">
                <strong className="text-white block font-bold mb-0.5">Golden Rule:</strong>
                {currentStepData.goldenRule}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Bottom Prev / Next Navigation Footer ─────────────── */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => handlePageChange(activePage - 1)}
          disabled={activePage === 1}
          className={`px-4 py-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
            activePage === 1
              ? 'opacity-30 border-transparent text-zinc-500 cursor-not-allowed'
              : 'bg-[#141824] border-white/10 text-white hover:border-white/30 cursor-pointer'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Previous Page
        </button>

        <div className="text-xs font-mono text-zinc-400">
          Page {activePage} of 17
        </div>

        {activePage < 17 ? (
          <button
            onClick={() => handlePageChange(activePage + 1)}
            className="px-5 py-2.5 rounded-xl bg-[#D4F84C] text-black hover:bg-[#c2e43f] text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-md cursor-pointer"
          >
            <span>Next Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4F84C] to-[#34D399] text-black font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md cursor-pointer"
          >
            <span>Complete &amp; Book Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* ── High-Ticket Done-For-You Banner ───────────────────── */}
      <div className="pt-4">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141824] via-[#101422] to-[#121622] border border-[#D4F84C]/40 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4F84C]">
              High-Ticket Acceleration Tier
            </span>
            <h4 className="text-base sm:text-lg font-black text-white">
              Need done-for-you implementation or custom 1-on-1 setup?
            </h4>
            <p className="text-xs text-zinc-300 max-w-xl leading-relaxed">
              Our private engineering team will build your custom funnels, set up your n8n infrastructure, or write your cold outreach scripts for {branchData.shortName}.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-xl bg-[#D4F84C] hover:bg-[#c2e43f] text-black font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-[#D4F84C]/15 cursor-pointer shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Book a 15-Minute Strategy Call →</span>
          </button>
        </div>
      </div>
    </div>
  );
};
