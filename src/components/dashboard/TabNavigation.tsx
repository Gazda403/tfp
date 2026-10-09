'use client';

import React from 'react';
import {
  BookOpen,
  KeyRound,
  Layers,
  PackageOpen,
  FileText,
} from 'lucide-react';

export type SectionTab = 'playbook17' | 'breakdown' | 'lessons' | 'vault' | 'assets' | 'tools';

interface TabNavigationProps {
  activeTab: SectionTab;
  onTabChange: (tab: SectionTab) => void;
  vaultCount: number;
  toolsCount: number;
  assetsCount: number;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
  vaultCount,
  toolsCount,
  assetsCount,
}) => {
  const tabs = [
    {
      id: 'playbook17' as SectionTab,
      label: '17-Page Execution Reader',
      sublabel: 'Market, Economics & 10 Steps',
      icon: BookOpen,
      badge: '17 Detailed Pages',
    },
    {
      id: 'vault' as SectionTab,
      label: 'Plug-and-Play Vault',
      sublabel: 'Copy-Paste Scripts & Prompts',
      icon: KeyRound,
      badge: `${vaultCount} Assets`,
    },
    {
      id: 'assets' as SectionTab,
      label: 'Executable Assets',
      sublabel: 'Digital Products to Ship',
      icon: PackageOpen,
      badge: `${assetsCount} Products`,
      isNew: true,
    },
    {
      id: 'tools' as SectionTab,
      label: 'Tools & Stack',
      sublabel: 'Battle-Tested Software',
      icon: Layers,
      badge: `${toolsCount} Tools`,
    },
  ];

  return (
    <nav
      className="grid gap-2.5 w-full grid-cols-2 lg:grid-cols-4"
      aria-label="Section Tabs"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-start p-3.5 rounded-2xl text-left transition-all relative ${
              isActive
                ? 'bg-[#151928] text-white shadow-md border-2 border-[#D4F84C]/60'
                : 'bg-[#10131E] border border-white/[0.12] text-zinc-300 hover:text-white hover:bg-white/[0.06] hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between w-full mb-2">
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  isActive
                    ? 'bg-[#D4F84C] text-black font-bold'
                    : 'bg-white/[0.08] text-zinc-300'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>

              <div className="flex items-center gap-1.5">
                {tab.isNew && (
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                    NEW
                  </span>
                )}
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                    isActive
                      ? 'bg-[#D4F84C]/15 text-[#D4F84C] border-[#D4F84C]/40'
                      : 'bg-white/[0.06] text-zinc-400 border-white/10'
                  }`}
                >
                  {tab.badge}
                </span>
              </div>
            </div>

            <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
              {tab.label}
            </div>
            <div className="text-[11px] text-zinc-400 truncate mt-0.5 font-medium">
              {tab.sublabel}
            </div>

            {isActive && (
              <div className="absolute -bottom-[2px] left-4 right-4 h-0.5 bg-[#D4F84C] rounded-full" />
            )}
          </button>
        );
      })}
    </nav>
  );
};
