'use client';

import React from 'react';
import Image from 'next/image';
import {
  Search,
  Sparkles,
  Calculator,
  Volume2,
  CheckCircle2,
  Menu,
} from 'lucide-react';

interface HeaderProps {
  completedCount: number;
  totalTasks: number;
  onOpenSearch: () => void;
  onOpenCalculator: () => void;
  onToggleAudio: () => void;
  isAudioPlaying: boolean;
  onToggleMobileSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  completedCount,
  totalTasks,
  onOpenSearch,
  onOpenCalculator,
  onToggleAudio,
  isAudioPlaying,
  onToggleMobileSidebar,
}) => {
  const completionPercentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.15] bg-[#08090E] px-4 sm:px-6 lg:px-8 py-3">
      <div className="flex items-center justify-between gap-4">

        {/* ── Left: Mobile toggle + Logo + Brand ───────── */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMobileSidebar}
            aria-label="Open Navigation Menu"
            className="lg:hidden p-2 rounded-xl bg-white/[0.08] border border-white/15 text-white hover:bg-white/15 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            {/* Logo image — white bg pill so the bird shows on dark header */}
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Image
                src="/logo.jpg"
                alt="TFP — The Freedom Playbook logo"
                width={40}
                height={40}
                className="object-contain w-full h-full"
                priority
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white">
                  The Freedom Playbook
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold tracking-wide px-2.5 py-0.5 rounded-full bg-[#D4F84C]/15 border border-[#D4F84C]/40 text-[#D4F84C]">
                  <Sparkles className="w-3.5 h-3.5" /> LIFETIME ACCESS
                </span>
              </div>
              <p className="text-xs text-zinc-400 hidden md:block font-medium">
                Direct Execution Blueprints &amp; Freedom Operating System
              </p>
            </div>
          </div>
        </div>

        {/* ── Right: Actions + Progress ─────────────────── */}
        <div className="flex items-center gap-2.5 sm:gap-3">

          {/* Search */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-2 sm:px-3.5 rounded-xl bg-[#141724] border border-white/20 text-white hover:border-white/40 hover:bg-[#1A1F30] transition-all text-xs font-semibold"
          >
            <Search className="w-4 h-4 text-zinc-300" />
            <span className="hidden sm:inline">Search playbook, scripts, tools...</span>
            <span className="inline sm:hidden">Search</span>
            <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-xs font-mono bg-zinc-800 text-white border border-zinc-600 font-bold">
              ⌘K
            </kbd>
          </button>

          {/* Calculator */}
          <button
            onClick={onOpenCalculator}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141724] border border-white/20 text-white hover:text-[#D4F84C] hover:border-[#D4F84C]/50 hover:bg-[#D4F84C]/10 transition-all text-xs font-semibold"
            title="Launch Monthly Run-Rate Calculator"
          >
            <Calculator className="w-4 h-4 text-[#D4F84C]" />
            <span className="hidden lg:inline">Run-Rate Calc</span>
          </button>

          {/* Audio Briefing */}
          <button
            onClick={onToggleAudio}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-semibold transition-all ${
              isAudioPlaying
                ? 'bg-[#FF5733]/25 border-[#FF5733]/60 text-white'
                : 'bg-[#141724] border-white/20 text-white hover:bg-[#1A1F30]'
            }`}
            title="Audio Briefing Player"
          >
            <Volume2 className="w-4 h-4" />
            <span className="hidden xl:inline">
              {isAudioPlaying ? 'Playing Briefing' : 'Audio Briefing'}
            </span>
          </button>

          {/* Progress Pill */}
          <div className="flex items-center gap-2 pl-1 sm:pl-2">
            <div className="hidden sm:flex flex-col items-end text-right">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Progress</span>
              <span className="text-xs font-bold text-white">{completedCount}/{totalTasks} Tasks</span>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-[#141724] border border-white/20 flex items-center gap-1.5 text-xs font-bold text-white">
              <CheckCircle2
                className={`w-4 h-4 ${completionPercentage > 0 ? 'text-[#D4F84C]' : 'text-zinc-400'}`}
              />
              <span className={completionPercentage > 0 ? 'text-[#D4F84C]' : 'text-white'}>
                {completionPercentage}%
              </span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
