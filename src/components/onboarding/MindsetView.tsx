'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Flame,
  Brain,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Lock,
  Unlock,
  ShieldCheck,
  Sparkles,
  Zap,
  Clock,
  Compass,
  FileCheck,
  AlertCircle,
} from 'lucide-react';
import { OperatorShiftDiagram } from './diagrams/OperatorShiftDiagram';
import { AsymmetricLeverageDiagram } from './diagrams/AsymmetricLeverageDiagram';
import { SpeedSprintDiagram } from './diagrams/SpeedSprintDiagram';

interface MindsetViewProps {
  onProceedToStrategy: () => void;
  onSelectBranch?: (branchId: string) => void;
}

const TABS = [
  { id: 1, title: '1. The Operator Shift', short: 'Operator Shift' },
  { id: 2, title: '2. Asymmetric Leverage', short: 'Asymmetric Leverage' },
  { id: 3, title: '3. Speed over Perfection', short: 'Speed over Perfection' },
  { id: 4, title: '4. The 90-Day Execution Contract', short: '90-Day Contract' },
];

export const MindsetView: React.FC<MindsetViewProps> = ({
  onProceedToStrategy,
  onSelectBranch,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isContractSigned, setIsContractSigned] = useState<boolean>(false);
  const [operatorName, setOperatorName] = useState<string>('Founder Member');
  const [direction, setDirection] = useState<number>(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tfp_contract_signed');
      if (saved === 'true') {
        setIsContractSigned(true);
      }
      const savedName = localStorage.getItem('tfp_operator_name');
      if (savedName) {
        setOperatorName(savedName);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleToggleContract = () => {
    const nextVal = !isContractSigned;
    setIsContractSigned(nextVal);
    try {
      localStorage.setItem('tfp_contract_signed', nextVal ? 'true' : 'false');
    } catch (e) {
      console.error(e);
    }
  };

  const handlePageChange = (newPage: number) => {
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

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
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4F84C]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#D4F84C]/15 border border-[#D4F84C]/40 text-[#D4F84C] flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 fill-current" />
                PHASE 0: FOUNDATION &amp; ONBOARDING
              </span>
              <span className="text-[11px] font-mono text-zinc-400">
                MODULE 00 // 4 PARTS
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              The Winner's Mindset
            </h1>

            <p className="text-sm text-zinc-300 max-w-2xl font-medium">
              The psychological, mathematical, and operational framework required to build sovereign digital cash flow. Read before executing any profit engine.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-right">
              <div className="text-[10px] font-mono uppercase text-zinc-400 font-semibold">Progress</div>
              <div className="text-sm font-mono font-bold text-[#D4F84C]">
                Page {currentPage} of 4
              </div>
            </div>
          </div>
        </div>

        {/* ── Top Horizontal Pagination Bar ──────────────────── */}
        <div className="mt-8 pt-5 border-t border-white/[0.08]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {TABS.map((tab) => {
              const isActive = currentPage === tab.id;
              const isPassed = currentPage > tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => handlePageChange(tab.id)}
                  className={`text-left p-3 rounded-xl border transition-all relative ${
                    isActive
                      ? 'bg-[#D4F84C]/15 border-[#D4F84C]/60 text-white shadow-sm'
                      : isPassed
                      ? 'bg-white/[0.04] border-white/15 text-zinc-300 hover:bg-white/[0.08]'
                      : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={`font-mono font-bold ${isActive ? 'text-[#D4F84C]' : 'text-zinc-400'}`}>
                      Part 0{tab.id}
                    </span>
                    {isPassed && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4F84C]" />
                    )}
                  </div>
                  <div className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-zinc-200'}`}>
                    {tab.short}
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D4F84C] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Main Tabbed Content Area with Slide Animation ──── */}
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
              PAGE 1: THE OPERATOR SHIFT
          ══════════════════════════════════════════════════════ */}
          {currentPage === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#D4F84C] uppercase tracking-wider">
                  Module 01 // Cognitive Rewiring
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  Stop Consuming. Start Building Assets.
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-4xl font-normal">
                  99% of people on the internet are passive consumers—funding other people's businesses with their attention. To make serious money online, you must cross the boundary from consumer to operator. Operators do not buy $1,000 courses to feel productive; they build scalable systems, write cold scripts, package digital assets, and let automated software capture cash flow 24/7.
                </p>
              </div>

              {/* Side-by-side comparison diagram */}
              <OperatorShiftDiagram />

              {/* Tactical Callout Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#141824] border border-[#D4F84C]/30 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#D4F84C]/20 border border-[#D4F84C]/40 flex items-center justify-center text-[#D4F84C] shrink-0 mt-0.5">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    The Operator's Core Theorem
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed">
                    Every hour spent scrolling social media or re-organizing your notes without publishing is an hour spent working as an unpaid employee for tech platforms. The moment you package an asset, set up a checkout link, or message a prospect, you become the house instead of the gambler.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              PAGE 2: ASYMMETRIC LEVERAGE
          ══════════════════════════════════════════════════════ */}
          {currentPage === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#D4F84C] uppercase tracking-wider">
                  Module 02 // Mathematical Superiority
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  High Upside, Capable Downside.
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-4xl font-normal">
                  Traditional businesses require massive initial capital, inventory risk, and 12-month payback periods. The 5 paths in TFP rely on asymmetric bets: low or zero starting capital, zero marginal cost of reproduction, and infinite global distribution via the web. If an offer fails, you lose $0 to $50. If it hits, you unlock thousands in high-margin cash flow.
                </p>
              </div>

              {/* Risk/Reward Metric Matrix */}
              <AsymmetricLeverageDiagram />

              {/* Asymmetry Formula Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#141824] border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#D4F84C]/20 border border-[#D4F84C]/40 flex items-center justify-center text-[#D4F84C] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    The Positive Convexity Protocol
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed">
                    When the downside of any experiment is limited to $30 (e.g., domain and one month of software) while the upside is $10,000+/mo, you can afford to test 10 iterations without risking your livelihood. One winner pays for 100 failed experiments and creates permanent financial independence.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              PAGE 3: SPEED OVER PERFECTION
          ══════════════════════════════════════════════════════ */}
          {currentPage === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#D4F84C] uppercase tracking-wider">
                  Module 03 // Execution Velocity
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  Shipping Beats Polishing Every Single Time.
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-4xl font-normal">
                  Perfectionism is a form of procrastination. A simple 1-page Framer layout or a 5-page Notion guide shipped in 48 hours will teach you more than 3 months of overthinking. Market feedback is the only metric that matters. Ship the MVP, gather real data, refine, and iterate.
                </p>
              </div>

              {/* 48-Hour Velocity Diagram */}
              <SpeedSprintDiagram />

              {/* The 48-Hour Rule Callout Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#D4F84C]/10 via-[#141824] to-[#141824] border border-[#D4F84C]/40 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D4F84C] text-black font-black flex items-center justify-center shrink-0 text-sm shadow-md">
                  48H
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#D4F84C] uppercase tracking-wider">
                    Non-Negotiable Rule
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                    The 48-Hour Rule
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-200 mt-1.5 leading-relaxed">
                    If an asset cannot be built and placed in front of a potential client within 48 hours, the scope is too large. Cut the scope in half and ship. You cannot steer a stationary ship; only movement generates feedback.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              PAGE 4: THE 90-DAY EXECUTION CONTRACT
          ══════════════════════════════════════════════════════ */}
          {currentPage === 4 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#D4F84C] uppercase tracking-wider">
                  Module 04 // Unbreakable Commitment
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  Commitment to the Protocol.
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-4xl font-normal">
                  Do not switch between branches every 3 days. Select ONE profit engine from the 5 options below, follow the step-by-step playbooks relentlessly for 90 days, and master the distribution channel before touching a second vehicle.
                </p>
              </div>

              {/* Formal Contract Certificate Card */}
              <div className="rounded-2xl border-2 border-dashed border-[#D4F84C]/40 bg-[#0B0E17] p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4F84C]/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/[0.10] gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#D4F84C]/20 border border-[#D4F84C]/40 flex items-center justify-center text-[#D4F84C]">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4F84C] font-bold block">
                        Official Operator Deed
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-white">
                        Protocol 90: Execution Contract
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300">
                      Term: 90 Days Locked
                    </span>
                  </div>
                </div>

                {/* Contract Articles */}
                <div className="my-6 space-y-3.5 text-xs sm:text-sm text-zinc-300">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                    <span className="text-[#D4F84C] font-mono font-bold">01.</span>
                    <div>
                      <strong className="text-white">Zero Vehicle Hopping:</strong> I pledge to choose ONE vehicle and ignore all shiny distractions, new trends, or alternative models for 90 consecutive days.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                    <span className="text-[#D4F84C] font-mono font-bold">02.</span>
                    <div>
                      <strong className="text-white">Daily Distribution Quota:</strong> I will send at least 20 targeted direct messages or publish 1 distribution asset every single day without exception.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                    <span className="text-[#D4F84C] font-mono font-bold">03.</span>
                    <div>
                      <strong className="text-white">Emotional Neutrality:</strong> Rejection, unanswered DMs, and slow initial traction are data points, not failures. I will optimize the hook, not quit the vehicle.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                    <span className="text-[#D4F84C] font-mono font-bold">04.</span>
                    <div>
                      <strong className="text-white">Relentless Accountability:</strong> I will check off tasks in the TFP dashboard daily and track net profit collected in my operating bank account.
                    </div>
                  </div>
                </div>

                {/* Interactive Checkbox & Signature Area */}
                <div className="pt-6 border-t border-white/[0.10] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <label
                    onClick={handleToggleContract}
                    className="flex items-center gap-3 cursor-pointer select-none group"
                  >
                    <div
                      className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${
                        isContractSigned
                          ? 'bg-[#D4F84C] border-[#D4F84C] text-black shadow-md'
                          : 'bg-black/50 border-white/30 text-transparent group-hover:border-[#D4F84C]'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 fill-current stroke-black" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#D4F84C] transition-colors">
                        Sign the Execution Contract
                      </span>
                      <p className="text-[11px] text-zinc-400">
                        {isContractSigned
                          ? 'Signed & Recorded on Protocol Ledger'
                          : 'Check this box to pledge 90 days of disciplined execution'}
                      </p>
                    </div>
                  </label>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2">
                    {isContractSigned ? (
                      <span className="text-xs font-mono font-bold text-[#D4F84C] bg-[#D4F84C]/15 border border-[#D4F84C]/40 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                        <Unlock className="w-3.5 h-3.5" /> STRATEGY UNLOCKED
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-zinc-400 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5" /> SIGNATURE REQUIRED
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Unlocked / Locked CTA Banner */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#141824] border border-white/10">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#D4F84C]" />
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                    {isContractSigned
                      ? 'Contract signed! Next step: examine the strategic rationale behind the 5 vehicles.'
                      : 'You must sign the contract above to unlock the strategic rationale.'}
                  </span>
                </div>

                <button
                  disabled={!isContractSigned}
                  onClick={onProceedToStrategy}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all ${
                    isContractSigned
                      ? 'bg-[#D4F84C] text-black hover:bg-[#c2e43f] shadow-lg shadow-[#D4F84C]/10 cursor-pointer'
                      : 'bg-zinc-800 text-zinc-500 border border-white/5 cursor-not-allowed'
                  }`}
                >
                  <span>Proceed to Strategy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Bottom Step Navigation Footer ───────────────────── */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
            currentPage === 1
              ? 'opacity-30 border-transparent text-zinc-500 cursor-not-allowed'
              : 'bg-[#141824] border-white/10 text-white hover:border-white/30'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Previous Part
        </button>

        <div className="text-xs font-mono text-zinc-400">
          Module {currentPage} of 4
        </div>

        {currentPage < 4 ? (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 rounded-xl bg-[#D4F84C] text-black hover:bg-[#c2e43f] text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
          >
            Next Part <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={onProceedToStrategy}
            disabled={!isContractSigned}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isContractSigned
                ? 'bg-[#D4F84C] text-black hover:bg-[#c2e43f]'
                : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
            }`}
          >
            Next: Strategy <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
