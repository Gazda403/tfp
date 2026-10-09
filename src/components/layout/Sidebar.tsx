'use client';

import React from 'react';
import {
  FileSpreadsheet,
  Briefcase,
  ShoppingBag,
  TrendingUp,
  Cpu,
  X,
  Award,
  ChevronRight,
  Zap,
  Flame,
  Compass,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { PlaybookBranch } from '@/types/playbook';

export type ActiveViewId = 'onboarding-mindset' | 'onboarding-vehicles' | string;

interface SidebarProps {
  branches: PlaybookBranch[];
  activeViewId?: string;
  activeBranchId?: string;
  onSelectView?: (viewId: string) => void;
  onSelectBranch?: (branchId: string) => void;
  completedTasks: Record<string, boolean>;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  FileSpreadsheet,
  Briefcase,
  ShoppingBag,
  TrendingUp,
  Cpu,
};

const branchSubtitleMap: Record<string, { target: string; highlight: string }> = {
  'digital-products': {
    target: '$10,000+/mo Target',
    highlight: 'High Margin 90%+',
  },
  'b2b-services': {
    target: '$15,000+/mo Target',
    highlight: 'Fastest Cashflow $1k–$5k Deals',
  },
  'ecommerce-dropship': {
    target: '$20,000+/mo Target',
    highlight: 'High Volume Scale',
  },
  'crypto-trading': {
    target: '$8,000+/mo Target',
    highlight: 'Asymmetric Compounding',
  },
  'ai-automation': {
    target: '$12,000+/mo Target',
    highlight: 'Highest Demand Retainers',
  },
};

export const Sidebar: React.FC<SidebarProps> = ({
  branches,
  activeViewId,
  activeBranchId,
  onSelectView,
  onSelectBranch,
  completedTasks,
  isOpenMobile,
  onCloseMobile,
}) => {
  const currentActiveId = activeViewId ?? activeBranchId ?? 'onboarding-mindset';

  const handleSelect = (id: string) => {
    if (onSelectView) {
      onSelectView(id);
    } else if (onSelectBranch) {
      onSelectBranch(id);
    }
    if (isOpenMobile) onCloseMobile();
  };

  const getBranchCompletion = (branch: PlaybookBranch) => {
    const allBranchTaskIds = branch.lessons.flatMap((l) => l.tasks.map((t) => t.id));
    if (allBranchTaskIds.length === 0) return 0;
    const completedInBranch = allBranchTaskIds.filter((id) => completedTasks[id]).length;
    return Math.round((completedInBranch / allBranchTaskIds.length) * 100);
  };

  const isMindsetActive = currentActiveId === 'onboarding-mindset';
  const isVehiclesActive = currentActiveId === 'onboarding-vehicles';

  // Dynamic global tasks progress
  const allTasks = branches.flatMap((b) => b.lessons.flatMap((l) => l.tasks));
  const totalTasks = allTasks.length || 85;
  const completedCount = allTasks.filter((t) => completedTasks[t.id]).length;
  const globalPercentage = Math.round((completedCount / totalTasks) * 100);

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#0D0F18] border-r border-white/[0.12] w-72 lg:w-72 select-none">
      {/* ── Sidebar Header ─────────────────────────────── */}
      <div className="p-4 sm:p-5 border-b border-white/[0.10] shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-[#D4F84C]/40 flex items-center justify-center text-[#D4F84C] shadow-sm shadow-[#D4F84C]/10">
              <Zap className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-white tracking-wider uppercase">
                Playbook Branches
              </h2>
              <p className="text-[11px] text-zinc-400 font-medium">Choose your wealth vehicle</p>
            </div>
          </div>
          {isOpenMobile && (
            <button
              onClick={onCloseMobile}
              className="lg:hidden p-1.5 rounded-lg bg-white/10 text-zinc-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* ── Scrollable Navigation Container ────────────── */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-3.5 space-y-5">

        {/* ════════════════════════════════════════════════
            SECTION A: "PHASE 0: FOUNDATION & ONBOARDING"
        ════════════════════════════════════════════════ */}
        <div className="space-y-2">
          <div className="px-2 pb-1 flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold tracking-wider text-amber-300 uppercase">
              Phase 0: Foundation &amp; Onboarding
            </span>
            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
              PINNED
            </span>
          </div>

          {/* Item 00: The Winner's Mindset */}
          <button
            onClick={() => handleSelect('onboarding-mindset')}
            className={`w-full text-left rounded-2xl p-3.5 transition-all duration-200 border group ${
              isMindsetActive
                ? 'bg-[#D4F84C]/15 border-[#D4F84C]/60 text-white shadow-md shadow-[#D4F84C]/5'
                : 'bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06] hover:border-white/20 text-zinc-300'
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                  isMindsetActive
                    ? 'bg-[#D4F84C] text-black shadow-sm'
                    : 'bg-amber-500/15 text-amber-400 border border-amber-500/20 group-hover:scale-105'
                }`}
              >
                <Flame className="w-4 h-4 fill-current" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    00
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30">
                    START HERE
                  </span>
                </div>

                <h3
                  className={`text-sm font-bold mt-1 truncate ${
                    isMindsetActive ? 'text-white' : 'text-zinc-100 group-hover:text-white'
                  }`}
                >
                  The Winner's Mindset
                </h3>

                <p className="text-[11px] text-zinc-400 truncate mt-0.5 font-medium">
                  4 Modules • Non-Negotiable
                </p>
              </div>

              <ChevronRight
                className={`w-4 h-4 mt-2 shrink-0 transition-transform ${
                  isMindsetActive ? 'text-white translate-x-0.5' : 'text-zinc-500 group-hover:text-zinc-300'
                }`}
              />
            </div>
          </button>

          {/* Item 00.5: Why These 5 Vehicles? */}
          <button
            onClick={() => handleSelect('onboarding-vehicles')}
            className={`w-full text-left rounded-2xl p-3.5 transition-all duration-200 border group ${
              isVehiclesActive
                ? 'bg-[#34D399]/15 border-[#34D399]/60 text-white shadow-md shadow-[#34D399]/5'
                : 'bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06] hover:border-white/20 text-zinc-300'
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                  isVehiclesActive
                    ? 'bg-[#34D399] text-black shadow-sm'
                    : 'bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/20 group-hover:scale-105'
                }`}
              >
                <Compass className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-mono font-bold text-[#34D399]">
                    00.5
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30">
                    STRATEGY
                  </span>
                </div>

                <h3
                  className={`text-sm font-bold mt-1 truncate ${
                    isVehiclesActive ? 'text-white' : 'text-zinc-100 group-hover:text-white'
                  }`}
                >
                  Why These 5 Vehicles?
                </h3>

                <p className="text-[11px] text-zinc-400 truncate mt-0.5 font-medium">
                  2 Modules • The Math &amp; Leverage
                </p>
              </div>

              <ChevronRight
                className={`w-4 h-4 mt-2 shrink-0 transition-transform ${
                  isVehiclesActive ? 'text-white translate-x-0.5' : 'text-zinc-500 group-hover:text-zinc-300'
                }`}
              />
            </div>
          </button>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION B: "PHASE 1: THE 5 PROFIT ENGINES"
        ════════════════════════════════════════════════ */}
        <div className="space-y-2 pt-2 border-t border-white/[0.08]">
          <div className="px-2 pb-1 flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold tracking-wider text-zinc-300 uppercase">
              Phase 1: The 5 Profit Engines
            </span>
            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/[0.06] text-zinc-400">
              17-PAGE TRACKS
            </span>
          </div>

          {branches.map((branch, index) => {
            const Icon = iconMap[branch.iconName] || Briefcase;
            const isActive = branch.id === currentActiveId;
            const progress = getBranchCompletion(branch);
            const sub = branchSubtitleMap[branch.id] || {
              target: branch.earningPotential.split('–')[0].trim() + '+/mo Target',
              highlight: branch.badge,
            };

            const themeStyles = {
              lime: {
                activeBg: 'bg-[#D4F84C]/15 border-[#D4F84C]/50 text-white',
                iconBg: 'bg-[#D4F84C] text-black',
                badgeColor: 'text-[#D4F84C] bg-[#D4F84C]/15 border-[#D4F84C]/40',
                barColor: 'bg-[#D4F84C]',
              },
              coral: {
                activeBg: 'bg-[#FF5733]/15 border-[#FF5733]/50 text-white',
                iconBg: 'bg-[#FF5733] text-white',
                badgeColor: 'text-[#FF5733] bg-[#FF5733]/15 border-[#FF5733]/40',
                barColor: 'bg-[#FF5733]',
              },
              yellow: {
                activeBg: 'bg-[#FACC15]/15 border-[#FACC15]/50 text-white',
                iconBg: 'bg-[#FACC15] text-black',
                badgeColor: 'text-[#FACC15] bg-[#FACC15]/15 border-[#FACC15]/40',
                barColor: 'bg-[#FACC15]',
              },
              lavender: {
                activeBg: 'bg-[#A8A4CE]/15 border-[#A8A4CE]/50 text-white',
                iconBg: 'bg-[#A8A4CE] text-black',
                badgeColor: 'text-[#C5C2E8] bg-[#A8A4CE]/15 border-[#A8A4CE]/40',
                barColor: 'bg-[#A8A4CE]',
              },
              mint: {
                activeBg: 'bg-[#34D399]/15 border-[#34D399]/50 text-white',
                iconBg: 'bg-[#34D399] text-black',
                badgeColor: 'text-[#34D399] bg-[#34D399]/15 border-[#34D399]/40',
                barColor: 'bg-[#34D399]',
              },
            }[branch.themeColor];

            return (
              <button
                key={branch.id}
                onClick={() => handleSelect(branch.id)}
                className={`w-full text-left rounded-2xl p-3.5 transition-all duration-200 border group ${
                  isActive
                    ? `${themeStyles.activeBg} shadow-md`
                    : 'bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06] hover:border-white/20 text-zinc-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                      isActive ? themeStyles.iconBg : 'bg-white/[0.08] text-zinc-300 group-hover:scale-105 group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-mono font-bold text-zinc-400">
                        0{index + 1}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${themeStyles.badgeColor}`}
                      >
                        {sub.target}
                      </span>
                    </div>

                    <h3
                      className={`text-sm font-bold mt-1 truncate ${
                        isActive ? 'text-white' : 'text-zinc-100 group-hover:text-white'
                      }`}
                    >
                      {branch.shortName}
                    </h3>

                    <p className="text-[11px] text-zinc-400 truncate mt-0.5 font-medium">
                      {sub.highlight}
                    </p>

                    <div className="mt-2.5 flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-white/[0.10] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${themeStyles.barColor}`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono font-semibold text-zinc-400 shrink-0">
                        {progress}%
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 mt-2 shrink-0 transition-transform ${
                      isActive ? 'text-white translate-x-0.5' : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Sidebar Footer: Member Status & Dynamic Progress Tracker ── */}
      <div className="p-4 border-t border-white/[0.12] bg-[#0A0C14] shrink-0 space-y-3">
        {/* Member Status Card */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#D4F84C] flex items-center justify-center font-black text-black text-xs shrink-0 shadow-sm shadow-[#D4F84C]/20">
            EXEC
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-white truncate">Founder Member</span>
              <Award className="w-3.5 h-3.5 text-[#D4F84C] shrink-0" />
            </div>
            <p className="text-[11px] font-medium text-zinc-400 truncate">Lifetime Access Pass</p>
          </div>
        </div>

        {/* Dynamic Global Task Progress Bar */}
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-zinc-400">Progress:</span>
            <span className="text-white font-bold">
              {completedCount}/{totalTasks} Tasks ({globalPercentage}%)
            </span>
          </div>

          <div className="h-2 bg-white/[0.08] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#D4F84C] to-[#34D399] rounded-full transition-all duration-500"
              style={{ width: `${Math.max(5, globalPercentage)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:block shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-hidden">
        {sidebarContent}
      </aside>

      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="relative z-10 flex-1 max-w-xs w-full shadow-2xl">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
